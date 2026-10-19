import type { CourseDetail, ExamQuestion } from "../coursesData";

export const postgresqlCourse: CourseDetail = {
  slug: "postgresql",
  categorySlug: "databases",
  title: "PostgreSQL & Fonctionnalités Avancées",
  description: "Découvrez PostgreSQL : JSONB, Index GIN/GiST, Vues Matérialisées et Réplication.",
  level: "Intermédiaire",
  icon: "🐘",
  modules: [
    {
      title: "Module 1: PostgreSQL Avancé",
      lessons: [
        {
          slug: "jsonb-index-et-fonctions",
          title: "1.1 Types JSONB, Indexation & Triggers",
          duration: "18 min",
          description: "Alliez la puissance du relationnel et la souplesse du NoSQL avec JSONB dans PostgreSQL.",
          objectives: [
            "Stocker et interroger des objets semi-structurés avec JSONB.",
            "Créer des index GIN pour des recherches textuelles ultra-rapides.",
            "Écrire des fonctions et déclencheurs PL/pgSQL."
          ],
          content: [
            "## JSONB dans PostgreSQL",
            "JSONB stocke les données JSON dans un format binaire décomposé, permettant des indexations directes avec GIN.",
            "",
            "```sql\nSELECT data->>'title' FROM articles WHERE data @> '{\"status\": \"published\"}';\n```"
          ],
          examples: [
            "Création d'un index GIN sur un champ JSONB : `CREATE INDEX idx_articles_data ON articles USING GIN (data);`"
          ],
          practice: [
            "Rédigez une requête interrogeant un champ JSONB imbriqué."
          ],
          quiz: [
            {
              question: "Quel type de données PostgreSQL permet de stocker du JSON au format binaire indexable ?",
              options: ["JSONB", "VARCHAR", "TEXT", "BLOB"],
              answer: 0,
              explanation: "JSONB offre un stockage binaire et supporte des indexations avancées comme GIN."
            }
          ]
        }
      ]
    }
  ]
};

export const postgresqlExamQuestions: ExamQuestion[] = [
  {
    question: "Quel type d'index est recommandé dans PostgreSQL pour accélérer la recherche plein texte et les requêtes JSONB ?",
    options: ["Index GIN", "Index B-Tree", "Index Hash", "Index BRIN"],
    correctAnswer: 0
  }
];
