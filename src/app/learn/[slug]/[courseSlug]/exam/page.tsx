"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useProgress } from "@/app/learn/ProgressContext";
import { getCourseData, getExamQuestions } from "@/data/coursesData";
import { Award, RotateCcw, BookOpen, CheckCircle, AlertTriangle } from "lucide-react";

export default function FinalExamPage() {
  const params = useParams<{
    slug: string;
    courseSlug: string;
  }>();

  const {
    submitExam,
    getExamResult,
    getCompletedCount,
  } = useProgress();

  const slug = params.slug || "";
  const courseSlug = params.courseSlug || "";

  const courseKey = `${slug}/${courseSlug}`;

  const course = getCourseData(slug, courseSlug);
  const questions = getExamQuestions(courseSlug);

  const allLessons = course.modules.flatMap((m) => m.lessons);
  const requiredLessons = allLessons.length || 6;
  const completedLessons = getCompletedCount(courseKey);

  const allLessonsCompleted = completedLessons >= requiredLessons;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const examResult = getExamResult(courseKey);

  function selectAnswer(answerIndex: number) {
    setAnswers((current) => ({
      ...current,
      [currentQuestion]: answerIndex,
    }));
  }

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((current) => current + 1);
      return;
    }

    finishExam();
  }

  function finishExam() {
    let correct = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct += 1;
      }
    });

    const finalScore = Math.round((correct / questions.length) * 100);

    setScore(finalScore);
    setFinished(true);

    submitExam(courseKey, finalScore);
  }

  function restartExam() {
    setCurrentQuestion(0);
    setAnswers({});
    setFinished(false);
    setScore(null);
  }

  if (!allLessonsCompleted) {
    const remainingLessons = Math.max(requiredLessons - completedLessons, 0);

    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-50 text-4xl border border-amber-200">
              🔒
            </div>

            <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
              Examen final verrouillé
            </h1>

            <p className="mt-3 leading-relaxed text-slate-600">
              Pour garantir vos compétences professionnelles, terminez toutes les leçons du cours <strong>{course.title}</strong> avant de passer l&apos;examen.
            </p>

            <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Progression des leçons
              </p>

              <p className="mt-2 text-4xl font-black text-emerald-600">
                {completedLessons} / {requiredLessons}
              </p>

              <p className="mt-2 text-xs font-semibold text-slate-500">
                {remainingLessons === 1
                  ? "Il te reste 1 leçon à compléter."
                  : `Il te reste ${remainingLessons} leçons à compléter.`}
              </p>
            </div>

            <Link
              href={`/learn/${slug}/${courseSlug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-extrabold text-white transition hover:bg-emerald-700 shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Continuer les leçons du cours →</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Result screen after exam completion
  if (finished && score !== null) {
    const passed = score >= 70;

    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-5xl shadow-xs">
              {passed ? "🎓" : "❌"}
            </div>

            <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
              {passed ? "Félicitations ! Examen Réussi" : "Examen Non Validé"}
            </h1>

            <p className="mt-3 text-base text-slate-600 max-w-md mx-auto">
              {passed
                ? `Tu as obtenu ${score}% et validé le cours "${course.title}". Ton certificat professionnel est désormais débloqué !`
                : `Tu as obtenu ${score}%. Une note minimale de 70% est obligatoire pour valider le cours et obtenir le certificat.`}
            </p>

            <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Ton Score Final
              </p>

              <p
                className={`mt-2 text-6xl font-black ${
                  passed ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {score}%
              </p>

              <p className="mt-2 text-xs font-bold text-slate-500">
                Score minimal requis : 70%
              </p>
            </div>

            {passed ? (
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href={`/certificate/${courseSlug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 font-extrabold text-white transition hover:bg-emerald-700 shadow-md text-base"
                >
                  <Award className="w-5 h-5" />
                  <span>Voir & Télécharger mon Certificat 🎓</span>
                </Link>
              </div>
            ) : (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={restartExam}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 font-extrabold text-white transition hover:bg-amber-700 shadow-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Refaire l&apos;examen maintenant (70% requis)</span>
                </button>

                <Link
                  href={`/learn/${slug}/${courseSlug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Revoir les leçons</span>
                </Link>
              </div>
            )}

            {examResult.attempts > 1 && (
              <p className="mt-6 text-xs font-semibold text-slate-400">
                Tentatives effectuées : {examResult.attempts} · Meilleur score obtenu : {examResult.bestScore}%
              </p>
            )}
          </div>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/learn/${slug}/${courseSlug}`}
          className="text-xs font-bold uppercase tracking-wider text-slate-500 transition hover:text-emerald-600"
        >
          ← Retour au cours {course.title}
        </Link>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-0.5 text-xs font-extrabold text-amber-900">
                <span>🎓 Examen Certifiant</span>
                <span>• 70% Requis</span>
              </span>

              <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {course.title}
              </h1>
            </div>

            <span className="text-sm font-black text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="mt-8">
            <h2 className="text-lg sm:text-xl font-extrabold leading-snug text-slate-900">
              Q{currentQuestion + 1}. {question.question}
            </h2>

            <div className="mt-6 space-y-3">
              {question.options.map((option, index) => {
                const selected = selectedAnswer === index;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(index)}
                    className={`w-full rounded-2xl border p-4 text-left font-semibold text-sm transition-all flex items-center gap-3 ${
                      selected
                        ? "border-emerald-500 bg-emerald-50/80 text-emerald-950 shadow-2xs"
                        : "border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                        selected
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="flex-1">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-500 font-medium">
              Choisis une réponse pour continuer
            </p>

            <button
              type="button"
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className="rounded-xl bg-emerald-600 px-6 py-3 font-extrabold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 shadow-sm"
            >
              {currentQuestion === questions.length - 1
                ? "Soumettre l'examen final 🎓"
                : "Question suivante →"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}