function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-sm tracking-[0.28em] text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm text-white/60 transition hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
