import type { CourseDetail, ExamQuestion } from "../coursesData";

export const construireCvCourse: CourseDetail = {
  slug: "construire-son-cv",
  categorySlug: "carriere",
  title: "Construire un CV Percutant & Optimisé ATS",
  description:
    "Apprenez à construire un CV professionnel, clair, convaincant et compatible avec les systèmes ATS. De la structure du document à la formulation des expériences, en passant par les mots-clés, les réalisations chiffrées, les projets et l'adaptation à chaque offre d'emploi.",
  level: "Débutant",
  icon: "📄",

  modules: [
    {
      title: "Module 1: Comprendre le rôle d'un CV",
      lessons: [
        {
          slug: "role-du-cv-dans-le-recrutement",
          title: "1.1 À quoi sert réellement un CV ?",
          duration: "14 min",
          description:
            "Comprenez le rôle du CV dans un processus de recrutement et pourquoi il doit donner envie d'en savoir plus plutôt que raconter toute votre carrière.",
          objectives: [
            "Comprendre le rôle réel d'un CV dans une candidature.",
            "Distinguer CV, lettre de motivation et entretien.",
            "Identifier les informations qu'un recruteur cherche rapidement.",
            "Éviter les erreurs qui rendent un CV difficile à lire."
          ],
          content: [
            "## Le CV n'est pas votre biographie",
            "Un CV est un document de candidature dont l'objectif principal est de présenter rapidement les éléments les plus pertinents de votre parcours pour un poste donné.",
            "Un bon CV doit répondre rapidement à trois questions : **Qui êtes-vous ? Que savez-vous faire ? Pourquoi votre profil correspond-il au poste ?**",
            "",
            "## Le parcours de lecture",
            "Dans un processus de recrutement, votre CV peut être examiné rapidement. La première lecture sert souvent à déterminer si le profil mérite une analyse plus approfondie.",
            "Le recruteur cherche notamment :",
            "- le métier ou poste visé ;",
            "- le niveau d'expérience ;",
            "- les compétences importantes pour le poste ;",
            "- les expériences les plus pertinentes ;",
            "- les résultats obtenus ;",
            "- la cohérence générale du parcours.",
            "",
            "## CV, lettre et entretien",
            "- **CV :** présente votre parcours et vos compétences.",
            "- **Lettre de motivation :** explique davantage votre intérêt pour l'entreprise ou le poste.",
            "- **Entretien :** permet d'approfondir votre expérience, votre raisonnement et votre manière de travailler.",
            "",
            "## Une erreur fréquente",
            "Beaucoup de candidats essaient de mettre tout leur parcours dans leur CV. Le résultat est souvent un document long et difficile à parcourir.",
            "La bonne question n'est pas : « Que puis-je mettre dans mon CV ? » mais plutôt : **« Qu'est-ce qui est utile pour le poste que je vise ? »**"
          ],
          examples: [
            "Pour un poste de développeur frontend, une expérience de création d'interfaces React sera généralement plus pertinente qu'une ancienne activité sans rapport avec le développement.",
            "Pour un poste de commercial, les résultats de vente, le portefeuille client et les objectifs atteints seront souvent plus importants que la liste complète des tâches administratives réalisées."
          ],
          practice: [
            "Choisissez un poste que vous aimeriez obtenir et écrivez les cinq informations qu'un recruteur devrait comprendre sur votre profil après 20 secondes de lecture.",
            "Supprimez de votre ancien CV trois informations qui n'apportent pas de valeur pour le poste ciblé."
          ],
          quiz: [
            {
              question:
                "Quel est l'objectif principal d'un CV professionnel ?",
              options: [
                "Raconter toute la vie du candidat",
                "Présenter rapidement les éléments pertinents pour un poste",
                "Remplacer l'entretien d'embauche",
                "Présenter uniquement les diplômes"
              ],
              answer: 1,
              explanation:
                "Un CV doit permettre au recruteur de comprendre rapidement la pertinence du profil pour le poste."
            },
            {
              question:
                "Quelle question est particulièrement importante lors de la rédaction d'un CV ?",
              options: [
                "Comment remplir toutes les pages disponibles ?",
                "Comment impressionner avec le plus de texte possible ?",
                "Quelles informations sont pertinentes pour le poste visé ?",
                "Comment supprimer toutes les expériences anciennes ?"
              ],
              answer: 2,
              explanation:
                "Un CV efficace sélectionne les informations pertinentes plutôt que d'essayer de tout présenter."
            }
          ]
        },

        {
          slug: "cv-adapte-au-poste",
          title: "1.2 Adapter son CV à l'emploi visé",
          duration: "16 min",
          description:
            "Apprenez à analyser une offre d'emploi et à transformer ses exigences en éléments concrets à intégrer dans votre CV.",
          objectives: [
            "Analyser une fiche de poste.",
            "Identifier les compétences prioritaires.",
            "Faire correspondre son expérience aux besoins de l'entreprise.",
            "Éviter d'utiliser exactement le même CV pour toutes les candidatures."
          ],
          content: [
            "## Pourquoi adapter son CV ?",
            "Une entreprise ne recrute pas un candidat abstrait. Elle cherche une personne capable de répondre à des besoins précis.",
            "Un CV générique peut être correct mais manquer de pertinence. Un CV adapté met en avant les expériences et compétences qui répondent directement à l'offre.",
            "",
            "## Lire une offre d'emploi",
            "Analysez au minimum :",
            "- le titre du poste ;",
            "- les missions principales ;",
            "- les compétences techniques ;",
            "- les compétences comportementales ;",
            "- les outils et technologies mentionnés ;",
            "- le niveau d'expérience demandé ;",
            "- les langues ;",
            "- les certifications éventuellement demandées.",
            "",
            "## Identifier les mots-clés importants",
            "Tous les mots d'une annonce n'ont pas la même importance. Les compétences répétées ou directement liées aux missions doivent attirer votre attention.",
            "",
            "## Faire correspondre l'offre et votre parcours",
            "Créez mentalement trois colonnes :",
            "1. **Ce que l'entreprise demande**.",
            "2. **Ce que je possède**.",
            "3. **Où je peux le démontrer dans mon CV**.",
            "",
            "Cette méthode évite de simplement copier une liste de compétences sans preuve.",
            "",
            "## Ne pas mentir",
            "Adapter son CV ne signifie pas inventer une compétence. Si une technologie est demandée mais que vous ne la maîtrisez pas, vous pouvez éventuellement mentionner une expérience proche ou une formation en cours, mais pas prétendre posséder une expertise inexistante."
          ],
          examples: [
            "Une annonce demande « gestion de campagnes Google Ads ». Si vous avez réellement géré des campagnes avec Google Ads, cette expérience doit être visible et formulée clairement.",
            "Une annonce demande « analyse de données avec Excel ». Au lieu d'écrire uniquement « Excel », vous pouvez préciser une réalisation comme : « Création de tableaux de suivi et automatisation de rapports avec formules et tableaux croisés dynamiques. »"
          ],
          practice: [
            "Prenez une offre d'emploi réelle et surlignez les 10 compétences ou mots-clés les plus importants.",
            "Pour chaque compétence, trouvez une expérience, un projet ou une formation qui permet de la démontrer."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il adapter son CV à une offre d'emploi ?",
              options: [
                "Pour augmenter artificiellement la longueur du CV",
                "Pour mettre en évidence les éléments pertinents pour le poste",
                "Pour supprimer toutes les anciennes expériences",
                "Pour utiliser uniquement les mots de l'annonce"
              ],
              answer: 1,
              explanation:
                "Adapter son CV permet de montrer plus clairement la correspondance entre son profil et les besoins du poste."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Structure et présentation du CV",
      lessons: [
        {
          slug: "structure-cv-professionnel",
          title: "2.1 Construire la structure d'un CV professionnel",
          duration: "17 min",
          description:
            "Découvrez les principales rubriques d'un CV et apprenez à organiser les informations pour faciliter la lecture.",
          objectives: [
            "Construire une structure de CV claire.",
            "Choisir les rubriques adaptées à son profil.",
            "Organiser les informations par importance.",
            "Éviter les sections inutiles ou trop longues."
          ],
          content: [
            "## Une structure simple",
            "Une structure courante peut contenir :",
            "- Nom et coordonnées.",
            "- Titre professionnel.",
            "- Résumé ou profil.",
            "- Expériences professionnelles.",
            "- Compétences.",
            "- Projets pertinents.",
            "- Formation.",
            "- Certifications.",
            "- Langues.",
            "- Centres d'intérêt, uniquement s'ils apportent quelque chose au profil.",
            "",
            "## Le titre professionnel",
            "Le titre doit permettre de comprendre rapidement le positionnement du candidat.",
            "Exemples :",
            "- Développeur Frontend React.",
            "- Data Analyst Junior.",
            "- Chargé de Marketing Digital.",
            "- Assistant Comptable.",
            "",
            "Un titre comme « Curriculum Vitae » apporte peu d'information.",
            "",
            "## Le résumé professionnel",
            "Le résumé doit présenter en quelques lignes votre profil, vos principales compétences et la valeur que vous pouvez apporter.",
            "Évitez les phrases génériques comme « Je suis une personne dynamique, motivée et sérieuse » lorsqu'elles ne sont accompagnées d'aucune preuve.",
            "",
            "## L'ordre des expériences",
            "Pour la majorité des profils, l'ordre chronologique inversé est pratique : l'expérience la plus récente apparaît en premier.",
            "L'ordre peut toutefois être adapté lorsque l'on utilise un CV fonctionnel ou lorsqu'un parcours comporte des particularités."
          ],
          examples: [
            "Titre faible : « Curriculum Vitae ».",
            "Titre plus précis : « Développeur Full Stack JavaScript | React, Node.js, PostgreSQL ».",
            "Résumé : « Développeur web avec 2 ans d'expérience dans la création d'applications React et Node.js. Habitué au travail en équipe, à la conception d'API et à l'amélioration des performances applicatives. »"
          ],
          practice: [
            "Réorganisez votre CV en plaçant les informations les plus pertinentes dans les premières sections.",
            "Écrivez trois versions différentes de votre titre professionnel pour un même métier."
          ],
          quiz: [
            {
              question:
                "Quel élément permet généralement de comprendre rapidement le positionnement du candidat ?",
              options: [
                "Le titre professionnel",
                "La couleur du CV",
                "La date d'impression",
                "Les centres d'intérêt"
              ],
              answer: 0,
              explanation:
                "Le titre professionnel donne immédiatement une indication sur le métier ou le positionnement recherché."
            }
          ]
        },

        {
          slug: "mise-en-page-cv-lisible",
          title: "2.2 Mise en page, lisibilité et design",
          duration: "15 min",
          description:
            "Apprenez à créer un CV visuellement professionnel sans sacrifier la lisibilité ni la compatibilité avec les outils de recrutement.",
          objectives: [
            "Améliorer la lisibilité d'un CV.",
            "Utiliser correctement les titres, espaces et listes.",
            "Éviter les designs excessivement complexes.",
            "Choisir un format de fichier approprié."
          ],
          content: [
            "## Le design doit servir le contenu",
            "Un CV professionnel n'a pas besoin d'être spectaculaire. Sa priorité est d'être lisible et compréhensible.",
            "",
            "## Les principes essentiels",
            "- Utiliser une hiérarchie visuelle claire.",
            "- Garder suffisamment d'espace entre les sections.",
            "- Utiliser des titres explicites.",
            "- Préférer des listes courtes aux longs paragraphes.",
            "- Utiliser une typographie facile à lire.",
            "- Maintenir une présentation cohérente.",
            "",
            "## Attention aux éléments graphiques",
            "Les jauges de compétences, graphiques décoratifs, tableaux complexes et icônes excessives peuvent rendre l'information moins claire et parfois compliquer son interprétation par certains outils.",
            "",
            "## Le format PDF",
            "Lorsque l'offre ne demande pas un autre format, le PDF est souvent pratique pour conserver la mise en page.",
            "Cependant, un PDF doit contenir du texte sélectionnable et non simplement une image du CV.",
            "",
            "## Une page ou plusieurs ?",
            "Il n'existe pas une règle universelle selon laquelle tous les CV doivent faire exactement une page.",
            "Un profil junior peut souvent être présenté efficacement sur une page. Un profil expérimenté peut avoir besoin de davantage d'espace si les informations sont réellement pertinentes."
          ],
          examples: [
            "Un CV composé de quatre colonnes, de graphiques de compétences et de longs blocs colorés peut être visuellement impressionnant mais difficile à analyser.",
            "Un CV avec une colonne principale, des titres clairs, des listes courtes et des espaces réguliers peut être beaucoup plus efficace."
          ],
          practice: [
            "Ouvrez votre CV sur ordinateur et vérifiez s'il reste lisible en quelques secondes.",
            "Supprimez les éléments graphiques qui n'apportent aucune information utile."
          ],
          quiz: [
            {
              question:
                "Quel est le principal objectif de la mise en page d'un CV ?",
              options: [
                "Ajouter le plus de couleurs possible",
                "Faciliter la lecture et la compréhension",
                "Utiliser le plus grand nombre d'icônes",
                "Remplir tout l'espace disponible"
              ],
              answer: 1,
              explanation:
                "La mise en page doit faciliter la lecture et permettre de repérer rapidement les informations importantes."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Expériences et réalisations",
      lessons: [
        {
          slug: "rediger-experiences-professionnelles",
          title: "3.1 Décrire ses expériences professionnelles",
          duration: "18 min",
          description:
            "Transformez une simple liste de tâches en descriptions professionnelles qui montrent votre contribution réelle.",
          objectives: [
            "Décrire une expérience de manière concise.",
            "Différencier responsabilité et réalisation.",
            "Utiliser des verbes d'action.",
            "Mettre en avant la valeur créée."
          ],
          content: [
            "## Tâches ou réalisations ?",
            "Une description faible indique uniquement ce que vous faisiez.",
            "Une description plus forte explique ce que vous avez réalisé, dans quel contexte et avec quel résultat.",
            "",
            "Exemple faible :",
            "« Responsable des réseaux sociaux. »",
            "",
            "Exemple plus informatif :",
            "« Création et planification de contenus pour Instagram et LinkedIn, avec suivi mensuel des performances et ajustement de la stratégie éditoriale. »",
            "",
            "## Utiliser des verbes d'action",
            "Exemples :",
            "- Développé",
            "- Conçu",
            "- Automatisé",
            "- Analysé",
            "- Optimisé",
            "- Coordonné",
            "- Déployé",
            "- Négocié",
            "- Organisé",
            "- Formé",
            "- Réduit",
            "- Augmenté",
            "",
            "## Décrire la contribution",
            "Essayez de répondre à quatre questions :",
            "1. Qu'avez-vous fait ?",
            "2. Dans quel contexte ?",
            "3. Comment l'avez-vous fait ?",
            "4. Quel résultat cela a-t-il produit ?"
          ],
          examples: [
            "Faible : « Gestion des commandes clients. »",
            "Meilleur : « Gestion quotidienne des commandes et coordination avec les équipes logistiques pour réduire les retards de traitement. »",
            "Très bon lorsqu'une donnée existe : « Réorganisation du processus de traitement des commandes, réduisant le délai moyen de traitement de 2 jours à 1 jour. »"
          ],
          practice: [
            "Prenez trois anciennes descriptions de tâches et transformez-les en réalisations.",
            "Remplacez les formulations commençant par « Responsable de » par des verbes d'action plus précis lorsque cela est pertinent."
          ],
          quiz: [
            {
              question:
                "Quelle formulation est généralement la plus informative ?",
              options: [
                "Responsable de plusieurs tâches",
                "Participation à différents projets",
                "Automatisation du reporting mensuel, réduisant le temps de préparation de 4 heures à 1 heure",
                "Travail administratif"
              ],
              answer: 2,
              explanation:
                "La troisième formulation précise l'action réalisée et son résultat mesurable."
            }
          ]
        },

        {
          slug: "methodes-star-et-resultats",
          title: "3.2 Utiliser STAR pour présenter ses réalisations",
          duration: "17 min",
          description:
            "Apprenez à structurer vos réalisations avec la méthode STAR afin de produire des descriptions précises et orientées résultats.",
          objectives: [
            "Comprendre les quatre éléments de la méthode STAR.",
            "Transformer une expérience vague en réalisation concrète.",
            "Éviter les formulations trop longues.",
            "Utiliser les résultats pour renforcer sa crédibilité."
          ],
          content: [
            "## La méthode STAR",
            "**S - Situation :** quel était le contexte ou le problème ?",
            "**T - Tâche :** quelle responsabilité aviez-vous ?",
            "**A - Action :** qu'avez-vous concrètement fait ?",
            "**R - Résultat :** qu'est-ce qui a changé grâce à votre action ?",
            "",
            "## STAR dans un CV",
            "Un CV ne doit pas forcément raconter les quatre étapes sous forme de paragraphe. Vous pouvez condenser le raisonnement en une ou deux phrases.",
            "",
            "## Exemple",
            "Situation : le site était lent.",
            "Tâche : améliorer les performances.",
            "Action : optimisation des images, du chargement des scripts et du cache.",
            "Résultat : amélioration mesurée des temps de chargement.",
            "",
            "Formulation CV :",
            "« Optimisation des images, scripts et mécanismes de cache d'une application web, avec amélioration mesurée des performances de chargement. »",
            "",
            "## Ne pas inventer les résultats",
            "Un résultat peut être chiffré lorsqu'il existe réellement. Si vous n'avez pas de donnée précise, utilisez un résultat qualitatif honnête plutôt que d'inventer un pourcentage."
          ],
          examples: [
            "Marketing : « Refonte du calendrier éditorial et création de formats courts ayant augmenté l'engagement moyen sur les publications. »",
            "Développement : « Refactorisation d'un module critique et ajout de tests automatisés afin de réduire les régressions lors des déploiements. »",
            "Administration : « Réorganisation du système de classement documentaire afin de faciliter la recherche des dossiers par l'équipe. »"
          ],
          practice: [
            "Choisissez une expérience professionnelle et écrivez-la d'abord en quatre lignes selon STAR.",
            "Condensez ensuite votre réponse en une ou deux phrases adaptées à un CV."
          ],
          quiz: [
            {
              question:
                "Que représente le R dans la méthode STAR ?",
              options: [
                "Ressources",
                "Responsabilité",
                "Résultat",
                "Recherche"
              ],
              answer: 2,
              explanation:
                "Le R représente le Résultat, c'est-à-dire l'effet produit par les actions réalisées."
            },
            {
              question:
                "Que faut-il faire lorsqu'on ne possède pas de métrique précise ?",
              options: [
                "Inventer un pourcentage",
                "Supprimer complètement l'expérience",
                "Décrire honnêtement le résultat qualitatif",
                "Mettre toujours 100 %"
              ],
              answer: 2,
              explanation:
                "Il vaut mieux utiliser une formulation qualitative honnête que créer une métrique artificielle."
            }
          ]
        },

        {
          slug: "quantifier-realisations-cv",
          title: "3.3 Quantifier ses réalisations",
          duration: "15 min",
          description:
            "Découvrez comment utiliser les chiffres pour rendre vos réalisations plus concrètes sans manipuler les résultats.",
          objectives: [
            "Identifier les métriques pertinentes pour son métier.",
            "Transformer une réalisation en donnée mesurable.",
            "Utiliser des chiffres sans exagération.",
            "Choisir des indicateurs compréhensibles."
          ],
          content: [
            "## Pourquoi les chiffres sont utiles",
            "Une donnée permet de donner une idée plus concrète de l'ampleur d'une réalisation.",
            "",
            "Exemples de métriques :",
            "- chiffre d'affaires ;",
            "- nombre de clients ;",
            "- volume de projets ;",
            "- temps économisé ;",
            "- taux de conversion ;",
            "- délai réduit ;",
            "- volume de données traité ;",
            "- nombre d'utilisateurs ;",
            "- budget géré ;",
            "- taille d'une équipe.",
            "",
            "## Avant / Après",
            "Lorsque cela est possible, comparez une situation initiale avec une situation après intervention.",
            "",
            "Exemple :",
            "« Automatisation d'un reporting hebdomadaire, faisant passer sa préparation de 3 heures à 30 minutes. »",
            "",
            "## La métrique doit avoir du sens",
            "Un chiffre impressionnant mais déconnecté du travail réalisé n'apporte pas nécessairement de valeur.",
            "Le chiffre doit aider le recruteur à comprendre l'impact de votre travail."
          ],
          examples: [
            "« Gestion d'un portefeuille de 80 clients professionnels. »",
            "« Automatisation de tâches administratives permettant d'économiser environ 6 heures par semaine. »",
            "« Coordination d'une équipe de 7 personnes sur plusieurs projets simultanés. »"
          ],
          practice: [
            "Pour chacune de vos trois expériences principales, identifiez au moins deux métriques pertinentes.",
            "Vérifiez que chaque chiffre utilisé dans votre CV peut être expliqué honnêtement pendant un entretien."
          ],
          quiz: [
            {
              question:
                "Pourquoi utiliser des chiffres dans un CV ?",
              options: [
                "Pour rendre le CV automatiquement plus long",
                "Pour donner davantage de contexte à une réalisation",
                "Pour impressionner même lorsque le chiffre n'a aucun rapport",
                "Pour remplacer toute explication"
              ],
              answer: 1,
              explanation:
                "Les chiffres permettent de rendre certaines réalisations plus concrètes et de donner une idée de leur ampleur."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Compétences, projets et formation",
      lessons: [
        {
          slug: "organiser-competences-cv",
          title: "4.1 Présenter ses compétences efficacement",
          duration: "16 min",
          description:
            "Apprenez à organiser vos compétences techniques et comportementales pour qu'elles soient compréhensibles et crédibles.",
          objectives: [
            "Différencier compétences techniques et comportementales.",
            "Organiser une section compétences.",
            "Éviter les listes interminables.",
            "Associer les compétences à des expériences concrètes."
          ],
          content: [
            "## Compétences techniques",
            "Elles correspondent notamment aux outils, technologies, méthodes et connaissances professionnelles utilisées dans un métier.",
            "",
            "Exemples pour un développeur :",
            "- JavaScript / TypeScript",
            "- React",
            "- Node.js",
            "- SQL",
            "- Git",
            "",
            "## Compétences comportementales",
            "Elles concernent notamment la communication, l'organisation, la collaboration, l'analyse et la résolution de problèmes.",
            "",
            "## Éviter les listes génériques",
            "Une liste contenant « motivé, dynamique, sérieux, ponctuel, organisé » apporte peu d'informations si elle n'est pas soutenue par des exemples.",
            "",
            "## La crédibilité compte",
            "Une compétence mentionnée dans le CV doit pouvoir être expliquée pendant l'entretien.",
            "Si vous indiquez « gestion de projet », préparez-vous à expliquer un projet, vos responsabilités, les difficultés rencontrées et les résultats obtenus."
          ],
          examples: [
            "Faible : « Informatique, communication, travail en équipe, leadership. »",
            "Meilleur : « React, TypeScript, Node.js, PostgreSQL, Git, tests automatisés, travail en équipe Agile. »"
          ],
          practice: [
            "Classez vos compétences en trois catégories : maîtrise forte, pratique régulière et connaissances de base.",
            "Gardez dans votre CV les compétences réellement pertinentes pour le poste ciblé."
          ],
          quiz: [
            {
              question:
                "Quelle est la meilleure façon de rendre une compétence crédible ?",
              options: [
                "L'écrire en très gros caractères",
                "La répéter plusieurs fois",
                "Pouvoir la démontrer par une expérience, un projet ou un résultat",
                "Ajouter une étoile à côté"
              ],
              answer: 2,
              explanation:
                "Une compétence est beaucoup plus crédible lorsqu'elle est soutenue par une expérience concrète."
            }
          ]
        },

        {
          slug: "projets-professionnels-et-personnels",
          title: "4.2 Valoriser ses projets",
          duration: "15 min",
          description:
            "Découvrez comment utiliser les projets personnels, académiques ou professionnels pour démontrer vos compétences.",
          objectives: [
            "Identifier les projets pertinents pour un CV.",
            "Décrire un projet avec contexte, technologies et résultat.",
            "Valoriser un projet personnel sans le présenter comme une expérience salariée.",
            "Utiliser les projets pour compenser un manque d'expérience."
          ],
          content: [
            "## Pourquoi les projets sont importants",
            "Pour un étudiant, un débutant ou une personne en reconversion, les projets peuvent montrer ce que vous êtes capable de réaliser même lorsque votre expérience professionnelle est limitée.",
            "",
            "## Que présenter ?",
            "Un bon projet peut être :",
            "- une application développée personnellement ;",
            "- un projet académique ;",
            "- un site web ;",
            "- une campagne marketing ;",
            "- une analyse de données ;",
            "- un projet associatif ;",
            "- une activité freelance ;",
            "- un projet entrepreneurial.",
            "",
            "## Structure recommandée",
            "Présentez :",
            "1. Le nom du projet.",
            "2. Le problème ou objectif.",
            "3. Votre contribution.",
            "4. Les outils utilisés.",
            "5. Le résultat.",
            "",
            "## Attention à la survente",
            "Un projet personnel doit être présenté comme tel. Il peut être très valorisant sans être présenté comme une expérience professionnelle fictive."
          ],
          examples: [
            "« Application de gestion de tâches : conception et développement d'une application React/Node.js avec authentification, API REST et base PostgreSQL. Déploiement sur une plateforme cloud. »",
            "« Projet marketing : création d'une stratégie éditoriale pour une petite entreprise, avec calendrier de contenu, personas et suivi des performances. »"
          ],
          practice: [
            "Choisissez deux projets pertinents et rédigez pour chacun une description de trois lignes.",
            "Ajoutez les technologies, outils ou méthodes réellement utilisés."
          ],
          quiz: [
            {
              question:
                "Pourquoi les projets personnels peuvent-ils être utiles à un débutant ?",
              options: [
                "Ils remplacent automatiquement toutes les expériences professionnelles",
                "Ils permettent de démontrer des compétences concrètes",
                "Ils permettent d'inventer une expérience professionnelle",
                "Ils doivent toujours être plus importants que la formation"
              ],
              answer: 1,
              explanation:
                "Les projets permettent de montrer ce que vous savez réellement faire, notamment lorsque votre expérience professionnelle est encore limitée."
            }
          ]
        },

        {
          slug: "formation-certifications-et-cv",
          title: "4.3 Présenter sa formation et ses certifications",
          duration: "13 min",
          description:
            "Apprenez à présenter les diplômes, formations et certifications en fonction de votre niveau d'expérience.",
          objectives: [
            "Présenter correctement son parcours académique.",
            "Choisir les formations à mettre en avant.",
            "Valoriser les certifications pertinentes.",
            "Éviter de surcharger le CV avec des formations sans rapport."
          ],
          content: [
            "## La formation dans le CV",
            "Pour un jeune diplômé, la formation peut être une rubrique importante. Pour un professionnel expérimenté, les expériences récentes peuvent prendre davantage de place.",
            "",
            "## Informations utiles",
            "- diplôme ou certification ;",
            "- établissement ;",
            "- période ;",
            "- spécialisation lorsque pertinente ;",
            "- distinction ou projet notable lorsque cela apporte de la valeur.",
            "",
            "## Certifications",
            "Une certification est surtout utile lorsqu'elle est reconnue ou directement pertinente pour le poste.",
            "",
            "## Formations en ligne",
            "Une formation en ligne peut être mentionnée lorsqu'elle démontre une compétence pertinente, surtout si elle est accompagnée d'un projet ou d'une réalisation."
          ],
          examples: [
            "Pour un poste cloud, une certification cloud pertinente peut être mise en évidence.",
            "Pour un poste de développeur junior, une formation technique accompagnée de plusieurs projets peut renforcer le profil."
          ],
          practice: [
            "Listez vos diplômes, certifications et formations.",
            "Supprimez celles qui n'ont aucun lien avec le poste visé ou qui n'apportent plus de valeur."
          ],
          quiz: [
            {
              question:
                "Quelle certification mérite généralement d'être mise en avant ?",
              options: [
                "Une certification sans aucun rapport avec le poste",
                "Une certification pertinente pour le métier visé",
                "Toutes les certifications sans exception",
                "Une certification inventée"
              ],
              answer: 1,
              explanation:
                "La pertinence par rapport au poste est un critère important pour sélectionner les certifications."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: ATS et mots-clés",
      lessons: [
        {
          slug: "comprendre-ats-recrutement",
          title: "5.1 Comprendre les systèmes ATS",
          duration: "16 min",
          description:
            "Comprenez le fonctionnement général des Applicant Tracking Systems et leurs limites afin d'éviter les erreurs de formatage.",
          objectives: [
            "Comprendre ce qu'est un ATS.",
            "Identifier les éléments qui peuvent faciliter l'analyse automatique d'un CV.",
            "Éviter les formats inutilement complexes.",
            "Comprendre qu'un ATS ne remplace pas nécessairement la lecture humaine."
          ],
          content: [
            "## Qu'est-ce qu'un ATS ?",
            "ATS signifie **Applicant Tracking System**. Il s'agit d'un logiciel utilisé par certaines organisations pour gérer les candidatures et faciliter différentes étapes du recrutement.",
            "",
            "Selon le système utilisé, un ATS peut notamment aider à :",
            "- stocker les candidatures ;",
            "- rechercher des informations ;",
            "- organiser les candidats ;",
            "- filtrer ou classer certains profils ;",
            "- suivre les étapes du processus de recrutement.",
            "",
            "## Le mythe du CV qui doit « tromper le robot »",
            "L'objectif n'est pas de tromper un ATS. L'objectif est de fournir un document correctement structuré et contenant les informations pertinentes.",
            "",
            "## Bonnes pratiques générales",
            "- Utiliser des intitulés de sections explicites.",
            "- Utiliser du texte réel plutôt que des informations essentielles placées uniquement dans des images.",
            "- Éviter les mises en page inutilement complexes.",
            "- Vérifier que le texte peut être sélectionné dans le PDF.",
            "- Utiliser les termes professionnels réellement pertinents."
          ],
          examples: [
            "Un CV dans lequel le nom, les compétences et les expériences sont intégrés dans des images peut être difficile à exploiter automatiquement.",
            "Un CV contenant des rubriques explicites comme « Expérience professionnelle », « Compétences » et « Formation » est généralement plus simple à interpréter."
          ],
          practice: [
            "Ouvrez votre PDF et essayez de sélectionner le texte avec votre souris.",
            "Copiez tout le texte du CV dans un éditeur simple et vérifiez que l'ordre des informations reste compréhensible."
          ],
          quiz: [
            {
              question:
                "Que signifie ATS ?",
              options: [
                "Applicant Tracking System",
                "Automated Text Scanner",
                "Advanced Talent Selection",
                "Agency Tech Software"
              ],
              answer: 0,
              explanation:
                "ATS signifie Applicant Tracking System, un système utilisé pour gérer les candidatures et certaines étapes du recrutement."
            }
          ]
        },

        {
          slug: "mots-cles-offre-emploi-cv",
          title: "5.2 Identifier et utiliser les bons mots-clés",
          duration: "18 min",
          description:
            "Apprenez à extraire les compétences et expressions importantes d'une offre pour améliorer la pertinence de votre CV.",
          objectives: [
            "Identifier les mots-clés importants d'une annonce.",
            "Différencier mots-clés génériques et compétences spécifiques.",
            "Intégrer naturellement les mots-clés dans son CV.",
            "Éviter le bourrage artificiel de mots-clés."
          ],
          content: [
            "## Pourquoi les mots-clés comptent",
            "Les recruteurs recherchent des profils correspondant à certaines compétences. Les systèmes de gestion des candidatures peuvent également faciliter la recherche d'informations dans les CV.",
            "",
            "## Catégories de mots-clés",
            "- Technologies : React, Python, AWS.",
            "- Outils : Jira, Figma, Salesforce.",
            "- Méthodes : Scrum, SEO, comptabilité analytique.",
            "- Métiers : développement frontend, gestion de projet, prospection.",
            "- Certifications ou qualifications.",
            "",
            "## Où placer les mots-clés ?",
            "Ils peuvent apparaître naturellement dans :",
            "- le titre ;",
            "- le résumé ;",
            "- les expériences ;",
            "- les compétences ;",
            "- les projets.",
            "",
            "## Ne pas répéter artificiellement",
            "Écrire dix fois « React » n'est pas une stratégie. Il vaut mieux démontrer la compétence dans une expérience ou un projet.",
            "",
            "Exemple :",
            "« Développement d'interfaces React avec TypeScript et intégration d'API REST. »"
          ],
          examples: [
            "Si une offre mentionne « SQL, Power BI et analyse de données », ces compétences doivent être visibles dans votre CV si vous les maîtrisez réellement.",
            "Si l'offre parle de « gestion de projet Agile », vous pouvez mentionner cette expérience dans vos réalisations plutôt que simplement écrire « Agile » dix fois."
          ],
          practice: [
            "Prenez une annonce et classez ses mots-clés en trois groupes : indispensables, importants et secondaires.",
            "Vérifiez ensuite lesquels apparaissent naturellement dans votre CV."
          ],
          quiz: [
            {
              question:
                "Quelle est la meilleure manière d'utiliser les mots-clés d'une offre ?",
              options: [
                "Les répéter le plus possible",
                "Les intégrer naturellement lorsqu'ils correspondent réellement à votre profil",
                "Les cacher dans le CV",
                "Les remplacer par des synonymes inconnus"
              ],
              answer: 1,
              explanation:
                "Les mots-clés doivent correspondre à des compétences réelles et apparaître naturellement dans les différentes sections du CV."
            }
          ]
        },

        {
          slug: "formatage-cv-compatible-ats",
          title: "5.3 Créer un CV lisible par les ATS",
          duration: "15 min",
          description:
            "Passez en revue les choix de formatage qui rendent un CV plus robuste face aux différents systèmes de traitement des candidatures.",
          objectives: [
            "Choisir une structure simple et claire.",
            "Éviter les éléments qui peuvent perturber l'extraction du texte.",
            "Tester son CV avant l'envoi.",
            "Conserver une version facilement modifiable."
          ],
          content: [
            "## La simplicité est souvent votre alliée",
            "Il n'existe pas un format ATS universel parfait pour tous les logiciels. Les outils et leurs capacités peuvent varier.",
            "Une structure simple réduit cependant les risques liés à l'interprétation du document.",
            "",
            "## Éléments à utiliser avec prudence",
            "- tableaux complexes ;",
            "- multiples colonnes ;",
            "- zones de texte ;",
            "- informations essentielles uniquement dans des images ;",
            "- graphiques de niveau ;",
            "- en-têtes ou pieds de page contenant des informations essentielles.",
            "",
            "## Tester son document",
            "Avant de l'envoyer :",
            "1. Ouvrez le PDF.",
            "2. Sélectionnez et copiez le texte.",
            "3. Collez-le dans un éditeur de texte.",
            "4. Vérifiez l'ordre des informations.",
            "5. Relisez les dates, titres et coordonnées.",
            "",
            "## Garder une version source",
            "Conservez votre CV dans son format modifiable afin de pouvoir rapidement l'adapter à une nouvelle offre."
          ],
          examples: [
            "Un CV avec une structure linéaire et des rubriques explicites sera souvent plus robuste qu'un document rempli d'éléments graphiques complexes.",
            "Un CV peut sembler parfait visuellement mais produire un texte mal ordonné lorsqu'il est copié-collé. Ce test permet de détecter certains problèmes."
          ],
          practice: [
            "Effectuez le test de copie du texte sur votre CV.",
            "Demandez à une autre personne de retrouver votre titre, vos compétences et votre dernière expérience en moins de 20 secondes."
          ],
          quiz: [
            {
              question:
                "Pourquoi tester la copie du texte d'un CV PDF ?",
              options: [
                "Pour changer automatiquement la police",
                "Pour vérifier que le contenu reste compréhensible hors de la mise en page",
                "Pour augmenter le nombre de pages",
                "Pour supprimer les expériences"
              ],
              answer: 1,
              explanation:
                "Le test permet de détecter certains problèmes de structure ou d'ordre du texte."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Résumé professionnel et personnalisation",
      lessons: [
        {
          slug: "rediger-resume-professionnel",
          title: "6.1 Rédiger un résumé professionnel convaincant",
          duration: "16 min",
          description:
            "Apprenez à rédiger un résumé court qui présente clairement votre profil, votre expertise et votre orientation professionnelle.",
          objectives: [
            "Écrire un résumé professionnel concis.",
            "Adapter le résumé au poste visé.",
            "Mettre en avant les compétences les plus pertinentes.",
            "Éviter les clichés professionnels."
          ],
          content: [
            "## Le résumé en quelques lignes",
            "Le résumé professionnel doit donner une vision rapide du profil.",
            "Une structure efficace peut être :",
            "1. Votre métier ou niveau.",
            "2. Votre domaine principal.",
            "3. Vos compétences importantes.",
            "4. Votre type de contribution ou objectif.",
            "",
            "## Exemple de structure",
            "« Développeur web junior spécialisé en JavaScript et React, avec plusieurs projets réalisés autour d'applications web et d'API. Intéressé par les environnements collaboratifs et les produits numériques orientés utilisateur. »",
            "",
            "## Les clichés",
            "Des expressions comme « motivé », « dynamique », « perfectionniste » ou « grande capacité d'adaptation » sont difficiles à évaluer lorsqu'elles ne sont accompagnées d'aucune preuve.",
            "",
            "## La précision est plus utile",
            "Comparez :",
            "« Professionnel dynamique et motivé. »",
            "avec :",
            "« Assistant administratif avec 3 ans d'expérience dans la gestion documentaire, le suivi des dossiers et la coordination avec plusieurs équipes. »"
          ],
          examples: [
            "Débutant : « Développeur web junior formé à JavaScript, React et Node.js, avec plusieurs projets personnels déployés et une forte orientation vers la résolution de problèmes. »",
            "Expérimenté : « Responsable marketing digital avec 6 ans d'expérience en acquisition, contenu et analyse de performance, spécialisé dans la conception de stratégies digitales orientées conversion. »"
          ],
          practice: [
            "Écrivez un résumé de quatre lignes.",
            "Réduisez-le ensuite à trois lignes sans supprimer les informations essentielles.",
            "Adaptez-le à une offre d'emploi réelle."
          ],
          quiz: [
            {
              question:
                "Quel élément doit principalement guider le contenu du résumé professionnel ?",
              options: [
                "Le nombre maximal de mots",
                "Le poste et les compétences pertinentes du candidat",
                "La couleur préférée du candidat",
                "La liste complète des loisirs"
              ],
              answer: 1,
              explanation:
                "Le résumé doit rapidement positionner le candidat par rapport au poste visé."
            }
          ]
        },

        {
          slug: "adapter-cv-chaque-candidature",
          title: "6.2 Adapter son CV sans tout réécrire",
          duration: "15 min",
          description:
            "Découvrez une méthode rapide pour personnaliser votre CV à plusieurs offres sans repartir de zéro.",
          objectives: [
            "Créer une base de CV réutilisable.",
            "Identifier les sections à adapter.",
            "Gagner du temps lors des candidatures.",
            "Maintenir une cohérence entre les différentes versions."
          ],
          content: [
            "## Construire un CV maître",
            "Conservez une version complète contenant vos principales expériences, compétences, projets et réalisations.",
            "Cette version n'est pas forcément celle que vous envoyez directement.",
            "",
            "## Créer une version ciblée",
            "Pour chaque offre :",
            "1. Analysez l'annonce.",
            "2. Sélectionnez les expériences pertinentes.",
            "3. Ajustez le titre.",
            "4. Adaptez le résumé.",
            "5. Réorganisez les compétences.",
            "6. Mettez en avant les réalisations pertinentes.",
            "7. Vérifiez les mots-clés.",
            "",
            "## Ne pas tout changer",
            "La personnalisation doit principalement modifier la priorité des informations, pas inventer un nouveau parcours."
          ],
          examples: [
            "Un développeur peut conserver les mêmes expériences dans deux candidatures mais mettre React/TypeScript en avant pour une offre frontend et Node.js/API pour une offre backend."
          ],
          practice: [
            "Créez une version maître de votre CV.",
            "Choisissez deux offres différentes et créez une version ciblée pour chacune."
          ],
          quiz: [
            {
              question:
                "Quelle stratégie permet de personnaliser plusieurs candidatures efficacement ?",
              options: [
                "Créer un CV totalement différent à chaque fois",
                "Utiliser un CV maître puis adapter les sections pertinentes",
                "Envoyer exactement le même CV partout",
                "Changer uniquement la couleur"
              ],
              answer: 1,
              explanation:
                "Une version maître permet de gagner du temps tout en personnalisant les éléments importants pour chaque offre."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: CV pour débutants, reconversion et profils atypiques",
      lessons: [
        {
          slug: "cv-sans-experience-professionnelle",
          title: "7.1 Construire un CV sans expérience",
          duration: "17 min",
          description:
            "Apprenez à construire un CV crédible lorsque vous êtes étudiant, débutant ou sans expérience professionnelle significative.",
          objectives: [
            "Valoriser les projets et expériences alternatives.",
            "Présenter correctement une formation récente.",
            "Éviter de remplir artificiellement le CV.",
            "Démontrer ses compétences par des preuves."
          ],
          content: [
            "## L'absence d'expérience n'est pas l'absence de compétences",
            "Un débutant peut avoir développé des compétences à travers :",
            "- des projets personnels ;",
            "- des projets académiques ;",
            "- des stages ;",
            "- du bénévolat ;",
            "- des associations ;",
            "- des missions ponctuelles ;",
            "- des formations pratiques.",
            "",
            "## Mettre les projets au bon endroit",
            "Si les projets sont votre meilleure preuve de compétence, ils peuvent être placés avant certaines expériences moins pertinentes.",
            "",
            "## Montrer plutôt que déclarer",
            "Au lieu d'écrire uniquement « maîtrise de JavaScript », présentez un projet dans lequel vous avez réellement utilisé JavaScript.",
            "",
            "## Ne pas inventer",
            "Un CV débutant n'a pas besoin de faire semblant d'avoir cinq ans d'expérience. Il doit montrer une progression, des compétences réelles et une capacité à apprendre."
          ],
          examples: [
            "Un étudiant en développement peut présenter trois projets GitHub avec leurs technologies, fonctionnalités et résultats plutôt qu'une longue liste de compétences non démontrées.",
            "Un candidat en marketing peut présenter une campagne réalisée pendant sa formation avec objectifs, contenus produits et analyse des résultats."
          ],
          practice: [
            "Listez cinq expériences non professionnelles dans lesquelles vous avez développé des compétences.",
            "Transformez les trois plus pertinentes en éléments de CV."
          ],
          quiz: [
            {
              question:
                "Que peut mettre en avant un candidat sans expérience professionnelle significative ?",
              options: [
                "Des expériences inventées",
                "Des projets, formations, stages ou expériences associatives pertinentes",
                "Uniquement son nom",
                "Une longue liste de qualités personnelles"
              ],
              answer: 1,
              explanation:
                "Les projets et expériences alternatives peuvent démontrer des compétences réelles."
            }
          ]
        },

        {
          slug: "cv-reconversion-professionnelle",
          title: "7.2 Réussir son CV en reconversion professionnelle",
          duration: "18 min",
          description:
            "Apprenez à présenter une reconversion de manière cohérente et à transférer vos compétences d'un métier vers un autre.",
          objectives: [
            "Identifier ses compétences transférables.",
            "Construire un récit professionnel cohérent.",
            "Valoriser les nouvelles formations et projets.",
            "Éviter de présenter sa reconversion comme une faiblesse."
          ],
          content: [
            "## Le problème de la reconversion",
            "Une personne en reconversion possède souvent une expérience importante, mais pas nécessairement dans le nouveau domaine visé.",
            "",
            "## Identifier les compétences transférables",
            "Exemples :",
            "- gestion de projet ;",
            "- communication ;",
            "- analyse ;",
            "- relation client ;",
            "- organisation ;",
            "- résolution de problèmes ;",
            "- coordination d'équipe.",
            "",
            "## Ajouter des preuves du nouveau projet",
            "Une reconversion vers le développement web peut être renforcée par :",
            "- une formation technique ;",
            "- des projets personnels ;",
            "- un portfolio ;",
            "- des contributions open source ;",
            "- des expériences freelance.",
            "",
            "## Le résumé devient particulièrement important",
            "Expliquez clairement votre nouvelle orientation au lieu de laisser le recruteur deviner pourquoi votre parcours change."
          ],
          examples: [
            "Un ancien commercial qui devient développeur peut mettre en avant sa compréhension des besoins clients, sa formation technique récente et plusieurs applications développées.",
            "Une assistante administrative qui évolue vers la gestion de projet peut valoriser la coordination, l'organisation, le suivi des délais et la communication avec plusieurs interlocuteurs."
          ],
          practice: [
            "Listez dix compétences acquises dans votre ancien métier.",
            "Sélectionnez celles qui peuvent être transférées vers le nouveau métier.",
            "Ajoutez au CV deux preuves concrètes de votre nouvelle compétence."
          ],
          quiz: [
            {
              question:
                "Quelle est une bonne stratégie lors d'une reconversion ?",
              options: [
                "Cacher complètement son ancien parcours",
                "Inventer une expérience dans le nouveau domaine",
                "Mettre en avant les compétences transférables et les nouvelles preuves de compétence",
                "Supprimer toute formation récente"
              ],
              answer: 2,
              explanation:
                "La reconversion devient plus crédible lorsque l'ancien parcours et les nouvelles compétences sont reliés de manière cohérente."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Erreurs fréquentes et contrôle qualité",
      lessons: [
        {
          slug: "erreurs-frequentes-cv",
          title: "8.1 Les erreurs qui affaiblissent un CV",
          duration: "16 min",
          description:
            "Identifiez les erreurs de contenu, de structure et de présentation qui peuvent diminuer la qualité d'une candidature.",
          objectives: [
            "Identifier les erreurs fréquentes.",
            "Améliorer la précision du contenu.",
            "Éviter les incohérences.",
            "Renforcer la crédibilité du CV."
          ],
          content: [
            "## Erreurs de contenu",
            "- Descriptions trop vagues.",
            "- Absence de résultats lorsque des résultats existent.",
            "- Compétences non démontrées.",
            "- Informations sans rapport avec le poste.",
            "- Exagérations difficiles à défendre en entretien.",
            "",
            "## Erreurs de forme",
            "- Fautes d'orthographe.",
            "- Dates incohérentes.",
            "- Polices multiples.",
            "- Espacement irrégulier.",
            "- Paragraphes trop longs.",
            "",
            "## Erreurs stratégiques",
            "- Envoyer le même CV à toutes les entreprises.",
            "- Utiliser des mots-clés sans réellement posséder les compétences.",
            "- Mettre en avant des informations anciennes et peu pertinentes.",
            "",
            "## Le CV doit raconter une histoire cohérente",
            "Les différentes sections doivent se renforcer mutuellement.",
            "Si votre titre indique « Data Analyst » mais que votre CV ne contient aucun projet, outil ou expérience liée à l'analyse de données, le positionnement manque de crédibilité."
          ],
          examples: [
            "Erreur : « Excellent en communication » sans aucun exemple.",
            "Amélioration : mentionner une situation où vous avez présenté un projet, coordonné des interlocuteurs ou géré une relation client."
          ],
          practice: [
            "Faites une relecture uniquement consacrée aux fautes.",
            "Faites une seconde relecture uniquement consacrée à la cohérence des dates.",
            "Faites une troisième relecture en vous mettant à la place du recruteur."
          ],
          quiz: [
            {
              question:
                "Laquelle de ces pratiques affaiblit généralement un CV ?",
              options: [
                "Utiliser des réalisations concrètes",
                "Adapter le CV à l'offre",
                "Présenter des compétences non démontrées et exagérées",
                "Utiliser des titres de sections clairs"
              ],
              answer: 2,
              explanation:
                "Une compétence exagérée ou non démontrée peut réduire la crédibilité du candidat."
            }
          ]
        },

        {
          slug: "audit-final-cv",
          title: "8.2 Réaliser un audit complet de son CV",
          duration: "18 min",
          description:
            "Utilisez une checklist complète pour vérifier le contenu, la lisibilité, la pertinence et la compatibilité de votre CV avant de l'envoyer.",
          objectives: [
            "Réaliser un contrôle final structuré.",
            "Vérifier les informations importantes.",
            "Tester la lisibilité du document.",
            "Préparer une version finale prête à l'envoi."
          ],
          content: [
            "## Checklist contenu",
            "- Le poste visé est clair.",
            "- Le résumé correspond au poste.",
            "- Les expériences importantes sont visibles.",
            "- Les réalisations sont concrètes.",
            "- Les compétences sont pertinentes.",
            "- Les projets utiles sont présents.",
            "",
            "## Checklist ATS",
            "- Le texte est sélectionnable.",
            "- Les rubriques sont explicites.",
            "- Les mots-clés pertinents sont présents naturellement.",
            "- Les informations essentielles ne sont pas uniquement dans des images.",
            "",
            "## Checklist qualité",
            "- Aucune faute évidente.",
            "- Les dates sont cohérentes.",
            "- Les coordonnées sont correctes.",
            "- Les liens fonctionnent.",
            "- Le nom du fichier est professionnel.",
            "",
            "## Nommer correctement le fichier",
            "Évitez « CV-final-v2-nouveau-definitif.pdf ».",
            "Préférez une convention simple comme :",
            "**Prenom-Nom-CV-Developpeur-Frontend.pdf**",
            "",
            "## Le test des 20 secondes",
            "Demandez à une personne de regarder votre CV pendant environ 20 secondes puis posez-lui trois questions :",
            "1. Quel métier est-ce que je vise ?",
            "2. Quelle est ma principale compétence ?",
            "3. Quelle expérience semble la plus importante ?",
            "Si les réponses sont difficiles à obtenir, la hiérarchie du CV peut être améliorée."
          ],
          examples: [
            "Un CV final doit permettre de comprendre rapidement le positionnement du candidat sans devoir lire chaque phrase.",
            "Une dernière vérification des coordonnées peut éviter une erreur très simple mais coûteuse."
          ],
          practice: [
            "Faites l'audit complet de votre CV avec la checklist.",
            "Demandez à une personne extérieure à votre métier de vous dire ce qu'elle comprend de votre profil après 20 secondes.",
            "Corrigez ensuite les trois problèmes les plus importants."
          ],
          quiz: [
            {
              question:
                "Quel test simple peut aider à évaluer la clarté d'un CV ?",
              options: [
                "Changer toutes les couleurs",
                "Le montrer brièvement à une personne et lui demander ce qu'elle retient",
                "Supprimer les titres",
                "Ajouter deux pages"
              ],
              answer: 1,
              explanation:
                "Un test rapide permet de vérifier si le positionnement et les informations importantes sont immédiatement compréhensibles."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: CV, LinkedIn et candidature",
      lessons: [
        {
          slug: "coherence-cv-linkedin",
          title: "9.1 Assurer la cohérence entre CV et LinkedIn",
          duration: "14 min",
          description:
            "Apprenez à aligner votre CV et votre présence professionnelle en ligne sans simplement copier-coller le même contenu.",
          objectives: [
            "Maintenir une cohérence entre CV et profil LinkedIn.",
            "Éviter les contradictions de dates et de titres.",
            "Utiliser LinkedIn comme complément au CV.",
            "Présenter un profil professionnel cohérent."
          ],
          content: [
            "## Pourquoi la cohérence compte",
            "Lorsqu'un recruteur consulte plusieurs sources, des contradictions peuvent créer un doute.",
            "",
            "Vérifiez notamment :",
            "- les intitulés de postes ;",
            "- les dates ;",
            "- les formations ;",
            "- les principales compétences ;",
            "- les projets importants.",
            "",
            "## CV et LinkedIn ne sont pas identiques",
            "Le CV doit être adapté à une candidature spécifique.",
            "LinkedIn peut être plus complet et servir de vitrine professionnelle générale.",
            "",
            "## Utiliser les projets",
            "Votre profil en ligne peut permettre de montrer davantage de détails sur certains projets, réalisations ou publications."
          ],
          examples: [
            "Si votre CV indique une expérience de 2024 à 2026 alors que votre profil en ligne indique 2023 à 2025, corrigez l'incohérence avant une candidature.",
            "Un développeur peut utiliser son CV pour résumer ses principaux projets et son profil en ligne pour renvoyer vers un portfolio ou GitHub."
          ],
          practice: [
            "Comparez votre CV avec votre profil professionnel en ligne.",
            "Listez toutes les différences et corrigez les incohérences."
          ],
          quiz: [
            {
              question:
                "Quel est le principal objectif de la cohérence entre CV et profil en ligne ?",
              options: [
                "Copier exactement le même document partout",
                "Éviter les contradictions et renforcer la crédibilité",
                "Ajouter davantage de couleurs",
                "Supprimer toutes les expériences"
              ],
              answer: 1,
              explanation:
                "Les informations importantes doivent rester cohérentes afin de présenter un parcours crédible."
            }
          ]
        },

        {
          slug: "preparer-envoi-candidature",
          title: "9.2 Préparer son CV pour l'envoi",
          duration: "13 min",
          description:
            "Apprenez à préparer correctement votre document et vos fichiers avant de déposer une candidature.",
          objectives: [
            "Choisir le bon fichier à envoyer.",
            "Vérifier les coordonnées et les liens.",
            "Utiliser un nom de fichier professionnel.",
            "Éviter les erreurs de dernière minute."
          ],
          content: [
            "## Avant de cliquer sur Envoyer",
            "Vérifiez :",
            "- le nom de l'entreprise ;",
            "- le nom du poste ;",
            "- le fichier joint ;",
            "- le format demandé ;",
            "- les coordonnées ;",
            "- les liens ;",
            "- la version du CV.",
            "",
            "## Le bon fichier",
            "Si l'entreprise demande un format précis, respectez l'instruction.",
            "Sinon, un PDF texte lisible est souvent pratique pour préserver la mise en page.",
            "",
            "## Vérifier les liens",
            "Si votre CV contient un portfolio, GitHub ou profil professionnel, ouvrez chaque lien avant l'envoi.",
            "",
            "## Une candidature par erreur",
            "Évitez d'envoyer à une entreprise un CV contenant le nom d'une autre entreprise dans le titre ou le résumé. C'est une erreur simple à éviter avec une dernière relecture."
          ],
          examples: [
            "Avant l'envoi d'une candidature pour « Développeur Frontend », vérifiez que le titre et le résumé ne mentionnent pas par erreur « Data Analyst » à la suite d'une précédente adaptation."
          ],
          practice: [
            "Créez une checklist d'envoi de cinq points que vous utiliserez avant chaque candidature.",
            "Effectuez une simulation complète d'envoi sans réellement soumettre la candidature."
          ],
          quiz: [
            {
              question:
                "Que faut-il vérifier avant d'envoyer un CV adapté à une nouvelle offre ?",
              options: [
                "Uniquement la couleur",
                "Le poste, le nom de l'entreprise, les coordonnées, les liens et le bon fichier",
                "Uniquement la longueur",
                "Uniquement le titre"
              ],
              answer: 1,
              explanation:
                "Une vérification finale doit couvrir les informations essentielles et éviter les erreurs de personnalisation."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Projet final - Construire son CV",
      lessons: [
        {
          slug: "projet-final-construire-cv",
          title: "10.1 Construire et optimiser son CV de A à Z",
          duration: "25 min",
          description:
            "Mettez en pratique toutes les notions du cours en construisant une version complète de votre CV adaptée à une offre réelle.",
          objectives: [
            "Construire un CV complet à partir d'une offre d'emploi.",
            "Rédiger un résumé professionnel ciblé.",
            "Transformer ses expériences en réalisations.",
            "Optimiser les compétences et mots-clés.",
            "Effectuer un audit final avant l'envoi."
          ],
          content: [
            "## Le projet final",
            "Choisissez une offre d'emploi réelle correspondant à un poste que vous pourriez raisonnablement viser.",
            "",
            "## Étape 1 : analyser l'offre",
            "Identifiez :",
            "- le titre du poste ;",
            "- les missions principales ;",
            "- les compétences techniques ;",
            "- les outils ;",
            "- les qualités recherchées ;",
            "- les années d'expérience demandées.",
            "",
            "## Étape 2 : sélectionner vos preuves",
            "Pour chaque compétence importante, trouvez une expérience, un projet, une formation ou une réalisation qui la démontre.",
            "",
            "## Étape 3 : construire le CV",
            "Créez les sections :",
            "- titre ;",
            "- résumé ;",
            "- expérience ;",
            "- compétences ;",
            "- projets ;",
            "- formation ;",
            "- certifications si pertinentes.",
            "",
            "## Étape 4 : améliorer les réalisations",
            "Utilisez des verbes d'action et ajoutez des résultats lorsque les données sont disponibles.",
            "",
            "## Étape 5 : vérifier les mots-clés",
            "Assurez-vous que les compétences réellement maîtrisées et pertinentes apparaissent naturellement dans le document.",
            "",
            "## Étape 6 : test ATS et lisibilité",
            "Copiez le texte du PDF dans un éditeur simple et vérifiez que l'ordre des informations reste logique.",
            "",
            "## Étape 7 : test humain",
            "Demandez à quelqu'un de regarder le CV brièvement et de répondre :",
            "- Quel poste est visé ?",
            "- Quelles sont les principales compétences ?",
            "- Quelle réalisation semble la plus forte ?",
            "",
            "## Étape 8 : version finale",
            "Corrigez les erreurs, vérifiez les coordonnées, les dates, les liens et le nom du fichier avant de préparer l'envoi."
          ],
          examples: [
            "Projet : candidature à un poste de Développeur Frontend Junior. Le candidat adapte son titre, met React et TypeScript en avant, sélectionne deux projets pertinents, transforme ses tâches en réalisations et vérifie les mots-clés de l'offre."
          ],
          practice: [
            "Construisez votre CV complet à partir d'une offre d'emploi réelle.",
            "Faites le test de copie du texte.",
            "Faites relire le CV par une autre personne.",
            "Créez une version PDF finale et une version source modifiable.",
            "Conservez une copie de la fiche de poste utilisée pour comprendre pourquoi vous avez choisi certains mots-clés et expériences."
          ],
          quiz: [
            {
              question:
                "Quelle est la meilleure séquence pour construire un CV ciblé ?",
              options: [
                "Choisir une couleur puis remplir le document",
                "Analyser l'offre, sélectionner les preuves, rédiger puis vérifier",
                "Copier le CV d'une autre personne",
                "Ajouter toutes ses expériences sans sélection"
              ],
              answer: 1,
              explanation:
                "Un CV ciblé commence par la compréhension du besoin, puis sélectionne les preuves pertinentes avant la rédaction et la vérification."
            },
            {
              question:
                "Quel est l'objectif du test de copie du texte du PDF ?",
              options: [
                "Vérifier la structure et l'ordre du contenu",
                "Créer automatiquement une lettre de motivation",
                "Changer les couleurs",
                "Ajouter des mots-clés artificiels"
              ],
              answer: 0,
              explanation:
                "Ce test permet de vérifier que le contenu reste exploitable et compréhensible indépendamment de la mise en page visuelle."
            }
          ]
        }
      ]
    }
  ]
};

export const construireCvExamQuestions: ExamQuestion[] = [
  {
    question:
      "Que signifie l'acronyme ATS dans le recrutement ?",
    options: [
      "Applicant Tracking System",
      "Automated Text Scanner",
      "Advanced Talent Selection",
      "Agency Tech Software"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est l'objectif principal d'un CV ?",
    options: [
      "Raconter toute la vie du candidat",
      "Présenter rapidement les éléments pertinents pour un poste",
      "Remplacer l'entretien",
      "Présenter uniquement les diplômes"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que représente le R dans la méthode STAR ?",
    options: [
      "Ressources",
      "Responsabilité",
      "Résultat",
      "Recherche"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Pourquoi adapter son CV à une offre d'emploi ?",
    options: [
      "Pour augmenter artificiellement sa longueur",
      "Pour mettre en évidence les éléments pertinents pour le poste",
      "Pour supprimer toutes les anciennes expériences",
      "Pour utiliser uniquement les mots de l'annonce"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle formulation est la plus forte dans un CV ?",
    options: [
      "Responsable de plusieurs tâches",
      "Participation à différents projets",
      "Automatisation d'un reporting, réduisant sa préparation de 3 heures à 30 minutes",
      "Travail administratif"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Pourquoi les chiffres peuvent-ils renforcer une réalisation ?",
    options: [
      "Ils rendent automatiquement le candidat meilleur",
      "Ils donnent du contexte et rendent certains résultats plus concrets",
      "Ils remplacent toute explication",
      "Ils permettent d'inventer des résultats"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle est une bonne utilisation des mots-clés d'une offre ?",
    options: [
      "Les répéter artificiellement",
      "Les intégrer naturellement lorsqu'ils correspondent à de vraies compétences",
      "Les cacher dans le document",
      "Les ajouter sans jamais les maîtriser"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi éviter les informations essentielles uniquement placées dans des images ?",
    options: [
      "Elles prennent trop de place",
      "Elles peuvent être difficiles à extraire et interpréter automatiquement",
      "Elles rendent toujours le CV trop court",
      "Elles empêchent nécessairement l'impression"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que peut valoriser un candidat sans expérience professionnelle significative ?",
    options: [
      "Des expériences inventées",
      "Des projets, stages, formations et expériences associatives pertinentes",
      "Uniquement ses loisirs",
      "Une liste de qualités personnelles"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle stratégie est adaptée à une reconversion professionnelle ?",
    options: [
      "Cacher complètement son ancien parcours",
      "Inventer une expérience dans le nouveau métier",
      "Mettre en avant les compétences transférables et les nouvelles preuves de compétence",
      "Supprimer toutes les formations récentes"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Quel élément rend une compétence plus crédible ?",
    options: [
      "La répéter plusieurs fois",
      "La mettre en très gros caractères",
      "La démontrer par une expérience ou un projet",
      "Ajouter une couleur différente"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Quel est l'intérêt d'un résumé professionnel ?",
    options: [
      "Remplir l'espace vide",
      "Positionner rapidement le candidat et ses compétences principales",
      "Présenter tous les loisirs",
      "Remplacer les expériences"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle structure est généralement adaptée pour une expérience professionnelle ?",
    options: [
      "Uniquement le titre du poste",
      "Contexte, action et résultat lorsque cela est pertinent",
      "Une liste de qualités personnelles",
      "Une longue autobiographie"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi garder une version maître de son CV ?",
    options: [
      "Pour envoyer exactement le même CV partout",
      "Pour disposer d'une base complète à adapter rapidement",
      "Pour augmenter le nombre de pages",
      "Pour éviter de lire les offres"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel format est souvent pratique lorsqu'aucun format spécifique n'est demandé ?",
    options: [
      "Une capture d'écran",
      "Un PDF contenant du texte lisible",
      "Une image PNG",
      "Une photo du CV imprimé"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que faut-il faire si une offre demande une compétence que l'on ne possède pas ?",
    options: [
      "Inventer cette compétence",
      "L'ajouter quand même",
      "Ne pas prétendre la maîtriser et mettre en avant les compétences réellement pertinentes",
      "Supprimer toutes les autres compétences"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Pourquoi les projets sont-ils particulièrement utiles aux débutants ?",
    options: [
      "Ils remplacent automatiquement les diplômes",
      "Ils permettent de démontrer des compétences concrètes",
      "Ils permettent d'inventer une expérience",
      "Ils doivent toujours remplacer les expériences"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel test peut aider à vérifier la robustesse du contenu d'un PDF ?",
    options: [
      "Changer la couleur du fond",
      "Copier le texte dans un éditeur simple",
      "Ajouter une image",
      "Imprimer le CV en grand format"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi faut-il vérifier la cohérence entre le CV et un profil professionnel en ligne ?",
    options: [
      "Pour avoir exactement la même mise en page",
      "Pour éviter les contradictions et renforcer la crédibilité",
      "Pour supprimer les projets",
      "Pour utiliser plus de mots-clés"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle information doit pouvoir être expliquée pendant un entretien ?",
    options: [
      "Toutes les compétences importantes mentionnées dans le CV",
      "Uniquement le titre",
      "Uniquement les centres d'intérêt",
      "Aucune information"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est le meilleur objectif d'une mise en page de CV ?",
    options: [
      "Être la plus colorée possible",
      "Faciliter la lecture et la compréhension",
      "Utiliser le plus d'éléments graphiques possible",
      "Remplir tout l'espace"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle information est particulièrement utile dans un résumé professionnel ?",
    options: [
      "Votre métier ou orientation professionnelle",
      "Votre couleur préférée",
      "Tous vos loisirs",
      "Votre adresse complète uniquement"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi ne faut-il pas inventer des métriques dans son CV ?",
    options: [
      "Les chiffres sont interdits",
      "Une métrique inventée peut être difficile à défendre et réduit la crédibilité",
      "Les recruteurs ne regardent jamais les chiffres",
      "Les chiffres doivent toujours être supprimés"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel est l'intérêt du test des 20 secondes ?",
    options: [
      "Mesurer la vitesse d'impression",
      "Vérifier si le positionnement du candidat est rapidement compréhensible",
      "Calculer le nombre de mots",
      "Tester la taille du fichier"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle pratique est la plus professionnelle avant l'envoi d'une candidature ?",
    options: [
      "Envoyer immédiatement sans relire",
      "Vérifier le poste, l'entreprise, les coordonnées, les liens et le bon fichier",
      "Changer la couleur du CV",
      "Ajouter toutes les expériences disponibles"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que doit faire un bon CV lorsqu'un candidat possède beaucoup d'expériences ?",
    options: [
      "Tout afficher sans sélection",
      "Mettre en priorité les expériences pertinentes pour le poste",
      "Supprimer toutes les expériences récentes",
      "Utiliser uniquement les expériences les plus anciennes"
    ],
    correctAnswer: 1
  }
];