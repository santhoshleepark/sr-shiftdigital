import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { aiAutomationData } from "@/lib/services/ai-automation";

export const metadata: Metadata = {
  title: "AI Automation Services in Chennai | SR Shift Digital",
  description:
    "AI automation for Chennai businesses — WhatsApp bots, lead follow-up automation, and workflow automation to save hours every week.",
  alternates: {
    canonical: "https://srshiftdigital.com/services/ai-automation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Automation",
      description: aiAutomationData.subtitle,
      url: "https://srshiftdigital.com/services/ai-automation",
      provider: {
        "@type": "Organization",
        name: "SR Shift Digital",
        areaServed: "Chennai, Tamil Nadu, India",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: aiAutomationData.faqs.map((f) => ({
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
        { "@type": "ListItem", position: 3, name: "AI Automation", item: "https://srshiftdigital.com/services/ai-automation" },
      ],
    },
  ],
};

export default function AiAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailTemplate data={aiAutomationData} />
    </>
  );
}