import { Link } from 'react-router-dom'
import { Pencil } from 'lucide-react'
import { useProfile } from '../lib/profile'
import { Avatar } from './Avatar'

/** Slim profile strip at the top of a home page: banner, avatar with frame, name. Links to the Profile page. */
export function ProfileCard() {
  const me = useProfile()
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6" aria-label="Profile">
      <Link to="/profile" className="group relative flex items-center gap-4 overflow-hidden rounded-3xl border border-border bg-card/60 p-4 pr-5 transition active:scale-[0.99] sm:p-5">
        {me.banner && <img src={me.banner} alt="" referrerPolicy="no-referrer" className="absolute inset-0 size-full object-cover" />}
        <span aria-hidden className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/20" />
        <Avatar size={64} src={me.avatar} frame={me.frame} name={me.name} className="relative z-10 m-2" />
        <div className="relative z-10 min-w-0 flex-1">
          <p className="truncate font-display text-lg font-bold sm:text-xl">{me.name || 'Set up your profile'}</p>
          <p className="truncate text-sm text-muted">{me.name ? 'Your profile, frame and preferences' : 'Add a name, avatar, banner and animated frame'}</p>
        </div>
        <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card/70 backdrop-blur transition group-hover:bg-card">
          <Pencil className="size-4" />
        </span>
      </Link>
    </section>
  )
}
