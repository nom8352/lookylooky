import "./globals.css";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { defaultMetadata, siteUrl } from "../data/seo";

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
