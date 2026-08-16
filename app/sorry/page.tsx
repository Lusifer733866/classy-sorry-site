import type { Metadata } from "next";
import SorryReveal from "./SorryReveal";

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
  return <SorryReveal />;
}
