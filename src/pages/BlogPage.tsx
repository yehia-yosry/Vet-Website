import { BlogCard } from '../components/blog/BlogCard'
import { Container } from '../components/common/Container'
import { PageHeader } from '../components/common/PageHeader'
import { Reveal } from '../components/common/Reveal'
import { EmptyState } from '../components/common/States'
import { articles } from '../data/blog'
import { usePageMeta } from '../hooks/usePageMeta'

export default function BlogPage() {
  usePageMeta(
    'مدونة',
    'مقالات بيطرية مبسّطة من فريق D&C: التطعيمات، صحة الأسنان، التغذية، العناية بالفرو ورعاية الحيوانات الكبيرة في السن.',
  )

  const [lead, ...others] = articles

  return (
    <>
      <PageHeader
        eyebrow="مدونة"
        title="معلومات بيطرية تفيدك كل يوم"
        description="مقالات بسيطة وموثوقة كتبها فريقنا ليساعدك على فهم احتياجات صديقك واتخاذ قرارات أهدأ."
      />
      <Container className="py-14 sm:py-20">
        {!lead ? (
          <EmptyState
            title="لا توجد مقالات متاحة حاليًا"
            message="نعمل على كتابة مقالات جديدة، عد إلينا قريبًا."
            action={{ label: 'العودة إلى الرئيسية', to: '/' }}
          />
        ) : (
          <>
            <Reveal>
              <BlogCard article={lead} featured />
            </Reveal>
            <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((article, index) => (
                <Reveal key={article.slug} delay={(index % 3) * 90}>
                  <BlogCard article={article} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Container>
    </>
  )
}
