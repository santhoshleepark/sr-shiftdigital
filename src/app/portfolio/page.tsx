import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Portfolio | SR Shift Digital — Chennai Digital Marketing Work",
  description:
    "See websites, ad creatives, and automations built by SR Shift Digital for businesses across Chennai and Tamil Nadu.",
  alternates: {
    canonical: "https://srshiftdigital.com/portfolio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://srshiftdigital.com" },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://srshiftdigital.com/portfolio" },
      ],
    },
  ],
};

export default function PortfolioPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioHero />
      <PortfolioGrid />
      <CtaBanner
        title="Want work like this for your business?"
        subtitle="Get a free audit and let's talk about what we'd build for you."
      />
    </main>
  );
}