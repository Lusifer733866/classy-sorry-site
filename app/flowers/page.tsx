import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Small Bouquet With a Big Message",
  description: "A small bouquet, offered with quiet courage and something sincere to say.",
  openGraph: {
    title: "A Small Bouquet With a Big Message",
    description: "A small bouquet, offered with quiet courage and something sincere to say.",
    images: [],
  },
  twitter: {
    title: "A Small Bouquet With a Big Message",
    description: "A small bouquet, offered with quiet courage and something sincere to say.",
    images: [],
  },
};

export default function FlowersPage() {
  return (
    <main className="story-page flowers-page">
      <section className="story-card bouquet-card" aria-labelledby="bouquet-title">
        <div className="bouquet-visual">
          <span className="bouquet-sticker" aria-hidden="true">for you</span>
          <img
            className="bouquet-image"
            src="/anime-hand-bouquet.png"
            alt="An adult man’s hand holding a small bouquet, with a minimal outline of his shoulder and torso"
          />
        </div>

        <div className="bouquet-copy">
          <p className="overline">a small peace offering</p>
          <h1 id="bouquet-title">
            A small bouquet with
            <em> a big message.</em>
          </h1>
          <blockquote>
            “I brought you flowers… because saying sorry needed a little extra
            courage.”
          </blockquote>

          <div className="page-actions">
            <a className="text-link" href="/">← Back</a>
            <a className="primary-link" href="/sorry">
              Hear me out <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
