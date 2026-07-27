import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio";

export default function PortfolioGrid() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.slug}
              className="overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div className="relative h-56 w-full bg-ink">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <span className="font-data text-xs uppercase tracking-wider text-signal">
                  {item.category}
                </span>
                <h2 className="mt-2 font-display text-base font-semibold tracking-tight text-text-hi">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs text-text-dim">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}