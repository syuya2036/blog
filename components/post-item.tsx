import { formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface PostItemProos {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProos) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-5">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">
        <Link href={slug}>{description}</Link>
      </div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">公開日</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
      </div>
    </article>
  );
}
