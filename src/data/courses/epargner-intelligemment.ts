import type { CourseDetail, ExamQuestion } from "../coursesData";

export const epargnerIntelligemmentCourse: CourseDetail = {
  slug: "epargner-intelligemment",
  categorySlug: "finance",
  title: "Épargner Intelligemment & Construire son Fonds de Sécurité",
  description:
    "Apprenez à épargner régulièrement, constituer une réserve de sécurité, définir vos objectifs financiers, comprendre les intérêts composés et protéger progressivement votre pouvoir d'achat.",
  level: "Débutant",
  icon: "🏦",

  modules: [
    {
      title: "Module 1: Comprendre l'Épargne",
      lessons: [
        {
          slug: "pourquoi-epargner",
          title: "1.1 Pourquoi Épargner ?",
          duration: "15 min",
          description:
            "Découvrez les différentes raisons d'épargner et la différence entre épargne de précaution, épargne de projet et investissement.",
          objectives: [
            "Comprendre les principaux objectifs de l'épargne.",
            "Distinguer épargne de précaution, épargne de projet et investissement.",
            "Comprendre pourquoi l'épargne réduit la dépendance au crédit.",
            "Définir une première priorité d'épargne."
          ],
          content: [
            "## Qu'est-ce que l'épargne ?",
            "Épargner consiste à ne pas consommer immédiatement une partie de ses revenus afin de la conserver pour un besoin ou un objectif futur.",
            "",
            "L'épargne peut avoir plusieurs fonctions :",
            "- faire face aux imprévus ;",
            "- préparer une dépense importante ;",
            "- financer un projet ;",
            "- préparer le long terme ;",
            "- créer une marge de sécurité.",
            "",
            "## Épargne de précaution",
            "Elle sert à faire face à certains événements difficiles à prévoir : réparation importante, période sans revenu, dépense urgente ou autre situation financière exceptionnelle.",
            "",
            "## Épargne de projet",
            "Elle correspond à un objectif connu à l'avance : formation, voyage, ordinateur, déménagement, véhicule ou création d'une activité.",
            "",
            "## Épargne à long terme",
            "Elle peut être destinée à des objectifs qui se situent sur plusieurs années. Selon l'horizon et la tolérance au risque, une partie de cette épargne peut éventuellement être investie.",
            "",
            "## Épargne et investissement ne sont pas synonymes",
            "L'épargne vise généralement la disponibilité et la sécurité du capital. L'investissement cherche généralement un rendement potentiel et implique un niveau de risque qui dépend du placement.",
            "",
            "Il est donc important de ne pas investir de l'argent dont on pourrait avoir besoin à court terme sans comprendre les risques associés."
          ],
          examples: [
            "Une personne met 100 € de côté chaque mois pour constituer une réserve destinée aux imprévus.",
            "Une autre économise 80 € par mois pendant 10 mois pour financer une formation de 800 €.",
            "Une personne ayant déjà une réserve de sécurité peut consacrer une partie de son épargne à des objectifs de long terme après avoir évalué les risques."
          ],
          practice: [
            "Listez trois raisons pour lesquelles vous souhaitez épargner.",
            "Classez chaque objectif comme précaution, projet ou long terme.",
            "Choisissez l'objectif qui doit être prioritaire."
          ],
          quiz: [
            {
              question: "Quel est l'objectif principal d'une épargne de précaution ?",
              options: [
                "Faire face à certains imprévus financiers",
                "Financer uniquement les vacances",
                "Garantir un rendement élevé",
                "Acheter systématiquement des actions"
              ],
              answer: 0,
              explanation:
                "L'épargne de précaution sert principalement à absorber certains imprévus ou périodes financières difficiles."
            },
            {
              question: "Quelle affirmation est correcte ?",
              options: [
                "L'épargne et l'investissement ont des objectifs et des niveaux de risque différents",
                "L'épargne est toujours un investissement risqué",
                "L'investissement garantit toujours le capital",
                "L'épargne doit toujours être investie"
              ],
              answer: 0,
              explanation:
                "L'épargne privilégie généralement la disponibilité et la sécurité, tandis que l'investissement recherche un rendement potentiel avec des risques variables."
            }
          ]
        },

        {
          slug: "definir-objectifs-epargne",
          title: "1.2 Définir des Objectifs d'Épargne",
          duration: "14 min",
          description:
            "Transformez une intention vague en objectif d'épargne mesurable et réaliste.",
          objectives: [
            "Définir un objectif financier précis.",
            "Calculer le montant mensuel nécessaire.",
            "Fixer une échéance réaliste.",
            "Prioriser plusieurs objectifs."
          ],
          content: [
            "## 'Je veux économiser' n'est pas un plan",
            "Un objectif d'épargne devient beaucoup plus facile à suivre lorsqu'il indique un montant, une échéance et une raison.",
            "",
            "Par exemple :",
            "```text\nObjectif : économiser 1 200 € en 12 mois\n\n1 200 / 12 = 100 € par mois\n```",
            "",
            "## Les trois questions essentielles",
            "1. Combien dois-je économiser ?",
            "2. Pour quelle date ?",
            "3. Combien puis-je mettre de côté régulièrement ?",
            "",
            "## Si l'objectif est trop ambitieux",
            "Vous pouvez modifier le montant, prolonger l'échéance, réduire certaines dépenses ou chercher à augmenter les revenus.",
            "",
            "L'objectif est de construire un plan soutenable plutôt que de fixer un montant impossible à maintenir."
          ],
          examples: [
            "Objectif vague : 'Je veux avoir plus d'épargne.'",
            "Objectif concret : 'Je veux économiser 600 € en six mois pour financer une formation.'",
            "Objectif mensuel : 600 / 6 = 100 € par mois."
          ],
          practice: [
            "Choisissez un objectif d'épargne.",
            "Indiquez le montant total.",
            "Fixez une date cible.",
            "Calculez le montant mensuel nécessaire."
          ],
          quiz: [
            {
              question:
                "Quelle information est essentielle pour transformer un objectif d'épargne en plan ?",
              options: [
                "Un montant et une échéance",
                "Un slogan motivant",
                "Une carte bancaire supplémentaire",
                "Un objectif sans date"
              ],
              answer: 0,
              explanation:
                "Le montant et l'échéance permettent de calculer l'effort d'épargne nécessaire."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Construire son Fonds de Sécurité",
      lessons: [
        {
          slug: "comprendre-fonds-urgence",
          title: "2.1 Le Fonds d'Urgence : À Quoi Sert-il ?",
          duration: "16 min",
          description:
            "Comprenez le rôle d'une réserve de sécurité et comment elle peut réduire votre dépendance au crédit.",
          objectives: [
            "Comprendre le rôle d'un fonds d'urgence.",
            "Identifier les situations pouvant justifier son utilisation.",
            "Distinguer urgence réelle et dépense prévisible.",
            "Définir un premier objectif de réserve."
          ],
          content: [
            "## Le principe",
            "Un fonds d'urgence est une réserve financière destinée à absorber certains événements imprévus ou une baisse temporaire des ressources.",
            "",
            "Il peut notamment être utile en cas de :",
            "- perte ou interruption de revenus ;",
            "- réparation importante ;",
            "- dépense urgente ;",
            "- événement familial exceptionnel ;",
            "- période de transition professionnelle.",
            "",
            "## Ce n'est pas un compte de loisirs",
            "Une réserve d'urgence doit rester disponible pour les situations réellement importantes.",
            "",
            "## Imprévu ou dépense prévisible ?",
            "Une réparation exceptionnelle peut être difficile à prévoir. En revanche, les frais scolaires annuels, assurances annuelles ou entretiens réguliers peuvent être anticipés et intégrés à une provision budgétaire.",
            "",
            "Cette distinction évite d'utiliser le fonds d'urgence pour toutes les dépenses qui n'ont simplement pas été planifiées."
          ],
          examples: [
            "Une panne importante du véhicule peut justifier l'utilisation d'une réserve si elle était difficile à prévoir et nécessaire.",
            "Une facture annuelle connue depuis plusieurs mois devrait idéalement être préparée avec une provision plutôt qu'avec le fonds d'urgence."
          ],
          practice: [
            "Listez cinq situations qui pourraient nécessiter votre fonds d'urgence.",
            "Listez ensuite cinq dépenses prévisibles qui devraient plutôt être intégrées au budget.",
            "Définissez une première cible de réserve."
          ],
          quiz: [
            {
              question:
                "Quelle situation peut généralement justifier l'utilisation d'un fonds d'urgence ?",
              options: [
                "Une dépense importante et difficile à prévoir",
                "Un abonnement de streaming oublié",
                "Une sortie au restaurant prévue",
                "Un achat impulsif"
              ],
              answer: 0,
              explanation:
                "Le fonds d'urgence est destiné principalement aux événements importants et difficiles à anticiper."
            }
          ]
        },

        {
          slug: "calculer-fonds-securite",
          title: "2.2 Combien Faut-il Épargner pour les Urgences ?",
          duration: "17 min",
          description:
            "Apprenez à estimer une réserve de sécurité à partir de vos dépenses essentielles et de votre stabilité financière.",
          objectives: [
            "Calculer ses dépenses essentielles mensuelles.",
            "Comprendre le repère de trois à six mois.",
            "Adapter la taille du fonds à sa situation.",
            "Construire progressivement une réserve."
          ],
          content: [
            "## Le repère des trois à six mois",
            "On entend souvent qu'un fonds d'urgence devrait représenter trois à six mois de dépenses essentielles. Il s'agit d'un repère, pas d'une règle universelle.",
            "",
            "Le montant pertinent dépend notamment :",
            "- de la stabilité des revenus ;",
            "- du type d'emploi ou d'activité ;",
            "- des personnes à charge ;",
            "- des protections disponibles ;",
            "- du niveau de dépenses essentielles ;",
            "- de la facilité à retrouver un revenu.",
            "",
            "## Calcul simple",
            "Si vos dépenses essentielles sont de 800 € par mois :",
            "```text\n3 mois = 800 × 3 = 2 400 €\n6 mois = 800 × 6 = 4 800 €\n```",
            "",
            "Cela donne une fourchette de réflexion, pas une obligation.",
            "",
            "## Commencer petit",
            "Si vous n'avez aucune réserve, viser immédiatement plusieurs mois de dépenses peut sembler impossible.",
            "",
            "Vous pouvez commencer par un premier objectif plus accessible, puis augmenter progressivement la réserve."
          ],
          examples: [
            "Dépenses essentielles : 700 € par mois. Repère de trois mois : 2 100 €. Repère de six mois : 4 200 €.",
            "Une personne ayant des revenus très variables peut choisir une réserve plus importante si sa situation le justifie."
          ],
          practice: [
            "Calculez vos dépenses essentielles mensuelles.",
            "Calculez l'équivalent de trois mois.",
            "Calculez l'équivalent de six mois.",
            "Choisissez une première cible adaptée à votre situation."
          ],
          quiz: [
            {
              question:
                "Le repère de trois à six mois de dépenses doit-il être considéré comme une règle universelle ?",
              options: [
                "Non, il doit être adapté à la situation de chacun",
                "Oui, sans aucune exception",
                "Oui, exactement six mois pour tout le monde",
                "Non, car un fonds d'urgence est inutile"
              ],
              answer: 0,
              explanation:
                "Trois à six mois est un repère courant, mais le niveau approprié dépend de la situation personnelle."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Épargner Régulièrement",
      lessons: [
        {
          slug: "epargne-automatique",
          title: "3.1 Automatiser son Épargne",
          duration: "15 min",
          description:
            "Mettez en place un système simple pour épargner régulièrement sans dépendre uniquement de votre motivation.",
          objectives: [
            "Comprendre le principe du paiement de soi-même en premier.",
            "Programmer un virement automatique.",
            "Choisir un montant d'épargne réaliste.",
            "Éviter de mettre en place une automatisation impossible à maintenir."
          ],
          content: [
            "## Pourquoi automatiser ?",
            "Une bonne habitude devient plus facile lorsqu'elle nécessite moins de décisions.",
            "",
            "Au lieu d'attendre la fin du mois pour voir ce qu'il reste, vous pouvez prévoir votre épargne dès le début du cycle budgétaire.",
            "",
            "## Exemple",
            "Revenu mensuel : 1 500 €.",
            "Épargne prévue : 150 €.",
            "",
            "Un virement automatique de 150 € peut être programmé vers une enveloppe d'épargne après la réception du revenu.",
            "",
            "## Le montant doit rester réaliste",
            "Si vous automatisez 500 € alors que votre budget ne permet réellement que 150 €, vous risquez de devoir reprendre l'argent quelques jours plus tard.",
            "",
            "Une automatisation efficace doit être compatible avec votre budget réel."
          ],
          examples: [
            "Une personne commence avec 50 € par mois puis augmente progressivement à 75 € et 100 € lorsque son budget le permet.",
            "Une personne ayant des revenus variables peut choisir un montant minimum fixe et ajouter une partie des revenus exceptionnels lorsqu'ils surviennent."
          ],
          practice: [
            "Déterminez un montant mensuel réaliste.",
            "Choisissez une date d'épargne.",
            "Définissez l'objectif auquel cette épargne est destinée.",
            "Vérifiez après deux ou trois mois si le montant reste soutenable."
          ],
          quiz: [
            {
              question:
                "Quel est l'intérêt principal de l'épargne automatique ?",
              options: [
                "Rendre l'épargne plus régulière et réduire les décisions répétitives",
                "Garantir un rendement",
                "Augmenter automatiquement son salaire",
                "Supprimer toutes les dépenses"
              ],
              answer: 0,
              explanation:
                "L'automatisation facilite la régularité de l'épargne, mais elle ne garantit aucun rendement."
            }
          ]
        },

        {
          slug: "epargner-avec-revenus-variables",
          title: "3.2 Épargner avec des Revenus Variables",
          duration: "16 min",
          description:
            "Adaptez votre stratégie lorsque vos revenus changent d'un mois à l'autre.",
          objectives: [
            "Comprendre les difficultés liées aux revenus variables.",
            "Définir une épargne minimale.",
            "Utiliser les mois favorables pour renforcer la réserve.",
            "Éviter de baser ses dépenses fixes sur un revenu exceptionnel."
          ],
          content: [
            "## Le problème des revenus variables",
            "Un freelance, un entrepreneur ou un salarié avec des commissions peut recevoir des montants différents chaque mois.",
            "",
            "Une stratégie possible consiste à séparer :",
            "- les dépenses essentielles ;",
            "- l'épargne minimale ;",
            "- l'épargne supplémentaire lorsque les revenus sont meilleurs.",
            "",
            "## Le principe du mois favorable",
            "Lorsqu'un mois produit un revenu supérieur aux prévisions, une partie du surplus peut être affectée à la réserve plutôt qu'aux dépenses permanentes.",
            "",
            "Cela permet de construire une protection pour les mois plus faibles."
          ],
          examples: [
            "Revenu faible : 900 €. Épargne minimale : 50 €.",
            "Revenu normal : 1 200 €. Épargne : 100 €.",
            "Revenu exceptionnel : 1 800 €. Une partie du surplus peut renforcer le fonds d'urgence."
          ],
          practice: [
            "Analysez vos revenus des six derniers mois.",
            "Identifiez votre revenu moyen et votre mois le plus faible.",
            "Définissez une épargne minimale compatible avec les mois faibles."
          ],
          quiz: [
            {
              question:
                "Que peut faire une personne ayant des revenus variables pendant un mois exceptionnellement favorable ?",
              options: [
                "Affecter une partie du surplus à son épargne ou à ses objectifs",
                "Augmenter automatiquement toutes ses dépenses fixes",
                "Considérer ce revenu comme garanti pour toujours",
                "Arrêter complètement d'épargner"
              ],
              answer: 0,
              explanation:
                "Les mois favorables peuvent être utilisés pour renforcer la sécurité financière sans transformer un revenu exceptionnel en dépense permanente."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Comprendre les Intérêts",
      lessons: [
        {
          slug: "interets-simples",
          title: "4.1 Intérêts Simples & Rendement",
          duration: "15 min",
          description:
            "Comprenez comment un capital peut produire des intérêts et découvrez la différence entre intérêts simples et composés.",
          objectives: [
            "Comprendre le principe d'un intérêt.",
            "Calculer un intérêt simple.",
            "Comprendre le rôle du taux et du capital.",
            "Identifier les limites d'un calcul théorique."
          ],
          content: [
            "## Qu'est-ce qu'un intérêt ?",
            "Un intérêt représente généralement une rémunération liée à l'utilisation ou au placement d'un capital, selon le produit financier concerné.",
            "",
            "Dans un exemple théorique à intérêts simples :",
            "```text\nIntérêt = Capital × Taux × Durée\n```",
            "",
            "Exemple :",
            "1 000 € placés à 5 % pendant un an donnent théoriquement 50 € d'intérêt avant éventuels frais et taxes.",
            "",
            "## Attention aux taux annoncés",
            "Un taux affiché ne suffit pas à connaître le résultat final. Il faut également considérer la durée, la fréquence de capitalisation, les frais, les taxes éventuelles et les conditions du produit.",
            "",
            "Les rendements futurs d'un investissement ne sont pas garantis simplement parce qu'un taux historique a été observé."
          ],
          examples: [
            "Capital : 1 000 €. Taux théorique : 5 %. Intérêt simple sur un an : 50 €.",
            "Sur plusieurs années, un calcul réel peut différer selon la capitalisation et les conditions du produit."
          ],
          practice: [
            "Calculez l'intérêt simple théorique de 2 000 € à 4 % pendant un an.",
            "Refaites le calcul pour deux ans.",
            "Comparez les résultats."
          ],
          quiz: [
            {
              question:
                "Dans un calcul simple, quels éléments déterminent principalement l'intérêt ?",
              options: [
                "Le capital, le taux et la durée",
                "Uniquement le salaire",
                "Uniquement la durée",
                "Le nombre de dépenses du mois"
              ],
              answer: 0,
              explanation:
                "Dans le modèle d'intérêt simple, le capital, le taux et la durée sont les éléments fondamentaux."
            }
          ]
        },

        {
          slug: "puissance-interets-composes",
          title: "4.2 La Puissance des Intérêts Composés",
          duration: "18 min",
          description:
            "Comprenez comment les gains accumulés peuvent eux-mêmes produire des gains au fil du temps.",
          objectives: [
            "Comprendre le principe de capitalisation composée.",
            "Comprendre pourquoi le temps joue un rôle important.",
            "Utiliser une formule simple de valeur future.",
            "Comprendre les limites des simulations de rendement."
          ],
          content: [
            "## Qu'est-ce que la capitalisation composée ?",
            "Avec la capitalisation composée, les intérêts ou gains crédités au capital peuvent eux-mêmes participer à la croissance future du capital.",
            "",
            "Dans un modèle simplifié avec un versement initial et un taux constant :",
            "```text\nValeur future = Capital initial × (1 + taux)^nombre de périodes\n```",
            "",
            "## Exemple simplifié",
            "1 000 € placés à un taux annuel théorique de 5 % :",
            "",
            "Après 1 an :",
            "```text\n1 000 × 1,05 = 1 050 €\n```",
            "",
            "Après 2 ans :",
            "```text\n1 050 × 1,05 = 1 102,50 €\n```",
            "",
            "La deuxième année, le calcul porte sur 1 050 € et non plus uniquement sur les 1 000 € initiaux.",
            "",
            "## Le rôle du temps",
            "Plus la durée est longue, plus l'effet de la capitalisation peut devenir important dans un modèle où le rendement est réinvesti.",
            "",
            "Mais une simulation à taux constant n'est pas une promesse de rendement. Les placements réels peuvent avoir des rendements variables, des pertes, des frais et des taxes."
          ],
          examples: [
            "Un capital théorique de 1 000 € à 5 % annuel devient 1 050 € après un an puis 1 102,50 € après deux ans si le taux reste identique et que les gains sont intégralement capitalisés.",
            "Avec des versements réguliers, la croissance dépend à la fois des sommes versées, du calendrier des versements, du rendement et de la durée."
          ],
          practice: [
            "Calculez la valeur théorique de 1 000 € à 5 % pendant trois ans avec capitalisation annuelle.",
            "Comparez ce résultat avec un scénario où aucun intérêt n'est capitalisé.",
            "Expliquez avec vos propres mots pourquoi le temps est important."
          ],
          quiz: [
            {
              question:
                "Pourquoi les intérêts composés peuvent-ils accélérer la croissance d'un capital ?",
              options: [
                "Parce que les gains accumulés peuvent eux-mêmes produire des gains",
                "Parce que le capital est garanti",
                "Parce que les taux augmentent toujours",
                "Parce qu'il n'y a jamais de risque"
              ],
              answer: 0,
              explanation:
                "La capitalisation permet aux gains précédents de participer à la croissance future du capital."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Épargne Régulière & Capitalisation",
      lessons: [
        {
          slug: "versements-mensuels-et-capitalisation",
          title: "5.1 Épargner Chaque Mois",
          duration: "17 min",
          description:
            "Découvrez pourquoi des versements réguliers peuvent devenir importants sur une longue période.",
          objectives: [
            "Comprendre l'effet des versements réguliers.",
            "Distinguer capital versé et croissance potentielle.",
            "Utiliser une simulation simple.",
            "Comprendre pourquoi les hypothèses de rendement doivent être prudentes."
          ],
          content: [
            "## La régularité compte",
            "Une personne n'a pas nécessairement besoin d'avoir un capital important dès le départ pour construire progressivement une épargne.",
            "",
            "Des versements réguliers peuvent permettre d'accumuler un capital au fil du temps.",
            "",
            "## Exemple sans rendement",
            "100 € par mois pendant 10 ans représentent :",
            "```text\n100 × 12 × 10 = 12 000 €\n```",
            "",
            "Ces 12 000 € correspondent uniquement aux sommes versées.",
            "",
            "## Avec une croissance potentielle",
            "Si l'argent est placé dans un produit générant un rendement, la valeur finale peut être supérieure aux sommes versées, mais elle peut également être inférieure dans certains investissements selon les risques.",
            "",
            "Les simulations doivent donc être utilisées pour comprendre des mécanismes, pas comme des promesses."
          ],
          examples: [
            "100 € par mois pendant 10 ans = 12 000 € versés hors rendement.",
            "100 € par mois pendant 30 ans = 36 000 € versés hors rendement.",
            "Dans un scénario théorique à rendement constant, la valeur finale pourrait être supérieure, mais le rendement réel n'est jamais garanti."
          ],
          practice: [
            "Calculez combien vous pourriez verser en 5, 10 et 20 ans avec un montant mensuel fixe.",
            "Comparez les résultats sans rendement.",
            "Identifiez ce que le temps change dans votre stratégie."
          ],
          quiz: [
            {
              question:
                "100 € épargnés chaque mois pendant 10 ans représentent combien de versements cumulés, hors rendement ?",
              options: [
                "12 000 €",
                "1 200 €",
                "10 000 €",
                "120 000 €"
              ],
              answer: 0,
              explanation:
                "100 × 12 mois × 10 ans = 12 000 € de versements."
            }
          ]
        },

        {
          slug: "temps-regularite-et-rendement",
          title: "5.2 Temps, Régularité & Rendement",
          duration: "16 min",
          description:
            "Comprenez les trois éléments qui influencent fortement l'accumulation d'une épargne à long terme.",
          objectives: [
            "Comprendre l'importance de la durée.",
            "Comprendre l'effet de la régularité.",
            "Distinguer rendement hypothétique et rendement garanti.",
            "Éviter les simulations financières irréalistes."
          ],
          content: [
            "## Trois facteurs essentiels",
            "Lorsqu'on réfléchit à l'accumulation d'un capital, trois éléments sont particulièrement importants :",
            "",
            "1. **Le montant versé régulièrement**",
            "2. **La durée**",
            "3. **Le rendement obtenu après frais et selon les conditions du placement**",
            "",
            "## Le piège du rendement élevé",
            "Une simulation avec 10 % de rendement annuel peut sembler impressionnante. Mais si le rendement n'est pas garanti et que le placement peut perdre de la valeur, le résultat réel peut être très différent.",
            "",
            "Il faut donc distinguer :",
            "- scénario pédagogique ;",
            "- rendement historique ;",
            "- rendement contractuellement prévu lorsqu'il existe ;",
            "- rendement réellement obtenu.",
            "",
            "## La régularité est souvent plus contrôlable",
            "Vous ne contrôlez pas toujours les performances des marchés, mais vous pouvez généralement contrôler le montant que vous décidez d'épargner, dans la limite de votre budget."
          ],
          examples: [
            "Une personne augmente son épargne mensuelle de 100 € à 150 € lorsque ses revenus augmentent.",
            "Deux simulations peuvent produire des résultats très différents uniquement parce que l'une suppose 3 % de rendement et l'autre 8 %."
          ],
          practice: [
            "Créez trois scénarios de simulation : prudent, intermédiaire et optimiste.",
            "Ne modifiez que l'hypothèse de rendement.",
            "Comparez les résultats et notez pourquoi l'écart ne doit pas être considéré comme garanti."
          ],
          quiz: [
            {
              question:
                "Quel élément est généralement le plus directement contrôlable par l'épargnant ?",
              options: [
                "Le montant et la régularité de ses versements",
                "Le rendement futur des marchés",
                "L'inflation mondiale",
                "Le taux de change mondial"
              ],
              answer: 0,
              explanation:
                "L'épargnant peut généralement contrôler ses versements, alors que les rendements futurs dépendent des conditions du placement et du marché."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Inflation & Pouvoir d'Achat",
      lessons: [
        {
          slug: "comprendre-inflation",
          title: "6.1 L'Inflation & Votre Épargne",
          duration: "15 min",
          description:
            "Comprenez pourquoi la valeur réelle de l'argent peut évoluer avec le temps.",
          objectives: [
            "Comprendre ce qu'est l'inflation.",
            "Comprendre son effet sur le pouvoir d'achat.",
            "Distinguer valeur nominale et valeur réelle.",
            "Comprendre pourquoi le rendement doit être comparé à l'inflation."
          ],
          content: [
            "## Qu'est-ce que l'inflation ?",
            "L'inflation correspond à une hausse générale du niveau des prix au fil du temps.",
            "",
            "Lorsque les prix augmentent, une même somme d'argent peut acheter moins de biens ou de services.",
            "",
            "## Exemple simple",
            "Si un panier coûte 100 € aujourd'hui et que son prix augmente de 5 %, il coûtera théoriquement 105 €.",
            "",
            "Votre compte peut toujours afficher 100 €, mais le pouvoir d'achat de cette somme peut avoir diminué.",
            "",
            "## Rendement nominal et rendement réel",
            "Un placement peut afficher un rendement positif tout en ayant une progression réelle plus faible une fois l'inflation prise en compte.",
            "",
            "Il faut également tenir compte des frais et, selon la situation, de la fiscalité."
          ],
          examples: [
            "Une épargne qui rapporte 2 % alors que les prix augmentent de 4 % ne signifie pas nécessairement que le pouvoir d'achat de l'épargne augmente.",
            "Une personne peut avoir plus d'argent sur son compte dans cinq ans mais pouvoir acheter moins de biens avec cette somme."
          ],
          practice: [
            "Choisissez un produit ou service que vous achetez régulièrement.",
            "Comparez son prix actuel à son prix d'il y a quelques années si vous disposez de données fiables.",
            "Expliquez l'effet de cette évolution sur votre budget."
          ],
          quiz: [
            {
              question: "Quel est l'un des effets principaux de l'inflation ?",
              options: [
                "Elle peut réduire le pouvoir d'achat d'une même somme d'argent",
                "Elle garantit toujours une hausse des salaires",
                "Elle augmente automatiquement les intérêts",
                "Elle supprime les dépenses"
              ],
              answer: 0,
              explanation:
                "Lorsque les prix augmentent, une même somme peut permettre d'acheter moins de biens et services."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Où Conserver son Épargne ?",
      lessons: [
        {
          slug: "choisir-support-epargne",
          title: "7.1 Choisir un Support d'Épargne",
          duration: "17 min",
          description:
            "Apprenez à comparer disponibilité, sécurité, rendement et risque avant de choisir où conserver votre épargne.",
          objectives: [
            "Identifier les critères importants d'un support d'épargne.",
            "Comprendre la différence entre liquidité et rendement.",
            "Comprendre pourquoi l'argent destiné aux urgences doit rester accessible.",
            "Comparer plusieurs solutions de manière structurée."
          ],
          content: [
            "## Quatre questions à poser",
            "Avant de choisir un support, demandez-vous :",
            "1. Puis-je récupérer mon argent rapidement ?",
            "2. Le capital est-il protégé ou peut-il fluctuer ?",
            "3. Quel rendement est proposé et dans quelles conditions ?",
            "4. Quels sont les frais et les contraintes ?",
            "",
            "## Liquidité",
            "La liquidité désigne notamment la facilité avec laquelle un actif peut être transformé en argent disponible sans perte importante liée à la vente.",
            "",
            "Pour une réserve d'urgence, la disponibilité est généralement une priorité.",
            "",
            "## Ne pas chercher uniquement le rendement",
            "Un produit offrant un rendement potentiel supérieur peut également comporter davantage de risques ou être moins accessible rapidement.",
            "",
            "Le meilleur choix dépend donc de l'objectif auquel l'argent est destiné."
          ],
          examples: [
            "Une réserve destinée à une urgence proche doit généralement privilégier la disponibilité et la sécurité plutôt qu'un rendement spéculatif.",
            "Une somme destinée à un objectif lointain peut être analysée différemment en fonction de l'horizon, du risque acceptable et des règles du pays."
          ],
          practice: [
            "Prenez deux supports d'épargne disponibles dans votre pays.",
            "Comparez leur disponibilité, leurs frais, leur niveau de risque et leur rendement potentiel.",
            "Indiquez lequel semble le plus adapté à une réserve d'urgence et pourquoi."
          ],
          quiz: [
            {
              question:
                "Quel critère est particulièrement important pour une épargne d'urgence ?",
              options: [
                "La disponibilité rapide de l'argent",
                "Le rendement le plus élevé possible",
                "La spéculation",
                "L'absence totale de contrôle"
              ],
              answer: 0,
              explanation:
                "Une réserve d'urgence doit généralement être facilement accessible lorsqu'un besoin important survient."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Protéger son Épargne",
      lessons: [
        {
          slug: "eviter-arnaques-financieres",
          title: "8.1 Reconnaître les Arnaques à l'Épargne",
          duration: "16 min",
          description:
            "Apprenez à reconnaître les signaux d'alerte des offres financières trompeuses.",
          objectives: [
            "Identifier les promesses financières suspectes.",
            "Comprendre pourquoi rendement élevé et risque faible doivent être examinés avec prudence.",
            "Reconnaître les techniques de pression utilisées par certaines arnaques.",
            "Vérifier une offre avant d'envoyer de l'argent."
          ],
          content: [
            "## Les promesses trop belles",
            "Une offre qui promet des rendements très élevés, rapides et sans risque doit immédiatement susciter de la prudence.",
            "",
            "Quelques signaux d'alerte :",
            "- rendement garanti très élevé ;",
            "- pression pour investir immédiatement ;",
            "- absence d'informations vérifiables ;",
            "- demande de transfert vers un compte personnel ;",
            "- recrutement obligatoire d'autres personnes ;",
            "- promesse de richesse rapide ;",
            "- impossibilité de récupérer son argent.",
            "",
            "## Vérifier avant de payer",
            "Avant d'envoyer de l'argent, vérifiez l'identité du prestataire, son statut réglementaire lorsque cela s'applique, les conditions du produit, les frais et les modalités de retrait.",
            "",
            "## Ne pas confondre rendement et garantie",
            "Un rendement élevé implique généralement davantage de risque lorsqu'il s'agit d'un investissement. Une promesse de rendement élevé sans risque est particulièrement suspecte."
          ],
          examples: [
            "Une personne vous promet 30 % par mois 'garantis' et exige une décision immédiate. Il s'agit d'un signal d'alerte majeur.",
            "Une plateforme refuse de fournir des informations claires sur l'entreprise ou les conditions de retrait : il faut éviter d'envoyer de l'argent avant vérification."
          ],
          practice: [
            "Prenez une publicité financière fictive ou réelle et listez ses promesses.",
            "Identifiez les éléments qui doivent être vérifiés.",
            "Écrivez trois questions que vous poseriez avant d'investir."
          ],
          quiz: [
            {
              question:
                "Quel signal doit particulièrement inciter à la prudence ?",
              options: [
                "Un rendement très élevé présenté comme garanti et sans risque",
                "Une information claire sur les frais",
                "Une documentation accessible",
                "La possibilité de comparer plusieurs produits"
              ],
              answer: 0,
              explanation:
                "Une promesse de rendement très élevé, garanti et sans risque est un signal d'alerte important."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Construire un Plan d'Épargne",
      lessons: [
        {
          slug: "plan-epargne-personnel",
          title: "9.1 Construire son Plan d'Épargne",
          duration: "18 min",
          description:
            "Construisez une stratégie d'épargne adaptée à vos revenus, vos dépenses et vos objectifs.",
          objectives: [
            "Définir plusieurs niveaux d'objectifs d'épargne.",
            "Déterminer une contribution mensuelle réaliste.",
            "Prioriser le fonds de sécurité.",
            "Créer un calendrier de progression."
          ],
          content: [
            "## Étape 1 : connaître sa capacité d'épargne",
            "Commencez par votre budget réel. Une capacité d'épargne correspond à ce que vous pouvez mettre de côté de manière soutenable après vos dépenses et obligations.",
            "",
            "## Étape 2 : définir une première cible",
            "Si vous n'avez aucune réserve, commencez par un objectif accessible.",
            "",
            "## Étape 3 : augmenter progressivement",
            "Lorsque vos revenus augmentent ou certaines dépenses diminuent, vous pouvez réévaluer votre contribution.",
            "",
            "## Étape 4 : séparer les objectifs",
            "Il peut être utile de distinguer les enveloppes ou comptes destinés à :",
            "- urgence ;",
            "- projets à court terme ;",
            "- objectifs à moyen terme ;",
            "- long terme.",
            "",
            "## Étape 5 : revoir le plan régulièrement",
            "Un plan financier doit évoluer lorsque les revenus, les dépenses ou les objectifs changent."
          ],
          examples: [
            "Mois 1 à 3 : 50 € par mois pour commencer une réserve.",
            "Mois 4 à 6 : 75 € par mois après réduction de certaines dépenses.",
            "À partir du mois 7 : 100 € par mois lorsque le budget le permet."
          ],
          practice: [
            "Créez un plan d'épargne sur 12 mois.",
            "Indiquez le montant mensuel prévu.",
            "Ajoutez une colonne pour le montant réellement épargné.",
            "Prévoyez une révision tous les trois mois."
          ],
          quiz: [
            {
              question:
                "Quel est un bon principe pour construire un plan d'épargne ?",
              options: [
                "Commencer avec un montant réaliste puis augmenter progressivement lorsque la situation le permet",
                "Choisir le montant maximal possible sans tenir compte du budget",
                "Investir toutes ses économies immédiatement",
                "Ne jamais modifier son plan"
              ],
              answer: 0,
              explanation:
                "Une épargne soutenable et régulière est généralement plus utile qu'un objectif trop ambitieux impossible à maintenir."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Projet Final - Construire son Système d'Épargne",
      lessons: [
        {
          slug: "projet-final-systeme-epargne",
          title: "10.1 Construire son Système d'Épargne sur 12 Mois",
          duration: "20 min",
          description:
            "Mettez en pratique tout le cours en construisant un système d'épargne personnel et mesurable.",
          objectives: [
            "Calculer ses dépenses essentielles.",
            "Définir un objectif de fonds de sécurité.",
            "Déterminer un montant d'épargne mensuel.",
            "Créer plusieurs objectifs d'épargne.",
            "Mettre en place un suivi sur 12 mois.",
            "Réviser le plan en fonction des résultats."
          ],
          content: [
            "## Étape 1 : calculer vos dépenses essentielles",
            "Identifiez les dépenses nécessaires au fonctionnement de votre vie quotidienne.",
            "",
            "## Étape 2 : définir votre fonds de sécurité",
            "Utilisez trois à six mois comme simple point de comparaison et adaptez le montant à votre situation.",
            "",
            "## Étape 3 : définir votre contribution mensuelle",
            "Choisissez un montant que votre budget peut réellement supporter.",
            "",
            "## Étape 4 : automatiser lorsque c'est possible",
            "Programmez un transfert vers votre épargne si votre banque ou votre service financier le permet.",
            "",
            "## Étape 5 : créer vos objectifs",
            "Exemple :",
            "```text\nFonds de sécurité : 2 500 €\nFormation : 600 €\nOrdinateur : 900 €\nProjet long terme : 3 000 €\n```",
            "",
            "## Étape 6 : suivre votre progression",
            "Créez un tableau :",
            "",
            "```text\nMois | Prévu | Réel | Écart | Total cumulé\n-----|-------|------|-------|--------------\nJan  | 100 € |      |       |\nFév  | 100 € |      |       |\nMar  | 100 € |      |       |\nAvr  | 100 € |      |       |\n```",
            "",
            "## Étape 7 : faire un bilan trimestriel",
            "Tous les trois mois, posez-vous les questions suivantes :",
            "- Est-ce que mon montant d'épargne reste réaliste ?",
            "- Mes revenus ont-ils changé ?",
            "- Mes dépenses ont-elles augmenté ?",
            "- Mon fonds de sécurité progresse-t-il ?",
            "- Dois-je modifier mes objectifs ?",
            "",
            "## Le principe final",
            "L'objectif n'est pas de devenir riche rapidement. L'objectif est de construire progressivement une marge financière, de protéger ses objectifs et de prendre des décisions plus conscientes avec son argent."
          ],
          examples: [
            "Une personne gagne 1 500 € par mois, estime ses dépenses essentielles à 900 € et choisit de commencer avec une épargne de 100 € par mois.",
            "Elle suit sa progression pendant trois mois, puis augmente son épargne à 125 € lorsque son budget devient plus confortable.",
            "Après douze mois, elle analyse le montant réellement accumulé et réévalue son objectif de sécurité."
          ],
          practice: [
            "Calculez vos dépenses essentielles mensuelles.",
            "Définissez une cible de fonds de sécurité adaptée à votre situation.",
            "Définissez un montant mensuel d'épargne.",
            "Créez au moins deux objectifs d'épargne supplémentaires.",
            "Mettez en place un tableau de suivi sur 12 mois.",
            "Faites un bilan tous les trois mois et ajustez votre stratégie."
          ],
          quiz: [
            {
              question:
                "Quelle est la meilleure approche pour construire une épargne durable ?",
              options: [
                "Définir un objectif réaliste, épargner régulièrement et ajuster progressivement",
                "Chercher immédiatement le rendement le plus élevé",
                "Épargner uniquement lorsqu'il reste de l'argent",
                "Emprunter pour constituer son fonds d'urgence"
              ],
              answer: 0,
              explanation:
                "Une stratégie durable repose sur des objectifs réalistes, de la régularité et des ajustements lorsque la situation change."
            },
            {
              question:
                "Pourquoi faut-il revoir régulièrement son plan d'épargne ?",
              options: [
                "Parce que les revenus, les dépenses et les objectifs peuvent évoluer",
                "Parce que l'épargne doit toujours diminuer",
                "Parce que les intérêts sont toujours identiques",
                "Parce qu'un budget ne fonctionne jamais"
              ],
              answer: 0,
              explanation:
                "Un plan d'épargne doit évoluer avec la situation financière et les objectifs de la personne."
            }
          ]
        }
      ]
    }
  ]
};

export const epargnerIntelligemmentExamQuestions: ExamQuestion[] = [
  {
    question: "Quel est l'objectif principal d'une épargne de précaution ?",
    options: [
      "Faire face à certains imprévus financiers",
      "Financer uniquement les loisirs",
      "Obtenir automatiquement un rendement élevé",
      "Acheter systématiquement des actions"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle différence existe entre épargne et investissement ?",
    options: [
      "L'épargne privilégie généralement la disponibilité et la sécurité, tandis que l'investissement comporte un niveau de risque variable",
      "L'investissement est toujours sans risque",
      "L'épargne garantit toujours un rendement",
      "Il n'existe aucune différence"
    ],
    correctAnswer: 0
  },
  {
    question: "Le repère de trois à six mois de dépenses pour un fonds d'urgence est-il universel ?",
    options: [
      "Non, il doit être adapté à la situation de chacun",
      "Oui, exactement six mois pour tout le monde",
      "Oui, exactement trois mois pour tout le monde",
      "Oui, car les banques l'imposent"
    ],
    correctAnswer: 0
  },
  {
    question: "Une personne dépense 800 € par mois pour ses besoins essentiels. Quel est l'équivalent de trois mois de dépenses ?",
    options: [
      "2 400 €",
      "1 600 €",
      "800 €",
      "4 800 €"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'intérêt d'automatiser son épargne ?",
    options: [
      "Rendre l'épargne plus régulière et réduire les décisions répétitives",
      "Garantir un rendement",
      "Augmenter automatiquement son revenu",
      "Supprimer toutes les dépenses"
    ],
    correctAnswer: 0
  },
  {
    question: "Que doit faire une personne ayant des revenus variables ?",
    options: [
      "Construire ses dépenses sur une estimation prudente et adapter son épargne",
      "Utiliser uniquement son meilleur mois",
      "Augmenter ses dépenses fixes chaque mois",
      "Ignorer les variations de revenus"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle formule représente l'intérêt simple dans un modèle de base ?",
    options: [
      "Capital × Taux × Durée",
      "Capital + Taux",
      "Revenu × Dépenses",
      "Capital ÷ Durée"
    ],
    correctAnswer: 0
  },
  {
    question: "Que signifie la capitalisation composée ?",
    options: [
      "Les gains accumulés peuvent eux-mêmes produire des gains",
      "Le capital ne peut jamais diminuer",
      "Le rendement est toujours garanti",
      "Les intérêts sont toujours retirés immédiatement"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle est l'une des raisons pour lesquelles le temps est important dans la capitalisation ?",
    options: [
      "Il permet aux gains potentiels de se capitaliser sur plusieurs périodes",
      "Il garantit un rendement positif",
      "Il supprime tous les risques",
      "Il augmente automatiquement le taux"
    ],
    correctAnswer: 0
  },
  {
    question: "100 € épargnés chaque mois pendant 10 ans représentent combien de versements cumulés, hors rendement ?",
    options: [
      "12 000 €",
      "1 000 €",
      "10 000 €",
      "120 000 €"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi faut-il être prudent avec une simulation à 8 % de rendement annuel ?",
    options: [
      "Parce qu'un rendement futur n'est pas nécessairement garanti",
      "Parce qu'un taux de 8 % est toujours impossible",
      "Parce que les investissements ne rapportent jamais",
      "Parce que l'inflation est toujours de 8 %"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel facteur l'épargnant peut-il généralement contrôler directement ?",
    options: [
      "Le montant et la régularité de ses versements",
      "Le rendement futur des marchés",
      "L'inflation mondiale",
      "Les taux de change mondiaux"
    ],
    correctAnswer: 0
  },
  {
    question: "Qu'est-ce que l'inflation peut provoquer ?",
    options: [
      "Une diminution du pouvoir d'achat d'une même somme d'argent",
      "Une garantie de rendement",
      "Une augmentation automatique des salaires",
      "Une suppression des dépenses"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi comparer un rendement à l'inflation ?",
    options: [
      "Pour mieux comprendre l'évolution du pouvoir d'achat",
      "Pour garantir un rendement",
      "Pour éviter toute fiscalité",
      "Pour supprimer les risques"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel critère est particulièrement important pour une épargne d'urgence ?",
    options: [
      "La disponibilité de l'argent",
      "Le rendement maximal possible",
      "La spéculation",
      "La durée de blocage la plus longue"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi ne faut-il pas choisir un support d'épargne uniquement sur son rendement annoncé ?",
    options: [
      "Parce qu'il faut aussi considérer le risque, la disponibilité, les frais et les conditions",
      "Parce que le rendement ne sert jamais à rien",
      "Parce que tous les produits ont le même rendement",
      "Parce que les frais sont toujours nuls"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel signal est particulièrement préoccupant dans une offre financière ?",
    options: [
      "Un rendement très élevé présenté comme garanti et sans risque",
      "Une documentation claire",
      "Des frais clairement affichés",
      "Une possibilité de comparer plusieurs offres"
    ],
    correctAnswer: 0
  },
  {
    question: "Que faut-il faire avant d'envoyer de l'argent à une plateforme financière inconnue ?",
    options: [
      "Vérifier son identité, son statut lorsque cela s'applique, ses conditions et les modalités de retrait",
      "Envoyer immédiatement un petit montant",
      "Faire confiance uniquement aux témoignages sur les réseaux sociaux",
      "Ignorer les conditions"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel objectif est le plus précis ?",
    options: [
      "Économiser 1 200 € en 12 mois",
      "Épargner davantage",
      "Devenir riche",
      "Avoir beaucoup d'argent"
    ],
    correctAnswer: 0
  },
  {
    question: "Si l'objectif est de réunir 600 € en six mois, combien faut-il épargner par mois ?",
    options: [
      "100 €",
      "50 €",
      "200 €",
      "600 €"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi est-il utile de séparer différents objectifs d'épargne ?",
    options: [
      "Pour savoir précisément à quoi chaque somme est destinée",
      "Pour augmenter automatiquement le rendement",
      "Pour éviter de suivre son argent",
      "Pour supprimer le fonds d'urgence"
    ],
    correctAnswer: 0
  },
  {
    question: "Que représente une épargne de projet ?",
    options: [
      "Une somme mise de côté pour une dépense ou un objectif identifié",
      "Une dette bancaire",
      "Un rendement garanti",
      "Une dépense imprévue"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est un bon moyen de commencer lorsqu'on n'a aucune épargne de sécurité ?",
    options: [
      "Fixer une première cible accessible puis augmenter progressivement",
      "Attendre d'avoir un revenu très élevé",
      "Investir immédiatement tout son argent",
      "Contracter une dette pour épargner"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi une épargne trop ambitieuse peut-elle être problématique ?",
    options: [
      "Elle peut rendre le budget difficile à maintenir et provoquer des retraits fréquents",
      "Elle garantit toujours un rendement négatif",
      "Elle empêche toute dépense obligatoire",
      "Elle augmente automatiquement les impôts"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'intérêt d'un suivi d'épargne sur 12 mois ?",
    options: [
      "Mesurer la progression et ajuster le plan lorsque la situation change",
      "Garantir un rendement",
      "Éviter tout changement",
      "Supprimer les objectifs"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle approche est la plus saine pour une stratégie d'épargne à long terme ?",
    options: [
      "Épargner régulièrement, rester réaliste et adapter le plan à sa situation",
      "Chercher uniquement les rendements les plus élevés",
      "Investir uniquement sur la base de promesses",
      "Épargner uniquement lorsqu'il reste de l'argent"
    ],
    correctAnswer: 0
  }
];