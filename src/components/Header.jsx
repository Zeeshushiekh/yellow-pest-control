import { useEffect, useState } from 'react'

const phone1 = '+91 8859956356'
const phone2 = '+91 9870540563'

export default function Header({ sections }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const nav = (
    <nav className="hidden items-center gap-6 lg:flex">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="text-sm font-semibold text-zinc-700 hover:text-ink transition-colors"
          onClick={() => setOpen(false)}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all ' +
        (scrolled ? 'bg-white/85 backdrop-blur border-b border-yellowpc-100' : 'bg-transparent')
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-yellowpc-500 to-yellowpc-700 text-white shadow-glow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 20c7-1 9-6 14-14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 12c3 0 5 2 6 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="19" cy="5" r="2" fill="white" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-black tracking-wide text-ink">YELLOW</p>
              <p className="text-xs font-semibold text-zinc-600 leading-tight">Pest Control Services</p>
            </div>
          </a>

          {nav}

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${phone1.replace(/\s+/g,'')}`}
              className="inline-flex items-center rounded-xl border border-yellowpc-200 bg-yellowpc-50 px-4 py-2 text-sm font-bold text-yellowpc-800 hover:bg-yellowpc-100 transition-colors"
            >
              Call: {phone1}
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-yellowpc-200 bg-white p-2.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#0B0B0F" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="lg:hidden border-t border-yellowpc-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid gap-3">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-xl bg-yellowpc-50 px-4 py-3 text-sm font-bold text-yellowpc-900 hover:bg-yellowpc-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </a>
              ))}
              <div className="grid gap-2 sm:grid-cols-2">
                <a
                  href={`tel:${phone1.replace(/\s+/g,'')}`}
                  className="inline-flex items-center justify-center rounded-xl border border-yellowpc-200 bg-white px-4 py-3 text-sm font-bold text-ink hover:bg-yellowpc-50 transition-colors"
                >
                  {phone1}
                </a>
                <a
                  href={`tel:${phone2.replace(/\s+/g,'')}`}
                  className="inline-flex items-center justify-center rounded-xl border border-yellowpc-200 bg-white px-4 py-3 text-sm font-bold text-ink hover:bg-yellowpc-50 transition-colors"
                >
                  {phone2}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

