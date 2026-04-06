import { useEffect, useMemo, useState } from 'react'

function getTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime()
  const now = Date.now()
  const distance = Math.max(target - now, 0)

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  return [days, hours, minutes, seconds].map((value) => String(value).padStart(2, '0'))
}

export function useCountdown(targetDate) {
  const initial = useMemo(() => getTimeLeft(targetDate), [targetDate])
  const [timeLeft, setTimeLeft] = useState(initial)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  return timeLeft
}
