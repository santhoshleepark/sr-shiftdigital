import type { ServiceDetailData } from "@/components/services/ServiceDetailTemplate";

export const seoData: ServiceDetailData = {
  eyebrow: "SEO & Content",
  title: "Traffic that doesn't stop when the budget does.",
  subtitle:
    "Technical SEO, local SEO, and content built to rank for what your customers are actually searching — not vanity keywords no one types.",
  stats: [
    { value: "Top 3", label: "Avg. ranking for target keywords" },
    { value: "98%", label: "Client retention" },
    { value: "6mo+", label: "Typical time to compounding results" },
  ],
  features: [
    {
      title: "Technical SEO audit",
      desc: "Site speed, crawlability, mobile usability, and Core Web Vitals fixed at the foundation level.",
    },
    {
      title: "Local SEO & Google Business Profile",
      desc: "Optimised for 'near me' searches — critical for local Chennai and Tamil Nadu businesses.",
    },
    {
      title: "Keyword research",
      desc: "We target keywords your actual customers search, mapped to real buying intent, not just search volume.",
    },
    {
      title: "On-page optimisation",
      desc: "Titles, meta descriptions, headers, and internal linking structured for both Google and readers.",
    },
    {
      title: "Content creation",
      desc: "Blog posts and landing pages written to rank and to actually convert readers into leads.",
    },
    {
      title: "Monthly ranking reports",
      desc: "Clear reporting on keyword positions, organic traffic, and where we're focusing next.",
    },
  ],
  process: [
    {
      n: "01",
      title: "Technical audit",
      desc: "We find what's actively holding your site back from ranking — speed, structure, indexing issues.",
    },
    {
      n: "02",
      title: "Keyword strategy",
      desc: "A prioritised list of keywords mapped to pages, based on intent and realistic competition.",
    },
    {
      n: "03",
      title: "Content & on-page fixes",
      desc: "We fix existing pages and create new content targeting the highest-priority keywords first.",
    },
    {
      n: "04",
      title: "Build & report",
      desc: "Ongoing content and link-building, with monthly reports showing ranking and traffic movement.",
    },
  ],
  faqs: [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a compounding channel, not instant. Most businesses see early movement in 2–3 months and meaningful traffic growth by 6 months, which then keeps growing without extra ad spend.",
    },
    {
      question: "Do I still need Google Ads if I'm doing SEO?",
      answer:
        "They work well together — Ads gets you leads immediately while SEO builds. Many clients start with both, then lean more on SEO as organic rankings mature.",
    },
    {
      question: "Will you guarantee a #1 ranking?",
      answer:
        "No agency can honestly guarantee a specific ranking — Google's algorithm isn't controlled by us. What we commit to is consistent, measurable improvement in rankings and organic traffic, reported monthly.",
    },
  ],
  ctaTitle: "Ready to stop renting your traffic?",
  ctaSubtitle:
    "Get a free SEO audit — we'll show you exactly what's holding your site back from ranking, no commitment needed.",
};