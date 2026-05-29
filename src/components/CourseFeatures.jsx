import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { use3DTilt } from '../hooks/use3DTilt'
import { stagger, fadeUp } from '../utils/animations'

const features = [
  {
    num: '01',
    title: 'Direct Mentorship from Rawal Singh',
    desc: 'Learn directly from a creator with 500K+ subscribers. Weekly 1-on-1 feedback, live critiques, and personal guidance. No intermediary — just you and your mentor.',
    tag: 'Personal Mentorship',
    icon: '🎯',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop',
    accent: '#FF6B00',
    highlight: 'rgba(255,107,0,.35)',
  },
  {
    num: '02',
    title: '500+ Hours of Hands-On Projects',
    desc: 'Zero unnecessary theory. Real client projects, live campaigns, and portfolio-worthy work that sets you apart in every interview and client pitch from day one.',
    tag: 'Project-Based Learning',
    icon: '💻',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop',
    accent: '#EC4899',
    highlight: 'rgba(236,72,153,.35)',
  },
  {
    num: '03',
    title: 'Professional Studio Access',
    desc: 'Industry-grade cameras, lighting rigs, high-performance editing workstations, and recording studio — all available to you. Real studio experience before you graduate.',
    tag: 'Studio Access',
    icon: '🎬',
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&auto=format&fit=crop',
    accent: '#7C3AED',
    highlight: 'rgba(124,58,237,.35)',
  },
  {
    num: '04',
    title: 'Industry-Recognized Certificate',
    desc: 'A Bawra Skill House certificate employers actually recognize — backed by a real portfolio. Skills proven, not just attendance recorded.',
    tag: 'Certification',
    icon: '🏅',
    img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80&auto=format&fit=crop',
    accent: '#F59E0B',
    highlight: 'rgba(245,158,11,.35)',
  },
  {
    num: '05',
    title: 'Job & Freelance Placement',
    desc: "The strongest creative network in Rajasthan. Agency tie-ups, CV prep, interview training, and freelance client connections. We don't stop at graduation.",
    tag: 'Placement Support',
    icon: '🚀',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop',
    accent: '#06B6D4',
    highlight: 'rgba(6,182,212,.35)',
  },
  {
    num: '06',
    title: 'Exclusive Creator Community',
    desc: '1,000+ creators in one active WhatsApp group — doubts answered, feedback given, collaborations found, job opportunities shared by active alumni.',
    tag: 'Community',
    icon: '👥',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop',
    accent: '#3B82F6',
    highlight: 'rgba(59,130,246,.35)',
  },
  {
    num: '07',
    title: '100% Practical. Zero Wasted Time.',
    desc: 'Every class you create something real. No filler. No theory dumps. Your time is valuable — we built this institute around that single truth.',
    tag: '100% Practical',
    icon: '⚡',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop',
    accent: '#FF6B00',
    highlight: 'rgba(255,107,0,.35)',
  },
]

function FeatureCard({ f, i }) {
  const [hovered, setHovered] = useState(false)
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = use3DTilt(7)
  const isWide = i === 6 // last card spans full width

  return (
    <motion.div
      className={`cfv2-card-wrap${isWide ? ' cfv2-card-wide' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { onMouseLeave(); setHovered(false) }}
      onMouseEnter={() => setHovered(true)}
    >
      <motion.div
        className="cfv2-card"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          boxShadow: hovered
            ? `0 40px 100px ${f.highlight}, 0 0 0 1px ${f.highlight}`
            : '0 8px 32px rgba(0,0,0,.5)',
        }}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      >
        {/* Background image */}
        <motion.div
          className="cfv2-img"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={f.img}
            alt={f.title}
            loading="lazy"
            style={{ filter: hovered ? 'brightness(.38) saturate(1.4)' : 'brightness(.22) saturate(1.2)' }}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="cfv2-gradient" style={{
          background: `linear-gradient(to top, rgba(0,0,0,.98) 0%, rgba(0,0,0,.75) 45%, rgba(0,0,0,.2) 100%)`,
        }} />

        {/* Accent top edge line */}
        <motion.div
          className="cfv2-top-line"
          style={{ background: f.accent }}
          animate={{ scaleX: hovered ? 1 : 0.4, opacity: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.35 }}
        />

        {/* Number — top right, 3D lifted */}
        <div className="cfv2-num" style={{ color: f.accent, transform: 'translateZ(20px)', textShadow: `0 0 30px ${f.accent}` }}>
          {f.num}
        </div>

        {/* Content at bottom */}
        <div className="cfv2-content" style={{ transform: 'translateZ(15px)' }}>
          {/* Tag badge */}
          <motion.div
            className="cfv2-tag"
            style={{ background: `${f.accent}20`, borderColor: `${f.accent}55`, color: f.accent }}
            animate={{ scale: hovered ? 1.03 : 1 }}
          >
            <span>{f.icon}</span> {f.tag}
          </motion.div>

          <h3 className="cfv2-title">{f.title}</h3>

          <AnimatePresence>
            {hovered && (
              <motion.p
                className="cfv2-desc"
                initial={{ opacity: 0, y: 12, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 8, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {f.desc}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.a
            href="#leadform"
            className="cfv2-cta"
            style={{ background: f.accent }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.3, delay: hovered ? 0.1 : 0 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Seat →
          </motion.a>
        </div>

        {/* Corner glow */}
        <div className="cfv2-corner-glow" style={{ background: `radial-gradient(circle at bottom left, ${f.highlight} 0%, transparent 60%)` }} />
      </motion.div>
    </motion.div>
  )
}

export default function CourseFeatures() {
  return (
    <section id="features" className="cfv2-section">
      {/* Background */}
      <div className="cfv2-bg" />
      <div className="cfv2-bg-grid" />

      <motion.div
        className="cfv2-head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp} style={{ justifyContent: 'center' }}>
          What Makes Us Different
        </motion.div>
        <motion.h2 className="cfv2-heading" variants={fadeUp}>
          NOT JUST A COURSE —<br />
          <span className="grad-text">A COMPLETE SYSTEM</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="cfv2-sub">
          Every feature is built for one purpose: your success <strong>after</strong> you leave our campus.
          Hover each card to explore.
        </motion.p>
      </motion.div>

      <div className="cfv2-grid">
        {features.map((f, i) => <FeatureCard key={i} f={f} i={i} />)}
      </div>
    </section>
  )
}
