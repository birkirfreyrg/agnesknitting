import AboutMe from "@/app/components/AboutMe";
import Nav from "@/app/components/Nav";
import { AboutpageItem } from "@/types";

async function fetchAboutpageItems(): Promise<AboutpageItem[]> {
  try {
    const res = await fetch("http://localhost:3000/api/aboutpage", {
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
  const aboutpageItems = await fetchAboutpageItems();

  return (
    <>
      <Nav />
      <AboutMe items={aboutpageItems} />
    </>
  );
}
