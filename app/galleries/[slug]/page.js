import { notFound } from "next/navigation";
import { PageHero } from "../../../components/PageHero";
import { GalleryLightbox } from "../../../components/GalleryLightbox";
import { galleryCategories } from "../../../data/siteData";
import { buildGalleryMetadata } from "../../../data/seo";

export function generateStaticParams() {
  return galleryCategories.map((gallery) => ({ slug: gallery.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const gallery = galleryCategories.find((item) => item.slug === slug);
  if (!gallery) {
    return {};
  }

  return buildGalleryMetadata(gallery);
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
          <p>{gallery.longDescription}</p>
          <p className="gallery-counter">Original gallery images: {gallery.images.length}</p>
        </div>
      </section>

      <section className="container section-gap">
        <GalleryLightbox images={gallery.images} />
      </section>
    </>
  );
}
