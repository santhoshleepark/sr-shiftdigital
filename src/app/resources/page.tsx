import type { Metadata } from "next";
import ResourcesList from "@/components/resources/ResourcesList";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Free Marketing Resources | SR Shift Digital — Chennai",
  description:
    "Free guides, checklists, and tools to help Chennai businesses improve their Google Ads, SEO, and website performance.",
  alternates: {
    canonical: "https://srshiftdigital.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-16 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            Resources
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            Free tools & guides.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-mid">
            Practical resources to help you improve your own marketing — no
            email gate, no signup required.
          </p>
        </div>
      </section>

      <ResourcesList />

      <CtaBanner
        title="Want us to do this for you instead?"
        subtitle="Get a free audit and skip the DIY guesswork."
      />
    </main>
  );
}