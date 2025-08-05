import React from 'react'
import { MapPin, Maximize, Users, Languages, Mountain, Calendar } from 'lucide-react'

const ProvinceOverview = () => {
  const stats = [
    {
      icon: MapPin,
      title: 'Chef-lieu',
      value: 'Kananga',
      color: 'from-kasai-or to-yellow-500'
    },
    {
      icon: Maximize,
      title: 'Superficie',
      value: '59 111 km²',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Population',
      value: '3 317 000 habitants',
      color: 'from-kasai-vert to-green-600'
    },
    {
      icon: Languages,
      title: 'Langues',
      value: 'Tshiluba, Français',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Mountain,
      title: 'Relief',
      value: 'Plateaux, savanes, rivières',
      color: 'from-kasai-terre to-orange-600'
    },
    {
      icon: Calendar,
      title: 'Création',
      value: '2015',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section id="presentation" className="section-padding bg-gradient-to-br from-kasai-ivoire/50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-kasai-bleu mb-6">
            Province du Kasaï-Central
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="card-modern group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-kasai-bleu mb-2 text-center">
                  {stat.title}
                </h3>
                <p className="text-gray-600 text-center font-medium">
                  {stat.value}
                </p>
              </div>
            )
          })}
        </div>

        <div className="card-modern max-w-4xl mx-auto">
          <div className="border-l-4 border-kasai-vert pl-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Créée en 2015 à la suite du découpage territorial, la province du Kasaï-Central est issue de
              l'ancienne province du Kasaï-Occidental. Elle est située au centre-sud de la RDC et partage ses
              frontières avec le Sankuru, le Lomami, le Kasaï, et la province du Kasaï-Oriental.
              <span className="font-semibold text-kasai-bleu"> C'est une terre de tradition, de travail, et d'espoir.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProvinceOverview