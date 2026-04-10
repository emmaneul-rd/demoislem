import { useState } from 'react'
import { businessInfo, whatsappLinks, trackingIds } from '../data/businessInfo'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Top accent bar — blue to orange gradient */}
      <div className="h-1 bg-gradient-to-r from-inslem-blue via-inslem-blue-dark to-inslem-orange"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                <span className="text-inslem-blue-dark">INS</span>
                <span className="text-inslem-orange">LEM</span>
              </span>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold bg-inslem-teal/10 text-inslem-teal px-2.5 py-1 rounded-full uppercase tracking-wide">
              Higüey
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#inicio" className="text-gray-700 font-medium hover:text-inslem-blue px-3 py-2 text-sm transition rounded">Inicio</a>
            <a href="#nosotros" className="text-gray-700 font-medium hover:text-inslem-blue px-3 py-2 text-sm transition rounded">Nosotros</a>
            <a href="#idiomas" className="text-gray-700 font-medium hover:text-inslem-blue px-3 py-2 text-sm transition rounded">Idiomas</a>
            <a href="#ingles" className="text-gray-700 font-medium hover:text-inslem-blue px-3 py-2 text-sm transition rounded">Curso de inglés</a>
            <a href="#ubicacion" className="text-gray-700 font-medium hover:text-inslem-blue px-3 py-2 text-sm transition rounded">Ubicación</a>
            <a href="#faq" className="text-gray-700 font-medium hover:text-inslem-blue px-3 py-2 text-sm transition rounded">Preguntas</a>
            <div className="w-px h-6 bg-gray-200 mx-2"></div>
            <a
              href={whatsappLinks.header}
              target="_blank"
              rel="noopener noreferrer"
              data-cta={trackingIds.header}
              className="bg-inslem-orange text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-inslem-orange-hover transition"
            >
              <i className="fab fa-whatsapp text-base"></i>
              WhatsApp
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-inslem-blue-dark p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-3">
            <div className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              <a href="#inicio" className="px-3 py-2.5 hover:bg-inslem-blue-soft rounded transition" onClick={() => setMenuOpen(false)}>Inicio</a>
              <a href="#nosotros" className="px-3 py-2.5 hover:bg-inslem-blue-soft rounded transition" onClick={() => setMenuOpen(false)}>Nosotros</a>
              <a href="#idiomas" className="px-3 py-2.5 hover:bg-inslem-blue-soft rounded transition" onClick={() => setMenuOpen(false)}>Idiomas</a>
              <a href="#ingles" className="px-3 py-2.5 hover:bg-inslem-blue-soft rounded transition" onClick={() => setMenuOpen(false)}>Curso de inglés</a>
              <a href="#ubicacion" className="px-3 py-2.5 hover:bg-inslem-blue-soft rounded transition" onClick={() => setMenuOpen(false)}>Ubicación</a>
              <a href="#faq" className="px-3 py-2.5 hover:bg-inslem-blue-soft rounded transition" onClick={() => setMenuOpen(false)}>Preguntas</a>
              <a
                href={whatsappLinks.header}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={trackingIds.header}
                className="bg-inslem-orange text-white px-3 py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2 mt-2"
                onClick={() => setMenuOpen(false)}
              >
                <i className="fab fa-whatsapp text-lg"></i>
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
