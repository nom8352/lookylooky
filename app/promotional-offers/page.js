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
        subtitle="Promotional Offers"
        compact
      />

      <section className="container section-gap">
        <div className="promotional-shell">
          <OffersTabs items={promotionalOffers} />
        </div>
      </section>
    </>
  );
}
