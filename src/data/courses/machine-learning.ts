import type { CourseDetail, ExamQuestion } from "../coursesData";

export const machineLearningCourse: CourseDetail = {
  slug: "machine-learning",
  categorySlug: "ai-ml",
  title: "Machine Learning avec Python & Scikit-Learn",
  description: "Découvrez les algorithmes supervisés et non-supervisés pour la prédiction et l'analyse de données.",
  level: "Intermédiaire",
  icon: "🧠",
  modules: [
    {
      title: "Module 1: Algorithmes Clés du ML",
      lessons: [
        {
          slug: "apprentissage-supervise-vs-non-supervise",
          title: "1.1 Régression, Classification & Clustering",
          duration: "18 min",
          description: "Explorez les arbres de décision, la régression logistique et K-Means.",
          objectives: [
            "Différencier données étiquetées et non étiquetées.",
            "Entraîner un modèle avec Scikit-Learn.",
            "Mesurer les performances (Accuracy, Precision, Recall, F1-Score)."
          ],
          content: [
            "## Apprentissage Supervisé",
            "L'algorithme apprend à partir de données étiquetées d'exemples d'entrée et de sortie désirée.",
            "",
            "```python\nfrom sklearn.ensemble import RandomForestClassifier\n\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\n```"
          ],
          examples: [
            "Classification de spams, prédiction de prix immobiliers avec régression linéaire."
          ],
          practice: [
            "Entraînez un classifieur Random Forest sur un jeu de données d'essai."
          ],
          quiz: [
            {
              question: "Quel type d'apprentissage est utilisé pour le regroupement de données sans étiquettes (K-Means) ?",
              options: ["Apprentissage non supervisé", "Apprentissage supervisé", "Apprentissage par renforcement", "Apprentissage manuel"],
              answer: 0,
              explanation: "L'apprentissage non supervisé découvre des structures cachées sans données préalablement étiquetées."
            }
          ]
        }
      ]
    }
  ]
};

export const machineLearningExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle bibliothèque Python est la référence standard pour les algorithmes classiques de Machine Learning ?",
    options: ["Scikit-Learn", "NumPy", "Django", "Flask"],
    correctAnswer: 0
  }
];
