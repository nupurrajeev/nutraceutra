import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { advisoryBoard } from '../../data/content'

const GRADIENTS = [
  'from-primary to-primary-dark',
  'from-secondary to-secondary-dark',
  'from-charcoal to-primary-dark',
  'from-primary-dark to-charcoal',
]

const isPlaceholder = (str) => str && str.includes('[') && str.includes('To Be Added')

function MemberCard({ member, index }) {
  const grad = GRADIENTS[index % GRADIENTS.length]
  const namePlaceholder = isPlaceholder(member.name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1
                 transition-all duration-300 text-center flex flex-col items-center"
    >
      {/* Avatar */}
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center mb-4 overflow-hidden`}>
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <span className={`font-serif font-bold text-xl text-white ${namePlaceholder ? 'opacity-40' : ''}`}>
            {member.initials}
          </span>
        )}
      </div>

      {/* Name */}
      {namePlaceholder ? (
        <div className="h-5 w-36 bg-gray-200 rounded animate-pulse mb-2" aria-label="Name to be added" />
      ) : (
        <h4 className="font-serif font-semibold text-charcoal text-base mb-1">{member.name}</h4>
      )}

      {/* Role */}
      <p className="text-primary text-sm font-semibold mb-1">{member.role}</p>

      {/* Credentials */}
      {isPlaceholder(member.credentials) ? (
        <div className="h-4 w-28 bg-gray-100 rounded animate-pulse mt-1" aria-label="Credentials to be added" />
      ) : (
        <p className="text-body-text text-xs">{member.credentials}</p>
      )}
    </motion.div>
  )
}

export default function AdvisoryBoardSection() {
  return (
    <section className="section-padding bg-off-white" aria-label="Advisory Board">
      <div className="container-max">
        <SectionHeading
          eyebrow="Scientific Advisory Board"
          heading="A Global Network of Expertise"
          subheading="Our firm is supported by an elite Scientific Advisory Board consisting of board-certified toxicologists, global regulatory specialists, and clinical trial experts. This collaborative model ensures that every project benefits from diverse, world-class subject matter expertise."
          center
        />

        {advisoryBoard.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((member, i) => (
              <MemberCard key={member.id} member={member} index={i} />
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
              <p className="text-body-text text-sm">Advisory board details coming soon.</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
