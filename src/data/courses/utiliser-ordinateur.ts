import type { CourseDetail, ExamQuestion } from "../coursesData";

export const utiliserOrdinateurCourse: CourseDetail = {
  slug: "utiliser-ordinateur",
  categorySlug: "bureautique",
  title: "Bien Utiliser un Ordinateur",
  description: "Maîtrisez les bases du système d'exploitation (Windows/macOS), la gestion des fichiers, raccourcis et sécurité.",
  level: "Débutant",
  icon: "💻",
  modules: [
    {
      title: "Module 1: Prise en main et Organisation",
      lessons: [
        {
          slug: "fichiers-raccourcis-et-securite-base",
          title: "1.1 Arborescence de Fichiers & Raccourcis Clés",
          duration: "12 min",
          description: "Organisez vos dossiers de manière professionnelle et gagnez du temps au quotidien.",
          objectives: [
            "Naviguer efficacement dans l'explorateur de fichiers.",
            "Maîtriser les raccourcis clavier essentiels (Ctrl+C, Ctrl+V, Alt+Tab).",
            "Sauvegarder ses données sur le Cloud ou support externe."
          ],
          content: [
            "## Raccourcis Clavier Incontournables",
            "- **Windows + E :** Ouvrir l'Explorateur de fichiers.",
            "- **Ctrl + C / Ctrl + V :** Copier / Coller.",
            "- **Ctrl + Z :** Annuler la dernière action.",
            "- **Alt + Tab :** Basculer entre les applications ouvertes."
          ],
          examples: [
            "Organisation claire : `Documents/Projets/2026/Factures/`."
          ],
          practice: [
            "Créez une structure de dossiers propre pour organiser vos cours."
          ],
          quiz: [
            {
              question: "Quel raccourci clavier permet de copier un élément sélectionné sous Windows ?",
              options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + P"],
              answer: 0,
              explanation: "Ctrl + C est le raccourci universel pour copier un élément."
            }
          ]
        }
      ]
    }
  ]
};

export const utiliserOrdinateurExamQuestions: ExamQuestion[] = [
  {
    question: "Quel raccourci clavier permet d'annuler immédiatement la dernière action effectuée ?",
    options: ["Ctrl + Z", "Ctrl + A", "Ctrl + S", "Ctrl + Y"],
    correctAnswer: 0
  }
];
