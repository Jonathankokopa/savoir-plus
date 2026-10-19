import type { CourseDetail, ExamQuestion } from "../coursesData";

export const securiteNumeriqueCourse: CourseDetail = {
  slug: "securite-numerique",
  categorySlug: "cyber-security",
  title: "Fondamentaux de la Sécurité Numérique",
  description: "Comprenez les principes essentiels de la cybersécurité, de la protection des données et de l'hygiène informatique.",
  level: "Débutant",
  icon: "🔐",
  modules: [
    {
      title: "Module 1: Les Piliers de la Cybersécurité",
      lessons: [
        {
          slug: "triade-cid-et-menaces",
          title: "1.1 Triade CID & Sensibilisation aux Menaces",
          duration: "12 min",
          description: "Découvrez la Confidentialité, l'Intégrité et la Disponibilité des données.",
          objectives: [
            "Assimiler les concepts de la triade CID.",
            "Identifier le Phishing, le Ransomware et le Social Engineering.",
            "Adopter de bonnes habitudes de mots de passe et MFA."
          ],
          content: [
            "## La Triade CID",
            "- **Confidentialité :** Seules les personnes autorisées ont accès aux données.",
            "- **Intégrité :** Les données restent exactes et non altérées.",
            "- **Disponibilité :** Les données et systèmes sont accessibles quand nécessaire.",
            "",
            "## L'Authentification Forte (MFA)",
            "L'utilisation de la double authentification (2FA / MFA) réduit de plus de 99% le risque de piratage de compte."
          ],
          examples: [
            "Exemple de mot de passe fort : `Tr0up3!Afr1qu3#2026` vs mot de passe faible : `123456`."
          ],
          practice: [
            "Activez l'authentification à deux facteurs sur vos comptes essentiels."
          ],
          quiz: [
            {
              question: "Que signifie le 'C' dans la triade de sécurité informatique CID ?",
              options: ["Confidentialité", "Calcul", "Connexion", "Cryptomonnaie"],
              answer: 0,
              explanation: "CID signifie Confidentialité, Intégrité et Disponibilité."
            }
          ]
        }
      ]
    }
  ]
};

export const securiteNumeriqueExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle technique d'attaque cherche à tromper l'utilisateur par un faux e-mail urgent pour voler ses identifiants ?",
    options: ["Phishing (Hameçonnage)", "DDoS", "SQL Injection", "Buffer Overflow"],
    correctAnswer: 0
  }
];
