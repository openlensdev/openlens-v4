import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BadgeCheck,
  FileText,
  Megaphone,
  MessageSquare,
  Newspaper,
  Radio,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const prServices = [
  {
    title: 'Press Releases',
    desc: 'Create impactful press releases for product launches, company announcements, events, and important updates. We ensure your news reaches the right media channels for maximum exposure and brand awareness.',
    icon: Newspaper,
  },
  {
    title: 'Press Conferences',
    desc: 'Plan and manage professional press conferences with clear messaging, media coordination, and seamless communication. We help brands connect with journalists and audiences effectively.',
    icon: Users,
  },
  {
    title: 'Media Outreach',
    desc: 'Expand your media presence through targeted outreach strategies. From journalist communication to publication pitching, we help your brand gain valuable coverage across trusted media platforms.',
    icon: Megaphone,
  },
  {
    title: 'Reputation Building',
    desc: 'Strengthen your brand image with strategic reputation management solutions focused on trust, credibility, and long-term authority in your industry.',
    icon: ShieldCheck,
  },
  {
    title: 'Media Relations',
    desc: 'Develop strong relationships with media houses, journalists, and publications to maintain continuous brand visibility and positive public engagement.',
    icon: Radio,
  },
  {
    title: 'Crisis Management',
    desc: 'Protect your brand during challenging situations with effective crisis communication strategies, rapid response planning, and reputation recovery solutions.',
    icon: ShieldAlert,
  },
]

const outcomes = [
  'Stronger brand credibility',
  'Better media visibility',
  'Positive public reputation',
  'Clear audience communication',
  'Long-term market trust',
]

function PrSvg() {
  return (
    <svg viewBox="0 0 620 480" className="w-full max-w-[620px]" aria-hidden="true">
      <defs>
        <linearGradient id="prPink" x1="0" x2="1">
          <stop offset="0%" stopColor="#e81c7e" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <linearGradient id="prBlue" x1="0" x2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="prRose" x1="0" x2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      <circle className="pr-orbit" cx="310" cy="240" r="190" fill="none" stroke="url(#prPink)" strokeWidth="2" strokeDasharray="10 16" opacity="0.45" />

      <rect x="126" y="94" width="368" height="270" rx="34" fill="currentColor" opacity="0.08" />
      <rect x="160" y="130" width="300" height="46" rx="16" fill="currentColor" opacity="0.14" />
      <circle cx="186" cy="153" r="6" fill="#ef4444" />
      <circle cx="208" cy="153" r="6" fill="#f59e0b" />
      <circle cx="230" cy="153" r="6" fill="#22c55e" />

      <g className="pr-megaphone" transform="translate(220 252)">
        <path d="M-78-28h54l98-42v140l-98-42h-54z" fill="url(#prPink)" />
        <path d="M-22 30l22 70h-44l-20-70z" fill="url(#prRose)" />
        <path d="M90-28c28 18 28 74 0 92" fill="none" stroke="url(#prBlue)" strokeWidth="12" strokeLinecap="round" />
        <path d="M118-58c48 40 48 126 0 166" fill="none" stroke="url(#prBlue)" strokeWidth="9" strokeLinecap="round" opacity="0.55" />
      </g>

      <g className="pr-card" transform="translate(412 246)">
        <rect x="-54" y="-70" width="108" height="140" rx="22" fill="url(#prBlue)" />
        <rect x="-30" y="-38" width="60" height="10" rx="5" fill="white" opacity="0.9" />
        <rect x="-30" y="-12" width="44" height="8" rx="4" fill="white" opacity="0.75" />
        <rect x="-30" y="12" width="58" height="8" rx="4" fill="white" opacity="0.75" />
        <rect x="-30" y="36" width="36" height="8" rx="4" fill="white" opacity="0.75" />
      </g>

      <path className="pr-line" d="M112 356C188 310 240 354 318 280C386 214 428 204 512 126" fill="none" stroke="url(#prPink)" strokeWidth="7" strokeLinecap="round" strokeDasharray="520" />

      <g className="pr-badge" transform="translate(514 126)">
        <circle r="40" fill="url(#prRose)" />
        <path d="M-15 0l10 11L17-15" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <circle className="pr-dot" cx="94" cy="142" r="7" fill="#22c55e" />
      <circle className="pr-dot" cx="530" cy="338" r="8" fill="#f59e0b" />
      <circle className="pr-dot" cx="316" cy="56" r="6" fill="#38bdf8" />
    </svg>
  )
}

