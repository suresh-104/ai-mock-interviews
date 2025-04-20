"use client";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet pour détecter le défilement et changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-gray-950/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      {/* Ligne tricolore en haut */}
      <div className="absolute top-0 inset-x-0 h-0.5 z-10">
        <div className="flex h-full">
          <div className="w-1/3 bg-blue-600"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-red-600"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <span className="text-2xl font-bold text-white">
                  Prepa<span className="text-blue-400">FR</span>
                </span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-full"></div>
              </div>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex md:ml-10 space-x-1">
              {["Fonctionnalités", "Avantages", "Offres", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")}`}
                    className="group relative px-3 py-2 rounded-lg text-gray-300 hover:text-white font-medium text-sm transition-colors duration-200"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 transform scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"></span>
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Boutons d'action desktop */}
          <div className="hidden md:flex md:items-center space-x-5">
            <a
              href="#connexion"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              <span>Connexion</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <button className="relative group">
              <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70 blur-sm transition-all duration-300 group-hover:opacity-100"></span>
              <span className="relative flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300">
                S&rsquo;inscrire gratuitement
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
              </span>
            </button>
          </div>

          {/* Bouton menu mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white transition-colors group"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              </span>

              {/* Cercle de focus animé */}
              <span
                className={`absolute inset-0 rounded-md bg-white/10 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              ></span>

              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full transform transition-all duration-300 ease-in-out origin-top backdrop-blur-md
          ${
            isMenuOpen
              ? "opacity-100 scale-y-100 translate-y-0 bg-gray-950/95 shadow-xl border-t border-gray-800/50"
              : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <div className="p-4 space-y-3 divide-y divide-gray-800/30">
          <div className="pt-2 pb-4 space-y-1">
            {["Fonctionnalités", "Avantages", "Offres", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")}`}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="pt-4 pb-2 space-y-3">
            <a
              href="#connexion"
              className="flex justify-center items-center px-4 py-3 text-base font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </a>
            <button
              className="w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              S&rsquo;inscrire gratuitement
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
