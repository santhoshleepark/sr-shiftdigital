import Button from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/pricing";

export default function PricingTiers() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-signal bg-signal/5"
                  : "border-line bg-surface"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-signal px-3 py-1 font-data text-[11px] font-semibold uppercase tracking-wider text-ink">
                  Most Popular
                </span>
              )}
              <h2 className="font-display text-xl font-semibold tracking-tight text-text-hi">
                {tier.name}
              </h2>
              <p className="mt-2 text-sm text-text-mid">{tier.desc}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-data text-3xl font-bold text-text-hi">
                  {tier.price}
                </span>
                <span className="font-data text-xs text-text-dim">
                  {tier.priceNote}
                </span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-text-mid"
                  >
                    <span className="mt-0.5 text-growth">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="/#contact"
                variant={tier.highlighted ? "primary" : "ghost"}
                className="mt-8 w-full justify-center"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-dim">
          Ad spend is billed separately by Google/Meta directly to your
          account — never marked up by us.
        </p>
      </div>
    </section>
  );
}