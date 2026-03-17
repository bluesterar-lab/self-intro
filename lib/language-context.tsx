'use client'
import React, { createContext, useContext, useState } from 'react'

// 1. 独立导出翻译工具函数
export const t = (lang: string, zh: string, en: string) => (lang === 'zh' ? zh : en)

const LanguageContext = createContext<any>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('zh')

  const toggleLang = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 2. 导出 useLang 钩子
export function useLang() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLang must be used within a LanguageProvider')
  }
  return context
}
