import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/db";
import { ObjectId } from "mongodb";

// Handle GET requests for projectspage collection
export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("agnes_data");
    const projectspage = await db.collection("projectspage").find({}).toArray();

    return NextResponse.json(projectspage, { status: 200 });
  } catch (e) {
    console.error("GET request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle POST requests for projectspage collection
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

    const newProjectspageItem = {
      name,
      imageUrl,
      linkUrl,
      createdAt: new Date(),
    };

    const result = await db
      .collection("projectspage")
      .insertOne(newProjectspageItem);
    const insertedProjectspageItem = await db
      .collection("projectspage")
      .findOne({ _id: result.insertedId });

    return NextResponse.json(insertedProjectspageItem, { status: 201 });
  } catch (e) {
    console.error("POST request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle DELETE requests for projectspage collection
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
      .collection("projectspage")
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

// Handle PUT requests for projectspage collection
export async function PUT(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("agnes_data");
    const body = await req.json();
    const { _id, ...updateFields } = body; // Make sure to extract _id

    if (!_id) {
      return NextResponse.json(
        { error: "Missing required id parameter" },
        { status: 400 }
      );
    }

    const result = await db
      .collection("projectspage")
      .updateOne({ _id: new ObjectId(_id) }, { $set: updateFields });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "No document found with that id" },
        { status: 404 }
      );
    }

    const updatedProjectspageItem = await db
      .collection("projectspage")
      .findOne({ _id: new ObjectId(_id) });

    return NextResponse.json(
      { message: "Item updated successfully", item: updatedProjectspageItem },
      { status: 200 }
    );
  } catch (e) {
    console.error("PUT request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
