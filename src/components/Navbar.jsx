import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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
    { name: 'Acasă', href: '/' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Prețuri', href: '/preturi' },
    { name: 'Despre', href: '/despre' },
    { name: 'Contact', href: '/contact' },
  ]

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
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
            <a
              href="tel:+37360000000"
              className="flex items-center space-x-2 bg-primary text-dark px-5 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Sună acum</span>
              <span className="lg:hidden">Sună</span>
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
              
              {/* Mobile CTA Button */}
              <a
                href="tel:+37360000000"
                className="flex items-center justify-center space-x-3 bg-primary text-dark px-6 py-4 rounded-2xl font-bold text-lg mt-8 shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                <span>📞 Sună acum - Urgent</span>
              </a>

              {/* WhatsApp Button on Mobile */}
              <a
                href="https://wa.me/37360000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#20BA5A] hover:scale-105 transition-all"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
