import { useState } from 'react'
import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '../utils/animations'

const courses = [
  'Video Editing (Professional)',
  'Graphic Designing (Professional)',
  'Content Creation & YouTube Growth',
  'Meta Ads & Digital Marketing',
  'Video Production & Photography',
  'AI Tools for Creators',
]

const cities = ['Jodhpur', 'Jaipur', 'Delhi', 'Mumbai', 'Ahmedabad', 'Other City']

const perks = [
  { icon: '⚡', text: 'Instant WhatsApp Confirmation' },
  { icon: '🎁', text: 'Free Demo Class Included on Booking' },
  { icon: '🔒', text: 'Limited Seats — Only 20 Per Batch' },
  { icon: '📞', text: 'Our Team Calls Back Within 30 Minutes' },
]

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', city: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Please enter a valid 10-digit number'
    if (!form.course) e.course = 'Please select a course'
    if (!form.city) e.city = 'Please select your city'
    return e
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    const msg = encodeURIComponent(
      `Hello Bawra Skill House! 🙏\n\n` +
      `My name is ${form.name}.\n` +
      `Course Interest: ${form.course}\n` +
      `City: ${form.city}\n` +
      `Phone: ${form.phone}\n\n` +
      `I would like to book a seat for the next batch. Please share the details and callback. Thank you!`
    )
    window.open(`https://wa.me/919950683442?text=${msg}`, '_blank')
    setSent(true)
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  return (
    <section id="leadform" className="lead-section">
      <div className="lead-bg-glow" />

      <div className="lead-inner">
        {/* Left — Info */}
        <motion.div
          className="lead-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="sec-tag" variants={fadeUp}>Book Your Seat</motion.div>
          <motion.h2 className="sec-h2" variants={fadeUp}>
            SECURE YOUR<br />
            <span className="grad-text-warm">SEAT TODAY</span>
          </motion.h2>
          <motion.p className="sec-body" variants={fadeUp} style={{ marginTop: '1.2rem' }}>
            Seats are limited — only 20 per batch. Fill the form and our team will
            call you back within 30 minutes with all the details.
          </motion.p>

          <motion.div className="lead-perks" variants={stagger}>
            {perks.map((p, i) => (
              <motion.div key={i} className="lead-perk" variants={fadeUp}>
                <span className="lead-perk-icon">{p.icon}</span>
                <span>{p.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="lead-urgency" variants={fadeUp}>
            <span className="urgency-dot" />
            <span>Next batch starting soon — <strong>only a few seats remaining</strong></span>
          </motion.div>

          <motion.a
            href="tel:09950683442"
            className="phone-badge"
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            style={{ marginTop: '1.5rem' }}
          >
            📞 Call Direct: 09950683442
          </motion.a>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          className="lead-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          {sent ? (
            <motion.div
              className="lead-success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 16 }}
            >
              <div className="success-icon">🎉</div>
              <h3>Sent to WhatsApp!</h3>
              <p>Our team will call you back within <strong>30 minutes</strong>. Keep WhatsApp open!</p>
              <button className="btn-p" onClick={() => setSent(false)} style={{ marginTop: '1.5rem' }}>
                Submit Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="lead-form-header">
                <h3>Free Demo Class + Seat Booking</h3>
                <p>Takes 30 seconds to fill</p>
              </div>

              <div className="field-wrap">
                <label>Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'err' : ''}
                />
                {errors.name && <span className="field-err">{errors.name}</span>}
              </div>

              <div className="field-wrap">
                <label>WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'err' : ''}
                  maxLength={10}
                />
                {errors.phone && <span className="field-err">{errors.phone}</span>}
              </div>

              <div className="field-wrap">
                <label>Choose Your Course *</label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className={errors.course ? 'err' : ''}
                >
                  <option value="">-- Select a course --</option>
                  {courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.course && <span className="field-err">{errors.course}</span>}
              </div>

              <div className="field-wrap">
                <label>Your City *</label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={errors.city ? 'err' : ''}
                >
                  <option value="">-- Select your city --</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.city && <span className="field-err">{errors.city}</span>}
              </div>

              <motion.button
                type="submit"
                className="btn-p shimmer-btn"
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem', marginTop: '.5rem' }}
                whileHover={{ scale: 1.02, boxShadow: '0 12px 36px rgba(255,107,0,.45)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.5 0C5.149 0 0 5.149 0 11.5c0 2.017.528 3.906 1.448 5.545L0 23l6.154-1.448A11.456 11.456 0 0011.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0z"/>
                </svg>
                Book My Seat on WhatsApp 🔥
              </motion.button>

              <p className="form-note">
                📲 Clicking opens WhatsApp with your message pre-filled. Just hit Send!
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
