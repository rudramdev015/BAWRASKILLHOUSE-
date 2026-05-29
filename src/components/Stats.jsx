import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stagger, scaleIn } from '../utils/animations'

const stats = [
  { num: 500000, display: '5L+', label: 'YouTube\nSubscribers', icon: '▶', color: '#FF6B00' },
  { num: 25, display: '25+', label: 'Team Members\nWorking', icon: '👥', color: '#EC4899' },
  { num: 2, display: '2', label: 'Offices — Jodhpur\n& Jaipur', icon: '🏢', color: '#7C3AED' },
  { num: 6, display: '6+', label: 'National\nAwards', icon: '🏆', color: '#F59E0B' },
  { num: 6, display: '6', label: 'Offline\nCourses', icon: '📚', color: '#06B6D4' },
]

function CountUp({ target, display }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current += increment
      if (step >= steps) { clearInterval(timer); return }
      setVal(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{inView ? display : '0'}</span>
}

export default function Stats() {
  return (
    <motion.div
      className="stats-section"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((s, i) => (
        <motion.div className="stat-item" key={i} variants={scaleIn}>
          <motion.div
            style={{ fontSize: '1.6rem', marginBottom: '.6rem' }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
          >
            {s.icon}
          </motion.div>
          <div className="stat-num-big">
            <CountUp target={s.num} display={s.display} />
          </div>
          <div className="stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}
