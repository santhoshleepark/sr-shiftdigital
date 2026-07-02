export default function MissionVision() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-10">
          <span className="font-data text-xs uppercase tracking-wider text-text-dim">
            Mission
          </span>
          <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-text-hi">
            Help businesses generate predictable leads using AI and digital
            marketing.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-10">
          <span className="font-data text-xs uppercase tracking-wider text-text-dim">
            Vision
          </span>
          <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-text-hi">
            Build India&apos;s smartest AI-powered digital marketing company.
          </p>
        </div>
      </div>
    </section>
  );
}