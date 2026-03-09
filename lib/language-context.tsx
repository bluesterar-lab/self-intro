"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type Lang = "zh" | "en"

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"))
  }, [])

  const value = useMemo(() => ({ lang, toggleLang }), [lang, toggleLang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLang must be used within a LanguageProvider")
  }
  return context
}

// Bilingual text helper
export function t(lang: Lang, zh: string, en: string): string {
  return lang === "zh" ? zh : en
}
