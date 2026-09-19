import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { formatNumber } from '../../lib/format'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  durationMs?: number
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Counts up once when scrolled into view. Screen readers get the final value immediately. */
export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  durationMs = 1800,
}: AnimatedCounterProps) {
  const [ref, inView] = useInView<HTMLSpanElement>('0px 0px -15% 0px')
  const [current, setCurrent] = useState(0)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    if (!inView || reduced) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduced, value, durationMs])

  return (
    <span ref={ref} dir="ltr" className="tabular-nums">
      <span className="sr-only">{`${prefix}${formatNumber(value)}${suffix}`}</span>
      <span aria-hidden="true">{`${prefix}${formatNumber(reduced ? value : current)}${suffix}`}</span>
    </span>
  )
}
