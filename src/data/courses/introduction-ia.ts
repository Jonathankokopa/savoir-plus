import type { CourseDetail, ExamQuestion } from "../coursesData";

export const introIaCourse: CourseDetail = {
  slug: "introduction-ia",
  categorySlug: "ai-ml",
  title: "Introduction à l'Intelligence Artificielle",
  description: "Comprenez les fondamentaux de l'IA, des LLM et de la transformation numérique.",
  level: "Débutant",
  icon: "🤖",
  modules: [
    {
      title: "Module 1: Comprendre l'IA Moderne",
      lessons: [
        {
          slug: "panorama-de-ia",
          title: "1.1 Qu'est-ce que l'IA ?",
          duration: "12 min",
          description: "Découvrez la différence entre IA symbolique, Machine Learning et IA Générative.",
          objectives: [
            "Comprendre l'historique et l'évolution de l'IA.",
            "Distinguer IA forte et IA faible.",
            "Découvrir les cas d'usage réels en entreprise."
          ],
          content: [
            "## Bienvenue dans le monde de l'IA",
            "L'intelligence artificielle désigne l'ensemble des théories et des techniques mises en œuvre en vue de réaliser des machines capables de simuler l'intelligence humaine."
          ],
          examples: [
            "Exemples : Reconnaissance vocale, classification d'images, recommandations Netflix."
          ],
          practice: [
            "Identifiez 3 outils basés sur l'IA que vous utilisez au quotidien."
          ],
          quiz: [
            {
              question: "Quel domaine de l'IA englobe les modèles capables de produire du texte, des images ou du code ?",
              options: ["IA Générative", "IA Réseau", "IA Statique", "IA Mécanique"],
              answer: 0,
              explanation: "L'IA générative produit du contenu original à partir de données d'entraînement."
            }
          ]
        }
      ]
    }
  ]
};

export const introIaExamQuestions: ExamQuestion[] = [
  {
    question: "Quel test historique proposait d'évaluer la capacité d'une machine à imiter la conversation humaine ?",
    options: ["Test de Turing", "Test de Voight-Kampff", "Test de Claude", "Test d'Euler"],
    correctAnswer: 0
  }
];
