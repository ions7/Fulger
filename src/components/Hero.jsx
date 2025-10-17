import { Phone, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80)',
            }}
        ></div>

        {/* Dark Overlay (makes image barely visible) */}
        <div className="absolute inset-0 bg-dark/60"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,212,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,212,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-3 mb-6 sm:mb-8 animate-slide-up backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
            <span className="text-primary text-sm sm:text-base font-semibold">{t('hero.badge')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-white mb-4 sm:mb-6 leading-tight animate-slide-up px-2">
            {t('hero.title')}{' '}
            <span className="text-primary block sm:inline mt-2 sm:mt-0">{t('hero.titleHighlight')}</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-light max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-up px-4">
            {t('hero.subtitle')} <span className="text-primary font-semibold">{t('hero.subtitleBrand')}</span> {t('hero.subtitleContinue')}
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">{t('hero.description')}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <a
                href="tel:+37360000000"
                className="flex items-center space-x-3 bg-primary text-dark px-8 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/40 glow-primary hover:glow-primary-lg w-full sm:w-auto justify-center group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>{t('hero.callButton')}</span>
            </a>
            <a
                href="https://wa.me/37360000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#25D366] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 shadow-xl shadow-[#25D366]/30 w-full sm:w-auto justify-center group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>{t('hero.whatsappButton')}</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">
                {t('hero.stats.availability')}
              </div>
              <div className="text-sm text-light">
                {t('hero.stats.availabilityLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">
                {t('hero.stats.response')}
              </div>
              <div className="text-sm text-light">
                {t('hero.stats.responseLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">
                {t('hero.stats.experience')}
              </div>
              <div className="text-sm text-light">
                {t('hero.stats.experienceLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">
                {t('hero.stats.clients')}
              </div>
              <div className="text-sm text-light">
                {t('hero.stats.clientsLabel')}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero