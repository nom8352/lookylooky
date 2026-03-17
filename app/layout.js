import "./globals.css";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { defaultMetadata, siteUrl } from "../data/seo";

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...defaultMetadata,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
