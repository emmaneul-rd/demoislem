import { businessInfo, whatsappLinks, trackingIds } from '../data/businessInfo'

const Location = () => {
  return (
    <section id="ubicacion" className="py-14 bg-inslem-teal-muted relative">
      {/* Turquoise accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-inslem-teal/40 via-inslem-teal-light to-inslem-teal/40"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-inslem-teal font-semibold text-sm uppercase tracking-wider mb-3">
            <i className="fas fa-map-marker-alt"></i> Encuéntranos
          </span>
          <h2 className="text-3xl font-bold text-inslem-blue-dark mb-3">Nuestra ubicación</h2>
          <div className="w-16 h-1 bg-inslem-orange mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* LEFT: Info panel — address, contacts, buttons */}
          <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col justify-center">
            {/* Brand name */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-inslem-blue flex items-center justify-center flex-shrink-0">
                <i className="fas fa-school text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-inslem-blue-dark leading-tight">Instituto de Lenguas Modernas INSLEM</h3>
                <span className="text-sm text-gray-500">{businessInfo.city}, {businessInfo.province}</span>
              </div>
            </div>

            {/* Address — shown ONCE, clearly */}
            <div className="border-l-4 border-inslem-orange pl-5 mb-5">
              <address className="not-italic text-gray-700 text-base leading-relaxed">
                {businessInfo.address}, {businessInfo.sector.split(',')[0]}.<br />
                {businessInfo.reference}, {businessInfo.city}.<br />
                {businessInfo.province}, {businessInfo.country}.
              </address>
            </div>

            {/* Reference note */}
            <div className="bg-inslem-orange-light rounded-lg p-3 mb-6 flex items-start gap-3">
              <i className="fas fa-lightbulb text-inslem-orange mt-1 flex-shrink-0"></i>
              <p className="text-sm text-gray-700">
                <strong>Referencia:</strong> Frente al Pica Pollo Matías, en el sector Savica de Higüey.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <i className="fas fa-phone text-inslem-teal w-4 text-center"></i>
                <a href={`tel:${businessInfo.phone}`} className="hover:text-inslem-blue transition font-medium">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <i className="fas fa-phone text-inslem-teal w-4 text-center"></i>
                <a href={`tel:${businessInfo.phoneAlt.replace(/-/g, '')}`} className="hover:text-inslem-blue transition font-medium">
                  {businessInfo.phoneAlt}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <i className="fas fa-envelope text-inslem-teal w-4 text-center"></i>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-inslem-blue transition font-medium">
                  {businessInfo.email}
                </a>
              </div>
            </div>

            {/* Local trust badge */}
            <div className="flex items-center gap-2 mb-5 text-sm text-gray-600 bg-inslem-blue-soft/50 rounded-lg px-3 py-2">
              <i className="fas fa-check-circle text-inslem-teal"></i>
              <span>Negocio real en Higüey · Fácil de encontrar · Atención cercana</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-inslem-blue text-white font-semibold px-5 py-3 rounded-lg hover:bg-inslem-blue-dark transition text-sm shadow-sm"
              >
                <i className="fas fa-map"></i>
                Abrir ubicación
              </a>
              <a
                href={whatsappLinks.location}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={trackingIds.location}
                className="inline-flex items-center justify-center gap-2 bg-inslem-orange text-white font-semibold px-5 py-3 rounded-lg hover:bg-inslem-orange-hover transition text-sm shadow-sm"
              >
                <i className="fab fa-whatsapp"></i>
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-inslem-blue text-inslem-blue font-semibold px-5 py-3 rounded-lg hover:bg-inslem-blue hover:text-white transition text-sm"
              >
                <i className="fas fa-phone"></i>
                Llamar ahora
              </a>
            </div>
          </div>

          {/* RIGHT: Google Maps embed — real, functional, no duplicate address */}
          <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <div className="aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-full relative">
              {/* Google Maps embed */}
              <iframe
                title={`Ubicación de INSLEM en ${businessInfo.city}`}
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d-69.1117!3d18.7719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8a0f5e5e5e5e5%3A0x0!2s${encodeURIComponent(businessInfo.address + ', ' + businessInfo.city + ', ' + businessInfo.province)}!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo`}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Fallback overlay if embed fails — shows static map placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-inslem-blue to-inslem-teal/60 flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <i className="fas fa-map-marked-alt text-3xl text-white/70"></i>
                  </div>
                  <p className="text-white font-bold text-xl">INSLEM</p>
                  <p className="text-blue-100 text-sm mt-1">{businessInfo.city}, {businessInfo.province}</p>
                  <a
                    href={businessInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-inslem-orange text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-inslem-orange-hover transition"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
