import React from "react";

interface PricingFeatureProps {
  included: boolean;
  feature: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({
  included,
  feature,
}) => {
  return (
    <li className="flex items-center">
      {included ? (
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
    </li>
  );
};

interface PlanCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: { included: boolean; text: string }[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
  badge?: string;
  color?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
  badge,
  color = "blue",
}) => {
  const colorVariants = {
    blue: {
      badge: "bg-blue-600",
      border: "border-blue-600",
      button: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
      buttonAlt: "text-blue-600 hover:bg-blue-50",
      bar: "bg-blue-600",
      background: "bg-blue-600/10",
    },
    amber: {
      badge: "bg-amber-600",
      border: "border-amber-600",
      button: "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500",
      buttonAlt: "text-amber-600 hover:bg-amber-50",
      bar: "bg-amber-600",
      background: "bg-amber-600/10",
    },
    rose: {
      badge: "bg-rose-600",
      border: "border-rose-600",
      button: "bg-rose-600 hover:bg-rose-700 focus:ring-rose-500",
      buttonAlt: "text-rose-600 hover:bg-rose-50",
      bar: "bg-rose-600",
      background: "bg-rose-600/10",
    },
  };

  // ici tu choisis la couleur avec un fallback sur "blue"
  const colorClasses =
    colorVariants[color as keyof typeof colorVariants] || colorVariants.blue;

  return (
    <div
      className={`group relative rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        highlighted
          ? `border-2 ${colorClasses.border}`
          : "border border-gray-100 dark:border-gray-700"
      } overflow-hidden bg-white dark:bg-gray-800`}
    >
      {badge && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <div
            className={`inline-block px-4 py-1 ${colorClasses.badge} text-white text-sm font-semibold rounded-full shadow-lg transform -translate-y-1/2`}
          >
            {badge}
          </div>
        </div>
      )}

      {highlighted && (
        <div
          className={`absolute top-0 left-0 right-0 h-1 ${colorClasses.bar}`}
        ></div>
      )}

      <div className="p-8">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {name}
          </h3>
          <div className="flex items-baseline mb-4">
            <span className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {price}
            </span>
            {period && (
              <span className="ml-1 text-xl text-gray-500 dark:text-gray-400">
                /{period}
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
          <div
            className={`mt-6 w-8 h-1 ${colorClasses.bar} rounded-full transition-all duration-300 group-hover:w-12`}
          ></div>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <PricingFeature
              key={index}
              included={feature.included}
              feature={feature.text}
            />
          ))}
        </ul>

        <a
          href={buttonLink}
          className={`block w-full text-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            highlighted
              ? `${colorClasses.button} text-white focus:outline-none focus:ring-2 focus:ring-offset-2`
              : `border border-gray-200 dark:border-gray-700 ${colorClasses.buttonAlt} dark:text-white dark:hover:bg-gray-700`
          }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const HomePricing = () => {
  const plans = [
    {
      name: "Découverte",
      price: "Gratuit",
      description:
        "Parfait pour découvrir la plateforme et tester quelques fonctionnalités.",
      color: "blue",
      features: [
        { included: true, text: "3 simulations d'entretien" },
        { included: true, text: "Feedback basique" },
        { included: true, text: "Accès à la bibliothèque de base" },
        { included: false, text: "Mode oral limité" },
        { included: false, text: "Tableau de bord" },
      ],
      buttonText: "S'inscrire gratuitement",
      buttonLink: "#essai",
      highlighted: false,
    },
    {
      name: "Standard",
      price: "29€",
      period: "mois",
      description:
        "Notre offre la plus populaire pour une préparation complète.",
      color: "blue",
      features: [
        { included: true, text: "Simulations illimitées" },
        { included: true, text: "Feedback détaillé et personnalisé" },
        { included: true, text: "Mode oral illimité" },
        { included: true, text: "Accès complet à la bibliothèque" },
        { included: true, text: "Tableau de bord avancé" },
      ],
      buttonText: "Commencer maintenant",
      buttonLink: "#essai",
      highlighted: true,
      badge: "Recommandé",
    },
    {
      name: "Premium",
      price: "59€",
      period: "mois",
      description: "L'offre la plus complète avec coaching personnalisé.",
      color: "amber",
      features: [
        { included: true, text: "Tout ce qui est inclus dans Standard" },
        { included: true, text: "2 sessions de coaching individuel" },
        { included: true, text: "Révision de votre dossier" },
        { included: true, text: "Feedback par un expert Campus France" },
        { included: true, text: "Ressources exclusives premium" },
      ],
      buttonText: "Découvrir l'offre Premium",
      buttonLink: "#essai",
      highlighted: false,
    },
  ];

  return (
    <section
      id="offres"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium text-sm mb-4">
            Tarifs
          </div>
          <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Des formules adaptées à vos besoins
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Choisissez l`&rsquo;offre qui vous convient le mieux pour préparer
            votre entretien Campus France et maximiser vos chances de réussite.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Vous représentez une école ou une université?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Nous proposons des formules spéciales pour les institutions.
            Contactez-nous pour obtenir un devis personnalisé.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Demander un devis
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Garantie satisfait ou remboursé pendant 14 jours. Tous les
            abonnements sont sans engagement et peuvent être annulés à tout
            moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
