import { Link, useLocation } from 'react-router-dom'
import { Zap, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const location = useLocation()
  const { t, language, changeLanguage } = useLanguage()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/servicii' },
    { name: t('nav.prices'), href: '/preturi' },
    { name: t('nav.about'), href: '/despre' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const languages = [
    { code: 'ro', flag: '🇷🇴' },
    { code: 'ru', flag: '🇷🇺' },
    { code: 'en', flag: '🇬🇧' },
  ]

  const isActive = (path) => location.pathname === path

  return (
      <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 14,
            duration: 0.6,
          }}
          className="fixed top-0 left-0 right-0 z-[100] bg-dark/95 backdrop-blur-lg border-b border-primary/10 shadow-lg shadow-primary/5 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* 🔹 Logo */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-xl sm:text-2xl font-poppins font-bold text-white tracking-tight">
                FULGER
              </span>
              </Link>
            </motion.div>

            {/* 🔹 Desktop Navigation */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="hidden md:flex items-center space-x-4 lg:space-x-6"
            >
              {navigation.map((link) => (
                  <Link
                      key={link.href}
                      to={link.href}
                      className={`text-sm font-medium transition-all hover:scale-105 ${
                          isActive(link.href)
                              ? 'text-primary'
                              : 'text-white hover:text-primary'
                      }`}
                  >
                    {link.name}
                  </Link>
              ))}

              {/* 🔸 Language Selector (desktop) */}
              <div className="flex items-center space-x-1 bg-dark/50 border border-primary/20 rounded-full p-1 ml-2">
                {languages.map((lang) => (
                    <motion.button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        whileHover={{
                          scale: 1.08,
                          boxShadow: '0 0 10px rgba(255,215,0,0.4)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                            language === lang.code
                                ? 'bg-primary text-dark shadow-lg'
                                : 'text-white hover:bg-primary/10 hover:text-primary'
                        }`}
                        title={lang.name}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span className="hidden lg:inline">{lang.code.toUpperCase()}</span>
                    </motion.button>
                ))}
              </div>

              {/* 🔸 Call button */}
              <motion.a
                  href="tel:+37360000000"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-primary text-dark px-5 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <Phone className="w-4 h-4" />
                <span>{t('nav.callNow')}</span>
              </motion.a>
            </motion.div>

            {/* 🔹 Mobile Language Buttons (instead of hamburger) */}
            <div className="flex items-center space-x-2 md:hidden bg-dark/60 border border-primary/20 rounded-full px-2 py-1.5">
              {languages.map((lang) => (
                  <motion.button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 10px rgba(255,215,0,0.4)',
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`px-2 py-1 rounded-full text-xs ${
                          language === lang.code
                              ? 'bg-primary text-dark'
                              : 'text-white hover:text-primary hover:bg-primary/10'
                      }`}
                  >
                    {lang.flag}
                  </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
  )
}

export default Navbar
