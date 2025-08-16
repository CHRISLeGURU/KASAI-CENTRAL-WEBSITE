import React from 'react'
import { Users, Flag } from 'lucide-react'

const Gouvernance = () => {
  return (
    <section className="pt-2 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-kasai-ivoire/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-kasai-bleu mb-6">
            Gouvernance et vision nationale
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-kasai-or to-kasai-vert mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {/* Section Gouverneur Provincial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative max-w-xs mx-auto">
                <img
                  src="/images/kasai--.jpg"
                  alt="Gouverneur Joseph-Moïse Kambulu"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                {/* Image secondaire */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-xl overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="/images/drap.jpg"
                    alt="Gouverneur Kambulu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-kasai-or rounded-full animate-float"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-kasai-vert" />
                <h3 className="text-2xl font-bold text-kasai-bleu">Leadership Provincial</h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Le Kasaï-Central s'affirme aujourd'hui comme une province fière, résolument tournée vers l'avenir,
                et pleinement engagée dans la construction d'un Congo uni, solidaire et prospère.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Sous le leadership du <span className="font-semibold text-kasai-bleu">Gouverneur provincial Joseph-Moïse Kambulu</span>,
                les autorités provinciales travaillent chaque jour aux côtés du gouvernement central pour améliorer les conditions
                de vie des populations, renforcer les infrastructures et valoriser le potentiel économique, culturel et humain de la province.
              </p>
            </div>
          </div>

          {/* Section Président */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Flag className="w-8 h-8 text-kasai-or" />
                <h3 className="text-2xl font-bold text-kasai-bleu">Vision Nationale</h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Cette dynamique s'inscrit dans la vision de développement portée par
                <span className="font-semibold text-kasai-bleu"> Son Excellence Monsieur Félix-Antoine Tshisekedi Tshilombo,
                  Président de la République Démocratique du Congo</span>, qui fait de la décentralisation, du progrès social
                et de la valorisation des identités congolaises des priorités nationales.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Ensemble, l'État central et la province du Kasaï-Central œuvrent pour un avenir ancré dans les valeurs de
                <span className="font-semibold text-kasai-vert"> paix, d'unité et de dignité</span>.
              </p>
            </div>

            <div className="relative max-w-xs mx-auto">
              <img
                src="/images/rdc-felix.webp"
                alt="Président Félix-Antoine Tshisekedi Tshilombo"
                className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              {/* Image secondaire */}
              <div className="absolute -bottom-2 -right-2 w-36 h-36 rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/images/gouverneur.jpg"
                  alt="Gouverneur Kambulu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-kasai-vert rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>


        </div>
      </div>

      {/* Mini section Portrait du Gouverneur */}
      <div className="bg-gradient-to-br from-white to-kasai-ivoire/30 py-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Image du gouverneur */}
              <div className="lg:col-span-1">
                <div className="relative max-w-sm mx-auto">
                  <img
                    src="/images/rdc-kambulu.jpg"
                    alt="Joseph Moïse Kambulu Nkonko"
                    className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  {/* Image secondaire - Armoirie */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                    <img
                      src="/images/rdc-armoirie.png"
                      alt="Armoirie RDC"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-6 h-6 bg-kasai-or rounded-full animate-float"></div>
                </div>
              </div>

              {/* Contenu */}
              <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-kasai-bleu mb-2">
                    Portrait du Gouverneur
                  </h3>
                  <p className="text-kasai-terre font-semibold">Joseph Moïse Kambulu Nkonko</p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Élu le <span className="font-semibold text-kasai-bleu">29 avril 2024</span> en qualité de candidat indépendant
                    (19 voix sur 34), Joseph Moïse Kambulu Nkonko dirige aujourd'hui la province du Kasaï-Central avec une vision claire
                    orientée vers le désenclavement, la modernisation des services publics et le rétablissement de la sécurité.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Il succède à John Kabeya Shikayi et travaille en étroite collaboration avec le Vice-gouverneur Job Kunyindama,
                    dans un gouvernement provincial composé de <span className="font-semibold text-kasai-vert">10 ministres, dont deux femmes</span>,
                    traduisant une volonté affirmée d'inclusion et de diversité.
                  </p>
                </div>

                {/* Espace supplémentaire */}
                <div className="pt-4"></div>

                {/* Priorités */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-kasai-or/20 mx-auto max-w-lg w-full flex flex-col items-center">
                  <h4 className="font-bold text-kasai-bleu mb-4 flex items-center">
                    <span className="text-green-500 mr-2">--</span>
                    Priorités de son mandat
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-kasai-or mr-2 mt-1">•</span>
                      Réhabilitation des routes et ponts pour désenclaver la province
                    </li>
                    <li className="flex items-start">
                      <span className="text-kasai-or mr-2 mt-1">•</span>
                      Amélioration de la desserte en eau potable et en électricité
                    </li>
                    <li className="flex items-start">
                      <span className="text-kasai-or mr-2 mt-1">•</span>
                      Lutte contre les têtes d'érosion et les poches d'insécurité
                    </li>
                    <li className="flex items-start">
                      <span className="text-kasai-or mr-2 mt-1">•</span>
                      Mise en œuvre de la vision nationale du Chef de l'État pour le développement du Kasaï-Central
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gouvernance