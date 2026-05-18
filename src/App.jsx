import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Career from './pages/Career'
import Why from './pages/Why'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'


// Service Pages
import Seo from './pages/services/Seo'
import WebDevelopment from './pages/services/WebDevelopment'
import PerformanceMarketing from './pages/services/PerformanceMarketing'
import SocialMediaMarketing from './pages/services/SocialMediaMarketing'
import GoogleAds from './pages/services/GoogleAds'
import ReviewServices from './pages/services/ReviewServices'
import PublicRelations from './pages/services/PublicRelations'
import TermsConditions from './pages/TermsConditions'


gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [dark, setDark] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const saved = localStorage.getItem('theme')

    if (saved) {
      setDark(saved === 'dark')
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

    gsap.fromTo(
      '.page-content',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      }
    )
  }, [location.pathname])

  return (
    <div
      className={`${dark ? 'bg-[#050811] text-white' : 'bg-[#f8fafc] text-gray-900'
        } min-h-screen transition-colors duration-500`}
    >
      <Navbar dark={dark} setDark={setDark} isHome={isHome} />

      <div className={`page-content ${!isHome ? 'pt-[70px]' : ''}`}>
        <Routes>
          <Route path="/" element={<Home dark={dark} />} />
          <Route path="/about" element={<About dark={dark} />} />
          <Route path="/career" element={<Career dark={dark} />} />
          <Route path="/why" element={<Why dark={dark} />} />
          <Route path="/contact" element={<Contact dark={dark} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy dark={dark} />} />
          <Route path="/terms-and-conditions" element={<TermsConditions dark={dark} />} />



          {/* Service Routes */}
          <Route path="/services" element={<Services dark={dark} />} />
          <Route path="/services/seo" element={<Seo dark={dark} />} />
          <Route path="/services/web-development" element={<WebDevelopment dark={dark} />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing dark={dark} />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing dark={dark} />} />
          <Route path="/services/google-ads" element={<GoogleAds dark={dark} />} />
          <Route path="/services/review-and-services" element={<ReviewServices dark={dark} />} />
          <Route path="/services/public-relations" element={<PublicRelations dark={dark} />} />
        </Routes>
      </div>
      <Footer dark={dark} />
    </div>
  )
}
