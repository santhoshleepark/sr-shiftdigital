import type { ServiceDetailData } from "@/components/services/ServiceDetailTemplate";

export const googleAdsData: ServiceDetailData = {
  eyebrow: "Google Ads",
  title: "Show up when customers are already searching for you.",
  subtitle:
    "Search, Display, and YouTube campaigns built around buyer intent — we manage every rupee with obsessive attention to ROAS, not just clicks.",
  stats: [
    { value: "3.1x", label: "Avg. ROAS" },
    { value: "₹1Cr+", label: "Google Ads spend managed" },
    { value: "40%", label: "Avg. drop in cost-per-lead" },
  ],
  features: [
    {
      title: "Search campaigns",
      desc: "Target high-intent keywords your customers actually type in when they're ready to buy.",
    },
    {
      title: "Display & remarketing",
      desc: "Stay in front of visitors who didn't convert the first time, across the web.",
    },
    {
      title: "YouTube ads",
      desc: "Video campaigns that build awareness and drive action, priced for local budgets.",
    },
    {
      title: "Negative keyword management",
      desc: "We actively cut wasted spend on searches that will never convert for you.",
    },
    {
      title: "Landing page review",
      desc: "Ads only work if the page they land on converts — we audit and fix that too.",
    },
    {
      title: "Weekly optimisation",
      desc: "Bids, budgets, and targeting reviewed weekly, not left on autopilot for a month.",
    },
  ],
  process: [
    {
      n: "01",
      title: "Account audit",
      desc: "We review your existing account (or build fresh) and map out where budget is currently being wasted.",
    },
    {
      n: "02",
      title: "Campaign structure",
      desc: "Campaigns and ad groups built around how your customers actually search, not generic templates.",
    },
    {
      n: "03",
      title: "Launch",
      desc: "Ads go live with proper conversion tracking in place from day one — no guessing what's working.",
    },
    {
      n: "04",
      title: "Weekly optimisation",
      desc: "We review search terms, adjust bids, and cut waste every single week, reported to you monthly.",
    },
  ],
  faqs: [
    {
      question: "How much budget do I need to start?",
      answer:
        "It depends on your industry and city competition, but most Chennai businesses see meaningful results starting from ₹15,000–₹25,000/month in ad spend. We'll give you a specific number after the free audit.",
    },
    {
      question: "How soon will I see results?",
      answer:
        "Search campaigns can start generating leads within the first week. Meaningful optimisation and stable ROAS usually takes 4–6 weeks as we gather data.",
    },
    {
      question: "Do you charge a management fee on top of ad spend?",
      answer:
        "Yes, a transparent flat management fee separate from your ad budget — so 100% of your ad spend goes to Google, not to us. Exact pricing depends on scope, covered in your free audit call.",
    },
  ],
  ctaTitle: "Ready to stop wasting ad spend?",
  ctaSubtitle:
    "Get a free Google Ads audit — we'll show you exactly where your budget is leaking before you spend another rupee.",
};