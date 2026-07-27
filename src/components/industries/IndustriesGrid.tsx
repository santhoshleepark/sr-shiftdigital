import { INDUSTRIES } from "@/lib/industries";

export default function IndustriesGrid() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="rounded-2xl border border-line bg-surface p-8"
            >
              <h2 className="font-display text-lg font-semibold tracking-tight text-text-hi">
                {ind.name}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-text-mid">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}