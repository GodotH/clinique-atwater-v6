"use client"

import Image from "next/image"
import { useTranslations } from "../app/i18n/client"
import CallNowButton from "./CallNowButton"

export default function Hero() {
  const t = useTranslations()

  return (
    <section
      id="hero"
      className="hero-section pt-24 pb-20 relative"
    >
      {/* Full-bleed hero image with custom cropping */}
      <Image
        src="/images/DrTanguay.png"
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition: '30% 50%' }} // crop from the left
      />
      {/* Dark gradient overlay with softer transparency */}
      <div
        className="hero-overlay"
        style={{ opacity: 0.85 }}
      />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-7xl">
          {/* Tagline - directly under menu */}
          <p className="text-xs md:text-sm font-bold mb-8 md:mb-12 tracking-widest text-white uppercase animate-fade-in">
            {t.hero.tagline}
          </p>

          {/* Left-aligned content under logo */}
          <div className="max-w-2xl text-left text-white">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] text-white whitespace-nowrap">
              {t.hero.title}
            </h1>

            {/* HURT LESS MOVE MORE on single line */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white/95 whitespace-nowrap">
              {t.hero.subtitle} <span className="text-leaf-500">MOVE</span> <span className="text-white">More</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-10 text-white/90">
              {t.hero.description}
            </p>

            {/* CTA */}
            <div className="mb-16 flex justify-center">
              <CallNowButton className="text-base md:text-lg px-10 md:px-12 py-3 md:py-4 shadow-2xl hover:shadow-leaf-500/30" />
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl">
              <div className="stat-card backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-white">18+</div>
                <div className="text-xs md:text-sm font-medium text-white/80">
                  {t.benefits.stats.experienceLabel}
                </div>
              </div>
              <div className="stat-card backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-white">4500+</div>
                <div className="text-xs md:text-sm font-medium text-white/80">
                  {t.benefits.stats.patientsLabel}
                </div>
              </div>
              <div className="stat-card backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-white">3</div>
                <div className="text-xs md:text-sm font-medium text-white/80">
                  {t.benefits.stats.approachesLabel}
                </div>
              </div>
              <div className="stat-card backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-white">96%</div>
                <div className="text-xs md:text-sm font-medium text-white/80">
                  {t.benefits.stats.satisfactionLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}