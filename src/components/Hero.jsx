import HeroCarousel from './HeroCarousel.jsx'
export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-950 overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <HeroCarousel />
      {/* grid backdrop */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] pointer-events-none" />

      <div className="relative z-10 container-px grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow mb-5 animate-fade-up">Industrial tool Manufacturing</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight max-w-3xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            We build the components that keep critical systems running.
          </h1>
          <p className="mt-6 text-steel-300 text-lg max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
           Innovision Industries  is an engineering and manufacturing company specializing in industrial solutions,  and equipment for sectors such as automotive, and manufacturing.  
          </p>
          <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          </div>
        </div>
      </div>
     
    </section>
  )
}
