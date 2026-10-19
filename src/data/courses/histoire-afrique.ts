import type { CourseDetail, ExamQuestion } from "../coursesData";

export const histoireAfriqueCourse: CourseDetail = {
  slug: "histoire-afrique",
  categorySlug: "culture-generale",
  title: "Histoire de l'Afrique",
  description: "Explorez l'histoire du berceau de l'humanité, l'Empire du Mali, Soundiata Keïta et les grands événements du continent.",
  level: "Débutant",
  icon: "🌍",
  modules: [
    {
      title: "Module 1: Empires & Civilisations Africaines",
      lessons: [
        {
          slug: "empire-du-mali-et-mansa-moussa",
          title: "1.1 L'Empire du Mali & Mansa Moussa",
          duration: "15 min",
          description: "Découvrez l'apogée de l'Empire du Mali et la richesse culturelle de Tombouctou.",
          objectives: [
            "Connaître l'histoire de Soundiata Keïta et la Charte de Kouroukan Fouga.",
            "Comprendre le règne de Mansa Moussa.",
            "Découvrir les universités historiques de Tombouctou."
          ],
          content: [
            "## L'Empire du Mali",
            "Fondé au XIIIe siècle par Soundiata Keïta, l'Empire du Mali était l'un des plus vastes et riches empires du monde.",
            "Mansa Moussa est célèbre pour son pèlerinage à la Mecque en 1324 qui marqua l'économie mondiale."
          ],
          examples: [
            "La Charte de Kouroukan Fouga (1236), l'une des premières déclarations des droits humains au monde."
          ],
          practice: [
            "Analysez les grands principes de la Charte de Kouroukan Fouga."
          ],
          quiz: [
            {
              question: "Quel empereur du Mali du XIVe siècle est réputé comme l'un des hommes les plus riches de l'histoire humaine ?",
              options: ["Mansa Moussa", "Soundiata Keïta", "Askia Mohammad", "Shaka Zoulou"],
              answer: 0,
              explanation: "Mansa Moussa a dirigé l'Empire du Mali à son apogée économique et culturel."
            }
          ]
        }
      ]
    }
  ]
};

export const histoireAfriqueExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle cité historique du Mali était un centre majeur de savoir et d'enseignement supérieur avec ses manuscrits anciens ?",
    options: ["Tombouctou", "Lagos", "Cotonou", "Kigali"],
    correctAnswer: 0
  }
];
