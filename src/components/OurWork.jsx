import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const REAL_VID = '7X0LYGDT76E'

const categories = [
  { id: 'editing', label: 'Video Editing' },
  { id: 'design', label: 'Graphic Design' },
  { id: 'reels', label: 'Reels' },
  { id: 'vlogs', label: 'Vlogs' },
  { id: 'events', label: 'Events' },
]

const works = {
  editing: [
    { id: REAL_VID, title: 'Cinematic Brand Film', views: '1.2L views', thumb: `https://img.youtube.com/vi/${REAL_VID}/hqdefault.jpg`, isYT: true },
    { id: null, title: 'Healthcare Campaign Edit', views: '87K views', thumb: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=480&q=70', isYT: false },
    { id: null, title: 'YouTube Channel Trailer', views: '54K views', thumb: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2f2?w=480&q=70', isYT: false },
    { id: null, title: 'Documentary Short Film', views: '2.3L views', thumb: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=480&q=70', isYT: false },
    { id: null, title: 'Wedding Highlight Reel', views: '1.8L views', thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=480&q=70', isYT: false },
    { id: null, title: 'Product Launch Video', views: '3.1L views', thumb: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=480&q=70', isYT: false },
  ],
  design: [
    { id: null, title: 'Brand Identity Package', views: '45K impressions', thumb: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=480&q=70', isYT: false },
    { id: null, title: 'Social Media Kit', views: '78K impressions', thumb: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=480&q=70', isYT: false },
    { id: null, title: 'Healthcare App UI', views: '32K impressions', thumb: 'https://images.unsplash.com/photo-1576153192621-7a3be10b356e?w=480&q=70', isYT: false },
    { id: null, title: 'Poster & Flyer Design', views: '56K impressions', thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=70', isYT: false },
    { id: null, title: 'YouTube Thumbnail Pack', views: '1.2L impressions', thumb: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=480&q=70', isYT: false },
    { id: null, title: 'Event Banner Series', views: '67K impressions', thumb: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=480&q=70', isYT: false },
  ],
  reels: [
    { id: REAL_VID, title: 'Trending Reel Edit', views: '4.5L views', thumb: `https://img.youtube.com/vi/${REAL_VID}/hqdefault.jpg`, isYT: true },
    { id: null, title: 'Dance Performance Reel', views: '2.8L views', thumb: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=480&q=70', isYT: false },
    { id: null, title: 'Food Brand Reel', views: '1.9L views', thumb: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=480&q=70', isYT: false },
    { id: null, title: 'Fashion Transition Reel', views: '3.2L views', thumb: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=480&q=70', isYT: false },
    { id: null, title: 'Motivational Reel', views: '5.6L views', thumb: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=480&q=70', isYT: false },
    { id: null, title: 'Travel Reel Cut', views: '2.1L views', thumb: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=480&q=70', isYT: false },
  ],
  vlogs: [
    { id: REAL_VID, title: 'Dubai Solo Trip Vlog', views: '3.4L views', thumb: `https://img.youtube.com/vi/${REAL_VID}/hqdefault.jpg`, isYT: true },
    { id: null, title: 'Jodhpur Street Food Vlog', views: '1.6L views', thumb: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=480&q=70', isYT: false },
    { id: null, title: 'Day In My Life — Creator', views: '2.2L views', thumb: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=480&q=70', isYT: false },
    { id: null, title: 'Agency Behind The Scenes', views: '98K views', thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=480&q=70', isYT: false },
    { id: null, title: 'Rajasthan Road Trip', views: '4.1L views', thumb: 'https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=480&q=70', isYT: false },
    { id: null, title: 'Student Success Story', views: '1.3L views', thumb: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=480&q=70', isYT: false },
  ],
  events: [
    { id: REAL_VID, title: 'Creator Nation Award 2023', views: 'Live Coverage', thumb: `https://img.youtube.com/vi/${REAL_VID}/hqdefault.jpg`, isYT: true },
    { id: null, title: 'PM Modi Creator Meet', views: 'Highlights', thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=480&q=70', isYT: false },
    { id: null, title: 'Skill House Launch Event', views: 'Full Coverage', thumb: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=480&q=70', isYT: false },
    { id: null, title: 'YouTube Silver Play Unbox', views: 'Viral Moment', thumb: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=480&q=70', isYT: false },
    { id: null, title: 'Jaipur Campus Launch', views: 'Grand Opening', thumb: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=480&q=70', isYT: false },
    { id: null, title: 'Annual Graduation Ceremony', views: 'Full Event', thumb: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=480&q=70', isYT: false },
  ],
}

export default function OurWork() {
  const [active, setActive] = useState('editing')
  const [modal, setModal] = useState(null)

  return (
    <section id="ourwork" className="our-work">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <motion.div className="sec-tag" variants={fadeUp} style={{ justifyContent: 'center' }}>
          Our Work
        </motion.div>
        <motion.h2 className="sec-h2" variants={fadeUp}>
          STUDENTS KA<br />
          <span className="grad-text-warm">KAAM DEKHO</span>
        </motion.h2>
        <motion.p className="sec-body" variants={fadeUp} style={{ margin: '1rem auto 0', textAlign: 'center' }}>
          Yeh sirf course nahi — yeh ek transformation hai. Hamare students ka real work.
        </motion.p>
      </motion.div>

      {/* Category Tabs */}
      <div className="work-tabs">
        {categories.map(c => (
          <button
            key={c.id}
            className={`work-tab ${active === c.id ? 'active' : ''}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="work-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          {works[active].map((item, i) => (
            <motion.div
              className="work-card"
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.055 }}
              whileHover={{ y: -4 }}
              onClick={() => item.id && setModal(item)}
              style={{ cursor: item.id ? 'pointer' : 'default' }}
            >
              <div className="work-thumb">
                <img
                  src={item.thumb}
                  alt={item.title}
                  loading="lazy"
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=480&q=70' }}
                />
                <div className="work-overlay">
                  {item.id && (
                    <motion.div
                      className="play-btn-circle"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  )}
                </div>
                <div className="work-views">{item.views}</div>
              </div>
              <div className="work-info">
                <div className="work-title">{item.title}</div>
                {item.id && <div className="work-yt-badge">▶ YouTube</div>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* YouTube CTA */}
      <motion.div
        style={{ textAlign: 'center', marginTop: '3rem' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="https://www.youtube.com/@RawalSingh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-p"
          style={{ display: 'inline-flex', gap: '.6rem', alignItems: 'center' }}
        >
          <span style={{ color: '#FF0000', fontSize: '1.1rem' }}>▶</span>
          Full Portfolio YouTube Par Dekho
        </a>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="work-modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="work-modal"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 280 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setModal(null)}>✕</button>
              <div className="modal-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${modal.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={modal.title}
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                />
              </div>
              <div className="modal-title">{modal.title}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
