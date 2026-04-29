import { Check, Sparkles, Phone } from 'lucide-react'

// 1. Array para los 3 planes de Salud + Sepelio
const planesSalud = [
  {
    name: 'Plan Primario',
    subtitle: 'Salud + Sepelio',
    price: 'Consultar',
    features: [
      'Especialidades médicas: Consultorios propios y externos',
      'Prácticas de Diagnóstico y exámenes de rutina',
      'Descuentos en farmacia: Hasta 30%',
      'Emergencia y urgencia a domicilio 24 hs',
      'Sepelio: Sala velatoria o capilla ardiente',
      'Cementerio disponible: San Antonio de Padua',
    ],
    popular: false,
    whatsappMsg: 'Hola,%20quiero%20información%20sobre%20el%20Plan%20Primario',
  },
  {
    name: 'Plan Clásico',
    subtitle: 'Salud + Sepelio Intermedio',
    price: 'Consultar',
    features: [
      'Especialidades médicas con coseguros accesibles',
      'Prácticas de Diagnóstico y exámenes complementarios',
      'Descuentos en farmacia de hasta 30%',
      'Emergencia y consulta médica a domicilio 24 hs',
      'Sepelio: Sala velatoria o capilla ardiente. Imhumación',
      'Cementerios: San Antonio, Parque Sereno y Parque de la Paz',
    ],
    popular: true,
  },
  {
    name: 'Plan Premium',
    subtitle: 'Salud + Sepelio Completo',
    price: 'Consultar',
    features: [
      'Especialidades médicas en consultorios propios y externos',
      'Prácticas de Diagnóstico de alta complejidad',
      'Descuentos en farmacia de hasta 30%',
      'Emergencia y consulta médica a domicilio 24 hs',
      'Opción Inhumación o Cremación',
      'Cementerios: San Antonio, Sereno, La Paz y Jardín del Cielo',
    ],
    popular: false,
    whatsappMsg: 'Hola,%20quiero%20información%20sobre%20el%20Plan%20Premium',
  },
]

// 2. Objeto separado para el Plan Sepelio (Tarjeta Ancha)
const infoSepelio = {
  titulo: 'Plan Sepelio',
  descripcion: 'Servicios sociales integrales con cobertura en toda la provincia.',
  telefono: '381 544 7295',
  especificaciones: [
    'Ataúd bóveda convencional',
    'Sala velatoria o servicio de capilla ardiente en domicilio',
    'Carroza de duelo y coche de acompañamiento',
    'Impuestos sin cargo: Inhumación, excavación y sellado',
    'Gastos administrativos provinciales y municipales incluidos',
    'Servicio de emergencia médica y consulta a domicilio',
  ],
  notaCremacion: 'Módulo cremación: Costo adicional',
  imagen: '/servicio-sepelio.jpg',
  whatsappMsg: 'Hola,%20quiero%20información%20sobre%20el%20Plan%20Sepelio',
}

export default function Planes() {
  return (
    <section id="planes" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00BCD4]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00BCD4]/10 text-[#00BCD4] rounded-full text-sm font-medium mb-4">
            Planes y servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Elegí la protección para tu familia
          </h2>
        </div>

        {/* Grid de 3 planes de Salud */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {planesSalud.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl scale-105 z-10'
                  : 'bg-white border-2 border-gray-100 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-brand text-white rounded-full text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Recomendado
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.subtitle}</p>
              </div>
              <div className="text-4xl font-extrabold mb-6">{plan.price}</div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-1 shrink-0 ${plan.popular ? 'text-[#00BCD4]' : 'text-green-500'}`} />
                    <span className="text-sm opacity-90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5493816603741?text=${plan.whatsappMsg || 'Hola'}`}
                target="_blank"
                className={`w-full py-4 rounded-xl text-center font-bold transition-all ${
                  plan.popular ? 'bg-gradient-brand text-white' : 'bg-gray-900 text-white'
                }`}
              >
                Consultar plan
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mb-16 italic">
          * Los precios y disponibilidad de cementerios están sujetos a consulta según el plan elegido.
        </p>

        {/* Tarjeta Ancha: Plan Sepelio */}
        <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna Izquierda: Información */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black text-[#00BCD4] uppercase italic tracking-tighter mb-2">
                  {infoSepelio.titulo}
                </h3>
                <p className="text-gray-600 font-medium">{infoSepelio.descripcion}</p>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 w-fit">
                <Phone className="w-5 h-5 text-green-500" />
                <a href={`https://wa.me/5493815447295?text=${infoSepelio.whatsappMsg || 'Hola'}`} 
                className="text-xl font-bold text-gray-900 hover:text-[#00BCD4] transition-colors"
                target="_blank"
                >
                  {infoSepelio.telefono}
                </a>
              </div>

              <ul className="grid sm:grid-cols-1 gap-3">
                {infoSepelio.especificaciones.map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="inline-block px-4 py-2 bg-cyan-100 text-[#00BCD4] rounded-lg text-sm font-bold border border-cyan-200">
                {infoSepelio.notaCremacion}
              </div>
            </div>

            {/* Columna Derecha: Imagen */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={infoSepelio.imagen} 
                  alt="Plan Sepelio Red Salud" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}