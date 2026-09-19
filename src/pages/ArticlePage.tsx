import { Link, useParams } from 'react-router'
import { ArrowRight, Info } from 'lucide-react'
import { ArticleMeta, BlogCard } from '../components/blog/BlogCard'
import { Container } from '../components/common/Container'
import { Image } from '../components/common/Image'
import { ErrorState } from '../components/common/States'
import { getArticle, getRelated } from '../data/blog'
import { usePageMeta } from '../hooks/usePageMeta'
import type { ArticleBlock } from '../types'

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-12 mb-4 text-2xl text-sage-900 sm:text-3xl">{block.text}</h2>
    case 'p':
      return <p className="mt-5 text-[1.15rem] leading-[2.1] text-ink">{block.text}</p>
    case 'list':
      return (
        <ul className="mt-5 grid gap-3 text-[1.1rem] leading-9 text-ink">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-4 size-1.5 shrink-0 rounded-full bg-terracotta-500"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'note':
      return (
        <aside className="mt-8 flex gap-4 rounded-edge border-s-4 border-terracotta-500 bg-apricot-100 p-5 text-[1.05rem] leading-9 text-sage-900">
          <Info className="mt-1.5 size-5 shrink-0 text-terracotta-600" aria-hidden="true" />
          <p>{block.text}</p>
        </aside>
      )
  }
}

export default function ArticlePage() {
  const { slug = '' } = useParams()
  const article = getArticle(slug)

  usePageMeta(article?.title ?? 'المقال غير موجود', article?.excerpt ?? 'لم نعثر على هذا المقال.')

  if (!article) {
    return (
      <div className="pt-32 pb-16">
        <ErrorState
          title="لم نعثر على هذا المقال"
          message="ربما تغيّر الرابط أو أُزيل المقال. يمكنك تصفح بقية مقالاتنا."
          action={{ label: 'العودة إلى المدونة', to: '/blog' }}
        />
      </div>
    )
  }

  const related = getRelated(article.slug)

  return (
    <>
      <article>
        <header className="bg-cream pt-32 pb-10 sm:pt-40">
          <Container className="max-w-3xl">
            <Link
              to="/blog"
              className="group mb-6 inline-flex items-center gap-2 font-semibold text-terracotta-600"
            >
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
              العودة إلى المدونة
            </Link>
            <ArticleMeta article={article} />
            <h1 className="mt-3 animate-rise text-3xl leading-[1.5] text-sage-900 sm:text-5xl sm:leading-[1.4]">
              {article.title}
            </h1>
            <p className="mt-5 text-xl leading-9 text-ink-soft">{article.excerpt}</p>
          </Container>
        </header>

        <Container className="-mt-1 max-w-5xl">
          <Image
            priority
            image={article.cover}
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="aspect-[16/9] rounded-lush rounded-ss-edge shadow-soft"
          />
        </Container>

        <Container className="max-w-3xl pt-6 pb-16">
          {article.body.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </Container>
      </article>

      <section aria-labelledby="related-title" className="bg-cream py-16 sm:py-20">
        <Container>
          <h2 id="related-title" className="text-2xl text-sage-900 sm:text-3xl">
            مقالات قد تهمك
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} article={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
