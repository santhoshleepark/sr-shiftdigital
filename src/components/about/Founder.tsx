import Image from "next/image";

export default function Founder() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-surface">
          {/*
            Add your real photo at /public/images/founder.jpg
            (square-ish crop, well-lit, plain background works best)
          */}
          <Image
            src="/images/founder.jpg"
            alt="Santhosh Ravi, Founder of SR Shift Digital"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        </div>

        <div>
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            Founder
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text-hi sm:text-4xl">
            Santhosh Ravi
          </h2>
          <p className="mt-1 text-sm font-medium text-text-mid">
            Founder & CEO, SR Shift Digital
          </p>

          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-text-mid">
            <p>
              Before starting SR Shift Digital, I saw the same problem over
              and over with local Chennai businesses: they were paying for
              ads, for SEO, for social media — from different vendors who
              never talked to each other. Budgets got wasted in the gaps.
            </p>
            <p>
              SR Shift Digital exists to close that gap. We run ads, SEO,
              websites, and AI automation as one connected system, so every
              part of your marketing feeds the others instead of working
              against them.
            </p>
            <p>
              Every client we work with gets the same standard: if a rupee
              spent doesn&apos;t shift into a measurable result, we fix it or
              we stop spending it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}