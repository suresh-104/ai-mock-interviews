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

export const metadata: Metadata = {
  title: "Campus Pro | Préparation Entretien Campus France",
  description:
    "Entraînez-vous aux entretiens Campus France et recevez des feedbacks personnalisés",
  openGraph: {
    title: "Campus Pro | Préparation Entretien Campus France",
    description: "Simulez votre entretien Campus France avec l'IA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${urbanist.className} antialiased pattern`}
        cz-shortcut-listen="true"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
