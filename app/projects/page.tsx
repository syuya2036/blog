import { Icons } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="text-center h-[90vh] flex flex-col flex-center justify-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Coming Soon!</h1>
      <p className="text-xl md:text-2xl mb-4">
        Developing...
      </p>
      <p className="text-gray-400 mb-6">
        Stay tuned for updates. Follow us on social media for more info.
      </p>
      <div className="flex justify-center">
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
      </div>
    </div>
  );
}
