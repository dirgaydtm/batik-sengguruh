import GlowOrb from "@/shared/components/GlowOrb";
import { blogData } from "@/assets/asset-data";
import { BlogCards } from "../components/BlogCards";
import { BlogTypo } from "../components/BlogTypo";
import { fetchBlogPosts } from "../lib/fetchLinkMeta";

export default async function BlogContainer() {
  const posts = await fetchBlogPosts(blogData.feedUrl, blogData.maxPosts);
  return (
    <section id="blog" className="relative flex flex-col items-center justify-center w-full py-24">
      <GlowOrb className="top-10 -left-20" />
      <BlogTypo
        title={blogData.title}
        subtitle={blogData.subtitle}
        className="mb-12"
      />

      <BlogCards posts={posts} seeMoreLink={blogData.seeMoreLink} />
    </section>
  );
}
