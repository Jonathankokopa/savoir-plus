"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useProgress } from "../../ProgressContext";
import { getCourseData } from "@/data/coursesData";
import { Award, CheckCircle2, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

export default function CoursePage() {
  const params = useParams<{
    slug: string;
    courseSlug: string;
  }>();

  const slug = params.slug;
  const courseSlug = params.courseSlug;

  const { getCompletedCount, isLessonCompleted, isExamPassed, getExamResult } = useProgress();

  const course = getCourseData(slug, courseSlug);

  const allLessons = course.modules.flatMap((module) => module.lessons);
  const courseKey = `${slug}/${courseSlug}`;

  const completedLessons = Math.min(
    getCompletedCount(courseKey),
    allLessons.length,
  );

  const progress =
    allLessons.length > 0
      ? Math.round((completedLessons / allLessons.length) * 100)
      : 0;

  const examPassed = isExamPassed(courseKey);
  const examResult = getExamResult(courseKey);
  const allLessonsDone = allLessons.length > 0 && completedLessons >= allLessons.length;

  const firstIncompleteLesson =
    allLessons.find(
      (lesson) => !isLessonCompleted(courseKey, lesson.slug),
    ) ?? allLessons[0];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Course Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Link
              href="/learn"
              className="transition hover:text-emerald-600"
            >
              Parcours
            </Link>
            <span>/</span>
            <Link
              href={`/learn/${slug}`}
              className="transition hover:text-emerald-600"
            >
              Catégorie
            </Link>
            <span>/</span>
            <span className="text-emerald-700">{course.title}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-extrabold text-emerald-800 border border-emerald-200">
                <span className="text-base">{course.icon}</span>
                <span>Niveau {course.level}</span>
              </div>

              <h1 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                {course.title}
              </h1>

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-6 text-sm font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <strong className="text-slate-900">{allLessons.length}</strong> leçons
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <strong className="text-slate-900">{course.modules.length}</strong> modules
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Certificat (70% requis)</span>
                </span>
              </div>
            </div>

            {/* Progress Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">
                  Progression leçons
                </span>
                <span className="text-sm font-extrabold text-emerald-600">
                  {progress}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-3 text-xs font-semibold text-slate-500">
                {completedLessons} sur {allLessons.length} leçons terminées
              </p>

              {firstIncompleteLesson && (
                <Link
                  href={`/learn/${slug}/${courseSlug}/${firstIncompleteLesson.slug}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700 shadow-sm"
                >
                  <span>
                    {progress === 0
                      ? "Commencer la leçon 1 →"
                      : progress === 100
                        ? "Revoir les leçons →"
                        : "Continuer le cours →"}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Exam Box */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        {/* Banner Exam Final */}
        <div className="mb-10 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/60 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white text-2xl font-bold shadow-sm">
                🎓
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-extrabold text-slate-900">Examen Final Certifiant</h3>
                  <span className="rounded-full bg-amber-200 px-2.5 py-0.5 text-xs font-bold text-amber-900">
                    Passage requis: ≥ 70%
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Passe l&apos;examen professionnel de 10 questions pour débloquer ton certificat. Une note minimale de 70% est obligatoire. En cas d&apos;échec (&lt; 70%), tu dois refaire l&apos;examen.
                </p>
                {examResult.attempts > 0 && (
                  <p className="mt-2 text-xs font-bold text-slate-600">
                    Vos tentatives : {examResult.attempts} · Meilleur score :{" "}
                    <span className={examResult.bestScore >= 70 ? "text-emerald-700" : "text-amber-700"}>
                      {examResult.bestScore}%
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-2">
              {examPassed ? (
                <Link
                  href={`/certificate/${courseSlug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-emerald-700 shadow-sm"
                >
                  <Award className="w-4 h-4" />
                  <span>Voir mon Certificat</span>
                </Link>
              ) : (
                <Link
                  href={`/learn/${slug}/${courseSlug}/exam`}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold transition shadow-sm ${
                    allLessonsDone
                      ? "bg-amber-600 text-white hover:bg-amber-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>{allLessonsDone ? "Passer l'Examen Final" : "Passer l'Examen (Débloqué)"}</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Programme du cours ({course.modules.length} modules)
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Suis chaque leçon et valide les mini-quiz pour te préparer à l&apos;examen final.
          </p>
        </div>

        <div className="space-y-6">
          {course.modules.map((module, moduleIndex) => (
            <div key={module.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs">
              <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Module {moduleIndex + 1}
                  </p>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {module.title}
                  </h3>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-md">
                  {module.lessons.length} leçons
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {module.lessons.map((lesson, lessonIndex) => {
                  const completed = isLessonCompleted(courseKey, lesson.slug);

                  return (
                    <Link
                      key={lesson.slug}
                      href={`/learn/${slug}/${courseSlug}/${lesson.slug}`}
                      className="group flex items-center gap-4 px-6 py-4.5 transition hover:bg-emerald-50/50"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition ${
                          completed
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800"
                        }`}
                      >
                        {completed ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : lessonIndex + 1}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {lesson.title}
                        </h4>
                        <p className="mt-0.5 text-xs text-slate-500 flex items-center gap-2">
                          <span>⏱️ {lesson.duration}</span>
                          {completed && (
                            <span className="font-bold text-emerald-700">
                              • Leçon validée ✓
                            </span>
                          )}
                        </p>
                      </div>

                      <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-600 font-bold">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}