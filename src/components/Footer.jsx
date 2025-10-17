import { Link } from 'react-router-dom'
import { Zap, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-2xl font-poppins font-bold text-primary">
                FULGER
              </span>
            </div>
            <p className="text-light text-sm leading-relaxed">
              <strong className="text-white">Evacuator Chișinău</strong> rapid și profesionist. Tractare auto 24/7, intervenție sub 20 minute în Chișinău și Moldova.
            </p>
            <p className="text-primary font-bold text-sm">
              ⚡ Rapid ca Fulgerul, la orice oră.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-bold text-white">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+37360000000"
                className="flex items-center space-x-3 text-light hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+373 60 000 000</span>
              </a>
              <a
                href="mailto:info@fulger.md"
                className="flex items-center space-x-3 text-light hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@fulger.md</span>
              </a>
              <div className="flex items-center space-x-3 text-light">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Chișinău, Republica Moldova</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-bold text-white">
              Linkuri rapide
            </h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-light hover:text-primary transition-colors"
              >
                Evacuator Chișinău
              </Link>
              <Link
                to="/servicii"
                className="block text-light hover:text-primary transition-colors"
              >
                Servicii evacuator Chișinău
              </Link>
              <Link
                to="/preturi"
                className="block text-light hover:text-primary transition-colors"
              >
                Prețuri tractare Chișinău
              </Link>
              <Link
                to="/despre"
                className="block text-light hover:text-primary transition-colors"
              >
                Despre evacuator Fulger
              </Link>
              <Link
                to="/contact"
                className="block text-light hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-light text-sm">
          <p>
            &copy; {currentYear} <strong className="text-white">Evacuator Fulger Chișinău</strong>. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
