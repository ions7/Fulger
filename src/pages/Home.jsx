import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import StepsSection from '../components/StepsSection'
import ServiceCard from '../components/ServiceCard'
import Testimonials from '../components/Testimonials'
import { Truck, Clock, Shield, Wrench, Phone, MapPin } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Truck,
      title: 'Tractare Auto',
      description: 'Transport rapid și sigur al vehiculului tău în orice punct din Moldova.',
      features: ['Până la 5 tone', 'Echipament modern', 'Șoferi experimentați'],
      image: 'https://images.unsplash.com/photo-1581092918484-8313d3a0e0a2?w=800&q=80',
    },
    {
      icon: Wrench,
      title: 'Asistență Rutieră',
      description: 'Rezolvare imediată: pană, baterie descărcată, cheie blocată.',
      features: ['Intervenție în 15-20 min', 'Echipă profesionistă', 'Preț transparent'],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    },
    {
      icon: Clock,
      title: 'Disponibili 24/7',
      description: 'Non-stop, la orice oră din zi sau noapte, inclusiv sărbători.',
      features: ['Luni-Duminică', 'Orice condiție meteo', 'Răspuns imediat'],
      image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80',
    },
    {
      icon: Shield,
      title: 'Transport Sigur',
      description: 'Îngrijim mașina ta ca pe a noastră. Siguranță garantată.',
      features: ['Asigurare inclusă', 'Tracțiune sigură', 'Fără deteriorări'],
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Evacuator Fulger",
    "image": "https://fulger.md/logo.jpg",
    "url": "https://fulger.md",
    "telephone": "+37360000000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chișinău",
      "addressCountry": "MD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.0105",
      "longitude": "28.8638"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://facebook.com/fulger.md",
      "https://instagram.com/fulger.md"
    ]
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cât costă evacuarea auto în Chișinău?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prețurile încep de la 300 lei pentru tractare în oraș. Tariful final depinde de distanță și tip vehicul. Contactați-ne pentru o ofertă exactă."
        }
      },
      {
        "@type": "Question",
        "name": "În cât timp ajunge Fulger?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timpul mediu de răspuns este sub 20 de minute în Chișinău. Suntem disponibili 24/7, inclusiv în weekenduri și sărbători."
        }
      },
      {
        "@type": "Question",
        "name": "Deserviți doar Chișinău?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nu, deservim întreaga Republică Moldova. Tractare rapidă în Chișinău și transport în orice localitate din țară."
        }
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Evacuator Chișinău",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Evacuator Fulger",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chișinău",
        "addressCountry": "MD"
      },
      "telephone": "+37360000000"
    },
    "areaServed": {
      "@type": "City",
      "name": "Chișinău"
    },
    "description": "Servicii profesionale de evacuator și tractare auto în Chișinău, disponibile 24/7 cu intervenție rapidă în sub 20 minute",
    "offers": {
      "@type": "Offer",
      "priceRange": "300-500 MDL"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+373-60-000-000",
        "contactType": "Emergency Service",
        "availableLanguage": ["Romanian", "Russian"]
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Evacuator Chișinău – Fulger.md | Tractare Auto Non-Stop 24/7</title>
        <meta
          name="description"
          content="Evacuator Chișinău Fulger - intervenim 24/7 în sub 20 minute. Tractare auto profesionistă, asistență rutieră non-stop în Chișinău și Moldova. Sună: +373 60 000 000"
        />
        <meta property="og:title" content="Evacuator Fulger – Tractare Rapidă în Chișinău" />
        <meta property="og:description" content="Echipa Fulger intervine imediat. Tractare auto 24/7 în Chișinău și toată Moldova." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fulger.md" />
        <meta property="og:image" content="https://fulger.md/og-image.jpg" />
        <link rel="canonical" href="https://fulger.md" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <Hero />

      <StepsSection />

      {/* SEO Content Section */}
      <section className="py-16 bg-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-poppins font-bold text-white mb-6">
              Evacuator Profesionist în Chișinău - Fulger.md
            </h2>
            <p className="text-light text-lg leading-relaxed mb-4">
              Când ai nevoie de un <strong className="text-primary">evacuator în Chișinău</strong>, 
              Fulger este alegerea de încredere. Cu peste 10 ani de experiență în{' '}
              <strong className="text-primary">tractare auto Chișinău</strong> și{' '}
              <strong className="text-primary">asistență rutieră non-stop</strong>, suntem 
              echipa pe care o poți apela oricând.
            </p>
            
            <p className="text-light text-lg leading-relaxed mb-4">
              <strong className="text-white">Evacuator Fulger Chișinău</strong> deservește 
              toate sectoarele capitalei: <strong className="text-primary">Botanica, Centru, 
              Buiucani, Rîșcani, Ciocana</strong> și zone limitrofe. Indiferent unde te afli 
              în Chișinău, <strong className="text-primary">evacuatorul nostru ajunge în mai 
              puțin de 20 de minute</strong>.
            </p>

            <h3 className="text-2xl font-poppins font-bold text-white mb-4 mt-8">
              De ce ai nevoie de Evacuator Fulger în Chișinău?
            </h3>
            <p className="text-light text-lg leading-relaxed mb-4">
              Un <strong className="text-primary">evacuator profesionist în Chișinău</strong> face 
              diferența între o zi stresantă și o problemă rezolvată rapid. Echipa Fulger oferă:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <span className="text-light text-lg">
                  <strong className="text-white">Tractare auto rapidă în Chișinău</strong> - 
                  Intervenție în sub 20 minute
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <span className="text-light text-lg">
                  <strong className="text-white">Asistență rutieră completă</strong> - 
                  Baterie descărcată, pană, cheie blocată
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <span className="text-light text-lg">
                  <strong className="text-white">Transport sigur</strong> - 
                  Platforme hidraulice moderne pentru orice tip de vehicul
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <span className="text-light text-lg">
                  <strong className="text-white">Prețuri transparente</strong> - 
                  Fără costuri ascunse, tarife comunicate din start
                </span>
              </li>
            </ul>

            <p className="text-light text-lg leading-relaxed">
              Apelează <strong className="text-primary">Evacuator Fulger Chișinău</strong> la{' '}
              <a href="tel:+37360000000" className="text-primary font-bold hover:underline">
                +373 60 000 000
              </a>{' '}
              și primești ajutor imediat, 24 de ore din 24, 7 zile din 7. 
              Suntem <strong className="text-white">evacuatorul de încredere al Chișinăului</strong>!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              Servicii Evacuator Chișinău - <span className="text-primary">Tractare Profesionistă</span>
            </h2>
            <p className="text-light text-lg max-w-2xl mx-auto">
              Oferim soluții complete pentru orice situație rutieră
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              De ce alegi Evacuator <span className="text-primary">Fulger</span> în Chișinău?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-white mb-2">
                Evacuator Rapid în Chișinău - Sub 20 Minute
              </h3>
              <p className="text-light">
                Ajungem în mai puțin de 20 de minute. Când ai nevoie, suntem deja în drum.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-white mb-2">
                Siguranță Garantată - Evacuator Profesionist
              </h3>
              <p className="text-light">
                Echipament profesional și asigurare completă. Mașina ta e în mâini sigure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-white mb-2">
                Asistență Non-Stop 24/7 Chișinău
              </h3>
              <p className="text-light">
                Disponibili 24/7, inclusiv weekenduri și sărbători. Un apel și suntem acolo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Map Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              Zone Deservite de Evacuator <span className="text-primary">Fulger</span> în Chișinău
            </h2>
            <p className="text-light text-lg">
              Evacuator profesionist în Chișinău: Botanica, Centru, Buiucani, Rîșcani, Ciocana și întreaga Republică Moldova
            </p>
          </div>

          <div className="bg-white/5 border border-primary/10 rounded-2xl overflow-hidden p-2">
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87382.84272815394!2d28.776382768359375!3d47.01053679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2zQ2hpxZ9pbsSDdSwgTW9sZG92YQ!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Evacuator Fulger Chișinău"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+37360000000"
              className="inline-flex items-center space-x-2 bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Sună acum: +373 60 000 000</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
