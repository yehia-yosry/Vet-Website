import { Container } from '../components/common/Container'
import { PageHeader } from '../components/common/PageHeader'
import { EmptyState } from '../components/common/States'
import { GalleryTile } from '../components/gallery/GalleryTile'
import { galleryPhotos } from '../data/gallery'
import { usePageMeta } from '../hooks/usePageMeta'

export default function GalleryPage() {
  usePageMeta(
    'جاليري',
    'صور من داخل عيادة D&C البيطرية: كلاب وقطط وفريق العمل ولحظات دافئة من رحلة الرعاية.',
  )

  return (
    <>
      <PageHeader
        eyebrow="جاليري"
        title="وجوه نحبها، ولحظات نعتز بها"
        description="لمحات من يومنا في العيادة: ضيوفنا الصغار، وفريقنا، والتفاصيل التي تصنع الفرق."
      />
      <Container className="py-14 sm:py-20">
        {galleryPhotos.length === 0 ? (
          <EmptyState
            title="لا توجد صور متاحة حاليًا"
            message="سنضيف صورًا جديدة قريبًا."
            action={{ label: 'العودة إلى الرئيسية', to: '/' }}
          />
        ) : (
          // grid-flow-dense back-fills gaps left by tall/wide tiles, so the mosaic stays solid.
          <div className="grid grid-flow-dense auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 md:gap-4 lg:auto-rows-[15rem]">
            {galleryPhotos.map((photo) => (
              <GalleryTile key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </Container>
    </>
  )
}
