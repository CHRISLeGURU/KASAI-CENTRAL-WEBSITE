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
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 hover:bg-white/20 transition-colors duration-300">
            <Heart className="w-4 h-4 text-kasai-or" />
            <span className="font-medium text-sm">Découvrez le Kasaï-Central</span>
          </div>

          {/* Main heading */}
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-tight tracking-wide italic">
            Une province méconnue<br />
            mais pleine de{' '}
            <span className="bg-gradient-to-r from-kasai-or to-yellow-400 bg-clip-text text-transparent font-semibold not-italic">
              promesses
            </span>
            <br />
            vous attend
          </h2>


          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'histoire fascinante, explorez les villes authentiques et rencontrez les talents
            qui façonnent l'avenir de cette terre d'exception.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 min-w-[120px]"
                >
                  <Icon className="w-6 h-6 text-kasai-or" />
                  <span className="font-medium text-center text-sm">{feature.name}</span>
                </div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#accueil" className="group bg-gradient-to-r from-kasai-terre to-orange-600 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2 min-w-[180px] justify-center">
              <Compass className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Retour à l’accueil</span>
            </a>
            
            <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2 min-w-[180px] justify-center">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Guide touristique</span>
            </button>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert rounded-full"></div>
            </div>
            
            {/* Signature */}
            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm flex items-center justify-center gap-1 flex-wrap">
                Built with 
                <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />
                and patriotism for the province of Kasai by{' '}
                <a 
                  href="mailto:christheguru001@gmail.com" 
                  className="text-kasai-or hover:text-yellow-400 transition-colors duration-300 font-medium underline decoration-dotted underline-offset-2"
                >
                  theGuru
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA