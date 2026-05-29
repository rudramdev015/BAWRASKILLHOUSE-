import { motion } from 'framer-motion'
import { stagger, fadeUp, fadeLeft, fadeRight } from '../utils/animations'

export default function Offices() {
  return (
    <section id="offices" className="offices">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp}>Our Campus</motion.div>
        <motion.h2 className="sec-h2" variants={fadeUp}>
          PROFESSIONAL<br />
          <span className="grad-text">CAMPUSES</span>
        </motion.h2>
        <motion.p className="sec-body" variants={fadeUp}>
          Real office, real studio, professional infrastructure — fully equipped campuses in Jodhpur and Jaipur.
        </motion.p>
      </motion.div>

      <div className="office-container">
        {/* JODHPUR — Main Campus with Google Maps */}
        <motion.div
          className="office-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ borderColor: 'rgba(255,107,0,.35)' }}
        >
          {/* Google Maps embed — Bawra Digitals Jodhpur */}
          <div className="map-wrap" style={{ height: '260px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.4408814078906!2d73.00026729999999!3d26.2798039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf13e4866b3a4841%3A0xca51de0c41730bad!2sBawra%20Digitals%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1779680782290!5m2!1sen!2sin"
              title="Bawra Digitals Jodhpur"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Office photos grid */}
          <div className="office-photos">
            {[
              { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=70&auto=format&fit=crop', note: 'Reception' },
              { img: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=400&q=70&auto=format&fit=crop', note: 'Studio' },
              { img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=70&auto=format&fit=crop', note: 'Work Area' },
              { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=70&auto=format&fit=crop', note: 'Class Room' },
            ].map((p, i) => (
              <motion.div key={i} className="office-photo" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <img src={p.img} alt={p.note}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(.8) saturate(1.1)' }}
                  onError={e => { e.target.parentElement.innerHTML = `<div class="asset-ph" style="height:100%;display:flex;align-items:center;justify-content:center;font-size:.6rem">${p.note}</div>` }}
                />
              </motion.div>
            ))}
          </div>

          <div className="office-info">
            <div className="office-city">JODH<span>PUR</span></div>
            <span className="office-type">🏠 Main Campus · Headquarters · Bawra Digitals</span>
            <div className="office-addr">
              📍 Bawra Digitals Pvt. Ltd., Jodhpur<br />
              Rajasthan — 342001<br />
              <a href="tel:09950683442" className="phone-badge" style={{ marginTop: '.5rem' }}>
                📞 09950683442
              </a>
            </div>
          </div>
        </motion.div>

        {/* JAIPUR — Branch Campus */}
        <motion.div
          className="office-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ borderColor: 'rgba(255,107,0,.35)' }}
        >
          <div className="office-video" style={{ overflow: 'hidden', borderRadius: '6px', aspectRatio: '16/9' }}>
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=75&auto=format&fit=crop"
              alt="Jaipur Campus"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.8) saturate(1.1)' }}
            />
          </div>

          <div className="office-photos">
            {[
              'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=70&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=70&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=400&q=70&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=70&auto=format&fit=crop',
            ].map((img, i) => (
              <motion.div key={i} className="office-photo" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <img src={img} alt={`Jaipur campus ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(.8) saturate(1.1)' }}
                />
              </motion.div>
            ))}
          </div>

          <div className="office-info">
            <div className="office-city">JAI<span>PUR</span></div>
            <span className="office-type">🏙️ Branch Campus · Agency Office</span>
            <div className="office-addr">
              📍 Bawra Skill House, Jaipur Campus<br />
              Jaipur, Rajasthan — 302001<br />
              <a href="tel:09950683442" className="phone-badge" style={{ marginTop: '.5rem' }}>
                📞 09950683442
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
