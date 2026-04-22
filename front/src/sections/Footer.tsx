import { Phone, Mail, MapPin, Heart, Instagram, Facebook } from 'lucide-react'

const footerLinks = {
  servicios: [
    { label: 'Cobertura médica', href: '#servicios' },
    { label: 'Servicio de sepelio', href: '#servicios' },
    { label: 'Emergencias 24hs', href: '#servicios' },
    { label: 'Cartilla médica', href: '#servicios' },
  ],
  planes: [
    { label: 'Plan Primario', href: '#planes' },
    { label: 'Plan Clásico', href: '#planes' },
    { label: 'Plan Premium', href: '#planes' },
  ],
  empresa: [
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Preguntas frecuentes', href: '#faq' },
    { label: 'Términos y condiciones', href: '#' },
    { label: 'Política de privacidad', href: '#' },
  ],
}

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Columna Principal: Marca y Contacto */}
          <div className="lg:col-span-2">
            <div className="mb-6 inline-block">
              <img 
                src="/logo_horizontal2.png"
                alt="Red Salud Tucumán" 
                className="h-14 w-auto object-contain filter" 
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Cobertura médica y servicio de sepelio para familias de Tucumán. Más de 15 años brindando tranquilidad y respaldo.
            </p>
            
            {/* Info de contacto: Teléfono, Ubicación y Email Escrito */}
            <div className="space-y-4 mb-8">
              <a href="tel:+5493816603741" className="flex items-center gap-3 text-sm hover:text-[#00BCD4] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-[#00BCD4]/20">
                  <Phone className="w-4 h-4 group-hover:text-[#00BCD4]" />
                </div>
                381-660-3741
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="mt-1.5">Batalla de Chacabuco 220, San Miguel de Tucumán</span>
              </div>
              <a href="mailto:redsaludsc@gmail.com" className="flex items-center gap-3 text-sm hover:text-[#00BCD4] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-[#00BCD4]/20">
                  <Mail className="w-4 h-4 group-hover:text-[#00BCD4]" />
                </div>
                redsaludsc@gmail.com
              </a>
            </div>

            {/* Redes Sociales (Iconos) */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Seguinos en redes</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/redsalud.tuc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00BCD4] hover:text-white transition-all group"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 transition-colors" />
                </a>
                <a
                  href="https://www.facebook.com/p/RED-SALUD-Tucum%C3%A1n-61569796081263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00BCD4] hover:text-white transition-all group"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Columnas de Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm hover:text-[#00BCD4] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Planes</h4>
            <ul className="space-y-3">
              {footerLinks.planes.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm hover:text-[#00BCD4] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm hover:text-[#00BCD4] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barra Inferior Centrada */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Red Salud Tucumán. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-600 text-center flex items-center justify-center gap-1.5">
              Hecho con <Heart className="w-3 h-3 text-[#00BCD4]" /> para familias tucumanas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}