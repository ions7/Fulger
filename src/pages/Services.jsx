import { Helmet } from 'react-helmet-async'
import ServiceCard from '../components/ServiceCard'
import { Truck, Wrench, Battery, Key, Fuel, CarFront, Tractor, Phone } from 'lucide-react'

const Services = () => {
  const allServices = [
    {
      icon: Truck,
      title: 'Tractare Auto Chișinău',
      description: 'Transportăm orice tip de vehicul în siguranță deplină, de la mașini de teren până la vehicule de lux.',
      features: [
        'Tractare autoturisme până la 5 tone',
        'Transport sigur pe platformă',
        'Echipament profesional homologat',
        'Șoferi cu experiență 10+ ani',
        'Asigurare completă inclusă',
      ],
      image: 'https://images.unsplash.com/photo-1581092918484-8313d3a0e0a2?w=800&q=80',
    },
    {
      icon: Wrench,
      title: 'Asistență Rutieră Non-Stop',
      description: 'Intervenție rapidă pentru probleme mecanice simple direct la fața locului.',
      features: [
        'Diagnosticare rapidă',
        'Reparații minore pe loc',
        'Înlocuire componente simple',
        'Consultanță tehnică gratuită',
        'Disponibil 24/7',
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    },
    {
      icon: Battery,
      title: 'Pornire Auto (Baterie)',
      description: 'Bateria descărcată? Intervenim imediat și pornim mașina în 10 minute.',
      features: [
        'Start cu cabluri profesionale',
        'Testare baterie gratuită',
        'Verificare alternator',
        'Sfaturi pentru prevenție',
        'Fără deteriorări electronice',
      ],
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    },
    {
      icon: Fuel,
      title: 'Alimentare cu Combustibil',
      description: 'Ai rămas fără benzină? Aducem combustibil direct la tine, rapid și sigur.',
      features: [
        'Livrare combustibil 5-10 litri',
        'Benzină sau motorină',
        'Aditivi premium la cerere',
        'Plată cash sau card',
        'Serviciu în 20 minute',
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
      icon: Key,
      title: 'Deschidere Mașină Blocată',
      description: 'Cheia rămasă în mașină? Deschidem fără deteriorări, profesional.',
      features: [
        'Fără zgârieturi sau daune',
        'Orice tip de încuietoare',
        'Metode profesionale',
        'Rapiditate maximă',
        'Garanție împotriva daunelor',
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
      icon: CarFront,
      title: 'Schimbare Pană (Roată)',
      description: 'Pană pe drum? Schimbăm roata rapid, sigur și la standardele oficiale.',
      features: [
        'Montare roată de rezervă',
        'Verificare presiune anvelope',
        'Strângere la cuplu corect',
        'Recomandări vulcanizare',
        'Fără riscuri de siguranță',
      ],
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
    },
    {
      icon: Tractor,
      title: 'Tractare Vehicule Grele',
      description: 'Tractare pentru SUV-uri, microbuze, utilaje agricole și alte vehicule speciale.',
      features: [
        'Platformă pentru până la 5 tone',
        'Transport sigur terenuri dificile',
        'Echipament special heavy-duty',
        'Experiență cu utilaje agricole',
        'Tarife competitive',
      ],
      image: 'https://images.unsplash.com/photo-1581092918484-8313d3a0e0a2?w=800&q=80',
    },
    {
      icon: Phone,
      title: 'Consultanță Telefonică Gratuită',
      description: 'Nu ești sigur ce problemă ai? Sunăla noi și te ajutăm să identifici situația.',
      features: [
        'Specialiști auto disponibili 24/7',
        'Diagnosticare la telefon',
        'Sfaturi practice imediate',
        'Estimare cost intervenție',
        'Complet gratuit',
      ],
      image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Servicii Evacuator Chișinău – Tractare Auto, Asistență Rutieră 24/7 | Fulger.md</title>
        <meta
          name="description"
          content="Servicii evacuator Chișinău: tractare auto profesionistă, asistență rutieră non-stop, transport sigur. Intervenție rapidă sub 20 minute. Sună: +373 60 000 000"
        />
        <meta property="og:title" content="Servicii Evacuator Chișinău - Tractare și Asistență Rutieră 24/7" />
        <meta property="og:description" content="Evacuator profesionist în Chișinău: tractare auto, asistență rutieră, transport sigur. Disponibili 24/7, intervenție rapidă." />
        <link rel="canonical" href="https://fulger.md/servicii" />
      </Helmet>

      <div className="pt-24 pb-20 bg-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-white mb-6">
              Servicii <span className="text-primary">Complete</span> Evacuator
            </h1>
            <p className="text-lg sm:text-xl text-light max-w-3xl mx-auto leading-relaxed">
              De la tractare auto până la asistență rutieră completă – oferim soluții profesionale pentru orice situație
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-4">
              Ai nevoie de ajutor imediat?
            </h2>
            <p className="text-light text-lg mb-8 max-w-2xl mx-auto">
              Suntem disponibili 24/7 pentru orice urgență rutieră. Un singur apel și echipa Fulger e în drum spre tine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+37360000000"
                className="flex items-center space-x-2 bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>Sună: +373 60 000 000</span>
              </a>
              <a
                href="https://wa.me/37360000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/5 border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-dark transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">24/7</div>
              <p className="text-light">Disponibili non-stop, orice zi din săptămână</p>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">&lt;20 min</div>
              <p className="text-light">Timp mediu de intervenție în Chișinău</p>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">100%</div>
              <p className="text-light">Garanție asupra siguranței vehiculului</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
