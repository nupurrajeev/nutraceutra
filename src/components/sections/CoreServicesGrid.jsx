import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import { serviceCards } from '../../data/content'

export default function CoreServicesGrid() {
  return (
    <section className="section-padding bg-off-white" aria-label="Core Services">
      <div className="container-max">
        <SectionHeading
          eyebrow="What We Do"
          heading="Four Pillars of Scientific Excellence"
          subheading="From study design to regulatory filing, we cover every dimension of scientific strategy."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card, i) => (
            <ServiceCard key={card.id} {...card} delay={i} />
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="overflow-hidden leading-none mt-20 -mb-20" aria-hidden="true">
        <svg viewBox="0 0 1440 50" className="block w-full" preserveAspectRatio="none">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
