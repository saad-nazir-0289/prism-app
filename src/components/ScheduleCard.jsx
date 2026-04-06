import GlassCard from './GlassCard'

function ScheduleCard({ day }) {
  return (
    <GlassCard className="p-7">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-xs tracking-[0.35em] text-cyan-300/80">{day.day}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{day.label}</h3>
        </div>
        <div className="h-14 w-14 rounded-full border border-cyan-300/20 bg-cyan-300/10" />
      </div>

      <div className="mt-8 space-y-5">
        {day.events.map((event) => (
          <div key={event.time + event.title} className="rounded-3xl border border-white/[0.08] bg-black/20 p-5">
            <div className="text-sm tracking-[0.24em] text-pink-200/80 uppercase">{event.time}</div>
            <div className="mt-2 text-lg font-medium text-white">{event.title}</div>
            <div className="mt-2 text-sm leading-7 text-white/65">{event.detail}</div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}

export default ScheduleCard
