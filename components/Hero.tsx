"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useTranslations } from "../app/i18n/client"
import { useParams } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const t = useTranslations()
  const params = useParams()
  const currentLang = params?.lang as string
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

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
      {/* Gradient overlay - now using CSS background from globals.css */}
      <div className="hero-overlay" />

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
            className="text-xs md:text-sm font-bold mb-16 md:mb-20 tracking-widest text-white uppercase"
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
              className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-white/90"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA with gradient and hover effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`/${currentLang}#contact`}
                  className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-brand-teal-600 via-leaf-500 to-brand-teal-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold rounded-xl transition-all duration-500 shadow-2xl hover:shadow-brand-teal-500/50 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Book Your Consultation</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
