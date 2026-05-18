import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const sections = [
  {
    title: 'Our Commitment to Privacy',
    content: [
      'Your privacy is important to us. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used.',
      'To make this notice easy to find, we make it available on our homepage and at every point where personally identifiable information may be requested.',
    ],
  },
  {
    title: 'Information We May Collect from You',
    content: [
      'While using our website, we may request certain personal information that can be used to contact or identify you. This may include your name, email address, and contact details (“Personal Information”).',
      'If you are a visitor to our website and do not engage in any services or inquiries, we will not collect any personal information about you. However, if you decide to use or inquire about specific services described on the website, you may be asked to fill out a “Contact Us” form, providing basic online contact information such as your name, email address, and mobile number.',
    ],
  },
  {
    title: 'Email Information',
    content: [
      'When you send us emails, we may retain the content of the messages and your email address.',
      'The information provided by you through the “Contact Us” form on this website will be solely owned by us, and we will not disclose it to any unauthorized third party without obtaining prior permission from you.',
      'We will not sell, share, or rent this information to any other person beyond what is disclosed in this statement.',
    ],
  },
  {
    title: 'How We Use Your Information',
    list: [
      'To ensure that our website content is presented in the most effective manner for you.',
      'To provide you with information, products, or services you request or may be interested in.',
      'To fulfill our obligations arising from any contracts between you and us.',
      'To notify you about changes to our service.',
      'To provide you with information about other services that may be of interest to you.',
    ],
    content: [
      'We do not disclose information about identifiable individuals to our affiliate advertisers, but we may provide them with aggregate information about our users.',
    ],
  },
  {
    title: 'The Way We Use Information',
    content: [
      'We use the information you provide about yourself and your business to reply to your inquiries.',
      'We use return email addresses to answer the emails we receive. Such addresses are not used for any other purpose and are not shared with outside parties.',
      'We use non-identifying and aggregate information to better design our website. For example, we track how frequently individual pages are visited as an indicator of interest levels in different service areas.',
      'We use aggregate data obtained through our free SEO & SEM tools to research and compare search engines.',
      'Finally, we never use or share the personally identifiable information provided to us online in ways unrelated to the ones described above.',
    ],
  },
  {
    title: 'Our Commitment to Data Security',
    content: [
      'To prevent unauthorized access, maintain data accuracy, and ensure the correct use of information, we have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.',
    ],
  },
  {
    title: 'How You Can Access or Correct Your Information',
    content: [
      'You can request that we delete your information by emailing us.',
    ],
  },
]

export default function PrivacyPolicy({ dark }) {
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.policy-hero > *', {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      })

      // Document Container Animation
      gsap.from('.policy-document', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
      })

      // Individual Sections Fade in inside the document
      gsap.from('.policy-block', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.4,
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={pageRef}
      className={`min-h-screen ${
        dark ? 'bg-[#050811] text-white' : 'bg-[#f8fafc] text-gray-950'
      }`}
    >
      <section className="relative overflow-hidden">
        <div
          className={`absolute inset-0 ${
            dark
              ? 'bg-[radial-gradient(70%_55%_at_50%_0%,rgba(232,28,126,0.15),transparent_60%)]'
              : 'bg-[radial-gradient(70%_55%_at_50%_0%,rgba(232,28,126,0.08),transparent_60%)]'
          }`}
        />

        <div className="policy-hero relative mx-auto max-w-4xl px-4 pb-10 pt-20 text-center sm:px-6">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] text-white shadow-lg">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e81c7e]">
            OpenLens
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            This Privacy Policy explains how OpenLens collects, uses, protects,
            and manages your personal information when you interact with our website.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        {/* Single Document Paper Container */}
        <div className={`policy-document rounded-[2rem] border p-8 sm:p-12 md:p-16 ${
          dark ? 'border-white/10 bg-[#0b1020] shadow-2xl shadow-black/50' : 'border-black/10 bg-white shadow-xl shadow-black/5'
        }`}>
          
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title} className="policy-block">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>

                {section.content?.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`mt-4 leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-5 space-y-3 pl-2">
                    {section.list.map((item, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e81c7e]" />
                        <span className={`leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <hr className={`my-12 ${dark ? 'border-white/10' : 'border-black/10'}`} />

          {/* Contact Section at the bottom of the document */}
          <div className="policy-block">
            <h2 className="text-2xl font-bold mb-4">How to Contact Us</h2>
            <p className={`leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Should you have other questions or concerns about these privacy
              policies, please call us at{' '}
              <a href="tel:+918271084686" className="font-bold text-[#e81c7e] hover:underline">
                +91 8271084686
              </a>{' '}
              or email us at{' '}
              <a href="mailto:info@openlens.in" className="font-bold text-[#e81c7e] hover:underline">
                info@openlens.in
              </a>.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}