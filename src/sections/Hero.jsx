import { CalendarDays, MapPin, Ticket } from 'lucide-react'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { useCountdown } from '../hooks/useCountdown'

function Hero({ data }) {
  const countdown = useCountdown(data.targetDate)

  return (
    <section id="top" className="section-shell mx-auto max-w-[1920px] px-8 pb-8 pt-10 md:px-16 lg:pt-16">
      <Reveal>
        <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <h1 className="hero-title">{data.heading}</h1>
          <p className="hero-subtitle">{data.subheading}</p>

          <div className="mt-10 grid w-full max-w-[620px] grid-cols-2 gap-5 sm:grid-cols-4">
            {countdown.map((value, index) => (
              <div key={data.countdownLabels[index]} className="count-card">
                <div className={`count-value ${index % 2 === 0 ? 'count-cyan' : 'count-pink'}`}>{value}</div>
                <div className="count-label">{data.countdownLabels[index]}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-24 flex max-w-[900px] justify-center">
        <TiltCard intensity={14} className="w-full max-w-[900px]">
          <article className="hero-pass panel-card hero-pass-card overflow-hidden px-12 py-14">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.04),transparent_40%,rgba(255,0,128,0.06))]" />
            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="pass-kicker">{data.pass.label}</div>
                <div className="mt-5 font-display text-[72px] leading-none tracking-[0.1em] text-white md:text-[84px]">
                  {data.pass.name}
                </div>
                <div className="mt-2 text-[24px] tracking-[0.16em] text-white/55">{data.pass.edition}</div>
              </div>

              <div className="qr-frame self-start">
                <div className="qr-tile">
                  <span>QR</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 grid gap-5 sm:grid-cols-3">
              <div className="pass-meta">
                <CalendarDays className="h-5 w-5 text-cyan-400" />
                <span>{data.pass.date}</span>
              </div>
              <div className="pass-meta">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>{data.pass.venue}</span>
              </div>
              <div className="pass-meta">
                <Ticket className="h-5 w-5 text-cyan-400" />
                <span>{data.pass.ticketNumber}</span>
              </div>
            </div>

            <div className="pass-bottom-glow" aria-hidden="true" />
          </article>
        </TiltCard>
      </Reveal>
    </section>
  )
}

export default Hero
