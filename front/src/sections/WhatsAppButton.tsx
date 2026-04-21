import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      setTooltipVisible(true)
      setTimeout(() => setTooltipVisible(false), 5000)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Tooltip */}
      <div
        className={`bg-white rounded-2xl shadow-xl p-4 max-w-[260px] mb-2 transition-all duration-300 relative border border-gray-100 ${
          tooltipVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setTooltipVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <X className="w-3 h-3 text-gray-600" />
        </button>
        <p className="text-sm font-semibold text-gray-900 mb-1">¿Tenés dudas?</p>
        <p className="text-xs text-gray-600">
          Escribinos por WhatsApp y te ayudamos a elegir el mejor plan.
        </p>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/5493816603741?text=Hola,%20quiero%20recibir%20información%20sobre%20Red%20Salud%20Tucumán"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-5 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm font-semibold hidden sm:inline">Escribinos por WhatsApp</span>
        <span className="text-sm font-semibold sm:hidden">WhatsApp</span>
      </a>
    </div>
  )
}
