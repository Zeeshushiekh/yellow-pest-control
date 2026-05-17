import { useEffect, useState } from 'react'

const phoneWhatsApp = '918859956356'

export default function WhatsAppButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 450)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={`https://wa.me/${phoneWhatsApp}?text=${encodeURIComponent(
        'Hello Yellow Pest Control Services, I want to book a free pest inspection. Please contact me.'
      )}`}
      target="_blank"
      rel="noreferrer"
      className={
        'fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glow transition-all ' +
        (show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none')
      }
      style={{ background: '#0B0B0F', color: 'white' }}
      aria-label="Chat on WhatsApp"
    >
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-yellowpc-500" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 11.5A8.5 8.5 0 0 1 7.2 18L4 19l1-3.1A8.5 8.5 0 1 1 20 11.5Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 10c.5 1.5 1.9 2.9 3.4 3.4"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-sm font-extrabold">WhatsApp</span>
    </a>
  )
}

