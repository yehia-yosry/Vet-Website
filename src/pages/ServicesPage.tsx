import { PageHeader } from '../components/common/PageHeader'
import { ServiceBlock } from '../components/services/ServiceBlock'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ServicesPage() {
  usePageMeta(
    'خدماتنا',
    'خدمات عيادة D&C البيطرية: الكشف البيطري، التطعيمات، الجراحة، طب الأسنان، التحاليل، الأشعة، العناية والتجميل وعلاج الطوارئ.',
  )

  return (
    <>
      <PageHeader
        eyebrow="خدماتنا"
        title="رعاية متكاملة من أول زيارة"
        description="ثماني خدمات تغطي احتياجات كلبك وقطتك، من الوقاية والكشف الدوري إلى الجراحة والطوارئ."
      />
      {services.map((service, index) => (
        <ServiceBlock
          key={service.id}
          service={service}
          index={index}
          variant={service.id === 'emergency' ? 'banner' : 'split'}
        />
      ))}
    </>
  )
}
