type Testimonial = {
  name: string;
  industry: string;
  location: string;
  result: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Seven Hills Systems",
    industry: "Battery & Inverter Dealer",
    location: "Ambattur, Chennai",
    result: "3.2x ROAS on Google Ads",
    quote:
      "Before SR Shift Digital, we were spending on ads and seeing nothing. Within 2 months, our leads tripled and cost per lead dropped by 40%.",
  },
  {
    name: "Srinivasa Power Solutions",
    industry: "Solar & Power Products",
    location: "Chennai",
    result: "Top 3 Google rankings",
    quote:
      "Our website now gets consistent organic traffic. The SEO work they did brought us customers without spending on ads every day.",
  },
  {
    name: "Smart Insurance Service",
    industry: "Insurance Services",
    location: "Karur, Tamil Nadu",
    result: "50+ leads/month from Meta Ads",
    quote:
      "The team understands local markets. Our ads speak to our customers in a way that actually makes them call us.",
  },
];

export default function Results() {
  return (
    <section id="results" className="border-t border-line bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            Client Results
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            Real businesses.
            <br />Real growth.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-line bg-ink p-8"
            >
              <span className="inline-block rounded-full bg-growth/10 px-3 py-1 font-data text-xs font-semibold text-growth">
                {t.result}
              </span>
              <p className="mt-5 text-sm leading-relaxed text-text-mid">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-line pt-5">
                <div className="text-sm font-semibold text-text-hi">
                  {t.name}
                </div>
                <div className="mt-1 text-xs text-text-dim">
                  {t.industry} · {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}