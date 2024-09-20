import Nav from "@/app/components/Nav";
import { ProjectspageItem } from "@/types";
import Projects from "@/app/components/Projects";

async function fetchProjectspageItems(): Promise<ProjectspageItem[]> {
  try {
    const res = await fetch("http://localhost:3000/api/projectspage", {
      cache: "no-store", // Ensure data is fetched on every request
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Something went wrong");
  }
}

export default async function page() {
  const projectspageItem = await fetchProjectspageItems();

  return (
    <>
      <Nav />
      <Projects items={projectspageItem} />
    </>
  );
}
