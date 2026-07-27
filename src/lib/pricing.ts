export type PricingTier = {
  name: string;
  price: string;
  priceNote: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "₹15,000",
    priceNote: "/month + ad spend",
    desc: "For businesses testing one channel before scaling up.",
    features: [
      "One channel: Google Ads OR Meta Ads OR SEO",
      "Monthly performance report",
      "Basic conversion tracking setup",
      "WhatsApp support",
    ],
  },
  {
    name: "Growth",
    price: "₹30,000",
    priceNote: "/month + ad spend",
    desc: "For businesses ready to run ads and SEO together as one system.",
    features: [
      "Two channels combined (e.g. Ads + SEO)",
      "Landing page optimisation included",
      "Bi-weekly optimisation & reporting",
      "Priority WhatsApp support",
    ],
    highlighted: true,
  },
  {
    name: "Full Shift",
    price: "Custom",
    priceNote: "quote based on scope",
    desc: "For businesses that want everything running as one connected engine.",
    features: [
      "All channels: Ads, SEO, Website, Automation",
      "AI-powered lead follow-up & reporting",
      "Dedicated strategy calls",
      "Fastest response & priority support",
    ],
  },
];