import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import EnquiryForm from './components/EnquiryForm.jsx'
import Contact from './components/Contact.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import MobileStickyCall from './components/MobileStickyCall.jsx'
import EmergencyBanner from './components/EmergencyBanner.jsx'
import LoadingOverlay from './components/LoadingOverlay.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  const sections = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'why', label: 'Why Us' },
      { id: 'faq', label: 'FAQ' },
      { id: 'enquiry', label: 'Enquiry' },
      { id: 'contact', label: 'Contact' }
    ],
    []
  )

  return (
    <div className="min-h-screen">
      {loading && <LoadingOverlay />}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <EmergencyBanner />
      <Header sections={sections} />

      <main id="content" className="pt-16">
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <FAQ />
        <EnquiryForm />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyCall />
    </div>
  )
}

export default App

