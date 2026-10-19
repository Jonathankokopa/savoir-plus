import type { CourseDetail, ExamQuestion } from "../coursesData";

export const sciencesGeneralesCourse: CourseDetail = {
  slug: "sciences-generales",
  categorySlug: "culture-generale",
  title: "Sciences Générales & Découvertes",
  description: "Explorez la biologie, la physique, la chimie, la génétique et les grands principes scientifiques.",
  level: "Débutant",
  icon: "🔬",
  modules: [
    {
      title: "Module 1: Principes de la Science Moderne",
      lessons: [
        {
          slug: "atomes-adn-et-lois-physiques",
          title: "1.1 Atomes, ADN & Lois de Newton",
          duration: "14 min",
          description: "Découvrez les composants fondamentaux de la matière et du vivant.",
          objectives: [
            "Comprendre la structure de l'atome (protons, neutrons, électrons).",
            "Découvrir la double hélice de l'ADN.",
            "Assimiler les 3 lois du mouvement de Newton."
          ],
          content: [
            "## La Structure du Vivant",
            "L'ADN (Acide Désoxyribonucléique) contient le code génétique de tous les organismes vivants.",
            "Formé de 4 bases azotées : Adénine (A), Thymine (T), Cytosine (C), Guanine (G)."
          ],
          examples: [
            "La théorie de la relativité restreinte d'Einstein : E = mc²."
          ],
          practice: [
            "Expliquez le fonctionnement de la méthode scientifique basée sur l'expérience."
          ],
          quiz: [
            {
              question: "Quelles sont les 4 bases azotées qui composent la molécule d'ADN ?",
              options: ["Adénine, Thymine, Cytosine, Guanine", "Carbone, Hydrogène, Oxygène, Azote", "Proton, Neutron, Électron, Photon", "Alpha, Bêta, Gamma, Delta"],
              answer: 0,
              explanation: "A, T, C et G constituent les briques de l'information génétique."
            }
          ]
        }
      ]
    }
  ]
};

export const sciencesGeneralesExamQuestions: ExamQuestion[] = [
  {
    question: "Quel savant a découvert la loi de la gravitation universelle après la légende d'une pomme tombée d'un arbre ?",
    options: ["Isaac Newton", "Albert Einstein", "Galilée", "Louis Pasteur"],
    correctAnswer: 0
  }
];
