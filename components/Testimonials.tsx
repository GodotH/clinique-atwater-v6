"use client"

import { useTranslations } from "../app/i18n/client"
import { Star } from "lucide-react"

export default function Testimonials() {
  const t = useTranslations()

  return (
    <section id="testimonials" className="section-padding bg-mist-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {t.testimonials.reviews.map((review, index) => (
            <div key={index} className="testimonial-card group">
              <div className="mb-6">
                <div className="flex text-leaf-500 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-ink-900 mb-6">
                  {review.title}
                </h4>
                <blockquote className="text-slate-700 leading-relaxed italic text-lg">
                  "{review.content}"
                </blockquote>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-teal-600 to-leaf-500 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-ink-900 text-base">
                    {review.name}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}