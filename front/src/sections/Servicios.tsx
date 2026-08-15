import { useState } from 'react'
import { 
  Stethoscope, Pill, Ambulance, Heart, Microscope, 
  Eye, ShieldCheck, MapPin, Activity, X, Phone, ChevronDown 
} from 'lucide-react'

const AccordionZone = ({ title, children, colorClass, borderClass, bgClass, icon: Icon }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={`border ${borderClass} rounded-xl overflow-hidden mb-3 bg-white shadow-sm transition-all`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center justify-between hover:${bgClass} transition-colors`}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className={`w-5 h-5 ${colorClass} shrink-0`} />}
          <span className="font-bold text-gray-900 text-left">{title}</span>
        </div>
        <div className={`p-1.5 rounded-full ${bgClass} ${colorClass} shrink-0`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className={`p-4 pt-0 border-t ${borderClass} text-sm space-y-3 mt-2`}>
            <div className="pt-3 flex flex-col gap-3">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Datos detallados para los Modales
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
            <a href="tel:+543812540617" className="flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <Phone className="w-5 h-5 text-blue-500"/> (381) 2540617
            </a>
            <a href="https://wa.me/5493816994478" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
              <Phone className="w-5 h-5 text-blue-500"/> (381) 6994478
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
            <p className="text-gray-600">LAS HERAS 575, San Miguel de Tucumán</p>
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
        <div className="bg-emerald-100 border border-emerald-200 text-emerald-900 p-3 rounded-xl text-sm font-bold text-center shadow-sm">
          REQUISITO: AUTORIZACIÓN PREVIAMENTE
        </div>
        <p className="text-sm text-gray-600 mb-2">Desplegá tu zona para ver los centros adheridos:</p>
        
        <div className="space-y-2">
          {/* SMT */}
          <AccordionZone title="San Miguel de Tucumán" colorClass="text-emerald-600" borderClass="border-emerald-100" bgClass="bg-emerald-50" icon={Microscope}>
            {[
              { nombre: 'Lab. EMC', dir: 'Monteagudo 719', tel: 'Por turnos 4220613' },
              { nombre: 'Lab. Alvarez Ali', dir: 'Av. Mitre 9', tel: '4977282 / 3813599837' },
              { nombre: 'Lab. Sarmiento', dir: 'Lavalle 868', tel: '3813543557' },
              { nombre: 'Lab. Sarmiento', dir: 'Av. Sarmiento 784', tel: '3816812186' },
              { nombre: 'Lab. Borda', dir: 'Salta 88', tel: '4301139' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-gray-900 font-bold">{item.nombre}</p>
                  <p className="text-gray-600">{item.dir}</p>
                  <p className="text-emerald-700 text-xs font-bold mt-0.5">📞 {item.tel}</p>
                </div>
              </div>
            ))}
          </AccordionZone>

          {/* Yerba Buena */}
          <AccordionZone title="Yerba Buena" colorClass="text-emerald-600" borderClass="border-emerald-100" bgClass="bg-emerald-50" icon={Microscope}>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <div>
                <p className="text-gray-900 font-bold">Lab. Auda</p>
                <p className="text-gray-600">Av. Aconquija 1296</p>
                <p className="text-emerald-700 text-xs font-bold mt-0.5">📞 2547093</p>
              </div>
            </div>
          </AccordionZone>

          {/* Alderetes */}
          <AccordionZone title="Alderetes" colorClass="text-emerald-600" borderClass="border-emerald-100" bgClass="bg-emerald-50" icon={Microscope}>
            {[
              { nombre: 'Lab. Silvia Rodriguez', dir: 'Av. Rivadavia 575', tel: '3816452170' },
              { nombre: 'Lab. Mayol', dir: 'Av. Rivadavia 1450', tel: '4940381' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-gray-900 font-bold">{item.nombre}</p>
                  <p className="text-gray-600">{item.dir}</p>
                  <p className="text-emerald-700 text-xs font-bold mt-0.5">📞 {item.tel}</p>
                </div>
              </div>
            ))}
          </AccordionZone>

          {/* BRS */}
          <AccordionZone title="Banda del Río Salí" colorClass="text-emerald-600" borderClass="border-emerald-100" bgClass="bg-emerald-50" icon={Microscope}>
            {[
              { nombre: 'Lab. Rondia', dir: 'Lavalle 291 Local 3', tel: '3816431688' },
              { nombre: 'Lab. Sarmiento', dir: 'Av. Monseñor Diaz 459', tel: '426500' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-gray-900 font-bold">{item.nombre}</p>
                  <p className="text-gray-600">{item.dir}</p>
                  <p className="text-emerald-700 text-xs font-bold mt-0.5">📞 {item.tel}</p>
                </div>
              </div>
            ))}
          </AccordionZone>

          {/* La Florida y Lastenia */}
          <AccordionZone title="La Florida y Lastenia" colorClass="text-emerald-600" borderClass="border-emerald-100" bgClass="bg-emerald-50" icon={Microscope}>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <div>
                <p className="text-gray-900 font-bold">Lab. Silvia Rodriguez (La Florida)</p>
                <p className="text-gray-600">Tornquist 19</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <div>
                <p className="text-gray-900 font-bold">Lab. Silvia Rodriguez (Lastenia)</p>
                <p className="text-gray-600">República 335</p>
                <p className="text-emerald-700 text-xs font-bold mt-0.5">📞 3816452170</p>
              </div>
            </div>
          </AccordionZone>
        </div>

        <div className="text-center p-2 mt-4">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 font-bold rounded-full text-xs uppercase tracking-wide">
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
        <div className="bg-amber-100 border border-amber-200 text-amber-900 p-3 rounded-xl text-sm font-bold text-center shadow-sm">
          REQUISITO: AUTORIZACIÓN PREVIAMENTE
        </div>
        <p className="text-sm text-gray-600 mb-2">Desplegá la farmacia para ver sus sucursales:</p>
        
        <div className="space-y-2">
          {/* La Plazoleta */}
          <AccordionZone title="Farmacia La Plazoleta" colorClass="text-amber-600" borderClass="border-amber-100" bgClass="bg-amber-50" icon={MapPin}>
            {[
              { dir: 'Av. Rep del Líbano y España', tel: '4323175' },
              { dir: 'Av. Belgrano 162', tel: '4238659' },
              { dir: 'Av. Soldati 86 (Refinor)', tel: '4224442' },
              { dir: 'Av. Juan B Justo 949', tel: '4217135' },
              { dir: 'Av. Néstor Kirchner 2310', tel: '4830500' },
              { dir: 'Lavalle 2770', tel: '4234590' },
              { dir: 'Av. Aconquija 2099, Yerba Buena', tel: '4256840' },
              { dir: 'Santiago 589', tel: '4222897' },
              { dir: 'Mendoza 795', tel: '4526030' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">{item.dir}</p>
                  <p className="text-amber-700 text-xs font-bold mt-0.5">📞 {item.tel}</p>
                </div>
              </div>
            ))}
          </AccordionZone>

          {/* Las Salinas */}
          <AccordionZone title="Farmacia Las Salinas" colorClass="text-amber-600" borderClass="border-amber-100" bgClass="bg-amber-50" icon={MapPin}>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <div>
                <p className="text-gray-900 font-medium">Av. Rivadavia 1080, Alderetes</p>
                <p className="text-amber-700 text-xs font-bold mt-0.5">📞 4942935</p>
              </div>
            </div>
          </AccordionZone>

          {/* San Benito */}
          <AccordionZone title="Farmacia San Benito" colorClass="text-amber-600" borderClass="border-amber-100" bgClass="bg-amber-50" icon={MapPin}>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <div>
                <p className="text-gray-900 font-medium">Av. Rivadavia 895, Alderetes</p>
                <p className="text-amber-700 text-xs font-bold mt-0.5">📞 4942938</p>
              </div>
            </div>
          </AccordionZone>

          {/* Ingenio La Florida */}
          <AccordionZone title="Farmacia Ingenio La Florida" colorClass="text-amber-600" borderClass="border-amber-100" bgClass="bg-amber-50" icon={MapPin}>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <div>
                <p className="text-gray-900 font-medium">Av. Landajo 1° Cuadra, La Florida</p>
              </div>
            </div>
          </AccordionZone>

          {/* Del Pueblo */}
          <AccordionZone title="Farmacia Del Pueblo" colorClass="text-amber-600" borderClass="border-amber-100" bgClass="bg-amber-50" icon={MapPin}>
             {[
              { dir: 'Av. Monseñor Diaz N°499, Banda del Rio Salí', tel: null },
              { dir: '25 de Mayo N°313', tel: '4216600' },
              { dir: 'Córdoba N°652', tel: '4979181' },
              { dir: 'Laprida N°3', tel: '4227513' },
              { dir: 'Av. Aconquija N°1336', tel: '4256444' },
              { dir: 'Av. Alem N°199', tel: '4244540' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">{item.dir}</p>
                  {item.tel && <p className="text-amber-700 text-xs font-bold mt-0.5">📞 {item.tel}</p>}
                </div>
              </div>
            ))}
          </AccordionZone>
        </div>

        <div className="text-center p-2 mt-4">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 font-bold rounded-full text-xs uppercase tracking-wide">
            Descuentos del 20% al 30%
          </span>
        </div>
      </div>
    )
  }
}

const beneficiosPrincipales = [
  { id: 'Ambulancia', icon: Ambulance, title: 'Servicio de Ambulancia (SEM)', text: 'Guardia las 24 hs para emergencias.', color: 'bg-blue-50 text-blue-600' },
  { id: 'Guardia', icon: Activity, title: 'Guardia Sanatorio del Sur', text: 'Atención permanente en Las Heras 575, S.M.T.', color: 'bg-red-50 text-red-600' },
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
        <div id="cobertura-medica" className="bg-gray-50 rounded-[3rem] p-8 sm:p-12">
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
                  src="/servicio-medico.webp" 
                  alt="Atención Médica Red Salud" 
                  width={800}
                  height={584}
                  loading="lazy"
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
            {/* Scrollable container */}
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