export default function PublicRelations({ dark }) {
  const root = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.from('.pr-hero-copy > *', {
        y: 34,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.pr-visual', {
        y: 34,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })

      gsap.to('.pr-orbit', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.pr-megaphone, .pr-card, .pr-badge', {
        y: -10,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        '.pr-line',
        { strokeDashoffset: 520 },
        {
          strokeDashoffset: 0,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      )

      gsap.to('.pr-dot, .floating-card', {
        scale: 1.08,
        y: -8,
        transformOrigin: '50% 50%',
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: 'sine.inOut',
      })

      gsap.utils.toArray('.pr-reveal').forEach((item) => {
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

      gsap.from('.pr-card-item', {
        scrollTrigger: {
          trigger: '.pr-service-grid',
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
              ? 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(244,63,94,0.22),transparent_60%)]'
              : 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(244,63,94,0.12),transparent_60%)]'
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
          <div className="pr-hero-copy">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-rose-500">
              <Radio className="h-4 w-4" />
              Public Relations
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Build a powerful brand presence with strategic PR.
            </h1>

            <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Build credibility, strengthen media visibility, and create long-term
              trust with public relations solutions designed for modern businesses.
            </p>

            <p className={`mt-4 max-w-2xl leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Our PR services help brands communicate effectively with their
              audience while maintaining a strong and positive reputation in the market.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-6 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
              >
                Start PR Strategy
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => document.getElementById('pr-services')?.scrollIntoView({ behavior: 'smooth' })}
                className={`rounded-xl border px-6 py-3 font-bold transition ${
                  dark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                }`}
              >
                View PR Services
              </button>
            </div>
          </div>

          <div className="pr-visual relative text-zinc-900 dark:text-white">
            <PrSvg />

            <div className={`floating-card absolute left-4 top-8 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <Newspaper className="h-5 w-5 text-rose-500" />
                <div>
                  <p className="text-xs font-bold opacity-60">Media Coverage</p>
                  <p className="text-lg font-black">Targeted</p>
                </div>
              </div>
            </div>

            <div className={`floating-card absolute bottom-10 right-4 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#e81c7e]" />
                <div>
                  <p className="text-xs font-bold opacity-60">Reputation</p>
                  <p className="text-lg font-black">Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pr-reveal mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-5">
          {outcomes.map((item) => (
            <div
              key={item}
              className={`rounded-3xl border p-5 text-center ${
                dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'
              }`}
            >
              <Sparkles className="mx-auto h-7 w-7 text-[#e81c7e]" />
              <p className="mt-3 text-sm font-black">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pr-services" className="pr-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Public Relations services we provide
          </h2>
          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            From press releases to crisis communication, we help your brand build
            authority, maintain trust, and communicate with clarity.
          </p>
        </div>

        <div className="pr-service-grid mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {prServices.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`pr-card-item rounded-3xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-rose-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-rose-300'
                }`}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white">
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

      <section className="pr-reveal mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
            alt="Public relations team planning communication strategy"
            className="h-full min-h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-200">Media strategy</p>
            <h3 className="mt-2 text-3xl font-black">Clear messaging. Stronger visibility. Trusted reputation.</h3>
          </div>
        </div>

        <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
          <Target className="h-10 w-10 text-rose-500" />
          <h2 className="mt-5 text-3xl font-black">
            Strategic communication for long-term authority
          </h2>
          <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            We help businesses communicate effectively, manage media perception,
            build positive audience engagement, and maintain trust in competitive
            markets.
          </p>

          <div className="mt-6 grid gap-3">
            {[
              'Media coordination',
              'Journalist communication',
              'Publication pitching',
              'Reputation recovery',
            ].map((item) => (
              <div key={item} className={`flex items-center gap-3 rounded-xl p-3 ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <BadgeCheck className="h-4 w-4 shrink-0 text-[#e81c7e]" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pr-reveal mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6">
        <div className={`rounded-[2rem] border p-6 text-center sm:p-8 lg:p-10 ${dark ? 'border-white/10 bg-gradient-to-br from-rose-500/10 to-pink-500/10' : 'border-rose-100 bg-gradient-to-br from-rose-50 to-pink-50'}`}>
          <MessageSquare className="mx-auto h-10 w-10 text-rose-500" />
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Ready to strengthen your public image?
          </h2>
          <p className={`mx-auto mt-4 max-w-3xl leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            Let OpenLens build a PR strategy that improves credibility, earns
            media attention, and protects your brand reputation.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-7 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
          >
            Plan PR Campaign
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}