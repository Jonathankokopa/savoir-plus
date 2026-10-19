import type { CourseDetail, ExamQuestion } from "../coursesData";

export const routageCommutationCourse: CourseDetail = {
  slug: "routage-commutation",
  categorySlug: "reseaux",
  title: "Routage, Commutation & VLANs",
  description: "Configurez des switches, routeurs, VLANs (802.1Q) et protocoles de routage dynamique.",
  level: "Intermédiaire",
  icon: "🔀",
  modules: [
    {
      title: "Module 1: Commutation & VLANs",
      lessons: [
        {
          slug: "vlans-et-trunking",
          title: "1.1 Isolation par VLAN & Spanning Tree (STP)",
          duration: "18 min",
          description: "Segmentez les réseaux d'entreprise pour renforcer la sécurité et les performances.",
          objectives: [
            "Créer et attribuer des VLANs sur des commutateurs Layer 2.",
            "Configurer des ports Trunk avec étiquetage 802.1Q.",
            "Comprendre la prévention des boucles avec Spanning Tree Protocol (STP)."
          ],
          content: [
            "## Qu'est-ce qu'un VLAN ?",
            "Un Virtual Local Area Network permet de diviser un commutateur physique en plusieurs réseaux logiques indépendants.",
            "",
            "## Routage Inter-VLAN",
            "Pour faire communiquer deux VLANs distincts, un équipement de Niveau 3 (Routeur ou Switch L3) est nécessaire."
          ],
          examples: [
            "```text\nSwitch(config)# vlan 10\nSwitch(config-vlan)# name COMPTABILITE\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 10\n```"
          ],
          practice: [
            "Simulez la configuration d'un lien Trunk entre deux commutateurs sous Cisco Packet Tracer."
          ],
          quiz: [
            {
              question: "Quel standard d'étiquetage de trame est utilisé pour transporter plusieurs VLANs sur un lien Trunk ?",
              options: ["IEEE 802.1Q", "IEEE 802.11ac", "IEEE 802.3", "IPsec"],
              answer: 0,
              explanation: "802.1Q insère un tag de 4 octets dans l'en-tête de la trame Ethernet pour identifier le VLAN."
            }
          ]
        }
      ]
    }
  ]
};

export const routageCommutationExamQuestions: ExamQuestion[] = [
  {
    question: "Quel protocole empêche les boucles de niveau 2 dans un réseau de commutateurs redondants ?",
    options: ["Spanning Tree Protocol (STP)", "OSPF", "DHCP", "NAT"],
    correctAnswer: 0
  }
];
