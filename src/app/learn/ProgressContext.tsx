"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ProgressMap = Record<string, string[]>;

export type ExamResult = {
  attempts: number;
  bestScore: number;
  lastScore: number;
  passed: boolean;
};

type ExamResultsMap = Record<string, ExamResult>;

type ProgressContextType = {
  completedLessons: ProgressMap;
  completedQuizzes: ProgressMap;

  isLessonCompleted: (
    courseKey: string,
    lessonSlug: string,
  ) => boolean;

  completeLesson: (
    courseKey: string,
    lessonSlug: string,
  ) => void;

  getCompletedCount: (
    courseKey: string,
  ) => number;

  isQuizCompleted: (
    courseKey: string,
    quizSlug: string,
  ) => boolean;

  completeQuiz: (
    courseKey: string,
    quizSlug: string,
  ) => void;

  getCompletedQuizCount: (
    courseKey: string,
  ) => number;

  submitExam: (
    courseKey: string,
    score: number,
  ) => void;

  getExamResult: (
    courseKey: string,
  ) => ExamResult;

  isExamPassed: (
    courseKey: string,
  ) => boolean;
};

const ProgressContext =
  createContext<ProgressContextType | null>(null);

const STORAGE_KEY = "savoir-plus-progress";
const QUIZ_STORAGE_KEY = "savoir-plus-quizzes";
const EXAM_STORAGE_KEY = "savoir-plus-exams";

const DEFAULT_EXAM_RESULT: ExamResult = {
  attempts: 0,
  bestScore: 0,
  lastScore: 0,
  passed: false,
};

export function ProgressProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [completedLessons, setCompletedLessons] =
    useState<ProgressMap>({});

  const [completedQuizzes, setCompletedQuizzes] =
    useState<ProgressMap>({});

  const [examResults, setExamResults] =
    useState<ExamResultsMap>({});

  const [isLoaded, setIsLoaded] =
    useState(false);

  useEffect(() => {
    const storedProgress =
      localStorage.getItem(STORAGE_KEY);

    if (storedProgress) {
      try {
        setCompletedLessons(
          JSON.parse(storedProgress),
        );
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    const storedQuizzes =
      localStorage.getItem(QUIZ_STORAGE_KEY);

    if (storedQuizzes) {
      try {
        setCompletedQuizzes(
          JSON.parse(storedQuizzes),
        );
      } catch {
        localStorage.removeItem(QUIZ_STORAGE_KEY);
      }
    }

    const storedExams =
      localStorage.getItem(EXAM_STORAGE_KEY);

    if (storedExams) {
      try {
        setExamResults(
          JSON.parse(storedExams),
        );
      } catch {
        localStorage.removeItem(EXAM_STORAGE_KEY);
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(completedLessons),
    );
  }, [completedLessons, isLoaded]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    localStorage.setItem(
      QUIZ_STORAGE_KEY,
      JSON.stringify(completedQuizzes),
    );
  }, [completedQuizzes, isLoaded]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    localStorage.setItem(
      EXAM_STORAGE_KEY,
      JSON.stringify(examResults),
    );
  }, [examResults, isLoaded]);

  function isLessonCompleted(
    courseKey: string,
    lessonSlug: string,
  ) {
    return (
      completedLessons[courseKey]?.includes(
        lessonSlug,
      ) ?? false
    );
  }

  function completeLesson(
    courseKey: string,
    lessonSlug: string,
  ) {
    setCompletedLessons((current) => {
      const existing =
        current[courseKey] ?? [];

      if (existing.includes(lessonSlug)) {
        return current;
      }

      return {
        ...current,
        [courseKey]: [
          ...existing,
          lessonSlug,
        ],
      };
    });
  }

  function getCompletedCount(
    courseKey: string,
  ) {
    return (
      completedLessons[courseKey]?.length ?? 0
    );
  }

  function isQuizCompleted(
    courseKey: string,
    quizSlug: string,
  ) {
    return (
      completedQuizzes[courseKey]?.includes(
        quizSlug,
      ) ?? false
    );
  }

  function completeQuiz(
    courseKey: string,
    quizSlug: string,
  ) {
    setCompletedQuizzes((current) => {
      const existing =
        current[courseKey] ?? [];

      if (existing.includes(quizSlug)) {
        return current;
      }

      return {
        ...current,
        [courseKey]: [
          ...existing,
          quizSlug,
        ],
      };
    });
  }

  function getCompletedQuizCount(
    courseKey: string,
  ) {
    return (
      completedQuizzes[courseKey]?.length ?? 0
    );
  }

  function submitExam(
    courseKey: string,
    score: number,
  ) {
    setExamResults((current) => {
      const previous =
        current[courseKey] ??
        DEFAULT_EXAM_RESULT;

      return {
        ...current,
        [courseKey]: {
          attempts: previous.attempts + 1,
          bestScore: Math.max(
            previous.bestScore,
            score,
          ),
          lastScore: score,
          passed: score >= 70,
        },
      };
    });
  }

  function getExamResult(
    courseKey: string,
  ): ExamResult {
    return (
      examResults[courseKey] ??
      DEFAULT_EXAM_RESULT
    );
  }

  function isExamPassed(
    courseKey: string,
  ) {
    return (
      examResults[courseKey]?.passed ?? false
    );
  }

  return (
    <ProgressContext.Provider
      value={{
        completedLessons,
        completedQuizzes,

        isLessonCompleted,
        completeLesson,
        getCompletedCount,

        isQuizCompleted,
        completeQuiz,
        getCompletedQuizCount,

        submitExam,
        getExamResult,
        isExamPassed,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(
    ProgressContext,
  );

  if (!context) {
    throw new Error(
      "useProgress doit être utilisé à l'intérieur de ProgressProvider.",
    );
  }

  return context;
}