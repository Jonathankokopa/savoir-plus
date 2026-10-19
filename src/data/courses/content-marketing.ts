import type { CourseDetail, ExamQuestion } from "../coursesData";

export const contentMarketingCourse: CourseDetail = {
  slug: "content-marketing",
  categorySlug: "digital-marketing",
  title: "Content Marketing & Inbound Strategy",
  description:
    "Apprenez à créer, organiser, distribuer et mesurer des contenus utiles pour attirer une audience, construire la confiance, générer des prospects et développer une activité.",
  level: "Intermédiaire",
  icon: "✍️",

  modules: [
    // =====================================================
    // MODULE 1
    // =====================================================

    {
      title: "Module 1: Comprendre le Content Marketing",
      lessons: [
        {
          slug: "introduction-content-marketing",
          title: "1.1 Qu'est-ce que le Content Marketing ?",
          duration: "18 min",
          description:
            "Découvrez les principes fondamentaux du Content Marketing, son fonctionnement et son rôle dans une stratégie marketing moderne.",

          objectives: [
            "Définir clairement le Content Marketing.",
            "Comprendre la différence entre contenu et publicité traditionnelle.",
            "Comprendre pourquoi les entreprises utilisent le contenu pour attirer leur audience.",
            "Identifier les principaux objectifs du Content Marketing.",
          ],

          content: [
            "## Qu'est-ce que le Content Marketing ?",

            "Le Content Marketing, ou marketing de contenu, consiste à créer et à distribuer des contenus utiles, pertinents et cohérents afin d'attirer une audience ciblée, de créer une relation de confiance avec elle et de l'accompagner progressivement vers une action utile pour l'entreprise.",

            "L'objectif n'est donc pas simplement de publier régulièrement des articles, des vidéos ou des publications sur les réseaux sociaux. Un bon contenu répond d'abord à une question, résout un problème, explique un concept ou aide une personne à prendre une meilleure décision.",

            "Le contenu devient ainsi un outil permettant à une entreprise d'être présente au moment où son audience recherche une information.",

            "## Pourquoi le Content Marketing est-il important ?",

            "Le comportement des consommateurs a profondément changé avec Internet. Avant d'acheter un produit ou un service, une personne peut rechercher des informations sur Google, regarder des vidéos, lire des avis, comparer plusieurs solutions, consulter les réseaux sociaux ou demander l'avis d'autres personnes.",

            "Une entreprise ne doit donc plus uniquement chercher à interrompre l'utilisateur avec un message publicitaire. Elle doit également être capable de lui apporter de la valeur avant même qu'il soit prêt à acheter.",

            "Par exemple, une entreprise qui vend des logiciels de comptabilité peut publier des contenus expliquant comment gérer une trésorerie, créer un budget ou éviter certaines erreurs comptables.",

            "Ces contenus peuvent attirer des personnes qui ne connaissent pas encore l'entreprise. Certaines deviendront ensuite des abonnés, des prospects et éventuellement des clients.",

            "## Contenu et publicité : quelle différence ?",

            "La publicité cherche généralement à promouvoir directement une offre auprès d'une audience. Le Content Marketing cherche d'abord à apporter de la valeur.",

            "Une publicité pourrait dire : \"Achetez notre logiciel de comptabilité aujourd'hui.\"",

            "Un contenu pourrait plutôt expliquer : \"Comment calculer la trésorerie disponible de votre entreprise ?\"",

            "Les deux approches peuvent être complémentaires. Le contenu permet notamment de construire une relation et d'attirer une audience, tandis que la publicité peut accélérer la distribution d'une offre ou d'un contenu.",

            "## Les principaux objectifs du Content Marketing",

            "Une stratégie de contenu peut poursuivre plusieurs objectifs :",

            "- Attirer de nouveaux visiteurs.",
            "- Développer la notoriété d'une marque.",
            "- Éduquer une audience.",
            "- Générer des prospects.",
            "- Construire la confiance.",
            "- Aider les prospects à prendre une décision.",
            "- Fidéliser les clients.",
            "- Augmenter les ventes.",
            "- Améliorer la visibilité dans les moteurs de recherche.",

            "Il est important de définir l'objectif avant de créer le contenu. Un contenu destiné à attirer de nouveaux visiteurs ne sera pas nécessairement construit de la même manière qu'un contenu destiné à convertir un prospect.",

            "## Exemple concret",

            "Imaginez une école qui propose des formations en informatique.",

            "Elle pourrait simplement publier des annonces disant : \"Inscrivez-vous à notre formation en développement web.\"",

            "Elle pourrait aussi créer des contenus tels que :",

            "- \"Qu'est-ce que le développement web ?\"",
            "- \"HTML ou JavaScript : par quoi commencer ?\"",
            "- \"Les 10 compétences d'un développeur web débutant\"",
            "- \"Comment créer son premier site web ?\"",
            "- \"Quel ordinateur choisir pour apprendre à programmer ?\"",

            "Ces contenus répondent aux questions que peuvent se poser les futurs étudiants.",

            "## Le principe fondamental",

            "Un bon Content Marketing commence donc par une question simple :",

            "**Quelle valeur pouvons-nous apporter à notre audience ?**",

            "Avant de demander une vente, une inscription ou un contact, demandez-vous d'abord si le contenu mérite réellement l'attention de la personne qui va le consommer.",
          ],

          examples: [
            "Une agence immobilière publie un guide intitulé \"Comment préparer son premier achat immobilier ?\".",
            "Une salle de sport publie une vidéo expliquant comment construire une routine pour débutant.",
            "Une plateforme de formation publie un article expliquant comment choisir une première compétence numérique.",
          ],

          practice: [
            "Choisissez une entreprise réelle ou fictive.",
            "Identifiez trois problèmes rencontrés par ses clients.",
            "Proposez un contenu utile pour chacun de ces problèmes.",
            "Expliquez pourquoi chaque contenu pourrait intéresser l'audience.",
          ],

          quiz: [
            {
              question:
                "Quel est l'objectif fondamental du Content Marketing ?",
              options: [
                "Créer et distribuer du contenu utile pour attirer et engager une audience ciblée.",
                "Publier uniquement des publicités commerciales.",
                "Acheter le plus grand nombre possible d'espaces publicitaires.",
                "Publier du contenu sans objectif particulier.",
              ],
              answer: 0,
              explanation:
                "Le Content Marketing repose sur la création de valeur pour une audience ciblée afin de construire une relation et de soutenir les objectifs de l'entreprise.",
            },
          ],
        },

        {
          slug: "content-marketing-vs-traditional-marketing",
          title: "1.2 Content Marketing vs Marketing traditionnel",
          duration: "16 min",
          description:
            "Comprenez les différences entre une stratégie basée sur le contenu et une stratégie marketing principalement basée sur l'interruption publicitaire.",

          objectives: [
            "Comprendre le fonctionnement du marketing traditionnel.",
            "Comprendre le principe du marketing de contenu.",
            "Identifier les avantages et limites de chaque approche.",
            "Comprendre pourquoi les deux approches peuvent être complémentaires.",
          ],

          content: [
            "## Le marketing traditionnel",

            "Le marketing traditionnel utilise notamment la télévision, la radio, les affiches, les journaux, les appels commerciaux et différents formats publicitaires pour présenter une offre à une audience.",

            "Cette approche peut être efficace lorsqu'une entreprise souhaite rapidement toucher un grand nombre de personnes.",

            "Cependant, le message est souvent présenté avant que le consommateur ait exprimé un besoin précis.",

            "## Le Content Marketing",

            "Le Content Marketing fonctionne différemment. L'entreprise crée du contenu autour des problèmes, questions et intérêts de son audience.",

            "Une personne peut alors découvrir l'entreprise parce qu'elle recherchait déjà une réponse.",

            "Par exemple, quelqu'un qui recherche \"comment créer un budget personnel\" peut découvrir un article publié par une plateforme de finance personnelle.",

            "L'entreprise ne s'est pas simplement présentée devant cette personne. Elle a créé une ressource qui répondait à une intention existante.",

            "## Les deux approches peuvent fonctionner ensemble",

            "Il serait cependant incorrect de considérer la publicité et le contenu comme deux stratégies incompatibles.",

            "Une entreprise peut créer un excellent guide et utiliser ensuite de la publicité pour le faire découvrir à une audience pertinente.",

            "Elle peut également utiliser les réseaux sociaux, le référencement naturel, l'email marketing et la publicité pour distribuer le même contenu.",

            "Le choix dépend des objectifs, du budget, de l'audience et du contexte de l'entreprise.",
          ],

          examples: [
            "Publicité : \"Découvrez notre nouvelle formation avec une réduction de 20 %.\"",
            "Content Marketing : \"Guide complet : comment choisir sa première formation en informatique ?\"",
          ],

          practice: [
            "Prenez une entreprise de votre choix.",
            "Écrivez un exemple de message publicitaire pour cette entreprise.",
            "Transformez ensuite ce message en idée de contenu éducatif.",
            "Expliquez la différence entre les deux approches.",
          ],

          quiz: [
            {
              question:
                "Quelle caractéristique correspond le mieux au Content Marketing ?",
              options: [
                "Apporter de la valeur à une audience grâce à du contenu pertinent.",
                "Interrompre systématiquement l'utilisateur avec une publicité.",
                "Se limiter aux annonces télévisées.",
                "Publier uniquement des promotions.",
              ],
              answer: 0,
              explanation:
                "Le Content Marketing cherche à attirer et à aider l'audience grâce à des contenus pertinents et utiles.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 2
    // =====================================================

    {
      title: "Module 2: Construire une stratégie de Content Marketing",
      lessons: [
        {
          slug: "definir-objectifs-content-marketing",
          title: "2.1 Définir ses objectifs de contenu",
          duration: "18 min",
          description:
            "Apprenez à définir des objectifs clairs avant de produire vos contenus.",

          objectives: [
            "Comprendre pourquoi les objectifs sont indispensables.",
            "Différencier notoriété, trafic, engagement, prospects et conversions.",
            "Définir des objectifs mesurables.",
            "Relier les objectifs de contenu aux objectifs commerciaux.",
          ],

          content: [
            "## Pourquoi définir des objectifs ?",

            "Créer du contenu sans objectif revient souvent à publier sans savoir ce que l'on cherche réellement à obtenir.",

            "Une entreprise peut publier plusieurs articles par semaine et obtenir beaucoup de vues sans générer de prospects ou de ventes. Le volume de publication ne garantit donc pas la réussite.",

            "Avant de créer un contenu, il faut savoir pourquoi il existe.",

            "## Exemples d'objectifs",

            "Une stratégie peut chercher à :",

            "- augmenter le trafic du site",
            "- améliorer la notoriété",
            "- obtenir des inscriptions à une newsletter",
            "- générer des prospects",
            "- augmenter les ventes",
            "- améliorer la fidélisation",
            "- réduire certaines questions répétitives du support client.",

            "## Objectifs et indicateurs",

            "Chaque objectif doit être associé à des indicateurs permettant de vérifier les résultats.",

            "Par exemple, si l'objectif est de générer des prospects, le nombre de visiteurs n'est pas suffisant. Il faudra également suivre les formulaires envoyés, les inscriptions ou les demandes de contact.",

            "Si l'objectif est d'augmenter la notoriété, les impressions, la portée ou les recherches liées à la marque peuvent être utiles.",

            "## Exemple",

            "Une plateforme de formation peut avoir comme objectif : obtenir 500 nouvelles inscriptions à sa newsletter en trois mois grâce à ses contenus éducatifs.",

            "Cet objectif est beaucoup plus exploitable que : \"Nous voulons faire du Content Marketing.\"",
          ],

          examples: [
            "Objectif faible : publier plus de contenu.",
            "Objectif plus utile : augmenter de 20 % le nombre d'inscriptions à la newsletter en trois mois grâce aux contenus éducatifs.",
          ],

          practice: [
            "Choisissez une entreprise.",
            "Définissez un objectif de notoriété.",
            "Définissez un objectif de trafic.",
            "Définissez un objectif de génération de prospects.",
            "Choisissez au moins un indicateur pour chaque objectif.",
          ],

          quiz: [
            {
              question:
                "Pourquoi faut-il définir les objectifs avant de créer du contenu ?",
              options: [
                "Pour savoir ce que le contenu doit accomplir et comment mesurer ses résultats.",
                "Pour publier le plus rapidement possible.",
                "Pour éviter de connaître son audience.",
                "Pour supprimer toute forme d'analyse.",
              ],
              answer: 0,
              explanation:
                "Les objectifs permettent d'orienter la stratégie et de choisir les indicateurs qui permettront d'évaluer les résultats.",
            },
          ],
        },

        {
          slug: "strategie-content-marketing",
          title: "2.2 Construire une stratégie de contenu",
          duration: "20 min",
          description:
            "Apprenez à transformer vos objectifs commerciaux en une véritable stratégie éditoriale.",

          objectives: [
            "Comprendre les éléments d'une stratégie de contenu.",
            "Relier audience, objectifs, sujets et formats.",
            "Définir des thèmes éditoriaux cohérents.",
            "Construire une stratégie durable.",
          ],

          content: [
            "## Les éléments d'une stratégie",

            "Une stratégie de contenu doit répondre à plusieurs questions fondamentales :",

            "- Qui voulons-nous aider ?",
            "- Quels problèmes cette audience rencontre-t-elle ?",
            "- Quels objectifs voulons-nous atteindre ?",
            "- Quels sujets devons-nous traiter ?",
            "- Quels formats devons-nous utiliser ?",
            "- Où allons-nous distribuer le contenu ?",
            "- Comment allons-nous mesurer les résultats ?",

            "Ces questions permettent de passer d'une simple production de contenu à une véritable stratégie.",

            "## Les piliers de contenu",

            "Les piliers de contenu sont de grands thèmes autour desquels une marque construit régulièrement ses publications.",

            "Une entreprise de fitness pourrait par exemple utiliser quatre piliers :",

            "- entraînement",
            "- nutrition",
            "- récupération",
            "- motivation.",

            "Ces piliers permettent de garder une cohérence tout en variant les sujets.",

            "## Pourquoi utiliser des piliers ?",

            "Sans structure, une équipe peut publier des sujets complètement différents d'une semaine à l'autre.",

            "Les piliers permettent au contraire de créer une identité éditoriale reconnaissable et de couvrir régulièrement les sujets importants pour l'audience.",

            "## Construire sa stratégie",

            "Une méthode simple consiste à partir des objectifs, identifier l'audience, rechercher ses problèmes, définir les piliers, choisir les formats, sélectionner les canaux puis créer un calendrier éditorial.",

            "Cette stratégie doit ensuite être améliorée en fonction des résultats observés.",
          ],

          examples: [
            "Une plateforme de programmation peut utiliser comme piliers : développement web, outils de développement, carrière et projets pratiques.",
            "Une banque peut utiliser : gestion du budget, épargne, crédit et éducation financière.",
          ],

          practice: [
            "Choisissez une entreprise.",
            "Définissez son audience principale.",
            "Créez quatre piliers de contenu.",
            "Proposez trois sujets pour chaque pilier.",
            "Associez chaque sujet à un format.",
          ],

          quiz: [
            {
              question: "Qu'est-ce qu'un pilier de contenu ?",
              options: [
                "Un grand thème éditorial autour duquel une marque organise ses contenus.",
                "Une publicité payante.",
                "Une métrique de conversion.",
                "Une page obligatoire d'un site web.",
              ],
              answer: 0,
              explanation:
                "Les piliers permettent d'organiser la production de contenu autour de thèmes cohérents avec l'audience et les objectifs.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 3
    // =====================================================

    {
      title: "Module 3: Comprendre son audience",
      lessons: [
        {
          slug: "identifier-target-customer",
          title: "3.1 Identifier son client cible",
          duration: "18 min",
          description:
            "Apprenez à identifier précisément les personnes que votre contenu doit aider.",

          objectives: [
            "Identifier les différents segments d'une audience.",
            "Comprendre les besoins des clients.",
            "Identifier les problèmes et motivations.",
            "Éviter de créer du contenu pour une audience trop vague.",
          ],

          content: [
            "## Pourquoi connaître son audience ?",

            "Le même contenu ne convient pas nécessairement à tout le monde.",

            "Un développeur expérimenté et une personne qui vient de découvrir la programmation n'ont pas les mêmes questions, les mêmes connaissances ni les mêmes attentes.",

            "Une stratégie de contenu efficace doit donc commencer par une compréhension réelle de son audience.",

            "## Identifier les clients principaux",

            "Commencez par identifier les groupes de personnes qui utilisent ou pourraient utiliser votre produit.",

            "Pour une entreprise de voyage, les groupes peuvent par exemple être :",

            "- voyageurs expérimentés",
            "- voyageurs occasionnels",
            "- familles",
            "- étudiants",
            "- voyageurs professionnels.",

            "Chaque groupe peut avoir des besoins différents.",

            "## Chercher les problèmes réels",

            "Ne vous contentez pas de supposer ce que veulent vos clients.",

            "Utilisez les données disponibles : questions du support client, commentaires, avis, enquêtes, recherches internes, entretiens, conversations commerciales et retours utilisateurs.",

            "Ces informations peuvent révéler les sujets qui méritent réellement d'être traités.",

            "## Les problèmes sont souvent de bonnes idées de contenu",

            "Si les clients posent régulièrement une question, cette question peut devenir un article, une vidéo, un guide, une FAQ ou un tutoriel.",

            "Le support client peut donc devenir une source importante d'idées éditoriales.",
          ],

          examples: [
            "Une entreprise reçoit régulièrement la question : \"Combien coûte réellement la création d'un site web ?\". Cette question peut devenir un guide détaillé.",
            "Une école constate que ses candidats ne savent pas choisir leur spécialisation. Elle peut créer un guide sur les différentes carrières disponibles.",
          ],

          practice: [
            "Listez trois types de clients pour une entreprise de votre choix.",
            "Pour chaque type, écrivez trois problèmes qu'il peut rencontrer.",
            "Transformez chaque problème en idée de contenu.",
          ],

          quiz: [
            {
              question:
                "Quelle est une bonne source pour découvrir les problèmes réels des clients ?",
              options: [
                "Les questions du support client et les retours utilisateurs.",
                "Uniquement l'imagination du responsable marketing.",
                "Uniquement les publicités des concurrents.",
                "Des sujets choisis au hasard.",
              ],
              answer: 0,
              explanation:
                "Les conversations avec les clients fournissent des informations directement liées à leurs besoins et problèmes.",
            },
          ],
        },

        {
          slug: "creer-buyer-persona",
          title: "3.2 Créer un Buyer Persona",
          duration: "20 min",
          description:
            "Apprenez à transformer les informations sur votre audience en profils clients concrets.",

          objectives: [
            "Comprendre le concept de Buyer Persona.",
            "Construire un profil client réaliste.",
            "Identifier ses objectifs, problèmes et comportements.",
            "Utiliser un persona pour guider la création de contenu.",
          ],

          content: [
            "## Qu'est-ce qu'un Buyer Persona ?",

            "Un Buyer Persona est une représentation détaillée d'un type de client que l'entreprise souhaite comprendre et servir.",

            "Il ne s'agit pas simplement d'écrire un âge et une profession. Un bon persona décrit également les objectifs, problèmes, habitudes, motivations, objections et besoins de la personne.",

            "## Exemple",

            "Imaginons une plateforme de formation numérique.",

            "Persona :",

            "- Nom : Jean",
            "- Âge : 28 ans",
            "- Profession : assistant administratif",
            "- Objectif : évoluer vers un métier numérique",
            "- Problème : ne sait pas quelle compétence apprendre en premier",
            "- Contrainte : peu de temps disponible",
            "- Besoin : une formation structurée et progressive",
            "- Objection : peur de ne pas avoir le niveau nécessaire.",

            "Ce profil permet ensuite de créer des contenus beaucoup plus pertinents.",

            "## Transformer les problèmes en contenus",

            "Pour ce persona, l'entreprise pourrait créer :",

            "- \"Quelle compétence numérique apprendre en premier ?\"",
            "- \"Comment apprendre à programmer avec seulement 30 minutes par jour ?\"",
            "- \"Les erreurs à éviter quand on commence une reconversion professionnelle\".",

            "Le persona devient donc un outil de décision éditoriale.",
          ],

          examples: [
            "Persona d'une plateforme de formation : débutant en reconversion professionnelle cherchant une compétence pratique.",
            "Persona d'une agence immobilière : jeune couple préparant son premier achat immobilier.",
          ],

          practice: [
            "Créez un Buyer Persona complet.",
            "Donnez-lui un nom.",
            "Définissez son âge et sa profession.",
            "Décrivez ses objectifs.",
            "Décrivez ses problèmes.",
            "Identifiez trois questions auxquelles votre contenu pourrait répondre.",
          ],

          quiz: [
            {
              question:
                "Quel élément est particulièrement important dans un Buyer Persona ?",
              options: [
                "Ses problèmes, objectifs, motivations et besoins.",
                "Uniquement son prénom.",
                "Uniquement son âge.",
                "Uniquement sa ville.",
              ],
              answer: 0,
              explanation:
                "Un persona sert principalement à comprendre la situation, les besoins et les motivations d'un type de client.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 4
    // =====================================================

    {
      title: "Module 4: Création de contenu",
      lessons: [
        {
          slug: "les-3w-du-content-marketing",
          title: "4.1 Les 3 questions : Qui, Quoi et Pourquoi ?",
          duration: "18 min",
          description:
            "Apprenez à construire un contenu pertinent en répondant aux trois questions fondamentales.",

          objectives: [
            "Comprendre les trois questions fondamentales du contenu.",
            "Identifier le public du contenu.",
            "Définir le sujet et l'objectif.",
            "Créer un contenu cohérent avec les besoins de l'audience.",
          ],

          content: [
            "## Qui ?",

            "La première question concerne l'audience.",

            "À qui s'adresse ce contenu ?",

            "Un article destiné à un débutant ne doit pas nécessairement utiliser le même vocabulaire ou la même profondeur technique qu'un article destiné à un professionnel expérimenté.",

            "## Quoi ?",

            "La deuxième question concerne le sujet.",

            "Quel problème allons-nous résoudre ? Quelle question allons-nous traiter ? Quelle information allons-nous apporter ?",

            "Le sujet doit être suffisamment clair pour que le lecteur comprenne rapidement la valeur proposée.",

            "## Pourquoi ?",

            "La troisième question concerne l'objectif.",

            "Pourquoi créons-nous ce contenu ?",

            "Le contenu peut avoir pour objectif d'éduquer, d'attirer du trafic, de générer des prospects, de construire la confiance ou d'accompagner une décision.",

            "## Exemple",

            "Une entreprise vend des logiciels de gestion.",

            "Qui ? : propriétaires de petites entreprises.",

            "Quoi ? : expliquer comment suivre les dépenses.",

            "Pourquoi ? : attirer des entrepreneurs intéressés par la gestion financière et les orienter vers une démonstration du logiciel.",

            "Ces trois réponses permettent de donner une direction claire au contenu.",
          ],

          examples: [
            "Qui : étudiants débutants.",
            "Quoi : comment créer un CV professionnel.",
            "Pourquoi : attirer des étudiants vers une plateforme de carrière.",
          ],

          practice: [
            "Choisissez un sujet.",
            "Définissez précisément votre audience.",
            "Expliquez le problème traité.",
            "Définissez l'objectif commercial ou marketing du contenu.",
          ],

          quiz: [
            {
              question:
                "Pourquoi faut-il savoir à qui un contenu est destiné ?",
              options: [
                "Pour adapter le sujet, le niveau, le vocabulaire et l'approche aux besoins de l'audience.",
                "Pour rendre le contenu plus long.",
                "Pour supprimer les objectifs marketing.",
                "Pour éviter toute recherche.",
              ],
              answer: 0,
              explanation:
                "La connaissance de l'audience permet de créer un contenu réellement pertinent pour les personnes visées.",
            },
          ],
        },

        {
          slug: "storytelling-content-marketing",
          title: "4.2 Storytelling et narration de marque",
          duration: "20 min",
          description:
            "Découvrez comment utiliser la narration pour rendre les contenus plus humains, mémorables et convaincants.",

          objectives: [
            "Comprendre le rôle du storytelling.",
            "Construire une histoire simple.",
            "Éviter de transformer chaque contenu en publicité.",
            "Utiliser les problèmes et transformations des clients dans la narration.",
          ],

          content: [
            "## Pourquoi raconter des histoires ?",

            "Les informations sont importantes, mais une histoire peut permettre au public de mieux comprendre et retenir une idée.",

            "Une marque peut raconter l'histoire de sa création, présenter le parcours d'un client, expliquer comment un produit a été développé ou montrer comment une personne a surmonté un problème.",

            "## Une structure simple",

            "Une histoire marketing peut suivre une structure simple :",

            "1. Une situation initiale.",
            "2. Un problème.",
            "3. Une difficulté.",
            "4. Une solution.",
            "5. Une transformation.",

            "## Exemple",

            "Une plateforme de formation peut raconter l'histoire d'une personne qui travaillait dans un domaine sans perspective d'évolution, qui a commencé à apprendre une compétence numérique progressivement, puis qui a obtenu ses premières opportunités professionnelles.",

            "L'objectif n'est pas de transformer l'histoire en publicité agressive. Il s'agit de montrer une situation dans laquelle l'audience peut se reconnaître.",

            "## Le client au centre",

            "Dans beaucoup de cas, la marque ne devrait pas être le héros principal de l'histoire.",

            "Le client peut être le personnage principal et la marque peut jouer le rôle de guide ou de solution.",
          ],

          examples: [
            "Une marque de sport raconte le parcours d'un débutant avant et après six mois d'entraînement.",
            "Une plateforme éducative raconte comment un étudiant a réussi à développer une nouvelle compétence.",
          ],

          practice: [
            "Écrivez une courte histoire concernant un client.",
            "Présentez sa situation initiale.",
            "Présentez son problème.",
            "Expliquez la solution.",
            "Terminez par la transformation obtenue.",
          ],

          quiz: [
            {
              question:
                "Dans une bonne histoire marketing, qui peut être placé au centre ?",
              options: [
                "Le client et son problème.",
                "Uniquement le logo de l'entreprise.",
                "Uniquement le produit.",
                "Le prix du produit.",
              ],
              answer: 0,
              explanation:
                "Mettre le client et son problème au centre permet à l'audience de mieux se reconnaître dans l'histoire.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 5
    // =====================================================

    {
      title: "Module 5: Les formats de contenu",
      lessons: [
        {
          slug: "formats-content-marketing",
          title: "5.1 Choisir les bons formats de contenu",
          duration: "20 min",
          description:
            "Découvrez les principaux formats de contenu et apprenez à choisir celui qui correspond le mieux à votre objectif.",

          objectives: [
            "Identifier les principaux formats de contenu.",
            "Comprendre les avantages de chaque format.",
            "Choisir un format en fonction du sujet et de l'audience.",
            "Éviter de produire des formats uniquement parce qu'ils sont populaires.",
          ],

          content: [
            "## Les articles",

            "Les articles de blog permettent de traiter un sujet en profondeur. Ils sont particulièrement utiles pour répondre à des recherches précises et développer une présence dans les moteurs de recherche.",

            "## Les vidéos",

            "La vidéo permet de montrer une démonstration, raconter une histoire, expliquer un processus ou présenter un produit.",

            "## Les infographies",

            "Une infographie transforme des informations complexes en représentation visuelle plus facile à consulter.",

            "## Les guides",

            "Les guides et ebooks peuvent regrouper plusieurs informations autour d'un problème précis. Ils peuvent également être utilisés comme ressources téléchargeables.",

            "## Les études de cas",

            "Une étude de cas montre comment un problème réel a été traité et quels résultats ont été obtenus.",

            "## Les newsletters",

            "La newsletter permet de créer une relation régulière avec une audience qui a choisi de recevoir des informations.",

            "## Choisir le bon format",

            "Le meilleur format n'est pas nécessairement celui qui est le plus populaire.",

            "Posez-vous plutôt ces questions :",

            "- Quel est le sujet ?",
            "- Quelle est la complexité de l'information ?",
            "- Comment l'audience préfère-t-elle consommer cette information ?",
            "- Quel résultat voulons-nous obtenir ?",
            "- Quelles ressources avons-nous pour produire le contenu ?",
          ],

          examples: [
            "Tutoriel technique : article détaillé ou vidéo.",
            "Statistiques : infographie.",
            "Retour d'expérience : étude de cas.",
            "Conseils rapides : publication sociale ou courte vidéo.",
          ],

          practice: [
            "Choisissez cinq sujets.",
            "Pour chaque sujet, choisissez le format le plus adapté.",
            "Expliquez pourquoi ce format est pertinent.",
          ],

          quiz: [
            {
              question:
                "Quel critère doit principalement guider le choix d'un format ?",
              options: [
                "L'objectif, le sujet, l'audience et les ressources disponibles.",
                "La popularité du format uniquement.",
                "Le nombre de concurrents.",
                "La longueur maximale du contenu.",
              ],
              answer: 0,
              explanation:
                "Le format doit être choisi en fonction du contenu à transmettre, de l'audience et de l'objectif recherché.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 6
    // =====================================================

    {
      title: "Module 6: Distribution et promotion du contenu",
      lessons: [
        {
          slug: "distribution-contenu",
          title: "6.1 Distribuer son contenu",
          duration: "20 min",
          description:
            "Apprenez pourquoi créer un excellent contenu ne suffit pas et comment organiser sa distribution.",

          objectives: [
            "Comprendre le rôle de la distribution.",
            "Identifier les canaux de distribution.",
            "Différencier médias propriétaires, gagnés et payants.",
            "Créer un plan simple de diffusion.",
          ],

          content: [
            "## Créer ne suffit pas",

            "Un excellent contenu peut rester invisible s'il n'est jamais découvert par son audience.",

            "La distribution consiste à rendre le contenu accessible aux personnes susceptibles de le trouver utile.",

            "## Médias propriétaires",

            "Les médias propriétaires sont les canaux contrôlés par l'entreprise :",

            "- site web",
            "- blog",
            "- newsletter",
            "- application",
            "- base de contacts.",

            "## Médias gagnés",

            "Les médias gagnés correspondent à la visibilité obtenue grâce à des tiers, par exemple lorsqu'un site cite votre contenu, qu'un journaliste mentionne votre entreprise ou qu'un utilisateur recommande votre ressource.",

            "## Médias payants",

            "Les médias payants permettent d'utiliser de la publicité pour distribuer du contenu auprès d'une audience ciblée.",

            "## La distribution multicanale",

            "Un même contenu peut être adapté pour plusieurs canaux.",

            "Un article de blog peut devenir une vidéo, plusieurs publications sociales, une newsletter et une courte liste de conseils.",

            "Cette approche permet de mieux exploiter le travail réalisé.",
          ],

          examples: [
            "Un guide publié sur un blog peut être résumé dans une newsletter puis transformé en plusieurs publications sociales.",
          ],

          practice: [
            "Choisissez un contenu.",
            "Identifiez son canal principal.",
            "Proposez trois autres canaux de distribution.",
            "Expliquez comment adapter le contenu à chaque canal.",
          ],

          quiz: [
            {
              question: "Pourquoi la distribution est-elle importante ?",
              options: [
                "Parce qu'un contenu doit être découvert par son audience pour produire des résultats.",
                "Parce qu'elle remplace la création de contenu.",
                "Parce qu'elle garantit automatiquement des ventes.",
                "Parce qu'elle évite de connaître son audience.",
              ],
              answer: 0,
              explanation:
                "Même un excellent contenu a peu d'impact s'il n'est pas accessible à l'audience concernée.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 7
    // =====================================================

    {
      title: "Module 7: Content Marketing et SEO",
      lessons: [
        {
          slug: "content-seo",
          title: "7.1 Créer du contenu visible dans les moteurs de recherche",
          duration: "22 min",
          description:
            "Apprenez à construire des contenus utiles pour les utilisateurs et compréhensibles par les moteurs de recherche.",

          objectives: [
            "Comprendre le lien entre contenu et SEO.",
            "Identifier l'intention de recherche.",
            "Choisir des sujets pertinents.",
            "Structurer un contenu clair.",
            "Éviter les pratiques SEO artificielles.",
          ],

          content: [
            "## Le rôle du SEO dans le Content Marketing",

            "Le référencement naturel peut permettre à un contenu d'être découvert par des personnes qui recherchent déjà une information.",

            "Mais écrire pour les moteurs de recherche ne signifie pas répéter mécaniquement un mot-clé.",

            "Le contenu doit d'abord répondre correctement à l'intention de l'utilisateur.",

            "## Comprendre l'intention",

            "Une personne qui recherche \"qu'est-ce que le SEO\" cherche probablement une explication.",

            "Une personne qui recherche \"meilleur outil SEO\" peut être en phase de comparaison.",

            "Une personne qui recherche le nom d'un logiciel précis peut chercher à accéder à ce produit.",

            "Ces intentions nécessitent des contenus différents.",

            "## Structurer le contenu",

            "Un bon article doit être facile à parcourir.",

            "Utilisez des titres et sous-titres clairs, des paragraphes lisibles, des listes lorsque cela facilite la compréhension et des exemples lorsque le concept est complexe.",

            "## La qualité avant la quantité",

            "Publier beaucoup de contenus superficiels n'est pas nécessairement meilleur que publier moins de contenus réellement utiles.",

            "Une stratégie durable cherche à produire des ressources qui répondent correctement aux besoins de l'audience.",
          ],

          examples: [
            "Recherche : \"comment créer un budget\" → guide pratique.",
            "Recherche : \"outil de gestion de budget\" → comparatif ou guide d'achat.",
            "Recherche : \"nom d'un logiciel\" → page produit ou documentation.",
          ],

          practice: [
            "Choisissez un sujet.",
            "Identifiez l'intention de recherche.",
            "Définissez le titre.",
            "Créez une structure avec cinq sous-parties.",
            "Expliquez la valeur que le lecteur obtiendra.",
          ],

          quiz: [
            {
              question:
                "Quel élément doit être prioritaire dans un contenu destiné au SEO ?",
              options: [
                "Répondre correctement à l'intention et au besoin de l'utilisateur.",
                "Répéter le même mot-clé le plus souvent possible.",
                "Écrire uniquement pour les moteurs de recherche.",
                "Ajouter le plus grand nombre possible de mots.",
              ],
              answer: 0,
              explanation:
                "Le contenu doit d'abord être utile et pertinent pour l'utilisateur. Le SEO accompagne cette qualité au lieu de la remplacer.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 8
    // =====================================================

    {
      title: "Module 8: Le Content Marketing Funnel",
      lessons: [
        {
          slug: "tofu-mofu-bofu",
          title: "8.1 TOFU, MOFU et BOFU",
          duration: "22 min",
          description:
            "Apprenez à adapter votre contenu à la maturité de votre audience.",

          objectives: [
            "Comprendre les différentes étapes du parcours d'achat.",
            "Différencier TOFU, MOFU et BOFU.",
            "Choisir le bon type de contenu pour chaque étape.",
            "Éviter de vendre trop tôt à une audience qui découvre encore le problème.",
          ],

          content: [
            "## TOFU : Top of Funnel",

            "Le TOFU correspond généralement à la phase de découverte.",

            "La personne peut avoir un problème ou une question mais ne connaît pas encore les solutions disponibles ou votre entreprise.",

            "Les contenus éducatifs sont particulièrement adaptés à cette étape.",

            "Exemples :",

            "- articles éducatifs",
            "- vidéos explicatives",
            "- guides introductifs",
            "- infographies.",

            "## MOFU : Middle of Funnel",

            "À cette étape, la personne comprend mieux son problème et commence à comparer différentes solutions.",

            "Les guides approfondis, comparatifs, webinaires et études de cas peuvent être pertinents.",

            "## BOFU : Bottom of Funnel",

            "La personne est proche de la décision.",

            "Elle peut rechercher des informations sur un produit, une offre ou un fournisseur précis.",

            "Les démonstrations, essais, études de cas détaillées, pages produit et consultations peuvent alors être plus adaptés.",

            "## Le piège de la vente trop rapide",

            "Une erreur fréquente consiste à proposer immédiatement une offre commerciale à une personne qui vient simplement chercher une information.",

            "Le contenu doit correspondre au niveau de maturité du prospect.",
          ],

          examples: [
            "TOFU : \"Qu'est-ce que le marketing digital ?\"",
            "MOFU : \"Comment choisir une stratégie de marketing digital ?\"",
            "BOFU : \"Comparatif des plateformes de marketing digital pour PME\".",
          ],

          practice: [
            "Choisissez un produit.",
            "Créez deux idées TOFU.",
            "Créez deux idées MOFU.",
            "Créez deux idées BOFU.",
            "Expliquez le rôle de chaque contenu.",
          ],

          quiz: [
            {
              question:
                "Quel contenu est généralement adapté au TOFU ?",
              options: [
                "Un contenu éducatif répondant à une question générale.",
                "Un contrat de vente.",
                "Une page de paiement.",
                "Une négociation commerciale.",
              ],
              answer: 0,
              explanation:
                "Le TOFU correspond généralement à la découverte. Les contenus éducatifs sont donc particulièrement adaptés.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 9
    // =====================================================

    {
      title: "Module 9: Calendrier éditorial et production",
      lessons: [
        {
          slug: "calendrier-editorial",
          title: "9.1 Construire un calendrier éditorial",
          duration: "20 min",
          description:
            "Apprenez à organiser votre production de contenu sur plusieurs semaines.",

          objectives: [
            "Comprendre l'utilité d'un calendrier éditorial.",
            "Organiser les thèmes et formats.",
            "Planifier la production.",
            "Maintenir une publication cohérente.",
          ],

          content: [
            "## Pourquoi utiliser un calendrier ?",

            "Sans planification, la production de contenu peut devenir irrégulière.",

            "Une équipe peut publier beaucoup de contenu pendant une semaine puis ne plus rien publier pendant plusieurs semaines.",

            "Le calendrier permet de visualiser ce qui doit être produit, publié et distribué.",

            "## Que doit contenir un calendrier ?",

            "Un calendrier peut contenir :",

            "- date de publication",
            "- sujet",
            "- titre",
            "- objectif",
            "- audience",
            "- pilier de contenu",
            "- format",
            "- canal",
            "- responsable",
            "- statut.",
            
            "## Exemple",

            "Une entreprise peut planifier :",

            "- lundi : article éducatif",
            "- mercredi : vidéo courte",
            "- vendredi : étude de cas",
            "- dimanche : newsletter.",

            "Le rythme exact dépend des ressources disponibles. Il vaut mieux publier régulièrement du contenu utile que créer un rythme impossible à maintenir.",
          ],

          examples: [
            "Un calendrier de 30 jours pour une plateforme de formation peut alterner tutoriels, conseils carrière, études de cas, vidéos et newsletters.",
          ],

          practice: [
            "Créez un calendrier éditorial de 14 jours.",
            "Utilisez au moins trois formats différents.",
            "Utilisez au moins trois piliers de contenu.",
            "Définissez un objectif pour chaque publication.",
          ],

          quiz: [
            {
              question: "Quel est le principal avantage d'un calendrier éditorial ?",
              options: [
                "Organiser et planifier la production et la distribution des contenus.",
                "Garantir automatiquement les ventes.",
                "Remplacer les recherches sur l'audience.",
                "Éviter toute analyse des performances.",
              ],
              answer: 0,
              explanation:
                "Le calendrier permet d'organiser la production, de maintenir une certaine régularité et de garder une vision globale de la stratégie.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 10
    // =====================================================

    {
      title: "Module 10: Mesurer les performances",
      lessons: [
        {
          slug: "mesurer-content-marketing",
          title: "10.1 Mesurer les résultats du Content Marketing",
          duration: "22 min",
          description:
            "Apprenez à analyser les performances de vos contenus et à déterminer ce qui fonctionne réellement.",

          objectives: [
            "Identifier les principaux indicateurs.",
            "Différencier trafic, engagement et conversion.",
            "Analyser les performances d'un contenu.",
            "Utiliser les données pour améliorer la stratégie.",
          ],

          content: [
            "## Pourquoi mesurer ?",

            "Une stratégie de contenu doit être améliorée avec le temps.",

            "Les données permettent de comprendre quels sujets attirent l'audience, lesquels génèrent de l'engagement et lesquels contribuent réellement aux objectifs commerciaux.",

            "## Trafic",

            "Le trafic peut permettre de mesurer combien de personnes arrivent sur une page ou un contenu.",

            "Mais le trafic seul ne permet pas de déterminer si le contenu est utile.",

            "## Engagement",

            "Selon le canal, l'engagement peut inclure les commentaires, partages, interactions, temps passé ou autres signaux pertinents.",

            "## Conversion",

            "La conversion correspond à l'action recherchée.",

            "Il peut s'agir d'une inscription, d'un téléchargement, d'une demande de contact, d'une démonstration ou d'un achat.",

            "## ROI",

            "Le retour sur investissement cherche à comparer les résultats obtenus avec les ressources investies.",

            "Il faut prendre en compte non seulement les dépenses publicitaires éventuelles, mais également le temps et les ressources nécessaires à la production et à la distribution.",

            "## Ne pas optimiser uniquement les chiffres faciles",

            "Un article peut obtenir beaucoup de visites mais générer peu de prospects.",

            "Un autre peut obtenir moins de visiteurs mais générer davantage de demandes commerciales.",

            "Le meilleur contenu dépend donc de l'objectif défini au départ.",
          ],

          examples: [
            "Article A : 10 000 visites et 5 prospects.",
            "Article B : 2 000 visites et 40 prospects.",
            "Si l'objectif est la génération de prospects, le deuxième contenu peut être plus intéressant malgré son trafic inférieur.",
          ],

          practice: [
            "Choisissez trois contenus fictifs.",
            "Attribuez à chacun un nombre de visiteurs.",
            "Attribuez un nombre de conversions.",
            "Calculez le taux de conversion.",
            "Identifiez le contenu le plus performant selon un objectif de génération de prospects.",
          ],

          quiz: [
            {
              question:
                "Pourquoi le trafic seul ne suffit-il pas pour mesurer une stratégie de contenu ?",
              options: [
                "Parce qu'il faut également vérifier si le trafic produit les résultats recherchés.",
                "Parce que le trafic n'a jamais aucune valeur.",
                "Parce qu'il faut uniquement regarder les abonnés.",
                "Parce qu'un contenu ne doit jamais être mesuré.",
              ],
              answer: 0,
              explanation:
                "Le trafic est utile mais doit être interprété avec d'autres indicateurs liés aux objectifs du contenu.",
            },
          ],
        },
      ],
    },

    // =====================================================
    // MODULE 11
    // =====================================================

    {
      title: "Module 11: Audit et stratégie professionnelle",
      lessons: [
        {
          slug: "audit-content-marketing",
          title: "11.1 Réaliser un audit de contenu",
          duration: "24 min",
          description:
            "Apprenez à analyser une bibliothèque de contenus existante pour identifier les opportunités d'amélioration.",

          objectives: [
            "Comprendre ce qu'est un audit de contenu.",
            "Identifier les contenus performants.",
            "Identifier les contenus faibles ou obsolètes.",
            "Repérer les opportunités de mise à jour.",
          ],

          content: [
            "## Qu'est-ce qu'un audit de contenu ?",

            "Un audit consiste à examiner les contenus existants afin de comprendre leur qualité, leur pertinence, leurs performances et leur adéquation avec les objectifs actuels.",

            "## Que faut-il analyser ?",

            "Pour chaque contenu, vous pouvez examiner :",

            "- le sujet",
            "- la date de publication",
            "- le trafic",
            "- les conversions",
            "- les liens internes",
            "- la qualité des informations",
            "- la pertinence pour l'audience",
            "- les opportunités de mise à jour.",

            "## Que faire des anciens contenus ?",

            "Un ancien contenu peut être :",

            "- conservé",
            "- amélioré",
            "- actualisé",
            "- fusionné avec un autre contenu",
            "- redirigé lorsqu'il n'a plus de raison d'exister.",
            
            "La décision doit dépendre de la qualité, de la pertinence et des données disponibles.",
          ],

          examples: [
            "Un article ancien qui reçoit encore du trafic peut être actualisé avec de nouvelles informations et de nouveaux exemples.",
          ],

          practice: [
            "Choisissez cinq contenus d'un site.",
            "Classez-les selon leurs performances.",
            "Identifiez les contenus à mettre à jour.",
            "Identifiez les contenus qui pourraient être fusionnés.",
            "Proposez trois nouveaux sujets pour combler les lacunes.",
          ],

          quiz: [
            {
              question: "Quel est l'objectif d'un audit de contenu ?",
              options: [
                "Évaluer les contenus existants et identifier les possibilités d'amélioration.",
                "Supprimer automatiquement tous les anciens contenus.",
                "Publier davantage sans analyser les résultats.",
                "Remplacer toute la stratégie marketing.",
              ],
              answer: 0,
              explanation:
                "L'audit permet de comprendre l'état du contenu existant et de prendre des décisions basées sur sa qualité, sa pertinence et ses performances.",
            },
          ],
        },

        {
          slug: "projet-final-content-marketing",
          title: "11.2 Projet final : créer une stratégie Content Marketing",
          duration: "45 min",
          description:
            "Mettez en pratique toutes les notions du cours en construisant une stratégie complète.",

          objectives: [
            "Définir une audience.",
            "Créer des Buyer Personas.",
            "Définir les objectifs.",
            "Créer des piliers de contenu.",
            "Construire un funnel.",
            "Choisir les formats et canaux.",
            "Créer un calendrier éditorial.",
            "Définir les indicateurs de performance.",
          ],

          content: [
            "## Le projet",

            "Choisissez une entreprise réelle ou fictive et construisez une stratégie Content Marketing complète.",

            "Votre stratégie doit commencer par une compréhension de l'entreprise et de son audience.",

            "## Étape 1 : définir l'entreprise",

            "Présentez brièvement le produit ou service, le problème qu'il résout et le marché ciblé.",

            "## Étape 2 : définir l'audience",

            "Identifiez les principaux segments de clients et créez au moins un Buyer Persona détaillé.",

            "## Étape 3 : définir les objectifs",

            "Choisissez entre trois et cinq objectifs mesurables.",

            "## Étape 4 : créer les piliers",

            "Définissez quatre à cinq grands thèmes éditoriaux.",

            "## Étape 5 : construire le funnel",

            "Créez des contenus TOFU, MOFU et BOFU.",

            "## Étape 6 : choisir les formats",

            "Associez chaque idée de contenu à un format adapté.",

            "## Étape 7 : créer le calendrier",

            "Construisez un calendrier éditorial d'au moins 30 jours.",

            "## Étape 8 : définir les KPI",

            "Choisissez les indicateurs permettant de mesurer les performances.",

            "## Étape 9 : analyser",

            "Expliquez comment vous allez utiliser les résultats pour améliorer votre stratégie.",

            "Une bonne stratégie de contenu n'est pas un document figé. Elle évolue en fonction des besoins de l'audience, des objectifs de l'entreprise et des résultats observés.",
          ],

          examples: [
            "Projet : créer une stratégie de contenu pour une plateforme de formation numérique.",
            "Audience : personnes souhaitant acquérir des compétences professionnelles.",
            "Piliers : apprentissage, carrière, technologie et productivité.",
            "Formats : articles, vidéos, guides, newsletters et études de cas.",
          ],

          practice: [
            "Choisissez une entreprise.",
            "Définissez son audience.",
            "Créez un Buyer Persona.",
            "Définissez ses objectifs.",
            "Créez quatre piliers de contenu.",
            "Proposez six contenus TOFU.",
            "Proposez quatre contenus MOFU.",
            "Proposez trois contenus BOFU.",
            "Créez un calendrier éditorial de 30 jours.",
            "Définissez les KPI.",
            "Expliquez comment vous évaluerez le succès de votre stratégie.",
          ],

          quiz: [
            {
              question:
                "Quelle est la première étape d'une stratégie Content Marketing solide ?",
              options: [
                "Comprendre l'entreprise, ses objectifs et son audience.",
                "Publier immédiatement vingt articles.",
                "Choisir un réseau social au hasard.",
                "Créer uniquement des publicités.",
              ],
              answer: 0,
              explanation:
                "Une stratégie efficace commence par la compréhension du contexte, des objectifs et de l'audience avant la production de contenu.",
            },
          ],
        },
      ],
    },
  ],
};

export const contentMarketingExamQuestions: ExamQuestion[] = [
  {
    question: "Qu'est-ce que le Content Marketing ?",
    options: [
      "Une stratégie qui consiste à créer et distribuer du contenu utile pour attirer et engager une audience ciblée.",
      "Une méthode consistant uniquement à acheter des publicités.",
      "Une technique permettant uniquement d'augmenter le nombre d'abonnés.",
      "Une stratégie réservée aux grandes entreprises.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Pourquoi est-il important de définir les objectifs avant de créer du contenu ?",
    options: [
      "Pour savoir ce que le contenu doit accomplir et comment mesurer ses résultats.",
      "Pour pouvoir publier sans connaître son audience.",
      "Pour éviter de mesurer les performances.",
      "Pour produire le plus grand nombre possible de contenus.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Qu'est-ce qu'un Buyer Persona ?",
    options: [
      "Une représentation détaillée d'un type de client cible.",
      "Un logiciel publicitaire.",
      "Une page de vente.",
      "Une statistique SEO.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quel élément est particulièrement utile pour comprendre les problèmes des clients ?",
    options: [
      "Les questions et retours des clients.",
      "Les suppositions uniquement.",
      "Le nombre de logos présents sur le site.",
      "La couleur du site web.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Que représentent les piliers de contenu ?",
    options: [
      "Les grands thèmes autour desquels une marque organise ses contenus.",
      "Les différentes pages de paiement.",
      "Les objectifs financiers d'une entreprise.",
      "Les formats publicitaires obligatoires.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quel contenu correspond généralement au TOFU ?",
    options: [
      "Un contenu éducatif répondant à une question générale.",
      "Un contrat commercial.",
      "Une page de paiement.",
      "Une négociation commerciale.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quel contenu peut être particulièrement adapté au BOFU ?",
    options: [
      "Une démonstration ou une étude de cas destinée à aider à la décision.",
      "Une définition très générale d'un problème.",
      "Une publication sans rapport avec le produit.",
      "Une infographie destinée uniquement à la découverte.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Pourquoi la distribution est-elle importante ?",
    options: [
      "Parce qu'un contenu doit pouvoir être découvert par son audience.",
      "Parce qu'elle remplace complètement la création.",
      "Parce qu'elle garantit automatiquement une vente.",
      "Parce qu'elle évite de définir une audience.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quelle approche est la plus pertinente pour le Content SEO ?",
    options: [
      "Créer un contenu utile qui répond correctement à l'intention de recherche.",
      "Répéter un mot-clé autant que possible.",
      "Écrire uniquement pour les moteurs de recherche.",
      "Créer le contenu le plus long possible sans objectif.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quel est l'intérêt d'un calendrier éditorial ?",
    options: [
      "Organiser et planifier la création et la publication des contenus.",
      "Garantir automatiquement une augmentation des ventes.",
      "Remplacer l'analyse des performances.",
      "Éviter de connaître les besoins des clients.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Pourquoi le trafic seul ne suffit-il pas pour mesurer un contenu ?",
    options: [
      "Parce qu'il faut également déterminer si le trafic produit les résultats recherchés.",
      "Parce que le trafic n'a aucune valeur.",
      "Parce qu'il faut uniquement compter les abonnés.",
      "Parce qu'un contenu ne doit pas être mesuré.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Que permet un audit de contenu ?",
    options: [
      "Identifier les contenus performants, faibles, obsolètes ou pouvant être améliorés.",
      "Supprimer automatiquement tous les anciens contenus.",
      "Créer des publicités sans stratégie.",
      "Remplacer complètement le site web.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quel est le rôle principal du storytelling ?",
    options: [
      "Rendre une idée plus humaine, compréhensible et mémorable grâce à une narration.",
      "Remplacer toutes les informations factuelles.",
      "Forcer une vente immédiatement.",
      "Éviter de comprendre son audience.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quelle question appartient aux trois questions fondamentales de création de contenu ?",
    options: [
      "À qui s'adresse le contenu ?",
      "Quelle couleur doit avoir le logo ?",
      "Combien de concurrents existent ?",
      "Quelle police faut-il utiliser ?",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel est le meilleur principe pour construire une stratégie de contenu durable ?",
    options: [
      "Comprendre l'audience, définir les objectifs, produire du contenu utile, le distribuer et analyser les résultats.",
      "Publier le plus rapidement possible sans stratégie.",
      "Copier les contenus des concurrents.",
      "Se concentrer uniquement sur les tendances.",
    ],
    correctAnswer: 0,
  },
];