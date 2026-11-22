
const PRODUCTS = [
  {
    title: 'Roof Rails & Carriers',
    desc: 'Automotive roof rails and carriers, including documented vehicle applications. AL-6063 T6 is listed for the relevant applications.',
    image: '/products/roofrails.jpg',
  },
  {
    title: 'CNC Machined Components',
    desc: 'Precision-machined automotive and engineering components, including bearing rings and undercarriage components.',
    image: '/products/cnc-components.jpg',
  },
  {
    title: 'Jigs, Fixtures & Dies',
    desc: 'Checking fixtures, gauges, dies and tooling for manufacturing and inspection applications.',
    image: '/products/jig.jpg',
  },
  {
    title: 'Sheet Metal & Welded Assemblies',
    desc: 'Fabricated brackets, mounting plates and welded assemblies for automotive and industrial applications.',
    image: '/products/welded-assemblies.jpg',
  },
  {
    title: 'Special Purpose Machines',
    desc: 'Special-purpose machines for automated machining and assembly processes.',
    image: '/products/jigs-fixtures.jpg',
  },
  {
    title: 'Aluminium Extrusion Profiles',
    desc: 'Aluminium extrusion profiles and associated tooling for documented automotive applications.',
    image: '/products/spm.jpg',
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="bg-steel-50 py-24 md:py-32"
    >
      <div className="container-px">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-signal-600 mb-4">
            What we make
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight">
            Our Product Range
          </h2>

          <p className="text-steel-500 mt-4 leading-relaxed">
            Explore our automotive components, precision machining,
            tooling, fabrication and industrial automation capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="bg-white border border-steel-200 group hover:bg-navy-950 transition-colors duration-300"
            >
              <div className="aspect-[4/3] bg-steel-100 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-navy-900 group-hover:text-white mb-3 transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-steel-500 group-hover:text-steel-300 leading-relaxed transition-colors">
                  {p.desc}
                </p>

                <a
                  href="#contact"
                  className="inline-block mt-5 text-sm font-semibold text-signal-600 group-hover:text-amber-400"
                >
                  Enquire Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
