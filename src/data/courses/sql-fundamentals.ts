import type { CourseDetail, ExamQuestion } from "../coursesData";

export const sqlFundamentalsCourse: CourseDetail = {
  slug: "sql-fundamentals",
  categorySlug: "databases",
  title: "Fondamentaux SQL & Modélisation Relationnelle",
  description: "Maîtrisez le langage SQL : SELECT, JOIN, GROUP BY, Transactions ACID et modélisation MCD/MLD.",
  level: "Débutant",
  icon: "🗃️",
  modules: [
    {
      title: "Module 1: Requêtes & Jointures SQL",
      lessons: [
        {
          slug: "select-join-et-group-by",
          title: "1.1 Requêtes Complex, Jointures & Normalisation",
          duration: "18 min",
          description: "Écrivez des requêtes SQL performantes et modélisez des schémas relationnels.",
          objectives: [
            "Maîtriser les jointures INNER, LEFT, RIGHT et FULL.",
            "Utiliser les fonctions d'agrégation et HAVING.",
            "Appliquer les formes normales (1NF, 2NF, 3NF)."
          ],
          content: [
            "## Jointures SQL",
            "```sql\nSELECT u.name, o.total_price\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE o.created_at >= '2026-01-01';\n```",
            "",
            "## Propriétés ACID",
            "- **Atomique :** La transaction réussit entièrement ou échoue entièrement.",
            "- **Cohérente :** Respecte toutes les contraintes du schéma.",
            "- **Isolée :** Les transactions simultanées n'interfèrent pas.",
            "- **Durable :** Les données validées sont conservées même après une panne."
          ],
          examples: [
            "Utilisation d'index sur les clés étrangères pour accélérer les jointures."
          ],
          practice: [
            "Écrivez une requête SQL calculant le montant moyen des commandes par utilisateur."
          ],
          quiz: [
            {
              question: "Quelle jointure retourne TOUTES les lignes de la table de gauche, même sans correspondance dans la table de droite ?",
              options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "CROSS JOIN"],
              answer: 0,
              explanation: "LEFT JOIN conserve l'intégralité des enregistrements de la table de gauche."
            }
          ]
        }
      ]
    }
  ]
};

export const sqlFundamentalsExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle clause SQL permet de filtrer le résultat de fonctions d'agrégation (ex: COUNT, SUM) après un GROUP BY ?",
    options: ["HAVING", "WHERE", "ORDER BY", "FILTER"],
    correctAnswer: 0
  }
];
