import type { CourseDetail, ExamQuestion } from "../coursesData";

export const culturesDuMondeCourse: CourseDetail = {
  slug: "cultures-du-monde",
  categorySlug: "culture-generale",
  title: "Cultures & Tradititons du Monde",
  description: "Découvrez la diversité linguistique, artistique, culinaire et sociologique des peuples de la planète.",
  level: "Intermédiaire",
  icon: "🌎",
  modules: [
    {
      title: "Module 1: Diversité Culturelle",
      lessons: [
        {
          slug: "langues-traditions-et-arts",
          title: "1.1 Diversité Linguistique & Patrimoine Mondial UNESCO",
          duration: "14 min",
          description: "Explorez la richesse du patrimoine culturel immatériel de l'humanité.",
          objectives: [
            "Comprendre l'importance de la préservation des langues et traditions.",
            "Découvrir la notion de Patrimoine Mondial de l'UNESCO.",
            "Promouvoir le dialogue interculturel."
          ],
          content: [
            "## Le Patrimoine Mondial de l'UNESCO",
            "L'UNESCO préserve des sites naturels et culturels d'une valeur universelle exceptionnelle (ex: le Parc national de Virunga en RDC, la Grande Muraille de Chine)."
          ],
          examples: [
            "La rumba congolaise, inscrite au patrimoine culturel immatériel de l'humanité de l'UNESCO."
          ],
          practice: [
            "Recherchez 3 traditions inscrites au patrimoine immatériel de l'UNESCO."
          ],
          quiz: [
            {
              question: "Quelle musique congolaise emblématique a été inscrite au patrimoine culturel immatériel de l'UNESCO en 2021 ?",
              options: ["La Rumba Congolaise", "Le Reggae", "Le Jazz", "La Salsa"],
              answer: 0,
              explanation: "La rumba congolaise a été officiellement classée par l'UNESCO en décembre 2021."
            }
          ]
        }
      ]
    }
  ]
};

export const culturesDuMondeExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle organisation des Nations Unies est responsable de l'éducation, de la science et de la culture ?",
    options: ["UNESCO", "UNICEF", "OMS", "OMC"],
    correctAnswer: 0
  }
];
