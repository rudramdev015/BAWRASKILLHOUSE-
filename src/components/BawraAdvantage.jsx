import { motion } from 'framer-motion'
import { use3DTilt } from '../hooks/use3DTilt'
import { stagger, fadeUp } from '../utils/animations'

const advantages = [
  {
    title: 'Train Inside a Real Agency',
    desc: 'No Zoom calls. Come to our office and work like a professional from day one.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop',
    accent: '#FF6B00',
    icon: '🏢',
  },
  {
    title: 'Direct Access to the Founder',
    desc: 'Learn how Rawal Singh built Bawra Digitals. Clear your doubts directly with him.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop',
    accent: '#EC4899',
    icon: '🎯',
  },
  {
    title: 'Mentorship from Working Pros',
    desc: "Not 'gurus'. Real active professionals who edit, design, and run campaigns daily.",
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80&auto=format&fit=crop',
    accent: '#7C3AED',
    icon: '🌟',
  },
  {
    title: 'Work on Real Client Projects',
    desc: 'Client briefs go into your portfolio. Actual campaigns, actual experience, actual results.',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80&auto=format&fit=crop',
    accent: '#3B82F6',
    icon: '💼',
  },
  {
    title: 'Guaranteed Placement Support',
    desc: "Access our industry network for jobs and freelance. We don't stop supporting you after the course.",
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format&fit=crop',
    accent: '#22C55E',
    icon: '🚀',
  },
]

function AdvCard({ a, i }) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = use3DTilt(6)

  return (
    <motion.div
      className="adv-card-wrap"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className="adv-card"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        {/* Background image */}
        <div className="adv-card-img">
          <img
            src={a.img}
            alt={a.title}
            loading="lazy"
            onError={e => { e.target.style.opacity = 0 }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="adv-card-overlay" style={{
          background: `linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.6) 50%, rgba(0,0,0,.15) 100%)`
        }} />

        {/* Top accent */}
        <div className="adv-card-top">
          <motion.div
            className="adv-icon"
            style={{ background: `${a.accent}22`, borderColor: `${a.accent}44`, color: a.accent }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          >
            {a.icon}
          </motion.div>
        </div>

        {/* Bottom text */}
        <div className="adv-card-body">
          <div className="adv-num" style={{ color: a.accent }}>{String(i + 1).padStart(2, '0')}</div>
          <h3 className="adv-title">{a.title}</h3>
          <p className="adv-desc">{a.desc}</p>
          <div className="adv-line" style={{ background: a.accent }} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function BawraAdvantage() {
  return (
    <section className="advantage-section">
      <motion.div
        className="adv-head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp} style={{ justifyContent: 'center' }}>
          Why Students Choose Us
        </motion.div>
        <motion.h2 className="sec-h2" variants={fadeUp} style={{ textAlign: 'center' }}>
          THE BAWRA<br /><span className="grad-text-warm">ADVANTAGE</span>
        </motion.h2>
        <motion.p variants={fadeUp} style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: 560, margin: '1rem auto 0', fontSize: '.95rem', lineHeight: 1.8 }}>
          Five things that make our students career-ready — not just course-complete.
        </motion.p>
      </motion.div>

      <div className="adv-grid">
        {advantages.map((a, i) => <AdvCard key={i} a={a} i={i} />)}
      </div>
    </section>
  )
}
