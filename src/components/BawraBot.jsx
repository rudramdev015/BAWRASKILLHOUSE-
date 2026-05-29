import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Knowledge base ─── */
const KB = [
  {
    keys: ['enroll', 'join', 'register', 'admission', 'apply', 'how to', 'book', 'seat'],
    answer: `To enroll at Bawra Skill House:\n\n1️⃣ Fill the booking form on this website\n2️⃣ Our team calls you back within 30 minutes\n3️⃣ Attend a FREE demo class\n4️⃣ Pay the course fee to confirm your seat\n\nYou can also directly WhatsApp us at **09950683442** or call — we respond within minutes! 🔥`,
  },
  {
    keys: ['duration', 'how long', 'days', 'weeks', 'months', 'schedule', 'timing', 'hours', 'time', 'when', 'class time'],
    answer: `📅 **Course Duration:** 3 months (90 days)\n\n🕘 **Morning Batch:** Mon–Fri, 9 AM – 1 PM\n🕑 **Evening Batch:** Mon–Fri, 2 PM – 6 PM\n📅 **Weekend Batch:** Sat & Sun, 9 AM – 3 PM\n\nClasses are **100% offline & hands-on** — no Zoom, no recordings!`,
  },
  {
    keys: ['location', 'office', 'campus', 'address', 'where', 'jodhpur', 'jaipur', 'rajasthan'],
    answer: `We have 2 professional campuses:\n\n📍 **Jodhpur (Main HQ)**\nBawra Digitals Pvt. Ltd.\nJodhpur, Rajasthan — 342001\n\n📍 **Jaipur (Branch)**\nBawra Skill House, Jaipur Campus\nJaipur, Rajasthan — 302001\n\nBoth campuses have studios, editing workstations & professional gear! 🎬`,
  },
  {
    keys: ['fee', 'fees', 'price', 'cost', 'money', 'payment', 'emi', 'rupees', '₹', 'charges'],
    answer: `💰 **Course Fees:**\n\n🎬 Video Editing — ₹25,000\n🎨 Graphic Design — ₹22,000\n📽️ Video Production — ₹28,000\n🤖 AI Tools — ₹18,000\n📊 Meta Ads — ₹20,000\n📱 Creator Academy — ₹24,000\n\n✅ EMI options available\n✅ Includes studio access + certificate\n✅ FREE demo class before joining\n\nCall us for current offers & discounts! 📞`,
  },
  {
    keys: ['course', 'courses', 'program', 'subject', 'curriculum', 'learn', 'teach', 'syllabus', 'what'],
    answer: `We offer **6 Professional Courses:**\n\n1️⃣ Video Editing (Premiere Pro, After Effects, DaVinci)\n2️⃣ Graphic Designing (Photoshop, Illustrator, Canva)\n3️⃣ Video Production (Camera, Lighting, Studio)\n4️⃣ AI Tools for Creators (ChatGPT, Midjourney, Runway)\n5️⃣ Meta Ads Mastery (Facebook & Instagram Ads)\n6️⃣ Creator Academy (YouTube Growth + Personal Brand)\n\nAll courses: **3 months · 100% offline · Portfolio-first**`,
  },
  {
    keys: ['contact', 'phone', 'call', 'number', 'email', 'reach', 'support'],
    answer: `📞 **Call/WhatsApp:** 09950683442\n📧 **Email:** hello@bawraskillhouse.com\n\n**Office Hours:**\nMon–Sat: 9 AM – 7 PM\nSunday: 10 AM – 2 PM\n\nOur team responds to WhatsApp messages within 10 minutes! 💬`,
  },
  {
    keys: ['batch', 'next batch', 'start', 'starting', 'new batch', 'available'],
    answer: `🔥 **Next Batch Starts Very Soon!**\n\nNew batches start **every month**. Currently only a few seats are remaining.\n\nBook your FREE demo class now to:\n✅ See the campus\n✅ Meet the mentor\n✅ Understand the curriculum\n✅ Reserve your seat\n\nDon't wait — seats fill fast!`,
  },
  {
    keys: ['certificate', 'certification', 'degree', 'diploma', 'placement', 'job', 'career', 'salary', 'work', 'internship'],
    answer: `🏅 **Yes, you get a certificate!**\nBawra Skill House certificate + a real portfolio of work.\n\n💼 **Placement Support:**\n• Agency tie-ups for job referrals\n• Freelance client connections\n• CV building & interview prep\n• Alumni WhatsApp community (1000+ creators)\n\n**Average salary after course:**\n• Fresher Video Editor: ₹20K–₹40K/month\n• Freelancer: ₹40K–₹80K/month\n• Agency Editor: ₹30K–₹60K/month`,
  },
  {
    keys: ['founder', 'rawal', 'teacher', 'mentor', 'who', 'instructor', 'rawal singh'],
    answer: `🎯 **Rawal Singh** — Founder, Bawra Skill House\n\n✅ 500,000+ YouTube Subscribers\n✅ Silver Play Button Winner\n✅ PM Modi — Personal Invite\n✅ Creator Nation Award Winner\n✅ Founder, Bawra Digitals Agency (25+ team)\n✅ Featured in National Media\n\nHe built everything from scratch with zero mentors — and now he's YOUR mentor! 🔥`,
  },
  {
    keys: ['hi', 'hello', 'hey', 'namaste', 'hii', 'helo'],
    answer: `Hey there! 👋 Welcome to **Bawra Skill House** — Rajasthan's #1 Creator School!\n\nI'm **Bawra Bot**, your guide. I can help you with:\n• Course details & fees\n• Enrollment process\n• Batch timings & schedule\n• Campus locations\n• Founder information\n\nWhat would you like to know? 😊`,
  },
]

