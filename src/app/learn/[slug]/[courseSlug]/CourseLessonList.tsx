"use client";

import Link from "next/link";
import { useProgress } from "../../ProgressContext";

type Lesson = {
  slug: string;
  title: string;
  duration: string;
};

type CourseLessonListProps = {
  courseKey: string;
  slug: string;
  courseSlug: string;
  lessons: Lesson[];
};

export default function CourseLessonList({
  courseKey,
  slug,
  courseSlug,
  lessons,
}: CourseLessonListProps) {
  const { isLessonCompleted } = useProgress();

  return (
    <div className="space-y-3">
      {lessons.map((lesson, index) => {
        const completed = isLessonCompleted(
          courseKey,
          lesson.slug,
        );

        return (
          <Link
            key={lesson.slug}
            href={`/learn/${slug}/${courseSlug}/${lesson.slug}`}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  completed
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {completed ? "✓" : index + 1}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {lesson.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {lesson.duration}
                </p>
              </div>
            </div>

            <span className="text-sm font-medium text-blue-600">
              {completed ? "Revoir" : "Commencer"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}