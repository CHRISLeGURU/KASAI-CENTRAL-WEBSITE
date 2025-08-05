import React, { useState } from 'react'
import { Globe, Star, MapPin } from 'lucide-react'

const InteractiveMap = () => {
  const [hoveredTerritory, setHoveredTerritory] = useState(null)

  const territories = [
    { id: 1, name: 'Demba', position: { top: '12%', left: '5%' }, info: 'Territoire du nord-ouest' },
    { id: 2, name: 'Dibaya', position: { top: '18%', right: '8%' }, info: 'Territoire du nord-est' },
    { id: 3, name: 'Kazumba', position: { bottom: '25%', left: '12%' }, info: 'Territoire du sud-ouest' },
    { id: 4, name: 'Luiza', position: { bottom: '18%', right: '5%' }, info: 'Territoire du sud-est' },
    { id: 5, name: ' Dimbelenge', position: { top: '42%', right: '20%' }, info: 'Territoire central-est' }
  ]

  return (
    <section id="territoires" className="section-padding bg-gradient-to-br from-kasai-ivoire/20 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-kasai-bleu mb-6 flex items-center justify-center gap-4">
            <Globe className="w-12 h-12 text-kasai-or" />
            Organisation territoriale du Kasaï-Central
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-kasai-or/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">

            {/* Decorative border animation */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-kasai-or via-kasai-vert to-kasai-terre opacity-0 hover:opacity-20 transition-opacity duration-500 -z-10"></div>

            {/* Map container */}
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-3 border-dashed border-kasai-or/40 overflow-hidden hover:border-kasai-or/60 transition-colors duration-300">

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-kasai-or rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-kasai-vert rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-kasai-terre rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Capital - Kananga */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="group relative">
                  <div className="bg-gradient-to-r from-kasai-or to-yellow-500 text-white px-6 py-3 rounded-full flex items-center space-x-3 shadow-xl border-4 border-white hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse-slow">
                    <Star className="w-6 h-6" />
                    <span className="font-bold text-lg">Kananga</span>
                  </div>

                  {/* Capital info tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-kasai-bleu text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                      Capitale provinciale
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-kasai-bleu"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Territories */}
              {territories.map((territory) => (
                <div
                  key={territory.id}
                  className="absolute z-10 group"
                  style={territory.position}
                  onMouseEnter={() => setHoveredTerritory(territory)}
                  onMouseLeave={() => setHoveredTerritory(null)}
                >
                  <div className="bg-gradient-to-r from-white/95 to-gray-50/90 backdrop-blur-md text-kasai-bleu px-4 py-2 rounded-2xl border-2 border-kasai-vert/30 hover:border-kasai-vert hover:bg-gradient-to-r hover:from-kasai-vert hover:to-green-600 hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold text-sm">{territory.name}</span>
                    </div>
                  </div>

                  {/* Territory info tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-kasai-bleu text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap">
                      {territory.info}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-kasai-bleu"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-kasai-or to-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Capitale provinciale</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-kasai-vert to-green-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Territoires</span>
              </div>
            </div>

            {/* Hovered territory info */}
            {hoveredTerritory && (
              <div className="mt-6 p-4 bg-gradient-to-r from-kasai-vert/10 to-green-100 rounded-xl border border-kasai-vert/20 animate-slide-up">
                <div className="text-center">
                  <h4 className="font-bold text-kasai-bleu text-lg">{hoveredTerritory.name}</h4>
                  <p className="text-gray-600 text-sm">{hoveredTerritory.info}</p>
                </div>
              </div>
            )}
          </div>

          {/* Interactive stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="card-modern text-center p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-kasai-or">1</div>
              <div className="text-sm text-gray-600">Capitale</div>
            </div>
            <div className="card-modern text-center p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-kasai-vert">5</div>
              <div className="text-sm text-gray-600">Territoires</div>
            </div>
            <div className="card-modern text-center p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-kasai-bleu">59,111</div>
              <div className="text-sm text-gray-600">km²</div>
            </div>
            <div className="card-modern text-center p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-kasai-terre">± 4M</div>
              <div className="text-sm text-gray-600">Habitants</div>
            </div>
          </div>
        </div>`
      </div>

    </section>
  )
}

export default InteractiveMap