import Link from "next/link";

type ServiceItem = {
  slug: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const ICON_PROPS = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "google-ads",
    title: "Google Ads",
    desc: "Search, Display, and YouTube campaigns built around intent — capture customers at the exact moment they're looking for you.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    desc: "Facebook and Instagram campaigns that stop the scroll — built for local Indian audiences, not generic templates.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
      </svg>
    ),
  },
  {
    slug: "seo",
    title: "SEO & Content",
    desc: "Rank for what your customers actually search — technical SEO, local SEO, and content that compounds over time.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="10" cy="10" r="6" />
        <path d="M20 20l-5.5-5.5" />
      </svg>
    ),
  },
  {
    slug: "website-development",
    title: "Website Development",
    desc: "Fast, mobile-first websites built to convert — not just look good. React, WordPress, and custom landing pages.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />
      </svg>
    ),
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    desc: "Automate lead follow-up, reporting, and content creation with WhatsApp bots and workflow automation.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M9 3v4M15 3v4M3 12h2M19 12h2M9 12h.01M15 12h.01" />
      </svg>
    ),
  },
];

export default function ServiceGrid() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border border-line bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-signal/40"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-ink text-signal">
                {s.icon}
              </div>
              <h2 className="font-display text-lg font-semibold tracking-tight text-text-hi">
                {s.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-text-mid">
                {s.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-data text-xs font-medium text-signal">
                Learn more
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}