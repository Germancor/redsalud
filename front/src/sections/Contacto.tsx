import { Phone, MapPin, MessageCircle, ShieldAlert, Headphones, Stethoscope } from 'lucide-react'

const sucursales = [
  {
    ciudad: 'San Miguel de Tucumán',
    direccion: 'Batalla de Chacabuco 220',
    telefono: '2443047',
    whatsapp: '3815447295',
  },
  {
    ciudad: 'Banda del Río Salí',
    direccion: 'Av. Monseñor Díaz 831',
    whatsapp: '3812142820',
  },
  {
    ciudad: 'Alderetes',
    direccion: 'Av. Rivadavia 930, Paseo Comercial Doña Maga, Local 4',
    telefono: '3814290587',
    whatsapp: '3814888080',
  }
]

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 sm:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00BCD4]/10 text-[#00BCD4] rounded-full text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Atención al asociado
          </h2>
          <p className="text-lg text-gray-600">
            En RED SALUD te brindamos una atención cálida y personalizada.
          </p>
        </div>

        {/* Primera fila de cards con iconos junto a los números */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Central de Ventas y Cobranzas */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#E91E63]/10 flex items-center justify-center mb-6">
              <Headphones className="w-7 h-7 text-[#E91E63]" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Ventas y Cobranzas</h4>
            <p className="text-sm text-gray-500 mb-4">Call Center centralizado</p>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#E91E63]" />
              <a href="tel:+5493816603741" className="text-2xl font-bold text-[#E91E63]">381 660 3741</a>
            </div>
          </div>

          {/* Emergencias Médicas */}
          <div className="bg-gray-900 p-8 rounded-3xl shadow-xl text-white flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <ShieldAlert className="w-7 h-7 text-[#00BCD4]" />
            </div>
            <h4 className="text-xl font-bold mb-2">Emergencias 24 hs</h4>
            <p className="text-sm text-gray-400 mb-4">Servicio de ambulancia SEM</p>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-[#00BCD4]" />
              <p className="text-xl font-bold">2540617 / 4238966</p>
            </div>
            <div className="pt-4 border-t border-white/10 w-full flex flex-col items-center">
              <p className="text-xs text-gray-400 mb-1">Solo Sepelio:</p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00BCD4]" />
                <p className="text-sm font-semibold">381 584 3679</p>
              </div>
            </div>
          </div>

          {/* Consultorios Médicos Chacabuco con iconos */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <Stethoscope className="w-7 h-7 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Consultorios Médicos</h4>
            <p className="text-sm text-gray-500 mb-4">Batalla de Chacabuco 220, S.M.T.</p>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="font-bold text-gray-900">2343047</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="font-bold text-green-600">381 651 2288</span>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda fila: Nuestras Sucursales */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center underline decoration-[#00BCD4] underline-offset-8">
          Nuestras sucursales
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {sucursales.map((s) => (
            <div key={s.ciudad} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#E91E63]" />
                <h5 className="font-bold text-gray-900">{s.ciudad}</h5>
              </div>
              <p className="text-sm text-gray-600 mb-4 h-10">{s.direccion}</p>
              <div className="space-y-2 pt-4 border-t border-gray-50">
                {s.telefono && (
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{s.telefono}</span>
                  </div>
                )}
                {s.whatsapp && (
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <span>{s.whatsapp}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}