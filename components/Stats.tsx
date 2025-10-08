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
    {
      number: "18",
      suffix: "+",
      label: t.benefits.stats.experienceLabel,
      delay: 0.1,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      number: "4500",
      suffix: "+",
      label: t.benefits.stats.patientsLabel,
      delay: 0.2,
      gradient: "from-cyan-500 to-blue-400",
      bgGradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    },
    {
      number: "3",
      suffix: "",
      label: t.benefits.stats.approachesLabel,
      delay: 0.3,
      gradient: "from-blue-600 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-300"
    },
    {
      number: "96",
      suffix: "%",
      label: t.benefits.stats.satisfactionLabel,
      delay: 0.4,
      gradient: "from-sky-500 to-blue-500",
      bgGradient: "from-sky-50 to-blue-50",
      borderColor: "border-sky-200"
    }
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
                scale: 1.05,
                y: -4,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.4 }
              }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${stat.bgGradient} border-2 ${stat.borderColor} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-opacity-60 relative overflow-hidden`}>
                {/* Gradient overlay on hover - animated */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  whileHover={{
                    opacity: [0, 0.05, 0.08, 0.05],
                    transition: { duration: 1, repeat: Infinity }
                  }}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    className="flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.number}
                    </span>
                    {stat.suffix && (
                      <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.suffix}
                      </span>
                    )}
                  </motion.div>
                  <div className="text-sm md:text-base font-semibold text-slate-700">
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
