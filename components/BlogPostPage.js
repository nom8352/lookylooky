import Link from "next/link";
import { PageHero } from "./PageHero";

export function BlogPostPage({ post, allPosts }) {
  const previousPost = post.previousSlug
    ? allPosts.find((entry) => entry.slug === post.previousSlug)
    : null;
  const nextPost = post.nextSlug
    ? allPosts.find((entry) => entry.slug === post.nextSlug)
    : null;

  return (
    <>
      <PageHero image={post.image ?? "/assets/about-hero.jpg"} alt={post.imageAlt ?? post.title} title={post.title} subtitle="Blog" compact />

      <section className="container section-gap blog-detail-shell">
        <article className="content-card blog-detail-card">
          <p className="blog-category">Blog</p>
          <p className="blog-meta">
            {post.date} by {post.author}
          </p>

          <div className="blog-detail-copy" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <nav className="blog-post-nav">
          {previousPost ? (
            <Link href={`/${previousPost.slug}`} className="content-card blog-post-nav-card">
              <span>Previous Post</span>
              <strong>{previousPost.title}</strong>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link href={`/${nextPost.slug}`} className="content-card blog-post-nav-card align-right">
              <span>Next Post</span>
              <strong>{nextPost.title}</strong>
            </Link>
          ) : <div />}
        </nav>
      </section>
    </>
  );
}
