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
    <section id="geographie" className="section-padding bg-gradient-to-br from-white to-kasai-ivoire/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-kasai-bleu mb-6">
            Géographie et Environnement du Kasaï-Central
          </h2>
          <p className="text-xl text-kasai-terre italic max-w-4xl mx-auto flex items-center justify-center gap-2">
            <Globe className="w-6 h-6" />
            "Au centre du pays, une terre aux paysages variés, entre plateaux, savanes et rivières nourricières."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert mx-auto rounded-full mt-6"></div>
        </div>

        {/* Localisation stratégique */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-kasai-bleu flex items-center gap-3">
              <Globe className="w-8 h-8 text-kasai-vert" />
              Localisation stratégique
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {/* * Située dans la partie centrale-sud de la République Démocratique du Congo, la province du
              Kasaï-Central est enclavée entre les provinces voisines, avec Kananga comme carrefour
              stratégique à environ 1 000 km de Kinshasa.*/}
              Située au cœur géographique de la République Démocratique du Congo, la province du Kasaï-Central occupe une position charnière entre plusieurs régions du pays. Elle se trouve dans la partie centre-sud, à la croisée des provinces du Kasaï, Kasaï-Oriental, Lomami et Sankuru, ce qui lui confère un rôle de carrefour administratif, économique et culturel au sein du Grand Kasaï.

              Son chef-lieu, Kananga, est situé à environ 1 000 km à l’est de Kinshasa, la capitale nationale. Malgré son enclavement relatif, Kananga est un nœud stratégique sur le plan des communications.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Kananga est traversée par la Route Nationale 1 (RN1), un axe vital du pays qui relie l’Est au centre-ouest. La Route Nationale 20 (RN20) permet également d’atteindre les territoires ruraux environnants.
              Elle est connectée à la ligne de chemin de fer de la SNCC (Société Nationale des Chemins de fer du Congo), qui relie Lubumbashi, Ilebo et Mbuji-Mayi. Cette voie ferrée est un atout stratégique pour le transit de marchandises agricoles et minières.</p>

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

          <div className="relative">
            <div className="card-modern overflow-hidden p-0">
              <img
                src="/images/kasai-.png"
                alt="Carte du Kasaï-Central et provinces limitrophes"
                className="w-full h-auto object-contain rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-6 h-6 text-kasai-or" />
                  <h4 className="font-semibold text-lg">Localisation géographique</h4>
                </div>
                <p className="text-sm text-white/90">
                  Carte du Kasaï-Central et provinces limitrophes
                </p>
              </div>
            </div>
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
                <div key={index} className="group bg-white border border-gray-200 p-4 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:scale-105 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
                    <div className="flex-1">
                      <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                        {river.name}
                      </span>
                      {river.isMain && (
                        <p className="text-gray-600 group-hover:text-blue-100 text-sm mt-1 transition-colors duration-300">
                          {river.description}
                        </p>
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