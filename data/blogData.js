import { generatedBlogPosts } from "./generatedBlogPosts";

export const blogPosts = generatedBlogPosts;

export const recentBlogLinks = generatedBlogPosts.slice(0, 3).map((post) => ({
  href: `/blog/${post.slug}`,
  label: post.title,
}));

export function getBlogPostBySlug(slug) {
  return generatedBlogPosts.find((post) => post.slug === slug);
}
