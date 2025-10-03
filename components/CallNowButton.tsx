"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

interface CallNowButtonProps {
  className?: string
  variant?: 'default' | 'mobile'
}

export default function CallNowButton({ className = '', variant = 'default' }: CallNowButtonProps) {
  const baseClasses = variant === 'mobile'
    ? 'w-full cta-call-now py-4'
    : 'cta-call-now'

  return (
    <motion.a
      href="tel:+15146673911"
      className={`${baseClasses} ${className} relative overflow-hidden group`}
      aria-label="Call Clinique Atwater at (514) 667-3911"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Phone size={20} />
      </motion.div>
      <span className="relative z-10">Call Now</span>
    </motion.a>
  )
}
