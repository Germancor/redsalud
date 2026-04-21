import { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo Funciona', href: '#como-funciona' },
  { label: 'Planes', href: '#planes' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top bar - contact info */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="bg-[#E91E63] text-white text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="tel:+5493816603741"
                className="flex items-center gap-1 hover:text-white/80 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>381-660-3741 Call Center Ventas y Cobranzas</span>
              </a>
            </div>
            <span className="hidden sm:inline">Atención personalizada en Tucumán</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold text-[#E91E63] block -mb-0.5">Red Salud</span>
              <span className="text-xs text-gray-500 font-medium">Tucumán</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#E91E63] rounded-lg hover:bg-[#E91E63]/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5493816603741"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E91E63] border border-gray-200 rounded-full hover:border-[#E91E63]/30 transition-all"
            >
              <Phone className="w-4 h-4" />
              Llamar
            </a>
            <a
              href="https://wa.me/5493816603741?text=Hola,%20quiero%20recibir%20información%20sobre%20Red%20Salud%20Tucumán"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-brand rounded-full hover:shadow-lg hover:shadow-[#E91E63]/25 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl mx-4 mt-2 rounded-2xl overflow-hidden">
          <nav className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-4 py-3 text-left text-sm font-medium text-gray-700 hover:text-[#E91E63] hover:bg-[#E91E63]/5 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:+5493816603741"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl"
              >
                <Phone className="w-4 h-4" />
                381-660-3741
              </a>
              <a
                href="https://wa.me/5493816603741?text=Hola,%20quiero%20recibir%20información%20sobre%20Red%20Salud%20Tucumán"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-brand rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
