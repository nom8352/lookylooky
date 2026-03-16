"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "../data/siteData";

function NavLink({ item, className, onClick }) {
  if (item.external) {
    return (
      <a href={item.href} className={className} onClick={onClick} target="_blank" rel="noreferrer">
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

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
              const isInternalActive = !item.external && (pathname === item.href || pathname.startsWith(`${item.href}/`));
              const isChildActive = item.children?.some(
                (child) => !child.external && (pathname === child.href || pathname.startsWith(`${child.href}/`)),
              );
              const isActive = isInternalActive || isChildActive;

              return (
                <li key={item.label} className={item.children?.length ? "has-submenu" : undefined}>
                  <NavLink
                    item={item}
                    className={isActive ? "active" : ""}
                    onClick={() => setOpen(false)}
                  />
                  {item.children?.length ? (
                    <div className="submenu">
                      {item.children.map((child) => {
                        const childActive = !child.external && pathname === child.href;

                        return (
                          <NavLink
                            key={`${item.label}-${child.label}`}
                            item={child}
                            className={childActive ? "active" : ""}
                            onClick={() => setOpen(false)}
                          />
                        );
                      })}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
