const ACHIEVEMENTS = [
  {
    tag: 'Patent',
    title:
      'Unidirectional Power Transmission Coupling For Automobiles To Increase Fuel Efficiency',
    type: 'image',
    image: '/certificate.jpg',
  },
  {
    tag: 'ISO 9001:2015',
    title: 'Certified Quality Management System',
    type: 'image',
    image: '/certificate-iso9001.jpg',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="bg-steel-50 py-24 md:py-32">
      <div className="container-px">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow text-signal-600 mb-4">Recognition</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
              Our achievements
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="group block">
              <div className="aspect-[4/3] mb-5 bg-navy-900 relative overflow-hidden">
                {a.type === 'image' ? (
                  <img
                    src={a.image}
                    alt={a.title}
                    className="absolute inset-0 w-full h-full object-contain bg-white"
                  />
                ) : (
                  <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity">
                    <rect x="55" y="20" width="90" height="110" rx="4" stroke="#3FD6E8" strokeWidth="1.5" fill="none" />
                    <line x1="70" y1="45" x2="130" y2="45" stroke="#3FD6E8" strokeWidth="1.5" />
                    <line x1="70" y1="60" x2="130" y2="60" stroke="#3FD6E8" strokeWidth="1.5" />
                    <line x1="70" y1="75" x2="110" y2="75" stroke="#3FD6E8" strokeWidth="1.5" />
                    <circle cx="140" cy="105" r="14" stroke="#C97B4A" strokeWidth="1.5" fill="none" />
                    <path d="M140 95 v20 M130 105 h20" stroke="#C97B4A" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
              <span className="font-mono text-xs text-copper-500 tracking-wide">{a.tag}</span>
              <h3 className="font-display text-lg font-semibold text-navy-900 mt-2 leading-snug group-hover:text-signal-600 transition-colors">
                {a.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}