"use client";

import { useState } from "react";
import Link from "next/link";
import { useProgress } from "../../../ProgressContext";
import { CheckCircle2, Search, BookOpen, Clock, ArrowRight, Laptop } from "lucide-react";

type Lesson = {
  slug: string;
  title: string;
  duration: string;
};

type LessonSidebarProps = {
  courseKey: string;
  slug: string;
  courseSlug: string;
  currentLessonSlug: string;
  lessons: Lesson[];
};

export default function LessonSidebar({
  courseKey,
  slug,
  courseSlug,
  currentLessonSlug,
  lessons,
}: LessonSidebarProps) {
  const { isLessonCompleted } = useProgress();
  const [filterQuery, setFilterQuery] = useState("");

  const filteredLessons = lessons.filter((l) =>
    l.title.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden sticky top-20">
      
      {/* Dark Course Title Header Card (Inspired by Tutorialspoint Screenshot 2) */}
      <div className="bg-slate-950 p-4 text-white border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black text-lg">
            💻
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
              SOMMAIRE DE FORMATION
            </span>
            <h3 className="text-sm font-extrabold text-white leading-tight line-clamp-1">
              {courseSlug.replace(/-/g, " ").toUpperCase()}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-3 space-y-3">
        {/* Filter inside sidebar */}
        {lessons.length > 3 && (
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filtrer les leçons..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
        )}

        {/* Lessons List Navigation (Tutorialspoint Style with Green Dot Indicator) */}
        <nav aria-label="Course lessons" className="space-y-1 max-h-[calc(100vh-250px)] overflow-y-auto pr-1">
          {filteredLessons.map((lesson, index) => {
            const isCurrent = lesson.slug === currentLessonSlug;
            const isCompleted = isLessonCompleted(courseKey, lesson.slug);
            const lessonHref = `/learn/${slug}/${courseSlug}/${lesson.slug}`;

            return (
              <Link
                key={lesson.slug}
                href={lessonHref}
                aria-current={isCurrent ? "page" : undefined}
                className={`group flex items-center justify-between rounded-xl p-2.5 text-xs transition-all relative ${
                  isCurrent
                    ? "bg-emerald-50 font-bold text-emerald-950 border border-emerald-300 shadow-2xs"
                    : isCompleted
                    ? "text-slate-700 hover:bg-slate-50"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Tutorialspoint Green Dot Active Indicator */}
                  <span
                    className={`h-2 w-2 rounded-full shrink-0 ${
                      isCurrent
                        ? "bg-emerald-500 animate-pulse"
                        : isCompleted
                        ? "bg-emerald-600"
                        : "bg-slate-300"
                    }`}
                  />

                  <span className="truncate text-xs font-semibold leading-snug">
                    {lesson.title}
                  </span>
                </div>

                {/* Right Arrow on Hover (Signature Tutorialspoint UX) */}
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-all ${
                  isCurrent ? "text-emerald-600 opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                }`} />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}