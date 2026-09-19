import { assistants, mainDoctor } from '../../data/team'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Image } from '../common/Image'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function TeamPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <Image
            image={mainDoctor.image}
            sizes="(min-width: 1024px) 32vw, 90vw"
            position="45% 30%"
            className="mx-auto aspect-[4/5] max-w-sm rounded-t-[999px] rounded-b-soft shadow-lift lg:max-w-none"
          />
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="فريقنا"
            title={
              <>
                {mainDoctor.name}
                <span className="mt-1 block text-xl font-medium text-ink-soft">
                  {mainDoctor.title}
                </span>
              </>
            }
            description={mainDoctor.bio}
          />
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-[0.98rem] text-sage-800">
            <span>{mainDoctor.specialty}</span>
            <span className="text-terracotta-600">{mainDoctor.experience}</span>
          </p>

          <div className="mt-9 border-t border-line pt-6">
            <p className="text-sm text-ink-mute">ويعمل معه فريق من المتخصصين</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              {assistants.map((member) => (
                <li key={member.id} className="flex items-center gap-3">
                  <Image
                    image={member.image}
                    sizes="56px"
                    position="50% 25%"
                    className="size-14 rounded-full"
                  />
                  <span className="leading-6">
                    <span className="block font-semibold text-sage-900">{member.name}</span>
                    <span className="text-sm text-ink-mute">{member.title}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9">
            <Button to="/team" variant="secondary">
              تعرّف على الفريق كاملًا
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
