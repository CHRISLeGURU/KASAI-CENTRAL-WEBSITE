import React from 'react'
import { Heart, BookOpen, Building, Users, Compass, Download } from 'lucide-react'

const CTA = () => {
  const features = [
    { icon: BookOpen, name: 'Histoire riche' },
    { icon: Building, name: 'Villes authentiques' },
    { icon: Users, name: 'Talents locaux' }
  ]

  const floatingElements = [
    { icon: '💎', position: { top: '20%', left: '10%' }, delay: '0s' },
    { icon: '🎭', position: { top: '60%', right: '15%' }, delay: '2s' },
    { icon: '🌳', position: { bottom: '30%', left: '20%' }, delay: '4s' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-kasai-bleu via-blue-800 to-kasai-bleu relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-kasai-or/20 via-transparent to-kasai-vert/20"></div>
      </div>

      {/* Floating elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-float opacity-20"
          style={{
            ...element.position,
            animationDelay: element.delay
          }}
        >
          {element.icon}
        </div>
      ))}

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/20 transition-colors duration-300">
            <Heart className="w-6 h-6 text-kasai-or" />
            <span className="font-semibold text-lg">Découvrez le Kasaï-Central</span>
          </div>

          {/* Main heading */}
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            Une province méconnue mais pleine de{' '}
            <span className="bg-gradient-to-r from-kasai-or to-yellow-400 bg-clip-text text-transparent font-medium">
              promesses
            </span>{' '}
            vous attend
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Plongez dans l'histoire fascinante, explorez les villes authentiques et rencontrez les talents
            qui façonnent l'avenir de cette terre d'exception.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 min-w-[140px]"
                >
                  <Icon className="w-8 h-8 text-kasai-or" />
                  <span className="font-medium text-center">{feature.name}</span>
                </div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-kasai-terre to-orange-600 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center space-x-3 min-w-[200px] justify-center">
              <Compass className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Commencer la visite</span>
            </button>

            <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center space-x-3 min-w-[200px] justify-center">
              <Download className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Guide touristique</span>
            </button>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA