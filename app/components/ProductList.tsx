import Image from "next/image";
import React from "react";

interface Item {
  imageUrl: string;
  category: string;
  name: string;
  price: number;
}

// Define the Props type
interface ProductListProps {
  items: Item[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="flex flex-wrap items-center justify-between w-4/5 gap-2 ">
        {items.map((item, index) => (
          <div key={index} className="border p-4 flex flex-col items-center">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={150}
              height={150}
              className="object-cover h-full w-full"
            />
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ${(item.price / 100).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
