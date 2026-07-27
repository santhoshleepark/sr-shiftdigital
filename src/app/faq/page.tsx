import type { Metadata } from "next";
import FaqList from "@/components/faq/FaqList";
import CtaBanner from "@/components/ui/CtaBanner";
import { GENERAL_FAQS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SR Shift Digital — Chennai",
  description:
    "Common questions about working with SR Shift Digital — pricing, contracts, timelines, and how we work with Chennai businesses.",
  alternates: {
    canonical: "https://srshiftdigital.com/faq",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: GENERAL_FAQS.map((f) => ({
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
        { "@type": "ListItem", position: 2, name: "FAQ", item: "https://srshiftdigital.com/faq" },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden px-6 pb-16 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            FAQ
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            Questions? Answered.
          </h1>
        </div>
      </section>

      <FaqList />

      <CtaBanner
        title="Still have a question?"
        subtitle="Reach out directly — we respond within 2 hours during business hours."
      />
    </main>
  );
}