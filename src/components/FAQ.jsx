import { useState } from 'react'
import { faqItems, whatsappLinks, trackingIds } from '../data/businessInfo'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-14 bg-warm-light relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-inslem-blue-soft text-inslem-blue-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-question-circle text-xs"></i>
            Preguntas frecuentes
          </div>
          <h2 className="text-3xl font-bold text-inslem-blue-dark mb-3">
            Dudas que puedes tener
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Resolvemos las preguntas más comunes antes de que nos escribas
          </p>
          <div className="w-16 h-1 bg-inslem-orange mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ items */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-inslem-blue-dark text-sm sm:text-base pr-4">
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index
                    ? 'bg-inslem-blue text-white'
                    : 'bg-inslem-blue-soft text-inslem-blue'
                }`}>
                  <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48' : 'max-h-0'
              }`}>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after FAQ — with tracking */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm mb-2">
            ¿Tienes otra pregunta? Escríbenos directamente
          </p>
          {/* Microcopy — local trust */}
          <p className="text-gray-500 text-xs mb-4">
            Estamos en Higüey · Respuesta rápida · Sin compromiso
          </p>
          <a
            href={whatsappLinks.faq}
            target="_blank"
            rel="noopener noreferrer"
            data-cta={trackingIds.faq}
            className="inline-flex items-center gap-2 bg-inslem-orange text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-inslem-orange-hover transition text-sm"
          >
            <i className="fab fa-whatsapp"></i>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
