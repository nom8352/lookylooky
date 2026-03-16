"use client";

import { useState } from "react";

export function FaqAccordion({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.question ?? null);

  return (
    <div className="faq-list">
      {items.map((item) => {
        const isOpen = activeId === item.question;

        return (
          <div key={item.question} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setActiveId(isOpen ? null : item.question)}
            >
              {item.question}
            </button>
            <div className="faq-answer">
              {item.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
