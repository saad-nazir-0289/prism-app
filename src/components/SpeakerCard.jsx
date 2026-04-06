import { Mic2 } from 'lucide-react'
import GlassCard from './GlassCard'

function SpeakerCard({ speaker, index }) {
  return (
    <GlassCard className="group overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="speaker-gradient p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-xs tracking-[0.35em] text-cyan-300/80">FEATURED {String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{speaker.name}</h3>
            <p className="mt-2 text-sm tracking-[0.18em] uppercase text-pink-200/[0.85]">{speaker.role}</p>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-cyan-300">
            <Mic2 size={18} />
          </span>
        </div>
        <p className="mt-12 max-w-sm text-base leading-7 text-white/70">{speaker.blurb}</p>
      </div>
    </GlassCard>
  )
}

export default SpeakerCard
