import type { CourseDetail, ExamQuestion } from "../coursesData";

export const comprendreSonArgentCourse: CourseDetail = {
  slug: "comprendre-son-argent",
  categorySlug: "finance",
  title: "Comprendre son Argent & Santé Financière",
  description:
    "Apprends à comprendre tes revenus, dépenses, dettes, épargne et patrimoine afin de construire une gestion financière personnelle plus saine et plus consciente.",
  level: "Débutant",
  icon: "💰",

  modules: [
    {
      title: "Module 1: Comprendre sa Situation Financière",
      lessons: [
        {
          slug: "comprendre-situation-financiere",
          title: "1.1 Comprendre sa Situation Financière",
          duration: "16 min",
          description:
            "Découvrez les principaux éléments qui permettent de comprendre où va votre argent et où vous en êtes financièrement.",
          objectives: [
            "Comprendre la différence entre revenus, dépenses, dettes et patrimoine.",
            "Identifier les principales sources de revenus.",
            "Comprendre pourquoi suivre son argent est important.",
            "Commencer à établir une photographie de sa situation financière."
          ],
          content: [
            "## Pourquoi comprendre son argent ?",
            "La gestion financière personnelle commence rarement par un investissement complexe. Elle commence par la compréhension de ce qui entre, de ce qui sort et de ce qui reste.",
            "",
            "Sans visibilité, il est difficile de savoir pourquoi un salaire semble disparaître rapidement, combien peut réellement être épargné ou quelles dépenses doivent être réduites.",
            "",
            "## Les quatre grandes catégories",
            "- **Revenus :** argent reçu régulièrement ou occasionnellement.",
            "- **Dépenses :** argent utilisé pour financer des besoins, envies ou obligations.",
            "- **Dettes :** sommes dues à d'autres personnes ou institutions.",
            "- **Patrimoine :** ensemble des ressources ayant une valeur économique, moins les dettes.",
            "",
            "## Le premier objectif",
            "Avant de chercher à faire fructifier son argent, il faut savoir combien on possède, combien on doit et combien on dépense.",
            "",
            "Cette photographie financière peut ensuite servir de base pour définir des objectifs réalistes."
          ],
          examples: [
            "Une personne gagne 800 € par mois, dépense 650 € et rembourse 50 € de dette. Elle dispose d'une marge de 100 € avant de prendre en compte d'autres éventuelles dépenses irrégulières.",
            "Une autre personne gagne davantage mais dépense presque tout son revenu. Son revenu est supérieur, mais sa capacité d'épargne peut être faible."
          ],
          practice: [
            "Note toutes tes sources de revenus mensuels.",
            "Liste tes dépenses fixes et variables.",
            "Liste tes dettes éventuelles.",
            "Calcule approximativement ce qu'il te reste à la fin du mois."
          ],
          quiz: [
            {
              question: "Quelle est la première étape d'une bonne gestion financière personnelle ?",
              options: [
                "Comprendre ses revenus, ses dépenses, ses dettes et son patrimoine",
                "Acheter immédiatement des actions",
                "Contracter un nouveau crédit",
                "Supprimer toutes ses dépenses"
              ],
              answer: 0,
              explanation:
                "La visibilité financière est la base de toute décision financière raisonnable."
            }
          ]
        },
        {
          slug: "bilan-financier-personnel",
          title: "1.2 Construire son Bilan Financier Personnel",
          duration: "17 min",
          description:
            "Apprenez à calculer votre patrimoine net et à construire une photographie simple de votre situation.",
          objectives: [
            "Identifier ses actifs.",
            "Identifier ses dettes.",
            "Calculer sa valeur nette.",
            "Comprendre l'évolution de son patrimoine."
          ],
          content: [
            "## Qu'est-ce qu'un actif ?",
            "Dans un sens financier général, un actif est une ressource ayant une valeur économique. Il peut s'agir d'argent disponible, d'une épargne, d'un investissement, d'un bien immobilier ou d'autres ressources valorisables.",
            "",
            "Un actif n'est pas nécessairement un élément qui produit immédiatement un revenu.",
            "",
            "## Qu'est-ce qu'une dette ?",
            "Une dette représente une obligation financière envers une autre partie : crédit immobilier, prêt étudiant, crédit à la consommation, dette personnelle, etc.",
            "",
            "## Calculer sa valeur nette",
            "```text",
            "Valeur nette = Total des actifs - Total des dettes",
            "```",
            "",
            "La valeur nette est une photographie à un moment donné. Elle peut évoluer avec l'épargne, les remboursements, les variations de valeur des actifs ou de nouvelles dettes.",
            "",
            "## Exemple",
            "Supposons :",
            "- Épargne : 2 000 €",
            "- Investissements : 1 500 €",
            "- Valeur d'un véhicule : 5 000 €",
            "- Dettes : 3 000 €",
            "",
            "```text",
            "Valeur nette = 2 000 + 1 500 + 5 000 - 3 000",
            "Valeur nette = 5 500 €",
            "```"
          ],
          examples: [
            "Deux personnes peuvent avoir le même salaire mais des patrimoines très différents en raison de leurs dettes, de leur épargne et de leurs actifs."
          ],
          practice: [
            "Crée un tableau avec tes actifs.",
            "Crée un deuxième tableau avec tes dettes.",
            "Calcule ta valeur nette.",
            "Conserve cette valeur comme point de comparaison pour les prochains mois."
          ],
          quiz: [
            {
              question: "Comment calcule-t-on la valeur nette ?",
              options: [
                "Total des actifs - Total des dettes",
                "Salaire x 12",
                "Revenus - salaire",
                "Épargne + dépenses"
              ],
              answer: 0,
              explanation:
                "La valeur nette correspond à la valeur des ressources détenues moins les obligations financières."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Revenus & Dépenses",
      lessons: [
        {
          slug: "comprendre-ses-revenus",
          title: "2.1 Comprendre ses Revenus",
          duration: "15 min",
          description:
            "Apprenez à distinguer les différentes sources de revenus et à raisonner sur votre revenu réellement disponible.",
          objectives: [
            "Identifier les différents types de revenus.",
            "Distinguer revenu brut et revenu net lorsque cela s'applique.",
            "Comprendre les revenus réguliers et irréguliers.",
            "Éviter de construire un budget uniquement sur des revenus incertains."
          ],
          content: [
            "## Les revenus ne sont pas tous identiques",
            "Selon la situation, les revenus peuvent provenir d'un salaire, d'une activité indépendante, d'une entreprise, de loyers, d'intérêts, de dividendes ou d'autres sources.",
            "",
            "## Revenus réguliers et irréguliers",
            "Un salaire mensuel peut être relativement prévisible. Une activité freelance ou commerciale peut varier fortement d'un mois à l'autre.",
            "",
            "Lorsque les revenus sont irréguliers, il est particulièrement important d'éviter de considérer le meilleur mois comme une référence permanente.",
            "",
            "## Revenu brut et revenu net",
            "Le revenu annoncé avant certaines retenues ou charges ne correspond pas nécessairement à l'argent réellement disponible pour les dépenses personnelles.",
            "",
            "Pour établir un budget, utilise autant que possible le montant réellement disponible après les retenues pertinentes."
          ],
          examples: [
            "Un freelance peut facturer 2 000 € sur un mois sans pouvoir considérer ces 2 000 € comme son revenu personnel disponible. Il doit tenir compte des frais professionnels et obligations applicables.",
            "Une personne salariée peut recevoir un montant net différent du salaire brut indiqué dans son contrat."
          ],
          practice: [
            "Liste tes sources de revenus.",
            "Indique pour chacune si elle est régulière ou variable.",
            "Identifie le montant réellement disponible pour ton budget."
          ],
          quiz: [
            {
              question: "Pourquoi faut-il être prudent avec les revenus variables ?",
              options: [
                "Parce qu'un mois exceptionnel ne garantit pas le même revenu les mois suivants",
                "Parce que les revenus variables sont toujours mauvais",
                "Parce qu'ils ne peuvent jamais être budgétés",
                "Parce qu'ils sont forcément illégaux"
              ],
              answer: 0,
              explanation:
                "Une activité variable nécessite généralement une planification prudente basée sur des hypothèses réalistes."
            }
          ]
        },
        {
          slug: "categoriser-depenses",
          title: "2.2 Comprendre et Catégoriser ses Dépenses",
          duration: "18 min",
          description:
            "Apprenez à analyser vos dépenses sans simplement chercher à tout supprimer.",
          objectives: [
            "Distinguer dépenses fixes et variables.",
            "Identifier les dépenses essentielles et discrétionnaires.",
            "Repérer les dépenses récurrentes oubliées.",
            "Construire une vision réaliste de son coût de vie."
          ],
          content: [
            "## Dépenses fixes et variables",
            "Une dépense fixe est relativement stable d'un mois à l'autre, comme certains loyers ou abonnements.",
            "",
            "Une dépense variable peut changer selon la consommation, comme l'alimentation, les transports ou certaines activités.",
            "",
            "## Essentiel et discrétionnaire",
            "Une autre classification consiste à distinguer les dépenses nécessaires au fonctionnement quotidien des dépenses davantage liées aux envies ou au confort.",
            "",
            "Cette distinction ne signifie pas que toutes les dépenses non essentielles sont mauvaises. L'objectif est de comprendre ses choix.",
            "",
            "## Les petites dépenses récurrentes",
            "Un abonnement peu utilisé peut sembler insignifiant isolément mais représenter une somme importante lorsqu'il est répété pendant plusieurs années."
          ],
          examples: [
            "Un abonnement de 10 € par mois représente 120 € sur une année.",
            "Une dépense quotidienne de 5 € représente environ 150 € sur un mois de 30 jours."
          ],
          practice: [
            "Analyse tes dépenses des 30 derniers jours.",
            "Classe-les en logement, alimentation, transport, santé, communication, loisirs, abonnements et autres.",
            "Identifie trois dépenses que tu souhaites simplement mieux comprendre avant de décider de les modifier."
          ],
          quiz: [
            {
              question: "Pourquoi catégoriser ses dépenses ?",
              options: [
                "Pour comprendre où va son argent et prendre de meilleures décisions",
                "Pour supprimer automatiquement tous les loisirs",
                "Pour éviter de payer ses factures",
                "Pour augmenter son revenu"
              ],
              answer: 0,
              explanation:
                "La catégorisation permet de voir les principaux postes de dépenses et leurs évolutions."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Construire un Budget",
      lessons: [
        {
          slug: "budget-personnel",
          title: "3.1 Construire un Budget Personnel",
          duration: "18 min",
          description:
            "Apprenez à construire un budget simple, réaliste et adaptable à votre situation.",
          objectives: [
            "Comprendre le rôle d'un budget.",
            "Construire un budget mensuel.",
            "Prévoir les dépenses irrégulières.",
            "Comparer prévisions et dépenses réelles."
          ],
          content: [
            "## Un budget n'est pas une punition",
            "Un budget est un outil de décision. Il permet de décider à l'avance comment utiliser une partie de ses revenus.",
            "",
            "## Structure simple",
            "```text",
            "Revenus",
            "- Dépenses essentielles",
            "- Dépenses discrétionnaires",
            "- Épargne",
            "- Remboursement de dettes",
            "= Solde",
            "```",
            "",
            "## Les dépenses annuelles",
            "Certaines dépenses ne sont pas mensuelles : assurance annuelle, frais scolaires, entretien, cadeaux, voyages ou renouvellement d'équipement.",
            "",
            "Si une dépense annuelle prévisible est de 600 €, on peut prévoir environ 50 € par mois afin de ne pas être surpris lorsque l'échéance arrive.",
            "",
            "## Budget prévisionnel et budget réel",
            "Le budget prévisionnel indique ce que tu prévois. Le budget réel montre ce qui s'est effectivement passé. Comparer les deux permet d'améliorer progressivement tes estimations."
          ],
          examples: [
            "Une personne ayant 1 000 € disponibles peut prévoir 500 € pour les dépenses essentielles, 200 € pour les dépenses variables, 200 € pour l'épargne ou les objectifs financiers et 100 € pour les loisirs, selon sa situation."
          ],
          practice: [
            "Construis ton budget du prochain mois.",
            "Ajoute une catégorie pour les dépenses annuelles ou irrégulières.",
            "À la fin du mois, compare tes prévisions aux dépenses réelles."
          ],
          quiz: [
            {
              question: "Quel est le rôle principal d'un budget ?",
              options: [
                "Planifier et suivre l'utilisation de ses revenus",
                "Interdire toute dépense",
                "Garantir un investissement rentable",
                "Augmenter automatiquement son salaire"
              ],
              answer: 0,
              explanation:
                "Un budget permet d'organiser ses revenus et ses dépenses en fonction de ses priorités."
            }
          ]
        },
        {
          slug: "regle-budget-50-30-20",
          title: "3.2 Les Méthodes de Budget : 50/30/20 et Autres Approches",
          duration: "16 min",
          description:
            "Découvrez différentes méthodes de budgétisation et pourquoi aucune règle ne convient à tout le monde.",
          objectives: [
            "Comprendre la logique d'une règle de répartition.",
            "Connaître la méthode 50/30/20.",
            "Adapter une méthode à sa situation.",
            "Éviter de considérer une règle comme universelle."
          ],
          content: [
            "## La règle 50/30/20",
            "Une méthode populaire consiste à répartir approximativement le revenu disponible entre besoins, envies et épargne ou objectifs financiers.",
            "",
            "Elle est souvent présentée ainsi :",
            "- 50 % pour les besoins ;",
            "- 30 % pour les envies ;",
            "- 20 % pour l'épargne et certains objectifs financiers.",
            "",
            "Ces pourcentages sont des repères, pas une loi financière.",
            "",
            "## Pourquoi adapter ?",
            "Une personne vivant dans une région où le logement coûte très cher peut consacrer plus de 50 % aux besoins. Une personne ayant un revenu élevé et peu de dépenses fixes peut épargner davantage.",
            "",
            "L'objectif n'est pas de respecter parfaitement une formule mais de créer une répartition cohérente avec sa réalité."
          ],
          examples: [
            "Si une personne gagne 1 500 € disponibles par mois, la règle pourrait servir de point de départ théorique, mais ses dépenses réelles peuvent nécessiter une autre répartition."
          ],
          practice: [
            "Applique la règle 50/30/20 à ton revenu uniquement comme exercice.",
            "Compare-la à ta situation réelle.",
            "Identifie les pourcentages que tu pourrais réellement respecter."
          ],
          quiz: [
            {
              question: "Comment faut-il considérer la règle 50/30/20 ?",
              options: [
                "Comme un repère adaptable",
                "Comme une obligation légale",
                "Comme une règle identique pour toutes les personnes",
                "Comme une stratégie d'investissement"
              ],
              answer: 0,
              explanation:
                "Les méthodes de budget sont des outils. Elles doivent être adaptées aux revenus, coûts et objectifs de chacun."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Épargne & Fonds d'Urgence",
      lessons: [
        {
          slug: "importance-epargne",
          title: "4.1 Pourquoi Épargner ?",
          duration: "15 min",
          description:
            "Comprenez les différents objectifs de l'épargne et comment créer une habitude durable.",
          objectives: [
            "Comprendre les différents rôles de l'épargne.",
            "Distinguer épargne de précaution et épargne destinée à un projet.",
            "Définir un objectif d'épargne.",
            "Créer une habitude régulière."
          ],
          content: [
            "## Pourquoi épargner ?",
            "L'épargne peut servir à absorber un imprévu, financer un projet, préparer une dépense future ou construire progressivement un patrimoine.",
            "",
            "## Plusieurs objectifs",
            "- Fonds d'urgence.",
            "- Projet à court terme.",
            "- Formation.",
            "- Achat important.",
            "- Projet entrepreneurial.",
            "- Objectif financier à long terme.",
            "",
            "## Épargner avant de dépenser",
            "Une méthode consiste à automatiser une partie de l'épargne juste après réception des revenus plutôt que d'attendre la fin du mois.",
            "",
            "Le montant doit rester réaliste. Une petite somme régulièrement épargnée peut être plus durable qu'un objectif très élevé impossible à maintenir."
          ],
          examples: [
            "Une personne peut commencer par mettre automatiquement de côté 5 % de son revenu puis augmenter progressivement lorsque son budget le permet."
          ],
          practice: [
            "Définis trois objectifs d'épargne.",
            "Indique le montant nécessaire pour chacun.",
            "Classe-les selon leur priorité et leur horizon temporel."
          ],
          quiz: [
            {
              question: "Quel est l'intérêt d'automatiser l'épargne ?",
              options: [
                "Réduire le risque d'oublier ou de dépenser la somme prévue",
                "Garantir un rendement",
                "Éviter toutes les dépenses",
                "Supprimer les besoins de budget"
              ],
              answer: 0,
              explanation:
                "L'automatisation facilite la régularité de l'épargne, mais elle ne garantit aucun rendement."
            }
          ]
        },
        {
          slug: "fonds-urgence",
          title: "4.2 Construire un Fonds d'Urgence",
          duration: "18 min",
          description:
            "Apprenez à créer une réserve financière destinée aux dépenses imprévues.",
          objectives: [
            "Comprendre le rôle d'un fonds d'urgence.",
            "Identifier les dépenses réellement essentielles.",
            "Définir un objectif adapté à sa situation.",
            "Choisir une réserve facilement accessible."
          ],
          content: [
            "## Qu'est-ce qu'un fonds d'urgence ?",
            "Il s'agit d'une réserve financière destinée à faire face à des événements imprévus : perte temporaire de revenus, réparation importante, dépense urgente ou autre situation exceptionnelle.",
            "",
            "## Combien faut-il avoir ?",
            "Il n'existe pas un montant universel. Une approche courante consiste à raisonner en nombre de mois de dépenses essentielles, mais l'objectif dépend de la stabilité des revenus, de la situation familiale, des protections disponibles et des risques personnels.",
            "",
            "## Accessibilité",
            "Une réserve d'urgence doit généralement être accessible rapidement et ne pas dépendre d'une vente urgente d'un actif risqué.",
            "",
            "## Ne pas confondre urgence et envie",
            "Une nouvelle télévision ou un voyage prévu ne constituent généralement pas une urgence. Ils peuvent être financés par une épargne dédiée."
          ],
          examples: [
            "Une personne ayant 700 € de dépenses essentielles mensuelles peut décider de construire progressivement une réserve correspondant à plusieurs mois de ces dépenses."
          ],
          practice: [
            "Calcule tes dépenses essentielles mensuelles.",
            "Choisis un premier objectif de réserve.",
            "Détermine combien tu peux mettre de côté chaque mois pour atteindre cet objectif."
          ],
          quiz: [
            {
              question: "Quel est le rôle principal d'un fonds d'urgence ?",
              options: [
                "Faire face à des dépenses imprévues ou à une baisse temporaire de revenus",
                "Financer des achats impulsifs",
                "Obtenir le rendement le plus élevé possible",
                "Remplacer définitivement un salaire"
              ],
              answer: 0,
              explanation:
                "Le fonds d'urgence vise principalement la sécurité financière et la disponibilité des fonds."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Dettes & Crédit",
      lessons: [
        {
          slug: "comprendre-dettes",
          title: "5.1 Comprendre les Dettes",
          duration: "17 min",
          description:
            "Découvrez comment analyser une dette au-delà du simple montant emprunté.",
          objectives: [
            "Distinguer les différents types de dettes.",
            "Comprendre le coût d'un crédit.",
            "Identifier les dettes prioritaires.",
            "Éviter l'accumulation incontrôlée."
          ],
          content: [
            "## Toutes les dettes ne se ressemblent pas",
            "Une dette peut financer un besoin important ou un investissement, mais elle implique toujours une obligation future.",
            "",
            "Pour analyser un crédit, regarde notamment :",
            "- montant emprunté ;",
            "- taux d'intérêt ;",
            "- durée ;",
            "- mensualité ;",
            "- frais éventuels ;",
            "- coût total.",
            "",
            "## Le coût total compte",
            "Une mensualité faible peut sembler attractive tout en correspondant à une durée longue et à un coût total plus élevé.",
            "",
            "Il faut donc regarder l'ensemble du contrat et pas uniquement le montant mensuel."
          ],
          examples: [
            "Deux crédits peuvent avoir des mensualités proches mais des coûts totaux très différents en raison de leurs taux et durées."
          ],
          practice: [
            "Liste tes dettes éventuelles.",
            "Pour chacune, note le montant restant, le taux, la mensualité et la durée restante si ces informations sont disponibles.",
            "Classe-les selon leur coût et leur urgence."
          ],
          quiz: [
            {
              question: "Pourquoi faut-il regarder le coût total d'un crédit ?",
              options: [
                "Parce qu'une mensualité seule ne montre pas nécessairement le coût complet de l'emprunt",
                "Parce que les mensualités ne servent jamais",
                "Parce que tous les crédits coûtent exactement la même chose",
                "Parce que le taux n'a aucune importance"
              ],
              answer: 0,
              explanation:
                "Le coût total permet de mieux comprendre ce que l'emprunt coûtera réellement sur toute sa durée."
            }
          ]
        },
        {
          slug: "rembourser-dettes",
          title: "5.2 Stratégies pour Réduire ses Dettes",
          duration: "18 min",
          description:
            "Découvrez les principales méthodes de remboursement et comment construire un plan réaliste.",
          objectives: [
            "Organiser le remboursement de plusieurs dettes.",
            "Comprendre les méthodes avalanche et boule de neige.",
            "Éviter de nouvelles dettes inutiles.",
            "Construire un plan de remboursement."
          ],
          content: [
            "## Méthode avalanche",
            "La méthode avalanche consiste généralement à prioriser les dettes présentant les taux d'intérêt les plus élevés tout en continuant à effectuer les paiements minimums nécessaires sur les autres.",
            "",
            "Cette approche peut réduire le coût des intérêts.",
            "",
            "## Méthode boule de neige",
            "La méthode boule de neige consiste à commencer par la plus petite dette, afin d'obtenir rapidement une première victoire psychologique, tout en continuant à respecter les paiements nécessaires sur les autres dettes.",
            "",
            "## Quelle méthode choisir ?",
            "La méthode mathématiquement la moins coûteuse et la méthode psychologiquement la plus motivante ne sont pas toujours les mêmes.",
            "",
            "L'important est de choisir une stratégie que tu peux réellement suivre."
          ],
          examples: [
            "Avec trois dettes, une personne peut choisir de cibler d'abord celle dont le taux est le plus élevé, tandis qu'une autre peut préférer solder une petite dette rapidement pour simplifier sa situation."
          ],
          practice: [
            "Classe tes dettes par taux d'intérêt.",
            "Classe-les également par montant restant.",
            "Compare les deux stratégies et choisis celle qui correspond le mieux à ta situation."
          ],
          quiz: [
            {
              question: "Quelle est l'idée principale de la méthode avalanche ?",
              options: [
                "Prioriser généralement la dette au taux d'intérêt le plus élevé",
                "Commencer toujours par la dette la plus petite",
                "Ne rembourser aucune dette",
                "Choisir la dette la plus récente"
              ],
              answer: 0,
              explanation:
                "La méthode avalanche cherche généralement à réduire le coût des intérêts en ciblant les taux les plus élevés."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Épargne, Rendement & Inflation",
      lessons: [
        {
          slug: "comprendre-interets",
          title: "6.1 Comprendre les Intérêts Simples et Composés",
          duration: "17 min",
          description:
            "Découvrez comment fonctionne la croissance d'une somme d'argent au fil du temps.",
          objectives: [
            "Comprendre les intérêts.",
            "Distinguer intérêt simple et composé.",
            "Comprendre l'effet du temps.",
            "Éviter les promesses irréalistes de rendement."
          ],
          content: [
            "## Intérêt simple",
            "Avec un intérêt simple, les intérêts sont calculés sur le capital initial.",
            "",
            "```text",
            "Intérêts = Capital initial × taux × durée",
            "```",
            "",
            "## Intérêt composé",
            "Avec les intérêts composés, les intérêts peuvent eux-mêmes produire des intérêts lorsqu'ils restent investis ou ajoutés au capital.",
            "",
            "```text",
            "Valeur future = Capital × (1 + taux)^nombre de périodes",
            "```",
            "",
            "## L'effet du temps",
            "Plus une somme reste investie longtemps, plus l'effet de la capitalisation peut devenir important, à condition que le rendement et les hypothèses restent valables.",
            "",
            "Il faut cependant toujours tenir compte des frais, des impôts éventuels, de l'inflation et du risque."
          ],
          examples: [
            "Une somme de 1 000 € placée à un taux hypothétique de 5 % avec capitalisation annuelle ne produit pas simplement 50 € chaque année, car les intérêts peuvent eux-mêmes être capitalisés."
          ],
          practice: [
            "Calcule l'évolution théorique de 1 000 € avec un taux annuel hypothétique de 5 % pendant cinq ans.",
            "Compare le résultat avec un calcul sans capitalisation."
          ],
          quiz: [
            {
              question: "Pourquoi les intérêts composés peuvent-ils accélérer la croissance d'un capital ?",
              options: [
                "Parce que les intérêts peuvent eux-mêmes produire des intérêts",
                "Parce qu'ils garantissent toujours un rendement positif",
                "Parce qu'ils suppriment les risques",
                "Parce qu'ils éliminent l'inflation"
              ],
              answer: 0,
              explanation:
                "La capitalisation permet aux gains précédents d'entrer eux-mêmes dans la base de calcul."
            }
          ]
        },
        {
          slug: "inflation-pouvoir-achat",
          title: "6.2 Inflation et Pouvoir d'Achat",
          duration: "16 min",
          description:
            "Comprenez pourquoi l'augmentation des prix influence la valeur réelle de votre argent.",
          objectives: [
            "Comprendre l'inflation.",
            "Distinguer valeur nominale et valeur réelle.",
            "Comprendre le pouvoir d'achat.",
            "Intégrer l'inflation dans ses réflexions à long terme."
          ],
          content: [
            "## Qu'est-ce que l'inflation ?",
            "L'inflation correspond à une augmentation générale du niveau des prix au fil du temps.",
            "",
            "Lorsque les prix augmentent, une même somme d'argent permet généralement d'acheter moins de biens et services qu'auparavant.",
            "",
            "## Valeur nominale et réelle",
            "Avoir 10 000 € dans dix ans ne signifie pas nécessairement avoir le même pouvoir d'achat qu'avec 10 000 € aujourd'hui.",
            "",
            "C'est pourquoi les objectifs financiers à long terme doivent tenir compte du pouvoir d'achat et pas seulement du montant affiché sur un compte."
          ],
          examples: [
            "Si le prix d'un panier de biens augmente progressivement, une somme restée totalement inchangée peut perdre une partie de son pouvoir d'achat."
          ],
          practice: [
            "Choisis trois produits que tu achètes régulièrement.",
            "Observe leur évolution de prix sur plusieurs années si les données sont disponibles.",
            "Explique en quelques lignes pourquoi l'inflation influence un objectif financier à long terme."
          ],
          quiz: [
            {
              question: "Quel est l'effet principal de l'inflation sur une somme d'argent qui ne progresse pas ?",
              options: [
                "Son pouvoir d'achat peut diminuer",
                "Sa valeur réelle augmente toujours",
                "Elle devient automatiquement un investissement",
                "Elle ne change jamais"
              ],
              answer: 0,
              explanation:
                "Lorsque les prix augmentent, une somme inchangée peut acheter moins de biens et services."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Investissement et Risque",
      lessons: [
        {
          slug: "comprendre-investissement",
          title: "7.1 Comprendre l'Investissement",
          duration: "18 min",
          description:
            "Découvrez les grands principes de l'investissement avant de vous intéresser aux produits financiers.",
          objectives: [
            "Distinguer épargne et investissement.",
            "Comprendre rendement et risque.",
            "Comprendre l'horizon temporel.",
            "Identifier les principales catégories d'actifs."
          ],
          content: [
            "## Épargne vs investissement",
            "L'épargne vise généralement la disponibilité et la sécurité relative des fonds. L'investissement cherche davantage à faire croître le capital avec un niveau de risque variable.",
            "",
            "## Le couple rendement-risque",
            "Un rendement potentiel plus élevé s'accompagne généralement d'un risque plus important de perte ou de variation.",
            "",
            "Il faut donc éviter de considérer un rendement élevé comme de l'argent gratuit.",
            "",
            "## Principales catégories",
            "- Actions.",
            "- Obligations.",
            "- Immobilier.",
            "- Fonds et ETF.",
            "- Liquidités et produits d'épargne.",
            "",
            "Chaque catégorie possède ses propres caractéristiques, risques, coûts et règles fiscales selon le pays."
          ],
          examples: [
            "Une personne ayant besoin de son argent dans quelques mois n'a pas nécessairement le même horizon qu'une personne qui investit pour un objectif prévu dans vingt ans."
          ],
          practice: [
            "Pour trois objectifs financiers, indique l'horizon temporel.",
            "Indique si la priorité est la disponibilité, la préservation du capital ou la croissance à long terme.",
            "Explique pourquoi le même placement ne convient pas nécessairement aux trois objectifs."
          ],
          quiz: [
            {
              question: "Quelle affirmation est généralement correcte concernant rendement et risque ?",
              options: [
                "Un rendement potentiel plus élevé peut s'accompagner d'un risque plus élevé",
                "Un rendement élevé est toujours garanti",
                "Le risque n'existe pas avec les investissements",
                "Tous les investissements ont le même niveau de risque"
              ],
              answer: 0,
              explanation:
                "Le potentiel de rendement et le risque sont deux éléments fondamentaux à considérer ensemble."
            }
          ]
        },
        {
          slug: "diversification-risque",
          title: "7.2 Diversification et Gestion du Risque",
          duration: "18 min",
          description:
            "Comprenez pourquoi diversifier peut réduire certains risques spécifiques sans supprimer tous les risques.",
          objectives: [
            "Comprendre la diversification.",
            "Distinguer risque spécifique et risque de marché.",
            "Comprendre pourquoi diversification ne signifie pas absence de risque.",
            "Éviter de concentrer toute son épargne sur un seul actif."
          ],
          content: [
            "## Ne pas mettre tous ses œufs dans le même panier",
            "La diversification consiste à répartir son capital entre plusieurs investissements afin de réduire l'impact d'un problème affectant un seul actif ou secteur.",
            "",
            "## Exemple",
            "Si une personne investit tout son capital dans une seule entreprise, un problème majeur concernant cette entreprise peut avoir un impact considérable sur son patrimoine investi.",
            "",
            "Avec plusieurs actifs différents, un problème spécifique peut avoir un impact plus limité sur l'ensemble.",
            "",
            "## Ce que la diversification ne fait pas",
            "Elle ne garantit pas l'absence de perte. Plusieurs actifs peuvent baisser simultanément lors d'une crise de marché.",
            "",
            "La diversification réduit certains risques, mais ne supprime pas le risque d'investissement."
          ],
          examples: [
            "Détenir plusieurs entreprises de secteurs différents peut réduire le risque lié à une seule entreprise, mais ne protège pas contre une baisse générale des marchés."
          ],
          practice: [
            "Imagine un portefeuille composé d'un seul actif.",
            "Liste les risques spécifiques auxquels il serait exposé.",
            "Propose plusieurs catégories d'actifs qui pourraient théoriquement réduire cette concentration."
          ],
          quiz: [
            {
              question: "Que cherche principalement à faire la diversification ?",
              options: [
                "Réduire certains risques liés à la concentration",
                "Garantir un rendement positif",
                "Supprimer tous les risques",
                "Éviter toute variation de marché"
              ],
              answer: 0,
              explanation:
                "La diversification réduit certains risques spécifiques mais ne garantit ni rendement ni absence de perte."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Frais, Arnaques & Décisions Financières",
      lessons: [
        {
          slug: "comprendre-frais-financiers",
          title: "8.1 Comprendre les Frais et leur Impact",
          duration: "16 min",
          description:
            "Apprenez à identifier les frais qui peuvent réduire progressivement vos résultats financiers.",
          objectives: [
            "Identifier les différents types de frais.",
            "Comprendre l'impact des frais répétés.",
            "Comparer le coût total d'un produit.",
            "Lire les conditions avant de s'engager."
          ],
          content: [
            "## Les frais peuvent sembler petits",
            "Un abonnement, une commission ou des frais de gestion peuvent sembler faibles pris séparément. Sur plusieurs années, leur impact peut devenir significatif.",
            "",
            "## Types de frais",
            "- frais de compte ;",
            "- commissions ;",
            "- frais de gestion ;",
            "- frais de transaction ;",
            "- pénalités ou frais liés à certains contrats ;",
            "- frais de change.",
            "",
            "## Lire avant de signer",
            "Avant d'utiliser un produit financier, vérifie les coûts, conditions, risques, restrictions et modalités de sortie.",
            "",
            "Ne te limite pas à regarder le rendement annoncé. Un rendement brut et un rendement net de frais ne représentent pas la même chose."
          ],
          examples: [
            "Deux produits affichant des performances similaires peuvent produire des résultats différents si leurs frais sont très différents sur une longue période."
          ],
          practice: [
            "Choisis un service financier que tu utilises.",
            "Identifie les frais associés.",
            "Calcule approximativement combien ils représentent sur une année."
          ],
          quiz: [
            {
              question: "Pourquoi les frais sont-ils importants à long terme ?",
              options: [
                "Parce que des frais répétés peuvent réduire progressivement le rendement ou le capital disponible",
                "Parce que les frais augmentent toujours le rendement",
                "Parce qu'ils n'existent que pour les entreprises",
                "Parce qu'ils sont toujours identiques"
              ],
              answer: 0,
              explanation:
                "Des frais récurrents diminuent la somme réellement conservée ou investie."
            }
          ]
        },
        {
          slug: "reconnaitre-arnaques-financieres",
          title: "8.2 Reconnaître les Arnaques et Promesses Irréalistes",
          duration: "18 min",
          description:
            "Apprenez à identifier les principaux signaux d'alerte avant de confier votre argent.",
          objectives: [
            "Identifier les promesses financières suspectes.",
            "Comprendre le principe de rendement garanti.",
            "Reconnaître les techniques de pression.",
            "Vérifier une opportunité avant d'envoyer de l'argent."
          ],
          content: [
            "## Les promesses trop belles",
            "Une promesse de rendement élevé, rapide et sans risque doit immédiatement provoquer une vérification approfondie.",
            "",
            "## Signaux d'alerte",
            "- rendement garanti exceptionnel ;",
            "- urgence artificielle ;",
            "- pression pour investir immédiatement ;",
            "- absence d'informations vérifiables ;",
            "- demande de transférer de l'argent vers un compte inhabituel ;",
            "- témoignages impossibles à vérifier ;",
            "- système basé principalement sur le recrutement d'autres personnes.",
            "",
            "## Vérifier avant de payer",
            "Cherche l'identité de l'entreprise, son statut réglementaire lorsque cela est pertinent, ses conditions, les risques et les informations indépendantes disponibles.",
            "",
            "Ne confonds jamais publicité, témoignage et preuve."
          ],
          examples: [
            "« Doublez votre argent en 30 jours sans risque » est une promesse qui doit être considérée comme extrêmement suspecte.",
            "Une plateforme sérieuse doit pouvoir fournir des informations compréhensibles sur son fonctionnement, ses frais et les risques associés."
          ],
          practice: [
            "Prends une publicité financière trouvée en ligne.",
            "Liste les promesses faites.",
            "Identifie au moins cinq éléments que tu voudrais vérifier avant d'investir."
          ],
          quiz: [
            {
              question: "Quel est un signal d'alerte majeur ?",
              options: [
                "Un rendement exceptionnel présenté comme garanti et sans risque",
                "La présence de conditions détaillées",
                "L'existence de risques clairement expliqués",
                "La possibilité de lire les frais"
              ],
              answer: 0,
              explanation:
                "Les rendements élevés sans risque ou avec garantie trompeuse sont un signal d'alerte important."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Objectifs Financiers",
      lessons: [
        {
          slug: "definir-objectifs-financiers",
          title: "9.1 Définir ses Objectifs Financiers",
          duration: "16 min",
          description:
            "Transformez vos intentions financières en objectifs concrets et mesurables.",
          objectives: [
            "Distinguer souhait et objectif financier.",
            "Définir des objectifs à court, moyen et long terme.",
            "Prioriser ses objectifs.",
            "Associer un montant et une échéance à chaque objectif."
          ],
          content: [
            "## Un objectif doit être concret",
            "« Je veux économiser davantage » est une intention.",
            "« Je veux constituer une réserve de 2 000 € en 12 mois » est un objectif beaucoup plus exploitable.",
            "",
            "## Horizon temporel",
            "- Court terme : besoins proches.",
            "- Moyen terme : projets sur plusieurs années.",
            "- Long terme : patrimoine, retraite ou grands projets futurs.",
            "",
            "## Prioriser",
            "Tous les objectifs ne peuvent pas être financés simultanément avec les mêmes ressources. Il faut donc établir des priorités.",
            "",
            "Une approche peut commencer par la sécurité financière, puis les dettes coûteuses, puis les projets et objectifs à long terme selon la situation individuelle."
          ],
          examples: [
            "Objectif : constituer 1 200 € en 12 mois. Une contribution moyenne de 100 € par mois permettrait théoriquement d'atteindre ce montant avant éventuels intérêts."
          ],
          practice: [
            "Écris cinq objectifs financiers.",
            "Donne à chacun un montant cible et une date.",
            "Classe-les par priorité."
          ],
          quiz: [
            {
              question: "Quelle formulation est la plus concrète ?",
              options: [
                "Je veux économiser 1 200 € en 12 mois",
                "Je veux être riche",
                "Je veux dépenser moins un jour",
                "Je veux investir beaucoup"
              ],
              answer: 0,
              explanation:
                "Un objectif chiffré avec une échéance est plus facile à suivre et à ajuster."
            }
          ]
        },
        {
          slug: "plan-financier-personnel",
          title: "9.2 Construire son Plan Financier Personnel",
          duration: "20 min",
          description:
            "Assemblez budget, épargne, dettes et objectifs dans un plan financier personnel.",
          objectives: [
            "Construire un plan financier cohérent.",
            "Prioriser la sécurité financière.",
            "Suivre ses progrès.",
            "Réviser son plan lorsque sa situation change."
          ],
          content: [
            "## Un plan financier est évolutif",
            "La situation financière peut changer avec un nouvel emploi, une naissance, un déménagement, une baisse de revenus ou un nouveau projet.",
            "",
            "Le plan doit donc être revu régulièrement.",
            "",
            "## Structure possible",
            "### 1. Situation actuelle",
            "Revenus, dépenses, dettes, épargne et patrimoine.",
            "",
            "### 2. Sécurité",
            "Budget de fonctionnement et réserve d'urgence.",
            "",
            "### 3. Dettes",
            "Plan de remboursement adapté.",
            "",
            "### 4. Objectifs",
            "Projets à court, moyen et long terme.",
            "",
            "### 5. Investissement",
            "Uniquement après avoir compris les objectifs, l'horizon, le risque et les produits concernés.",
            "",
            "### 6. Suivi",
            "Revue mensuelle simple et bilan plus complet périodiquement."
          ],
          examples: [
            "Un plan peut commencer par réduire une dette coûteuse, constituer une réserve de précaution puis affecter progressivement une partie du surplus à des objectifs de long terme."
          ],
          practice: [
            "Construis ton plan financier sur une page.",
            "Ajoute ta situation actuelle.",
            "Définis trois priorités.",
            "Indique les actions à réaliser chaque mois.",
            "Prévois une date de révision."
          ],
          quiz: [
            {
              question: "Pourquoi faut-il réviser régulièrement son plan financier ?",
              options: [
                "Parce que les revenus, dépenses, objectifs et contraintes peuvent changer",
                "Parce qu'un plan devient automatiquement faux après 30 jours",
                "Parce qu'il faut investir chaque mois",
                "Parce qu'un budget ne peut jamais fonctionner"
              ],
              answer: 0,
              explanation:
                "Un plan financier doit évoluer avec la situation réelle de la personne."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Projet Final - Construire sa Santé Financière",
      lessons: [
        {
          slug: "projet-final-sante-financiere",
          title: "10.1 Construire son Tableau de Bord Financier",
          duration: "25 min",
          description:
            "Mettez en pratique les notions du cours en construisant votre propre tableau de bord financier.",
          objectives: [
            "Calculer sa valeur nette.",
            "Construire son budget.",
            "Identifier ses dettes.",
            "Définir son fonds d'urgence.",
            "Définir ses objectifs financiers.",
            "Créer une routine de suivi."
          ],
          content: [
            "## Projet final",
            "Construis un tableau de bord financier personnel simple. L'objectif n'est pas de prédire parfaitement l'avenir mais d'avoir une vision suffisamment claire pour prendre de meilleures décisions.",
            "",
            "### Étape 1 : Revenus",
            "Liste les revenus réguliers et variables.",
            "",
            "### Étape 2 : Dépenses",
            "Classe tes dépenses par grandes catégories.",
            "",
            "### Étape 3 : Dettes",
            "Liste les dettes, leurs taux, mensualités et montants restants lorsque ces informations sont disponibles.",
            "",
            "### Étape 4 : Patrimoine",
            "Liste les principaux actifs et calcule une valeur nette approximative.",
            "",
            "### Étape 5 : Fonds d'urgence",
            "Détermine un objectif de réserve adapté à tes dépenses essentielles et à ta situation.",
            "",
            "### Étape 6 : Objectifs",
            "Choisis trois objectifs financiers avec un montant et une échéance.",
            "",
            "### Étape 7 : Routine",
            "Définis une revue financière mensuelle : revenus, dépenses, épargne, dettes et progression des objectifs.",
            "",
            "## Attention",
            "Ce tableau de bord est un outil d'éducation et d'organisation financière. Les décisions d'investissement, fiscales ou juridiques peuvent nécessiter des informations adaptées à ton pays et à ta situation personnelle."
          ],
          examples: [
            "Tableau mensuel : revenus disponibles → dépenses essentielles → dépenses variables → remboursement de dettes → épargne → reste disponible.",
            "Tableau patrimonial : épargne + investissements + biens valorisables - dettes = valeur nette approximative."
          ],
          practice: [
            "Crée ton tableau de bord.",
            "Calcule ta valeur nette actuelle.",
            "Construis ton budget du mois prochain.",
            "Définis ton premier objectif d'épargne.",
            "Liste tes dettes et définis une stratégie de remboursement.",
            "Programme une revue financière mensuelle.",
            "Après trois mois, compare tes résultats à ton point de départ."
          ],
          quiz: [
            {
              question: "Quel est l'objectif principal du tableau de bord financier ?",
              options: [
                "Avoir une vision claire de sa situation et suivre ses progrès",
                "Garantir un rendement financier",
                "Éliminer toutes les dépenses",
                "Prédire exactement ses revenus futurs"
              ],
              answer: 0,
              explanation:
                "Le tableau de bord sert avant tout à améliorer la visibilité et le suivi des décisions financières."
            }
          ]
        }
      ]
    }
  ]
};

export const comprendreSonArgentExamQuestions: ExamQuestion[] = [
  {
    question: "Comment calcule-t-on la valeur nette ?",
    options: [
      "Total des actifs - Total des dettes",
      "Salaire annuel - salaire mensuel",
      "Revenus + dépenses",
      "Épargne × 12"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle affirmation décrit correctement un actif au sens financier général ?",
    options: [
      "Une ressource ayant une valeur économique",
      "Uniquement un élément qui produit immédiatement un revenu",
      "Une facture mensuelle",
      "Une dette"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi suivre ses dépenses ?",
    options: [
      "Pour comprendre où va son argent et améliorer ses décisions",
      "Pour supprimer toutes les dépenses",
      "Pour augmenter automatiquement ses revenus",
      "Pour éviter de faire un budget"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle différence existe entre une dépense fixe et une dépense variable ?",
    options: [
      "Une dépense fixe est généralement plus stable, tandis qu'une dépense variable peut évoluer davantage",
      "Une dépense fixe est toujours inutile",
      "Une dépense variable est toujours facultative",
      "Il n'existe aucune différence"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'objectif principal d'un budget ?",
    options: [
      "Planifier et suivre l'utilisation de ses revenus",
      "Empêcher toute dépense",
      "Garantir un investissement rentable",
      "Augmenter automatiquement son salaire"
    ],
    correctAnswer: 0
  },
  {
    question: "La règle 50/30/20 doit-elle être appliquée de manière identique à tout le monde ?",
    options: [
      "Non, c'est un repère qui doit être adapté à la situation",
      "Oui, c'est une obligation financière",
      "Oui, quelle que soit la situation",
      "Non, car elle ne concerne que les entreprises"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le rôle principal d'un fonds d'urgence ?",
    options: [
      "Faire face aux dépenses imprévues ou à une baisse temporaire de revenus",
      "Financer les achats impulsifs",
      "Garantir un rendement élevé",
      "Remplacer définitivement le salaire"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi une dette doit-elle être analysée au-delà de sa mensualité ?",
    options: [
      "Parce que le taux, la durée et le coût total influencent le coût réel",
      "Parce que les mensualités ne servent à rien",
      "Parce que toutes les dettes ont le même coût",
      "Parce que le taux n'a aucune importance"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle est l'idée principale de la méthode avalanche ?",
    options: [
      "Prioriser généralement la dette au taux d'intérêt le plus élevé",
      "Rembourser uniquement la plus petite dette",
      "Ne payer aucune dette",
      "Choisir la dette la plus récente"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle est l'idée principale de la méthode boule de neige ?",
    options: [
      "Commencer généralement par la plus petite dette pour obtenir rapidement une première victoire",
      "Commencer toujours par le taux le plus élevé",
      "Ne rembourser que les dettes sans intérêt",
      "Reporter toutes les mensualités"
    ],
    correctAnswer: 0
  },
  {
    question: "Que sont les intérêts composés ?",
    options: [
      "Des intérêts qui peuvent eux-mêmes être intégrés au capital et produire de nouveaux intérêts",
      "Des intérêts qui ne sont jamais réinvestis",
      "Des frais bancaires",
      "Une taxe"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi le temps est-il important avec les intérêts composés ?",
    options: [
      "Parce que la capitalisation peut amplifier progressivement la croissance d'un capital",
      "Parce qu'elle garantit toujours un rendement positif",
      "Parce qu'elle supprime le risque",
      "Parce qu'elle élimine les frais"
    ],
    correctAnswer: 0
  },
  {
    question: "Qu'est-ce que l'inflation ?",
    options: [
      "Une augmentation générale du niveau des prix au fil du temps",
      "Une diminution automatique des salaires",
      "Un type d'investissement",
      "Une dette"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel peut être l'effet de l'inflation sur une somme d'argent inchangée ?",
    options: [
      "Son pouvoir d'achat peut diminuer",
      "Son pouvoir d'achat augmente toujours",
      "Elle devient automatiquement un investissement",
      "Elle double automatiquement"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle affirmation décrit correctement l'investissement ?",
    options: [
      "Il cherche généralement à faire croître un capital avec un niveau de risque variable",
      "Il garantit toujours un gain",
      "Il ne comporte jamais de risque",
      "Il est identique à une épargne disponible immédiatement"
    ],
    correctAnswer: 0
  },
  {
    question: "Que signifie la diversification ?",
    options: [
      "Répartir son capital entre différents actifs afin de réduire certains risques de concentration",
      "Investir tout son argent dans le même actif",
      "Éviter tout investissement",
      "Garantir un rendement positif"
    ],
    correctAnswer: 0
  },
  {
    question: "La diversification élimine-t-elle tous les risques ?",
    options: [
      "Non, elle réduit certains risques mais ne garantit pas l'absence de perte",
      "Oui, toujours",
      "Oui, si l'on possède cinq actifs",
      "Oui, lorsque les actifs sont différents"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi faut-il surveiller les frais financiers ?",
    options: [
      "Parce que des frais répétés peuvent réduire progressivement le capital ou le rendement",
      "Parce que les frais augmentent toujours les performances",
      "Parce que les frais sont toujours identiques",
      "Parce que les frais n'existent que pour les banques"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est un signal d'alerte important face à une opportunité financière ?",
    options: [
      "Un rendement exceptionnel présenté comme garanti et sans risque",
      "Des risques clairement expliqués",
      "Des conditions détaillées",
      "Des frais transparents"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi une promesse de rendement très élevé sans risque doit-elle être vérifiée ?",
    options: [
      "Parce qu'elle peut être trompeuse ou signaler une arnaque",
      "Parce que tous les investissements sont illégaux",
      "Parce qu'un rendement élevé est toujours impossible",
      "Parce que les banques interdisent l'investissement"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle formulation correspond le mieux à un objectif financier concret ?",
    options: [
      "Épargner 1 200 € en 12 mois",
      "Devenir riche rapidement",
      "Économiser davantage un jour",
      "Investir beaucoup"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi faut-il définir une échéance pour un objectif financier ?",
    options: [
      "Pour pouvoir mesurer sa progression et ajuster son effort",
      "Pour garantir le résultat",
      "Pour supprimer les risques",
      "Pour éviter de faire un budget"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel élément doit généralement être pris en compte avant un investissement ?",
    options: [
      "Objectif, horizon, risque, frais et caractéristiques du produit",
      "Uniquement le rendement annoncé",
      "Uniquement l'avis d'un influenceur",
      "Uniquement le prix actuel"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi ne faut-il pas considérer tout son chiffre d'affaires comme de l'argent disponible ?",
    options: [
      "Parce qu'il peut servir à couvrir des charges, frais, taxes ou autres obligations",
      "Parce que le chiffre d'affaires est toujours faux",
      "Parce qu'il ne peut jamais être utilisé",
      "Parce que tous les revenus sont des dettes"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi un plan financier doit-il être révisé régulièrement ?",
    options: [
      "Parce que les revenus, dépenses, objectifs et contraintes peuvent évoluer",
      "Parce qu'un budget expire automatiquement chaque mois",
      "Parce qu'il faut investir tous les mois",
      "Parce qu'un plan financier ne fonctionne jamais"
    ],
    correctAnswer: 0
  }
];