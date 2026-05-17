import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const testimonials = [
  {
    name: 'Aman S.',
    role: 'Household Client',
    text: 'Quick inspection and effective termite treatment. We noticed results within days and got proper guidance.'
  },
  {
    name: 'Neha K.',
    role: 'Business Client',
    text: 'Professional team and safe chemicals. The service was fast and the issue was handled properly.'
  },
  {
    name: 'Rahul M.',
    role: 'Property Owner',
    text: 'Wood borer solution was handled systematically. Follow-up and reassurance made it a great experience.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="Testimonials"
            title="Trusted by customers across Ghaziabad"
            subtitle="Real feedback from households and businesses who received professional pest control services."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delayMs={idx * 80}>
              <figure className="rounded-[2rem] border border-yellowpc-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellowpc-50 ring-1 ring-yellowpc-100">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-zinc-500">Rating</p>
                    <p className="text-sm font-extrabold text-yellowpc-900">5.0 ★</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-zinc-700">“{t.text}”</blockquote>
                <figcaption className="mt-5">
                  <p className="font-extrabold text-ink">{t.name}</p>
                  <p className="text-xs text-zinc-600">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

