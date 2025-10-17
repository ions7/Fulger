import { useState } from 'react'
import { Send } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', phone: '', message: '' })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
          Nume complet *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg text-white placeholder-light/50 focus:outline-none focus:border-primary transition-colors"
          placeholder="Numele tău"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg text-white placeholder-light/50 focus:outline-none focus:border-primary transition-colors"
          placeholder="+373 60 000 000"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg text-white placeholder-light/50 focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Descrie situația ta..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
          Mesajul tău a fost trimis cu succes! Te vom contacta în curând.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center space-x-2 bg-primary text-dark px-6 py-3.5 rounded-lg font-bold hover:bg-primary/90 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
            <span>Se trimite...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Trimite mesaj</span>
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
