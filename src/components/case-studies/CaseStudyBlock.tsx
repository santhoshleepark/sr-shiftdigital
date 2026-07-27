import type { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-text-hi">
          {study.client}
        </h2>
        <span className="font-data text-xs text-text-dim">
          {study.industry} · {study.location}
        </span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <div>
            <span className="font-data text-xs uppercase tracking-wider text-text-dim">
              Challenge
            </span>
            <p className="mt-2 text-sm leading-relaxed text-text-mid">
              {study.challenge}
            </p>
          </div>
          <div>
            <span className="font-data text-xs uppercase tracking-wider text-text-dim">
              Approach
            </span>
            <p className="mt-2 text-sm leading-relaxed text-text-mid">
              {study.approach}
            </p>
          </div>
          <blockquote className="border-l-2 border-signal pl-4 text-sm italic leading-relaxed text-text-mid">
            &ldquo;{study.quote}&rdquo;
          </blockquote>
        </div>

        <div className="flex flex-col gap-4">
          {study.results.map((r) => (
            <div
              key={r.label}
              className="rounded-xl border border-line bg-ink p-5"
            >
              <div className="font-data text-2xl font-semibold tabular-nums text-signal">
                {r.value}
              </div>
              <div className="mt-1 text-xs text-text-dim">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}