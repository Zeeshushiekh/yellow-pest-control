import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const services = [
  {
    title: 'Household Pest Control',
    desc: 'Targeted treatments for common household pests—fast action with safe methods.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 11l9-8 9 8v10H3V11Z" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 21v-8h6v8" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Termite Solutions (Pre/Post)',
    desc: 'Pre-construction prevention and post-treatment for termites—systematic and effective.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 20c0-5 2-7 5-10 3 3 5 5 5 10" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 20h14" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Waterproofing Solutions',
    desc: 'Reduce moisture issues with reliable waterproofing—help prevent pest attraction.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13Z" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Rodent Solutions (Rats Only)',
    desc: 'Safe rodent control for rats with proper baiting and prevention measures.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 10c0-3 2-5 6-5s6 2 6 5-2 5-6 5-6-2-6-5Z" stroke="#B45309" strokeWidth="2" />
        <path d="M7 20h10" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 15c-2 1-3 2-3 5" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 15c2 1 3 2 3 5" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Wood Borer Solution',
    desc: 'Treat and prevent wood-boring insects to protect furniture and structures.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 20c6-1 10-5 16-16" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 10c2 0 4 1 5 3" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Pipeline Treatment',
    desc: 'Professional pipeline treatment to improve safety and prevent future issues.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 7h12a4 4 0 0 1 0 8H8" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 15l-4 2V9l4 2" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="Our Services"
            title="Complete pest solutions for homes and businesses"
            subtitle="Choose the service you need. Each solution is delivered with professional care and safe treatment methods."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.title} delayMs={idx * 60}>
              <article className="group rounded-[2rem] border border-yellowpc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow/25">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellowpc-50 ring-1 ring-yellowpc-100 text-yellowpc-800 transition-colors group-hover:bg-yellowpc-100">
                    {s.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-zinc-500">Solution</p>
                    <p className="text-sm font-extrabold text-yellowpc-900">#{String(idx + 1).padStart(2, '0')}</p>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{s.desc}</p>

                <div className="mt-5">
                  <ul className="space-y-2 text-sm text-zinc-700">
                    {[
                      'Inspection & guidance',
                      'Safe, effective treatment',
                      'Professional follow-up'
                    ].map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellowpc-500" aria-hidden="true" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href="#enquiry"
                    className="inline-flex items-center gap-2 font-extrabold text-yellowpc-900 hover:text-yellowpc-700 transition-colors"
                  >
                    Book inspection
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-yellowpc-50 group-hover:bg-yellowpc-100">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18l6-6-6-6" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

