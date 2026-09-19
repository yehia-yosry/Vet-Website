import type { GalleryPhoto } from '../../types'
import { cn } from '../../lib/cn'
import { Image } from '../common/Image'

const shapeClasses: Record<GalleryPhoto['shape'], string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  square: '',
}

/**
 * One tile of the editorial mosaic. The caption fades in on hover/focus for pointer devices
 * only: on touch screens the photo simply stands on its own (alt text carries the meaning).
 */
export function GalleryTile({ photo, className }: { photo: GalleryPhoto; className?: string }) {
  return (
    <figure
      className={cn(
        'group relative overflow-hidden rounded-soft odd:rounded-ee-lush even:rounded-ss-lush',
        shapeClasses[photo.shape],
        className,
      )}
    >
      <Image
        image={photo.image}
        sizes={
          photo.shape === 'wide'
            ? '(min-width: 768px) 50vw, 100vw'
            : '(min-width: 768px) 25vw, 50vw'
        }
        fill
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-sage-900/75 to-transparent px-4 pt-10 pb-3 text-sm text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100 [@media(hover:none)]:hidden">
        {photo.caption}
      </figcaption>
    </figure>
  )
}
