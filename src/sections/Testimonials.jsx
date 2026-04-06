import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'

function Testimonials({ data }) {
  return (
    <section className="section-shell section-divider mx-auto max-w-[1920px] px-8 py-18 md:px-16">
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
              <article className="panel-card testimonial-card min-h-[350px] px-12 py-11">
                <p className="text-[22px] leading-[1.55] text-white/76">{item.quote}</p>
                <div className="mt-14 flex items-center gap-5">
                  <div className="avatar-gradient" />
                  <div>
                    <div className="text-[22px] font-semibold text-white">{item.name}</div>
                    <div className="text-[18px] text-white/45">{item.role}</div>
                  </div>
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
