"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Upload from "./Upload"; // Import the Upload component

interface FormData {
  _id: string;
  name: string;
  imageUrl: string;
  linkUrl: string;
}

export default function UpdateItemForm() {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/frontpage");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormData(data);
        setLoading(false);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (
    index: number,
    field: keyof FormData,
    value: string
  ) => {
    const newFormData = [...formData];
    newFormData[index] = { ...newFormData[index], [field]: value };
    setFormData(newFormData);
  };

  const handleImageUpload = (index: number, imageUrl: string) => {
    // Now handleImageUpload knows the index
    console.log("Image uploaded:", imageUrl);
    handleInputChange(index, "imageUrl", imageUrl); // Updating the correct item
  };

  const handleSubmit = async (index: number) => {
    const item = formData[index];
    try {
      const response = await fetch("/api/frontpage", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error:", errorText);
        alert(`Error: ${errorText}`);
      } else {
        const result = await response.json();
        alert(result.message || "Item updated successfully");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`Network error: ${error.message}`);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-2 gap-2">
      {formData.map((item, index) => (
        <div key={item._id} className="w-full">
          <div className="flex flex-col w-full border p-2">
            <label className="hidden">
              Item ID:
              <input
                type="text"
                value={item._id}
                onChange={(e) =>
                  handleInputChange(index, "_id", e.target.value)
                }
                className="border p-1"
                required
                readOnly
              />
            </label>
            <label className="flex flex-col">
              Name:
              <input
                type="text"
                value={item.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                className="border p-1"
                required
              />
            </label>
            <label className="flex flex-col">
              Image URL:
              <Upload
                onUpload={(imageUrl) => handleImageUpload(index, imageUrl)}
              />
            </label>
            <label className="hidden">
              Link URL:
              <input
                type="text"
                value={item.linkUrl}
                onChange={(e) =>
                  handleInputChange(index, "linkUrl", e.target.value)
                }
                className="border p-1"
                required
              />
            </label>
            <div className="flex justify-center">
              <button
                onClick={() => handleSubmit(index)}
                className=" mt-2 p-2 bg-blue-600 rounded-sm text-white w-1/3"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
