import { Container } from '../common/Container'
import { SocialLinks } from '../common/SocialLinks'

export function SocialStrip() {
  return (
    <section aria-labelledby="social-title" className="border-y border-line bg-sage-50">
      <Container className="flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
        <h2 id="social-title" className="font-accent text-2xl text-sage-800">
          تابعنا لتصلك أحدث حكايات ضيوفنا ونصائح الرعاية
        </h2>
        <SocialLinks />
      </Container>
    </section>
  )
}
