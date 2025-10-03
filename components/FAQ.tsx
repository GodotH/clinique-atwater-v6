"use client"

import { useState } from "react"
import { useTranslations } from "../app/i18n/client"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const t = useTranslations()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" className="section-padding bg-faq">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            {t.faq.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {t.faq.questions.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question w-full text-left flex items-center justify-between p-8 transition-all duration-200 ${
                  openItems.includes(index) ? 'bg-mist-50' : 'hover:bg-mist-50'
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-ink-900 pr-8 text-lg">
                  {item.question}
                </span>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openItems.includes(index) ? 'rotate-180' : 'rotate-0'
                }`}>
                  <ChevronDown className="w-6 h-6 text-brand-teal-600" />
                </div>
              </button>

              <div
                className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-4 border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}