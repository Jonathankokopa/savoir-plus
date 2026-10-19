import type { CourseDetail, ExamQuestion } from "../coursesData";

export const awsCourse: CourseDetail = {
  slug: "aws",
  categorySlug: "cloud-computing",
  title: "Amazon Web Services (AWS) Cloud",
  description: "Découvrez les services Cloud clés d'AWS : EC2, S3, RDS, Lambda et IAM.",
  level: "Intermédiaire",
  icon: "☁️",
  modules: [
    {
      title: "Module 1: Services IaaS & PaaS AWS",
      lessons: [
        {
          slug: "ec2-s3-et-iam",
          title: "1.1 Calcul, Stockage & Sécurité IAM",
          duration: "18 min",
          description: "Déployez vos premières instances virtuelles et buckets S3 sécurisés.",
          objectives: [
            "Gérer les rôles et politiques avec IAM (Identity & Access Management).",
            "Lancer des serveurs virtuels EC2.",
            "Stocker des fichiers dans des buckets Amazon S3."
          ],
          content: [
            "## Les Services Fondamentaux AWS",
            "- **EC2 (Elastic Compute Cloud) :** Serveurs virtuels à la demande.",
            "- **S3 (Simple Storage Service) :** Stockage d'objets haute disponibilité.",
            "- **IAM :** Gestion des accès et autorisations sous le principe du moindre privilège."
          ],
          examples: [
            "Configuration d'un bucket S3 privé avec politique d'accès chiffrée."
          ],
          practice: [
            "Définissez une politique IAM JSON restreignant la lecture seule sur S3."
          ],
          quiz: [
            {
              question: "Quel service AWS permet d'exécuter des serveurs virtuels dans le cloud ?",
              options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "AWS Lambda"],
              answer: 0,
              explanation: "EC2 fournit une capacité de calcul récalculable dans le cloud."
            }
          ]
        }
      ]
    }
  ]
};

export const awsExamQuestions: ExamQuestion[] = [
  {
    question: "Quel service Serverless d'AWS permet d'exécuter du code sans gérer ni provisionner de serveurs ?",
    options: ["AWS Lambda", "Amazon EC2", "Amazon EBS", "AWS Direct Connect"],
    correctAnswer: 0
  }
];
