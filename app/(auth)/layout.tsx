import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        {/* Gradient spheres */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-indigo-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

        {/* Neural network lines (SVG background) */}
        <div className="absolute inset-0 bg-[url('/neural-network.svg')] bg-no-repeat bg-cover opacity-10"></div>
      </div>

      {/* Main content area */}
      <main className="relative mb-8 z-10 flex-1 flex flex-col md:flex-row items-center justify-center p-6">
        {/* Left side - Content */}
        <div className="w-full md:w-1/2 max-w-xl px-6 mb-10 md:mb-0">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs text-gray-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            Intelligence Artificielle pour vos entretiens
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
            Maîtrisez votre entretien Campus France
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Notre IA avancée simule des entretiens Campus France réalistes,
            analyse vos réponses et vous offre un feedback personnalisé pour
            maximiser vos chances de réussite.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Simulation IA</p>
                <p className="text-xs text-gray-400">
                  Questions adaptées à votre profil
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Feedback détaillé
                </p>
                <p className="text-xs text-gray-400">Analyse de vos réponses</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Entraînement illimité
                </p>
                <p className="text-xs text-gray-400">
                  Pratiquez à votre rythme
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Questions récentes
                </p>
                <p className="text-xs text-gray-400">
                  Base de données actualisée
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="User"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="User"
              />
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-black bg-indigo-600 text-white text-xs font-medium">
                +2k
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Rejoignez plus de{" "}
              <span className="text-white font-medium">2,000 étudiants</span>{" "}
              déjà acceptés
            </p>
          </div>
        </div>

        {/* Right side - Auth form */}
        <div className="w-full md:w-1/2 md:mt-0 flex justify-center items-center">
          {children}
        </div>
      </main>

      {/* Floating tech elements */}
      <div className="absolute bottom-10 left-10 z-0 opacity-30">
        <div className="w-40 h-40 blur-md">
          <Image
            src="/tech-circle.svg"
            alt=""
            width={160}
            height={160}
            className="animate-spin-slow"
          />
        </div>
      </div>

      <div className="absolute top-20 right-10 z-0 opacity-20">
        <div className="w-32 h-32 blur-sm">
          <Image
            src="/ai-matrix.svg"
            alt=""
            width={128}
            height={128}
            className="animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
