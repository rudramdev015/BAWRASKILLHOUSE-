import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const mainAwards = [
  { icon: '🏆', img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=70&auto=format&fit=crop', title: 'YouTube Silver Play Button', org: 'YouTube India · 5,00,000 Subscribers Milestone' },
  { icon: '🎖️', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=70&auto=format&fit=crop', title: 'Creator Nation Award', org: "Creator Nation India · India's Leading Creator Recognition" },
  { icon: '🇮🇳', img: 'https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=600&q=70&auto=format&fit=crop', title: 'PM Narendra Modi — Personal Invite', org: 'Prime Minister of India · National Creator Recognition' },
]

const moreAwards = [
  { icon: '▶', name: 'YouTube Creator Award Invite' },
  { icon: '⚖️', name: 'Kanoon Mantri — Joga Ram Patel Recognition' },
  { icon: '📰', name: 'National Newspaper Feature' },
  { icon: '🏅', name: 'Other Awards & Recognition' },
]

export default function Awards() {
  return (
    <section id="awards" className="awards">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp}>Recognition</motion.div>
        <motion.h2 className="sec-h2" variants={fadeUp}>
          AWARDS &amp;<br />
          <span className="grad-text-warm">ACHIEVEMENTS</span>
        </motion.h2>
        <motion.p className="sec-body" variants={fadeUp}>
          The work speaks. The awards confirm it. These are not just trophies —
          they are proof of exactly where we stand in this industry.
        </motion.p>
      </motion.div>

      <motion.div
        className="awards-main"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {mainAwards.map((a, i) => (
          <motion.div
            className="award-card"
            key={i}
            variants={scaleIn}
            whileHover={{ y: -6, borderColor: 'rgba(255,107,0,.5)' }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <div className="award-photo">
              <motion.img
                src={a.img} alt={a.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.65) saturate(1.2)' }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                onError={e => {
                  e.target.parentElement.innerHTML = `<div class="asset-ph" style="height:100%;aspect-ratio:4/3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem"><div style="font-size:2rem">${a.icon}</div></div>`
                }}
              />
            </div>
            <div className="award-body">
              <div className="award-title">{a.title}</div>
              <div className="award-org">{a.org}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="awards-more"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {moreAwards.map((a, i) => (
          <motion.div
            className="award-sm"
            key={i}
            variants={scaleIn}
            whileHover={{ y: -4, borderColor: 'rgba(255,107,0,.4)' }}
          >
            <motion.div
              className="sm-icon"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            >
              {a.icon}
            </motion.div>
            <div className="sm-name">{a.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
