import type { ReactNode } from 'react'
import { Container } from './Container'
import { PawMark, Squiggle } from './Decor'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: ReactNode
}

/** Shared intro for inner pages. Sits under the fixed header, hence the generous top padding. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-cream pt-32 pb-12 sm:pt-40 sm:pb-16">
      <PawMark className="pointer-events-none absolute start-[6%] -bottom-6 size-28 -rotate-12 text-sage-100" />
      <Container>
        <p className="animate-rise font-accent text-2xl text-terracotta-500">{eyebrow}</p>
        <h1 className="mt-1 animate-rise text-4xl text-sage-900 [animation-delay:80ms] sm:text-5xl">
          {title}
        </h1>
        <Squiggle className="mt-3 h-2.5 w-28 animate-rise text-apricot-500 [animation-delay:160ms]" />
        <p className="mt-5 max-w-2xl animate-rise text-lg text-ink-soft [animation-delay:220ms]">
          {description}
        </p>
      </Container>
    </header>
  )
}
