import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I’m Truly Sorry",
  description: "A sincere apology, sent with care and a promise to do better.",
  openGraph: {
    title: "I’m Truly Sorry",
    description: "A sincere apology, sent with care and a promise to do better.",
    images: [],
  },
  twitter: {
    title: "I’m Truly Sorry",
    description: "A sincere apology, sent with care and a promise to do better.",
    images: [],
  },
};

export default function SorryPage() {
  return (
    <main className="story-page sorry-page">
      <div className="ambient-shape final-shape-one" aria-hidden="true" />
      <div className="ambient-shape final-shape-two" aria-hidden="true" />

      <article className="story-card apology-letter" aria-labelledby="sorry-title">
        <nav className="story-progress" aria-label="Apology story progress">
          <span className="progress-dot">01</span>
          <span className="progress-line" aria-hidden="true" />
          <span className="progress-dot">02</span>
          <span className="progress-line" aria-hidden="true" />
          <span className="progress-dot active" aria-current="step">03</span>
        </nav>

        <div className="letter-seal" aria-hidden="true">a note</div>
        <p className="overline">the words I really wanted to say</p>
        <h1 id="sorry-title">
          I’m truly
          <em> sorry.</em>
        </h1>

        <div className="letter-copy">
          <p>
            I’m sorry I hurt you. You deserved more care and understanding from
            me, and I should have handled things better.
          </p>
          <p>
            I value our friendship, and I never want one difficult moment to
            erase all the good ones. I’ll learn from this, listen better, and
            try to do better—not only in words, but through my actions.
          </p>
          <p>
            Take all the time you need. I simply hope that, when you’re ready,
            we can talk and begin again with a little more kindness.
          </p>
        </div>

        <div className="closing-note">
          <p>No pressure—just a genuine apology, sent with care.</p>
        </div>

        <Link className="restart-link" href="/">
          Back to the beginning <span aria-hidden="true">↺</span>
        </Link>
      </article>
    </main>
  );
}
