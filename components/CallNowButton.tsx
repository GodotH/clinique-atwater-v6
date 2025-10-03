"use client"

import { Phone } from "lucide-react"

interface CallNowButtonProps {
  className?: string
  variant?: 'default' | 'mobile'
}

export default function CallNowButton({ className = '', variant = 'default' }: CallNowButtonProps) {
  const baseClasses = variant === 'mobile'
    ? 'w-full cta-call-now py-4'
    : 'cta-call-now'

  return (
    <a
      href="tel:+15146673911"
      className={`${baseClasses} ${className}`}
      aria-label="Call Clinique Atwater at (514) 667-3911"
    >
      <Phone size={20} />
      <span>Call Now</span>
    </a>
  )
}
