import type { CourseDetail, ExamQuestion } from "../coursesData";

export const reussirEntretienCourse: CourseDetail = {
  slug: "reussir-un-entretien",
  categorySlug: "carriere",
  title: "Réussir son Entretien d'Embauche",
  description:
    "Apprenez à préparer et réussir un entretien d'embauche : présenter votre parcours, répondre aux questions fréquentes et comportementales, gérer les questions difficiles, présenter vos réalisations, négocier une rémunération et assurer un suivi professionnel après l'entretien.",
  level: "Débutant",
  icon: "🎤",

  modules: [
    {
      title: "Module 1: Comprendre l'entretien d'embauche",
      lessons: [
        {
          slug: "objectif-entretien-embauche",
          title: "1.1 Comprendre l'objectif d'un entretien",
          duration: "14 min",
          description:
            "Comprenez ce que le recruteur cherche réellement à évaluer pendant un entretien et comment vous préparer en conséquence.",
          objectives: [
            "Comprendre les objectifs d'un entretien d'embauche.",
            "Identifier les différents éléments évalués par un recruteur.",
            "Comprendre que l'entretien est aussi une opportunité pour le candidat.",
            "Éviter de considérer l'entretien comme un simple interrogatoire."
          ],
          content: [
            "## À quoi sert un entretien ?",
            "Un entretien permet à l'entreprise et au candidat d'aller au-delà du CV.",
            "Le recruteur cherche notamment à comprendre :",
            "- ce que vous avez réellement réalisé ;",
            "- comment vous raisonnez ;",
            "- comment vous communiquez ;",
            "- comment vous réagissez face à certaines situations ;",
            "- si vos compétences correspondent au poste ;",
            "- si vos attentes sont compatibles avec le rôle.",
            "",
            "## L'entretien fonctionne dans les deux sens",
            "Vous êtes également en train d'évaluer l'entreprise.",
            "Vous pouvez chercher à comprendre :",
            "- les responsabilités réelles du poste ;",
            "- l'équipe ;",
            "- les méthodes de travail ;",
            "- les objectifs ;",
            "- les possibilités d'évolution ;",
            "- les conditions de travail.",
            "",
            "## CV contre entretien",
            "Le CV indique ce que vous avez fait. L'entretien permet souvent de comprendre **comment** vous l'avez fait, **pourquoi** vous avez pris certaines décisions et **quel impact** votre travail a produit.",
            "",
            "## Une bonne préparation",
            "La préparation ne consiste pas à mémoriser des réponses mot pour mot.",
            "Elle consiste plutôt à préparer les informations et exemples dont vous aurez besoin pour répondre naturellement."
          ],
          examples: [
            "Un CV indique « gestion d'un projet ». Pendant l'entretien, le recruteur peut demander : « Quel était votre rôle ? », « Quelle difficulté avez-vous rencontrée ? » et « Quel a été le résultat ? ».",
            "Un candidat peut également utiliser l'entretien pour demander comment l'équipe mesure la réussite dans les six premiers mois."
          ],
          practice: [
            "Choisissez un poste et listez cinq choses que le recruteur voudra probablement comprendre sur votre profil.",
            "Écrivez cinq questions que vous aimeriez poser à l'entreprise."
          ],
          quiz: [
            {
              question:
                "Quel est l'un des objectifs principaux d'un entretien d'embauche ?",
              options: [
                "Faire réciter le CV au candidat",
                "Approfondir le parcours, les compétences et la manière de travailler du candidat",
                "Tester uniquement la mémoire",
                "Vérifier uniquement les diplômes"
              ],
              answer: 1,
              explanation:
                "L'entretien permet notamment d'approfondir les compétences, les expériences et la manière de travailler du candidat."
            }
          ]
        },

        {
          slug: "preparer-entretien-entreprise-poste",
          title: "1.2 Préparer l'entreprise et le poste",
          duration: "16 min",
          description:
            "Apprenez à analyser une entreprise et une offre d'emploi afin d'arriver à l'entretien avec une compréhension claire du contexte.",
          objectives: [
            "Analyser une offre d'emploi.",
            "Rechercher les informations importantes sur une entreprise.",
            "Identifier les besoins probables liés au poste.",
            "Relier son expérience aux besoins de l'entreprise."
          ],
          content: [
            "## Commencer par l'offre",
            "Relisez attentivement l'offre d'emploi.",
            "Identifiez :",
            "- les missions principales ;",
            "- les compétences demandées ;",
            "- les outils utilisés ;",
            "- le niveau d'expérience ;",
            "- les responsabilités ;",
            "- les objectifs éventuels.",
            "",
            "## Comprendre l'entreprise",
            "Avant l'entretien, renseignez-vous sur :",
            "- son activité ;",
            "- ses produits ou services ;",
            "- ses clients ;",
            "- son secteur ;",
            "- ses principaux marchés ;",
            "- ses actualités récentes lorsque cela est pertinent.",
            "",
            "## Le lien avec votre parcours",
            "Pour chaque compétence importante de l'offre, demandez-vous :",
            "« Quelle expérience me permet de démontrer cela ? »",
            "",
            "Vous devez arriver avec plusieurs exemples prêts, pas uniquement avec une liste de compétences.",
            "",
            "## Éviter la recherche superficielle",
            "Connaître uniquement le nom et le secteur de l'entreprise n'est généralement pas suffisant.",
            "Essayez de comprendre quel problème le poste doit aider à résoudre."
          ],
          examples: [
            "Pour un poste de développeur frontend, préparez un exemple de projet utilisant les technologies mentionnées dans l'offre.",
            "Pour un poste commercial, préparez des exemples liés à la prospection, à la relation client et à l'atteinte d'objectifs."
          ],
          practice: [
            "Prenez une offre d'emploi réelle.",
            "Listez les cinq besoins principaux du poste.",
            "Associez à chacun une expérience ou un exemple de votre parcours."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il étudier l'offre d'emploi avant l'entretien ?",
              options: [
                "Pour apprendre l'offre par cœur",
                "Pour comprendre les besoins du poste et préparer des exemples pertinents",
                "Pour éviter de préparer des questions",
                "Pour connaître uniquement le salaire"
              ],
              answer: 1,
              explanation:
                "L'offre permet de comprendre les attentes du poste et de sélectionner les expériences les plus pertinentes."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Le Pitch et la première impression",
      lessons: [
        {
          slug: "pitch-2-minutes",
          title: "2.1 Construire son Pitch de 2 Minutes",
          duration: "18 min",
          description:
            "Construisez une présentation claire et naturelle pour répondre efficacement à la question « Parlez-moi de vous ».",
          objectives: [
            "Construire une présentation professionnelle de 1 à 2 minutes.",
            "Sélectionner les informations pertinentes.",
            "Relier son parcours au poste visé.",
            "Éviter de réciter son CV."
          ],
          content: [
            "## La question « Parlez-moi de vous »",
            "Cette question est souvent utilisée pour commencer l'entretien.",
            "Elle ne signifie pas que vous devez raconter toute votre vie.",
            "",
            "## Une structure simple",
            "Vous pouvez organiser votre réponse en trois parties :",
            "1. **Qui je suis professionnellement.**",
            "2. **Ce que j'ai réalisé ou développé.**",
            "3. **Pourquoi ce poste m'intéresse aujourd'hui.**",
            "",
            "## Exemple",
            "« Je suis développeur web spécialisé dans les applications JavaScript. Au cours de mes dernières expériences et projets, j'ai principalement travaillé sur React, Node.js et des API. J'ai notamment participé à la refonte d'une application qui a permis d'améliorer son expérience utilisateur. Je souhaite aujourd'hui rejoindre une équipe où je pourrai continuer à développer des produits web tout en progressant sur des problématiques techniques plus complexes. »",
            "",
            "## Le pitch n'est pas un texte à réciter",
            "Préparez les idées principales plutôt que chaque mot.",
            "Cela permet de rester naturel et de répondre aux éventuelles relances."
          ],
          examples: [
            "Un candidat junior peut commencer par sa formation, présenter deux projets pertinents puis expliquer pourquoi il souhaite débuter dans ce domaine.",
            "Un candidat expérimenté peut commencer directement par son expertise, ses principales réalisations et le type de problème qu'il souhaite désormais résoudre."
          ],
          practice: [
            "Écrivez votre pitch en cinq lignes.",
            "Enregistrez-vous pendant deux minutes.",
            "Réécoutez l'enregistrement et supprimez les informations qui n'apportent rien au poste."
          ],
          quiz: [
            {
              question:
                "Quel est l'objectif principal d'un pitch professionnel ?",
              options: [
                "Raconter toute sa vie",
                "Présenter rapidement son profil et son lien avec le poste",
                "Réciter son CV mot pour mot",
                "Parler pendant dix minutes"
              ],
              answer: 1,
              explanation:
                "Le pitch doit positionner rapidement le candidat et expliquer pourquoi son parcours est pertinent pour le poste."
            }
          ]
        },

        {
          slug: "premiere-impression-entretien",
          title: "2.2 Réussir sa première impression",
          duration: "14 min",
          description:
            "Découvrez les éléments qui contribuent à une première impression professionnelle, en présentiel comme à distance.",
          objectives: [
            "Adopter une attitude professionnelle.",
            "Comprendre l'importance de la ponctualité.",
            "Utiliser une communication claire.",
            "Préparer correctement son environnement pour un entretien à distance."
          ],
          content: [
            "## Avant l'entretien",
            "Préparez :",
            "- l'adresse ou le lien de visioconférence ;",
            "- le matériel nécessaire ;",
            "- votre CV ;",
            "- un carnet ou document pour prendre des notes ;",
            "- les informations sur le poste.",
            "",
            "## La ponctualité",
            "Pour un entretien physique, prévoyez une marge suffisante pour les déplacements.",
            "Pour une visioconférence, connectez-vous suffisamment tôt pour vérifier votre matériel.",
            "",
            "## Communication",
            "Parlez clairement, écoutez jusqu'au bout et prenez quelques secondes pour réfléchir lorsque nécessaire.",
            "",
            "## Entretien à distance",
            "Vérifiez :",
            "- caméra ;",
            "- microphone ;",
            "- connexion ;",
            "- arrière-plan ;",
            "- éclairage ;",
            "- notifications.",
            "",
            "## L'objectif",
            "La première impression ne dépend pas d'un comportement théâtral. Elle repose surtout sur votre préparation, votre clarté et votre professionnalisme."
          ],
          examples: [
            "Un candidat se connecte dix minutes avant l'entretien, vérifie son microphone et garde son CV ouvert sur un second écran.",
            "Un candidat qui a un problème technique prévient rapidement le recruteur plutôt que de disparaître sans explication."
          ],
          practice: [
            "Faites une simulation de visioconférence.",
            "Testez votre caméra, votre microphone et votre environnement.",
            "Chronométrez le temps nécessaire pour vous installer avant l'entretien."
          ],
          quiz: [
            {
              question:
                "Que faut-il principalement rechercher dans une première impression professionnelle ?",
              options: [
                "Une attitude artificielle",
                "De la préparation, de la clarté et du professionnalisme",
                "Un discours extrêmement long",
                "Une réponse parfaite à toutes les questions"
              ],
              answer: 1,
              explanation:
                "Une bonne première impression repose notamment sur la préparation, la clarté et une attitude professionnelle."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Questions fréquentes",
      lessons: [
        {
          slug: "questions-frequentes-entretien",
          title: "3.1 Répondre aux questions classiques",
          duration: "18 min",
          description:
            "Préparez des réponses solides aux questions les plus fréquentes sans tomber dans la récitation.",
          objectives: [
            "Identifier les questions classiques.",
            "Structurer des réponses courtes et pertinentes.",
            "Éviter les réponses trop vagues.",
            "Préparer des exemples concrets."
          ],
          content: [
            "## Questions fréquentes",
            "Vous pouvez notamment rencontrer :",
            "- « Parlez-moi de vous. »",
            "- « Pourquoi souhaitez-vous rejoindre notre entreprise ? »",
            "- « Pourquoi ce poste vous intéresse-t-il ? »",
            "- « Quelles sont vos principales forces ? »",
            "- « Quel est votre principal axe d'amélioration ? »",
            "- « Pourquoi avez-vous quitté votre précédent poste ? »",
            "- « Où vous voyez-vous dans quelques années ? »",
            "",
            "## Une bonne réponse",
            "Une réponse efficace est généralement :",
            "- claire ;",
            "- concise ;",
            "- liée au poste ;",
            "- illustrée lorsque nécessaire ;",
            "- honnête.",
            "",
            "## Ne pas mémoriser mot pour mot",
            "Préparez des idées et des exemples.",
            "La conversation peut prendre une direction différente selon les questions du recruteur."
          ],
          examples: [
            "Question : « Pourquoi voulez-vous ce poste ? »",
            "Réponse faible : « Parce que votre entreprise est intéressante. »",
            "Réponse plus forte : « Le poste m'intéresse parce qu'il combine le développement frontend et le travail sur des produits utilisés par des clients réels. Mon expérience avec React et TypeScript correspond également aux technologies mentionnées dans l'offre. »"
          ],
          practice: [
            "Écrivez une réponse à cinq questions classiques.",
            "Pour chacune, ajoutez au moins un exemple provenant de votre parcours."
          ],
          quiz: [
            {
              question:
                "Quelle caractéristique décrit généralement une bonne réponse en entretien ?",
              options: [
                "Elle est la plus longue possible",
                "Elle est claire, pertinente et honnête",
                "Elle contient uniquement des qualités",
                "Elle est entièrement mémorisée"
              ],
              answer: 1,
              explanation:
                "Une bonne réponse doit répondre à la question de manière claire et pertinente sans exagération."
            }
          ]
        },

        {
          slug: "pourquoi-vous-et-pourquoi-nous",
          title: "3.2 Répondre à « Pourquoi vous ? » et « Pourquoi nous ? »",
          duration: "16 min",
          description:
            "Apprenez à démontrer votre adéquation avec le poste sans donner l'impression de réciter des compliments à l'entreprise.",
          objectives: [
            "Démontrer son adéquation avec le poste.",
            "Relier ses compétences aux besoins de l'entreprise.",
            "Expliquer sincèrement son intérêt.",
            "Éviter les réponses génériques."
          ],
          content: [
            "## « Pourquoi vous ? »",
            "La question cherche généralement à comprendre ce que vous pouvez apporter au poste.",
            "Construisez votre réponse autour de trois éléments :",
            "1. Une compétence importante.",
            "2. Une preuve issue de votre expérience.",
            "3. La valeur que cette compétence peut apporter au poste.",
            "",
            "## « Pourquoi nous ? »",
            "Évitez les compliments vagues.",
            "Parlez plutôt d'un élément concret : produit, mission, secteur, technologie, problème ou culture de travail.",
            "",
            "## La combinaison gagnante",
            "Le candidat doit montrer une cohérence entre :",
            "**ce que l'entreprise recherche + ce qu'il sait faire + ce qu'il souhaite développer.**"
          ],
          examples: [
            "« Votre offre recherche quelqu'un capable de structurer les campagnes SEO et d'analyser leurs performances. C'est justement un domaine dans lequel j'ai travaillé sur plusieurs projets, notamment l'analyse des mots-clés et le suivi des performances organiques. »"
          ],
          practice: [
            "Écrivez une réponse à « Pourquoi vous ? » en trois parties.",
            "Écrivez une réponse à « Pourquoi notre entreprise ? » basée sur deux informations concrètes."
          ],
          quiz: [
            {
              question:
                "Quelle est une bonne manière de répondre à « Pourquoi vous ? » ?",
              options: [
                "Dire simplement que vous êtes meilleur que les autres",
                "Relier une compétence, une preuve et la valeur apportée au poste",
                "Critiquer les autres candidats",
                "Dire uniquement que vous êtes motivé"
              ],
              answer: 1,
              explanation:
                "La réponse doit démontrer concrètement pourquoi votre profil correspond aux besoins du poste."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Questions difficiles et points faibles",
      lessons: [
        {
          slug: "parler-points-faibles",
          title: "4.1 Répondre à « Quel est votre point faible ? »",
          duration: "16 min",
          description:
            "Apprenez à parler d'un véritable axe d'amélioration de manière honnête, professionnelle et constructive.",
          objectives: [
            "Choisir un axe d'amélioration pertinent.",
            "Montrer sa capacité à progresser.",
            "Éviter les fausses faiblesses trop prévisibles.",
            "Présenter des actions concrètes."
          ],
          content: [
            "## Ne pas prétendre être parfait",
            "Répondre « Je n'ai aucun défaut » peut donner l'impression que vous manquez de recul.",
            "",
            "## Choisir un vrai axe d'amélioration",
            "L'objectif n'est pas de choisir une faiblesse qui vous rend totalement incompatible avec le poste.",
            "Choisissez plutôt un domaine réel sur lequel vous avez déjà commencé à progresser.",
            "",
            "## Une structure efficace",
            "1. Présenter l'axe d'amélioration.",
            "2. Donner brièvement le contexte.",
            "3. Expliquer ce que vous faites pour progresser.",
            "4. Montrer ce que vous avez déjà appris.",
            "",
            "## Exemple",
            "« J'avais tendance à passer trop de temps à perfectionner certains détails avant de partager une première version. J'ai commencé à travailler avec des points de contrôle plus fréquents afin d'obtenir du feedback plus tôt. Cela m'aide à mieux équilibrer qualité et vitesse. »",
            "",
            "## Éviter les clichés",
            "« Je suis trop perfectionniste » est souvent utilisé comme fausse faiblesse.",
            "Une réponse plus crédible explique une situation réelle et les actions prises."
          ],
          examples: [
            "Un développeur peut expliquer qu'il a travaillé sur sa capacité à demander du feedback plus tôt au lieu d'essayer de résoudre seul un problème pendant trop longtemps.",
            "Un manager débutant peut expliquer qu'il a dû apprendre à mieux déléguer au lieu de reprendre personnellement certaines tâches."
          ],
          practice: [
            "Identifiez un véritable axe d'amélioration.",
            "Écrivez trois actions concrètes que vous avez mises en place pour progresser.",
            "Entraînez-vous à répondre en moins de 90 secondes."
          ],
          quiz: [
            {
              question:
                "Quelle est une bonne manière de présenter un point faible ?",
              options: [
                "Dire qu'on n'a aucun défaut",
                "Choisir un axe réel et expliquer les actions mises en place pour progresser",
                "Accuser un ancien collègue",
                "Choisir une faiblesse totalement inventée"
              ],
              answer: 1,
              explanation:
                "Une bonne réponse montre de la lucidité et surtout une démarche concrète d'amélioration."
            }
          ]
        },

        {
          slug: "questions-difficiles-parcours",
          title: "4.2 Gérer les questions difficiles sur son parcours",
          duration: "17 min",
          description:
            "Préparez-vous aux questions concernant les changements de carrière, les périodes sans emploi, les échecs et les départs.",
          objectives: [
            "Répondre aux questions sensibles sans devenir défensif.",
            "Expliquer une période sans emploi.",
            "Présenter un départ professionnel de manière constructive.",
            "Parler d'un échec en montrant ce qui a été appris."
          ],
          content: [
            "## Les périodes sans emploi",
            "Une période sans emploi peut être expliquée simplement.",
            "Vous pouvez mentionner une recherche d'emploi, une formation, un projet personnel, des responsabilités familiales lorsque vous souhaitez les partager, ou toute autre activité pertinente.",
            "",
            "## Pourquoi avez-vous quitté votre entreprise ?",
            "Restez factuel et professionnel.",
            "Évitez de transformer l'entretien en règlement de comptes avec votre ancien employeur.",
            "",
            "## Parler d'un échec",
            "Utilisez une structure :",
            "1. Situation.",
            "2. Ce qui n'a pas fonctionné.",
            "3. Votre responsabilité.",
            "4. Ce que vous avez appris.",
            "5. Ce que vous faites différemment aujourd'hui.",
            "",
            "## L'honnêteté reste essentielle",
            "Une réponse professionnelle ne signifie pas cacher la réalité. Elle signifie présenter les faits avec recul et responsabilité."
          ],
          examples: [
            "« Le projet n'a pas atteint l'objectif prévu. Avec le recul, nous avions sous-estimé le temps nécessaire à l'intégration. J'ai depuis appris à mieux découper ce type de projet et à intégrer des marges dans la planification. »"
          ],
          practice: [
            "Préparez une réponse à une période difficile de votre parcours.",
            "Préparez un exemple d'échec et identifiez précisément ce que vous avez appris."
          ],
          quiz: [
            {
              question:
                "Comment présenter un échec professionnel ?",
              options: [
                "Accuser quelqu'un d'autre",
                "Prétendre que rien ne s'est passé",
                "Expliquer la situation, sa responsabilité, les apprentissages et les changements effectués",
                "Refuser toute question"
              ],
              answer: 2,
              explanation:
                "Une réponse mature montre que vous êtes capable d'analyser une difficulté et d'en tirer des enseignements."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Méthode STAR et questions comportementales",
      lessons: [
        {
          slug: "methode-star-entretien",
          title: "5.1 Répondre avec la méthode STAR",
          duration: "18 min",
          description:
            "Utilisez la méthode STAR pour répondre de manière structurée aux questions basées sur des situations professionnelles.",
          objectives: [
            "Comprendre les quatre étapes de STAR.",
            "Construire des réponses comportementales structurées.",
            "Mettre en évidence son rôle personnel.",
            "Présenter un résultat concret."
          ],
          content: [
            "## STAR",
            "**S - Situation :** décrivez brièvement le contexte.",
            "**T - Tâche :** expliquez votre responsabilité ou objectif.",
            "**A - Action :** détaillez ce que vous avez personnellement fait.",
            "**R - Résultat :** présentez le résultat et ce que vous avez appris.",
            "",
            "## Pourquoi cette méthode fonctionne",
            "Elle évite les réponses vagues et permet au recruteur de comprendre votre comportement dans une situation réelle.",
            "",
            "## Attention au « nous »",
            "Lorsque vous avez travaillé en équipe, expliquez le rôle collectif mais précisez votre contribution personnelle.",
            "",
            "Exemple faible :",
            "« Nous avons amélioré le projet. »",
            "",
            "Exemple plus précis :",
            "« L'équipe a identifié un problème de performance. De mon côté, j'ai analysé les requêtes les plus coûteuses et proposé une optimisation qui a réduit leur temps d'exécution. »"
          ],
          examples: [
            "Question : « Parlez-moi d'une situation où vous avez résolu un problème difficile. »",
            "Réponse : contexte du problème, responsabilité personnelle, actions effectuées, résultat obtenu et apprentissage."
          ],
          practice: [
            "Préparez cinq histoires STAR issues de votre parcours.",
            "Choisissez des histoires différentes : réussite, conflit, échec, leadership et résolution de problème."
          ],
          quiz: [
            {
              question:
                "Quelle partie de STAR décrit ce que vous avez personnellement fait ?",
              options: [
                "Situation",
                "Tâche",
                "Action",
                "Résultat"
              ],
              answer: 2,
              explanation:
                "La partie Action explique les actions concrètement réalisées par le candidat."
            }
          ]
        },

        {
          slug: "questions-comportementales",
          title: "5.2 Répondre aux questions comportementales",
          duration: "18 min",
          description:
            "Préparez des réponses aux questions portant sur le travail en équipe, les conflits, les erreurs, le leadership et la résolution de problèmes.",
          objectives: [
            "Identifier les compétences évaluées par une question comportementale.",
            "Choisir un exemple pertinent.",
            "Utiliser STAR sans donner une réponse trop longue.",
            "Montrer son raisonnement et son apprentissage."
          ],
          content: [
            "## Exemples de questions",
            "- « Parlez-moi d'un conflit avec un collègue. »",
            "- « Décrivez une situation où vous avez échoué. »",
            "- « Donnez un exemple où vous avez pris une initiative. »",
            "- « Parlez-moi d'une situation où vous avez dû travailler sous pression. »",
            "- « Décrivez un problème complexe que vous avez résolu. »",
            "",
            "## Ce que le recruteur cherche",
            "La question peut chercher à évaluer :",
            "- communication ;",
            "- résolution de problèmes ;",
            "- responsabilité ;",
            "- collaboration ;",
            "- leadership ;",
            "- adaptation.",
            "",
            "## Ne choisissez pas forcément l'histoire la plus spectaculaire",
            "Une situation simple mais bien expliquée est souvent plus convaincante qu'une histoire impressionnante mais vague."
          ],
          examples: [
            "Pour une question sur un conflit, choisissez une situation réelle dans laquelle vous avez écouté l'autre personne, clarifié le problème et trouvé une solution."
          ],
          practice: [
            "Préparez une histoire pour chacune des compétences suivantes : travail en équipe, leadership, conflit, échec et résolution de problème."
          ],
          quiz: [
            {
              question:
                "Que faut-il faire face à une question comportementale ?",
              options: [
                "Donner une réponse théorique uniquement",
                "Choisir une situation réelle et expliquer son rôle et ses actions",
                "Changer de sujet",
                "Donner une réponse d'une seule phrase sans contexte"
              ],
              answer: 1,
              explanation:
                "Les questions comportementales cherchent généralement des exemples concrets permettant d'évaluer votre manière d'agir."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Entretien technique et études de cas",
      lessons: [
        {
          slug: "preparer-entretien-technique",
          title: "6.1 Réussir un entretien technique",
          duration: "20 min",
          description:
            "Apprenez à préparer et gérer un entretien technique en expliquant votre raisonnement plutôt qu'en cherchant uniquement la bonne réponse.",
          objectives: [
            "Préparer les compétences techniques liées au poste.",
            "Expliquer son raisonnement à l'oral.",
            "Gérer une question dont on ne connaît pas la réponse.",
            "Éviter de bluffer."
          ],
          content: [
            "## Un entretien technique évalue plus que la mémoire",
            "Selon le métier, l'entretien peut inclure des questions techniques, un exercice pratique, une étude de cas ou une discussion autour de projets passés.",
            "",
            "## Préparer les fondamentaux",
            "Relisez :",
            "- les technologies de l'offre ;",
            "- les concepts fondamentaux du métier ;",
            "- vos propres projets ;",
            "- les décisions techniques que vous avez prises.",
            "",
            "## Expliquer son raisonnement",
            "Lorsque vous résolvez un problème, expliquez :",
            "1. Ce que vous avez compris.",
            "2. Les hypothèses que vous faites.",
            "3. Les options possibles.",
            "4. Votre choix.",
            "5. Les compromis.",
            "",
            "## Ne pas connaître une réponse",
            "Vous pouvez dire :",
            "« Je ne connais pas précisément la réponse, mais voici comment j'aborderais le problème pour la trouver. »",
            "",
            "Cette réponse est souvent plus professionnelle qu'une réponse inventée."
          ],
          examples: [
            "Un développeur reçoit une question sur une technologie qu'il n'a jamais utilisée. Il explique les concepts proches qu'il connaît et décrit comment il chercherait la documentation appropriée.",
            "Un analyste reçoit une étude de cas. Il commence par clarifier les données disponibles avant de proposer une conclusion."
          ],
          practice: [
            "Prenez cinq questions techniques de votre métier.",
            "Répondez oralement en expliquant votre raisonnement, pas seulement la réponse finale."
          ],
          quiz: [
            {
              question:
                "Que faire lorsqu'on ne connaît pas une réponse technique ?",
              options: [
                "Inventer une réponse",
                "Bluffer",
                "Reconnaître la limite et expliquer comment on chercherait ou raisonnerait",
                "Quitter immédiatement l'entretien"
              ],
              answer: 2,
              explanation:
                "Reconnaître honnêtement une limite tout en montrant une démarche de résolution est préférable au bluff."
            }
          ]
        },

        {
          slug: "etude-cas-entretien",
          title: "6.2 Résoudre une étude de cas",
          duration: "18 min",
          description:
            "Apprenez à structurer votre raisonnement lorsque le recruteur vous présente un problème professionnel à résoudre.",
          objectives: [
            "Clarifier un problème avant de proposer une solution.",
            "Décomposer un cas complexe.",
            "Formuler des hypothèses.",
            "Présenter une recommandation argumentée."
          ],
          content: [
            "## Ne sautez pas directement à la solution",
            "Commencez par clarifier le problème.",
            "",
            "Posez-vous les questions :",
            "- Quel est l'objectif ?",
            "- Quelles données sont disponibles ?",
            "- Quelles informations manquent ?",
            "- Quelles contraintes existent ?",
            "- Comment mesure-t-on la réussite ?",
            "",
            "## Décomposer",
            "Divisez le problème en sous-problèmes plus simples.",
            "",
            "## Formuler des hypothèses",
            "Lorsque certaines informations manquent, dites clairement quelles hypothèses vous utilisez.",
            "",
            "## Conclure",
            "Terminez par :",
            "- votre recommandation ;",
            "- les raisons principales ;",
            "- les risques ;",
            "- les prochaines étapes."
          ],
          examples: [
            "Une entreprise vous demande comment améliorer les ventes d'un produit. Vous commencez par demander si le problème concerne l'acquisition, la conversion, la fidélisation ou le prix avant de proposer une solution."
          ],
          practice: [
            "Prenez un problème professionnel et essayez de le décomposer en quatre sous-problèmes.",
            "Présentez ensuite votre recommandation en deux minutes."
          ],
          quiz: [
            {
              question:
                "Que faut-il généralement faire avant de proposer une solution à une étude de cas ?",
              options: [
                "Choisir immédiatement une solution",
                "Clarifier le problème et les contraintes",
                "Parler uniquement du budget",
                "Donner une réponse au hasard"
              ],
              answer: 1,
              explanation:
                "Comprendre précisément le problème évite de résoudre une mauvaise question."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Communication et comportement",
      lessons: [
        {
          slug: "communication-verbale-entretien",
          title: "7.1 Améliorer sa communication orale",
          duration: "15 min",
          description:
            "Apprenez à communiquer clairement, à structurer vos réponses et à éviter les réponses trop longues ou trop vagues.",
          objectives: [
            "Structurer ses réponses oralement.",
            "Utiliser un langage professionnel naturel.",
            "Éviter les réponses trop longues.",
            "Apprendre à prendre quelques secondes pour réfléchir."
          ],
          content: [
            "## La clarté avant la vitesse",
            "Vous n'avez pas besoin de répondre immédiatement à chaque question.",
            "Il est parfaitement acceptable de prendre quelques secondes pour organiser sa pensée.",
            "",
            "## Une structure simple",
            "Pour une réponse complexe :",
            "1. Répondez directement.",
            "2. Expliquez pourquoi.",
            "3. Donnez un exemple.",
            "4. Concluez.",
            "",
            "## Éviter les réponses trop longues",
            "Si vous racontez cinq minutes d'histoire avant de répondre à une question simple, le message principal risque de se perdre.",
            "",
            "## Demander une clarification",
            "Si une question est ambiguë, vous pouvez demander :",
            "« Lorsque vous parlez de cette situation, faites-vous référence à mon expérience dans mon précédent poste ou à un exemple de projet ? »"
          ],
          examples: [
            "Au lieu de répondre pendant cinq minutes à « Quelle est votre principale force ? », donnez la force, une preuve et une conclusion en environ une minute."
          ],
          practice: [
            "Répondez à dix questions en vous limitant à 60-90 secondes.",
            "Enregistrez vos réponses et identifiez les répétitions."
          ],
          quiz: [
            {
              question:
                "Est-il acceptable de prendre quelques secondes avant de répondre ?",
              options: [
                "Non, il faut toujours répondre immédiatement",
                "Oui, cela peut permettre de structurer une réponse plus claire",
                "Seulement pour les questions techniques",
                "Uniquement à distance"
              ],
              answer: 1,
              explanation:
                "Prendre brièvement le temps de réfléchir peut améliorer la précision et la clarté de la réponse."
            }
          ]
        },

        {
          slug: "ecoute-active-entretien",
          title: "7.2 Écouter activement le recruteur",
          duration: "14 min",
          description:
            "Découvrez pourquoi l'écoute est aussi importante que la qualité de vos réponses.",
          objectives: [
            "Écouter complètement une question.",
            "Identifier les informations importantes.",
            "Éviter d'interrompre inutilement.",
            "Utiliser les relances du recruteur."
          ],
          content: [
            "## Un entretien est une conversation",
            "Une erreur fréquente consiste à préparer tellement ses réponses que l'on n'écoute plus réellement la question.",
            "",
            "## L'écoute active",
            "Elle consiste notamment à :",
            "- écouter jusqu'au bout ;",
            "- reformuler lorsque nécessaire ;",
            "- poser une question de clarification ;",
            "- répondre précisément à ce qui est demandé.",
            "",
            "## Les relances sont utiles",
            "Si le recruteur demande « Pouvez-vous préciser ? », ne répétez pas simplement votre première réponse.",
            "Ajoutez un exemple, un contexte ou une explication.",
            "",
            "## Éviter la réponse automatique",
            "Une réponse préparée peut être utile, mais elle doit être adaptée à la question réelle."
          ],
          examples: [
            "Le recruteur demande : « Comment travaillez-vous en équipe ? » puis relance : « Pouvez-vous me donner un exemple ? ». Le candidat passe alors d'une explication générale à une situation réelle."
          ],
          practice: [
            "Faites une simulation avec un ami qui peut interrompre votre réponse avec des questions de suivi.",
            "Entraînez-vous à adapter votre réponse plutôt qu'à réciter un texte."
          ],
          quiz: [
            {
              question:
                "Pourquoi l'écoute active est-elle importante pendant un entretien ?",
              options: [
                "Pour éviter de répondre à la question",
                "Pour adapter sa réponse à ce que le recruteur cherche réellement à comprendre",
                "Pour parler moins",
                "Pour éviter les questions de suivi"
              ],
              answer: 1,
              explanation:
                "L'écoute permet de répondre précisément et d'utiliser les relances du recruteur pour apporter les informations pertinentes."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Salaire et négociation",
      lessons: [
        {
          slug: "parler-salaire-entretien",
          title: "8.1 Aborder la question du salaire",
          duration: "17 min",
          description:
            "Préparez-vous à parler de vos attentes salariales de manière professionnelle et réaliste.",
          objectives: [
            "Préparer une fourchette salariale.",
            "Comprendre les éléments qui composent une rémunération.",
            "Éviter de donner un chiffre sans préparation.",
            "Répondre professionnellement à la question des prétentions."
          ],
          content: [
            "## Préparer sa réponse",
            "Avant l'entretien, renseignez-vous sur les niveaux de rémunération correspondant au métier, au niveau d'expérience, au secteur et au marché concerné.",
            "",
            "## Penser en fourchette",
            "Une fourchette peut être plus utile qu'un chiffre unique lorsque les informations disponibles sont limitées.",
            "",
            "## La rémunération ne se limite pas au salaire",
            "Selon le poste, elle peut inclure :",
            "- salaire fixe ;",
            "- variable ;",
            "- bonus ;",
            "- avantages ;",
            "- assurance ;",
            "- congés ;",
            "- télétravail ;",
            "- formation ;",
            "- autres éléments contractuels.",
            "",
            "## Ne pas se sous-évaluer automatiquement",
            "Votre expérience, vos compétences, le niveau de responsabilité et la valeur du poste doivent être pris en compte.",
            "",
            "## Rester professionnel",
            "La négociation ne doit pas devenir un affrontement.",
            "Vous pouvez expliquer votre position et demander davantage d'informations sur le package global."
          ],
          examples: [
            "« Au regard de mon expérience et des responsabilités décrites, je recherche une rémunération située dans une fourchette de X à Y, tout en restant ouvert à discuter de l'ensemble du package. »"
          ],
          practice: [
            "Déterminez votre rémunération minimale acceptable.",
            "Déterminez votre fourchette cible.",
            "Préparez trois arguments professionnels justifiant votre position."
          ],
          quiz: [
            {
              question:
                "Pourquoi est-il utile de préparer une fourchette salariale avant l'entretien ?",
              options: [
                "Pour refuser toute négociation",
                "Pour connaître sa position et répondre de manière réfléchie",
                "Pour demander toujours le maximum",
                "Pour éviter toute discussion"
              ],
              answer: 1,
              explanation:
                "Une fourchette préparée permet de répondre avec davantage de clarté et de cohérence."
            }
          ]
        },

        {
          slug: "negocier-offre-emploi",
          title: "8.2 Négocier une offre d'emploi",
          duration: "18 min",
          description:
            "Apprenez à négocier une proposition en vous appuyant sur la valeur du poste, votre profil et l'ensemble des conditions proposées.",
          objectives: [
            "Évaluer une offre dans son ensemble.",
            "Préparer des arguments de négociation.",
            "Savoir quand négocier.",
            "Rester professionnel pendant la discussion."
          ],
          content: [
            "## Une négociation se prépare",
            "Avant de négocier, comprenez précisément ce qui est proposé.",
            "",
            "Comparez :",
            "- rémunération fixe ;",
            "- variable ;",
            "- avantages ;",
            "- responsabilités ;",
            "- horaires ;",
            "- localisation ;",
            "- télétravail ;",
            "- possibilités de formation et d'évolution.",
            "",
            "## Argumenter sur la valeur",
            "Un argument comme « J'ai besoin de plus d'argent » explique votre besoin mais pas nécessairement la valeur de votre candidature.",
            "Un argument plus professionnel relie votre expérience et les responsabilités du poste.",
            "",
            "## Tout n'est pas négociable",
            "Les possibilités dépendent de l'entreprise, du poste et de sa politique interne.",
            "",
            "## Savoir accepter ou refuser",
            "Si une offre ne correspond pas à vos attentes, demandez des clarifications et prenez le temps d'évaluer l'ensemble de la proposition."
          ],
          examples: [
            "« Je suis très intéressé par le poste. Compte tenu de mon expérience sur des projets similaires et du niveau de responsabilité prévu, serait-il possible d'envisager une rémunération plus proche de X ? »"
          ],
          practice: [
            "Prenez une offre fictive et listez les cinq éléments que vous voudriez évaluer avant d'accepter.",
            "Écrivez une phrase de négociation professionnelle."
          ],
          quiz: [
            {
              question:
                "Quel est un bon argument de négociation ?",
              options: [
                "« J'ai besoin de plus d'argent. »",
                "« Je mérite toujours plus que les autres. »",
                "Relier son expérience et les responsabilités du poste à sa demande",
                "Menacer de partir"
              ],
              answer: 2,
              explanation:
                "Une négociation professionnelle s'appuie notamment sur la valeur apportée, l'expérience et les responsabilités."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Questions à poser au recruteur",
      lessons: [
        {
          slug: "questions-a-poser-entretien",
          title: "9.1 Poser les bonnes questions",
          duration: "16 min",
          description:
            "Préparez des questions pertinentes qui vous permettent de mieux comprendre le poste tout en montrant votre intérêt.",
          objectives: [
            "Préparer des questions avant l'entretien.",
            "Comprendre les priorités du poste.",
            "Évaluer l'équipe et l'environnement de travail.",
            "Éviter les questions trop superficielles."
          ],
          content: [
            "## Pourquoi poser des questions ?",
            "La fin de l'entretien est une opportunité pour obtenir les informations que l'annonce ne fournit pas.",
            "",
            "## Questions sur le poste",
            "- Quelles seraient les priorités durant les trois premiers mois ?",
            "- Comment mesurez-vous la réussite dans ce poste ?",
            "- Quels sont les principaux défis actuellement ?",
            "",
            "## Questions sur l'équipe",
            "- Avec quelles équipes travaillerais-je principalement ?",
            "- Comment se déroule la collaboration au quotidien ?",
            "- Comment sont prises les décisions importantes ?",
            "",
            "## Questions sur l'évolution",
            "- Quelles possibilités d'apprentissage sont prévues ?",
            "- Comment se déroule le suivi des performances ?",
            "",
            "## Éviter les questions dont la réponse est évidente",
            "Une question dont la réponse se trouve directement sur la première page du site de l'entreprise peut donner l'impression que vous n'avez pas préparé l'entretien."
          ],
          examples: [
            "« Quels seraient les principaux résultats que vous aimeriez voir au bout de six mois ? »",
            "« Quelle est aujourd'hui la principale difficulté de l'équipe sur laquelle la personne recrutée devra travailler ? »"
          ],
          practice: [
            "Préparez huit questions.",
            "Classez-les en trois catégories : poste, équipe et évolution.",
            "Sélectionnez les trois meilleures pour votre prochain entretien."
          ],
          quiz: [
            {
              question:
                "Quelle question est particulièrement pertinente en fin d'entretien ?",
              options: [
                "« Quelle est votre couleur préférée ? »",
                "« Quels seraient les principaux objectifs durant les premiers mois ? »",
                "« À quelle heure puis-je partir ? »",
                "« Puis-je éviter toutes les réunions ? »"
              ],
              answer: 1,
              explanation:
                "Une question sur les objectifs permet de mieux comprendre les attentes réelles du poste."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Entretien à distance",
      lessons: [
        {
          slug: "reussir-entretien-visioconference",
          title: "10.1 Réussir un entretien en visioconférence",
          duration: "15 min",
          description:
            "Préparez votre environnement technique et votre communication pour réussir un entretien à distance.",
          objectives: [
            "Tester son matériel avant l'entretien.",
            "Préparer son environnement.",
            "Gérer les problèmes techniques.",
            "Maintenir une communication professionnelle à distance."
          ],
          content: [
            "## Avant l'appel",
            "Testez :",
            "- microphone ;",
            "- caméra ;",
            "- écouteurs ;",
            "- connexion ;",
            "- logiciel de visioconférence.",
            "",
            "## Préparer l'environnement",
            "Choisissez un endroit calme avec un éclairage suffisant.",
            "Évitez les notifications et les distractions.",
            "",
            "## Pendant l'entretien",
            "Regardez régulièrement la caméra tout en restant naturel.",
            "Écoutez attentivement et vérifiez que votre interlocuteur vous entend.",
            "",
            "## En cas de problème",
            "Si la connexion devient mauvaise, communiquez immédiatement.",
            "Vous pouvez proposer de couper la caméra temporairement ou de rejoindre l'appel avec un autre moyen si nécessaire.",
            "",
            "## Garder ses documents à portée de main",
            "Votre CV, l'offre d'emploi et quelques notes peuvent être utiles. Évitez toutefois de lire des réponses préparées mot pour mot."
          ],
          examples: [
            "Le candidat garde près de lui trois questions importantes et les principales réalisations qu'il souhaite évoquer, mais répond naturellement aux questions."
          ],
          practice: [
            "Faites une simulation de 20 minutes en visioconférence.",
            "Enregistrez la session et vérifiez votre voix, votre cadrage et vos distractions."
          ],
          quiz: [
            {
              question:
                "Que faut-il faire avant une visioconférence importante ?",
              options: [
                "Tester le matériel",
                "Attendre l'heure de l'entretien pour découvrir le logiciel",
                "Désactiver le microphone",
                "Ne préparer aucune information"
              ],
              answer: 0,
              explanation:
                "Tester le matériel avant l'entretien permet de réduire les problèmes techniques."
            }
          ]
        }
      ]
    },

    {
      title: "Module 11: Après l'entretien",
      lessons: [
        {
          slug: "faire-bilan-apres-entretien",
          title: "11.1 Faire le bilan de son entretien",
          duration: "13 min",
          description:
            "Apprenez à analyser votre entretien afin de progresser pour les prochaines candidatures.",
          objectives: [
            "Analyser ses réponses après un entretien.",
            "Identifier les questions difficiles.",
            "Conserver les informations utiles.",
            "Améliorer progressivement sa préparation."
          ],
          content: [
            "## Faire le bilan rapidement",
            "Après l'entretien, notez pendant que les informations sont encore fraîches :",
            "- les questions posées ;",
            "- vos bonnes réponses ;",
            "- les réponses que vous auriez pu améliorer ;",
            "- les informations obtenues sur le poste ;",
            "- les questions restées sans réponse.",
            "",
            "## Transformer une difficulté en préparation",
            "Si vous avez été bloqué sur une question technique, ajoutez-la à votre liste de révision.",
            "Si votre réponse à une question comportementale était trop longue, préparez une version plus structurée.",
            "",
            "## Ne pas surinterpréter",
            "Une question difficile ou une réaction neutre du recruteur ne permet pas forcément de connaître le résultat de l'entretien.",
            "Concentrez-vous sur ce que vous pouvez améliorer."
          ],
          examples: [
            "Après l'entretien, un candidat réalise qu'il a eu du mal à expliquer un projet. Il prépare une fiche STAR sur ce projet pour ses prochaines candidatures."
          ],
          practice: [
            "Après une simulation ou un vrai entretien, notez trois points positifs et trois points à améliorer.",
            "Transformez chaque difficulté en action de préparation."
          ],
          quiz: [
            {
              question:
                "Pourquoi faire un bilan après un entretien ?",
              options: [
                "Pour analyser ses performances et améliorer les prochains entretiens",
                "Pour deviner exactement la décision du recruteur",
                "Pour supprimer toutes ses expériences",
                "Pour éviter de préparer les prochains entretiens"
              ],
              answer: 0,
              explanation:
                "Le bilan permet de transformer l'expérience en apprentissage concret."
            }
          ]
        },

        {
          slug: "suivi-apres-entretien",
          title: "11.2 Assurer un suivi professionnel",
          duration: "13 min",
          description:
            "Découvrez comment rester professionnel après l'entretien et gérer la suite du processus de recrutement.",
          objectives: [
            "Comprendre l'intérêt d'un suivi professionnel.",
            "Éviter les relances excessives.",
            "Clarifier les prochaines étapes.",
            "Rester professionnel quel que soit le résultat."
          ],
          content: [
            "## Clarifier les prochaines étapes",
            "À la fin de l'entretien, vous pouvez demander :",
            "« Quelles sont les prochaines étapes du processus ? »",
            "",
            "## Le suivi",
            "Si un délai vous a été communiqué, laissez généralement passer ce délai avant de relancer, sauf indication contraire.",
            "",
            "## Une relance professionnelle",
            "Une relance doit être courte, polie et rappeler le contexte.",
            "",
            "## En cas de refus",
            "Un refus n'est pas nécessairement une évaluation définitive de votre valeur professionnelle.",
            "Lorsque cela est approprié, vous pouvez demander un retour constructif.",
            "",
            "## Continuer ses candidatures",
            "Évitez de suspendre toute votre recherche d'emploi uniquement parce qu'un entretien s'est bien passé."
          ],
          examples: [
            "« Bonjour, je me permets de revenir vers vous concernant notre entretien du 12 octobre pour le poste de développeur frontend. Je reste très intéressé par l'opportunité et souhaitais savoir si vous aviez des informations concernant la suite du processus. »"
          ],
          practice: [
            "Rédigez un modèle de relance professionnel.",
            "Préparez également une réponse courte et professionnelle à un refus."
          ],
          quiz: [
            {
              question:
                "Quelle est une bonne pratique après un entretien ?",
              options: [
                "Relancer plusieurs fois par jour",
                "Demander les prochaines étapes et effectuer une relance raisonnable si nécessaire",
                "Envoyer immédiatement plusieurs messages",
                "Ne plus jamais communiquer"
              ],
              answer: 1,
              explanation:
                "Un suivi professionnel doit être respectueux du processus et du délai communiqué."
            }
          ]
        }
      ]
    },

    {
      title: "Module 12: Projet final - Simulation d'entretien",
      lessons: [
        {
          slug: "simulation-complete-entretien",
          title: "12.1 Simulation complète d'un entretien",
          duration: "30 min",
          description:
            "Mettez en pratique toutes les compétences du cours à travers une simulation complète d'entretien d'embauche.",
          objectives: [
            "Préparer un entretien de A à Z.",
            "Présenter un pitch professionnel.",
            "Répondre aux questions classiques et comportementales.",
            "Gérer une question difficile.",
            "Poser des questions pertinentes.",
            "Présenter ses attentes salariales avec professionnalisme."
          ],
          content: [
            "## Étape 1 : choisir une offre",
            "Choisissez une offre d'emploi réelle correspondant à votre profil.",
            "",
            "## Étape 2 : préparer votre dossier",
            "Préparez :",
            "- votre CV ;",
            "- l'offre d'emploi ;",
            "- votre pitch ;",
            "- cinq histoires STAR ;",
            "- vos compétences principales ;",
            "- trois questions à poser ;",
            "- votre fourchette salariale.",
            "",
            "## Étape 3 : simulation",
            "L'entretien peut suivre cette structure :",
            "1. Présentation.",
            "2. Parcours.",
            "3. Motivation.",
            "4. Questions comportementales.",
            "5. Questions techniques ou métier.",
            "6. Question difficile.",
            "7. Salaire et disponibilité.",
            "8. Questions du candidat.",
            "",
            "## Étape 4 : évaluation",
            "Évaluez-vous sur cinq critères :",
            "- clarté ;",
            "- pertinence ;",
            "- exemples concrets ;",
            "- écoute ;",
            "- confiance et professionnalisme.",
            "",
            "## Étape 5 : amélioration",
            "Identifiez vos trois principales faiblesses.",
            "Pour chacune, définissez une action concrète.",
            "",
            "## Objectif final",
            "Vous ne cherchez pas à donner des réponses parfaites.",
            "Vous cherchez à devenir capable de présenter clairement votre valeur, d'illustrer vos compétences avec des exemples et d'avoir une conversation professionnelle avec le recruteur."
          ],
          examples: [
            "Simulation : le recruteur demande « Parlez-moi de vous », puis « Pourquoi notre entreprise ? », « Parlez-moi d'un échec », « Comment gérez-vous un conflit ? », « Quel salaire recherchez-vous ? » et termine par « Avez-vous des questions ? »."
          ],
          practice: [
            "Réalisez une simulation complète d'au moins 25 minutes.",
            "Enregistrez-vous si possible.",
            "Notez les cinq questions auxquelles vous avez eu le plus de difficulté à répondre.",
            "Préparez une nouvelle version de vos réponses.",
            "Réalisez une seconde simulation quelques jours plus tard."
          ],
          quiz: [
            {
              question:
                "Quel est l'objectif principal de la simulation finale ?",
              options: [
                "Mémoriser toutes les réponses possibles",
                "Pratiquer la présentation, le raisonnement et la communication dans une situation proche du réel",
                "Apprendre à éviter toutes les questions",
                "Parler le plus longtemps possible"
              ],
              answer: 1,
              explanation:
                "La simulation permet de transformer les connaissances du cours en comportement concret."
            },
            {
              question:
                "Quel élément faut-il préparer avant une simulation complète ?",
              options: [
                "Uniquement son nom",
                "Le pitch, des exemples STAR, des questions et les informations sur le poste",
                "Uniquement le salaire",
                "Aucune information"
              ],
              answer: 1,
              explanation:
                "Une bonne simulation reproduit plusieurs dimensions d'un véritable entretien."
            }
          ]
        }
      ]
    }
  ]
};

export const reussirEntretienExamQuestions: ExamQuestion[] = [
  {
    question:
      "Quel est l'objectif principal d'un entretien d'embauche ?",
    options: [
      "Faire réciter le CV",
      "Approfondir le parcours, les compétences et la manière de travailler",
      "Tester uniquement la mémoire",
      "Vérifier uniquement les diplômes"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle structure est adaptée à un pitch professionnel de 1 à 2 minutes ?",
    options: [
      "Toute sa biographie",
      "Qui je suis, ce que j'ai réalisé, pourquoi ce poste",
      "Uniquement ses diplômes",
      "Uniquement ses loisirs"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi faut-il étudier l'offre d'emploi avant un entretien ?",
    options: [
      "Pour apprendre l'annonce par cœur",
      "Pour comprendre les besoins du poste et préparer des exemples pertinents",
      "Pour éviter les questions",
      "Pour connaître uniquement le salaire"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle est une bonne manière de répondre à « Pourquoi vous ? » ?",
    options: [
      "Dire que vous êtes meilleur que les autres",
      "Relier une compétence, une preuve et la valeur apportée au poste",
      "Critiquer les autres candidats",
      "Dire uniquement que vous êtes motivé"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle est une bonne approche pour répondre à une question sur un point faible ?",
    options: [
      "Dire qu'on n'a aucun défaut",
      "Présenter un véritable axe d'amélioration et les actions mises en place",
      "Accuser un ancien collègue",
      "Inventer une faiblesse"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que représente le A dans la méthode STAR ?",
    options: [
      "Analyse",
      "Action",
      "Ambition",
      "Adaptation"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que représente le R dans la méthode STAR ?",
    options: [
      "Ressource",
      "Réponse",
      "Résultat",
      "Recherche"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Pourquoi utiliser la méthode STAR ?",
    options: [
      "Pour raconter une histoire sans lien avec le poste",
      "Pour structurer une réponse basée sur une situation réelle",
      "Pour éviter de donner des exemples",
      "Pour parler plus longtemps"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que faut-il faire lorsqu'on ne connaît pas une réponse technique ?",
    options: [
      "Inventer une réponse",
      "Bluffer",
      "Reconnaître la limite et expliquer comment on chercherait ou raisonnerait",
      "Quitter l'entretien"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Que faut-il généralement faire avant de résoudre une étude de cas ?",
    options: [
      "Proposer immédiatement une solution",
      "Clarifier le problème, les objectifs et les contraintes",
      "Choisir un chiffre au hasard",
      "Parler uniquement du budget"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi est-il acceptable de prendre quelques secondes avant de répondre ?",
    options: [
      "Pour éviter toutes les questions",
      "Pour structurer une réponse plus claire",
      "Parce que les recruteurs ne veulent pas entendre de réponse",
      "Uniquement pendant les entretiens techniques"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi l'écoute active est-elle importante ?",
    options: [
      "Pour éviter de répondre",
      "Pour adapter sa réponse à la question réelle du recruteur",
      "Pour parler moins",
      "Pour éviter les relances"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle est une bonne question à poser en fin d'entretien ?",
    options: [
      "Quelle est votre couleur préférée ?",
      "Quels seraient les principaux objectifs durant les premiers mois ?",
      "Puis-je éviter toutes les réunions ?",
      "Quand puis-je prendre mes vacances ?"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi préparer une fourchette salariale ?",
    options: [
      "Pour refuser toute négociation",
      "Pour connaître sa position et répondre de manière réfléchie",
      "Pour demander systématiquement le maximum",
      "Pour éviter toute discussion"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel est un bon argument lors d'une négociation salariale ?",
    options: [
      "« J'ai besoin de plus d'argent. »",
      "« Je mérite toujours plus que les autres. »",
      "Relier son expérience et les responsabilités du poste à sa demande",
      "Menacer de refuser immédiatement"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Que faut-il vérifier avant un entretien en visioconférence ?",
    options: [
      "Uniquement son apparence",
      "Le microphone, la caméra, la connexion et l'environnement",
      "Uniquement le salaire",
      "Rien"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que faire après un entretien pour progresser ?",
    options: [
      "Ne plus y penser",
      "Analyser les questions, les bonnes réponses et les points à améliorer",
      "Supprimer son CV",
      "Attendre plusieurs mois"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle est une bonne pratique après un entretien ?",
    options: [
      "Relancer plusieurs fois par jour",
      "Demander les prochaines étapes et effectuer une relance raisonnable si nécessaire",
      "Envoyer plusieurs messages immédiatement",
      "Ne plus jamais contacter l'entreprise"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Comment présenter un échec professionnel ?",
    options: [
      "Accuser quelqu'un d'autre",
      "Prétendre que l'échec n'existe pas",
      "Expliquer la situation, sa responsabilité, les apprentissages et les changements effectués",
      "Refuser de répondre"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Que doit montrer une bonne réponse à une question comportementale ?",
    options: [
      "Uniquement une opinion",
      "Une situation réelle, les actions du candidat et le résultat",
      "Une réponse très générale",
      "Une liste de qualités"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi faut-il éviter de mémoriser toutes ses réponses mot pour mot ?",
    options: [
      "Parce qu'il est impossible de préparer un entretien",
      "Parce que l'entretien peut prendre des directions différentes et nécessite de l'adaptation",
      "Parce que les recruteurs refusent les candidats préparés",
      "Parce que les réponses ne sont jamais importantes"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel est l'objectif d'une bonne question sur le poste ?",
    options: [
      "Montrer que l'on veut éviter le travail",
      "Comprendre les responsabilités, objectifs et défis du poste",
      "Obtenir immédiatement une augmentation",
      "Changer le sujet"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que faire si une question du recruteur est ambiguë ?",
    options: [
      "Répondre au hasard",
      "Demander une clarification",
      "Refuser de répondre",
      "Changer de sujet"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel comportement est généralement préférable pendant un entretien ?",
    options: [
      "Interrompre systématiquement",
      "Écouter, réfléchir et répondre clairement",
      "Lire toutes ses réponses",
      "Parler sans laisser le recruteur intervenir"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel est le meilleur objectif d'une simulation d'entretien ?",
    options: [
      "Mémoriser toutes les réponses possibles",
      "Pratiquer la communication et le raisonnement dans une situation proche du réel",
      "Éviter les questions",
      "Parler le plus longtemps possible"
    ],
    correctAnswer: 1
  }
];