export default function BlogHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
      />
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
          Blog
        </span>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
          Marketing insights,
          <br />
          without the fluff.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-mid">
          Practical breakdowns of what's actually working for Chennai
          businesses right now.
        </p>
      </div>
    </section>
  );
}