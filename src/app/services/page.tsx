import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceGrid, { SERVICES } from "@/components/services/ServiceGrid";
import NotSure from "@/components/services/NotSure";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SR Shift Digital — Chennai",
  description:
    "Google Ads, Meta Ads, SEO, website development, and AI automation — digital marketing services built for Chennai and Tamil Nadu businesses.",
  alternates: {
    canonical: "https://srshiftdigital.com/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...SERVICES.map((s) => ({
      "@type": "Service",
      name: s.title,
      description: s.desc,
      url: `https://srshiftdigital.com/services/${s.slug}`,
      provider: {
        "@type": "Organization",
        name: "SR Shift Digital",
        areaServed: "Chennai, Tamil Nadu, India",
      },
    })),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://srshiftdigital.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://srshiftdigital.com/services",
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHero />
      <ServiceGrid />
      <NotSure />
    </main>
  );
}