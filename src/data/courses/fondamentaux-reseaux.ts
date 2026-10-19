import type { CourseDetail, ExamQuestion } from "../coursesData";

export const fondamentauxReseauxCourse: CourseDetail = {
  slug: "fondamentaux-reseaux",
  categorySlug: "reseaux",
  title: "Fondamentaux des Réseaux Informatiques",
  description: "Comprenez le modèle OSI, TCP/IP, l'adressage IPv4/IPv6 et les sous-réseaux.",
  level: "Débutant",
  icon: "🌐",
  modules: [
    {
      title: "Module 1: Modèle OSI & Adressage IP",
      lessons: [
        {
          slug: "modele-osi-et-tcp-ip",
          title: "1.1 Les 7 Couches OSI & Adressage IPv4",
          duration: "18 min",
          description: "Découvrez comment les paquets transitent de la couche physique à la couche application.",
          objectives: [
            "Mémoriser les 7 couches du modèle OSI.",
            "Calculer des masques de sous-réseau IPv4 (CIDR).",
            "Distinguer TCP (orienté connexion) et UDP (datagramme rapide)."
          ],
          content: [
            "## Le Modèle OSI (7 Couches)",
            "1. Physique | 2. Liaison de données | 3. Réseau (IP) | 4. Transport (TCP/UDP) | 5. Session | 6. Présentation | 7. Application (HTTP/DNS).",
            "",
            "## Adressage IPv4 & Masques",
            "Exemple : `192.168.1.0/24` -> Masque `255.255.255.0` -> 254 adresses hôtes disponibles."
          ],
          examples: [
            "Commandes de diagnostic réseau : `ping`, `traceroute` (`tracert`), `nslookup`."
          ],
          practice: [
            "Calculez la plage d'adresses utiles pour le sous-réseau `10.0.0.0/16`."
          ],
          quiz: [
            {
              question: "Quelle couche du modèle OSI gère l'adressage logique IP et le routage des paquets ?",
              options: ["Couche 3 (Réseau)", "Couche 1 (Physique)", "Couche 4 (Transport)", "Couche 7 (Application)"],
              answer: 0,
              explanation: "La couche Réseau (Couche 3) est responsable de l'adressage IP et du routage."
            }
          ]
        }
      ]
    }
  ]
};

export const fondamentauxReseauxExamQuestions: ExamQuestion[] = [
  {
    question: "Quel protocole de la couche Transport garantit la livraison ordonnée et sans erreur des paquets ?",
    options: ["TCP", "UDP", "ICMP", "ARP"],
    correctAnswer: 0
  }
];
