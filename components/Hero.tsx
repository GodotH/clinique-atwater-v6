"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "../app/i18n/client"
import { useParams } from "next/navigation"
import { Phone, Calendar } from "lucide-react"

/**
 * Hero component showcasing the main marketing message for the clinic.  A full
 * bleed background image conveys professionalism and warmth while a dark
 * gradient overlay ensures that white and coloured text remain legible.  The
 * component maintains all existing copy, calls to action and statistics but
 * enhances the visual presentation with better spacing and responsive
 * typography.  Colour usage honours the original blue theme while adding
 * complementary greens and reds drawn from the existing Tailwind config.
 */
export default function Hero() {
  const t = useTranslations()
  const params = useParams()
  const currentLang = params?.lang as string

  return (
    <section id="hero" className="hero-section">
      {/* Full-bleed hero image */}
      <Image
        src="/DrTanguay.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark gradient overlay */}
      <div className="hero-overlay" />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-semibold text-healing-green-400 uppercase tracking-widest mb-4">
            {t.hero.tagline}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            {t.hero.title}
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-pain-red-400 mb-2">
            {t.hero.subtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-healing-green-400 mb-6">
            {t.hero.cta}
          </h3>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${currentLang}#booking`}
              className="cta-primary flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>{t.hero.bookButton}</span>
            </Link>
            <a
              href="tel:514-667-3911"
              className="cta-secondary flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>{t.hero.callButton}</span>
            </a>
          </div>
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mt-16 text-center">
            <div className="stat-card">
              <div className="text-3xl font-bold mb-1">18+</div>
              <div className="text-sm font-medium opacity-90">{t.benefits.stats.experienceLabel}</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold mb-1">4500+</div>
              <div className="text-sm font-medium opacity-90">{t.benefits.stats.patientsLabel}</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold mb-1">3</div>
              <div className="text-sm font-medium opacity-90">{t.benefits.stats.approachesLabel}</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold mb-1">96%</div>
              <div className="text-sm font-medium opacity-90">{t.benefits.stats.satisfactionLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}