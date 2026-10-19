import type { CourseDetail, ExamQuestion } from "../coursesData";

export const iotCourse: CourseDetail = {
  slug: "iot",
  categorySlug: "latest-tech",
  title: "Internet des Objets (IoT) & Capteurs",
  description: "Découvrez les architectures d'objets connectés, les protocoles MQTT et l'Edge Computing.",
  level: "Intermédiaire",
  icon: "📡",
  modules: [
    {
      title: "Module 1: Architectures & Protocole MQTT",
      lessons: [
        {
          slug: "capteurs-et-mqtt",
          title: "1.1 Capteurs, Microcontrôleurs & Protocole MQTT",
          duration: "15 min",
          description: "Apprenez à faire communiquer des cartes microcontrôleurs (ESP32/Raspberry Pi) via MQTT.",
          objectives: [
            "Comprendre l'architecture Publish/Subscribe du protocole MQTT.",
            "Découvrir les microcontrôleurs Arduino et ESP32.",
            "Traiter les séries temporelles issues de capteurs."
          ],
          content: [
            "## Protocole MQTT",
            "MQTT est un protocole de messagerie léger conçu pour les appareils contraints en bande passante et en énergie.",
            "- **Broker :** Serveur central qui achemine les messages.",
            "- **Topic :** Canal sur lequel les appareils publient (Publish) ou s'abonnent (Subscribe)."
          ],
          examples: [
            "Publish sur topic `maison/salon/temperature` -> Valeur `22.5°C`."
          ],
          practice: [
            "Configurez un broker MQTT Mosquitto local et publiez une donnée de télémétrie simulée."
          ],
          quiz: [
            {
              question: "Quel protocole de réseau est le standard léger pour la communication d'objets connectés IoT ?",
              options: ["MQTT", "HTTP/2", "FTP", "SMTP"],
              answer: 0,
              explanation: "MQTT utilise une en-tête de message très réduite idéale pour l'IoT."
            }
          ]
        }
      ]
    }
  ]
};

export const iotExamQuestions: ExamQuestion[] = [
  {
    question: "Dans le modèle MQTT, quel composant central reçoit tous les messages et les redistribue aux abonnés ?",
    options: ["Le Broker", "Le Router", "L'Antenne", "Le Gateway"],
    correctAnswer: 0
  }
];
