import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { DoctorProfile } from '../components/team/DoctorProfile'
import { TeamCard } from '../components/team/TeamCard'
import { assistants, mainDoctor } from '../data/team'
import { usePageMeta } from '../hooks/usePageMeta'

export default function TeamPage() {
  usePageMeta(
    'فريقنا',
    'تعرّف على فريق عيادة D&C البيطرية: الطبيب الرئيسي والأطباء والمساعدون الذين يرعون صديقك بخبرة وحنان.',
  )

  return (
    <>
      <DoctorProfile doctor={mainDoctor} />
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="فريق العمل"
            title="أيادٍ أخرى تعتني بصديقك"
            description="يعمل مع د. كريم فريق متخصص، لكل منهم مجاله وخبرته وطريقته الحانية."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {assistants.map((member, index) => (
              <Reveal key={member.id} delay={index * 100}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
