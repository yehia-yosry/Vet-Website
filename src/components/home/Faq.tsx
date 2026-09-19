import { useState } from 'react'
import { Plus } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { faqs } from '../../data/faq'
import { cn } from '../../lib/cn'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="الأسئلة الشائعة"
            title="أسئلة يسألها أصحاب الحيوانات دائمًا"
            description="لم تجد إجابة سؤالك؟ راسلنا وسنرد عليك بكل سرور."
          />
          <Button href={clinic.social.whatsapp} variant="soft" className="mt-7">
            اسألنا على واتساب
          </Button>
        </Reveal>

        <Reveal delay={100}>
          <ul className="border-t border-line">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <li key={item.question} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      id={`faq-button-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-start text-lg font-semibold text-sage-900 transition-colors hover:text-terracotta-600"
                    >
                      {item.question}
                      <Plus
                        className={cn(
                          'size-5 shrink-0 text-terracotta-500 transition-transform duration-300',
                          isOpen && 'rotate-45',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {/* grid-rows 0fr → 1fr animates height without measuring; `inert` keeps closed content unreachable. */}
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    inert={!isOpen}
                    className={cn(
                      'grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-calm)]',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 leading-9 text-ink-soft">{item.answer}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
