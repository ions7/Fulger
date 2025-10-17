import { Phone } from 'lucide-react'

const CallButton = () => {
  return (
    <a
      href="tel:+37360000000"
      className="fixed bottom-6 right-6 md:hidden bg-primary text-dark p-5 rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-110 transition-all duration-300 z-40 group"
      aria-label="Sună acum"
    >
      <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
    </a>
  )
}

export default CallButton
