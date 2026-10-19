import type { CourseDetail, ExamQuestion } from "../coursesData";

export const webSecurityCourse: CourseDetail = {
  slug: "web-security",
  categorySlug: "cyber-security",
  title: "Sécurité Web & OWASP Top 10",
  description: "Apprenez à identifier et corriger les vulnérabilités critiques des applications web.",
  level: "Intermédiaire",
  icon: "🌐",
  modules: [
    {
      title: "Module 1: Les Vulnérabilités Web Majeures",
      lessons: [
        {
          slug: "owasp-top-10-xss-sqli",
          title: "1.1 Injection SQL, XSS & CSRF",
          duration: "18 min",
          description: "Comprenez les failles d'injection SQL et de Cross-Site Scripting.",
          objectives: [
            "Prévenir les injections SQL avec les requêtes préparées.",
            "Sanitiser les entrées utilisateur contre le XSS.",
            "Utiliser les jetons CSRF et le cookie SameSite."
          ],
          content: [
            "## OWASP Top 10",
            "L'OWASP est la référence mondiale répertoriant les risques de sécurité applicative les plus critiques.",
            "",
            "## Injection SQL",
            "L'injection SQL se produit lorsque des entrées non nettoyées sont directement concaténées dans une requête SQL.",
            "```sql\n-- Vulnérable :\nSELECT * FROM users WHERE email = '\" + userInput + \"';\n```"
          ],
          examples: [
            "```typescript\n// Sécurisé avec paramètres préparés :\nawait db.query('SELECT * FROM users WHERE email = $1', [userInput]);\n```"
          ],
          practice: [
            "Implémentez l'échappement des balises HTML pour empêcher l'exécution de scripts malveillants XSS."
          ],
          quiz: [
            {
              question: "Quelle est la meilleure protection contre les injections SQL ?",
              options: [
                "Utiliser des requêtes préparées (Prepared Statements)",
                "Désactiver la base de données",
                "Utiliser uniquement du JavaScript",
                "Masquer les URL"
              ],
              answer: 0,
              explanation: "Les requêtes préparées séparent les commandes SQL des données utilisateur."
            }
          ]
        }
      ]
    }
  ]
};

export const webSecurityExamQuestions: ExamQuestion[] = [
  {
    question: "Que signifie l'acronyme XSS ?",
    options: ["Cross-Site Scripting", "XML Safe Standard", "Extra Secure Socket", "X-Server Security"],
    correctAnswer: 0
  }
];
