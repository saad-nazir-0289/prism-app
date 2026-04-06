import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'

function Partners({ data }) {
  return (
    <section className="section-shell section-divider mx-auto max-w-[1920px] px-8 py-18 md:px-16">
      <Reveal>
        <div className="section-header-block">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-18 grid gap-8 xl:grid-cols-4">
        {data.items.map((partner, index) => (
          <Reveal key={partner} delay={index * 0.04}>
            <TiltCard intensity={8}>
              <div className="panel-card partner-card flex min-h-[140px] items-center justify-center px-8 text-center font-display text-[32px] text-white/68">
                {partner}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Partners
