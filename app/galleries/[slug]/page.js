import { notFound } from "next/navigation";
import { PageHero } from "../../../components/PageHero";
import { galleryCategories } from "../../../data/siteData";

export function generateStaticParams() {
  return galleryCategories.map((gallery) => ({ slug: gallery.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const gallery = galleryCategories.find((item) => item.slug === slug);
  if (!gallery) {
    return {};
  }

  return {
    title: `${gallery.title} | LookyLooky Photography`,
    description: gallery.description,
  };
}

export default async function GalleryDetailPage({ params }) {
  const { slug } = await params;
  const gallery = galleryCategories.find((item) => item.slug === slug);

  if (!gallery) {
    notFound();
  }

  return (
    <>
      <PageHero
        image={gallery.coverImage}
        alt={gallery.title}
        title={gallery.title}
        subtitle={gallery.description}
        compact
      />

      <section className="container section-gap">
        <div className="content-card prose-block gallery-intro-card">
          <h2 className="caption-header">{gallery.title}</h2>
          <p>{gallery.longDescription}</p>
          <p className="gallery-counter">Original gallery images: {gallery.images.length}</p>
        </div>
      </section>

      <section className="container section-gap">
        <div className="wall-grid">
          {gallery.images.map((image, index) => (
            <figure key={image.src + index} className="wall-entry">
              <a className="wall-thumbnail" href={image.href ?? image.src} target="_blank" rel="noreferrer">
                <img src={image.src} alt={image.alt} />
                <span className="wall-mask">
                  <span className="wall-mask-icon">+</span>
                </span>
              </a>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
