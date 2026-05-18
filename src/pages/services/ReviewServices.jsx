import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Eye,
  LineChart,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const reviewServices = [
  {
    title: 'Customer Feedback Management',
    desc: 'Collect, organize, and publish customer feedback seamlessly across digital platforms. We help businesses understand customer experiences and improve engagement through real-time feedback systems.',
    icon: MessageSquareText,
  },
  {
    title: 'Ratings & Testimonials',
    desc: 'Showcase authentic customer reviews and testimonials that enhance your brand reputation, increase customer confidence, and improve conversion rates.',
    icon: Star,
  },
  {
    title: 'Verified Review Acquisition',
    desc: 'Generate genuine reviews from real customers through ethical and verified review collection strategies that build authenticity and trust.',
    icon: BadgeCheck,
  },
  {
    title: 'Monitoring & Performance Reporting',
    desc: 'Track customer sentiment, monitor online reviews, and generate detailed reports to identify improvement areas, maintain brand reputation, and enhance service quality.',
    icon: BarChart3,
  },
]

const whyChoose = [
  'Improve online credibility and trust',
  'Increase customer engagement',
  'Boost product and service reputation',
  'Strengthen brand visibility',
  'Drive higher sales conversions',
  'Gain valuable customer insights',
]

const stats = [
  { value: 'Trust', label: 'Build credibility with authentic reviews' },
  { value: 'Track', label: 'Monitor customer sentiment and reputation' },
  { value: 'Grow', label: 'Turn feedback into improved conversions' },
]

function ReviewSvg() {
  return (
    <svg viewBox="0 0 620 480" className="w-full max-w-[620px]" aria-hidden="true">
      <defs>
        <linearGradient id="rvAmber" x1="0" x2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="rvPink" x1="0" x2="1">
          <stop offset="0%" stopColor="#e81c7e" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <linearGradient id="rvGreen" x1="0" x2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      <circle className="rv-orbit" cx="310" cy="240" r="190" fill="none" stroke="url(#rvAmber)" strokeWidth="2" strokeDasharray="10 16" opacity="0.45" />

      <rect x="126" y="92" width="368" height="280" rx="34" fill="currentColor" opacity="0.08" />
      <rect x="160" y="128" width="300" height="52" rx="18" fill="currentColor" opacity="0.14" />
      <circle cx="186" cy="154" r="6" fill="#ef4444" />
      <circle cx="208" cy="154" r="6" fill="#f59e0b" />
      <circle cx="230" cy="154" r="6" fill="#22c55e" />

      <g className="rv-review-card" transform="translate(196 246)">
        <rect x="-78" y="-54" width="156" height="108" rx="24" fill="url(#rvAmber)" />
        <path d="M-42-14h84M-42 12h56M-42 36h36" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
        <path d="M-42-34l8 16 18 3-13 13 3 18-16-8-16 8 3-18-13-13 18-3z" fill="white" />
      </g>

      <g className="rv-stars" transform="translate(410 220)">
        {[0, 34, 68].map((x) => (
          <path
            key={x}
            d={`M${x}-28l8 16 18 3-13 13 3 18-16-8-16 8 3-18-13-13 18-3z`}
            fill="url(#rvPink)"
          />
        ))}
      </g>

      <g className="rv-chart" transform="translate(398 304)">
        <rect x="-42" y="-28" width="22" height="54" rx="8" fill="url(#rvGreen)" />
        <rect x="-8" y="-56" width="22" height="82" rx="8" fill="url(#rvPink)" />
        <rect x="26" y="-82" width="22" height="108" rx="8" fill="url(#rvAmber)" />
      </g>

      <path className="rv-line" d="M110 354C194 312 244 360 320 278C388 204 430 210 512 130" fill="none" stroke="url(#rvPink)" strokeWidth="7" strokeLinecap="round" strokeDasharray="520" />

      <g className="rv-badge" transform="translate(512 130)">
        <circle r="40" fill="url(#rvGreen)" />
        <path d="M-15 0l10 11L17-15" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <circle className="rv-dot" cx="92" cy="142" r="7" fill="#22c55e" />
      <circle className="rv-dot" cx="530" cy="340" r="8" fill="#f59e0b" />
      <circle className="rv-dot" cx="316" cy="56" r="6" fill="#38bdf8" />
    </svg>
  )
}

