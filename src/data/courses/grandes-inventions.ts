import type { CourseDetail, ExamQuestion } from "../coursesData";

export const grandesInventionsCourse: CourseDetail = {
  slug: "grandes-inventions",
  categorySlug: "culture-generale",
  title: "Les Grandes Inventions de l'Histoire",
  description: "Découvrez la roue, l'imprimerie Gutenberg, la machine à vapeur, l'électricité, le transistor et Internet.",
  level: "Débutant",
  icon: "💡",
  modules: [
    {
      title: "Module 1: Révolution Technologiques",
      lessons: [
        {
          slug: "imprimerie-vapeur-et-transistor",
          title: "1.1 De Gutenberg à la Révolution Numérique",
          duration: "14 min",
          description: "Suivez l'histoire des ruptures technologiques qui ont transformé l'humanité.",
          objectives: [
            "Comprendre l'impact de l'imprimerie à caractères mobiles (Gutenberg, ~1440).",
            "Découvrir la Révolution Industrielle (Machine à vapeur de James Watt).",
            "Comprendre l'invention du transistor (1947), brique fondamentale de l'informatique."
          ],
          content: [
            "## Grandes Inventions Majeures",
            "- **Imprimerie (1440) :** Démocratisation de l'accès aux livres et au savoir.",
            "- **Machine à vapeur (XVIIIe siècle) :** Naissance de l'industrie moderne et du chemin de fer.",
            "- **Ampoule électrique (Edison/Swan) :** Éclairage des villes.",
            "- **Transistor (1947) :** Permet la miniaturisation des circuits électroniques."
          ],
          examples: [
            "Le transistor est considéré par les historiens comme l'invention la plus importante du XXe siècle."
          ],
          practice: [
            "Établissez une frise chronologique des 5 inventions technologiques les plus influentes."
          ],
          quiz: [
            {
              question: "Qui a perfectionné l'imprimerie à caractères métalliques mobiles en Europe vers 1440 ?",
              options: ["Johannes Gutenberg", "James Watt", "Thomas Edison", "Alexander Graham Bell"],
              answer: 0,
              explanation: "Gutenberg a révolutionné la diffusion des connaissances en Europe."
            }
          ]
        }
      ]
    }
  ]
};

export const grandesInventionsExamQuestions: ExamQuestion[] = [
  {
    question: "Quel composant électronique inventé en 1947 a rendu possible l'informatique moderne et les microprocesseurs ?",
    options: ["Le Transistor", "Le Tube à vide", "La Résistance", "La Pile voltaïque"],
    correctAnswer: 0
  }
];
