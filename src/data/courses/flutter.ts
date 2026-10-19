import type { CourseDetail, ExamQuestion } from "../coursesData";

export const flutterCourse: CourseDetail = {
  slug: "flutter",
  categorySlug: "mobile-dev",
  title: "Flutter & Dart",
  description: "Développez des applications multiplateformes fluides et performantes avec le langage Dart.",
  level: "Intermédiaire",
  icon: "🦋",
  modules: [
    {
      title: "Module 1: Les Fondamentaux de Flutter",
      lessons: [
        {
          slug: "introduction-flutter-widgets",
          title: "1.1 L'Architecture Tout est Widget",
          duration: "15 min",
          description: "Comprenez la philosophie de Flutter basée sur les Stateless et Stateful Widgets.",
          objectives: [
            "Découvrir le langage Dart.",
            "Distinguer StatelessWidget et StatefulWidget.",
            "Assembler des arbres de widgets avec Container, Column et Row."
          ],
          content: [
            "## Tout est Widget dans Flutter",
            "En Flutter, chaque élément de l'interface utilisateur (boutons, rembourrages, alignements) est un Widget.",
            "",
            "## StatelessWidget vs StatefulWidget",
            "- **StatelessWidget :** Immuable, son affichage dépend uniquement des arguments d'entrée.",
            "- **StatefulWidget :** Conserve un état interne réactif mis à jour avec `setState()`.",
            "",
            "```dart\nimport 'package:flutter/material.dart';\n\nvoid main() => runApp(const MyApp());\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(title: const Text('Flutter App')),\n        body: const Center(child: Text('Hello Flutter')),\n      ),\n    );\n  }\n}\n```"
          ],
          examples: [
            "```dart\nColumn(\n  children: [\n    Text('Ligne 1'),\n    Icon(Icons.star),\n  ],\n)\n```"
          ],
          practice: [
            "Créez un StatefulWidget de compteur qui s'incrémente lorsqu'on appuie sur un FloatingActionButton."
          ],
          quiz: [
            {
              question: "Quel langage de programmation est utilisé pour développer avec Flutter ?",
              options: ["Dart", "TypeScript", "Kotlin", "Swift"],
              answer: 0,
              explanation: "Flutter utilise le langage Dart développé par Google."
            }
          ]
        }
      ]
    }
  ]
};

export const flutterExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle méthode doit être appelée pour déclencher un rafraîchissement d'un StatefulWidget ?",
    options: ["setState()", "update()", "render()", "refresh()"],
    correctAnswer: 0
  }
];
