import Button from "@/components/ui/Button";

export default function NotSure() {
  return (
    <section className="border-t border-line bg-surface px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-text-hi">
          Not sure which one you need?
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-text-mid">
          Most businesses need 2–3 of these working together. Get a free
          audit and we&apos;ll tell you exactly where to start.
        </p>
        <Button href="/#contact">Get Your Free Audit →</Button>
      </div>
    </section>
  );
}