export default function ReviewServices({ dark }) {
  const root = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.from('.rv-hero-copy > *', {
        y: 34,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.rv-visual', {
        y: 34,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })

      gsap.to('.rv-orbit', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.rv-review-card, .rv-stars, .rv-chart, .rv-badge', {
        y: -10,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        '.rv-line',
        { strokeDashoffset: 520 },
        {
          strokeDashoffset: 0,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      )

      gsap.to('.rv-dot, .floating-card', {
        scale: 1.08,
        y: -8,
        transformOrigin: '50% 50%',
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.utils.toArray('.rv-reveal').forEach((item) => {
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

      gsap.from('.review-card', {
        scrollTrigger: {
          trigger: '.review-service-grid',
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
              ? 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(245,158,11,0.22),transparent_60%)]'
              : 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(245,158,11,0.13),transparent_60%)]'
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
          <div className="rv-hero-copy">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-500">
              <Star className="h-4 w-4" />
              Review & Reputation Management
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Build trust and turn feedback into growth.
            </h1>

            <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Strengthen credibility and turn customer feedback
              into business growth with professional review and reputation
              management solutions.
            </p>

            <p className={`mt-4 max-w-2xl leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              We help businesses collect authentic reviews, showcase testimonials,
              monitor sentiment, and improve service quality through actionable reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-6 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
              >
                Improve Reputation
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => document.getElementById('review-services')?.scrollIntoView({ behavior: 'smooth' })}
                className={`rounded-xl border px-6 py-3 font-bold transition ${
                  dark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                }`}
              >
                View Services
              </button>
            </div>
          </div>

          <div className="rv-visual relative text-zinc-900 dark:text-white">
            <ReviewSvg />

            <div className={`floating-card absolute left-4 top-8 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-xs font-bold opacity-60">Credibility</p>
                  <p className="text-lg font-black">Stronger</p>
                </div>
              </div>
            </div>

            <div className={`floating-card absolute bottom-10 right-4 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <LineChart className="h-5 w-5 text-[#e81c7e]" />
                <div>
                  <p className="text-xs font-bold opacity-60">Conversions</p>
                  <p className="text-lg font-black">Higher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rv-reveal mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`rounded-[2rem] border p-6 text-center ${
                dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'
              }`}
            >
              <p className="text-4xl font-black text-amber-500">{item.value}</p>
              <p className={`mt-2 text-sm font-semibold ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="review-services" className="rv-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Review and reputation management services
          </h2>
          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            We help your business collect, organize, publish, monitor, and learn
            from customer feedback across digital platforms.
          </p>
        </div>

        <div className="review-service-grid mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviewServices.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`review-card rounded-3xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-amber-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-amber-300'
                }`}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
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

      <section className="rv-reveal mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
            alt="Review and reputation management dashboard"
            className="h-full min-h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">Customer voice</p>
            <h3 className="mt-2 text-3xl font-black">Real feedback, better trust, stronger decisions.</h3>
          </div>
        </div>

        <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
          <Target className="h-10 w-10 text-amber-500" />
          <h2 className="mt-5 text-3xl font-black">
            Why choose our review services?
          </h2>
          <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Reviews influence buying decisions, brand trust, and product
            perception. We help you turn customer voice into credibility,
            engagement, and measurable growth.
          </p>

          <div className="mt-6 grid gap-3">
            {whyChoose.map((item) => (
              <div key={item} className={`flex items-center gap-3 rounded-xl p-3 ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <BadgeCheck className="h-4 w-4 shrink-0 text-[#e81c7e]" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rv-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Monitor Sentiment',
              desc: 'Track customer reviews and understand how people feel about your brand.',
              icon: Search,
            },
            {
              title: 'Improve Service Quality',
              desc: 'Use review insights to identify gaps and improve the customer experience.',
              icon: TrendingUp,
            },
            {
              title: 'Boost Sales Conversions',
              desc: 'Showcase trust signals that help new customers choose your business confidently.',
              icon: Eye,
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`rounded-3xl border p-6 ${
                  dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-lg'
                }`}
              >
                <Icon className="h-9 w-9 text-amber-500" />
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="rv-reveal mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6">
        <div className={`rounded-[2rem] border p-6 text-center sm:p-8 lg:p-10 ${dark ? 'border-white/10 bg-gradient-to-br from-amber-500/10 to-orange-500/10' : 'border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50'}`}>
          <Sparkles className="mx-auto h-10 w-10 text-amber-500" />
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Ready to turn customer feedback into growth?
          </h2>
          <p className={`mx-auto mt-4 max-w-3xl leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            Let OpenLens help you build trust, improve customer confidence, and
            strengthen your online reputation.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-7 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
          >
            Start Reputation Growth
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}