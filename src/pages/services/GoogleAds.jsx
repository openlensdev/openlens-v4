import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Eye,
  FileText,
  Gauge,
  Globe2,
  LayoutDashboard,
  LineChart,
  Megaphone,
  MousePointerClick,
  Search,
  Settings,
  ShieldCheck,
  Target,
  Timer,
  TrendingUp,
  WalletCards,
  Zap,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const campaignTypes = [
  {
    title: 'Search Ads',
    desc: 'Show your business when customers actively search for your products or services.',
    icon: Search,
  },
  {
    title: 'Display Ads',
    desc: 'Reach audiences across websites and apps with visual brand campaigns.',
    icon: LayoutDashboard,
  },
  {
    title: 'Shopping Ads',
    desc: 'Promote products with purchase-focused campaigns built for ecommerce visibility.',
    icon: WalletCards,
  },
  {
    title: 'YouTube Ads',
    desc: 'Tell your story with video campaigns that build reach, traffic, and conversions.',
    icon: Megaphone,
  },
  {
    title: 'Remarketing',
    desc: 'Reconnect with previous visitors and bring warm audiences back to convert.',
    icon: Target,
  },
]

const choosePoints = [
  'Strategic campaign planning and execution',
  'Advanced keyword and competitor research',
  'High-converting ad creatives and copy',
  'Continuous monitoring and optimization',
  'Transparent reporting and insights',
  'ROI-driven approach',
]

const visibilityPoints = [
  'Certified SEM Experts',
  'Assured Confidentiality',
  'Transparent Reporting',
]

const insightPoints = [
  'Get Immediate Visibility',
  'Highly Targeted Traffic',
  'Budget Control',
  'Measurable Results',
  'Highly Flexible and Customizable',
]

const stats = [
  { value: 'PPC', label: 'Campaigns built for clicks that convert' },
  { value: 'ROAS', label: 'Return-focused optimization and reporting' },
  { value: 'Live', label: 'Fast launch after budget and keywords are ready' },
]

function GoogleAdsSvg() {
  return (
    <svg viewBox="0 0 620 480" className="w-full max-w-[620px]" aria-hidden="true">
      <defs>
        <linearGradient id="gaBlue" x1="0" x2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="gaGreen" x1="0" x2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="gaPink" x1="0" x2="1">
          <stop offset="0%" stopColor="#e81c7e" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
      </defs>

      <circle className="ga-orbit" cx="310" cy="240" r="190" fill="none" stroke="url(#gaBlue)" strokeWidth="2" strokeDasharray="10 16" opacity="0.45" />

      <rect x="116" y="92" width="388" height="276" rx="32" fill="currentColor" opacity="0.08" />
      <rect x="150" y="128" width="320" height="48" rx="16" fill="currentColor" opacity="0.14" />
      <circle cx="176" cy="152" r="6" fill="#ef4444" />
      <circle cx="198" cy="152" r="6" fill="#f59e0b" />
      <circle cx="220" cy="152" r="6" fill="#22c55e" />

      <g className="ga-search" transform="translate(210 240)">
        <circle r="52" fill="none" stroke="url(#gaBlue)" strokeWidth="13" />
        <path d="M38 38L88 88" stroke="url(#gaBlue)" strokeWidth="15" strokeLinecap="round" />
      </g>

      <g className="ga-bars">
        <rect x="340" y="272" width="26" height="48" rx="8" fill="url(#gaPink)" />
        <rect x="382" y="238" width="26" height="82" rx="8" fill="url(#gaGreen)" />
        <rect x="424" y="196" width="26" height="124" rx="8" fill="url(#gaBlue)" />
      </g>

      <path className="ga-line" d="M154 328C230 292 260 326 332 252C392 190 430 190 492 128" fill="none" stroke="url(#gaPink)" strokeWidth="7" strokeLinecap="round" strokeDasharray="520" />

      <g className="ga-cursor" transform="translate(466 122)">
        <path d="M0 0L54 28L30 37L20 64Z" fill="white" opacity="0.95" />
        <path d="M30 37L45 68" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      </g>

      <g className="ga-badge" transform="translate(110 352)">
        <circle r="40" fill="url(#gaGreen)" />
        <path d="M-15 0l10 11L17-15" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <circle className="ga-dot" cx="92" cy="140" r="7" fill="#22c55e" />
      <circle className="ga-dot" cx="530" cy="338" r="8" fill="#f59e0b" />
      <circle className="ga-dot" cx="316" cy="56" r="6" fill="#38bdf8" />
    </svg>
  )
}

