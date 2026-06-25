import { blogData } from "@/assets/asset-data";
import { BlogCards } from "../components/BlogCards";
import { BlogTypo } from "../components/BlogTypo";
import { fetchLinkMeta } from "../lib/fetchLinkMeta";

export default async function BlogContainer() {
  const posts = await fetchLinkMeta(blogData.links);
  return (
    <section id="blog" className="relative flex flex-col items-center justify-center w-full py-24 overflow-hidden">
      <BlogTypo
        title={blogData.title}
        subtitle={blogData.subtitle}
        className="mb-12"
      />

      <BlogCards posts={posts} seeMoreLink={blogData.seeMoreLink} />
    </section>
  );
}
