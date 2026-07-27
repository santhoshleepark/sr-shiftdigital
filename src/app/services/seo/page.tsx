import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { seoData } from "@/lib/services/seo";

export const metadata: Metadata = {
  title: "SEO Services in Chennai | SR Shift Digital",
  description:
    "SEO and content services for Chennai businesses — technical SEO, local SEO, and content built to rank and convert. Free audit available.",
  alternates: {
    canonical: "https://srshiftdigital.com/services/seo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "SEO & Content",
      description: seoData.subtitle,
      url: "https://srshiftdigital.com/services/seo",
      provider: {
        "@type": "Organization",
        name: "SR Shift Digital",
        areaServed: "Chennai, Tamil Nadu, India",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: seoData.faqs.map((f) => ({
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
        { "@type": "ListItem", position: 3, name: "SEO", item: "https://srshiftdigital.com/services/seo" },
      ],
    },
  ],
};

export default function SeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailTemplate data={seoData} />
    </>
  );
}