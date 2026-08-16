"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const flowers = [
  { x: "clamp(-350px, -33vw, -125px)", y: "clamp(-270px, -28vh, -105px)", size: "42px", delay: "0ms", rotate: "-24deg", color: "#ef9a82" },
  { x: "clamp(-240px, -23vw, -90px)", y: "clamp(-360px, -36vh, -155px)", size: "29px", delay: "80ms", rotate: "22deg", color: "#f3c860" },
  { x: "clamp(-390px, -38vw, -145px)", y: "-5vh", size: "34px", delay: "150ms", rotate: "-42deg", color: "#b5cbb9" },
  { x: "clamp(-310px, -28vw, -110px)", y: "clamp(110px, 23vh, 240px)", size: "48px", delay: "220ms", rotate: "31deg", color: "#f2b6a7" },
  { x: "clamp(-180px, -16vw, -70px)", y: "clamp(160px, 32vh, 320px)", size: "27px", delay: "310ms", rotate: "-15deg", color: "#e5bd57" },
  { x: "-5vw", y: "clamp(-390px, -39vh, -170px)", size: "35px", delay: "260ms", rotate: "14deg", color: "#f6ded4" },
  { x: "clamp(125px, 33vw, 350px)", y: "clamp(-270px, -28vh, -105px)", size: "45px", delay: "40ms", rotate: "26deg", color: "#f0a38d" },
  { x: "clamp(90px, 22vw, 230px)", y: "clamp(-355px, -35vh, -150px)", size: "30px", delay: "120ms", rotate: "-20deg", color: "#a9c5af" },
  { x: "clamp(145px, 38vw, 390px)", y: "2vh", size: "36px", delay: "185ms", rotate: "45deg", color: "#f4cf72" },
  { x: "clamp(110px, 28vw, 310px)", y: "clamp(110px, 23vh, 240px)", size: "49px", delay: "245ms", rotate: "-31deg", color: "#ed927a" },
  { x: "clamp(70px, 17vw, 185px)", y: "clamp(165px, 32vh, 320px)", size: "28px", delay: "330ms", rotate: "18deg", color: "#b7cab9" },
  { x: "6vw", y: "clamp(175px, 38vh, 370px)", size: "37px", delay: "285ms", rotate: "-8deg", color: "#f5d991" },
];

export default function SorryReveal() {
  const [revealed, setRevealed] = useState(false);
  const messageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (revealed) {
      messageRef.current?.focus();
    }
  }, [revealed]);

  return (
    <main className={revealed ? "story-page sorry-page is-revealed" : "story-page sorry-page"}>
      <div className="ambient-shape final-shape-one" aria-hidden="true" />
      <div className="ambient-shape final-shape-two" aria-hidden="true" />

      <div className="flower-burst" aria-hidden="true">
        {flowers.map((flower, index) => (
          <span
            className="burst-flower"
            key={index}
            style={
              {
                "--flower-x": flower.x,
                "--flower-y": flower.y,
                "--flower-size": flower.size,
                "--flower-delay": flower.delay,
                "--flower-rotate": flower.rotate,
                "--flower-color": flower.color,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {!revealed ? (
        <section className="story-card reveal-prompt" aria-labelledby="reveal-title">
          <div className="closed-bloom" aria-hidden="true">
            <span />
          </div>
          <p className="overline">one last thing</p>
          <h1 id="reveal-title">
            One message,
            <em> from the heart.</em>
          </h1>
          <p className="reveal-intro">A few honest words are waiting for you.</p>
          <button
            className="primary-link reveal-button"
            type="button"
            aria-expanded="false"
            aria-controls="apology-message"
            onClick={() => setRevealed(true)}
          >
            Let it bloom
            <span aria-hidden="true">✦</span>
          </button>
        </section>
      ) : (
        <article
          className="apology-letter revealed-letter"
          id="apology-message"
          ref={messageRef}
          tabIndex={-1}
          aria-labelledby="sorry-title"
        >
          <div className="letter-seal" aria-hidden="true">a note</div>
          <p className="overline">the words I really wanted to say</p>
          <h1 id="sorry-title">
            I’m truly
            <em> sorry.</em>
          </h1>

          <div className="letter-copy concise-letter">
            <p>
              I’m sorry I hurt you. You deserved more care from me. I value our
              friendship, and I’ll listen better, learn from this, and show you
              through my actions that I can do better.
            </p>
            <p>
              Take all the time you need. I simply hope we can begin again with
              a little more kindness.
            </p>
          </div>

          <div className="closing-note">
            <p>No pressure—just a genuine apology, sent with care.</p>
          </div>

          <a className="restart-link" href="/">
            Back to the beginning <span aria-hidden="true">↺</span>
          </a>
        </article>
      )}
    </main>
  );
}
