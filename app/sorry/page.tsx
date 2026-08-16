import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I’m Truly Sorry",
  description: "I’m truly sorry.",
  openGraph: {
    title: "I’m Truly Sorry",
    description: "I’m truly sorry.",
    images: [],
  },
  twitter: {
    title: "I’m Truly Sorry",
    description: "I’m truly sorry.",
    images: [],
  },
};

export default function SorryPage() {
  return (
    <main className="story-page sorry-page">
      <div className="ambient-shape final-shape-one" aria-hidden="true" />
      <div className="ambient-shape final-shape-two" aria-hidden="true" />

      <section className="story-card sorry-only-card" aria-labelledby="sorry-title">
        <h1 id="sorry-title">
          I’m truly <em>sorry.</em>
        </h1>
      </section>
    </main>
  );
}
