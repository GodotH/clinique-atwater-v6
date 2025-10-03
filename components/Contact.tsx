"use client"

import { useTranslations } from "../app/i18n/client"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import CallNowButton from "./CallNowButton"

export default function Contact() {
  const t = useTranslations()

  const scheduleItems = [
    t.clinic.schedule.monday,
    t.clinic.schedule.tuesday,
    t.clinic.schedule.wednesday,
    t.clinic.schedule.thursday,
    t.clinic.schedule.friday,
    t.clinic.schedule.weekend
  ]

  return (
    <section id="contact" className="section-padding bg-mist-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            {t.clinic.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.clinic.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-semibold text-ink-900 mb-8">
              {t.clinic.contact}
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-teal-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink-900 mb-1">Address</h4>
                  <p className="text-slate-600">{t.clinic.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-leaf-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-leaf-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink-900 mb-1">Phone</h4>
                  <a
                    href={`tel:${t.clinic.phone}`}
                    className="text-brand-teal-600 hover:text-brand-teal-700 font-medium transition-colors"
                  >
                    {t.clinic.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-teal-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${t.clinic.email}`}
                    className="text-brand-teal-600 hover:text-brand-teal-700 font-medium transition-colors"
                  >
                    {t.clinic.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-ink-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-leaf-500/10 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-leaf-500" />
                </div>
                {t.clinic.hours}
              </h3>

              <div className="bg-white border border-slate-200 rounded-card p-6 shadow-sm">
                <div className="space-y-3">
                  {scheduleItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <CallNowButton className="w-full py-4 text-lg" />
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <div className="bg-white border border-slate-200 rounded-card p-8 h-full min-h-[500px] flex items-center justify-center shadow-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-teal-600/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-brand-teal-600" />
                </div>
                <h4 className="text-2xl font-semibold text-ink-900 mb-2">
                  Find Us in Montreal
                </h4>
                <p className="text-slate-600 mb-4">
                  Located in the heart of downtown Montreal
                </p>
                <p className="text-sm text-slate-600 mb-8">
                  Easy access by metro, bus, and car parking available
                </p>
                <div className="mt-6">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(t.clinic.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-brand-teal-600 border-2 border-brand-teal-600 font-semibold rounded-xl hover:bg-brand-teal-600 hover:text-white transition-all duration-300"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}