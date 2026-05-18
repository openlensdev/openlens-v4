import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Code2,
  Database,
  Globe2,
  Headphones,
  Layers3,
  MonitorCog,
  PlugZap,
  Rocket,
  ServerCog,
  Smartphone,
  Users,
  Workflow,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'CRM',
    desc: 'Customer management workflows, lead tracking, sales pipelines, and automation systems.',
    icon: Users,
  },
  {
    title: 'ERP',
    desc: 'Operational dashboards, inventory flows, finance modules, and business process systems.',
    icon: Workflow,
  },
  {
    title: 'Website Development',
    desc: 'Responsive websites, landing pages, business sites, CMS builds, and conversion-focused pages.',
    icon: Globe2,
  },
  {
    title: 'App Development',
    desc: 'Android, iOS, hybrid apps, MVPs, admin panels, and scalable product experiences.',
    icon: Smartphone,
  },
  {
    title: 'API Development and Integration',
    desc: 'Custom APIs, third-party integrations, payments, CRM sync, automation, and data pipelines.',
    icon: PlugZap,
  },
  {
    title: 'Full Stack Development',
    desc: 'Frontend, backend, databases, authentication, deployment, and production architecture.',
    icon: Code2,
  },
  {
    title: 'UI/UX Design',
    desc: 'Wireframes, prototypes, user flows, design systems, and polished interface design.',
    icon: Layers3,
  },
  {
    title: 'Support and Maintenance',
    desc: 'Bug fixes, security updates, monitoring, optimization, backups, and feature improvements.',
    icon: Headphones,
  },
]

const process = [
  {
    n: '01',
    title: 'Discover',
    desc: 'We understand your goals, workflows, users, tech needs, and business operations.',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'We map user journeys, UI/UX systems, dashboards, modules, and product architecture.',
  },
  {
    n: '03',
    title: 'Develop',
    desc: 'We build websites, apps, APIs, CRM/ERP systems, and full-stack products in agile sprints.',
  },
  {
    n: '04',
    title: 'Manage',
    desc: 'We support, maintain, optimize, monitor, and improve the system after launch.',
  },
]

