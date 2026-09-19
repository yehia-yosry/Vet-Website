import { ArrowLeft, Clock, HeartHandshake, ShieldCheck } from 'lucide-react'
import { images } from '../../config/images'
import { useBooking } from '../booking/context'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Squiggle } from '../common/Decor'
import { Image } from '../common/Image'

const promises = [
  { Icon: Clock, text: 'كشف بلا استعجال' },
  { Icon: ShieldCheck, text: 'تحاليل وأشعة في مكان واحد' },
  { Icon: HeartHandshake, text: 'متابعة بعد الزيارة' },
]

export function Hero() {
  const { openBooking } = useBooking()

  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="animate-rise font-accent text-2xl text-terracotta-500 sm:text-3xl">
            أهلًا بك وبصديقك
          </p>
          <h1 className="mt-2 animate-rise text-[2.6rem] leading-[1.25] text-sage-900 [animation-delay:90ms] sm:text-6xl">
            رعاية{' '}
            <span className="relative inline-block px-1 font-accent text-terracotta-500">
              أحنّ
              <Squiggle className="absolute inset-x-0 -bottom-2 h-2.5 w-full text-apricot-500" />
            </span>
            <br />
            لصديقك المقرّب
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-lg text-ink-soft [animation-delay:180ms] sm:text-xl sm:leading-9">
            نستقبل كلبك وقطتك كأنهما فرد من العائلة: فحص دقيق، وشرح صريح، ولمسة حانية تطمئنك
            وتطمئنهما، في مكان هادئ ومجهّز بخبرة واهتمام.
          </p>

          <div className="mt-9 flex animate-rise flex-wrap items-center gap-3 [animation-delay:270ms]">
            <Button size="lg" onClick={() => openBooking()}>
              احجز موعد
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              اكتشف خدماتنا
              <ArrowLeft className="size-5" aria-hidden="true" />
            </Button>
          </div>

          <ul className="mt-10 flex animate-rise flex-wrap gap-x-7 gap-y-3 border-t border-line pt-6 text-[0.95rem] text-ink-soft [animation-delay:360ms]">
            {promises.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="size-5 text-sage-600" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Layered arch: a sage arch sits offset behind the main photo; a real clinic photo overlaps it. */}
        <div className="relative mx-auto w-full max-w-md animate-rise pb-10 [animation-delay:140ms] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 mx-auto h-[calc(100%-2.5rem)] translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-soft bg-sage-100 lg:translate-x-6 lg:translate-y-5"
          />
          <Image
            priority
            image={images.hero.main}
            sizes="(min-width: 1024px) 40vw, 90vw"
            position="42% 50%"
            className="relative aspect-[4/5] rounded-t-[999px] rounded-b-soft shadow-lift"
          />
          <figure className="absolute end-[-0.5rem] -bottom-0 w-32 sm:w-44 lg:end-[-1.5rem]">
            <Image
              image={images.hero.doctor}
              sizes="176px"
              position="50% 30%"
              className="aspect-[4/5] rounded-edge border-[5px] border-ivory shadow-lift"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-ivory px-2 pt-1 pb-0.5 text-center text-[0.8rem] leading-6 text-sage-900">
              د. أحمد مع ضيفتيه
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
