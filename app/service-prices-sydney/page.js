import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { priceNavItems } from "../../data/contentPages";
import { staticPageSeo } from "../../data/seo";

export const metadata = staticPageSeo.prices;

export default function ServicePricesIndexPage() {
  return (
    <>
      <PageHero
        image="/assets/about-hero.jpg"
        alt="Service and prices"
        title="Service & Prices"
        subtitle="Photography Sydney"
        compact
      />

      <section className="container section-gap">
        <div className="content-card prose-block center-copy">
          <p>
            Check out unique collection of Service &amp; Prices for the Photography.
            Prices includes GST. Frame can be altered charging with difference.
            Frame ratio can be changed by photo ratio for best looking.
          </p>
        </div>
      </section>

      <section className="container section-gap">
        <div className="price-links-grid">
          {priceNavItems.map((item) => (
            <Link key={item.slug} href={`/service-prices-sydney/${item.slug}`} className="content-card price-link-card">
              <h2>{item.label}</h2>
              <p>Open original pricing details</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
