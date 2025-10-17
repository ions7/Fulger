import { Helmet } from 'react-helmet-async'
import { Check, Phone, MessageCircle, Truck, Battery, Wrench, Key, Fuel, Shield, Settings, Star, Zap, Clock, Award } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const Prices = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const observerRef = useRef(null)

  useEffect(() => {
    // Set all cards as visible immediately on mount (8 cards)
    setVisibleCards(['0', '1', '2', '3', '4', '5', '6', '7'])

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index])
          }
        })
      },
      { threshold: 0.1 }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const pricingData = [
    {
      service: 'Tractare în oraș',
      subtitle: 'Chișinău & Suburbii',
      price: '300',
      unit: 'lei',
      details: 'Până la 10 km distanță',
      icon: Truck,
      popular: true,
      color: 'from-yellow-500 to-orange-500',
      features: ['Intervenție <20 min', 'Orice tip vehicul', 'Platformă hidraulică']
    },
    {
      service: 'Tractare extraurban',
      subtitle: 'Afară din Chișinău',
      price: '15-20',
      unit: 'lei/km',
      details: 'Km suplimentar peste 10 km',
      icon: Truck,
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      features: ['Preț fix per km', 'Fără taxe ascunse', 'Moldova întreagă']
    },
    {
      service: 'Pornire Auto',
      subtitle: 'Baterie descărcată',
      price: '150',
      unit: 'lei',
      details: 'Start cu cabluri profesionale',
      icon: Battery,
      popular: true,
      color: 'from-green-500 to-emerald-500',
      features: ['Cabluri profesionale', 'Verificare baterie', 'Consultanță gratuită']
    },
    {
      service: 'Schimbare Roată',
      subtitle: 'Pană / Roată spartă',
      price: '100',
      unit: 'lei',
      details: 'Montare roată rezervă',
      icon: Settings,
      popular: true,
      color: 'from-purple-500 to-pink-500',
      features: ['Montare rapidă', 'Verificare presiune', 'Sfaturi siguranță']
    },
    {
      service: 'Deschidere Mașină',
      subtitle: 'Chei blocate înăuntru',
      price: '200',
      unit: 'lei',
      details: 'Fără deteriorări',
      icon: Key,
      popular: false,
      color: 'from-red-500 to-rose-500',
      features: ['Fără daune', 'Metode profesionale', 'Discreție garantată']
    },
    {
      service: 'Alimentare Combustibil',
      subtitle: 'Rămânere fără benzină',
      price: '150',
      unit: 'lei',
      priceNote: '+ combustibil',
      details: 'Livrare 5-10 litri',
      icon: Fuel,
      popular: false,
      color: 'from-orange-500 to-amber-500',
      features: ['Livrare rapidă', 'Combustibil calitate', 'Ajutor la fața locului']
    },
    {
      service: 'Asistență Rutieră',
      subtitle: 'Diagnostic + Consultanță',
      price: '150',
      unit: 'lei',
      details: 'Verificare tehnică completă',
      icon: Wrench,
      popular: false,
      color: 'from-indigo-500 to-blue-500',
      features: ['Diagnostic complet', 'Consultanță expert', 'Soluții on-site']
    },
    {
      service: 'Tractare Vehicule Grele',
      subtitle: 'Peste 2.5 tone',
      price: 'La cerere',
      unit: '',
      details: 'Ofertă personalizată',
      icon: Shield,
      popular: false,
      color: 'from-gray-500 to-slate-500',
      features: ['Echipament special', 'Experiență în greutăți', 'Preț competitiv']
    },
  ]

  const includedFeatures = [
    'Intervenție în maxim 20 minute',
    'Echipament profesional homologat',
    'Șoferi cu experiență certificată',
    'Asigurare completă inclusă',
    'Transport sigur, fără daune',
    'Plată cash sau card',
    'Fără costuri ascunse',
    'Consultanță gratuită telefonic',
  ]

  return (
    <>
      <Helmet>
        <title>Prețuri Evacuator Chișinău – Tarife Transparente | Fulger.md</title>
        <meta
          name="description"
          content="Prețuri clare evacuator Chișinău: tractare de la 300 lei, asistență rutieră de la 100 lei. Fără costuri ascunse. Consultanță gratuită 24/7."
        />
        <meta property="og:title" content="Prețuri Evacuator Chișinău – Tarife Corecte și Transparente" />
        <meta property="og:description" content="Vezi tarifele noastre clare pentru evacuator și tractare auto în Chișinău. Prețuri transparente, fără costuri ascunse." />
        <link rel="canonical" href="https://fulger.md/preturi" />
      </Helmet>

      <div className="relative pt-24 pb-20 bg-dark min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,212,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,212,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">Tarife Corecte & Transparente</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
              <span className="text-primary">Prețuri</span> Clare<br className="hidden sm:block" />
              <span className="text-white">Fără Surprize</span>
            </h1>
            <p className="text-lg sm:text-xl text-light max-w-3xl mx-auto leading-relaxed">
              Tarife transparente, fără costuri ascunse. 
              <span className="text-primary font-semibold"> Plătești exact</span> cât ți-am spus la telefon.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {pricingData.map((item, index) => {
              const Icon = item.icon
              const isVisible = visibleCards.includes(String(index))
              
              return (
                <div
                  key={index}
                  data-index={index}
                  ref={(el) => {
                    if (el && observerRef.current && !visibleCards.includes(String(index))) {
                      observerRef.current.observe(el)
                    }
                  }}
                  className={`group relative bg-gradient-to-br from-dark/80 to-dark/40 border-2 border-primary/10 rounded-3xl p-6 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-yellow-500 text-dark px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1 animate-bounce">
                      <Star className="w-3 h-3 fill-current" />
                      <span>POPULAR</span>
                    </div>
                  )}

                  {/* Icon with Gradient Background */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-dark rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-2xl font-poppins font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.service}
                  </h3>
                  <p className="text-sm text-light mb-4">{item.subtitle}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-5xl font-poppins font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.price}
                      </span>
                      <span className="text-xl text-primary font-semibold">{item.unit}</span>
                    </div>
                    {item.priceNote && (
                      <p className="text-sm text-light mt-1">{item.priceNote}</p>
                    )}
                    <p className="text-sm text-light mt-2">{item.details}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="tel:+37360000000"
                    className="block w-full text-center bg-white/5 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-dark py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30"
                  >
                    Comandă Acum
                  </a>

                  {/* Decorative Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              )
            })}
          </div>

          {/* Important Note */}
          <div className="relative bg-gradient-to-br from-yellow-500/10 via-primary/5 to-orange-500/10 border-2 border-primary/30 rounded-3xl p-6 sm:p-8 mb-16 overflow-hidden">
            {/* Decorative Warning Icon */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-poppins font-bold text-primary mb-2">
                  Notă importantă despre prețuri
                </h3>
                <p className="text-white leading-relaxed">
                  Prețurile afișate sunt <span className="text-primary font-semibold">indicative</span> și pot varia în funcție de: 
                  <span className="text-light"> distanță, tipul vehiculului, ora intervenției (zi/noapte) și complexitatea situației</span>. 
                  <br className="hidden sm:block" />
                  <span className="text-primary font-bold text-lg">📞 Sună acum</span> pentru o 
                  <span className="text-primary font-semibold"> ofertă exactă și personalizată în 30 secunde</span>.
                </p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="relative bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border-2 border-primary/20 rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-4">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-semibold">Beneficii Incluse</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
                  Ce este <span className="text-primary">inclus</span> în preț?
                </h2>
                <p className="text-light text-lg max-w-2xl mx-auto">
                  Fiecare serviciu vine cu garanții complete și profesionalism de top
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {includedFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-3 bg-dark/50 border border-primary/10 rounded-2xl p-4 hover:border-primary/30 hover:bg-dark/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-primary via-yellow-500 to-primary rounded-3xl p-1 mb-16 overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-500 to-primary animate-gradient-x"></div>
            
            <div className="relative bg-dark rounded-3xl p-8 sm:p-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/40 rounded-full px-5 py-2 mb-6">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-primary text-sm font-semibold">Răspuns Instant 24/7</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
                Cere o <span className="text-primary">ofertă exactă</span>
              </h2>
              <p className="text-light text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Fiecare situație este unică. Sună-ne acum și primești un <span className="text-primary font-semibold">preț exact în 30 secunde</span>, 
                fără obligații.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="tel:+37360000000"
                  className="group/btn flex items-center space-x-3 bg-primary text-dark px-8 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary/40 w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  <span>📞 Sună: +373 60 000 000</span>
                </a>
                <a
                  href="https://wa.me/37360000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center space-x-3 bg-[#25D366] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#25D366]/40 w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  <span>💬 WhatsApp Rapid</span>
                </a>
              </div>

              {/* Quick Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-2 text-sm text-light">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Răspuns <span className="text-primary font-semibold">&lt;2 min</span></span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-light">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Preț <span className="text-primary font-semibold">garantat</span></span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-light">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Fără <span className="text-primary font-semibold">obligații</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-dark/50 border border-primary/10 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 p-0.5 mb-4 group-hover:scale-110 transition-transform">
                <div className="w-full h-full bg-dark rounded-full flex items-center justify-center">
                  <span className="text-3xl">💰</span>
                </div>
              </div>
              <div className="text-5xl font-poppins font-bold text-primary mb-2">0 lei</div>
              <p className="text-light">Consultanță telefonică<br />100% gratuită</p>
            </div>
            
            <div className="group bg-dark/50 border border-primary/10 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 p-0.5 mb-4 group-hover:scale-110 transition-transform">
                <div className="w-full h-full bg-dark rounded-full flex items-center justify-center">
                  <span className="text-3xl">✅</span>
                </div>
              </div>
              <div className="text-5xl font-poppins font-bold text-primary mb-2">100%</div>
              <p className="text-light">Transparență absolută<br />în prețuri</p>
            </div>
            
            <div className="group bg-dark/50 border border-primary/10 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 mb-4 group-hover:scale-110 transition-transform">
                <div className="w-full h-full bg-dark rounded-full flex items-center justify-center">
                  <span className="text-3xl">⭐</span>
                </div>
              </div>
              <div className="text-5xl font-poppins font-bold text-primary mb-2">5000+</div>
              <p className="text-light">Clienți mulțumiți<br />de tarife corecte</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prices
