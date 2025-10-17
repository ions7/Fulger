import { useState } from 'react'
import { Globe, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ]

  const currentLang = languages.find(lang => lang.code === language)

  return (
    <>
      {/* Floating Button - Visible only on mobile/tablet */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-24 left-6 z-40 bg-primary text-dark p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
        aria-label="Change language"
      >
        <div className="relative">
          <Globe className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 text-xs font-bold">
            {currentLang?.flag}
          </span>
        </div>
      </button>

      {/* Bottom Sheet Modal - Mobile */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex items-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Bottom Sheet */}
          <div className="relative w-full bg-dark border-t-2 border-primary rounded-t-3xl p-6 animate-slide-up">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-light hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-primary font-bold">Select Language</span>
              </div>
              <p className="text-light text-sm">
                Choose your preferred language
              </p>
            </div>

            {/* Language Options - Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`flex flex-col items-center space-y-3 p-5 rounded-2xl transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-primary text-dark shadow-xl shadow-primary/30 scale-105'
                      : 'bg-dark/50 text-white hover:bg-primary/10 border border-primary/20 hover:scale-105'
                  }`}
                >
                  <span className="text-5xl">{lang.flag}</span>
                  <div className="text-center">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      language === lang.code ? 'text-dark' : 'text-primary'
                    }`}>
                      {lang.code}
                    </div>
                    <div className={`text-xs ${
                      language === lang.code ? 'text-dark/80' : 'text-light'
                    }`}>
                      {lang.name}
                    </div>
                  </div>
                  {language === lang.code && (
                    <div className="flex items-center space-x-1 text-dark">
                      <div className="w-2 h-2 rounded-full bg-dark"></div>
                      <span className="text-xs font-semibold">Active</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Current Selection Info */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
                <span className="text-sm text-light">Current:</span>
                <span className="text-2xl">{currentLang?.flag}</span>
                <span className="text-sm font-bold text-primary">{currentLang?.name}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LanguageToggle
