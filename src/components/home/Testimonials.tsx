import { useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { cn } from '../../lib/cn'
import { Container } from '../common/Container'
import { PawMark } from '../common/Decor'
import { SectionHeading } from '../common/SectionHeading'

const count = testimonials.length

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="overflow-hidden py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="آراء العملاء"
          title={<span id="testimonials-title">كلمات من أصحاب الأصدقاء</span>}
        />
        <TestimonialCarousel />
      </Container>
      <TestimonialStrip />
    </section>
  )
}

function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const go = (next: number) => setIndex((next + count) % count)

  return (
    <div
      className="relative mx-auto mt-12 max-w-3xl"
      role="group"
      aria-roledescription="شرائح"
      aria-label="آراء العملاء"
    >
      <Quote
        className="absolute -start-2 -top-3 size-14 rotate-180 text-apricot-300 sm:-start-10 sm:size-20"
        aria-hidden="true"
      />

      {/* All slides share one grid cell so the container keeps the height of the tallest one. */}
      <div className="grid">
        {testimonials.map((item, i) => (
          <figure
            key={item.id}
            inert={i !== index}
            aria-hidden={i !== index}
            className={cn(
              'col-start-1 row-start-1 px-2 text-center transition-[opacity,transform] duration-700 ease-[var(--ease-calm)] sm:px-10',
              i === index
                ? 'translate-x-0 opacity-100'
                : 'pointer-events-none translate-x-6 opacity-0',
            )}
          >
            <blockquote className="text-2xl leading-[2.1] text-sage-900 sm:text-[1.75rem]">
              «{item.quote}»
            </blockquote>
            <figcaption className="mt-7">
              <span className="block text-lg font-bold text-sage-900">{item.name}</span>
              <span className="text-ink-mute">
                صاحبة/صاحب {item.petName}، {item.petKind}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-9 flex items-center justify-center gap-5">
        {/* In RTL "previous" points to the right. */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="الرأي السابق"
          className="grid size-11 place-items-center rounded-soft border border-line text-sage-800 transition-colors hover:bg-sage-800 hover:text-ivory"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-1">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`عرض الرأي ${i + 1} من ${count}`}
              aria-current={i === index}
              className="grid size-6 place-items-center"
            >
              <span
                className={cn(
                  'block h-2 rounded-full transition-all duration-500',
                  i === index ? 'w-6 bg-terracotta-500' : 'w-2 bg-sage-300',
                )}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="الرأي التالي"
          className="grid size-11 place-items-center rounded-soft border border-line text-sage-800 transition-colors hover:bg-sage-800 hover:text-ivory"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

/**
 * Slow editorial ticker travelling right → left.
 * The track is forced to dir="ltr" on purpose: in an RTL flex row the content anchors to the
 * right edge, so translating it left would reveal an empty gap. With an LTR track,
 * translateX(0 → -50%) over two identical copies loops seamlessly while still moving
 * right-to-left on screen. Each item restores dir="rtl" for its text.
 * Motion-sensitive users get a plain scrollable strip; everyone can pause it.
 */
function TestimonialStrip() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative mt-16 border-y border-sage-300/60 bg-sage-50 py-6">
      <div className="overflow-hidden motion-reduce:overflow-x-auto" dir="ltr">
        <ul
          className={cn(
            'flex w-max animate-marquee items-center motion-reduce:animate-none',
            'focus-within:[animation-play-state:paused] hover:[animation-play-state:paused]',
            paused && '[animation-play-state:paused]',
          )}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <li
              key={`${item.id}-${i}`}
              dir="rtl"
              aria-hidden={i >= count ? true : undefined}
              className={cn(
                'flex shrink-0 items-center gap-10 pe-10 text-lg text-sage-900',
                i >= count && 'motion-reduce:hidden',
              )}
            >
              <span>
                «{item.short}» <span className="font-bold text-terracotta-600">{item.name}</span>
              </span>
              <PawMark className="size-4 text-sage-300" />
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        aria-label={paused ? 'تشغيل حركة الشريط' : 'إيقاف حركة الشريط'}
        className="absolute end-3 -top-5 grid size-10 place-items-center rounded-full border border-sage-300 bg-ivory text-sage-800 shadow-soft motion-reduce:hidden"
      >
        {paused ? (
          <Play className="size-4" aria-hidden="true" />
        ) : (
          <Pause className="size-4" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
