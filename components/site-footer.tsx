import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full text-center">
      <hr className="" />
      <div className="container mx-auto my-8">
        <div className="mb-2">
          <Link
            href={siteConfig.links.github}
            className="mx-2 transition-colors hover:text-primary text-foreground/60"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
          <Link
            href={siteConfig.links.X}
            className="mx-2 transition-colors hover:text-primary text-foreground/60"
            target="_blank"
            rel="noreferrer"
          >
            X
          </Link>
          <Link
            href={siteConfig.links.instagram}
            className="mx-2 transition-colors hover:text-primary text-foreground/60"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </Link>
        </div>
        <p className="text-sm">&copy; 2024 - Yantan Tech.</p>
      </div>
    </footer>
  );
}
