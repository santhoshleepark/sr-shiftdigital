const PRINCIPLES = [
  {
    title: "From spend to revenue",
    desc: "We don't report on clicks and impressions. We report on what those clicks and impressions turned into — leads, calls, sales.",
  },
  {
    title: "From guesswork to systems",
    desc: "Ads, SEO, website, and automation are built as one connected system, not six disconnected vendors sending six invoices.",
  },
  {
    title: "From generic to local",
    desc: "We build for Chennai and Tamil Nadu businesses first — local search behaviour, local trust signals, local buying patterns.",
  },
];

export default function WhyShift() {
  return (
    <section className="border-t border-line bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            The Name
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            Why we&apos;re called
            <br />
            <span className="text-signal">Shift</span>.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-ink p-8"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight text-text-hi">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-mid">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}