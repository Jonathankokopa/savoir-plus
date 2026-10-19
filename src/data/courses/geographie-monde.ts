import type { CourseDetail, ExamQuestion } from "../coursesData";

export const geographieMondeCourse: CourseDetail = {
  slug: "geographie-monde",
  categorySlug: "culture-generale",
  title: "Géographie du Monde",
  description: "Découvrez les continents, océans, fleuves majeurs, reliefs et capitales du globe terrestre.",
  level: "Débutant",
  icon: "🗺️",
  modules: [
    {
      title: "Module 1: Les Grands Ensembles Géographiques",
      lessons: [
        {
          slug: "continents-et-fleuves",
          title: "1.1 Continents, Reliefs & Grands Fleuves",
          duration: "14 min",
          description: "Parcourez la géographie physique et humaine de la Terre.",
          objectives: [
            "Localiser les 6 continents et 5 grands océans.",
            "Identifier les plus grands fleuves (Congo, Nil, Amazone).",
            "Comprendre les zones climatiques majeures."
          ],
          content: [
            "## Les Grands Fleuves du Monde",
            "- **Fleuve Congo :** Deuxième fleuve du monde par son débit après l'Amazone et le plus profond.",
            "- **Le Nil :** Fleuve mythique d'Afrique du Nord-Est.",
            "- **L'Amazone :** Plus grand fleuve par son volume d'eau."
          ],
          examples: [
            "L'Everest (Himalaya) : plus haut sommet terrestre à 8 848 mètres."
          ],
          practice: [
            "Placez les 5 plus grands fleuves du monde sur une carte muette."
          ],
          quiz: [
            {
              question: "Quel fleuve d'Afrique est le plus profond au monde et le deuxième plus puissant par son débit ?",
              options: ["Le Fleuve Congo", "Le Nil", "Le Niger", "Le Zambèze"],
              answer: 0,
              explanation: "Le Fleuve Congo atteint des profondeurs de plus de 220 mètres."
            }
          ]
        }
      ]
    }
  ]
};

export const geographieMondeExamQuestions: ExamQuestion[] = [
  {
    question: "Quel est le plus grand océan de la planète Terre en surface ?",
    options: ["L'Océan Pacifique", "L'Océan Atlantique", "L'Océan Indien", "L'Océan Arctique"],
    correctAnswer: 0
  }
];
