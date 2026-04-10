import { businessInfo } from '../data/businessInfo'

const Footer = () => {
  return (
    <footer className="bg-inslem-blue-deeper text-white">
      {/* Top bar accent — blue to turquoise to orange */}
      <div className="h-1 bg-gradient-to-r from-inslem-blue via-inslem-teal to-inslem-orange"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-extrabold">
                <span className="text-white">INS</span>
                <span className="text-inslem-orange">LEM</span>
              </span>
            </div>
            <p className="text-blue-200 text-sm mb-1">{businessInfo.tagline}</p>
            <p className="text-blue-300 text-xs leading-relaxed">
              Educación de calidad con cercanía.<br />
              {businessInfo.city}, {businessInfo.country}
            </p>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-inslem-teal-light mb-3">Idiomas</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-inslem-teal/50"></i> Inglés</li>
              <li className="flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-inslem-teal/50"></i> Francés</li>
              <li className="flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-inslem-teal/50"></i> Alemán</li>
              <li className="flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-inslem-teal/50"></i> Español</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-inslem-teal-light mb-3">Ubicación</h4>
            <p className="text-blue-200 text-sm leading-relaxed">
              {businessInfo.address}<br />
              {businessInfo.sector.split(',')[0]}.<br />
              {businessInfo.city}, {businessInfo.province}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-inslem-teal-light mb-3">Contacto</h4>
            <div className="space-y-2 text-sm">
              <a 
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition"
              >
                <i className="fab fa-whatsapp text-inslem-teal-light w-4 text-center"></i>
                WhatsApp: {businessInfo.phone}
              </a>
              <a 
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-2 text-blue-200 hover:text-white transition"
              >
                <i className="fas fa-phone text-inslem-teal-light w-4 text-center"></i>
                {businessInfo.phone}
              </a>
              <a 
                href={`tel:${businessInfo.phoneAlt.replace(/-/g, '')}`}
                className="flex items-center gap-2 text-blue-200 hover:text-white transition"
              >
                <i className="fas fa-phone text-inslem-teal-light w-4 text-center"></i>
                {businessInfo.phoneAlt}
              </a>
              <a 
                href={`mailto:${businessInfo.email}`}
                className="flex items-center gap-2 text-blue-200 hover:text-white transition"
              >
                <i className="fas fa-envelope text-inslem-teal-light w-4 text-center"></i>
                {businessInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <p className="text-center text-blue-300 text-xs">
            © {new Date().getFullYear()} {businessInfo.shortName} · {businessInfo.tagline} · {businessInfo.city}, {businessInfo.province}, {businessInfo.country}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
