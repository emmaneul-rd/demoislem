import { businessInfo, whatsappLinks, trackingIds, getCtaVariant } from '../data/businessInfo'

const CTA = () => {
  const finalCtaText = getCtaVariant('finalCta')

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-inslem-blue-dark relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
      </div>

      {/* Top orange line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-inslem-orange"></div>

      {/* Turquoise subtle glow — brand identity */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-inslem-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-inslem-teal-light/5 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Icon — turquoise ring for identity */}
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/10">
          <i className="fas fa-comments text-3xl text-inslem-teal-light"></i>
        </div>

        {/* Main question — direct, conversion-focused */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          ¿Sobre cuál idioma deseas recibir información?
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
          Escríbenos y con gusto te orientamos sobre el idioma que deseas estudiar.
        </p>

        {/* Primary CTA — big, clear, orange, with tracking */}
        <a
          href={whatsappLinks.ctaFinal}
          target="_blank"
          rel="noopener noreferrer"
          data-cta={trackingIds.ctaFinal}
          className="inline-flex items-center gap-3 bg-inslem-orange text-white px-8 py-4 rounded-xl text-lg font-bold shadow-2xl hover:bg-inslem-orange-hover hover:shadow-xl transition-all"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
          {finalCtaText}
        </a>

        {/* Microcopy — reduce friction + local trust */}
        <p className="text-blue-300 text-sm mt-5">Respuesta rápida · Te orientamos sin compromiso</p>
        <p className="text-blue-400/60 text-xs mt-1">
          <i className="fas fa-map-marker-alt mr-1"></i>
          Instituto real en Higüey · {businessInfo.reference}
        </p>

        {/* Contact alternatives */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-blue-200 text-sm mb-3">O comunícate con nosotros por:</p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
            <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-blue-200 hover:text-white transition">
              <i className="fas fa-phone text-inslem-teal-light text-xs"></i>
              {businessInfo.phone}
            </a>
            <span className="text-white/20">|</span>
            <a href={`tel:${businessInfo.phoneAlt.replace(/-/g, '')}`} className="flex items-center gap-2 text-blue-200 hover:text-white transition">
              <i className="fas fa-phone text-inslem-teal-light text-xs"></i>
              {businessInfo.phoneAlt}
            </a>
            <span className="text-white/20">|</span>
            <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-2 text-blue-200 hover:text-white transition">
              <i className="fas fa-envelope text-inslem-teal-light text-xs"></i>
              {businessInfo.email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-12 h-0.5 bg-white/10 rounded"></div>
          <div className="w-2 h-2 bg-inslem-teal rounded-full"></div>
          <div className="w-2 h-2 bg-inslem-orange rounded-full"></div>
          <div className="w-2 h-2 bg-inslem-teal rounded-full"></div>
          <div className="w-12 h-0.5 bg-white/10 rounded"></div>
        </div>
      </div>
    </section>
  )
}

export default CTA
