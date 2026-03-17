import "./globals.css";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { defaultMetadata, siteUrl } from "../data/seo";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "#website",
  url: `${siteUrl}/`,
  name: "Lookylooky photography",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...defaultMetadata,
  icons: {
    icon: "/logo_lookylooky.png",
    shortcut: "/logo_lookylooky.png",
    apple: "/logo_lookylooky.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="iQY4xoNMyAaZWgoh_VtbTrckq2mp27DEOjQ7qDIB7kw" />
        <meta name="google-site-verification" content="o2fQ286mNpb19cClG16_BVLd8GMj66JtDdVSDEXEBek" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Gladesville" />
        <meta name="geo.position" content="-33.82014;151.122673" />
        <meta name="ICBM" content="-33.82014, 151.122673" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <div className="frame frame-top" />
        <div className="frame frame-right" />
        <div className="frame frame-bottom" />
        <div className="frame frame-left" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
