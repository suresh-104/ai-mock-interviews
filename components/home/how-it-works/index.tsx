import React from "react";

type AvailableColor = "blue" | "indigo" | "purple" | "green";

interface ThemeColor {
  circle: string;
  iconBg: string;
  cardBg: string;
  shadow: string;
}

const colorMap: Record<AvailableColor, ThemeColor> = {
  blue: {
    circle: "bg-blue-600",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    cardBg: "bg-blue-50/50 dark:bg-blue-900/10",
    shadow: "shadow-blue-500/10",
  },
  indigo: {
    circle: "bg-indigo-600",
    iconBg:
      "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
    cardBg: "bg-indigo-50/50 dark:bg-indigo-900/10",
    shadow: "shadow-indigo-500/10",
  },
  purple: {
    circle: "bg-purple-600",
    iconBg:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    cardBg: "bg-purple-50/50 dark:bg-purple-900/10",
    shadow: "shadow-purple-500/10",
  },
  green: {
    circle: "bg-green-600",
    iconBg:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    cardBg: "bg-green-50/50 dark:bg-green-900/10",
    shadow: "shadow-green-500/10",
  },
};

interface StepProps {
  number: number;
  title: string;
  description: string;
  imageAlt: string;
  isReversed?: boolean;
  color?: AvailableColor;
}

const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  imageAlt,
  isReversed = false,
  color = "blue",
}) => {
  const colorClasses = colorMap[color] || colorMap.blue;

  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
      {/* Text Content */}
      <div className={`md:col-span-1 ${isReversed ? "md:order-2" : ""}`}>
        <div className="flex items-start">
          <div
            className={`flex-shrink-0 h-14 w-14 rounded-full ${colorClasses.circle} text-white flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg z-10 transition-transform duration-300 hover:scale-110`}
          >
            <span className="text-xl font-bold">{number}</span>
          </div>
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
            <div
              className={`mt-4 w-8 h-1 ${colorClasses.circle} rounded-full transition-all duration-300 group-hover:w-12`}
            ></div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        className={`mt-8 md:mt-0 md:col-span-1 ${isReversed ? "md:order-1" : ""}`}
      >
        <div
          className={`group relative overflow-hidden rounded-2xl ${colorClasses.shadow} shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
        >
          <div
            className={`absolute inset-0 ${colorClasses.cardBg} opacity-70 z-0`}
          ></div>
          <img
            src="/api/placeholder/800/500"
            alt={imageAlt}
            className="w-full h-64 object-cover relative z-10 rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${colorClasses.circle} opacity-20 transition-transform duration-300 group-hover:scale-150`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const HomeHowItWorks = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Créez votre profil",
      description:
        "Renseignez votre parcours, votre pays d'origine et vos universités cibles pour des simulations parfaitement adaptées à votre situation académique.",
      imageAlt: "Création de profil",
      color: "blue",
      isReversed: false,
    },
    {
      number: 2,
      title: "Participez à des simulations",
      description:
        "Lancez un entretien simulé et répondez aux questions à l'oral ou à l'écrit selon votre préférence. Notre IA s'adapte à votre niveau et à vos objectifs.",
      imageAlt: "Simulation d'entretien",
      color: "indigo",
      isReversed: true,
    },
    {
      number: 3,
      title: "Recevez des analyses détaillées",
      description:
        "Obtenez un feedback complet sur vos réponses avec des suggestions d'amélioration concrètes. Identifiez rapidement les points forts et les axes d'amélioration.",
      imageAlt: "Analyse des réponses",
      color: "purple",
      isReversed: false,
    },
    {
      number: 4,
      title: "Suivez votre progression",
      description:
        "Visualisez vos progrès au fil du temps et identifiez les domaines qui nécessitent davantage de pratique. Préparez-vous en toute confiance à votre entretien réel.",
      imageAlt: "Suivi de progression",
      color: "green",
      isReversed: true,
    },
  ];

  return (
    <section
      id="comment-ca-marche"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium text-sm mb-4">
            Comment ça marche
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Simple, rapide et efficace
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Préparez-vous à l&rsquo;entretien Campus France en quelques étapes
            simples et maximisez vos chances de succès.
          </p>
        </div>

        <div className="mt-20 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute top-0 bottom-0 left-7 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600 hidden md:hidden lg:block"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                imageAlt={step.imageAlt}
                isReversed={step.isReversed}
                color={step.color}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a
            href="#commencer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Commencer votre préparation
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

export default HomeHowItWorks;
