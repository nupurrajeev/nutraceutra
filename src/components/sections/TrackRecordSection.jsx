import { motion } from 'framer-motion'
import { Award, BookOpen, Bookmark, FileText } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { stats } from '../../data/content'

export default function TrackRecordSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #0D6E6E 100%)' }}
      aria-label="Track record highlights"
    >
      {/* dot pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stat-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stat-dots)" />
        </svg>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <ScrollReveal>
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">By The Numbers</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Decades of Measurable Impact
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="font-serif font-bold text-5xl sm:text-6xl text-secondary mb-2 tabular-nums">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-wider leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 50" className="block w-full" preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#F7F8FA" />
        </svg>
      </div>
    </section>
  )
}
