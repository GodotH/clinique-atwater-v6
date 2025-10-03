import type React from "react"
import type { Metadata } from "next"
import { locales } from "../i18n/config"
import { getTranslation } from "../i18n/server"
import type { ValidLocale } from "../i18n/config"

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const t = getTranslation(params.lang as ValidLocale)
  
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      languages: {
        'en': '/en',
        'fr': '/fr',
      },
    },
  }
}

export default function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body>
        {children}
      </body>
    </html>
  )
}