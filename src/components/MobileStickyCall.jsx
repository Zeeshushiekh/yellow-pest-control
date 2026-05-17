import { useEffect, useState } from 'react'

const phone1 = '+91 8859956356'

export default function MobileStickyCall() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={`tel:${phone1.replace(/\s+/g,'')}`}
      className={
        'fixed bottom-4 left-1/2 z-[70] -translate-x-1/2 rounded-2xl bg-yellowpc-500 px-5 py-3 text-sm font-extrabold text-white shadow-glow transition-all lg:hidden ' +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none')
      }
      aria-label="Call Yellow Pest Control Services"
    >
      Call Now
      <span className="ml-2 inline-flex items-center rounded-xl bg-white/20 px-3 py-1 text-xs font-extrabold">
        {phone1}
      </span>
    </a>
  )
}

