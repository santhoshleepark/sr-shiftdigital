export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
  quote: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "seven-hills-systems",
    client: "Seven Hills Systems",
    industry: "Battery & Inverter Dealer",
    location: "Ambattur, Chennai",
    challenge:
      "Seven Hills Systems was running Google Ads with no clear campaign structure — budget was spread thin across broad keywords, with no tracking on which searches actually turned into calls.",
    approach:
      "We rebuilt the account from scratch: separate campaigns for each battery brand and use-case, tightened keyword match types, added call tracking, and cut spend on searches that never converted.",
    results: [
      { value: "3.2x", label: "ROAS on Google Ads" },
      { value: "40%", label: "Lower cost per lead" },
      { value: "2 months", label: "To see the shift" },
    ],
    quote:
      "Before SR Shift Digital, we were spending on ads and seeing nothing. Within 2 months, our leads tripled and cost per lead dropped by 40%.",
  },
  {
    slug: "srinivasa-power-solutions",
    client: "Srinivasa Power Solutions",
    industry: "Solar & Power Products",
    location: "Chennai",
    challenge:
      "Srinivasa Power Solutions relied entirely on paid ads for traffic — the moment budget paused, leads stopped completely. There was no organic presence to fall back on.",
    approach:
      "We ran a full technical SEO audit, fixed site speed and structure issues, and built out local SEO and content targeting solar-related searches specific to Tamil Nadu.",
    results: [
      { value: "Top 3", label: "Google rankings for target keywords" },
      { value: "0 → steady", label: "Organic leads without ad spend" },
    ],
    quote:
      "Our website now gets consistent organic traffic. The SEO work they did brought us customers without us spending on ads every day.",
  },
  {
    slug: "smart-insurance-service",
    client: "Smart Insurance Service",
    industry: "Insurance Services",
    location: "Karur, Tamil Nadu",
    challenge:
      "Smart Insurance Service's Meta Ads used generic stock creative that didn't speak to the local market, resulting in low engagement and expensive leads.",
    approach:
      "We rebuilt the creative strategy around locally relevant messaging and faces, added native lead-form ads to cut friction, and layered in retargeting for people who engaged but didn't convert.",
    results: [
      { value: "50+", label: "Leads per month from Meta Ads" },
      { value: "↓ CPL", label: "Meaningful drop in cost per lead" },
    ],
    quote:
      "The team understands local markets. Our ads speak to our customers in a way that actually makes them call us.",
  },
];