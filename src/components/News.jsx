const NEWS = [
  {
    date: 'Jul 2026',
    title: 'Innovision opens second SMT line to meet medical-device demand',
    tag: 'Company',
  },
  {
    date: 'May 2026',
    title: 'Named a preferred connector supplier for a regional aerospace program',
    tag: 'Partnership',
  },
  {
    date: 'Feb 2026',
    title: 'Achieves AS9100D recertification with zero major findings',
    tag: 'Quality',
  },
]

export default function News() {
  return (
    <section id="news" className="bg-steel-50 py-24 md:py-32">
      <div className="container-px">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow text-signal-600 mb-4">Newsroom</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
              Latest from the floor
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-navy-800 hover:text-signal-600 transition-colors">
            View all updates →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map((n) => (
            <a href="#" key={n.title} className="group block">
              <div className="aspect-[4/3] mb-5 bg-navy-900 relative overflow-hidden">
                <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity">
                  <path d="M0 40 H70 V90 H140 V20 H200" stroke="#3FD6E8" strokeWidth="1" fill="none" />
                  <circle cx="70" cy="40" r="2.5" fill="#3FD6E8" />
                  <circle cx="140" cy="90" r="2.5" fill="#C97B4A" />
                </svg>
              </div>
              <span className="font-mono text-xs text-copper-500 tracking-wide">{n.date} · {n.tag}</span>
              <h3 className="font-display text-lg font-semibold text-navy-900 mt-2 leading-snug group-hover:text-signal-600 transition-colors">
                {n.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
