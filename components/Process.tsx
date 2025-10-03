"use client"

import Link from "next/link"
import { useTranslations } from "../app/i18n/client"
import { useParams } from "next/navigation"
import { Calendar, UserCheck, Heart } from "lucide-react"

export default function Process() {
  const t = useTranslations()
  const params = useParams()
  const currentLang = params?.lang as string

  const processIcons = [Calendar, UserCheck, Heart]

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section font-bold text-professional-navy-800 mb-4">
            {t.process.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.process.steps.map((step, index) => {
            const IconComponent = processIcons[index]
            return (
              <div key={index} className="process-step">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-trust-blue-600 to-healing-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                
                <div className="mt-8">
                  <IconComponent className="w-16 h-16 text-healing-green-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-professional-navy-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-professional-navy-800 mb-6">
            {t.process.ready}
          </p>
          <Link 
            href={`/${currentLang}#booking`}
            className="cta-primary"
          >
            {t.process.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}