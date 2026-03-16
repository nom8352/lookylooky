import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { FaqAccordion } from "../components/FaqAccordion";
import {
  galleryCategories,
  homeFaqs,
  promoCards,
  serviceHighlights,
} from "../data/siteData";

export const metadata = {
  title: "Newborn photography Sydney | Baby photography Sydney | baby photo",
  description:
    "LookyLooky Photography Studio Sydney home page recreated in Next.js with local imagery and original-inspired content.",
};

export default function HomePage() {
  return (
    <>
      <PageHero image="/assets/hero.jpg" alt="LookyLooky home hero" />

      <section className="container promo-grid section-gap">
        {promoCards.map((card) => (
          <Link key={card.title} className="promo-card" href={card.href}>
            <img src={card.image} alt={card.title} />
          </Link>
        ))}
      </section>

      <section className="container intro section-gap-lg">
        <h1 className="script-heading">Your Baby&apos;s Smiles Can Last Forever</h1>
        <p className="eyebrow">Natural Light Baby Photo Studio LOOKYLOOKY</p>
        <p className="lead">
          We are dedicated professional photographers specializing in capturing
          the precious moments of your baby&apos;s life from pregnancy, to birth,
          and beyond. At LookyLooky Photography Studio Sydney, we consider it a
          privilege and an honour to document those treasured early years.
        </p>
        <p className="lead">
          We are committed to preserving the beauty of these moments through
          photography, so that you can cherish the memories of your pregnancy,
          your first moments with your newborn, and every wonderful milestone
          over the years to come.
        </p>
      </section>

      <section className="container feature-grid section-gap">
        <div className="feature-frame">
          <img src="/assets/home-feature.jpg" alt="Newborn photography feature" />
        </div>
        <div className="content-card prose-block">
          <h2>Newborn Photography to Capture the Special Moments of Life</h2>
          <p>
            Newborn photography is an art because your young baby is too young
            to understand instructions on the best poses or facial expressions.
            The key is to wait for those natural moments that can be captured
            forever on film.
          </p>
          <p>
            Our newborn photography Sydney specialists guide each session with a
            calm, child-friendly approach so the result still feels soft,
            natural, and timeless.
          </p>
        </div>
      </section>

      <section className="container section-gap" id="gallery">
        <div className="gallery-grid">
          {galleryCategories.map((gallery) => (
            <Link key={gallery.slug} href={`/galleries/${gallery.slug}`} className="gallery-tile">
              <img src={gallery.coverImage} alt={gallery.title} />
              <div className="gallery-tile-body">
                <h3>{gallery.title}</h3>
                <p>{gallery.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container content-card section-gap" id="services">
        <h2 className="center-title">
          What Services Do We Offer
          <br />
          At Our Baby Photography Sydney Studio?
        </h2>
        <div className="two-column-copy">
          {serviceHighlights.map((item) => (
            <p key={item.slice(0, 30)}>{item}</p>
          ))}
        </div>
        <blockquote>
          “We also offer a range of costumes and props so you don&apos;t need to
          bring anything to the studio, unless it&apos;s your child&apos;s favourite
          toy. We have over 250 outfits for your little one to wear, and over
          300 items for your kids to enjoy.”
        </blockquote>
      </section>

      <section className="container section-gap-lg">
        <FaqAccordion items={homeFaqs} />
      </section>
    </>
  );
}
