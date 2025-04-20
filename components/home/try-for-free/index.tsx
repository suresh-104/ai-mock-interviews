import React from "react";

const HomeTryForFree = () => {
  return (
    <div
      id="essai"
      className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-100 uppercase">
            Prêt à commencer ?
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Essayez Prepa FR gratuitement
          </p>
          <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
            Inscrivez-vous en quelques secondes et commencez à vous préparer
            pour votre entretien Campus France dès aujourd&rsquo;hui.
          </p>
        </div>

        <div className="mt-12 max-w-md mx-auto">
          <form className="grid grid-cols-1 gap-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                placeholder="Nom complet"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="country" className="sr-only">
                Pays d&rsquo;origine
              </label>
              <select
                id="country"
                name="country"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              >
                <option value="">
                  Sélectionnez votre pays d&rsquo;origine
                </option>
                <option value="senegal">Sénégal</option>
                <option value="maroc">Maroc</option>
                <option value="tunisie">Tunisie</option>
                <option value="cote-ivoire">Côte d&rsquo;Ivoire</option>
                <option value="cameroun">Cameroun</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Commencer gratuitement
              </button>
            </div>
            <div className="text-center text-xs text-blue-100">
              <p>
                En vous inscrivant, vous acceptez nos conditions
                d&rsquo;utilisation et notre politique de confidentialité.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeTryForFree;
