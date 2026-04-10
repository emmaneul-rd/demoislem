import { businessInfo, whatsappLinks, trackingIds, getCtaVariant } from '../data/businessInfo'

// =============================================
// HERO IMAGE CONFIGURATION
// To use a real photo of the institute:
// 1. Place the image file in: /public/images/inslem-hero.jpg
// 2. It will load automatically via the /images/ path
// Recommended: horizontal photo of the institute facade, 800x600px or similar
// =============================================
const heroImageUrl = '/images/inslem-hero.jpg'

const Hero = () => {
  const heroCtaText = getCtaVariant('heroCta')

  return (
    <section id="inicio" className="bg-inslem-blue-dark relative overflow-hidden">
      {/* Subtle dot texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px'}}></div>
      </div>

      {/* Top orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-inslem-orange"></div>

      {/* Decorative turquoise accent circle — subtle brand nod */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-inslem-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-inslem-blue-light/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-10 sm:py-14 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            {/* Text content */}
            <div className="flex-1 text-left">
              {/* Location badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/15">
                <i className="fas fa-map-marker-alt text-inslem-orange"></i>
                {businessInfo.city}, {businessInfo.province}
              </div>

              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-5">
                Aprende inglés y otros idiomas en Higüey con <span className="text-inslem-orange">INSLEM</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
                Instituto de lenguas modernas. Ofrecemos inglés, francés, alemán y español con horarios flexibles, precios accesibles y atención cercana.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
                <a
                  href={whatsappLinks.hero}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={trackingIds.hero}
                  className="inline-flex items-center justify-center gap-2 bg-inslem-orange text-white font-bold px-6 py-4 rounded-lg shadow-lg hover:bg-inslem-orange-hover transition text-base sm:text-lg"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  {heroCtaText}
                </a>
                <a
                  href="#ingles"
                  data-cta={trackingIds.heroSecondary}
                  className="inline-flex items-center justify-center gap-2 bg-white text-inslem-blue-dark font-semibold px-6 py-4 rounded-lg hover:bg-blue-50 transition text-base"
                >
                  Ver curso de inglés
                  <i className="fas fa-arrow-right text-sm"></i>
                </a>
              </div>

              {/* Microcopy */}
              <p className="text-blue-200 text-sm mb-1">
                Te orientamos sin compromiso · Respuesta rápida · Consulta horarios y disponibilidad
              </p>
              <p className="text-blue-300/70 text-xs">
                <i className="fas fa-map-marker-alt mr-1"></i>
                Instituto real en Higüey · Más de 6 niveles de estudio
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <i className="fas fa-graduation-cap text-inslem-teal-light"></i>
                  <span>6 niveles de estudio</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <i className="fas fa-clock text-inslem-teal-light"></i>
                  <span>Horarios flexibles</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <i className="fas fa-chalkboard-user text-inslem-teal-light"></i>
                  <span>Cursos presenciales</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <i className="fas fa-tag text-inslem-teal-light"></i>
                  <span>Precios accesibles</span>
                </div>
              </div>
            </div>

            {/* HERO IMAGE — Real photo container */}
            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Image */}
                <img
                  src={heroImageUrl}
                  alt={`Instituto INSLEM — ${businessInfo.city}, ${businessInfo.province}`}
                  className="w-full aspect-[4/3] object-cover block"
                  onError={(e) => {
                    // Fallback: show branded placeholder if image doesn't exist
                    e.target.style.display = 'none'
                    const fallback = e.target.nextElementSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                {/* Fallback placeholder — shown only if image fails to load */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-inslem-blue/50 to-inslem-teal/30 items-center justify-center hidden relative" style={{display: 'none'}}>
                  {/* Subtle brand circles */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-inslem-teal/10"></div>
                  <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-inslem-orange/10"></div>
                  <div className="text-center relative z-10">
                    <i className="fas fa-language text-6xl text-white/30 mb-3"></i>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="text-2xl font-extrabold">
                        <span className="text-white">INS</span>
                        <span className="text-inslem-orange">LEM</span>
                      </span>
                    </div>
                    <span className="text-sm text-blue-200 mt-1 block">Instituto de Lenguas Modernas</span>
                  </div>
                </div>
                {/* Subtle overlay for brand integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-inslem-blue-dark/40 via-transparent to-transparent pointer-events-none"></div>
                {/* Location badge on image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                  <i className="fas fa-map-pin text-inslem-teal-light text-sm"></i>
                  <span className="text-white/90 text-xs font-medium">{businessInfo.address.split(',')[0]}, {businessInfo.sector.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition to cream */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12">
          <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="#F9F6F0"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
