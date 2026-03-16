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
        <div className="content-card prose-block">
          <p>{gallery.longDescription}</p>
        </div>
      </section>

      <section className="container section-gap">
        <div className="masonry-grid">
          {gallery.images.map((image, index) => (
            <figure key={image.src + index} className="masonry-item">
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
