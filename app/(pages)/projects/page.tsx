import Nav from "@/app/components/Nav";
import ProductList from "@/app/components/ProductList";
import Link from "next/link";
import { categories } from "../../data/projects";

export default function page() {
  const items = [
    {
      imageUrl: "/knittedSweater.webp",
      category: "Sweaters",
      name: "Item 1",
      price: 2000,
    },
    {
      imageUrl: "/babyClothes.webp",
      category: "Baby Clothes",
      name: "Item 2",
      price: 1000,
    },
    {
      imageUrl: "/knittedScarf.webp",
      category: "Scarfs",
      name: "Item 3",
      price: 1900,
    },
    {
      imageUrl: "/knittedHat.webp",
      category: "Hats",
      name: "Item 4",
      price: 16900,
    },
    {
      imageUrl: "/knittedSweater.webp",
      category: "Sweaters",
      name: "Item 1",
      price: 2000,
    },
    {
      imageUrl: "/babyClothes.webp",
      category: "Baby Clothes",
      name: "Item 2",
      price: 1000,
    },
    {
      imageUrl: "/knittedScarf.webp",
      category: "Scarfs",
      name: "Item 3",
      price: 1900,
    },
    {
      imageUrl: "/knittedHat.webp",
      category: "Hats",
      name: "Item 4",
      price: 16900,
    },
  ];

  return (
    <>
      <Nav />
      {console.log(categories)}

      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto h-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link key={category} href={`/projects/${category}`}>
                <div className="border p-4 flex flex-col items-center">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/*      <ProductList items={items} />
       */}
    </>
  );
}
