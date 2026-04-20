import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Track Record', to: '/track-record' },
  { label: 'Blogs & Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 flex-shrink-0" aria-label="Nutraceutra home">
          <span
            className="font-serif font-bold text-2xl tracking-tight"
            style={{ color: scrolled ? '#C4943D' : '#C4943D' }}
          >
            N
          </span>
          <span
            className={`font-serif font-semibold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            utraceutra
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-secondary bg-secondary/10'
                    : scrolled
                    ? 'text-charcoal hover:text-primary hover:bg-primary-light'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2 bg-secondary text-white text-sm font-semibold rounded-lg
                       hover:bg-secondary-dark active:scale-95 transition-all duration-200 shadow-gold"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-charcoal hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link
                  to="/"
                  className="font-serif font-bold text-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-secondary">N</span>
                  <span className="text-charcoal">utraceutra</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-body-text hover:text-charcoal hover:bg-gray-100 rounded-lg"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200 ${
                        isActive
                          ? 'text-secondary bg-secondary/10'
                          : 'text-charcoal hover:text-primary hover:bg-primary-light'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="px-4 pb-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-secondary text-white font-semibold rounded-xl
                             hover:bg-secondary-dark transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
