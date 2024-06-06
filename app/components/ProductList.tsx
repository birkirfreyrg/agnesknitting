import React from "react";

interface ItemListProps {
  items: string[];
}

const ProductList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap -mx-2 p-4">
      {items.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <div className="p-4 bg-gray-100 rounded-lg text-center">{item}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
