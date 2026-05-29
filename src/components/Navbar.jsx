import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoSVG from './LogoSVG'

const links = [
  { href: '#liveclass', label: 'Classes' },
  { href: '#featured', label: 'Courses' },
  { href: '#features', label: 'Why Us' },
  { href: '#founder', label: 'Founder' },
  { href: '#awards', label: 'Awards' },
  { href: '#offices', label: 'Campus' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [announcementVisible, setAnnouncementVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Announcement Bar */}
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            className="nav-announcement"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="announcement-inner"
              animate={{ x: [0, -4, 4, 0] }}
              transition={{ duration: 0.4, delay: 2 }}
            >
              <span className="ann-dot" />
              <span>🔥 <strong>Next Batch Starting Soon</strong> — Only 4 Seats Left!</span>
              <a href="#leadform" className="ann-cta">Book Free Demo →</a>
            </motion.div>
            <button className="ann-close" onClick={() => setAnnouncementVisible(false)} aria-label="Dismiss">✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : 'top'}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ top: announcementVisible ? undefined : 0 }}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          className="nav-logo-wrap"
          whileHover={{ scale: 1.02 }}
          onClick={() => setMobileOpen(false)}
        >
          <LogoSVG height={38} />
        </motion.a>

        {/* Desktop Links */}
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="nav-link"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
            >
              {l.label}
              <span className="nav-link-underline" />
            </motion.a>
          ))}
        </nav>

        {/* Right side */}
        <div className="nav-right">
          <motion.a
            href="tel:09950683442"
            className="nav-phone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
          >
            📞 09950683442
          </motion.a>
          <motion.a
            href="#leadform"
            className="nav-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.06, boxShadow: '0 8px 24px rgba(255,107,0,.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            Apply Now 🔥
          </motion.a>

          {/* Burger */}
          <motion.button
            className="nav-burger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="mobile-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            >
              <div className="mobile-panel-head">
                <LogoSVG height={32} />
                <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
              </div>

              <nav className="mobile-nav">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    {l.label}
                    <span className="mobile-link-arrow">→</span>
                  </motion.a>
                ))}
              </nav>

              <div className="mobile-actions">
                <a href="#leadform" className="btn-p shimmer-btn" onClick={() => setMobileOpen(false)}
                  style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}>
                  🔥 Book Free Demo Class
                </a>
                <a href="https://wa.me/919950683442" className="mobile-wa" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M11.5 0C5.149 0 0 5.149 0 11.5c0 2.017.528 3.906 1.448 5.545L0 23l6.154-1.448A11.456 11.456 0 0011.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a href="tel:09950683442" className="mobile-phone-link">
                  📞 09950683442
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
