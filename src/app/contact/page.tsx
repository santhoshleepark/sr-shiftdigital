import type { Metadata } from "next";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Contact Us | SR Shift Digital — Chennai",
  description:
    "Get in touch with SR Shift Digital for a free marketing audit. Chennai, Tamil Nadu, India. WhatsApp: +91 78711 52593.",
  alternates: {
    canonical: "https://srshiftdigital.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "SR Shift Digital",
      email: "srshiftdigital@gmail.com",
      telephone: "+91-78711-52593",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://srshiftdigital.com" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://srshiftdigital.com/contact" },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden px-6 pb-4 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            Contact
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            Let&apos;s talk.
          </h1>
        </div>
      </section>

      <Contact />
    </main>
  );
}