import { useState } from 'react'

const SLIDES = [
  {
    title: 'CNC Precision Machining',
    subtitle: 'Five-axis tolerances under 10 microns',
    image:'public/photo1.jpg',
    
  },
  {
    title: 'PCB & Electronics Assembly',
    subtitle: 'High-density SMT lines, 100% AOI inspected',
    
  },
  {
    title: 'Automated Quality Testing',
    subtitle: 'X-ray and functional test on every batch',
    
  },
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIndex((i) => (i + 1) % SLIDES.length)
  const slide = SLIDES[index]

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950">
      <img
       src={slide.image}
       alt={slide.title}
       className="absolute inset-0 w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-navy-950/70" />

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