import { images } from '../config/images'
import type { TeamMember } from '../types'

/** Placeholder names and biographies: replace with the real team. */
export const mainDoctor: TeamMember = {
  id: 'karim',
  name: 'د. أحمد بشر',
  title: 'مؤسس العيادة واستشاري الجراحة',
  specialty: 'جراحة الحيوانات الأليفة والأمراض الباطنة',
  experience: 'أكثر من 8 سنوات خبرة',
  bio: 'تخرّج في كلية الطب البيطري بجامعة الاسكندرية, وواصل تدريبه في الجراحة الدقيقة وجراحات الأنسجة الرخوة. أسّس D&C على فكرة بسيطة: أن يشعر كل حيوان بالأمان، وأن يخرج كل صاحب حيوان وهو فاهم تمامًا ما يحدث وما هو القادم.',
  image: images.team.doctor,
}

export const assistants: TeamMember[] = [
  {
    id: 'maryam',
    name: 'د. مريم صلاح',
    title: 'طبيبة بيطرية',
    specialty: 'أمراض القطط والتطعيمات',
    experience: '5 سنوات خبرة',
    bio: 'تتابع القطط الصغيرة والجراء منذ أول زيارة، وتحب أن تشرح كل خطوة للمربّي الجديد بصبر.',
    image: images.team.assistant2,
  },
  {
    id: 'omar',
    name: 'د. عمر فاروق',
    title: 'طبيب بيطري',
    specialty: 'الأشعة والتحاليل والتشخيص',
    experience: '6 سنوات خبرة',
    bio: 'يقرأ الأشعة والتحاليل بعين دقيقة، ويشرح النتائج بوضوح حتى تفهم حالة حيوانك بالكامل.',
    image: images.team.assistant1,
  },
  {
    id: 'heba',
    name: 'هبة إبراهيم',
    title: 'مساعدة بيطرية',
    specialty: 'التمريض والعناية بعد الجراحة',
    experience: '4 سنوات خبرة',
    bio: 'صاحبة اليد الحانية في غرفة الإفاقة، تطمئن الحيوانات الخائفة وتتابع تعافيها لحظة بلحظة.',
    image: images.team.assistant3,
  },
]
