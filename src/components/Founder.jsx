import { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { stagger, fadeUp, fadeLeft, fadeRight, scaleIn } from '../utils/animations'

/* ─── 3D tilt for credential cards ─── */
function CredCard({ c, i }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const xS = useSpring(x, { stiffness: 350, damping: 28 })
  const yS = useSpring(y, { stiffness: 350, damping: 28 })
  const rY = useTransform(xS, [-0.5, 0.5], [-10, 10])
  const rX = useTransform(yS, [-0.5, 0.5], [10, -10])

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      className="fd-cred-wrap"
      variants={scaleIn}
      style={{ perspective: 800 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="fd-cred-card"
        style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d', borderColor: `${c.accent}40` }}
        whileHover={{ y: -6, boxShadow: `0 20px 50px ${c.accent}30` }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        {/* Photo */}
        <div className="fd-cred-img">
          <img
            src={c.img}
            alt={c.label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: c.pos || 'center' }}
          />
          <div className="fd-cred-img-overlay" />
          {/* Badge */}
          <div className="fd-cred-badge" style={{ background: c.accent }}>
            {c.icon}
          </div>
        </div>
        {/* Info */}
        <div className="fd-cred-info">
          <div className="fd-cred-label" style={{ color: c.accent }}>{c.label}</div>
          <div className="fd-cred-caption">{c.caption}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const creds = [
  {
    icon: '⚖️',
    label: 'With Minister of Luni',
    caption: 'Recognized by the Government of Rajasthan — Official State-Level Creator Recognition',
    img: '/images.jpg',
    pos: 'center top',
    accent: '#F59E0B',
  },
  {
    icon: '🇮🇳',
    label: 'PM Modi — Personal Invite',
    caption: 'Personally invited by Prime Minister Narendra Modi for National Creator Recognition',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=400&q=80&auto=format&fit=crop',
    accent: '#22C55E',
  },
  {
    icon: '🏆',
    label: 'Creator Nation Award',
    caption: "India's most prestigious creator recognition — awarded for digital excellence",
    img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80&auto=format&fit=crop',
    accent: '#FF6B00',
  },
  {
    icon: '📰',
    label: 'National Media Feature',
    caption: "Covered by national print & digital media as Rajasthan's leading creator",
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80&auto=format&fit=crop',
    accent: '#3B82F6',
  },
]

const stats = [
  { val: '500K+', label: 'YouTube\nSubscribers', color: '#FF0000', icon: '▶' },
  { val: '6+',    label: 'National\nAwards',      color: '#F59E0B', icon: '🏆' },
  { val: '25+',   label: 'Team\nMembers',          color: '#22C55E', icon: '👥' },
  { val: '2',     label: 'City\nCampuses',         color: '#3B82F6', icon: '🏢' },
]

const badges = [
  ['hot', '▶ 500K+ YouTube Subscribers'],
  ['hot', '🏆 Creator Nation Award'],
  ['hot', '🇮🇳 PM Modi Invited'],
  ['', '⚖️ Govt. of Rajasthan Recognition'],
  ['', '📰 National Media Featured'],
  ['', '✈️ Dubai Solo Trip'],
  ['', '🏢 2 Office Campuses'],
  ['', '🎯 Agency Founder at Age 22'],
]

export default function Founder() {
  return (
    <section id="founder" className="fd-section">
      {/* Background */}
      <div className="fd-bg" />

      {/* Header */}
      <motion.div
        className="fd-header"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp}>Founder · Creator · Entrepreneur</motion.div>
        <motion.h2 className="fd-heading" variants={fadeUp}>
          MEET THE<br /><span className="grad-text-warm">FOUNDER</span>
        </motion.h2>
      </motion.div>

      {/* Main grid */}
      <div className="fd-grid">

        {/* ── LEFT: Photo column ── */}
        <motion.div
          className="fd-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main photo — Silver Play Button */}
          <div className="fd-main-photo-wrap">
            {/* Animated gradient border */}
            <motion.div
              className="fd-photo-glow"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
            <div className="fd-main-photo">
              <img
                src="/images (1).jpg"
                alt="Rawal Singh — Founder, Bawra Skill House"
                className="fd-main-img"
              />
              {/* Overlay gradient at bottom */}
              <div className="fd-photo-overlay" />
            </div>

            {/* Floating accent card */}
            <motion.div
              className="fd-accent-float"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="fd-accent-num">26</div>
              <div className="fd-accent-lbl">Years Old<br />Agency Founder</div>
            </motion.div>

            {/* Silver Play Button badge */}
            <motion.div
              className="fd-play-badge"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 220 }}
            >
              <span style={{ fontSize: '1.1rem' }}>🏆</span>
              <span>Silver Play Button</span>
            </motion.div>
          </div>

          {/* Quick stats row */}
          <motion.div
            className="fd-stats-row"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((s, i) => (
              <motion.div key={i} className="fd-stat" variants={scaleIn}>
                <div className="fd-stat-icon">{s.icon}</div>
                <div className="fd-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="fd-stat-lbl" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Credential cards — 2×2 grid */}
          <motion.div
            className="fd-cred-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {creds.map((c, i) => <CredCard key={i} c={c} i={i} />)}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Text column ── */}
        <motion.div
          className="fd-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="fd-name">
            <span className="fd-name-rawal">RAWAL</span>
            <span className="fd-name-singh grad-text">SINGH</span>
          </div>

          {/* Quote */}
          <motion.blockquote
            className="fd-quote"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="fd-quote-mark">"</span>
            I couldn't find an institute that taught real skills — so I built one myself.
            <span className="fd-quote-mark">"</span>
          </motion.blockquote>

          {/* Bio */}
          <motion.p
            className="fd-bio"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            Rawal Singh is a 26-year-old creator from Jodhpur whose story isn't just about
            success — <strong>it's about determination.</strong> Starting with no mentor, no roadmap,
            and no shortcuts, he grew a YouTube channel to <strong>500,000+ subscribers</strong>.
            He then launched Rajasthan's first healthcare-focused digital marketing agency —
            Bawra Digitals — which now employs <strong>25+ professionals</strong> across Jodhpur and Jaipur.
          </motion.p>
          <motion.p
            className="fd-bio"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42, duration: 0.65 }}
          >
            A personal invite from <strong>PM Narendra Modi</strong>, the Creator Nation Award,
            recognition from the Government of Rajasthan, a YouTube Silver Play Button —
            these are the results of relentless, disciplined work.
            <strong> Bawra Skill House</strong> exists so that every creator in Rajasthan gets
            the guidance he never had.
          </motion.p>

          {/* YouTube CTA */}
          <motion.a
            href="https://www.youtube.com/@RawalSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="fd-yt-btn"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 36px rgba(255,0,0,.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="white">
              <path d="M21.543 2.486A2.775 2.775 0 0 0 19.594.524C17.896 0 11 0 11 0S4.104 0 2.406.524A2.775 2.775 0 0 0 .457 2.486C0 4.196 0 7.778 0 7.778s0 3.582.457 5.292a2.775 2.775 0 0 0 1.949 1.962C4.104 15.556 11 15.556 11 15.556s6.896 0 8.594-.524a2.775 2.775 0 0 0 1.949-1.962C22 11.36 22 7.778 22 7.778s0-3.582-.457-5.292z"/>
              <path d="M8.778 11.111V4.444l5.778 3.334-5.778 3.333z" fill="#FF0000"/>
            </svg>
            Subscribe — @RawalSingh
            <span className="fd-yt-sub">500K+ Subscribers</span>
          </motion.a>

          {/* Achievement badges */}
          <motion.div
            className="fd-badges"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {badges.map(([cls, label], i) => (
              <motion.div
                key={i}
                className={`fd-badge ${cls}`}
                variants={scaleIn}
                whileHover={{ scale: 1.07, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="fd-bottom-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a href="#leadform" className="btn-p shimmer-btn" style={{ display: 'inline-flex' }}>
              🔥 Learn Directly from Rawal Singh
            </a>
            <a href="tel:09950683442" className="phone-badge" style={{ marginTop: 0 }}>
              📞 09950683442
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
