import { useState } from 'react'

const SLIDES = [
  {
    title: 'CNC Precision Machining',
    subtitle: 'Five-axis tolerances under 10 microns',
    icon: 'M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z M12 16v6 M8 22h8',
  },
  {
    title: 'PCB & Electronics Assembly',
    subtitle: 'High-density SMT lines, 100% AOI inspected',
    icon: 'M4 4h16v16H4z M8 8h3v3H8z M13 8h3v3h-3z M8 13h3v3H8z M13 13h3v3h-3z',
  },
  {
    title: 'Automated Quality Testing',
    subtitle: 'X-ray and functional test on every batch',
    icon: 'M11 4a7 7 0 104.9 12L21 21M11 4a7 7 0 00-7 7',
  },
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIndex((i) => (i + 1) % SLIDES.length)
  const slide = SLIDES[index]

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950">
        <div className="absolute inset-0 bg-navy-950/70" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="#3FD6E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
          <path d={slide.icon} />
        </svg>
        <h3 className="font-display text-white text-xl font-semibold">{slide.title}</h3>
        <p className="text-steel-300 text-sm">{slide.subtitle}</p>
      </div>

      <button onClick={prev} aria-label="Previous slide" className="absolute z-20 left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        ‹
      </button>
      <button onClick={next} aria-label="Next slide" className="absolute z-20 right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        ›
      </button>

      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-signal-400' : 'bg-white/25'}`} />
        ))}
      </div>
    </div>
  )
}