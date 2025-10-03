"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTranslations } from "../app/i18n/client"
import { useParams } from "next/navigation"
import { Menu, X } from "lucide-react"
import CallNowButton from "./CallNowButton"

export default function Header() {
  const t = useTranslations()
  const params = useParams()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const currentLang = params?.lang as string
  const otherLang = currentLang === 'en' ? 'fr' : 'en'
  const langLabel = currentLang === 'en' ? 'FR' : 'EN'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: t.nav.services, href: `/${currentLang}#services` },
    { name: t.nav.testimonials, href: `/${currentLang}#testimonials` },
    { name: t.nav.about, href: `/${currentLang}#about` },
    { name: t.nav.pricing, href: `/${currentLang}#pricing` },
    { name: t.nav.faq, href: `/${currentLang}#faq` },
    { name: t.nav.contact, href: `/${currentLang}#booking` },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo & Wordmark */}
        <Link href={`/${currentLang}`} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Clinique Atwater Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className={`font-bold text-ink-900 transition-all duration-300 ${
            scrolled ? 'text-lg' : 'text-xl'
          }`}>
            CLINIQUE ATWATER
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-700 hover:text-brand-teal-600 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <Link
            href={`/${otherLang}`}
            className="text-slate-700 hover:text-brand-teal-600 transition-colors duration-200 font-medium text-sm border border-slate-200 px-3 py-1.5 rounded-lg hover:border-brand-teal-600"
          >
            {langLabel}
          </Link>

          {/* Call Now CTA */}
          <CallNowButton />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-slate-700 hover:text-brand-teal-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white border-t border-slate-200 overflow-y-auto transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className="container-custom py-6 flex flex-col h-full">
          <div className="flex-1 space-y-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-4 text-slate-700 hover:text-brand-teal-600 hover:bg-mist-50 transition-all duration-200 font-medium rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  animation: mobileMenuOpen ? `slide-in 0.3s ease-out ${index * 0.05}s both` : 'none'
                }}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 pb-6 border-t border-slate-200 mt-4">
              <Link
                href={`/${otherLang}`}
                className="block px-4 py-4 text-brand-teal-600 hover:bg-mist-50 font-medium rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {langLabel === 'FR' ? 'Français' : 'English'}
              </Link>
            </div>
          </div>

          {/* Call Now Button - Pinned to bottom */}
          <div className="sticky bottom-0 pt-4 pb-6 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <CallNowButton variant="mobile" />
          </div>
        </div>
      </div>
    </header>
  )
}