import { OffersTabs } from "../../components/OffersTabs";
import { PageHero } from "../../components/PageHero";
import { promotionalOffers } from "../../data/siteData";

export const metadata = {
  title: "Promotional Offers | LookyLooky Photography",
};

export default function PromotionalOffersPage() {
  return (
    <>
      <PageHero
        image="/assets/offer-special.jpg"
        alt="Promotional offers"
        title="Promotional Offers"
        subtitle="Special event, free maternity, vintage 100 days, and group discount offers"
        compact
      />

      <section className="container section-gap">
        <div className="promotional-shell">
          <div className="content-card promotional-intro">
            <h1>Promotional Offers</h1>
            <p>Original-inspired promotional tabs recreated from the source site.</p>
          </div>
          <OffersTabs items={promotionalOffers} />
        </div>
      </section>
    </>
  );
}
