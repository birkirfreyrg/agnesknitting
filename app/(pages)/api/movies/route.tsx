import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/db";

// Handle GET requests
export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(movies, { status: 200 });
  } catch (e) {
    console.error("GET request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const body = await req.json();

    console.log("Received body:", body);

    const { title, year, director, metacritic } = body;

    // Validate required fields
    if (!title || !year || !director || metacritic === undefined) {
      console.error("Missing required fields:", {
        title,
        year,
        director,
        metacritic,
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newMovie = {
      title,
      year,
      director,
      metacritic,
      createdAt: new Date(),
    };

    console.log("Inserting new movie:", newMovie);

    const result = await db.collection("movies").insertOne(newMovie);
    console.log("Insert result:", result);

    const insertedMovie = await db
      .collection("movies")
      .findOne({ _id: result.insertedId });

    console.log("Inserted movie:", insertedMovie);

    return NextResponse.json(insertedMovie, { status: 201 });
  } catch (e) {
    console.error("POST request error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
