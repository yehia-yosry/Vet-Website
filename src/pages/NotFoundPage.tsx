import { Container } from '../components/common/Container'
import { ErrorState } from '../components/common/States'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta('الصفحة غير موجودة', 'لم نعثر على الصفحة التي تبحث عنها.')

  return (
    <Container className="pt-36 pb-20 text-center">
      <p className="font-accent text-[7rem] leading-none text-apricot-300 sm:text-[9rem]">404</p>
      <ErrorState
        title="يبدو أن هذه الصفحة تاهت منا"
        message="الرابط الذي فتحته غير موجود أو تغيّر مكانه. لا بأس، يمكننا العودة معًا من هنا."
        action={{ label: 'العودة إلى الرئيسية', to: '/' }}
        secondaryAction={{ label: 'تصفّح خدماتنا', to: '/services' }}
      />
    </Container>
  )
}
