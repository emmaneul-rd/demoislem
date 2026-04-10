import { languages, whatsappLinks, trackingIds } from '../data/businessInfo'

const Languages = () => {
  return (
    <section id="idiomas" className="py-14 bg-inslem-blue-soft relative">
      {/* Subtle turquoise accent band at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-inslem-teal/30 via-inslem-teal-light/50 to-inslem-teal/30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/70 text-inslem-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-inslem-teal/10">
            <i className="fas fa-globe text-xs"></i>
            Oferta académica
          </div>
          <h2 className="text-3xl font-bold text-inslem-blue-dark mb-3">
            Idiomas que impartimos
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Formación seria y accesible para tu crecimiento personal y profesional
          </p>
          <div className="w-16 h-1 bg-inslem-orange mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Language cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {languages.map((lang, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col items-start text-left h-full hover:shadow-lg transition-shadow group">
              {/* Icon — blue with turquoise hover effect */}
              <div className="w-14 h-14 rounded-xl bg-inslem-blue flex items-center justify-center mb-4 shadow-sm group-hover:bg-inslem-teal transition-colors">
                <i className={`fas ${lang.icon} text-white text-lg`}></i>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-inslem-blue-dark mb-2">{lang.name}</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-1">{lang.description}</p>

              {/* CTA — specific to each language */}
              <div className="pt-4 border-t border-gray-100 w-full">
                <a
                  href={whatsappLinks[lang.whatsappKey]}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={trackingIds[lang.trackingId]}
                  className="inline-flex items-center gap-2 text-inslem-teal text-sm font-semibold hover:text-inslem-teal-light transition-colors"
                >
                  {lang.ctaText}
                  <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Consulta disponibilidad, horarios y costos para cada idioma.
        </p>
      </div>
    </section>
  )
}

export default Languages
