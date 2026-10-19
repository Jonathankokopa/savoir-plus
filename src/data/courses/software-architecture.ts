import type { CourseDetail, ExamQuestion } from "../coursesData";

export const softwareArchitectureCourse: CourseDetail = {
  slug: "software-architecture",
  categorySlug: "software-engineering",
  title: "Architecture Logicielle & Microservices",
  description: "Explorez Clean Architecture, Hexagonale, Principes SOLID, DDD et architectures Microservices.",
  level: "Avancé",
  icon: "🏗️",
  modules: [
    {
      title: "Module 1: Principes SOLID & Clean Architecture",
      lessons: [
        {
          slug: "solid-et-clean-architecture",
          title: "1.1 Principes SOLID & Architecture Hexagonale",
          duration: "20 min",
          description: "Concevez des applications découplées, testables et maintenables.",
          objectives: [
            "Appliquer les 5 principes SOLID.",
            "Isoler le domaine métier des détails d'infrastructure (Ports & Adapters).",
            "Distinguer Monolithe Modulaire et Microservices."
          ],
          content: [
            "## Les Principes SOLID",
            "- **S (Single Responsibility) :** Une classe ne doit avoir qu'une seule raison de changer.",
            "- **O (Open/Closed) :** Ouvert à l'extension, fermé à la modification.",
            "- **L (Liskov Substitution) :** Les sous-types doivent être substituables à leurs types de base.",
            "- **I (Interface Segregation) :** Préférer plusieurs interfaces spécifiques.",
            "- **D (Dependency Inversion) :** Dépendre d'abstractions, pas de détails."
          ],
          examples: [
            "Injection de dépendances pour remplacer un Repository SQL par un FakeRepository pour les tests unitaires."
          ],
          practice: [
            "Refactorisez un composant couplé à une base de données en introduisant une interface d'inversion de dépendance."
          ],
          quiz: [
            {
              question: "Que stipule le principe 'D' (Dependency Inversion) de SOLID ?",
              options: [
                "Les modules de haut niveau ne doivent pas dépendre de modules de bas niveau, mais tous deux doivent dépendre d'abstractions",
                "Les dépendances doivent être supprimées",
                "Toutes les classes doivent être statiques",
                "Utiliser uniquement du code procédural"
              ],
              answer: 0,
              explanation: "L'inversion de dépendance garantit un faible couplage et une testabilité maximale."
            }
          ]
        }
      ]
    }
  ]
};

export const softwareArchitectureExamQuestions: ExamQuestion[] = [
  {
    question: "Quel terme désigne l'architecture découpant une application en composants découplés qui communiquent via des APIs réseau isolées ?",
    options: ["Microservices", "Monolithe", "Spaghetti Code", "Scripting"],
    correctAnswer: 0
  }
];
