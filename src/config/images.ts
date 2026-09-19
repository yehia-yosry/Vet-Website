import logoUrl from '../assets/images/branding/logo.jpg'
import type { ImageAsset } from '../types'

/**
 * Central image registry.
 *
 * To replace a photo: drop a new JPG/PNG with the SAME name into
 * `src/assets/images/<folder>/originals/`, run `npm run images`, done.
 * To point a slot at a different photo: change the file key ('folder/name') below.
 * Arabic alt text lives here too, next to the picture it describes.
 */
const files = import.meta.glob('../assets/images/*/*-{640,1200}.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

function photo(key: string, alt: string): ImageAsset {
  const [folder, name] = key.split('/')
  const small = files[`../assets/images/${folder}/${name}-640.webp`]
  const large = files[`../assets/images/${folder}/${name}-1200.webp`]
  return { src: large, srcSet: `${small} 640w, ${large} 1200w`, alt }
}

/** The supplied logo, used untouched. See components/common/Logo.tsx for how it is framed. */
export const logo = { src: logoUrl, alt: 'شعار عيادة D&C البيطرية' }

export const images = {
  hero: {
    main: photo('hero/retriever-pup', 'جرو ريتريفر ذهبي يغمز بعينه وهو مستلقٍ بهدوء'),
    doctor: photo('hero/doctor-cats', 'الطبيب البيطري يحمل قطتين بابتسامة دافئة داخل العيادة'),
  },
  services: {
    exam: photo('services/exam', 'يدان تفحصان قطة بيضاء صغيرة بالسماعة الطبية'),
    vaccination: photo('services/vaccination', 'تحضير حقنة تطعيم من زجاجة الدواء'),
    surgery: photo('services/surgery', 'فريق جراحي بالقفازات والكمامات أثناء عملية جراحية'),
    dental: photo('services/dental', 'لقطة قريبة لأسنان كلب أثناء الفحص'),
    lab: photo('services/lab', 'طبيب يفحص عينة تحت الميكروسكوب في المعمل'),
    xray: photo('services/xray', 'طبيب يشير إلى صورة أشعة على جهاز لوحي'),
    grooming: photo('services/grooming', 'مربية تقصّ فرو كلب أبيض صغير بالمقص'),
    emergency: photo('services/emergency', 'سيارة إسعاف مخصصة للحيوانات الأليفة'),
  },
  team: {
    doctor: photo('team/doctor-loupes', 'الطبيب البيطري بنظارة التكبير الجراحية أثناء عمله'),
    assistant1: photo('team/assistant-1', 'طبيب بيطري مبتسم بنظارة وسماعة طبية'),
    assistant2: photo('team/assistant-2', 'طبيبة بيطرية بالمعطف الأبيض تشير إلى الجانب'),
    assistant3: photo('team/assistant-3', 'مساعدة بيطرية مبتسمة بزي أزرق داخل العيادة'),
  },
  gallery: {
    doctorCats: photo('gallery/doctor-cats', 'الطبيب البيطري يحمل قطتين في العيادة'),
    poodle: photo('gallery/poodle', 'كلب بودل بلون المشمش يجلس مبتسمًا على طاولة الاستقبال'),
    samoyed: photo('gallery/samoyed-team', 'اثنان من الفريق مع كلب سامويد أبيض ضخم ولطيف'),
    doctorLoupes: photo(
      'gallery/doctor-loupes',
      'الطبيب في لقطة جانبية بالأبيض والأسود أثناء الفحص',
    ),
    goldenHour: photo('gallery/retriever-golden-hour', 'كلب ريتريفر في ضوء الغروب الذهبي'),
    dogCatNap: photo('gallery/dog-cat-nap', 'كلب وقطة نائمان معًا على بطانية'),
    poodlePup: photo('gallery/poodle-pup', 'جرو بودل بني صغير ينظر إلى الكاميرا'),
    retrieverRest: photo('gallery/retriever-rest', 'كلب ريتريفر مستريح على سجادة في البيت'),
    catEyes: photo('gallery/cat-green-eyes', 'قطة بعينين خضراوين تنظر للأعلى'),
    orangeCat: photo('gallery/orange-cat-window', 'قطة برتقالية مستلقية بجوار النافذة'),
    kittenCheckup: photo('gallery/kitten-checkup', 'فحص قطة صغيرة بيضاء بالسماعة'),
    vetsPuppy: photo('gallery/vets-puppy', 'طبيبان يحملان جروًا صغيرًا بعد الفحص'),
    vetsExam: photo('gallery/vets-exam', 'طبيبان يفحصان كلبًا على طاولة الكشف'),
    groomingScissors: photo('gallery/grooming-scissors', 'قصّ فرو كلب أبيض بعناية'),
    handDog: photo('gallery/hand-dog', 'يد تربّت على كلب صغير بحنان'),
  },
  blog: {
    firstVaccine: photo('blog/first-vaccine', 'جرو بودل بين يدي طبيبة أثناء زيارة التطعيم'),
    teeth: photo('blog/teeth', 'لقطة قريبة لأسنان كلب'),
    summer: photo('blog/summer', 'كلب ريتريفر يلتقط أنفاسه في شمس الغروب'),
    kitten: photo('blog/kitten', 'قطة صغيرة رمادية جالسة على وسادة'),
    feeding: photo('blog/feeding', 'كلب كورجي سعيد على خلفية بيضاء'),
    coat: photo('blog/coat', 'تمشيط فرو كلب بفرشاة ناعمة'),
    senior: photo('blog/senior', 'كلب وقطة كبيران نائمان بجانب بعضهما'),
    afterSurgery: photo('blog/after-surgery', 'كلب صغير يرتدي طوق الحماية بعد العملية'),
  },
} as const
