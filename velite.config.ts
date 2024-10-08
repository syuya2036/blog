import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkMath from 'remark-math';
import { defineCollection, defineConfig, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
	...data,
	slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
	name: "Post",
	pattern: "blog/**/*.mdx",
	schema: s.object({
		slug: s.path(),
		title: s.string().max(99),
		description: s.string().max(999).optional(),
		date: s.isodate(),
		published: s.boolean().default(true),
		body: s.mdx(),
	}).transform(computedFields),
});

export default defineConfig({
	root: "content",
	output: {
		data: ".velite",
		assets: "public/static",
		base: "/static/",
		name: "[name]-[hash:6].[ext]",
		clean: true,
	},
	collections: { posts },
	mdx: {
		rehypePlugins: [
			rehypeKatex,
			[rehypePrettyCode, {
				theme: "github-dark",
			}], rehypeSlug, [rehypeAutolinkHeadings, {
				behavior: "wrap",
				properties: {
					className: ["subheading-anchor"],
				},
				ariaLabel: "Link to section",
			}
			],
			[rehypeToc, {
				cssClasses: {
					toc: "toc",
					link: "toc-link",
					list: "toc-list",
				}
			}]
		],
		remarkPlugins: [remarkMath,],
	},
});
