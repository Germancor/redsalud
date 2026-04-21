import { Stethoscope, Pill, Ambulance, Heart, Microscope, Eye, ShieldCheck, MapPin, Activity } from 'lucide-react'

const beneficiosPrincipales = [
  {
    icon: Ambulance,
    title: 'Servicio de Ambulancia (SEM)',
    text: 'Guardia las 24 hs para emergencias y urgencias con el respaldo de SEM.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Activity,
    title: 'Guardia Sanatorio del Sur',
    text: 'Acceso a guardia médica permanente en el Sanatorio del Sur para tu tranquilidad.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Microscope,
    title: 'Laboratorios (20% a 30%)',
    text: 'Descuentos exclusivos en laboratorios de toda la provincia. Requiere autorización previa.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Pill,
    title: 'Farmacias (20% a 30%)',
    text: 'Amplia red de farmacias adheridas con descuentos presentando pedido médico autorizado.',
    color: 'bg-amber-50 text-amber-600',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00BCD4]/10 text-[#00BCD4] rounded-full text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Beneficios pensados para tu familia
          </h2>
          <p className="text-lg text-gray-600">
            Información detallada sobre nuestra cobertura médica y servicios sociales en toda la provincia.
          </p>
        </div>

        {/* Grid de Beneficios Destacados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {beneficiosPrincipales.map((item) => (
            <div 
              key={item.title} 
              className="relative p-8 rounded-3xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Sección de Otros Servicios */}
        <div className="bg-gray-50 rounded-[3rem] p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cobertura Médica y Social</h3>
              <div className="grid gap-6">
                
                {/* Tarjeta Especial: Guardia Oftalmológica con ubicaciones */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#00BCD4]/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-[#00BCD4]" />
                    </div>
                    <h4 className="font-bold text-gray-900">Guardia Oftalmológica 24 hs</h4>
                  </div>
                  <div className="space-y-4 ml-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#00BCD4] mt-1 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Centro de Ojos Dr. Argañaraz</p>
                        <p className="text-xs text-gray-500">San Juan 585, S.M.T.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#00BCD4] mt-1 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Centro de la Visión Dr. Jure</p>
                        <p className="text-xs text-gray-500">Maipú 550, S.M.T.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resto de los servicios */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Stethoscope className="w-6 h-6 text-[#00BCD4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Especialidades Médicas</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Consultorios propios y externos con coseguros pactados a precios accesibles.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#00BCD4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Prácticas de Diagnóstico</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Acceso a prácticas de rutina y exámenes complementarios de diagnóstico.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Heart className="w-6 h-6 text-[#00BCD4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Servicio de Sepelio</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Cobertura integral con sala velatoria, ataúd bóveda, traslados e impuestos incluidos.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Imagen o Información Extra */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/servicio-medico.jpg" 
                  alt="Atención Médica Red Salud" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge (Ahora en celeste) */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#00BCD4]" />
                  <span className="font-bold text-gray-900">Presencia Local</span>
                </div>
                <p className="text-xs text-gray-500">
                  Sucursales en S.M.T., Banda del Río Salí y Alderetes para estar siempre cerca tuyo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Requisitos Info */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="px-6 py-3 bg-gray-100 rounded-full text-xs text-gray-500 font-medium">
            * Los laboratorios requieren autorización previa.
          </div>
          <div className="px-6 py-3 bg-gray-100 rounded-full text-xs text-gray-500 font-medium">
            * Farmacias requieren pedido médico autorizado con Nombre y DNI.
          </div>
        </div>
      </div>
    </section>
  )
}