import React from 'react'
import { 
  Gem, Menu, X, MapPin, Maximize, Users, Languages, Mountain, Calendar,
  Crown, GraduationCap, BookOpen, Building, Sprout, Camera, Palette,
  Globe, ArrowRight, ArrowLeft, ArrowUp, Droplets, Fish, Leaf, Heart,
  Compass, Download, Star, Flag, TreePine
} from 'lucide-react'

// Navbar harmonisée avec vraies icônes
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Gem className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-blue-900">
              Kasaï-Central
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#accueil" className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Accueil</a>
            <a href="#culture" className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Culture</a>
            <a href="#histoire" className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Histoire</a>
            <a href="#geographie" className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors">Géographie</a>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
              <Compass className="w-4 h-4" />
              <span>Découvrir</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section id="accueil" className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
            Découvrez le{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent font-medium">
              cœur diamantaire
            </span>
            <br />
            du Congo
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Le Kasaï-Central vous accueille avec ses richesses minières légendaires,
            ses traditions ancestrales et sa culture Luba authentique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Gem className="w-4 h-4" />
              <span>Mines de diamant</span>
            </button>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Palette className="w-4 h-4" />
              <span>Culture Luba</span>
            </button>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <TreePine className="w-4 h-4" />
              <span>Savanes & Nature</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section Aperçu Province */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
              Province du Kasaï-Central
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MapPin, title: 'Chef-lieu', value: 'Kananga', color: 'from-yellow-500 to-orange-500' },
              { icon: Maximize, title: 'Superficie', value: '59 111 km²', color: 'from-blue-500 to-blue-600' },
              { icon: Users, title: 'Population', value: '3 317 000 habitants', color: 'from-green-500 to-green-600' },
              { icon: Languages, title: 'Langues', value: 'Tshiluba, Français', color: 'from-purple-500 to-purple-600' },
              { icon: Mountain, title: 'Relief', value: 'Plateaux, savanes, rivières', color: 'from-orange-500 to-red-500' },
              { icon: Calendar, title: 'Création', value: '2015', color: 'from-red-500 to-pink-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2 text-center">
                  {stat.title}
                </h3>
                <p className="text-gray-600 text-center font-medium text-sm">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <div className="border-l-4 border-green-500 pl-6">
              <p className="text-gray-700 leading-relaxed">
                Créée en 2015 à la suite du découpage territorial, la province du Kasaï-Central est issue de
                l'ancienne province du Kasaï-Occidental. Elle est située au centre-sud de la RDC et partage ses
                frontières avec le Sankuru, le Lomami, le Kasaï, et la province du Kasaï-Oriental. 
                <span className="font-semibold text-blue-900"> C'est une terre de tradition, de travail, et d'espoir.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Découvrir */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
                  Pourquoi découvrir le Kasaï-Central ?
                </h2>
                <h3 className="text-lg text-orange-600 font-medium italic mb-6">
                  Une province au cœur de l'identité congolaise
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Crown,
                    title: 'Un passé riche',
                    description: 'Terre des anciens royaumes Luba, le Kasaï-Central possède une mémoire historique profonde.',
                    color: 'from-yellow-500 to-orange-500'
                  },
                  {
                    icon: Palette,
                    title: 'Un vivier culturel',
                    description: 'Artisanat raffiné, danses comme le mutuashi, traditions orales ancestrales.',
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    icon: Gem,
                    title: 'Des ressources abondantes',
                    description: 'Diamants, bois, terres agricoles fertiles.',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: GraduationCap,
                    title: 'Une jeunesse dynamique',
                    description: 'Des talents émergents dans l\'éducation, l\'entrepreneuriat, la culture.',
                    color: 'from-green-500 to-green-600'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-amber-50/50 to-transparent hover:from-amber-50 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Palette className="w-10 h-10" />
                  </div>
                  <p className="font-medium opacity-90">
                    Image : Femme tressant du raphia ou paysage de rivière
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Ce que vous trouverez */}
      <section className="py-16 bg-gradient-to-br from-amber-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
              Ce que vous trouverez sur ce site
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'L\'histoire de la province',
                description: 'Découvrez les racines profondes et le riche patrimoine historique du Kasaï-Central.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Building,
                title: 'Présentation des villes',
                description: 'Explorez Kananga et les autres centres urbains de la province.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Sprout,
                title: 'Richesses naturelles',
                description: 'Les ressources minières, forestières et agricoles qui font la richesse de la région.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Users,
                title: 'Portraits d\'habitants',
                description: 'Rencontrez les visages et les histoires qui donnent vie à cette province.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Camera,
                title: 'Galeries photos',
                description: 'Une collection d\'images authentiques capturant l\'essence du Kasaï-Central.',
                color: 'from-pink-500 to-pink-600'
              },
              {
                icon: Palette,
                title: 'Art local',
                description: 'L\'artisanat traditionnel et les créations contemporaines de la région.',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Carte Interactive */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-blue-900 mb-4 flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-yellow-600" />
              Organisation territoriale du Kasaï-Central
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-xl border border-yellow-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              
              <div className="relative h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-dashed border-yellow-400 overflow-hidden hover:border-yellow-500 transition-colors duration-300">
                
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="group relative">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg border-2 border-white hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Star className="w-4 h-4" />
                      <span className="font-semibold text-sm">Kananga</span>
                    </div>
                    
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-blue-900 text-white px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                        Capitale provinciale
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-blue-900"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {[
                  { name: 'Demba', position: { top: '15%', left: '8%' }, info: 'Territoire du nord-ouest' },
                  { name: 'Dibaya', position: { top: '20%', right: '10%' }, info: 'Territoire du nord-est' },
                  { name: 'Kazumba', position: { bottom: '25%', left: '15%' }, info: 'Territoire du sud-ouest' },
                  { name: 'Luiza', position: { bottom: '20%', right: '8%' }, info: 'Territoire du sud-est' },
                  { name: 'Tshimbulu', position: { top: '45%', right: '22%' }, info: 'Territoire central-est' }
                ].map((territory, index) => (
                  <div
                    key={territory.name}
                    className="absolute z-10 group"
                    style={territory.position}
                  >
                    <div className="bg-gradient-to-r from-white/95 to-gray-50/90 backdrop-blur-md text-blue-900 px-3 py-1 rounded-full border border-green-300 hover:border-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:scale-105">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span className="font-medium text-xs">{territory.name}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-blue-900 text-white px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                        {territory.info}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-blue-900"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Capitale provinciale</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Territoires</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { value: '1', label: 'Capitale', color: 'from-yellow-500 to-orange-500' },
                { value: '5', label: 'Territoires', color: 'from-green-500 to-green-600' },
                { value: '59,111', label: 'km²', color: 'from-blue-500 to-blue-600' },
                { value: '3.3M', label: 'Habitants', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-bounce">
            <Gem className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-60 right-20 animate-bounce" style={{ animationDelay: '2s' }}>
            <Palette className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '4s' }}>
            <TreePine className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/20 transition-colors duration-300">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="font-medium">Découvrez le Kasaï-Central</span>
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Une province méconnue mais pleine de{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium">
                promesses
              </span>{' '}
              vous attend
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Plongez dans l'histoire fascinante, explorez les villes authentiques et rencontrez les talents
              qui façonnent l'avenir de cette terre d'exception.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { icon: BookOpen, name: 'Histoire riche' },
                { icon: Building, name: 'Villes authentiques' },
                { icon: Users, name: 'Talents locaux' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 min-w-[120px]"
                >
                  <feature.icon className="w-6 h-6" />
                  <span className="font-medium text-center text-sm">{feature.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2 min-w-[180px] justify-center">
                <Compass className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Commencer la visite</span>
              </button>

              <button className="group bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2 min-w-[180px] justify-center">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Guide touristique</span>
              </button>
            </div>

            <div className="mt-12 pt-6 border-t border-white/20">
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              </div>
              <p className="mt-3 text-white/70 text-sm">Développé avec ❤️ pour le Kasaï-Central</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App