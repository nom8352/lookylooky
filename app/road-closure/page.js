import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "Road Closure - Lookylooky photography",
};

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
