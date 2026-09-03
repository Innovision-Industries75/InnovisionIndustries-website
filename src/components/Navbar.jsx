import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Quality', href: '#quality' },
  { label: 'Projects', href: '#projects' },
  { label: 'News', href: '#news' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container-px flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <rect x="1" y="1" width="30" height="30" rx="4" fill="none" stroke="#3FD6E8" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="3.2" fill="#3FD6E8" />
              <path d="M16 1V8M16 24V31M1 16H8M24 16H31" stroke="#3FD6E8" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="font-display font-semibold text-white text-lg tracking-tight">
            Innovision <span className="text-signal-400">Industries</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-steel-200 hover:text-signal-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-signal-500 hover:bg-signal-400 text-navy-950 text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Request a Quote
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-950 border-t border-white/10 px-6 py-6 space-y-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-steel-200 hover:text-signal-400 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center rounded-sm bg-signal-500 text-navy-950 font-semibold px-5 py-3"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  )
}
