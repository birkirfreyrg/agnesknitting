import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/db";
import { ObjectId } from "mongodb";

// Handle GET requests for frontpage collection
export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("agnes_data");
    const frontpage = await db.collection("frontpage").find({}).toArray();

    return NextResponse.json(frontpage, { status: 200 });
  } catch (e) {
    console.error("GET request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle POST requests for frontpage collection
export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("agnes_data");
    const body = await req.json();

    const { name, imageUrl, linkUrl } = body;

    // Validate required fields
    if (!name || !imageUrl || !linkUrl) {
      console.error("Missing required fields:", { name, imageUrl, linkUrl });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newFrontpageItem = {
      name,
      imageUrl,
      linkUrl,
      createdAt: new Date(),
    };

    console.log("Inserting new frontpage item:", newFrontpageItem);

    const result = await db.collection("frontpage").insertOne(newFrontpageItem);
    console.log("Insert result:", result);

    const insertedFrontpageItem = await db
      .collection("frontpage")
      .findOne({ _id: result.insertedId });

    console.log("Inserted frontpage item:", insertedFrontpageItem);

    return NextResponse.json(insertedFrontpageItem, { status: 201 });
  } catch (e) {
    console.error("POST request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle DELETE requests for frontpage collection
export async function DELETE(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("agnes_data");
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing required id parameter" },
        { status: 400 }
      );
    }

    const result = await db
      .collection("frontpage")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "No document found with that id" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Document deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error("DELETE request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle PATCH requests for frontpage collection
export async function PATCH(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("agnes_data");
    const body = await req.json();
    const { id, ...updateFields } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Missing required id parameter" },
        { status: 400 }
      );
    }

    const result = await db
      .collection("frontpage")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateFields });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "No document found with that id" },
        { status: 404 }
      );
    }

    const updatedFrontpageItem = await db
      .collection("frontpage")
      .findOne({ _id: new ObjectId(id) });

    return NextResponse.json(updatedFrontpageItem, { status: 200 });
  } catch (e) {
    console.error("PATCH request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
