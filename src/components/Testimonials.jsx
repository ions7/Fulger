import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alexandru Popescu',
    rating: 5,
    text: 'Am avut o pană pe traseu la ora 3 dimineața. Fulger a ajuns în 15 minute! Serviciu impecabil și profesionist.',
    date: 'Martie 2024',
  },
  {
    name: 'Maria Ionescu',
    rating: 5,
    text: 'Mașina nu pornea în parcare. Echipa Fulger a rezolvat rapid problema. Recomand cu încredere!',
    date: 'Februarie 2024',
  },
  {
    name: 'Andrei Ciobanu',
    rating: 5,
    text: 'Preț corect, echipă serioasă, intervenție rapidă. Exact ce aveam nevoie într-o situație critică.',
    date: 'Ianuarie 2024',
  },
  {
    name: 'Elena Rusu',
    rating: 5,
    text: 'Cel mai bun evacuator din Chișinău! Profesionalism de top și atitudine prietenoasă.',
    date: 'Decembrie 2023',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1920&q=80)',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/92"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Ce spun <span className="text-primary">clienții</span> noștri
          </h2>
          <p className="text-light text-lg">
            Peste 5000 de clienți mulțumiți în toată Moldova
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-primary/10 rounded-2xl p-8 sm:p-12 relative">
            {/* Stars */}
            <div className="flex justify-center mb-6 space-x-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-white text-lg sm:text-xl leading-relaxed text-center mb-6 min-h-[120px] flex items-center justify-center">
              "{current.text}"
            </p>

            {/* Author */}
            <div className="text-center">
              <p className="text-primary font-bold text-lg">{current.name}</p>
              <p className="text-light text-sm">{current.date}</p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Testimonal anterior"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Testimonal următor"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
