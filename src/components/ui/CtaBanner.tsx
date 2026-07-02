import Button from "@/components/ui/Button";

type CtaBannerProps = {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CtaBanner({
  title,
  subtitle,
  buttonLabel = "Get Your Free Audit →",
  buttonHref = "/#contact",
}: CtaBannerProps) {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-signal/30 bg-signal/5 p-12 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-text-hi sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-mid">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex justify-center">
          <Button href={buttonHref}>{buttonLabel}</Button>
        </div>
      </div>
    </section>
  );
}