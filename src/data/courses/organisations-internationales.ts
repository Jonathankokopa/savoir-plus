import type { CourseDetail, ExamQuestion } from "../coursesData";

export const organisationsInternationalesCourse: CourseDetail = {
  slug: "organisations-internationales",
  categorySlug: "culture-generale",
  title: "Organisations Internationales & Géopolitique",
  description: "Comprenez le rôle de l'ONU, de l'Union Africaine (UA), de l'Union Européenne et des institutions financières mondiales.",
  level: "Intermédiaire",
  icon: "🏛️",
  modules: [
    {
      title: "Module 1: Les Grandes Institutions Mondiales",
      lessons: [
        {
          slug: "onu-union-africaine-et-institutions",
          title: "1.1 L'ONU, l'Union Africaine & les Traités Internationaux",
          duration: "14 min",
          description: "Découvrez le fonctionnement du Conseil de Sécurité et des assemblées régionales.",
          objectives: [
            "Comprendre les 6 organes principaux de l'ONU.",
            "Découvrir la mission et le siège de l'Union Africaine (Addis-Abeba).",
            "Analyser le rôle de la Banque Mondiale et du FMI."
          ],
          content: [
            "## L'Organisation des Nations Unies (ONU)",
            "Fondée en 1945 après la Seconde Guerre mondiale pour maintenir la paix et la sécurité internationales.",
            "- **Conseil de Sécurité :** 5 membres permanents avec droit de veto (USA, Chine, Russie, France, Royaume-Uni) et 10 membres non permanents.",
            "- **Union Africaine (UA) :** Organisation continentale regroupant 55 États membres dont le siège est à Addis-Abeba (Éthiopie)."
          ],
          examples: [
            "La Déclaration Universelle des Droits de l'Homme (1948)."
          ],
          practice: [
            "Présentez la structure et les objectifs de l'Union Africaine."
          ],
          quiz: [
            {
              question: "Où se trouve le siège officiel de l'Union Africaine (UA) ?",
              options: ["Addis-Abeba (Éthiopie)", "Kinshasa (RDC)", "Le Caire (Égypte)", "Nairobi (Kenya)"],
              answer: 0,
              explanation: "Le siège de l'Union Africaine est situé à Addis-Abeba en Éthiopie."
            }
          ]
        }
      ]
    }
  ]
};

export const organisationsInternationalesExamQuestions: ExamQuestion[] = [
  {
    question: "Combien de membres permanents possédant le droit de veto siègent au Conseil de Sécurité de l'ONU ?",
    options: ["5 membres", "10 membres", "15 membres", "20 membres"],
    correctAnswer: 0
  }
];
