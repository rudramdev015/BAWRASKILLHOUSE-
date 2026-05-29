import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINE1 = 'BAWRA'
const LINE2 = 'SKILL'
const LINE3 = 'HOUSE'

function Letter({ char, delay, color }) {
  return (
    <motion.span
      style={{ display: 'inline-block', willChange: 'transform, opacity', color }}
      initial={{ y: 100, opacity: 0, rotateX: -50, filter: 'blur(12px)' }}
      animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {char === ' ' ? ' ' : char}
    </motion.span>
  )
}

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let p = 0
    const tick = () => {
      p = Math.min(100, p + Math.random() * 6 + 1.5)
      setProgress(Math.floor(p))
      if (p < 100) setTimeout(tick, 35 + Math.random() * 45)
      else setTimeout(() => setDone(true), 500)
    }
    const t = setTimeout(tick, 300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (done) setTimeout(onComplete, 700)
  }, [done, onComplete])

  // Letter timings
  const line1Letters = LINE1.split('').map((ch, i) => ({ ch, delay: 0.1 + i * 0.08 }))
  const line2Letters = LINE2.split('').map((ch, i) => ({ ch, delay: 0.65 + i * 0.08 }))
  const line3Letters = LINE3.split('').map((ch, i) => ({ ch, delay: 1.15 + i * 0.08 }))
  const subDelay = 1.7

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="pre-root"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* ── Morphing CSS blobs (VISIBLE background animation) ── */}
          <div className="pre-blob pre-blob-orange" />
          <div className="pre-blob pre-blob-purple" />
          <div className="pre-blob pre-blob-pink" />
          <div className="pre-morph" />
          <div className="pre-grid-overlay" />

          {/* ── Content ── */}
          <div className="pre-content">

            {/* Tag */}
            <motion.div
              className="pre-tag"
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.2em' }}
              transition={{ delay: 0.05, duration: 1 }}
            >
              RAJASTHAN'S #1 CREATOR SCHOOL
            </motion.div>

            {/* ── Words ── */}
            <div className="pre-words" style={{ perspective: '1000px' }}>
              {/* BAWRA */}
              <div className="pre-line">
                {line1Letters.map(({ ch, delay }, i) => (
                  <Letter key={i} char={ch} delay={delay} color="#FFFFFF" />
                ))}
              </div>

              {/* SKILL */}
              <div className="pre-line">
                {line2Letters.map(({ ch, delay }, i) => (
                  <Letter key={i} char={ch} delay={delay} color="#FF6B00" />
                ))}
              </div>

              {/* HOUSE */}
              <div className="pre-line pre-house-wrap">
                {line3Letters.map(({ ch, delay }, i) => (
                  <motion.span
                    key={i}
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(90deg, #FF6B00, #FF2D78, #7C3AED)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 30px rgba(124,58,237,.5))',
                    }}
                    initial={{ y: 100, opacity: 0, rotateX: -50, filter: 'blur(12px)' }}
                    animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'drop-shadow(0 0 30px rgba(124,58,237,.4))' }}
                    transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* ── Subtitle ── */}
            <motion.div
              className="pre-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: subDelay, duration: 0.7 }}
            >
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: subDelay }}
              >
                Video Editing
              </motion.span>
              <span className="pre-sep">·</span>
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: subDelay + 0.3 }}
              >
                Graphic Design
              </motion.span>
              <span className="pre-sep">·</span>
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: subDelay + 0.6 }}
              >
                Content Creation
              </motion.span>
            </motion.div>

            {/* ── Progress ── */}
            <motion.div
              className="pre-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: subDelay + 0.2 }}
            >
              <div className="pre-bar-track">
                <motion.div
                  className="pre-bar-fill"
                  style={{ scaleX: progress / 100, originX: 0 }}
                  transition={{ ease: 'linear', duration: 0.06 }}
                />
                {/* Glow dot at end of bar */}
                <motion.div
                  className="pre-bar-dot"
                  style={{ left: `${progress}%` }}
                />
              </div>
              <div className="pre-counter">
                <span className="pre-counter-val">{String(progress).padStart(3, '0')}</span>
                <span className="pre-counter-pct">%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
