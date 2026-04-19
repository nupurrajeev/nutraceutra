import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, ShieldCheck, Globe, Lightbulb, Microscope, Award, BookOpen, Briefcase, Rocket, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  Flask: FlaskConical,
  FlaskConical,
  ShieldCheck,
  Globe,
  Lightbulb,
  Microscope,
  Award,
  BookOpen,
  Briefcase,
  Rocket,
  Target,
}

export default function ServiceCard({ icon, title, shortDesc, link, delay = 0 }) {
  const Icon = iconMap[icon] || FlaskConical

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: delay * 0.1 }}
      className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover
                 hover:-translate-y-1.5 hover:border-primary/20 border border-transparent
                 transition-all duration-300 flex flex-col"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5
                      group-hover:bg-primary/10 transition-colors duration-300">
        <Icon className="text-primary" size={22} strokeWidth={1.75} />
      </div>

      <h3 className="font-serif font-semibold text-charcoal text-lg mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-body-text text-sm leading-relaxed flex-1 mb-5">
        {shortDesc}
      </p>

      {link && (
        <Link
          to={link}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary
                     hover:text-secondary transition-colors duration-200 group/link"
        >
          Learn More
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      )}
    </motion.div>
  )
}
