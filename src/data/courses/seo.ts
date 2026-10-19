import type { CourseDetail, ExamQuestion } from "../coursesData";

export const seoCourse: CourseDetail = {
  slug: "seo",
  categorySlug: "digital-marketing",
  title: "SEO : Référencement naturel de A à Z",
  description:
    "Apprends à rendre un site plus visible sur les moteurs de recherche grâce à une méthode concrète et professionnelle. Tu apprendras à rechercher les bons mots-clés, comprendre l'intention de recherche, optimiser les pages, améliorer le SEO technique, créer du contenu utile, développer le maillage interne, analyser les performances et réaliser un audit SEO complet.",
  level: "Intermédiaire",
  icon: "🔎",

  modules: [
    // ============================================================
    // MODULE 1
    // ============================================================
    {
      title: "Module 1 : Comprendre le SEO",
      lessons: [
        {
          slug: "introduction-au-seo",
          title: "1.1 Qu'est-ce que le SEO ?",
          duration: "25 min",
          description:
            "Découvre ce qu'est réellement le SEO, pourquoi les moteurs de recherche sont importants et comment le référencement peut aider une entreprise à obtenir du trafic qualifié.",
          objectives: [
            "Comprendre la définition du SEO",
            "Comprendre le fonctionnement général d'un moteur de recherche",
            "Comprendre la différence entre trafic et trafic qualifié",
            "Identifier les objectifs business d'une stratégie SEO",
          ],
          content: [
            "## Bienvenue dans le SEO",
            "Imagine que tu viens de créer une boutique en ligne appelée **RunPro**. Tu vends des chaussures de running et tu proposes une livraison à Nairobi.",
            "Ton site est techniquement fonctionnel. Les produits sont disponibles, les prix sont affichés et les clients peuvent commander.",
            "Mais il y a un problème : personne ne connaît ton site.",
            "Un utilisateur recherche sur Google : **« chaussures running Nairobi »**.",
            "Si ton site n'apparaît jamais dans les résultats, cet utilisateur ne pourra probablement pas devenir ton client.",
            "C'est ici que le SEO intervient.",
            "## SEO signifie Search Engine Optimization",
            "SEO signifie **Search Engine Optimization**, que l'on traduit généralement par **optimisation pour les moteurs de recherche**.",
            "L'objectif est d'améliorer la capacité d'un site à être découvert, compris et présenté aux utilisateurs lorsqu'ils effectuent des recherches pertinentes.",
            "Le SEO ne consiste donc pas simplement à mettre beaucoup de mots-clés sur une page.",
            "Il s'agit de construire un site qui répond réellement aux besoins des utilisateurs et que les moteurs de recherche peuvent correctement explorer et comprendre.",
            "## Une analogie simple",
            "Imagine une immense bibliothèque contenant des millions de livres.",
            "Chaque livre représente une page web.",
            "Le bibliothécaire doit savoir :",
            "1. Quels livres existent.",
            "2. De quoi parle chaque livre.",
            "3. Quels livres sont les plus pertinents pour une question donnée.",
            "4. Quels livres semblent fiables et utiles.",
            "Un moteur de recherche joue un rôle similaire.",
            "Ton travail en SEO consiste notamment à aider les moteurs de recherche à découvrir, comprendre et évaluer tes pages.",
            "## Exemple concret",
            "Supposons que RunPro possède une page intitulée : **« Chaussures de running pour hommes »**.",
            "Un utilisateur recherche : **« meilleures chaussures running homme Nairobi »**.",
            "Pour avoir une chance d'apparaître dans les résultats pertinents, la page doit réellement répondre à cette recherche.",
            "Elle peut présenter les modèles disponibles, expliquer leurs caractéristiques, comparer les produits, indiquer les tailles disponibles et expliquer les conditions de livraison.",
            "Une page qui répète simplement « chaussures running Nairobi » des dizaines de fois ne devient pas automatiquement une bonne page SEO.",
            "## Le SEO et le business",
            "Le SEO est intéressant parce qu'il peut générer un trafic régulier sans que chaque visite soit achetée individuellement comme avec certaines campagnes publicitaires.",
            "Mais le trafic n'est pas l'objectif final.",
            "Une entreprise préfère généralement avoir 500 visiteurs réellement intéressés par ses produits plutôt que 10 000 visiteurs qui ne correspondent pas à son marché.",
            "Le SEO doit donc être relié à un objectif réel : vente, inscription, demande de devis, téléchargement, réservation, prise de contact ou autre conversion.",
            "## Les grandes dimensions du SEO",
            "On peut simplifier le SEO en plusieurs grandes dimensions :",
            "1. **Comprendre la recherche des utilisateurs** : savoir ce qu'ils cherchent et pourquoi.",
            "2. **SEO On-Page** : améliorer le contenu et la structure des pages.",
            "3. **SEO technique** : aider les moteurs à explorer et comprendre le site.",
            "4. **Contenu** : créer des ressources réellement utiles.",
            "5. **Autorité et popularité** : obtenir des références pertinentes provenant d'autres sites.",
            "6. **Mesure** : analyser les résultats et améliorer continuellement la stratégie.",
            "## La bonne mentalité",
            "Avant de modifier une page, pose-toi toujours quatre questions :",
            "1. Qui est l'utilisateur ?",
            "2. Que cherche-t-il réellement ?",
            "3. Quelle réponse attend-il ?",
            "4. Comment puis-je rendre cette réponse meilleure que ce qui existe déjà ?",
            "## À retenir",
            "Le SEO n'est pas une collection d'astuces destinées à tromper Google.",
            "C'est une discipline qui consiste à améliorer la visibilité d'un site tout en améliorant l'expérience et l'utilité pour les utilisateurs.",
          ],
          examples: [
            "Exemple : un restaurant à Nairobi peut créer une page réellement utile sur ses services de livraison et les zones desservies.",
            "Exemple : un développeur freelance peut créer des articles répondant aux problèmes techniques que ses clients recherchent.",
            "Exemple : une boutique e-commerce peut créer des catégories correspondant aux besoins réels de ses clients.",
          ],
          practice: [
            "## Mission",
            "Imagine que tu travailles pour RunPro, une boutique de chaussures de running à Nairobi.",
            "Le site reçoit très peu de visiteurs provenant de Google.",
            "Écris trois recherches qu'un client potentiel pourrait effectuer.",
            "Pour chaque recherche, explique quelle page du site pourrait répondre à cette recherche.",
            "Exemple : « chaussures running Nairobi » → page catégorie des chaussures de running disponibles à Nairobi.",
          ],
          quiz: [
            {
              question: "Que signifie SEO ?",
              options: [
                "Search Engine Optimization",
                "Search Email Organization",
                "Site Engine Operation",
                "Search Experience Output",
              ],
              answer: 0,
              explanation:
                "SEO signifie Search Engine Optimization. Il s'agit de l'ensemble des pratiques permettant d'améliorer la visibilité d'un site dans les résultats organiques des moteurs de recherche.",
            },
            {
              question:
                "Pourquoi 500 visiteurs pertinents peuvent-ils être plus intéressants que 10 000 visiteurs sans rapport avec l'activité ?",
              options: [
                "Parce que les visiteurs pertinents ont davantage de chances d'effectuer une action utile",
                "Parce que Google interdit les sites avec beaucoup de visiteurs",
                "Parce que les petits sites sont automatiquement mieux classés",
                "Parce que le trafic n'a aucune importance",
              ],
              answer: 0,
              explanation:
                "Le SEO doit générer un trafic pertinent. Des visiteurs intéressés par l'offre ont davantage de chances de devenir clients ou utilisateurs.",
            },
          ],
        },

        {
          slug: "comment-fonctionne-google",
          title: "1.2 Comment fonctionne un moteur de recherche ?",
          duration: "30 min",
          description:
            "Comprends les étapes principales entre la découverte d'une page web et son apparition dans les résultats de recherche.",
          objectives: [
            "Comprendre le crawling",
            "Comprendre l'indexation",
            "Comprendre le classement",
            "Comprendre pourquoi une page peut ne pas apparaître dans Google",
          ],
          content: [
            "## Les trois grandes étapes",
            "Pour simplifier, un moteur de recherche doit principalement :",
            "1. Découvrir les pages.",
            "2. Comprendre et stocker les informations.",
            "3. Déterminer quelles pages afficher pour une recherche donnée.",
            "Ces étapes sont souvent résumées par les termes **crawling**, **indexation** et **ranking**.",
            "## 1. Le crawling",
            "Le crawling correspond à l'exploration des pages par des robots des moteurs de recherche.",
            "Les robots découvrent des URL à travers les liens, les sitemaps et d'autres signaux.",
            "Imagine un robot qui arrive sur la page d'accueil de ton site.",
            "Il trouve un lien vers `/chaussures-running`.",
            "Il peut ensuite explorer cette page et découvrir d'autres liens.",
            "## 2. L'indexation",
            "Après avoir exploré une page, le moteur doit déterminer s'il peut et doit l'intégrer à son index.",
            "Une page peut être techniquement accessible mais ne pas apparaître dans les résultats pour différentes raisons.",
            "L'indexation n'est donc pas automatique simplement parce qu'une URL existe.",
            "## 3. Le classement",
            "Lorsqu'un utilisateur effectue une recherche, le moteur doit sélectionner et ordonner les résultats qu'il considère comme les plus pertinents.",
            "Le classement dépend de nombreux systèmes et signaux.",
            "Il ne faut donc pas réduire le SEO à un seul facteur.",
            "## Exemple",
            "Tu publies un article : **« Comment choisir des chaussures de running ? »**.",
            "Google doit d'abord découvrir l'URL.",
            "Il doit ensuite pouvoir accéder au contenu et l'analyser.",
            "Enfin, lorsqu'un utilisateur cherche quelque chose correspondant au contenu, la page peut être considérée parmi les résultats possibles.",
            "## Pourquoi une page peut ne pas apparaître",
            "Quelques causes possibles :",
            "- la page n'est pas accessible aux robots ;",
            "- elle est bloquée par une règle technique ;",
            "- elle n'est pas indexée ;",
            "- son contenu est très faible ou peu pertinent ;",
            "- une autre page répond mieux à la recherche ;",
            "- le site présente des problèmes techniques.",
            "## Réflexe professionnel",
            "Quand une page n'apparaît pas dans Google, ne commence pas immédiatement par modifier son titre.",
            "Commence par diagnostiquer le problème.",
          ],
          practice: [
            "Choisis une page de ton propre site ou d'un site de démonstration.",
            "Pose-toi ces questions :",
            "1. L'URL est-elle accessible ?",
            "2. La page contient-elle du contenu utile ?",
            "3. Existe-t-il des liens vers cette page ?",
            "4. Le site possède-t-il un sitemap ?",
            "5. La page est-elle destinée à être indexée ?",
          ],
          quiz: [
            {
              question: "Que désigne principalement le crawling ?",
              options: [
                "L'exploration des pages par les robots des moteurs de recherche",
                "La rédaction d'un article",
                "La création d'une campagne publicitaire",
                "La compression des images",
              ],
              answer: 0,
              explanation:
                "Le crawling correspond à l'exploration des ressources web par les robots des moteurs de recherche.",
            },
          ],
        },

        {
          slug: "seo-et-intention-utilisateur",
          title: "1.3 Le SEO commence par l'utilisateur",
          duration: "25 min",
          description:
            "Apprends pourquoi comprendre le besoin réel de l'utilisateur est plus important que de simplement choisir un mot-clé.",
          objectives: [
            "Comprendre le concept d'intention de recherche",
            "Différencier information, navigation, comparaison et transaction",
            "Relier une recherche à une page adaptée",
          ],
          content: [
            "## Un mot-clé ne suffit pas",
            "Deux personnes peuvent utiliser des mots très proches mais avoir des objectifs différents.",
            "Par exemple :",
            "« chaussures running » peut être une recherche générale.",
            "« acheter chaussures running Nairobi » indique une intention commerciale beaucoup plus forte.",
            "« comment choisir chaussures running » correspond davantage à une intention informationnelle.",
            "## Les principales intentions",
            "**Informationnelle** : l'utilisateur veut apprendre quelque chose.",
            "**Navigationnelle** : l'utilisateur cherche un site ou une marque précise.",
            "**Commerciale** : l'utilisateur compare avant de prendre une décision.",
            "**Transactionnelle** : l'utilisateur est prêt à effectuer une action comme acheter ou réserver.",
            "## Exemple",
            "Si quelqu'un recherche « meilleur ordinateur portable pour développeur », un article comparatif peut être pertinent.",
            "Si quelqu'un recherche « acheter MacBook Nairobi », une page produit ou une page commerciale peut être plus adaptée.",
            "Créer le mauvais type de page pour une recherche peut limiter les résultats même si le mot-clé est présent.",
          ],
          practice: [
            "Classe ces recherches selon leur intention :",
            "1. « comment apprendre JavaScript »",
            "2. « acheter chaussures Nike Nairobi »",
            "3. « YouTube »",
            "4. « meilleur ordinateur pour développeur »",
            "Puis indique quel type de page serait adapté à chacune.",
          ],
          quiz: [
            {
              question:
                "Quelle page est généralement la plus adaptée à « comment choisir un ordinateur portable pour développeur » ?",
              options: [
                "Un guide détaillé répondant à la question",
                "Une page vide contenant uniquement le mot-clé",
                "Une page de connexion",
                "Une page de contact uniquement",
              ],
              answer: 0,
              explanation:
                "La recherche est principalement informationnelle. Un guide détaillé répondant réellement à la question correspond mieux à l'intention.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 2
    // ============================================================
    {
      title: "Module 2 : Recherche de mots-clés",
      lessons: [
        {
          slug: "comprendre-les-mots-cles",
          title: "2.1 Comprendre les mots-clés",
          duration: "25 min",
          description:
            "Apprends ce qu'est un mot-clé et comment identifier les recherches qui peuvent réellement apporter de la valeur à un site.",
          objectives: [
            "Comprendre la notion de mot-clé",
            "Différencier mot-clé générique et requête spécifique",
            "Identifier les recherches pertinentes pour une activité",
          ],
          content: [
            "## Qu'est-ce qu'un mot-clé ?",
            "Un mot-clé est une requête ou une expression utilisée par un utilisateur dans un moteur de recherche.",
            "Dans la pratique, il est souvent plus utile de parler de **requêtes de recherche**, car les utilisateurs recherchent rarement un seul mot.",
            "Exemples :",
            "- chaussures",
            "- chaussures running",
            "- chaussures running homme",
            "- meilleures chaussures running pour débuter",
            "- acheter chaussures running Nairobi",
            "## Volume contre pertinence",
            "Un mot-clé avec beaucoup de recherches n'est pas automatiquement le meilleur choix.",
            "Supposons que « chaussures » soit recherché énormément de fois.",
            "Mais ton entreprise vend uniquement des chaussures de running à Nairobi.",
            "Une requête comme « chaussures running Nairobi » peut être beaucoup plus intéressante commercialement.",
            "## Le bon raisonnement",
            "Demande-toi :",
            "« Si quelqu'un arrive sur mon site après cette recherche, est-ce que mon site répond réellement à son besoin ? »",
            "Si la réponse est non, le mot-clé est probablement peu pertinent.",
          ],
          practice: [
            "Pour une entreprise fictive appelée CodeMentor qui propose des formations en programmation en ligne, trouve 10 recherches potentielles.",
            "Classe-les en : informationnelles, commerciales et transactionnelles.",
          ],
          quiz: [
            {
              question:
                "Quel est le meilleur critère pour choisir un mot-clé ?",
              options: [
                "Sa pertinence par rapport au besoin de l'utilisateur et à l'activité",
                "Uniquement son volume de recherche",
                "Le fait qu'il contienne beaucoup de mots",
                "Le fait qu'il soit difficile à comprendre",
              ],
              answer: 0,
              explanation:
                "Le volume est utile mais la pertinence par rapport à l'utilisateur et à l'objectif du site est fondamentale.",
            },
          ],
        },

        {
          slug: "trouver-des-idees-de-mots-cles",
          title: "2.2 Trouver des idées de mots-clés",
          duration: "30 min",
          description:
            "Découvre une méthode pratique pour construire une liste de mots-clés sans dépendre immédiatement d'un outil payant.",
          objectives: [
            "Partir des besoins clients",
            "Utiliser Google comme source d'idées",
            "Construire une première liste de recherches",
            "Regrouper les requêtes par sujet",
          ],
          content: [
            "## Commencer par le client",
            "Une erreur fréquente consiste à ouvrir directement un outil SEO et à chercher des mots-clés.",
            "Commence plutôt par comprendre le client.",
            "Pour RunPro, demande-toi :",
            "- Que veut acheter le client ?",
            "- Quel problème rencontre-t-il ?",
            "- Quelles questions pose-t-il ?",
            "- Quelles alternatives compare-t-il ?",
            "## Utiliser les suggestions de recherche",
            "Les moteurs de recherche peuvent fournir des idées grâce aux suggestions et aux recherches associées.",
            "Par exemple, en commençant par « chaussures running », tu peux découvrir des variantes liées aux prix, aux types de chaussures, aux marques ou aux usages.",
            "## Transformer les problèmes en contenu",
            "Un utilisateur peut rechercher :",
            "« comment éviter les douleurs après running ».",
            "Même si cette personne ne cherche pas directement à acheter une chaussure, elle peut devenir un lecteur ou un client potentiel si ton entreprise propose des produits pertinents.",
            "## Regrouper les idées",
            "Ne crée pas forcément une page pour chaque petite variante.",
            "Regroupe les recherches qui correspondent au même besoin et à la même intention.",
          ],
          practice: [
            "Choisis une activité réelle.",
            "Trouve au moins 20 recherches potentielles.",
            "Regroupe-les ensuite en 5 à 8 grands sujets.",
            "Pour chaque groupe, indique la page que tu pourrais créer.",
          ],
          quiz: [
            {
              question:
                "Pourquoi ne faut-il pas forcément créer une page pour chaque variante de mot-clé ?",
              options: [
                "Parce que plusieurs recherches peuvent correspondre au même besoin et à la même intention",
                "Parce que Google interdit les pages supplémentaires",
                "Parce qu'un site ne peut contenir que 10 pages",
                "Parce que les mots-clés ne servent jamais",
              ],
              answer: 0,
              explanation:
                "Plusieurs requêtes proches peuvent correspondre à une même intention. Une page complète peut alors répondre à plusieurs formulations.",
            },
          ],
        },

        {
          slug: "longue-traine",
          title: "2.3 Les mots-clés de longue traîne",
          duration: "20 min",
          description:
            "Comprends pourquoi les recherches longues et précises peuvent être très intéressantes pour une stratégie SEO.",
          objectives: [
            "Comprendre la longue traîne",
            "Identifier des requêtes spécifiques",
            "Comprendre le rapport entre volume et intention",
          ],
          content: [
            "## Qu'est-ce qu'une requête longue traîne ?",
            "Une requête longue traîne est généralement plus précise et plus spécifique.",
            "Exemple :",
            "« ordinateur portable » est très général.",
            "« meilleur ordinateur portable pour développeur web débutant » est beaucoup plus précis.",
            "## Pourquoi c'est intéressant",
            "Une recherche précise peut révéler une intention très claire.",
            "Un utilisateur qui recherche exactement un produit, un problème ou une solution peut être plus proche d'une action utile.",
            "## Exemple professionnel",
            "Une agence web pourrait cibler « création site web » mais aussi des recherches plus précises comme « créer site vitrine pour restaurant Nairobi ».",
            "La seconde recherche touche une audience beaucoup plus spécifique.",
          ],
          practice: [
            "Choisis un sujet.",
            "Écris un mot-clé général puis 10 variantes plus précises.",
            "Explique pour chacune l'intention probable.",
          ],
          quiz: [
            {
              question:
                "Quel est généralement l'avantage d'une requête très spécifique ?",
              options: [
                "Elle peut révéler une intention plus précise",
                "Elle garantit automatiquement la première position",
                "Elle n'a jamais de concurrence",
                "Elle est toujours plus recherchée",
              ],
              answer: 0,
              explanation:
                "Une requête spécifique peut correspondre à une intention plus claire, même si son volume de recherche est inférieur.",
            },
          ],
        },

        {
          slug: "creer-une-carte-de-mots-cles",
          title: "2.4 Construire une carte de mots-clés",
          duration: "30 min",
          description:
            "Apprends à associer les recherches aux bonnes pages de ton site.",
          objectives: [
            "Créer une keyword map",
            "Éviter la cannibalisation inutile",
            "Associer intention et page",
          ],
          content: [
            "## Qu'est-ce qu'une carte de mots-clés ?",
            "Une carte de mots-clés associe des recherches à des pages précises.",
            "Exemple :",
            "| Recherche | Intention | Page |",
            "| --- | --- | --- |",
            "| chaussures running homme | commerciale | catégorie homme |",
            "| comment choisir chaussures running | informationnelle | guide |",
            "| acheter chaussures running Nairobi | transactionnelle | page commerciale |",
            "## Pourquoi faire cela ?",
            "Sans organisation, plusieurs pages peuvent essayer de répondre à la même recherche.",
            "Tu risques alors de créer des pages très similaires au lieu de construire une architecture claire.",
            "## Méthode",
            "Pour chaque groupe de requêtes, définis :",
            "1. le sujet principal ;",
            "2. l'intention ;",
            "3. la page cible ;",
            "4. le type de contenu ;",
            "5. l'objectif business.",
          ],
          practice: [
            "Crée une carte de mots-clés pour un petit site de formation en ligne contenant :",
            "- une page d'accueil ;",
            "- trois catégories ;",
            "- cinq cours ;",
            "- un blog.",
          ],
          quiz: [
            {
              question: "À quoi sert principalement une keyword map ?",
              options: [
                "À associer les recherches pertinentes aux pages adaptées",
                "À augmenter artificiellement le nombre de mots sur une page",
                "À supprimer les liens internes",
                "À remplacer Google Search Console",
              ],
              answer: 0,
              explanation:
                "Une keyword map permet de structurer la stratégie et d'associer les intentions de recherche aux pages appropriées.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 3
    // ============================================================
    {
      title: "Module 3 : Search Intent",
      lessons: [
        {
          slug: "comprendre-search-intent",
          title: "3.1 Comprendre l'intention de recherche",
          duration: "25 min",
          description:
            "Apprends à comprendre ce que l'utilisateur cherche réellement derrière une requête.",
          objectives: [
            "Identifier les intentions de recherche",
            "Analyser une requête",
            "Choisir le bon format de contenu",
          ],
          content: [
            "## Le vrai problème",
            "Supposons que tu veuilles te positionner sur « JavaScript ».",
            "Que cherche réellement l'utilisateur ?",
            "Un cours ?",
            "La documentation ?",
            "Une définition ?",
            "Une bibliothèque ?",
            "Un tutoriel ?",
            "Le mot-clé seul ne donne pas toujours la réponse.",
            "## Observer les résultats",
            "Une méthode pratique consiste à analyser les résultats déjà proposés par Google.",
            "Si les résultats sont principalement des guides, créer une page produit peut être une mauvaise décision.",
            "Si les résultats sont principalement des pages produits, un simple article théorique risque de répondre moins bien à l'intention.",
            "## Le SEO comme alignement",
            "La question n'est pas seulement : « Quel mot-clé dois-je utiliser ? »",
            "La vraie question est : « Quel contenu mérite d'être proposé pour cette recherche ? »",
          ],
          practice: [
            "Choisis 5 recherches dans ton domaine.",
            "Pour chacune, analyse les résultats de recherche.",
            "Note le type de pages qui apparaît le plus souvent.",
            "Explique pourquoi ce type de page correspond probablement à l'intention.",
          ],
          quiz: [
            {
              question:
                "Pourquoi analyser les résultats existants peut-il aider à comprendre l'intention ?",
              options: [
                "Parce que les résultats donnent des indications sur le type de contenu attendu pour la requête",
                "Parce que cela garantit le classement",
                "Parce que cela remplace toute recherche utilisateur",
                "Parce que Google affiche toujours exactement la même page",
              ],
              answer: 0,
              explanation:
                "Les résultats peuvent révéler le format, le niveau de détail et le type de contenu qui répondent actuellement à la recherche.",
            },
          ],
        },

        {
          slug: "creer-le-bon-type-de-page",
          title: "3.2 Choisir le bon type de contenu",
          duration: "25 min",
          description:
            "Apprends à transformer une intention de recherche en page concrète.",
          objectives: [
            "Choisir entre article, catégorie, produit, guide ou landing page",
            "Adapter le contenu à l'objectif",
            "Éviter les mauvaises correspondances",
          ],
          content: [
            "## Une recherche doit avoir une réponse adaptée",
            "Imagine une personne qui recherche « prix formation cybersécurité débutant ».",
            "Une page contenant uniquement une définition de la cybersécurité ne répond pas complètement à son besoin.",
            "Une page présentant la formation, son programme, son niveau, sa durée et son prix est probablement plus adaptée.",
            "## Exemples",
            "« comment apprendre Python » → guide ou tutoriel.",
            "« formation Python en ligne » → page de formation.",
            "« Python documentation » → documentation.",
            "« meilleur framework JavaScript » → contenu comparatif ou guide.",
            "## Principe",
            "Le meilleur contenu SEO est rarement celui qui contient le plus de mots.",
            "C'est celui qui répond le plus efficacement au besoin.",
          ],
          practice: [
            "Pour 10 recherches, choisis le type de page le plus approprié :",
            "article, guide, produit, catégorie, landing page, documentation ou comparaison.",
          ],
          quiz: [
            {
              question:
                "Quel contenu convient généralement le mieux à une recherche « comment faire X » ?",
              options: [
                "Un guide ou tutoriel expliquant comment faire X",
                "Une page de connexion",
                "Une page vide",
                "Une publicité sans information",
              ],
              answer: 0,
              explanation:
                "Une recherche « comment faire » est généralement informationnelle et appelle une réponse pédagogique.",
            },
          ],
        },

        {
          slug: "eviter-le-keyword-stuffing",
          title: "3.3 Pourquoi le keyword stuffing est une mauvaise stratégie",
          duration: "20 min",
          description:
            "Comprends pourquoi répéter artificiellement un mot-clé peut détériorer une page au lieu de l'améliorer.",
          objectives: [
            "Identifier le keyword stuffing",
            "Écrire naturellement",
            "Prioriser l'utilité du contenu",
          ],
          content: [
            "## Le keyword stuffing",
            "Le keyword stuffing consiste à surutiliser artificiellement des mots ou expressions dans le but de manipuler la visibilité d'une page.",
            "Exemple mauvais :",
            "« Chaussures running Nairobi. Nos chaussures running Nairobi sont les meilleures chaussures running Nairobi pour acheter chaussures running Nairobi. »",
            "Cette phrase est artificielle et désagréable à lire.",
            "## Une meilleure approche",
            "Utilise naturellement le vocabulaire du sujet.",
            "Parle des chaussures, de leur usage, des tailles, des terrains, des marques, des prix et des conditions de livraison.",
            "Un contenu riche peut couvrir naturellement le sujet sans répéter constamment la même expression.",
          ],
          practice: [
            "Prends un paragraphe contenant une répétition excessive d'un mot-clé.",
            "Réécris-le pour qu'il soit naturel tout en conservant le sujet.",
          ],
          quiz: [
            {
              question: "Quel est le meilleur objectif lors de la rédaction SEO ?",
              options: [
                "Répondre clairement au besoin de l'utilisateur",
                "Répéter le mot-clé le plus possible",
                "Écrire uniquement pour les robots",
                "Ajouter le mot-clé dans chaque phrase",
              ],
              answer: 0,
              explanation:
                "Le contenu doit d'abord être utile et pertinent pour l'utilisateur. Les mots-clés doivent être intégrés naturellement.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 4
    // ============================================================
    {
      title: "Module 4 : SEO On-Page",
      lessons: [
        {
          slug: "optimiser-title-tag",
          title: "4.1 Optimiser la balise Title",
          duration: "30 min",
          description:
            "Apprends à créer des titres de pages clairs, pertinents et utiles pour les utilisateurs et les moteurs de recherche.",
          objectives: [
            "Comprendre la balise title",
            "Créer des titres descriptifs",
            "Éviter les titres génériques",
          ],
          content: [
            "## Qu'est-ce que la balise title ?",
            "La balise `<title>` définit le titre de la page dans le document HTML.",
            "Elle joue un rôle important pour comprendre le sujet d'une page et apparaît souvent dans les résultats de recherche.",
            "## Mauvais exemple",
            "`<title>Accueil</title>`",
            "Ce titre donne très peu d'informations.",
            "## Meilleur exemple",
            "`<title>Chaussures de Running à Nairobi | RunPro</title>`",
            "Le titre indique clairement le sujet de la page et le contexte commercial.",
            "## Ne pense pas uniquement SEO",
            "Le titre doit également donner envie de comprendre ou visiter la page.",
            "Évite de remplir le title avec une longue liste de mots-clés.",
            "## Exemple pour Savoir+",
            "`<title>Apprendre le SEO de A à Z | Savoir+</title>`",
            "Le titre indique le sujet, le format et la marque.",
          ],
          examples: [
            "```html\n<head>\n  <title>Formation SEO de A à Z | Savoir+</title>\n</head>\n```",
          ],
          practice: [
            "Crée un title pour :",
            "1. une page de formation React ;",
            "2. une boutique de chaussures ;",
            "3. un restaurant à Nairobi ;",
            "4. un article expliquant les backlinks.",
          ],
          quiz: [
            {
              question: "Quel est le meilleur title ?",
              options: [
                "Accueil",
                "SEO",
                "Formation SEO de A à Z | Savoir+",
                "SEO SEO SEO SEO",
              ],
              answer: 2,
              explanation:
                "Le troisième titre est descriptif, naturel et indique clairement le sujet de la page.",
            },
          ],
        },

        {
          slug: "meta-description",
          title: "4.2 Écrire une bonne meta description",
          duration: "25 min",
          description:
            "Comprends le rôle de la meta description et apprends à écrire des descriptions utiles et attractives.",
          objectives: [
            "Comprendre la meta description",
            "Écrire des descriptions pertinentes",
            "Éviter les descriptions artificielles",
          ],
          content: [
            "## Qu'est-ce qu'une meta description ?",
            "La meta description est une description associée à une page HTML.",
            "Elle peut être utilisée par les moteurs de recherche pour générer un extrait dans les résultats.",
            "Cependant, un moteur de recherche peut choisir d'afficher un autre extrait selon la recherche de l'utilisateur.",
            "## Une bonne description",
            "Elle doit expliquer clairement ce que l'utilisateur trouvera sur la page.",
            "Exemple :",
            "« Apprends les fondamentaux du SEO : recherche de mots-clés, SEO technique, contenu, backlinks et audit complet avec des exercices pratiques. »",
            "## Évite les promesses trompeuses",
            "N'écris pas « première position Google garantie ».",
            "Le SEO ne permet pas de garantir une position précise dans les résultats organiques.",
          ],
          practice: [
            "Écris une meta description pour la page d'accueil de Savoir+.",
            "Puis écris-en une pour un cours SEO.",
          ],
          quiz: [
            {
              question: "Pourquoi une meta description doit-elle être descriptive ?",
              options: [
                "Pour aider l'utilisateur à comprendre le contenu proposé",
                "Pour garantir la première position",
                "Pour remplacer le contenu de la page",
                "Pour empêcher Google d'explorer la page",
              ],
              answer: 0,
              explanation:
                "Une description claire peut aider l'utilisateur à comprendre la valeur de la page avant de cliquer.",
            },
          ],
        },

        {
          slug: "structure-h1-h2-h3",
          title: "4.3 Structurer une page avec H1, H2 et H3",
          duration: "30 min",
          description:
            "Apprends à organiser une page pour améliorer sa lisibilité et sa compréhension.",
          objectives: [
            "Comprendre les niveaux de titres",
            "Créer une hiérarchie logique",
            "Structurer un article long",
          ],
          content: [
            "## Pourquoi structurer une page ?",
            "Une longue page sans structure est difficile à lire.",
            "Imagine un guide de 3 000 mots contenant uniquement des paragraphes.",
            "Même si le contenu est excellent, le lecteur aura du mal à naviguer.",
            "## Exemple",
            "# Comment apprendre le SEO",
            "## 1. Comprendre le SEO",
            "## 2. Trouver des mots-clés",
            "### Utiliser les recherches des utilisateurs",
            "### Analyser l'intention",
            "## 3. Optimiser une page",
            "Cette hiérarchie permet de comprendre l'organisation du contenu.",
            "## Attention",
            "Les balises de titre ne doivent pas être utilisées uniquement pour obtenir une apparence visuelle particulière.",
            "Utilise plutôt CSS pour le style et les balises HTML pour la structure.",
          ],
          examples: [
            "```html\n<article>\n  <h1>Guide complet du SEO</h1>\n\n  <h2>Comprendre le SEO</h2>\n  <p>...</p>\n\n  <h2>Recherche de mots-clés</h2>\n\n  <h3>Identifier les besoins</h3>\n  <p>...</p>\n</article>\n```",
          ],
          practice: [
            "Prends un article sur un sujet technique.",
            "Transforme-le en structure H1/H2/H3 logique.",
          ],
          quiz: [
            {
              question: "Quel élément doit généralement représenter le titre principal d'une page ?",
              options: ["H1", "H4", "Footer", "Meta description"],
              answer: 0,
              explanation:
                "Le H1 représente généralement le titre principal du contenu de la page.",
            },
          ],
        },

        {
          slug: "images-et-alt",
          title: "4.4 Images, attribut alt et SEO",
          duration: "25 min",
          description:
            "Découvre comment intégrer correctement les images dans une stratégie SEO.",
          objectives: [
            "Comprendre l'attribut alt",
            "Éviter les alt inutiles",
            "Optimiser les images pour l'expérience utilisateur",
          ],
          content: [
            "## Pourquoi les images comptent",
            "Les images peuvent améliorer la compréhension d'un contenu, particulièrement pour les tutoriels, produits et guides.",
            "Mais une image doit être correctement intégrée.",
            "## L'attribut alt",
            "L'attribut `alt` fournit une alternative textuelle à l'image.",
            "Exemple :",
            `<img src="/chaussures.jpg" alt="Chaussures de running pour homme" />`,
            "L'alt doit décrire l'image lorsque cela est pertinent.",
            "## Mauvais exemple",
            "`alt=\"image SEO chaussures chaussures chaussures Nairobi\"`",
            "Cette description est artificielle.",
            "## Bon réflexe",
            "Décris ce que l'image représente réellement.",
          ],
          practice: [
            "Choisis 5 images d'un site.",
            "Écris un attribut alt pertinent pour chacune.",
            "Identifie les images décoratives qui n'ont pas besoin d'une description textuelle informative.",
          ],
          quiz: [
            {
              question: "Quel est le meilleur attribut alt ?",
              options: [
                "Une description naturelle de l'image",
                "Une liste de mots-clés",
                "Le mot « image »",
                "Une phrase sans rapport",
              ],
              answer: 0,
              explanation:
                "L'attribut alt doit décrire l'image de manière utile lorsqu'une alternative textuelle est nécessaire.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 5
    // ============================================================
    {
      title: "Module 5 : SEO Technique",
      lessons: [
        {
          slug: "robots-txt",
          title: "5.1 robots.txt : contrôler l'exploration",
          duration: "30 min",
          description:
            "Comprends le rôle de robots.txt, ses limites et comment l'utiliser correctement.",
          objectives: [
            "Comprendre robots.txt",
            "Écrire une règle simple",
            "Comprendre la différence entre exploration et sécurité",
            "Éviter les erreurs classiques",
          ],
          content: [
            "## Situation réelle",
            "Tu travailles sur un site e-commerce.",
            "Le site contient des milliers d'URL générées automatiquement par des filtres.",
            "Certaines URL n'apportent aucune valeur pour les moteurs de recherche.",
            "L'équipe souhaite contrôler certaines explorations.",
            "## Qu'est-ce que robots.txt ?",
            "Le fichier `robots.txt` fournit des instructions aux robots concernant les chemins qu'ils peuvent ou ne peuvent pas explorer.",
            "Il se trouve généralement à la racine du domaine :",
            "`https://example.com/robots.txt`.",
            "## Exemple",
            "```text\nUser-agent: *\nDisallow: /admin/\nDisallow: /private/\n```",
            "## Attention : ce n'est pas une sécurité",
            "Bloquer un chemin dans robots.txt ne protège pas les données sensibles.",
            "Un utilisateur peut toujours connaître ou visiter l'URL s'il y a accès.",
            "Pour protéger des données, utilise une véritable authentification et des contrôles d'accès.",
            "## Erreur fréquente",
            "Mettre accidentellement `Disallow: /` sur un site de production peut empêcher les robots d'explorer tout le site.",
            "## Réflexe professionnel",
            "Avant de modifier robots.txt, comprends exactement quelles URL tu veux contrôler et pourquoi.",
          ],
          examples: [
            "```text\nUser-agent: *\nDisallow: /admin/\nDisallow: /account/\n\nSitemap: https://example.com/sitemap.xml\n```",
          ],
          practice: [
            "Crée un robots.txt pour un site fictif contenant :",
            "- /admin/",
            "- /account/",
            "- /checkout/",
            "Puis ajoute l'URL du sitemap.",
            "Explique pourquoi ces chemins ne doivent pas nécessairement être explorés.",
          ],
          quiz: [
            {
              question: "À quoi sert principalement robots.txt ?",
              options: [
                "À donner des directives d'exploration aux robots",
                "À sécuriser les comptes utilisateurs",
                "À chiffrer les données",
                "À garantir l'indexation",
              ],
              answer: 0,
              explanation:
                "robots.txt concerne principalement les directives d'exploration. Ce n'est pas un mécanisme de sécurité.",
            },
          ],
        },

        {
          slug: "sitemap-xml",
          title: "5.2 Sitemap XML",
          duration: "30 min",
          description:
            "Découvre comment les sitemaps aident les moteurs à découvrir les URL importantes d'un site.",
          objectives: [
            "Comprendre le rôle d'un sitemap",
            "Créer une structure simple",
            "Comprendre ses limites",
          ],
          content: [
            "## Le problème",
            "Imagine un site contenant 20 000 pages.",
            "Certaines pages importantes peuvent être difficiles à découvrir si l'architecture interne est mauvaise.",
            "Un sitemap fournit une liste d'URL que tu souhaites signaler aux moteurs.",
            "## Exemple",
            "```xml\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>https://example.com/</loc>\n  </url>\n  <url>\n    <loc>https://example.com/cours/seo</loc>\n  </url>\n</urlset>\n```",
            "## Important",
            "Un sitemap aide à la découverte des URL, mais sa présence ne garantit ni l'indexation ni le classement.",
            "## Bonne pratique",
            "Garde le sitemap propre et concentre-le sur les URL que tu souhaites réellement signaler.",
          ],
          practice: [
            "Pour un site contenant 10 cours et 5 catégories, construis la liste des URL qui devraient être candidates à apparaître dans le sitemap.",
          ],
          quiz: [
            {
              question: "Que garantit un sitemap ?",
              options: [
                "Rien concernant le classement ou l'indexation garantie",
                "La première position",
                "L'indexation de toutes les URL",
                "Une augmentation automatique du trafic",
              ],
              answer: 0,
              explanation:
                "Un sitemap facilite notamment la découverte des URL mais ne garantit ni leur indexation ni leur positionnement.",
            },
          ],
        },

        {
          slug: "canonical",
          title: "5.3 Les URLs canoniques",
          duration: "30 min",
          description:
            "Comprends pourquoi les URL similaires peuvent créer de la confusion et comment utiliser rel=canonical.",
          objectives: [
            "Comprendre le contenu dupliqué et les URL similaires",
            "Utiliser canonical",
            "Comprendre que canonical est un signal et non une garantie",
          ],
          content: [
            "## Situation réelle",
            "Ton e-commerce possède :",
            "`/chaussures`",
            "`/chaussures?couleur=rouge`",
            "`/chaussures?taille=42`",
            "`/chaussures?tri=prix`.",
            "Certaines de ces URL peuvent présenter un contenu très similaire.",
            "## Le problème",
            "Les moteurs peuvent devoir déterminer quelle URL représente la version principale.",
            "## Canonical",
            "Tu peux indiquer une URL préférée avec :",
            "```html\n<link\n  rel=\"canonical\"\n  href=\"https://example.com/chaussures\"\n/>\n```",
            "## Attention",
            "Une canonical est un signal destiné à aider les moteurs. Elle ne constitue pas une commande garantissant que l'URL indiquée sera choisie.",
            "## Erreur fréquente",
            "Mettre une canonical vers une URL complètement différente et non pertinente.",
            "La canonical doit représenter une version équivalente ou préférée du contenu.",
          ],
          practice: [
            "Imagine trois URL représentant presque le même produit.",
            "Choisis l'URL canonique et explique pourquoi.",
          ],
          quiz: [
            {
              question: "Quel est le rôle de rel=canonical ?",
              options: [
                "Indiquer l'URL préférée parmi des versions similaires",
                "Bloquer l'accès à une page",
                "Créer automatiquement des backlinks",
                "Garantir la première position",
              ],
              answer: 0,
              explanation:
                "Canonical aide à signaler quelle URL doit être considérée comme la version préférée parmi plusieurs versions similaires.",
            },
          ],
        },

        {
          slug: "redirects-seo",
          title: "5.4 Redirections 301 et SEO",
          duration: "30 min",
          description:
            "Apprends à gérer les changements d'URL sans casser l'expérience utilisateur ou la structure du site.",
          objectives: [
            "Comprendre les redirections",
            "Utiliser 301 dans les migrations",
            "Identifier les chaînes de redirection",
          ],
          content: [
            "## Situation",
            "Ton site possède :",
            "`/formation-seo`.",
            "Tu décides de changer l'URL en :",
            "`/cours/seo`.",
            "Des utilisateurs et d'autres sites peuvent encore utiliser l'ancienne URL.",
            "## Solution",
            "Une redirection permanente peut envoyer les visiteurs vers la nouvelle URL.",
            "## Exemple conceptuel",
            "`/formation-seo` → `301` → `/cours/seo`.",
            "## Pourquoi c'est important",
            "Sans redirection, l'ancienne URL peut produire une erreur 404.",
            "Une migration mal préparée peut également provoquer une perte de trafic et des problèmes de navigation.",
            "## Erreur fréquente",
            "Créer une chaîne :",
            "`A → B → C → D`.",
            "Il est généralement préférable de rediriger directement vers la destination finale lorsque cela est possible.",
          ],
          examples: [
            "```typescript\n// Next.js - Configuration des redirections (next.config.js / next.config.mjs)\nconst nextConfig = {\n  async redirects() {\n    return [\n      {\n        source: \"/formation-seo\",\n        destination: \"/cours/seo\",\n        permanent: true,\n      },\n    ];\n  },\n};\n\nexport default nextConfig;\n```",
          ],
          practice: [
            "Imagine que les URL suivantes changent :",
            "- /blog/seo-2024 → /blog/seo",
            "- /cours/react-old → /cours/react",
            "Écris les redirections conceptuelles nécessaires.",
          ],
          quiz: [
            {
              question:
                "Pourquoi utiliser une redirection permanente lorsqu'une URL change définitivement ?",
              options: [
                "Pour envoyer les visiteurs et les signaux pertinents vers la nouvelle URL",
                "Pour supprimer le site",
                "Pour empêcher Google de visiter le domaine",
                "Pour créer un nouveau domaine",
              ],
              answer: 0,
              explanation:
                "Une redirection permanente permet de gérer proprement le changement d'URL et d'orienter les utilisateurs vers la nouvelle destination.",
            },
          ],
        },

        {
          slug: "erreurs-404",
          title: "5.5 Gérer les erreurs 404",
          duration: "20 min",
          description:
            "Comprends les erreurs 404 et apprends à distinguer une erreur normale d'un véritable problème SEO.",
          objectives: [
            "Comprendre une 404",
            "Identifier les liens cassés",
            "Décider quand rediriger",
          ],
          content: [
            "## Qu'est-ce qu'une 404 ?",
            "Une erreur 404 signifie généralement que la ressource demandée n'a pas été trouvée.",
            "Toutes les 404 ne sont pas catastrophiques.",
            "Une page supprimée peut naturellement retourner une 404 si aucune alternative pertinente n'existe.",
            "## Quand rediriger ?",
            "Si une ancienne page a une nouvelle version clairement équivalente, une redirection peut être appropriée.",
            "Si aucune destination pertinente n'existe, il peut être préférable de laisser l'ancienne URL retourner une réponse appropriée plutôt que de rediriger toutes les pages vers l'accueil.",
            "## Audit",
            "Cherche les liens internes cassés et les URL importantes qui génèrent des erreurs.",
          ],
          practice: [
            "Trouve 5 liens cassés sur un site de test et détermine pour chacun : corriger le lien, rediriger ou conserver la 404.",
          ],
          quiz: [
            {
              question:
                "Faut-il automatiquement rediriger toutes les 404 vers la page d'accueil ?",
              options: [
                "Non, seulement lorsqu'une destination pertinente existe",
                "Oui, toujours",
                "Oui, uniquement pour les petits sites",
                "Non, les 404 sont toujours mauvaises",
              ],
              answer: 0,
              explanation:
                "Une redirection doit avoir une destination pertinente. Rediriger massivement des URL sans rapport vers l'accueil peut créer une mauvaise expérience.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 6
    // ============================================================
    {
      title: "Module 6 : SEO pour les développeurs et Next.js",
      lessons: [
        {
          slug: "seo-html-semantique",
          title: "6.1 HTML sémantique et SEO",
          duration: "25 min",
          description:
            "Comprends pourquoi la structure HTML est importante pour construire des pages compréhensibles et accessibles.",
          objectives: [
            "Utiliser correctement les éléments HTML",
            "Comprendre la sémantique",
            "Éviter une structure basée uniquement sur div",
          ],
          content: [
            "## SEO et développement",
            "Un développeur ne doit pas considérer le SEO comme une tâche réservée au marketing.",
            "La manière dont une page est construite influence directement sa capacité à être comprise et utilisée.",
            "## Exemple",
            "Au lieu de construire toute une page avec des `div`, utilise lorsque cela est pertinent :",
            "- `<header>`",
            "- `<nav>`",
            "- `<main>`",
            "- `<article>`",
            "- `<section>`",
            "- `<footer>`.",
            "## Pourquoi ?",
            "Une structure sémantique donne du sens au document et améliore notamment l'accessibilité.",
            "Elle rend également le HTML plus propre et plus maintenable.",
          ],
          practice: [
            "Prends une page React existante construite principalement avec des div.",
            "Identifie les éléments qui pourraient devenir header, nav, main, article, section ou footer.",
          ],
          quiz: [
            {
              question: "Quel est l'intérêt principal du HTML sémantique ?",
              options: [
                "Donner une structure et un sens appropriés au document",
                "Ajouter automatiquement des backlinks",
                "Garantir une première position",
                "Remplacer CSS",
              ],
              answer: 0,
              explanation:
                "Le HTML sémantique permet de structurer correctement le document et améliore notamment compréhension, accessibilité et maintenance.",
            },
          ],
        },

        {
          slug: "metadata-nextjs",
          title: "6.2 Metadata SEO avec Next.js",
          duration: "30 min",
          description:
            "Apprends à configurer les métadonnées SEO d'une application Next.js moderne.",
          objectives: [
            "Créer des metadata",
            "Utiliser des metadata dynamiques",
            "Comprendre title et description",
          ],
          content: [
            "## Pourquoi gérer les metadata dans le code ?",
            "Dans une application moderne, chaque page peut avoir un sujet différent.",
            "Une page de cours doit donc avoir un title et une description différents de la page d'accueil.",
            "## Exemple Next.js",
          ],
          examples: [
            "```typescript\n// Metadata statique\nimport type { Metadata } from \"next\";\n\nexport const metadata: Metadata = {\n  title: \"Formation SEO de A à Z | Savoir+\",\n  description:\n    \"Apprends le SEO avec des cours pratiques, des exercices et un projet final.\",\n};\n```",
            "```typescript\n// Metadata dynamique\nimport type { Metadata } from \"next\";\n\nexport async function generateMetadata(): Promise<Metadata> {\n  return {\n    title: \"Cours SEO | Savoir+\",\n    description:\n      \"Apprends à optimiser la visibilité d'un site web.\",\n  };\n}\n```",
          ],
          practice: [
            "Ajoute des metadata SEO à une page de cours Next.js.",
            "Crée un title et une description réellement spécifiques au cours.",
          ],
          quiz: [
            {
              question:
                "Pourquoi une page de cours doit-elle avoir des metadata spécifiques ?",
              options: [
                "Parce qu'elle possède un sujet et une intention différents des autres pages",
                "Parce que toutes les pages doivent avoir exactement le même title",
                "Parce que metadata remplace le contenu",
                "Parce que metadata crée automatiquement du trafic",
              ],
              answer: 0,
              explanation:
                "Des metadata spécifiques aident à représenter correctement le contenu et le sujet de chaque page.",
            },
          ],
        },

        {
          slug: "sitemap-nextjs",
          title: "6.3 Générer un sitemap avec Next.js",
          duration: "30 min",
          description:
            "Apprends à générer automatiquement un sitemap pour une application Next.js.",
          objectives: [
            "Comprendre les sitemaps dynamiques",
            "Utiliser sitemap.ts",
            "Gérer des pages dynamiques",
          ],
          content: [
            "## Le problème des applications dynamiques",
            "Savoir+ peut contenir des centaines ou milliers de cours.",
            "Créer manuellement toutes les URL serait difficile à maintenir.",
            "Next.js permet de générer un sitemap dynamiquement.",
          ],
          examples: [
            "```typescript\n// Exemple sitemap.ts\nimport type { MetadataRoute } from \"next\";\n\nexport default async function sitemap(): Promise<MetadataRoute.Sitemap> {\n  const courses = [\n    {\n      slug: \"seo-referencement-naturel\",\n    },\n    {\n      slug: \"javascript-moderne\",\n    },\n  ];\n\n  return [\n    {\n      url: \"https://savoirplus.com\",\n    },\n    ...courses.map((course) => ({\n      url: `https://savoirplus.com/learn/${course.slug}`,\n    })),\n  ];\n}\n```",
          ],
          practice: [
            "Crée un sitemap dynamique contenant :",
            "- l'accueil ;",
            "- les catégories ;",
            "- les cours.",
          ],
          quiz: [
            {
              question: "Pourquoi générer un sitemap dynamiquement ?",
              options: [
                "Pour maintenir automatiquement les URL lorsque le contenu évolue",
                "Pour accélérer toutes les pages",
                "Pour remplacer robots.txt",
                "Pour empêcher l'indexation",
              ],
              answer: 0,
              explanation:
                "Un sitemap dynamique est particulièrement utile pour les sites dont les URL sont générées ou modifiées régulièrement.",
            },
          ],
        },

        {
          slug: "seo-rendu-javascript",
          title: "6.4 JavaScript, rendu et SEO",
          duration: "35 min",
          description:
            "Comprends les problèmes potentiels liés aux applications JavaScript et comment construire des pages accessibles aux moteurs et aux utilisateurs.",
          objectives: [
            "Comprendre SSR et rendu côté client",
            "Identifier les problèmes SEO liés à JavaScript",
            "Tester le HTML réellement rendu",
          ],
          content: [
            "## Le piège",
            "Une application peut afficher une page magnifique dans le navigateur tout en envoyant initialement très peu de HTML utile.",
            "Cela peut compliquer certaines tâches d'exploration ou de compréhension.",
            "## Exemple",
            "Imagine une page dont le contenu principal est uniquement récupéré après plusieurs appels JavaScript.",
            "Le navigateur finit par afficher le contenu, mais il faut vérifier comment les moteurs peuvent accéder et traiter cette page.",
            "## Avec Next.js",
            "Les frameworks modernes proposent plusieurs stratégies de rendu.",
            "Le choix dépend du type de page, des données et des besoins de l'application.",
            "## Réflexe développeur",
            "Ne teste pas seulement la page visuellement.",
            "Vérifie également le HTML rendu, les metadata, les liens et l'accessibilité du contenu.",
          ],
          practice: [
            "Choisis une page React/Next.js.",
            "Vérifie :",
            "- le HTML rendu ;",
            "- le title ;",
            "- la description ;",
            "- les liens ;",
            "- le contenu principal.",
          ],
          quiz: [
            {
              question:
                "Pourquoi un développeur SEO doit-il regarder le HTML rendu et pas seulement l'apparence visuelle ?",
              options: [
                "Parce que l'interface visible ne montre pas toujours toute la structure HTML réellement disponible",
                "Parce que CSS n'est jamais important",
                "Parce que les utilisateurs ne voient jamais le HTML",
                "Parce que JavaScript est interdit",
              ],
              answer: 0,
              explanation:
                "L'apparence visuelle ne suffit pas pour vérifier la structure, les liens, les metadata et le contenu réellement exposé.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 7
    // ============================================================
    {
      title: "Module 7 : Content SEO",
      lessons: [
        {
          slug: "creer-contenu-utile",
          title: "7.1 Créer du contenu réellement utile",
          duration: "30 min",
          description:
            "Apprends à construire des contenus qui répondent réellement aux besoins des utilisateurs.",
          objectives: [
            "Identifier le besoin utilisateur",
            "Construire une structure de contenu",
            "Apporter une valeur concrète",
          ],
          content: [
            "## Écrire pour aider",
            "Un article SEO ne devrait pas exister uniquement pour obtenir du trafic.",
            "Il doit résoudre un problème.",
            "Exemple :",
            "Au lieu d'écrire « Qu'est-ce que le SEO ? » avec une définition de trois lignes, construis un guide qui explique le concept, montre des exemples et donne une méthode applicable.",
            "## Structure pédagogique",
            "Une bonne structure peut être :",
            "1. problème ;",
            "2. explication ;",
            "3. exemple ;",
            "4. méthode ;",
            "5. erreurs fréquentes ;",
            "6. exercice ou checklist.",
            "## Exemple Savoir+",
            "Un cours sur SEO devrait permettre à l'apprenant de passer d'une notion théorique à une action réelle sur son propre site.",
          ],
          practice: [
            "Choisis un sujet.",
            "Construis le plan d'un article destiné à aider un débutant.",
            "Ajoute au moins deux exemples réels et un exercice.",
          ],
          quiz: [
            {
              question: "Quel est le principal objectif d'un contenu SEO utile ?",
              options: [
                "Répondre efficacement au besoin de l'utilisateur",
                "Atteindre un nombre minimum de mots",
                "Répéter un mot-clé",
                "Ajouter le plus de titres possible",
              ],
              answer: 0,
              explanation:
                "La longueur ou le nombre de mots n'est pas une fin en soi. La priorité est de répondre au besoin de l'utilisateur.",
            },
          ],
        },

        {
          slug: "structure-article-seo",
          title: "7.2 Construire un article SEO",
          duration: "30 min",
          description:
            "Apprends à transformer une idée en article structuré et exploitable.",
          objectives: [
            "Créer un plan d'article",
            "Répondre aux sous-questions",
            "Créer une progression logique",
          ],
          content: [
            "## Exemple",
            "Sujet : « Comment apprendre JavaScript ? »",
            "Structure possible :",
            "# Comment apprendre JavaScript ?",
            "## 1. Comprendre les bases",
            "## 2. Installer son environnement",
            "## 3. Apprendre les concepts fondamentaux",
            "## 4. Construire des petits projets",
            "## 5. Apprendre les outils modernes",
            "## 6. Créer un projet complet",
            "## 7. Éviter les erreurs de débutant",
            "Cette structure répond à différentes étapes du parcours de l'utilisateur.",
          ],
          practice: [
            "Crée le plan d'un article de 2 000 mots sur un sujet de ton domaine.",
            "Pour chaque section, écris en une phrase la question à laquelle elle répond.",
          ],
          quiz: [
            {
              question: "Pourquoi construire un plan avant de rédiger ?",
              options: [
                "Pour organiser les réponses et éviter un contenu désordonné",
                "Pour garantir une position",
                "Pour éviter d'utiliser des paragraphes",
                "Pour supprimer les images",
              ],
              answer: 0,
              explanation:
                "Un plan permet de construire une progression logique et de couvrir les besoins importants du lecteur.",
            },
          ],
        },

        {
          slug: "eeat-et-confiance",
          title: "7.3 Expertise, expérience et confiance",
          duration: "30 min",
          description:
            "Comprends pourquoi la crédibilité et la qualité des informations sont essentielles, particulièrement pour les sujets sensibles.",
          objectives: [
            "Comprendre la notion de confiance",
            "Identifier les sujets nécessitant davantage de rigueur",
            "Améliorer la crédibilité d'un contenu",
          ],
          content: [
            "## Le problème de la confiance",
            "Imagine un article qui explique comment gérer son argent.",
            "Le lecteur doit pouvoir déterminer si les informations sont sérieuses.",
            "Pour certains sujets, notamment santé, finance ou sécurité, la qualité et la fiabilité des informations sont particulièrement importantes.",
            "## Signaux de confiance",
            "Selon le contexte, tu peux présenter :",
            "- l'auteur ;",
            "- son expérience ;",
            "- les sources utilisées ;",
            "- la date de mise à jour ;",
            "- les références utiles.",
            "## Pour Savoir+",
            "Un cours doit clairement indiquer qui l'a préparé, quelles connaissances sont enseignées et comment l'apprenant peut vérifier ou approfondir.",
          ],
          practice: [
            "Choisis un article existant.",
            "Identifie les éléments qui permettent au lecteur de juger sa crédibilité.",
            "Propose trois améliorations.",
          ],
          quiz: [
            {
              question: "Pourquoi afficher clairement les sources peut-il être utile ?",
              options: [
                "Pour aider le lecteur à vérifier et approfondir les informations",
                "Pour garantir automatiquement le classement",
                "Pour cacher l'auteur",
                "Pour remplacer le contenu",
              ],
              answer: 0,
              explanation:
                "Les sources peuvent renforcer la transparence et permettre au lecteur de vérifier les informations.",
            },
          ],
        },

        {
          slug: "mise-a-jour-contenu",
          title: "7.4 Mettre à jour un contenu",
          duration: "25 min",
          description:
            "Apprends à identifier les contenus qui vieillissent et à les améliorer.",
          objectives: [
            "Identifier les contenus obsolètes",
            "Mettre à jour les informations",
            "Mesurer l'impact d'une mise à jour",
          ],
          content: [
            "## Le contenu vieillit",
            "Un article sur une technologie peut devenir obsolète.",
            "Les outils changent, les versions évoluent et certaines informations deviennent incorrectes.",
            "## Exemple",
            "Un article intitulé « Guide Next.js 2023 » peut contenir des instructions qui ne correspondent plus à une version récente.",
            "Plutôt que de publier constamment de nouveaux articles similaires, il peut être préférable de mettre à jour la ressource existante lorsque cela a du sens.",
            "## Processus",
            "1. Identifier les informations obsolètes.",
            "2. Vérifier les sources.",
            "3. Mettre à jour le contenu.",
            "4. Améliorer la structure.",
            "5. Vérifier les liens.",
            "6. Mesurer les performances.",
          ],
          practice: [
            "Choisis un ancien article.",
            "Liste les informations potentiellement obsolètes.",
            "Propose un plan de mise à jour.",
          ],
          quiz: [
            {
              question:
                "Pourquoi mettre à jour un contenu existant peut-il être pertinent ?",
              options: [
                "Parce que les informations peuvent devenir obsolètes et perdre leur utilité",
                "Parce que Google exige toujours une modification mensuelle",
                "Parce qu'il faut supprimer tous les anciens articles",
                "Parce qu'une mise à jour garantit la première position",
              ],
              answer: 0,
              explanation:
                "La mise à jour permet de maintenir la pertinence et l'exactitude d'un contenu lorsqu'il évolue.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 8
    // ============================================================
    {
      title: "Module 8 : Maillage interne et architecture",
      lessons: [
        {
          slug: "architecture-site",
          title: "8.1 Construire une bonne architecture de site",
          duration: "30 min",
          description:
            "Apprends à organiser les pages d'un site pour aider les utilisateurs et les moteurs à comprendre sa structure.",
          objectives: [
            "Comprendre l'architecture d'un site",
            "Créer des catégories logiques",
            "Réduire la profondeur inutile",
          ],
          content: [
            "## Exemple Savoir+",
            "Imagine :",
            "Accueil",
            "→ Catégories",
            "→ Cours",
            "→ Modules",
            "→ Leçons.",
            "Cette structure permet de comprendre la relation entre les contenus.",
            "## Mauvaise architecture",
            "Une page importante accessible uniquement après 12 clics depuis l'accueil peut être difficile à découvrir.",
            "## Principe",
            "Les pages importantes doivent être accessibles de manière logique depuis les parties pertinentes du site.",
          ],
          practice: [
            "Dessine l'architecture d'un site contenant 5 catégories et 30 articles.",
            "Indique les pages principales et les relations entre elles.",
          ],
          quiz: [
            {
              question: "Pourquoi une architecture logique est-elle importante ?",
              options: [
                "Elle aide les utilisateurs et les moteurs à comprendre et parcourir le site",
                "Elle garantit automatiquement le trafic",
                "Elle remplace le contenu",
                "Elle supprime les besoins de navigation",
              ],
              answer: 0,
              explanation:
                "Une architecture claire facilite la navigation et aide à comprendre les relations entre les pages.",
            },
          ],
        },

        {
          slug: "liens-internes",
          title: "8.2 Créer des liens internes utiles",
          duration: "30 min",
          description:
            "Apprends à utiliser le maillage interne pour connecter les contenus de manière logique.",
          objectives: [
            "Comprendre les liens internes",
            "Créer des ancres descriptives",
            "Relier les contenus complémentaires",
          ],
          content: [
            "## Exemple",
            "Tu écris un article sur la recherche de mots-clés.",
            "Tu expliques ensuite l'intention de recherche.",
            "Tu peux créer un lien vers ton guide consacré au Search Intent.",
            "## Mauvais exemple",
            "« Cliquez ici ».",
            "Le texte de lien ne donne pas beaucoup de contexte.",
            "## Meilleur exemple",
            "« Découvre comment analyser l'intention de recherche ».",
            "L'ancre explique davantage la destination.",
            "## Le maillage comme parcours",
            "Imagine le site comme une ville.",
            "Les pages sont des bâtiments et les liens sont les routes.",
            "Un bon maillage permet de circuler facilement entre les contenus pertinents.",
          ],
          practice: [
            "Prends 5 articles d'un site.",
            "Ajoute au moins 2 liens internes pertinents dans chaque article.",
            "Vérifie que les liens correspondent réellement au contexte.",
          ],
          quiz: [
            {
              question: "Quel lien interne est le plus descriptif ?",
              options: [
                "Cliquez ici",
                "En savoir plus",
                "Découvrir notre guide sur le Search Intent",
                "Lien",
              ],
              answer: 2,
              explanation:
                "Une ancre descriptive donne davantage de contexte sur la page de destination.",
            },
          ],
        },

        {
          slug: "orphelines",
          title: "8.3 Identifier les pages orphelines",
          duration: "25 min",
          description:
            "Comprends ce qu'est une page orpheline et pourquoi elle peut poser un problème de découverte.",
          objectives: [
            "Identifier une page orpheline",
            "Comprendre le rôle des liens internes",
            "Créer un plan de correction",
          ],
          content: [
            "## Une page orpheline",
            "Une page orpheline est une page qui n'est reliée par aucun lien interne accessible depuis le reste du site, selon la définition utilisée dans l'audit.",
            "Imagine que tu crées un excellent article mais qu'aucune autre page de ton site ne pointe vers lui.",
            "Les utilisateurs auront du mal à le découvrir.",
            "## Solution",
            "Identifie les pages qui devraient naturellement faire référence à cet article.",
            "Ajoute des liens contextuels pertinents.",
          ],
          practice: [
            "Dans un site de démonstration, liste 10 pages.",
            "Pour chacune, indique au moins une autre page depuis laquelle elle pourrait être découverte.",
          ],
          quiz: [
            {
              question: "Pourquoi une page orpheline peut-elle être problématique ?",
              options: [
                "Elle est plus difficile à découvrir via la navigation interne",
                "Elle est automatiquement supprimée",
                "Elle ne peut jamais être indexée",
                "Elle devient automatiquement une page produit",
              ],
              answer: 0,
              explanation:
                "Une page sans liens internes peut être plus difficile à découvrir et à intégrer naturellement dans l'architecture du site.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 9
    // ============================================================
    {
      title: "Module 9 : Backlinks et Off-Page SEO",
      lessons: [
        {
          slug: "comprendre-backlinks",
          title: "9.1 Qu'est-ce qu'un backlink ?",
          duration: "25 min",
          description:
            "Comprends le rôle des liens provenant d'autres sites et pourquoi leur qualité compte davantage qu'une simple quantité.",
          objectives: [
            "Comprendre les backlinks",
            "Distinguer lien pertinent et lien artificiel",
            "Comprendre la notion d'autorité",
          ],
          content: [
            "## Un backlink",
            "Un backlink est un lien provenant d'un autre site vers ton site.",
            "Exemple : un blog spécialisé en développement recommande un article de Savoir+ et crée un lien vers celui-ci.",
            "## Pourquoi cela peut compter",
            "Un lien éditorial pertinent peut être un signal de confiance ou de découverte.",
            "Mais tous les liens ne se valent pas.",
            "## Qualité > quantité",
            "Obtenir 100 liens artificiels provenant de sites sans rapport n'est pas une bonne stratégie.",
            "Un lien provenant d'une ressource réellement pertinente peut être beaucoup plus intéressant.",
            "## Réflexe",
            "Ne demande pas seulement : « Combien de backlinks avons-nous ? »",
            "Demande également :",
            "- d'où viennent-ils ?",
            "- pourquoi nous citent-ils ?",
            "- sont-ils pertinents ?",
            "- apportent-ils une vraie valeur aux utilisateurs ?",
          ],
          practice: [
            "Trouve 5 sites dans ton secteur qui pourraient naturellement citer ton contenu.",
            "Pour chacun, explique pourquoi ton contenu pourrait être pertinent pour leurs lecteurs.",
          ],
          quiz: [
            {
              question: "Quel backlink est généralement le plus intéressant ?",
              options: [
                "Un lien pertinent placé dans un contexte éditorial utile",
                "Un lien acheté au hasard sur des centaines de sites",
                "Un lien provenant d'un site sans rapport",
                "Un lien caché",
              ],
              answer: 0,
              explanation:
                "La pertinence, le contexte et la qualité de la référence sont plus importants qu'une simple accumulation de liens.",
            },
          ],
        },

        {
          slug: "obtenir-backlinks-naturels",
          title: "9.2 Comment obtenir des backlinks naturellement",
          duration: "30 min",
          description:
            "Découvre des méthodes réalistes pour attirer des liens sans dépendre de techniques artificielles.",
          objectives: [
            "Créer du contenu remarquable",
            "Utiliser les relations professionnelles",
            "Faire connaître ses ressources",
          ],
          content: [
            "## Le principe",
            "Au lieu de chercher simplement à obtenir des liens, crée quelque chose que d'autres personnes ont une raison de citer.",
            "## Exemples",
            "- étude originale ;",
            "- statistiques utiles ;",
            "- outil gratuit ;",
            "- guide extrêmement pratique ;",
            "- documentation ;",
            "- ressource pédagogique ;",
            "- recherche originale.",
            "## Exemple",
            "Savoir+ pourrait publier une étude sur les compétences numériques les plus recherchées par les entreprises dans une région donnée.",
            "Des blogs, écoles ou organisations pourraient ensuite citer cette étude.",
            "## Outreach",
            "Tu peux également contacter des personnes qui pourraient trouver une ressource pertinente.",
            "Le message doit être personnalisé et utile, pas une campagne massive de spam.",
          ],
          practice: [
            "Imagine que tu dois obtenir des liens vers un guide « Apprendre JavaScript en 2026 ».",
            "Propose 5 ressources ou personnes susceptibles de trouver ce guide utile.",
          ],
          quiz: [
            {
              question:
                "Quelle stratégie est généralement la plus durable pour obtenir des backlinks ?",
              options: [
                "Créer des ressources utiles que d'autres peuvent naturellement citer",
                "Acheter des milliers de liens",
                "Créer des liens cachés",
                "Utiliser uniquement des commentaires automatisés",
              ],
              answer: 0,
              explanation:
                "Créer des ressources utiles et pertinentes favorise des citations naturelles et durables.",
            },
          ],
        },

        {
          slug: "erreurs-link-building",
          title: "9.3 Les erreurs de link building",
          duration: "20 min",
          description:
            "Identifie les pratiques risquées et apprends à construire une stratégie de liens responsable.",
          objectives: [
            "Identifier les liens artificiels",
            "Comprendre les risques de manipulation",
            "Privilégier une approche qualitative",
          ],
          content: [
            "## À éviter",
            "- acheter massivement des liens de mauvaise qualité ;",
            "- automatiser des commentaires ;",
            "- créer des réseaux artificiels uniquement pour manipuler les classements ;",
            "- publier du contenu sans valeur uniquement pour placer des liens.",
            "## Bonne approche",
            "Travaille sur la qualité du contenu, les relations professionnelles, les partenariats pertinents et les ressources réellement utiles.",
          ],
          practice: [
            "Analyse une campagne de backlinks fictive.",
            "Identifie les éléments qui semblent naturels et ceux qui semblent artificiels.",
          ],
          quiz: [
            {
              question: "Quel est un mauvais objectif de link building ?",
              options: [
                "Accumuler artificiellement des liens sans se soucier de leur pertinence",
                "Faire connaître une étude utile",
                "Créer une ressource de référence",
                "Développer des relations avec des acteurs du secteur",
              ],
              answer: 0,
              explanation:
                "Le link building ne doit pas devenir une simple manipulation quantitative des liens.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 10
    // ============================================================
    {
      title: "Module 10 : SEO Local",
      lessons: [
        {
          slug: "comprendre-seo-local",
          title: "10.1 Comprendre le SEO local",
          duration: "25 min",
          description:
            "Découvre comment une entreprise peut améliorer sa visibilité auprès des utilisateurs d'une zone géographique.",
          objectives: [
            "Comprendre le SEO local",
            "Identifier les recherches locales",
            "Relier présence en ligne et localisation",
          ],
          content: [
            "## Exemple",
            "Imagine un restaurant à Nairobi.",
            "Une recherche comme « restaurant italien Nairobi » a une dimension locale évidente.",
            "L'utilisateur ne cherche pas simplement une information générale. Il cherche une entreprise qu'il peut potentiellement visiter ou contacter.",
            "## Signaux locaux",
            "Une stratégie locale peut inclure :",
            "- informations commerciales cohérentes ;",
            "- présence sur les plateformes pertinentes ;",
            "- page locale utile ;",
            "- avis clients authentiques ;",
            "- contenu adapté à la zone.",
            "## Attention",
            "Créer des dizaines de pages locales presque identiques uniquement en changeant le nom de la ville est une mauvaise approche.",
          ],
          practice: [
            "Choisis une entreprise locale.",
            "Liste 10 recherches locales potentielles.",
            "Indique quelles informations un client voudrait trouver.",
          ],
          quiz: [
            {
              question: "Quelle recherche possède une intention locale claire ?",
              options: [
                "restaurant italien Nairobi",
                "histoire de la Rome antique",
                "qu'est-ce que le marketing",
                "définition de SEO",
              ],
              answer: 0,
              explanation:
                "La recherche mentionne directement une activité et une localisation.",
            },
          ],
        },

        {
          slug: "fiche-etablissement",
          title: "10.2 Optimiser la présence locale",
          duration: "30 min",
          description:
            "Apprends les fondamentaux pour présenter correctement une entreprise locale en ligne.",
          objectives: [
            "Maintenir des informations cohérentes",
            "Encourager des avis authentiques",
            "Présenter clairement les services",
          ],
          content: [
            "## Informations essentielles",
            "Une entreprise locale doit communiquer clairement :",
            "- son nom ;",
            "- son adresse lorsque pertinente ;",
            "- ses horaires ;",
            "- ses services ;",
            "- ses moyens de contact.",
            "## Les avis",
            "Les avis peuvent aider les utilisateurs à prendre une décision.",
            "Il est préférable de développer un processus permettant aux vrais clients de laisser leur avis plutôt que de fabriquer de faux avis.",
            "## Exemple",
            "Un restaurant peut demander à ses clients satisfaits de partager honnêtement leur expérience.",
          ],
          practice: [
            "Crée une checklist de 15 éléments pour auditer la présence locale d'une entreprise.",
          ],
          quiz: [
            {
              question: "Quelle pratique est la plus saine pour les avis ?",
              options: [
                "Encourager de vrais clients à partager honnêtement leur expérience",
                "Créer de faux avis",
                "Acheter des avis",
                "Copier les avis d'un concurrent",
              ],
              answer: 0,
              explanation:
                "Les avis doivent refléter des expériences réelles et authentiques.",
            },
          ],
        },

        {
          slug: "pages-locales",
          title: "10.3 Créer des pages locales utiles",
          duration: "25 min",
          description:
            "Apprends à créer des pages locales qui apportent une véritable valeur plutôt que des pages générées automatiquement.",
          objectives: [
            "Créer une page locale pertinente",
            "Ajouter des informations uniques",
            "Éviter les pages quasi identiques",
          ],
          content: [
            "## Exemple",
            "Une agence web travaille à Nairobi, Mombasa et Kisumu.",
            "Elle pourrait créer des pages locales si elle propose réellement ses services dans ces villes.",
            "Mais chaque page doit apporter une information pertinente : services, projets, zone desservie, particularités locales, contact ou exemples.",
            "## Mauvaise approche",
            "Copier exactement la même page et remplacer uniquement « Nairobi » par « Mombasa ».",
            "## Bonne approche",
            "Construire des pages qui correspondent à de véritables marchés et besoins.",
          ],
          practice: [
            "Crée le plan d'une page locale pour une agence web à Nairobi.",
          ],
          quiz: [
            {
              question:
                "Qu'est-ce qui différencie une bonne page locale d'une page générée artificiellement ?",
              options: [
                "Elle apporte des informations réellement utiles et spécifiques à la zone",
                "Elle répète uniquement le nom de la ville",
                "Elle contient 100 fois le même mot-clé",
                "Elle ne contient aucune information locale",
              ],
              answer: 0,
              explanation:
                "Une page locale doit avoir une véritable utilité pour les utilisateurs de la zone concernée.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 11
    // ============================================================
    {
      title: "Module 11 : SEO E-commerce",
      lessons: [
        {
          slug: "architecture-ecommerce",
          title: "11.1 Architecture SEO d'un site e-commerce",
          duration: "30 min",
          description:
            "Apprends à organiser catégories, sous-catégories et produits pour un e-commerce.",
          objectives: [
            "Structurer un catalogue",
            "Créer des catégories utiles",
            "Éviter une architecture trop profonde",
          ],
          content: [
            "## Exemple",
            "Une boutique de vêtements peut avoir :",
            "Vêtements → Hommes → Chaussures → Running.",
            "Cette structure permet à l'utilisateur de comprendre immédiatement où il se trouve.",
            "## Les catégories",
            "Une catégorie doit correspondre à un besoin réel.",
            "Évite de créer des dizaines de catégories presque identiques uniquement pour cibler des variantes de mots-clés.",
            "## Produits",
            "Les pages produits doivent contenir des informations suffisamment précises pour aider l'utilisateur à prendre une décision.",
          ],
          practice: [
            "Construis l'arborescence SEO d'un e-commerce de chaussures.",
          ],
          quiz: [
            {
              question: "Quel est l'objectif d'une bonne architecture e-commerce ?",
              options: [
                "Permettre de trouver et comprendre facilement les produits",
                "Créer le plus de pages possible",
                "Répéter les mots-clés",
                "Cacher les catégories",
              ],
              answer: 0,
              explanation:
                "Une architecture efficace aide les utilisateurs à naviguer et permet de mieux organiser les contenus.",
            },
          ],
        },

        {
          slug: "fiches-produits-seo",
          title: "11.2 Optimiser les fiches produits",
          duration: "30 min",
          description:
            "Apprends à créer des fiches produits utiles, descriptives et adaptées à la recherche.",
          objectives: [
            "Rédiger une fiche produit complète",
            "Optimiser les informations importantes",
            "Éviter les descriptions copiées",
          ],
          content: [
            "## Une bonne fiche produit",
            "Elle doit répondre aux questions du client.",
            "Par exemple :",
            "- Qu'est-ce que le produit ?",
            "- Pour qui est-il adapté ?",
            "- Quelles sont ses caractéristiques ?",
            "- Comment l'utiliser ?",
            "- Quelle taille choisir ?",
            "- Comment est-il livré ?",
            "## Copier le fabricant",
            "Si 500 boutiques utilisent exactement la même description fournie par le fabricant, ton contenu apporte peu de valeur supplémentaire.",
            "Ajoute des informations utiles pour ton audience.",
          ],
          practice: [
            "Choisis un produit.",
            "Réécris sa description pour qu'elle réponde aux questions d'un véritable acheteur.",
          ],
          quiz: [
            {
              question: "Pourquoi enrichir une description fabricant peut-il être utile ?",
              options: [
                "Pour apporter des informations supplémentaires adaptées à tes clients",
                "Pour augmenter artificiellement la longueur",
                "Pour supprimer toutes les images",
                "Pour cacher le prix",
              ],
              answer: 0,
              explanation:
                "Une description enrichie peut mieux répondre aux besoins spécifiques de l'audience.",
            },
          ],
        },

        {
          slug: "filtres-parametres-ecommerce",
          title: "11.3 Filtres, paramètres et URL e-commerce",
          duration: "35 min",
          description:
            "Comprends les problèmes SEO liés aux filtres, paramètres d'URL et combinaisons de pages.",
          objectives: [
            "Identifier les URL générées par les filtres",
            "Comprendre les problèmes de duplication",
            "Choisir une stratégie adaptée",
          ],
          content: [
            "## Exemple",
            "Une boutique permet de filtrer par :",
            "- couleur ;",
            "- taille ;",
            "- marque ;",
            "- prix.",
            "Une seule catégorie peut alors produire des centaines de combinaisons d'URL.",
            "## Le problème",
            "Toutes ces combinaisons ne méritent pas forcément d'être indexées.",
            "## Approche",
            "Décide quelles pages ont une vraie valeur de recherche.",
            "Certaines catégories filtrées peuvent devenir des landing pages utiles si elles correspondent à une demande réelle.",
            "D'autres peuvent simplement servir à la navigation sans être destinées à l'indexation.",
          ],
          practice: [
            "Pour une boutique contenant 10 catégories et 5 filtres, estime combien de combinaisons peuvent être générées.",
            "Identifie lesquelles pourraient mériter une page SEO dédiée.",
          ],
          quiz: [
            {
              question:
                "Faut-il rendre indexables toutes les combinaisons de filtres d'un e-commerce ?",
              options: [
                "Non, seulement celles qui apportent une réelle valeur et correspondent à une demande pertinente",
                "Oui, toujours",
                "Oui, si elles contiennent un mot-clé",
                "Non, aucune page e-commerce ne doit être indexée",
              ],
              answer: 0,
              explanation:
                "L'indexation doit être réfléchie selon la valeur réelle des pages et les besoins des utilisateurs.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 12
    // ============================================================
    {
      title: "Module 12 : Performance et Core Web Vitals",
      lessons: [
        {
          slug: "pourquoi-performance-seo",
          title: "12.1 Performance web et SEO",
          duration: "25 min",
          description:
            "Comprends pourquoi les performances web sont importantes pour l'expérience utilisateur et comment elles s'intègrent dans une stratégie SEO.",
          objectives: [
            "Comprendre la performance web",
            "Identifier les problèmes de chargement",
            "Comprendre le lien entre expérience et SEO",
          ],
          content: [
            "## Exemple",
            "Imagine que tu cliques sur une boutique en ligne et que la page prend plusieurs secondes avant de devenir utilisable.",
            "Tu risques d'abandonner avant même de voir le produit.",
            "La performance est donc avant tout un problème d'expérience utilisateur.",
            "## Causes fréquentes",
            "- images trop lourdes ;",
            "- JavaScript excessif ;",
            "- mauvaise stratégie de cache ;",
            "- ressources bloquantes ;",
            "- serveur lent ;",
            "- composants inutiles.",
            "## Le rôle du SEO",
            "Un SEO technique doit être capable d'identifier ces problèmes et de travailler avec les développeurs pour les résoudre.",
          ],
          practice: [
            "Prends une page web.",
            "Liste les éléments susceptibles de ralentir son chargement.",
          ],
          quiz: [
            {
              question: "Pourquoi la performance web est-elle importante ?",
              options: [
                "Elle influence l'expérience utilisateur et peut participer à la qualité globale d'un site",
                "Elle garantit la première position",
                "Elle remplace le contenu",
                "Elle rend les backlinks inutiles",
              ],
              answer: 0,
              explanation:
                "Une bonne performance contribue à une meilleure expérience. Elle s'intègre dans une stratégie SEO plus large.",
            },
          ],
        },

        {
          slug: "core-web-vitals",
          title: "12.2 Comprendre les Core Web Vitals",
          duration: "30 min",
          description:
            "Découvre LCP, INP et CLS et apprends à comprendre ce qu'ils mesurent.",
          objectives: [
            "Comprendre LCP",
            "Comprendre INP",
            "Comprendre CLS",
            "Relier les métriques à des problèmes réels",
          ],
          content: [
            "## Les trois métriques",
            "Les Core Web Vitals actuels incluent notamment :",
            "- **LCP** : mesure liée au chargement de l'élément principal visible.",
            "- **INP** : mesure liée à la réactivité aux interactions.",
            "- **CLS** : mesure liée à la stabilité visuelle.",
            "## Exemple LCP",
            "Une grande image héro ou un bloc principal met longtemps à apparaître.",
            "Le problème peut venir de l'image, du serveur, du rendu ou d'autres ressources.",
            "## Exemple INP",
            "L'utilisateur clique sur un bouton mais l'interface met longtemps à réagir.",
            "Un JavaScript lourd peut être en cause.",
            "## Exemple CLS",
            "Une publicité ou une image sans dimensions réservées apparaît après le chargement et pousse le contenu vers le bas.",
            "Le contenu « saute ».",
          ],
          practice: [
            "Identifie un exemple réel de problème LCP, INP et CLS sur un site ou une application.",
            "Pour chacun, propose une cause potentielle et une solution.",
          ],
          quiz: [
            {
              question: "Quelle métrique concerne principalement la stabilité visuelle ?",
              options: ["CLS", "LCP", "INP", "HTTP"],
              answer: 0,
              explanation:
                "CLS mesure la stabilité visuelle et les changements inattendus de mise en page.",
            },
            {
              question: "Quelle métrique concerne la réactivité aux interactions ?",
              options: ["INP", "CLS", "LCP", "DNS"],
              answer: 0,
              explanation:
                "INP mesure la réactivité d'une page aux interactions de l'utilisateur.",
            },
          ],
        },

        {
          slug: "optimiser-performance-nextjs",
          title: "12.3 Optimiser les performances avec Next.js",
          duration: "35 min",
          description:
            "Apprends des techniques pratiques pour améliorer les performances d'une application Next.js.",
          objectives: [
            "Optimiser les images",
            "Réduire le JavaScript inutile",
            "Comprendre le rendu serveur",
            "Identifier les composants coûteux",
          ],
          content: [
            "## Les images",
            "Utilise les outils adaptés à l'optimisation des images et évite d'envoyer des fichiers beaucoup plus lourds que nécessaire.",
            "## JavaScript",
            "Chaque script supplémentaire peut avoir un coût.",
            "Évite de transformer inutilement chaque composant en composant client lorsque ce n'est pas nécessaire.",
            "## Exemple",
            "Une page de cours Savoir+ peut être majoritairement rendue côté serveur et réserver l'interactivité aux éléments qui en ont réellement besoin.",
            "## Méthode",
            "1. Mesurer.",
            "2. Identifier le problème.",
            "3. Corriger.",
            "4. Mesurer à nouveau.",
            "Ne fais pas d'optimisation basée uniquement sur une impression visuelle.",
          ],
          practice: [
            "Choisis une page Next.js.",
            "Liste 5 optimisations possibles.",
            "Pour chacune, explique comment tu pourrais mesurer son impact.",
          ],
          quiz: [
            {
              question: "Quelle est la meilleure méthode d'optimisation ?",
              options: [
                "Mesurer, identifier, corriger puis mesurer à nouveau",
                "Modifier tout le code au hasard",
                "Supprimer tout JavaScript",
                "Ajouter plus de bibliothèques",
              ],
              answer: 0,
              explanation:
                "L'optimisation professionnelle doit être guidée par des mesures et une vérification après correction.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 13
    // ============================================================
    {
      title: "Module 13 : Analytics et Search Console",
      lessons: [
        {
          slug: "google-search-console",
          title: "13.1 Comprendre Google Search Console",
          duration: "30 min",
          description:
            "Apprends à utiliser Search Console pour comprendre comment Google découvre et présente ton site.",
          objectives: [
            "Comprendre les rapports Search Console",
            "Analyser les performances",
            "Identifier des problèmes d'indexation",
          ],
          content: [
            "## Pourquoi Search Console ?",
            "Un propriétaire de site a besoin de savoir ce qui se passe réellement dans les résultats Google.",
            "Search Console fournit notamment des informations sur les performances de recherche et l'état d'indexation.",
            "## Exemple",
            "Tu observes qu'une page reçoit beaucoup d'impressions mais très peu de clics.",
            "Cela peut devenir une piste d'analyse.",
            "Peut-être que le titre et l'extrait ne correspondent pas suffisamment à l'intention ou que la page apparaît pour des requêtes peu pertinentes.",
            "## Autre exemple",
            "Une page importante n'est pas indexée.",
            "Search Console peut aider à diagnostiquer le problème.",
          ],
          practice: [
            "Si tu as accès à un site, ouvre Search Console.",
            "Identifie :",
            "- les principales requêtes ;",
            "- les principales pages ;",
            "- les impressions ;",
            "- les clics ;",
            "- le CTR.",
          ],
          quiz: [
            {
              question: "À quoi sert principalement Search Console ?",
              options: [
                "Analyser la présence d'un site dans Google et certains problèmes liés à son exploration/indexation",
                "Créer des publicités sociales",
                "Écrire automatiquement les articles",
                "Héberger un site",
              ],
              answer: 0,
              explanation:
                "Search Console fournit des données et outils liés à la présence du site dans les résultats Google.",
            },
          ],
        },

        {
          slug: "impressions-clics-ctr",
          title: "13.2 Impressions, clics et CTR",
          duration: "25 min",
          description:
            "Apprends à interpréter les principales métriques de visibilité dans les résultats de recherche.",
          objectives: [
            "Comprendre les impressions",
            "Comprendre les clics",
            "Comprendre le CTR",
            "Éviter les mauvaises interprétations",
          ],
          content: [
            "## Impression",
            "Une impression indique qu'une page a été présentée dans les résultats selon les données du rapport concerné.",
            "## Clic",
            "Un clic correspond à une interaction de l'utilisateur avec le résultat vers ton site.",
            "## CTR",
            "Le CTR représente le rapport entre clics et impressions dans le contexte de la métrique utilisée.",
            "## Exemple",
            "Une page obtient :",
            "10 000 impressions.",
            "300 clics.",
            "Le CTR correspondant est de 3 %.",
            "## Attention",
            "Un CTR faible n'est pas toujours un problème.",
            "La position, la nature de la requête, le type de résultat et l'intention influencent fortement le comportement.",
          ],
          practice: [
            "Analyse trois pages.",
            "Compare leurs impressions, clics et CTR.",
            "Explique pourquoi leurs performances peuvent être différentes.",
          ],
          quiz: [
            {
              question:
                "Une page obtient 10 000 impressions et 500 clics. Quel est son CTR ?",
              options: ["5 %", "10 %", "50 %", "0,5 %"],
              answer: 0,
              explanation:
                "500 ÷ 10 000 = 0,05, soit 5 %.",
            },
          ],
        },

        {
          slug: "analytics-conversions",
          title: "13.3 Relier SEO et conversions",
          duration: "30 min",
          description:
            "Apprends pourquoi les visites seules ne suffisent pas pour mesurer la réussite d'une stratégie SEO.",
          objectives: [
            "Comprendre les conversions",
            "Relier SEO et objectifs business",
            "Construire des indicateurs utiles",
          ],
          content: [
            "## Le piège du trafic",
            "Imagine que ton trafic passe de 10 000 à 50 000 visites.",
            "Mais les ventes restent identiques.",
            "Le SEO a-t-il réellement progressé ?",
            "Pas nécessairement.",
            "## Mesurer les actions importantes",
            "Selon le site, une conversion peut être :",
            "- achat ;",
            "- inscription ;",
            "- demande de devis ;",
            "- réservation ;",
            "- téléchargement ;",
            "- création de compte.",
            "## Exemple Savoir+",
            "Le trafic SEO peut être mesuré avec :",
            "- inscriptions ;",
            "- cours commencés ;",
            "- cours terminés ;",
            "- abonnements ;",
            "- demandes de démonstration.",
            "## Conclusion",
            "Une stratégie SEO doit être reliée à un objectif business ou produit.",
          ],
          practice: [
            "Définis 5 conversions importantes pour une plateforme d'apprentissage en ligne.",
            "Puis identifie les pages SEO qui pourraient contribuer à chacune.",
          ],
          quiz: [
            {
              question: "Pourquoi mesurer uniquement les visites peut être insuffisant ?",
              options: [
                "Parce que le trafic ne représente pas nécessairement une valeur business",
                "Parce que les visites sont toujours inutiles",
                "Parce que Google interdit le trafic",
                "Parce qu'il faut uniquement mesurer les backlinks",
              ],
              answer: 0,
              explanation:
                "Une hausse du trafic n'est pas forcément positive si ce trafic n'est pas pertinent ou ne produit aucune action utile.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 14
    // ============================================================
    {
      title: "Module 14 : Réaliser un audit SEO complet",
      lessons: [
        {
          slug: "audit-seo-methodologie",
          title: "14.1 Méthodologie d'un audit SEO",
          duration: "30 min",
          description:
            "Découvre une méthode professionnelle pour analyser un site de manière structurée.",
          objectives: [
            "Structurer un audit",
            "Identifier les priorités",
            "Séparer problèmes critiques et améliorations secondaires",
          ],
          content: [
            "## Un audit n'est pas une liste de problèmes",
            "Un bon audit doit permettre de décider quoi corriger en premier.",
            "## Les grandes catégories",
            "1. Indexation et exploration.",
            "2. Architecture.",
            "3. SEO On-Page.",
            "4. Contenu.",
            "5. Performance.",
            "6. Liens internes.",
            "7. Autorité et backlinks.",
            "8. Analytics.",
            "## Priorisation",
            "Tous les problèmes n'ont pas la même importance.",
            "Exemple :",
            "Une erreur empêchant Google d'accéder à toutes les pages importantes est généralement plus urgente qu'un titre légèrement trop long.",
            "## Méthode",
            "Pour chaque problème :",
            "- problème ;",
            "- impact ;",
            "- cause probable ;",
            "- recommandation ;",
            "- priorité ;",
            "- responsable ;",
            "- méthode de validation.",
          ],
          practice: [
            "Crée un modèle d'audit SEO avec au moins 20 contrôles.",
          ],
          quiz: [
            {
              question: "Pourquoi prioriser les problèmes SEO ?",
              options: [
                "Parce que les ressources sont limitées et que certains problèmes ont beaucoup plus d'impact",
                "Parce que tous les problèmes ont exactement le même impact",
                "Parce qu'un audit doit contenir seulement 3 problèmes",
                "Parce que les problèmes secondaires sont toujours les plus importants",
              ],
              answer: 0,
              explanation:
                "La priorisation permet de concentrer les efforts sur les problèmes ayant le plus d'impact.",
            },
          ],
        },

        {
          slug: "audit-technique-pratique",
          title: "14.2 Audit technique pratique",
          duration: "35 min",
          description:
            "Apprends à vérifier les éléments techniques essentiels d'un site.",
          objectives: [
            "Vérifier robots.txt",
            "Vérifier sitemap",
            "Analyser les statuts HTTP",
            "Identifier les problèmes de canonical",
            "Vérifier les redirections",
          ],
          content: [
            "## Checklist technique",
            "Vérifie :",
            "- robots.txt ;",
            "- sitemap.xml ;",
            "- HTTPS ;",
            "- codes HTTP ;",
            "- redirections ;",
            "- canonical ;",
            "- pages indexables ;",
            "- liens cassés ;",
            "- pages orphelines ;",
            "- performance.",
            "## Exemple",
            "Tu découvres que `/cours/seo` retourne une erreur 500.",
            "Avant de modifier le contenu, tu dois résoudre ce problème technique.",
            "Une excellente page ne peut pas remplir correctement son rôle si elle ne fonctionne pas.",
          ],
          practice: [
            "Réalise un audit technique d'un site de démonstration.",
            "Classe chaque problème en critique, important ou secondaire.",
          ],
          quiz: [
            {
              question:
                "Que faut-il généralement vérifier avant d'investir beaucoup dans l'optimisation éditoriale d'une page inaccessible ?",
              options: [
                "Que la page fonctionne et soit techniquement accessible",
                "Le nombre de mots-clés",
                "Le nombre de backlinks uniquement",
                "La couleur du bouton",
              ],
              answer: 0,
              explanation:
                "Une page doit être accessible et fonctionnelle avant de pouvoir pleinement bénéficier des optimisations éditoriales.",
            },
          ],
        },

        {
          slug: "audit-on-page",
          title: "14.3 Audit On-Page",
          duration: "30 min",
          description:
            "Apprends à analyser le contenu et les éléments SEO visibles d'une page.",
          objectives: [
            "Analyser title et description",
            "Vérifier les titres",
            "Évaluer le contenu",
            "Analyser les liens internes",
          ],
          content: [
            "## Checklist",
            "Pour chaque page importante :",
            "1. Le sujet est-il clair ?",
            "2. Le title est-il descriptif ?",
            "3. La description correspond-elle au contenu ?",
            "4. Le H1 est-il pertinent ?",
            "5. Les sections sont-elles bien organisées ?",
            "6. Le contenu répond-il à l'intention ?",
            "7. Les images sont-elles pertinentes ?",
            "8. Existe-t-il des liens internes utiles ?",
            "9. La page possède-t-elle une réelle valeur ?",
          ],
          practice: [
            "Audit une page réelle et écris 10 recommandations précises.",
          ],
          quiz: [
            {
              question:
                "Quelle question est la plus importante lors d'un audit de contenu ?",
              options: [
                "La page répond-elle réellement au besoin de l'utilisateur ?",
                "Combien de fois le mot-clé est-il répété ?",
                "Le texte fait-il exactement 2 000 mots ?",
                "Le footer contient-il 50 liens ?",
              ],
              answer: 0,
              explanation:
                "La pertinence et l'utilité du contenu sont fondamentales.",
            },
          ],
        },

        {
          slug: "rapport-audit-seo",
          title: "14.4 Présenter un rapport SEO professionnel",
          duration: "30 min",
          description:
            "Apprends à transformer un audit technique en rapport compréhensible par un client ou une équipe.",
          objectives: [
            "Présenter des problèmes clairement",
            "Prioriser les recommandations",
            "Communiquer avec des profils non techniques",
          ],
          content: [
            "## Un bon rapport doit répondre à trois questions",
            "1. Quel est le problème ?",
            "2. Pourquoi est-il important ?",
            "3. Que devons-nous faire ?",
            "## Exemple",
            "**Problème :** plusieurs pages importantes retournent une erreur 404.",
            "**Impact :** les utilisateurs et moteurs ne peuvent pas accéder correctement aux ressources.",
            "**Action :** corriger les liens ou mettre en place des redirections lorsque la destination est pertinente.",
            "**Priorité :** élevée.",
            "## Pour un client",
            "Évite le jargon inutile.",
            "Ne dis pas uniquement « problème de canonicalisation ».",
            "Explique ce que cela signifie concrètement et pourquoi le client devrait s'en préoccuper.",
          ],
          practice: [
            "Rédige un rapport de 5 problèmes SEO avec : problème, impact, recommandation, priorité et responsable.",
          ],
          quiz: [
            {
              question: "Quel est l'intérêt d'expliquer l'impact d'un problème SEO ?",
              options: [
                "Permettre à l'équipe de comprendre pourquoi la correction est importante",
                "Ajouter du jargon",
                "Rendre le rapport plus long uniquement",
                "Éviter les recommandations",
              ],
              answer: 0,
              explanation:
                "L'impact permet de relier le problème technique à un objectif concret.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 15
    // ============================================================
    {
      title: "Module 15 : Construire une stratégie SEO",
      lessons: [
        {
          slug: "strategie-seo",
          title: "15.1 Construire une stratégie SEO de zéro",
          duration: "35 min",
          description:
            "Apprends à construire une stratégie SEO complète à partir des objectifs d'une entreprise.",
          objectives: [
            "Définir les objectifs",
            "Identifier les audiences",
            "Choisir les sujets",
            "Planifier les actions",
          ],
          content: [
            "## Une stratégie commence par le business",
            "Ne commence pas par « quels mots-clés pouvons-nous positionner ? ».",
            "Commence par :",
            "« Qu'est-ce que l'entreprise veut obtenir ? »",
            "## Exemple",
            "Une plateforme de formation veut augmenter les inscriptions.",
            "La stratégie peut viser :",
            "- attirer des personnes recherchant des formations ;",
            "- créer des guides éducatifs ;",
            "- améliorer les pages de cours ;",
            "- construire une architecture claire ;",
            "- mesurer les inscriptions provenant du SEO.",
            "## Étapes",
            "1. Définir les objectifs.",
            "2. Identifier l'audience.",
            "3. Étudier les recherches.",
            "4. Analyser les concurrents.",
            "5. Construire l'architecture.",
            "6. Créer ou améliorer les contenus.",
            "7. Corriger les problèmes techniques.",
            "8. Développer l'autorité.",
            "9. Mesurer.",
            "10. Améliorer.",
          ],
          practice: [
            "Construis une stratégie SEO pour une plateforme d'apprentissage en ligne.",
            "Définis :",
            "- objectif ;",
            "- audience ;",
            "- 20 sujets ;",
            "- architecture ;",
            "- indicateurs ;",
            "- plan d'action sur 3 mois.",
          ],
          quiz: [
            {
              question: "Par quoi devrait commencer une stratégie SEO ?",
              options: [
                "Par les objectifs de l'entreprise et les besoins de l'audience",
                "Par l'achat de backlinks",
                "Par la création de 1 000 pages",
                "Par la répétition de mots-clés",
              ],
              answer: 0,
              explanation:
                "Une stratégie SEO doit être reliée aux objectifs réels de l'entreprise et aux besoins des utilisateurs.",
            },
          ],
        },

        {
          slug: "analyse-concurrence-seo",
          title: "15.2 Analyser les concurrents",
          duration: "30 min",
          description:
            "Apprends à étudier les concurrents pour comprendre les opportunités et les lacunes du marché.",
          objectives: [
            "Identifier les concurrents SEO",
            "Analyser leurs contenus",
            "Trouver des opportunités",
          ],
          content: [
            "## Concurrent SEO",
            "Un concurrent SEO n'est pas forcément un concurrent commercial direct.",
            "Un blog ou une plateforme éducative peut occuper les résultats que tu souhaites cibler.",
            "## Que regarder ?",
            "- sujets couverts ;",
            "- type de pages ;",
            "- profondeur des contenus ;",
            "- architecture ;",
            "- liens internes ;",
            "- expérience utilisateur ;",
            "- opportunités manquantes.",
            "## Ne copie pas",
            "L'objectif n'est pas de copier les concurrents.",
            "L'objectif est de comprendre ce qui existe et de trouver comment proposer une meilleure réponse.",
          ],
          practice: [
            "Choisis trois concurrents SEO.",
            "Analyse cinq pages de chacun.",
            "Liste 10 opportunités que ton site pourrait exploiter.",
          ],
          quiz: [
            {
              question: "Pourquoi analyser les concurrents ?",
              options: [
                "Pour comprendre le marché et identifier des opportunités d'amélioration",
                "Pour copier leurs textes",
                "Pour supprimer leurs backlinks",
                "Pour garantir leur déclassement",
              ],
              answer: 0,
              explanation:
                "L'analyse concurrentielle sert à comprendre les attentes du marché et à identifier des opportunités.",
            },
          ],
        },

        {
          slug: "roadmap-seo",
          title: "15.3 Construire une roadmap SEO",
          duration: "30 min",
          description:
            "Apprends à transformer une stratégie en plan d'action réaliste.",
          objectives: [
            "Prioriser les actions",
            "Estimer les efforts",
            "Créer une roadmap",
          ],
          content: [
            "## Pourquoi une roadmap ?",
            "Un site peut avoir 100 problèmes SEO.",
            "L'équipe ne peut pas tout corriger en une journée.",
            "## Exemple",
            "Mois 1 :",
            "- corriger les problèmes critiques ;",
            "- améliorer les pages principales ;",
            "- configurer le suivi.",
            "Mois 2 :",
            "- créer les contenus prioritaires ;",
            "- améliorer le maillage interne ;",
            "- optimiser les performances.",
            "Mois 3 :",
            "- développer des ressources avancées ;",
            "- travailler l'autorité ;",
            "- analyser les résultats.",
            "## Priorisation",
            "Une bonne roadmap considère :",
            "- impact ;",
            "- effort ;",
            "- urgence ;",
            "- dépendances.",
          ],
          practice: [
            "Crée une roadmap SEO sur 90 jours pour un site de ton choix.",
          ],
          quiz: [
            {
              question:
                "Pourquoi une roadmap SEO doit-elle tenir compte de l'effort ?",
              options: [
                "Parce que les ressources disponibles sont limitées",
                "Parce que toutes les tâches prennent le même temps",
                "Parce que Google impose une durée",
                "Parce que l'effort n'a aucun lien avec le projet",
              ],
              answer: 0,
              explanation:
                "Une roadmap réaliste doit tenir compte du temps, des personnes disponibles et des dépendances techniques.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 16
    // ============================================================
    {
      title: "Module 16 : Projet final - Audit et optimisation SEO",
      lessons: [
        {
          slug: "projet-final-seo",
          title: "16.1 Projet final : auditer et optimiser un site réel",
          duration: "2 h",
          description:
            "Mets en pratique tout ce que tu as appris en réalisant un audit SEO complet et en proposant des corrections concrètes.",
          objectives: [
            "Réaliser un audit SEO complet",
            "Identifier les problèmes prioritaires",
            "Proposer des solutions techniques et éditoriales",
            "Construire une stratégie SEO",
            "Présenter un rapport professionnel",
          ],
          content: [
            "## Mission finale",
            "Tu viens d'être recruté comme consultant SEO pour une petite entreprise.",
            "Ton client possède un site web mais reçoit peu de trafic organique.",
            "Ton rôle est de comprendre pourquoi et de proposer un plan d'amélioration.",
            "## Étape 1 : Comprendre l'entreprise",
            "Identifie :",
            "- les produits ou services ;",
            "- l'audience ;",
            "- les zones géographiques ;",
            "- les objectifs business.",
            "## Étape 2 : Recherche de mots-clés",
            "Trouve au moins 30 recherches pertinentes.",
            "Classe-les selon l'intention.",
            "Regroupe les recherches similaires.",
            "## Étape 3 : Architecture",
            "Analyse les catégories et les pages importantes.",
            "Identifie les pages qui devraient exister mais qui manquent.",
            "## Étape 4 : Audit technique",
            "Vérifie :",
            "- robots.txt ;",
            "- sitemap ;",
            "- HTTPS ;",
            "- codes HTTP ;",
            "- redirections ;",
            "- canonical ;",
            "- liens cassés ;",
            "- pages orphelines ;",
            "- performance.",
            "## Étape 5 : Audit On-Page",
            "Analyse au moins 10 pages.",
            "Pour chacune, vérifie :",
            "- title ;",
            "- meta description ;",
            "- H1 ;",
            "- structure ;",
            "- contenu ;",
            "- images ;",
            "- liens internes ;",
            "- intention.",
            "## Étape 6 : Contenu",
            "Identifie au moins 10 opportunités de contenu.",
            "Pour chaque sujet, indique :",
            "- recherche principale ;",
            "- intention ;",
            "- type de page ;",
            "- audience ;",
            "- objectif.",
            "## Étape 7 : Backlinks",
            "Identifie 10 sites ou organisations pertinents qui pourraient naturellement citer ou partager certaines ressources.",
            "## Étape 8 : Roadmap",
            "Construis une roadmap sur 90 jours.",
            "Classe chaque action selon :",
            "- priorité ;",
            "- impact ;",
            "- effort ;",
            "- responsable.",
            "## Étape 9 : Mesure",
            "Définis les indicateurs à suivre.",
            "Exemples :",
            "- clics organiques ;",
            "- impressions ;",
            "- CTR ;",
            "- positions ;",
            "- pages indexées ;",
            "- trafic organique ;",
            "- conversions.",
            "## Livrable final",
            "Présente un rapport comprenant :",
            "1. Résumé exécutif.",
            "2. Situation actuelle.",
            "3. Problèmes techniques.",
            "4. Problèmes On-Page.",
            "5. Opportunités de contenu.",
            "6. Analyse de l'architecture.",
            "7. Opportunités de backlinks.",
            "8. Roadmap 90 jours.",
            "9. KPIs.",
            "10. Conclusion.",
            "## Critère de réussite",
            "À la fin du projet, tu dois pouvoir dire :",
            "« Si on me donne un site web demain, je sais comment analyser sa visibilité, comprendre ses utilisateurs, trouver ses problèmes SEO, identifier les opportunités, proposer des corrections et mesurer les résultats. »",
          ],
          practice: [
            "Réalise le projet sur un site réel ou un site de démonstration.",
            "Prépare un rapport de 10 à 20 pages.",
            "Présente tes recommandations comme si tu étais face à un véritable client.",
          ],
          quiz: [
            {
              question:
                "Quel doit être l'objectif principal d'un audit SEO professionnel ?",
              options: [
                "Identifier les problèmes et opportunités puis proposer des actions prioritaires",
                "Produire le plus grand nombre possible de problèmes",
                "Garantir la première position",
                "Ajouter des mots-clés partout",
              ],
              answer: 0,
              explanation:
                "Un audit doit permettre de prendre des décisions concrètes et de prioriser les améliorations.",
            },
          ],
        },
      ],
    },
  ],
};

// ============================================================
// EXAMEN FINAL
// ============================================================

export const seoExamQuestions: ExamQuestion[] = [
  {
    question: "Que signifie SEO ?",
    options: [
      "Search Engine Optimization",
      "Search Email Organization",
      "Site Engine Operation",
      "Search Experience Output",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel est l'objectif principal d'une stratégie SEO professionnelle ?",
    options: [
      "Obtenir du trafic pertinent et atteindre des objectifs utilisateurs ou business",
      "Obtenir absolument la première position pour chaque recherche",
      "Répéter un mot-clé autant que possible",
      "Créer le plus de pages possible",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quelle est la différence entre crawling et indexation ?",
    options: [
      "Le crawling concerne l'exploration, l'indexation concerne l'ajout et le traitement des contenus dans l'index",
      "Les deux termes désignent exactement la même chose",
      "L'indexation consiste uniquement à créer des backlinks",
      "Le crawling consiste à rédiger des articles",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Un utilisateur recherche « comment choisir un ordinateur portable ». Quel type de contenu est généralement le plus adapté ?",
    options: [
      "Un guide expliquant comment choisir",
      "Une page de connexion",
      "Une page vide",
      "Une page de contact uniquement",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel est le meilleur principe pour choisir des mots-clés ?",
    options: [
      "Privilégier la pertinence par rapport à l'utilisateur et aux objectifs du site",
      "Choisir uniquement les mots-clés avec le plus gros volume",
      "Choisir uniquement les mots-clés les plus courts",
      "Choisir les mots-clés les plus difficiles",
    ],
    correctAnswer: 0,
  },

  {
    question: "À quoi sert principalement une balise title ?",
    options: [
      "Décrire le sujet principal de la page",
      "Sécuriser le serveur",
      "Créer un backlink",
      "Compresser les images",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quel élément représente généralement le titre principal d'une page ?",
    options: ["H1", "H4", "Footer", "Meta description"],
    correctAnswer: 0,
  },

  {
    question: "À quoi sert principalement robots.txt ?",
    options: [
      "Donner des directives d'exploration aux robots",
      "Sécuriser les données privées",
      "Garantir l'indexation",
      "Créer des redirections",
    ],
    correctAnswer: 0,
  },

  {
    question: "Un sitemap garantit-il que toutes les pages seront indexées ?",
    options: [
      "Non",
      "Oui",
      "Oui, mais seulement pour les petits sites",
      "Oui, si le fichier contient plus de 100 URL",
    ],
    correctAnswer: 0,
  },

  {
    question: "À quoi sert rel=canonical ?",
    options: [
      "Indiquer une URL préférée parmi plusieurs versions similaires",
      "Bloquer une page",
      "Créer un backlink",
      "Accélérer le serveur",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quelle redirection est généralement utilisée lorsqu'une URL est définitivement déplacée ?",
    options: ["301", "200", "404", "500"],
    correctAnswer: 0,
  },

  {
    question:
      "Faut-il automatiquement rediriger toutes les erreurs 404 vers la page d'accueil ?",
    options: [
      "Non",
      "Oui",
      "Oui, toujours",
      "Uniquement pour les e-commerces",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel est un avantage du HTML sémantique ?",
    options: [
      "Il donne une structure et un sens appropriés au contenu",
      "Il garantit la première position",
      "Il remplace CSS",
      "Il crée automatiquement des backlinks",
    ],
    correctAnswer: 0,
  },

  {
    question: "Pourquoi une page peut-elle avoir des metadata spécifiques ?",
    options: [
      "Parce que chaque page possède son propre sujet et contexte",
      "Parce que toutes les pages doivent avoir exactement le même title",
      "Parce que metadata remplace le contenu",
      "Parce que metadata garantit le trafic",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quel est le rôle d'un lien interne ?",
    options: [
      "Relier des pages pertinentes au sein du même site",
      "Créer automatiquement un backlink",
      "Sécuriser une page",
      "Remplacer un sitemap",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel backlink est généralement le plus intéressant ?",
    options: [
      "Un lien pertinent dans un contexte éditorial utile",
      "Un lien acheté sur des centaines de sites sans rapport",
      "Un lien caché",
      "Un lien généré automatiquement",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quelle pratique est problématique en link building ?",
    options: [
      "Accumuler artificiellement des liens sans pertinence",
      "Créer une étude originale",
      "Publier un outil utile",
      "Développer des relations professionnelles",
    ],
    correctAnswer: 0,
  },

  {
    question: "Quelle recherche possède une forte intention locale ?",
    options: [
      "restaurant italien Nairobi",
      "définition de marketing",
      "histoire de l'informatique",
      "qu'est-ce que JavaScript",
    ],
    correctAnswer: 0,
  },

  {
    question: "Que mesure principalement LCP ?",
    options: [
      "Le chargement de l'élément principal visible",
      "La stabilité visuelle",
      "La réactivité aux interactions",
      "Le nombre de backlinks",
    ],
    correctAnswer: 0,
  },

  {
    question: "Que mesure principalement INP ?",
    options: [
      "La réactivité aux interactions",
      "La stabilité visuelle",
      "Le nombre de pages indexées",
      "La vitesse du serveur uniquement",
    ],
    correctAnswer: 0,
  },

  {
    question: "Que mesure principalement CLS ?",
    options: [
      "La stabilité visuelle",
      "La réactivité",
      "Le nombre de clics",
      "Les backlinks",
    ],
    correctAnswer: 0,
  },

  {
    question: "À quoi sert Google Search Console ?",
    options: [
      "Analyser la présence d'un site dans Google et certains problèmes liés à son exploration et indexation",
      "Héberger un site",
      "Créer une application mobile",
      "Créer automatiquement du contenu",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Une page obtient 10 000 impressions et 500 clics. Quel est son CTR ?",
    options: ["5 %", "10 %", "50 %", "0,5 %"],
    correctAnswer: 0,
  },

  {
    question: "Pourquoi le trafic seul ne suffit-il pas pour mesurer le SEO ?",
    options: [
      "Parce que le trafic doit être relié à la pertinence et aux objectifs business",
      "Parce que le trafic n'a jamais de valeur",
      "Parce que Google interdit les statistiques",
      "Parce qu'il faut uniquement compter les backlinks",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quelle est une bonne méthode pour construire une stratégie SEO ?",
    options: [
      "Objectifs → audience → recherche → architecture → contenu → technique → mesure",
      "Backlinks → mots-clés → spam → contenu",
      "Créer 10 000 pages puis réfléchir",
      "Répéter le même mot-clé partout",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Pourquoi faut-il prioriser les problèmes lors d'un audit SEO ?",
    options: [
      "Parce que tous les problèmes n'ont pas le même impact et que les ressources sont limitées",
      "Parce que les problèmes secondaires sont toujours prioritaires",
      "Parce qu'un audit doit contenir exactement 10 problèmes",
      "Parce que Google impose un ordre précis",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel est le meilleur objectif d'un audit SEO ?",
    options: [
      "Transformer les observations en actions concrètes et prioritaires",
      "Produire le plus long rapport possible",
      "Garantir la première position",
      "Ajouter des mots-clés sur chaque page",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Une page importante est inaccessible à cause d'une erreur serveur. Quelle doit être la priorité ?",
    options: [
      "Résoudre le problème d'accessibilité avant de se concentrer sur des optimisations secondaires",
      "Ajouter 50 mots-clés",
      "Créer 100 backlinks",
      "Modifier uniquement la couleur du bouton",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quelle phrase représente le mieux une approche SEO professionnelle ?",
    options: [
      "Je comprends le besoin, j'analyse le site, je priorise les problèmes, j'optimise et je mesure les résultats.",
      "Je répète le mot-clé jusqu'à obtenir la première position.",
      "Je crée autant de pages que possible.",
      "J'achète des backlinks jusqu'à ce que le trafic augmente.",
    ],
    correctAnswer: 0,
  },
];