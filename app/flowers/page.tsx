import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Tiny Bear With a Big Message",
  description: "A shy little teddy has brought flowers and something to say.",
  openGraph: {
    title: "A Tiny Bear With a Big Message",
    description: "A shy little teddy has brought flowers and something to say.",
    images: [],
  },
  twitter: {
    title: "A Tiny Bear With a Big Message",
    description: "A shy little teddy has brought flowers and something to say.",
    images: [],
  },
};

export default function FlowersPage() {
  return (
    <main className="story-page flowers-page">
      <section className="story-card teddy-card" aria-labelledby="teddy-title">
        <div className="teddy-visual">
          <span className="teddy-sticker" aria-hidden="true">for you</span>
          <div className="teddy-halo" aria-hidden="true" />
          <img
            className="teddy-image"
            src="/teddy-bear.png"
            alt="A shy, smiling teddy bear holding a bouquet of daisies and peach tulips"
          />
        </div>

        <div className="teddy-copy">
          <nav className="story-progress" aria-label="Apology story progress">
            <span className="progress-dot">01</span>
            <span className="progress-line" aria-hidden="true" />
            <span className="progress-dot active" aria-current="step">02</span>
            <span className="progress-line" aria-hidden="true" />
            <span className="progress-dot">03</span>
          </nav>

          <p className="overline">a small peace offering</p>
          <h1 id="teddy-title">
            A tiny bear with
            <em> a big message.</em>
          </h1>
          <blockquote>
            “I brought you flowers… because saying sorry needed a little extra
            courage.”
          </blockquote>
          <p className="supporting-copy">
            No grand excuses—just a sincere heart trying to make things right.
          </p>

          <div className="page-actions">
            <Link className="text-link" href="/">← Back</Link>
            <Link className="primary-link" href="/sorry">
              Hear me out <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
