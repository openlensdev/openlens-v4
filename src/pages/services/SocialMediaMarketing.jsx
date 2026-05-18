import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Hash,
  Image,
  Megaphone,
  MessageCircle,
  Paintbrush,
  Share2,
  Target,
  Users,
  Video,
  Zap,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const platforms = [
  { title: 'Facebook Ads', desc: 'Awareness, traffic, retargeting, and lead generation campaigns.', icon: Share2 },
  { title: 'Instagram Ads', desc: 'Reels, stories, feed ads, creators, and visual-first growth.', icon: Image },
  { title: 'LinkedIn Ads', desc: 'B2B campaigns for founders, teams, and decision-makers.', icon: Users },
  { title: 'Twitter Ads', desc: 'Conversation-led visibility and campaign amplification.', icon: MessageCircle },
  { title: 'YouTube SEO & Marketing', desc: 'Video optimization, channel growth, and paid video campaigns.', icon: Video },
]

const benefits = [
  {
    title: 'Dedicated Resource',
    desc: 'An experienced social media manager dedicated to your business.',
    icon: Users,
  },
  {
    title: 'Customized Design',
    desc: 'Custom graphic design to showcase your brand or products.',
    icon: Paintbrush,
  },
  {
    title: 'Daily Posts',
    desc: 'Daily posts from Monday to Sunday, optimized for the best engagement times.',
    icon: CalendarDays,
  },
  {
    title: 'In-depth Understanding',
    desc: 'In-depth understanding of your business and industry to produce relevant content.',
    icon: Target,
  },
  {
    title: 'Tailored Hashtags',
    desc: 'Tailored hashtags to increase post discovery on social media.',
    icon: Hash,
  },
]

const stats = [
  { value: '5+', label: 'Social platforms managed' },
  { value: '7 days', label: 'Content calendar coverage' },
  { value: 'B2B/B2C', label: 'Growth strategy support' },
]

function SocialSvg() {
  return (
    <svg viewBox="0 0 560 460" className="w-full max-w-[520px]" aria-hidden="true">
      <defs>
        <linearGradient id="smPink" x1="0" x2="1">
          <stop offset="0%" stopColor="#e81c7e" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <linearGradient id="smBlue" x1="0" x2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      <circle className="sm-orbit" cx="280" cy="230" r="168" fill="none" stroke="url(#smPink)" strokeWidth="2" strokeDasharray="10 16" opacity="0.5" />
      <rect x="150" y="78" width="260" height="330" rx="38" fill="currentColor" opacity="0.08" />
      <rect x="176" y="112" width="208" height="252" rx="28" fill="currentColor" opacity="0.12" />
      <rect x="200" y="142" width="160" height="16" rx="8" fill="currentColor" opacity="0.22" />
      <rect x="200" y="176" width="118" height="12" rx="6" fill="currentColor" opacity="0.18" />

      <g className="sm-post">
        <rect x="200" y="218" width="160" height="94" rx="20" fill="url(#smBlue)" opacity="0.95" />
        <circle cx="230" cy="250" r="14" fill="white" opacity="0.9" />
        <path d="M214 292L250 262L276 284L300 258L346 292Z" fill="white" opacity="0.85" />
      </g>

      <g className="sm-like" transform="translate(96 146)">
        <circle r="42" fill="url(#smPink)" />
        <path d="M-14 4h11v22h-11zM3 24h19c6 0 8-4 9-9l3-15c1-5-2-9-7-9H15l2-10c1-5-5-8-8-4L-1-9v31c1 1 2 2 4 2z" fill="white" />
      </g>

      <g className="sm-chat" transform="translate(442 138)">
        <circle r="40" fill="url(#smBlue)" />
        <path d="M-18-10h36a8 8 0 018 8v14a8 8 0 01-8 8H0l-16 12v-12h-2a8 8 0 01-8-8V-2a8 8 0 018-8z" fill="white" />
      </g>

      <g className="sm-play" transform="translate(448 310)">
        <circle r="44" fill="url(#smPink)" />
        <path d="M-10-16l30 16-30 16z" fill="white" />
      </g>

      <circle className="sm-dot" cx="106" cy="318" r="7" fill="#22c55e" />
      <circle className="sm-dot" cx="468" cy="72" r="7" fill="#f59e0b" />
      <circle className="sm-dot" cx="286" cy="48" r="6" fill="#38bdf8" />
    </svg>
  )
}

