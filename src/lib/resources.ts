export type Resource = {
  title: string;
  desc: string;
  href: string;
  type: "Guide" | "Tool" | "Checklist";
  external?: boolean;
};

export const RESOURCES: Resource[] = [
  {
    title: "5 Signs Your Google Ads Budget Is Being Wasted",
    desc: "A practical checklist to audit your own Google Ads account before spending another rupee.",
    href: "/blog/signs-google-ads-budget-wasted",
    type: "Guide",
  },
  {
    title: "Why Local SEO Matters More Than You Think",
    desc: "Understand the local SEO fundamentals that most Chennai businesses skip entirely.",
    href: "/blog/local-seo-chennai-businesses",
    type: "Guide",
  },
  {
    title: "Google PageSpeed Insights",
    desc: "Free tool from Google to check your website's speed and Core Web Vitals score.",
    href: "https://pagespeed.web.dev",
    type: "Tool",
    external: true,
  },
  {
    title: "Google Business Profile Manager",
    desc: "Claim and optimise your free Google Business Profile — the single highest-leverage local SEO fix.",
    href: "https://business.google.com",
    type: "Tool",
    external: true,
  },
  {
    title: "Google Keyword Planner",
    desc: "Free tool to research search volume and competition for keywords relevant to your business.",
    href: "https://ads.google.com/intl/en_in/home/tools/keyword-planner/",
    type: "Tool",
    external: true,
  },
];