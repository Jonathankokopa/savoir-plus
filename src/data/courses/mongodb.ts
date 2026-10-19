import type { CourseDetail, ExamQuestion } from "../coursesData";

export const mongodbCourse: CourseDetail = {
  slug: "mongodb",
  categorySlug: "databases",
  title: "MongoDB & Bases NoSQL orientées Documents",
  description: "Découvrez MongoDB : Collections, Documents BSON, Aggregation Pipeline et Sharding.",
  level: "Intermédiaire",
  icon: "🍃",
  modules: [
    {
      title: "Module 1: Modélisation NoSQL & Aggregation",
      lessons: [
        {
          slug: "documents-bson-et-aggregation-pipeline",
          title: "1.1 Modélisation Orientée Documents & Pipelines",
          duration: "18 min",
          description: "Concevez des bases flexibles et manipulez le framework d'agrégation.",
          objectives: [
            "Comprendre la différence entre schémas rigides (SQL) et souples (NoSQL).",
            "Choisir entre Documents Imbriqués et Références ($lookup).",
            "Manipuler le pipeline d'agrégation ($match, $group, $project)."
          ],
          content: [
            "## Pipeline d'Agrégation MongoDB",
            "```javascript\ndb.orders.aggregate([\n  { $match: { status: 'completed' } },\n  { $group: { _id: '$customerId', totalSpent: { $sum: '$amount' } } },\n  { $sort: { totalSpent: -1 } }\n]);\n```"
          ],
          examples: [
            "Imbrication de sous-documents d'adresses directement dans le document `user`."
          ],
          practice: [
            "Écrivez une étape d'agrégation MongoDB pour calculer le prix moyen des produits vendus."
          ],
          quiz: [
            {
              question: "Sous quel format binaire dérivé du JSON MongoDB stocke-t-il les documents en base ?",
              options: ["BSON", "XML", "Protobuf", "YAML"],
              answer: 0,
              explanation: "BSON (Binary JSON) permet un encodage binaire rapide avec des types supplémentaires."
            }
          ]
        }
      ]
    }
  ]
};

export const mongodbExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle étape de l'Aggregation Pipeline MongoDB équivaut à la clause WHERE en SQL ?",
    options: ["$match", "$group", "$project", "$unwind"],
    correctAnswer: 0
  }
];
