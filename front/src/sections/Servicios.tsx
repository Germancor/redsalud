import { useState } from 'react'
import { 
  Stethoscope, Pill, Ambulance, Heart, Microscope, 
  Eye, ShieldCheck, MapPin, Activity, X, Phone 
} from 'lucide-react'

// Datos detallados para los Modales (Sin marcas de texto extrañas)
const detalleServicios = {
  'Ambulancia': {
    title: 'Servicio de Ambulancia (SEM)',
    icon: Ambulance,
    color: 'text-blue-600',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">Servicio de emergencias y urgencias médicas las 24 hs con el respaldo de SEM.</p>
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="font-bold text-blue-800 mb-3">Números de Emergencia:</p>
          <div className="flex flex-col gap-3">
            <a href="tel:2540617" className="flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <Phone className="w-5 h-5 text-blue-500"/> 2540617
            </a>
            <a href="tel:4238966" className="flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <Phone className="w-5 h-5 text-blue-500"/> 4238966
            </a>
          </div>
        </div>
      </div>
    )
  },
  'Guardia': {
    title: 'Guardia Sanatorio del Sur',
    icon: Activity,
    color: 'text-red-600',
    content: (
      <div className="space-y-5">
        <p className="text-gray-600">Atención médica permanente exclusiva para consultas de urgencia.</p>
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl text-sm border border-gray-100">
          <MapPin className="w-5 h-5 text-red-500 shrink-0" />
          <div>
            <p className="font-bold text-gray-900 text-base">Sanatorio del Sur</p>
            <p className="text-gray-600">Santiago 1251, San Miguel de Tucumán</p>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-xl flex flex-col gap-3">
          <p className="font-bold text-red-800 text-sm">Teléfonos de contacto:</p>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-red-600" />
            <span className="font-bold text-red-900 text-lg">4217277 / 2540617</span>
          </div>
        </div>
      </div>
    )
  },
  'Laboratorios': {
    title: 'Red de Laboratorios',
    icon: Microscope,
    color: 'text-emerald-600',
    content: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">Descuentos exclusivos presentando autorización previa en casa central.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-emerald-50 p-5 rounded-xl border border-emerald-100">
          <div className="space-y-1">
            <p className="font-bold text-emerald-800 border-b border-emerald-200 pb-1 mb-2">S.M. de Tucumán</p>
            <p className="text-gray-700">• Lab. EMC</p>
            <p className="text-gray-700">• Lab. Alvarez Ali</p>
            <p className="text-gray-700">• Lab. Sarmiento</p>
            <p className="text-gray-700">• Lab. Borda</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-emerald-800 border-b border-emerald-200 pb-1 mb-2">Yerba Buena</p>
            <p className="text-gray-700">• Lab. Auad</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-emerald-800 border-b border-emerald-200 pb-1 mb-2">Banda del Río Salí</p>
            <p className="text-gray-700">• Lab. Rondia</p>
            <p className="text-gray-700">• Lab. Sarmiento</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-emerald-800 border-b border-emerald-200 pb-1 mb-2">Alderetes</p>
            <p className="text-gray-700">• Lab. Silvia Rodriguez</p>
            <p className="text-gray-700">• Lab. Mayol</p>
          </div>
          <div className="space-y-1 sm:col-span-2 mt-2">
            <p className="font-bold text-emerald-800 border-b border-emerald-200 pb-1 mb-2">La Florida y Lastenia</p>
            <p className="text-gray-700">• Laboratorios adheridos en la zona</p>
          </div>
        </div>
        <div className="text-center p-2">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 font-bold rounded-full text-xs uppercase tracking-wide">
            Descuentos del 20% al 30%
          </span>
        </div>
      </div>
    )
  },
  'Farmacias': {
    title: 'Red de Farmacias',
    icon: Pill,
    color: 'text-amber-600',
    content: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">Requisito indispensable: Presentar pedido médico autorizado con Nombre y DNI.</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl text-sm border border-amber-100">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900">Farmacia La Plazoleta</p>
              <p className="text-gray-600 text-xs">Av. Mitre 591, San Miguel de Tucumán</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl text-sm border border-amber-100">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900">Farmacia Las Salinas</p>
              <p className="text-gray-600 text-xs">Av. Rivadavia 1090, Alderetes</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl text-sm border border-amber-100">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900">Farmacia San Benito</p>
              <p className="text-gray-600 text-xs">Av. Monseñor Díaz 601, Banda del Río Salí</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl text-sm border border-amber-100">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900">Farmacia Ingenio La Florida</p>
              <p className="text-gray-600 text-xs">La Florida</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl text-sm border border-amber-100">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900">Farmacia Del Pueblo</p>
              <p className="text-gray-600 text-xs">Lastenia</p>
            </div>
          </div>
        </div>
        <div className="text-center p-2 mt-2">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 font-bold rounded-full text-xs uppercase tracking-wide">
            Descuentos del 20% al 30%
          </span>
        </div>
      </div>
    )
  }
}

