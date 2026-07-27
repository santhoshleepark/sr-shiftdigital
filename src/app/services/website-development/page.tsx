import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { websiteDevData } from "@/lib/services/website-development";

export const metadata: Metadata = {
  title: "Website Development Services in Chennai | SR Shift Digital",
  description:
    "Fast, mobile-first website development for Chennai businesses — React, Next.js, WordPress, and e-commerce builds focused on conversion.",
  alternates: {
    canonical: "https://srshiftdigital.com/services/website-development",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Development",
      description: websiteDevData.subtitle,
      url: "https://srshiftdigital.com/services/website-development",
      provider: {
        "@type": "Organization",
        name: "SR Shift Digital",
        areaServed: "Chennai, Tamil Nadu, India",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: websiteDevData.faqs.map((f) => ({
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
        { "@type": "ListItem", position: 3, name: "Website Development", item: "https://srshiftdigital.com/services/website-development" },
      ],
    },
  ],
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailTemplate data={websiteDevData} />
    </>
  );
}