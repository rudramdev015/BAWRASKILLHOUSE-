import { motion } from 'framer-motion'
import { use3DTilt } from '../hooks/use3DTilt'
import { stagger, fadeUp } from '../utils/animations'

const cards = [
  {
    title: 'Learn from Industry Pros',
    desc: "Who've grown YouTube channels to 500K+ subscribers, won national awards, and run a real marketing agency serving clients across India.",
    icon: '🎬',
    bg: 'linear-gradient(145deg, #d4f5e2, #b8ecd4)',
    headColor: '#0d3b24',
    descColor: '#2d6b4a',
    accent: '#22c55e',
    glow: 'rgba(34,197,94,.25)',
  },
  {
    title: 'No Experience Required',
    desc: "We teach professional video editing from absolute zero — the same method we use to train every editor at Bawra Digitals. Show up ready to learn.",
    icon: '😊',
    bg: 'linear-gradient(145deg, #fde8c8, #fbd5a0)',
    headColor: '#5c2a00',
    descColor: '#8c4a18',
    accent: '#f97316',
    glow: 'rgba(249,115,22,.25)',
  },
  {
    title: 'Pro Studio Gear Included',
    desc: "Practice on professional cameras, lighting rigs, and editing workstations worth ₹2 Lakh each. Industry-grade equipment from day one.",
    icon: '🎥',
    bg: 'linear-gradient(145deg, #e8d5f5, #d4b8ed)',
    headColor: '#2d0a4e',
    descColor: '#5a2a82',
    accent: '#a855f7',
    glow: 'rgba(168,85,247,.25)',
  },
  {
    title: 'Monetise Your New Skills',
    desc: "Build your own creative agency, land high-paying editing jobs, grow your YouTube channel — we give you the skills and the network to make it real.",
    icon: '💰',
    bg: 'linear-gradient(145deg, #d0e8ff, #b8d4f5)',
    headColor: '#0a2547',
    descColor: '#1e4a82',
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,.25)',
  },
]

function Card3D({ card, i }) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = use3DTilt(10)

  return (
    <motion.div
      className="njc-card-wrap"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="njc-card"
        style={{
          background: card.bg,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          boxShadow: `0 20px 60px ${card.glow}, 0 4px 16px rgba(0,0,0,.12)`,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ y: -10, boxShadow: `0 32px 80px ${card.glow}, 0 8px 24px rgba(0,0,0,.16)` }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      >
        {/* Top accent bar */}
        <div className="njc-top-bar" style={{ background: card.accent }} />

        <h3 className="njc-card-title" style={{ color: card.headColor }}>
          {card.title}
        </h3>

        <div className="njc-icon" style={{ transform: 'translateZ(30px)' }}>
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            style={{ display: 'block' }}
          >
            {card.icon}
          </motion.span>
        </div>

        <p className="njc-card-desc" style={{ color: card.descColor }}>
          {card.desc}
        </p>

        {/* Corner shine */}
        <div className="njc-shine" />
      </motion.div>
    </motion.div>
  )
}

export default function NotJustCourse() {
  return (
    <section className="njc-section">
      <motion.div
        className="njc-head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.h2 className="njc-main-title" variants={fadeUp}>
          Not Just Another <span className="grad-text">'Course'</span>
        </motion.h2>
        <motion.p className="njc-main-sub" variants={fadeUp}>
          Online courses tell you <em>what to do.</em><br />
          We train you <strong>how to get results and get paid for it.</strong>
        </motion.p>
      </motion.div>

      <div className="njc-grid">
        {cards.map((c, i) => <Card3D key={i} card={c} i={i} />)}
      </div>
    </section>
  )
}
