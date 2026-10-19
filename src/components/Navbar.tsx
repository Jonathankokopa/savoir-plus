"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  BookOpen,
  Award,
  Menu,
  X,
  Globe,
  Smartphone,
  Shield,
  Bot,
  Sparkles,
  TrendingUp,
  Brain,
  Cloud,
  Network,
  BarChart,
  GitBranch,
  Database,
  FileSpreadsheet,
  Users,
  Cpu,
  Coins,
  Rocket,
  ChevronDown,
  Grid,
} from "lucide-react";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const categories = [
    { name: "Web Dev", slug: "web-dev", emoji: "🌐", icon: Globe, count: "8 Cours" },
    { name: "Mobile Dev", slug: "mobile-dev", emoji: "📱", icon: Smartphone, count: "4 Cours" },
    { name: "Cyber Security", slug: "cyber-security", emoji: "🛡️", icon: Shield, count: "4 Cours" },
    { name: "AI & ML", slug: "ai-ml", emoji: "🤖", icon: Bot, count: "4 Cours" },
    { name: "Latest Tech", slug: "latest-tech", emoji: "🚀", icon: Sparkles, count: "3 Cours" },
    { name: "Digital Marketing & SEO", slug: "digital-marketing", emoji: "📈", icon: TrendingUp, count: "3 Cours" },
    { name: "Soft Skills", slug: "soft-skills", emoji: "💡", icon: Brain, count: "3 Cours" },
    { name: "Cloud Computing", slug: "cloud-computing", emoji: "☁️", icon: Cloud, count: "3 Cours" },
    { name: "Réseaux", slug: "reseaux", emoji: "🔌", icon: Network, count: "3 Cours" },
    { name: "Data Science", slug: "data-science", emoji: "📊", icon: BarChart, count: "3 Cours" },
    { name: "DevOps & Software Eng.", slug: "software-engineering", emoji: "⚙️", icon: GitBranch, count: "4 Cours" },
    { name: "Bases de Données", slug: "databases", emoji: "🗄️", icon: Database, count: "3 Cours" },
    { name: "Bureautique", slug: "bureautique", emoji: "💻", icon: FileSpreadsheet, count: "3 Cours" },
    { name: "Management", slug: "management", emoji: "🤝", icon: Users, count: "2 Cours" },
    { name: "Computer Science", slug: "computer-science", emoji: "🖥️", icon: Cpu, count: "2 Cours" },
    { name: "Finance Personnelle", slug: "finance", emoji: "💰", icon: Coins, count: "4 Cours" },
    { name: "Carrière & Emploi", slug: "carriere", emoji: "🚀", icon: Rocket, count: "3 Cours" },
    { name: "Culture Générale", slug: "culture-generale", emoji: "📚", icon: BookOpen, count: "3 Cours" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-slate-950 text-white border-b border-slate-800 shadow-md">
        {/* Main Header Bar */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
          
          {/* Logo & Categories Dropdown */}
          <div className="flex items-center gap-5">
             <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-sky-600 text-white font-black text-xl shadow-md">
                S+
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Savoir<span className="text-emerald-400">+</span>
              </span>
            </Link>

            {/* Categories Dropdown Trigger */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
              >
                <Grid className="w-3.5 h-3.5 text-emerald-400" />
                <span>Catégories ({categories.length})</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isCategoriesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Categories Dropdown Menu */}
              {isCategoriesDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-80 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-3 z-50 animate-fadeIn max-h-[75vh] overflow-y-auto"
                  onClick={() => setIsCategoriesDropdownOpen(false)}
                >
                  <p className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                    Toutes les Catégories de Compétences
                  </p>
                  <div className="grid grid-cols-1 gap-1 mt-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/learn/${cat.slug}`}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-800 transition-colors group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{cat.emoji}</span>
                          <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400">
                            {cat.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                          {cat.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Category Ribbon Links */}
          <nav className="hidden xl:flex items-center gap-4 text-xs font-bold text-slate-300">
            <Link href="/editor" className="px-3 py-1.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 hover:bg-emerald-900 transition-colors flex items-center gap-1.5 text-xs font-extrabold">
              <span>⚡ Éditeur en Ligne</span>
            </Link>
          </nav>

          {/* Search Button & Login Pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs text-slate-400 transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline-block">Rechercher...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-bold bg-slate-950 text-slate-400 border border-slate-800 rounded">
                Ctrl+K
              </kbd>
            </button>

            <Link
              href="/login"
              className="rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-black text-slate-950 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <span>Se Connecter</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Categories Ribbon Scrollbar for Mobile & Tablet */}
        <div className="w-full bg-slate-900 border-t border-slate-800 text-xs font-bold overflow-x-auto py-2 px-4 flex items-center gap-3 scrollbar-none">
          <span className="text-emerald-400 uppercase tracking-wider shrink-0 text-[10px] font-extrabold pr-2 border-r border-slate-800">
            DISCIPLIINES:
          </span>
          {categories.slice(0, 10).map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              className="shrink-0 text-slate-300 hover:text-white flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 hover:border-emerald-500/50 transition-colors"
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </Link>
          ))}
          <Link href="/learn" className="shrink-0 text-emerald-400 hover:underline ml-auto text-[11px]">
            Toutes ({categories.length}) →
          </Link>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
            <Link
              href="/learn"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded-xl text-sm font-bold text-white hover:bg-slate-800"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" /> Tous les Tutoriels
            </Link>
            <div className="pt-2 border-t border-slate-800 space-y-1">
              <p className="px-2 text-[10px] font-extrabold uppercase text-slate-500">Toutes les Catégories</p>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/learn/${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </span>
                  <span className="text-[10px] text-slate-500">{cat.count}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
