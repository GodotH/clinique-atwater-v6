"use client"

import Link from "next/link"
import { useTranslations } from "../app/i18n/client"
import { useParams } from "next/navigation"
import { Phone, Mail, MapPin } from "lucide-react"
import CallNowButton from "./CallNowButton"

export default function Footer() {
  const t = useTranslations()
  const params = useParams()
  const currentLang = params?.lang as string

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t.footer.title}
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t.footer.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-leaf-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-white/70">{t.clinic.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-leaf-500" />
                <a
                  href={`tel:${t.clinic.phone}`}
                  className="text-sm text-leaf-500 hover:text-leaf-400 transition-colors"
                >
                  {t.clinic.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-leaf-500" />
                <a
                  href={`mailto:${t.clinic.email}`}
                  className="text-sm text-leaf-500 hover:text-leaf-400 transition-colors"
                >
                  {t.clinic.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${currentLang}#services`}
                  className="text-white/70 hover:text-brand-teal-600 transition-colors duration-200 text-sm"
                >
                  {t.footer.servicesList[0]}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}#services`}
                  className="text-white/70 hover:text-brand-teal-600 transition-colors duration-200 text-sm"
                >
                  {t.footer.servicesList[1]}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}#services`}
                  className="text-white/70 hover:text-brand-teal-600 transition-colors duration-200 text-sm"
                >
                  {t.footer.servicesList[2]}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}#services`}
                  className="text-white/70 hover:text-brand-teal-600 transition-colors duration-200 text-sm"
                >
                  {t.footer.servicesList[3]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${currentLang}#about`}
                  className="text-white/70 hover:text-brand-teal-600 transition-colors duration-200 text-sm"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}#testimonials`}
                  className="text-white/70 hover:text-brand-teal-600 transition-colors duration-200 text-sm"
                >
                  {t.nav.testimonials}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}#pricing`}
                  className="text-white/70 hover:text-brand-teal-600 transition-colors duration-200 text-sm"
                >
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}#faq`}
                  className="text-white/70 hover:text-brand-teal-600 transition-colors duration-200 text-sm"
                >
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Ready to Start?
            </h4>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Book your consultation today and begin your journey to pain-free living.
            </p>
            <CallNowButton />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © 2024 Clinique Chiropratique Atwater. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-brand-teal-600 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-brand-teal-600 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}