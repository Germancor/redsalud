import { ClipboardList, CreditCard, Stethoscope, Smile } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Elegís tu plan',
    description: 'Seleccioná entre nuestro Plan Primario o Plan Premium según las necesidades de tu familia. Ambos incluyen salud + sepelio.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
  },
  {
    icon: CreditCard,
    title: 'Te asociás',
    description: 'Completá tus datos, elegí la forma de pago (débito automático o transferencia) y en 24/48 hs quedás activado.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: Stethoscope,
    title: 'Accedés a la cartilla',
    description: 'Recibí tu credencial digital y empezá a usar descuentos en consultas médicas, farmacias, emergencias a domicilio y más.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    icon: Smile,
    title: 'Usá tu cobertura',
    description: 'Conectate con nuestra app o WhatsApp para turnos, urgencias y gestión de sepelio. Atención las 24hs, los 365 días.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00BCD4]/10 text-[#00BCD4] rounded-full text-sm font-medium mb-4">
            Simple y rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600">
            En 4 simples pasos, vos y tu familia quedan protegidos con cobertura médica y servicio de sepelio.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] right-0 h-0.5 bg-gradient-to-r from-gray-200 to-gray-100" />
              )}

              <div className="relative bg-white rounded-3xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#E91E63] to-[#C2185B] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${step.bgColor} flex items-center justify-center mb-5`}>
                  <step.icon className={`w-7 h-7 ${step.textColor}`} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
