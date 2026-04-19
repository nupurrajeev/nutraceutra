import { FlaskConical, ShieldCheck, Globe, Lightbulb, Microscope, Award, BookOpen, Briefcase, Rocket, Target } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const iconMap = {
  Flask: FlaskConical, FlaskConical, ShieldCheck, Globe, Lightbulb,
  Microscope, Award, BookOpen, Briefcase, Rocket, Target,
}

export default function HighlightCard({ icon, title, value, suffix = '', label, description, delay = 0 }) {
  const Icon = iconMap[icon]

  if (value !== undefined) {
    return (
      <ScrollReveal delay={delay} className="text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="font-serif font-bold text-5xl text-secondary">
            {value}{suffix}
          </span>
          <span className="text-white/80 text-sm font-medium uppercase tracking-wider">{label}</span>
        </div>
      </ScrollReveal>
    )
  }

  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex gap-5">
        {Icon && (
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
            <Icon className="text-primary" size={20} strokeWidth={1.75} />
          </div>
        )}
        <div>
          <h4 className="font-serif font-semibold text-charcoal text-base mb-1">{title}</h4>
          {description && <p className="text-body-text text-sm leading-relaxed">{description}</p>}
        </div>
      </div>
    </ScrollReveal>
  )
}
