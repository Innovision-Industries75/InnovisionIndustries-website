const PARTNERS = [
  { name: 'TATA AUTOCOMP SYSTEMS LTD', logo: 'tata-autocomp.png' },
  { name: 'GREAVES', logo: 'greaves.png' },
  { name: 'DAS', logo: 'das.png' },
  { name: 'CHALLENGER', logo: 'challenger.png' },
  { name: 'PIAGGIO', logo: 'piaggio.png' },
  { name: 'DANA SPICER', logo: 'dana-spicer.png' },
  { name: 'EXIDE', logo: 'exide.png' },
  { name: 'GARWARE TECHNICAL FIBRES', logo: 'garware.png' },
  { name: 'MATE', logo: 'mate.png' },
  { name: 'AEROFLEX', logo: 'aeroflex.png' },
  { name: 'VARROC', logo: 'varroc.png' },
]

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-signal-600 mb-4">Who we work with</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
            Our business partners
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {PARTNERS.map((p) => (
            <div
                key={p.name}
               className="aspect-square rounded-full border border-steel-200 flex items-center justify-center p-4 hover:border-navy-800 transition-colors"
            >
            <img
            src={`/partners/${p.logo}`}
            alt={p.name}
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'block'
             }}
            />
            <p className="hidden font-display text-center text-navy-800 font-semibold text-sm sm:text-base">
            {p.name}
            </p>
        </div>
        ))}
        </div>
      </div>
    </section>
  )
}