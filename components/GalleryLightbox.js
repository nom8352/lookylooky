"use client";

import { useEffect, useState } from "react";

export function GalleryLightbox({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="wall-grid">
        {images.map((image, index) => (
          <figure key={image.src + index} className="wall-entry">
            <button className="wall-thumbnail wall-button" type="button" onClick={() => setActiveIndex(index)}>
              <img src={image.src} alt={image.alt} />
              <span className="wall-mask">
                <span className="wall-mask-icon">+</span>
              </span>
            </button>
          </figure>
        ))}
      </div>

      {activeImage ? (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" onClick={() => setActiveIndex(null)}>
          <button className="lightbox-close" type="button" aria-label="Close image" onClick={() => setActiveIndex(null)}>
            x
          </button>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.href ?? activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      ) : null}
    </>
  );
}
