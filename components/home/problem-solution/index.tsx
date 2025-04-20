import React from "react";

interface SolutionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isPositive: boolean;
}

const SolutionItem: React.FC<SolutionItemProps> = ({
  icon,
  title,
  description,
  isPositive,
}) => {
  return (
    <div className="group flex items-start p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md dark:hover:bg-gray-800">
      <div
        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${
          isPositive
            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
            : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
        } transition-all duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-all duration-300 group-hover:translate-x-1">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const HomeProblemSolution = () => {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Manque de préparation",
      description:
        "De nombreux étudiants ne savent pas à quoi s'attendre lors de l'entretien Campus France.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Ressources inadaptées",
      description:
        "Les ressources en ligne sont éparpillées, parfois obsolètes et non personnalisées.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Stress et anxiété",
      description:
        "L'entretien est source de stress, particulièrement en l'absence de préparation orale.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Auto-évaluation difficile",
      description:
        "Il est difficile de s'auto-évaluer objectivement et d'améliorer ses réponses sans feedback.",
    },
  ];

  const solutions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Simulations personnalisées",
      description:
        "Des entretiens simulés adaptés à votre profil, votre filière et vos objectifs académiques.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Feedback intelligent",
      description:
        "Analyse immédiate de vos réponses avec suggestions d'amélioration concrètes et personnalisées.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Pratique orale et écrite",
      description:
        "Entraînez-vous à l'oral comme à l'écrit pour gagner en confiance et maîtriser votre expression.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Disponibilité 24/7",
      description:
        "Un coach personnel disponible à tout moment pour vous accompagner dans votre préparation.",
    },
  ];

  return (
    <section
      id="avantages"
      className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium text-sm mb-4">
            Pourquoi choisir Prepa FR
          </div>
          <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Votre coach virtuel pour un entretien réussi
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Découvrez comment notre plateforme résout les problèmes courants
            rencontrés lors de la préparation aux entretiens Campus France.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Problems Column */}
          <div className="bg-white/50 dark:bg-gray-900/50 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 mr-4">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Problèmes rencontrés
              </h3>
            </div>

            <div className="space-y-1">
              {problems.map((problem, index) => (
                <SolutionItem
                  key={`problem-${index}`}
                  icon={problem.icon}
                  title={problem.title}
                  description={problem.description}
                  isPositive={false}
                />
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="bg-white/50 dark:bg-gray-900/50 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 mr-4">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Nos solutions
              </h3>
            </div>

            <div className="space-y-1">
              {solutions.map((solution, index) => (
                <SolutionItem
                  key={`solution-${index}`}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  isPositive={true}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#commencer"
            className="inline-flex items-center px-5 py-2 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Résoudre vos problèmes
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeProblemSolution;
