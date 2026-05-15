import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="stat-num">
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  { target: 15, suffix: '+', label: "Années d'expérience" },
  { target: 250, suffix: '+', label: 'Chantiers réalisés' },
  { target: 98, suffix: '%', label: 'Clients satisfaits' },
  { target: 10, suffix: '', label: 'Corps d\'état' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map(({ target, suffix, label }, i) => (
          <motion.div
            key={label}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Counter target={target} suffix={suffix} />
            <span className="stat-label">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
