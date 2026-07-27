import { GENERAL_FAQS } from "@/lib/faq";

export default function FaqList() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {GENERAL_FAQS.map((f) => (
          <div
            key={f.question}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <h2 className="font-display text-base font-semibold text-text-hi">
              {f.question}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-mid">
              {f.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}