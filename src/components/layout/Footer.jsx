import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { contactInfo, siteConfig } from '../../data/content'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Track Record', to: '/track-record' },
  { label: 'Contact', to: '/contact' },
]

const isRealUrl = (url) => url && url !== '#' && !url.startsWith('#')
const isRealEmail = (email) => email && !email.includes('[') && email !== '#'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white" role="contentinfo">
      {/* Wave divider */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="block w-full" aria-hidden="true" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#F7F8FA" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-1 mb-4">
              <span className="font-serif font-bold text-2xl text-secondary">N</span>
              <span className="font-serif font-semibold text-xl text-white">utraceutra</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="text-white/50 text-xs mt-2 leading-relaxed max-w-xs">
              Premier scientific consulting for the nutraceutical, functional wellness, and animal health industries.
            </p>

            {/* Social icons — only render real URLs */}
            <div className="flex items-center gap-3 mt-5">
              {isRealUrl(contactInfo.linkedin) && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-secondary transition-colors duration-200"
                >
                  <Linkedin size={16} />
                </a>
              )}
              {isRealUrl(contactInfo.twitter) && (
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-secondary transition-colors duration-200"
                >
                  <Twitter size={16} />
                </a>
              )}
              {isRealEmail(contactInfo.email) && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  aria-label="Email"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-secondary transition-colors duration-200"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif font-semibold text-white text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-secondary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h3 className="font-serif font-semibold text-white text-base mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {isRealEmail(contactInfo.email) && (
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-secondary transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.phone && !contactInfo.phone.includes('[') && (
                <li>{contactInfo.phone}</li>
              )}
              {contactInfo.city && !contactInfo.city.includes('[') ? (
                <li>{contactInfo.city}</li>
              ) : (
                <li className="italic opacity-60">Operating globally</li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Nutraceutra. All rights reserved.
          </p>
          <p className="text-white/30 text-xs italic">
            Scientific Integrity as a Service
          </p>
        </div>
      </div>
    </footer>
  )
}