const QUICK_REPLIES = [
  { label: '💰 Course Fees', q: 'What are the course fees?' },
  { label: '📅 Schedule & Timings', q: 'What are the class timings?' },
  { label: '📍 Our Locations', q: 'Where are your campuses?' },
  { label: '🎓 Courses Offered', q: 'What courses do you offer?' },
  { label: '✍️ How to Enroll', q: 'How can I enroll?' },
  { label: '🚀 Next Batch', q: 'When does the next batch start?' },
]

const FALLBACK = `I'm not sure about that specifically, but our team can answer anything! 😊\n\n📞 **Call/WhatsApp:** 09950683442\n\nOr click the WhatsApp button to chat directly — we reply within minutes!`

function findAnswer(text) {
  const lower = text.toLowerCase()
  for (const item of KB) {
    if (item.keys.some(k => lower.includes(k))) return item.answer
  }
  return FALLBACK
}

function formatMessage(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>')
}

let msgId = 0

export default function BawraBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: msgId++, role: 'bot',
      text: "Hi! 👋 I'm **Bawra Bot** — your guide to Bawra Skill House!\n\nAsk me anything about courses, fees, timings, or enrollment. I'm here to help! 🎬",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [hasNew, setHasNew] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) { setHasNew(false); setTimeout(() => inputRef.current?.focus(), 300) }
  }, [open])

  const sendMessage = (text) => {
    if (!text.trim()) return
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    setMessages(m => [...m, { id: msgId++, role: 'user', text, time: now }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      const answer = findAnswer(text)
      setMessages(m => [...m, { id: msgId++, role: 'bot', text: answer, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])
      if (!open) setHasNew(true)
    }, 900 + Math.random() * 600)
  }

  const handleKey = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input) } }

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="bot-panel"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bot-header">
              <div className="bot-header-left">
                <div className="bot-avatar-big">
                  <span>🤖</span>
                  <div className="bot-online-dot" />
                </div>
                <div>
                  <div className="bot-name">Bawra Bot</div>
                  <div className="bot-status">
                    <span className="bot-status-dot" />
                    Always online · Replies instantly
                  </div>
                </div>
              </div>
              <button className="bot-close" onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="bot-messages">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  className={`bot-msg-wrap ${msg.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  {msg.role === 'bot' && (
                    <div className="bot-msg-avatar">🤖</div>
                  )}
                  <div className="bot-msg-bubble">
                    <div
                      className="bot-msg-text"
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                    <div className="bot-msg-time">{msg.time}</div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    className="bot-msg-wrap bot"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="bot-msg-avatar">🤖</div>
                    <div className="bot-typing">
                      <span /><span /><span />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="bot-quick">
              {QUICK_REPLIES.map((qr, i) => (
                <motion.button
                  key={i}
                  className="bot-qr"
                  onClick={() => sendMessage(qr.q)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {qr.label}
                </motion.button>
              ))}
            </div>

            {/* Input */}
            <div className="bot-input-row">
              <input
                ref={inputRef}
                className="bot-input"
                placeholder="Ask anything about courses, fees, timing..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
              />
              <motion.button
                className="bot-send"
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </motion.button>
            </div>

            {/* Footer */}
            <div className="bot-footer">
              Powered by Bawra Skill House · <a href="https://wa.me/919950683442" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Float trigger */}
      <motion.button
        className="bot-float"
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        animate={open ? {} : { boxShadow: ['0 4px 20px rgba(255,107,0,.4)', '0 8px 36px rgba(255,107,0,.65)', '0 4px 20px rgba(255,107,0,.4)'] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Open Bawra Bot"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} style={{ fontSize: '1.1rem' }}>
              ✕
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.2 }}>
              🤖
            </motion.span>
          )}
        </AnimatePresence>
        {hasNew && <span className="bot-badge">1</span>}
        <div className="bot-float-label">Bawra Bot</div>
      </motion.button>
    </>
  )
}
