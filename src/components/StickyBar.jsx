import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [dismissed])

  const handleDismiss = () => {
    setDismissed(true)
    setVisible(false)
  }

  const waMsg = encodeURIComponent('🙏 Namaste! Mujhe next batch mein seat book karni hai. Please details share karo!')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="sticky-bar"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 260 }}
        >
          <div className="sticky-inner">
            <div className="sticky-left">
              <motion.div
                className="sticky-dot"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <div>
                <div className="sticky-msg">🔥 Next Batch — <strong>Only 4 Seats Remaining!</strong></div>
                <div className="sticky-sub">Book now and get a free demo class included</div>
              </div>
            </div>

            <div className="sticky-actions">
              <motion.a
                href={`https://wa.me/919950683442?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sticky-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.5 0C5.149 0 0 5.149 0 11.5c0 2.017.528 3.906 1.448 5.545L0 23l6.154-1.448A11.456 11.456 0 0011.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0z"/>
                </svg>
                Book Your Seat Free
              </motion.a>

              <button className="sticky-close" onClick={handleDismiss} aria-label="Close">
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
