import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const phone1 = '+91 8859956356'
const phone2 = '+91 9870540563'
const email = 'infoyellowpest@gmail.com'
const addressLine = 'Kh No. 2105, D Block, Rohan Enclave, Dasna Ghaziabad'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title="Get in touch with Yellow Pest Control Services"
            subtitle="Call, email, or visit us. For quick scheduling, use the enquiry form or WhatsApp button." 
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delayMs={120}>
            <div className="rounded-[2.25rem] border border-yellowpc-100 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-zinc-500">Phone</p>
                  <div className="mt-2 grid gap-2">
                    <a
                      href={`tel:${phone1.replace(/\s+/g,'')}`}
                      className="rounded-2xl border border-yellowpc-100 bg-yellowpc-50 px-4 py-3 text-sm font-extrabold text-yellowpc-900 hover:bg-yellowpc-100 transition-colors"
                    >
                      {phone1}
                    </a>
                    <a
                      href={`tel:${phone2.replace(/\s+/g,'')}`}
                      className="rounded-2xl border border-yellowpc-100 bg-yellowpc-50 px-4 py-3 text-sm font-extrabold text-yellowpc-900 hover:bg-yellowpc-100 transition-colors"
                    >
                      {phone2}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-zinc-500">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-2xl border border-yellowpc-100 bg-white px-4 py-3 text-sm font-extrabold text-ink hover:bg-yellowpc-50 transition-colors"
                  >
                    {email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-bold text-zinc-500">Address</p>
                  <p className="mt-2 text-sm font-semibold text-zinc-700">{addressLine}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-black text-white p-5">
                <p className="text-xs font-bold text-white/80">Free inspection CTA</p>
                <p className="mt-1 text-sm font-extrabold">Book your service today</p>
                <a
                  href="#enquiry"
                  className="mt-4 inline-flex items-center justify-center rounded-2xl bg-yellowpc-500 px-4 py-3 text-sm font-extrabold text-white hover:bg-yellowpc-600 transition-colors w-full"
                >
                  Book Inspection
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delayMs={160}>
            <div className="rounded-[2.25rem] border border-yellowpc-100 overflow-hidden bg-white shadow-sm">
              <div className="p-5 border-b border-yellowpc-100">
                <p className="text-sm font-extrabold text-ink">Google Maps</p>
                <p className="mt-1 text-sm text-zinc-700">Find us near Dasna, Ghaziabad.</p>
              </div>
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Yellow Pest Control Services Location"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

