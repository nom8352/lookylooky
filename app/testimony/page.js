import { PageHero } from "../../components/PageHero";
import { testimonies } from "../../data/contentPages";

export const metadata = {
  title: "Testimony | Photography Sydney",
};

export default function TestimonyPage() {
  return (
    <>
      <PageHero image="/assets/about-hero.jpg" alt="Testimony" title="Testimony" subtitle="Photography Sydney" compact />

      <section className="container section-gap">
        <div className="content-card prose-block">
          <h1>Testimony</h1>
          <div className="testimony-list">
            {testimonies.map((item) => (
              <blockquote key={item}>{item}</blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
