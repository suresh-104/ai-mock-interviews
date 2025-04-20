import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md bg-white dark:bg-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
      >
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {question}
        </h3>
        <div
          className={`text-blue-600 dark:text-blue-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-0">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {answer}
          </p>
        </div>
        <div
          className={`ml-6 mb-5 w-8 h-1 bg-blue-600 rounded-full transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>
    </div>
  );
};

const HomeFaq = () => {
  const faqItems = [
    {
      question: "Comment fonctionne Prepa FR exactement ?",
      answer:
        "Prepa FR utilise l'intelligence artificielle pour simuler des entretiens Campus France réalistes. Vous créez votre profil, puis l'IA génère des questions adaptées à votre parcours et à vos objectifs. Vous pouvez répondre à l'oral ou à l'écrit, et l'IA vous fournit un feedback détaillé pour améliorer vos réponses.",
    },
    {
      question: "La plateforme est-elle disponible dans d'autres langues ?",
      answer:
        "Actuellement, Prepa FR est disponible en français et en anglais. Nous prévoyons d'ajouter d'autres langues prochainement pour mieux servir les étudiants du monde entier.",
    },
    {
      question: "Puis-je utiliser Prepa FR sur mon téléphone ?",
      answer:
        "Oui, Prepa FR est entièrement responsive et fonctionne parfaitement sur mobile. Une application dédiée pour iOS et Android est également en cours de développement.",
    },
    {
      question: "Les simulations sont-elles vraiment réalistes ?",
      answer:
        "Absolument ! Nos simulations sont basées sur des milliers d'entretiens Campus France réels. L'IA est continuellement mise à jour pour refléter les dernières tendances et questions posées lors des entretiens. De plus, nos experts Campus France vérifient régulièrement la pertinence des questions.",
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer:
        "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. Aucun engagement à long terme n'est requis et vous pouvez passer d'une formule à l'autre selon vos besoins.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium text-sm mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Questions fréquentes
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Tout ce que vous devez savoir sur Prepa FR pour préparer sereinement
            votre entretien Campus France.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Contactez-nous
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