const stack = ['React', 'Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'CMS', 'Cloud', 'Analytics']

function DevelopmentSvg() {
  return (
    <svg viewBox="0 0 620 480" className="w-full max-w-[620px]" aria-hidden="true">
      <defs>
        <linearGradient id="wdPink" x1="0" x2="1">
          <stop offset="0%" stopColor="#e81c7e" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <linearGradient id="wdBlue" x1="0" x2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <filter id="wdShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="20" stdDeviation="18" floodOpacity="0.2" />
        </filter>
      </defs>

      <circle className="wd-orbit" cx="310" cy="240" r="190" fill="none" stroke="url(#wdPink)" strokeWidth="2" strokeDasharray="10 16" opacity="0.45" />

      <rect x="120" y="86" width="380" height="260" rx="30" fill="currentColor" opacity="0.08" filter="url(#wdShadow)" />
      <rect x="150" y="120" width="320" height="48" rx="16" fill="currentColor" opacity="0.14" />
      <circle cx="176" cy="144" r="6" fill="#ef4444" />
      <circle cx="198" cy="144" r="6" fill="#f59e0b" />
      <circle cx="220" cy="144" r="6" fill="#22c55e" />

      <g className="wd-code">
        <rect x="170" y="204" width="104" height="18" rx="9" fill="url(#wdPink)" />
        <rect x="170" y="238" width="172" height="18" rx="9" fill="currentColor" opacity="0.18" />
        <rect x="170" y="272" width="132" height="18" rx="9" fill="currentColor" opacity="0.18" />
      </g>

      <g className="wd-panel">
        <rect x="360" y="204" width="84" height="84" rx="22" fill="url(#wdBlue)" />
        <path d="M384 246h36M402 228v36" stroke="white" strokeWidth="8" strokeLinecap="round" />
      </g>

      <g className="wd-node" transform="translate(106 372)">
        <circle r="42" fill="url(#wdPink)" />
        <path d="M-16 4h32M0-16v32" stroke="white" strokeWidth="7" strokeLinecap="round" />
      </g>

      <g className="wd-node" transform="translate(512 104)">
        <circle r="38" fill="url(#wdBlue)" />
        <path d="M-14-4l10 10L16-16" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <path className="wd-line" d="M110 372C202 330 192 178 310 204C420 228 412 104 512 104" fill="none" stroke="url(#wdPink)" strokeWidth="6" strokeLinecap="round" strokeDasharray="520" />

      <circle className="wd-dot" cx="92" cy="130" r="7" fill="#22c55e" />
      <circle className="wd-dot" cx="520" cy="354" r="8" fill="#f59e0b" />
      <circle className="wd-dot" cx="306" cy="54" r="6" fill="#38bdf8" />
    </svg>
  )
}

export default function WebDevelopment({ dark }) {
  const navigate = useNavigate()
  const root = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.from('.wd-hero-copy > *', {
        y: 34,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.wd-visual', {
        y: 34,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })

      gsap.to('.wd-orbit', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.wd-code, .wd-panel', {
        y: -10,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
        ease: 'sine.inOut',
      })

      gsap.to('.wd-node', {
        scale: 1.06,
        y: -8,
        transformOrigin: '50% 50%',
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        '.wd-line',
        { strokeDashoffset: 520 },
        {
          strokeDashoffset: 0,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      )

      gsap.to('.wd-dot', {
        scale: 1.45,
        opacity: 0.35,
        transformOrigin: '50% 50%',
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: 'power1.inOut',
      })

      gsap.to('.stack-track', {
        xPercent: -50,
        duration: 18,
        repeat: -1,
        ease: 'none',
      })

      gsap.utils.toArray('.wd-reveal').forEach((item) => {
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

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.service-grid',
          start: 'top 82%',
        },
        y: 34,
        opacity: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
      })

      gsap.from('.process-card', {
        scrollTrigger: {
          trigger: '.process-grid',
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
              ? 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(99,102,241,0.24),transparent_60%)]'
              : 'bg-[radial-gradient(70%_55%_at_80%_20%,rgba(99,102,241,0.13),transparent_60%)]'
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
          <div className="wd-hero-copy">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
              <Code2 className="h-4 w-4" />
              Software Development & Management
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Build smart software. Manage it without chaos.
            </h1>

            <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              We design, develop, integrate, and maintain modern software systems
              for businesses that need websites, apps, CRM, ERP, APIs, UI/UX, and
              long-term technical support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-6 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
              >
                Start Project
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => document.getElementById('development-services')?.scrollIntoView({ behavior: 'smooth' })}
                className={`rounded-xl border px-6 py-3 font-bold transition ${
                  dark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                }`}
              >
                View Services
              </button>
            </div>
          </div>

          <div className="wd-visual relative text-zinc-900 dark:text-white">
            <DevelopmentSvg />

            <div className={`absolute left-4 top-8 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <ServerCog className="h-5 w-5 text-indigo-500" />
                <div>
                  <p className="text-xs font-bold opacity-60">System Health</p>
                  <p className="text-lg font-black">Managed</p>
                </div>
              </div>
            </div>

            <div className={`absolute bottom-10 right-4 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur md:block ${
              dark ? 'border-white/10 bg-white/10 text-white' : 'border-black/10 bg-white/90 text-gray-950'
            }`}>
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-[#e81c7e]" />
                <div>
                  <p className="text-xs font-bold opacity-60">Architecture</p>
                  <p className="text-lg font-black">Scalable</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`relative overflow-hidden border-y py-4 ${dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.02]'}`}>
          <div className="stack-track flex w-max gap-4">
            {[...stack, ...stack].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-bold ${
                  dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white'
                }`}
              >
                <Blocks className="h-4 w-4 text-indigo-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="development-services" className="wd-reveal mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Software Development & Management Services
          </h2>
          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            We combine product thinking, engineering, UI/UX, integrations, and
            post-launch maintenance to create dependable digital systems for your business.
          </p>
        </div>

        <div className="service-grid mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`service-card rounded-3xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-indigo-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-indigo-300'
                }`}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
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

      <section className="wd-reveal mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
            alt="Software development team working on product"
            className="h-full min-h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-200">Product engineering</p>
            <h3 className="mt-2 text-3xl font-black">From idea to launch-ready software.</h3>
          </div>
        </div>

        <div className={`rounded-[2rem] border p-6 sm:p-8 ${dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'}`}>
          <MonitorCog className="h-10 w-10 text-indigo-500" />
          <h2 className="mt-5 text-3xl font-black">
            One team for build, integration, and management
          </h2>
          <p className={`mt-4 leading-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you need a CRM, ERP, website, app, API layer, dashboard,
            e-commerce build, or support team, we create systems that are easy to
            use, easy to scale, and easy to manage after launch.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Business workflows', 'Admin dashboards', 'Secure APIs', 'Ongoing support'].map((item) => (
              <div key={item} className={`flex items-center gap-3 rounded-xl p-3 ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <BadgeCheck className="h-4 w-4 shrink-0 text-[#e81c7e]" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wd-reveal mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">Our development process</h2>
          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            A clear process helps your product move from planning to launch with
            fewer surprises and stronger quality control.
          </p>
        </div>

        <div className="process-grid mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <article
              key={item.n}
              className={`process-card rounded-3xl border p-6 ${
                dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-lg'
              }`}
            >
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                {item.n}
              </p>
              <h3 className="mt-3 text-xl font-black">{item.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="wd-reveal mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6">
        <div className={`rounded-[2rem] border p-6 text-center sm:p-8 lg:p-10 ${dark ? 'border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10' : 'border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50'}`}>
          <Rocket className="mx-auto h-10 w-10 text-indigo-500" />
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Ready to build your software system?
          </h2>
          <p className={`mx-auto mt-4 max-w-3xl leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            We can help you plan, design, develop, launch, and maintain the right
            digital product for your business.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-7 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}