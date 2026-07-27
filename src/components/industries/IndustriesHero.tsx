export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
      />
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
          Industries We Serve
        </span>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
          Marketing that speaks
          <br />
          your customer&apos;s language.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-mid">
          Every industry buys differently. We build strategy around how your
          specific customers actually search and decide.
        </p>
      </div>
    </section>
  );
}