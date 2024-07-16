// app/components/FeaturedItem.tsx
import Image from "next/image";
import Link from "next/link";
import { FrontpageItem } from "../../types";

interface FeaturedItemProps {
  items: FrontpageItem[];
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4 px-52">
      {items.map((item, index) => (
        <div key={index} className="relative h-full w-full">
          <Link
            href={item.linkUrl}
            className="hover-parent h-full flex items-center"
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={150}
              height={150}
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 text-4xl lg:hover:text-7xl lg:hover:bg-opacity-10 duration-1000">
              <h3 className="text-white font-bold">{item.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedItem;
