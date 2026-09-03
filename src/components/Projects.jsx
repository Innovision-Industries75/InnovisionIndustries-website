const PROJECTS = [
  {
    sector: 'Aerospace',
    title: 'Avionics connector re-engineering',
    desc: 'Redesigned a legacy connector family to cut weight 18% while holding certification under DO-160 vibration profiles.',
  },
  {
    sector: 'Medical',
    title: 'Diagnostic device sensor array',
    desc: 'Integrated a five-sensor array into a portable diagnostic housing with a 3-week prototype-to-pilot timeline.',
  },
  {
    sector: 'Industrial',
    title: 'Factory-floor control assemblies',
    desc: 'Scaled production of ruggedized control assemblies for a robotics line, sustaining 40,000 units/month at 8 ppm.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-signal-600 mb-4">Selected work</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
            Problems our floor has solved
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <article key={p.title} className="border border-steel-200 hover:border-navy-800 transition-colors p-8 flex flex-col">
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-copper-500 mb-5">
                {p.sector}
              </span>
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-steel-500 leading-relaxed mb-6">{p.desc}</p>
              <a href="#contact" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-signal-600 transition-colors">
                Discuss a similar build
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
