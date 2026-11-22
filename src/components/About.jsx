export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="container-px">

        {/* Row 1: Company info + photo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="eyebrow text-signal-600 mb-4">About us</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight mb-6">
              Engineering and manufacturing precision components for over 9 years
            </h2>
            <p className="text-steel-500 leading-relaxed mb-4">
              Innovision Industries specializes in industrial automation, SPM manufacturing,
              jigs and fixtures, and design and development of dies and moulds — along with
              CNC bending components, roof rails, side foot steps, roof carriage components,
              and sheet metal fabrication work.
            </p>
            <p className="text-steel-500 leading-relaxed">
              We're an ISO 9001:2015 certified facility with a professional team of
              Production and Mechanical Engineers, using CATIA V5 and SoldWorks for
              design and quality control — because for us, quality is what keeps
              customer relationships strong.
            </p>
          </div>

          <div className="aspect-square w-full bg-steel-100 border border-steel-200 flex items-center justify-center overflow-hidden">
            <img
              src="/innoIndus.jpg"
              alt="Innovision Industries facility"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        </div>

        {/* Row 2: Vision left, Mission right */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
         <div className="border border-steel-200 p-8 group hover:bg-navy-950 transition-colors duration-300">
            <p className="eyebrow text-signal-600 mb-3">Vision</p>
            <p className="text-navy-900 text-lg leading-relaxed group-hover:text-white transition-colors">
              The preferred choice for customers in delivering
            excellence and value in design and engineering solutions.
            With the help of continuous improvement and modification of our production and services become unbeatable.
            Delivering exciting innovations.
            </p>
          </div>
          <div className="border border-steel-200 p-8 group hover:bg-navy-950 transition-colors duration-300">
            <p className="eyebrow text-signal-600 mb-3">Mission</p>
            <p className="text-navy-900 text-lg leading-relaxed group-hover:text-white transition-colors">
              Be the one stop solution of our customers, employees, suppliers & society.
            </p>
          </div>
        </div>

        {/* Row 3: Founders, centered, side by side */}
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow text-signal-600 mb-3">Our founders</p>
          <h3 className="font-display text-2xl font-semibold text-navy-900 mb-10">
            Meet the people behind Innovision
          </h3>
          <div className="flex flex-col sm:flex-row gap-10 justify-center">
            {[
              ['Nivas Dhere', 'Director — Business Development & NPI'],
              ['Sachin Hardikar', 'Director — HR & Finance'],
            ].map(([name, role]) => (
              <div key={name} className="flex flex-col items-center w-56 group">
                <div className="w-32 h-32 rounded-full bg-steel-100 border border-steel-200 overflow-hidden mb-4">
                    <img
                        src={`/founder-${name.split(' ')[0].toLowerCase()}.jpg`}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                </div>
                <p className="font-display font-semibold text-navy-900">{name}</p>
                <p className="text-sm text-steel-500 mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}