"use client";

import { useState, FormEvent } from "react";

const CONTACT_INFO = [
  { label: "Email", value: "srshiftdigital@gmail.com" },
  { label: "Phone", value: "+91 78711 52593" },
  { label: "WhatsApp", value: "+91 78711 52593" },
  { label: "Location", value: "Tamil Nadu, India" },
];

const SERVICE_OPTIONS = [
  "Meta & Google Ads",
  "SEO & Content",
  "Website Development",
  "AI Automation",
  "Full Package",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""
    );
    formData.append("subject", "New Free Audit Request — SR Shift Digital");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <span className="mb-5 inline-block rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-data text-xs font-medium uppercase tracking-wider text-signal">
            Get Started
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-hi sm:text-5xl">
            Ready to grow?
            <br />
            Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-mid">
            Book a free 30-minute strategy call. We&apos;ll look at your
            current setup, identify the biggest growth opportunity, and tell
            you exactly how we&apos;d approach it — no commitment needed.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {CONTACT_INFO.map((c) => (
              <div key={c.label} className="flex items-baseline gap-3">
                <span className="w-20 shrink-0 font-data text-xs uppercase tracking-wider text-text-dim">
                  {c.label}
                </span>
                <span className="text-sm font-medium text-text-hi">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-8">
          <h3 className="font-display text-xl font-semibold tracking-tight text-text-hi">
            Get your free audit
          </h3>

          <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-text-hi outline-none placeholder:text-text-dim focus:border-signal"
              />
              <input
                type="text"
                name="business_name"
                required
                placeholder="Business name"
                className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-text-hi outline-none placeholder:text-text-dim focus:border-signal"
              />
            </div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-text-hi outline-none placeholder:text-text-dim focus:border-signal"
            />
            <input
              type="tel"
              name="whatsapp"
              required
              placeholder="WhatsApp number"
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-text-hi outline-none placeholder:text-text-dim focus:border-signal"
            />
            <select
              name="service"
              defaultValue=""
              required
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-text-mid outline-none focus:border-signal"
            >
              <option value="" disabled>
                Service you need
              </option>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your business and goals..."
              rows={4}
              className="resize-none rounded-lg border border-line bg-ink px-4 py-3 text-sm text-text-hi outline-none placeholder:text-text-dim focus:border-signal"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-md bg-signal py-3.5 text-sm font-semibold text-ink transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send message →"}
            </button>

            {status === "success" && (
              <p className="text-center text-xs font-medium text-growth">
                Thanks! We&apos;ve got your details — we&apos;ll reach out within 2 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-xs font-medium text-signal">
                Something went wrong. Please WhatsApp us directly at +91 78711 52593.
              </p>
            )}
            {status === "idle" && (
              <p className="text-center text-xs text-text-dim">
                We respond within 2 hours during business hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}