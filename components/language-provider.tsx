'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'ru' | 'et'

const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguage] = useState<Language>('ru')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    if (savedLanguage === 'ru' || savedLanguage === 'et') setLanguage(savedLanguage)
    document.documentElement.lang = savedLanguage === 'et' ? 'et' : 'ru'
  }, [])

  function changeLanguage(nextLanguage: Language) {
    window.localStorage.setItem('portfolio-language', nextLanguage)
    document.documentElement.lang = nextLanguage
    setLanguage(nextLanguage)
  }

  return <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-switch" role="group" aria-label="Language">
      <button type="button" onClick={() => setLanguage('ru')} aria-pressed={language === 'ru'}>RU</button>
      <span />
      <button type="button" onClick={() => setLanguage('et')} aria-pressed={language === 'et'}>ET</button>
    </div>
  )
}
