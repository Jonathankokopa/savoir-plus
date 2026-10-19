import type { CourseDetail, ExamQuestion } from "../coursesData";

export const cicdCourse: CourseDetail = {
  slug: "cicd",
  categorySlug: "software-engineering",
  title: "CI/CD & Integration Continue",
  description: "Automatisez les tests, la compilation et le déploiement continu avec GitHub Actions et GitLab CI.",
  level: "Intermédiaire",
  icon: "🔄",
  modules: [
    {
      title: "Module 1: Workflows d'Intégration Continue",
      lessons: [
        {
          slug: "github-actions-workflows",
          title: "1.1 GitHub Actions & Pipelines de Déploiement",
          duration: "18 min",
          description: "Rédigez des workflows YAML automatisant la qualité de votre code.",
          objectives: [
            "Comprendre les concepts de Triggers, Jobs et Steps.",
            "Automatiser l'exécution des linters et tests unitaires.",
            "Gérer les secrets d'environnement en toute sécurité."
          ],
          content: [
            "## Structure d'un Workflow GitHub Actions",
            "```yaml\nname: CI Pipeline\non:\n  push:\n    branches: [ main ]\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm test\n```"
          ],
          examples: [
            "Déploiement automatique vers Vercel ou AWS à chaque merge sur `main`."
          ],
          practice: [
            "Écrivez un fichier `.github/workflows/ci.yml` pour valider le build de votre application."
          ],
          quiz: [
            {
              question: "Quel format de fichier est utilisé pour définir des pipelines d'intégration continue dans GitHub Actions et GitLab CI ?",
              options: ["YAML (.yml / .yaml)", "JSON", "XML", "INI"],
              answer: 0,
              explanation: "Les pipelines CI/CD modernes s'appuient quasi exclusivement sur le format déclaratif YAML."
            }
          ]
        }
      ]
    }
  ]
};

export const cicdExamQuestions: ExamQuestion[] = [
  {
    question: "Que signifie le 'CD' dans le binôme CI/CD ?",
    options: ["Continuous Delivery / Continuous Deployment", "Code Design", "Central Database", "Custom Domain"],
    correctAnswer: 0
  }
];
