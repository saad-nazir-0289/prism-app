import Reveal from '../components/Reveal'

function Speakers({ data }) {
  return (
    <section id="speakers" className="section-shell section-divider mx-auto max-w-[1920px] scroll-mt-28 px-8 py-18 md:px-16">
      <Reveal>
        <div className="section-header-block">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-18 grid gap-8 xl:grid-cols-4">
        {data.items.map((speaker, index) => (
          <Reveal key={speaker.name} delay={index * 0.06}>
            <article className="speaker-card">
              <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              <div className="speaker-overlay" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Speakers
