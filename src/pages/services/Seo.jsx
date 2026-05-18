import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CircleDollarSign,
  Eye,
  FileSearch,
  Globe2,
  Headphones,
  Link2,
  MapPin,
  PenTool,
  Search,
  Settings,
  ShieldAlert,
  ShoppingCart,
  Target,
  TrendingUp,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    title: 'Sustainable Growth',
    desc: 'Long-term SEO results that drive steady organic traffic without continuous ad spending.',
    icon: TrendingUp,
  },
  {
    title: 'Boosted Brand Visibility',
    desc: 'Higher search rankings that improve credibility, trust, and authority for your brand.',
    icon: Eye,
  },
  {
    title: 'Cost-Effective Marketing',
    desc: 'A budget-friendly digital growth channel with higher ROI and better conversions.',
    icon: CircleDollarSign,
  },
]

const seoServices = [
  {
    title: 'Technical SEO',
    desc: 'Speed, crawlability, indexing, schema, Core Web Vitals, and technical health optimization.',
    icon: Settings,
  },
  {
    title: 'SEO Audit',
    desc: 'Detailed website audit covering technical issues, content gaps, rankings, and opportunities.',
    icon: FileSearch,
  },
  {
    title: 'On-Page SEO',
    desc: 'Meta tags, headings, internal links, content structure, keyword mapping, and page optimization.',
    icon: Search,
  },
  {
    title: 'Off-Page SEO',
    desc: 'Authority building, quality backlinks, brand mentions, citations, and trust signals.',
    icon: Link2,
  },
  {
    title: 'Content Marketing',
    desc: 'SEO-focused content planning, blogs, landing pages, topic clusters, and content development.',
    icon: PenTool,
  },
  {
    title: 'Local SEO',
    desc: 'Google Business Profile, maps visibility, local keywords, reviews, and location-based ranking.',
    icon: MapPin,
  },
]

const focusPoints = [
  'Conversion-Focused Optimization',
  'Transparent Reporting',
  'Hassle-Free Support',
]

const seoTypes = [
  {
    title: 'SEO for Start-ups',
    label: 'Results that fit your needs',
    desc: 'Build search visibility from the foundation with smart keyword strategy, technical setup, and growth-focused content.',
    icon: Target,
  },
  {
    title: 'SEO for Local Business',
    label: 'Appear in local search results',
    desc: 'Rank better in local searches, maps, and nearby customer discovery moments.',
    icon: MapPin,
  },
  {
    title: 'SEO Penalty Removal',
    label: 'Honest advice for Google penalties',
    desc: 'Identify harmful issues, clean up risky signals, and rebuild your website reputation.',
    icon: ShieldAlert,
  },
  {
    title: 'E-Commerce SEO Services',
    label: 'Profits for your business',
    desc: 'Optimize category pages, product pages, technical structure, and purchase-focused search intent.',
    icon: ShoppingCart,
  },
  {
    title: 'International SEO Services',
    label: 'Selling worldwide',
    desc: 'Target global markets with multilingual, region-specific, and scalable international SEO planning.',
    icon: Globe2,
  },
]

const stats = [
  { value: 'SEO', label: 'Technical, local, content, and authority growth' },
  { value: '24/7', label: 'Monitoring and performance awareness' },
  { value: 'ROI', label: 'Organic growth built for measurable results' },
]

function SeoSvg() {
  return (
    <svg viewBox="0 0 620 480" className="w-full max-w-[620px]" aria-hidden="true">
      <defs>
        <linearGradient id="seoPink" x1="0" x2="1">
          <stop offset="0%" stopColor="#e81c7e" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <linearGradient id="seoGreen" x1="0" x2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      <circle className="seo-orbit" cx="310" cy="240" r="190" fill="none" stroke="url(#seoPink)" strokeWidth="2" strokeDasharray="10 16" opacity="0.45" />

      <rect x="120" y="90" width="380" height="265" rx="32" fill="currentColor" opacity="0.08" />
      <rect x="154" y="126" width="310" height="46" rx="16" fill="currentColor" opacity="0.14" />
      <circle cx="180" cy="149" r="6" fill="#ef4444" />
      <circle cx="202" cy="149" r="6" fill="#f59e0b" />
      <circle cx="224" cy="149" r="6" fill="#22c55e" />

      <g className="seo-search" transform="translate(220 236)">
        <circle r="58" fill="none" stroke="url(#seoGreen)" strokeWidth="14" />
        <path d="M42 42L92 92" stroke="url(#seoGreen)" strokeWidth="16" strokeLinecap="round" />
      </g>

      <g className="seo-chart">
        <rect x="350" y="250" width="26" height="58" rx="8" fill="url(#seoPink)" />
        <rect x="392" y="220" width="26" height="88" rx="8" fill="url(#seoGreen)" />
        <rect x="434" y="184" width="26" height="124" rx="8" fill="url(#seoPink)" />
      </g>

      <path className="seo-line" d="M160 330C230 270 280 328 342 250C392 188 430 192 486 136" fill="none" stroke="url(#seoPink)" strokeWidth="7" strokeLinecap="round" strokeDasharray="520" />

      <g className="seo-badge" transform="translate(492 130)">
        <circle r="42" fill="url(#seoGreen)" />
        <path d="M-17 0l11 12L19-16" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <circle className="seo-dot" cx="104" cy="152" r="7" fill="#22c55e" />
      <circle className="seo-dot" cx="526" cy="342" r="8" fill="#f59e0b" />
      <circle className="seo-dot" cx="318" cy="58" r="6" fill="#38bdf8" />
    </svg>
  )
}

