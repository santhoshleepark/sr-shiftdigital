"use client";
// src/app/portfolio/PortfolioClient.tsx  (SR Shift Digital team version)
import { useState } from "react";

/* ===== FILL THESE IN. Leave "" to hide that button. ===== */
const TEAM_EMAIL = ""; // e.g. hello@yourdomain.com
const TEAM_PHONE = ""; // team number with country code, digits only, e.g. 919XXXXXXXXX
const CONTACT_PAGE = "/contact"; // your site's existing contact page

const THEME = { "--bg": "#0c1120", "--card": "#10172b", "--line": "rgba(255,255,255,.09)", "--ink": "#f3efe6", "--mute": "#a9b0c4", "--gold": "#ff6a3d", "--btn": "#f3efe6", "--btnink": "#14182a" };

type Lens = "all" | "seo" | "ads" | "ecom" | "web";
const lenses: [Lens, string][] = [["all", "All Work"], ["seo", "SEO"], ["ads", "Paid Ads"], ["ecom", "E-commerce"], ["web", "Websites"]];

const stats = [
  ["10", "Client websites featured", "M3 5h18v14H3zM3 9h18"],
  ["2", "Instagram accounts shown", "M4 4h16v16H4zM12 8a4 4 0 100 8 4 4 0 000-8z"],
  ["4", "Core services", "M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"],
  ["Chennai", "Based in Tamil Nadu", "M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4"],
];

type Project = { l: string[]; e: string; t: string; d: string; r: string; u: string; cs?: boolean; img?: string };
// Optional: add  img: "/portfolio/name.webp"  to any project to use your own screenshot from /public/portfolio/
const projects: Project[] = [
  { l: ["ecom", "seo", "ads"], e: "E-commerce SEO • Product Pages • Google Shopping", t: "AirPath Wirelessnet Solutions", d: "B2B networking and e-commerce website for routers, wireless connectivity and networking hardware.", r: "WordPress, WooCommerce, product SEO, on-page and technical SEO, Rank Math, Google Merchant Center, Shopping setup.", u: "https://www.airpath.in/", cs: true },
  { l: ["seo", "web"], e: "Local SEO • Website Management", t: "Srinivasa Power Solutions", d: "Battery and power solutions business in Chennai.", r: "Website development and management, local SEO, keyword research, content and product optimisation.", u: "https://www.srinivasapowersolutions.in/" },
  { l: ["seo", "ecom"], e: "Local SEO • Product Presentation", t: "Seven Hills Systems", d: "Battery, inverter and solar products.", r: "Website optimisation, local SEO, product presentation, digital marketing.", u: "https://www.sevenhillssystems.com/" },
  { l: ["seo", "web"], e: "Local SEO • Website Optimisation", t: "Amaron Battery Inverter Chennai", d: "Local dealer website for battery and inverter solutions.", r: "Local SEO opportunities, website optimisation, product-focused content.", u: "https://www.amaronbatteryinverterchennai.com/" },
  { l: ["seo", "ecom"], e: "Product SEO • Conversion Structure", t: "Luminous Battery Inverter Chennai", d: "Local dealer website for Luminous battery and inverter products.", r: "Local SEO, product optimisation, conversion-focused page structure.", u: "https://www.luminousbatteryinverterchennai.com/" },
  { l: ["seo", "ecom"], e: "Product SEO • Enquiry Journey", t: "Exide Chennai", d: "Battery and inverter website serving Chennai customers.", r: "Product SEO, local search optimisation, customer enquiry journey.", u: "https://exidechennai.com/" },
  { l: ["web", "ads"], e: "Business Software • SaaS", t: "UBILL", d: "Website for a business software product.", r: "Website and digital marketing work.", u: "https://ubill.tech/" },
  { l: ["web", "seo"], e: "Education • Local Business Website", t: "Karur Kasparov Chess Academy", d: "Website for a chess coaching academy in Karur, Tamil Nadu, with programs, centres, gallery and a demo-class enquiry path.", r: "Website design and build, SEO-ready page structure, enquiry journey.", u: "https://karurkasparovchess.in/" }, // EDIT to match your work
  { l: ["web", "seo"], e: "Insurance Services • Local Business Website", t: "Smart Insurance Service", d: "Website for an insurance and investment advisory business in Karur, built around WhatsApp quote enquiries.", r: "Website design and build, service pages, WhatsApp enquiry flow.", u: "https://smartinsuranceservice.in/" }, // EDIT to match your work
  { l: ["web", "seo", "ads"], e: "Digital Marketing Agency Website", t: "Scale Pix", d: "Website for a Karur-based digital marketing agency covering SEO, ads, social media and web development services.", r: "Website design and build, service page structure, lead enquiry form.", u: "https://scalepix.in/" }, // EDIT to match your work
  { l: ["ads"], e: "Strategy simulation • Google Ads", t: "Local Lead Generation Strategy", d: "A planning exercise for a Chennai battery and inverter business: intent-based ad groups, call ads, negative keywords, Chennai targeting and conversion tracking. Not an executed client campaign. No results are claimed.", r: "Simulation only.", u: "" },
  { l: ["ads"], e: "Strategy concept • Meta Ads", t: "Audience Targeting & Lead Generation", d: "Awareness, interest, consideration, enquiry. Interest targeting, retargeting and lead forms. A conceptual strategy, kept separate from our practical campaign work.", r: "Concept only.", u: "" },
];

