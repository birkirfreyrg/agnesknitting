import Nav from "@/app/components/Nav";
import ProductList from "@/app/components/ProductList";

export default function page() {
  return (
    <>
      <Nav />
      <ProductList items={["Sweaters", "Baby Clothes", "Scarfs", "Hats"]} />
    </>
  );
}
