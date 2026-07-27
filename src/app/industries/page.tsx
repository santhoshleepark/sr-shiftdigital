import type { Metadata } from "next";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Industries We Serve | SR Shift Digital — Chennai",
  description:
    "SR Shift Digital serves local businesses, battery dealers, solar companies, healthcare, real estate, insurance, and more across Chennai and Tamil Nadu.",
  alternates: {
    canonical: "https://srshiftdigital.com/industries",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://srshiftdigital.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://srshiftdigital.com/industries" },
      ],
    },
  ],
};

export default function IndustriesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustriesHero />
      <IndustriesGrid />
      <CtaBanner
        title="Don't see your industry listed?"
        subtitle="We've worked across dozens of business types — get a free audit and we'll tell you what's possible for yours."
      />
    </main>
  );
}