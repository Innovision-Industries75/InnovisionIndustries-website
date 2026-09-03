const CERTS = ['AS9100D', 'ISO 13485', 'ISO 9001:2015', 'IPC-A-610 Class 3', 'ITAR Registered', 'RoHS / REACH']

export default function Quality() {
  return (
    <section id="quality" className="bg-navy-950 py-20 md:py-24">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-md">
            <p className="eyebrow mb-4">Built to standard</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Certified across aerospace, medical, and industrial requirements
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {CERTS.map((c) => (
              <span
                key={c}
                className="font-mono text-xs tracking-wide text-steel-200 border border-white/15 rounded-sm px-4 py-2.5"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
