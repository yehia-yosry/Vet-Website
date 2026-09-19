import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { services } from '../../data/services'
import { Container } from '../common/Container'
import { Image } from '../common/Image'
import { ServiceGlyph } from '../common/icons'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

const [featured, ...rest] = services
const rows = rest.slice(0, 3)
const compact = rest.slice(3)

/**
 * Deliberately not a grid of equal cards: one photographic feature, three horizontal rows,
 * then a quiet index of the remaining services.
 */
export function ServicesPreview() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="خدماتنا"
            title="كل ما يحتاجه صديقك تحت سقف واحد"
            description="من الكشف الدوري إلى الجراحة والأشعة، نقدّم رعاية متكاملة حتى لا تضطر للتنقل بين الأماكن."
          />
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-semibold text-terracotta-600"
          >
            كل الخدمات
            <ArrowLeft
              className="size-5 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Link
              to={`/services#${featured.id}`}
              className="group relative block h-full min-h-[24rem] overflow-hidden rounded-lush rounded-ss-edge"
            >
              {featured.image && (
                <Image
                  image={featured.image}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  fill
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/85 via-sage-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                <ServiceGlyph name={featured.icon} className="mb-3 size-8 text-apricot-300" />
                <h3 className="text-2xl">{featured.title}</h3>
                <p className="mt-2 text-ivory/85">{featured.summary}</p>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-6 lg:col-span-7">
            {rows.map((service, index) => (
              <Reveal key={service.id} delay={index * 90}>
                <Link
                  to={`/services#${service.id}`}
                  className="group flex items-stretch gap-5 overflow-hidden rounded-soft bg-ivory shadow-soft transition-shadow duration-300 hover:shadow-lift"
                >
                  {service.image && (
                    <Image
                      image={service.image}
                      sizes="160px"
                      className="w-28 shrink-0 sm:w-40"
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="py-5 pe-5">
                    <ServiceGlyph name={service.icon} className="mb-2 size-6 text-terracotta-500" />
                    <h3 className="text-xl text-sage-900">{service.title}</h3>
                    <p className="mt-1 text-[0.98rem] leading-8 text-ink-soft">{service.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={270}>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-1 border-t border-line pt-4">
                {compact.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services#${service.id}`}
                      className="flex items-center gap-3 py-2 text-sage-900 transition-colors hover:text-terracotta-600"
                    >
                      <ServiceGlyph name={service.icon} className="size-5 text-sage-600" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
