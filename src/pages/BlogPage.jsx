import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Tag } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { pageMeta, blogs } from '../data/content'

export default function BlogPage() {
  useEffect(() => {
    document.title = pageMeta.blog.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.blog.description)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Page hero — matches About/Services/Track Record style */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D6E6E 0%, #1A1A2E 100%)' }}
        aria-label="Blogs & Insights header"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-dots)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Blogs &amp; Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-lg max-w-2xl mx-auto"
          >
            Science-backed perspectives on nutraceuticals, pet health, and evidence-based wellness — by Dr. Ajay Srivastava, DVM, PhD.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 50" className="block w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Article grid */}
      <section className="section-padding bg-white" aria-label="Articles">
        <div className="container-max">
          <SectionHeading
            eyebrow="Latest Articles"
            heading="Published Articles"
            subheading={`${blogs.length} articles — newest first`}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((post, i) => (
              <ScrollReveal key={i} delay={i % 4}>
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-off-white rounded-2xl p-7 border border-gray-100
                             hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium
                                   bg-primary-light text-primary"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="font-serif font-semibold text-charcoal text-xl leading-snug mb-3
                                 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Snippet */}
                  <p className="text-body-text text-sm leading-relaxed flex-1 mb-5">
                    {post.snippet}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-body-text/70 pt-4 border-t border-gray-200">
                    <time>{post.date}</time>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold
                                     group-hover:gap-2 transition-all duration-200">
                      Read on LinkedIn <ExternalLink size={12} />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* LinkedIn follow CTA */}
          <ScrollReveal delay={3}>
            <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-10 text-center text-white">
              <h3 className="font-serif font-bold text-2xl mb-3">Follow for the Latest</h3>
              <p className="text-white/75 mb-6 max-w-xl mx-auto">
                New articles published regularly on LinkedIn. Follow Dr. Srivastava to get notified of the latest science-backed insights.
              </p>
              <a
                href="https://www.linkedin.com/in/ajay-srivastava-dvm-ms-phd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold
                           rounded-xl hover:bg-secondary-dark active:scale-95 transition-all duration-200 shadow-gold"
              >
                View LinkedIn Profile <ExternalLink size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
