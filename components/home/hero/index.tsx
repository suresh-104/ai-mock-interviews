const HomeHero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-800 dark:text-white bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Section texte avec espacement amélioré */}
          <div className="text-center lg:text-left">
            {/* Badge premium optimisé avec opacité augmentée */}
            <div className="inline-block mb-5 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-sm group-hover:blur-md transition-all duration-500"></div>
              <span className="relative inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full border-[0.5px] border-blue-300/50 dark:border-blue-400/20 bg-blue-100/30 dark:bg-blue-900/10 text-blue-600 dark:text-blue-300">
                <span className="flex w-1.5 h-1.5 mr-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></span>
                Campus France
              </span>
            </div>

            {/* Titre avec espacement et typographie optimisés */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-tight max-w-3xl">
              <span className="block text-gray-800 dark:text-white/95 mb-1 sm:mb-2 font-light">
                Réussissez votre
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-red-500 dark:from-blue-400 dark:via-white dark:to-red-400 bg-clip-text text-transparent font-extrabold">
                  entretien Campus France
                </span>
                <span className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-blue-400/70 via-blue-600/70 to-red-400/70 dark:from-blue-400/40 dark:via-white/40 dark:to-red-400/40"></span>
              </span>
            </h1>

            {/* Description avec typographie et espacement optimisés */}
            <p className="text-lg text-gray-600 dark:text-gray-300/90 font-light max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              Préparez-vous efficacement grâce à l&rsquo;intelligence
              artificielle qui
              <span className="font-normal text-gray-800 dark:text-white mx-1">
                simule,
              </span>
              <span className="font-normal text-gray-800 dark:text-white mx-1">
                analyse
              </span>
              et
              <span className="font-normal text-gray-800 dark:text-white mx-1">
                améliore
              </span>
              vos réponses.
            </p>

            {/* Boutons optimisés */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              {/* Bouton principal avec ombre plus visible */}
              <a
                href="#essai"
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-600 hover:shadow-lg hover:shadow-blue-500/40 dark:hover:shadow-blue-900/20 transition-shadow duration-300"
              >
                <span className="relative flex items-center">
                  Essayer gratuitement
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>

              {/* Bouton secondaire plus visible */}
              <a
                href="#demo"
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-700 hover:text-gray-800 dark:hover:text-white hover:border-gray-500 dark:hover:border-white/50 transition-colors duration-300"
              >
                Voir la démo
                <svg
                  className="ml-2 w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Points forts optimisés avec couleurs plus vives */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              {/* Avantages avec couleurs plus visibles */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-600/10 border border-blue-300/50 dark:border-blue-400/20">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white/80">
                  IA avancée
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-300/50 dark:border-white/20">
                  <svg
                    className="w-5 h-5 text-gray-700 dark:text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white/80">
                  Feedback rapide
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-600/10 border border-red-300/50 dark:border-red-400/20">
                  <svg
                    className="w-5 h-5 text-red-600 dark:text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white/80">
                  100% Garantie
                </span>
              </div>
            </div>
          </div>

          {/* Interface mockup optimisée */}
          <div className="relative flex items-center">
            {/* Éléments décoratifs avec bordures plus visibles */}
            <div className="absolute w-full h-full -left-4 top-4 border border-gray-300/50 dark:border-white/5 rounded-2xl"></div>
            <div className="absolute w-full h-full -right-4 -top-4 border border-indigo-300/50 dark:border-indigo-500/10 rounded-2xl"></div>

            {/* Effet de lueur plus intense */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/20 via-indigo-300/20 to-purple-300/20 dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-purple-500/5 rounded-2xl blur-xl opacity-70"></div>

            {/* Mockup principal optimisé */}
            <div className="relative w-full bg-white dark:bg-[#0d1424] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800/60 shadow-xl animate-float">
              {/* Barre supérieure */}
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800/80 px-4 py-3 bg-gray-50 dark:bg-[#0a0f1b]">
                {/* Contrôles de fenêtre */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 ring-1 ring-red-400 dark:ring-red-900/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 ring-1 ring-yellow-400 dark:ring-yellow-900/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 ring-1 ring-green-400 dark:ring-green-900/50"></div>
                </div>

                {/* Barre d'adresse */}
                <div className="flex-1 max-w-xs mx-auto px-3 py-1 bg-white/90 dark:bg-[#0d1424]/80 rounded-md flex items-center justify-center border border-gray-200/70 dark:border-gray-800/40">
                  <svg
                    className="w-3 h-3 text-indigo-600 dark:text-indigo-400 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 3H9C7.05 8.84 7.05 15.16 9 21H8" />
                    <path d="M15 3C16.95 8.84 16.95 15.16 15 21" />
                    <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" />
                    <path d="M3 9C8.84 7.05 15.16 7.05 21 9" />
                  </svg>
                  <span className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                    campus-france.ai
                  </span>
                </div>

                {/* Actions */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </div>
              </div>

              {/* Contenu principal */}
              <div className="p-6">
                {/* En-tête */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                        Assistant Campus France
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-300/80 flex items-center">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mr-1.5 animate-pulse"></span>
                        Intelligence artificielle
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 border border-green-300/50 dark:border-green-500/20 flex items-center">
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse mr-1.5"></span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      En ligne
                    </span>
                  </div>
                </div>

                {/* Conversation optimisée */}
                <div className="space-y-5 mb-6">
                  {/* Message assistant */}
                  <div className="flex">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-600/30 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div className="max-w-sm">
                      <div className="p-3 bg-gray-100 dark:bg-[#12192d]/75 rounded-2xl rounded-tl-none border border-gray-200/70 dark:border-gray-700/50 text-gray-800 dark:text-white text-sm">
                        Bonjour ! Je suis votre assistant virtuel pour préparer
                        votre entretien Campus France. Pourquoi souhaitez-vous
                        étudier en France ?
                      </div>
                      <div className="mt-1 ml-3 text-[10px] text-gray-500 flex items-center">
                        <span className="mr-1">14:35</span>
                        <svg
                          className="w-3 h-3 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Réponse utilisateur */}
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <div className="p-3 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 dark:from-blue-900/60 dark:to-indigo-900/60 rounded-2xl rounded-tr-none border border-blue-400/50 dark:border-blue-700/30 text-blue-800 dark:text-blue-100 text-sm">
                        Je souhaite étudier en France pour la qualité de
                        l&rsquo;enseignement et découvrir la culture française.
                      </div>
                      <div className="mt-1 mr-3 text-[10px] text-gray-500 flex items-center justify-end">
                        <span className="mr-1">14:36</span>
                        <svg
                          className="w-3 h-3 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-600/30 rounded-full flex items-center justify-center ml-3">
                      <span className="text-xs text-indigo-600 dark:text-white font-medium">
                        Vous
                      </span>
                    </div>
                  </div>

                  {/* Analyse optimisée avec plus de contraste */}
                  <div className="p-4 bg-gray-50 dark:bg-[#0e1628]/80 rounded-xl border border-gray-200/70 dark:border-gray-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-800/50 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-indigo-600 dark:text-indigo-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                          </svg>
                        </div>
                        <h4 className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                          Analyse de votre réponse
                        </h4>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-600/20 flex items-center justify-center border border-blue-300/50 dark:border-blue-600/20">
                          <span className="text-sm font-bold text-blue-700 dark:text-blue-400">
                            68
                          </span>
                        </div>
                        <span className="text-xs text-gray-600 font-medium ml-1">
                          /100
                        </span>
                      </div>
                    </div>

                    {/* Graphiques d'évaluation avec couleurs plus vives */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-600 dark:text-gray-400">
                            Clarté
                          </span>
                          <span className="text-blue-700 dark:text-blue-400 font-semibold">
                            72%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700/30 rounded-full">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-500 dark:to-indigo-500 rounded-full w-[72%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-600 dark:text-gray-400">
                            Précision
                          </span>
                          <span className="text-indigo-700 dark:text-indigo-400 font-semibold">
                            65%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700/30 rounded-full">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-500 dark:to-violet-500 rounded-full w-[65%]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Suggestions avec meilleur contraste */}
                    <div className="bg-white dark:bg-[#080d19]/80 p-3 rounded-lg border border-gray-200/80 dark:border-gray-800/60">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xs font-medium text-gray-800 dark:text-white/90">
                          Suggestions d&rsquo;amélioration
                        </p>
                      </div>

                      <ul className="space-y-2 pl-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-0.5 w-3 h-3 rounded-full border border-blue-400/60 dark:border-blue-500/40 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-500/60"></div>
                          </div>
                          <span className="text-xs text-gray-700 dark:text-gray-300">
                            Précisez les formations spécifiques qui vous
                            intéressent en France
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-0.5 w-3 h-3 rounded-full border border-blue-400/60 dark:border-blue-500/40 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-500/60"></div>
                          </div>
                          <span className="text-xs text-gray-700 dark:text-gray-300">
                            Expliquez votre projet professionnel après les
                            études et comment la France y contribue
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Barre de saisie */}
                <div className="flex items-center p-3 bg-gray-50 dark:bg-[#0e1628]/60 rounded-lg border border-gray-200/70 dark:border-gray-700/40">
                  <div className="flex-grow">
                    <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-700/40 rounded-full"></div>
                  </div>
                  <button className="ml-3 p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-600 text-white">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Badge tricolore français */}
              <div className="absolute -bottom-2 -right-2">
                <div className="w-20 h-4 overflow-hidden rounded-lg">
                  <div className="flex h-full">
                    <div className="w-1/3 bg-blue-600"></div>
                    <div className="w-1/3 bg-white"></div>
                    <div className="w-1/3 bg-red-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HomeHero;
