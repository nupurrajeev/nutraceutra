import { motion } from 'framer-motion'
import { revealVariants, viewportConfig } from '../../hooks/useScrollReveal'

export default function ScrollReveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      custom={delay}
      className={className}
    >
      {children}
    </Tag>
  )
}
