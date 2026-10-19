"use client";

import { useProgress } from "../../../ProgressContext";

type LessonCompletionProps = {
  courseKey: string;
  lessonSlug: string;
};

export default function LessonCompletion({
  courseKey,
  lessonSlug,
}: LessonCompletionProps) {
  const { isLessonCompleted, completeLesson } = useProgress();

  const completed = isLessonCompleted(courseKey, lessonSlug);

  function handleComplete() {
    completeLesson(courseKey, lessonSlug);
  }

  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-bold text-slate-900">
            {completed
              ? "Leçon terminée ✓"
              : "Tu as compris cette leçon ?"}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {completed
              ? "Cette leçon est enregistrée dans ta progression."
              : "Marque-la comme terminée pour continuer ton parcours."}
          </p>
        </div>

        <button
          type="button"
          onClick={handleComplete}
          disabled={completed}
          className={`shrink-0 rounded-xl px-5 py-3 text-sm font-semibold text-white transition ${
            completed
              ? "cursor-default bg-green-600"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {completed ? "✓ Leçon terminée" : "✓ J'ai compris"}
        </button>
      </div>
    </div>
  );
}