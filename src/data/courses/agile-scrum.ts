import type { CourseDetail, ExamQuestion } from "../coursesData";

export const agileScrumCourse: CourseDetail = {
  slug: "agile-scrum",
  categorySlug: "software-engineering",
  title: "Agile & Scrum : De la théorie à la pratique",
  description:
    "Maîtrise les principes de l'Agile, Scrum, Kanban, les User Stories, le Product Backlog, les Sprints, l'estimation, les cérémonies, les métriques et l'amélioration continue à travers des explications détaillées et des exemples de projets réels.",
  level: "Intermédiaire",
  icon: "🔄",

  modules: [
    {
      title: "Module 1 : Comprendre l'Agile",
      lessons: [
        {
          slug: "introduction-agile",
          title: "1.1 Qu'est-ce que la méthodologie Agile ?",
          duration: "20 min",
          description:
            "Découvre ce qu'est Agile, pourquoi cette approche existe et comment elle transforme la gestion des projets logiciels.",
          objectives: [
            "Définir la méthodologie Agile.",
            "Comprendre le développement itératif et incrémental.",
            "Comprendre pourquoi Agile favorise les feedbacks fréquents.",
            "Identifier les situations dans lesquelles Agile est particulièrement utile."
          ],
          content: [
            "## Introduction",
            "La méthodologie Agile est une approche de développement et de gestion de projet qui privilégie les cycles courts, la collaboration, le feedback fréquent et l'adaptation aux changements.",

            "Contrairement à une approche où l'ensemble du projet est planifié dans le détail avant le début du développement, Agile accepte l'idée qu'un projet logiciel évolue à mesure que l'équipe apprend davantage sur les utilisateurs, le marché et les contraintes techniques.",

            "## Pourquoi Agile est-il nécessaire ?",
            "Un projet logiciel comporte beaucoup d'incertitudes. Au début d'un projet, l'équipe ne connaît pas toujours parfaitement les besoins des utilisateurs. Certaines fonctionnalités peuvent sembler importantes mais être peu utilisées après leur lancement.",

            "Une approche Agile permet donc de réduire le risque en construisant progressivement le produit et en vérifiant régulièrement que ce qui est développé apporte réellement de la valeur.",

            "## Développement itératif",
            "Le développement itératif consiste à travailler par cycles successifs. Chaque cycle permet à l'équipe de produire une version améliorée du produit.",

            "Exemple : une équipe développe une application de réservation de restaurants. Elle peut commencer par la recherche de restaurants, puis ajouter progressivement la réservation, les favoris, les notifications et les avis.",

            "## Développement incrémental",
            "Le développement incrémental signifie que chaque cycle ajoute une nouvelle partie fonctionnelle au produit.",

            "On peut représenter le principe ainsi :",

            "```text\nIdée\n  ↓\nVersion 1\n  ↓\nVersion 2\n  ↓\nVersion 3\n  ↓\nProduit enrichi\n```",

            "Chaque version apporte davantage de valeur au lieu d'attendre la fin du projet pour présenter un produit complet.",

            "## Agile ne signifie pas simplement travailler rapidement",
            "Agile ne consiste pas à demander à une équipe de coder plus vite. L'objectif est plutôt de raccourcir les boucles de feedback, réduire les risques et apprendre rapidement.",

            "## Exemple réel",
            "Imagine une startup qui souhaite créer une plateforme de formation en ligne.",

            "Au lieu de développer immédiatement cinquante fonctionnalités, l'équipe peut commencer avec l'inscription, la consultation d'un cours et le suivi de progression.",

            "Après utilisation par les premiers apprenants, l'équipe découvre que les utilisateurs souhaitent surtout des quiz et des certificats. Ces informations peuvent influencer les prochaines priorités.",

            "## À retenir",
            "Agile repose principalement sur la livraison progressive de valeur, la collaboration, le feedback et l'adaptation."
          ],
          examples: [
            "Une équipe SaaS développe d'abord l'inscription et la connexion avant de développer les fonctionnalités avancées.",
            "Une équipe e-commerce lance d'abord le catalogue et le panier avant d'ajouter les recommandations personnalisées."
          ],
          practice: [
            "Choisis une application que tu utilises régulièrement.",
            "Identifie trois fonctionnalités nécessaires pour créer une première version simple.",
            "Identifie trois fonctionnalités qui pourraient être ajoutées plus tard.",
            "Explique comment le feedback des utilisateurs pourrait modifier les priorités."
          ],
          quiz: [
            {
              question: "Quel est l'un des principaux objectifs de l'approche Agile ?",
              options: [
                "Éviter toute modification des exigences",
                "Livrer progressivement de la valeur et s'adapter au feedback",
                "Terminer toute la documentation avant le développement",
                "Reporter les tests jusqu'à la fin du projet"
              ],
              answer: 1,
              explanation:
                "Agile privilégie les cycles courts, la livraison progressive et l'adaptation grâce au feedback."
            },
            {
              question: "Que signifie le développement incrémental ?",
              options: [
                "Développer tout le produit avant de le tester",
                "Ajouter progressivement des fonctionnalités au produit",
                "Supprimer les tests du projet",
                "Planifier uniquement la phase finale"
              ],
              answer: 1,
              explanation:
                "Chaque incrément ajoute une nouvelle partie fonctionnelle au produit."
            }
          ]
        },

        {
          slug: "manifeste-agile",
          title: "1.2 Le Manifeste Agile et ses valeurs",
          duration: "18 min",
          description:
            "Comprends les quatre valeurs fondamentales du Manifeste Agile et leur application dans un projet.",
          objectives: [
            "Connaître les quatre valeurs du Manifeste Agile.",
            "Comprendre la signification de chaque valeur.",
            "Relier les valeurs à des situations concrètes."
          ],
          content: [
            "## Le Manifeste Agile",
            "Le Manifeste Agile a été publié en 2001 par un groupe de professionnels du développement logiciel qui cherchaient à mieux répondre aux problèmes rencontrés dans les projets complexes.",

            "Il repose sur quatre valeurs fondamentales.",

            "## 1. Les individus et leurs interactions plutôt que les processus et les outils",
            "Les outils sont utiles, mais une équipe efficace dépend surtout de la qualité de sa communication et de sa collaboration.",

            "Utiliser Jira, Trello ou Azure DevOps ne rend pas automatiquement une équipe Agile.",

            "## 2. Des logiciels fonctionnels plutôt qu'une documentation exhaustive",
            "La documentation peut être importante, mais elle ne doit pas empêcher l'équipe de produire un logiciel réellement utilisable.",

            "L'objectif n'est pas de supprimer la documentation. Il s'agit de produire la documentation nécessaire tout en donnant la priorité à la valeur réelle du produit.",

            "## 3. La collaboration avec les clients plutôt que la négociation contractuelle",
            "Agile favorise une relation dans laquelle les utilisateurs, clients et parties prenantes participent régulièrement à l'évolution du produit.",

            "## 4. L'adaptation au changement plutôt que le suivi rigide d'un plan",
            "Un plan est utile, mais il doit pouvoir évoluer lorsque de nouvelles informations apparaissent.",

            "## Les quatre valeurs en pratique",

            "```text\nINDIVIDUS        → communication\nLOGICIEL         → valeur fonctionnelle\nCOLLABORATION    → feedback\nCHANGEMENT       → adaptation\n```",

            "## Une précision importante",
            "Les valeurs utilisent une formulation comparative. Elles ne signifient pas que les éléments situés à droite sont inutiles.",

            "Par exemple, Agile ne signifie pas qu'il ne faut jamais planifier. Il signifie que l'adaptation aux nouvelles informations est plus importante que l'adhésion aveugle à un plan initial."
          ],
          examples: [
            "Une équipe découvre pendant un Sprint que le besoin utilisateur a changé. Elle discute avec le Product Owner plutôt que de continuer aveuglément selon l'ancien plan.",
            "Une équipe conserve une documentation technique importante parce qu'elle est nécessaire à la maintenance du système."
          ],
          practice: [
            "Prends une équipe de développement imaginaire.",
            "Donne un exemple concret pour chacune des quatre valeurs Agile.",
            "Explique pourquoi les valeurs ne signifient pas qu'il faut abandonner les processus, outils, contrats ou documents."
          ],
          quiz: [
            {
              question: "Que signifie la valeur 'répondre au changement plutôt que suivre un plan' ?",
              options: [
                "Ne jamais planifier",
                "Changer constamment de direction sans objectif",
                "Pouvoir adapter le projet lorsque de nouvelles informations apparaissent",
                "Ne pas avoir de Product Backlog"
              ],
              answer: 2,
              explanation:
                "Agile reconnaît que les besoins peuvent évoluer et qu'une équipe doit pouvoir adapter ses priorités."
            }
          ]
        },

        {
          slug: "principes-agile",
          title: "1.3 Les principes Agile",
          duration: "22 min",
          description:
            "Explore les principes qui donnent une dimension pratique aux valeurs du Manifeste Agile.",
          objectives: [
            "Comprendre les grands principes Agile.",
            "Comprendre la notion de livraison fréquente.",
            "Comprendre l'importance du feedback et de l'amélioration continue."
          ],
          content: [
            "## Les principes derrière Agile",
            "Les valeurs du Manifeste Agile sont accompagnées de douze principes qui expliquent comment ces valeurs peuvent guider une équipe.",

            "Parmi les idées les plus importantes figurent la satisfaction du client, la livraison fréquente de logiciels fonctionnels, l'accueil des changements, la collaboration quotidienne, la confiance envers les équipes et l'amélioration continue.",

            "## Livraison fréquente",
            "Une équipe Agile cherche à produire régulièrement des résultats utilisables.",

            "Plus le feedback arrive tôt, plus l'équipe peut corriger sa trajectoire rapidement.",

            "## Collaboration quotidienne",
            "Les personnes métier et les personnes techniques doivent collaborer régulièrement pour éviter les malentendus.",

            "## Construire autour de personnes motivées",
            "Agile reconnaît l'importance de donner aux équipes un environnement dans lequel elles peuvent prendre des décisions et accomplir leur travail efficacement.",

            "## Amélioration continue",
            "Une équipe Agile ne cherche pas seulement à améliorer le produit. Elle cherche également à améliorer sa manière de travailler.",

            "Cette idée devient particulièrement importante pendant la Sprint Retrospective.",

            "## Illustration",

            "```text\nDévelopper\n    ↓\nLivrer\n    ↓\nObserver\n    ↓\nRecevoir du feedback\n    ↓\nApprendre\n    ↓\nAdapter\n    ↓\nDévelopper à nouveau\n```"
          ],
          examples: [
            "Une équipe publie une nouvelle fonctionnalité, observe les retours des utilisateurs et modifie la prochaine version.",
            "Une équipe constate que ses Pull Requests prennent trop longtemps à être révisées et décide d'améliorer son processus."
          ],
          practice: [
            "Identifie trois principes Agile que tu pourrais appliquer dans une équipe de développement.",
            "Pour chacun, donne un exemple concret.",
            "Explique comment une équipe peut mesurer si elle s'améliore réellement."
          ],
          quiz: [
            {
              question: "Pourquoi Agile encourage-t-il les livraisons fréquentes ?",
              options: [
                "Pour supprimer les tests",
                "Pour obtenir rapidement du feedback et réduire le risque",
                "Pour éviter toute communication avec les clients",
                "Pour empêcher les changements"
              ],
              answer: 1,
              explanation:
                "Les livraisons fréquentes permettent d'obtenir rapidement du feedback et de détecter les problèmes plus tôt."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2 : Agile, Waterfall et gestion du changement",
      lessons: [
        {
          slug: "agile-vs-waterfall",
          title: "2.1 Agile vs Waterfall",
          duration: "20 min",
          description:
            "Compare les approches Agile et Waterfall et comprends dans quels contextes chacune peut être pertinente.",
          objectives: [
            "Comprendre le modèle Waterfall.",
            "Comparer Agile et Waterfall.",
            "Identifier les différences de planification, feedback, tests et gestion du changement."
          ],
          content: [
            "## Waterfall",
            "Waterfall est une approche prédictive dans laquelle le projet est organisé en phases successives.",

            "```text\nRequirements\n     ↓\n   Design\n     ↓\nDevelopment\n     ↓\n  Testing\n     ↓\n  Release\n```",

            "Cette approche peut être adaptée lorsque les exigences sont relativement stables et que les étapes du projet doivent être fortement structurées.",

            "## Agile",

            "```text\nPlan → Build → Test → Feedback\n ↑                         ↓\n └──────── Adapt ──────────┘\n```",

            "Agile travaille par cycles et permet de réévaluer régulièrement les priorités.",

            "## Comparaison",

            "| Aspect | Agile | Waterfall |",
            "| --- | --- | --- |",
            "| Planification | Continue | Principalement en amont |",
            "| Livraison | Fréquente | Généralement finale ou par grandes phases |",
            "| Feedback | Régulier | Plus tardif |",
            "| Changement | Accepté | Plus coûteux |",
            "| Tests | Intégrés au développement | Souvent après l'implémentation |",
            "| Priorités | Peuvent évoluer | Plus stables |",

            "## Agile est-il toujours meilleur ?",
            "Non. Agile n'est pas une solution universelle.",

            "Un projet avec des exigences très stables, une forte réglementation ou des étapes de validation obligatoires peut nécessiter une approche plus prédictive ou hybride.",

            "La bonne question n'est donc pas 'Agile ou Waterfall est-il meilleur ?', mais plutôt 'quelle approche correspond aux contraintes du projet ?'."
          ],
          examples: [
            "Une startup SaaS dont les besoins changent régulièrement peut bénéficier d'Agile.",
            "Un projet soumis à des exigences réglementaires très précises peut utiliser une approche hybride combinant planification prédictive et pratiques Agile."
          ],
          practice: [
            "Imagine un projet de développement d'une application mobile.",
            "Liste cinq raisons pour lesquelles Agile pourrait être adapté.",
            "Imagine maintenant un projet dont toutes les exigences sont contractuellement figées.",
            "Explique pourquoi une approche différente pourrait être préférable."
          ],
          quiz: [
            {
              question: "Quelle est une différence fondamentale entre Agile et Waterfall ?",
              options: [
                "Agile ne nécessite aucun développement",
                "Waterfall interdit toujours les tests",
                "Agile permet d'adapter régulièrement les priorités",
                "Waterfall ne possède jamais de plan"
              ],
              answer: 2,
              explanation:
                "Agile est conçu pour permettre l'adaptation progressive des priorités."
            }
          ]
        },

        {
          slug: "gestion-changement-agile",
          title: "2.2 Gérer les changements dans un projet Agile",
          duration: "17 min",
          description:
            "Apprends comment une équipe Agile traite les nouvelles demandes sans transformer le projet en chaos.",
          objectives: [
            "Comprendre la gestion du changement.",
            "Savoir où placer une nouvelle demande.",
            "Comprendre le rôle de la priorisation."
          ],
          content: [
            "## Le changement fait partie du projet",
            "Dans Agile, accepter le changement ne signifie pas accepter toutes les demandes immédiatement.",

            "Une nouvelle demande doit être analysée, comprise et priorisée.",

            "## Le rôle du Product Backlog",
            "Les nouvelles fonctionnalités, améliorations, bugs et autres travaux peuvent être ajoutés au Product Backlog.",

            "Le Product Owner ordonne ensuite le backlog en fonction de la valeur, du risque, des dépendances et d'autres facteurs pertinents.",

            "## Exemple",

            "```text\nNouvelle demande\n      ↓\nAnalyse\n      ↓\nProduct Backlog\n      ↓\nPriorisation\n      ↓\nProchain Sprint\n      ↓\nDéveloppement\n```",

            "## Et si le changement est urgent ?",
            "Une équipe peut avoir besoin de traiter un problème critique. Dans ce cas, la priorité peut être modifiée en fonction de l'impact.",

            "Cependant, changer constamment les priorités au milieu d'un Sprint peut perturber l'objectif du Sprint. Scrum prévoit donc un cadre particulier pour protéger le Sprint tout en permettant l'adaptation du Product Backlog."
          ],
          examples: [
            "Une entreprise découvre une faille de sécurité critique. Le travail correspondant devient prioritaire.",
            "Un responsable demande une nouvelle couleur de bouton pendant le Sprint. La demande peut être ajoutée au backlog et priorisée ultérieurement."
          ],
          practice: [
            "Crée cinq nouvelles demandes pour une application.",
            "Classe-les selon leur valeur et leur urgence.",
            "Explique pourquoi une demande urgente n'est pas nécessairement la plus importante à long terme."
          ],
          quiz: [
            {
              question: "Que fait-on généralement d'une nouvelle fonctionnalité qui n'est pas immédiatement prioritaire ?",
              options: [
                "On la développe immédiatement",
                "On l'ajoute au Product Backlog pour être priorisée",
                "On supprime le produit",
                "On arrête le Sprint"
              ],
              answer: 1,
              explanation:
                "Les nouvelles demandes peuvent être ajoutées au Product Backlog puis ordonnées selon leur priorité."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3 : Scrum en profondeur",
      lessons: [
        {
          slug: "introduction-scrum",
          title: "3.1 Qu'est-ce que Scrum ?",
          duration: "20 min",
          description:
            "Découvre Scrum, ses fondements, ses rôles, ses événements et ses artefacts.",
          objectives: [
            "Définir Scrum.",
            "Comprendre les trois piliers de Scrum.",
            "Identifier les accountabilities, événements et artefacts."
          ],
          content: [
            "## Scrum",
            "Scrum est un framework permettant de développer, livrer et maintenir des produits complexes.",

            "Scrum repose sur une approche empirique : lorsque le problème est complexe et que tout ne peut pas être prédit, l'équipe avance par cycles, observe les résultats et adapte son travail.",

            "## Les trois piliers",
            "Scrum repose sur trois piliers :",

            "- **Transparence** : le travail et les informations importantes doivent être visibles.",
            "- **Inspection** : les résultats et le processus sont régulièrement examinés.",
            "- **Adaptation** : lorsque quelque chose s'écarte de l'objectif, l'équipe adapte son approche.",

            "## Les accountabilities",
            "Une Scrum Team comprend trois accountabilities :",

            "- Product Owner",
            "- Scrum Master",
            "- Developers",

            "## Les événements",
            "Les événements Scrum comprennent :",

            "- Sprint",
            "- Sprint Planning",
            "- Daily Scrum",
            "- Sprint Review",
            "- Sprint Retrospective",

            "## Les artefacts",
            "Scrum possède trois artefacts principaux :",

            "- Product Backlog",
            "- Sprint Backlog",
            "- Increment",

            "## Vue globale",

            "```text\nProduct Backlog\n       ↓\nSprint Planning\n       ↓\nSprint\n       ↓\n┌───────────────────┐\n│ Design             │\n│ Development        │\n│ Testing            │\n│ Daily Scrum        │\n└───────────────────┘\n       ↓\nSprint Review\n       ↓\nSprint Retrospective\n       ↓\nNouveau Sprint\n```"
          ],
          examples: [
            "Une équipe Savoir+ planifie un Sprint pour améliorer la page de cours, puis présente le résultat aux parties prenantes à la fin du Sprint."
          ],
          practice: [
            "Dessine sur papier le cycle complet d'un Sprint Scrum.",
            "Associe chaque événement à son objectif.",
            "Explique la différence entre un artefact et un événement."
          ],
          quiz: [
            {
              question: "Quels sont les trois piliers de Scrum ?",
              options: [
                "Planification, développement, livraison",
                "Transparence, inspection, adaptation",
                "Design, code, test",
                "Backlog, Sprint, Review"
              ],
              answer: 1,
              explanation:
                "Scrum repose sur la transparence, l'inspection et l'adaptation."
            }
          ]
        },

        {
          slug: "roles-scrum",
          title: "3.2 Les rôles et responsabilités dans Scrum",
          duration: "20 min",
          description:
            "Comprends les responsabilités du Product Owner, du Scrum Master et des Developers.",
          objectives: [
            "Comprendre le rôle du Product Owner.",
            "Comprendre le rôle du Scrum Master.",
            "Comprendre les responsabilités des Developers.",
            "Éviter les confusions de responsabilités."
          ],
          content: [
            "## Product Owner",
            "Le Product Owner est responsable de maximiser la valeur du produit résultant du travail de la Scrum Team.",

            "Il est notamment responsable de la gestion efficace du Product Backlog : développer et communiquer le Product Goal, créer et communiquer les Product Backlog Items, les ordonner et s'assurer que le backlog est transparent et compris.",

            "## Scrum Master",
            "Le Scrum Master aide la Scrum Team à comprendre et appliquer Scrum. Il favorise l'efficacité de l'équipe, aide à supprimer les obstacles et accompagne l'organisation dans son adoption de Scrum.",

            "## Developers",
            "Les Developers créent chaque Sprint un Increment utilisable. Ils sont responsables de créer le Sprint Backlog, d'adapter leur plan quotidiennement et de maintenir la qualité grâce à la Definition of Done.",

            "## Attention aux anciennes descriptions",
            "Dans les anciennes versions de Scrum, on parlait souvent de 'Development Team'. Le Scrum Guide actuel parle des Developers comme l'une des trois accountabilities de la Scrum Team.",

            "## Une équipe saine",

            "```text\n             Product Owner\n                   │\n                   │ valeur\n                   ↓\nDevelopers ← Scrum Master\n    │              │\n    │              │ facilitation\n    └──── produit ──┘\n```",

            "Les responsabilités sont différentes, mais les trois accountabilities travaillent ensemble vers un même objectif."
          ],
          examples: [
            "Le Product Owner décide de l'ordre du backlog, mais ne dicte pas aux Developers comment écrire le code.",
            "Le Scrum Master facilite l'amélioration du système de travail sans devenir le chef hiérarchique de l'équipe."
          ],
          practice: [
            "Pour chacune des trois accountabilities, écris cinq responsabilités.",
            "Donne un exemple de décision qui appartient aux Developers.",
            "Donne un exemple de décision qui appartient au Product Owner."
          ],
          quiz: [
            {
              question: "Qui est responsable de maximiser la valeur du produit ?",
              options: [
                "Le Scrum Master",
                "Les Developers",
                "Le Product Owner",
                "Le responsable informatique"
              ],
              answer: 2,
              explanation:
                "Le Product Owner est responsable de maximiser la valeur du produit."
            }
          ]
        },

        {
          slug: "scrum-events",
          title: "3.3 Les événements Scrum",
          duration: "24 min",
          description:
            "Apprends à quoi servent le Sprint Planning, le Daily Scrum, la Sprint Review et la Sprint Retrospective.",
          objectives: [
            "Comprendre l'objectif de chaque événement Scrum.",
            "Comprendre la différence entre Review et Retrospective.",
            "Comprendre le rôle du Daily Scrum."
          ],
          content: [
            "## Le Sprint",
            "Le Sprint est un événement conteneur d'une durée fixe d'un mois ou moins. Un nouveau Sprint commence immédiatement après le précédent.",

            "## Sprint Planning",
            "Le Sprint Planning lance le Sprint. L'équipe discute notamment de la valeur du Sprint, de ce qui peut être réalisé et de la manière dont le travail sera effectué.",

            "## Daily Scrum",
            "Le Daily Scrum est un événement de 15 minutes destiné aux Developers. Son objectif est d'inspecter la progression vers le Sprint Goal et d'adapter le Sprint Backlog si nécessaire.",

            "Le Daily Scrum n'est pas une réunion destinée à faire un rapport au manager.",

            "## Sprint Review",
            "La Sprint Review permet d'inspecter le résultat du Sprint avec les parties prenantes et d'adapter le Product Backlog en fonction de ce qui a été appris.",

            "## Sprint Retrospective",
            "La Retrospective permet à la Scrum Team d'inspecter sa manière de travailler et d'identifier les améliorations les plus utiles.",

            "## Différence Review / Retrospective",

            "| Review | Retrospective |",
            "| --- | --- |",
            "| Produit | Processus et collaboration |",
            "| Parties prenantes | Scrum Team |",
            "| Feedback sur le produit | Amélioration du travail |",

            "## Cycle",

            "```text\nPlanning\n   ↓\nDaily Scrum\n   ↓\nDevelopment\n   ↓\nReview\n   ↓\nRetrospective\n   ↓\nNext Sprint\n```"
          ],
          examples: [
            "Pendant la Sprint Review, l'équipe Savoir+ démontre la nouvelle page de cours.",
            "Pendant la Retrospective, l'équipe constate que les tests commencent trop tard et décide de les intégrer plus tôt."
          ],
          practice: [
            "Écris l'objectif de chaque événement Scrum en une phrase.",
            "Explique pourquoi Review et Retrospective ne sont pas la même réunion.",
            "Imagine trois problèmes qu'une équipe pourrait identifier pendant une Retrospective."
          ],
          quiz: [
            {
              question: "Quelle est la durée du Daily Scrum ?",
              options: [
                "15 minutes",
                "30 minutes",
                "1 heure",
                "La durée est toujours de 2 heures"
              ],
              answer: 0,
              explanation:
                "Le Daily Scrum est un événement de 15 minutes."
            },
            {
              question: "Quel événement se concentre principalement sur l'amélioration du processus de travail ?",
              options: [
                "Sprint Planning",
                "Sprint Review",
                "Sprint Retrospective",
                "Daily Scrum"
              ],
              answer: 2,
              explanation:
                "La Sprint Retrospective est consacrée à l'inspection et à l'amélioration de la manière de travailler."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4 : Product Backlog et User Stories",
      lessons: [
        {
          slug: "product-backlog",
          title: "4.1 Le Product Backlog",
          duration: "20 min",
          description:
            "Apprends à construire, organiser et prioriser un Product Backlog efficace.",
          objectives: [
            "Définir un Product Backlog.",
            "Comprendre son rôle.",
            "Apprendre à ordonner les éléments du backlog."
          ],
          content: [
            "## Qu'est-ce qu'un Product Backlog ?",
            "Le Product Backlog est une liste ordonnée et émergente de tout ce qui est nécessaire pour améliorer le produit.",

            "Il peut contenir des fonctionnalités, corrections de bugs, améliorations techniques, recherches, améliorations UX et autres travaux.",

            "## Exemple",

            "```text\nPRODUCT BACKLOG\n\n1. Connexion utilisateur       🔴\n2. Création de compte          🔴\n3. Paiement                    🔴\n4. Notifications              🟠\n5. Mode sombre                 🟢\n6. Avatar utilisateur          🟢\n```",

            "L'ordre du backlog est important. L'équipe ne travaille pas simplement sur les éléments qu'elle trouve les plus faciles.",

            "## Backlog Refinement",
            "Le backlog est régulièrement affiné afin d'améliorer la compréhension, la taille et l'ordre des éléments.",

            "## Un bon backlog",
            "Un backlog utile est compréhensible, visible, ordonné et suffisamment détaillé pour permettre à l'équipe de prendre de bonnes décisions.",

            "## Product Goal",
            "Le Product Goal décrit un état futur du produit vers lequel la Scrum Team travaille. Il aide à donner une direction au backlog."
          ],
          examples: [
            "Pour Savoir+, le Product Goal pourrait être de permettre aux utilisateurs de suivre un parcours d'apprentissage complet et de mesurer leur progression.",
            "Une fonctionnalité critique de paiement peut être priorisée avant une option esthétique comme un nouveau thème."
          ],
          practice: [
            "Crée un Product Backlog de dix éléments pour une application mobile.",
            "Classe-les du plus important au moins important.",
            "Explique la raison de tes cinq premières priorités."
          ],
          quiz: [
            {
              question: "Que représente principalement le Product Backlog ?",
              options: [
                "Uniquement les bugs",
                "Une liste ordonnée de tout ce qui est nécessaire pour améliorer le produit",
                "La liste des employés",
                "Le planning annuel de l'entreprise"
              ],
              answer: 1,
              explanation:
                "Le Product Backlog contient les éléments nécessaires à l'amélioration du produit et est continuellement ordonné et affiné."
            }
          ]
        },

        {
          slug: "user-stories",
          title: "4.2 Écrire de bonnes User Stories",
          duration: "22 min",
          description:
            "Apprends à transformer les besoins utilisateurs en User Stories compréhensibles et testables.",
          objectives: [
            "Comprendre la structure d'une User Story.",
            "Écrire des User Stories orientées utilisateur.",
            "Définir des critères d'acceptation."
          ],
          content: [
            "## Qu'est-ce qu'une User Story ?",
            "Une User Story décrit une capacité souhaitée du point de vue de la personne qui utilisera le produit.",

            "Une structure courante est :",

            "```text\nEn tant que [utilisateur]\nJe veux [action]\nAfin de [bénéfice]\n```",

            "## Exemple",

            "En tant qu'apprenant, je veux marquer une leçon comme terminée afin de suivre ma progression.",

            "## Pourquoi cette structure ?",
            "Elle force l'équipe à réfléchir à l'utilisateur et à la valeur recherchée plutôt qu'à commencer directement par une solution technique.",

            "## Une mauvaise User Story",
            "```text\nCréer une table PostgreSQL appelée lesson_progress.\n```",

            "Cette formulation décrit principalement une implémentation technique.",

            "## Une meilleure formulation",
            "```text\nEn tant qu'apprenant,\nje veux voir ma progression dans un cours,\nafin de savoir quelles leçons il me reste à terminer.\n```",

            "## Critères d'acceptation",
            "Les critères d'acceptation définissent les conditions permettant de vérifier que la fonctionnalité répond au besoin.",

            "Exemple :",

            "```text\nÉtant donné que l'utilisateur a terminé la leçon 3,\nquand il consulte son cours,\nalors la progression affiche 3 leçons terminées.\n```"
          ],
          examples: [
            "En tant qu'utilisateur, je veux réinitialiser mon mot de passe afin de récupérer l'accès à mon compte.",
            "En tant qu'administrateur, je veux consulter les utilisateurs inscrits afin de gérer la plateforme."
          ],
          practice: [
            "Écris cinq User Stories pour une plateforme e-learning.",
            "Ajoute deux critères d'acceptation à chacune.",
            "Identifie une User Story qui est trop grande et découpe-la en plusieurs stories."
          ],
          quiz: [
            {
              question: "Quel est l'objectif principal d'une User Story ?",
              options: [
                "Décrire uniquement la base de données",
                "Décrire un besoin du point de vue de l'utilisateur",
                "Remplacer tous les tests",
                "Décrire l'architecture serveur"
              ],
              answer: 1,
              explanation:
                "Une User Story exprime un besoin ou une capacité du point de vue de l'utilisateur."
            }
          ]
        },

        {
          slug: "trois-c-agile",
          title: "4.3 Les 3 C : Card, Conversation, Confirmation",
          duration: "18 min",
          description:
            "Découvre le modèle des 3 C utilisé pour comprendre les User Stories et éviter les spécifications trop rigides.",
          objectives: [
            "Comprendre les trois C.",
            "Comprendre pourquoi une User Story ne doit pas être uniquement un document.",
            "Relier User Stories, conversations et critères d'acceptation."
          ],
          content: [
            "## Les 3 C",
            "Les 3 C sont Card, Conversation et Confirmation.",

            "## Card",
            "La Card représente la User Story elle-même. Elle constitue un rappel du besoin plutôt qu'une spécification exhaustive.",

            "## Conversation",
            "La Conversation représente les échanges nécessaires pour comprendre le besoin, les contraintes et les détails de la fonctionnalité.",

            "Une User Story mal comprise peut conduire à une excellente implémentation technique d'un mauvais besoin.",

            "## Confirmation",
            "La Confirmation correspond aux critères permettant de vérifier que le résultat répond au besoin.",

            "## Illustration",

            "```text\n       CARD\n        ↓\n  Conversation\n        ↓\n  Confirmation\n        ↓\n    Feedback\n        ↓\n Nouvelle conversation\n```",

            "Ce modèle rappelle que les exigences évoluent grâce à la communication."
          ],
          examples: [
            "Une Card indique qu'un utilisateur veut filtrer ses cours. La Conversation précise les filtres nécessaires. La Confirmation définit les résultats attendus."
          ],
          practice: [
            "Crée une User Story.",
            "Écris cinq questions qui pourraient être discutées pendant la Conversation.",
            "Écris trois critères permettant de confirmer que la story est correcte."
          ],
          quiz: [
            {
              question: "Que représente la Conversation dans les 3 C ?",
              options: [
                "Le code source",
                "Les échanges permettant de clarifier le besoin",
                "La base de données",
                "Le budget"
              ],
              answer: 1,
              explanation:
                "La Conversation représente les échanges nécessaires pour développer une compréhension commune du besoin."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5 : Estimation et planification Agile",
      lessons: [
        {
          slug: "estimation-agile",
          title: "5.1 Estimer le travail en Agile",
          duration: "20 min",
          description:
            "Comprends pourquoi l'estimation Agile est différente d'une estimation traditionnelle.",
          objectives: [
            "Comprendre l'objectif de l'estimation.",
            "Comprendre les Story Points.",
            "Éviter les mauvaises pratiques d'estimation."
          ],
          content: [
            "## Pourquoi estimer ?",
            "L'estimation aide l'équipe à comprendre la taille relative du travail, à planifier et à prendre des décisions.",

            "L'objectif n'est pas de prédire parfaitement le nombre exact d'heures nécessaires.",

            "## Story Points",
            "Les Story Points sont souvent utilisés pour comparer la taille relative des éléments du backlog.",

            "Une équipe peut utiliser une échelle comme :",

            "```text\n1 → très petit\n2 → petit\n3 → moyen\n5 → assez grand\n8 → grand\n13 → très grand\n```",

            "Ces nombres ne représentent pas nécessairement des heures.",

            "## Planning Poker",
            "Le Planning Poker est une technique dans laquelle les membres de l'équipe choisissent individuellement une estimation avant de discuter des différences.",

            "Cela permet de faire émerger les hypothèses cachées.",

            "## Pourquoi deux développeurs peuvent-ils choisir 3 et 8 ?",
            "Parce qu'ils n'ont peut-être pas la même compréhension de la User Story, des risques ou des dépendances.",

            "La discussion qui suit est souvent plus importante que le nombre final."
          ],
          examples: [
            "Une story simple de changement de texte peut valoir 1 point tandis qu'une fonctionnalité impliquant paiement, sécurité et intégration externe peut valoir 8 ou 13."
          ],
          practice: [
            "Crée six User Stories.",
            "Attribue-leur des Story Points.",
            "Explique pourquoi chacune est plus petite ou plus grande qu'une autre.",
            "Identifie les stories trop grandes pour être développées confortablement dans un Sprint."
          ],
          quiz: [
            {
              question: "Que représentent généralement les Story Points ?",
              options: [
                "Un nombre exact d'heures",
                "Une taille relative du travail",
                "Le salaire du développeur",
                "Le nombre de lignes de code"
              ],
              answer: 1,
              explanation:
                "Les Story Points servent généralement à exprimer une taille relative tenant compte de l'effort, de la complexité et de l'incertitude."
            }
          ]
        },

        {
          slug: "velocity-agile",
          title: "5.2 Velocity et capacité de l'équipe",
          duration: "17 min",
          description:
            "Comprends comment une équipe peut utiliser ses données historiques pour améliorer sa planification.",
          objectives: [
            "Comprendre la notion de vélocité.",
            "Différencier vélocité et performance individuelle.",
            "Comprendre les limites de cet indicateur."
          ],
          content: [
            "## Qu'est-ce que la vélocité ?",
            "Dans certaines équipes Scrum, la vélocité représente la quantité de travail estimée terminée pendant un Sprint.",

            "Par exemple :",

            "```text\nSprint 1 → 24 points\nSprint 2 → 27 points\nSprint 3 → 25 points\nSprint 4 → 26 points\n```",

            "La moyenne peut aider l'équipe à avoir une idée de sa capacité historique.",

            "## Ce qu'il ne faut pas faire",
            "La vélocité ne devrait pas être utilisée comme une compétition entre équipes ou comme une mesure individuelle de performance.",

            "Une équipe qui augmente artificiellement ses Story Points ne produit pas automatiquement davantage de valeur.",

            "## Vélocité et prévision",
            "Les données historiques peuvent aider à produire des prévisions, mais elles restent des estimations. Les équipes doivent tenir compte des changements de contexte, des dépendances et des incertitudes."
          ],
          examples: [
            "Une équipe constate que sa vélocité moyenne se situe autour de 25 points. Elle peut utiliser cette information pour discuter de la quantité de travail potentiellement réalisable, sans considérer 25 comme une cible obligatoire."
          ],
          practice: [
            "Imagine quatre Sprints avec des vélocités différentes.",
            "Calcule la moyenne.",
            "Explique pourquoi il serait dangereux d'imposer cette moyenne comme objectif individuel."
          ],
          quiz: [
            {
              question: "Quelle utilisation est la plus saine de la vélocité ?",
              options: [
                "Comparer les salaires",
                "Punir une équipe",
                "Aider à prévoir la capacité future avec prudence",
                "Augmenter artificiellement les Story Points"
              ],
              answer: 2,
              explanation:
                "La vélocité peut fournir une information historique utile pour les prévisions, mais ne devrait pas devenir une cible manipulée."
            }
          ]
        },

        {
          slug: "sprint-planning",
          title: "5.3 Sprint Planning et Sprint Goal",
          duration: "20 min",
          description:
            "Apprends à préparer un Sprint cohérent autour d'un objectif clair.",
          objectives: [
            "Comprendre le Sprint Goal.",
            "Comprendre comment sélectionner le travail.",
            "Comprendre la relation entre Product Backlog et Sprint Backlog."
          ],
          content: [
            "## Le Sprint Goal",
            "Le Sprint Goal est l'objectif unique du Sprint. Il donne une direction cohérente au travail sélectionné.",

            "## Exemple",

            "Mauvais objectif :",
            "Faire 25 tâches.",

            "Meilleur objectif :",
            "Permettre aux nouveaux utilisateurs de créer leur compte et d'accéder à leur espace personnel.",

            "## Sélection du travail",
            "Pendant le Sprint Planning, l'équipe discute de ce qui peut être accompli et de la manière de réaliser le travail.",

            "## Sprint Backlog",
            "Le Sprint Backlog contient le Sprint Goal, les éléments du Product Backlog sélectionnés pour le Sprint et le plan d'action élaboré par les Developers.",

            "## Illustration",

            "```text\nProduct Backlog\n      ↓\nSprint Planning\n      ↓\nSprint Goal\n      ↓\nSprint Backlog\n      ↓\nDevelopment\n```"
          ],
          examples: [
            "Sprint Goal : permettre aux utilisateurs de récupérer leur mot de passe.",
            "Les stories peuvent alors inclure l'écran de récupération, l'envoi de l'e-mail et la validation du nouveau mot de passe."
          ],
          practice: [
            "Crée un Sprint Goal pour une application e-commerce.",
            "Ajoute cinq User Stories qui contribuent à cet objectif.",
            "Identifie une story qui ne contribue pas à l'objectif."
          ],
          quiz: [
            {
              question: "Quel est le rôle du Sprint Goal ?",
              options: [
                "Définir le salaire de l'équipe",
                "Donner une direction et un objectif commun au Sprint",
                "Lister tous les bugs historiques",
                "Remplacer le Product Goal"
              ],
              answer: 1,
              explanation:
                "Le Sprint Goal donne une direction commune au travail réalisé pendant le Sprint."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6 : Kanban, XP et autres approches Agile",
      lessons: [
        {
          slug: "kanban",
          title: "6.1 Kanban",
          duration: "20 min",
          description:
            "Découvre Kanban, la visualisation du travail, les limites WIP et l'amélioration du flux.",
          objectives: [
            "Comprendre Kanban.",
            "Comprendre les limites de travail en cours.",
            "Comprendre les métriques de flux."
          ],
          content: [
            "## Kanban",
            "Kanban est une méthode de gestion du travail qui met l'accent sur la visualisation, le flux et l'amélioration continue.",

            "## Tableau Kanban",

            "```text\nTODO          IN PROGRESS        DONE\n──────        ───────────        ─────\nStory A       Story D            Story X\nStory B       Story E            Story Y\nStory C\n```",

            "Le tableau permet de voir où se trouve chaque élément.",

            "## WIP Limit",
            "Une limite WIP, ou Work In Progress Limit, limite le nombre d'éléments pouvant être simultanément dans une colonne.",

            "Par exemple :",

            "```text\nIN PROGRESS\nWIP Limit = 2\n\n[Story D]\n[Story E]\n\nNouvelle story → attendre\n```",

            "Cela évite qu'une équipe commence trop de tâches en même temps.",

            "## Flux",
            "L'objectif est de faire circuler le travail de manière fluide et de réduire les blocages.",

            "## Kanban vs Scrum",
            "Scrum impose un cadre avec des Sprints, des événements et des accountabilities précises. Kanban est davantage centré sur le flux et peut fonctionner avec une approche de livraison continue."
          ],
          examples: [
            "Une équipe support utilise Kanban pour gérer les tickets entrants sans attendre la fin d'un Sprint.",
            "Une équipe limite le nombre de tâches en développement à trois afin d'éviter les multitâches."
          ],
          practice: [
            "Crée un tableau Kanban pour une application web.",
            "Ajoute cinq tâches.",
            "Ajoute une WIP Limit.",
            "Identifie un éventuel goulot d'étranglement."
          ],
          quiz: [
            {
              question: "Que signifie WIP ?",
              options: [
                "Work In Progress",
                "Web Integration Process",
                "Weekly Internal Planning",
                "Workflow Implementation Protocol"
              ],
              answer: 0,
              explanation:
                "WIP signifie Work In Progress, c'est-à-dire le travail actuellement en cours."
            }
          ]
        },

        {
          slug: "extreme-programming",
          title: "6.2 Extreme Programming (XP)",
          duration: "20 min",
          description:
            "Découvre les pratiques d'ingénierie associées à Extreme Programming.",
          objectives: [
            "Comprendre XP.",
            "Identifier ses principales pratiques techniques.",
            "Comprendre le lien entre Agile et excellence technique."
          ],
          content: [
            "## Extreme Programming",
            "Extreme Programming, ou XP, est une approche Agile qui met particulièrement l'accent sur les pratiques d'ingénierie et la qualité du logiciel.",

            "## Pratiques importantes",
            "- Pair programming",
            "- Test-Driven Development",
            "- Continuous Integration",
            "- Refactoring",
            "- Petites releases",
            "- Feedback fréquent",

            "## Pair Programming",
            "Deux développeurs travaillent ensemble sur une même tâche. Cela peut favoriser le partage de connaissances et la détection précoce de problèmes.",

            "## TDD",
            "Test-Driven Development consiste à écrire un test avant l'implémentation correspondante.",

            "```text\nTest qui échoue\n      ↓\nCode minimal\n      ↓\nTest réussi\n      ↓\nRefactoring\n```",

            "## Refactoring",
            "Le refactoring consiste à améliorer la structure interne du code sans modifier son comportement attendu.",

            "## Continuous Integration",
            "L'intégration continue consiste à intégrer régulièrement les changements dans une base de code commune et à automatiser des vérifications."
          ],
          examples: [
            "Un développeur écrit d'abord un test pour une fonction de calcul avant d'implémenter cette fonction.",
            "Deux développeurs travaillent ensemble sur une partie complexe d'un système de paiement."
          ],
          practice: [
            "Explique comment TDD peut réduire certains risques.",
            "Donne deux avantages du pair programming.",
            "Explique pourquoi le refactoring est important dans un projet long."
          ],
          quiz: [
            {
              question: "Quelle pratique est fortement associée à XP ?",
              options: [
                "Documentation avant toute discussion",
                "Pair programming",
                "Absence de tests",
                "Développement sans feedback"
              ],
              answer: 1,
              explanation:
                "Le pair programming fait partie des pratiques traditionnellement associées à Extreme Programming."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7 : Qualité, Definition of Done et livraison",
      lessons: [
        {
          slug: "definition-of-done",
          title: "7.1 Definition of Done",
          duration: "18 min",
          description:
            "Comprends comment une équipe définit ce que signifie réellement 'terminé'.",
          objectives: [
            "Définir la Definition of Done.",
            "Comprendre son importance pour la qualité.",
            "Différencier Done et simplement 'codé'."
          ],
          content: [
            "## Qu'est-ce que la Definition of Done ?",
            "La Definition of Done est une description formelle de l'état du travail lorsqu'il respecte les mesures de qualité requises pour le produit.",

            "Elle crée une compréhension commune de ce que signifie réellement terminer un élément.",

            "## Exemple",

            "```text\nDefinition of Done\n\n✓ Code développé\n✓ Code revu\n✓ Tests automatisés réussis\n✓ Tests fonctionnels effectués\n✓ Documentation nécessaire mise à jour\n✓ Pas de bug bloquant connu\n✓ Fonctionnalité intégrée\n```",

            "## Pourquoi est-ce important ?",
            "Sans définition commune, un développeur peut considérer une tâche terminée dès que le code compile alors que le testeur considère qu'elle n'est terminée qu'après les tests.",

            "La Definition of Done réduit cette ambiguïté.",

            "## Done ≠ presque terminé",
            "Une fonctionnalité qui nécessite encore des tests importants ne devrait pas être présentée comme réellement terminée."
          ],
          examples: [
            "Une User Story dont le code est écrit mais qui n'a pas encore été testée ne respecte pas une Definition of Done exigeant des tests réussis."
          ],
          practice: [
            "Crée une Definition of Done pour une petite application web.",
            "Ajoute au minimum huit critères.",
            "Explique pourquoi chaque critère est important."
          ],
          quiz: [
            {
              question: "Quel est l'objectif principal de la Definition of Done ?",
              options: [
                "Créer une liste de bugs",
                "Définir les conditions permettant de considérer un travail comme réellement terminé",
                "Définir le budget",
                "Remplacer le Product Backlog"
              ],
              answer: 1,
              explanation:
                "La Definition of Done établit une compréhension commune de l'état de qualité requis pour considérer un travail terminé."
            }
          ]
        },

        {
          slug: "acceptance-criteria",
          title: "7.2 Critères d'acceptation et qualité",
          duration: "18 min",
          description:
            "Apprends à définir des critères d'acceptation précis et testables.",
          objectives: [
            "Comprendre les critères d'acceptation.",
            "Écrire des critères testables.",
            "Différencier critères d'acceptation et Definition of Done."
          ],
          content: [
            "## Critères d'acceptation",
            "Les critères d'acceptation décrivent les conditions spécifiques qu'une fonctionnalité doit respecter pour répondre au besoin.",

            "Exemple pour une connexion :",

            "```text\nÉtant donné un utilisateur enregistré,\nquand il saisit un e-mail et un mot de passe valides,\nalors il accède à son tableau de bord.\n```",

            "On peut ajouter :",

            "```text\nÉtant donné un mot de passe incorrect,\nquand l'utilisateur tente de se connecter,\nalors un message d'erreur est affiché.\n```",

            "## Critères vs Definition of Done",

            "| Critères d'acceptation | Definition of Done |",
            "| --- | --- |",
            "| Spécifiques à la fonctionnalité | Commune au produit ou à l'équipe |",
            "| Décrivent le comportement attendu | Décrit le niveau de qualité |",
            "| Répondent à 'est-ce ce que l'utilisateur attend ?' | Répond à 'est-ce vraiment terminé ?' |"
          ],
          examples: [
            "Une fonctionnalité de paiement doit accepter une carte valide, refuser une carte expirée et afficher un résultat clair."
          ],
          practice: [
            "Écris les critères d'acceptation d'une fonctionnalité de connexion.",
            "Écris ensuite une Definition of Done.",
            "Explique la différence entre les deux."
          ],
          quiz: [
            {
              question: "Les critères d'acceptation sont principalement utilisés pour :",
              options: [
                "Définir le salaire",
                "Décrire les conditions spécifiques de réussite d'une fonctionnalité",
                "Remplacer le Scrum Master",
                "Déterminer la taille de l'équipe"
              ],
              answer: 1,
              explanation:
                "Ils permettent de vérifier qu'une fonctionnalité répond au besoin attendu."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8 : Métriques et amélioration continue",
      lessons: [
        {
          slug: "agile-metrics",
          title: "8.1 Les métriques Agile",
          duration: "22 min",
          description:
            "Découvre les principales métriques permettant d'observer le flux, la qualité et les résultats d'une équipe.",
          objectives: [
            "Comprendre les métriques Agile.",
            "Différencier métriques de flux et métriques de résultat.",
            "Éviter les mauvaises interprétations."
          ],
          content: [
            "## Pourquoi mesurer ?",
            "Les métriques doivent aider une équipe à apprendre et à prendre de meilleures décisions. Elles ne doivent pas devenir des objectifs artificiels qui encouragent les comportements contre-productifs.",

            "## Cycle Time",
            "Le Cycle Time mesure généralement le temps nécessaire pour qu'un élément passe du début du travail jusqu'à sa terminaison.",

            "## Lead Time",
            "Le Lead Time mesure généralement le temps entre la demande et la livraison.",

            "## Throughput",
            "Le Throughput représente le nombre d'éléments terminés pendant une période donnée.",

            "## Burndown",
            "Un Burndown Chart montre l'évolution du travail restant par rapport au temps.",

            "## Exemple",

            "```text\nTravail restant\n100 |■■■■■■■■■■\n 80 |■■■■■■■■\n 60 |■■■■■■\n 40 |■■■■\n 20 |■■\n  0 |________________\n      J1 J2 J3 J4 J5\n```",

            "## Attention aux métriques",
            "Une métrique peut être manipulée si elle devient une cible individuelle.",

            "Par exemple, augmenter artificiellement le nombre de Story Points attribués à une User Story ne signifie pas que l'équipe crée davantage de valeur.",

            "La meilleure utilisation des métriques consiste à observer les tendances et à identifier les opportunités d'amélioration."
          ],
          examples: [
            "Une équipe constate que son Cycle Time augmente régulièrement. Elle analyse les blocages plutôt que de demander simplement aux développeurs de travailler plus vite."
          ],
          practice: [
            "Imagine cinq tickets avec leurs dates de début et de fin.",
            "Calcule leur Cycle Time.",
            "Identifie les tickets les plus longs.",
            "Propose deux hypothèses expliquant ces délais."
          ],
          quiz: [
            {
              question: "Pourquoi faut-il être prudent avec les métriques Agile ?",
              options: [
                "Elles sont toujours inutiles",
                "Elles peuvent encourager de mauvais comportements lorsqu'elles deviennent des objectifs",
                "Elles remplacent les utilisateurs",
                "Elles empêchent les rétrospectives"
              ],
              answer: 1,
              explanation:
                "Une métrique utilisée comme cible peut être manipulée et produire des comportements contre-productifs."
            }
          ]
        },

        {
          slug: "retrospective",
          title: "8.2 La Sprint Retrospective et l'amélioration continue",
          duration: "18 min",
          description:
            "Apprends à utiliser la rétrospective pour identifier les problèmes et améliorer progressivement le fonctionnement de l'équipe.",
          objectives: [
            "Comprendre le rôle de la Retrospective.",
            "Identifier les problèmes de processus.",
            "Transformer les observations en actions concrètes."
          ],
          content: [
            "## La Retrospective",
            "La Sprint Retrospective est un moment durant lequel la Scrum Team inspecte la manière dont le dernier Sprint s'est déroulé.",

            "Elle peut examiner :",

            "- la collaboration",
            "- les outils",
            "- la qualité",
            "- les tests",
            "- la communication",
            "- les dépendances",
            "- les processus",

            "## Exemple de format",

            "```text\nQU'EST-CE QUI A BIEN FONCTIONNÉ ?\n\nQU'EST-CE QUI N'A PAS FONCTIONNÉ ?\n\nQUE DEVONS-NOUS ESSAYER ?\n```",

            "## Passer de la plainte à l'action",
            "Une bonne rétrospective ne doit pas simplement produire une longue liste de problèmes.",

            "L'équipe doit sélectionner quelques améliorations réalistes et décider comment les tester.",

            "## Exemple",

            "Problème : les Pull Requests restent ouvertes trop longtemps.",

            "Action : mettre en place une règle demandant une première revue dans la journée ouvrée suivante.",

            "Au Sprint suivant, l'équipe observe si le changement améliore réellement le flux."
          ],
          examples: [
            "Une équipe constate que les stories sont souvent bloquées par des dépendances externes. Elle décide d'identifier ces dépendances dès le Sprint Planning."
          ],
          practice: [
            "Imagine une équipe ayant livré plusieurs fonctionnalités mais ayant accumulé des retards.",
            "Liste cinq problèmes possibles.",
            "Choisis deux actions d'amélioration.",
            "Définis comment vérifier si ces actions ont fonctionné."
          ],
          quiz: [
            {
              question: "Quel est l'objectif principal d'une Retrospective ?",
              options: [
                "Évaluer les salaires",
                "Améliorer continuellement la manière de travailler",
                "Présenter le produit aux clients",
                "Prioriser tout le Product Backlog"
              ],
              answer: 1,
              explanation:
                "La Retrospective sert principalement à inspecter le processus et identifier des améliorations."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9 : Agile dans un projet réel",
      lessons: [
        {
          slug: "projet-agile-exemple",
          title: "9.1 Exemple complet : construire une plateforme e-learning",
          duration: "25 min",
          description:
            "Suis un projet fictif de bout en bout pour comprendre comment les concepts Agile s'assemblent dans un projet réel.",
          objectives: [
            "Appliquer Agile à un projet concret.",
            "Construire un Product Goal.",
            "Créer des User Stories.",
            "Préparer un Sprint.",
            "Utiliser les feedbacks pour adapter le produit."
          ],
          content: [
            "## Le projet",
            "Imaginons que nous devons construire une plateforme e-learning similaire à Savoir+.",

            "L'objectif est de permettre aux utilisateurs de découvrir des cours, suivre des leçons, passer des quiz et suivre leur progression.",

            "## Étape 1 : Product Goal",

            "```text\nPermettre aux apprenants de suivre\nun parcours de formation complet\net de mesurer leur progression.\n```",

            "## Étape 2 : Product Backlog initial",

            "```text\n1. Créer un compte\n2. Se connecter\n3. Afficher les catégories\n4. Afficher un cours\n5. Lire une leçon\n6. Passer un quiz\n7. Enregistrer la progression\n8. Afficher les statistiques\n9. Générer un certificat\n10. Ajouter des favoris\n```",

            "## Étape 3 : Premier Sprint",
            "L'équipe décide de se concentrer sur l'expérience minimale d'apprentissage.",

            "Sprint Goal : permettre à un utilisateur connecté de commencer un cours et lire une première leçon.",

            "Les User Stories sélectionnées peuvent être :",

            "- créer un compte",
            "- se connecter",
            "- consulter les cours",
            "- ouvrir une leçon.",

            "## Étape 4 : Développement",
            "Les Developers conçoivent, développent et testent les fonctionnalités.",

            "Ils utilisent la Definition of Done pour vérifier que les stories sont réellement terminées.",

            "## Étape 5 : Sprint Review",
            "L'équipe présente le parcours aux parties prenantes.",

            "Les utilisateurs indiquent qu'ils souhaitent voir leur progression dès la première page du cours.",

            "Cette information peut influencer le Product Backlog.",

            "## Étape 6 : Retrospective",
            "L'équipe constate que certaines stories étaient trop grandes.",

            "Elle décide de mieux découper les stories lors du prochain Sprint.",

            "## Le cycle continue",

            "```text\nProduct Goal\n     ↓\nBacklog\n     ↓\nSprint Goal\n     ↓\nBuild + Test\n     ↓\nIncrement\n     ↓\nFeedback\n     ↓\nAdaptation\n     ↓\nNext Sprint\n```",

            "C'est l'essence de l'approche empirique : construire, observer, apprendre et adapter."
          ],
          examples: [
            "Une première version peut ne contenir qu'un parcours de connexion et de lecture de cours. Les quiz et certificats peuvent arriver dans les Sprints suivants."
          ],
          practice: [
            "Choisis un produit que tu voudrais construire.",
            "Définis son Product Goal.",
            "Crée dix éléments de Product Backlog.",
            "Crée un Sprint Goal.",
            "Sélectionne cinq User Stories pour ce Sprint.",
            "Imagine le feedback reçu lors de la Sprint Review.",
            "Modifie le backlog en conséquence."
          ],
          quiz: [
            {
              question: "Pourquoi l'exemple commence-t-il avec un petit ensemble de fonctionnalités ?",
              options: [
                "Pour éviter de tester",
                "Pour obtenir rapidement un résultat utilisable et du feedback",
                "Pour supprimer le Product Backlog",
                "Parce qu'Agile interdit les grandes fonctionnalités"
              ],
              answer: 1,
              explanation:
                "Un petit incrément permet de réduire le risque et d'obtenir rapidement des informations utiles."
            }
          ]
        },

        {
          slug: "agile-anti-patterns",
          title: "9.2 Les erreurs fréquentes en Agile",
          duration: "22 min",
          description:
            "Découvre les anti-patterns qui donnent l'apparence d'Agile sans réellement appliquer ses principes.",
          objectives: [
            "Identifier les erreurs fréquentes.",
            "Comprendre le faux Agile.",
            "Proposer des améliorations."
          ],
          content: [
            "## Agile sans adaptation",
            "Une équipe organise des Sprints mais refuse systématiquement de modifier ses priorités malgré les retours. Elle utilise peut-être le vocabulaire Agile sans appliquer son esprit.",

            "## Daily Scrum transformé en réunion de reporting",
            "Si chaque développeur passe plusieurs minutes à rendre compte à un manager au lieu de coordonner son travail, l'objectif du Daily Scrum est perdu.",

            "## Story Points utilisés comme objectifs",
            "Si une équipe est évaluée uniquement sur le nombre de points réalisés, elle peut être encouragée à gonfler ses estimations.",

            "## Sprint = mini Waterfall",
            "Certaines équipes font une semaine de design, une semaine de développement et une semaine de test dans chaque Sprint, sans intégrer réellement les activités.",

            "## Trop de travail en parallèle",
            "Commencer quinze tâches en même temps peut donner l'impression d'avancer alors que rien n'est terminé.",

            "## Absence de feedback utilisateur",
            "Une équipe peut livrer régulièrement sans jamais vérifier si le produit répond réellement au besoin.",

            "## Le véritable objectif",
            "L'objectif n'est pas de suivre des cérémonies pour pouvoir dire que l'on fait de l'Agile. L'objectif est d'améliorer la capacité de l'équipe à créer de la valeur dans un environnement complexe."
          ],
          examples: [
            "Une équipe fait tous les événements Scrum mais le Product Owner ne parle jamais aux utilisateurs. Le processus existe, mais le feedback produit est faible."
          ],
          practice: [
            "Imagine une équipe qui prétend être Agile.",
            "Liste cinq signes indiquant qu'elle applique peut-être mal Agile.",
            "Propose une amélioration pour chaque problème."
          ],
          quiz: [
            {
              question: "Qu'est-ce qu'un anti-pattern Agile ?",
              options: [
                "Une pratique qui donne l'apparence d'Agile mais contredit ses objectifs",
                "Une User Story",
                "Un type de Sprint",
                "Un outil de gestion de projet"
              ],
              answer: 0,
              explanation:
                "Un anti-pattern est une manière de travailler qui semble correcte en surface mais produit des résultats contre-productifs."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10 : Outils, bonnes pratiques et projet final",
      lessons: [
        {
          slug: "outils-agile",
          title: "10.1 Les outils Agile",
          duration: "15 min",
          description:
            "Découvre les catégories d'outils utilisées par les équipes Agile et comment choisir le bon outil.",
          objectives: [
            "Identifier les principaux types d'outils Agile.",
            "Comprendre l'utilité d'un tableau de travail.",
            "Choisir un outil selon les besoins du projet."
          ],
          content: [
            "## Pourquoi utiliser un outil ?",
            "Les outils permettent de rendre le travail visible, suivre les éléments du backlog, organiser les priorités et faciliter la collaboration.",

            "## Exemples",
            "- Jira",
            "- Trello",
            "- Azure DevOps",
            "- Linear",
            "- Asana",

            "## Tableau Agile",

            "```text\nBACKLOG       TODO        IN PROGRESS       DONE\n────────      ─────       ───────────       ────\nStory A       Story D     Story G           Story X\nStory B       Story E     Story H           Story Y\nStory C       Story F\n```",

            "## L'outil ne fait pas l'Agile",
            "Une équipe peut utiliser le meilleur outil du marché tout en ayant une mauvaise collaboration.",

            "L'outil doit servir le processus et non devenir le processus.",

            "## Choisir un outil",
            "Pour choisir un outil, il faut notamment considérer la taille de l'équipe, le type de workflow, les intégrations nécessaires, les besoins de reporting et la facilité d'utilisation."
          ],
          examples: [
            "Une petite équipe peut commencer avec un tableau Kanban simple avant d'adopter une solution plus complexe."
          ],
          practice: [
            "Crée un tableau Agile pour un projet personnel.",
            "Ajoute les colonnes Backlog, À faire, En cours et Terminé.",
            "Ajoute au moins dix tâches.",
            "Ajoute une limite WIP à la colonne En cours."
          ],
          quiz: [
            {
              question: "Quel est le rôle principal d'un outil Agile ?",
              options: [
                "Remplacer l'équipe",
                "Rendre le travail visible et faciliter sa gestion",
                "Décider automatiquement des priorités",
                "Remplacer les utilisateurs"
              ],
              answer: 1,
              explanation:
                "Les outils servent notamment à visualiser et organiser le travail, mais ils ne remplacent pas les décisions de l'équipe."
            }
          ]
        },

        {
          slug: "bonnes-pratiques-agile",
          title: "10.2 Les bonnes pratiques Agile",
          duration: "18 min",
          description:
            "Découvre les pratiques qui favorisent une équipe Agile efficace et durable.",
          objectives: [
            "Identifier les pratiques importantes.",
            "Comprendre l'importance de la qualité.",
            "Éviter le multitâche excessif.",
            "Favoriser l'amélioration continue."
          ],
          content: [
            "## 1. Garder le backlog ordonné",
            "Un backlog désorganisé rend la planification difficile. Les éléments les plus importants doivent être suffisamment clairs et visibles.",

            "## 2. Garder les User Stories compréhensibles",
            "Une story trop grande ou ambiguë augmente le risque de mauvaise compréhension.",

            "## 3. Réduire le travail en cours",
            "Commencer moins de tâches mais en terminer davantage améliore généralement le flux.",

            "## 4. Tester tôt",
            "Les tests doivent être intégrés au processus de développement plutôt que repoussés à la fin.",

            "## 5. Automatiser ce qui apporte de la valeur",
            "Les pipelines CI/CD, les tests automatisés et les contrôles de qualité peuvent réduire le travail manuel répétitif.",

            "## 6. Parler régulièrement aux utilisateurs",
            "Le feedback utilisateur permet de vérifier que l'équipe construit le bon produit.",

            "## 7. Améliorer le processus",
            "La Retrospective permet d'expérimenter de nouvelles façons de travailler.",

            "## 8. Protéger la qualité",
            "La vitesse de livraison ne doit pas être obtenue au prix d'une dette technique incontrôlée."
          ],
          examples: [
            "Une équipe réduit son WIP de cinq à trois éléments et constate que davantage de stories arrivent réellement jusqu'à Done."
          ],
          practice: [
            "Choisis cinq bonnes pratiques.",
            "Classe-les selon leur importance pour ton projet.",
            "Explique comment tu mesurerais leur impact."
          ],
          quiz: [
            {
              question: "Pourquoi limiter le travail en cours peut-il améliorer le flux ?",
              options: [
                "Parce que l'équipe commence davantage de tâches",
                "Parce que l'équipe réduit le multitâche et termine davantage de travail",
                "Parce que les tests deviennent inutiles",
                "Parce que le Product Backlog disparaît"
              ],
              answer: 1,
              explanation:
                "Limiter le travail en cours peut réduire le multitâche, les blocages et améliorer le flux."
            }
          ]
        },

        {
          slug: "avantages-limites-agile",
          title: "10.3 Avantages et limites de l'Agile",
          duration: "18 min",
          description:
            "Analyse les bénéfices et les limites de l'Agile afin de savoir quand cette approche est réellement pertinente.",
          objectives: [
            "Identifier les avantages de l'Agile.",
            "Identifier ses limites.",
            "Évaluer si Agile convient à un projet."
          ],
          content: [
            "## Avantages",

            "- Feedback fréquent",
            "- Adaptation aux changements",
            "- Livraison progressive",
            "- Détection plus précoce de certains problèmes",
            "- Collaboration renforcée",
            "- Meilleure visibilité sur le travail",
            "- Possibilité de valider rapidement certaines hypothèses",

            "## Limites",

            "- Demande une forte collaboration",
            "- Les changements fréquents peuvent perturber une équipe mal organisée",
            "- La prévision à long terme peut être incertaine",
            "- Nécessite des équipes capables de prendre des décisions",
            "- Peut être mal appliqué si l'organisation confond Agile et absence de planification",

            "## Agile n'est pas toujours le meilleur choix",
            "Un projet avec des exigences extrêmement stables peut avoir moins besoin d'une approche adaptative.",

            "Dans certains environnements réglementés, Agile peut être combiné à des pratiques de gouvernance, de documentation et de validation plus structurées.",

            "## Approche hybride",
            "Une organisation peut combiner différentes pratiques en fonction de son contexte.",

            "La question importante est toujours : quelle approche permet de gérer au mieux l'incertitude, le risque, les contraintes et la valeur attendue ?"
          ],
          examples: [
            "Une startup peut bénéficier d'Agile parce que ses besoins évoluent rapidement.",
            "Une organisation réglementée peut utiliser Scrum pour le développement tout en conservant des contrôles de conformité spécifiques."
          ],
          practice: [
            "Choisis trois projets différents.",
            "Pour chacun, indique si Agile, Waterfall ou une approche hybride semble la plus appropriée.",
            "Justifie chaque choix avec au moins trois arguments."
          ],
          quiz: [
            {
              question: "Quelle affirmation est la plus correcte ?",
              options: [
                "Agile convient absolument à tous les projets",
                "Agile ne nécessite aucune planification",
                "Agile doit être adapté au contexte du projet",
                "Agile interdit la documentation"
              ],
              answer: 2,
              explanation:
                "Agile est une approche puissante mais doit être adaptée au contexte, aux contraintes et au niveau d'incertitude."
            }
          ]
        },

        {
          slug: "projet-final-agile",
          title: "10.4 Projet final : construire un projet Agile complet",
          duration: "30 min",
          description:
            "Mets en pratique les concepts du cours en construisant ton propre plan de projet Agile.",
          objectives: [
            "Définir un Product Goal.",
            "Construire un Product Backlog.",
            "Écrire des User Stories.",
            "Définir un Sprint Goal.",
            "Créer une Definition of Done.",
            "Préparer une Sprint Review et une Retrospective."
          ],
          content: [
            "## Le défi",
            "Tu dois imaginer une application réelle et la gérer avec une approche Agile.",

            "Tu peux choisir une plateforme e-learning, une application bancaire, une marketplace, une application mobile de livraison ou ton propre projet.",

            "## Étape 1 : Définir le problème",
            "Décris le problème utilisateur que ton produit cherche à résoudre.",

            "## Étape 2 : Définir le Product Goal",
            "Écris une phrase décrivant l'état futur recherché.",

            "## Étape 3 : Construire le Product Backlog",
            "Crée au minimum 15 éléments.",

            "## Étape 4 : Transformer les besoins en User Stories",
            "Choisis au moins dix éléments et écris-les au format :",

            "```text\nEn tant que...\nJe veux...\nAfin de...\n```",

            "## Étape 5 : Ajouter les critères d'acceptation",
            "Ajoute au moins deux critères d'acceptation par User Story.",

            "## Étape 6 : Prioriser",
            "Classe les stories en fonction de la valeur, du risque et des dépendances.",

            "## Étape 7 : Préparer le premier Sprint",
            "Définis un Sprint Goal et sélectionne les User Stories nécessaires.",

            "## Étape 8 : Définir la Definition of Done",
            "Établis les critères de qualité nécessaires pour considérer une story comme terminée.",

            "## Étape 9 : Simuler la Sprint Review",
            "Imagine que le produit a été présenté aux utilisateurs. Écris cinq feedbacks reçus.",

            "## Étape 10 : Adapter le backlog",
            "Modifie l'ordre du Product Backlog en fonction de ces nouveaux feedbacks.",

            "## Étape 11 : Simuler la Retrospective",
            "Identifie trois choses qui ont bien fonctionné, trois problèmes et trois actions d'amélioration.",

            "## Résultat attendu",

            "```text\nPROBLÈME\n   ↓\nPRODUCT GOAL\n   ↓\nPRODUCT BACKLOG\n   ↓\nUSER STORIES\n   ↓\nSPRINT GOAL\n   ↓\nSPRINT\n   ↓\nINCREMENT\n   ↓\nREVIEW\n   ↓\nFEEDBACK\n   ↓\nADAPTATION\n   ↓\nRETROSPECTIVE\n   ↓\nAMÉLIORATION\n```",

            "Ce projet final doit démontrer que tu ne connais pas seulement les définitions d'Agile et Scrum, mais que tu sais les appliquer à un véritable projet."
          ],
          examples: [
            "Projet possible : créer une application permettant aux étudiants de découvrir des cours, passer des quiz et obtenir des certificats.",
            "Product Goal : permettre à un étudiant de terminer un parcours de formation et de visualiser clairement sa progression."
          ],
          practice: [
            "Construis le projet complet décrit dans cette leçon.",
            "Présente ton Product Goal.",
            "Présente ton Product Backlog.",
            "Présente cinq User Stories avec critères d'acceptation.",
            "Présente ton Sprint Goal.",
            "Présente ta Definition of Done.",
            "Présente les feedbacks de la Sprint Review.",
            "Présente tes actions d'amélioration issues de la Retrospective."
          ],
          quiz: [
            {
              question: "Quel est le meilleur indicateur qu'un apprenant a réellement compris Agile ?",
              options: [
                "Il peut réciter les noms des cérémonies",
                "Il connaît les noms des outils Agile",
                "Il sait appliquer les principes Agile à un projet réel",
                "Il sait créer un tableau Kanban"
              ],
              answer: 2,
              explanation:
                "La compréhension réelle se démontre par la capacité à appliquer les concepts à un contexte concret."
            }
          ]
        }
      ]
    }
  ]
};

export const agileScrumExamQuestions: ExamQuestion[] = [
  {
    question: "Quel est l'objectif principal de l'approche Agile ?",
    options: [
      "Suivre un plan initial sans jamais le modifier",
      "Livrer de la valeur progressivement et s'adapter au feedback",
      "Supprimer toute documentation",
      "Éviter la communication avec les clients"
    ],
    correctAnswer: 1
  },
  {
    question: "Combien de valeurs fondamentales contient le Manifeste Agile ?",
    options: ["2", "3", "4", "12"],
    correctAnswer: 2
  },
  {
    question: "Quels sont les trois piliers de Scrum ?",
    options: [
      "Planification, développement, test",
      "Transparence, inspection, adaptation",
      "Backlog, Sprint, Review",
      "Code, documentation, livraison"
    ],
    correctAnswer: 1
  },
  {
    question: "Qui est responsable de maximiser la valeur du produit ?",
    options: [
      "Le Scrum Master",
      "Les Developers",
      "Le Product Owner",
      "Le chef de projet"
    ],
    correctAnswer: 2
  },
  {
    question: "Quelle est la durée maximale d'un Sprint Scrum ?",
    options: [
      "Une semaine",
      "Deux semaines",
      "Un mois",
      "Trois mois"
    ],
    correctAnswer: 2
  },
  {
    question: "Quelle est la durée du Daily Scrum ?",
    options: [
      "15 minutes",
      "30 minutes",
      "45 minutes",
      "1 heure"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel événement Scrum permet principalement d'inspecter le produit avec les parties prenantes ?",
    options: [
      "Sprint Planning",
      "Daily Scrum",
      "Sprint Review",
      "Sprint Retrospective"
    ],
    correctAnswer: 2
  },
  {
    question: "Quel événement Scrum se concentre principalement sur l'amélioration du processus de travail ?",
    options: [
      "Sprint Review",
      "Sprint Retrospective",
      "Sprint Planning",
      "Product Backlog Refinement"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel élément constitue l'une des trois principales composantes de Scrum ?",
    options: [
      "Product Backlog",
      "Project Charter",
      "Gantt Chart",
      "Business Case"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le but du Product Backlog ?",
    options: [
      "Lister uniquement les bugs",
      "Lister et ordonner ce qui est nécessaire pour améliorer le produit",
      "Définir les salaires",
      "Remplacer le Sprint Goal"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle formulation correspond le mieux à une User Story ?",
    options: [
      "Créer une table users dans PostgreSQL",
      "Ajouter un endpoint REST",
      "En tant qu'utilisateur, je veux réinitialiser mon mot de passe afin de récupérer mon compte",
      "Créer un composant React"
    ],
    correctAnswer: 2
  },
  {
    question: "Que représentent généralement les Story Points ?",
    options: [
      "Un nombre exact d'heures",
      "Une taille relative du travail",
      "Le nombre de développeurs",
      "Le nombre de lignes de code"
    ],
    correctAnswer: 1
  },
  {
    question: "Pourquoi utilise-t-on parfois le Planning Poker ?",
    options: [
      "Pour choisir le Scrum Master",
      "Pour estimer collectivement la taille relative du travail",
      "Pour calculer les salaires",
      "Pour créer le Product Goal"
    ],
    correctAnswer: 1
  },
  {
    question: "Que signifie WIP dans Kanban ?",
    options: [
      "Work In Progress",
      "Workflow Internal Process",
      "Weekly Iteration Planning",
      "Web Integration Protocol"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'objectif d'une WIP Limit ?",
    options: [
      "Augmenter le nombre de tâches commencées",
      "Limiter le travail en cours pour améliorer le flux",
      "Supprimer le Product Backlog",
      "Empêcher les développeurs de collaborer"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle pratique est fortement associée à Extreme Programming ?",
    options: [
      "Pair programming",
      "Absence de tests",
      "Développement sans feedback",
      "Documentation uniquement en fin de projet"
    ],
    correctAnswer: 0
  },
  {
    question: "Que signifie TDD ?",
    options: [
      "Technical Development Design",
      "Test-Driven Development",
      "Team Delivery Deployment",
      "Task Driven Design"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel est l'objectif de la Definition of Done ?",
    options: [
      "Définir les conditions de qualité permettant de considérer le travail terminé",
      "Définir le budget du projet",
      "Créer les User Stories",
      "Remplacer le Product Backlog"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle est la différence principale entre critères d'acceptation et Definition of Done ?",
    options: [
      "Il n'existe aucune différence",
      "Les critères d'acceptation sont spécifiques à une fonctionnalité tandis que la Definition of Done définit un niveau de qualité commun",
      "La Definition of Done concerne uniquement les clients",
      "Les critères d'acceptation remplacent tous les tests"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel est le principal objectif d'une métrique Agile ?",
    options: [
      "Punir les développeurs",
      "Créer une compétition entre équipes",
      "Aider à comprendre le système et améliorer les décisions",
      "Augmenter artificiellement la vélocité"
    ],
    correctAnswer: 2
  },
  {
    question: "Pourquoi ne faut-il pas utiliser la vélocité comme objectif individuel ?",
    options: [
      "Parce qu'elle ne peut jamais être calculée",
      "Parce que cela peut encourager la manipulation des estimations",
      "Parce qu'elle ne concerne que les clients",
      "Parce qu'elle remplace les User Stories"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle est une caractéristique importante d'Agile ?",
    options: [
      "Les exigences sont toujours définitives",
      "Les tests sont toujours réalisés à la fin",
      "Le feedback est intégré régulièrement au processus",
      "Le client ne participe qu'à la fin"
    ],
    correctAnswer: 2
  },
  {
    question: "Quel est le rôle principal d'un Scrum Master ?",
    options: [
      "Être le chef hiérarchique des Developers",
      "Aider la Scrum Team à comprendre et appliquer Scrum et favoriser son efficacité",
      "Décider toutes les fonctionnalités du produit",
      "Écrire toutes les User Stories"
    ],
    correctAnswer: 1
  },
  {
    question: "Que représente le Sprint Goal ?",
    options: [
      "Une liste de bugs historiques",
      "L'objectif unique donnant une direction au Sprint",
      "Le budget annuel",
      "Le nombre exact de Story Points"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel est l'objectif du Sprint Planning ?",
    options: [
      "Préparer le travail et l'objectif du Sprint",
      "Évaluer les salaires",
      "Remplacer la Sprint Review",
      "Supprimer le Product Backlog"
    ],
    correctAnswer: 0
  },
  {
    question: "Que signifie 'inspection et adaptation' dans Scrum ?",
    options: [
      "Suivre aveuglément le plan",
      "Observer régulièrement le produit et le processus puis ajuster ce qui est nécessaire",
      "Ne jamais modifier le backlog",
      "Supprimer les rétrospectives"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel est l'un des principaux avantages de l'Agile ?",
    options: [
      "L'impossibilité de changer les exigences",
      "Le feedback tardif",
      "La capacité à adapter les priorités",
      "L'absence de collaboration"
    ],
    correctAnswer: 2
  },
  {
    question: "Quel problème peut apparaître lorsqu'une équipe commence trop de tâches simultanément ?",
    options: [
      "Un meilleur flux automatique",
      "Une réduction du multitâche",
      "Davantage de blocages et de travail inachevé",
      "Une meilleure concentration"
    ],
    correctAnswer: 2
  },
  {
    question: "Quelle affirmation concernant Agile est correcte ?",
    options: [
      "Agile convient absolument à tous les projets",
      "Agile interdit la documentation",
      "Agile ne nécessite aucune planification",
      "Agile doit être adapté au contexte du projet"
    ],
    correctAnswer: 3
  },
  {
    question: "Quelle est une bonne raison de commencer avec un petit incrément produit ?",
    options: [
      "Éviter tout feedback",
      "Obtenir rapidement un résultat utilisable et apprendre",
      "Supprimer les tests",
      "Éviter les utilisateurs"
    ],
    correctAnswer: 1
  }
];