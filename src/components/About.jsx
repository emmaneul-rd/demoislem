const About = () => {
  return (
    <section id="nosotros" className="py-12 bg-warm-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Accent line */}
          <div className="w-16 h-1 bg-inslem-orange mx-auto mb-6 rounded-full"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-inslem-blue-dark mb-5">
            Comprometidos con nuestra comunidad
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            En <strong className="text-inslem-blue-dark">INSLEM</strong> estamos comprometidos con brindar educación de calidad, 
            con precios accesibles y un servicio cercano para Higüey y toda la provincia.
          </p>

          {/* Divider accents — blue + turquoise */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-8 h-0.5 bg-inslem-blue/30 rounded"></div>
            <div className="w-2 h-2 bg-inslem-teal rounded-full"></div>
            <div className="w-2 h-2 bg-inslem-orange rounded-full"></div>
            <div className="w-2 h-2 bg-inslem-teal rounded-full"></div>
            <div className="w-8 h-0.5 bg-inslem-blue/30 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
