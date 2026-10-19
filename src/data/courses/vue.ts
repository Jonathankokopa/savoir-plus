import type { CourseDetail, ExamQuestion } from "../coursesData";

export const vueCourse: CourseDetail = {
  slug: "vue",
  categorySlug: "web-dev",
  title: "Vue.js 3 & Composition API",
  description: "Développez rapidement des applications web élégantes avec Vue 3 : Single File Components (.vue), réactivité moderne avec ref/reactive, Pinia et Vue Router.",
  level: "Intermédiaire",
  icon: "🟢",
  modules: [
    {
      title: "Module 1: Prise en main de Vue 3",
      lessons: [
        {
          slug: "vue-et-single-file-components",
          title: "1.1 Single File Components (.vue) & <script setup>",
          duration: "15 min",
          description: "Comprendre la structure d'un fichier .vue avec la syntaxe moderne Composition API <script setup>.",
          objectives: [
            "Structurer un fichier .vue (template, script setup, style scoped).",
            "Comprendre l'isolation CSS avec 'scoped'.",
            "Maîtriser la syntaxe concise <script setup>."
          ],
          content: [
            "## Anatomie d'un Single File Component (SFC)",
            "```html\n<template>\n  <div class=\"card\">\n    <h2>{{ title }}</h2>\n    <button @click=\"count++\">Compteur : {{ count }}</button>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\ndefineProps<{ title: string }>();\nconst count = ref(0);\n</script>\n\n<style scoped>\n.card {\n  padding: 1.5rem;\n  border-radius: 8px;\n  background: #f8fafc;\n}\n</style>\n```"
          ],
          examples: [
            "```html\n<template><p>Bonjour Vue !</p></template>\n```"
          ],
          practice: [
            "Créez un composant SFC d'affichage de profil avec un bouton d'action."
          ],
          quiz: [
            {
              question: "À quoi sert l'attribut 'scoped' sur la balise <style> dans Vue ?",
              options: [
                "À compresser le CSS",
                "À limiter les styles CSS uniquement au composant actuel",
                "À importer TailwindCSS",
                "À désactiver le style sur mobile"
              ],
              answer: 1,
              explanation: "'scoped' garantit que le CSS ne fuite pas sur les autres composants de l'application."
            }
          ]
        },
        {
          slug: "ref-reactive-et-computed",
          title: "1.2 Réactivité avec ref(), reactive() & computed()",
          duration: "20 min",
          description: "Déclarer des variables réactives et des propriétés calculées optimisées.",
          objectives: [
            "Distinguer ref() (pour les valeurs primitives) et reactive() (pour les objets).",
            "Utiliser .value avec ref() dans la partie script.",
            "Créer des valeurs dérivées avec computed()."
          ],
          content: [
            "## ref() vs reactive()",
            "```typescript\nimport { ref, reactive, computed } from 'vue';\n\n// ref pour les primitives (ou tout type)\nconst count = ref(0);\nconsole.log(count.value); // Accès .value dans le script !\n\n// reactive pour les objets\nconst state = reactive({\n  firstName: 'Lina',\n  lastName: 'Benali'\n});\n\n// Propriété calculée automatique\nconst fullName = computed(() => `${state.firstName} ${state.lastName}`);\n```"
          ],
          examples: [
            "```html\n<template>\n  <p>Nom complet : {{ fullName }}</p>\n</template>\n```"
          ],
          practice: [
            "Créez un système de recherche filtrant une liste d'articles en utilisant une propriété computed()."
          ],
          quiz: [
            {
              question: "Comment accède-t-on à la valeur d'une variable créée avec ref() dans la section <script setup> ?",
              options: ["count", "count.value", "count.get()", "count()"],
              answer: 1,
              explanation: "En JavaScript dans <script>, il faut utiliser .value. Dans le <template>, Vue déballe automatiquement la ref."
            }
          ]
        }
      ]
    }
  ]
};

export const vueExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle méthode crée une référence réactive pour une valeur primitive dans Vue 3 ?",
    options: ["reactive()", "ref()", "createRef()", "useRef()"],
    correctAnswer: 1
  },
  {
    question: "Quelle directive Vue écoute les événements DOM (raccourci @) ?",
    options: ["v-bind", "v-on", "v-model", "v-slot"],
    correctAnswer: 1
  },
  {
    question: "Quel est le State Management officiel recommandé pour Vue 3 ?",
    options: ["Vuex", "Pinia", "Redux", "MobX"],
    correctAnswer: 1
  }
];
