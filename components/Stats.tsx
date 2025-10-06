"use client"

import { useTranslations } from "../app/i18n/client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Stats() {
  const t = useTranslations()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { value: "18+", label: t.benefits.stats.experienceLabel, delay: 0.1 },
    { value: "4500+", label: t.benefits.stats.patientsLabel, delay: 0.2 },
    { value: "3", label: t.benefits.stats.approachesLabel, delay: 0.3 },
    { value: "96%", label: t.benefits.stats.satisfactionLabel, delay: 0.4 }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-slate-50 via-white to-mist-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-leaf-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-4 tracking-tight">
            Experience You Can Count On
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: stat.delay }}
              whileHover={{
                scale: 1.08,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group"
              style={{
                transform: `translate(${mousePosition.x * (index + 1) * 0.1}px, ${mousePosition.y * (index + 1) * 0.1}px)`
              }}
            >
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-brand-teal-600 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-600/5 to-leaf-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-brand-teal-600 to-leaf-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-slate-700 group-hover:text-brand-teal-600 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
