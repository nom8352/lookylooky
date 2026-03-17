import { OffersTabs } from "../../components/OffersTabs";
import { PageHero } from "../../components/PageHero";
import { promotionalOffers } from "../../data/siteData";
import { staticPageSeo } from "../../data/seo";

export const metadata = staticPageSeo.promotionalOffers;

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
