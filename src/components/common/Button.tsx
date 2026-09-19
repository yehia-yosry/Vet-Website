import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'soft' | 'light'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-terracotta-500 text-white shadow-soft hover:bg-terracotta-600 hover:shadow-lift',
  secondary: 'border border-sage-800 text-sage-800 hover:bg-sage-800 hover:text-ivory',
  soft: 'bg-sage-100 text-sage-900 hover:bg-sage-300',
  light: 'bg-ivory text-sage-900 hover:bg-white',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-[0.95rem]',
  md: 'h-12 px-6',
  lg: 'h-14 px-8 text-lg',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps &
  (
    | ({ to: string; href?: never } & { onClick?: never })
    | ({ href: string; to?: never } & { onClick?: never })
    | ({ to?: never; href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
  )

/** Renders a router link, an external anchor or a real <button> depending on the props. */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  to,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-soft font-semibold leading-none',
    'transition-[background,box-shadow,color,transform] duration-300 active:translate-y-px',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
