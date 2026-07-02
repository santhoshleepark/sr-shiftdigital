type Stat = {
  value: string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  {
    value: "50+",
    label: "Active clients",
    sub: "Across Tamil Nadu & beyond",
  },
  {
    value: "3.1x",
    label: "Avg. ROAS delivered",
    sub: "On Meta & Google campaigns",
  },
  {
    value: "₹2Cr+",
    label: "Ad spend managed",
    sub: "With profitable returns",
  },
  {
    value: "98%",
    label: "Client retention",
    sub: "They stay because results stay",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-data text-4xl font-semibold tabular-nums text-text-hi sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-3 text-sm font-medium text-text-hi">
              {s.label}
            </div>
            <div className="mt-1 text-xs text-text-dim">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}