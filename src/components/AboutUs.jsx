import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function AboutUs() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              kicker="About Yellow Pest"
              title="Experienced, trusted pest control experts"
              subtitle="We focus on complete pest solutions—inspection, treatment, and long-term prevention—with safe chemicals and professional service."
            />

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-yellowpc-100 bg-white p-6">
                <p className="text-sm font-bold text-yellowpc-900">What we do</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  From termites and rodents to wood borer and pipeline treatments, our team delivers targeted solutions for
                  different pest types and property conditions.
                </p>
              </div>
              <div className="rounded-3xl border border-yellowpc-100 bg-white p-6">
                <p className="text-sm font-bold text-yellowpc-900">How we work</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  We start with a proper inspection, recommend the right treatment plan (pre/post where needed), and
                  ensure reliable follow-ups.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="relative overflow-hidden rounded-[2.25rem] border border-yellowpc-100 bg-gradient-to-br from-yellowpc-50 to-white p-6">
              <div className="absolute -right-14 -top-14 h-56 w-56 rounded-full bg-yellowpc-500/15 blur-2xl" />
              <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-black/5 blur-2xl" />

              <div className="relative">
                <p className="text-xs font-bold text-zinc-500">Why choose us</p>
                <h3 className="mt-2 text-2xl font-extrabold text-ink">Clean process. Strong results.</h3>

                <div className="mt-6 grid gap-4">
                  {[
                    { n: '01', t: 'Inspection', d: 'Identify pest type and entry points.' },
                    { n: '02', t: 'Treatment Plan', d: 'Right solution for your property.' },
                    { n: '03', t: 'Pre/Post Solutions', d: 'Termite and long-term prevention.' },
                    { n: '04', t: 'Assurance', d: 'Follow-ups and guidance for safety.' }
                  ].map((x) => (
                    <div key={x.n} className="flex items-start gap-4 rounded-2xl bg-white/70 p-4 ring-1 ring-yellowpc-100">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellowpc-50 text-yellowpc-800 font-extrabold">{x.n}</div>
                      <div>
                        <p className="text-sm font-extrabold text-ink">{x.t}</p>
                        <p className="mt-1 text-sm text-zinc-700">{x.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-yellowpc-100 bg-yellowpc-50 p-5">
                  <p className="text-sm font-extrabold text-yellowpc-900">Safe chemicals • Professional team</p>
                  <p className="mt-1 text-sm text-zinc-700">Reliable pest control designed for homes and businesses.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

