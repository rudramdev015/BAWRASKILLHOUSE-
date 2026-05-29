import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const courses = [
  {
    num: '01', title: 'VIDEO EDITING',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=70&auto=format&fit=crop',
    desc: 'Master-level editing in Premiere Pro, After Effects and DaVinci Resolve. Build a real portfolio from your very first class.',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci', 'Reels'],
  },
  {
    num: '02', title: 'GRAPHIC DESIGNING',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=70&auto=format&fit=crop',
    desc: 'Photoshop, Illustrator and Canva Pro — brand identity, social media graphics and print design at an industry professional level.',
    tags: ['Photoshop', 'Illustrator', 'Canva Pro', 'Brand Identity'],
  },
  {
    num: '03', title: 'VIDEO PRODUCTION',
    img: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=600&q=70&auto=format&fit=crop',
    desc: 'Camera operation, professional lighting, sound recording and direction — complete production training with full studio access.',
    tags: ['Camera', 'Lighting', 'Direction', 'Studio'],
  },
  {
    num: '04', title: 'AI FOR CREATORS',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=70&auto=format&fit=crop',
    desc: 'ChatGPT, Midjourney, Runway ML — the AI tools that are a game-changer for modern creators. Make your workflow 10x faster.',
    tags: ['ChatGPT', 'Midjourney', 'Runway ML', 'AI Workflow'],
  },
  {
    num: '05', title: 'META ADS MASTERY',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=70&auto=format&fit=crop',
    desc: 'Facebook and Instagram Ads — campaign strategy, audience targeting, A/B testing, ROAS optimization. Practiced on real ad accounts.',
    tags: ['Facebook Ads', 'Instagram Ads', 'Targeting', 'ROAS'],
  },
  {
    num: '06', title: 'CREATOR ACADEMY',
    img: 'https://images.unsplash.com/photo-1559163499-413811fb2344?w=600&q=70&auto=format&fit=crop',
    desc: "Don't just make content — build a creator brand. Grow on YouTube, establish your personal brand, and monetize your skills.",
    tags: ['YouTube Growth', 'Personal Brand', 'Monetization', 'Strategy'],
  },
]

export default function AllCourses() {
  return (
    <section id="all-courses" className="all-courses">
      <motion.div
        className="courses-head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div>
          <motion.div className="sec-tag" variants={fadeUp}>All Courses</motion.div>
          <motion.h2 className="sec-h2" variants={fadeUp}>
            6 COURSES.<br /><span className="grad-text-warm">ONE FUTURE.</span>
          </motion.h2>
        </div>
        <motion.a href="#leadform" className="btn-p shimmer-btn" variants={fadeUp}
          whileHover={{ scale: 1.04 }}>Apply Now →</motion.a>
      </motion.div>

      <motion.div
        className="courses-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {courses.map((c, i) => (
          <motion.div
            className="course-card"
            key={c.num}
            variants={scaleIn}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <div className="course-card-img">
              <img
                src={c.img} alt={c.title}
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            <div style={{ padding: '1.8rem' }}>
              <div className="course-num">{c.num}</div>
              <div className="course-title">{c.title}</div>
              <p className="course-desc">{c.desc}</p>
              <div className="course-tags">
                {c.tags.map(t => <span className="ctag" key={t}>{t}</span>)}
              </div>
              <motion.a href="#leadform" className="btn-p"
                style={{ marginTop: '1.2rem', fontSize: '.84rem', padding: '.6rem 1.4rem' }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                Enroll Now →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
