import type { CourseDetail, ExamQuestion } from "../coursesData";

export const quizCultureGeneraleCourse: CourseDetail = {
  slug: "quiz-culture-generale",
  categorySlug: "culture-generale",
  title: "Quiz & Test de Culture Générale",
  description: "Testez et entraînez vos connaissances avec des défis variés en histoire, science, géographie et arts.",
  level: "Intermédiaire",
  icon: "🧠",
  modules: [
    {
      title: "Module 1: Test Multi-Domaines",
      lessons: [
        {
          slug: "defi-culture-generale",
          title: "1.1 Défi de Culture Générale",
          duration: "15 min",
          description: "Relevez le défi de culture générale couvrant toutes les thématiques de l'académie.",
          objectives: [
            "Évaluer ses connaissances générales.",
            "Découvrir des faits captivants.",
            "Préparer les épreuves de concours."
          ],
          content: [
            "## Bienvenue au Grand Quiz de Culture Générale !",
            "La culture générale est une force pour l'esprit critique, la curiosité intellectuelle et la réussite professionnelle."
          ],
          examples: [
            "Test de rapidité et précision sur des questions d'actualité et d'histoire."
          ],
          practice: [
            "Répondez au quiz ci-dessous et obtenez un score parfait !"
          ],
          quiz: [
            {
              question: "Quelle est la capitale officielle de la République démocratique du Congo ?",
              options: ["Kinshasa", "Lubumbashi", "Goma", "Kisangani"],
              answer: 0,
              explanation: "Kinshasa est la capitale et la plus grande ville de la RDC."
            }
          ]
        }
      ]
    }
  ]
};

export const quizCultureGeneraleExamQuestions: ExamQuestion[] = [
  {
    question: "Combien d'États membres composent aujourd'hui l'Union Africaine (UA) ?",
    options: ["55 États", "28 États", "40 États", "60 États"],
    correctAnswer: 0
  }
];
