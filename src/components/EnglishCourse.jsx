import { englishCourses, whatsappLinks, trackingIds, getCtaVariant } from '../data/businessInfo'

const EnglishCourse = () => {
  const cardCtaText = getCtaVariant('englishCardCta')

  return (
    <section id="ingles" className="py-14 bg-white relative">
      {/* Top accent — blue to turquoise */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-inslem-blue via-inslem-teal to-inslem-blue-dark"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-inslem-orange-light text-inslem-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-star text-xs"></i>
            Curso más popular
          </div>
          <h2 className="text-3xl font-bold text-inslem-blue-dark mb-3">
            ¡Aprende inglés con nosotros!
          </h2>
          <p className="text-gray-700 mt-2 max-w-2xl mx-auto text-lg">
            {englishCourses.intro}
          </p>
          <div className="w-16 h-1 bg-inslem-orange mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Trust microcopy — reduce friction before cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600">
          {englishCourses.trustNotes.map((note, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <i className="fas fa-check-circle text-inslem-teal"></i>
              {note}
            </span>
          ))}
        </div>

        {/* Two modality cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {englishCourses.modalities.map((modality) => (
            <div key={modality.id} className="bg-warm-light rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Card header bar */}
              <div className={`${modality.id === 'intensive' ? 'bg-inslem-blue' : 'bg-inslem-blue-dark'} px-5 py-4`}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${modality.hoursIcon} text-white`}></i>
                    </div>
                    <div>
                      <span className="text-white font-bold text-lg block leading-tight">{modality.badge}</span>
                      <span className="text-blue-200 text-sm">{modality.subtitle}</span>
                    </div>
                  </div>
                  <span className="text-white font-semibold text-sm bg-white/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                    <i className="far fa-clock mr-1"></i>{modality.hours}
                  </span>
                </div>
                {/* Decision helper label */}
                <p className="text-blue-100 text-xs mt-3 italic">
                  {modality.decisionLabel}
                </p>
                {/* Decision reinforce — pushes to action */}
                <p className="text-blue-200/80 text-xs mt-1">
                  {modality.decisionReinforce}
                </p>
              </div>

              {/* Card body */}
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  {modality.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-inslem-teal-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-inslem-teal text-xs"></i>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing block — high visibility */}
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 mb-5">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600 text-sm">Inscripción + materiales + camiseta</span>
                    <span className="text-2xl font-extrabold text-inslem-blue-dark">RD${modality.enrollment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-gray-600 text-sm font-medium">Mensualidad</span>
                    <span className="text-3xl font-extrabold text-inslem-orange">RD${modality.monthly.toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA with tracking */}
                <a
                  href={whatsappLinks[modality.whatsappKey]}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={trackingIds[modality.trackingId]}
                  className="flex items-center justify-center gap-2 w-full bg-inslem-orange text-white font-bold px-5 py-3.5 rounded-lg shadow hover:bg-inslem-orange-hover transition text-base"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  {cardCtaText}
                </a>

                {/* Microcopy under CTA — reduce friction */}
                <p className="text-center text-xs text-gray-500 mt-3">
                  Respuesta rápida por WhatsApp · Sin compromiso
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-8 max-w-xl mx-auto">
          {englishCourses.note}
        </p>
      </div>
    </section>
  )
}

export default EnglishCourse
