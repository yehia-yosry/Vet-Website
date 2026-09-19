import { images } from '../../config/images'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Image } from '../common/Image'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

const principles = [
  { title: 'نسمع أولًا', text: 'نبدأ بقصة حيوانك كما تعرفها أنت، فأنت أعرف الناس به.' },
  { title: 'نشرح بوضوح', text: 'تعرف ما نفعله ولماذا، وما البدائل، قبل أي قرار.' },
  { title: 'نتابع معك', text: 'الزيارة لا تنتهي عند الباب، نطمئن ونجيب عن أسئلتك بعدها.' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="relative pe-10 pb-12 sm:pe-16">
          <Image
            image={images.gallery.vetsPuppy}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="aspect-[5/4] rounded-lush rounded-ee-edge shadow-soft"
          />
          <div className="absolute -end-0 -bottom-0 w-36 sm:w-48">
            <Image
              image={images.gallery.samoyed}
              sizes="220px"
              position="35% 35%"
              className="aspect-[4/5] rounded-edge border-[5px] border-ivory shadow-lift"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="عن العيادة"
            title="بيت ثانٍ لصديقك، وفريق يناديه باسمه"
            description="بدأت D&C من قناعة بسيطة: الحيوان الذي يشعر بالأمان يتجاوب مع العلاج أفضل، وصاحبه الذي يفهم ما يحدث يتخذ قرارات أهدأ وأصح. لذلك بنينا كل شيء حول الهدوء والوضوح والصدق."
          />
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {principles.map((item, index) => (
              <div key={item.title} className="border-t-2 border-sage-300 pt-4">
                <dt className="flex items-baseline gap-2 text-lg font-bold text-sage-900">
                  <span className="text-sm font-medium text-terracotta-500">0{index + 1}</span>
                  {item.title}
                </dt>
                <dd className="mt-1.5 text-[0.98rem] leading-8 text-ink-soft">{item.text}</dd>
              </div>
            ))}
          </dl>
          <Button to="/team" variant="secondary" className="mt-9">
            تعرّف على فريقنا
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
