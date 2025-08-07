import React, { useState, useEffect } from 'react'
import { Gem, Palette, TreePine, Play } from 'lucide-react'

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0)

  const videos = [
    { src: '/images/kasai-bg.mp4', type: 'video/mp4' }
  ]

  const buttons = [
    {
      icon: Gem,
      text: 'Mines de diamant',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: Palette,
      text: 'Culture Luba',
      color: 'from-kasai-or to-yellow-500',
      hoverColor: 'hover:from-yellow-500 hover:to-yellow-600'
    },
    {
      icon: TreePine,
      text: 'Savanes & Nature',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    }
  ]

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/images/kasai-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 leading-tight">
            Découvrez le{' '}
            <span className="italic font-medium bg-gradient-to-r from-kasai-or to-yellow-400 bg-clip-text text-transparent">
              cœur diamantaire
            </span>
            <br />
            du Congo
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Le Kasaï-Central vous accueille avec ses richesses minières légendaires,
            ses traditions ancestrales et sa culture Luba authentique.
            Explorez une région où l'histoire du diamant rencontre la beauté des savanes.
          </p>

          {/* Scroll Indicator */}
          <div className="flex justify-center mb-8 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttons.map((button, index) => {
              const Icon = button.icon
              return (
                <button
                  key={index}
                  className={`group bg-gradient-to-r ${button.color} ${button.hoverColor} text-white px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2 min-w-[140px] backdrop-blur-sm border border-white/20`}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{button.text}</span>
                </button>
              )
            })}
          </div>
        </div>


      </div>

      {/* Floating Elements   control phone by PC */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-kasai-or/30 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-kasai-vert/30 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero