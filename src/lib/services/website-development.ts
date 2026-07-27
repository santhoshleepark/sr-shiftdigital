import type { ServiceDetailData } from "@/components/services/ServiceDetailTemplate";

export const websiteDevData: ServiceDetailData = {
  eyebrow: "Website Development",
  title: "A website that sells while you sleep.",
  subtitle:
    "Fast, mobile-first websites built to convert visitors into leads — not just look good in a portfolio screenshot.",
  stats: [
    { value: "<2s", label: "Avg. page load time" },
    { value: "100%", label: "Mobile-first builds" },
    { value: "50+", label: "Websites shipped" },
  ],
  features: [
    {
      title: "Custom design",
      desc: "No generic templates — every site is designed around your brand and your customers, not a theme marketplace.",
    },
    {
      title: "React & Next.js builds",
      desc: "Modern, fast, SEO-friendly websites built on the same stack powering top SaaS products globally.",
    },
    {
      title: "WordPress development",
      desc: "For clients who need easy self-editing, we build clean, fast, secure WordPress sites too.",
    },
    {
      title: "Landing pages",
      desc: "Dedicated high-conversion landing pages for specific campaigns, offers, or ad traffic.",
    },
    {
      title: "E-commerce websites",
      desc: "Online stores built to actually sell — clear product pages, fast checkout, mobile-optimised.",
    },
    {
      title: "Speed & Core Web Vitals",
      desc: "Every site is optimised for Google's Core Web Vitals — speed directly affects both rankings and conversions.",
    },
  ],
  process: [
    {
      n: "01",
      title: "Discovery",
      desc: "We understand your business, your customers, and what the site actually needs to achieve.",
    },
    {
      n: "02",
      title: "Design",
      desc: "Wireframes and visual design reviewed with you before a single line of code is written.",
    },
    {
      n: "03",
      title: "Build",
      desc: "Development with SEO, speed, and mobile experience built in from the start, not bolted on after.",
    },
    {
      n: "04",
      title: "Launch & support",
      desc: "We handle deployment, and stay on for fixes and updates after launch — not a one-and-done handoff.",
    },
  ],
  faqs: [
    {
      question: "How long does a website take to build?",
      answer:
        "A standard business website typically takes 2–4 weeks depending on scope. Landing pages can be faster — often 3–5 business days.",
    },
    {
      question: "Will I be able to edit the website myself later?",
      answer:
        "Yes — if you need self-editing, we recommend and build on WordPress. For performance-critical sites, we build on Next.js and handle updates as part of ongoing support.",
    },
    {
      question: "Do you also handle hosting and domain setup?",
      answer:
        "Yes, we can set up hosting and domain configuration for you, or work with your existing setup if you already have one.",
    },
  ],
  ctaTitle: "Ready for a website that actually converts?",
  ctaSubtitle:
    "Get a free website audit — we'll show you exactly what's costing you leads on your current site.",
};