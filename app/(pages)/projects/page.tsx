import Nav from "@/app/components/Nav";
import Link from "next/link";
import { categories } from "../../data/projects";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Nav />
      <div className="bg-white min-h-screen py-10">
        <div className=" mx-auto h-auto bg-white p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/projects/${category.name}`}>
                <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden cursor-pointer">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {category.name.charAt(0).toUpperCase() +
                        category.name.slice(1)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
