"use client";

import { useProgress } from "../../../ProgressContext";

type LessonProgressProps = {
  courseKey: string;
  totalLessons: number;
};

export default function LessonProgress({
  courseKey,
  totalLessons,
}: LessonProgressProps) {
  const { getCompletedCount } = useProgress();

  const completedCount = getCompletedCount(courseKey);

  const progress =
    totalLessons === 0
      ? 0
      : Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="flex w-40 items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="text-sm font-semibold text-slate-600">
        {progress}%
      </span>
    </div>
  );
}