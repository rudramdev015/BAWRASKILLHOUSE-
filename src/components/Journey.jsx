import { motion } from 'framer-motion'
import { stagger, fadeUp } from '../utils/animations'

const milestones = [
  { year: '2018', title: 'Content Creation Begins — Zero to Creator', desc: 'Started with just a phone and an idea in Jodhpur. Uploaded his first YouTube video with no mentor, no money — only the drive to build something meaningful.', icon: '📱', color: '#3B82F6' },
  { year: '2021', title: 'Founded Bawra Digitals Agency at Age 22', desc: "Launched Rajasthan's first healthcare-focused digital marketing agency. Built from scratch — grew to a team of 25+ professionals serving clients across India.", icon: '🏢', color: '#EC4899' },
  { year: '2022', title: 'YouTube Silver Play Button — 500,000 Subscribers', desc: 'YouTube sent the Silver Play Button. Became one of the most recognized creators in Rajasthan through consistent, quality content — earned, not gifted.', icon: '🏆', color: '#FF6B00' },
  { year: '2022', title: 'Solo Dubai Trip — Hard Work Pays Off', desc: 'Traveled solo to Dubai — proof that discipline and consistency create real opportunities. This moment became an aspirational landmark for every Bawra student.', icon: '✈️', color: '#06B6D4' },
  { year: '2023', title: 'Creator Nation Award + PM Modi Invited + Government Recognition', desc: 'Received Creator Nation Award. PM Narendra Modi personally extended an invitation. Recognized by Rajasthan Law Minister Joga Ram Patel. Opened Jaipur office.', icon: '🎖️', color: '#7C3AED' },
  { year: '2023', title: 'First Own Car — The Dream Made Real', desc: "Bought his first car from his own earnings — a tangible symbol of what focused skills and hard work achieve. Every Bawra student sees this as their own possibility.", icon: '🚗', color: '#F59E0B' },
  { year: '2024', title: "Bawra Skill House — Rajasthan's First Creator School", desc: "Launched Rajasthan's first dedicated offline creator skill institute. Mission: give the next generation of creators the guidance, tools, and mentorship he never had.", icon: '🏫', color: '#FF6B00' },
]

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp}>Founder's Journey</motion.div>
        <motion.h2 className="sec-h2" variants={fadeUp}>
          THE ROAD TO<br />
          <span className="grad-text-warm">WHERE WE ARE TODAY</span>
        </motion.h2>
        <motion.p className="sec-body" variants={fadeUp}>
          A young man from Jodhpur built his own path — no shortcuts, no mentors, only relentless effort.
          This story is for everyone who wants to build something great.
        </motion.p>
      </motion.div>

      <div className="timeline">
        {milestones.map((m, i) => (
          <motion.div
            className="tl-item"
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="tl-year" style={{ borderColor: m.color, color: m.color }}>{m.year}</div>
            <div>
              <motion.div
                style={{ fontSize: '1.4rem', marginBottom: '.4rem' }}
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              >
                {m.icon}
              </motion.div>
              <div className="tl-title">{m.title}</div>
              <div className="tl-desc">{m.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
