import type { CourseDetail, ExamQuestion } from "../coursesData";

export const astronomieCourse: CourseDetail = {
  slug: "astronomie",
  categorySlug: "culture-generale",
  title: "Astronomie & Exploration Spatiale",
  description: "Découvrez le Système Solaire, le Big Bang, les étoiles, les trous noirs et la conquête spatiale.",
  level: "Débutant",
  icon: "🌌",
  modules: [
    {
      title: "Module 1: Le Système Solaire & le Cosmos",
      lessons: [
        {
          slug: "planetes-big-bang-et-trous-noirs",
          title: "1.1 Les 8 Planètes & le Big Bang",
          duration: "14 min",
          description: "Explorez l'Univers observable depuis le Big Bang il y a 13.8 milliards d'années.",
          objectives: [
            "Lister les 8 planètes du Système Solaire par ordre d'éloignement du Soleil.",
            "Comprendre la théorie du Big Bang et l'expansion de l'Univers.",
            "Découvrir la nature des trous noirs et des galaxies."
          ],
          content: [
            "## Les Planètes du Système Solaire",
            "- **Planètes teluriques (rocheuses) :** Mercure, Vénus, Terre, Mars.",
            "- **Planètes géantes (gazeuses / glacées) :** Jupiter, Saturne, Uranus, Neptune."
          ],
          examples: [
            "La vitesse de la lumière : environ 300 000 km/s (une année-lumière vaut ~9.46 trillions de km)."
          ],
          practice: [
            "Calculez le temps nécessaire à la lumière du Soleil pour atteindre la Terre (~8 minutes et 20 secondes)."
          ],
          quiz: [
            {
              question: "Quelle est la plus grande planète du Système Solaire ?",
              options: ["Jupiter", "Saturne", "La Terre", "Neptune"],
              answer: 0,
              explanation: "Jupiter est la plus massive des planètes du Système Solaire."
            }
          ]
        }
      ]
    }
  ]
};

export const astronomieExamQuestions: ExamQuestion[] = [
  {
    question: "En quelle année l'être humain a-t-il marché pour la première fois sur la Lune (Mission Apollo 11) ?",
    options: ["1969", "1959", "1975", "1981"],
    correctAnswer: 0
  }
];
