function SecondaryButton({ href, children, className = '' }) {
  return (
    <a href={href} className={`button-secondary ${className}`}>
      {children}
    </a>
  )
}

export default SecondaryButton
