// app/page.tsx
import FeaturedItem from "./components/FeaturedItem";
import { FrontpageItem } from "../types";
import Nav from "./components/Nav";

async function fetchFrontpageItems(): Promise<FrontpageItem[]> {
  try {
    const res = await fetch("http://localhost:3000/api/frontpage");
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

const Home: React.FC = async () => {
  const frontpageItems = await fetchFrontpageItems();

  return (
    <div>
      <Nav />
      <FeaturedItem items={frontpageItems} />
    </div>
  );
};

export default Home;
