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
        {/* Floating Button - Enhanced for mobile with larger touch target */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden fixed bottom-24 left-4 z-40 bg-primary text-primary-foreground p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-slow min-w-[56px] min-h-[56px] flex items-center justify-center"
            aria-label="Change language"
            aria-expanded={isOpen}
        >
          <div className="relative">
            <Globe className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 text-lg">
            {currentLang?.flag}
          </span>
          </div>
        </button>

        {/* Bottom Sheet Modal - Enhanced UX */}
        {isOpen && (
            <div className="md:hidden fixed inset-0 z-50 flex items-end">
              {/* Backdrop with better opacity */}
              <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-scale-in"
                  onClick={() => setIsOpen(false)}
                  aria-hidden="true"
              ></div>

              {/* Bottom Sheet - Improved spacing and padding */}
              <div className="relative w-full bg-card border-t-2 border-primary rounded-t-3xl shadow-2xl animate-slide-up">
                {/* Swipe indicator */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-12 h-1.5 bg-muted rounded-full"></div>
                </div>

                {/* Close Button - Larger touch target */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Close language selector"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="px-6 pb-8 pt-2">
                  {/* Title with better hierarchy */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="text-primary font-bold text-base">Select Language</span>
                    </div>
                    <p className="text-muted-foreground text-sm px-4">
                      Choose your preferred language
                    </p>
                  </div>

                  {/* Language Options - Responsive Grid with better spacing */}
                  <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-6">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                              changeLanguage(lang.code)
                              setIsOpen(false)
                            }}
                            className={`
                      flex flex-col items-center justify-center space-y-2 py-6 px-3 rounded-2xl 
                      transition-all duration-300 min-h-[120px] active:scale-95
                      ${language === lang.code
                                ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                : 'bg-muted/50 hover:bg-muted border border-border hover:scale-105'
                            }
                    `}
                            aria-label={`Switch to ${lang.name}`}
                            aria-pressed={language === lang.code}
                        >
                    <span className="text-5xl mb-1" role="img" aria-label={`${lang.name} flag`}>
                      {lang.flag}
                    </span>
                          <div className="text-center">
                            <div className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${
                                language === lang.code ? 'text-primary-foreground' : 'text-primary'
                            }`}>
                              {lang.code}
                            </div>
                            <div className={`text-xs leading-tight ${
                                language === lang.code ? 'text-primary-foreground/80' : 'text-muted-foreground'
                            }`}>
                              {lang.name}
                            </div>
                          </div>
                          {language === lang.code && (
                              <div className="flex items-center space-x-1.5 mt-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse"></div>
                                <span className="text-xs font-semibold">Active</span>
                              </div>
                          )}
                        </button>
                    ))}
                  </div>

                  {/* Current Selection Info */}
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-3 bg-muted/50 border border-border rounded-full px-5 py-3">
                      <span className="text-sm text-muted-foreground">Current:</span>
                      <span className="text-2xl" role="img" aria-hidden="true">{currentLang?.flag}</span>
                      <span className="text-sm font-bold text-foreground">{currentLang?.name}</span>
                    </div>
                  </div>

                  {/* Safe area for mobile devices */}
                  <div className="h-4"></div>
                </div>
              </div>
            </div>
        )}
      </>
  )
}

export default LanguageToggle
