import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

const getCategoryProjects = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const filteredProjects = getCategoryProjects(category);

  if (filteredProjects.length === 0) {
    notFound();
  }

  const categoryStr = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <Nav />
      <div className="bg-white min-h-screen py-10">
        <div className=" mx-auto bg-white p-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            {categoryStr} Projects
          </h1>
          {filteredProjects.length > 0 ? (
            <div className="flex flex-wrap -mx-2 my-4">
              {filteredProjects.map((project) => (
                <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                  <div className="border p-4 flex flex-col items-center rounded-lg shadow-md">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      width={150}
                      height={150}
                      className="object-cover"
                    />
                    <h3 className="mt-2 text-xl font-semibold">
                      {project.name}
                    </h3>
                    <p className="text-center">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No projects found in this category.</p>
          )}
          <div className="mt-8 text-center">
            <Link href="/projects">
              <div className="text-black underline">Back to Projects</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
