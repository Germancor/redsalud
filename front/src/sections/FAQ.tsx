import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: '¿Cómo me asocio a Red Salud Tucumán?',
    answer: 'Es muy simple. Escribinos por WhatsApp al 381-660-3741, completá tus datos y elegí tu plan (Primario o Premium). Te enviamos la documentación, firmás digitalmente y en 24 a 48 horas quedás activado.',
  },
  {
    question: '¿Cuánto tarda en activarse la cobertura?',
    answer: 'Una vez que completás la inscripción y el primer pago, tu cobertura se activa entre 24 y 48 horas hábiles. Te enviamos tu credencial digital por WhatsApp y email para que empieces a usarla de inmediato.',
  },
  {
    question: '¿Qué incluye exactamente el servicio de sepelio?',
    answer: 'El servicio de sepelio incluye: asesoramiento familiar las 24hs, gestión completa de trámites (certificado de defunción, autorizaciones, etc.), servicio funerario con ataúd, traslado y preparación. En el Plan Premium también se incluye la inhumación o cremación completa.',
  },
  {
    question: '¿Hay edad límite para asociarse?',
    answer: 'No, no hay edad límite. Podés asociarte desde recién nacidos hasta adultos mayores. Los precios varían según la edad del titular, por lo que te recomendamos consultar por WhatsApp para recibir una cotización personalizada.',
  },
  {
    question: '¿Puedo incluir a mis padres o familiares directos?',
    answer: 'Sí, en el Plan Premium podés incluir a tu cónyuge, hijos menores de 21 años (o hasta 25 si estudian), y con un adicional también a padres y suegros. Consultanos por WhatsApp para armar un plan a tu medida.',
  },
  {
    question: '¿Dónde puedo usar la cobertura médica?',
    answer: 'Tenés descuentos en una amplia cartilla de profesionales médicos, clínicas y sanatorios de referencia en toda la provincia de Tucumán. También contamos con convenios en otras provincias para emergencias.',
  },
  {
    question: '¿Cómo consigo turnos médicos?',
    answer: 'Podés solicitar turnos escribiendo por WhatsApp o llamando a nuestro centro de atención las 24hs. También tenemos una plataforma online donde podés gestionar tus turnos directamente.',
  },
  {
    question: '¿Qué pasa si me mudo de provincia?',
    answer: 'Con el Plan Premium tenés cobertura nacional de emergencias. Si te mudás de manera definitiva, podemos ayudarte a transferir tu cobertura a nuestra red de prestadores en otra provincia.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00BCD4]/10 text-[#00BCD4] rounded-full text-sm font-medium mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-lg text-gray-600">
            Si no encontrás lo que buscás, escribinos por WhatsApp y te respondemos al instante.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'border-[#00BCD4]/20 bg-[#00BCD4]/[0.02] shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-3 pr-4">
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 ${
                    openIndex === index ? 'text-[#00BCD4]' : 'text-gray-400'
                  }`} />
                  <span className={`font-semibold ${
                    openIndex === index ? 'text-[#00BCD4]' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#00BCD4]' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pl-14">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿Tenés otra pregunta?</p>
          <a
            href="https://wa.me/5493816603741?text=Hola,%20tengo%20una%20pregunta%20sobre%20Red%20Salud%20Tucumán"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-brand rounded-full hover:shadow-lg hover:shadow-[#E91E63]/25 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
