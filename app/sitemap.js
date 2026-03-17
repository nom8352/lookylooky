export const dynamic = "force-static";

import { blogPosts } from "../data/blogData";
import { galleryCategories } from "../data/siteData";
import { pricePages } from "../data/contentPages";
import { siteUrl } from "../data/seo";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about-us",
    "/blog",
    "/contact-us",
    "/faq-2",
    "/promotional-offers",
    "/road-closure",
    "/service-prices-sydney",
    "/testimony",
  ];

  const items = staticRoutes.map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified: new Date("2026-03-17"),
  }));

  for (const post of blogPosts) {
    items.push({
      url: `${siteUrl}/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
    });
  }

  for (const gallery of galleryCategories) {
    items.push({
      url: `${siteUrl}/galleries/${gallery.slug}`,
      lastModified: new Date("2026-03-17"),
    });
  }

  for (const slug of Object.keys(pricePages)) {
    items.push({
      url: `${siteUrl}/service-prices-sydney/${slug}`,
      lastModified: new Date("2026-03-17"),
    });
  }

  return items;
}
