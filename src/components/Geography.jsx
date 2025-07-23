import React from 'react'
import { Globe, Mountain, Droplets, Thermometer, ArrowRight, ArrowLeft, ArrowUp } from 'lucide-react'

const Geography = () => {
  const borders = [
    { name: 'Kasaï-Oriental', direction: 'à l\'est', icon: ArrowRight },
    { name: 'Kasaï', direction: 'à l\'ouest', icon: ArrowLeft },
    { name: 'Sankuru', direction: 'au nord', icon: ArrowUp },
    { name: 'Lomami', direction: 'au nord-est', icon: ArrowUp }
  ]

  const landscapes = [
    { name: 'Plateaux ondulés', height: '500-1200m', icon: Mountain },
    { name: 'Savanes herbeuses', description: 'Typiques de la région', icon: '🌾' },
    { name: 'Forêts galeries', description: 'Le long des rivières', icon: '🌳' },
    { name: 'Collines boisées', description: 'Territoire de Luiza', icon: '🏔️' }
  ]

  const rivers = [
    { name: 'La Lulua', description: 'Affluent majeur de la rivière Kasaï, traverse Kananga', isMain: true },
    { name: 'La Lueta', description: 'Affluent secondaire', isMain: false },
    { name: 'La Lubudi', description: 'Affluent secondaire', isMain: false },
    { name: 'La Tshibua', description: 'Affluent secondaire', isMain: false }
  ]

  const waterBenefits = [
    { icon: '🐟', name: 'Ressources halieutiques' },
    { icon: '🌱', name: 'Agriculture irriguée' },
    { icon: '🙏', name: 'Rituels traditionnels' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-white to-kasai-ivoire/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-kasai-bleu mb-6">
            Géographie et Environnement du Kasaï-Central
          </h2>
          <p className="text-xl text-kasai-terre italic max-w-4xl mx-auto flex items-center justify-center gap-2">
            <Globe className="w-6 h-6" />
            "Au centre du pays, une terre aux paysages variés, entre plateaux, savanes et rivières nourricières."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert mx-auto rounded-full mt-6"></div>
        </div>

        {/* Localisation stratégique */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-kasai-bleu flex items-center gap-3">
              <Globe className="w-8 h-8 text-kasai-vert" />
              Localisation stratégique
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Située dans la partie centrale-sud de la République Démocratique du Congo, la province du
              Kasaï-Central est enclavée entre les provinces voisines, avec Kananga comme carrefour
              stratégique à environ 1 000 km de Kinshasa.
            </p>
            
            <div className="space-y-4">
              {borders.map((border, index) => {
                const Icon = border.icon
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-kasai-terre" />
                    <span className="font-semibold text-kasai-bleu">{border.name}</span>
                    <span className="text-gray-600">({border.direction})</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="card-modern bg-gradient-to-br from-kasai-vert to-green-600 text-white text-center p-8">
            <Globe className="w-24 h-24 mx-auto mb-6 opacity-80" />
            <p className="text-lg font-medium">
              Carte du Kasaï-Central et provinces limitrophes
            </p>
          </div>
        </div>

        {/* Relief et paysages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {landscapes.map((landscape, index) => (
                <div key={index} className="card-modern text-center p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-3">{typeof landscape.icon === 'string' ? landscape.icon : <Mountain className="w-10 h-10 mx-auto text-kasai-terre" />}</div>
                  <h4 className="font-bold text-kasai-bleu mb-2">{landscape.name}</h4>
                  <p className="text-sm text-gray-600">{landscape.height || landscape.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-kasai-bleu flex items-center gap-3">
              <Mountain className="w-8 h-8 text-kasai-vert" />
              Relief et paysages
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le relief du Kasaï-Central est principalement constitué de plateaux ondulés qui culminent
              entre 500 et 1 200 mètres d'altitude, formant la partie sud du plateau kasaïen.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kasai-vert rounded-full"></div>
                <span className="text-gray-700">Savanes herbeuses typiques de la région intertropicale</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kasai-vert rounded-full"></div>
                <span className="text-gray-700">Forêts galeries le long des rivières</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kasai-vert rounded-full"></div>
                <span className="text-gray-700">Zones de collines boisées (territoire de Luiza)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hydrographie */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-kasai-bleu flex items-center gap-3">
              <Droplets className="w-8 h-8 text-kasai-vert" />
              Hydrographie : le réseau des rivières
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              La province est arrosée par plusieurs cours d'eau importants, qui alimentent les sols
              agricoles et servent à la pêche artisanale.
            </p>
            
            <div className="space-y-4">
              {rivers.map((river, index) => (
                <div key={index} className={`p-4 rounded-xl ${
                  river.isMain 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : 'bg-white border border-blue-200'
                } transition-all duration-300 hover:shadow-lg`}>
                  <div className="flex items-center space-x-3">
                    <Droplets className={`w-5 h-5 ${river.isMain ? 'text-white' : 'text-blue-500'}`} />
                    <div>
                      <span className={`font-semibold ${river.isMain ? 'text-white' : 'text-kasai-bleu'}`}>
                        {river.name}
                      </span>
                      {river.isMain && (
                        <p className="text-blue-100 text-sm mt-1">{river.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {waterBenefits.map((benefit, index) => (
                <div key={index} className="card-modern text-center p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <span className="font-medium text-kasai-bleu">{benefit.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Geography