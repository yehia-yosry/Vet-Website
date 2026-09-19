import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

interface RevealProps {
  as?: ElementType
  className?: string
  /** Stagger in milliseconds. */
  delay?: number
  children: ReactNode
}

/** Fade-and-rise on first entering the viewport. The motion itself lives in index.css. */
export function Reveal({ as: Tag = 'div', className, delay = 0, children }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={cn('reveal', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