export default function GoogleAds({ dark }) {
  const root = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.from('.ga-hero-copy > *', {
        y: 34,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.ga-visual', {
        y: 34,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })

      gsap.to('.ga-orbit', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.ga-search, .ga-bars, .ga-badge', {
        y: -10,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.to('.ga-cursor', {
        x: 16,
        y: -12,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        '.ga-line',
        { strokeDashoffset: 520 },
        {
          strokeDashoffset: 0,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      )

      gsap.to('.ga-dot, .floating-card', {
        scale: 1.08,
        y: -8,
        transformOrigin: '50% 50%',
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.utils.toArray('.ga-reveal').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 84%',
          },
          y: 42,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        })
      })

      gsap.from('.campaign-card', {
        scrollTrigger: {
          trigger: '.campaign-grid',
          start: 'top 82%',
        },
        y: 34,
        opacity: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={root}
      className={`min-h-screen overflow-hidden ${
        dark ? 'bg-[#050811] text-white' : 'bg-[#f8fafc] text-gray-950'
      }`}
    >
      <section className={`relative overflow-hidden ${dark ? 'bg-[#050811]' : 'bg-white'}`}>
        <div
          className={`absolute inset-0 ${
            dark
              ? 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(59,130,246,0.22),transparent_60%)]'
              : 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(59,130,246,0.12),transparent_60%)]'
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
          <div className="ga-hero-copy">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-500">
              <MousePointerClick className="h-4 w-4" />
              Google Ads
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Drive traffic, generate leads, and grow with targeted ads.
            </h1>

            <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              We create and manage highly targeted Google Ads campaigns designed
              to maximize visibility, improve conversions, and deliver measurable ROI.
            </p>

            <p className={`mt-4 max-w-2xl leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              From keyword research and ad copywriting to bid management,
              campaign optimization, and performance tracking, every step is
              executed with precision.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-6 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
              >
                Launch Campaign
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => document.getElementById('google-campaigns')?.scrollIntoView({ behavior: 'smooth' })}
                className={`rounded-xl border px-6 py-3 font-bold transition ${
                  dark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                }`}
              >
                View Campaigns
              </button>
            </div>
          </div>

          <div className="ga-visual relative text-zinc-900 dark:text-white">
            <GoogleAdsSvg />

            <div className={`floating-card absolute left-4 top-8 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-xs font-bold opacity-60">Visibility</p>
                  <p className="text-lg font-black">Immediate</p>
                </div>
              </div>
            </div>

            <div className={`floating-card absolute bottom-10 right-4 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <LineChart className="h-5 w-5 text-[#e81c7e]" />
                <div>
                  <p className="text-xs font-bold opacity-60">Optimization</p>
                  <p className="text-lg font-black">ROAS-first</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-reveal mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`rounded-[2rem] border p-6 text-center ${
                dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'
              }`}
            >
              <p className="text-4xl font-black text-blue-500">{item.value}</p>
              <p className={`mt-2 text-sm font-semibold ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="google-campaigns" className="ga-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Search, Display, Shopping, YouTube, and Remarketing campaigns
          </h2>
          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            We design, manage, and optimize campaigns across the Google Ads
            ecoscosystem to bring the right audience to your business at the right time.
          </p>
        </div>

        <div className="campaign-grid mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {campaignTypes.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`campaign-card rounded-3xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-blue-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-blue-300'
                }`}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-black">{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="ga-reveal mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
            alt="Google Ads analytics dashboard"
            className="h-full min-h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Actionable insights</p>
            <h3 className="mt-2 text-3xl font-black">We turn campaign data into growth decisions.</h3>
          </div>
        </div>

        <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
          <Target className="h-10 w-10 text-blue-500" />
          <h2 className="mt-5 text-3xl font-black">
            Why choose our Google Ads services?
          </h2>
          <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our approach is simple: deliver measurable results. We focus on
            improving click-through rates, reducing cost per acquisition, and
            maximizing your return on ad spend.
          </p>

          <div className="mt-6 grid gap-3">
            {choosePoints.map((item) => (
              <div key={item} className={`flex items-center gap-3 rounded-xl p-3 ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <BadgeCheck className="h-4 w-4 shrink-0 text-[#e81c7e]" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ga-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className={`rounded-[2rem] border p-6 sm:p-8 lg:p-10 ${dark ? 'border-white/10 bg-white/5' : 'border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50'}`}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Eye className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-3xl font-black">
                Maximize your visibility today
              </h2>
              <p className={`mt-4 leading-8 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                Getting your site to the top of Google organically takes time.
                Paid search advertising provides instant top-page visibility once
                your budget, keywords, and landing pages are ready.
              </p>
            </div>

            <div className="grid gap-3">
              {visibilityPoints.map((item) => (
                <div key={item} className={`flex items-center gap-3 rounded-xl p-4 ${dark ? 'bg-[#050811]' : 'bg-white'}`}>
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#e81c7e]" />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ga-reveal mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
          <BarChart3 className="h-10 w-10 text-blue-500" />
          <h2 className="mt-5 text-3xl font-black">
            We turn information into actionable insights
          </h2>
          <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            As a leading search engine marketing agency, we drive immediate,
            highly targeted traffic to your website by placing ads when potential
            customers are actively searching for your selected keywords.
          </p>
        </div>

        <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
          <Settings className="h-10 w-10 text-blue-500" />
          <h2 className="mt-5 text-3xl font-black">
            Flexible control over every campaign
          </h2>
          <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            We provide control over ad creatives, placements, scheduling, and
            budget allocation, allowing flexibility and efficiency at every stage.
          </p>

          <div className="mt-6 grid gap-3">
            {insightPoints.map((item) => (
              <div key={item} className={`flex items-center gap-3 rounded-xl p-3 ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <Gauge className="h-4 w-4 shrink-0 text-[#e81c7e]" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ga-reveal mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6">
        <div className={`rounded-[2rem] border p-6 text-center sm:p-8 lg:p-10 ${dark ? 'border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10' : 'border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50'}`}>
          <Timer className="mx-auto h-10 w-10 text-blue-500" />
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Ready to get your ads live?
          </h2>
          <p className={`mx-auto mt-4 max-w-3xl leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            Drive qualified traffic, increase conversions, and grow your business
            with professional Google Ads campaign management.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-7 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
          >
            Start Google Ads Campaign
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}