import type { CourseDetail, ExamQuestion } from "../coursesData";

export const swiftCourse: CourseDetail = {
  slug: "swift",
  categorySlug: "mobile-dev",
  title: "Swift & iOS",
  description: "Développez des applications modernes et performantes pour l'écosystème Apple avec SwiftUI.",
  level: "Intermédiaire",
  icon: "🍎",
  modules: [
    {
      title: "Module 1: Découverte de SwiftUI",
      lessons: [
        {
          slug: "bases-swiftui",
          title: "1.1 Syntaxe Swift & Vues Declaratives",
          duration: "15 min",
          description: "Apprenez à concevoir des interfaces iOS avec SwiftUI et le langage Swift.",
          objectives: [
            "Comprendre la syntaxe moderne de Swift.",
            "Utiliser la structure View et la propriété body.",
            "Gérer l'état avec @State et @Binding."
          ],
          content: [
            "## Bienvenue dans SwiftUI",
            "SwiftUI offre une approche déclarative pour concevoir des interfaces sur iOS, macOS et watchOS.",
            "",
            "```swift\nimport SwiftUI\n\nstruct ContentView: View {\n    @State private var count = 0\n    \n    var body: some View {\n        VStack {\n            Text(\"Compteur: \\(count)\")\n                .font(.title)\n            Button(\"Incrémenter\") {\n                count += 1\n            }\n        }\n    }\n}\n```"
          ],
          examples: [
            "```swift\nHStack {\n    Image(systemName: \"heart.fill\")\n        .foregroundColor(.red)\n    Text(\"J'aime SwiftUI\")\n}\n```"
          ],
          practice: [
            "Créez une vue SwiftUI avec un formulaire contenant un TextField et un Toggle."
          ],
          quiz: [
            {
              question: "Quel wrapper d'état est utilisé pour la gestion d'état local et privée dans une Vue SwiftUI ?",
              options: ["@State", "@ObservedObject", "@Published", "@Environment"],
              answer: 0,
              explanation: "@State est utilisé pour les valeurs simples et locales à une vue SwiftUI."
            }
          ]
        }
      ]
    }
  ]
};

export const swiftExamQuestions: ExamQuestion[] = [
  {
    question: "Quel est l'environnement de développement intégré (IDE) officiel fourni par Apple ?",
    options: ["Xcode", "Android Studio", "VS Code", "AppCode"],
    correctAnswer: 0
  }
];
