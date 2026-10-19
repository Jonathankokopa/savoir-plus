import type { CourseDetail, ExamQuestion } from "../coursesData";

export const grandesCivilisationsCourse: CourseDetail = {
  slug: "grandes-civilisations",
  categorySlug: "culture-generale",
  title: "Les Grandes Civilisations",
  description: "Découvrez l'Égypte antique, la Mésopotamie, la Grèce antique, l'Empire Romain, la Chine impériale et les civilisations précolombiennes.",
  level: "Intermédiaire",
  icon: "🏛️",
  modules: [
    {
      title: "Module 1: Les Berceaux de l'Humanité",
      lessons: [
        {
          slug: "egypte-et-mesopotamie",
          title: "1.1 L'Égypte Antique & la Mésopotamie",
          duration: "15 min",
          description: "Découvrez l'invention de l'écriture (cunéiforme et hiéroglyphes) et les pyramides.",
          objectives: [
            "Comprendre l'émergence de la Mésopotamie entre le Tigre et l'Euphrate.",
            "Découvrir la civilisation des Pharaons et les Pyramides de Gizeh.",
            "Comprendre le Code de Hammurabi."
          ],
          content: [
            "## L'Invention de l'Écriture",
            "Née vers 3400 av. J.-C. en Mésopotamie (écriture cunéiforme) et en Égypte (hiéroglyphes), marquant le passage de la Préhistoire à l'Histoire."
          ],
          examples: [
            "Le Code de Hammurabi : l'un des plus anciens textes de lois écrites préservés."
          ],
          practice: [
            "Comparez l'organisation politique de la cité d'Athènes et de la République Romaine."
          ],
          quiz: [
            {
              question: "Quel système d'écriture antique a été inventé en Mésopotamie vers 3400 av. J.-C. ?",
              options: ["L'écriture cunéiforme", "Les hiéroglyphes", "L'alphabet latin", "Le grec ancien"],
              answer: 0,
              explanation: "L'écriture cunéiforme (en forme de coins) est née chez les Sumériens."
            }
          ]
        }
      ]
    }
  ]
};

export const grandesCivilisationsExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle cité grecque de l'Antiquité est considérée comme le berceau de la démocratie directe ?",
    options: ["Athènes", "Sparte", "Thèbes", "Corinthe"],
    correctAnswer: 0
  }
];
