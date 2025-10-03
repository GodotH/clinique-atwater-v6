"use client"

import Link from "next/link"
import { useTranslations } from "../app/i18n/client"
import { useParams } from "next/navigation"
import { Calendar, UserCheck, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Process() {
  const t = useTranslations()
  const params = useParams()
  const currentLang = params?.lang as string
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const processIcons = [Calendar, UserCheck, Heart]

  return (
    <section ref={ref} id="process" className="section-padding bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-teal-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-leaf-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
          {/* Connection lines between steps */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-brand-teal-600/30 via-leaf-500/30 to-brand-teal-600/30" />

          {t.process.steps.map((step, index) => {
            const IconComponent = processIcons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="process-step group relative"
              >
                {/* Animated number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring" }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-brand-teal-600 to-leaf-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                >
                  {index + 1}
                </motion.div>

                <div className="mt-8">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-6 w-fit"
                  >
                    <IconComponent className="w-16 h-16 text-brand-teal-600 group-hover:text-leaf-500 transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-semibold text-ink-900 mb-4 group-hover:text-brand-teal-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-600/5 to-leaf-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-card pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-ink-900 mb-6">
            {t.process.ready}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={`/${currentLang}#booking`}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-brand-teal-600 to-leaf-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:from-brand-teal-700 hover:to-leaf-600 text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">{t.process.cta}</span>
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
    </section>
  )
}