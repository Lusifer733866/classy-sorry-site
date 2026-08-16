import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Little Note for You",
  description: "The beginning of a small, sincere apology.",
};

export default function EntrancePage() {
  return (
    <main className="story-page entrance-page">
      <div className="ambient-shape shape-one" aria-hidden="true" />
      <div className="ambient-shape shape-two" aria-hidden="true" />

      <section className="story-card entrance-card" aria-labelledby="entrance-title">
        <nav className="story-progress" aria-label="Apology story progress">
          <span className="progress-dot active" aria-current="step">01</span>
          <span className="progress-line" aria-hidden="true" />
          <span className="progress-dot">02</span>
          <span className="progress-line" aria-hidden="true" />
          <span className="progress-dot">03</span>
        </nav>

        <div className="envelope-mark" aria-hidden="true">
          <span>♡</span>
        </div>
        <p className="overline">for you, with care</p>
        <h1 id="entrance-title">
          A little note
          <em> for you.</em>
        </h1>
        <div className="title-flourish" aria-hidden="true">
          <span />
          <b />
          <span />
        </div>
        <p className="lead-copy">
          There’s something I’ve been wanting to say—gently, honestly, and with
          care. So I put these few words together for you.
        </p>

        <Link className="primary-link" href="/flowers">
          Read the note <span aria-hidden="true">→</span>
        </Link>

        <p className="gentle-hint">Three small pages. One honest message.</p>
      </section>
    </main>
  );
}
