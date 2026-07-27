import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SR Shift Digital",
  description: "Terms of Service for SR Shift Digital, Chennai.",
  alternates: {
    canonical: "https://srshiftdigital.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-text-hi sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-text-dim">Last updated: July 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-text-mid">
          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing srshiftdigital.com or engaging SR Shift Digital
              for services, you agree to these Terms of Service. If you do
              not agree, please do not use this website or our services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              2. Services
            </h2>
            <p>
              SR Shift Digital provides digital marketing services including
              but not limited to Google Ads management, Meta Ads management,
              SEO, website development, and AI automation. Specific scope,
              deliverables, and pricing for any engagement are agreed
              separately in writing (including via email or WhatsApp) before
              work begins.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              3. Ad Spend vs. Management Fees
            </h2>
            <p>
              Where applicable, our management fees are separate from any
              advertising budget paid directly to platforms such as Google or
              Meta. We do not mark up ad spend billed by these platforms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              4. No Guaranteed Results
            </h2>
            <p>
              While we work diligently to improve marketing performance,
              rankings, and lead generation, we do not guarantee specific
              results, rankings, or revenue outcomes, as these depend on
              factors outside our control including market conditions,
              competition, and platform algorithm changes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              5. Client Responsibilities
            </h2>
            <p>
              Clients are responsible for providing timely access to
              accounts, assets, and approvals needed to carry out agreed
              work, and for the accuracy of information provided to us about
              their business.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              6. Payment Terms
            </h2>
            <p>
              Payment terms are agreed on a per-client basis at the start of
              an engagement. Late or non-payment may result in pause or
              termination of services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              7. Termination
            </h2>
            <p>
              Either party may terminate an ongoing engagement with
              reasonable written notice, as agreed at the start of the
              engagement. Fees for work already performed remain payable.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              8. Intellectual Property
            </h2>
            <p>
              Upon full payment, deliverables created specifically for a
              client (such as website code and custom creative) become the
              client&apos;s property, excluding any third-party tools,
              templates, or licensed assets used in production.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              9. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India, with courts in
              Tamil Nadu having jurisdiction over any disputes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              10. Contact Us
            </h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:srshiftdigital@gmail.com"
                className="text-signal hover:underline"
              >
                srshiftdigital@gmail.com
              </a>{" "}
              or +91 78711 52593.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}