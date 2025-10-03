export const defaultLocale = "en"
export const locales = ["en", "fr"] as const
export type ValidLocale = (typeof locales)[number]