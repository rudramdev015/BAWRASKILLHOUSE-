import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const courses = [
  {
    num: '01',
    tag: '🔥 Most Enrolled',
    title: 'VIDEO EDITING',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=75&auto=format&fit=crop',
    desc: 'Master Premiere Pro, After Effects and DaVinci Resolve. Edit Reels, YouTube videos and brand films — build a real portfolio from day one through actual client projects.',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Color Grading', 'Reels / Shorts', 'Sound Design'],
    learns: [
      'Master professional editing workflows and industry shortcuts',
      'Create cinematic color grades and film-quality looks',
      'Build motion graphics and animated text sequences',
      'Export optimized for YouTube, Instagram, and all platforms',
      'Work on real client projects to build a professional portfolio',
    ],
    duration: '3 Months',
    level: 'Beginner → Advanced',
    salary: '₹25K–₹80K/mo',
    roles: 'Freelance Editor · YouTube Editor · Agency Editor',
  },
  {
    num: '02',
    tag: '⭐ Career Defining',
    title: 'GRAPHIC DESIGNING',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=75&auto=format&fit=crop',
    desc: 'Explore the world of design with Photoshop, Illustrator and Canva Pro. Brand identity, social media graphics, print design — industry-level skills from scratch.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro', 'InDesign', 'Brand Identity', 'UI Basics'],
    learns: [
      'Design professional brand identities and logos from scratch',
      'Create viral-worthy social media templates and content',
      'Master print design — posters, brochures, packaging',
      'Learn typography, color theory, and visual hierarchy',
      'Work through real client briefs in a studio environment',
    ],
    duration: '3 Months',
    level: 'Beginner → Advanced',
    salary: '₹20K–₹70K/mo',
    roles: 'Brand Designer · Social Media Designer · Freelancer',
  },
]

function FeatCard({ course, i }) {
  return (
    <motion.div
      className="feat-card"
      variants={scaleIn}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Course image */}
      <div style={{ marginBottom: '1.8rem', borderRadius: '4px', overflow: 'hidden', aspectRatio: '16/9', position: 'relative' }}>
        <motion.img
          src={course.img}
          alt={course.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.7) saturate(1.2)' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          onError={e => { e.target.style.display = 'none' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,.8) 0%, transparent 60%)',
        }} />
        <div style={{ position: 'absolute', bottom: '.75rem', left: '.85rem' }}>
          <div className="feat-card-tag">{course.tag}</div>
        </div>
      </div>

      <div className="feat-course-num">{course.num}</div>
      <div className="feat-course-title">{course.title}</div>
      <p className="feat-course-desc">{course.desc}</p>

      <div className="feat-tools">
        {course.tools.map(t => <span className="feat-tool" key={t}>{t}</span>)}
      </div>

      <div className="feat-learns">
        {course.learns.map((l, idx) => (
          <motion.div
            className="feat-learn-item" key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
          >
            <span className="check">◆</span>
            <span>{l}</span>
          </motion.div>
        ))}
      </div>

      <div className="feat-outcome">
        <div className="feat-outcome-item">
          <div className="label">Duration</div>
          <div className="value">{course.duration}</div>
        </div>
        <div className="feat-outcome-item">
          <div className="label">Level</div>
          <div className="value">{course.level}</div>
        </div>
        <div className="feat-outcome-item">
          <div className="label">Expected Salary</div>
          <div className="value salary">{course.salary}</div>
        </div>
        <div className="feat-outcome-item">
          <div className="label">Job Roles</div>
          <div className="value" style={{ fontSize: '.78rem' }}>{course.roles}</div>
        </div>
      </div>

      <motion.a
        href="#cta"
        className="btn-p shimmer-btn"
        style={{ width: '100%', justifyContent: 'center' }}
        whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(255,107,0,.4)' }}
        whileTap={{ scale: 0.97 }}
      >
        Apply for This Course →
      </motion.a>
    </motion.div>
  )
}

export default function FeaturedCourses() {
  return (
    <section id="featured" className="featured-section">
      <motion.div
        className="featured-head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div>
          <motion.div className="sec-tag" variants={fadeUp}>Flagship Courses</motion.div>
          <motion.h2 className="sec-h2" variants={fadeUp}>
            OUR SIGNATURE<br />
            <span className="grad-text">PROGRAMS</span>
          </motion.h2>
          <motion.p className="sec-body" variants={fadeUp}>
            Video Editing and Graphic Design — the two skills powering digital India today.
            Learn them properly and open doors in every creative industry.
          </motion.p>
        </div>
        <motion.a href="#all-courses" className="btn-s" variants={fadeUp}
          whileHover={{ scale: 1.03 }}>All 6 Courses →</motion.a>
      </motion.div>

      <motion.div
        className="featured-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {courses.map((c, i) => <FeatCard key={c.num} course={c} i={i} />)}
      </motion.div>
    </section>
  )
}
