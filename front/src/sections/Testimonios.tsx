import { Star, Quote } from 'lucide-react'

const testimonios = [
  {
    name: 'María Julia Mamaní',
    role: 'Plan Premium - Familia',
    image: '/testimonio-1.jpg',
    text: 'Gracias a su cobertura, pudimos resolver una urgencia médica de mi hijo sin preocupaciones económicas. La atención fue excelente y el trato del personal, humano y cálido.',
    rating: 5,
  },
  {
    name: 'Roberto Fernández',
    role: 'Plan Primario - Individual',
    image: '/testimonio-2.jpg',
    text: 'Llevo 3 años con Red Salud y la verdad es que me salvó en varias situaciones. Los descuentos en farmacias son reales y la atención por WhatsApp es inmediata. Muy recomendable.',
    rating: 5,
  },
  {
    name: 'Luciana Gómez',
    role: 'Plan Premium - Familia',
    image: '/testimonio-3.jpg',
    text: 'Cuando necesitamos el servicio de sepelio para mi suegro, el acompañamiento fue impecable. Se ocuparon de todo y nos dieron la tranquilidad que necesitábamos en ese momento.',
    rating: 5,
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros asociados
          </h2>
          <p className="text-lg text-gray-600">
            Miles de familias en Tucumán confían en nosotros. Estas son algunas de sus experiencias.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#E91E63] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E91E63]/20"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-white rounded-3xl shadow-card border border-gray-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E91E63]">4.9/5</div>
              <div className="text-sm text-gray-500">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00BCD4]">10.000+</div>
              <div className="text-sm text-gray-500">Familias protegidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E91E63]">98%</div>
              <div className="text-sm text-gray-500">Recomendarían el servicio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00BCD4]">15+</div>
              <div className="text-sm text-gray-500">Años de trayectoria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
