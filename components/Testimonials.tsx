"use client"

import { useTranslations } from "../app/i18n/client"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Testimonials() {
  const t = useTranslations()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section ref={ref} id="testimonials" className="section-padding bg-gradient-to-br from-stone-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-leaf-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-brand-teal-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-10"
        >
          {t.testimonials.reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="testimonial-card group relative"
            >
              {/* Decorative quote */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-20 h-20 text-brand-teal-600" />
              </div>

              <div className="mb-6 relative z-10">
                {/* Animated stars */}
                <div className="flex text-leaf-500 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-ink-900 mb-6 group-hover:text-brand-teal-600 transition-colors duration-300">
                  {review.title}
                </h4>
                <blockquote className="text-slate-700 leading-relaxed italic text-lg">
                  "{review.content}"
                </blockquote>
              </div>

              {/* Author section with enhanced animation */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-200 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-gradient-to-br from-brand-teal-600 to-leaf-500 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg"
                >
                  {review.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <div>
                  <div className="font-bold text-ink-900 text-base">
                    {review.name}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {review.role}
                  </div>
                </div>
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-600/5 to-leaf-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-card pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}