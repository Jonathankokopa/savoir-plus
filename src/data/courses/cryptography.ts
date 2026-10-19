import type { CourseDetail, ExamQuestion } from "../coursesData";

export const cryptographyCourse: CourseDetail = {
  slug: "cryptography",
  categorySlug: "cyber-security",
  title: "Cryptographie & Chiffrement",
  description: "Comprenez les algorithmes de chiffrement symétrique, asymétrique, le hachage et les certificats SSL/TLS.",
  level: "Avancé",
  icon: "🔑",
  modules: [
    {
      title: "Module 1: Bases de la Cryptographie",
      lessons: [
        {
          slug: "chiffrement-symetrique-et-asymetrique",
          title: "1.1 AES, RSA & Fonctions de Hachage",
          duration: "18 min",
          description: "Explorez les mécanismes de sécurité sous-jacents aux clés publiques et privées.",
          objectives: [
            "Différencier chiffrement symétrique (AES) et asymétrique (RSA/ECC).",
            "Comprendre les fonctions de hachage (SHA-256, bcrypt).",
            "Découvrir le fonctionnement des certificats HTTPS (TLS)."
          ],
          content: [
            "## Chiffrement Symétrique vs Asymétrique",
            "- **Symétrique (AES) :** Une seule clé secrète partagée pour chiffrer et déchiffrer. Très rapide.",
            "- **Asymétrique (RSA/ECC) :** Une clé publique pour chiffrer, une clé privée pour déchiffrer.",
            "",
            "## Fonctions de Hachage Unidirectionnelles",
            "Le hachage transforme une donnée en une empreinte de taille fixe irréversible. Idéal pour stocker des mots de passe avec sel (Salt)."
          ],
          examples: [
            "```typescript\nimport crypto from 'crypto';\nconst hash = crypto.createHash('sha256').update('secret').digest('hex');\n```"
          ],
          practice: [
            "Générez une paire de clés RSA avec OpenSSL et chiffrez un message texte."
          ],
          quiz: [
            {
              question: "Combien de clés différentes sont utilisées dans le chiffrement asymétrique ?",
              options: ["Deux (une clé publique et une clé privée)", "Une seule", "Trois", "Aucune"],
              answer: 0,
              explanation: "Le chiffrement asymétrique s'appuie sur un couple de clés indissociables : publique et privée."
            }
          ]
        }
      ]
    }
  ]
};

export const cryptographyExamQuestions: ExamQuestion[] = [
  {
    question: "Quel algorithme de chiffrement symétrique standardisé par le NIST est le plus utilisé au monde ?",
    options: ["AES (Advanced Encryption Standard)", "DES", "Caesar", "MD5"],
    correctAnswer: 0
  }
];
