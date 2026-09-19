import { About } from '../components/home/About'
import { Contact } from '../components/home/Contact'
import { Faq } from '../components/home/Faq'
import { GalleryPreview } from '../components/home/GalleryPreview'
import { Hero } from '../components/home/Hero'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { SocialStrip } from '../components/home/SocialStrip'
import { Stats } from '../components/home/Stats'
import { TeamPreview } from '../components/home/TeamPreview'
import { Testimonials } from '../components/home/Testimonials'
import { WhyUs } from '../components/home/WhyUs'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  usePageMeta(
    null,
    'عيادة D&C البيطرية: كشف وتطعيمات وجراحة وأسنان وتحاليل وأشعة وعلاج طوارئ لكلبك وقطتك، بخبرة واهتمام وأجواء مطمئنة.',
  )

  return (
    <>
      <Hero />
      <SocialStrip />
      <About />
      <ServicesPreview />
      <WhyUs />
      <Stats />
      <TeamPreview />
      <GalleryPreview />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
