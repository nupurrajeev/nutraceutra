import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { FlaskConical, Award, BookOpen, Briefcase, Rocket } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import AdvisoryBoardSection from '../components/sections/AdvisoryBoardSection'
import { pageMeta, aboutCompany, founder } from '../data/content'

const iconMap = {
  Briefcase, BookOpen, Award, FlaskConical, Rocket,
  Flask: FlaskConical,
}

const isRealUrl = (url) => url && url !== '#' && !url.startsWith('#')
const isRealEmail = (email) => email && !email.includes('[') && email !== '#'

const GRAD = 'from-primary via-primary-dark to-charcoal'

export default function AboutPage() {
  useEffect(() => {
    document.title = pageMeta.about.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.about.description)
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
        aria-label="About page header"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            About Nutraceutra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-lg max-w-2xl mx-auto"
          >
            C-Suite scientific expertise, built for the innovators shaping tomorrow's health landscape.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 50" className="block w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* About company body */}
      <section className="section-padding bg-white" aria-label={aboutCompany.heading}>
        <div className="container-max">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Who We Are" heading={aboutCompany.heading} />
            <ScrollReveal delay={2}>
              <p className="text-body-text text-base leading-relaxed">{aboutCompany.body}</p>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {aboutCompany.values.map((v, i) => {
              const Icon = iconMap[v.icon] || Award
              return (
                <ScrollReveal key={v.title} delay={i}>
                  <div className="bg-off-white rounded-2xl p-6 hover:shadow-card transition-shadow duration-300 h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={18} strokeWidth={1.75} />
                    </div>
                    <h4 className="font-serif font-semibold text-charcoal text-base mb-2">{v.title}</h4>
                    <p className="text-body-text text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="section-padding bg-off-white" aria-label="Meet the Founder">
        <div className="container-max">
          <SectionHeading
            eyebrow="Leadership"
            heading="Meet the Founder"
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
            {/* Avatar column */}
            <ScrollReveal className="lg:col-span-2 flex flex-col items-center text-center">
              <div className={`w-44 h-44 rounded-full bg-gradient-to-br ${GRAD} flex items-center justify-center mb-6 shadow-card-hover overflow-hidden`}>
                {founder.photo ? (
                  <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-serif font-bold text-5xl text-secondary">{founder.initials}</span>
                )}
              </div>
              <h3 className="font-serif font-bold text-charcoal text-xl mb-1">{founder.name}</h3>
              <p className="text-body-text text-sm mb-4 leading-snug">{founder.tagline}</p>

              {/* Social links — only real URLs */}
              <div className="flex gap-3">
                {isRealUrl(founder.socialLinks.linkedin) && (
                  <a href={founder.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                     aria-label="LinkedIn"
                     className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200">
                    <Linkedin size={15} />
                  </a>
                )}
                {isRealUrl(founder.socialLinks.twitter) && (
                  <a href={founder.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                     aria-label="Twitter / X"
                     className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200">
                    <Twitter size={15} />
                  </a>
                )}
                {isRealEmail(founder.socialLinks.email) && (
                  <a href={`mailto:${founder.socialLinks.email}`}
                     aria-label="Email"
                     className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200">
                    <Mail size={15} />
                  </a>
                )}
              </div>
            </ScrollReveal>

            {/* Bio + highlights column */}
            <div className="lg:col-span-3 space-y-6">
              <ScrollReveal delay={1}>
                <p className="text-body-text text-base leading-relaxed">{founder.bio}</p>
              </ScrollReveal>

              <div className="space-y-4 mt-4">
                {founder.highlights.map((h, i) => {
                  const Icon = iconMap[h.icon] || Award
                  return (
                    <ScrollReveal key={h.title} delay={i + 2}>
                      <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                          <Icon className="text-primary" size={18} strokeWidth={1.75} />
                        </div>
                        <div>
                          <h4 className="font-serif font-semibold text-charcoal text-sm mb-1">{h.title}</h4>
                          <p className="text-body-text text-sm leading-relaxed">{h.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdvisoryBoardSection />
    </motion.div>
  )
}
