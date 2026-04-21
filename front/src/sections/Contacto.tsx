import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '381-660-3741',
    href: 'tel:+5493816603741',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@redsaludtucuman.com',
    href: 'mailto:info@redsaludtucuman.com',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'San Martín 1234, San Miguel de Tucumán',
    href: '#',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Clock,
    label: 'Horario de atención',
    value: 'Lunes a Viernes: 8:00 - 18:00hs',
    href: '#',
    color: 'bg-amber-50 text-amber-600',
  },
]

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
    }, 3000)
  }

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contactate con nuestro equipo
          </h2>
          <p className="text-lg text-gray-600">
            Escribinos por WhatsApp, teléfono o correo y un asesor en Tucumán te ayudará a elegir el mejor plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA card */}
            <a
              href="https://wa.me/5493816603741?text=Hola,%20quiero%20recibir%20información%20sobre%20Red%20Salud%20Tucumán"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-6 h-6" />
                <span className="font-bold text-lg">WhatsApp</span>
              </div>
              <p className="text-green-100 text-sm mb-4">
                La forma más rápida de contactarnos. Respondemos en minutos.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4" />
                381-660-3741
              </span>
            </a>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-card h-48 bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.30735287799!2d-65.2926345!3d-26.8326687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56d1b%3A0xf8d0e3e75b6f5555!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Red Salud Tucumán"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Envianos un mensaje</h3>
              <p className="text-sm text-gray-500 mb-6">
                Completá el formulario y te contactamos a la brevedad.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">¡Mensaje enviado!</h4>
                  <p className="text-sm text-gray-600">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all text-sm"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all text-sm"
                        placeholder="381-000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all text-sm"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all text-sm resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-gradient-brand rounded-xl hover:shadow-lg hover:shadow-[#E91E63]/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Al enviar, aceptás nuestra política de privacidad. Tus datos están protegidos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
