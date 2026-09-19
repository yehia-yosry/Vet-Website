import { images } from '../../config/images'
import { Container } from '../common/Container'
import { Image } from '../common/Image'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

const reasons = [
  {
    title: 'وقت كافٍ لكل حيوان',
    text: 'مواعيد مدروسة تمنحنا الوقت لنفحص ونشرح ونجيب عن كل أسئلتك دون استعجال.',
  },
  {
    title: 'تشخيص متكامل في مكان واحد',
    text: 'تحاليل وأشعة داخل العيادة، فتصلك النتيجة وخطة العلاج في زيارة واحدة.',
  },
  {
    title: 'صراحة في الخطة والتكلفة',
    text: 'نخبرك بما يلزم فعلًا، ونوضّح الخيارات والتكلفة قبل أن نبدأ.',
  },
  {
    title: 'متابعة بعد الزيارة',
    text: 'رسالة على واتساب تكفي لنطمئن على حالة حيوانك ونعدّل الخطة عند الحاجة.',
  },
]

export function WhyUs() {
  return (
    <section className="bg-sage-800 py-20 text-ivory sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            inverse
            eyebrow="لماذا D&C؟"
            title="أربعة أسباب تجعلنا اختيار الكثير من العائلات"
            description="لا نعِد بأكثر مما نستطيع، لكننا نلتزم بما نعِد به."
          />
          <Image
            image={images.gallery.samoyed}
            sizes="(min-width: 1024px) 35vw, 90vw"
            position="50% 40%"
            className="mt-10 hidden aspect-[4/3] rounded-lush rounded-se-edge lg:block"
          />
        </Reveal>

        <ol className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-1">
          {reasons.map((reason, index) => (
            <Reveal as="li" key={reason.title} delay={index * 90}>
              <div className="flex gap-6 border-t border-ivory/20 py-7">
                <span className="text-5xl leading-none font-light text-apricot-300">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl">{reason.title}</h3>
                  <p className="mt-2 leading-8 text-ivory/75">{reason.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
