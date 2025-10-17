import { Helmet } from 'react-helmet-async'
import { Target, Award, Users, Clock } from 'lucide-react'
import Gallery from '../components/Gallery'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Despre Fulger – Echipa Ta de Încredere | Evacuator Chișinău</title>
        <meta
          name="description"
          content="Fulger – evacuator profesionist din Chișinău cu 10+ ani experiență. Echipă dedicată, echipament modern, intervenții rapide 24/7 în toată Moldova."
        />
        <link rel="canonical" href="https://fulger.md/despre" />
      </Helmet>

      <div className="relative pt-24 pb-20 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-dark/88"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-white mb-6">
              Despre <span className="text-primary">Fulger</span>
            </h1>
            <p className="text-lg sm:text-xl text-light max-w-2xl mx-auto">
              Evacuator rapid și profesionist din Chișinău, la serviciul tău 24/7
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 mb-16">
            <div className="bg-white/5 border border-primary/10 rounded-2xl p-8">
              <h2 className="text-2xl font-poppins font-bold text-white mb-4">
                Cine suntem?
              </h2>
              <p className="text-light leading-relaxed">
                <span className="text-primary font-semibold">Evacuator Fulger</span> este o echipă de profesioniști dedicați asigurării siguranței tale pe drumurile din Moldova. 
                Cu peste 10 ani de experiență în domeniul tractării auto și asistenței rutiere, am devenit unul dintre cele mai de încredere servicii de evacuare din Chișinău.
              </p>
            </div>

            <div className="bg-white/5 border border-primary/10 rounded-2xl p-8">
              <h2 className="text-2xl font-poppins font-bold text-white mb-4">
                Povestea noastră
              </h2>
              <p className="text-light leading-relaxed mb-4">
                Totul a început cu o simplă idee: <span className="text-primary font-semibold">să fim acolo când ai cea mai mare nevoie</span>. 
                Am înțeles că momentele dificile pe drum cer mai mult decât doar un serviciu – cer încredere, rapiditate și profesionalism.
              </p>
              <p className="text-light leading-relaxed">
                Astăzi, <span className="text-primary font-semibold">Fulger</span> deservește mii de clienți anual, fiind disponibili non-stop pentru orice urgență rutieră. 
                Echipamentul nostru modern și echipa bine pregătită garantează că vehiculul tău ajunge în siguranță la destinație.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-primary/10 rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">
                Misiunea noastră
              </h3>
              <p className="text-light">
                Să oferim servicii de evacuare și asistență rutieră de cea mai înaltă calitate, rapid, sigur și cu respect față de fiecare client.
              </p>
            </div>

            <div className="bg-white/5 border border-primary/10 rounded-2xl p-8 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">
                Valorile noastre
              </h3>
              <p className="text-light">
                Profesionalism, rapiditate, transparență și siguranță sunt pilonii pe care se bazează fiecare intervenție Fulger.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-8 text-center">
              De ce să alegi <span className="text-primary">Fulger</span>?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-2">Intervenție &lt;20 minute</h4>
                  <p className="text-light text-sm">Rapiditate maximă în Chișinău și împrejurimi</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-2">Echipă experimentată</h4>
                  <p className="text-light text-sm">Șoferi cu 10+ ani experiență în tractare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-8 text-center">
              Galerie <span className="text-primary">foto</span>
            </h2>
            <Gallery />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">10+</div>
              <p className="text-light text-sm">Ani de experiență</p>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">5000+</div>
              <p className="text-light text-sm">Clienți mulțumiți</p>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">24/7</div>
              <p className="text-light text-sm">Disponibilitate</p>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">100%</div>
              <p className="text-light text-sm">Garanție siguranță</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
