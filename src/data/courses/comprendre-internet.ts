import type { CourseDetail, ExamQuestion } from "../coursesData";

export const comprendreInternetCourse: CourseDetail = {
  slug: "comprendre-internet",
  categorySlug: "computer-science",
  title: "Comprendre le Fonctionnement d'Internet",
  description: "Découvrez ce qui se passe quand vous tapez une URL : DNS, TLS, Requêtes HTTP, CDN et Serveurs Web.",
  level: "Débutant",
  icon: "🌐",
  modules: [
    {
      title: "Module 1: Le Voyage d'une Requête Web",
      lessons: [
        {
          slug: "du-navigateur-au-serveur",
          title: "1.1 Résolution DNS, Handshake TLS & Rendu Navigateur",
          duration: "14 min",
          description: "Suivez le parcours complet d'un clic de souris à l'affichage des pixels.",
          objectives: [
            "Comprendre la résolution de nom DNS.",
            "Découvrir le poignée de main TCP / TLS (Cryptage HTTPS).",
            "Comprendre le parsing HTML, CSS (DOM/CSSOM) et le moteur de rendu."
          ],
          content: [
            "## Étapes d'un Chargement de Page Web",
            "1. **Saisie de l'URL :** `https://savoirplus.cd`",
            "2. **Résolution DNS :** Le navigateur demande l'adresse IP associée au serveur DNS.",
            "3. **Connexion TCP / TLS :** Établissement d'un canal sécurisé HTTPS.",
            "4. **Requête HTTP GET :** Le serveur retourne le document HTML.",
            "5. **Rendu du Navigateur :** Construction du DOM, téléchargement des scripts et affichage."
          ],
          examples: [
            "Codes de statut HTTP : `200 OK`, `301 Redirection`, `404 Non Trouvé`, `500 Erreur Serveur`."
          ],
          practice: [
            "Inspectez l'onglet Réseau (Network) des DevTools de votre navigateur lors du chargement d'une page."
          ],
          quiz: [
            {
              question: "Quel code de statut HTTP indique que la ressource demandée n'a pas été trouvée sur le serveur ?",
              options: ["404 Not Found", "200 OK", "500 Internal Server Error", "301 Moved Permanently"],
              answer: 0,
              explanation: "Le code 404 signifie que l'URL demandée n'existe pas sur le serveur."
            }
          ]
        }
      ]
    }
  ]
};

export const comprendreInternetExamQuestions: ExamQuestion[] = [
  {
    question: "Quel protocole chiffré sécurise la communication web (cadenas vert dans la barre d'adresse) ?",
    options: ["HTTPS (HTTP + TLS/SSL)", "HTTP basique", "FTP", "Telnet"],
    correctAnswer: 0
  }
];
