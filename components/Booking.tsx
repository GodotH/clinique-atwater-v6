"use client"

import { useState } from "react"
import { useTranslations } from "../app/i18n/client"
import { Calendar, Send, CheckCircle } from "lucide-react"

export default function Booking() {
  const t = useTranslations()
  const [selectedConcern, setSelectedConcern] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { ...formData, concern: selectedConcern })
    // Show success message or redirect
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="booking" className="section-padding bg-gradient-to-br from-trust-blue-50 to-healing-green-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section font-bold text-professional-navy-800 mb-4">
            {t.booking.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.booking.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Primary Concerns Selection */}
            <div>
              <h3 className="text-2xl font-semibold text-professional-navy-800 mb-6">
                {t.booking.primaryConcern}
              </h3>
              
              <div className="grid gap-3">
                {t.booking.concerns.map((concern, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedConcern === concern
                        ? 'border-trust-blue-500 bg-trust-blue-50'
                        : 'border-gray-200 hover:border-trust-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="concern"
                      value={concern}
                      checked={selectedConcern === concern}
                      onChange={(e) => setSelectedConcern(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedConcern === concern
                        ? 'border-trust-blue-500 bg-trust-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedConcern === concern && (
                        <CheckCircle className="w-3 h-3 text-white fill-current" />
                      )}
                    </div>
                    <span className="text-gray-700 font-medium">{concern}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-medical">
                <div className="text-center mb-6">
                  <Calendar className="w-12 h-12 text-healing-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-professional-navy-800">
                    Book Your Consultation
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      placeholder="(514) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us more about your pain or condition..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cta-primary flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t.booking.cta}</span>
                  </button>
                </div>

                <p className="text-xs text-gray-600 text-center mt-4">
                  By submitting this form, you agree to be contacted by our clinic team. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}