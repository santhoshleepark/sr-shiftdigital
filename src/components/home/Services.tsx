type Service = {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
};

const ICON_PROPS = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICES: Service[] = [
  {
    title: "Meta & Google Ads",
    desc: "Campaigns built on data, not guesswork. We manage every rupee with obsessive attention to ROAS.",
    tags: ["Facebook", "Instagram", "Google Search", "YouTube"],
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 20V10M12 20V4M20 20v-7" />
      </svg>
    ),
  },
  {
    title: "SEO & Content",
    desc: "Rank for the keywords your customers actually search. Traffic that doesn't stop when the budget does.",
    tags: ["Technical SEO", "Local SEO", "Blog Content"],
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="10" cy="10" r="6" />
        <path d="M20 20l-5.5-5.5" />
      </svg>
    ),
  },
  {
    title: "Website Development",
    desc: "Fast, mobile-first websites built to convert visitors into leads. Not just pretty — functional.",
    tags: ["React", "WordPress", "Landing Pages"],
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "AI Automation",
    desc: "Automate lead follow-up, content creation, and reporting. Save 20+ hours a week.",
    tags: ["n8n Workflows", "WhatsApp Bots", "Auto-Reports"],
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M9 3v4M15 3v4M3 12h2M19 12h2M9 12h.01M15 12h.01" />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    desc: "Consistent, on-brand content that builds audience trust and drives engagement month after month.",
    tags: ["Reels", "Carousels", "Stories", "Scheduling"],
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.3 10.7L15.7 7.3M8.3 13.3l7.4 3.4" />
      </svg>
    ),
  },
  {
    title: "Analytics & Reporting",
    desc: "Real dashboards with real numbers. Know exactly where your money goes and what it returns.",
    tags: ["Google Analytics", "GTM", "Custom Reports"],
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 19V9M11 19V4M18 19v-6" />
        <path d="M2 19h20" strokeWidth="1.25" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            What We Do
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            Full-stack marketing.
            <br />
            Powered by AI.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-mid">
            Every service connects. Your ads feed your SEO. Your SEO fuels
            your ads. We build it as one system, not six vendors.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-line bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-signal/40"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-ink text-signal">
                {s.icon}
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-text-hi">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-mid">
                {s.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-ink px-2.5 py-1 font-data text-[11px] text-text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}