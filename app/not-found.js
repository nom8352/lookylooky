import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container section-gap-lg">
      <div className="content-card prose-block center-copy">
        <h1>Page not found</h1>
        <p>The page you are looking for is not part of this recreated site yet.</p>
        <Link href="/" className="button-link">
          Return Home
        </Link>
      </div>
    </section>
  );
}
