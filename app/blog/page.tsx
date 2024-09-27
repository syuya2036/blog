import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";

const POST_PER_PAGE = 10;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const curPage = Number(searchParams?.page) || 1;
  const sortedPost = sortPosts(posts.filter((post) => post.published));
  const totalPage = Math.ceil(sortedPost.length / POST_PER_PAGE);

  const displayPosts = sortedPost.slice(
    POST_PER_PAGE * (curPage - 1),
    POST_PER_PAGE * curPage
  );
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col item-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Welcome to the my blog.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, title, description, date } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  title={title}
                  description={description}
                  date={date}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
      <QueryPagination
        totalPages={totalPage}
        className="justify-end mt-4"
      ></QueryPagination>
    </div>
  );
}
