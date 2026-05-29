import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const proof = [
  { val: '₹0', label: 'Hidden Fees. Pure Transparency.' },
  { val: '100%', label: 'Practical, Project-Based Learning' },
  { val: '✓', label: 'Alumni Network & Industry Access' },
]

export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-glow" />

      {/* Animated background orbs */}
      <motion.div
        style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,107,0,.06)', filter: 'blur(80px)', pointerEvents: 'none' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: '20%', right: '10%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(124,58,237,.08)', filter: 'blur(80px)', pointerEvents: 'none' }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        style={{ position: 'relative' }}
      >
        <motion.div className="sec-tag" variants={fadeUp} style={{ justifyContent: 'center' }}>
          Limited Seats · Next Batch Starting Soon
        </motion.div>

        <motion.h2 className="cta-h2" variants={fadeUp}>
          START YOUR<br />
          <span className="grad-text">CREATIVE</span><br />
          CAREER TODAY
        </motion.h2>

        <motion.p className="cta-sub" variants={fadeUp}>
          Seats are limited — every batch has only 20 students. If you genuinely want to build
          a career in content creation, this is your moment. Apply now and join the Bawra Skill House family.
        </motion.p>

        <motion.div className="cta-actions" variants={stagger}>
          <motion.a
            href="#leadform"
            className="btn-p shimmer-btn"
            variants={scaleIn}
            style={{ fontSize: '1rem', padding: '1.1rem 2.6rem' }}
            whileHover={{ scale: 1.05, boxShadow: '0 16px 48px rgba(255,107,0,.5)' }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: ['0 0 0 0 rgba(255,107,0,0)', '0 0 0 8px rgba(255,107,0,.15)', '0 0 0 0 rgba(255,107,0,0)'] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            🔥 Apply for Next Batch
          </motion.a>
          <motion.a
            href="https://wa.me/919950683442"
            className="btn-wa"
            variants={scaleIn}
            style={{ fontSize: '1rem', padding: '1.1rem 2.6rem' }}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 36px rgba(37,211,102,.4)' }}
            whileTap={{ scale: 0.97 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </motion.a>
          <motion.a
            href="tel:09950683442"
            variants={scaleIn}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              padding: '1.1rem 2rem', border: '.5px solid var(--border2)',
              borderRadius: 'var(--radius)', color: 'var(--text)',
              textDecoration: 'none', fontSize: '1rem', fontWeight: 600,
            }}
            whileHover={{ scale: 1.04, borderColor: 'rgba(255,107,0,.5)' }}
          >
            📞 09950683442
          </motion.a>
        </motion.div>

        <motion.div className="cta-proof" variants={stagger}>
          {proof.map((p, i) => (
            <motion.div className="cta-proof-item" key={i} variants={scaleIn}>
              <motion.div
                className="cpnum"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
              >
                <span className="grad-text-warm">{p.val}</span>
              </motion.div>
              <div className="cplbl">{p.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
