"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Search, X, BookOpen, ChevronRight, Sparkles } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  type: "path" | "course" | "lesson";
}

const SEARCH_DATABASE: SearchItem[] = [
  // Parcours
  {
    id: "p1",
    title: "Compétences numériques",
    description: "Maîtrise les outils numériques, Internet, la sécurité et l'IA",
    category: "Numérique",
    icon: "💻",
    url: "/learn/numerique",
    type: "path",
  },
  {
    id: "p2",
    title: "Finance personnelle",
    description: "Budget, épargne, crédit, investissement et prévention des arnaques",
    category: "Finance",
    icon: "💰",
    url: "/learn/finance",
    type: "path",
  },
  {
    id: "p3",
    title: "Carrière & Monde Pro",
    description: "CV, entretiens, communication et travail à distance",
    category: "Carrière",
    icon: "🚀",
    url: "/learn/carriere",
    type: "path",
  },
  // Cours Numérique
  {
    id: "c1",
    title: "Utiliser efficacement un ordinateur",
    description: "Système d'exploitation, fichiers, raccourcis et maintenance",
    category: "Numérique",
    icon: "🖥️",
    url: "/learn/numerique/utiliser-ordinateur",
    type: "course",
  },
  {
    id: "c2",
    title: "Comprendre Internet & le Web",
    description: "Navigateurs, moteurs de recherche, URL et sécurité HTTP/HTTPS",
    category: "Numérique",
    icon: "🌐",
    url: "/learn/numerique/comprendre-internet",
    type: "course",
  },
  {
    id: "c3",
    title: "Sécurité numérique & Mots de passe",
    description: "Cyber-protection, authentification à deux facteurs et hameçonnage",
    category: "Numérique",
    icon: "🛡️",
    url: "/learn/numerique/securite-numerique",
    type: "course",
  },
  {
    id: "c4",
    title: "Introduction à l'IA",
    description: "Concepts de l'IA, prompts, éthique et utilisation au quotidien",
    category: "Numérique",
    icon: "🤖",
    url: "/learn/numerique/introduction-ia",
    type: "course",
  },
  // Cours Finance
  {
    id: "c5",
    title: "Faire un budget simple & efficace",
    description: "La règle 50/30/20, gestion des dépenses et épargne de précaution",
    category: "Finance",
    icon: "📊",
    url: "/learn/finance/faire-un-budget",
    type: "course",
  },
  {
    id: "c6",
    title: "Épargner intelligemment",
    description: "Objectifs financiers, intérêts composés et comptes d'épargne",
    category: "Finance",
    icon: "🌱",
    url: "/learn/finance/epargner-intelligemment",
    type: "course",
  },
  {
    id: "c7",
    title: "Dette et crédit",
    description: "Taux d'intérêt, crédit à la consommation et remboursement",
    category: "Finance",
    icon: "💳",
    url: "/learn/finance/dette-et-credit",
    type: "course",
  },
  // Cours Carrière
  {
    id: "c8",
    title: "Construire un CV percutant",
    description: "Structure, compétences clés, mise en page et conseils recruteurs",
    category: "Carrière",
    icon: "📄",
    url: "/learn/carriere/construire-son-cv",
    type: "course",
  },
  {
    id: "c9",
    title: "Réussir un entretien d'embauche",
    description: "Méthode STAR, préparation des réponses et langage corporel",
    category: "Carrière",
    icon: "🤝",
    url: "/learn/carriere/reussir-un-entretien",
    type: "course",
  },
  {
    id: "c10",
    title: "Communication professionnelle",
    description: "Rédaction d'emails, écoute active et feedback constructif",
    category: "Carrière",
    icon: "💬",
    url: "/learn/carriere/communication-professionnelle",
    type: "course",
  },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return SEARCH_DATABASE.slice(0, 6);
    const q = query.toLowerCase();
    return SEARCH_DATABASE.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un tutoriel, cours ou notion (ex: CV, budget, sécurité)..."
            className="w-full bg-transparent border-none text-slate-900 text-base placeholder-slate-400 focus:outline-none focus:ring-0"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200/60 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-white border border-slate-200 rounded-lg shadow-2xs"
          >
            Échap
          </button>
        </div>

        {/* Results section */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>{query ? `Résultats (${filteredItems.length})` : "Suggestions populaires"}</span>
            {!query && (
              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                <Sparkles className="w-3 h-3" /> Recommandé pour toi
              </span>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="font-semibold text-slate-700">Aucun résultat pour &quot;{query}&quot;</p>
              <p className="text-sm mt-1">Essaie avec d&apos;autres mots-clés comme &quot;budget&quot;, &quot;CV&quot; ou &quot;IA&quot;.</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={onClose}
                className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-200 transition-all duration-150"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-emerald-100 text-xl transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 group-hover:text-emerald-700 truncate text-sm sm:text-base">
                      {item.title}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-100 group-hover:bg-emerald-200/70 text-slate-600 group-hover:text-emerald-800">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 truncate mt-0.5">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-600 self-center shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Navigation: <kbd>↑</kbd> <kbd>↓</kbd></span>
            <span>Sélectionner: <kbd>Entrée</kbd></span>
          </div>
          <span>Savoir+ Search Engine v2.0</span>
        </div>
      </div>
    </div>
  );
}
