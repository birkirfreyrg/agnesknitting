// pages/api/updateItem.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/db";

interface RequestBody {
  _id: string;
  name: string;
  imageUrl: string;
  linkUrl: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  const { _id, name, imageUrl, linkUrl }: RequestBody = req.body;

  if (!_id || !name || !imageUrl || !linkUrl) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("agnes_data");
    const collection = db.collection("frontpage");

    const result = await collection.updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          name,
          imageUrl,
          linkUrl,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    console.error("Internal server error:", error);
    res
      .status(500)
      .json({
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
}
