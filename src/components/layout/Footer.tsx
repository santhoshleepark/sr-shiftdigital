const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: ["Meta Ads", "Google Ads", "SEO", "Web Development", "AI Automation"],
  },
  {
    title: "Company",
    links: ["About Us", "Case Studies", "Blog", "Careers"],
  },
  {
    title: "Contact",
    links: ["Free Audit", "WhatsApp: +91 78711 52593", "srshiftdigital@gmail.com"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-lg font-bold tracking-tight text-text-hi">
              SR<span className="text-signal">Shift</span>
              <span className="font-medium text-text-mid">Digital</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-dim">
              Chennai&apos;s AI-powered digital marketing agency. We help
              local businesses grow with performance marketing and smart
              automation.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-data text-xs font-semibold uppercase tracking-wider text-text-hi">
                {col.title}
              </div>
              <div className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-sm text-text-dim transition-colors hover:text-text-mid"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7">
          <div className="text-xs text-text-dim">
            © {new Date().getFullYear()} SR Shift Digital. All rights
            reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-dim hover:text-text-mid">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-text-dim hover:text-text-mid">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}