import Reveal from '../components/Reveal'

function Venue({ data }) {
  return (
    <section id="venue" className="section-shell section-divider mx-auto max-w-[1920px] scroll-mt-28 px-8 py-18 md:px-16">
      <Reveal>
        <div className="section-header-block">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-18 grid gap-12 xl:grid-cols-2">
        {data.images.map((image, index) => (
          <Reveal key={image} delay={index * 0.08}>
            <figure className="venue-card panel-card overflow-hidden">
              <img src={image} alt="Venue preview" className="venue-image" />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Venue
