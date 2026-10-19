import type { CourseDetail, ExamQuestion } from "../coursesData";

export const dataVisCourse: CourseDetail = {
  slug: "data-vis",
  categorySlug: "data-science",
  title: "Data Visualization (Matplotlib, Seaborn & Plotly)",
  description: "Transformez vos chiffres bruts en graphiques visuels percutants et tableaux de bord interactifs.",
  level: "Intermédiaire",
  icon: "📊",
  modules: [
    {
      title: "Module 1: Création de Graphiques d'Impact",
      lessons: [
        {
          slug: "matplotlib-seaborn-plotly",
          title: "1.1 Histogrammes, Nuages de Points & Dashboards",
          duration: "16 min",
          description: "Choisissez le bon type de graphique selon la nature des données (temporelles, catégorielles).",
          objectives: [
            "Concevoir des graphiques clairs avec Seaborn et Matplotlib.",
            "Construire des graphiques interactifs avec Plotly.",
            "Appliquer les règles de Dataviz (choix des couleurs, sobriété)."
          ],
          content: [
            "## Choisir le bon Graphique",
            "- **Évolution dans le temps :** Courbe (Line Chart).",
            "- **Comparaison de catégories :** Diagramme en bâtons (Bar Chart).",
            "- **Corrélation entre 2 variables :** Nuage de points (Scatter Plot).",
            "- **Distribution d'une variable :** Histogramme ou Boxplot."
          ],
          examples: [
            "```python\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\nsns.scatterplot(data=df, x='age', y='salaire', hue='departement')\nplt.show()\n```"
          ],
          practice: [
            "Générez une heatmap de corrélation entre les variables d'un dataset financier."
          ],
          quiz: [
            {
              question: "Quel graphique est le plus adapté pour observer la relation entre deux variables quantitatives continues ?",
              options: ["Nuage de points (Scatter plot)", "Diagramme circulaire (Camembert)", "Histogramme", "Graphique en radar"],
              answer: 0,
              explanation: "Le Scatter plot permet de visualiser les corrélations directes entre deux variables."
            }
          ]
        }
      ]
    }
  ]
};

export const dataVisExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle bibliothèque Python est réputée pour générer des graphiques interactifs et manipulables dans un navigateur ?",
    options: ["Plotly", "Matplotlib", "PIL", "PyGame"],
    correctAnswer: 0
  }
];
