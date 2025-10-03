"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "../app/i18n/client"
import { useParams } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

/**
 * Header component displays the clinic name alongside a logo and provides
 * navigation links, a language switcher and a call button.  On larger
 * screens the navigation is displayed inline, whereas on smaller screens
 * a hamburger menu toggles a mobile friendly navigation.
 */
export default function Header() {
  const t = useTranslations()
  const params = useParams()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentLang = params?.lang as string
  const otherLang = currentLang === 'en' ? 'fr' : 'en'
  const langLabel = currentLang === 'en' ? 'FR' : 'EN'

  const navigation = [
    { name: t.nav.home, href: `/${currentLang}#hero` },
    { name: t.nav.services, href: `/${currentLang}#services` },
    { name: t.nav.testimonials, href: `/${currentLang}#testimonials` },
    { name: t.nav.about, href: `/${currentLang}#about` },
    { name: t.nav.pricing, href: `/${currentLang}#pricing` },
    { name: t.nav.faq, href: `/${currentLang}#faq` },
    { name: t.nav.contact, href: `/${currentLang}#contact` },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          {/* Logo and site title */}
          <Link href={`/${currentLang}`} className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Clinique Atwater logo"
              width={40}
              height={40}
              priority
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-professional-navy-800">
              Clinique Atwater
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-trust-blue-600 transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
          {/* Language Switcher */}
          <Link
            href={`/${otherLang}`}
            className="text-gray-700 hover:text-trust-blue-600 transition-colors duration-200 font-medium border border-gray-300 px-3 py-1 rounded-lg hover:border-trust-blue-600"
          >
            {langLabel}
          </Link>
          {/* Phone CTA */}
          <a
            href="tel:514-667-3911"
            className="flex items-center space-x-2 bg-trust-blue-600 text-white px-4 py-2 rounded-lg hover:bg-trust-blue-700 transition-colors duration-200"
          >
            <Phone size={16} />
            <span className="font-medium">(514) 667-3911</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-trust-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Link
                href={`/${otherLang}`}
                className="text-trust-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {langLabel === 'FR' ? 'Français' : 'English'}
              </Link>
              <a
                href="tel:514-667-3911"
                className="flex items-center justify-center space-x-2 bg-trust-blue-600 text-white py-3 rounded-lg hover:bg-trust-blue-700 transition-colors duration-200"
              >
                <Phone size={16} />
                <span className="font-medium">(514) 667-3911</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}