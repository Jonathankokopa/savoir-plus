import type { CourseDetail, ExamQuestion } from "../coursesData";

export const pythonDataCourse: CourseDetail = {
  slug: "python-data",
  categorySlug: "data-science",
  title: "Python pour la Data Science",
  description: "Manipulez et nettoyez des volumes importants de données avec Pandas et NumPy.",
  level: "Intermédiaire",
  icon: "🐍",
  modules: [
    {
      title: "Module 1: Manipulation de DataFrames avec Pandas",
      lessons: [
        {
          slug: "pandas- et-numpy-bases",
          title: "1.1 DataFrames, Filtrage & Agrégation",
          duration: "18 min",
          description: "Apprenez à charger des fichiers CSV/Excel et manipuler des DataFrames Pandas.",
          objectives: [
            "Créer des tableaux multidimensionnels NumPy.",
            "Filtrer et traiter les valeurs manquantes (NaN) dans Pandas.",
            "Utiliser `groupby()` et `pivot_table()` pour synthétiser les données."
          ],
          content: [
            "## Pandas & NumPy",
            "Pandas est la bibliothèque fondamentale en Python pour la manipulation et l'analyse de données structurées.",
            "",
            "```python\nimport pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('ventes.csv')\ndf_clean = df.dropna()\nrésultat = df_clean.groupby('region')['ventes'].sum()\n```"
          ],
          examples: [
            "Filtrage conditionnel : `df[df['age'] > 25]`."
          ],
          practice: [
            "Nettoyez un jeu de données en remplaçant les valeurs manquantes par la moyenne de la colonne."
          ],
          quiz: [
            {
              question: "Quelle méthode Pandas permet de lire directement un fichier au format CSV ?",
              options: ["pd.read_csv()", "pd.open_csv()", "pd.parse_csv()", "pd.load()"],
              answer: 0,
              explanation: "pd.read_csv() transforme un fichier CSV en un DataFrame Pandas réactif."
            }
          ]
        }
      ]
    }
  ]
};

export const pythonDataExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle fonction Pandas permet de supprimer les lignes contenant des valeurs nègatives ou manquantes (nulles) ?",
    options: ["dropna()", "remove_null()", "clean()", "delete_empty()"],
    correctAnswer: 0
  }
];
