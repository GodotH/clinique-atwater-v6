"use client"

import { useTranslations } from "../app/i18n/client"
import { Sparkles, Zap, Medal, HeartHandshake } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Services() {
  const t = useTranslations()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Sparkles,
      title: t.services.chiropractic.title,
      description: t.services.chiropractic.description,
      benefits: t.services.chiropractic.benefits,
    },
    {
      icon: Zap,
      title: t.services.kinesiology.title,
      description: t.services.kinesiology.description,
      benefits: t.services.kinesiology.benefits,
    },
    {
      icon: Medal,
      title: t.services.sports.title,
      description: t.services.sports.description,
      benefits: t.services.sports.benefits,
    },
    {
      icon: HeartHandshake,
      title: t.services.pain.title,
      description: t.services.pain.description,
      benefits: t.services.pain.benefits,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section ref={ref} id="services" className="section-padding bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-leaf-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t.services.title}
          </h2>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-slate-700 mb-4 font-medium">
              {t.services.subtitle}
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {t.services.description}
            </p>
          </div>

          {/* Three main factors with stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              t.services.factors.biomechanical,
              t.services.factors.biochemical,
              t.services.factors.emotional
            ].map((factor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border-2 border-slate-200 p-6 rounded-card shadow-sm hover:shadow-lg hover:border-brand-teal-600/50 transition-all duration-300 cursor-pointer group"
              >
                <p className="font-semibold text-slate-700 group-hover:text-brand-teal-600 transition-colors">
                  {factor}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-ink-900 mb-12">
            {t.services.servicesTitle}
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="service-card group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-600/5 to-leaf-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start space-x-6 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-teal-600/10 to-leaf-500/10 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                      <IconComponent className="w-8 h-8 text-brand-teal-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-ink-900 mb-4 group-hover:text-brand-teal-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-slate-700 mb-3 text-sm uppercase tracking-wide">
                        Benefits:
                      </h5>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <motion.li
                            key={benefitIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 + benefitIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-1.5 h-1.5 bg-leaf-500 rounded-full flex-shrink-0 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                            <span className="text-slate-600 leading-relaxed">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}