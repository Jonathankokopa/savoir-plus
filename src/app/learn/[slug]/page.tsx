"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useProgress } from "../ProgressContext";
import { ArrowLeft, CheckCircle2, Sparkles, ChevronRight, Award } from "lucide-react";
import { CATEGORIES_DATA } from "@/data/categoriesData";

export default function LearningPathPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const { getCompletedCount, isExamPassed } = useProgress();

  const category = CATEGORIES_DATA[slug];

  if (!category) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 text-6xl">🔎</div>
          <h1 className="mb-4 text-3xl font-bold text-slate-900">
            Parcours introuvable
          </h1>
          <p className="mb-8 text-slate-600">
            Ce parcours n&apos;existe pas ou n&apos;est pas encore disponible.
          </p>
          <Link
            href="/learn"
            className="inline-flex rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            ← Voir tous les parcours
          </Link>
        </div>
      </main>
    );
  }

  const courseProgress = category.courses.map((course) => {
    const courseKey = `${slug}/${course.slug}`;
    const completed = getCompletedCount(courseKey);
    const passedExam = isExamPassed(courseKey);

    const progress =
      course.lessons === 0
        ? 0
        : Math.min(
            100,
            Math.round((completed / course.lessons) * 100),
          );

    return {
      ...course,
      completed,
      progress,
      passedExam,
    };
  });

  const totalLessons = category.courses.reduce(
    (total, course) => total + (course.lessons || 6),
    0,
  );

  const completedLessons = courseProgress.reduce(
    (total, course) => total + course.completed,
    0,
  );

  const pathProgress =
    totalLessons === 0
      ? 0
      : Math.min(
          100,
          Math.round((completedLessons / totalLessons) * 100),
        );

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <Link
            href="/learn"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tous les parcours</span>
          </Link>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-4xl border border-emerald-200 shadow-2xs">
              {category.emoji || "🎓"}
            </div>

            <div className="flex-1">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Parcours Certifiant</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                {category.title}
              </h1>

              <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
                {category.description}
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <div className="text-2xl font-extrabold text-slate-900">{category.courses.length}</div>
              <div className="mt-1 text-xs font-bold text-slate-500 uppercase tracking-wider">Cours professionnels</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <div className="text-2xl font-extrabold text-slate-900">{totalLessons}</div>
              <div className="mt-1 text-xs font-bold text-slate-500 uppercase tracking-wider">Leçons pratiques</div>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
              <div className="text-2xl font-extrabold text-emerald-700">{pathProgress}%</div>
              <div className="mt-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">Progression globale</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-2xs">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Ta Progression dans le parcours
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {completedLessons} sur {totalLessons} leçons terminées
                </p>
              </div>

              <span className="text-lg font-black text-emerald-600">
                {pathProgress}%
              </span>
            </div>

            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                style={{ width: `${pathProgress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses list section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Les cours du parcours
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Chaque cours comprend des leçons pratiques et un examen final certifiant (70% requis pour valider).
          </p>
        </div>

        <div className="space-y-4">
          {courseProgress.map((course, index) => {
            const isCompleted = course.progress === 100;

            return (
              <Link
                key={course.slug}
                href={`/learn/${slug}/${course.slug}`}
                className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs w3-card-hover hover:border-emerald-300 transition-all"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  {/* Step Number or icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-black text-base ${
                      isCompleted
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-6 h-6 text-emerald-600" /> : index + 1}
                  </div>

                  {/* Course Details */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {course.title}
                      </h3>

                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
                        {course.level}
                      </span>

                      {course.passedExam && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-extrabold text-emerald-800">
                          <Award className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Certifié (70%+)</span>
                        </span>
                      )}
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {course.description}
                    </p>

                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <div className="text-xs font-semibold text-slate-500">
                        {course.completed} / {course.lessons} leçons
                      </div>

                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100 sm:max-w-xs">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>

                      <div className="text-xs font-extrabold text-emerald-600">
                        {course.progress}%
                      </div>
                    </div>
                  </div>

                  {/* Action Link button */}
                  <div className="shrink-0 rounded-xl border border-slate-200 px-5 py-3 text-xs font-bold text-slate-700 transition-all group-hover:border-emerald-300 group-hover:bg-emerald-50 group-hover:text-emerald-800 flex items-center justify-center gap-1">
                    <span>{isCompleted ? "Revoir" : course.completed > 0 ? "Continuer" : "Commencer"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}