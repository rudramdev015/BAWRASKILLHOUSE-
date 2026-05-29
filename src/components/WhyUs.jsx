import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const reasons = [
  { icon: '🏢', title: '100% Offline & Hands-On Training', desc: 'No screen recordings, no pre-recorded lectures. Physical classes, live practicals, and studio access — because real learning happens by doing.' },
  { icon: '🎯', title: 'Instructors Who Are Active Professionals', desc: 'Your teachers are working professionals from Bawra Digitals agency — people who use these tools every day for real clients.' },
  { icon: '📁', title: 'Portfolio-First Approach', desc: 'By the time your course ends, you have a real portfolio — edited videos, designed creatives, real projects. Employers want to see work, not just a certificate.' },
  { icon: '🤝', title: 'Job & Freelance Placement Support', desc: 'Internship and job opportunities through our agency network. Freelance client referrals. Career support that continues after course completion.' },
  { icon: '🗺️', title: 'World-Class Training in Your Own City', desc: "No need to move to Delhi or Mumbai. Professional-level creative education right here in Jodhpur and Jaipur — Rajasthan's own creator hub." },
  { icon: '🔥', title: 'Direct Mentorship from Rawal Singh', desc: '500K+ subscribers, PM invite, national awards — you get direct insights and feedback from Rawal Singh himself. Not filtered. Not diluted.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="why-us">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp}>Why Bawra Skill House</motion.div>
        <motion.h2 className="sec-h2" variants={fadeUp}>
          LEARN SKILLS THAT<br />
          <span className="grad-text">ACTUALLY PAY</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="why-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {reasons.map((r, i) => (
          <motion.div
            className="why-card"
            key={i}
            variants={scaleIn}
            whileHover={{ y: -5, borderColor: 'rgba(255,107,0,.4)' }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <motion.div
              className="why-icon"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4 }}
            >
              {r.icon}
            </motion.div>
            <div className="why-title">{r.title}</div>
            <div className="why-desc">{r.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