export default function Seo({ dark }) {
  const root = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.from('.seo-hero-copy > *', {
        y: 34,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.seo-visual', {
        y: 34,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })

      gsap.to('.seo-orbit', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.seo-search, .seo-chart, .seo-badge', {
        y: -10,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        '.seo-line',
        { strokeDashoffset: 520 },
        {
          strokeDashoffset: 0,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      )

      gsap.to('.seo-dot, .floating-card', {
        scale: 1.08,
        y: -8,
        transformOrigin: '50% 50%',
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.utils.toArray('.seo-reveal').forEach((item) => {
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

      gsap.from('.seo-card', {
        scrollTrigger: {
          trigger: '.seo-card-grid',
          start: 'top 82%',
        },
        y: 34,
        opacity: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
      })

      gsap.from('.type-card', {
        scrollTrigger: {
          trigger: '.type-grid',
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
              ? 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(34,197,94,0.22),transparent_60%)]'
              : 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(34,197,94,0.12),transparent_60%)]'
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
          <div className="seo-hero-copy">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-500">
              <Search className="h-4 w-4" />
              SEO Services
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Rise above your competitors with SEO that compounds.
            </h1>

            <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Choose Open Lens, a trusted SEO agency dedicated to strengthening
              your website reputation and improving visibility across search engines.
            </p>

            <p className={`mt-4 max-w-2xl leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              We help your business stand out and rank above competitors with
              strategic, data-driven SEO solutions built for sustainable growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-6 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
              >
                Get SEO Audit
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => document.getElementById('seo-services')?.scrollIntoView({ behavior: 'smooth' })}
                className={`rounded-xl border px-6 py-3 font-bold transition ${
                  dark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                }`}
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="seo-visual relative text-zinc-900 dark:text-white">
            <SeoSvg />

            <div className={`floating-card absolute left-4 top-8 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-xs font-bold opacity-60">Organic Growth</p>
                  <p className="text-lg font-black">Sustainable</p>
                </div>
              </div>
            </div>

            <div className={`floating-card absolute bottom-10 right-4 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-[#e81c7e]" />
                <div>
                  <p className="text-xs font-bold opacity-60">Reports</p>
                  <p className="text-lg font-black">Transparent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-reveal mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`rounded-3xl border p-6 ${
                  dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-lg'
                }`}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="seo-services" className="seo-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Comprehensive SEO services for measurable growth
          </h2>
          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our expertise includes technical SEO, audits, on-page and off-page
            optimization, content marketing, link building, local SEO, and more.
          </p>
        </div>

        <div className="seo-card-grid mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {seoServices.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`seo-card rounded-3xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-emerald-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-emerald-300'
                }`}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white">
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

      <section className="seo-reveal mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
            alt="SEO analytics and search growth strategy"
            className="h-full min-h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Search growth</p>
            <h3 className="mt-2 text-3xl font-black">Rank better, attract better traffic, convert better.</h3>
          </div>
        </div>

        <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
          <Target className="h-10 w-10 text-emerald-500" />
          <h2 className="mt-5 text-3xl font-black">
            Our aim is for your brand to succeed online
          </h2>
          <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our objective goes beyond improving search visibility. We focus on
            driving high-quality traffic that converts into measurable business
            results through technical excellence, creative content strategy, and
            data-driven decision-making.
          </p>

          <div className="mt-6 grid gap-3">
            {focusPoints.map((item) => (
              <div key={item} className={`flex items-center gap-3 rounded-xl p-3 ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <BadgeCheck className="h-4 w-4 shrink-0 text-[#e81c7e]" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            SEO solutions for every growth stage
          </h2>
          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore our comprehensive range of SEO services and discover how we
            can elevate your online presence.
          </p>
        </div>

        <div className="type-grid mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {seoTypes.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`type-card rounded-3xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-emerald-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-emerald-300'
                }`}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-black">{item.title}</h3>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-500">
                  {item.label}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="seo-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`rounded-[2rem] border p-6 text-center ${
                dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'
              }`}
            >
              <p className="text-4xl font-black text-emerald-500">{item.value}</p>
              <p className={`mt-2 text-sm font-semibold ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="seo-reveal mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6">
        <div className={`rounded-[2rem] border p-6 text-center sm:p-8 lg:p-10 ${dark ? 'border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10' : 'border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50'}`}>
          <Headphones className="mx-auto h-10 w-10 text-emerald-500" />
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Ready to grow your organic traffic?
          </h2>
          <p className={`mx-auto mt-4 max-w-3xl leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            Partner with Open Lens to experience performance-driven SEO strategies
            that deliver sustainable results and long-term success.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-7 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
          >
            Start SEO Growth
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}