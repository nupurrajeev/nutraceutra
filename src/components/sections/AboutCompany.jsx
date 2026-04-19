import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FlaskConical, Award, Globe } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { aboutPreview, aboutCompany } from '../../data/content'

const iconMap = { Award, Globe, Flask: FlaskConical, FlaskConical }

export default function AboutCompany({ preview = false }) {
  const values = preview ? [] : aboutCompany.values

  return (
    <section className="section-padding bg-white" aria-label="About Nutraceutra">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <ScrollReveal>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                {preview ? 'About Nutraceutra' : aboutCompany.heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-body-text text-base leading-relaxed mb-6">
                {preview ? aboutPreview.body : aboutCompany.body}
              </p>
            </ScrollReveal>

            {preview && (
              <ScrollReveal delay={3}>
                <Link
                  to={aboutPreview.link.to}
                  className="inline-flex items-center gap-1.5 text-primary font-semibold hover:text-secondary transition-colors duration-200 group"
                >
                  {aboutPreview.link.label}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </ScrollReveal>
            )}
          </div>

          {/* Visual side */}
          <div>
            {preview ? (
              <ScrollReveal delay={2}>
                <div className="relative">
                  {/* Abstract scientific card */}
                  <div className="bg-gradient-to-br from-primary via-primary-dark to-charcoal rounded-3xl p-10 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-secondary/10 -translate-y-12 translate-x-12" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-8 -translate-x-8" aria-hidden="true" />
                    <div className="relative z-10">
                      <p className="text-secondary font-semibold uppercase tracking-widest text-xs mb-4">Founded on Science</p>
                      <div className="space-y-4">
                        {[
                          { n: '100+', label: 'Peer-Reviewed Publications' },
                          { n: '12+', label: 'Patents Held' },
                          { n: '100+', label: 'Preclinical Studies' },
                        ].map(({ n, label }) => (
                          <div key={label} className="flex items-baseline gap-3">
                            <span className="font-serif font-bold text-3xl text-secondary">{n}</span>
                            <span className="text-white/70 text-sm">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              <div className="space-y-4">
                {values.map((v, i) => {
                  const Icon = iconMap[v.icon] || Award
                  return (
                    <ScrollReveal key={v.title} delay={i + 1}>
                      <div className="flex gap-4 p-5 bg-off-white rounded-2xl hover:shadow-card transition-shadow duration-300">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                          <Icon className="text-primary" size={18} strokeWidth={1.75} />
                        </div>
                        <div>
                          <h4 className="font-serif font-semibold text-charcoal text-base mb-1">{v.title}</h4>
                          <p className="text-body-text text-sm leading-relaxed">{v.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
