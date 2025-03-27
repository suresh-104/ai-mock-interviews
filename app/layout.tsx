import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

const urbanist = Urbanist({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const metadata = {
  title: "Campus Pro | Préparez-vous aux entretiens d'embauche avec l'IA",
  description:
    "Plateforme d'entraînement aux entretiens d'embauche propulsée par l'IA. Simulez des entretiens réalistes, recevez des feedbacks personnalisés et améliorez vos compétences en communication professionnelle.",
  keywords: [
    "entretien d'embauche",
    "préparation entretien",
    "simulation IA",
    "carrière",
    "développement professionnel",
  ],
  authors: [{ name: "Campus Pro" }],
  openGraph: {
    title: "Campus Pro | Maîtrisez l'art de l'entretien d'embauche",
    description:
      "Préparez-vous efficacement aux entretiens avec notre plateforme d'IA qui simule des scénarios réels d'entretien",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${urbanist.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
