import type { Metadata } from "next";

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
          <p className="overline">a small peace offering</p>
          <h1 id="teddy-title">
            A tiny bear with
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
