import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../../components/PageHero";
import { blogPosts } from "../../../data/contentPages";
import { buildBlogPostMetadata, staticPageSeo } from "../../../data/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return staticPageSeo.blog;
  }

  return buildBlogPostMetadata(post);
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const previousPost = post.previousSlug ? blogPosts.find((entry) => entry.slug === post.previousSlug) : null;
  const nextPost = post.nextSlug ? blogPosts.find((entry) => entry.slug === post.nextSlug) : null;

  return (
    <>
      <PageHero image={post.image} alt={post.title} title={post.title} subtitle={post.category} compact />

      <section className="container section-gap blog-detail-shell">
        <article className="content-card blog-detail-card">
          <p className="blog-category">{post.category}</p>
          <p className="blog-meta">
            {post.date} by {post.author}
          </p>

          <div className="blog-detail-image">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="blog-detail-copy">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {post.gallery?.length ? (
            <div className="blog-detail-gallery">
              {post.gallery.map((image) => (
                <img key={image} src={image} alt={post.title} />
              ))}
            </div>
          ) : null}
        </article>

        <nav className="blog-post-nav">
          {previousPost ? (
            <Link href={`/blog/${previousPost.slug}`} className="content-card blog-post-nav-card">
              <span>Previous Post</span>
              <strong>{previousPost.title}</strong>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className="content-card blog-post-nav-card align-right">
              <span>Next Post</span>
              <strong>{nextPost.title}</strong>
            </Link>
          ) : <div />}
        </nav>
      </section>
    </>
  );
}
