import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Bookmark, ExternalLink, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { pageMeta, patents, publications, trademarks, books, stats } from '../data/content'

const isPlaceholder = (str) => str && str.includes('[')
const isRealUrl = (url) => url && url !== '#' && !url.includes('[')

const STATUS_COLORS = {
  Granted: 'bg-emerald-100 text-emerald-700',
  Pending: 'bg-amber-100 text-amber-700',
  Registered: 'bg-primary-light text-primary',
  default: 'bg-gray-100 text-gray-600',
}
const statusCls = (s) => STATUS_COLORS[s] || STATUS_COLORS.default

function StatCard({ value, suffix, label, icon: Icon }) {
  return (
    <ScrollReveal>
      <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-7 text-white text-center">
        {Icon && <Icon className="mx-auto mb-3 text-secondary" size={28} strokeWidth={1.5} />}
        <div className="font-serif font-bold text-5xl text-secondary mb-1 tabular-nums">{value}{suffix}</div>
        <div className="text-white/75 text-sm font-medium uppercase tracking-wider">{label}</div>
      </div>
    </ScrollReveal>
  )
}

function PatentsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? patents : patents.slice(0, 5)

  return (
    <section className="section-padding bg-white" aria-label="Patents">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <StatCard value="12" suffix="+" label="Patents Held" icon={Award} />

          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Intellectual Property" heading="Patents" />
            <div className="space-y-3">
              {visible.map((p, i) => (
                <ScrollReveal key={p.id} delay={i}>
                  <div className="flex items-start gap-4 p-4 bg-off-white rounded-xl hover:shadow-card transition-shadow duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center">
                      <Award className="text-primary" size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      {isPlaceholder(p.title) ? (
                        <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-2" />
                      ) : (
                        <p className="font-semibold text-charcoal text-sm mb-1">{p.title}</p>
                      )}
                      <div className="flex flex-wrap gap-2 text-xs text-body-text">
                        {!isPlaceholder(p.number) && <span>#{p.number}</span>}
                        {!isPlaceholder(p.year) && <span>· {p.year}</span>}
                      </div>
                    </div>
                    <span className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-semibold ${statusCls(p.status)}`}>
                      {p.status}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {patents.length > 5 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-secondary transition-colors duration-200"
              >
                {expanded ? <><ChevronUp size={16} /> Show Less</> : <><ChevronDown size={16} /> Show All {patents.length} Patents</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function PublicationsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? publications : publications.slice(0, 5)

  return (
    <section className="section-padding bg-off-white" aria-label="Publications">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <StatCard value="100" suffix="+" label="Peer-Reviewed Publications" icon={BookOpen} />

          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Academic Impact" heading="Selected Publications" />
            <p className="text-body-text text-sm mb-6 italic">
              Showing selected publications. {/* TODO: Add link to full publication list (e.g. Google Scholar, PubMed) */}
            </p>
            <div className="space-y-3">
              {visible.map((pub, i) => (
                <ScrollReveal key={pub.id} delay={i}>
                  <div className="p-5 bg-white rounded-xl hover:shadow-card transition-shadow duration-300">
                    {isPlaceholder(pub.title) ? (
                      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
                    ) : (
                      <p className="font-semibold text-charcoal text-sm mb-1">{pub.title}</p>
                    )}
                    <div className="flex flex-wrap gap-3 items-center text-xs text-body-text">
                      {!isPlaceholder(pub.journal) && <span className="italic">{pub.journal}</span>}
                      {!isPlaceholder(pub.year) && <span>· {pub.year}</span>}
                      {isRealUrl(pub.doi) && (
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-1 text-primary hover:text-secondary transition-colors duration-200">
                          <ExternalLink size={11} /> DOI
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {publications.length > 5 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-secondary transition-colors duration-200"
              >
                {expanded ? <><ChevronUp size={16} /> Show Less</> : <><ChevronDown size={16} /> Show All {publications.length} Publications</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrademarksSection() {
  return (
    <section className="section-padding bg-white" aria-label="Trademarks">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <StatCard value="™" suffix="" label="Registered Trademarks" icon={Bookmark} />

          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Brand Portfolio" heading="Trademarks" />
            <div className="flex flex-wrap gap-4">
              {trademarks.map((tm, i) => (
                <ScrollReveal key={tm.name + i} delay={i}>
                  <div className="bg-off-white rounded-2xl p-5 min-w-[180px] hover:shadow-card transition-shadow duration-300">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      {isPlaceholder(tm.name) ? (
                        <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                      ) : (
                        <span className="font-serif font-bold text-charcoal text-lg">{tm.name}</span>
                      )}
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${statusCls(tm.status)}`}>
                        {isPlaceholder(tm.status) ? '—' : tm.status}
                      </span>
                    </div>
                    {!isPlaceholder(tm.description) && (
                      <p className="text-body-text text-xs leading-relaxed">{tm.description}</p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BooksSection() {
  return (
    <section className="section-padding bg-off-white" aria-label="Books">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <StatCard value="2" suffix="" label="Amazon Best-Selling Books" icon={BookOpen} />

          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Authorship" heading="Amazon Best-Selling Books" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {books.map((book, i) => (
                <ScrollReveal key={book.id} delay={i}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    {/* Book cover placeholder */}
                    <div className={`h-52 flex flex-col items-center justify-center p-6 text-white text-center relative overflow-hidden
                                    ${book.category === 'Human Health'
                                      ? 'bg-gradient-to-br from-primary to-primary-dark'
                                      : 'bg-gradient-to-br from-secondary to-secondary-dark'}`}>
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id={`book-dots-${book.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="1.5" cy="1.5" r="1" fill="white" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#book-dots-${book.id})`} />
                        </svg>
                      </div>
                      <BookOpen className="mb-3 opacity-60 relative z-10" size={32} strokeWidth={1.5} />
                      {isPlaceholder(book.title) ? (
                        <div className="space-y-2 relative z-10">
                          <div className="h-4 w-40 bg-white/30 rounded animate-pulse mx-auto" />
                          <div className="h-3 w-28 bg-white/20 rounded animate-pulse mx-auto" />
                        </div>
                      ) : (
                        <div className="relative z-10">
                          <p className="font-serif font-bold text-base leading-snug">{book.title}</p>
                          {book.subtitle && <p className="text-white/75 text-xs mt-1">{book.subtitle}</p>}
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                        book.category === 'Human Health' ? 'bg-primary-light text-primary' : 'bg-secondary/10 text-secondary-dark'
                      }`}>
                        {book.category}
                      </span>
                      {isRealUrl(book.amazonLink) ? (
                        <a
                          href={book.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-dark transition-colors duration-200"
                        >
                          <ShoppingCart size={15} /> View on Amazon
                        </a>
                      ) : (
                        <p className="mt-4 text-xs text-body-text italic">Amazon link coming soon</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TrackRecordPage() {
  useEffect(() => {
    document.title = pageMeta.trackRecord.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.trackRecord.description)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Page hero */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #0D6E6E 100%)' }}
        aria-label="Track record page header"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tr-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tr-dots)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
            Proven Impact
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Our Track Record
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-lg max-w-2xl mx-auto">
            Decades of measurable scientific impact — patents, publications, trademarks, and best-selling books.
          </motion.p>
        </div>

        {/* Stats bar in hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="font-serif font-bold text-4xl text-secondary mb-1 tabular-nums">{s.value}{s.suffix}</div>
              <div className="text-white/60 text-xs uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 50" className="block w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <PatentsSection />
      <PublicationsSection />
      <TrademarksSection />
      <BooksSection />
    </motion.div>
  )
}
