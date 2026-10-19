import type { CourseDetail, ExamQuestion } from "../coursesData";

export const histoireRdcCourse: CourseDetail = {
  slug: "histoire-rdc",
  categorySlug: "culture-generale",
  title: "Histoire de la RDC",
  description: "Découvrez la riche histoire de la République démocratique du Congo : des grands royaumes précoloniaux à l'ère contemporaine.",
  level: "Débutant",
  icon: "🇨🇩",
  modules: [
    {
      title: "Module 1: Royaumes Anciens & Période Contemporaine",
      lessons: [
        {
          slug: "royaumes-kongo-luba-lunda",
          title: "1.1 Les Grands Royaumes (Kongo, Luba, Lunda) & l'Indépendance",
          duration: "16 min",
          description: "Explorez l'héritage précolonial, l'indépendance de 1960 et les figures historiques majeures.",
          objectives: [
            "Connaître l'organisation des Royaumes Kongo, Luba et Lunda.",
            "Comprendre les étapes vers l'indépendance du 30 juin 1960.",
            "Découvrir le rôle d'Émile Lumumba, Kasa-Vubu et les événements clés."
          ],
          content: [
            "## Les Grands Empires Précoloniaux",
            "- **Le Royaume du Kongo :** Fondé vers le XIVe siècle, s'étendant autour du fleuve Congo.",
            "- **L'Empire Luba et l'Empire Lunda :** Structures étatiques développées réputées pour leur organisation politique et artistique."
          ],
          examples: [
            "Proclamation de l'indépendance de la RDC le 30 juin 1960."
          ],
          practice: [
            "Rédigez une fiche synthétique sur le rôle des figures de l'indépendance congolaise."
          ],
          quiz: [
            {
              question: "En quelle année la République démocratique du Congo a-t-elle proclamé son indépendance ?",
              options: ["1960", "1950", "1975", "1980"],
              answer: 0,
              explanation: "La RDC a accédé à l'indépendance le 30 juin 1960."
            }
          ]
        }
      ]
    }
  ]
};

export const histoireRdcExamQuestions: ExamQuestion[] = [
  {
    question: "Quel grand héros national a prononcé le célèbre discours de l'indépendance le 30 juin 1960 ?",
    options: ["Patrice Émery Lumumba", "Joseph Kasa-Vubu", "Mobutu Sese Seko", "Laurent-Désiré Kabila"],
    correctAnswer: 0
  }
];
