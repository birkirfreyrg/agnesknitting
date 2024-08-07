"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";

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
    <div className="flex flex-wrap">
      {formData.map((item, index) => (
        <div key={item._id} className="flex flex-wrap w-1/2 mb-2">
          <div className="flex flex-col w-full border p-2">
            <label className="flex flex-col">
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
              <input
                type="text"
                value={item.imageUrl}
                onChange={(e) =>
                  handleInputChange(index, "imageUrl", e.target.value)
                }
                className="border p-1"
                required
              />
            </label>
            <label className="flex flex-col">
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
            <button
              onClick={() => handleSubmit(index)}
              className="mt-2 p-2 bg-blue-500 text-white w-1/4"
            >
              Submit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
