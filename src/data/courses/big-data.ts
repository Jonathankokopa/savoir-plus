import type { CourseDetail, ExamQuestion } from "../coursesData";

export const bigDataCourse: CourseDetail = {
  slug: "big-data",
  categorySlug: "data-science",
  title: "Big Data & Apache Spark",
  description: "Traitez des pétaoctets de données distribuées avec Apache Spark, PySpark et Kafka.",
  level: "Avancé",
  icon: "🗄️",
  modules: [
    {
      title: "Module 1: Calcul Distribué avec Spark",
      lessons: [
        {
          slug: "pyspark-et-architecture-distribuee",
          title: "1.1 PySpark DataFrames & RDDs",
          duration: "20 min",
          description: "Comprenez le modèle de calcul distribué in-memory d'Apache Spark.",
          objectives: [
            "Comprendre l'architecture Master/Worker d'un cluster Spark.",
            "Manipuler des RDD (Resilient Distributed Datasets) et DataFrames PySpark.",
            "Traiter des flux de streaming en temps réel avec Spark Streaming & Kafka."
          ],
          content: [
            "## Apache Spark vs Hadoop MapReduce",
            "Spark effectue les opérations en mémoire vive (RAM), ce qui le rend jusqu'à 100 fois plus rapide qu'Hadoop MapReduce basés sur le disque.",
            "",
            "```python\nfrom pyspark.sql import SparkSession\nspark = SparkSession.builder.appName('BigDataApp').getOrCreate()\ndf = spark.read.json('hdfs://path/large_file.json')\n```"
          ],
          examples: [
            "Traitement de flux de transactions bancaires en temps réel pour la détection de fraudes."
          ],
          practice: [
            "Écrivez un script PySpark filtrant et groupant un dataset de plusieurs millions de lignes."
          ],
          quiz: [
            {
              question: "Pourquoi Apache Spark est-il beaucoup plus rapide que les méthodes MapReduce classiques ?",
              options: [
                "Parce qu'il effectue les traitements directement en mémoire RAM au lieu de lire/écrire continuellement sur disque",
                "Parce qu'il supprime les bases de données",
                "Parce qu'il utilise uniquement C++",
                "Parce qu'il ne traite pas les erreurs"
              ],
              answer: 0,
              explanation: "Le modèle in-memory d'Apache Spark réduit drastiquement les E/S disque."
            }
          ]
        }
      ]
    }
  ]
};

export const bigDataExamQuestions: ExamQuestion[] = [
  {
    question: "Quel composant d'Apache Spark est dédié au traitement de flux de données en temps réel (Event Streaming) ?",
    options: ["Spark Streaming", "Spark SQL", "MLlib", "GraphX"],
    correctAnswer: 0
  }
];
