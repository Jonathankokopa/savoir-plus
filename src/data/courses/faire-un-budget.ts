import type { CourseDetail, ExamQuestion } from "../coursesData";

export const faireUnBudgetCourse: CourseDetail = {
  slug: "faire-un-budget",
  categorySlug: "finance",
  title: "Faire un Budget : Maîtriser ses Revenus, ses Dépenses & son Épargne",
  description:
    "Apprenez à construire un budget personnel réaliste, suivre vos dépenses, utiliser la règle 50/30/20 comme repère, gérer les dépenses imprévues et transformer votre budget en véritable outil de décision financière.",
  level: "Débutant",
  icon: "🧾",

  modules: [
    {
      title: "Module 1: Comprendre le Budget Personnel",
      lessons: [
        {
          slug: "quest-ce-quun-budget",
          title: "1.1 Qu'est-ce qu'un Budget Personnel ?",
          duration: "15 min",
          description:
            "Comprenez le rôle d'un budget et pourquoi il ne s'agit pas simplement de réduire ses dépenses.",
          objectives: [
            "Comprendre ce qu'est réellement un budget personnel.",
            "Distinguer revenus, dépenses, épargne et dettes.",
            "Comprendre pourquoi un budget aide à prendre de meilleures décisions.",
            "Identifier les erreurs courantes dans la gestion de son argent."
          ],
          content: [
            "## Le budget comme tableau de bord financier",
            "Un budget est un plan qui permet de comparer l'argent qui entre avec l'argent qui sort sur une période donnée, généralement un mois.",
            "L'objectif n'est pas de supprimer toutes les dépenses agréables. Il s'agit plutôt de décider à l'avance où va son argent afin d'éviter que les dépenses soient uniquement dictées par les habitudes ou les impulsions.",
            "",
            "## Les quatre éléments fondamentaux",
            "- **Revenus :** salaire, activité indépendante, commissions, revenus locatifs ou autres sources régulières.",
            "- **Dépenses :** logement, alimentation, transport, communication, santé, loisirs, etc.",
            "- **Épargne :** argent mis de côté pour des objectifs futurs ou des imprévus.",
            "- **Dettes :** remboursements de crédits et autres obligations financières.",
            "",
            "## La formule de base",
            "```text\nSolde du mois = Revenus - Dépenses - Épargne planifiée\n```",
            "",
            "Une autre manière de raisonner consiste à considérer l'épargne comme une priorité planifiée plutôt que comme ce qui reste à la fin du mois.",
            "",
            "## Un budget n'est pas une punition",
            "Un bon budget doit être suffisamment réaliste pour pouvoir être suivi. Si le budget interdit systématiquement toutes les sorties, tous les loisirs et toutes les dépenses personnelles, il risque d'être abandonné rapidement.",
            "",
            "Le but est de créer un système compatible avec votre situation réelle."
          ],
          examples: [
            "Une personne gagne 1 500 € par mois et dépense habituellement 1 650 €. Le problème n'est pas seulement qu'elle dépense beaucoup : son budget révèle surtout un déficit mensuel de 150 € qu'elle doit comprendre et corriger.",
            "Une autre personne gagne 1 500 €, dépense 1 200 € et met 300 € de côté. Son budget lui permet de voir clairement sa capacité d'épargne."
          ],
          practice: [
            "Notez toutes vos sources de revenus du dernier mois.",
            "Listez vos principales catégories de dépenses.",
            "Calculez approximativement la différence entre vos revenus et vos dépenses.",
            "Identifiez une dépense dont vous ne connaissez pas précisément le montant mensuel."
          ],
          quiz: [
            {
              question: "Quel est le rôle principal d'un budget personnel ?",
              options: [
                "Planifier et contrôler l'utilisation de son argent",
                "Interdire toutes les dépenses de loisirs",
                "Garantir un revenu plus élevé",
                "Éviter automatiquement toutes les dettes"
              ],
              answer: 0,
              explanation:
                "Un budget permet surtout de planifier ses revenus et ses dépenses afin de prendre des décisions financières plus conscientes."
            },
            {
              question: "Que représente un déficit budgétaire mensuel ?",
              options: [
                "Les dépenses dépassent les revenus disponibles",
                "Les revenus dépassent toujours les dépenses",
                "L'épargne représente 50% du revenu",
                "Les dépenses sont toutes nécessaires"
              ],
              answer: 0,
              explanation:
                "Lorsque les dépenses dépassent les revenus disponibles, le budget présente un déficit."
            }
          ]
        },

        {
          slug: "revenus-fixes-variables-et-irrreguliers",
          title: "1.2 Identifier ses Revenus Réels",
          duration: "14 min",
          description:
            "Apprenez à construire un budget à partir de revenus fixes, variables ou irréguliers.",
          objectives: [
            "Identifier ses différentes sources de revenus.",
            "Différencier revenus fixes, variables et irréguliers.",
            "Éviter de construire un budget sur des revenus incertains.",
            "Estimer un revenu mensuel prudent lorsque les revenus varient."
          ],
          content: [
            "## Les différents types de revenus",
            "- **Revenu fixe :** montant relativement stable d'un mois à l'autre.",
            "- **Revenu variable :** montant qui change régulièrement.",
            "- **Revenu irrégulier :** revenu reçu à des moments différents ou provenant de missions ponctuelles.",
            "",
            "## Pourquoi cette distinction est importante",
            "Une personne salariée avec un revenu stable peut plus facilement prévoir son budget mensuel. Un freelance, un commerçant ou une personne rémunérée à la commission doit davantage tenir compte des variations.",
            "",
            "Dans ce cas, il est souvent prudent de construire les dépenses essentielles à partir d'une estimation conservatrice plutôt que sur le meilleur mois de l'année.",
            "",
            "## Exemple de revenu variable",
            "Supposons qu'une personne gagne :",
            "- Janvier : 900 €",
            "- Février : 1 300 €",
            "- Mars : 1 050 €",
            "- Avril : 1 500 €",
            "",
            "Elle peut observer une moyenne sur plusieurs mois, mais doit également tenir compte des mois faibles avant de fixer des dépenses récurrentes élevées.",
            "",
            "## Attention aux revenus exceptionnels",
            "Une prime, une vente ponctuelle ou un cadeau financier ne doit pas automatiquement être traité comme un revenu mensuel permanent.",
            "",
            "Une approche prudente consiste à distinguer les revenus réguliers des revenus exceptionnels."
          ],
          examples: [
            "Un freelance qui facture entre 800 € et 1 800 € selon les mois devrait éviter de baser son loyer et ses autres dépenses fixes sur son meilleur mois.",
            "Une personne qui reçoit une prime exceptionnelle peut choisir de l'affecter à un fonds d'urgence, à une dette ou à un objectif précis plutôt que de l'intégrer immédiatement à ses dépenses mensuelles."
          ],
          practice: [
            "Classez vos revenus des trois derniers mois en revenus fixes, variables ou exceptionnels.",
            "Si vos revenus varient, choisissez une estimation prudente que vous pourriez utiliser pour construire votre budget."
          ],
          quiz: [
            {
              question:
                "Comment une personne ayant des revenus très variables devrait-elle généralement construire son budget ?",
              options: [
                "En tenant compte d'une estimation prudente de ses revenus",
                "En utilisant uniquement son meilleur mois",
                "En dépensant systématiquement tous ses revenus",
                "En ignorant les variations"
              ],
              answer: 0,
              explanation:
                "Une estimation prudente réduit le risque de construire des dépenses fixes sur des revenus qui ne sont pas garantis."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Classer ses Dépenses",
      lessons: [
        {
          slug: "besoins-envies-obligations",
          title: "2.1 Besoins, Envies & Obligations",
          duration: "16 min",
          description:
            "Apprenez à classer vos dépenses pour comprendre où votre argent est réellement utilisé.",
          objectives: [
            "Distinguer besoins et envies.",
            "Identifier les dépenses obligatoires et discrétionnaires.",
            "Comprendre pourquoi certaines dépenses peuvent appartenir à plusieurs catégories.",
            "Éviter les classifications trop rigides."
          ],
          content: [
            "## Pourquoi catégoriser ses dépenses ?",
            "Lorsque toutes les dépenses sont mélangées, il est difficile de comprendre ce qui peut être ajusté. Les catégories permettent de rendre le budget lisible.",
            "",
            "## Les besoins",
            "Ce sont les dépenses nécessaires au fonctionnement de la vie quotidienne et au respect de certaines obligations.",
            "- logement",
            "- alimentation de base",
            "- transport nécessaire",
            "- électricité et eau",
            "- certaines dépenses de santé",
            "- obligations financières",
            "",
            "## Les envies",
            "Les envies correspondent aux dépenses qui améliorent le confort ou le plaisir mais qui peuvent généralement être réduites, reportées ou remplacées.",
            "- restaurants",
            "- loisirs",
            "- voyages",
            "- achats non essentiels",
            "- certains abonnements",
            "",
            "## Une distinction qui dépend du contexte",
            "Une dépense n'est pas automatiquement un besoin ou une envie pour tout le monde.",
            "Par exemple, une connexion Internet peut être un loisir pour une personne mais un outil professionnel indispensable pour une autre.",
            "",
            "Le but n'est donc pas de juger les dépenses mais de comprendre leur priorité."
          ],
          examples: [
            "Un abonnement à une plateforme de streaming peut être classé comme une envie.",
            "Un abonnement Internet peut être une dépense essentielle pour une personne qui travaille à distance.",
            "Le transport peut être un besoin professionnel, tandis qu'un déplacement touristique appartient généralement aux dépenses discrétionnaires."
          ],
          practice: [
            "Prenez les 20 dernières dépenses de votre compte.",
            "Classez chacune comme besoin, envie ou obligation.",
            "Identifiez trois dépenses que vous pourriez réduire sans compromettre vos besoins essentiels."
          ],
          quiz: [
            {
              question: "Pourquoi faut-il éviter de considérer toutes les dépenses comme des besoins ?",
              options: [
                "Parce que cela empêche d'identifier les dépenses ajustables",
                "Parce que les besoins ne doivent jamais être payés",
                "Parce que les envies sont toujours mauvaises",
                "Parce qu'un budget ne doit contenir aucune catégorie"
              ],
              answer: 0,
              explanation:
                "Une bonne classification permet de voir quelles dépenses peuvent être ajustées lorsque le budget est sous pression."
            }
          ]
        },

        {
          slug: "depenses-fixes-variables-et-periodiques",
          title: "2.2 Dépenses Fixes, Variables & Périodiques",
          duration: "15 min",
          description:
            "Organisez vos dépenses selon leur fréquence et leur capacité à varier.",
          objectives: [
            "Distinguer dépenses fixes et variables.",
            "Identifier les dépenses annuelles ou périodiques.",
            "Créer des provisions mensuelles pour les grosses dépenses.",
            "Éviter les mauvaises surprises budgétaires."
          ],
          content: [
            "## Dépenses fixes",
            "Ce sont des dépenses dont le montant change peu sur une période donnée.",
            "Exemples : loyer, certains abonnements, mensualités de crédit.",
            "",
            "## Dépenses variables",
            "Le montant change d'un mois à l'autre.",
            "Exemples : alimentation, transport, loisirs, consommation d'électricité.",
            "",
            "## Dépenses périodiques",
            "Certaines dépenses ne sont pas mensuelles mais reviennent régulièrement.",
            "Exemples : assurance annuelle, frais scolaires, entretien d'un véhicule, cadeaux, renouvellement d'un abonnement annuel.",
            "",
            "## La technique de la provision",
            "Si une dépense de 600 € arrive une fois par an, vous pouvez mettre de côté environ 50 € par mois pour la préparer.",
            "",
            "```text\n600 € / 12 mois = 50 € par mois\n```",
            "",
            "Cette méthode transforme une grosse dépense ponctuelle en petite contribution mensuelle."
          ],
          examples: [
            "Une assurance coûte 360 € par an. Prévoir 30 € par mois permet d'accumuler progressivement la somme nécessaire.",
            "Un entretien automobile estimé à 480 € tous les deux ans peut être transformé en provision mensuelle de 20 €."
          ],
          practice: [
            "Listez cinq dépenses qui ne sont pas mensuelles.",
            "Calculez leur coût annuel approximatif.",
            "Divisez ce montant par 12 afin de créer une provision mensuelle."
          ],
          quiz: [
            {
              question:
                "Pourquoi créer une provision mensuelle pour une dépense annuelle ?",
              options: [
                "Pour répartir son coût sur plusieurs mois",
                "Pour supprimer la dépense",
                "Pour augmenter automatiquement son revenu",
                "Pour éviter de suivre ses dépenses"
              ],
              answer: 0,
              explanation:
                "Une provision permet de préparer progressivement une dépense prévisible au lieu de devoir la financer entièrement au moment où elle arrive."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Construire son Budget Mensuel",
      lessons: [
        {
          slug: "construire-budget-mensuel",
          title: "3.1 Construire son Budget de A à Z",
          duration: "18 min",
          description:
            "Construisez un budget mensuel concret à partir de vos revenus et dépenses réels.",
          objectives: [
            "Créer une structure de budget simple.",
            "Lister les dépenses essentielles et discrétionnaires.",
            "Prévoir l'épargne et les objectifs financiers.",
            "Calculer le solde prévisionnel du mois."
          ],
          content: [
            "## Étape 1 : noter les revenus",
            "Commencez par déterminer les revenus réellement disponibles pour le mois.",
            "",
            "## Étape 2 : lister les dépenses fixes",
            "Ajoutez le logement, les abonnements, les remboursements et les autres obligations.",
            "",
            "## Étape 3 : estimer les dépenses variables",
            "Utilisez votre historique lorsque vous en avez un. Une estimation basée sur plusieurs mois est généralement plus utile qu'une estimation optimiste.",
            "",
            "## Étape 4 : prévoir l'épargne",
            "Déterminez un montant ou un pourcentage réaliste à mettre de côté.",
            "",
            "## Étape 5 : prévoir les dépenses périodiques",
            "Ajoutez les provisions nécessaires pour les dépenses annuelles ou irrégulières.",
            "",
            "## Étape 6 : calculer le solde",
            "```text\nSolde prévisionnel = Revenus - Dépenses prévues - Épargne prévue\n```",
            "",
            "Si le résultat est négatif, le budget doit être ajusté avant que le mois ne commence."
          ],
          examples: [
            "Revenu : 1 500 €.",
            "Logement et factures : 650 €.",
            "Alimentation : 250 €.",
            "Transport : 100 €.",
            "Loisirs : 120 €.",
            "Provisions : 80 €.",
            "Épargne : 200 €.",
            "Il reste 100 € de marge pour les dépenses non prévues ou un objectif supplémentaire."
          ],
          practice: [
            "Créez votre budget du mois prochain.",
            "Ajoutez une colonne 'prévu' et une colonne 'réel'.",
            "Prévoyez également une petite marge pour les dépenses imprévues."
          ],
          quiz: [
            {
              question: "Quelle est une bonne première étape pour construire un budget ?",
              options: [
                "Identifier ses revenus disponibles",
                "Acheter une application financière",
                "Supprimer tous ses loisirs",
                "Investir immédiatement tout son argent"
              ],
              answer: 0,
              explanation:
                "Il faut d'abord connaître les ressources disponibles avant de planifier les dépenses."
            }
          ]
        },

        {
          slug: "budget-zero-et-budget-flexible",
          title: "3.2 Budget à Zéro & Budget Flexible",
          duration: "15 min",
          description:
            "Découvrez différentes méthodes de budgétisation et choisissez celle qui correspond à votre situation.",
          objectives: [
            "Comprendre le principe d'un budget à base zéro.",
            "Comprendre la différence entre budget rigide et budget flexible.",
            "Adapter son budget aux revenus variables.",
            "Éviter l'erreur consistant à dépenser automatiquement tout ce qui reste."
          ],
          content: [
            "## Le budget à base zéro",
            "Dans cette méthode, chaque unité monétaire disponible reçoit une destination prévue : dépenses, épargne, remboursement de dette, investissement ou autre objectif.",
            "",
            "Cela ne signifie pas que le compte bancaire doit terminer à zéro. Cela signifie que l'argent disponible a été intentionnellement affecté.",
            "",
            "## Le budget flexible",
            "Un budget flexible prévoit des catégories dont les montants peuvent varier.",
            "Par exemple, l'alimentation peut avoir une limite de 250 € mais ne pas être identique chaque mois.",
            "",
            "## Pourquoi la flexibilité est importante",
            "La vie réelle comporte des variations : factures différentes, déplacements, événements familiaux, réparations ou changements de revenus.",
            "",
            "Un budget efficace doit donc être précis dans ses objectifs tout en restant adaptable dans son exécution."
          ],
          examples: [
            "Une personne prévoit 150 € pour les loisirs. Si elle dépense seulement 100 €, les 50 € restants peuvent être affectés à un objectif financier.",
            "Une personne ayant des revenus variables peut fixer des dépenses essentielles relativement stables et adapter les dépenses discrétionnaires selon le revenu du mois."
          ],
          practice: [
            "Choisissez trois catégories dans lesquelles votre budget peut être flexible.",
            "Définissez une limite minimale et une limite maximale pour chacune."
          ],
          quiz: [
            {
              question:
                "Dans un budget à base zéro, que signifie donner une destination à chaque euro ?",
              options: [
                "Décider à l'avance de l'utilisation de l'argent disponible",
                "Dépenser tout son argent avant la fin du mois",
                "Ne jamais épargner",
                "Ne conserver aucune marge"
              ],
              answer: 0,
              explanation:
                "Le principe consiste à affecter volontairement les ressources disponibles à différentes priorités."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: La Règle 50/30/20",
      lessons: [
        {
          slug: "comprendre-regle-50-30-20",
          title: "4.1 Comprendre la Règle 50/30/20",
          duration: "16 min",
          description:
            "Découvrez la règle 50/30/20 et apprenez à l'utiliser comme point de départ plutôt que comme contrainte.",
          objectives: [
            "Comprendre les trois grandes catégories de la règle 50/30/20.",
            "Calculer les montants correspondant à un revenu donné.",
            "Comprendre les limites de cette méthode.",
            "Adapter les pourcentages à sa situation réelle."
          ],
          content: [
            "## Le principe",
            "La règle 50/30/20 est un repère de budgétisation qui répartit approximativement le revenu disponible entre besoins, envies et objectifs financiers.",
            "",
            "- **50 % : besoins et obligations essentielles**",
            "- **30 % : envies et dépenses discrétionnaires**",
            "- **20 % : épargne et objectifs financiers**",
            "",
            "## Exemple",
            "Pour un revenu mensuel de 1 000 € :",
            "```text\n50 % = 500 €\n30 % = 300 €\n20 % = 200 €\n```",
            "",
            "## Ce n'est pas une règle universelle",
            "Une personne vivant dans une zone où le logement est très coûteux peut consacrer plus de 50 % aux besoins. Une personne ayant des revenus faibles peut avoir très peu de marge pour l'épargne.",
            "",
            "À l'inverse, une personne ayant peu de charges peut choisir d'épargner davantage.",
            "",
            "L'objectif est donc d'utiliser 50/30/20 comme point de départ pour réfléchir à ses priorités, et non comme une obligation mathématique."
          ],
          examples: [
            "Avec 2 000 € de revenu net, le repère 50/30/20 donnerait 1 000 € pour les besoins, 600 € pour les envies et 400 € pour l'épargne ou les objectifs financiers.",
            "Si les besoins représentent déjà 70 % du revenu, il peut être plus réaliste de réduire progressivement les dépenses discrétionnaires et d'améliorer la situation plutôt que de chercher immédiatement à atteindre 50/30/20."
          ],
          practice: [
            "Calculez les trois catégories 50/30/20 à partir de votre revenu mensuel.",
            "Comparez-les à vos dépenses réelles.",
            "Identifiez la catégorie qui présente le plus grand écart."
          ],
          quiz: [
            {
              question:
                "Quel est le rôle principal de la règle 50/30/20 ?",
              options: [
                "Servir de repère pour organiser son budget",
                "Imposer exactement les mêmes dépenses à tout le monde",
                "Garantir un rendement d'investissement",
                "Déterminer son salaire"
              ],
              answer: 0,
              explanation:
                "La règle 50/30/20 est un repère. Les proportions peuvent être adaptées à la situation personnelle."
            },
            {
              question:
                "Dans la règle 50/30/20, que représente généralement la catégorie des 30 % ?",
              options: [
                "Les dépenses discrétionnaires et les envies",
                "Les besoins essentiels",
                "Les impôts uniquement",
                "Les dettes uniquement"
              ],
              answer: 0,
              explanation:
                "Les 30 % correspondent généralement aux envies et dépenses discrétionnaires."
            }
          ]
        },

        {
          slug: "adapter-50-30-20-a-sa-situation",
          title: "4.2 Adapter la Méthode à sa Réalité",
          duration: "15 min",
          description:
            "Apprenez à adapter la règle 50/30/20 lorsque votre situation financière ne correspond pas au modèle.",
          objectives: [
            "Identifier les limites d'une règle budgétaire standard.",
            "Adapter les catégories à son niveau de revenu.",
            "Prioriser les besoins et obligations.",
            "Construire une progression financière réaliste."
          ],
          content: [
            "## Le budget doit partir de la réalité",
            "Une méthode budgétaire ne doit pas créer un objectif impossible à atteindre.",
            "",
            "Si les besoins représentent actuellement 75 % des revenus, viser immédiatement 50 % peut être irréaliste.",
            "",
            "Une meilleure approche peut consister à :",
            "1. sécuriser les dépenses essentielles ;",
            "2. supprimer ou réduire certaines dépenses discrétionnaires ;",
            "3. traiter les dettes coûteuses ;",
            "4. créer progressivement une épargne de précaution ;",
            "5. augmenter les revenus lorsque cela est possible.",
            "",
            "## Le principe de progression",
            "Le budget n'est pas un examen à réussir dès le premier mois. Vous pouvez comparer votre situation actuelle à une situation cible et progresser étape par étape."
          ],
          examples: [
            "Une personne dépense 75 % de ses revenus pour ses besoins et 25 % pour ses autres dépenses. Elle peut commencer par réduire les dépenses discrétionnaires de 5 % avant de chercher une optimisation plus importante.",
            "Une personne qui épargne déjà 30 % de ses revenus n'a aucune obligation de réduire son épargne à 20 % simplement pour respecter la règle."
          ],
          practice: [
            "Calculez vos pourcentages réels.",
            "Fixez un objectif réaliste pour les trois prochains mois.",
            "Choisissez une seule catégorie à améliorer en priorité."
          ],
          quiz: [
            {
              question:
                "Que faire si ses besoins représentent plus de 50 % du revenu ?",
              options: [
                "Adapter progressivement le budget à sa situation réelle",
                "Ignorer complètement le problème",
                "Arrêter toute épargne immédiatement",
                "Dépenser davantage pour atteindre 100 %"
              ],
              answer: 0,
              explanation:
                "La règle 50/30/20 est un repère. Une situation réelle peut nécessiter d'autres proportions et une progression graduelle."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Suivre ses Dépenses",
      lessons: [
        {
          slug: "suivre-depenses-quotidiennes",
          title: "5.1 Suivre ses Dépenses Sans se Compliquer",
          duration: "15 min",
          description:
            "Découvrez différentes méthodes pour enregistrer et analyser vos dépenses.",
          objectives: [
            "Comprendre pourquoi le suivi des dépenses est important.",
            "Choisir une méthode de suivi adaptée.",
            "Comparer les dépenses prévues aux dépenses réelles.",
            "Identifier les petites dépenses répétitives."
          ],
          content: [
            "## Pourquoi suivre ses dépenses ?",
            "Un budget prévisionnel indique ce que vous prévoyez de faire. Le suivi indique ce qui s'est réellement passé.",
            "",
            "Sans suivi, il est facile de sous-estimer certaines catégories.",
            "",
            "## Trois méthodes simples",
            "### 1. Tableur",
            "Un tableur permet de créer des colonnes pour la date, la catégorie, le montant et le mode de paiement.",
            "",
            "### 2. Application",
            "Une application de gestion financière peut automatiser certaines catégories ou importations selon les services disponibles.",
            "",
            "### 3. Méthode manuelle",
            "Un carnet peut suffire si vous préférez une approche simple.",
            "",
            "## Prévu vs réel",
            "À la fin du mois, comparez les deux.",
            "",
            "```text\nÉcart = Dépense réelle - Dépense prévue\n```",
            "",
            "Un écart important n'est pas nécessairement un échec. Il indique qu'une hypothèse du budget doit peut-être être corrigée."
          ],
          examples: [
            "Budget alimentation : 250 €. Dépenses réelles : 285 €. Écart : +35 €.",
            "Budget loisirs : 150 €. Dépenses réelles : 110 €. Écart : -40 €."
          ],
          practice: [
            "Pendant sept jours, notez chaque dépense, même les petits achats.",
            "Classez-les par catégorie.",
            "À la fin de la semaine, identifiez les trois catégories qui représentent le plus de dépenses."
          ],
          quiz: [
            {
              question:
                "Pourquoi comparer les dépenses prévues aux dépenses réelles ?",
              options: [
                "Pour identifier les écarts et améliorer le budget",
                "Pour supprimer toutes les dépenses",
                "Pour éviter toute dépense future",
                "Pour garantir un revenu supplémentaire"
              ],
              answer: 0,
              explanation:
                "La comparaison permet de voir si les hypothèses du budget correspondent à la réalité."
            }
          ]
        },

        {
          slug: "analyser-ses-habitudes-de-depenses",
          title: "5.2 Identifier les Dépenses Invisibles",
          duration: "14 min",
          description:
            "Apprenez à repérer les petites dépenses répétitives qui peuvent peser lourd sur un budget.",
          objectives: [
            "Identifier les dépenses récurrentes peu visibles.",
            "Repérer les abonnements inutilisés.",
            "Analyser les achats impulsifs.",
            "Calculer le coût annuel d'une petite dépense répétée."
          ],
          content: [
            "## Les petites dépenses peuvent s'accumuler",
            "Une dépense de 5 € semble faible lorsqu'elle est prise isolément. Mais une dépense de 5 € effectuée plusieurs fois par semaine peut représenter une somme importante sur une année.",
            "",
            "## Calculer le coût annuel",
            "```text\nCoût annuel = Coût par occurrence × Nombre d'occurrences\n```",
            "",
            "Par exemple, 5 € dépensés trois fois par semaine représentent environ :",
            "```text\n5 × 3 × 52 = 780 € par an\n```",
            "",
            "## Les abonnements",
            "Vérifiez régulièrement les abonnements que vous payez et leur fréquence d'utilisation.",
            "",
            "## Attention au discours 'toutes les petites dépenses sont mauvaises'",
            "Le but n'est pas de supprimer chaque petit plaisir. Il faut plutôt déterminer si la dépense correspond réellement à vos priorités."
          ],
          examples: [
            "Un abonnement de 10 € par mois coûte 120 € par an.",
            "Un achat impulsif de 8 € effectué quatre fois par semaine représente environ 1 664 € sur une année."
          ],
          practice: [
            "Listez vos abonnements.",
            "Calculez leur coût annuel.",
            "Identifiez deux petites dépenses répétitives que vous souhaitez conserver et deux que vous souhaitez réduire."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il analyser les petites dépenses répétitives ?",
              options: [
                "Parce qu'elles peuvent représenter une somme importante sur l'année",
                "Parce qu'elles sont toujours inutiles",
                "Parce qu'elles doivent toutes être supprimées",
                "Parce qu'elles sont toujours plus importantes que le logement"
              ],
              answer: 0,
              explanation:
                "Une petite dépense répétée peut devenir significative lorsqu'elle est multipliée sur plusieurs mois."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Épargne & Objectifs",
      lessons: [
        {
          slug: "payer-soi-meme-en-premier",
          title: "6.1 Épargner Avant de Dépenser",
          duration: "15 min",
          description:
            "Découvrez comment intégrer l'épargne directement dans votre budget au lieu de compter uniquement sur ce qui reste.",
          objectives: [
            "Comprendre le principe de l'épargne planifiée.",
            "Définir un montant réaliste à épargner.",
            "Automatiser l'épargne lorsque cela est possible.",
            "Distinguer épargne de précaution et épargne destinée à un objectif."
          ],
          content: [
            "## L'épargne comme ligne du budget",
            "Une erreur courante consiste à dire : 'J'épargnerai ce qu'il me reste à la fin du mois.'",
            "Lorsque les dépenses absorbent tout le revenu, il ne reste souvent rien.",
            "",
            "Une alternative consiste à définir l'épargne comme une catégorie planifiée.",
            "",
            "## Deux grandes catégories",
            "### Épargne de précaution",
            "Elle sert à faire face aux dépenses imprévues ou aux périodes difficiles.",
            "",
            "### Épargne pour un objectif",
            "Elle peut servir à financer un voyage, une formation, un achat important, un projet professionnel ou un autre objectif défini.",
            "",
            "## Automatiser lorsque c'est possible",
            "Un virement automatique vers un compte ou une enveloppe d'épargne peut réduire la tentation de dépenser l'argent destiné à l'objectif."
          ],
          examples: [
            "Une personne reçoit son revenu le 1er du mois et programme un virement de 100 € vers son épargne le 2 du mois.",
            "Une personne souhaite acheter un ordinateur à 1 200 € dans 12 mois. Elle peut viser environ 100 € par mois si sa situation le permet."
          ],
          practice: [
            "Définissez un objectif d'épargne concret.",
            "Indiquez son montant et sa date cible.",
            "Calculez le montant mensuel approximatif nécessaire."
          ],
          quiz: [
            {
              question:
                "Quelle est l'idée principale derrière l'épargne planifiée ?",
              options: [
                "Considérer l'épargne comme une priorité prévue dans le budget",
                "Épargner uniquement lorsqu'on dépense trop peu",
                "Investir toutes ses économies",
                "Ne jamais utiliser son épargne"
              ],
              answer: 0,
              explanation:
                "L'épargne planifiée permet de réserver une partie des ressources à des objectifs futurs."
            }
          ]
        },

        {
          slug: "fonds-urgence-et-budget",
          title: "6.2 Fonds d'Urgence & Dépenses Imprévues",
          duration: "16 min",
          description:
            "Apprenez à intégrer les imprévus dans votre budget et à construire progressivement une réserve de sécurité.",
          objectives: [
            "Comprendre le rôle d'un fonds d'urgence.",
            "Distinguer dépense imprévue et dépense prévisible mal planifiée.",
            "Construire progressivement une réserve financière.",
            "Éviter d'utiliser systématiquement le crédit pour les imprévus."
          ],
          content: [
            "## Qu'est-ce qu'un fonds d'urgence ?",
            "C'est une réserve financière destinée à absorber certains événements imprévus ou une baisse temporaire des revenus.",
            "",
            "Il peut aider à faire face à une réparation importante, une période sans revenu ou une autre dépense difficile à absorber.",
            "",
            "## Imprévu ou dépense prévisible ?",
            "Une réparation exceptionnelle peut être imprévisible. En revanche, une assurance annuelle, des frais scolaires récurrents ou l'entretien régulier d'un véhicule peuvent être prévisibles.",
            "",
            "Ces dépenses doivent idéalement être intégrées aux provisions du budget.",
            "",
            "## Combien faut-il avoir ?",
            "Il n'existe pas un montant universel valable pour tout le monde. Le niveau approprié dépend notamment des dépenses essentielles, de la stabilité des revenus, des responsabilités familiales et des protections disponibles.",
            "",
            "L'important est de commencer progressivement si aucune réserve n'existe."
          ],
          examples: [
            "Une personne commence par constituer une petite réserve correspondant à une dépense urgente qu'elle devrait normalement pouvoir absorber.",
            "Une personne ayant des revenus irréguliers peut chercher à construire une réserve plus importante qu'une personne disposant d'un revenu très stable, toutes choses égales par ailleurs."
          ],
          practice: [
            "Listez trois dépenses imprévues possibles dans votre situation.",
            "Listez trois dépenses qui sont en réalité prévisibles.",
            "Définissez un premier objectif de fonds d'urgence réaliste."
          ],
          quiz: [
            {
              question:
                "Quel est le rôle principal d'un fonds d'urgence ?",
              options: [
                "Absorber certains imprévus financiers sans dépendre immédiatement du crédit",
                "Financer tous les loisirs",
                "Garantir un rendement élevé",
                "Remplacer définitivement un revenu"
              ],
              answer: 0,
              explanation:
                "Une réserve d'urgence sert principalement à faire face à certains imprévus ou périodes difficiles."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Dettes & Budget",
      lessons: [
        {
          slug: "integrer-dettes-dans-budget",
          title: "7.1 Gérer ses Dettes dans son Budget",
          duration: "16 min",
          description:
            "Apprenez à intégrer les remboursements de dettes dans votre budget et à mesurer leur poids.",
          objectives: [
            "Identifier toutes ses dettes.",
            "Intégrer les mensualités au budget.",
            "Comprendre le poids du remboursement dans les revenus.",
            "Éviter de créer de nouvelles obligations impossibles à supporter."
          ],
          content: [
            "## Faire l'inventaire de ses dettes",
            "Pour chaque dette, notez si possible :",
            "- le montant restant ;",
            "- le taux ou coût du crédit ;",
            "- la mensualité ;",
            "- la durée restante ;",
            "- les éventuels frais.",
            "",
            "## Les remboursements font partie du budget",
            "Une mensualité de crédit est une sortie d'argent régulière. Elle doit donc apparaître clairement dans le budget.",
            "",
            "## Le poids des dettes",
            "Lorsque les remboursements représentent une part importante des revenus, la marge disponible pour l'épargne et les autres objectifs diminue.",
            "",
            "Il est donc important d'évaluer une nouvelle dette en fonction de sa capacité réelle de remboursement, et pas uniquement en fonction du montant que le prêteur accepte de financer."
          ],
          examples: [
            "Une personne gagne 1 500 € et rembourse 400 € de crédits chaque mois. Ces 400 € doivent être intégrés aux dépenses obligatoires avant de calculer ce qui reste disponible.",
            "Avant de souscrire un nouveau crédit, elle peut simuler le budget avec la nouvelle mensualité afin de vérifier son impact."
          ],
          practice: [
            "Listez toutes vos dettes et mensualités.",
            "Calculez le montant total remboursé chaque mois.",
            "Simulez l'impact d'une nouvelle mensualité avant toute nouvelle dette."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il intégrer les remboursements de dettes dans son budget ?",
              options: [
                "Parce qu'ils représentent des sorties d'argent régulières",
                "Parce qu'ils sont toujours des investissements",
                "Parce qu'ils remplacent l'épargne",
                "Parce qu'ils ne doivent jamais être comptabilisés"
              ],
              answer: 0,
              explanation:
                "Les remboursements réduisent l'argent disponible chaque mois et doivent donc être intégrés au budget."
            }
          ]
        },

        {
          slug: "prioriser-remboursement-dettes",
          title: "7.2 Remboursement : Boule de Neige ou Avalanche",
          duration: "17 min",
          description:
            "Découvrez deux approches courantes pour organiser le remboursement de plusieurs dettes.",
          objectives: [
            "Comprendre la méthode boule de neige.",
            "Comprendre la méthode avalanche.",
            "Comparer motivation et coût financier.",
            "Construire une stratégie de remboursement réaliste."
          ],
          content: [
            "## La méthode boule de neige",
            "Elle consiste généralement à rembourser en priorité la plus petite dette tout en continuant à payer les minimums des autres.",
            "",
            "L'avantage principal est psychologique : éliminer rapidement une petite dette peut donner un sentiment de progression.",
            "",
            "## La méthode avalanche",
            "Elle consiste généralement à cibler en priorité la dette ayant le coût du crédit le plus élevé, tout en maintenant les paiements requis sur les autres.",
            "",
            "Cette approche peut réduire le coût total des intérêts, selon les conditions des dettes.",
            "",
            "## Quelle méthode choisir ?",
            "La méthode mathématiquement avantageuse n'est pas toujours celle qu'une personne arrive à suivre durablement.",
            "",
            "Le plus important est de choisir une stratégie réaliste, de respecter les paiements minimums requis et d'éviter de recréer les mêmes dettes."
          ],
          examples: [
            "Dettes A : 200 € à faible coût. Dette B : 2 000 € avec un coût plus élevé. La boule de neige cible A en premier ; l'avalanche cible généralement B.",
            "Une personne qui a besoin de petites victoires pour rester motivée peut préférer la boule de neige."
          ],
          practice: [
            "Classez vos dettes par montant.",
            "Classez-les ensuite par coût du crédit.",
            "Comparez le résultat des deux méthodes."
          ],
          quiz: [
            {
              question:
                "Quelle dette est généralement prioritaire dans la méthode avalanche ?",
              options: [
                "La dette au coût du crédit le plus élevé",
                "Toujours la dette la plus importante",
                "Toujours la dette la plus récente",
                "La dette avec la mensualité la plus faible"
              ],
              answer: 0,
              explanation:
                "La méthode avalanche vise généralement la dette ayant le coût du crédit le plus élevé."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Automatiser & Améliorer son Budget",
      lessons: [
        {
          slug: "automatiser-budget",
          title: "8.1 Automatiser son Organisation Financière",
          duration: "14 min",
          description:
            "Réduisez les efforts nécessaires au suivi de votre budget grâce à des automatismes simples.",
          objectives: [
            "Identifier les opérations financières qui peuvent être automatisées.",
            "Mettre en place une épargne automatique.",
            "Créer des rappels pour les paiements importants.",
            "Réduire les oublis et les décisions répétitives."
          ],
          content: [
            "## Pourquoi automatiser ?",
            "Plus une bonne décision dépend de la motivation quotidienne, plus elle risque d'être abandonnée.",
            "",
            "L'automatisation permet de transformer certaines décisions en habitudes.",
            "",
            "## Exemples",
            "- virement automatique vers l'épargne ;",
            "- paiement automatique de certaines factures lorsque cela est approprié ;",
            "- rappels avant les échéances ;",
            "- transfert vers une enveloppe dédiée à un objectif.",
            "",
            "## Attention à l'automatisation aveugle",
            "Une automatisation doit être vérifiée régulièrement. Une facture peut changer, un revenu peut diminuer ou un abonnement peut devenir inutile.",
            "",
            "Automatiser ne signifie donc pas arrêter de contrôler."
          ],
          examples: [
            "Chaque mois, un virement automatique est effectué vers l'épargne quelques jours après la réception du revenu.",
            "Une personne programme un rappel mensuel pour vérifier ses dépenses et ses abonnements."
          ],
          practice: [
            "Choisissez une action financière que vous répétez chaque mois.",
            "Déterminez si elle peut être automatisée ou rappelée.",
            "Planifiez une vérification mensuelle de vos automatismes."
          ],
          quiz: [
            {
              question: "Quel est l'avantage principal de l'automatisation financière ?",
              options: [
                "Réduire les décisions répétitives et les oublis",
                "Garantir un revenu plus élevé",
                "Éviter toute vérification",
                "Supprimer toutes les dépenses"
              ],
              answer: 0,
              explanation:
                "L'automatisation peut simplifier certaines opérations, mais elle doit toujours être contrôlée régulièrement."
            }
          ]
        },

        {
          slug: "bilan-budgetaire-mensuel",
          title: "8.2 Faire son Bilan à la Fin du Mois",
          duration: "15 min",
          description:
            "Apprenez à analyser votre mois pour améliorer le budget suivant.",
          objectives: [
            "Comparer budget prévu et dépenses réelles.",
            "Identifier les écarts importants.",
            "Comprendre pourquoi un budget a dépassé certaines catégories.",
            "Préparer le mois suivant à partir des données réelles."
          ],
          content: [
            "## Le bilan mensuel",
            "Une fois le mois terminé, prenez quelques minutes pour comparer les prévisions aux résultats.",
            "",
            "Posez-vous quatre questions :",
            "1. Quelles catégories ont dépassé le budget ?",
            "2. Pourquoi ?",
            "3. Quelles catégories ont été sous-utilisées ?",
            "4. Que dois-je modifier le mois prochain ?",
            "",
            "## Ne pas confondre écart et échec",
            "Si vous avez dépensé plus que prévu en alimentation à cause d'une situation exceptionnelle, il faut comprendre l'écart avant de modifier définitivement le budget.",
            "",
            "Le but est de distinguer un événement exceptionnel d'une tendance répétitive.",
            "",
            "## Le budget s'améliore avec le temps",
            "Les premiers budgets sont souvent approximatifs. Après plusieurs mois de suivi, vous disposez de données plus fiables pour construire vos prévisions."
          ],
          examples: [
            "Une dépense de transport dépasse le budget pendant un mois à cause d'un déplacement exceptionnel. Il n'est pas forcément nécessaire de doubler le budget transport pour tous les mois futurs.",
            "Si l'alimentation dépasse le budget pendant six mois consécutifs, il peut être nécessaire de revoir durablement la catégorie."
          ],
          practice: [
            "Faites le bilan de votre dernier mois.",
            "Identifiez trois écarts importants.",
            "Pour chacun, indiquez s'il s'agit d'un événement exceptionnel ou d'une tendance."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il analyser les raisons d'un dépassement budgétaire ?",
              options: [
                "Pour savoir s'il s'agit d'un événement ponctuel ou d'une tendance",
                "Pour supprimer automatiquement la catégorie",
                "Pour augmenter toutes les dépenses",
                "Pour éviter de faire un budget"
              ],
              answer: 0,
              explanation:
                "Comprendre la cause de l'écart permet de décider si le budget doit réellement être modifié."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Objectifs Financiers",
      lessons: [
        {
          slug: "objectifs-financiers-intelligents",
          title: "9.1 Transformer un Souhait en Objectif Financier",
          duration: "15 min",
          description:
            "Apprenez à transformer une intention vague en objectif financier concret.",
          objectives: [
            "Définir des objectifs financiers précis.",
            "Associer un montant et une échéance à un objectif.",
            "Calculer l'effort d'épargne nécessaire.",
            "Prioriser plusieurs objectifs."
          ],
          content: [
            "## Un souhait n'est pas encore un plan",
            "Dire 'je veux économiser davantage' est trop vague pour guider une action.",
            "",
            "Un objectif plus utile indique :",
            "- le montant ;",
            "- la date cible ;",
            "- la raison ;",
            "- le montant à mettre de côté régulièrement.",
            "",
            "## Exemple",
            "Objectif : économiser 600 € en 6 mois.",
            "",
            "```text\n600 / 6 = 100 € par mois\n```",
            "",
            "Si 100 € par mois n'est pas réaliste, il faut modifier le montant, l'échéance ou le plan de financement."
          ],
          examples: [
            "Vague : 'Je veux acheter un ordinateur.'",
            "Concret : 'Je souhaite réunir 900 € en neuf mois pour acheter un ordinateur nécessaire à ma formation.'"
          ],
          practice: [
            "Choisissez un objectif financier.",
            "Définissez son montant.",
            "Fixez une échéance.",
            "Calculez le montant mensuel nécessaire."
          ],
          quiz: [
            {
              question:
                "Quelle information rend un objectif d'épargne beaucoup plus concret ?",
              options: [
                "Un montant et une échéance",
                "Une phrase motivante uniquement",
                "Un chiffre choisi au hasard",
                "Une nouvelle carte bancaire"
              ],
              answer: 0,
              explanation:
                "Le montant et l'échéance permettent de calculer l'effort nécessaire et de suivre la progression."
            }
          ]
        },

        {
          slug: "prioriser-objectifs-financiers",
          title: "9.2 Prioriser ses Objectifs",
          duration: "14 min",
          description:
            "Apprenez à choisir entre plusieurs objectifs financiers lorsque vos ressources sont limitées.",
          objectives: [
            "Distinguer urgence et importance.",
            "Prioriser les objectifs financiers.",
            "Éviter de poursuivre trop d'objectifs simultanément.",
            "Créer un ordre de priorité cohérent."
          ],
          content: [
            "## Tous les objectifs ne sont pas équivalents",
            "Vous pouvez vouloir constituer une épargne de sécurité, acheter un véhicule, voyager, financer une formation et investir en même temps.",
            "",
            "Si les ressources sont limitées, il faut établir des priorités.",
            "",
            "## Une approche possible",
            "1. dépenses et obligations essentielles ;",
            "2. gestion des risques et réserve de sécurité ;",
            "3. dettes coûteuses selon la situation ;",
            "4. objectifs à court et moyen terme ;",
            "5. objectifs à long terme et investissement selon le profil.",
            "",
            "L'ordre exact dépend de la situation personnelle."
          ],
          examples: [
            "Une personne sans aucune réserve financière peut donner la priorité à la constitution d'une première épargne de sécurité avant un voyage coûteux.",
            "Une personne disposant déjà d'une réserve suffisante peut réorienter davantage son budget vers des objectifs à long terme."
          ],
          practice: [
            "Listez cinq objectifs financiers.",
            "Classez-les par urgence et importance.",
            "Conservez au maximum trois objectifs prioritaires pour les prochains mois."
          ],
          quiz: [
            {
              question:
                "Pourquoi est-il utile de prioriser ses objectifs financiers ?",
              options: [
                "Parce que les ressources disponibles sont limitées",
                "Parce qu'un seul objectif est toujours autorisé",
                "Parce que l'épargne est inutile",
                "Parce que toutes les dépenses doivent être identiques"
              ],
              answer: 0,
              explanation:
                "Prioriser permet d'utiliser les ressources disponibles sur les objectifs les plus importants."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Projet Final - Construire son Budget Personnel",
      lessons: [
        {
          slug: "projet-final-budget-personnel",
          title: "10.1 Construire & Suivre son Budget sur 30 Jours",
          duration: "20 min",
          description:
            "Mettez en pratique tout le cours en construisant un budget personnel complet et en définissant votre plan d'amélioration.",
          objectives: [
            "Construire un budget mensuel complet.",
            "Classer les dépenses par catégories.",
            "Définir une épargne réaliste.",
            "Prévoir les dépenses périodiques.",
            "Créer un système de suivi sur 30 jours.",
            "Réaliser un bilan à la fin du mois."
          ],
          content: [
            "## Étape 1 : calculer les revenus disponibles",
            "Listez vos revenus réguliers et séparez les revenus exceptionnels.",
            "",
            "## Étape 2 : établir les dépenses essentielles",
            "Ajoutez le logement, l'alimentation, le transport, les factures et les autres obligations.",
            "",
            "## Étape 3 : ajouter les dépenses discrétionnaires",
            "Prévoyez les loisirs, restaurants, sorties, achats personnels et autres envies.",
            "",
            "## Étape 4 : prévoir l'épargne",
            "Définissez un montant réaliste pour votre situation.",
            "",
            "## Étape 5 : intégrer les provisions",
            "Transformez certaines dépenses annuelles en montants mensuels.",
            "",
            "## Étape 6 : comparer avec la règle 50/30/20",
            "Utilisez cette règle comme outil de comparaison, pas comme une obligation.",
            "",
            "## Étape 7 : suivre les dépenses réelles",
            "Pendant 30 jours, notez les dépenses et comparez-les aux montants prévus.",
            "",
            "## Étape 8 : faire le bilan",
            "À la fin du mois, identifiez :",
            "- les dépenses sous-estimées ;",
            "- les dépenses inutiles ou peu importantes ;",
            "- les dépenses imprévues ;",
            "- l'épargne réellement réalisée ;",
            "- les modifications à apporter au mois suivant.",
            "",
            "## Votre tableau de bord",
            "Vous pouvez utiliser une structure simple :",
            "",
            "```text\nRevenus\n- Salaire / activité : ______\n- Autres revenus : ______\n\nBesoins\n- Logement : ______\n- Alimentation : ______\n- Transport : ______\n- Factures : ______\n\nEnvies\n- Loisirs : ______\n- Restaurants : ______\n- Achats personnels : ______\n\nObjectifs financiers\n- Épargne : ______\n- Dette : ______\n- Provisions : ______\n\nSolde prévu : ______\nSolde réel : ______\n```",
            "",
            "## Le véritable objectif",
            "Un budget utile n'est pas celui qui est parfaitement équilibré sur papier. C'est celui qui vous aide à comprendre votre situation, à anticiper vos dépenses et à prendre de meilleures décisions."
          ],
          examples: [
            "Projet : une personne disposant de 1 500 € par mois crée son budget, suit ses dépenses pendant 30 jours, constate que le transport est supérieur à ses prévisions et ajuste cette catégorie le mois suivant.",
            "Après trois mois, elle observe également que certains abonnements sont peu utilisés et réaffecte leur coût à un objectif d'épargne."
          ],
          practice: [
            "Créez votre budget complet pour le prochain mois.",
            "Utilisez les dépenses réelles du mois précédent lorsque vous les connaissez.",
            "Ajoutez une colonne 'Prévu' et une colonne 'Réel'.",
            "Suivez toutes les dépenses pendant 30 jours.",
            "À la fin du mois, réalisez un bilan et modifiez votre budget pour le mois suivant.",
            "Conservez une trace de votre progression pendant au moins trois mois."
          ],
          quiz: [
            {
              question:
                "Quel est le meilleur indicateur permettant de savoir si votre budget devient plus réaliste ?",
              options: [
                "La comparaison répétée entre les montants prévus et les dépenses réelles",
                "Le fait de ne jamais dépasser aucune catégorie",
                "Le fait de supprimer toutes les dépenses de loisirs",
                "Le fait d'utiliser exactement la règle 50/30/20"
              ],
              answer: 0,
              explanation:
                "Comparer régulièrement les prévisions aux résultats permet d'améliorer progressivement la précision du budget."
            },
            {
              question:
                "Quel est le principal objectif d'un budget personnel ?",
              options: [
                "Donner une direction à son argent et faciliter les décisions financières",
                "Empêcher toute dépense non essentielle",
                "Garantir un investissement rentable",
                "Augmenter automatiquement son salaire"
              ],
              answer: 0,
              explanation:
                "Un budget est avant tout un outil de planification et de décision. Il ne garantit ni revenu ni rendement."
            }
          ]
        }
      ]
    }
  ]
};

export const faireUnBudgetExamQuestions: ExamQuestion[] = [
  {
    question: "Qu'est-ce qu'un budget personnel ?",
    options: [
      "Un plan permettant d'organiser ses revenus, dépenses et objectifs financiers",
      "Une liste uniquement destinée à suivre les loisirs",
      "Un contrat bancaire",
      "Un outil réservé aux entreprises"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle formule représente correctement le solde budgétaire simplifié ?",
    options: [
      "Revenus - Dépenses",
      "Dépenses - Revenus",
      "Revenus + Dettes",
      "Épargne × Revenus"
    ],
    correctAnswer: 0
  },
  {
    question: "Que représentent généralement les 50 % de la règle 50/30/20 ?",
    options: [
      "Les besoins et obligations essentielles",
      "Les loisirs uniquement",
      "Les investissements uniquement",
      "Les achats impulsifs"
    ],
    correctAnswer: 0
  },
  {
    question: "Que représentent généralement les 30 % de la règle 50/30/20 ?",
    options: [
      "Les envies et dépenses discrétionnaires",
      "Le logement uniquement",
      "Les dettes uniquement",
      "Les revenus supplémentaires"
    ],
    correctAnswer: 0
  },
  {
    question: "Que représentent généralement les 20 % de la règle 50/30/20 ?",
    options: [
      "L'épargne et les objectifs financiers",
      "Les besoins essentiels uniquement",
      "Les loisirs uniquement",
      "Les impôts uniquement"
    ],
    correctAnswer: 0
  },
  {
    question: "La règle 50/30/20 doit-elle être appliquée exactement à tout le monde ?",
    options: [
      "Non, c'est un repère qui peut être adapté à la situation personnelle",
      "Oui, sans aucune exception",
      "Oui, car elle est imposée par les banques",
      "Non, car elle interdit toute épargne"
    ],
    correctAnswer: 0
  },
  {
    question: "Une dépense annuelle de 600 € peut être préparée avec quelle provision mensuelle approximative ?",
    options: [
      "50 €",
      "10 €",
      "100 €",
      "600 €"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi distinguer les dépenses fixes et variables ?",
    options: [
      "Pour mieux prévoir les montants qui peuvent changer d'un mois à l'autre",
      "Pour supprimer les dépenses fixes",
      "Pour augmenter automatiquement les revenus",
      "Pour éviter de suivre les dépenses"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel exemple correspond généralement à une dépense discrétionnaire ?",
    options: [
      "Une sortie au restaurant",
      "Une facture obligatoire",
      "Une mensualité de dette",
      "Un besoin alimentaire essentiel"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi suivre les dépenses réelles après avoir construit un budget ?",
    options: [
      "Pour comparer les prévisions à la réalité et améliorer le budget",
      "Pour éviter toutes les dépenses",
      "Pour garantir une augmentation de salaire",
      "Pour investir automatiquement"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'intérêt de comparer le budget prévu au budget réel ?",
    options: [
      "Identifier les écarts et comprendre leurs causes",
      "Prouver que toutes les dépenses sont mauvaises",
      "Supprimer les catégories dépassées",
      "Éviter de faire un budget futur"
    ],
    correctAnswer: 0
  },
  {
    question: "Une dépense de 5 € effectuée trois fois par semaine représente environ combien sur une année de 52 semaines ?",
    options: [
      "780 €",
      "156 €",
      "260 €",
      "1 560 €"
    ],
    correctAnswer: 0
  },
  {
    question: "Qu'est-ce qu'un fonds d'urgence ?",
    options: [
      "Une réserve destinée à absorber certains imprévus financiers",
      "Un compte destiné uniquement aux vacances",
      "Un investissement sans risque garanti",
      "Une dette supplémentaire"
    ],
    correctAnswer: 0
  },
  {
    question: "Existe-t-il un montant universel de fonds d'urgence adapté à tout le monde ?",
    options: [
      "Non, le montant dépend notamment de la situation et des dépenses essentielles",
      "Oui, exactement 500 € pour tout le monde",
      "Oui, exactement 20 % du salaire",
      "Oui, exactement trois mois de salaire pour tous"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle différence existe entre une dépense imprévue et une dépense prévisible ?",
    options: [
      "Une dépense prévisible peut généralement être anticipée et provisionnée",
      "Une dépense prévisible ne coûte jamais d'argent",
      "Une dépense imprévue doit toujours être payée à crédit",
      "Il n'existe aucune différence"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi intégrer les remboursements de dettes au budget ?",
    options: [
      "Parce qu'ils réduisent les revenus disponibles pour les autres objectifs",
      "Parce qu'ils constituent toujours une épargne",
      "Parce qu'ils augmentent automatiquement le salaire",
      "Parce qu'ils ne représentent aucune sortie d'argent"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle dette est généralement ciblée en priorité avec la méthode avalanche ?",
    options: [
      "La dette ayant le coût du crédit le plus élevé",
      "Toujours la plus petite dette",
      "Toujours la plus ancienne",
      "Toujours celle avec la plus grande mensualité"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le principal objectif de la méthode boule de neige ?",
    options: [
      "Rembourser en priorité les plus petites dettes pour créer des victoires rapides",
      "Payer uniquement les intérêts",
      "Augmenter ses dettes",
      "Ne rembourser aucune dette"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'intérêt d'automatiser une épargne ?",
    options: [
      "Réduire les décisions répétitives et rendre l'épargne plus régulière",
      "Garantir un rendement",
      "Éviter tout contrôle du compte",
      "Supprimer les dépenses"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi faut-il contrôler régulièrement les opérations automatisées ?",
    options: [
      "Parce que les revenus, dépenses et montants peuvent changer",
      "Parce que l'automatisation est toujours dangereuse",
      "Parce qu'une automatisation augmente les dettes",
      "Parce que les virements automatiques ne fonctionnent jamais"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel objectif est le plus concret ?",
    options: [
      "Épargner 600 € en six mois",
      "Économiser davantage",
      "Devenir riche",
      "Dépenser moins un jour"
    ],
    correctAnswer: 0
  },
  {
    question: "Si vous souhaitez économiser 1 200 € en 12 mois, quel montant mensuel faut-il approximativement prévoir ?",
    options: [
      "100 €",
      "50 €",
      "120 €",
      "200 €"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi est-il utile de prioriser ses objectifs financiers ?",
    options: [
      "Parce que les ressources disponibles sont limitées",
      "Parce qu'il est interdit d'avoir plusieurs objectifs",
      "Parce que l'épargne est inutile",
      "Parce que tous les objectifs ont exactement la même urgence"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle est une bonne utilisation d'un tableur budgétaire ?",
    options: [
      "Comparer les montants prévus aux montants réellement dépensés",
      "Garantir un revenu",
      "Remplacer automatiquement toutes les décisions financières",
      "Empêcher toute dépense"
    ],
    correctAnswer: 0
  },
  {
    question: "Que faire lorsqu'une catégorie dépasse son budget pendant un mois ?",
    options: [
      "Analyser la cause avant de décider si le budget doit être modifié",
      "Supprimer immédiatement la catégorie",
      "Doubler toutes les autres dépenses",
      "Arrêter complètement de suivre le budget"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le meilleur rôle de la règle 50/30/20 dans un budget personnel ?",
    options: [
      "Servir de point de comparaison et de repère",
      "Imposer une structure identique à chaque personne",
      "Garantir un rendement d'investissement",
      "Déterminer automatiquement le montant du salaire"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel comportement permet généralement d'améliorer son budget dans le temps ?",
    options: [
      "Suivre les dépenses, analyser les écarts et ajuster régulièrement le budget",
      "Construire un budget une seule fois puis ne plus jamais le modifier",
      "Ignorer les dépenses variables",
      "Dépenser tout le revenu disponible"
    ],
    correctAnswer: 0
  }
];