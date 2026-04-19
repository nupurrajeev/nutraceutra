import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { hero } from '../../data/content'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-gradient"
      aria-label="Hero"
    >
      {/* Molecular dot grid pattern */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(196,148,61,0.6)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Animated floating circles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          { size: 320, top: '10%', left: '-5%', delay: '0s', duration: '9s', opacity: 0.07 },
          { size: 240, top: '55%', right: '-3%', left: undefined, delay: '2s', duration: '11s', opacity: 0.06 },
          { size: 180, top: '70%', left: '15%', delay: '4s', duration: '8s', opacity: 0.09 },
          { size: 420, top: '-10%', right: '10%', left: undefined, delay: '1s', duration: '13s', opacity: 0.04 },
          { size: 100, top: '40%', left: '40%', delay: '3s', duration: '7s', opacity: 0.12 },
        ].map((c, i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: c.size,
              height: c.size,
              top: c.top,
              left: c.left,
              right: c.right,
              borderColor: `rgba(196,148,61,${c.opacity * 3})`,
              backgroundColor: `rgba(13,110,110,${c.opacity})`,
              animation: `floatCircle ${c.duration} ease-in-out ${c.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* DNA helix — subtle SVG decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block" aria-hidden="true">
        <svg width="60" height="280" viewBox="0 0 60 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 14 }, (_, i) => (
            <g key={i}>
              <ellipse cx="30" cy={10 + i * 20} rx={20 - Math.abs(i % 7 - 3) * 5} ry="4"
                stroke="#C4943D" strokeWidth="1.5" fill="none" />
              {i < 13 && <line x1="10" y1={14 + i * 20} x2="10" y2={26 + i * 20}
                stroke="rgba(196,148,61,0.4)" strokeWidth="1" />}
              {i < 13 && <line x1="50" y1={14 + i * 20} x2="50" y2={26 + i * 20}
                stroke="rgba(196,148,61,0.4)" strokeWidth="1" />}
            </g>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-secondary text-sm font-semibold uppercase tracking-widest mb-5"
        >
          Scientific Consulting Excellence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
        >
          {hero.headline}
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-gradient-gold"
        >
          {hero.headlineAccent}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={hero.ctaPrimary.to}
            className="btn-primary text-base px-8 py-3.5 shadow-gold"
          >
            {hero.ctaPrimary.label}
            <ArrowRight size={16} />
          </Link>
          <Link
            to={hero.ctaSecondary.to}
            className="btn-outline text-base px-8 py-3.5"
          >
            {hero.ctaSecondary.label}
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-white/40" size={28} />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
