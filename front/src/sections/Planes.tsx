import { Check, MessageCircle, Sparkles } from 'lucide-react'

const planes = [
  {
    name: 'Plan Primario',
    subtitle: 'Salud + Sepelio',
    price: 'Consultar',
    description: 'Cobertura esencial con acceso a especialidades médicas y servicios de sepelio básicos.',
    features: [
      'Especialidades médicas: Consultorios propios y externos con coseguros accesibles',
      'Prácticas de Diagnóstico: Rutina, exámenes complementarios y de diagnóstico',
      'Descuentos en farmacia: Hasta 30%',
      'Emergencia y urgencia a domicilio: Arancel mínimo las 24 hs',
      'Sepelio: Sala velatoria o capilla ardiente en domicilio',
      'Inhumación incluida',
      'Cementerio disponible: San Antonio de Padua',
    ],
    popular: false,
    whatsappMsg: 'Hola,%20quiero%20recibir%20información%20sobre%20el%20Plan%20Primario',
  },
  {
    name: 'Plan Clásico',
    subtitle: 'Salud + Sepelio Intermedio',
    price: 'Consultar',
    description: 'Nivel intermedio con mayor variedad de cementerios disponibles para la familia.',
    features: [
      'Especialidades médicas con coseguros a precios accesibles',
      'Prácticas de Diagnóstico y exámenes complementarios',
      'Descuentos en farmacia de hasta 30%',
      'Emergencia, urgencia y consulta médica a domicilio 24 hs',
      'Sepelio: Sala velatoria o capilla ardiente en domicilio',
      'Inhumación incluida',
      'Cementerios: San Antonio de Padua, Parque Sereno y Parque de la Paz',
    ],
    popular: true,
  },
  {
    name: 'Plan Premium',
    subtitle: 'Salud + Sepelio Completo',
    price: 'Consultar',
    description: 'La cobertura más completa con opción de cremación y acceso a todos los cementerios.',
    features: [
      'Especialidades médicas en consultorios propios y externos',
      'Prácticas de Diagnóstico y exámenes de diagnóstico',
      'Descuentos en farmacia de hasta 30%',
      'Emergencia, urgencia y consulta médica a domicilio 24 hs',
      'Sepelio: Sala velatoria o capilla ardiente en domicilio',
      'Opción Inhumación o Cremación',
      'Cementerios: San Antonio, Parque Sereno, Parque de la Paz y Jardín del Cielo',
    ],
    popular: false,
    whatsappMsg: 'Hola,%20quiero%20recibir%20información%20sobre%20el%20Plan%20Premium',
  },
]

export default function Planes() {
  return (
    <section id="planes" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E91E63]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-medium mb-4">
            Planes y servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Elegí la protección que tu familia necesita
          </h2>
          <p className="text-lg text-gray-600">
            Nuestros planes están diseñados para brindar tranquilidad médica y respaldo en servicios sociales.
          </p>
        </div>

        {/* Planes Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {planes.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                plan.popular
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl shadow-gray-900/20 scale-105 z-10'
                  : 'bg-white border-2 border-gray-100 shadow-card hover:shadow-card-hover'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-brand text-white rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                    <Sparkles className="w-4 h-4" />
                    Más recomendado
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== 'Consultar' && (
                    <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>$</span>
                  )}
                  <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm mt-2 leading-relaxed ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-[#E91E63]' : 'bg-green-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-green-600'}`} />
                    </div>
                    <span className={`text-sm leading-snug ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/5493816603741?text=${plan.whatsappMsg || 'Hola,%20quiero%20conocer%20más%20sobre%20este%20plan'}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-semibold transition-all hover:shadow-lg mt-auto ${
                  plan.popular
                    ? 'bg-gradient-brand text-white hover:shadow-[#E91E63]/25'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto italic">
          * Los precios y disponibilidad están sujetos a consulta. El servicio de sepelio incluye traslados y gestiones administrativas en toda la provincia.
        </p>
      </div>
    </section>
  )
}