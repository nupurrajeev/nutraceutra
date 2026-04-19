import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Calendar } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactForm from '../components/ui/ContactForm'
import { pageMeta, contactInfo } from '../data/content'

const isReal = (val) => val && !val.includes('[') && val !== '#'
const isRealUrl = (url) => url && url !== '#' && !url.includes('[')

export default function ContactPage() {
  useEffect(() => {
    document.title = pageMeta.contact.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.contact.description)
  }, [])

  const showAddress = isReal(contactInfo.address) || isReal(contactInfo.city)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Page hero */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D6E6E 0%, #1A1A2E 100%)' }}
        aria-label="Contact page header"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ct-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ct-dots)" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
            Let's Connect
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Ready to Accelerate Your Innovation?
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-lg">
            Let's discuss how we can support your next breakthrough.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 50" className="block w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Contact body */}
      <section className="section-padding bg-white" aria-label="Contact form and information">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8">
                <h2 className="font-serif font-bold text-charcoal text-2xl mb-1">Send Us a Message</h2>
                <p className="text-body-text text-sm mb-8">Fields marked with <span className="text-secondary font-semibold">*</span> are required.</p>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <h3 className="font-serif font-semibold text-charcoal text-xl mb-5">Contact Information</h3>
              </ScrollReveal>

              {/* Email */}
              {isReal(contactInfo.email) && (
                <ScrollReveal delay={1}>
                  <div className="flex gap-4 p-5 bg-off-white rounded-2xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${contactInfo.email}`}
                         className="text-body-text text-sm hover:text-primary transition-colors duration-200">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Phone */}
              {isReal(contactInfo.phone) && (
                <ScrollReveal delay={2}>
                  <div className="flex gap-4 p-5 bg-off-white rounded-2xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">Phone</p>
                      <a href={`tel:${contactInfo.phone}`}
                         className="text-body-text text-sm hover:text-primary transition-colors duration-200">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Address / global fallback */}
              <ScrollReveal delay={3}>
                <div className="flex gap-4 p-5 bg-off-white rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">Location</p>
                    {showAddress ? (
                      <div className="text-body-text text-sm leading-relaxed">
                        {isReal(contactInfo.address) && <p>{contactInfo.address}</p>}
                        {isReal(contactInfo.city) && <p>{contactInfo.city}</p>}
                        {isReal(contactInfo.country) && <p>{contactInfo.country}</p>}
                      </div>
                    ) : (
                      <p className="text-body-text text-sm italic">Get in touch — we operate globally.</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Calendly */}
              {isRealUrl(contactInfo.calendlyLink) && (
                <ScrollReveal delay={4}>
                  <a
                    href={contactInfo.calendlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-5 bg-primary-light rounded-2xl hover:bg-primary/15 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">Schedule a Call</p>
                      <p className="text-primary text-sm font-medium">Book a 30-minute consultation →</p>
                    </div>
                  </a>
                </ScrollReveal>
              )}

              {/* Social */}
              <ScrollReveal delay={5}>
                <div className="p-5 bg-off-white rounded-2xl">
                  <p className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {isRealUrl(contactInfo.linkedin) && (
                      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                         aria-label="LinkedIn"
                         className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200">
                        <Linkedin size={16} />
                      </a>
                    )}
                    {isRealUrl(contactInfo.twitter) && (
                      <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer"
                         aria-label="Twitter / X"
                         className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200">
                        <Twitter size={16} />
                      </a>
                    )}
                    {!isRealUrl(contactInfo.linkedin) && !isRealUrl(contactInfo.twitter) && (
                      <p className="text-body-text text-sm italic text-xs">Social links coming soon</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
