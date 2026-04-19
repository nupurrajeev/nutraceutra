import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { pageMeta } from '../data/content'

import HeroSection from '../components/sections/HeroSection'
import AboutCompany from '../components/sections/AboutCompany'
import CoreServicesGrid from '../components/sections/CoreServicesGrid'
import TrackRecordSection from '../components/sections/TrackRecordSection'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function HomePage() {
  useEffect(() => {
    document.title = pageMeta.home.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.home.description)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <HeroSection />

      <AboutCompany preview />

      <CoreServicesGrid />

      <TrackRecordSection />

      {/* CTA Section */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D6E6E 0%, #0A5555 100%)' }}
        aria-label="Call to action"
      >
        {/* dot pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>

        <div className="container-max relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Ready to Accelerate Your Innovation?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
              Let's discuss how Nutraceutra can transform your scientific vision into a commercially successful, evidence-based product.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-xl
                         hover:bg-secondary-dark active:scale-95 transition-all duration-200 shadow-gold text-lg"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
