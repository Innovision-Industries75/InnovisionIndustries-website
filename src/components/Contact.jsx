export default function Contact() {
  return (
    <section id="contact" className="bg-navy-950 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_80%_at_50%_50%,black,transparent)] opacity-60" />
      <div className="relative container-px text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-5">Start a project</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
          Have a spec that needs a manufacturing partner?
        </h2>
        <p className="text-steel-300 mb-10 leading-relaxed">
          Send us your drawings or a rough spec — an engineer will reply within one business day
          with feasibility notes and a prototype timeline.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="work-email" className="sr-only">Work email</label>
          <input
            id="work-email"
            type="email"
            required
            placeholder="you@company.com"
            className="flex-1 bg-white/5 border border-white/15 focus:border-signal-400 rounded-sm px-4 py-3.5 text-white placeholder:text-steel-400 outline-none transition-colors"
          />
          <button
            type="submit"
            className="rounded-sm bg-signal-500 hover:bg-signal-400 text-navy-950 font-semibold px-6 py-3.5 transition-colors whitespace-nowrap"
          >
            Talk to Engineering
          </button>
        </form>
      </div>
    </section>
  )
}
