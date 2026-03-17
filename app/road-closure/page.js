import { PageHero } from "../../components/PageHero";
import { staticPageSeo } from "../../data/seo";

export const metadata = staticPageSeo.roadClosure;

export default function RoadClosurePage() {
  return (
    <>
      <PageHero image="/assets/original-prices/road.jpg" alt="Road Closure" title="Road Closure" subtitle="Road Closure" compact />

      <section className="container section-gap">
        <div className="content-card poster-card">
          <img src="/assets/original-prices/road.jpg" alt="Road closure notice" />
        </div>
      </section>
    </>
  );
}
