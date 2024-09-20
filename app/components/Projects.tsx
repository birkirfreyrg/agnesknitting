import Image from "next/image";
import Link from "next/link";
import { ProjectspageItem } from "../../types";

interface ProjectsItemProps {
  items: ProjectspageItem[];
}

const Projects = ({ items }: ProjectsItemProps) => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className=" mx-auto h-auto bg-white p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <Link
                key={item.id || index}
                href={`/projects/${item.name.toLowerCase()}`}
              >
                <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden cursor-pointer">
                  <Image
                    src={item.imageUrl}
                    alt={item.name || "Project image"}
                    fill
                    style={{ objectFit: "cover" }} // For Next.js 13+
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-3xl lg:hover:text-5xl lg:hover:bg-opacity-15 duration-1000">
                    <span className="text-white font-semibold">
                      {item.name
                        ? item.name.charAt(0).toUpperCase() + item.name.slice(1)
                        : "Unknown"}
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
};

export default Projects;
