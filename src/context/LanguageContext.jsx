import { createContext, useContext, useState, useEffect } from 'react'
import ro from '../translations/ro.json'
import ru from '../translations/ru.json'
import en from '../translations/en.json'

const LanguageContext = createContext()

const translations = { ro, ru, en }

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to 'ro'
    return localStorage.getItem('language') || 'ro'
  })

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language)
    
    // Update HTML lang attribute for SEO
    document.documentElement.lang = language
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
