import { ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'

function Pricing({ data }) {
  return (
    <section id="pricing" className="section-shell section-divider mx-auto max-w-[1920px] scroll-mt-28 px-8 py-18 md:px-16">
      <Reveal>
        <div className="section-header-block">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-18 grid gap-12 xl:grid-cols-3">
        {data.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.06}>
            <TiltCard>
              <article className="panel-card pricing-card relative px-12 py-12">
                {item.badge ? <div className="pricing-badge">{item.badge}</div> : null}
                <h3 className="font-display text-[44px] leading-none text-white">{item.name}</h3>
                <div className="mt-6 font-display text-[64px] leading-none text-cyan-400">{item.price}</div>
                <ul className="mt-10 space-y-5">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-[22px] leading-[1.5] text-white/62">
                      <ChevronRight className="mt-1 h-6 w-6 shrink-0 text-pink-400" strokeWidth={2.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Pricing
