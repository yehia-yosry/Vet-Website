import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { PawMark } from './Decor'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'start' | 'center'
  /** Use on dark backgrounds. */
  inverse?: boolean
  as?: 'h1' | 'h2'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  inverse = false,
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', 'max-w-2xl', className)}>
      <p
        className={cn(
          'flex items-center gap-2 font-accent text-xl',
          align === 'center' && 'justify-center',
          inverse ? 'text-apricot-300' : 'text-terracotta-500',
        )}
      >
        <PawMark className="size-4" />
        {eyebrow}
      </p>
      <Tag
        className={cn(
          'mt-2 text-[1.85rem] leading-[1.4] sm:text-4xl',
          inverse ? 'text-ivory' : 'text-sage-900',
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn('mt-4 text-lg', inverse ? 'text-ivory/80' : 'text-ink-soft')}>
          {description}
        </p>
      )}
    </div>
  )
}
