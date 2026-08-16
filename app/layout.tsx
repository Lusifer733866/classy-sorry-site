import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host");
  const host =
    forwardedHost?.split(",")[0]?.trim() ||
    requestHeaders.get("host") ||
    "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol?.split(",")[0]?.trim() ||
    (host.startsWith("localhost") ? "http" : "https");
  const siteUrl = `${protocol}://${host}`;
  const socialImageUrl = `${siteUrl}/og.png`;

  return {
    title: {
      default: "A Little Note for You",
      template: "%s | A Little Note",
    },
    description:
      "Three beautiful little pages carrying one honest and heartfelt apology.",
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: "A Little Note for You",
      title: "A Little Note for You",
      description: "Three small pages. One honest message.",
      images: [
        {
          url: socialImageUrl,
          width: 1731,
          height: 909,
          alt: "A cute teddy with flowers beside the words A Little Note for You",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "A Little Note for You",
      description: "Three small pages. One honest message.",
      images: [socialImageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
