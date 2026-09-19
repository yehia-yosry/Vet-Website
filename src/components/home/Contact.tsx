import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { clinic, mapsLink, telLink } from '../../config/clinic'
import { images } from '../../config/images'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Image } from '../common/Image'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid overflow-hidden rounded-lush rounded-ss-edge bg-sage-50 lg:grid-cols-[0.9fr_1.1fr]">
          <Image
            image={images.gallery.poodle}
            sizes="(min-width: 1024px) 40vw, 100vw"
            position="50% 35%"
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]"
          />
          <Reveal className="p-7 sm:p-12">
            <SectionHeading
              eyebrow="زورونا"
              title="نحب أن نراك ونرى صديقك"
              description={clinic.emergencyNote}
            />

            <ul className="mt-8 grid gap-5">
              <li className="flex gap-4">
                <MapPin className="mt-1.5 size-6 shrink-0 text-terracotta-500" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sage-900">العنوان</p>
                  <p className="text-ink-soft">
                    {clinic.address.street}، {clinic.address.city}
                    <br />
                    {clinic.address.landmark}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1.5 size-6 shrink-0 text-terracotta-500" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sage-900">مواعيد العمل</p>
                  {clinic.workingHours.map((slot) => (
                    <p key={slot.days} className="text-ink-soft">
                      {slot.days}: <span className="text-sage-900">{slot.hours}</span>
                    </p>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1.5 size-6 shrink-0 text-terracotta-500" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sage-900">الهاتف</p>
                  <a href={telLink} dir="ltr" className="text-ink-soft hover:text-terracotta-600">
                    {clinic.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={telLink}>
                <Phone className="size-5" aria-hidden="true" />
                اتصل بنا
              </Button>
              <Button href={clinic.social.whatsapp} variant="soft">
                <MessageCircle className="size-5" aria-hidden="true" />
                واتساب
              </Button>
              <Button href={mapsLink} variant="secondary">
                <MapPin className="size-5" aria-hidden="true" />
                افتح الخريطة
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
