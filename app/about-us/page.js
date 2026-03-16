import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "About Us | LookyLooky Photography",
};

const studioColumns = [
  {
    title: "The studio specialized in children (30+ built-in themes)",
    body: [
      "Our photo studio in Sydney will photographically record every stage of your pregnancy, to your newborn's early weeks, through the toddler years and right through each of your children's years.",
      "Since our photo studio specializes in children, we also have various kinds of themes ready to shoot at the Sydney studio at any time, or in any type of weather. You do not need to bring anything but your loved ones. We have 15 different themes for you to choose from, including simple coloured backgrounds and natural-feeling scenes.",
      "Our baby expert photographers in Sydney work together to catch your loved one's different facial expressions and preserve them naturally.",
    ],
  },
  {
    title: "A variety of costumes and props are ready",
    body: [
      "Do not worry about how to dress your child or what to bring if you book a shooting at LookyLooky Photo Studio in Sydney.",
      "Please leave the details to us. Our photo studio has over 250 costumes for your youngster and over 300 different props on offer. There are nearly limitless options for fun and unique photos of your child.",
      "We continue to upgrade our costumes and props for trend-conscious customers, and we can also assist in choosing the right costumes for the right theme if the choices feel overwhelming.",
      "You can always book another date for a future photoshoot if you discover more costumes, props, or themes that you want to try with your child.",
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
            Imagine in the years ahead how you can look back and ponder on these fun and delightful memories. Your baby or child will only be that age once, so it is important to capture every stage of life. Share your memories with your friends, family, and colleagues.
          </p>
          <p>
            Photographs make the best gift, and can be framed or made into posters, and more. When you are older, you will cherish your photographs and family memories rather than clutter you have accumulated over the years.
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
            <p>
              Our photographers in Sydney have their own children and they know exactly how to create the perfect mood to encourage your child to smile and have fun. They can capture your child on film experiencing a variety of different emotions and expressions.
            </p>
            <p>
              These can also be reflected in the cute costumes or themes available. Please leave it to us, the photo experts in Sydney, to create the most memorable photographs of your baby, child, or entire family together.
            </p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
