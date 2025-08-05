import React, { useState } from 'react'
import { Crown, Link, Flag, Building, Star, Flame, Sprout } from 'lucide-react'

const History = () => {
  const [activeEvent, setActiveEvent] = useState(0)

  const timelineEvents = [
    {
      icon: Crown,
      date: 'XIVe siècle',
      title: 'Aux origines : le pays des ancêtres Luba',
      description: 'Bien avant les frontières modernes, la région qui compose aujourd\'hui le Kasaï-Central était un foyer de la civilisation Luba.',
      details: [
        'Le Mulopwe (roi sacré) et le conseil des anciens',
        'Sculptures en bois, lukasa, tambours, sceptres',
        'Rituels d\'initiation (bwanga) et équilibre des clans'
      ],
      color: 'from-kasai-or to-yellow-500'
    },
    {
      icon: Link,
      date: '1885–1960',
      title: 'L\'ombre de la colonisation',
      description: 'À la fin du XIXe siècle, le territoire est intégré de force à l\'État indépendant du Congo.',
      details: [
        'Exploitation du bois, caoutchouc et diamants',
        'Installation des missions catholiques et protestantes',
        'Résistance locale et formation d\'intellectuels'
      ],
      color: 'from-gray-600 to-gray-700'
    },
    {
      icon: Flag,
      date: '1960–1962',
      title: 'Luluabourg, capitale du Sud-Kasaï indépendant',
      description: 'Au lendemain de l\'indépendance du Congo, la région entre dans une période de crise majeure.',
      details: [
        'Tensions ethniques et persécutions des Baluba',
        'Affrontements armés causant des milliers de morts',
        'Écrasement de la sécession en 1962'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Building,
      date: '1966–2015',
      title: 'La province du Kasaï-Occidental',
      description: 'Sous le régime de Mobutu, Luluabourg est rebaptisée Kananga.',
      details: [
        'Kananga devient un centre éducatif important',
        'Affirmation de la culture Luba et prospérité artisanale',
        'Développement comme centre religieux'
      ],
      color: 'from-kasai-bleu to-blue-600'
    },
    {
      icon: Star,
      date: '2015',
      title: 'Naissance du Kasaï-Central',
      description: 'Dans le cadre de la décentralisation prévue par la Constitution de 2006.',
      details: [
        'Décentralisation et rapprochement administratif',
        'Kananga devient capitale du Kasaï-Central',
        'Encouragement du développement localisé'
      ],
      color: 'from-kasai-vert to-green-600'
    },
    {
      icon: Flame,
      date: '2016–2018',
      title: 'Crise Kamuina Nsapu',
      description: 'Entre 2016 et 2018, la province est secouée par une insurrection grave.',
      details: [
        'Plus de 3 000 morts et villages détruits',
        'Déplacement de plus d\'un million de personnes',
        'Frustrations sociales, politiques et identitaires'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Sprout,
      date: 'Aujourd\'hui',
      title: 'Une terre tournée vers l\'avenir',
      description: 'Aujourd\'hui, le Kasaï-Central se reconstruit, porté par sa culture, sa jeunesse, et ses ressources naturelles.',
      details: [
        'Reconstruction des infrastructures',
        'Investissement dans l\'éducation et l\'emploi',
        'Réconciliation et esprit communautaire'
      ],
      color: 'from-kasai-vert to-green-500'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-kasai-ivoire/20 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-kasai-bleu mb-6">
            Histoire de la Province du Kasaï-Central
          </h2>
          <p className="text-xl text-kasai-terre italic max-w-4xl mx-auto">
            "Une terre ancienne, au cœur des royaumes Luba, devenue le théâtre d'une résilience remarquable."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-kasai-or via-kasai-vert to-kasai-bleu transform md:-translate-x-1/2"></div>

            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isLeft = index % 2 === 0
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}
                         onClick={() => setActiveEvent(index)}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                    isLeft ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className={`card-modern ${
                      activeEvent === index ? 'ring-2 ring-kasai-or shadow-2xl scale-105' : ''
                    } transition-all duration-300 cursor-pointer`}
                         onClick={() => setActiveEvent(index)}>
                      
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-full text-sm font-semibold mb-4`}>
                        {event.date}
                      </div>
                      
                      <h3 className="font-playfair text-2xl font-bold text-kasai-bleu mb-4">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {activeEvent === index && (
                        <div className="space-y-3 animate-slide-up">
                          {event.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3 p-3 bg-kasai-ivoire/30 rounded-lg">
                              <div className={`w-2 h-2 bg-gradient-to-r ${event.color} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-700 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto mt-16">
          <blockquote className="card-modern bg-gradient-to-r from-kasai-bleu to-blue-700 text-white text-center p-8">
            <p className="font-playfair text-xl md:text-2xl italic leading-relaxed">
              "Le passé du Kasaï-Central est complexe et douloureux, mais il est aussi riche d'enseignements et
              de dignité. C'est sur cette mémoire que se bâtit l'avenir."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default History