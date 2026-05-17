import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const faqs = [
  {
    q: 'Do you provide free inspection?',
    a: 'Yes. We offer a free inspection and guidance for the right treatment plan.'
  },
  {
    q: 'Are the chemicals safe for homes?',
    a: 'We use professional treatment methods designed to be safe. Our technician will also guide you on precautions.'
  },
  {
    q: 'Do you handle termite pre and post solutions?',
    a: 'Yes. We provide termite solutions for pre-construction prevention and post-treatment for affected areas.'
  },
  {
    q: 'Which rodents do you treat?',
    a: 'We offer rodent solutions for rats only, with appropriate control measures.'
  },
  {
    q: 'How soon can we get service?',
    a: 'We prioritize urgent cases. Contact us and we’ll schedule the earliest available time.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const items = useMemo(() => faqs, [])

  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="FAQ"
            title="Common questions about pest control"
            subtitle="Get quick answers before you book inspection. If you have more questions, send an enquiry."
            align="center"
          />
        </Reveal>

        <div className="mt-10 mx-auto max-w-3xl rounded-[2rem] border border-yellowpc-100 bg-white p-4 sm:p-6">
          <div className="space-y-3">
            {items.map((f, idx) => {
              const isOpen = idx === openIndex
              return (
                <div key={f.q} className="rounded-2xl bg-yellowpc-50/40 ring-1 ring-yellowpc-100 overflow-hidden">
                  <button
                    type="button"
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4"
                    onClick={() => setOpenIndex((v) => (v === idx ? -1 : idx))}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="font-extrabold text-ink">{f.q}</p>
                      <p className="mt-1 text-sm text-zinc-700">Tap to {isOpen ? 'hide' : 'show'} answer</p>
                    </div>
                    <span className="mt-1 grid h-10 w-10 place-items-center rounded-xl bg-white font-extrabold text-yellowpc-900">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="px-4 sm:px-5 pb-5">
                      <p className="text-sm leading-relaxed text-zinc-700">{f.a}</p>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

