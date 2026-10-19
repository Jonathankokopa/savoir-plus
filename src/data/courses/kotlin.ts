import type { CourseDetail, ExamQuestion } from "../coursesData";

export const kotlinCourse: CourseDetail = {
  slug: "kotlin",
  categorySlug: "mobile-dev",
  title: "Kotlin & Android Jetpack Compose",
  description: "Créez des applications Android natives modernes avec Kotlin et Jetpack Compose.",
  level: "Intermédiaire",
  icon: "🤖",
  modules: [
    {
      title: "Module 1: Android Moderne avec Jetpack Compose",
      lessons: [
        {
          slug: "bases-jetpack-compose",
          title: "1.1 UI Déclarative en Kotlin",
          duration: "15 min",
          description: "Découvrez comment construire des interfaces Android avec les fonctions Composable.",
          objectives: [
            "Comprendre la syntaxe et la concision de Kotlin.",
            "Utiliser l'annotation @Composable.",
            "Gérer l'état avec remember { mutableStateOf() }."
          ],
          content: [
            "## UI Déclarative avec Jetpack Compose",
            "Jetpack Compose est le toolkit moderne recommandé par Google pour concevoir des interfaces Android natives.",
            "",
            "```kotlin\nimport androidx.compose.runtime.*\nimport androidx.compose.material3.*\nimport androidx.compose.foundation.layout.*\n\n@Composable\nfun Greeting(name: String) {\n    var count by remember { mutableStateOf(0) }\n    Column {\n        Text(text = \"Bonjour $name !\")\n        Button(onClick = { count++ }) {\n            Text(\"Cliqué $count fois\")\n        }\n    }\n}\n```"
          ],
          examples: [
            "```kotlin\nRow {\n    Icon(Icons.Default.Favorite, contentDescription = null)\n    Text(\"Favori\")\n}\n```"
          ],
          practice: [
            "Créez un écran de connexion Android réactif avec deux champs TextField pour email/password."
          ],
          quiz: [
            {
              question: "Quelle annotation identifie une fonction construisant une interface utilisateur en Jetpack Compose ?",
              options: ["@Composable", "@UI", "@View", "@Layout"],
              answer: 0,
              explanation: "@Composable informe le compilateur Kotlin que la fonction transforme des données en interface Android."
            }
          ]
        }
      ]
    }
  ]
};

export const kotlinExamQuestions: ExamQuestion[] = [
  {
    question: "Quel est le langage officiel recommandé par Google pour le développement Android depuis 2019 ?",
    options: ["Kotlin", "Java", "C++", "Python"],
    correctAnswer: 0
  }
];
