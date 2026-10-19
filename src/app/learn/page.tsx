"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  Layers,
  GraduationCap
} from "lucide-react";
import { useProgress } from "./ProgressContext";
import { CATEGORIES_DATA } from "@/data/categoriesData";

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const { getCompletedCount, isExamPassed } = useProgress();

  const allCategories = Object.values(CATEGORIES_DATA);

  const filteredCategories = allCategories.filter((cat) => {
    const matchesSearch =
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.courses.some(
        (c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    if (selectedTag === "all") return matchesSearch;
    return matchesSearch && cat.badge.toLowerCase().includes(selectedTag.toLowerCase());
  });

  const totalCoursesInCatalog = allCategories.reduce(
    (acc, cat) => acc + cat.courses.length,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 text-center md:py-16">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-extrabold text-emerald-800 border border-emerald-200 shadow-2xs">
            <GraduationCap className="h-4 w-4 text-emerald-600" />
            <span>Catalogue de Cours Professionnels & Certifiants</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Développe des compétences <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              pour le monde professionnel
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg leading-relaxed">
            Formations pratiques structurées avec cours interactifs et <strong>examen final certifiant</strong> (70% minimum requis pour obtenir ton certificat).
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un cours (ex: HTML, React, Python, Cyber, SEO, Excel...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>
          </div>

          {/* Quick Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "Tous les parcours" },
              { id: "Incontournable", label: "Web & Code" },
              { id: "Mobile", label: "Mobile" },
              { id: "Sécurité", label: "Cybersécurité" },
              { id: "Données", label: "Data & Cloud" },
              { id: "Marketing", label: "Digital & SEO" },
              { id: "Human Skills", label: "Soft Skills" },
              { id: "Data Science", label: "Data Science" },
            ].map((tag) => (
              <button
                key={tag.id}
                type="button"
                onClick={() => setSelectedTag(tag.id)}
                className={`rounded-xl px-4 py-2 text-xs font-extrabold transition ${
                  selectedTag === tag.id
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Catégories de Formation ({filteredCategories.length})
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Explore {totalCoursesInCatalog} cours structurés adaptés aux exigences des entreprises.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredCategories.map((category) => {
            const completedCount = category.courses.filter((course) => {
              const key = `${category.slug}/${course.slug}`;
              return isExamPassed(key);
            }).length;

            return (
              <div
                key={category.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xs transition-all hover:border-emerald-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl border border-emerald-200 shadow-2xs">
                        {category.emoji || "🎓"}
                      </div>
                      <div>
                        <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                          {category.badge}
                        </span>
                        <h3 className="mt-1 text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {completedCount > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{completedCount} certifié(s)</span>
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {category.description}
                  </p>

                  {/* Sample Courses Pills */}
                  <div className="mt-5 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Cours de ce parcours ({category.courses.length}) :
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.courses.slice(0, 4).map((c) => (
                        <Link
                          key={c.slug}
                          href={`/learn/${category.slug}/${c.slug}`}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 transition-all flex items-center gap-1.5"
                        >
                          <span>{c.icon || "📄"}</span>
                          <span>{c.title}</span>
                        </Link>
                      ))}
                      {category.courses.length > 4 && (
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-500">
                          +{category.courses.length - 4} autres
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Examen final & Certificat (≥ 70%)</span>
                  </div>

                  <Link
                    href={`/learn/${category.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-emerald-600 shadow-2xs"
                  >
                    <span>Explorer le parcours</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}