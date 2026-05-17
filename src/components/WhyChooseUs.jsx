import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const points = [
  { t: 'Affordable pricing', d: 'Transparent quotes with value-focused service for every budget.', icon: '₹' },
  { t: 'Safe chemicals', d: 'Professional-grade, safe treatment methods for homes and offices.', icon: '✓' },
  { t: 'Fast service', d: 'Quick response and timely scheduling for urgent pest issues.', icon: '⚡' },
  { t: 'Professional team', d: 'Trained technicians with the right tools and process.', icon: '👷' },
  { t: 'Guaranteed results', d: 'Reliable solutions with follow-ups to ensure effectiveness.', icon: '★' }
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="Why Choose Us"
            title="Effective pest control with a professional approach"
            subtitle="We combine safe chemical use, expert technicians, and efficient treatment processes to deliver results you can trust."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p, idx) => (
            <Reveal key={p.t} delayMs={idx * 70}>
              <div className="rounded-[2rem] border border-yellowpc-100 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-white">
                    <span className="text-xl">{p.icon}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-zinc-500">Point</p>
                    <p className="text-sm font-extrabold text-yellowpc-900">{idx + 1}</p>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-ink">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

