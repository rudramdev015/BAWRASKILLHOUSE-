import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Stats from './components/Stats'
import NotJustCourse from './components/NotJustCourse'
import BawraAdvantage from './components/BawraAdvantage'
import ToolsMastery from './components/ToolsMastery'
import LiveClass from './components/LiveClass'
import FeaturedCourses from './components/FeaturedCourses'
import OurWork from './components/OurWork'
import CourseFeatures from './components/CourseFeatures'
import AllCourses from './components/AllCourses'
import Founder from './components/Founder'
import Journey from './components/Journey'
import WhyUs from './components/WhyUs'
import Awards from './components/Awards'
import Offices from './components/Offices'
import Testimonials from './components/Testimonials'
import LeadForm from './components/LeadForm'
import CTA from './components/CTA'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'
import Preloader from './components/Preloader'
import BawraBot from './components/BawraBot'
import './index.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <Navbar />
      <Hero />
      <TrustStrip />
      <Stats />
      <NotJustCourse />
      <BawraAdvantage />
      <ToolsMastery />
      <LiveClass />
      <FeaturedCourses />
      <OurWork />
      <CourseFeatures />
      <AllCourses />
      <Founder />
      <Journey />
      <WhyUs />
      <Awards />
      <Offices />
      <Testimonials />
      <LeadForm />
      <CTA />
      <Footer />
      <StickyBar />
      <BawraBot />

      {/* Floating WhatsApp Button — Clean white icon on green */}
      <a
        href="https://wa.me/919950683442"
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp — 09950683442"
        title="WhatsApp: 09950683442"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.717.737 5.258 2.02 7.442L2 30l4.807-1.261A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.83-1.594l-.416-.248-4.32.987.981-4.23-.27-.432A11.472 11.472 0 014.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5z"/>
          <path d="M22.406 19.117c-.338-.17-2-.988-2.311-1.1-.31-.113-.537-.169-.763.169-.226.338-.876 1.1-1.074 1.326-.198.226-.395.254-.733.085-.338-.17-1.43-.527-2.723-1.68-1.006-.898-1.685-2.007-1.882-2.345-.198-.338-.021-.521.148-.69.152-.151.338-.395.507-.593.17-.198.226-.338.338-.563.113-.226.057-.424-.028-.593-.085-.169-.763-1.841-1.045-2.52-.275-.663-.556-.573-.763-.584-.198-.011-.423-.014-.65-.014a1.25 1.25 0 00-.904.424c-.31.338-1.187 1.16-1.187 2.83s1.216 3.282 1.385 3.51c.17.226 2.393 3.655 5.8 5.127.811.35 1.443.56 1.936.717.813.258 1.554.222 2.14.135.653-.099 2-.818 2.283-1.607.282-.789.282-1.465.198-1.607-.085-.14-.31-.226-.649-.395z"/>
        </svg>
      </a>
    </>
  )
}
