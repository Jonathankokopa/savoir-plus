import type { CourseDetail, ExamQuestion } from "../coursesData";

export const excelCourse: CourseDetail = {
  slug: "excel",
  categorySlug: "bureautique",
  title: "Excel & Tableaux Croisés Dynamiques",
  description: "Apprenez les formules (RECHERCHEV, RECHERCHEX, SI), le traitement de données et les Tableaux Croisés Dynamiques (TCD).",
  level: "Débutant",
  icon: "📊",
  modules: [
    {
      title: "Module 1: Formules & Tableaux Croisés Dynamiques",
      lessons: [
        {
          slug: "formules-si-recherchex-et-tcd",
          title: "1.1 Formules Essentielles & Analyse avec TCD",
          duration: "16 min",
          description: "Manipulez des feuilles de calcul et analysez vos données en quelques clics.",
          objectives: [
            "Utiliser les formules conditionnelles SI, SOMME.SI, NB.SI.",
            "Maîtriser la nouvelle fonction RECHERCHEX.",
            "Construire un Tableau Croisé Dynamique (TCD) réactif."
          ],
          content: [
            "## Syntaxe RECHERCHEX (XLOOKUP)",
            "Remplace avantageusement RECHERCHEV en permettant de chercher dans n'importe quelle direction.",
            "```excel\n=RECHERCHEX(A2; Clients[ID]; Clients[Nom]; \"Non trouvé\")\n```",
            "",
            "## Tableaux Croisés Dynamiques (TCD)",
            "Permettent de regrouper, filtrer et synthétiser des milliers de lignes de données instantanément."
          ],
          examples: [
            "Formule conditionnelle : `=SI(B2>=500; \"Objectif Atteint\"; \"À Améliorer\")`."
          ],
          practice: [
            "Créez un TCD calculant le chiffre d'affaires total par catégorie de produit."
          ],
          quiz: [
            {
              question: "Quelle fonction moderne d'Excel remplace avantageusement RECHERCHEV et RECHERCHEH ?",
              options: ["RECHERCHEX", "CHERCHER", "INDEX", "TROUVER"],
              answer: 0,
              explanation: "RECHERCHEX est plus flexible et ne nécessite pas que la colonne de recherche soit à gauche."
            }
          ]
        }
      ]
    }
  ]
};

export const excelExamQuestions: ExamQuestion[] = [
  {
    question: "Quel outil Excel permet de résumer et d'analyser rapidement un grand tableau de données brutes ?",
    options: ["Le Tableau Croisé Dynamique (TCD)", "Le Gestionnaire de Noms", "La Mise en Page", "Le Vérificateur d'Orthographe"],
    correctAnswer: 0
  }
];
