"use client"

import { useTranslations } from "../app/i18n/client"
import { Stethoscope, Activity, Trophy, Heart } from "lucide-react"

export default function Services() {
  const t = useTranslations()

  const services = [
    {
      icon: Stethoscope,
      title: t.services.chiropractic.title,
      description: t.services.chiropractic.description,
      benefits: t.services.chiropractic.benefits,
    },
    {
      icon: Activity,
      title: t.services.kinesiology.title,
      description: t.services.kinesiology.description,
      benefits: t.services.kinesiology.benefits,
    },
    {
      icon: Trophy,
      title: t.services.sports.title,
      description: t.services.sports.description,
      benefits: t.services.sports.benefits,
    },
    {
      icon: Heart,
      title: t.services.pain.title,
      description: t.services.pain.description,
      benefits: t.services.pain.benefits,
    },
  ]

  return (
    <section id="services" className="section-padding bg-mist-50">
      <div className="container-custom">
        <div className="text-center mb-20">
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

          {/* Three main factors */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white border border-slate-200 p-6 rounded-card shadow-sm">
              <p className="font-semibold text-slate-700">
                {t.services.factors.biomechanical}
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-card shadow-sm">
              <p className="font-semibold text-slate-700">
                {t.services.factors.biochemical}
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-card shadow-sm">
              <p className="font-semibold text-slate-700">
                {t.services.factors.emotional}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-ink-900 mb-12">
            {t.services.servicesTitle}
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="service-card">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-teal-600/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-brand-teal-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-ink-900 mb-4">
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
                          <li key={benefitIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-leaf-500 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-slate-600 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}