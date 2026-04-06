import { useTilt } from '../hooks/useTilt'

function TiltCard({ children, className = '', intensity = 10 }) {
  const tilt = useTilt(intensity)

  return (
    <div className={`tilt-shell ${className}`} style={tilt.style} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
      {children}
    </div>
  )
}

export default TiltCard
