"use client";

import { useState } from "react";
import { useProgress } from "../../../ProgressContext";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, ArrowRight, ArrowLeft, Award } from "lucide-react";

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

type QuizProps = {
  courseKey: string;
  quizSlug: string;
  questions: QuizQuestion[];
};

const PASSING_PERCENTAGE = 70;

export default function Quiz({
  courseKey,
  quizSlug,
  questions,
}: QuizProps) {
  const { isQuizCompleted, completeQuiz } = useProgress();

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const completed = isQuizCompleted(courseKey, quizSlug);

  if (questions.length === 0) {
    return null;
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const answeredCount = Object.keys(answers).length;
  const progressPercentage = Math.round((answeredCount / totalQuestions) * 100);

  const score = questions.reduce((total, q, index) => {
    return total + (answers[index] === q.answer ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= PASSING_PERCENTAGE;

  function handleSelect(optionIndex: number) {
    if (submitted) return;
    setAnswers((current) => ({
      ...current,
      [currentQuestion]: optionIndex,
    }));
  }

  function handleNext() {
    if (selectedAnswer === undefined) return;
    if (!isLastQuestion) {
      setCurrentQuestion((current) => current + 1);
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion((current) => current - 1);
    }
  }

  function handleSubmit() {
    if (answeredCount !== totalQuestions) return;
    setSubmitted(true);
    if (passed) {
      completeQuiz(courseKey, quizSlug);
    }
  }

  function handleRestart() {
    setAnswers({});
    setCurrentQuestion(0);
    setSubmitted(false);
  }

  return (
    <section className="my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Quiz de vérification</h2>
            <p className="text-xs text-slate-500">Teste tes connaissances sur la leçon</p>
          </div>
        </div>

        {completed && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" /> Quiz déjà validé
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
          <span>Question {currentQuestion + 1} sur {totalQuestions}</span>
          <span>{progressPercentage}% complété</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Current Question */}
      <div className="mt-6">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {currentQuestion + 1}. {question.question}
        </h3>

        {/* Options */}
        <div className="mt-4 space-y-2.5">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = question.answer === index;
            let btnStyle = "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50";

            if (submitted) {
              if (isCorrectOption) {
                btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
              } else if (isSelected && !isCorrectOption) {
                btnStyle = "border-red-300 bg-red-50 text-red-900 font-bold";
              } else {
                btnStyle = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
              }
            } else if (isSelected) {
              btnStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-900 font-bold ring-2 ring-emerald-500/30";
            }

            return (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(index)}
                disabled={submitted}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-sm transition-all ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-xs font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </div>
                {submitted && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                {submitted && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>

        {/* Explanation callout when submitted */}
        {submitted && (
          <div className={`mt-4 p-4 rounded-xl text-xs sm:text-sm border leading-relaxed ${
            selectedAnswer === question.answer ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-amber-50 border-amber-200 text-amber-950"
          }`}>
            <span className="font-bold block mb-1">💡 Explication:</span>
            {question.explanation}
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      {!submitted && (
        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" /> Précédent
          </button>

          {isLastQuestion ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={answeredCount !== totalQuestions}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Valider le quiz</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Suivant</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Result Card when submitted */}
      {submitted && (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase text-emerald-600">Résultat du Quiz</span>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">
                {score} / {totalQuestions} ({percentage}%)
              </p>
            </div>
            <div className={`px-4 py-2 rounded-xl text-xs font-bold ${
              passed ? "bg-emerald-100 text-emerald-800 border border-emerald-200" : "bg-amber-100 text-amber-800 border border-amber-200"
            }`}>
              {passed ? "Quiz Réussi 🎉" : "À réviser"}
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {passed
              ? "Bravo ! Tu as validé cette leçon avec succès. Tu peux passer à la suite."
              : `Il te faut au moins ${PASSING_PERCENTAGE}% pour valider le quiz. Revois la leçon et retente.`}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Refaire le quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
}