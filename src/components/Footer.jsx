const quickLinks = [
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why Choose Us' },
  { id: 'faq', label: 'FAQ' },
  { id: 'enquiry', label: 'Enquiry' },
  { id: 'contact', label: 'Contact' }
]

const phone1 = '+91 8859956356'
const phone2 = '+91 9870540563'
const email = 'infoyellowpest@gmail.com'
const addressLine = 'Kh No. 2105, D Block, Rohan Enclave, Dasna Ghaziabad'

export default function Footer() {
  return (
    <footer className="border-t border-yellowpc-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-sm font-black tracking-wide text-ink">YELLOW</p>
            <p className="mt-1 text-sm font-bold text-zinc-700">Pest Control Services</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Professional pest control solutions for households and businesses across Ghaziabad.
            </p>
          </div>

          <div>
            <p className="text-sm font-extrabold text-ink">Quick Links</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-sm font-semibold text-zinc-700 hover:text-yellowpc-900 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-extrabold text-ink">Contact</p>
            <div className="mt-4 space-y-3">
              <a href={`tel:${phone1.replace(/\s+/g,'')}`} className="block text-sm font-bold text-zinc-700 hover:text-yellowpc-900 transition-colors">
                {phone1}
              </a>
              <a href={`tel:${phone2.replace(/\s+/g,'')}`} className="block text-sm font-bold text-zinc-700 hover:text-yellowpc-900 transition-colors">
                {phone2}
              </a>
              <a href={`mailto:${email}`} className="block text-sm font-bold text-zinc-700 hover:text-yellowpc-900 transition-colors">
                {email}
              </a>
              <p className="text-sm font-semibold text-zinc-600">{addressLine}</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-yellowpc-100 bg-yellowpc-50 hover:bg-yellowpc-100 transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9h3V6h-3c-2 0-4 2-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-1 1-1 1-1Z" fill="#B45309" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-yellowpc-100 bg-yellowpc-50 hover:bg-yellowpc-100 transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="#B45309" strokeWidth="2" />
                  <path d="M16.5 7.5h.01" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
                  <rect x="5" y="5" width="14" height="14" rx="4" stroke="#B45309" strokeWidth="2" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-yellowpc-100 bg-yellowpc-50 hover:bg-yellowpc-100 transition-colors"
                aria-label="X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 19L19 5" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
                  <path d="M7 5h12v12" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-yellowpc-100 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Yellow Pest Control Services. All rights reserved.</p>
          <p className="text-sm text-zinc-600">Made for fast, safe, and professional pest treatment.</p>
        </div>
      </div>
    </footer>
  )
}

