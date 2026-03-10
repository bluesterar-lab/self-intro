'use client'
import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext<any>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('zh')
  const t = (zh: string, en: string) => (language === 'zh' ? zh : en)
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
