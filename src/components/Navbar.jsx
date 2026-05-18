import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Career', path: '/career' },
  { name: 'Why Open Lens', path: '/why' },
  { name: 'Contact', path: '/contact' },
]

const serviceLinks = [
  {
    title: 'Lead Generation & Performance Marketing',
    desc: 'Meta ads, PPC, targeted ads, LinkedIn lead generation',
    path: '/services/performance-marketing',
    gradient: 'from-violet-600 to-fuchsia-600',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Social Media Marketing',
    desc: 'Facebook, Instagram, LinkedIn, Twitter, YouTube marketing',
    path: '/services/social-media-marketing',
    gradient: 'from-blue-600 to-cyan-500',
    icon: 'M7 8h10M7 12h4m6 0h2M7 16h2m10 0h-6',
  },
  {
    title: 'Google Ads',
    desc: 'PPC, CPC, display ads, search ads, app install ads',
    path: '/services/google-ads',
    gradient: 'from-emerald-600 to-teal-500',
    icon: 'M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z',
  },
  {
    title: 'SEO',
    desc: 'On-page, off-page, audit, local SEO, technical SEO',
    path: '/services/seo',
    gradient: 'from-lime-600 to-emerald-500',
    icon: 'M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z',
  },
  {
    title: 'Review and Services',
    desc: 'Customer feedback, ratings, testimonials, reporting',
    path: '/services/review-and-services',
    gradient: 'from-amber-500 to-orange-600',
    icon: 'M11.48 3.5l2.09 4.24 4.68.68-3.39 3.3.8 4.66-4.18-2.2-4.18 2.2.8-4.66-3.39-3.3 4.68-.68z',
  },
  {
    title: 'Public Relations',
    desc: 'Press releases, media outreach, reputation, crisis management',
    path: '/services/public-relations',
    gradient: 'from-rose-600 to-pink-600',
    icon: 'M3 11v2a4 4 0 004 4h1l4 4v-4h3a6 6 0 000-12H7a4 4 0 00-4 4z',
  },
  {
    title: 'Software Development & Management',
    desc: 'CRM, ERP, website, app, API, full stack, UI/UX, support',
    path: '/services/web-development',
    gradient: 'from-indigo-600 to-sky-500',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
]

export default function Navbar({ dark, setDark }) {
  const navigate = useNavigate()
  const location = useLocation()
  const navRef = useRef(null)
  const dropdownRef = useRef(null)
  const closeTimer = useRef(null)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.nav-link', {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.3,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!dropdownRef.current) return

    gsap.killTweensOf(dropdownRef.current)

    if (servicesOpen) {
      gsap.set(dropdownRef.current, {
        display: 'block',
        pointerEvents: 'auto',
      })

      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -8, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.22, ease: 'power2.out' }
      )

      gsap.fromTo(
        dropdownRef.current.querySelectorAll('.dropdown-item'),
        { x: -8, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.18, stagger: 0.025, delay: 0.06 }
      )
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -8,
        scale: 0.98,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          if (dropdownRef.current) {
            gsap.set(dropdownRef.current, {
              display: 'none',
              pointerEvents: 'none',
            })
          }
        },
      })
    }
  }, [servicesOpen])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const closeServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)

    closeTimer.current = setTimeout(() => {
      setServicesOpen(false)
    }, 160)
  }

  const go = (path) => {
    if (!path) return

    navigate(path)
    setOpen(false)
    setServicesOpen(false)
  }

  const isActive = (p) => location.pathname === p
  const isServicesActive = location.pathname.startsWith('/services')

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 border-b ${dark ? 'bg-[#050811] border-gray-800' : 'bg-white border-gray-200'
        } shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 h-[70px] flex items-center justify-between">
        <button
          onClick={() => go('/')}
          className="flex items-center gap-2 group"
          onMouseEnter={(e) =>
            gsap.to(e.currentTarget.querySelector('.logo-box'), {
              scale: 1.1,
              rotate: 5,
              duration: 0.3,
            })
          }
          onMouseLeave={(e) =>
            gsap.to(e.currentTarget.querySelector('.logo-box'), {
              scale: 1,
              rotate: 0,
              duration: 0.3,
            })
          }
        >
          <div className="logo-box w-9 h-9 rounded-xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] grid place-items-center shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 4C7 4 2.7 7.1 1 12c1.7 4.9 6 8 11 8s9.3-3.1 11-8c-1.7-4.9-6-8-11-8zm0 9a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
          </div>

          <span className={`text-[22px] font-black ${dark ? 'text-white' : 'text-black'}`}>
            Open<span className="text-[#e81c7e]">Lens</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          <div className="nav-link">
            <button
              onClick={() => go('/')}
              className={`px-4 py-2 rounded-lg text-[15px] font-medium transition ${isActive('/')
                ? 'text-[#e81c7e]'
                : dark
                  ? 'text-gray-300 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-black hover:bg-black/5'
                }`}
            >
              Home
            </button>
          </div>

          <div
            className="relative nav-link"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              onFocus={openServices}
              className={`px-4 py-2 rounded-lg text-[15px] font-medium transition flex items-center gap-1 ${isServicesActive
                ? 'text-[#e81c7e]'
                : dark
                  ? 'text-gray-300 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-black hover:bg-black/5'
                }`}
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              ref={dropdownRef}
              style={{ display: 'none', pointerEvents: 'none' }}
              className="absolute left-0 top-full z-50 w-[420px] pt-2"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <div
                className={`rounded-2xl border shadow-2xl p-2 ${dark ? 'bg-[#0b1020] border-gray-700' : 'bg-white border-gray-200'
                  }`}
              >
                {serviceLinks.map((s) => (
                  <button
                    key={s.title}
                    onClick={() => go(s.path)}
                    className={`dropdown-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition ${dark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                      }`}
                  >
                    <span className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.gradient} grid place-items-center shrink-0`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                      </svg>
                    </span>

                    <div className="min-w-0">
                      <div className={`text-[14px] font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                        {s.title}
                      </div>
                      <div className={`text-[12px] leading-snug ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {s.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {links.slice(1).map((l) => (
            <div key={l.name} className="nav-link">
              <button
                onClick={() => go(l.path)}
                className={`px-4 py-2 rounded-lg text-[15px] font-medium transition ${isActive(l.path)
                  ? 'text-[#e81c7e]'
                  : dark
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-gray-700 hover:text-black hover:bg-black/5'
                  }`}
              >
                {l.name}
              </button>
            </div>
          ))}
        </nav>

        {/*  */}

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className={`w-9 h-9 grid place-items-center rounded-lg border transition ${dark
                ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black'
              }`}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <a
            href="https://wa.me/+91 827 108 4686"
            target="_blank"
            rel="noreferrer"
            className={`hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-semibold transition ${dark
                ? 'border-green-500/30 bg-green-500/10 text-green-300 hover:bg-green-500/20'
                : 'border-green-500/30 bg-green-50 text-green-700 hover:bg-green-100'
              }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.86 11.86 0 0012.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 005.8 1.48h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.49-8.43zM12.09 21.8h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.83 9.83 0 01-1.5-5.26c0-5.45 4.43-9.88 9.88-9.88a9.8 9.8 0 016.98 2.9 9.8 9.8 0 012.9 6.98c0 5.45-4.44 9.88-9.89 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
            </svg>
            +91 827 108 4686
          </a>

          <button
            onClick={() => go('/contact')}
            className="hidden sm:block px-4 py-2 rounded-lg bg-[#e81c7e] text-white text-sm font-semibold hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20 transition-all"
          >
            Get Proposal
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 grid place-items-center">
            ...
          </button>
        </div>

        {/*  */}
      </div>

      {open && (
        <div className={`md:hidden border-t ${dark ? 'bg-[#050811] border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
            <button
              onClick={() => go('/')}
              className={`w-full text-left px-3 py-2.5 rounded-lg ${isActive('/') ? 'bg-[#e81c7e]/10 text-[#e81c7e]' : dark ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              Home
            </button>

            <div className="pt-2">
              <div className={`px-3 py-1 text-[12px] font-semibold uppercase tracking-wider ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                Services
              </div>

              {serviceLinks.map((s) => (
                <button
                  key={s.title}
                  onClick={() => go(s.path)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-[14px] ${dark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  • {s.title}
                </button>
              ))}
            </div>


{/* mobile */}
<a
  href="https://wa.me/+91 827 108 4686"
  target="_blank"
  rel="noreferrer"
  className={`block w-full px-3 py-2.5 rounded-lg text-[14px] font-semibold ${
    dark ? 'text-green-300 hover:bg-gray-800' : 'text-green-700 hover:bg-green-50'
  }`}
>
  WhatsApp: +91 92893 71311
</a>

{/*  */}


            {links.slice(1).map((l) => (
              <button
                key={l.name}
                onClick={() => go(l.path)}
                className={`w-full text-left px-3 py-2.5 rounded-lg ${isActive(l.path)
                  ? 'bg-[#e81c7e]/10 text-[#e81c7e]'
                  : dark
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
