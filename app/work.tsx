import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../components/ui/button";

const ORGANIZATIONS = [
  {
    name: "Imanect",
    role: "Lead Engineer",
    description: (
      <>
        一関高専発ITベンチャーとして先端技術と豊かな発想力を生かし、東北のIT化を進めています。
        主にIT技術を用いた地域企業の課題解決 に取り組んでいます。
      </>
    ),
    url: "https://site.imanect.com",
  },
  {
    name: "Atlas Online",
    role: "Engineer",
    description: (
      <>
        Web制作サービス、データを駆使したマーケティング支援、AIアプリケーションサービスを提供し、技術を駆使してお客様を支援しています。
      </>
    ),
    url: "https://www.atlas-online.space",
  },
  {
    name: "NITIC",
    role: "Student",
    description: (
      <>
        一関高専の情報・ソフトウェア系に所属し、暗号理論の研究を行っています。
        システム研究部に所属し、さまざまなプロジェクトに参加しています。
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
            <div className="space-y-4" key={idx}>
              <span
                className={cn(
                  " text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  ",
                  idx === 2
                    ? "bg-sky-400"
                    : "bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                )}
              >
                {organization.name}
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                {organization.role}
              </h3>
              <p className="text-base break-normal font-all text-gray-500 dark:text-gray-400">
                {organization.description}
              </p>
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
