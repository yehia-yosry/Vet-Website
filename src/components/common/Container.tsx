import type { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ContainerProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

/** The one content width used everywhere. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[76rem] px-5 sm:px-8', className)}>{children}</Tag>
  )
}
