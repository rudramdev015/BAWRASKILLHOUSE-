import { motion } from 'framer-motion'

const items = [
  '🏆 YouTube Silver Play Button',
  '🎖️ Creator Nation Award Winner',
  '🇮🇳 PM Modi Invited',
  '▶ YouTube Creator Award Invite',
  '⚖️ Joga Ram Patel — Kanoon Mantri Rajasthan',
  '📰 Featured in National Media',
  '▶ 5 Lakh+ Subscribers',
  '🏢 Jodhpur & Jaipur Campuses',
  '👥 25+ Team Members',
  '🏅 6 National Awards',
]

export default function TrustStrip() {
  const doubled = [...items, ...items]

  return (
    <div className="trust-strip">
      <div className="trust-track">
        {doubled.map((item, i) => (
          <div key={i} className="trust-item">
            <span className="dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
