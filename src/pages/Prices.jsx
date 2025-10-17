import { Helmet } from 'react-helmet-async'
import { Check, Phone, MessageCircle } from 'lucide-react'

const Prices = () => {
  const pricingData = [
    {
      service: 'Tractare în oraș (Chișinău)',
      price: 'De la 300 lei',
      details: 'Până la 10 km',
    },
    {
      service: 'Tractare extraurban (km suplimentar)',
      price: '15-20 lei/km',
      details: 'În funcție de distanță',
    },
    {
      service: 'Pornire auto (baterie descărcată)',
      price: '150 lei',
      details: 'Start cu cabluri profesionale',
    },
    {
      service: 'Schimbare roată (pană)',
      price: '100 lei',
      details: 'Montare roată rezervă',
    },
    {
      service: 'Deschidere mașină blocată',
      price: '200 lei',
      details: 'Fără deteriorări',
    },
    {
      service: 'Alimentare cu combustibil',
      price: '150 lei + combustibil',
      details: '5-10 litri livrare',
    },
    {
      service: 'Asistență rutieră (diagnostic)',
      price: '150 lei',
      details: 'Verificare + consultanță',
    },
    {
      service: 'Tractare vehicule grele (>2.5t)',
      price: 'La cerere',
      details: 'Ofertă personalizată',
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
        <meta property="og:title" content="Prețuri Evacuator Fulger – Tarife Corecte și Transparente" />
        <meta property="og:description" content="Vezi tarifele noastre clare pentru tractare auto și asistență rutieră. Fără surprize neplăcute." />
        <link rel="canonical" href="https://fulger.md/preturi" />
      </Helmet>

      <div className="pt-24 pb-20 bg-dark min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-white mb-6">
              <span className="text-primary">Prețuri</span> Transparente
            </h1>
            <p className="text-lg sm:text-xl text-light max-w-2xl mx-auto">
              Tarife clare, fără costuri ascunse. Plătești exact cât ți-am spus la telefon.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-white/5 border border-primary/10 rounded-2xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary/10 border-b border-primary/20">
                    <th className="text-left px-6 py-4 text-white font-poppins font-bold">
                      Serviciu
                    </th>
                    <th className="text-right px-6 py-4 text-white font-poppins font-bold">
                      Preț
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-primary/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="text-white font-medium mb-1">{item.service}</div>
                        <div className="text-light text-sm">{item.details}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-primary font-poppins font-bold text-lg">
                          {item.price}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-12">
            <h3 className="text-xl font-poppins font-bold text-primary mb-3">
              ⚠️ Notă importantă
            </h3>
            <p className="text-white leading-relaxed">
              Prețurile finale pot varia în funcție de distanță, tipul vehiculului, ora intervenției (noapte/zi) și dificultatea situației. 
              <span className="text-primary font-semibold"> Sună-ne acum</span> pentru o ofertă exactă și personalizată.
            </p>
          </div>

          {/* What's Included */}
          <div className="bg-white/5 border border-primary/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-8 text-center">
              Ce este <span className="text-primary">inclus</span>?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-4">
              Cere o ofertă personalizată
            </h2>
            <p className="text-light text-lg mb-8 max-w-2xl mx-auto">
              Fiecare situație este unică. Sună-ne acum și primești un preț exact în funcție de nevoile tale.
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
                <MessageCircle className="w-5 h-5" />
                <span>Scrie pe WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">0 lei</div>
              <p className="text-light">Consultanță telefonică gratuită</p>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">100%</div>
              <p className="text-light">Transparență în prețuri</p>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">5000+</div>
              <p className="text-light">Clienți mulțumiți de tarife</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prices
