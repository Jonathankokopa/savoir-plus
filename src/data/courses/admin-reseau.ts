import type { CourseDetail, ExamQuestion } from "../coursesData";

export const adminReseauCourse: CourseDetail = {
  slug: "admin-reseau",
  categorySlug: "reseaux",
  title: "Administration Réseau & Surveillance",
  description: "Gérez les services réseau critiques : DNS, DHCP, Pare-feu (Firewall), VPN et supervision SNMP.",
  level: "Intermédiaire",
  icon: "🖧",
  modules: [
    {
      title: "Module 1: Services Réseau & Infrastructure",
      lessons: [
        {
          slug: "dns-dhcp-et-vpn",
          title: "1.1 Serveurs DNS, Pools DHCP & Tunnels VPN",
          duration: "18 min",
          description: "Administrez la résolution de noms et l'accès distant sécurisé.",
          objectives: [
            "Configurer des zones DNS directes et inverses.",
            "Gérer les baux et réservations DHCP.",
            "Mettre en place des tunnels VPN IPsec / WireGuard."
          ],
          content: [
            "## Services Essentiels d'Infrastructure",
            "- **DNS (Domain Name System) :** Traduit les noms de domaine en adresses IP.",
            "- **DHCP (Dynamic Host Configuration Protocol) :** Attribue automatiquement les adresses IP et passerelles.",
            "- **VPN (Virtual Private Network) :** Chiffre le trafic entre un client distant et le réseau de l'entreprise."
          ],
          examples: [
            "Configuration d'un enregistrement DNS `A` pointant `app.example.com` vers `203.0.113.19`."
          ],
          practice: [
            "Analysez les échanges de paquets lors d'un bail DHCP (DORA : Discover, Offer, Request, Acknowledge) avec Wireshark."
          ],
          quiz: [
            {
              question: "Quel est l'acronyme décrivant les 4 étapes de l'attribution d'une adresse IP par un serveur DHCP ?",
              options: ["DORA (Discover, Offer, Request, Acknowledge)", "CRUD", "ACID", "SYN-ACK"],
              answer: 0,
              explanation: "DORA représente la séquence d'échange entre le client et le serveur DHCP."
            }
          ]
        }
      ]
    }
  ]
};

export const adminReseauExamQuestions: ExamQuestion[] = [
  {
    question: "Quel protocole permet de superviser l'état des équipements réseau (routeurs, switches, imprimantes) à distance ?",
    options: ["SNMP", "SMTP", "SSH", "NTP"],
    correctAnswer: 0
  }
];
