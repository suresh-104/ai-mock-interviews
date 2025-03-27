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
  title: "Campus pro",
  description: "An AI-powered platform for preparing for mock interviews",
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
