import { generatedBlogPosts } from "./generatedBlogPosts";

export const blogPosts = generatedBlogPosts;

export const recentBlogLinks = [
  { href: "/adrian-just-turned-100-days-old", label: "Adrian Just Turned 100 days old!" },
  { href: "/gangmins-baby-photos", label: "Gangmin's Baby Photos" },
  { href: "/baby-lyns-newborn-photos", label: "Baby Lyn's Newborn Photos" },
];

export function getBlogPostBySlug(slug) {
  return generatedBlogPosts.find((post) => post.slug === slug);
}
