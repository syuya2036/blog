import { Icons } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import "../styles/hero.css";

interface HeroProps {
  title: string;
  description: string;
  body: string;
}

export default function Hero({ title, description, body }: HeroProps) {
  return (
    <div className="hero text-center h-[70vh] flex flex-col flex-center justify-center ">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
      <p className="text-xl md:text-2xl mb-4">{description}</p>
      <p className="text-gray-400 mb-6">{body}</p>
      <div className="flex justify-center gap-5 z-40">
        <Button asChild>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Icons.gitHub className="h-4 w-4" />
            <span>Github</span>
          </Link>
        </Button>
        <Button asChild variant="outline" className="bg-white bg-opacity-60 dark:bg-opacity-0 dark:border-gray-400 border-2">
          <Link
            href={siteConfig.links.techBlog}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Icons.openNew className="h-4 w-4" />
            <span>Tech Blog</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
