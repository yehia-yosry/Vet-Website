import { useEffect, useRef, useState } from 'react'
import { ImageOff } from 'lucide-react'
import type { ImageAsset } from '../../types'
import { cn } from '../../lib/cn'

interface ImageProps {
  image: ImageAsset
  /** Tells the browser which of the 640w/1200w files it needs. */
  sizes: string
  /** Above-the-fold images: eager + high fetch priority. Everything else lazy-loads. */
  priority?: boolean
  /** Stretch over the nearest positioned ancestor instead of sizing itself. */
  fill?: boolean
  /** Sizing/shape classes for the frame (aspect ratio, radius…). */
  className?: string
  /** CSS object-position, e.g. "50% 20%" to keep a face in a tall crop. */
  position?: string
  imgClassName?: string
}

/**
 * Framed responsive image with a calm loading placeholder and a branded fallback if the file
 * is missing or broken. The frame always has a size from `className`, so nothing shifts.
 */
export function Image({
  image,
  sizes,
  priority = false,
  fill = false,
  className,
  position,
  imgClassName,
}: ImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const ref = useRef<HTMLImageElement>(null)

  // Images served from cache can finish before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setStatus('loaded')
  }, [])

  return (
    <div
      className={cn('overflow-hidden bg-sand', fill ? 'absolute inset-0' : 'relative', className)}
    >
      {status !== 'error' && (
        <img
          ref={ref}
          src={image.src}
          srcSet={image.srcSet}
          sizes={sizes}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          style={position ? { objectPosition: position } : undefined}
          className={cn(
            'absolute inset-0 size-full object-cover transition-opacity duration-700',
            status === 'loaded' ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}
      {status === 'loading' && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-sand to-cream"
          aria-hidden="true"
        />
      )}
      {status === 'error' && (
        <div
          role="img"
          aria-label={image.alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-cream p-4 text-center text-ink-mute"
        >
          <ImageOff className="size-7" aria-hidden="true" />
          <span className="text-sm">تعذّر تحميل الصورة</span>
        </div>
      )}
    </div>
  )
}
