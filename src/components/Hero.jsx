import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp } from '../utils/animations'
import ThreeScene from './ThreeScene'

const YOUTUBE_ID = '7X0LYGDT76E'

/* ─── Particle canvas ─── */
function ParticleCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let id
    const colors = ['#FF6B00', '#7C3AED', '#3B82F6', '#EC4899', '#F59E0B', '#06B6D4']
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    class P {
      constructor() { this.r() }
      r() {
        this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height
        this.vx = (Math.random() - .5) * .45; this.vy = (Math.random() - .5) * .45
        this.rad = Math.random() * 1.8 + .5
        this.c = colors[Math.floor(Math.random() * colors.length)]
        this.a = Math.random() * .5 + .15
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
      draw() {
        ctx.save(); ctx.globalAlpha = this.a; ctx.fillStyle = this.c
        ctx.beginPath(); ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2); ctx.fill(); ctx.restore()
      }
    }
    const count = Math.min(85, Math.floor(canvas.width * canvas.height / 9500))
    const ps = Array.from({ length: count }, () => new P())

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ps.forEach(p => { p.update(); p.draw() })
      for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) {
        const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y, d = Math.sqrt(dx * dx + dy * dy)
        if (d < 110) {
          ctx.save(); ctx.globalAlpha = (1 - d / 110) * .13
          ctx.strokeStyle = ps[i].c; ctx.lineWidth = .5
          ctx.beginPath(); ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(ps[j].x, ps[j].y)
          ctx.stroke(); ctx.restore()
        }
      }
      id = requestAnimationFrame(loop)
    }
    loop()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />
}

/* ─── CSS 3D Rotating Cube ─── */
function Cube3D() {
  return (
    <div className="cube-scene" aria-hidden="true">
      <div className="cube3d">
        {['front','back','left','right','top','bottom'].map(f => (
          <div key={f} className={`face3d face3d-${f}`} />
        ))}
      </div>
    </div>
  )
}

/* ─── Word reveal ─── */
function WordReveal({ words, className, delay = 0 }) {
  return (
    <span className={className} style={{ display: 'block' }}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block', marginRight: '0.18em', transformOrigin: 'bottom' }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  )
}

/* ─── Video Modal ─── */
function VideoModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="vid-modal-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="vid-modal-box"
            initial={{ scale: 0.82, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.82, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="vid-modal-close" onClick={onClose}>✕</button>
            <div className="vid-modal-embed">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
                title="Bawra Skill House — Inside Our Classes"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section id="hero" className="hero">
        {/* Background image */}
        <div className="hero-img-bg">
          <img
            src="https://images.unsplash.com/photo-1536240478700-b869ad10e2f2?w=1920&q=75&auto=format&fit=crop"
            alt="Professional video editing studio"
            loading="eager"
          />
        </div>

        {/* Three.js 3D scene */}
        <ThreeScene />

        {/* Gradient + grid */}
        <div className="hero-bg-animated" />
        <div className="hero-grid" />

        {/* 3D Rotating Cube */}
        <Cube3D />

        {/* Orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-overlay" />

        <div className="hero-wrap">
          {/* Left: Text */}
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ animation: 'floatY 2.5s ease-in-out infinite' }}
            >
              Jodhpur &amp; Jaipur, Rajasthan · Offline · Practical · Career-Ready
            </motion.div>

            <h1 className="hero-h1" style={{ perspective: '800px' }}>
              <WordReveal words={["RAJASTHAN'S", '#1']} delay={0.2} />
              <WordReveal words={['CREATOR']} className="grad-text-warm" delay={0.42} />
              <WordReveal words={['SCHOOL']} delay={0.58} />
            </h1>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.88 }}
            >
              Master <strong>Video Editing</strong>, <strong>Graphic Design</strong>, AI Tools &amp; Digital Marketing.
              Learn from Rawal Singh — <strong>500K+ subscribers, Silver Play Button, PM Modi Invited.</strong>{' '}
              100% Offline. 100% Practical. Job-Ready in 3 Months.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
            >
              <motion.a
                href="#leadform"
                className="btn-p shimmer-btn"
                whileHover={{ scale: 1.04, boxShadow: '0 12px 36px rgba(255,107,0,.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                🔥 Book Free Demo Class
              </motion.a>
              <motion.button
                className="hero-play-btn"
                onClick={() => setVideoOpen(true)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.div
                  className="play-ring"
                  animate={{ scale: [1, 1.18, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="play-tri">▶</span>
                Watch Inside Classes
              </motion.button>
            </motion.div>

            {/* Proof chips */}
            <motion.div
              className="hero-proof-chips"
              variants={stagger}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 1.2 }}
            >
              {['500K+ YouTube Subscribers','PM Modi Invited','Creator Nation Award','Silver Play Button','Jodhpur & Jaipur Campus'].map((t, i) => (
                <motion.div
                  key={i}
                  className="proof-chip"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,107,0,.5)' }}
                >
                  <span className="dot" />{t}
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="tel:09950683442"
              className="phone-badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.65 }}
              whileHover={{ scale: 1.04 }}
              style={{ marginTop: '1.4rem' }}
            >
              📞 Call Now: 09950683442
            </motion.a>
          </div>

          {/* Right: Video preview card */}
          <motion.div
            className="hero-video-card"
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hvc-thumb" onClick={() => setVideoOpen(true)}>
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                alt="Watch Bawra Skill House class"
                onError={e => { e.target.src = `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg` }}
              />
              <div className="hvc-overlay" />
              <motion.div
                className="hvc-play"
                whileHover={{ scale: 1.15 }}
                animate={{ boxShadow: ['0 0 0 0 rgba(255,107,0,0)', '0 0 0 16px rgba(255,107,0,.2)', '0 0 0 0 rgba(255,107,0,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>▶</span>
              </motion.div>
              <div className="hvc-yt-badge">
                <span style={{ color: '#FF0000', marginRight: '.3rem' }}>▶</span> @RawalSingh
              </div>
            </div>
            <div className="hvc-info">
              <div className="hvc-tag">🔴 Latest Upload</div>
              <div className="hvc-title">Inside Our Classroom — Real Students, Real Work</div>
              <div className="hvc-meta">
                <a href="https://www.youtube.com/@RawalSingh" target="_blank" rel="noopener noreferrer" className="hvc-yt-link">
                  Subscribe on YouTube →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
