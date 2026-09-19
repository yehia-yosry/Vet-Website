import { clinic } from '../../config/clinic'
import { cn } from '../../lib/cn'
import { FacebookIcon, InstagramIcon, TiktokIcon, WhatsappIcon, YoutubeIcon } from './icons'

const socialItems = [
  { label: 'صفحتنا على فيسبوك', href: clinic.social.facebook, Icon: FacebookIcon },
  { label: 'حسابنا على إنستجرام', href: clinic.social.instagram, Icon: InstagramIcon },
  { label: 'راسلنا على واتساب', href: clinic.social.whatsapp, Icon: WhatsappIcon },
  { label: 'حسابنا على تيك توك', href: clinic.social.tiktok, Icon: TiktokIcon },
  { label: 'قناتنا على يوتيوب', href: clinic.social.youtube, Icon: YoutubeIcon },
]

export function SocialLinks({
  inverse = false,
  className,
}: {
  inverse?: boolean
  className?: string
}) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {socialItems.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              'grid size-11 place-items-center rounded-soft border transition-colors duration-300',
              inverse
                ? 'border-ivory/25 text-ivory hover:bg-ivory hover:text-sage-900'
                : 'border-line text-sage-800 hover:border-sage-800 hover:bg-sage-800 hover:text-ivory',
            )}
          >
            <Icon className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  )
}
