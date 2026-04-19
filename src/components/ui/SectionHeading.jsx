import ScrollReveal from './ScrollReveal'

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  center = false,
  light = false,
  className = '',
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <ScrollReveal>
          <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-secondary' : 'text-secondary'}`}>
            {eyebrow}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={eyebrow ? 1 : 0}>
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-charcoal'
        }`}>
          {heading}
        </h2>
      </ScrollReveal>
      {subheading && (
        <ScrollReveal delay={eyebrow ? 2 : 1}>
          <p className={`mt-4 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-body-text'
          }`}>
            {subheading}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
