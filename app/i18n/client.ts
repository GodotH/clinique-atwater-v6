"use client"

import { useParams } from "next/navigation"
import { useMemo } from "react"
import { getTranslation } from "./server"
import type { ValidLocale } from "./config"

export function useTranslations() {
  const params = useParams()
  const locale = (params?.lang as ValidLocale) || "en"

  const translations = useMemo(() => {
    return getTranslation(locale as ValidLocale)
  }, [locale])

  return translations
}