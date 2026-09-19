import { Award, Stethoscope } from 'lucide-react'
import type { TeamMember } from '../../types'
import { useBooking } from '../booking/context'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Image } from '../common/Image'

/** The lead veterinarian: full-height editorial portrait beside a long-form profile. */
export function DoctorProfile({ doctor }: { doctor: TeamMember }) {
  const { openBooking } = useBooking()

  return (
    <section className="bg-cream pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md animate-rise lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-soft bg-sage-100 lg:translate-x-6 lg:translate-y-6"
          />
          <Image
            priority
            image={doctor.image}
            sizes="(min-width: 1024px) 40vw, 90vw"
            position="45% 30%"
            className="relative aspect-[4/5] rounded-t-[999px] rounded-b-soft shadow-lift"
          />
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <p className="font-accent text-2xl text-terracotta-500">طبيبنا الرئيسي</p>
          <h1 className="mt-1 text-4xl text-sage-900 sm:text-5xl">{doctor.name}</h1>
          <p className="mt-2 text-xl text-ink-soft">{doctor.title}</p>

          <dl className="mt-8 grid gap-5 border-y border-line py-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <Stethoscope
                className="mt-1.5 size-5 shrink-0 text-terracotta-500"
                aria-hidden="true"
              />
              <div>
                <dt className="text-sm text-ink-mute">التخصص</dt>
                <dd className="font-semibold text-sage-900">{doctor.specialty}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Award className="mt-1.5 size-5 shrink-0 text-terracotta-500" aria-hidden="true" />
              <div>
                <dt className="text-sm text-ink-mute">الخبرة</dt>
                <dd className="font-semibold text-sage-900">{doctor.experience}</dd>
              </div>
            </div>
          </dl>

          <p className="mt-7 max-w-xl text-lg leading-9 text-ink-soft">{doctor.bio}</p>
          <Button className="mt-8" size="lg" onClick={() => openBooking()}>
            احجز موعدًا مع د. كريم
          </Button>
        </div>
      </Container>
    </section>
  )
}
