import "./globals.css";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = {
  title: "LookyLooky Photography",
  description:
    "Newborn photography Sydney, baby photography Sydney, maternity and family photography recreated as a Next.js site.",
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
