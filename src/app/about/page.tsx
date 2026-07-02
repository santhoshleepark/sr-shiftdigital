import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Founder from "@/components/about/Founder";
import WhyShift from "@/components/about/WhyShift";
import MissionVision from "@/components/about/MissionVision";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | SR Shift Digital — Chennai's AI-Powered Marketing Team",
  description:
    "Meet the team behind SR Shift Digital, Chennai's AI-powered digital marketing agency. Founder-led, results-first, built for local Indian businesses.",
  alternates: {
    canonical: "https://srshiftdigital.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About SR Shift Digital",
      url: "https://srshiftdigital.com/about",
      description:
        "Meet the team behind SR Shift Digital, Chennai's AI-powered digital marketing agency.",
    },
    {
      "@type": "Person",
      name: "Santhosh Ravi",
      jobTitle: "Founder & CEO",
      worksFor: {
        "@type": "Organization",
        name: "SR Shift Digital",
      },
    },
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
          name: "About",
          item: "https://srshiftdigital.com/about",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <Founder />
      <WhyShift />
      <MissionVision />
      <CtaBanner
        title="Want results like this for your business?"
        subtitle="Book a free 30-minute audit — no commitment, just a clear look at where your marketing budget is leaking."
      />
    </main>
  );
}