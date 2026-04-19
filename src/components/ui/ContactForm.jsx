import { useState } from 'react'
import { CheckCircle2, Send, Loader2 } from 'lucide-react'
import { contactInterests } from '../../data/content'

const initialState = { name: '', email: '', phone: '', company: '', interest: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
    setForm(initialState)
  }

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border text-charcoal text-sm placeholder-gray-400
     focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200
     ${errors[field]
       ? 'border-red-400 focus:ring-red-300 bg-red-50'
       : 'border-gray-200 focus:ring-primary/30 bg-white hover:border-primary/40'
     }`

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
        <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
          <CheckCircle2 className="text-primary" size={32} />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">Message Sent!</h3>
          <p className="text-body-text text-sm max-w-sm mx-auto">
            Thank you for reaching out. We will be in touch shortly to discuss how Nutraceutra can accelerate your innovation.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-primary font-semibold hover:text-secondary transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
            Name <span className="text-secondary">*</span>
          </label>
          <input
            id="name" name="name" type="text" autoComplete="name"
            placeholder="Dr. Jane Smith"
            value={form.name} onChange={handleChange}
            className={inputCls('name')}
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
            Email <span className="text-secondary">*</span>
          </label>
          <input
            id="email" name="email" type="email" autoComplete="email"
            placeholder="jane@company.com"
            value={form.email} onChange={handleChange}
            className={inputCls('email')}
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      {/* Phone + Company row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
            Phone <span className="text-gray-400 normal-case font-normal">(optional)</span>
          </label>
          <input
            id="phone" name="phone" type="tel" autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            value={form.phone} onChange={handleChange}
            className={inputCls('phone')}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
            Company
          </label>
          <input
            id="company" name="company" type="text" autoComplete="organization"
            placeholder="Your Company Name"
            value={form.company} onChange={handleChange}
            className={inputCls('company')}
          />
        </div>
      </div>

      {/* Primary Interest */}
      <div>
        <label htmlFor="interest" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
          Primary Interest
        </label>
        <select
          id="interest" name="interest"
          value={form.interest} onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-charcoal bg-white
                     focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-transparent
                     hover:border-primary/40 transition-all duration-200 appearance-none cursor-pointer"
        >
          {contactInterests.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
          Message <span className="text-secondary">*</span>
        </label>
        <textarea
          id="message" name="message" rows={5}
          placeholder="Tell us about your project or inquiry..."
          value={form.message} onChange={handleChange}
          className={`${inputCls('message')} resize-none`}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-secondary text-white
                   font-semibold rounded-xl hover:bg-secondary-dark active:scale-[0.98]
                   transition-all duration-200 shadow-gold disabled:opacity-70 disabled:cursor-not-allowed
                   focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      >
        {status === 'submitting' ? (
          <><Loader2 size={18} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  )
}
