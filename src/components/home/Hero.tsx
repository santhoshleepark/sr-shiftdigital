import Button from "@/components/ui/Button";

const METRICS = [
  { value: "50+", label: "Clients served" },
  { value: "₹2Cr+", label: "Ad spend managed" },
  { value: "3.1x", label: "Avg. ROAS" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Copy column */}
        <div>
          <span className="mb-6 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            Chennai · AI-Powered Growth
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-hi sm:text-6xl">
            Every rupee you spend
            <br />
            should <span className="text-signal">shift</span> into revenue.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-mid">
            We run Meta Ads, Google Ads, SEO and AI automation as one
            connected system — engineered to move your ad spend from cost to
            profit, not just clicks.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact">Get Your Free Audit →</Button>
            <Button href="#results" variant="ghost">
              See Client Results
            </Button>
          </div>

          <div className="mt-14 flex gap-10 border-t border-line pt-8">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="font-data text-2xl font-semibold tabular-nums text-text-hi">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-text-dim">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature element: the Shift Meter */}
        <div className="rounded-2xl border border-line bg-surface p-8">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-data text-xs uppercase tracking-wider text-text-dim">
              Ad spend → Revenue
            </span>
            <span className="flex items-center gap-1.5 font-data text-xs text-growth">
              <span className="h-1.5 w-1.5 rounded-full bg-growth" />
              Live model
            </span>
          </div>

          <div className="relative h-3 w-full overflow-hidden rounded-full bg-ink">
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-signal via-signal/60 to-growth" />
            <div className="absolute inset-y-0 left-[72%] w-0.5 bg-text-hi" />
          </div>

          <div className="mt-2 flex justify-between font-data text-[11px] text-text-dim">
            <span>Wasted spend</span>
            <span>Break-even</span>
            <span>Profit zone</span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-line bg-ink/60 p-4">
              <div className="font-data text-lg font-semibold text-text-hi">
                ₹1.00
              </div>
              <div className="mt-1 text-xs text-text-dim">Spent per lead</div>
            </div>
            <div className="rounded-lg border border-line bg-ink/60 p-4">
              <div className="font-data text-lg font-semibold text-growth">
                ₹3.10
              </div>
              <div className="mt-1 text-xs text-text-dim">
                Returned per lead
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
