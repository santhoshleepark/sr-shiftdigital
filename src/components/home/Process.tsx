type Step = {
  n: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Free audit",
    desc: "We analyse your current ads, website, and SEO — and show you exactly where money is being wasted and where growth is being missed.",
  },
  {
    n: "02",
    title: "Custom strategy",
    desc: "No copy-paste plans. We build a strategy specific to your business, budget, and target customer — with a 90-day roadmap.",
  },
  {
    n: "03",
    title: "Launch & execute",
    desc: "Campaigns go live, content goes out, automations run. You see the work, not just the invoices.",
  },
  {
    n: "04",
    title: "Optimise & report",
    desc: "Every week we analyse performance. Every month you get a clear report with real numbers — and a plan to grow further.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            How We Work
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            From audit to growth.
            <br />A clear path forward.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="flex gap-5 rounded-2xl border border-line bg-surface p-8"
            >
              <span className="font-data text-sm font-semibold tabular-nums text-signal">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-text-hi">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-mid">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}