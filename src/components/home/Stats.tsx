import { Container } from '../common/Container'
import { PawMark } from '../common/Decor'
import { Reveal } from '../common/Reveal'
import { AnimatedCounter } from './AnimatedCounter'

/** Placeholder figures: replace with the clinic's real numbers. */
const stats = [
  { value: 1200, prefix: '+', label: 'حيوان حظي برعايتنا' },
  { value: 8, prefix: '+', label: 'سنوات من الخبرة' },
  { value: 1400, prefix: '+', label: 'زيارة وكشف' },
  { value: 98, suffix: '%', label: 'من عملائنا راضون عن الخدمة' },
]

export function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="relative overflow-hidden bg-apricot-100 py-16 sm:py-20"
    >
      <PawMark className="pointer-events-none absolute end-[8%] -top-8 size-40 rotate-12 text-apricot-300/40" />
      <Container className="relative">
        <h2 id="stats-title" className="font-accent text-2xl text-terracotta-600 sm:text-3xl">
          أرقام تحكي عن ثقتكم
        </h2>
        <dl className="mt-8 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 100}
              className="border-s border-terracotta-500/30 ps-5 sm:ps-8"
            >
              <dd className="text-5xl font-semibold text-sage-900 sm:text-6xl">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 max-w-[12rem] text-[0.98rem] leading-7 text-ink-soft">
                {stat.label}
              </dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}
