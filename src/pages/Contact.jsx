import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Evacuator Fulger – Sună 24/7 | +373 60 000 000</title>
        <meta
          name="description"
          content="Contactează Evacuator Fulger 24/7: +373 60 000 000. Disponibili non-stop pentru tractare auto și asistență rutieră în Chișinău și Moldova."
        />
        <link rel="canonical" href="https://fulger.md/contact" />
      </Helmet>

      <div className="pt-24 pb-20 bg-dark min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-white mb-6">
              <span className="text-primary">Contactează-ne</span>
            </h1>
            <p className="text-lg sm:text-xl text-light max-w-2xl mx-auto">
              Suntem aici pentru tine 24/7. Sună acum sau trimite-ne un mesaj.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-white/5 border border-primary/10 rounded-2xl p-8">
                <h2 className="text-2xl font-poppins font-bold text-white mb-6">
                  Date de contact
                </h2>
                <div className="space-y-6">
                  <a
                    href="tel:+37360000000"
                    className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-colors"
                  >
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-light text-sm mb-1">Telefon (24/7)</div>
                      <div className="text-white text-lg font-semibold">+373 60 000 000</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/37360000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-light text-sm mb-1">WhatsApp</div>
                      <div className="text-white text-lg font-semibold">Scrie-ne mesaj</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@fulger.md"
                    className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-colors"
                  >
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-light text-sm mb-1">Email</div>
                      <div className="text-white text-lg font-semibold">info@fulger.md</div>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 p-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-light text-sm mb-1">Adresă</div>
                      <div className="text-white text-lg font-semibold">
                        Chișinău, Republica Moldova
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-light text-sm mb-1">Program</div>
                      <div className="text-primary text-lg font-semibold">
                        NON-STOP 24/7
                      </div>
                      <div className="text-light text-sm mt-1">
                        Inclusiv weekenduri și sărbători
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-lg font-poppins font-bold text-primary mb-3">
                  ⚡ Timp de răspuns rapid
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  Când suni, un operator îți răspunde imediat. În maxim 20 de minute, echipa noastră ajunge la tine cu evacuatorul.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-primary/10 rounded-2xl p-8">
              <h2 className="text-2xl font-poppins font-bold text-white mb-6">
                Trimite-ne un mesaj
              </h2>
              <ContactForm />
            </div>
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
        </div>
      </div>
    </>
  )
}

export default Contact
