function PrimaryButton({ href, children, className = '' }) {
  return (
    <a href={href} className={`button-primary ${className}`}>
      {children}
    </a>
  )
}

export default PrimaryButton
