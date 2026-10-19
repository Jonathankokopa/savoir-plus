import { CATEGORIES_DATA } from "./categoriesData";
import { ALL_COURSES, ALL_EXAMS } from "./courses";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Lesson {
  slug: string;
  title: string;
  duration: string;
  description: string;
  objectives: string[];
  content: string[];
  examples?: string[];
  practice?: string[];
  quiz?: QuizQuestion[];
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface CourseDetail {
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  icon: string;
  modules: Module[];
}

export interface ExamQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const HANDCRAFTED_COURSES: Record<
  string,
  Record<string, CourseDetail>
> = ALL_COURSES;

const HANDCRAFTED_EXAMS: Record<string, ExamQuestion[]> = ALL_EXAMS;

export function getCourseData(
  categorySlug: string,
  courseSlug: string
): CourseDetail {
  const handcrafted = HANDCRAFTED_COURSES[categorySlug]?.[courseSlug];

  if (handcrafted) {
    return handcrafted;
  }

  const category = CATEGORIES_DATA[categorySlug];

  const courseInfo = category?.courses.find(
    (course) => course.slug === courseSlug
  ) || {
    slug: courseSlug,
    title: courseSlug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    description: `Master complete professional skills for ${courseSlug}.`,
    level: "Intermédiaire" as const,
    lessons: 6,
    icon: "🎓",
  };

  return {
    slug: courseSlug,
    categorySlug,
    title: courseInfo.title,
    description: courseInfo.description,
    level: courseInfo.level as
      | "Débutant"
      | "Intermédiaire"
      | "Avancé",
    icon: courseInfo.icon || "📚",
    modules: [
      {
        title: `Module 1: Fundamentals of ${courseInfo.title}`,
        lessons: [
          {
            slug: "introduction-et-fondamentaux",
            title: "1. Introduction & Core Concepts",
            duration: "8 min",
            description: `Understand core concepts and professional application of ${courseInfo.title}.`,
            objectives: [
              `Understand the core concepts of ${courseInfo.title}.`,
              "Apply the main concepts in a practical context.",
            ],
            content: [
              `## Introduction to ${courseInfo.title}`,
              `Welcome to **${courseInfo.title}**.`,
              "Learn practical skills applicable directly in the real world.",
            ],
            practice: [
              "Review the lesson.",
              "Reproduce the main example.",
              "Complete a small practical exercise.",
            ],
          },
        ],
      },
    ],
  };
}

export function getExamQuestions(courseSlug: string): ExamQuestion[] {
  if (HANDCRAFTED_EXAMS[courseSlug]) {
    return HANDCRAFTED_EXAMS[courseSlug];
  }

  const cleanName = courseSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return [
    {
      question: `Quel est l'objectif professionnel majeur de la maîtrise de ${cleanName} ?`,
      options: [
        `Développer des solutions efficaces et conformes aux besoins du secteur`,
        `Travailler sans méthode`,
        `Ignorer la documentation`,
        `Éviter les technologies modernes`,
      ],
      correctAnswer: 0,
    },
    {
      question: `Quelle est une bonne pratique pour maintenir un projet ${cleanName} ?`,
      options: [
        "Écrire un travail clair, structuré et documenté",
        "Supprimer les sauvegardes",
        "Ignorer les standards",
        "Ne jamais tester",
      ],
      correctAnswer: 0,
    },
    {
      question: `Quel est le rôle des tests dans ${cleanName} ?`,
      options: [
        "Détecter et corriger les problèmes",
        "Empêcher toute livraison",
        "Éviter toute documentation",
        "Remplacer l'analyse",
      ],
      correctAnswer: 0,
    },
    {
      question: `Quel est le minimum requis pour le certificat ${cleanName} ?`,
      options: ["70%", "50%", "20%", "100%"],
      correctAnswer: 0,
    },
  ];
}

export function getCertificateInfo(courseSlug: string) {
  let foundCategorySlug = "web-dev";
  let foundCourseTitle = courseSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
  let foundCategoryTitle = "Développement & Technologies";
  let totalLessons = 6;

  for (const [catSlug, catData] of Object.entries(CATEGORIES_DATA)) {
    const matched = catData.courses.find(
      (course) => course.slug === courseSlug
    );

    if (matched) {
      foundCategorySlug = catSlug;
      foundCourseTitle = matched.title;
      foundCategoryTitle = catData.title;
      totalLessons = matched.lessons || 6;
      break;
    }
  }

  const handcrafted = HANDCRAFTED_COURSES[foundCategorySlug]?.[courseSlug];
  if (handcrafted) {
    foundCategorySlug = handcrafted.categorySlug;
    foundCourseTitle = handcrafted.title;
    foundCategoryTitle =
      CATEGORIES_DATA[handcrafted.categorySlug]?.title || foundCategoryTitle;
    totalLessons = handcrafted.modules.reduce(
      (total, module) => total + module.lessons.length,
      0
    );
  }

  return {
    courseTitle: foundCourseTitle,
    pathTitle: foundCategoryTitle,
    totalLessons,
    pathSlug: foundCategorySlug,
  };
}