const beneficiosPrincipales = [
  { id: 'Ambulancia', icon: Ambulance, title: 'Servicio de Ambulancia (SEM)', text: 'Guardia las 24 hs para emergencias.', color: 'bg-blue-50 text-blue-600' },
  { id: 'Guardia', icon: Activity, title: 'Guardia Sanatorio del Sur', text: 'Atención permanente en Santiago 1251.', color: 'bg-red-50 text-red-600' },
  { id: 'Laboratorios', icon: Microscope, title: 'Laboratorios (20% a 30%)', text: 'Red en toda la provincia.', color: 'bg-emerald-50 text-emerald-600' },
  { id: 'Farmacias', icon: Pill, title: 'Farmacias (20% a 30%)', text: 'Descuentos con pedido médico.', color: 'bg-amber-50 text-amber-600' },
]

export default function Servicios() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Beneficios para tu familia</h2>
        </div>

        {/* Grid de Cards principales */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {beneficiosPrincipales.map((item) => (
            <div 
              key={item.id} 
              className="relative p-8 rounded-3xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-8">{item.text}</p>
              
              {/* Botón de Ver más corregido (Azul, letra blanca, más grande, sin +) */}
              <button 
                onClick={() => setActiveModal(item.id)}
                className="w-full py-3.5 bg-[#00BCD4] text-white rounded-xl text-sm font-bold shadow-md shadow-[#00BCD4]/20 transition-all hover:bg-[#0097A7] hover:shadow-lg mt-auto"
              >
                Ver más
              </button>
            </div>
          ))}
        </div>

        {/* Sección inferior: Cobertura Médica y Social */}
        <div className="bg-gray-50 rounded-[3rem] p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cobertura Médica y Social</h3>
              <div className="grid gap-6">
                
                {/* Guardia Oftalmológica */}
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

                {/* Otros items de cobertura */}
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

            {/* Imagen Lateral */}
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/servicio-medico.jpg" 
                  alt="Atención Médica Red Salud" 
                  className="w-full h-full object-cover"
                />
              </div>
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
      </div>

      {/* OVERLAY MODAL */}
      {activeModal && detalleServicios[activeModal as keyof typeof detalleServicios] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity" 
            onClick={() => setActiveModal(null)} 
          />
          <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-gray-50`}>
                {/* @ts-ignore */}
                {(() => {
                  const Icon = detalleServicios[activeModal as keyof typeof detalleServicios].icon;
                  return <Icon className={`w-7 h-7 ${detalleServicios[activeModal as keyof typeof detalleServicios].color}`} />
                })()}
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight pr-8">
                {detalleServicios[activeModal as keyof typeof detalleServicios].title}
              </h3>
            </div>
            <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {detalleServicios[activeModal as keyof typeof detalleServicios].content}
            </div>
            <button 
              onClick={() => setActiveModal(null)}
              className="w-full mt-8 py-3.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              Cerrar detalles
            </button>
          </div>
        </div>
      )}
    </section>
  )
}