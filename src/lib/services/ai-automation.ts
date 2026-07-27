import type { ServiceDetailData } from "@/components/services/ServiceDetailTemplate";

export const aiAutomationData: ServiceDetailData = {
  eyebrow: "AI Automation",
  title: "Save 20+ hours a week you didn't know you were losing.",
  subtitle:
    "Automate lead follow-up, reporting, and content creation with WhatsApp bots and workflow automation — so nothing falls through the cracks.",
  stats: [
    { value: "20+", label: "Hours saved per week" },
    { value: "<5min", label: "Avg. lead response time" },
    { value: "24/7", label: "Automated follow-up" },
  ],
  features: [
    {
      title: "WhatsApp automation",
      desc: "Instant automated replies to new leads on WhatsApp — no more losing customers to slow response times.",
    },
    {
      title: "Lead follow-up sequences",
      desc: "Automated multi-touch follow-up so leads don't go cold while your team is busy elsewhere.",
    },
    {
      title: "Auto-generated reports",
      desc: "Marketing performance reports generated and delivered automatically — no more manual spreadsheet work.",
    },
    {
      title: "AI content assistance",
      desc: "AI-assisted ad copy and content drafts to speed up your marketing production without sacrificing quality.",
    },
    {
      title: "CRM & Sheets integration",
      desc: "Leads flow automatically into Google Sheets, your CRM, or wherever your team already works.",
    },
    {
      title: "Custom workflow automation",
      desc: "n8n-powered workflows built around your specific business process, not a generic one-size-fits-all bot.",
    },
  ],
  process: [
    {
      n: "01",
      title: "Process mapping",
      desc: "We map out where your team is manually doing repetitive work that automation could handle instead.",
    },
    {
      n: "02",
      title: "Workflow design",
      desc: "We design the automation flow — triggers, actions, integrations — specific to your tools and process.",
    },
    {
      n: "03",
      title: "Build & test",
      desc: "Workflows are built and tested thoroughly before going live, so nothing breaks silently.",
    },
    {
      n: "04",
      title: "Monitor & refine",
      desc: "We monitor performance and refine automations as your business and volume grow.",
    },
  ],
  faqs: [
    {
      question: "Do I need technical knowledge to use these automations?",
      answer:
        "No — we build and maintain the automations for you. You just see the results: faster lead response, automatic reports, less manual work for your team.",
    },
    {
      question: "Will a WhatsApp bot feel robotic to my customers?",
      answer:
        "Not if it's built well. We design conversational flows that handle the first response and simple questions naturally, then hand off to your team for anything that needs a human touch.",
    },
    {
      question: "Can automation work with tools I'm already using?",
      answer:
        "In most cases yes — we commonly integrate with Google Sheets, Gmail, WhatsApp, and common CRMs. We'll confirm compatibility with your specific tools during the audit.",
    },
  ],
  ctaTitle: "Ready to stop doing repetitive work manually?",
  ctaSubtitle:
    "Get a free automation audit — we'll identify exactly where your team is losing hours to work a workflow could handle.",
};