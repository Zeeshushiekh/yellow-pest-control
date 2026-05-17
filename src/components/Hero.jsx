import Reveal from './Reveal.jsx'

const phone1 = '+91 8859956356'
const phone2 = '+91 9870540563'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellowpc-50 via-white to-white" />
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellowpc-200/40 blur-3xl" />
      <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-yellowpc-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-18">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-xs font-bold tracking-wide">
                  Emergency Pest Control
                </span>
                <span className="inline-flex items-center rounded-full bg-yellowpc-50 text-yellowpc-900 px-4 py-2 text-xs font-bold">
                  Free Inspection & Quote
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Protect Your Home & Business From Pests
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
                Yellow Pest Control Services provides safe, fast, and reliable pest solutions for households and
                commercial spaces. Get professional treatment for termites, rodents, wood borers, pipeline issues, and
                more.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${phone1.replace(/\s+/g,'')}`}
                  className="inline-flex items-center justify-center rounded-2xl bg-yellowpc-500 px-6 py-3 text-base font-extrabold text-white shadow-glow hover:bg-yellowpc-600 transition-colors"
                >
                  Call Now {phone1}
                </a>
                <a
                  href={`tel:${phone2.replace(/\s+/g,'')}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-yellowpc-200 bg-white px-6 py-3 text-base font-bold text-ink hover:bg-yellowpc-50 transition-colors"
                >
                  {phone2}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="#enquiry"
                  className="inline-flex items-center justify-center rounded-2xl bg-ink px-6 py-3 text-base font-extrabold text-white hover:opacity-95 transition-opacity"
                >
                  Book Inspection
                </a>
                <p className="text-sm text-zinc-600">
                  Quick response • Experienced technicians • Guaranteed results
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-yellowpc-100 bg-white p-4">
                  <p className="text-xs font-bold text-zinc-500">Trusted Experts</p>
                  <p className="mt-1 text-lg font-extrabold text-ink">Mohd. Azad</p>
                </div>
                <div className="rounded-2xl border border-yellowpc-100 bg-white p-4">
                  <p className="text-xs font-bold text-zinc-500">Areas</p>
                  <p className="mt-1 text-lg font-extrabold text-ink">Ghaziabad</p>
                </div>
                <div className="rounded-2xl border border-yellowpc-100 bg-white p-4">
                  <p className="text-xs font-bold text-zinc-500">Services</p>
                  <p className="mt-1 text-lg font-extrabold text-ink">All Pest Types</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-yellowpc-500/15 to-black/0 blur-xl" />
              <div className="rounded-[2rem] border border-yellowpc-100 bg-white/80 p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-zinc-500">Today’s Focus</p>
                    <p className="text-xl font-extrabold text-ink">Termite & Rodent Control</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellowpc-50">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 2c4 3 7 7 7 12a7 7 0 0 1-14 0c0-5 3-9 7-12Z" stroke="#B45309" strokeWidth="2" />
                      <path d="M9 14c1.3 1.3 4.7 1.3 6 0" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {[
                    { t: 'Termite Solutions', d: 'Pre & Post treatment for buildings and homes.' },
                    { t: 'Rodents (Rats Only)', d: 'Safe baiting & control measures.' },
                    { t: 'Pipeline Treatment', d: 'Prevention of contamination and leakage risks.' }
                  ].map((x, idx) => (
                    <div key={x.t} className="rounded-2xl bg-yellowpc-50 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-extrabold text-yellowpc-900">{x.t}</p>
                          <p className="mt-1 text-sm text-zinc-700">{x.d}</p>
                        </div>
                        <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white">
                          <span className="text-yellowpc-700 font-extrabold">{idx + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-yellowpc-100 bg-white p-4">
                  <div>
                    <p className="text-xs font-bold text-zinc-500">Free Inspection CTA</p>
                    <p className="text-sm font-extrabold text-ink">Schedule your visit today</p>
                  </div>
                  <a
                    href="#enquiry"
                    className="inline-flex items-center justify-center rounded-xl bg-ink px-4 py-2 text-sm font-extrabold text-white hover:opacity-95 transition-opacity"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

