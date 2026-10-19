"use client";

import { useProgress } from "../../ProgressContext";

type CourseProgressProps = {
  courseKey: string;
  totalLessons: number;
};

export default function CourseProgress({
  courseKey,
  totalLessons,
}: CourseProgressProps) {
  const { getCompletedCount } = useProgress();

  const completedCount = getCompletedCount(courseKey);

  const progress =
    totalLessons === 0
      ? 0
      : Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Ta progression
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            {progress}%
          </p>
        </div>

        <div className="text-right text-sm text-slate-500">
          <p>
            {completedCount} / {totalLessons}
          </p>
          <p>leçons terminées</p>
        </div>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4">
        {progress === 100 ? (
          <p className="text-sm font-semibold text-green-600">
            ✓ Toutes les leçons sont terminées
          </p>
        ) : (
          <p className="text-sm text-slate-500">
            Continue le cours pour progresser.
          </p>
        )}
      </div>
    </div>
  );
}