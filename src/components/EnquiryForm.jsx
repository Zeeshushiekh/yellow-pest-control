import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const phone1 = '+91 8859956356'
const phone2 = '+91 9870540563'
const email = 'infoyellowpest@gmail.com'

const serviceOptions = [
  'Household Pest Control',
  'Termite Solutions (Pre/Post)',
  'Waterproofing Solutions',
  'Rodent Solutions (Rats Only)',
  'Wood Borer Solution',
  'Pipeline Treatment'
]

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

function normalizePhone(v) {
  return v.replace(/[\s-()]/g, '').trim()
}

export default function EnquiryForm() {
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [address, setAddress] = useState('')
  const [serviceRequired, setServiceRequired] = useState(serviceOptions[0])
  const [message, setMessage] = useState('')

  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const errors = useMemo(() => {
    const e = {}
    if (!fullName.trim()) e.fullName = 'Full name is required.'

    const p = normalizePhone(phoneNumber)
    if (!p) e.phoneNumber = 'Phone number is required.'
    else if (!/^\+?\d{10,15}$/.test(p)) e.phoneNumber = 'Enter a valid phone number.'

    const em = formEmail.trim()
    if (!em) e.formEmail = 'Email is required.'
    else if (!isValidEmail(em)) e.formEmail = 'Enter a valid email address.'

    if (!address.trim()) e.address = 'Address is required.'

    if (!serviceRequired) e.serviceRequired = 'Select a service.'

    if (!message.trim() || message.trim().length < 10)
      e.message = 'Message should be at least 10 characters.'

    return e
  }, [fullName, phoneNumber, formEmail, address, serviceRequired, message])

  const canSubmit = Object.keys(errors).length === 0 && status !== 'submitting'

  const onSubmit = async (e) => {
    e.preventDefault()
    setTouched({ fullName: true, phoneNumber: true, formEmail: true, address: true, serviceRequired: true, message: true })

    if (!canSubmit) {
      setStatus('error')
      setError('Please correct the highlighted fields and try again.')
      return
    }

    setStatus('submitting')
    setError('')

    // Demo-only: since no backend specified, we simulate success.
    await new Promise((r) => setTimeout(r, 900))

    setStatus('success')

    // Reset form after success
    setFullName('')
    setPhoneNumber('')
    setFormEmail('')
    setAddress('')
    setServiceRequired(serviceOptions[0])
    setMessage('')
  }

  const fieldClass = (name) =>
    'mt-1 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-colors ' +
    (touched[name] && errors[name]
      ? 'border-red-300 bg-red-50'
      : 'border-yellowpc-100 bg-white focus:border-yellowpc-400')

  const errorText = (name) =>
    touched[name] && errors[name] ? (
      <p className="mt-1 text-xs font-bold text-red-700">{errors[name]}</p>
    ) : null

  return (
    <section id="enquiry" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="Free Inspection"
            title="Book your pest inspection"
            subtitle="Send your details and we’ll get back quickly with the right solution. You can also call us directly." 
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delayMs={120}>
            <div className="rounded-[2.25rem] border border-yellowpc-100 bg-gradient-to-br from-yellowpc-50 to-white p-6 shadow-sm">
              <p className="text-sm font-extrabold text-ink">Emergency Help Banner</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Urgent pest activity? Contact us now for fast scheduling and immediate guidance.
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:${phone1.replace(/\s+/g,'')}`}
                  className="inline-flex items-center justify-center rounded-2xl bg-yellowpc-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-yellowpc-600 transition-colors"
                >
                  Call {phone1}
                </a>
                <a
                  href={`tel:${phone2.replace(/\s+/g,'')}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-yellowpc-200 bg-white px-5 py-3 text-sm font-extrabold text-ink hover:bg-yellowpc-50 transition-colors"
                >
                  Call {phone2}
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-white/70 ring-1 ring-yellowpc-100 p-5">
                <p className="text-xs font-bold text-zinc-500">Email</p>
                <p className="mt-1 text-sm font-extrabold text-ink">{email}</p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-bold text-zinc-500">Address</p>
                <p className="mt-1 text-sm font-semibold text-zinc-700">
                  Kh No. 2105, D Block, Rohan Enclave, Dasna Ghaziabad
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delayMs={160}>
            <form onSubmit={onSubmit} className="rounded-[2.25rem] border border-yellowpc-100 bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold text-ink">Enquiry Form</p>
                  <p className="mt-1 text-sm text-zinc-700">Fields marked are required.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 rounded-full bg-yellowpc-50 px-4 py-2 ring-1 ring-yellowpc-100">
                  <span className="h-2 w-2 rounded-full bg-yellowpc-500" aria-hidden="true" />
                  <span className="text-xs font-extrabold text-yellowpc-900">Fast Response</span>
                </div>
              </div>

              {status === 'error' ? (
                <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4">
                  <p className="text-sm font-extrabold text-red-800">{error}</p>
                </div>
              ) : null}

              {status === 'success' ? (
                <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4">
                  <p className="text-sm font-extrabold text-green-800">Enquiry submitted successfully. We’ll contact you soon.</p>
                </div>
              ) : null}

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-ink">Full Name*</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                    className={fieldClass('fullName')}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errorText('fullName')}
                </div>

                <div>
                  <label className="text-sm font-bold text-ink">Phone Number*</label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, phoneNumber: true }))}
                    className={fieldClass('phoneNumber')}
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                  {errorText('phoneNumber')}
                </div>

                <div>
                  <label className="text-sm font-bold text-ink">Email*</label>
                  <input
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, formEmail: true }))}
                    className={fieldClass('formEmail')}
                    placeholder="name@example.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                  {errorText('formEmail')}
                </div>

                <div>
                  <label className="text-sm font-bold text-ink">Service Required*</label>
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, serviceRequired: true }))}
                    className={fieldClass('serviceRequired')}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errorText('serviceRequired')}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-bold text-ink">Address*</label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, address: true }))}
                    className={fieldClass('address')}
                    placeholder="House/Office address"
                    autoComplete="street-address"
                  />
                  {errorText('address')}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-bold text-ink">Message*</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    className={
                      'mt-1 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-colors ' +
                      (touched.message && errors.message
                        ? 'border-red-300 bg-red-50'
                        : 'border-yellowpc-100 bg-white focus:border-yellowpc-400')
                    }
                    placeholder="Tell us about the pest issue, location in property, and preferred time."
                    rows={4}
                  />
                  {errorText('message')}
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-xs text-zinc-600">
                  By submitting, you agree to be contacted by Yellow Pest Control Services.
                </p>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={
                    'inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3 text-sm font-extrabold text-white transition-colors ' +
                    (!canSubmit ? 'bg-yellowpc-500/60 cursor-not-allowed' : 'bg-ink hover:opacity-95')
                  }
                >
                  {status === 'submitting' ? (
                    <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/80 border-t-white" />
                  ) : null}
                  {status === 'submitting' ? 'Submitting…' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

