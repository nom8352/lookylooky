export function PageHero({ image, alt, title, subtitle, compact = false }) {
  if (compact && (title || subtitle)) {
    return (
      <section className="page-caption">
        <div className="container page-caption-inner">
          {title ? <h1>{title}</h1> : null}
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </section>
    );
  }

  return (
    <section className={`page-hero ${compact ? "compact" : ""}`}>
      <img src={image} alt={alt} />
      {(title || subtitle) && (
        <div className="page-hero-overlay">
          <div className="container">
            {title ? <h1>{title}</h1> : null}
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        </div>
      )}
    </section>
  );
}
