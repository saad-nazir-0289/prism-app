import { Award, Globe2, Users, Zap } from 'lucide-react'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'

const icons = {
  zap: Zap,
  users: Users,
  award: Award,
  globe: Globe2,
}

function WhyPrism({ data }) {
  return (
    <section className="section-shell section-divider mx-auto max-w-[1920px] px-8 py-18 md:px-16">
      <Reveal>
        <div className="section-header-block">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-18 grid gap-8 xl:grid-cols-4">
        {data.items.map((item, index) => {
          const Icon = icons[item.icon]

          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <TiltCard>
                <article className="panel-card feature-card min-h-[404px] p-12">
                  <Icon className={`h-16 w-16 ${index % 2 === 0 ? 'text-cyan-400' : 'text-pink-400'}`} strokeWidth={1.8} />
                  <h3 className="mt-12 whitespace-pre-line font-display text-[34px] leading-[1.25] text-white">{item.title}</h3>
                  <p className="mt-7 max-w-[280px] text-[24px] leading-[1.55] text-white/58">{item.description}</p>
                </article>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default WhyPrism
