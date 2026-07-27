import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { googleAdsData } from "@/lib/services/google-ads";

export const metadata: Metadata = {
  title: "Google Ads Management in Chennai | SR Shift Digital",
  description:
    "Google Ads management for Chennai businesses — Search, Display & YouTube campaigns focused on ROAS, not clicks. Free audit available.",
  alternates: {
    canonical: "https://srshiftdigital.com/services/google-ads",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Google Ads Management",
      description: googleAdsData.subtitle,
      url: "https://srshiftdigital.com/services/google-ads",
      provider: {
        "@type": "Organization",
        name: "SR Shift Digital",
        areaServed: "Chennai, Tamil Nadu, India",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: googleAdsData.faqs.map((f) => ({
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
        { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://srshiftdigital.com/services/google-ads" },
      ],
    },
  ],
};

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailTemplate data={googleAdsData} />
    </>
  );
}