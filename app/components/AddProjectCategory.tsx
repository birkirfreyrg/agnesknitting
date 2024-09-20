import React, { useState } from "react";

// The function that sends the POST request
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
    console.log("Project added successfully:", data);
  } else {
    console.error("Error adding project:", data.error);
  }
}

// The form component
const AddProjectCategory = () => {
  // State variables to track the form values
  const [name, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [linkUrl, setLinkUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Call the addProject function
    try {
      await addProject(name, imageUrl, linkUrl);
      alert("Project added successfully!");
      // Optionally reset the form after submission
      setName("");
      setImageUrl("");
      setLinkUrl("");
    } catch (error) {
      console.error("Error while adding project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap w-full h-auto mb-2">
      <div className="flex flex-col w-full border p-2">
        <p className="text-xl py-2 flex justify-center items-center">
          Create new category
        </p>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="flex flex-col " htmlFor="name">
              Project Category:
            </label>
            <input
              type="text"
              id="name"
              className="border p-1 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="flex flex-col" htmlFor="imageUrl">
              Image URL:
            </label>
            <input
              type="text"
              id="imageUrl"
              className="border p-1 w-full"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="flex flex-col" htmlFor="linkUrl">
              Link URL:
            </label>
            <input
              type="text"
              id="linkUrl"
              className="border p-1 w-full"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className=" mt-2 p-2 bg-blue-600 rounded-sm text-white w-1/3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectCategory;
