'use client'
import React, { createContext, useContext, useState } from 'react'

// 1. 独立导出翻译工具函数 t，接受 lang 作为第一个参数
export const t = (lang: string, zh: string, en: string) => (lang === 'zh' ? zh : en)

const LanguageContext = createContext<any>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 2. 状态名改为 lang，以匹配 const { lang } = useLang()
  const [lang, setLang] = useState('zh')

  // 3. 新增 toggleLang 方法，以匹配组件里的调用
  const toggleLang = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 4. 钩子名称改为 useLang
export function useLang() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLang must be used within a LanguageProvider')
  }
  return context
}
