import { useCallback, useState } from 'react'

export function useTilt(intensity = 12) {
  const [style, setStyle] = useState({
    '--mx': '50%',
    '--my': '50%',
    '--rx': '0deg',
    '--ry': '0deg',
  })

  const onMouseMove = useCallback(
    (event) => {
      const bounds = event.currentTarget.getBoundingClientRect()
      const px = (event.clientX - bounds.left) / bounds.width
      const py = (event.clientY - bounds.top) / bounds.height
      const rotateY = (px - 0.5) * intensity
      const rotateX = (0.5 - py) * intensity

      setStyle({
        '--mx': `${px * 100}%`,
        '--my': `${py * 100}%`,
        '--rx': `${rotateX}deg`,
        '--ry': `${rotateY}deg`,
      })
    },
    [intensity],
  )

  const onMouseLeave = useCallback(() => {
    setStyle({
      '--mx': '50%',
      '--my': '50%',
      '--rx': '0deg',
      '--ry': '0deg',
    })
  }, [])

  return { style, onMouseMove, onMouseLeave }
}
