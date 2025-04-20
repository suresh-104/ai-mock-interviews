import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
}

// Composant de carte de fonctionnalité
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  color,
  title,
  description,
}) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div
        className={`absolute -right-6 -top-6 w-16 h-16 rounded-full ${color} opacity-10 transition-all duration-300 group-hover:scale-150`}
      ></div>

      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full ${color.replace("bg-", "bg-").replace("600", "100")} ${color.replace("bg-", "text-")} mb-6 transition-all duration-300 group-hover:scale-110 dark:bg-opacity-20`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      <div
        className={`mt-6 w-8 h-1 ${color.replace("bg-", "bg-")} rounded-full transition-all duration-300 group-hover:w-12`}
      ></div>
    </div>
  );
};

const HomeFeature = () => {
  const features = [
    {
      icon: (
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
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          ></path>
        </svg>
      ),
      color: "bg-blue-600",
      title: "Simulations d'entretien",
      description:
        "Des entretiens réalistes générés par IA selon votre profil, votre filière et votre projet professionnel.",
    },
    {
      icon: (
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      ),
      color: "bg-indigo-600",
      title: "Analyse des réponses",
      description:
        "Feedback immédiat sur vos réponses écrites ou orales : clarté, pertinence, structure et vocabulaire.",
    },
    {
      icon: (
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      ),
      color: "bg-purple-600",
      title: "Suggestions personnalisées",
      description:
        "Améliorations spécifiques pour chaque réponse, avec des exemples concrets et du vocabulaire adapté.",
    },
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
      ),
      color: "bg-green-600",
      title: "Mode oral et écrit",
      description:
        "Préparez-vous à l'écrit ou à l'oral grâce à notre technologie de reconnaissance vocale performante.",
    },
    {
      icon: (
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
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          ></path>
        </svg>
      ),
      color: "bg-amber-600",
      title: "Suivi de progression",
      description:
        "Tableau de bord personnalisé pour suivre votre évolution et identifier vos points à améliorer.",
    },
    {
      icon: (
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      ),
      color: "bg-rose-600",
      title: "Bibliothèque de ressources",
      description:
        "Articles, vidéos et exemples de bonnes réponses pour compléter votre préparation.",
    },
  ];

  return (
    <section
      id="fonctionnalites"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium text-sm mb-4">
            Fonctionnalités
          </div>
          <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Une solution complète pour réussir votre entretien
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Prepa FR utilise l&rsquo;intelligence artificielle pour vous
            préparer efficacement à votre entretien Campus France.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#commencer"
            className="inline-flex items-center px-5 py-2 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Commencer maintenant
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

export default HomeFeature;
