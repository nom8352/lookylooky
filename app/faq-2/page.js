import { FaqAccordion } from "../../components/FaqAccordion";
import { PageHero } from "../../components/PageHero";
import { faqCategories } from "../../data/siteData";

export const metadata = {
  title: "FAQ | LookyLooky Photography",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        image="/assets/promo-1.jpg"
        alt="FAQ hero"
        title="FAQ"
        subtitle="Booking, shooting, family sessions, products, pets, and location details"
        compact
      />

      <section className="container section-gap faq-page">
        {faqCategories.map((category) => (
          <div key={category.title} className="faq-category">
            <h2>{category.title}</h2>
            <FaqAccordion items={category.items} />
          </div>
        ))}
      </section>
    </>
  );
}
