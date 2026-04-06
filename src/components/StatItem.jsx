function StatItem({ value, label }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 px-6 py-7 text-center backdrop-blur-xl">
      <div className="font-display text-3xl tracking-[0.14em] text-white sm:text-4xl">{value}</div>
      <div className="mt-3 text-sm uppercase tracking-[0.28em] text-white/55">{label}</div>
    </div>
  )
}

export default StatItem
