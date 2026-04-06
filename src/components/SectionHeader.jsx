function SectionHeader({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="font-display text-sm tracking-[0.35em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">{description}</p> : null}
    </div>
  )
}

export default SectionHeader
