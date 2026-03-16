import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "About Us | LookyLooky Photography",
};

const studioColumns = [
  {
    title: "The studio specialized in children (30+ built-in themes)",
    body: [
      "Our photo studio in Sydney records every stage of your pregnancy, your newborn's early weeks, through the toddler years and right through your children's growing years.",
      "Because the studio specializes in children, we always have multiple themes prepared and ready to shoot in any weather. You can keep the session simple with a coloured paper backdrop or choose one of our styled natural and garden-inspired sets.",
      "Our Sydney baby photography team works together to catch different facial expressions and genuine moments rather than forcing poses.",
    ],
  },
  {
    title: "A variety of costumes and props are ready",
    body: [
      "Please leave the details to us. The studio keeps a large wardrobe of baby costumes and a broad collection of props prepared for sessions.",
      "We continue to refresh costumes and styling items for trend-conscious families, and we can help you pair outfits and themes if the choices feel overwhelming.",
      "If you discover another theme you love, you can always book a future session to capture a new look as your child grows.",
    ],
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        image="/assets/about-hero.jpg"
        alt="About LookyLooky studio"
        title="Lookylooky studio is...."
        subtitle="Established in 2011"
        compact
      />

      <section className="container section-gap about-story">
        <div className="content-card prose-block center-copy about-intro-card">
          <h1 className="caption-header">Lookylooky studio is....</h1>
          <h2 className="subtitle-heading">Established in 2011</h2>
          <p>
            All about capturing the beauty of life, from your pregnancy and special moments with your newborn, to every precious year of life with your kids. Enjoy the experience of a professional photo-shoot with your loved ones and keep the memories to cherish forever.
          </p>
          <p>
            Imagine in the years ahead how you can look back and ponder on these fun and delightful memories. Your baby or child will only be that age once, so it is important to capture every stage of life and share those memories with your friends, family, and colleagues.
          </p>
          <p>
            Photographs make the best gift, and can be framed or made into posters. When you are older, you will cherish your photographs and family memories far more than the clutter you have accumulated over the years.
          </p>
        </div>

        <div className="profile-image about-profile-image">
          <img src="/assets/about-profile.png" alt="LookyLooky profile illustration" />
        </div>

        <div className="feature-columns">
          {studioColumns.map((column) => (
            <article key={column.title} className="column-card about-column-card">
              <h3>{column.title}</h3>
              {column.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <div className="content-card prose-block center-copy child-friendly-block">
          <h3>Child-friendly photographers</h3>
          <blockquote>
            Our photographers in Sydney have their own children and they know exactly how to create the perfect mood to encourage your child to smile and have fun. Please leave it to us to create the most memorable photographs of your baby, child, or entire family together.
          </blockquote>
        </div>
      </section>
    </>
  );
}
