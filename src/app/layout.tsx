import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "./learn/ProgressContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Savoir+ | La plateforme d'apprentissage pour la vraie vie",
  description:
    "Tutoriels interactifs, cours gratuits, exercices pratiques et certificats inspirés de W3Schools et Tutorialspoint. Apprends le numérique, la finance personnelle et la carrière.",
  keywords: [
    "tutoriels",
    "cours gratuits",
    "w3schools",
    "tutorialspoint",
    "informatique",
    "finance personnelle",
    "budget",
    "CV",
    "IA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
        <ProgressProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ProgressProvider>
      </body>
    </html>
  );
}