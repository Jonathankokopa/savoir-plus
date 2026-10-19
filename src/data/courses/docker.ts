import type { CourseDetail, ExamQuestion } from "../coursesData";

export const dockerCourse: CourseDetail = {
  slug: "docker",
  categorySlug: "software-engineering",
  title: "Docker & Conteneurisation",
  description: "Apprenez à empaqueter vos applications avec leurs dépendances dans des conteneurs isolés et portables.",
  level: "Intermédiaire",
  icon: "🐳",
  modules: [
    {
      title: "Module 1: Images, Conteneurs & Docker Compose",
      lessons: [
        {
          slug: "dockerfile-et-docker-compose",
          title: "1.1 Dockerfile, Images Multi-Stage & Compose",
          duration: "18 min",
          description: "Rédigez des Dockerfiles optimisés et orchestrez des applications multi-conteneurs.",
          objectives: [
            "Comprendre l'isolation par namespaces et cgroups Linux.",
            "Rédiger un Dockerfile optimisé (Multi-stage build).",
            "Lancer une stack App + Database avec Docker Compose."
          ],
          content: [
            "## Dockerfile Exemple",
            "```dockerfile\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine AS runner\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCMD [\"node\", \"dist/main.js\"]\n```",
            "",
            "## Docker Compose",
            "Permet de définir et lancer des applications multi-conteneurs avec un fichier `docker-compose.yml`."
          ],
          examples: [
            "Lancement d'une stack locale : `docker compose up -d`."
          ],
          practice: [
            "Conteneurisez une application Node.js / Next.js avec un Dockerfile multi-stage."
          ],
          quiz: [
            {
              question: "Quel est l'avantage principal des builds multi-stage dans un Dockerfile ?",
              options: [
                "Réduire drastiquement la taille de l'image finale en ne conservant que les artefacts de production",
                "Augmenter le temps de compilation",
                "Changer de système d'exploitation à la volée",
                "Supprimer le fichier package.json"
              ],
              answer: 0,
              explanation: "Le multi-stage build sépare l'environnement de build lourd de l'image d'exécution légère."
            }
          ]
        }
      ]
    }
  ]
};

export const dockerExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle commande permet de lister tous les conteneurs Docker actuellement en cours d'exécution ?",
    options: ["docker ps", "docker list", "docker run", "docker show"],
    correctAnswer: 0
  }
];
