import type { CourseDetail, ExamQuestion } from "../coursesData";

export const reactNativeCourse: CourseDetail = {
  slug: "react-native",
  categorySlug: "mobile-dev",
  title: "React Native & Expo",
  description: "Créez des applications mobiles natives pour iOS et Android avec React et JavaScript.",
  level: "Intermédiaire",
  icon: "⚛️",
  modules: [
    {
      title: "Module 1: Introduction à React Native",
      lessons: [
        {
          slug: "bases-react-native",
          title: "1.1 Architecture & Composants de Base",
          duration: "15 min",
          description: "Découvrez comment React Native convertit les composants React en composants natifs iOS et Android.",
          objectives: [
            "Comprendre la différence entre React web et React Native.",
            "Manipuler les composants de base : View, Text, Image, ScrollView.",
            "Configurer un projet avec Expo CLI."
          ],
          content: [
            "## Qu'est-ce que React Native ?",
            "React Native vous permet de construire des applications Android et iOS natives en utilisant uniquement JavaScript et React.",
            "",
            "## Composants Négociables et Négociations Natives",
            "- **View :** Équivalent d'un `<div>` HTML.",
            "- **Text :** Nécessaire pour afficher du texte (pas de texte brut dans View).",
            "- **TouchableOpacity :** Élément cliquable avec retour visuel opacité.",
            "",
            "```tsx\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>Bonjour React Native !</Text>\n    </View>\n  );\n}\n```"
          ],
          examples: [
            "```tsx\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n  title: { fontSize: 20, fontWeight: 'bold' }\n});\n```"
          ],
          practice: [
            "Créez une vue contenant un titre, une image de profil et un bouton interactif avec TouchableOpacity."
          ],
          quiz: [
            {
              question: "Quel composant doit OBLIGATOIREMENT englober tout texte affiché dans React Native ?",
              options: ["<p>", "<Text>", "<View>", "<span>"],
              answer: 1,
              explanation: "Dans React Native, tout texte doit être placé à l'intérieur d'un composant <Text>."
            }
          ]
        }
      ]
    }
  ]
};

export const reactNativeExamQuestions: ExamQuestion[] = [
  {
    question: "Quel outil populaire simplifie le développement et le test d'applications React Native sans configuration Xcode/Android Studio complexe ?",
    options: ["Expo", "Vite", "Webpack", "Gradle"],
    correctAnswer: 0
  },
  {
    question: "Quel hook permet de gérer le layout réactif selon les dimensions de l'écran du smartphone ?",
    options: ["useWindowDimensions", "useScreen", "useDevice", "useMedia"],
    correctAnswer: 0
  }
];
