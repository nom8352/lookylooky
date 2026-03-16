"use client";

import Link from "next/link";
import { useState } from "react";

export function OffersTabs({ items }) {
  const [active, setActive] = useState(items[0]?.title ?? "");
  const current = items.find((item) => item.title === active) ?? items[0];

  return (
    <div className="offers-tabs">
      <div className="offers-tab-list" role="tablist" aria-label="Promotional offers tabs">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            className={item.title === current.title ? "active" : ""}
            onClick={() => setActive(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="content-card offers-tab-panel">
        {current.title === "Special Event" ? (
          <img src={current.image} alt={current.title} className="offer-poster" />
        ) : null}

        {current.title === "Free Maternity" ? (
          <div className="offer-hero-message">
            <h3>Free Maternity</h3>
            <div className="offer-banner-note">This event end for now</div>
          </div>
        ) : null}

        {current.title === "Vintage 100days Shooting" ? (
          <div className="offer-single-image">
            <h3>{current.title}</h3>
            <img src={current.image} alt={current.title} className="offer-poster" />
          </div>
        ) : null}

        {current.title === "Group Discount" ? (
          <div className="offer-group-layout">
            <h3>Group Discount</h3>
            <div className="offer-banner-note">Get 10% off. When you book more than 5 moms together.</div>
            <div className="offer-detail-grid">
              <div>
                <h4>How?</h4>
                <ol>
                  {current.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h4>What?</h4>
                <ul>
                  <li>Discount for all members.</li>
                </ul>
                <Link href={current.cta.href} className="button-link">
                  {current.cta.label}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
