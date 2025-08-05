import React from 'react'
import { BookOpen, Building, Sprout, Users, Camera, Palette } from 'lucide-react'

const SiteFeatures = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'L\'histoire de la province',
      description: 'Découvrez les racines profondes et le riche patrimoine historique du Kasaï-Central.',
      color: 'from-kasai-bleu to-blue-600'
    },
    {
      icon: Building,
      title: 'Présentation des villes',
      description: 'Explorez Kananga et les autres centres urbains de la province.',
      color: 'from-kasai-vert to-green-600'
    },
    {
      icon: Sprout,
      title: 'Richesses naturelles',
      description: 'Les ressources minières, forestières et agricoles qui font la richesse de la région.',
      color: 'from-kasai-terre to-orange-600'
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
      color: 'from-kasai-or to-yellow-500'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-kasai-ivoire/30 to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-kasai-bleu mb-6">
            Ce que vous trouverez sur ce site
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="card-modern group text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-kasai-bleu mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-kasai-or group-hover:to-kasai-vert opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SiteFeatures