import { programDuration } from '../data/businessInfo'

const ProgramDuration = () => {
  const { firstLevels, lastLevels, totalLevels, note } = programDuration

  return (
    <section className="py-14 bg-inslem-blue-dark relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px'}}></div>
      </div>
      
      {/* Turquoise accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-inslem-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <i className="fas fa-layer-group text-xs text-inslem-teal-light"></i>
              Plan de estudio
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Duración del programa de inglés
            </h3>
            <div className="w-16 h-1 bg-inslem-orange mx-auto rounded-full"></div>
          </div>

          {/* Duration card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <p className="text-gray-700 mb-6 text-lg text-center">
              El curso está organizado en <strong className="text-inslem-blue-dark">{totalLevels} niveles</strong> progresivos:
            </p>

            {/* Visual timeline */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* First levels */}
              <div className="flex-1 bg-inslem-blue-soft rounded-xl p-5 border border-inslem-blue/10 text-center">
                <div className="w-14 h-14 rounded-full bg-inslem-blue flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-2xl font-extrabold text-white">{firstLevels.count}</span>
                </div>
                <div className="text-sm font-semibold text-inslem-blue-dark uppercase tracking-wide mb-1">
                  {firstLevels.label}
                </div>
                <div className="text-inslem-orange font-bold text-lg">
                  {firstLevels.duration}
                </div>
                <div className="mt-3 flex justify-center gap-1.5">
                  {Array.from({ length: firstLevels.count }).map((_, n) => (
                    <div key={n} className="w-7 h-2 bg-inslem-blue rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Last levels */}
              <div className="flex-1 bg-inslem-teal-muted rounded-xl p-5 border border-inslem-teal/10 text-center">
                <div className="w-14 h-14 rounded-full bg-inslem-teal flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-2xl font-extrabold text-white">{lastLevels.count}</span>
                </div>
                <div className="text-sm font-semibold text-inslem-blue-dark uppercase tracking-wide mb-1">
                  {lastLevels.label}
                </div>
                <div className="text-inslem-teal font-bold text-lg">
                  {lastLevels.duration}
                </div>
                <div className="mt-3 flex justify-center gap-1.5">
                  {Array.from({ length: lastLevels.count }).map((_, n) => (
                    <div key={n} className="w-7 h-2 bg-inslem-teal rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6 text-center">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramDuration
