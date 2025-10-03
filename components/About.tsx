"use client"

import { useTranslations } from "../app/i18n/client"
import { Award, Users, Target, Heart } from "lucide-react"

export default function About() {
  const t = useTranslations()

  const certifications = [
    "ICAK - International College of Applied Kinesiology",
    "CCA - Canadian Chiropractic Association", 
    "ACQ - Quebec Chiropractic Association",
    "OCQ - Chiropractic Order of Quebec"
  ]

  return (
    <section id="about" className="section-padding bg-mist-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-2xl md:text-3xl text-brand-teal-600 font-bold mb-10">
              {t.about.subtitle}
            </p>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                {t.about.story}
              </p>
              <p className="text-lg">
                {t.about.experience}
              </p>
              <p className="text-lg">
                {t.about.approach}
              </p>
              <p className="text-lg">
                {t.about.philosophy}
              </p>
              <blockquote className="text-xl font-semibold text-brand-teal-700 italic border-l-4 border-brand-teal-600 pl-6 py-4 bg-mist-50">
                {t.about.conviction}
              </blockquote>
            </div>
          </div>

          {/* Image/Stats Side */}
          <div>
            {/* Doctor Image Placeholder */}
            <div className="bg-mist-50 border border-slate-200 rounded-card p-8 mb-8">
              <div className="aspect-square bg-gradient-to-br from-brand-teal-600/10 to-leaf-500/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white border-4 border-brand-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-16 h-16 text-brand-teal-600" />
                  </div>
                  <p className="text-ink-900 font-semibold text-lg">Dr. Simon Tanguay</p>
                  <p className="text-slate-600">Chiropractor</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-slate-200 rounded-card p-6 shadow-sm">
              <h3 className="font-semibold text-ink-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-leaf-500" />
                {t.benefits.certifications}
              </h3>
              <ul className="space-y-3 text-sm">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-leaf-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* First Visit Section */}
        <div className="mt-20 bg-mist-50 border border-slate-200 rounded-card p-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-ink-900 mb-12">
            {t.firstVisit.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {t.firstVisit.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-teal-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0 mt-1 shadow-sm">
                  {index + 1}
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}