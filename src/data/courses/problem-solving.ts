import type { CourseDetail, ExamQuestion } from "../coursesData";

export const problemSolvingCourse: CourseDetail = {
  slug: "problem-solving",
  categorySlug: "soft-skills",
  title: "Problem Solving & Pensée Critique",
  description:
    "Apprends à comprendre les problèmes, identifier leurs causes, générer des solutions, prendre de meilleures décisions et résoudre efficacement les situations complexes dans la vie professionnelle et quotidienne.",
  level: "Débutant",
  icon: "🧩",

  modules: [
    {
      title: "Module 1: Comprendre le Problem Solving",
      lessons: [
        {
          slug: "introduction-au-problem-solving",
          title: "1.1 Introduction au Problem Solving",
          duration: "15 min",
          description:
            "Comprends ce qu'est le problem solving, pourquoi cette compétence est importante et comment elle intervient dans la vie professionnelle.",

          objectives: [
            "Définir clairement le problem solving.",
            "Comprendre la différence entre problème, symptôme et cause.",
            "Comprendre pourquoi les problèmes complexes nécessitent une méthode.",
            "Identifier les situations dans lesquelles utiliser une démarche de résolution de problème."
          ],

          content: [
            "# Qu'est-ce que le Problem Solving ?",

            "Le **problem solving**, ou résolution de problèmes, désigne l'ensemble des méthodes utilisées pour comprendre une situation difficile, identifier ce qui empêche d'atteindre un objectif et trouver une solution adaptée.",

            "Résoudre un problème ne consiste donc pas simplement à trouver une réponse rapide. Il faut d'abord comprendre ce qui se passe, rechercher les causes, envisager plusieurs solutions, choisir la meilleure approche et vérifier que le problème est réellement résolu.",

            "Dans la vie professionnelle, cette compétence est particulièrement importante parce que les problèmes sont rarement parfaitement définis. Un client peut être insatisfait sans expliquer exactement pourquoi. Une équipe peut être en retard sans connaître la véritable cause. Un produit peut perdre des utilisateurs sans qu'une seule raison soit immédiatement visible.",

            "![Cycle de résolution de problème](https://placehold.co/1200x600/png?text=Problem+Solving+Cycle)",

            "## Pourquoi le Problem Solving est-il important ?",

            "Un professionnel rencontre constamment des situations qui demandent une décision ou une adaptation.",

            "- Un client se plaint d'un service.",
            "- Une application contient un bug.",
            "- Une équipe ne respecte plus ses délais.",
            "- Les ventes diminuent.",
            "- Un projet dépasse son budget.",
            "- Une machine tombe régulièrement en panne.",
            "- Une entreprise reçoit de mauvais avis.",

            "Dans chacune de ces situations, réagir immédiatement peut conduire à traiter uniquement le symptôme.",

            "Une bonne démarche consiste plutôt à prendre du recul et à poser une question fondamentale : **qu'est-ce qui provoque réellement ce problème ?**",

            "## Problème, symptôme et cause",

            "Ces trois notions sont souvent confondues.",

            "**Le problème** est la situation qui empêche d'atteindre le résultat souhaité.",

            "**Le symptôme** est le signe visible qui indique qu'un problème existe.",

            "**La cause** est ce qui contribue réellement à produire le problème.",

            "### Exemple",

            "Imagine une boutique en ligne dont les ventes diminuent.",

            "- Symptôme : les ventes ont diminué.",
            "- Problème : le site convertit moins de visiteurs en clients.",
            "- Cause possible : le processus de paiement est trop compliqué.",
            "- Autre cause possible : les frais de livraison sont affichés trop tard.",
            "- Autre cause possible : les pages produits ne répondent pas suffisamment aux questions des clients.",

            "Dire simplement « il faut vendre davantage » ne résout donc rien.",

            "Il faut comprendre **pourquoi les ventes diminuent**.",

            "![Problème, symptôme et cause](https://placehold.co/1200x600/png?text=Problem+%3E+Symptom+%3E+Root+Cause)",

            "## Le danger des solutions trop rapides",

            "Une erreur fréquente consiste à appliquer immédiatement la première solution qui vient à l'esprit.",

            "Par exemple, si une équipe termine ses projets en retard, un manager peut décider d'ajouter davantage de réunions de suivi.",

            "Mais si la véritable cause est une mauvaise estimation du travail, davantage de réunions ne résoudront probablement pas le problème.",

            "Une bonne résolution de problème commence donc souvent par **retarder volontairement la solution** afin de mieux comprendre la situation.",

            "## Une méthode simple",

            "Une démarche de base peut être résumée en six étapes :",

            "1. Identifier le problème.",
            "2. Collecter les informations.",
            "3. Rechercher les causes.",
            "4. Générer plusieurs solutions.",
            "5. Choisir et mettre en œuvre une solution.",
            "6. Vérifier le résultat.",

            "![Les six étapes du Problem Solving](https://placehold.co/1200x600/png?text=1+Problem+%3E+2+Facts+%3E+3+Causes+%3E+4+Ideas+%3E+5+Solution+%3E+6+Verify)",

            "Cette méthode peut être utilisée aussi bien pour un petit problème quotidien que pour un problème professionnel complexe.",

            "## Exemple professionnel",

            "Une entreprise remarque que de nombreux clients abandonnent leur commande avant le paiement.",

            "Une mauvaise approche serait de lancer immédiatement une campagne publicitaire pour attirer davantage de visiteurs.",

            "Une meilleure approche serait :",

            "1. Mesurer exactement où les utilisateurs abandonnent.",
            "2. Observer le parcours de commande.",
            "3. Interroger certains utilisateurs.",
            "4. Identifier les obstacles.",
            "5. Tester plusieurs améliorations.",
            "6. Comparer les résultats avant et après.",

            "Le problem solving transforme donc une réaction instinctive en démarche structurée."
          ],

          examples: [
            "Un développeur constate qu'une application est lente. Au lieu d'ajouter immédiatement du matériel, il mesure les performances, identifie les requêtes lentes et recherche la véritable source du problème.",
            "Un manager remarque que son équipe accumule les retards. Il analyse les tâches, les dépendances et les estimations avant de modifier l'organisation.",
            "Un étudiant obtient de mauvais résultats. Au lieu de simplement travailler davantage, il cherche si le problème vient de la compréhension, de la méthode de travail, de la mémorisation ou de la gestion du temps."
          ],

          practice: [
            "Choisis un problème réel dans ta vie professionnelle ou personnelle.",
            "Décris le problème en une phrase.",
            "Identifie au moins deux symptômes visibles.",
            "Liste trois causes possibles.",
            "Explique quelles informations tu voudrais obtenir avant de choisir une solution."
          ],

          quiz: [
            {
              question:
                "Quelle est généralement la première chose à faire lorsqu'on cherche à résoudre un problème ?",
              options: [
                "Appliquer immédiatement la première solution venue",
                "Comprendre et définir correctement le problème",
                "Chercher un responsable",
                "Acheter un nouvel outil"
              ],
              answer: 1,
              explanation:
                "Une bonne résolution de problème commence par une définition claire de la situation. Si le problème est mal défini, on risque de résoudre le mauvais problème."
            },
            {
              question:
                "Quelle affirmation décrit le mieux la différence entre un symptôme et une cause ?",
              options: [
                "Le symptôme explique toujours la cause",
                "La cause est toujours visible immédiatement",
                "Le symptôme est un signe observable alors que la cause explique pourquoi le problème apparaît",
                "Il n'existe aucune différence"
              ],
              answer: 2,
              explanation:
                "Un symptôme est ce que l'on observe. La cause permet d'expliquer pourquoi cette situation se produit."
            }
          ]
        },

        {
          slug: "creativite-et-resolution-de-problemes",
          title: "1.2 Créativité et résolution de problèmes",
          duration: "16 min",
          description:
            "Découvre pourquoi la créativité permet de trouver plusieurs solutions lorsqu'une approche traditionnelle ne fonctionne pas.",

          objectives: [
            "Comprendre le rôle de la créativité dans le problem solving.",
            "Distinguer créativité et innovation.",
            "Générer plusieurs idées avant de sélectionner une solution.",
            "Éviter de juger trop rapidement une idée."
          ],

          content: [
            "# Créativité et résolution de problèmes",

            "La créativité joue un rôle important dans la résolution des problèmes parce qu'un même problème peut souvent avoir plusieurs solutions.",

            "La pensée logique permet de suivre un raisonnement à partir des informations disponibles. La créativité permet quant à elle d'explorer d'autres possibilités et d'imaginer des approches auxquelles on n'aurait pas pensé immédiatement.",

            "![Créativité et résolution de problèmes](https://placehold.co/1200x600/png?text=Creativity+%2B+Logic+%3D+Better+Solutions)",

            "## Créativité et innovation",

            "La **créativité** consiste notamment à produire de nouvelles idées ou de nouvelles associations d'idées.",

            "L'**innovation** consiste à transformer une idée en quelque chose qui apporte une valeur réelle dans un contexte donné.",

            "Une idée peut donc être créative sans devenir une innovation.",

            "### Exemple",

            "Imagine un restaurant qui reçoit beaucoup de commandes à l'heure du déjeuner.",

            "Une idée créative pourrait être de créer un système de commande anticipée.",

            "L'innovation apparaît lorsque le restaurant met réellement ce système en place, le teste et constate qu'il réduit les temps d'attente.",

            "## La pensée divergente",

            "La pensée divergente consiste à générer plusieurs possibilités avant de sélectionner une direction.",

            "Par exemple, face à une baisse des ventes, on pourrait envisager :",

            "- améliorer les pages produits ;",
            "- modifier les prix ;",
            "- améliorer le service client ;",
            "- proposer une nouvelle offre ;",
            "- simplifier le paiement ;",
            "- améliorer les délais de livraison ;",
            "- cibler une nouvelle audience.",

            "![Pensée divergente](https://placehold.co/1200x600/png?text=One+Problem+%3E+Many+Ideas)",

            "L'objectif initial n'est pas de trouver immédiatement la meilleure idée. Il est d'obtenir suffisamment d'options pour pouvoir ensuite comparer les possibilités.",

            "## Le brainstorming",

            "Le brainstorming est une technique permettant de générer des idées autour d'un problème.",

            "Pendant la phase de génération, il est préférable de séparer la production d'idées de leur évaluation.",

            "Si chaque idée est immédiatement critiquée, les participants risquent de ne plus proposer de solutions originales.",

            "Une méthode simple consiste donc à :",

            "1. Définir clairement le problème.",
            "2. Produire le plus grand nombre raisonnable d'idées.",
            "3. Regrouper les idées similaires.",
            "4. Évaluer les idées.",
            "5. Sélectionner celles qui méritent un test.",

            "## Exemple",

            "Problème : une plateforme éducative reçoit peu d'inscriptions.",

            "Idées possibles :",

            "- proposer une période d'essai ;",
            "- améliorer les pages de cours ;",
            "- créer des cours gratuits d'introduction ;",
            "- ajouter des quiz ;",
            "- proposer des certificats ;",
            "- améliorer le référencement ;",
            "- créer des partenariats avec des écoles.",
            
            "Certaines idées seront bonnes, d'autres moins pertinentes. Ce n'est pas un problème. L'objectif du brainstorming est d'élargir l'espace des solutions avant de converger vers les meilleures options."
          ],

          examples: [
            "Une équipe produit cherche de nouvelles fonctionnalités pour améliorer l'expérience utilisateur.",
            "Un entrepreneur cherche plusieurs façons de réduire les coûts sans diminuer la qualité du service.",
            "Un enseignant cherche différentes méthodes pour expliquer une notion difficile."
          ],

          practice: [
            "Choisis un problème réel.",
            "Écris dix solutions possibles sans les juger.",
            "Regroupe les idées similaires.",
            "Sélectionne ensuite les trois idées les plus réalistes.",
            "Explique pourquoi tu as retenu ces trois idées."
          ],

          quiz: [
            {
              question:
                "Quel est l'objectif principal de la pensée divergente ?",
              options: [
                "Trouver immédiatement une seule solution",
                "Générer plusieurs possibilités",
                "Éliminer toutes les idées originales",
                "Choisir la solution la moins chère"
              ],
              answer: 1,
              explanation:
                "La pensée divergente cherche à élargir le nombre de possibilités avant de passer à une phase de sélection."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Définir correctement un problème",
      lessons: [
        {
          slug: "definir-un-probleme",
          title: "2.1 Comment définir un problème",
          duration: "15 min",
          description:
            "Apprends à transformer une situation vague en problème clairement défini.",

          objectives: [
            "Transformer une plainte ou une situation vague en problème mesurable.",
            "Distinguer le problème de sa solution.",
            "Utiliser les questions Qui, Quoi, Quand, Où et Combien.",
            "Formuler un problème de manière neutre."
          ],

          content: [
            "# Définir correctement un problème",

            "Un problème mal formulé produit souvent de mauvaises solutions.",

            "Dire « notre application est mauvaise » n'est pas suffisamment précis.",

            "Dire « 38 % des utilisateurs abandonnent l'inscription avant la validation de leur adresse e-mail » fournit déjà beaucoup plus d'informations.",

            "![Du problème vague au problème précis](https://placehold.co/1200x600/png?text=Vague+Problem+%3E+Specific+Problem)",

            "## Les bonnes questions",

            "Pour clarifier une situation, pose les questions suivantes :",

            "- **Qui** rencontre le problème ?",
            "- **Quoi** se passe exactement ?",
            "- **Quand** le problème apparaît-il ?",
            "- **Où** apparaît-il ?",
            "- **Combien** de personnes ou de situations sont concernées ?",
            "- **Depuis quand** le problème existe-t-il ?",
            "- **Quel résultat** devrait être obtenu ?",

            "Ces questions permettent de remplacer une impression par des faits.",

            "## Exemple",

            "Problème vague : « Les clients ne sont pas contents. »",

            "Problème mieux défini : « Depuis trois semaines, le taux de satisfaction des clients ayant contacté le support est passé de 88 % à 72 %, principalement sur les demandes concernant les remboursements. »",

            "Cette deuxième formulation permet déjà d'orienter l'analyse."
          ],

          practice: [
            "Prends une phrase vague comme « notre équipe travaille mal ».",
            "Transforme-la en problème concret.",
            "Ajoute des données si elles sont disponibles.",
            "Indique qui est concerné, quand le problème apparaît et quel résultat est attendu."
          ],

          quiz: [
            {
              question:
                "Laquelle de ces formulations décrit le mieux un problème ?",
              options: [
                "Il faut acheter un nouvel outil.",
                "L'équipe est mauvaise.",
                "Le délai moyen de traitement est passé de 2 à 5 jours depuis janvier.",
                "Il faut embaucher quelqu'un."
              ],
              answer: 2,
              explanation:
                "Cette formulation décrit une situation observable et mesurable sans imposer immédiatement une solution."
            }
          ]
        },

        {
          slug: "symptomes-et-causes",
          title: "2.2 Symptômes, causes et causes profondes",
          duration: "18 min",
          description:
            "Apprends à aller au-delà des symptômes pour rechercher les causes profondes d'un problème.",

          objectives: [
            "Identifier les symptômes d'un problème.",
            "Rechercher les causes possibles.",
            "Comprendre le principe de cause racine.",
            "Utiliser la technique des 5 Pourquoi."
          ],

          content: [
            "# Symptômes et causes",

            "Lorsqu'un problème apparaît, le premier élément visible n'est pas nécessairement sa cause.",

            "![Arbre des causes](https://placehold.co/1200x600/png?text=Problem+%3E+Causes+%3E+Root+Cause)",

            "## Les 5 Pourquoi",

            "La méthode des **5 Pourquoi** consiste à poser plusieurs fois la question « pourquoi ? » afin de remonter progressivement vers une cause plus profonde.",

            "### Exemple",

            "**Problème :** Le site web était indisponible ce matin.",

            "**Pourquoi ?** Le serveur a redémarré.",

            "**Pourquoi ?** La mémoire disponible était insuffisante.",

            "**Pourquoi ?** Une application consommait progressivement trop de mémoire.",

            "**Pourquoi ?** Une fuite mémoire n'était pas détectée.",

            "**Pourquoi ?** Aucun mécanisme de surveillance n'avait été configuré.",

            "La cause profonde n'est donc pas simplement « le serveur a redémarré ».",

            "## Attention",

            "Les 5 Pourquoi ne signifient pas qu'il faut toujours poser exactement cinq questions. Le nombre cinq est surtout une indication. Il faut continuer jusqu'à obtenir une cause suffisamment utile pour agir.",

            "Une analyse correcte doit également être vérifiée avec des faits. Une hypothèse n'est pas automatiquement une cause."
          ],

          practice: [
            "Choisis un problème réel.",
            "Écris le problème.",
            "Pose « pourquoi ? » plusieurs fois.",
            "Pour chaque réponse, demande-toi si elle est vérifiée par des faits.",
            "Identifie la cause sur laquelle une action pourrait réellement avoir un impact."
          ],

          quiz: [
            {
              question:
                "Quel est l'objectif principal de la méthode des 5 Pourquoi ?",
              options: [
                "Trouver un responsable",
                "Trouver rapidement une solution coûteuse",
                "Explorer les causes successives d'un problème",
                "Éviter de collecter des données"
              ],
              answer: 2,
              explanation:
                "La méthode cherche à aller au-delà du symptôme en explorant les causes successives."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Analyser un problème",
      lessons: [
        {
          slug: "collecter-les-faits",
          title: "3.1 Collecter les faits et les données",
          duration: "15 min",
          description:
            "Apprends à distinguer les faits des opinions avant de prendre une décision.",

          objectives: [
            "Distinguer faits, opinions et hypothèses.",
            "Identifier les informations nécessaires.",
            "Éviter les conclusions prématurées.",
            "Utiliser les données pour améliorer une décision."
          ],

          content: [
            "# Collecter les faits",

            "Une résolution de problème efficace repose sur des informations fiables.",

            "Il faut distinguer trois éléments :",

            "- **Fait :** information observable ou vérifiable.",
            "- **Opinion :** interprétation ou jugement d'une personne.",
            "- **Hypothèse :** explication possible qui doit encore être vérifiée.",

            "![Faits, opinions et hypothèses](https://placehold.co/1200x600/png?text=Facts+%7C+Opinions+%7C+Hypotheses)",

            "### Exemple",

            "« Le site est trop lent » peut être une opinion.",

            "« La page d'accueil met en moyenne 4,8 secondes à devenir interactive sur les appareils concernés » constitue une information beaucoup plus précise.",

            "Avant de décider, cherche donc à remplacer autant que possible les impressions par des informations vérifiables."
          ],

          practice: [
            "Écris cinq affirmations concernant un problème.",
            "Classe chacune comme fait, opinion ou hypothèse.",
            "Identifie les hypothèses qui doivent être vérifiées."
          ],

          quiz: [
            {
              question: "Laquelle est la formulation la plus factuelle ?",
              options: [
                "Le logiciel est horrible.",
                "Les utilisateurs détestent probablement le logiciel.",
                "Le taux d'erreur est passé de 2 % à 7 % cette semaine.",
                "L'équipe ne fait pas assez attention."
              ],
              answer: 2,
              explanation:
                "La formulation présente une donnée mesurable plutôt qu'un jugement ou une hypothèse."
            }
          ]
        },

        {
          slug: "diagramme-ishikawa",
          title: "3.2 Le diagramme d'Ishikawa",
          duration: "18 min",
          description:
            "Utilise le diagramme causes-effets pour organiser les causes possibles d'un problème complexe.",

          objectives: [
            "Comprendre le diagramme d'Ishikawa.",
            "Classer les causes possibles.",
            "Éviter de se concentrer sur une seule explication.",
            "Utiliser une représentation visuelle pour analyser un problème."
          ],

          content: [
            "# Le diagramme d'Ishikawa",

            "Le diagramme d'Ishikawa, également appelé **diagramme causes-effets** ou **diagramme en arêtes de poisson**, permet de représenter plusieurs familles de causes pouvant contribuer à un problème.",

            "![Diagramme d'Ishikawa](https://placehold.co/1200x600/png?text=Ishikawa+Cause+and+Effect+Diagram)",

            "Dans un contexte professionnel, les catégories peuvent être adaptées au problème étudié.",

            "Par exemple :",

            "- Méthodes",
            "- Main-d'œuvre",
            "- Machines",
            "- Matériaux",
            "- Mesures",
            "- Milieu",

            "### Exemple",

            "Problème : augmentation des erreurs de commande.",

            "Les causes possibles peuvent concerner :",

            "- le processus de commande ;",
            "- la formation des employés ;",
            "- le logiciel utilisé ;",
            "- la qualité des informations produits ;",
            "- les contrôles effectués ;",
            "- l'environnement de travail.",

            "L'objectif n'est pas de remplir mécaniquement six catégories. Il s'agit surtout d'éviter une analyse trop étroite."
          ],

          practice: [
            "Choisis un problème professionnel.",
            "Dessine un diagramme d'Ishikawa.",
            "Ajoute au moins quatre grandes catégories.",
            "Ajoute au minimum deux causes possibles dans chaque catégorie.",
            "Identifie ensuite les causes qui nécessitent une vérification."
          ],

          quiz: [
            {
              question:
                "Quel est l'objectif principal d'un diagramme d'Ishikawa ?",
              options: [
                "Calculer le chiffre d'affaires",
                "Organiser les causes possibles d'un problème",
                "Créer un planning",
                "Mesurer la satisfaction client"
              ],
              answer: 1,
              explanation:
                "Le diagramme d'Ishikawa permet de structurer visuellement les causes possibles d'un problème."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Générer des solutions",
      lessons: [
        {
          title: "4.1 Brainstorming et génération d'idées",
          slug: "brainstorming-generation-idees",
          duration: "16 min",
          description:
            "Apprends à générer plusieurs solutions avant de choisir la meilleure.",

          objectives: [
            "Produire plusieurs solutions.",
            "Éviter de choisir trop rapidement.",
            "Utiliser le brainstorming individuellement ou en groupe.",
            "Transformer une idée générale en solution testable."
          ],

          content: [
            "# Générer plusieurs solutions",

            "Une fois le problème compris et ses causes analysées, il faut chercher des solutions.",

            "Une erreur fréquente consiste à sélectionner immédiatement la première idée acceptable.",

            "Une meilleure approche consiste à générer plusieurs possibilités puis à les comparer.",

            "![Génération de solutions](https://placehold.co/1200x600/png?text=Problem+%3E+Ideas+%3E+Options+%3E+Best+Solution)",

            "## Une bonne séance de brainstorming",

            "Commence par rappeler le problème exact.",

            "Ensuite, demande :",

            "- Que pourrait-on changer ?",
            "- Que pourrait-on supprimer ?",
            "- Que pourrait-on simplifier ?",
            "- Que pourrait-on automatiser ?",
            "- Que pourrait-on faire différemment ?",
            "- Que pourrait-on tester à petite échelle ?",

            "Après la génération des idées, il faut passer à l'évaluation."
          ],

          practice: [
            "Choisis un problème.",
            "Génère au moins dix solutions.",
            "Classe les solutions selon leur impact potentiel.",
            "Classe-les ensuite selon leur difficulté de mise en œuvre.",
            "Choisis deux solutions à tester."
          ],

          quiz: [
            {
              question:
                "Pourquoi générer plusieurs solutions avant de choisir ?",
              options: [
                "Pour rendre le problème plus compliqué",
                "Pour augmenter les chances de trouver une approche adaptée",
                "Pour éviter toute décision",
                "Pour supprimer les données"
              ],
              answer: 1,
              explanation:
                "Comparer plusieurs possibilités permet d'éviter de dépendre uniquement de la première idée venue."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Prendre une décision",
      lessons: [
        {
          slug: "evaluer-solutions",
          title: "5.1 Évaluer et comparer les solutions",
          duration: "17 min",
          description:
            "Découvre comment comparer plusieurs solutions selon leur impact, leur coût, leurs risques et leur faisabilité.",

          objectives: [
            "Définir des critères de décision.",
            "Comparer plusieurs solutions.",
            "Prendre en compte les coûts et les risques.",
            "Éviter les décisions basées uniquement sur l'intuition."
          ],

          content: [
            "# Évaluer les solutions",

            "Toutes les solutions ne se valent pas.",

            "Une solution peut être très efficace mais extrêmement coûteuse. Une autre peut être peu coûteuse mais avoir un impact limité.",

            "Il est donc utile de définir des critères.",

            "![Matrice de décision](https://placehold.co/1200x600/png?text=Impact+vs+Effort)",

            "Exemples de critères :",

            "- Impact attendu",
            "- Coût",
            "- Temps nécessaire",
            "- Risque",
            "- Faisabilité",
            "- Effort",
            "- Acceptation par les utilisateurs",

            "Une matrice simple peut aider à visualiser les compromis.",

            "## Exemple",

            "Une entreprise cherche à réduire les temps d'attente.",

            "Solution A : embaucher deux personnes supplémentaires.",
            "Solution B : automatiser une partie du processus.",
            "Solution C : simplifier le processus.",
            "Solution D : supprimer certaines étapes inutiles.",

            "La meilleure solution n'est pas forcément celle qui apporte le plus grand impact théorique. Elle doit également être réalisable dans le contexte réel."
          ],

          practice: [
            "Choisis trois solutions à ton problème.",
            "Attribue une note de 1 à 5 pour l'impact, le coût, l'effort et le risque.",
            "Calcule une appréciation globale.",
            "Choisis la solution que tu voudrais tester en premier.",
            "Explique ton choix."
          ],

          quiz: [
            {
              question:
                "Pourquoi utiliser des critères pour comparer plusieurs solutions ?",
              options: [
                "Pour prendre une décision plus structurée",
                "Pour garantir que la solution sera parfaite",
                "Pour éviter toute analyse",
                "Pour choisir automatiquement la solution la plus chère"
              ],
              answer: 0,
              explanation:
                "Les critères permettent de comparer les options selon plusieurs dimensions plutôt que de se baser uniquement sur une impression."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Mettre en œuvre et vérifier",
      lessons: [
        {
          slug: "plan-action",
          title: "6.1 Transformer une solution en plan d'action",
          duration: "15 min",
          description:
            "Apprends à transformer une bonne idée en actions concrètes.",

          objectives: [
            "Décomposer une solution en actions.",
            "Définir les responsabilités.",
            "Fixer des échéances.",
            "Prévoir les risques et les mesures de suivi."
          ],

          content: [
            "# Du problème à l'action",

            "Une solution n'a de valeur que si elle peut être mise en œuvre.",

            "Un plan d'action doit répondre à plusieurs questions :",

            "- Quelle action doit être réalisée ?",
            "- Qui est responsable ?",
            "- Quand doit-elle être réalisée ?",
            "- De quelles ressources avons-nous besoin ?",
            "- Comment mesurerons-nous le résultat ?",

            "![Plan d'action](https://placehold.co/1200x600/png?text=Action+%3E+Owner+%3E+Deadline+%3E+Metric)",

            "### Exemple",

            "Problème : trop de demandes restent sans réponse.",

            "Action : mettre en place une file de traitement avec des priorités.",

            "Responsable : responsable du support.",

            "Échéance : vendredi.",

            "Mesure : réduire le délai moyen de réponse de 24 heures à moins de 12 heures.",

            "Cette formulation est beaucoup plus exploitable que « améliorer le support »."
          ],

          practice: [
            "Crée un plan d'action pour le problème que tu as choisi.",
            "Définis au moins cinq actions.",
            "Attribue un responsable à chaque action.",
            "Ajoute une échéance.",
            "Définis une mesure permettant de vérifier le résultat."
          ],

          quiz: [
            {
              question:
                "Quelle formulation est la plus utile dans un plan d'action ?",
              options: [
                "Améliorer le service.",
                "Faire mieux.",
                "Réduire le délai moyen de réponse à moins de 12 heures avant vendredi.",
                "Essayer d'être plus efficace."
              ],
              answer: 2,
              explanation:
                "Une bonne action doit être suffisamment précise pour permettre son exécution et son suivi."
            }
          ]
        },

        {
          slug: "verifier-resultats",
          title: "6.2 Vérifier les résultats et apprendre",
          duration: "14 min",
          description:
            "Découvre pourquoi une solution doit être mesurée après sa mise en œuvre.",

          objectives: [
            "Mesurer les résultats d'une solution.",
            "Comparer les résultats avec l'objectif initial.",
            "Identifier les effets inattendus.",
            "Améliorer progressivement la solution."
          ],

          content: [
            "# Vérifier les résultats",

            "Mettre en place une solution ne signifie pas automatiquement que le problème est résolu.",

            "Il faut vérifier les résultats.",

            "![Boucle d'amélioration](https://placehold.co/1200x600/png?text=Plan+%3E+Act+%3E+Measure+%3E+Learn+%3E+Improve)",

            "Compare les résultats obtenus avec la situation initiale.",

            "Par exemple :",

            "Avant : 20 % des commandes étaient annulées.",

            "Après : 12 % des commandes sont annulées.",

            "La situation s'est améliorée, mais il faut encore déterminer si le résultat est suffisamment proche de l'objectif.",

            "Il faut également rechercher les effets secondaires.",

            "Une solution peut résoudre un problème tout en créant un autre problème.",

            "La résolution de problème est donc un processus d'apprentissage continu."
          ],

          practice: [
            "Définis une mesure avant de mettre en œuvre ta solution.",
            "Décris comment tu vas comparer les résultats.",
            "Identifie un effet secondaire possible.",
            "Définis ce que tu feras si la solution ne produit pas les résultats attendus."
          ],

          quiz: [
            {
              question:
                "Pourquoi faut-il mesurer les résultats après avoir appliqué une solution ?",
              options: [
                "Pour vérifier si la solution a réellement amélioré la situation",
                "Pour prouver que l'on avait raison",
                "Pour éviter toute amélioration supplémentaire",
                "Pour remplacer l'analyse initiale"
              ],
              answer: 0,
              explanation:
                "La mesure permet de vérifier l'efficacité réelle de la solution et d'identifier les améliorations nécessaires."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Pensée critique et biais",
      lessons: [
        {
          slug: "pensee-critique",
          title: "7.1 Développer sa pensée critique",
          duration: "17 min",
          description:
            "Apprends à examiner les informations, les arguments et les hypothèses avant de prendre une décision.",

          objectives: [
            "Distinguer une affirmation d'une preuve.",
            "Questionner les hypothèses.",
            "Identifier les informations manquantes.",
            "Éviter les conclusions trop rapides."
          ],

          content: [
            "# Pensée critique",

            "La pensée critique consiste à examiner une information ou une idée de manière structurée avant de l'accepter ou de la rejeter.",

            "Elle ne signifie pas être constamment négatif.",

            "Elle signifie plutôt poser de bonnes questions.",

            "![Pensée critique](https://placehold.co/1200x600/png?text=Claim+%3E+Evidence+%3E+Analysis+%3E+Conclusion)",

            "Pose-toi notamment les questions suivantes :",

            "- Quelle est la source ?",
            "- Quelle preuve soutient cette affirmation ?",
            "- Existe-t-il une autre explication ?",
            "- Quelles informations manquent ?",
            "- L'échantillon est-il suffisamment représentatif ?",
            "- Suis-je en train de confondre corrélation et causalité ?",

            "Ces questions permettent d'améliorer la qualité des décisions."
          ],

          practice: [
            "Prends une affirmation trouvée sur Internet.",
            "Identifie sa source.",
            "Cherche les preuves disponibles.",
            "Cherche une explication alternative.",
            "Décide si l'information est suffisamment fiable pour être utilisée."
          ],

          quiz: [
            {
              question:
                "Que cherche principalement à faire la pensée critique ?",
              options: [
                "Accepter toutes les informations",
                "Rejeter toutes les informations",
                "Examiner les informations et les preuves avant de conclure",
                "Choisir l'opinion la plus populaire"
              ],
              answer: 2,
              explanation:
                "La pensée critique cherche à évaluer les informations et les preuves avant de prendre position."
            }
          ]
        },

        {
          slug: "biais-cognitifs",
          title: "7.2 Les biais cognitifs dans la prise de décision",
          duration: "18 min",
          description:
            "Découvre comment certains biais peuvent influencer notre analyse des problèmes et nos décisions.",

          objectives: [
            "Comprendre ce qu'est un biais cognitif.",
            "Identifier quelques biais courants.",
            "Réduire leur influence dans la prise de décision.",
            "Apprendre à rechercher des informations contradictoires."
          ],

          content: [
            "# Les biais cognitifs",

            "Notre cerveau utilise des raccourcis pour traiter rapidement l'information. Ces raccourcis sont utiles dans de nombreuses situations, mais ils peuvent aussi conduire à des erreurs de jugement.",

            "![Biais cognitifs](https://placehold.co/1200x600/png?text=Cognitive+Biases)",

            "## Biais de confirmation",

            "Le biais de confirmation consiste notamment à accorder davantage d'attention aux informations qui confirment ce que nous croyons déjà.",

            "### Exemple",

            "Un manager pense qu'un employé est responsable des retards. Il remarque alors principalement les erreurs de cet employé et ignore les problèmes de processus qui concernent toute l'équipe.",

            "Pour limiter ce biais, demande-toi :",

            "**Quelles informations pourraient montrer que mon hypothèse est incorrecte ?**",

            "## Effet d'ancrage",

            "L'ancrage apparaît lorsque la première information reçue influence fortement notre jugement.",

            "Par exemple, un prix annoncé en premier peut influencer la perception des prix suivants.",

            "## Biais de disponibilité",

            "Nous pouvons accorder trop d'importance aux exemples qui nous viennent facilement à l'esprit.",

            "Une bonne décision demande donc parfois de rechercher activement des données plutôt que de se fier uniquement à notre mémoire."
          ],

          practice: [
            "Décris une décision récente.",
            "Identifie une hypothèse que tu avais au départ.",
            "Cherche une information qui pourrait contredire cette hypothèse.",
            "Explique comment cette nouvelle information pourrait modifier ta décision."
          ],

          quiz: [
            {
              question:
                "Que décrit le mieux le biais de confirmation ?",
              options: [
                "Chercher uniquement les informations qui confirment nos croyances",
                "Changer systématiquement d'avis",
                "Refuser toute information",
                "Utiliser uniquement des données statistiques"
              ],
              answer: 0,
              explanation:
                "Le biais de confirmation peut nous pousser à privilégier les informations qui vont dans le sens de ce que nous croyons déjà."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Problem Solving dans l'entreprise",
      lessons: [
        {
          slug: "problem-solving-en-entreprise",
          title: "8.1 Résoudre les problèmes au travail",
          duration: "16 min",
          description:
            "Applique une méthode structurée aux problèmes rencontrés dans les équipes et les entreprises.",

          objectives: [
            "Appliquer le problem solving dans un contexte professionnel.",
            "Analyser les problèmes d'équipe.",
            "Identifier les causes organisationnelles.",
            "Construire une démarche d'amélioration."
          ],

          content: [
            "# Problem Solving en entreprise",

            "Dans une organisation, les problèmes peuvent concerner les personnes, les processus, les outils, les clients, les finances ou la qualité.",

            "Une bonne démarche évite de transformer chaque problème en recherche de responsable.",

            "![Problem Solving en entreprise](https://placehold.co/1200x600/png?text=People+%2B+Process+%2B+Tools+%2B+Data)",

            "### Exemple",

            "Une équipe de développement livre régulièrement ses fonctionnalités en retard.",

            "Une première réaction pourrait être de demander aux développeurs de travailler plus vite.",

            "Une analyse plus sérieuse pourrait révéler :",

            "- des exigences qui changent régulièrement ;",
            "- des dépendances externes ;",
            "- des estimations irréalistes ;",
            "- trop de travail simultané ;",
            "- des tests réalisés trop tard.",

            "Le véritable problème peut donc être organisationnel plutôt qu'individuel."
          ],

          practice: [
            "Choisis un problème professionnel.",
            "Analyse les personnes, les processus, les outils et les informations impliqués.",
            "Identifie les causes possibles.",
            "Propose une solution qui améliore le système plutôt que de simplement chercher un responsable."
          ],

          quiz: [
            {
              question:
                "Pourquoi faut-il éviter de chercher immédiatement un responsable lorsqu'un problème apparaît ?",
              options: [
                "Parce qu'il ne faut jamais identifier les responsabilités",
                "Parce que la cause peut être liée au processus ou au système plutôt qu'à une seule personne",
                "Parce que les problèmes n'ont jamais de cause",
                "Parce qu'une entreprise ne doit jamais changer ses processus"
              ],
              answer: 1,
              explanation:
                "Un problème professionnel peut résulter d'un processus, d'un outil, d'une information insuffisante ou de plusieurs facteurs combinés."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Méthodes et outils pratiques",
      lessons: [
        {
          slug: "swot-problem-solving",
          title: "9.1 Utiliser une analyse SWOT",
          duration: "16 min",
          description:
            "Utilise la matrice SWOT pour analyser une situation et identifier les options possibles.",

          objectives: [
            "Comprendre les quatre dimensions de la SWOT.",
            "Distinguer facteurs internes et externes.",
            "Utiliser SWOT pour analyser une situation.",
            "Transformer l'analyse en décisions."
          ],

          content: [
            "# Analyse SWOT",

            "La matrice SWOT organise une situation autour de quatre dimensions :",

            "- **Strengths :** forces",
            "- **Weaknesses :** faiblesses",
            "- **Opportunities :** opportunités",
            "- **Threats :** menaces",

            "![Matrice SWOT](https://placehold.co/1200x600/png?text=Strengths+%7C+Weaknesses+%7C+Opportunities+%7C+Threats)",

            "Les forces et faiblesses concernent généralement l'environnement interne.",

            "Les opportunités et menaces concernent généralement l'environnement externe.",

            "### Exemple",

            "Une petite entreprise de formation en ligne peut avoir comme force une expertise technique importante, comme faiblesse une faible notoriété, comme opportunité la croissance de l'apprentissage en ligne et comme menace l'arrivée de nombreux concurrents.",

            "La SWOT devient réellement utile lorsqu'elle permet ensuite de prendre des décisions."
          ],

          practice: [
            "Réalise une SWOT d'une entreprise que tu connais.",
            "Liste trois forces.",
            "Liste trois faiblesses.",
            "Liste trois opportunités.",
            "Liste trois menaces.",
            "Propose deux décisions à partir de ton analyse."
          ],

          quiz: [
            {
              question: "Dans une analyse SWOT, une opportunité est généralement :",
              options: [
                "Un facteur externe favorable",
                "Une faiblesse interne",
                "Une erreur humaine",
                "Un coût fixe"
              ],
              answer: 0,
              explanation:
                "Une opportunité est généralement un facteur externe pouvant être exploité favorablement."
            }
          ]
        },

        {
          slug: "arbre-de-decision",
          title: "9.2 Utiliser un arbre de décision",
          duration: "17 min",
          description:
            "Apprends à représenter plusieurs choix et leurs conséquences possibles.",

          objectives: [
            "Comprendre le fonctionnement d'un arbre de décision.",
            "Décomposer une décision complexe.",
            "Comparer plusieurs scénarios.",
            "Prendre en compte les conséquences possibles."
          ],

          content: [
            "# Arbre de décision",

            "Un arbre de décision permet de représenter visuellement plusieurs choix et leurs conséquences.",

            "![Arbre de décision](https://placehold.co/1200x600/png?text=Decision+Tree)",

            "### Exemple",

            "Une entreprise doit décider si elle développe une fonctionnalité en interne ou utilise une solution externe.",

            "Premier choix :",

            "- Développer en interne",
            "- Utiliser une solution externe",

            "Chaque choix peut ensuite conduire à plusieurs scénarios.",

            "L'arbre permet de rendre visibles les options, les risques et les conséquences possibles."
          ],

          practice: [
            "Choisis une décision réelle.",
            "Identifie au moins deux options.",
            "Pour chaque option, identifie deux conséquences possibles.",
            "Ajoute les risques associés.",
            "Choisis l'option qui semble la plus adaptée et explique pourquoi."
          ],

          quiz: [
            {
              question: "Quel est l'intérêt principal d'un arbre de décision ?",
              options: [
                "Visualiser les choix et leurs conséquences possibles",
                "Garantir qu'une décision sera parfaite",
                "Supprimer tous les risques",
                "Remplacer toutes les données"
              ],
              answer: 0,
              explanation:
                "Un arbre de décision aide à représenter les différentes options et leurs conséquences possibles."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Projet final",
      lessons: [
        {
          slug: "projet-final-problem-solving",
          title: "10.1 Projet final : résoudre un problème réel",
          duration: "30 min",
          description:
            "Mets en pratique toute la méthode de problem solving sur un problème réel.",

          objectives: [
            "Définir clairement un problème.",
            "Collecter et analyser les informations.",
            "Identifier les causes profondes.",
            "Générer plusieurs solutions.",
            "Choisir une solution selon des critères.",
            "Créer un plan d'action.",
            "Mesurer les résultats."
          ],

          content: [
            "# Projet final : résoudre un problème réel",

            "Pour terminer ce cours, choisis un problème réel rencontré dans une entreprise, un projet, une association, tes études ou ta vie quotidienne.",

            "![Projet final](https://placehold.co/1200x600/png?text=Real+Problem+Solving+Project)",

            "## Étape 1 : Définir le problème",

            "Décris précisément la situation.",

            "Évite les formulations comme « ça ne marche pas » ou « les gens ne travaillent pas bien ».",

            "Utilise des faits et des données lorsque cela est possible.",

            "## Étape 2 : Collecter les informations",

            "Liste les informations dont tu disposes et celles qui te manquent.",

            "## Étape 3 : Rechercher les causes",

            "Utilise les 5 Pourquoi ou un diagramme d'Ishikawa.",

            "## Étape 4 : Générer les solutions",

            "Produis au moins cinq solutions possibles.",

            "## Étape 5 : Évaluer les solutions",

            "Compare-les selon l'impact, le coût, le risque et la faisabilité.",

            "## Étape 6 : Construire le plan d'action",

            "Définis les actions, responsables, échéances et indicateurs.",

            "## Étape 7 : Mesurer",

            "Définis comment tu vas savoir si le problème est réellement résolu.",

            "## Résultat attendu",

            "À la fin du projet, tu dois pouvoir présenter :",

            "- le problème ;",
            "- les faits ;",
            "- les causes ;",
            "- les solutions envisagées ;",
            "- la solution choisie ;",
            "- le plan d'action ;",
            "- les indicateurs de réussite ;",
            "- les résultats obtenus ou attendus."
          ],

          practice: [
            "Réalise entièrement le projet sur un problème réel.",
            "Présente ton analyse sous forme de document ou de présentation.",
            "Explique pourquoi tu as choisi cette solution plutôt qu'une autre.",
            "Définis au moins trois indicateurs permettant de mesurer le résultat."
          ],

          quiz: [
            {
              question:
                "Quelle est la dernière étape importante après la mise en œuvre d'une solution ?",
              options: [
                "Arrêter immédiatement l'analyse",
                "Vérifier les résultats et apprendre de l'expérience",
                "Chercher quelqu'un à blâmer",
                "Ignorer les résultats"
              ],
              answer: 1,
              explanation:
                "Après l'action, il faut mesurer les résultats afin de vérifier l'efficacité de la solution et identifier les améliorations possibles."
            }
          ]
        }
      ]
    }
  ]
};

export const problemSolvingExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle est une bonne première étape dans la résolution d'un problème ?",
    options: [
      "Appliquer immédiatement une solution",
      "Définir clairement le problème",
      "Chercher un responsable",
      "Acheter un nouvel outil"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle est la différence entre un symptôme et une cause ?",
    options: [
      "Il n'y a aucune différence",
      "Le symptôme est observable tandis que la cause explique pourquoi le problème apparaît",
      "La cause est toujours visible",
      "Le symptôme est toujours la solution"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel est l'objectif de la méthode des 5 Pourquoi ?",
    options: [
      "Trouver un responsable",
      "Explorer les causes successives d'un problème",
      "Créer un budget",
      "Mesurer la satisfaction"
    ],
    correctAnswer: 1
  },
  {
    question: "Que permet principalement un diagramme d'Ishikawa ?",
    options: [
      "Organiser les causes possibles d'un problème",
      "Créer une facture",
      "Mesurer les ventes",
      "Créer une présentation"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'objectif de la pensée divergente ?",
    options: [
      "Trouver une seule solution immédiatement",
      "Générer plusieurs possibilités",
      "Éliminer toutes les idées",
      "Choisir la solution la plus chère"
    ],
    correctAnswer: 1
  },
  {
    question: "Pourquoi comparer plusieurs solutions ?",
    options: [
      "Pour rendre la décision plus structurée",
      "Pour éviter de décider",
      "Pour garantir une solution parfaite",
      "Pour augmenter automatiquement les coûts"
    ],
    correctAnswer: 0
  },
  {
    question: "Dans une SWOT, une force est généralement :",
    options: [
      "Un facteur interne favorable",
      "Une menace externe",
      "Une opportunité externe",
      "Un problème client"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le rôle principal d'un arbre de décision ?",
    options: [
      "Visualiser les choix et leurs conséquences possibles",
      "Supprimer tous les risques",
      "Garantir une décision parfaite",
      "Remplacer toutes les données"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi faut-il mesurer une solution après sa mise en œuvre ?",
    options: [
      "Pour vérifier son efficacité",
      "Pour éviter toute amélioration",
      "Pour prouver que l'on avait raison",
      "Pour remplacer l'analyse"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel comportement favorise la pensée critique ?",
    options: [
      "Accepter immédiatement une affirmation",
      "Chercher les preuves et envisager d'autres explications",
      "Suivre l'opinion majoritaire",
      "Ignorer les informations contradictoires"
    ],
    correctAnswer: 1
  },
  {
    question: "Qu'est-ce que le biais de confirmation ?",
    options: [
      "La tendance à rechercher principalement les informations qui confirment nos croyances",
      "La capacité à changer d'avis rapidement",
      "Une méthode d'analyse statistique",
      "Une technique de brainstorming"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi faut-il distinguer un fait d'une hypothèse ?",
    options: [
      "Parce qu'une hypothèse doit encore être vérifiée",
      "Parce qu'un fait est toujours faux",
      "Parce qu'une hypothèse est toujours vraie",
      "Parce que les données ne sont jamais utiles"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle formulation est la plus adaptée à un plan d'action ?",
    options: [
      "Faire mieux",
      "Améliorer le système",
      "Réduire le délai moyen de réponse à moins de 12 heures avant vendredi",
      "Essayer d'être plus efficace"
    ],
    correctAnswer: 2
  },
  {
    question: "Quelle approche est préférable lorsqu'un problème apparaît dans une équipe ?",
    options: [
      "Chercher immédiatement un responsable",
      "Analyser les personnes, processus, outils et informations impliqués",
      "Ignorer le problème",
      "Changer toute l'équipe"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle est la meilleure définition du problem solving ?",
    options: [
      "Trouver une réponse rapide à chaque problème",
      "Une démarche structurée permettant de comprendre, analyser et résoudre un problème",
      "Éviter les problèmes",
      "Déléguer toutes les décisions"
    ],
    correctAnswer: 1
  }
];