import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'

function Stats({ data }) {
  return (
    <section className="section-shell mx-auto max-w-[1920px] px-8 py-20 md:px-16">
      <div className="grid gap-8 xl:grid-cols-4">
        {data.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05}>
            <TiltCard intensity={8}>
              <article className="panel-card stats-card flex min-h-[194px] flex-col items-center justify-center px-10 text-center">
                <div className={`font-display text-[74px] leading-none ${item.accent === 'cyan' ? 'text-cyan-400' : 'text-pink-400'}`}>
                  {item.value}
                </div>
                <div className="mt-6 text-[22px] text-white/72">{item.label}</div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Stats
