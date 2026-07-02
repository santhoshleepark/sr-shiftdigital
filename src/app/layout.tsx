import type { Metadata } from "next";
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-plex",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "SR Shift Digital | AI-Powered Digital Marketing Agency in Chennai",
  description:
    "Top digital marketing agency in Chennai. Google Ads, Meta Ads, SEO & AI automation that generates real leads. Get a free audit today.",
  keywords: [
    "digital marketing agency Chennai",
    "Google Ads agency Chennai",
    "Meta Ads Chennai",
    "AI marketing agency India",
  ],
  openGraph: {
    title: "SR Shift Digital | AI-Powered Digital Marketing Agency in Chennai",
    description:
      "Google Ads, Meta Ads, SEO & AI automation that generates real leads.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="font-body bg-ink text-text-hi antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
