import Link from "next/link";
import {
  ArrowRight,
  Award,
  Sparkles,
  BookOpen,
  Code2,
  Zap,
  Bot,
  Globe,
  GraduationCap,
  Brain,
  BriefcaseBusiness,
} from "lucide-react";

import InteractivePlayground from "@/components/InteractivePlayground";
import AITutorBanner from "@/components/AITutorBanner";
import { CATEGORIES_DATA } from "@/data/categoriesData";

export default function Home() {
  const featuredCategories = [
    CATEGORIES_DATA["web-dev"],
    CATEGORIES_DATA["mobile-dev"],
    CATEGORIES_DATA["cyber-security"],
    CATEGORIES_DATA["reseaux"],
    CATEGORIES_DATA["ai-ml"],
    CATEGORIES_DATA["finance"],
    CATEGORIES_DATA["management"],
    CATEGORIES_DATA["culture-generale"],
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800 pt-16 pb-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-cyan-500/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-7 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-extrabold text-emerald-400 shadow-lg backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              <span>Apprendre. Comprendre. Progresser.</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Développe tes compétences.
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Enrichis ton savoir.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-xl">
              Savoir+ est une plateforme d&apos;apprentissage en français pour
              développer des compétences professionnelles, découvrir de
              nouveaux domaines et élargir sa culture générale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 pt-3 sm:flex-row">
              <Link
                href="/learn"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 px-8 py-4 text-base font-extrabold text-slate-950 shadow-xl transition-all hover:bg-emerald-400 hover:shadow-emerald-500/20 sm:w-auto"
              >
                <BookOpen className="h-5 w-5" />
                <span>Explorer les cours</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Value propositions */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-10 text-left md:grid-cols-4">
              {/* Courses */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-1 flex items-center gap-2 text-emerald-400">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm font-extrabold">
                    Cours structurés
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-400">
                  Des parcours progressifs pour apprendre efficacement.
                </p>
              </div>

              {/* Practice */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-1 flex items-center gap-2 text-cyan-400">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-extrabold">
                    Apprentissage pratique
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-400">
                  Exercices, projets, quiz et mises en pratique.
                </p>
              </div>

              {/* Certifications */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-1 flex items-center gap-2 text-amber-400">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-extrabold">
                    Certifications
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-400">
                  Valide tes connaissances avec des examens finaux.
                </p>
              </div>

              {/* AI */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-1 flex items-center gap-2 text-violet-400">
                  <Bot className="h-4 w-4" />
                  <span className="text-sm font-extrabold">
                    Tuteur IA 24/7
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-400">
                  Pose tes questions et apprends avec un assistant intelligent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 inline-block rounded-full border border-emerald-800 bg-emerald-950 px-3.5 py-1 text-xs font-extrabold text-emerald-400">
                NOTRE CATALOGUE
              </span>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Apprends ce qui compte pour toi
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Des compétences professionnelles aux connaissances générales,
                découvre des cours conçus pour apprendre à ton rythme.
              </p>
            </div>

            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Voir tous les domaines
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Category cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/learn/${cat.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition-all duration-300 hover:border-emerald-500 hover:bg-slate-900 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div>
                  {/* Icon + badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-800/80 bg-emerald-950 text-3xl transition-transform duration-300 group-hover:scale-110">
                      {cat.emoji || "🎓"}
                    </div>

                    {cat.badge && (
                      <span className="rounded-md bg-slate-800 px-2.5 py-1 text-[11px] font-extrabold uppercase text-slate-300">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white transition-colors group-hover:text-emerald-400">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-400">
                    {cat.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs font-bold text-slate-400 transition-colors group-hover:text-emerald-400">
                  <span>
                    {cat.courses.length}{" "}
                    {cat.courses.length > 1 ? "cours" : "cours"}
                  </span>

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is Savoir+ */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-300">
              <Brain className="h-3.5 w-3.5 text-emerald-400" />
              Pourquoi Savoir+ ?
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Une plateforme pour apprendre et élargir ses horizons
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Que tu veuilles apprendre à programmer, comprendre la
              cybersécurité, mieux gérer ton argent ou découvrir l&apos;histoire
              d&apos;un pays, Savoir+ te permet d&apos;apprendre tout cela dans
              un seul espace.
            </p>
          </div>

          {/* Three pillars */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Professional skills */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 transition-all hover:border-emerald-500/40">
              <Code2 className="h-8 w-8 text-emerald-400" />

              <h3 className="mt-5 text-xl font-extrabold">
                Compétences professionnelles
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Développement, cybersécurité, réseaux, IA, marketing,
                management et bien plus.
              </p>
            </div>

            {/* General knowledge */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 transition-all hover:border-cyan-500/40">
              <Globe className="h-8 w-8 text-cyan-400" />

              <h3 className="mt-5 text-xl font-extrabold">
                Culture & connaissances
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Histoire, géographie, sciences, cultures du monde, sociétés
                et connaissances générales.
              </p>
            </div>

            {/* Personal development */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 transition-all hover:border-amber-500/40">
              <BriefcaseBusiness className="h-8 w-8 text-amber-400" />

              <h3 className="mt-5 text-xl font-extrabold">
                Développement personnel
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Finance personnelle, communication, leadership, carrière et
                compétences utiles au quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tutor */}
      <section className="border-b border-slate-800 bg-slate-900/60 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AITutorBanner />
        </div>
      </section>

      {/* Interactive Sandbox */}
      <section id="sandbox" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              <Code2 className="h-4 w-4" />
              Environnement de pratique
            </span>

            <h2 className="mt-1 text-3xl font-black text-white">
              Apprends en pratiquant
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Teste directement tes connaissances avec notre environnement
              interactif, sans installation.
            </p>
          </div>

          <InteractivePlayground initialPresetId="html-intro" />
        </div>
      </section>

      {/* Certification */}
      <section className="border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900 to-emerald-950/40 p-8 text-center shadow-2xl sm:p-12">
            {/* Certificate icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-amber-500/40 bg-amber-500/20 text-4xl shadow-inner">
              🎓
            </div>

            {/* Heading */}
            <div className="mt-6 space-y-2">
              <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/20 px-3.5 py-1 text-xs font-extrabold text-amber-300">
                CERTIFICATION SAVOIR+
              </span>

              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Valide ce que tu as appris
              </h2>
            </div>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Termine ton parcours et passe l&apos;examen final. Avec un score
              d&apos;au moins <strong className="text-white">70 %</strong>,
              obtiens ton certificat Savoir+. En cas d&apos;échec, tu peux
              repasser l&apos;examen.
            </p>

            {/* CTA */}
            <div className="flex justify-center pt-6">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-8 py-4 text-base font-extrabold text-slate-950 shadow-xl transition-all hover:bg-amber-400"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Commencer à apprendre</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}