import { CheckCircle2 } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { servicesDetail } from '../../data/content'

export default function InnovationSection() {
  const svc = servicesDetail.innovation
  return (
    <section id="innovation" className="section-padding bg-white" aria-label="Development and Innovation">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow={svc.title}
              heading={svc.subtitle}
              subheading={svc.intro}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {svc.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i}>
                <div className="bg-off-white rounded-2xl p-6 hover:shadow-card transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="font-serif font-semibold text-charcoal text-sm mb-1.5">{item.title}</h4>
                      <p className="text-body-text text-sm leading-relaxed">{item.desc}</p>
                    </div>
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
