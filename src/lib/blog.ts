export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "signs-google-ads-budget-wasted",
    title: "5 Signs Your Google Ads Budget Is Being Wasted",
    excerpt:
      "If your Google Ads account looks like this, you're paying Google to show your ad to people who were never going to buy from you.",
    date: "2026-06-15",
    category: "Google Ads",
    content: [
      "Most local businesses running Google Ads aren't losing because Google Ads doesn't work — they're losing because the account was never built around how their actual customers search.",
      "Sign 1: You're running broad match keywords with no negative keyword list. Broad match without negatives means your ad for 'battery dealer Chennai' can show up for 'battery dealer jobs Chennai' or 'battery symbol meaning' — clicks you pay for that were never going to convert.",
      "Sign 2: You can't tell which keyword generated which lead. If your conversion tracking only shows 'form submitted' without tying it back to a specific keyword or campaign, you're optimising blind. You literally cannot know what's working.",
      "Sign 3: Your cost-per-click has crept up for months with no one adjusting bids. Google's auto-bidding is not 'set and forget' — it needs a human reviewing search terms and adjusting strategy weekly, not once a quarter.",
      "Sign 4: Your ads point to your homepage instead of a dedicated landing page. A generic homepage forces the visitor to hunt for what they came for. A landing page matched to the ad's specific offer converts significantly higher.",
      "Sign 5: Nobody has looked at your Search Terms report in the last 30 days. This single report shows you exactly what people typed before clicking your ad — and it's usually where the most obvious wasted spend hides.",
      "If two or more of these sound familiar, it's worth getting a second set of eyes on the account before increasing budget further. More spend on a leaky account just means more waste, faster.",
    ],
  },
  {
    slug: "local-seo-chennai-businesses",
    title: "Why Local SEO Matters More Than You Think for Chennai Businesses",
    excerpt:
      "Paid ads stop the moment your budget does. Local SEO keeps bringing customers in long after — here's why most Chennai businesses ignore it.",
    date: "2026-06-02",
    category: "SEO",
    content: [
      "Ask most local business owners in Chennai about their marketing, and they'll tell you about their Google Ads or Meta Ads spend. Ask about their SEO strategy, and you'll usually get a blank look.",
      "That gap is exactly why local SEO is so underpriced right now. While competitors fight over ad auctions, businesses that invest in local search visibility are capturing customers for free, month after month, without bidding against anyone.",
      "The starting point is almost always your Google Business Profile. An incomplete, unverified, or poorly categorised listing is invisible in local map results — even if your website is excellent. This is the single highest-leverage fix for most local businesses.",
      "The second lever is reviews. Google's local ranking algorithm weighs review count, recency, and rating heavily. A steady stream of recent reviews, even simple ones, outperforms a static profile with old reviews from years ago.",
      "The third piece is content that actually matches local search intent — pages built around 'near me' style queries and location-specific service pages, not generic service descriptions copied from a template.",
      "None of this replaces paid ads entirely — the two work best together. But if paid ads are the only lever a business pulls, they're paying for every single customer, forever, with no compounding asset being built underneath.",
    ],
  },
];