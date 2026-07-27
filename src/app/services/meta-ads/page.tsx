import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { metaAdsData } from "@/lib/services/meta-ads";

export const metadata: Metadata = {
  title: "Meta Ads (Facebook & Instagram) Management in Chennai | SR Shift Digital",
  description:
    "Facebook & Instagram ad management for Chennai businesses — creative, targeting, and retargeting built for local audiences. Free audit available.",
  alternates: {
    canonical: "https://srshiftdigital.com/services/meta-ads",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Meta Ads Management",
      description: metaAdsData.subtitle,
      url: "https://srshiftdigital.com/services/meta-ads",
      provider: {
        "@type": "Organization",
        name: "SR Shift Digital",
        areaServed: "Chennai, Tamil Nadu, India",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: metaAdsData.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://srshiftdigital.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://srshiftdigital.com/services" },
        { "@type": "ListItem", position: 3, name: "Meta Ads", item: "https://srshiftdigital.com/services/meta-ads" },
      ],
    },
  ],
};

export default function MetaAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailTemplate data={metaAdsData} />
    </>
  );
}