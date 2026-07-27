export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  client: string;
  image: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: "seven-hills-website",
    title: "Battery dealer website redesign",
    category: "Website Development",
    client: "Seven Hills Systems",
    image: "/images/portfolio/seven-hills-website.jpg",
  },
  {
    slug: "srinivasa-seo-landing",
    title: "Solar products landing page",
    category: "Website Development",
    client: "Srinivasa Power Solutions",
    image: "/images/portfolio/srinivasa-landing.jpg",
  },
  {
    slug: "smart-insurance-meta-creative",
    title: "Meta Ads creative set",
    category: "Meta Ads",
    client: "Smart Insurance Service",
    image: "/images/portfolio/smart-insurance-meta.jpg",
  },
  {
    slug: "seven-hills-google-campaign",
    title: "Google Search campaign structure",
    category: "Google Ads",
    client: "Seven Hills Systems",
    image: "/images/portfolio/seven-hills-google.jpg",
  },
];