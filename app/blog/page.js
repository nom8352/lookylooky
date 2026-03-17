import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { blogPosts } from "../../data/contentPages";
import { staticPageSeo } from "../../data/seo";

export const metadata = staticPageSeo.blog;

export default function BlogPage() {
  return (
    <>
      <PageHero image="/assets/about-hero.jpg" alt="Blog" title="Blog" subtitle="Best Photography Ideas" compact />

      <section className="container section-gap blog-list">
        {blogPosts.map((post) => (
          <article key={post.slug} id={post.slug} className="content-card blog-card">
            <Link href={`/blog/${post.slug}`} className="blog-card-image">
              <img src={post.image} alt={post.title} />
            </Link>
            <p className="blog-category">{post.category}</p>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="blog-meta">
              {post.date} by {post.author}
            </p>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="button-link">
              Read More
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
