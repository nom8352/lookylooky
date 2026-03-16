"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { galleryCategories, primaryNav } from "../data/siteData";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container top-strip">
        <Link className="logo" href="/">
          <img src="/assets/logo.png" alt="LookyLooky logo" />
        </Link>

        <div className="header-actions">
          <a
            className="facebook-like"
            href="https://www.facebook.com/lookylookystudio"
            target="_blank"
            rel="noreferrer"
          >
            Like on Facebook
          </a>
          <a
            className="naver-link"
            href="http://cafe.naver.com/lookylooky"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/naver.gif" alt="Naver Cafe" />
          </a>
          <button
            className="mobile-toggle"
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`main-nav ${open ? "open" : ""}`}>
        <div className="container nav-shell">
          <ul>
            {primaryNav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="has-submenu">
              <span className={pathname.startsWith("/galleries/") ? "active" : ""}>Gallery</span>
              <div className="submenu">
                {galleryCategories.map((gallery) => (
                  <Link
                    key={gallery.slug}
                    href={`/galleries/${gallery.slug}`}
                    className={pathname === `/galleries/${gallery.slug}` ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {gallery.title}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
