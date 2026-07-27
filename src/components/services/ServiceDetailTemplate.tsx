import CtaBanner from "@/components/ui/CtaBanner";

export type ServiceFeature = {
  title: string;
  desc: string;
};

export type ServiceProcessStep = {
  n: string;
  title: string;
  desc: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetailData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  ctaTitle: string;
  ctaSubtitle: string;
};

export default function ServiceDetailTemplate({ data }: { data: ServiceDetailData }) {
  const { eyebrow, title, subtitle, stats, features, process, faqs, ctaTitle, ctaSubtitle } = data;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-mid">
            {subtitle}
          </p>

          {stats.length > 0 && (
            <div className="mx-auto mt-12 flex max-w-xl justify-center gap-10 border-t border-line pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-data text-2xl font-semibold tabular-nums text-text-hi">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-text-dim">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-line px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-text-hi">
            What&apos;s included
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-surface p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-text-hi">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-mid">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-text-hi">
            Our approach
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {process.map((s) => (
              <div key={s.n} className="flex gap-5 rounded-2xl border border-line bg-ink p-8">
                <span className="font-data text-sm font-semibold tabular-nums text-signal">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-text-hi">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-mid">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-text-hi">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((f) => (
              <div key={f.question} className="rounded-xl border border-line bg-surface p-6">
                <h3 className="font-display text-base font-semibold text-text-hi">
                  {f.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title={ctaTitle} subtitle={ctaSubtitle} />
    </main>
  );
}