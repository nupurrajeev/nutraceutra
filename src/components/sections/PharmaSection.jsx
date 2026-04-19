import { CheckCircle2 } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { servicesDetail } from '../../data/content'

export default function PharmaSection() {
  const svc = servicesDetail.pharma
  return (
    <section
      id="pharma"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D6E6E 0%, #0A5555 100%)' }}
      aria-label="Pharmaceutical Preclinical Design"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pharma-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pharma-dots)" />
        </svg>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <ScrollReveal>
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">{svc.title}</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {svc.subtitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-white/80 text-base leading-relaxed">{svc.intro}</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {svc.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i + 2}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7
                              hover:bg-white/15 transition-all duration-300 h-full">
                <CheckCircle2 className="text-secondary mb-4" size={22} />
                <h4 className="font-serif font-semibold text-white text-lg mb-2">{item.title}</h4>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Top + bottom waves */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 50" className="block w-full rotate-180" preserveAspectRatio="none">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 50" className="block w-full" preserveAspectRatio="none">
          <path d="M0,25 C360,0 1080,50 1440,25 L1440,50 L0,50 Z" fill="#F7F8FA" />
        </svg>
      </div>
    </section>
  )
}
