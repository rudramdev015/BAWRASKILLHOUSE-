import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const testimonials = [
  {
    initials: 'AK',
    name: 'Amit Kumar',
    role: 'Video Editor · Now Freelancing',
    stars: 5,
    color: '#FF6B00',
    text: '"I thought video editing was too hard to learn. Three months at Bawra Skill House later, I\'m freelancing and earning ₹40,000 per month. They teach real skills — no fluff, no theory. Just work."',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
  },
  {
    initials: 'VS',
    name: 'Vikas Sharma',
    role: 'Graphic Designer · Studio Owner',
    stars: 5,
    color: '#EC4899',
    text: '"The Graphic Design course genuinely changed my life. I used to work at a bakery — now I run my own design studio with three clients. Pure practical learning, working on real tools from day one."',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
  },
  {
    initials: 'PJ',
    name: 'Priya Joshi',
    role: 'Digital Marketer · 3 Clients Running',
    stars: 5,
    color: '#7C3AED',
    text: '"After the Meta Ads course, I independently landed 3 clients. We worked on real ad accounts during the training — that experience is priceless. No one in Jodhpur offers this level of practical education."',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp}>Student Success Stories</motion.div>
        <motion.h2 className="sec-h2" variants={fadeUp}>
          REAL STUDENTS.<br />
          <span className="grad-text-warm">REAL RESULTS.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="testi-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            className="testi-card"
            key={i}
            variants={scaleIn}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <div className="testi-stars">{'★'.repeat(t.stars)}</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <motion.div
                className="testi-av"
                style={{ background: `${t.color}22`, borderColor: `${t.color}55`, color: t.color, overflow: 'hidden' }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.style.display = 'none'; e.target.parentElement.textContent = t.initials }} />
              </motion.div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
