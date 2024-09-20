"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Upload from "./Upload"; // Import the Upload component
import AddProjectCategory from "./AddProjectCategory";

interface FormData {
  _id: string;
  name: string;
  imageUrl: string;
  linkUrl: string;
}
interface DeleteResponse {
  message?: string;
  error?: string;
}

export default function UpdateItemForm() {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projectspage");
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

  async function deleteProject(id: string): Promise<void> {
    try {
      const response = await fetch(`/api/projectspage?id=${id}`, {
        method: "DELETE",
      });

      // Define the expected shape of the response data
      const data: DeleteResponse = await response.json();

      if (response.ok) {
        console.log("Project category deleted successfully:", data.message);
      } else {
        console.error("Error deleting project category:", data.error);
      }
    } catch (error) {
      console.error(
        "An error occurred while deleting the project category:",
        error
      );
    }
  }

  async function addProject(name: string, imageUrl: string, linkUrl: string) {
    const response = await fetch("/api/projectspage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, imageUrl, linkUrl }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Project category added successfully:", data);
    } else {
      console.error("Error adding project category:", data.error);
    }
  }

  function handleDeleteClick(id: string): void {
    deleteProject(id)
      .then(() => {
        console.log("Project deleted");
        window.location.reload();
      })
      .catch((err: Error) => console.error("Error:", err));
  }

  const handleSubmit = async (index: number) => {
    const item = formData[index];
    try {
      const response = await fetch("/api/projectspage", {
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
        <div key={item._id} className=" mb-2">
          <div className="flex flex-col h-full w-full border p-2">
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

            <label className=" ">
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
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => handleSubmit(index)}
                className=" mt-2 p-2 bg-blue-600 rounded-sm text-white w-1/3"
              >
                Submit
              </button>
              <button
                onClick={() => handleDeleteClick(item._id)}
                className=" mt-2 p-2 bg-red-600 rounded-sm text-white w-1/3"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <AddProjectCategory />
    </div>
  );
}
