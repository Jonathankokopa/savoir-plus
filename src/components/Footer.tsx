import Link from "next/link";
import { BookOpen, Award, CheckCircle2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-sky-600 text-white font-black text-xl shadow-md">
                S+
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Savoir<span className="text-emerald-400">+</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              La plateforme d&apos;apprentissage interactive inspirée de W3Schools & Tutorialspoint. Des compétences concrètes pour la vraie vie.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-slate-800/80 p-2.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>100% Gratuit, Pratique & Structuré</span>
            </div>
          </div>

          {/* Col 1: Tutoriels Popualires */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Tutoriels populaires
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/learn/numerique/utiliser-ordinateur" className="hover:text-emerald-400 transition-colors">
                  Bases de l&apos;Informatique
                </Link>
              </li>
              <li>
                <Link href="/learn/numerique/comprendre-internet" className="hover:text-emerald-400 transition-colors">
                  Comprendre le Web
                </Link>
              </li>
              <li>
                <Link href="/learn/numerique/securite-numerique" className="hover:text-emerald-400 transition-colors">
                  Sécurité & Cybersécurité
                </Link>
              </li>
              <li>
                <Link href="/learn/numerique/introduction-ia" className="hover:text-emerald-400 transition-colors">
                  Introduction à l&apos;IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Finance & Carrière */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Finance & Carrière
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/learn/finance/faire-un-budget" className="hover:text-emerald-400 transition-colors">
                  Créer un budget (50/30/20)
                </Link>
              </li>
              <li>
                <Link href="/learn/finance/epargner-intelligemment" className="hover:text-emerald-400 transition-colors">
                  Guide de l&apos;Épargne
                </Link>
              </li>
              <li>
                <Link href="/learn/carriere/construire-son-cv" className="hover:text-emerald-400 transition-colors">
                  Rédiger un CV Gagnant
                </Link>
              </li>
              <li>
                <Link href="/learn/carriere/reussir-un-entretien" className="hover:text-emerald-400 transition-colors">
                  Réussir son Entretien d&apos;Embauche
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Ressources & Certificats */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Plateforme & Certificats
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/learn" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  Catalogue complet des cours
                </Link>
              </li>
              <li>
                <Link href="/certificate/utiliser-ordinateur" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  Certificats de réussite
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-emerald-400 transition-colors">
                  Créer un compte gratuit
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-emerald-400 transition-colors">
                  Espace Apprenant
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Savoir+. Développé avec passion pour l&apos;apprentissage universel.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Conçu pour la simplicité et la réussite</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 inline-block ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
