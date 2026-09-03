const CAPS = [
  {
    title: 'PCB Assembly',
    desc: 'High-density SMT and through-hole assembly lines with automated optical inspection on every panel.',
    icon: (
      <path d="M4 4h16v16H4z M8 8h3v3H8z M13 8h3v3h-3z M8 13h3v3H8z M13 13h3v3h-3z" />
    ),
  },
  {
    title: 'Precision Machining',
    desc: 'Five-axis CNC machining of connector housings and enclosures to sub-10-micron tolerances.',
    icon: <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />,
  },
  {
    title: 'Connectors & Interconnects',
    desc: 'Custom connector systems engineered for vibration, thermal cycling, and EMI-sensitive environments.',
    icon: <path d="M6 12h4M14 12h4M10 8v8M14 8v8 M4 8h2v8H4zM18 8h2v8h-2z" />,
  },
  {
    title: 'Sensor Integration',
    desc: 'End-to-end integration of pressure, temperature, and motion sensors into finished assemblies.',
    icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM12 8v4l3 2" />,
  },
  {
    title: 'Cable & Wire Harness',
    desc: 'Fully documented harness builds with continuity and hipot testing on 100% of output.',
    icon: <path d="M3 6c4 0 4 12 8 12s4-12 8-12" />,
  },
  {
    title: 'Failure Analysis Lab',
    desc: 'In-house X-ray, cross-section, and thermal-imaging lab for root-cause and reliability testing.',
    icon: <path d="M11 4a7 7 0 104.9 12L21 21M11 4a7 7 0 00-7 7M11 4v0" />,
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-signal-600 mb-4">What we build</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
            Manufacturing capabilities engineered for reliability
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200 border border-steel-200">
          {CAPS.map((c) => (
            <div key={c.title} className="bg-white p-8 group hover:bg-navy-950 transition-colors duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-9 h-9 text-signal-600 group-hover:text-signal-400 mb-6 transition-colors"
              >
                {c.icon}
              </svg>
              <h3 className="font-display text-lg font-semibold text-navy-900 group-hover:text-white mb-2.5 transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-steel-500 group-hover:text-steel-300 leading-relaxed transition-colors">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