const applied = [
  ["Paid media", "01", "Lead Generation Campaigns", "Google Search, Display, YouTube and Shopping campaigns and Meta lead-generation campaigns, tracked through CTR, CPC, CPM, CPL and ROI.", ["Google Ads", "Meta Ads", "GA4"]],
  ["Organic growth", "02", "SEO & Content", "Keyword research, search intent, metadata, headings, internal links and image alt text, with indexing checks in Google Search Console.", ["Rank Math", "Search Console", "WordPress"]],
  ["E-commerce", "03", "Product SEO & Shopping", "WooCommerce product titles, descriptions and metadata, Merchant Center feed monitoring and Google Shopping campaigns.", ["WooCommerce", "Merchant Center", "Shopping"]],
  ["Local search", "04", "Local SEO & Services", "Location-based search research for dealers, installation, maintenance and replacement services, with local landing page and enquiry ideas.", ["Local SEO", "Landing pages", "Keywords"]],
] as const;

const steps = [["Understand", "The business and its customers"], ["Research", "Market, keywords and intent"], ["Strategy", "Channels, budget and priorities"], ["Execute", "Campaigns, pages and tracking"], ["Optimise", "Website content and speed"], ["Improve", "Analyse, test and refine"]];
const marquee = ["SEO Strategy", "Local SEO", "Technical SEO", "WordPress", "WooCommerce", "Google Ads", "Meta Ads", "Merchant Center", "GA4 + GTM", "Search Console", "Rank Math", "Landing Pages"];
const toolkit = [["SEO", ["Keyword research", "On-page + technical SEO", "Local SEO", "Rank Math • Search Console"]], ["Ads", ["Google Ads • Meta Ads", "Audiences • Negative keywords", "Bid management", "CTR • CPC • CPL • ROI"]], ["Website", ["WordPress • Elementor", "WooCommerce", "HTML • CSS • JS basics", "Landing pages"]], ["Analytics & Content", ["GA4 • Tag Manager", "Merchant Center", "Organic social content", "Canva"]]] as const;
const syms = ["{ }", "</>", "=>", "01", "//", "#", "&&", "[]", "()", "!=", "||", ";", "*", "=="];

