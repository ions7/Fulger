import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, Phone, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const location = useLocation()
  const { language, changeLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/servicii' },
    { name: t('nav.prices'), href: '/preturi' },
    { name: t('nav.about'), href: '/despre' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const languages = [
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ]

  const currentLang = languages.find(lang => lang.code === language)

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/98 backdrop-blur-lg shadow-lg shadow-primary/5' : 'bg-dark/95 backdrop-blur-md'
    } border-b border-primary/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-xl sm:text-2xl font-poppins font-bold text-white tracking-tight">
              FULGER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigation.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Selector - Desktop (Inline Buttons) */}
            <div className="flex items-center space-x-1 bg-dark/50 border border-primary/20 rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    language === lang.code
                      ? 'bg-primary text-dark shadow-lg'
                      : 'text-white hover:bg-primary/10 hover:text-primary'
                  }`}
                  title={lang.name}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span className="hidden lg:inline">{lang.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
            
            <a
              href="tel:+37360000000"
              className="flex items-center space-x-2 bg-primary text-dark px-5 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{t('nav.callNow')}</span>
              <span className="lg:hidden">{t('nav.callNow').split(' ')[0]}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-dark/98 backdrop-blur-lg z-40 animate-fade-in">
          <div className="h-full overflow-y-auto">
            <div className="px-6 py-8 space-y-3">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-primary/10 text-primary border border-primary/30'
                      : 'text-white hover:bg-primary/5 hover:text-primary border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Language Selector - Mobile (Improved) */}
              <div className="pt-6 pb-4">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-semibold">Choose Language</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`flex flex-col items-center space-y-2 p-4 rounded-2xl text-center font-semibold transition-all duration-200 ${
                        language === lang.code
                          ? 'bg-primary text-dark shadow-xl scale-105'
                          : 'bg-dark/50 text-white hover:bg-primary/10 hover:text-primary border border-primary/20'
                      }`}
                    >
                      <span className="text-4xl">{lang.flag}</span>
                      <span className="text-xs uppercase tracking-wide">{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA Button */}
              <a
                href="tel:+37360000000"
                className="flex items-center justify-center space-x-3 bg-primary text-dark px-6 py-4 rounded-2xl font-bold text-lg mt-6 shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                <span>📞 {t('hero.callButton')}</span>
              </a>

              {/* WhatsApp Button on Mobile */}
              <a
                href="https://wa.me/37360000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#20BA5A] hover:scale-105 transition-all"
              >
                <span>💬</span>
                <span>{t('hero.whatsappButton')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
