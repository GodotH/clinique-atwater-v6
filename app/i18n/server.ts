import type { ValidLocale } from "./config"
import en from "../../locales/en/common.json"
import fr from "../../locales/fr/common.json"

const translations = {
  en,
  fr,
}

export function getTranslation(locale: ValidLocale) {
  return translations[locale] || translations.en
}