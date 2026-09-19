import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { galleryPhotos } from '../../data/gallery'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { GalleryTile } from '../gallery/GalleryTile'

const preview = galleryPhotos.slice(0, 5)

export function GalleryPreview() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="جاليري"
            title="لحظات من داخل العيادة وخارجها"
            description="وجوه نحبها، وأوقات صغيرة تذكّرنا لماذا نحب ما نفعله."
          />
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 font-semibold text-terracotta-600"
          >
            شاهد كل الصور
            <ArrowLeft
              className="size-5 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <Reveal className="mt-12 grid grid-flow-dense auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 md:gap-4">
          {preview.map((photo) => (
            <GalleryTile key={photo.id} photo={photo} />
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
