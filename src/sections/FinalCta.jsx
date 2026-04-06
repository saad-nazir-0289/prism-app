import Reveal from '../components/Reveal'

function FinalCta({ data }) {
  return (
    <section id="final-cta" className="section-shell section-divider mx-auto max-w-[1920px] scroll-mt-28 px-8 py-18 md:px-16">
      <Reveal>
        <div className="panel-card final-cta-card mx-auto max-w-[1340px] px-8 py-18 text-center md:px-14">
          <h2 className="section-title">{data.title}</h2>
          <p className="mx-auto mt-10 max-w-[1080px] text-[28px] leading-[1.45] text-white/62">{data.description}</p>
          <div className="mt-14 flex flex-col items-center justify-center gap-6 md:flex-row">
            <a href="#pricing" className="button-primary hero-button min-w-[320px] justify-center">
              {data.primaryCta}
            </a>
            <a href="#" className="button-secondary hero-button min-w-[400px] justify-center text-white">
              {data.secondaryCta}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default FinalCta
