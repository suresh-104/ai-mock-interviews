"use client";
import React from "react";
import { useState } from "react";

const Footer = () => {
  const [hoverSection, setHoverSection] = useState("");

  // Liste des liens organisés par section
  const footerLinks = {
    etudiants: [
      { name: "Préparer mon entretien", href: "#preparer" },
      { name: "Conseils d'admission", href: "#conseils" },
      { name: "Visas et démarches", href: "#visas" },
      { name: "Témoignages", href: "#temoignages" },
    ],
    formations: [
      { name: "Universités", href: "#universites" },
      { name: "Grandes écoles", href: "#grandes-ecoles" },
      { name: "Filières populaires", href: "#filieres" },
      { name: "Équivalences", href: "#equivalences" },
    ],
    ressources: [
      { name: "Blog", href: "#blog" },
      { name: "FAQ", href: "#faq" },
      { name: "Guides PDF", href: "#guides" },
      { name: "Webinaires", href: "#webinaires" },
    ],
    entreprise: [
      { name: "À propos", href: "#apropos" },
      { name: "Partenaires", href: "#partenaires" },
      { name: "Carrières", href: "#carrieres" },
      { name: "Presse", href: "#presse" },
    ],
  };

  // Effet de hover sur les sections
  const handleSectionHover = (section: string) => {
    setHoverSection(section);
  };

  return (
    <footer className="relative pt-24 pb-12 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Ligne tricolore en haut */}
      <div className="absolute top-0 inset-x-0 h-0.5 z-10">
        <div className="flex h-full">
          <div className="w-1/3 bg-blue-600"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-red-600"></div>
        </div>
      </div>

      {/* Effet de lumière en arrière-plan */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Colonne de présentation */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <div className="flex items-center">
              <div className="relative">
                <span className="text-2xl font-bold text-white">
                  Prepa<span className="text-blue-400">FR</span>
                </span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Votre plateforme d&rsquo;accompagnement intelligent pour réussir
              votre parcours d&rsquo;études en France. Préparez efficacement
              votre entretien Campus France et maximisez vos chances
              d&rsquo;admission.
            </p>

            <div className="pt-4">
              <div className="relative group inline-block">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70 blur-sm transition-all duration-300 group-hover:opacity-100"></span>
                <a
                  href="#demo"
                  className="relative flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300"
                >
                  Essayer gratuitement
                  <svg
                    className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-3">
                Rejoignez notre communauté
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="relative group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                      {social === "facebook" && (
                        <svg
                          className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      )}
                      {social === "twitter" && (
                        <svg
                          className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      )}
                      {social === "instagram" && (
                        <svg
                          className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                      )}
                      {social === "linkedin" && (
                        <svg
                          className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Sections de liens */}
          <div className="col-span-1 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {Object.entries(footerLinks).map(([section, links]) => (
                <div
                  key={section}
                  className="space-y-5"
                  onMouseEnter={() => handleSectionHover(section)}
                  onMouseLeave={() => handleSectionHover("")}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    {section === "etudiants" && "Étudiants"}
                    {section === "formations" && "Formations"}
                    {section === "ressources" && "Ressources"}
                    {section === "entreprise" && "Notre Entreprise"}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="group relative text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <span className="relative inline-block">
                            {link.name}
                            <span
                              className={`absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-300 transition-all duration-300 ${
                                hoverSection === section
                                  ? "group-hover:w-full"
                                  : ""
                              }`}
                            ></span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section newsletter */}
        <div className="mt-16 pt-10 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-lg font-medium text-white">Restez informé</h3>
              <p className="mt-2 text-sm text-gray-400">
                Recevez nos conseils et actualités sur les études en France.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="relative flex-grow min-w-0">
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 text-sm text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre adresse email"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-focus-within:opacity-100 transition-opacity -z-10"></div>
                </div>
                <button
                  type="submit"
                  className="flex-none relative group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/40 to-indigo-400/40 opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></span>
                  <span className="relative">S&rsquo;abonner</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Section bas de page */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
              <a
                href="#confidentialite"
                className="hover:text-gray-300 transition-colors"
              >
                Confidentialité
              </a>
              <a
                href="#conditions"
                className="hover:text-gray-300 transition-colors"
              >
                Conditions d&rsquo;utilisation
              </a>
              <a
                href="#cookies"
                className="hover:text-gray-300 transition-colors"
              >
                Cookies
              </a>
              <a
                href="#mentions"
                className="hover:text-gray-300 transition-colors"
              >
                Mentions légales
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="h-2 flex items-center mr-1.5">
                  <div className="w-1 h-full bg-blue-600"></div>
                  <div className="w-1 h-full bg-white"></div>
                  <div className="w-1 h-full bg-red-600"></div>
                </div>
                <span>Conçu par Dave Glad</span>
              </div>
              <span>&bull;</span>
              <span>&copy; {new Date().getFullYear()} PrepaFR</span>
            </div>
          </div>
        </div>

        {/* Élément décoratif - filet lumineux */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;
