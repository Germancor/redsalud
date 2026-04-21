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
    { label: 'Plan Premium', href: '#planes' },
    { label: 'Cotización online', href: '#contacto' },
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
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="leading-tight">
                <span className="text-lg font-bold text-white block -mb-0.5">Red Salud</span>
                <span className="text-xs text-gray-500 font-medium">Tucumán</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Cobertura médica y servicio de sepelio para familias de Tucumán. Más de 15 años brindando tranquilidad y respaldo.
            </p>
            <div className="space-y-3">
              <a href="tel:+5493816603741" className="flex items-center gap-3 text-sm hover:text-[#E91E63] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                381-660-3741
              </a>
              <a href="mailto:info@redsaludtucuman.com" className="flex items-center gap-3 text-sm hover:text-[#E91E63] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                redsaludsc@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                San Martín 1234, San Miguel de Tucumán
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm hover:text-[#E91E63] transition-colors"
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
                    className="text-sm hover:text-[#E91E63] transition-colors"
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
                    className="text-sm hover:text-[#E91E63] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © 2026 Red Salud Tucumán. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/redsalud.tuc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E91E63] transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/p/RED-SALUD-Tucum%C3%A1n-61569796081263/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E91E63] transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-600 text-center mt-4 flex items-center justify-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-[#E91E63]" /> para familias tucumanas
          </p>
        </div>
      </div>
    </footer>
  )
}
