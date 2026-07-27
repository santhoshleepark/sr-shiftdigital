import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SR Shift Digital",
  description: "Privacy Policy for SR Shift Digital, Chennai.",
  alternates: {
    canonical: "https://srshiftdigital.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-text-hi sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-text-dim">
          Last updated: July 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-text-mid">
          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              1. Introduction
            </h2>
            <p>
              SR Shift Digital (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) operates the website srshiftdigital.com. This
              Privacy Policy explains how we collect, use, and protect
              information you provide to us when you use our website or
              contact us for services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              2. Information We Collect
            </h2>
            <p>
              When you fill out our contact or audit request form, we collect
              your name, business name, email address, WhatsApp number, and
              any details you choose to share about your business and goals.
              We do not collect payment information through this website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information you submit solely to respond to your
              enquiry, provide the free audit or service you requested, and
              communicate with you about our services. We do not sell your
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              4. Third-Party Services
            </h2>
            <p>
              Our contact form is processed through Web3Forms, a third-party
              form-handling service, which delivers your submission to our
              email. We may also use analytics tools (such as Google
              Analytics) to understand how visitors use our website. These
              third parties have their own privacy policies governing the use
              of such information.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              5. Data Retention
            </h2>
            <p>
              We retain contact form submissions for as long as necessary to
              respond to your enquiry and maintain business records. You may
              request deletion of your information at any time by contacting
              us at the email below.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              6. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information held by us at any time by emailing{" "}
              <a
                href="mailto:srshiftdigital@gmail.com"
                className="text-signal hover:underline"
              >
                srshiftdigital@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-text-hi">
              8. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:srshiftdigital@gmail.com"
                className="text-signal hover:underline"
              >
                srshiftdigital@gmail.com
              </a>{" "}
              or +91 78711 52593. SR Shift Digital is based in Tamil Nadu,
              India.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}