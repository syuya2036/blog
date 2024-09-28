"use client";

import { ProjectCard } from "@/components/project-card";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/images/project-1.jpg",
    title: "Go Language Backend Internship",
    desc: "I interned at OPTiM Corporation for backend development using Go language.",
  },
  {
    img: "/images/project-2.jpg",
    title:
      "National Competition of the National Institute of Technology Programming Contest",
    desc: "We participated in the national competition in the competitive category of the 35th Kosen Programming Contest.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Work
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Introduction of Previous Projects
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
