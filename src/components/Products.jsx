const PRODUCTS = [
  {
    title: 'Roof Rails & Carriers',
    desc: 'Extruded and machined roof rail systems for passenger vehicles, in AL-6063 T6.',
    image: 'roof-rails.jpg',
  },
  {
    title: 'CNC Machined Components',
    desc: 'Precision-machined automotive and engineering parts, including bearing rings and undercarriage components.',
    image: 'cnc-components.jpg',
  },
  {
    title: 'Jigs, Fixtures & Dies',
    desc: 'Custom checking fixtures, gauges, and tooling designed and built in-house.',
    image: 'jigs-fixtures.jpg',
  },
  {
    title: 'Sheet Metal & Welded Assemblies',
    desc: 'Fabricated brackets, mounting plates, and welded assemblies for automotive and industrial use.',
    image: 'welded-assemblies.jpg',
  },
  {
    title: 'Special Purpose Machines',
    desc: 'SPMs designed and built for automated machining and assembly lines.',
    image: 'spm.jpg',
  },
  {
    title: 'Aluminium Extrusion Profiles',
    desc: 'Custom extrusion profiles for structural, automotive, and industrial applications.',
    image: 'extrusion-profiles.jpg',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-steel-50 py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-signal-600 mb-4">What we make</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
            Our product range
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.title} className="bg-white border border-steel-200 group hover:bg-navy-950 transition-colors duration-300">
             <div className="aspect-[4/3] bg-steel-100 overflow-hidden">
                <img
                src={`/products/${p.image}`}
                alt={p.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
                />
             </div>
    <div className="p-8">
      <h3 className="font-display text-lg font-semibold text-navy-900 group-hover:text-white mb-2.5 transition-colors">
        {p.title}
      </h3>
      <p className="text-sm text-steel-500 group-hover:text-steel-300 leading-relaxed transition-colors">
        {p.desc}
      </p>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  )
}