import type { CourseDetail, ExamQuestion } from "../coursesData";

export const gcpCourse: CourseDetail = {
  slug: "gcp",
  categorySlug: "cloud-computing",
  title: "Google Cloud Platform (GCP)",
  description: "Maîtrisez les solutions Cloud de Google : Compute Engine, Cloud Run, BigQuery et GKE.",
  level: "Intermédiaire",
  icon: "🌐",
  modules: [
    {
      title: "Module 1: Infrastructure & Data GCP",
      lessons: [
        {
          slug: "compute-engine-et-cloud-run",
          title: "1.1 Conteneurs avec Cloud Run & BigQuery",
          duration: "18 min",
          description: "Déployez des conteneurs sans serveur et analysez des Po de données.",
          objectives: [
            "Déployer des conteneurs sur Cloud Run.",
            "Utiliser Google Kubernetes Engine (GKE).",
            "Exécuter des requêtes analytiques massives sur BigQuery."
          ],
          content: [
            "## Services Majeurs GCP",
            "- **Cloud Run :** Déploiement Serverless de conteneurs Docker.",
            "- **BigQuery :** Entrepôt de données (Data Warehouse) Serverless ultra-rapide.",
            "- **GKE :** Gestionnaire Kubernetes géré par Google."
          ],
          examples: [
            "Déploiement d'un conteneur web via gcloud CLI : `gcloud run deploy`."
          ],
          practice: [
            "Rédigez une requête SQL BigQuery pour analyser un dataset public."
          ],
          quiz: [
            {
              question: "Quel service GCP permet de déployer des conteneurs Docker en mode Serverless ?",
              options: ["Cloud Run", "Compute Engine", "Cloud Functions", "App Engine"],
              answer: 0,
              explanation: "Cloud Run scale automatiquement de zéro à N instances pour les conteneurs."
            }
          ]
        }
      ]
    }
  ]
};

export const gcpExamQuestions: ExamQuestion[] = [
  {
    question: "Quel est l'entrepôt de données Serverless multi-cloud hautement évolutif de Google Cloud ?",
    options: ["BigQuery", "Cloud SQL", "Spanner", "Firestore"],
    correctAnswer: 0
  }
];
