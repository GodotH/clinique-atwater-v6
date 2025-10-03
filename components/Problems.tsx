"use client"

import { useTranslations } from "../app/i18n/client"
import { AlertCircle, Activity, Zap, Target } from "lucide-react"

export default function Problems() {
  const t = useTranslations()

  const conditions = [
    {
      icon: AlertCircle,
      title: t.problems.chronic.title,
      description: t.problems.chronic.description,
    },
    {
      icon: Zap,
      title: t.problems.nerve.title,
      description: t.problems.nerve.description,
    },
    {
      icon: Activity,
      title: t.problems.joint.title,
      description: t.problems.joint.description,
    },
    {
      icon: Target,
      title: t.problems.sports.title,
      description: t.problems.sports.description,
    },
  ]

  return (
    <section id="problems" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            {t.problems.title}
          </h2>
          <p className="text-xl text-brand-teal-600 font-semibold">
            {t.problems.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {conditions.map((condition, index) => {
            const IconComponent = condition.icon
            return (
              <div key={index} className="condition-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-teal-600/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-brand-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink-900 mb-2">
                      {condition.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {condition.description}
                    </p>
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