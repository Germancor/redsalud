import { Shield, Heart, Clock, MessageCircle, ChevronDown } from 'lucide-react'

const stats = [
  { icon: Shield, label: 'Años de experiencia', value: '15+' },
  { icon: Heart, label: 'Familias protegidas', value: '10mil+' },
  { icon: Clock, label: 'Atención las 24hs', value: '24/7' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#00BCD4]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00BCD4]/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
      </div>
    
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00BCD4]/10 text-[#00BCD4] rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Cobertura médica + Sepelio en Tucumán
            </div>

            {/* Título principal ahora todo negro */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Protegé a tu familia con cobertura médica y sepelio
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Un servicio pensado para vos y tu familia, que reúne cobertura médica con amplia cartilla y servicio de sepelio integral.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                //href="https://wa.me/5493816603741?text=Hola,%20quiero%20recibir%20información%20sobre%20Red%20Salud%20Tucumán"
                href="https://wa.me/5493813616319?text=Hola,%20quiero%20recibir%20información%20sobre%20Red%20Salud%20Tucumán"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-brand rounded-full hover:shadow-xl hover:shadow-[#E91E63]/25 transition-all hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar información por WhatsApp
              </a>
              <a
                href="#planes"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#planes')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#E91E63] bg-white border-2 border-[#E91E63]/20 rounded-full hover:border-[#E91E63] hover:bg-[#E91E63]/5 transition-all"
              >
                Ver planes y precios
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-2xl shadow-card border border-gray-50"
                >
                  <stat.icon className="w-6 h-6 text-[#E91E63] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
              <img
                src="/hero-family.webp"
                alt="Familia protegida con Red Salud Tucumán"
                width={1344}
                height={768}
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Cobertura activa 24/7</p>
                    <p className="text-xs text-gray-500">Médicos, emergencias y farmacias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
          <button
            onClick={() => document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#E91E63] transition-colors"
          >
            <span className="text-xs font-medium">Conocé más</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
