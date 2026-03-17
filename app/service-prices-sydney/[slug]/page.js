import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../../components/PageHero";
import { priceNavItems, pricePages } from "../../../data/contentPages";
import { pricePageSeo, staticPageSeo } from "../../../data/seo";

export function generateStaticParams() {
  return Object.keys(pricePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pricePages[slug];

  if (!page) {
    return staticPageSeo.prices;
  }

  return pricePageSeo[slug] ?? { title: page.title };
}

export default async function ServicePriceDetailPage({ params }) {
  const { slug } = await params;
  const page = pricePages[slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero
        image={page.posterOnly ?? page.media?.[0] ?? "/assets/about-hero.jpg"}
        alt={page.heroTitle}
        title={page.heroTitle}
        subtitle={page.subtitle ?? "Service & Prices"}
        compact
      />

      <section className="container section-gap">
        <nav className="price-subnav">
          {priceNavItems.map((item) => (
            <Link
              key={item.slug}
              href={`/service-prices-sydney/${item.slug}`}
              className={item.slug === slug ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </section>

      {page.posterOnly ? (
        <section className="container section-gap">
          <div className="content-card poster-card">
            <img src={page.posterOnly} alt={page.heroTitle} />
          </div>
        </section>
      ) : (
        <>
          <section className="container section-gap price-sections">
            {page.sections.map((section) => (
              <div key={section.title} className="content-card price-section-card">
                <h2>{section.title}</h2>
                {section.note ? <p className="price-note">{section.note}</p> : null}
                <div className="price-cards-grid">
                  {section.packages.map((pkg) => (
                    <article key={`${section.title}-${pkg.name}`} className="price-card">
                      <h3>{pkg.name}</h3>
                      <div className="price-amount">{pkg.price}</div>
                      <ul>
                        {pkg.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <Link href="/contact-us" className="button-link">
                        Contact Us
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {page.media?.length ? (
            <section className="container section-gap">
              <div className="price-media-grid">
                {page.media.map((image) => (
                  <div key={image} className="content-card price-media-card">
                    <img src={image} alt={page.heroTitle} />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {page.columns ? (
            <section className="container section-gap">
              <div className="content-card prose-block">
                <div className="two-column-copy">
                  {page.columns.map((column, columnIndex) => (
                    <div key={columnIndex}>
                      {column.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ))}
                </div>
                {page.quote ? <blockquote>{page.quote}</blockquote> : null}
              </div>
            </section>
          ) : null}
        </>
      )}
    </>
  );
}
