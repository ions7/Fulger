import { Phone, MapPin, Zap, Check } from 'lucide-react'

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Ne contactezi rapid",
      description: "Sună direct la Evacuator Fulger sau apasă butonul \"📞 Sună acum\". Răspundem imediat - disponibili 24/7, în orice moment ai nevoie.",
      keywords: "apel urgent, contact evacuator, telefon non-stop",
      time: "< 1 minut"
    },
    {
      number: "02",
      icon: MapPin,
      title: "Trimiți locația ta exact",
      description: "Cu un singur click, trimiți automat locația ta pe WhatsApp direct din site - simplu, sigur și precis. Știm exact unde te afli.",
      keywords: "locație GPS, WhatsApp instant, poziționare",
      time: "< 30 secunde"
    },
    {
      number: "03",
      icon: Zap,
      title: "Primești ajutor imediat",
      description: "În câteva secunde îți oferim estimarea timpului de sosire și prețul exact. Echipa Fulger pornește imediat spre tine cu evacuatorul.",
      keywords: "intervenție rapidă, preț transparent, evacuator în drum",
      time: "< 20 minute"
    }
  ]

  // Schema.org HowTo pentru SEO
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cum să soliciți evacuator în Chișinău - Fulger.md",
    "description": "Procesul simplu în 3 pași pentru a solicita servicii de evacuator și tractare auto în Chișinău cu Fulger - răspuns în sub 1 minut",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Contactează Evacuator Fulger",
        "text": "Sună la numărul de telefon sau apasă butonul de contact. Răspundem imediat 24/7.",
        "url": "https://fulger.md#pasii-fulger",
        "image": "https://fulger.md/images/step-contact.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Trimite locația ta pe WhatsApp",
        "text": "Cu un click trimiți automat locația ta GPS pe WhatsApp pentru intervenție precisă.",
        "url": "https://fulger.md#pasii-fulger",
        "image": "https://fulger.md/images/step-location.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Primește ajutor rapid",
        "text": "Primești estimarea timpului de sosire și prețul exact. Evacuatorul pornește imediat spre tine.",
        "url": "https://fulger.md#pasii-fulger",
        "image": "https://fulger.md/images/step-arrival.jpg"
      }
    ]
  }

  return (
    <>
      {/* Schema.org HowTo JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>

      <section
        id="pasii-fulger"
        className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-dark via-black to-dark border-t border-primary/10"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,212,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,212,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">
                Proces simplu și rapid
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-6" itemProp="name">
              Problema ta se rezolvă în{' '}
              <span className="text-primary">3 pași simpli</span> ⚡
            </h2>
            
            <p className="text-light text-lg max-w-3xl mx-auto leading-relaxed" itemProp="description">
              Cu <strong className="text-white">Evacuator Fulger Chișinău</strong>, procesul este rapid și fără stres.
              Trimite-ne locația ta și noi ne ocupăm de restul — tractare profesională, 
              asistență rutieră completă și sosire în <strong className="text-primary">timp record sub 20 minute</strong>.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-light">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Răspuns instant</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Preț transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Fără taxe ascunse</span>
              </div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12" itemProp="step">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <article
                  key={index}
                  className="group relative bg-white/5 border border-primary/10 rounded-2xl p-8 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  itemScope
                  itemType="https://schema.org/HowToStep"
                  itemProp="step"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-poppins font-bold text-dark text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon with glow effect */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-poppins font-bold text-white mb-2" itemProp="name">
                      {step.title}
                    </h3>
                    
                    <p className="text-light leading-relaxed" itemProp="text">
                      {step.description}
                    </p>

                    {/* Time indicator */}
                    <div className="flex items-center gap-2 pt-3 border-t border-primary/10">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-primary text-sm font-semibold">
                        Timp: {step.time}
                      </span>
                    </div>

                    {/* SEO keywords (hidden but indexable) */}
                    <meta itemProp="keywords" content={step.keywords} />
                  </div>
                </article>
              )
            })}
          </div>

          {/* Total time indicator */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-white font-semibold">
                Timp total proces: <span className="text-primary">sub 2 minute</span>
              </span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-4">
              Gata să primești ajutor rapid? ⚡
            </h3>
            <p className="text-light text-lg mb-8 max-w-2xl mx-auto">
              Trimite locația ta acum și primești <strong className="text-white">estimare instantanee</strong> — 
              evacuatorul nostru ajunge în <strong className="text-primary">maxim 20 de minute</strong>!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+37360000000"
                className="flex items-center space-x-3 bg-primary text-dark px-8 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow-primary hover:glow-primary-lg w-full sm:w-auto justify-center shadow-xl shadow-primary/40 group"
                rel="nofollow"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>📞 Sună acum</span>
              </a>
              
              <a
                href="https://wa.me/37360000000?text=Salut%20Fulger!%20Am%20nevoie%20de%20evacuator.%20Aceasta%20este%20locația%20mea:"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center space-x-3 bg-[#25D366] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center shadow-xl shadow-[#25D366]/30 group"
              >
                <MapPin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>📍 Trimite locația pe WhatsApp</span>
              </a>
            </div>

            {/* Additional SEO text */}
            <div className="mt-8 text-sm text-light">
              <p>
                <strong className="text-white">Evacuator Fulger Chișinău</strong> oferă servicii de tractare auto rapidă, 
                asistență rutieră non-stop și transport sigur în toată Moldova. 
                Proces simplu: apel → locație → intervenție în 20 minute. 
                Disponibili 24/7 pentru urgențe auto.
              </p>
            </div>
          </div>

          {/* FAQ snippet for SEO */}
          <div className="mt-12 text-center text-sm text-light">
            <p>
              <strong className="text-white">Întrebări frecvente:</strong> Cât durează până ajunge evacuatorul? 
              Sub 20 minute în Chișinău. | Cum trimit locația? Un click pe WhatsApp. | 
              Când răspundeți? Imediat, 24/7. | Cât costă? Preț transparent comunicat instant.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepsSection
