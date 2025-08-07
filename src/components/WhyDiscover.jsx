import React from 'react'
import { Crown, Palette, Gem, GraduationCap } from 'lucide-react'

const WhyDiscover = () => {
  const features = [
    {
      icon: Crown,
      title: 'Un passé riche',
      description: 'Terre des anciens royaumes Luba, le Kasaï-Central possède une mémoire historique profonde.',
      color: 'from-kasai-or to-yellow-500'
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
      color: 'from-kasai-vert to-green-600'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-kasai-bleu mb-4">
                Pourquoi découvrir le Kasaï-Central ?
              </h2>
              <h3 className="text-xl text-kasai-terre font-medium italic mb-8">
                Une province au cœur de l'identité congolaise
              </h3>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-kasai-ivoire/30 to-transparent hover:from-kasai-ivoire/50 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-kasai-bleu mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/firstIMG.png"
                alt="Femme tressant du raphia ou paysage de rivière au Kasaï-Central"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-kasai-vert rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-kasai-or rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyDiscover