"use client"

import { useTranslations } from "../app/i18n/client"
import { Clock, FileText, Shield, CreditCard } from "lucide-react"

export default function Pricing() {
  const t = useTranslations()

  const insuranceProviders = [
    "Desjardins",
    "Manulife", 
    "Blue Cross",
    "Sun Life",
    "Canada Life"
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t.rates.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing for quality care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Initial Visit Options */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-center text-ink-900 mb-10">
              {t.rates.initialOptions}
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard Initial */}
              <div className="service-card">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-brand-teal-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-7 h-7 text-brand-teal-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-ink-900">
                    {t.rates.initial.standard.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {t.rates.initial.standard.includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-brand-teal-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complete Initial */}
              <div className="service-card border-2 border-leaf-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-leaf-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  Recommended
                </div>
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-leaf-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-7 h-7 text-leaf-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-ink-900">
                    {t.rates.initial.complete.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {t.rates.initial.complete.includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-leaf-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Follow-up Visits */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-center text-ink-900 mb-10">
              {t.rates.followUp}
            </h3>

            <div className="bg-white border border-slate-200 rounded-card p-8 shadow-sm max-w-2xl mx-auto">
              <ul className="space-y-4">
                {t.rates.followUpOptions.map((option, index) => (
                  <li key={index} className="flex items-center justify-between py-3 border-b border-slate-200 last:border-b-0">
                    <span className="text-slate-700 font-medium">{option}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-600 mt-6 italic">
                {t.rates.additionalCharges}
              </p>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-slate-200 rounded-card p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-brand-teal-600/10 rounded-xl flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-brand-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-ink-900">
                  {t.rates.cancellation.title}
                </h3>
              </div>

              <p className="text-slate-600 mb-4">
                {t.rates.cancellation.description}
              </p>

              <ul className="space-y-3 mb-6">
                {t.rates.cancellation.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-brand-teal-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-slate-700 font-medium">
                {t.rates.cancellation.responsibility}
              </p>
            </div>

            {/* Insurance Coverage */}
            <div className="bg-white border border-slate-200 rounded-card p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-leaf-500/10 rounded-xl flex items-center justify-center mr-3">
                  <CreditCard className="w-5 h-5 text-leaf-500" />
                </div>
                <h3 className="text-xl font-semibold text-ink-900">
                  {t.rates.insurance.title}
                </h3>
              </div>

              <p className="text-slate-600 mb-6">
                {t.rates.insurance.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider, index) => (
                  <div key={index} className="bg-mist-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-lg text-center text-sm font-medium">
                    {provider}
                  </div>
                ))}
                <div className="bg-mist-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-lg text-center text-sm font-medium">
                  + Many More
                </div>
              </div>
            </div>
          </div>

          {/* Download Forms CTA */}
          <div className="text-center bg-mist-50 border border-slate-200 rounded-card p-8">
            <div className="w-14 h-14 bg-brand-teal-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-7 h-7 text-brand-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-ink-900 mb-4">
              {t.rates.downloadForms}
            </h3>
            <p className="text-slate-600 mb-6">
              Save time during your visit by completing your forms in advance.
            </p>
            <button className="px-8 py-3 bg-white text-brand-teal-600 border-2 border-brand-teal-600 font-semibold rounded-xl hover:bg-brand-teal-600 hover:text-white transition-all duration-300">
              Download Forms
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}