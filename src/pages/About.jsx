import { Helmet } from 'react-helmet-async'
import { Award, Zap, DollarSign, Shield, Heart, Star, CheckCircle, Users, Clock, ThumbsUp, Phone } from 'lucide-react'

const About = () => {
  const coreValues = [
    {
      icon: Award,
      title: 'Profesionalism',
      subtitle: 'Echipă expertă, echipament modern',
      description: 'Șoferi cu peste 10 ani experiență, certificați și pregătiți pentru orice situație.',
      color: 'from-blue-500 to-cyan-500',
      stats: '10+ ani',
      statsLabel: 'Experiență',
      features: [
        'Echipament profesional homologat',
        'Șoferi certificați cu experiență vastă',
        'Asigurare completă inclusă',
        'Platforme hidraulice moderne'
      ]
    },
    {
      icon: Zap,
      title: 'Rapiditate',
      subtitle: 'Intervenție în mai puțin de 20 minute',
      description: 'Timpul tău contează. Ajungem rapid, rezolvăm eficient. Disponibili 24/7 non-stop.',
      color: 'from-yellow-500 to-orange-500',
      stats: '<20 min',
      statsLabel: 'Timp răspuns',
      features: [
        'Răspuns instant la apel',
        'Intervenție în sub 20 minute',
        'Disponibili 24/7 - chiar și noaptea',
        'Acoperire în toată Moldova'
      ]
    },
    {
      icon: DollarSign,
      title: 'Prețuri Corecte',
      subtitle: 'Transparență totală, fără surprize',
      description: 'Preț clar de la început. Fără taxe ascunse. Plătești exact cât ți-am spus.',
      color: 'from-green-500 to-emerald-500',
      stats: '100%',
      statsLabel: 'Transparență',
      features: [
        'Preț comunicat înainte de intervenție',
        'Fără costuri ascunse',
        'Consultanță gratuită',
        'Plată cash sau card'
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Despre Evacuator Fulger Chișinău – Echipa Ta de Încredere | 10+ Ani Experiență</title>
        <meta
          name="description"
          content="Evacuator Fulger Chișinău - 10+ ani experiență în tractare auto. Echipă profesionistă, echipament modern, intervenții rapide sub 20 minute. Disponibili 24/7."
        />
        <meta property="og:title" content="Despre Evacuator Fulger Chișinău - Profesionalism și Rapiditate" />
        <meta property="og:description" content="Evacuator profesionist în Chișinău cu 10+ ani experiență. Rapid, corect, disponibil 24/7." />
        <link rel="canonical" href="https://fulger.md/despre" />
      </Helmet>

      <div className="relative pt-24 pb-20 min-h-screen overflow-hidden bg-dark">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-dark/88"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,212,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,212,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold">Echipa Ta de Încredere</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
              De ce <span className="text-primary">Fulger</span>?
            </h1>
            
            <p className="text-xl sm:text-2xl text-light max-w-3xl mx-auto leading-relaxed mb-8">
              Suntem familia ta pe drumuri. <span className="text-primary font-semibold">Rapid, profesionist, corect</span> – 
              la fel ca și tine.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-5 h-5 text-primary" />
                <span className="text-light">5000+ clienți mulțumiți</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-primary fill-current" />
                <span className="text-light">10+ ani experiență</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-light">100% siguranță garantată</span>
              </div>
            </div>
          </div>

          {/* Core Values - 3 Big Cards */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
                Ce ne face <span className="text-primary">diferiți</span>
              </h2>
              <p className="text-lg text-light max-w-2xl mx-auto">
                3 lucruri simple dar fundamentale care ne definesc
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-dark/80 to-dark/40 border-2 border-primary/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  >
                    {/* Icon with Gradient */}
                    <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-dark rounded-2xl flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-3xl font-poppins font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-primary text-sm font-semibold mb-4">{value.subtitle}</p>
                    
                    {/* Description */}
                    <p className="text-light leading-relaxed mb-6">
                      {value.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="inline-flex flex-col items-center bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 mb-6">
                      <div className={`text-4xl font-poppins font-bold bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                        {value.stats}
                      </div>
                      <div className="text-xs text-light uppercase tracking-wide">{value.statsLabel}</div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {value.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Big Stats Section */}
          <div className="relative bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border-2 border-primary/20 rounded-3xl p-12 sm:p-16 mb-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">
                Numerele <span className="text-primary">vorbesc</span>
              </h2>
              <p className="text-lg text-light">Încrederea pe care o construim zi de zi</p>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-poppins font-bold text-primary mb-3">10+</div>
                <p className="text-light font-medium">Ani de<br />Experiență</p>
              </div>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-poppins font-bold text-primary mb-3">5000+</div>
                <p className="text-light font-medium">Clienți<br />Mulțumiți</p>
              </div>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-poppins font-bold text-primary mb-3">24/7</div>
                <p className="text-light font-medium">Disponibili<br />Non-Stop</p>
              </div>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-poppins font-bold text-primary mb-3">&lt;20</div>
                <p className="text-light font-medium">Minute<br />Răspuns</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-primary via-yellow-500 to-primary rounded-3xl p-1 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-500 to-primary animate-gradient-x"></div>
            
            <div className="relative bg-dark rounded-3xl p-8 sm:p-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/40 rounded-full px-5 py-2 mb-6">
                <Heart className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-primary text-sm font-semibold">Suntem Aici Pentru Tine</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
                Hai să ne cunoaștem <span className="text-primary">mai bine</span>
              </h2>
              <p className="text-light text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Nu suntem doar un serviciu de evacuare. Suntem <span className="text-primary font-semibold">familia ta pe drumuri</span>, 
                gata să te ajute oricând ai nevoie.
              </p>
              
              <a
                href="tel:+37360000000"
                className="inline-flex items-center space-x-3 bg-primary text-dark px-8 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary/40"
              >
                <Phone className="w-5 h-5" />
                <span>📞 Sună Acum - Te Așteptăm!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
