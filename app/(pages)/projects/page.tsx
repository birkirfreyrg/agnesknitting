import Nav from "@/app/components/Nav";
import ProductList from "@/app/components/ProductList";

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
      <ProductList items={items} />
    </>
  );
}
