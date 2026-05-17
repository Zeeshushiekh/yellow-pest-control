import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delayMs = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            obs.disconnect()
            break
          }
        }
      },
      { threshold: 0.15 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={
        className +
        ' transition-all duration-700 ease-out will-change-transform ' +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
      }
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}

