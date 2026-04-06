import { Coffee, Mic, Users, Code2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'

const icons = {
  coffee: Coffee,
  mic: Mic,
  users: Users,
  code: Code2,
}

function Schedule({ data }) {
  return (
    <section id="schedule" className="section-shell section-divider mx-auto max-w-[1920px] scroll-mt-28 px-8 py-18 md:px-16">
      <Reveal>
        <div className="section-header-block">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-18 grid gap-12 xl:grid-cols-3">
        {data.days.map((day, index) => (
          <Reveal key={day.day} delay={index * 0.06}>
            <TiltCard>
              <article className="panel-card schedule-card px-9 py-10">
                <h3 className="font-display text-[42px] leading-none text-white">{day.day}</h3>
                <p className="mt-4 text-[24px] text-cyan-400">{day.date}</p>
                <div className="mt-10 space-y-7">
                  {day.events.map((event) => {
                    const Icon = icons[event.icon]

                    return (
                      <div key={event.time + event.title} className="schedule-row">
                        <div className="schedule-icon-wrap">
                          <Icon className={`h-7 w-7 ${event.icon === 'coffee' ? 'text-white/40' : 'text-cyan-400'}`} strokeWidth={1.7} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[18px] font-medium text-white/45">{event.time}</div>
                          <div className="mt-2 text-[22px] font-semibold text-white">{event.title}</div>
                          {event.speaker ? <div className="mt-2 text-[17px] text-cyan-400">{event.speaker}</div> : null}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Schedule
