import { motion } from 'framer-motion'
import { use3DTilt } from '../hooks/use3DTilt'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const tools = [
  { abbr: 'Pr', name: 'Premiere Pro',    bg: 'linear-gradient(135deg,#2f2f9b,#9999ff)', glow: 'rgba(153,153,255,.4)' },
  { abbr: 'Ae', name: 'After Effects',   bg: 'linear-gradient(135deg,#1a006b,#7c4fff)', glow: 'rgba(124,79,255,.4)' },
  { abbr: 'Ps', name: 'Photoshop',       bg: 'linear-gradient(135deg,#001e7a,#31a8ff)', glow: 'rgba(49,168,255,.4)' },
  { abbr: 'Ai', name: 'Illustrator',     bg: 'linear-gradient(135deg,#7a3200,#ff9a00)', glow: 'rgba(255,154,0,.4)'  },
  { abbr: 'Dv', name: 'DaVinci Resolve', bg: 'linear-gradient(135deg,#1a0010,#e2001a)', glow: 'rgba(226,0,26,.4)'  },
  { abbr: 'AI', name: 'AI & ChatGPT',   bg: 'linear-gradient(135deg,#003322,#10b981)', glow: 'rgba(16,185,129,.4)' },
  { abbr: '🎧', name: 'Audio Mixing',    bg: 'linear-gradient(135deg,#1a1a2e,#7c3aed)', glow: 'rgba(124,58,237,.4)' },
  { abbr: '📱', name: 'Content Strategy',bg: 'linear-gradient(135deg,#1a2040,#3b82f6)', glow: 'rgba(59,130,246,.4)' },
]

function ToolCard({ t, i }) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = use3DTilt(8)

  return (
    <motion.div
      variants={scaleIn}
      style={{ perspective: 800 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className="tool-card"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ y: -8, boxShadow: `0 20px 50px ${t.glow}` }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        <motion.div
          className="tool-icon-wrap"
          style={{ background: t.bg, boxShadow: `0 8px 24px ${t.glow}`, transformStyle: 'preserve-3d' }}
          animate={{ rotateY: [0, 5, 0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
        >
          <span className="tool-abbr">{t.abbr}</span>
        </motion.div>
        <div className="tool-name">{t.name}</div>
      </motion.div>
    </motion.div>
  )
}

export default function ToolsMastery() {
  return (
    <section className="tools-section">
      {/* Background geometry */}
      <div className="tools-bg-glow" />
      <div className="tools-bg-grid" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp} style={{ justifyContent: 'center', color: 'rgba(255,200,130,.9)' }}>
          What You'll Master
        </motion.div>
        <motion.h2 className="tools-heading" variants={fadeUp}>
          Become a Master In
        </motion.h2>
        <motion.p variants={fadeUp} className="tools-sub">
          Industry-standard tools used by top creators, agencies and studios worldwide.
        </motion.p>
      </motion.div>

      <motion.div
        className="tools-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {tools.map((t, i) => <ToolCard key={i} t={t} i={i} />)}
      </motion.div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '3.5rem' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a href="#leadform" className="btn-p shimmer-btn"
          style={{ display: 'inline-flex', fontSize: '1rem', padding: '1rem 2.5rem' }}>
          Start Learning These Tools →
        </a>
      </motion.div>
    </section>
  )
}
