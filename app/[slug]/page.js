import { notFound } from "next/navigation";
import { BlogPostPage } from "../../components/BlogPostPage";
import { blogPosts, getBlogPostBySlug } from "../../data/blogData";
import { buildBlogPostMetadata } from "../../data/seo";

const reservedSlugs = new Set([
  "about-us",
  "blog",
  "contact-us",
  "faq-2",
  "promotional-offers",
  "road-closure",
  "service-prices-sydney",
  "testimony",
  "galleries",
  "robots.txt",
  "sitemap.xml",
  "sitemap_index.xml",
  "google1d1f9519007d03b7.html",
  "google74e09a153613447a.html",
  "googlec55f39c83e73f3a3.html",
  "naverc318db9102355e901320316145b3d0d0.html",
  "pinterest-ef4e7.html",
]);

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {};
  }
  return buildBlogPostMetadata(post);
}

export default async function RootBlogPostPage({ params }) {
  const { slug } = await params;
  if (reservedSlugs.has(slug)) {
    notFound();
  }
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <BlogPostPage post={post} allPosts={blogPosts} />;
}
