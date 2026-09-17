export const SLIDES = [
  {
    title: 'We build the components that keep critical systems running.',
    subtitle:
      'Innovision Industries is an engineering and manufacturing company specializing in industrial solutions, and equipment for sectors such as automotive, and manufacturing.',
    image: '/photo1.jpg',
  },
  {
    title: 'Precision components trusted across aerospace-grade tolerances.',
    subtitle:
      'From fixtures to flight-critical parts, our five-axis machining and inspection processes hold tolerances demanded by aerospace and medical customers.',
    image: '/photo2.jpg',
  },
  {
    title: 'Powering automotive innovation, one component at a time.',
    subtitle:
      'High-volume, repeatable manufacturing for automotive components, tooling, and jigs — built to spec, delivered on schedule.',
    image: '/photo3.jpg',
  },
]

export default function HeroCarousel({ index, setIndex }) {
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIndex((i) => (i + 1) % SLIDES.length)
  const slide = SLIDES[index]

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950">
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] transition-opacity duration-700"
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