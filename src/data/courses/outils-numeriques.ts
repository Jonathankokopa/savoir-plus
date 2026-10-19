import type { CourseDetail, ExamQuestion } from "../coursesData";

export const outilsNumeriquesCourse: CourseDetail = {
  slug: "outils-numeriques",
  categorySlug: "bureautique",
  title: "Outils Numériques & Collaboration",
  description: "Découvrez les outils collaboratifs modernes : Google Workspace, Slack, Notion et Trello.",
  level: "Débutant",
  icon: "🧰",
  modules: [
    {
      title: "Module 1: Travail Collaboratif à Distance",
      lessons: [
        {
          slug: "notion-slack-et-cloud",
          title: "1.1 Gestion de Projets & Prise de Notes Collaboratives",
          duration: "14 min",
          description: "Centralisez les connaissances de votre équipe et communiquez sans surcharge d'e-mails.",
          objectives: [
            "Organiser un espace de travail Notion.",
            "Utiliser les canaux et intégrations Slack.",
            "Gérer les tâches avec la méthode Kanban (Trello/Jira)."
          ],
          content: [
            "## La Révolution Asynchrone",
            "Les outils modernes réduisent les réunions inutiles au profit d'une documentation partagée et réactive.",
            "- **Notion :** Wiki d'entreprise, bases de données interconnectées.",
            "- **Slack / Teams :** Messagerie instantanée par canaux thématiques.",
            "- **Trello / Asana :** Suivi visuel des projets."
          ],
          examples: [
            "Tableau Kanban : À faire -> En cours -> En revue -> Terminé."
          ],
          practice: [
            "Créez un tableau Kanban Trello pour gérer les étapes de votre projet actuel."
          ],
          quiz: [
            {
              question: "Quelle méthode de gestion visuelle des tâches utilise des colonnes 'À faire', 'En cours', 'Terminé' ?",
              options: ["La méthode Kanban", "La méthode Waterfall", "Le PERT", "Le GANTT"],
              answer: 0,
              explanation: "Kanban visualise le flux de travail et limite le travail en cours."
            }
          ]
        }
      ]
    }
  ]
};

export const outilsNumeriquesExamQuestions: ExamQuestion[] = [
  {
    question: "Quel outil de prise de notes et de base de données modulaire est idéal pour créer un wiki d'équipe ?",
    options: ["Notion", "Paint", "Calculator", "Bloc-notes"],
    correctAnswer: 0
  }
];
