const STEPS = [
  {
    n: '01',
    title: 'Design for Manufacture',
    desc: 'Our engineers review your schematics for DFM issues before a single unit is built, cutting rework cycles later.',
  },
  {
    n: '02',
    title: 'Rapid Prototyping',
    desc: 'Functional prototypes in as little as 10 business days, validated against your test bench specifications.',
  },
  {
    n: '03',
    title: 'Production Assembly',
    desc: 'Scaled SMT and mechanical assembly runs with full traceability from raw material lot to finished serial number.',
  },
  {
    n: '04',
    title: 'In-Line Quality Control',
    desc: 'AOI, X-ray, and functional test stations at every stage — not just at final inspection.',
  },
  {
    n: '05',
    title: 'Ship & Support',
    desc: 'Kitted, labeled, and shipped to your line with full documentation and lifecycle support on request.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-steel-50 py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-signal-600 mb-4">How an order moves</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
            From schematic to shipped hardware
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-0 left-[2.15rem] w-px h-full bg-steel-300" />
          <ol className="space-y-10 md:space-y-14">
            {STEPS.map((s) => (
              <li key={s.n} className="relative md:pl-24 grid md:grid-cols-[auto_1fr] gap-x-8 items-start">
                <span className="relative z-10 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-navy-950 text-signal-400 font-mono text-sm shrink-0 -ml-24">
                  {s.n}
                </span>
                <div className="flex items-baseline gap-3 md:hidden mb-1.5">
                  <span className="font-mono text-signal-600 text-sm">{s.n}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">{s.title}</h3>
                  <p className="text-steel-500 leading-relaxed max-w-xl">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
