import type { TeamMember } from '../../types'
import { Image } from '../common/Image'

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-soft bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <Image
        image={member.image}
        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
        position="50% 22%"
        className="aspect-[4/4.2]"
        imgClassName="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-xl text-sage-900">{member.name}</h3>
        <p className="text-terracotta-600">{member.title}</p>
        <p className="mt-3 text-sm font-semibold text-sage-800">{member.specialty}</p>
        <p className="text-sm text-ink-mute">{member.experience}</p>
        <p className="mt-3 leading-8 text-ink-soft">{member.bio}</p>
      </div>
    </article>
  )
}
