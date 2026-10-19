import type { CourseDetail, ExamQuestion } from "../coursesData";

export const ethicalHackingCourse: CourseDetail = {
  slug: "ethical-hacking",
  categorySlug: "cyber-security",
  title: "Hacking Éthique & Penetration Testing",
  description: "Découvrez les méthodes d'audit de sécurité et de tests d'intrusion pour protéger les infrastructures.",
  level: "Avancé",
  icon: "🥷",
  modules: [
    {
      title: "Module 1: Méthodologie du Pentest",
      lessons: [
        {
          slug: "reconnaissance-et-scans",
          title: "1.1 Reconnaissance & Cartographie des Réseaux",
          duration: "20 min",
          description: "Découvrez la phase d'OSINT et l'utilisation de Nmap pour auditer des cibles autorisées.",
          objectives: [
            "Comprendre le cadre légal du hacking éthique.",
            "Réaliser une collecte d'informations (OSINT).",
            "Scanner les ports et services avec Nmap."
          ],
          content: [
            "## Hacking Éthique vs Piratage Malveillant",
            "Le hacker éthique travaille TOUJOURS avec un mandat d'autorisation écrit (Scope/Ordre de mission).",
            "",
            "## Phase de Reconnaissance",
            "- **Reconnaissance Passive :** OSINT, WHOIS, DNS Lookup.",
            "- **Reconnaissance Active :** Scan de ports avec Nmap, énumération des bannières de services."
          ],
          examples: [
            "```bash\n# Scan de ports de base avec Nmap\nnmap -sV -sC target.com\n```"
          ],
          practice: [
            "Utilisez Nmap sur une machine de test locale (ex: Metasploitable) pour identifier les ports ouverts."
          ],
          quiz: [
            {
              question: "Quelle condition est indispensable avant de démarrer un test d'intrusion ?",
              options: [
                "Avoir une autorisation écrite formelle du propriétaire du système",
                "Avoir une connexion internet rapide",
                "Utiliser Linux uniquement",
                "Payer une licence Nmap"
              ],
              answer: 0,
              explanation: "Un pentest sans accord préalable écrit est un acte illégal."
            }
          ]
        }
      ]
    }
  ]
};

export const ethicalHackingExamQuestions: ExamQuestion[] = [
  {
    question: "Quel outil en ligne de commande est la référence pour le scan de réseau et la détection de services ?",
    options: ["Nmap", "Wireshark", "Burp Suite", "Metasploit"],
    correctAnswer: 0
  }
];
