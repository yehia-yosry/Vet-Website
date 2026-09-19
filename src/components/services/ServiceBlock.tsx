import { Check } from 'lucide-react'
import type { Service } from '../../types'
import { cn } from '../../lib/cn'
import { useBooking } from '../booking/context'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Image } from '../common/Image'
import { ServiceGlyph } from '../common/icons'
import { Reveal } from '../common/Reveal'

interface ServiceBlockProps {
  service: Service
  index: number
  variant: 'split' | 'banner'
}

/**
 * Editorial service block. `split` alternates image side and photo shape by index;
 * `banner` is a full-width band used to break the rhythm (emergency).
 */
export function ServiceBlock({ service, index, variant }: ServiceBlockProps) {
  const { openBooking } = useBooking()
  const number = String(index + 1).padStart(2, '0')

  const details = (
    <>
      <p className="flex items-center gap-3 text-terracotta-500">
        <span className="text-4xl leading-none font-light">{number}</span>
        <ServiceGlyph name={service.icon} className="size-7" />
      </p>
      <h2 className="mt-3 text-3xl text-sage-900 sm:text-4xl">{service.title}</h2>
      <p className="mt-4 text-lg leading-9 text-ink-soft">{service.details}</p>
      <ul className="mt-6 grid gap-2.5">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <Check className="mt-2 size-4 shrink-0 text-sage-600" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
      <Button variant="secondary" className="mt-8" onClick={() => openBooking(service.title)}>
        احجز هذه الخدمة
      </Button>
    </>
  )

  if (variant === 'banner') {
    return (
      <section id={service.id} className="scroll-mt-20 bg-sage-800 py-16 text-ivory sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="[&_button]:border-ivory [&_button]:text-ivory [&_button:hover]:bg-ivory [&_button:hover]:text-sage-900 [&_h2]:text-ivory [&_li_svg]:text-apricot-300 [&_p]:text-ivory/85">
            {details}
          </Reveal>
          {service.image && (
            <Reveal delay={120}>
              <Image
                image={service.image}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="aspect-[16/11] rounded-lush rounded-se-edge"
              />
            </Reveal>
          )}
        </Container>
      </section>
    )
  }

  const imageFirst = index % 2 === 0
  return (
    <section id={service.id} className="scroll-mt-20 py-14 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {service.image && (
          <Reveal className={cn(!imageFirst && 'lg:order-2')}>
            <Image
              image={service.image}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className={cn(
                'shadow-soft',
                imageFirst
                  ? 'aspect-[5/4] rounded-lush rounded-ss-edge'
                  : 'mx-auto aspect-[4/5] max-w-md rounded-t-[999px] rounded-b-soft lg:max-w-none',
              )}
            />
          </Reveal>
        )}
        <Reveal delay={120}>{details}</Reveal>
      </Container>
    </section>
  )
}
