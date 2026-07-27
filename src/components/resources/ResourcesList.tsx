import Link from "next/link";
import { RESOURCES } from "@/lib/resources";

export default function ResourcesList() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-5">
        {RESOURCES.map((r) => (
          <Link
            key={r.title}
            href={r.href}
            target={r.external ? "_blank" : undefined}
            rel={r.external ? "noopener noreferrer" : undefined}
            className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal/40"
          >
            <div>
              <span className="font-data text-xs uppercase tracking-wider text-signal">
                {r.type}
              </span>
              <h2 className="mt-2 font-display text-base font-semibold tracking-tight text-text-hi">
                {r.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-text-mid">
                {r.desc}
              </p>
            </div>
            <span className="mt-1 shrink-0 font-data text-xs text-text-dim transition-transform group-hover:translate-x-1">
              {r.external ? "↗" : "→"}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}