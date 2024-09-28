"use client";

import { ProjectCard } from "@/components/project-card";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/images/project-1.jpg",
    title: "Go言語バックエンドインターン",
    desc: "株式会社オプティムでGo言語を使ったバックエンド開発のインターンを行いました。",
  },
  {
    img: "/images/project-2.jpg",
    title: "高専プロコン 全国大会",
    desc: "第35回高専プロコンの競技部門で全国大会に出場しました。",
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
          これまでのプロジェクトを紹介します。
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
