const COLUMNS = [
  {
    heading: 'Capabilities',
    links: ['PCB Assembly', 'Precision Machining', 'Connectors', 'Sensor Integration', 'Wire Harness'],
  },
  {
    heading: 'Company',
    links: ['About', 'Quality & Certifications', 'Careers', 'Newsroom'],
  },
  {
    heading: 'Resources',
    links: ['Request a Quote', 'Submit Drawings', 'Supplier Portal', 'Contact Engineering'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-8">
      <div className="container-px">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-12">
          <div>
            <span className="font-display font-semibold text-white text-lg tracking-tight">
               <span className="text-signal-400">Innovision Industries</span>
            </span>
            <p className="text-steel-400 text-sm mt-4 max-w-xs leading-relaxed">
              Precision electronic components and assemblies for aerospace, medical, and
              industrial-automation customers.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-steel-400 hover:text-signal-400 text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-steel-500">
          <p>© {new Date().getFullYear()} Innovision Industries. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-signal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-signal-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