export default function SocialMediaMarketing({ dark }) {
  const root = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.smm-copy > *', {
        y: 34,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.smm-visual', {
        y: 34,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })

      gsap.to('.sm-orbit', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 18,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.sm-post', {
        y: -12,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.sm-like, .sm-chat, .sm-play, .floating-card', {
        y: -10,
        scale: 1.04,
        transformOrigin: '50% 50%',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.to('.sm-dot', {
        scale: 1.45,
        opacity: 0.35,
        transformOrigin: '50% 50%',
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: 'power1.inOut',
      })

      gsap.to('.marquee-track', {
        xPercent: -50,
        duration: 18,
        repeat: -1,
        ease: 'none',
      })

      gsap.utils.toArray('.reveal-block').forEach((block) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 84%',
          },
          y: 42,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        })
      })

      gsap.from('.platform-card', {
        scrollTrigger: {
          trigger: '.platform-grid',
          start: 'top 82%',
        },
        y: 34,
        opacity: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
      })

      gsap.from('.benefit-card', {
        scrollTrigger: {
          trigger: '.benefit-grid',
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
              ? 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(232,28,126,0.24),transparent_60%)]'
              : 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(232,28,126,0.13),transparent_60%)]'
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
          <div className="smm-copy">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e81c7e]/20 bg-[#e81c7e]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#e81c7e]">
              <Share2 className="h-4 w-4" />
              Social Media Marketing
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Build a brand people follow, trust, and buy from.
            </h1>

            <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Harness the full potential of social media marketing to elevate
              your brand, business, or service and transform your online presence.
            </p>

            <p className={`mt-4 max-w-2xl leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              We craft customized, data-backed social media strategies for
              businesses of all sizes, ensuring maximum engagement, visibility,
              and growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-6 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
              >
                Start Social Growth
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => document.getElementById('why-social')?.scrollIntoView({ behavior: 'smooth' })}
                className={`rounded-xl border px-6 py-3 font-bold transition ${
                  dark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                }`}
              >
                Why It Matters
              </button>
            </div>
          </div>

          <div className="smm-visual relative text-zinc-900 dark:text-white">
            <SocialSvg />

            <div className={`floating-card absolute left-4 top-10 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-[#e81c7e]" />
                <div>
                  <p className="text-xs font-bold opacity-60">Engagement</p>
                  <p className="text-lg font-black">+148%</p>
                </div>
              </div>
            </div>

            <div className={`floating-card absolute bottom-12 right-4 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-xs font-bold opacity-60">Content Plan</p>
                  <p className="text-lg font-black">Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`relative overflow-hidden border-y py-4 ${dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.02]'}`}>
          <div className="marquee-track flex w-max gap-4">
            {[...platforms, ...platforms].map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-bold ${
                  dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white'
                }`}
              >
                <Share2 className="h-4 w-4 text-[#e81c7e]" />
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-block mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">
            Services we provide for social media marketing
          </h2>

          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            From paid campaigns to organic content strategy, we help brands create
            platform-specific growth systems that increase visibility, engagement,
            traffic, and conversions across the channels where their audience is most active.
          </p>

          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our social media marketing services support every stage of your digital
            journey, from brand awareness and community building to lead generation,
            customer trust, and measurable business growth.
          </p>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=85"
            alt="Social media content planning dashboard"
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-5 text-gray-950 shadow-xl backdrop-blur">
            <p className="text-sm font-bold text-[#e81c7e]">Platform-first growth</p>
            <p className="mt-1 text-2xl font-black">Content, ads, analytics, and audience learning in one system.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="platform-grid grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {platforms.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`platform-card rounded-3xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-pink-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-pink-300'
                }`}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-base font-black">{item.title}</h3>

                <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="reveal-block mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`rounded-[2rem] border p-6 text-center ${
                dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'
              }`}
            >
              <p className="text-4xl font-black text-[#e81c7e]">{item.value}</p>
              <p className={`mt-2 text-sm font-semibold ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal-block mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
          <Megaphone className="h-10 w-10 text-[#e81c7e]" />
          <h2 className="mt-5 text-3xl font-black">
            We are a creative social media marketing agency
          </h2>
          <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            As a trusted and experienced social media marketing agency, we deliver
            high-quality, result-driven solutions to clients worldwide. We help
            your business stand out with measurable strategies and consistent creative output.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=85"
            alt="Creative team planning social media strategy"
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-200">Creative plus data</p>
            <h3 className="mt-2 text-3xl font-black">Strategy that looks good and performs.</h3>
          </div>
        </div>
      </section>

      <section className="reveal-block mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
            <BarChart3 className="h-10 w-10 text-[#e81c7e]" />
            <h2 className="mt-5 text-3xl font-black">
              Great brands are built through social media marketing
            </h2>
            <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Social media is a powerful channel for driving sales and building a
              strong, recognizable brand. Consumers discover new businesses through
              social platforms and evaluate them online before making direct contact.
            </p>
          </div>

          <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
            <Target className="h-10 w-10 text-[#e81c7e]" />
            <h2 className="mt-5 text-3xl font-black">
              Organic management plus paid social advertising
            </h2>
            <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              We deliver comprehensive strategies for B2C and B2B clients:
              audience-centric content, optimized ad performance, continuous testing,
              and data-driven insights that improve ROI.
            </p>
          </div>
        </div>
      </section>

      <section id="why-social" className="reveal-block mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className={`rounded-[2rem] border p-6 text-center sm:p-8 lg:p-10 ${dark ? 'border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10' : 'border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50'}`}>
          <Zap className="mx-auto h-10 w-10 text-[#e81c7e]" />
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Why social media marketing is important for your business
          </h2>
          <p className={`mx-auto mt-4 max-w-4xl leading-8 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            Social media marketing enables brands to connect with their audience,
            build credibility, drive website traffic, and generate leads. It guides
            users through the customer journey from awareness to conversion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            What you get with our social media marketing service
          </h2>

          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Social media marketing is not just an option but a necessity for
            businesses aiming to grow, compete, and thrive in today’s dynamic marketplace.
          </p>
        </div>

        <div className="benefit-grid mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`benefit-card rounded-3xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-pink-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-pink-300'
                }`}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] text-white">
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
    </main>
  )
}