import { motion } from 'framer-motion'
import LogoSVG from './LogoSVG'
import { stagger, fadeUp } from '../utils/animations'

export default function Footer() {
  return (
    <>
      <motion.footer
        className="footer"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <div className="footer-logo">
            <LogoSVG height={36} />
          </div>
          <p className="footer-tag">
            Rajasthan's first offline creator skill institute. Students don't just learn here —
            they become professionals.
          </p>
          <div className="footer-social">
            <motion.a href="https://www.youtube.com/@RawalSingh" target="_blank" rel="noopener noreferrer"
              className="social-btn" whileHover={{ scale: 1.06, color: '#FF0000', borderColor: '#FF0000' }}>
              ▶ YouTube
            </motion.a>
            <motion.a href="#" className="social-btn" whileHover={{ scale: 1.06, color: '#EC4899', borderColor: '#EC4899' }}>
              📸 Instagram
            </motion.a>
            <motion.a href="#" className="social-btn" whileHover={{ scale: 1.06, color: '#2563EB', borderColor: '#2563EB' }}>
              💼 LinkedIn
            </motion.a>
          </div>
          <p className="footer-powered">A venture by Bawra Digitals — Rajasthan's Leading Healthcare Marketing Agency</p>
        </motion.div>

        {/* Courses */}
        <motion.div className="footer-col" variants={fadeUp}>
          <h4>Courses</h4>
          <a href="#featured">Video Editing</a>
          <a href="#featured">Graphic Designing</a>
          <a href="#all-courses">Video Production</a>
          <a href="#all-courses">AI Tools</a>
          <a href="#all-courses">Meta Ads</a>
          <a href="#all-courses">Creator Academy</a>
        </motion.div>

        {/* Company */}
        <motion.div className="footer-col" variants={fadeUp}>
          <h4>Company</h4>
          <a href="#founder">About Us</a>
          <a href="#journey">Founder Story</a>
          <a href="#awards">Awards</a>
          <a href="https://www.youtube.com/@RawalSingh" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
          <a href="#">Careers</a>
        </motion.div>

        {/* Contact */}
        <motion.div className="footer-col" variants={fadeUp}>
          <h4>Contact</h4>
          <a href="#offices">Jodhpur Campus</a>
          <a href="#offices">Jaipur Campus</a>
          <a href="tel:09950683442">📞 09950683442</a>
          <a href="https://wa.me/919950683442" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          <a href="mailto:hello@bawraskillhouse.com">hello@bawraskillhouse.com</a>
        </motion.div>
      </motion.footer>

      <div className="footer-bottom">
        <span>© 2024 Bawra Skill House. All rights reserved.</span>
        <span>Built with passion in Rajasthan | <a href="tel:09950683442" style={{ color: 'var(--saffron)', textDecoration: 'none' }}>09950683442</a></span>
      </div>
    </>
  )
}
