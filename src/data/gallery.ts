import { images } from '../config/images'
import type { GalleryPhoto } from '../types'

/**
 * Order matters: the mosaic is a 4-column dense grid (tall = 2 rows, wide = 2 columns), and the
 * first five tiles are reused by the home preview, where they fill exactly 2 rows × 4 columns.
 * Keep the total area a multiple of 4 when adding photos so the last row has no gap.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'doctor-cats',
    image: images.gallery.doctorCats,
    shape: 'tall',
    caption: 'ضيفتان لطيفتان في يد دكتور كريم',
  },
  { id: 'golden-hour', image: images.gallery.goldenHour, shape: 'wide', caption: 'دفء الغروب' },
  {
    id: 'poodle',
    image: images.gallery.poodle,
    shape: 'square',
    caption: 'بعد جلسة العناية مباشرة',
  },
  {
    id: 'kitten-checkup',
    image: images.gallery.kittenCheckup,
    shape: 'square',
    caption: 'أول كشف بالسماعة',
  },
  { id: 'dog-cat-nap', image: images.gallery.dogCatNap, shape: 'wide', caption: 'قيلولة مشتركة' },
  {
    id: 'samoyed',
    image: images.gallery.samoyed,
    shape: 'tall',
    caption: 'مع أحد أضخم المرضى قلبًا',
  },
  {
    id: 'vets-puppy',
    image: images.gallery.vetsPuppy,
    shape: 'wide',
    caption: 'جرو صغير بعد الفحص',
  },
  { id: 'cat-eyes', image: images.gallery.catEyes, shape: 'square', caption: 'نظرة فضولية' },
  {
    id: 'doctor-loupes',
    image: images.gallery.doctorLoupes,
    shape: 'tall',
    caption: 'تركيز كامل أثناء الفحص',
  },
  {
    id: 'grooming',
    image: images.gallery.groomingScissors,
    shape: 'square',
    caption: 'قصّة أنيقة بعناية',
  },
  { id: 'poodle-pup', image: images.gallery.poodlePup, shape: 'square', caption: 'أصغر زوارنا' },
  { id: 'vets-exam', image: images.gallery.vetsExam, shape: 'wide', caption: 'كشف بيد الفريق' },
  {
    id: 'orange-cat',
    image: images.gallery.orangeCat,
    shape: 'square',
    caption: 'راحة بجانب النافذة',
  },
  {
    id: 'retriever-rest',
    image: images.gallery.retrieverRest,
    shape: 'wide',
    caption: 'استراحة بعد يوم طويل',
  },
  { id: 'hand-dog', image: images.gallery.handDog, shape: 'wide', caption: 'لمسة تطمئن' },
]
