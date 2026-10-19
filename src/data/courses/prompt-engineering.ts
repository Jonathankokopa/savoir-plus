import type { CourseDetail, ExamQuestion } from "../coursesData";

export const promptEngineeringCourse: CourseDetail = {
  slug: "prompt-engineering",
  categorySlug: "ai-ml",
  title: "Prompt Engineering pour LLMs",
  description: "Maîtrisez l'art de formuler des consignes précises pour maximiser la performance des modèles comme ChatGPT et Gemini.",
  level: "Débutant",
  icon: "💬",
  modules: [
    {
      title: "Module 1: Techniques de Prompting",
      lessons: [
        {
          slug: "structure-d-un-prompt-efficace",
          title: "1.1 Rôle, Contexte, Instruction et Format",
          duration: "15 min",
          description: "Apprenez les 4 piliers d'un prompt parfait.",
          objectives: [
            "Appliquer la méthode RCIF (Rôle, Contexte, Instruction, Format).",
            "Utiliser le Few-Shot Prompting.",
            "Éviter les hallucinations des modèles."
          ],
          content: [
            "## La Formule d'un Prompt Réussi",
            "- **Rôle :** 'Tu es un développeur expert TypeScript...'",
            "- **Contexte :** 'Je souhaite optimiser ma fonction...' ",
            "- **Instruction :** 'Refactorise ce code avec async/await...'",
            "- **Format :** 'Retourne uniquement un bloc de code avec des commentaires.'"
          ],
          examples: [
            "Prompt : 'Agis en expert SEO. Analyse le titre de ma page et propose 3 variantes optimisées.'"
          ],
          practice: [
            "Rédigez un prompt Few-Shot demandant à l'IA de classer des avis clients en Positif/Négatif."
          ],
          quiz: [
            {
              question: "Qu'est-ce que le 'Few-Shot Prompting' ?",
              options: [
                "Fournir quelques exemples au modèle dans le prompt pour guider le format de sortie",
                "Appuyer sur entrée plusieurs fois",
                "Limiter le prompt à 5 mots",
                "Utiliser des images"
              ],
              answer: 0,
              explanation: "Le Few-Shot Prompting guide l'IA en lui montrant des paires d'exemples d'entrées et de sorties."
            }
          ]
        }
      ]
    }
  ]
};

export const promptEngineeringExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle technique incite l'IA à décomposer son raisonnement étape par étape (Chain of Thought) ?",
    options: ["Demander 'Raisonne étape par étape'", "Utiliser des majuscules", "Changer de modèle", "Écrire en anglais"],
    correctAnswer: 0
  }
];
