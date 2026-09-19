import { Link } from 'react-router'
import type { Article } from '../../types'
import { cn } from '../../lib/cn'
import { formatArabicDate, readingTimeLabel } from '../../lib/format'
import { Image } from '../common/Image'

interface BlogCardProps {
  article: Article
  /** The lead article of the listing: large, image beside text. */
  featured?: boolean
}

export function ArticleMeta({ article, className }: { article: Article; className?: string }) {
  return (
    <p
      className={cn('flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-mute', className)}
    >
      <span className="font-bold text-terracotta-600">{article.category}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.date}>{formatArabicDate(article.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingTimeLabel(article.readingMinutes)}</span>
    </p>
  )
}

export function BlogCard({ article, featured = false }: BlogCardProps) {
  return (
    <article
      className={cn(
        'group',
        featured && 'grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14',
      )}
    >
      <Link to={`/blog/${article.slug}`} className="block" aria-hidden="true" tabIndex={-1}>
        <Image
          image={article.cover}
          sizes={
            featured
              ? '(min-width: 1024px) 55vw, 90vw'
              : '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw'
          }
          className={cn(
            featured
              ? 'aspect-[16/11] rounded-lush rounded-ss-edge'
              : 'aspect-[4/3] rounded-soft rounded-ee-lush',
          )}
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className={cn(!featured && 'mt-5')}>
        <ArticleMeta article={article} />
        <h2 className={cn('mt-2 text-sage-900', featured ? 'text-3xl sm:text-4xl' : 'text-xl')}>
          <Link
            to={`/blog/${article.slug}`}
            className="transition-colors hover:text-terracotta-600"
          >
            {article.title}
          </Link>
        </h2>
        <p className={cn('mt-3 text-ink-soft', featured ? 'text-lg' : 'text-[0.98rem] leading-8')}>
          {article.excerpt}
        </p>
      </div>
    </article>
  )
}
