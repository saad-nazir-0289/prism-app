import { Check } from 'lucide-react'
import GlassCard from './GlassCard'
import PrimaryButton from './PrimaryButton'

function PricingCard({ tier }) {
  return (
    <GlassCard className={`relative p-7 ${tier.featured ? 'border-cyan-300/40 shadow-[0_0_80px_rgba(34,211,238,0.12)]' : ''}`}>
      {tier.featured ? (
        <span className="absolute right-6 top-6 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[11px] tracking-[0.24em] text-cyan-200 uppercase">
          Most Popular
        </span>
      ) : null}

      <div className="font-display text-xs tracking-[0.32em] text-cyan-300/80">{tier.name}</div>
      <div className="mt-5 text-5xl font-semibold text-white">{tier.price}</div>
      <p className="mt-4 max-w-sm text-base leading-7 text-white/65">{tier.description}</p>

      <div className="mt-8 space-y-4">
        {tier.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-white/78">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-cyan-300">
              <Check size={14} />
            </span>
            {feature}
          </div>
        ))}
      </div>

      <PrimaryButton href="#pricing" className="mt-8 w-full justify-center">
        {tier.cta}
      </PrimaryButton>
    </GlassCard>
  )
}

export default PricingCard
