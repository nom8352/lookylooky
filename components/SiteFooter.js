import Link from "next/link";

const blogLinks = [
  {
    href: "https://www.lookylooky.com.au/adrian-just-turned-100-days-old/",
    label: "Adrian Just Turned 100 days old!",
  },
  {
    href: "https://www.lookylooky.com.au/gangmins-baby-photos/",
    label: "Gangmin's Baby Photos",
  },
  {
    href: "https://www.lookylooky.com.au/baby-lyns-newborn-photos/",
    label: "Baby Lyn's Newborn Photos",
  },
];

const footerImages = [
  "/assets/footer-1.jpg",
  "/assets/footer-2.jpg",
  "/assets/footer-3.jpg",
  "/assets/footer-4.jpg",
  "/assets/footer-5.jpg",
  "/assets/footer-6.jpg",
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>About Us</h3>
          <p>
            Capturing the beauty of life, from your pregnancy and moments with
            your newborn, to every precious year of life with your kids. Enjoy
            the experience of a professional photo-shoot.
          </p>
          <img className="qr-code" src="/assets/qr.gif" alt="QR code" />
        </section>

        <section>
          <h3>Recent Blogs</h3>
          <ul className="footer-links">
            {blogLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Gallery</h3>
          <div className="footer-gallery">
            {footerImages.map((image) => (
              <img key={image} src={image} alt="" />
            ))}
          </div>
        </section>
      </div>

      <div className="container footer-bottom">
        <div className="social-links">
          <a
            href="https://www.facebook.com/lookylookystudio"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            f
          </a>
          <a
            href="https://www.google.com/+LookyLookyPhotographyGladesville"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Plus"
          >
            g+
          </a>
          <a
            href="http://instagram.com/lookylooky.sydney"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            ig
          </a>
        </div>
        <p>©2018 lookylooky Baby Photography. All Rights Reserved.</p>
        <p>
          Newborn photography Sydney | Maternity photography Sydney | Baby
          photography Sydney | Family photography Sydney | Party photography
          Sydney
        </p>
        <p>Unit 22, 33-37 College st, Gladesville, NSW 2111, Australia</p>
        <Link href="/contact-us" className="button-link footer-cta">
          Contact Us
        </Link>
      </div>
    </footer>
  );
}
