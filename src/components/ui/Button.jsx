import { Link } from 'react-router-dom'

export default function Button({ variant = 'primary', to, href, children, onClick, className = '', ...props }) {
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    'outline-dark': 'btn-outline-dark',
    ghost: 'inline-flex items-center justify-center gap-2 px-6 py-3 text-primary font-semibold hover:text-secondary transition-colors duration-200',
  }

  const cls = `${variants[variant] || variants.primary} ${className}`

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  return <button onClick={onClick} className={cls} {...props}>{children}</button>
}
