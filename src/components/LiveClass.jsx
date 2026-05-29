import { motion } from 'framer-motion'
import { stagger, fadeUp, fadeLeft, fadeRight } from '../utils/animations'

export default function LiveClass() {
  return (
    <section id="liveclass" className="liveclass">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="sec-tag" variants={fadeUp}>Inside Bawra Skill House</motion.div>
        <motion.h2 className="sec-h2" variants={fadeUp}>
          SEE WHAT HAPPENS<br />
          <span className="grad-text">IN OUR CLASSES</span>
        </motion.h2>
      </motion.div>

      <div className="class-grid">
        {/* LEFT: Real YouTube video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="class-video-main">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '6px' }}>
              <iframe
                src="https://www.youtube.com/embed/7X0LYGDT76E?rel=0&modestbranding=1&color=white"
                title="Bawra Skill House — Offline Class"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </div>
          <motion.p
            style={{ marginTop: '1rem', fontSize: '.82rem', color: 'var(--muted)', lineHeight: '1.8' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            This is not a course preview — this is an actual class. Real students, real projects, real mentorship.
            The most hands-on creative training available in Jodhpur.
          </motion.p>
        </motion.div>

        {/* RIGHT: Quote + photos */}
        <motion.div
          className="class-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sec-tag" style={{ marginTop: '1rem' }}>From the Founder</div>
          <blockquote className="class-quote">
            "We don't teach theory here. Students walk in and start creating — from day one."
            <div className="class-quote-author">— Rawal Singh, Founder · Bawra Skill House</div>
          </blockquote>

          {/* YouTube Channel CTA */}
          <motion.a
            href="https://www.youtube.com/@RawalSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-p"
            style={{ marginBottom: '1.5rem', display: 'inline-flex', background: '#FF0000' }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(255,0,0,.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            ▶ Subscribe on YouTube — @RawalSingh
          </motion.a>

          <div className="class-photos">
            {[
              { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=75&auto=format&fit=crop', note: 'Classroom wide shot' },
              { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=75&auto=format&fit=crop', note: 'Teaching session' },
              { img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=75&auto=format&fit=crop', note: 'Students working' },
              { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75&auto=format&fit=crop', note: 'Editing on screen' },
            ].map((p, i) => (
              <motion.div
                className="class-photo"
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="ph" style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.note}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.8) saturate(1.1)' }}
                    onError={e => { e.target.parentElement.innerHTML = `<div class="asset-ph" style="height:100%;display:flex;align-items:center;justify-content:center;font-size:.7rem">${p.note}</div>` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
