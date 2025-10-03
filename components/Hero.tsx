"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useTranslations } from "../app/i18n/client"
import CallNowButton from "./CallNowButton"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function Hero() {
  const t = useTranslations()
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section pt-24 pb-20 relative overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div style={{ y: springY }} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/DrTanguay.png"
          alt=""
          fill
          priority
          className="object-cover scale-110"
          style={{ objectPosition: 'center center' }}
          sizes="100vw"
        />
      </motion.div>

      {/* Animated gradient overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-brand-teal-700/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-600/20 via-transparent to-transparent" />

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-teal-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-leaf-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="container-custom relative z-10">
        <div className="max-w-7xl">
          {/* Tagline - with slide in animation */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm font-bold mb-8 md:mb-12 tracking-widest text-white uppercase"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Left-aligned content under logo */}
          <div className="max-w-2xl text-left text-white">
            {/* Main Heading - with stagger animation */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] text-white whitespace-nowrap"
            >
              {t.hero.title}
            </motion.h1>

            {/* HURT LESS MOVE MORE with gradient and animation */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white/95 whitespace-nowrap"
            >
              {t.hero.subtitle} <span className="gradient-text">MOVE</span> <span className="text-white">More</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg lg:text-xl leading-relaxed mb-10 text-white/90"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA with hover effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-16 flex justify-center"
            >
              <CallNowButton className="text-base md:text-lg px-10 md:px-12 py-3 md:py-4 shadow-2xl hover:shadow-leaf-500/50 animate-glow" />
            </motion.div>

            {/* Trust indicators with stagger */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl">
              {[
                { value: "18+", label: t.benefits.stats.experienceLabel, delay: 1.0 },
                { value: "4500+", label: t.benefits.stats.patientsLabel, delay: 1.1 },
                { value: "3", label: t.benefits.stats.approachesLabel, delay: 1.2 },
                { value: "96%", label: t.benefits.stats.satisfactionLabel, delay: 1.3 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                    transition: { duration: 0.2 }
                  }}
                  className="stat-card glass p-4 md:p-6 group cursor-pointer"
                  style={{
                    transform: `translate(${mousePosition.x * (index + 1) * 0.1}px, ${mousePosition.y * (index + 1) * 0.1}px)`
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-white group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}