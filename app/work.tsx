import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../components/ui/button";

const ORGANIZATIONS = [
  {
    name: "Imanect",
    role: "Lead Engineer",
    description: (
      <>
        As an IT venture from &quot;National Institute of Technology, Ichinoseki
        College&quot;, we are promoting IT in Tohoku by utilizing cutting-edge
        technology and abundant creativity. The company is mainly engaged in
        solving problems of local companies using IT technology.
      </>
    ),
    url: "https://site.imanect.com",
  },
  {
    name: "Atlas Online",
    role: "Engineer",
    description: (
      <>
        We provide web production services, data-driven marketing support, and
        AI application services to assist our clients with technology.
      </>
    ),
    url: "https://www.atlas-online.space",
  },
  {
    name: "NITIC",
    role: "Student",
    description: (
      <>
        I belong to the Division of Computer Engineering and Informatics of
        National Institute of Technology, Ichinoseki College, where I conduct
        research on cryptography theory. I belong to the Systems Research
        Department and participate in various projects.
      </>
    ),
    url: "https://www.ichinoseki.ac.jp",
  },
];

export default function Work() {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            My affiliation
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Here are some of the organisations I currently belong to.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {ORGANIZATIONS.map((organization, idx) => (
            <div
              className="space-y-4 flex flex-col items-center justify-between"
              key={idx}
            >
              <div>
                <span
                  className={cn(
                    " text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded",
                    idx === 2
                      ? "bg-sky-400"
                      : "bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  )}
                >
                  {organization.name}
                </span>
                <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white my-4">
                  {organization.role}
                </h3>
                <p className="text-base break-normal font-all text-gray-500 dark:text-gray-400">
                  {organization.description}
                </p>
              </div>
              <Button asChild size="sm">
                <Link
                  href={organization.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Website →</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
