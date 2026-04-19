import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, FlaskConical, ShieldCheck, Globe, Lightbulb, Microscope } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import PharmaSection from '../components/sections/PharmaSection'
import { pageMeta, servicesDetail } from '../data/content'

const iconMap = {
  Flask: FlaskConical, FlaskConical, ShieldCheck, Globe, Lightbulb, Microscope,
}

function ServiceBlock({ svc, reverse = false, bg = 'white' }) {
  const Icon = iconMap[svc.icon] || FlaskConical
  const bg_cls = bg === 'off-white' ? 'bg-off-white' : 'bg-white'

  return (
    <section id={svc.id} className={`section-padding ${bg_cls}`} aria-label={svc.title}>
      <div className="container-max">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Heading side */}
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <SectionHeading
              eyebrow={svc.title}
              heading={svc.subtitle}
              subheading={svc.intro}
            />
          </div>

          {/* Items side */}
          <div className={`space-y-4 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            {svc.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i}>
                <div className={`flex gap-4 p-5 ${bg === 'off-white' ? 'bg-white' : 'bg-off-white'} rounded-2xl
                                 hover:shadow-card transition-shadow duration-300`}>
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-charcoal text-base mb-1">{item.title}</h4>
                    <p className="text-body-text text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  useEffect(() => {
    document.title = pageMeta.services.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.services.description)
    // Hash-scroll after mount
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 400)
    }
  }, [])

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
        aria-label="Services page header"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svc-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-dots)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Our Capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Comprehensive Scientific Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-lg max-w-2xl mx-auto"
          >
            From early-stage molecule discovery to regulatory approval — we partner with you across the entire product lifecycle.
          </motion.p>
        </div>

        {/* Quick nav pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-10 flex flex-wrap justify-center gap-3 relative z-10"
        >
          {Object.values(servicesDetail).map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-sm
                         hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-200"
            >
              {svc.title}
            </a>
          ))}
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 50" className="block w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <ServiceBlock svc={servicesDetail.preclinical} bg="white" />
      <ServiceBlock svc={servicesDetail.regulatory} bg="off-white" reverse />
      <ServiceBlock svc={servicesDetail.operations} bg="white" />
      <ServiceBlock svc={servicesDetail.innovation} bg="off-white" reverse />
      <PharmaSection />
    </motion.div>
  )
}
