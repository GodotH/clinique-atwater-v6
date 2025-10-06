"use client"

import { useTranslations } from "../app/i18n/client"
import { Brain, Bone, HeartPulse, Dumbbell } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Problems() {
  const t = useTranslations()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const conditions = [
    {
      icon: Brain,
      title: t.problems.chronic.title,
      description: t.problems.chronic.description,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200 hover:border-purple-400",
    },
    {
      icon: HeartPulse,
      title: t.problems.nerve.title,
      description: t.problems.nerve.description,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200 hover:border-blue-400",
    },
    {
      icon: Bone,
      title: t.problems.joint.title,
      description: t.problems.joint.description,
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200 hover:border-orange-400",
    },
    {
      icon: Dumbbell,
      title: t.problems.sports.title,
      description: t.problems.sports.description,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200 hover:border-green-400",
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
    hidden: { opacity: 0, y: 40 },
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
    <section ref={ref} id="problems" className="section-padding bg-gradient-to-br from-white via-slate-50 to-mist-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-leaf-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-4 tracking-tight">
            {t.problems.title}
          </h2>
          <p className="text-xl md:text-2xl text-brand-teal-600 font-semibold">
            {t.problems.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {conditions.map((condition, index) => {
            const IconComponent = condition.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`relative group overflow-hidden rounded-2xl border-2 ${condition.borderColor} transition-all duration-300 shadow-lg hover:shadow-2xl`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${condition.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${condition.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-ink-900 mb-3 group-hover:text-brand-teal-600 transition-colors duration-300">
                        {condition.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-base">
                        {condition.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${condition.gradient} opacity-10 rounded-tl-full group-hover:opacity-20 transition-opacity duration-500`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}