const preview = (u: string) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(u)}?w=900&h=560`;
const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[var(--gold)]">{children}</p>;
const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div><h2 className="text-3xl italic md:text-4xl" style={{ fontFamily: "var(--serif)" }}>{children}</h2>{sub && <p className="mt-2 text-[11px] uppercase tracking-[.14em] text-[var(--mute)]">{sub}</p>}</div>
);

export default function PortfolioClient() {
  const [lens, setLens] = useState<Lens>("all");
  const [quick, setQuick] = useState(false);
  const shown = projects.filter((p) => lens === "all" || (p.l as string[]).includes(lens));
  const wa = TEAM_PHONE ? `https://wa.me/${TEAM_PHONE}?text=${encodeURIComponent("Hi SR Shift Digital team, I saw your portfolio and would like to discuss a project.")}` : "";

  return (
    <div style={{ ...THEME, fontFamily: "var(--sans)" } as React.CSSProperties} className="relative overflow-hidden bg-[var(--bg)] text-[var(--ink)]">
      <style>{`
        @keyframes drift{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}
        @keyframes slide{to{transform:translateX(-50%)}}
        .sym{animation:drift 9s ease-in-out infinite}.mq{animation:slide 40s linear infinite}
        @media (prefers-reduced-motion:reduce){.sym,.mq{animation:none}}
      `}</style>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[1400px] select-none font-mono text-xl opacity-[.07]">
        {syms.map((s, i) => <span key={i} className="sym absolute" style={{ left: `${(i * 37) % 95}%`, top: `${(i * 53) % 90}%`, animationDelay: `${i * 0.7}s` }}>{s}</span>)}
      </div>

      <main id="top" className="relative z-10 pt-20">
        {/* hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 text-center md:pt-20">
          <p className="mx-auto inline-block rounded-full border border-[var(--line)] px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em]">SEO • Websites • Performance Marketing • Chennai</p>
          <h1 className="mt-8 text-5xl md:text-7xl" style={{ fontFamily: "var(--serif)" }}>SR Shift Digital Team</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--mute)] md:text-xl">We help businesses grow through SEO, high-performing websites and digital marketing, built for search and made to bring in enquiries.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={CONTACT_PAGE} className="rounded-full bg-[var(--btn)] px-6 py-3 text-sm font-semibold text-[var(--btnink)]">Discuss Your Project</a>
            <a href="#work" className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold">Explore Our Work</a>
          </div>
          <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(([n, l, p]) => (
              <li key={l} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-6">
                <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5 fill-none stroke-[var(--gold)]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={p} /></svg>
                <p className="mt-2 text-3xl" style={{ fontFamily: "var(--serif)" }}>{n}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-[var(--mute)]">{l}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* work */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
          <div role="group" aria-label="Filter work" className="mx-auto mb-14 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-3">
            <span className="px-2 text-[10px] font-bold uppercase tracking-[.14em] text-[var(--mute)]">Filter</span>
            {lenses.map(([k, n]) => (
              <button key={k} onClick={() => setLens(k)} aria-pressed={lens === k} className={`rounded-full border px-4 py-2 text-sm font-semibold ${lens === k ? "border-transparent bg-[var(--btn)] text-[var(--btnink)]" : "border-[var(--line)]"}`}>{n}</button>
            ))}
          </div>
          <div className="mb-8 flex items-end justify-between gap-4">
            <Title sub="Portfolio 2026">Selected SEO, Website &amp; Ads Work</Title>
            <button onClick={() => setQuick(!quick)} aria-pressed={quick} className="rounded-full border border-[var(--line)] px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em]">Quick scan</button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {shown.map((p) => (
              <article key={p.t} className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
                <div className="aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
                  {p.u ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.img ?? preview(p.u)} alt={`Homepage preview of ${p.t}`} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="grid h-full place-items-center p-6 text-center text-sm text-[var(--mute)]">{p.r}</div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-[var(--gold)]">{p.e}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug">
                    {p.u ? <a href={p.u} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">{p.t}<span className="sr-only"> (opens website in a new tab)</span></a> : p.t}
                  </h3>
                  {!quick && <>
                    <p className="mt-2 text-[15px] text-[var(--mute)]">{p.d}</p>
                    {p.u && <p className="mt-3 text-sm text-[var(--mute)]"><strong className="text-[var(--ink)]">Our focus:</strong> {p.r}</p>}
                  </>}
                  <div className="mt-auto flex items-center justify-between pt-5 text-sm font-semibold">
                    {p.u ? <span className="text-[var(--gold)]">Visit website ↗</span> : <span />}
                    {p.cs && <a href="#case-study" className="relative z-10 rounded-full border border-[var(--gold)] px-3 py-1 text-xs text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--btnink)]">View case study</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-[var(--line)] p-4 text-sm italic text-[var(--mute)]">All websites on this page are shown with the permission of the respective clients. Client performance data remains confidential, and further details of our role on each project are available on request.</p>
        </section>

        {/* social */}
        <section id="social" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
          <Title sub="Organic social media">Instagram Content for Local Brands</Title>
          <p className="mt-4 max-w-2xl text-[var(--mute)]">We create and publish organic Instagram posts for small businesses. These two accounts are shown with the clients&apos; permission.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[["Bee Infinity Dance", "@beeinfinitydance", "https://www.instagram.com/beeinfinitydance/"], ["Bee Infinity Events", "@beeinfinityevents", "https://www.instagram.com/beeinfinityevents/"]].map(([n, h, u]) => (
              <article key={h} className="flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--card)] p-7">
                <Eyebrow>Instagram • Organic content</Eyebrow>
                <h3 className="mt-3 text-2xl" style={{ fontFamily: "var(--serif)" }}>{n}</h3>
                <p className="mt-3 text-[15px] text-[var(--mute)]"><strong className="text-[var(--ink)]">Our focus:</strong> organic post creation and publishing for the {h} account.</p>
                <a href={u} target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 text-sm font-semibold text-[var(--gold)]">View {h} on Instagram</a>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-[var(--line)] p-4 text-sm italic text-[var(--mute)]">Only client-approved accounts are displayed. Other social accounts we have worked on are not listed because sharing permission has not been given, and their details remain confidential. More examples are available on request.</p>
        </section>

        {/* case study */}
        <section id="case-study" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
          <Title sub="Featured case study">E-commerce SEO &amp; Product Optimisation</Title>
          <p className="mt-4 max-w-2xl text-[var(--mute)]">AirPath Wirelessnet Solutions is an e-commerce website for networking hardware, industrial routers, wireless connectivity and networking products.</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-5">
            {["Research", "Strategy", "Optimisation", "Implementation", "Monitoring"].map((s, i) => <li key={s} className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-4"><span className="text-xs font-bold text-[var(--gold)]">0{i + 1}</span><p className="mt-1 font-semibold">{s}</p></li>)}
          </ol>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-7">
              <h3 className="text-xl" style={{ fontFamily: "var(--serif)" }}>What we worked on</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-[15px] text-[var(--mute)]">{["Keyword research and search intent", "Product page SEO", "SEO titles and meta descriptions", "Product descriptions", "Image alt text and heading structure", "Internal linking", "WordPress and WooCommerce management", "Rank Math SEO optimisation", "Google Merchant Center integration", "Google Shopping campaign setup"].map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-7">
              <h3 className="text-xl" style={{ fontFamily: "var(--serif)" }}>The approach</h3>
              <dl className="mt-4 space-y-4 text-[15px]">
                <div><dt className="font-semibold">The need</dt><dd className="text-[var(--mute)]">A networking hardware store needed its products to be easier to find on Google and easier to understand for B2B buyers.</dd></div>
                <div><dt className="font-semibold">What we did</dt><dd className="text-[var(--mute)]">Researched what buyers search for, rewrote product titles, descriptions and metadata, cleaned up headings, image alt text and internal links, then connected the store to Google Merchant Center for Shopping.</dd></div>
                <div><dt className="font-semibold">How progress is tracked</dt><dd className="text-[var(--mute)]">Search Console for clicks, impressions and indexing. Merchant Center for product approvals. Google Ads for Shopping performance.</dd></div>
              </dl>
              <p className="mt-5 border-t border-[var(--line)] pt-4 text-sm italic text-[var(--mute)]">Client performance data is confidential. We&apos;re happy to walk through the work on a call.</p>
            </div>
          </div>
        </section>

        {/* applied */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <Title sub="Applied work">Hands-on experience, not just tool names.</Title>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {applied.map(([tag, n, t, d, chips]) => (
              <article key={n} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-7">
                <Eyebrow>{tag}</Eyebrow>
                <p className="mt-3 text-xs font-bold text-[var(--mute)]">{n}</p>
                <h3 className="text-xl" style={{ fontFamily: "var(--serif)" }}>{t}</h3>
                <p className="mt-2 text-[15px] text-[var(--mute)]">{d}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{chips.map((c) => <li key={c} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs">{c}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        {/* process */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <Title sub="Operating rhythm">How we work</Title>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map(([t, d], i) => <li key={t} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5"><span className="text-xs font-bold text-[var(--gold)]">0{i + 1}</span><p className="mt-2 text-lg" style={{ fontFamily: "var(--serif)" }}>{t}</p><p className="mt-1 text-xs text-[var(--mute)]">{d}</p></li>)}
          </ol>
        </section>

        {/* capabilities */}
        <section id="capabilities" className="scroll-mt-24 py-16">
          <div className="mx-auto max-w-6xl px-5"><Title sub="Capability system">Capabilities &amp; Technical Toolkit</Title></div>
          <div className="my-8 overflow-hidden border-y border-[var(--line)] py-4" aria-hidden>
            <div className="mq flex w-max gap-10 whitespace-nowrap text-sm font-semibold text-[var(--mute)]">{[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}</div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
            {toolkit.map(([h, l]) => <div key={h} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6"><h3 className="text-lg" style={{ fontFamily: "var(--serif)" }}>{h}</h3><ul className="mt-3 space-y-2 text-sm text-[var(--mute)]">{l.map((x) => <li key={x}>{x}</li>)}</ul></div>)}
          </div>
        </section>

        {/* contact */}
        <section id="contact-us" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-20 text-center">
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--serif)" }}>Have a website that needs more visibility?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--mute)]">Whether you&apos;re looking to improve your website&apos;s SEO, build a professional WordPress website or plan your next digital advertising campaign, let&apos;s discuss how we can move your business forward.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <a href={CONTACT_PAGE} className="rounded-full bg-[var(--btn)] px-6 py-3 text-[var(--btnink)]">Discuss a Project</a>
            {TEAM_EMAIL && <a href={`mailto:${TEAM_EMAIL}`} className="rounded-full border border-[var(--line)] px-6 py-3">Email the Team</a>}
            {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--line)] px-6 py-3">WhatsApp Enquiry</a>}
          </div>
          {(TEAM_EMAIL || TEAM_PHONE) && <p className="mt-4 text-sm text-[var(--mute)]">{[TEAM_EMAIL, TEAM_PHONE && `+${TEAM_PHONE}`, "Chennai, India"].filter(Boolean).join(" • ")}</p>}
        </section>
      </main>
    </div>
  );
}
