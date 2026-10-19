import type { CourseDetail, ExamQuestion } from "../coursesData";

export const detteEtCreditCourse: CourseDetail = {
  slug: "dette-et-credit",
  categorySlug: "finance",
  title: "Dette & Crédit : Comprendre, Utiliser et Réduire ses Dettes",
  description:
    "Comprends comment fonctionnent les crédits, évalue le coût réel de tes dettes, évite les pièges du crédit à la consommation et construis une stratégie réaliste pour retrouver une situation financière plus saine.",
  level: "Intermédiaire",
  icon: "💳",

  modules: [
    {
      title: "Module 1: Comprendre la Dette et le Crédit",
      lessons: [
        {
          slug: "dette-credit-comment-ca-marche",
          title: "1.1 Dette, Crédit, Intérêts et Coût Total",
          duration: "15 min",
          description:
            "Comprends ce que tu rembourses réellement lorsque tu contractes un crédit.",
          objectives: [
            "Distinguer capital emprunté, intérêts, frais et montant total remboursé.",
            "Comprendre le fonctionnement général d'un crédit.",
            "Identifier les éléments importants d'une offre de financement."
          ],
          content: [
            "## Qu'est-ce qu'une dette ?",
            "Une dette correspond à une somme que tu dois rembourser à une personne, une banque, une institution financière ou une entreprise.",
            "",
            "Lorsqu'une banque te prête de l'argent, tu reçois un capital et tu t'engages à le rembourser selon des conditions définies.",
            "",
            "## Les principaux éléments d'un crédit",
            "- **Capital :** montant initial emprunté.",
            "- **Taux d'intérêt :** coût du financement exprimé sous forme de taux.",
            "- **Durée :** période prévue pour rembourser le crédit.",
            "- **Mensualité :** somme payée périodiquement.",
            "- **Frais :** frais de dossier, assurance ou autres coûts éventuels selon le contrat.",
            "- **Coût total :** ensemble des sommes réellement payées au titre du financement.",
            "",
            "## Pourquoi la mensualité ne suffit pas",
            "Deux crédits peuvent avoir une mensualité similaire mais un coût total très différent. Une durée plus longue peut réduire la mensualité tout en augmentant le montant total des intérêts.",
            "",
            "Avant de signer, il faut donc regarder au minimum le montant emprunté, le taux, la durée, les frais et le coût total lorsque celui-ci est disponible.",
            "",
            "## Exemple",
            "Supposons qu'une personne emprunte 2 000 € et rembourse au total 2 400 €. Les 400 € supplémentaires représentent le coût du financement avant de considérer d'éventuels autres frais.",
            "",
            "L'objectif n'est pas seulement de demander : « Puis-je payer cette mensualité ? » mais aussi : « Combien ce crédit va-t-il réellement me coûter ? »"
          ],
          examples: [
            "Deux prêts de 5 000 peuvent avoir des mensualités différentes selon leur durée et leur taux. Une mensualité plus faible ne signifie donc pas nécessairement que le crédit est moins cher."
          ],
          practice: [
            "Choisis un exemple de crédit et note le capital emprunté, le taux, la durée, la mensualité et le coût total lorsque ces informations sont disponibles."
          ],
          quiz: [
            {
              question:
                "Quel élément permet le mieux d'évaluer le coût global d'un crédit ?",
              options: [
                "La mensualité uniquement",
                "Le coût total du financement et ses différents frais",
                "La couleur de la carte bancaire",
                "Le nombre de pages du contrat"
              ],
              answer: 1,
              explanation:
                "La mensualité seule ne permet pas de connaître le coût réel. Il faut examiner le taux, la durée, les frais et le coût total du financement."
            },
            {
              question:
                "Que représente généralement le capital dans un crédit ?",
              options: [
                "Le montant initial emprunté",
                "Les intérêts déjà payés",
                "Les frais bancaires",
                "Le montant des pénalités"
              ],
              answer: 0,
              explanation:
                "Le capital correspond au montant initial mis à disposition par le prêteur."
            }
          ]
        },

        {
          slug: "taux-interet-et-duree",
          title: "1.2 Taux d'Intérêt, Durée et Mensualités",
          duration: "16 min",
          description:
            "Découvre pourquoi le taux et la durée influencent fortement le coût d'une dette.",
          objectives: [
            "Comprendre la relation entre taux, durée et coût du crédit.",
            "Expliquer pourquoi prolonger la durée peut augmenter le coût total.",
            "Comparer deux offres de crédit de manière plus pertinente."
          ],
          content: [
            "## Le taux d'intérêt",
            "Le taux représente le prix du financement. Plus le taux est élevé, plus les intérêts peuvent représenter une part importante du coût du crédit.",
            "",
            "## La durée",
            "La durée correspond au temps nécessaire pour rembourser le crédit selon le calendrier prévu.",
            "",
            "Une durée plus longue peut rendre les mensualités plus accessibles, mais elle peut aussi augmenter le coût total des intérêts.",
            "",
            "## Une comparaison simple",
            "Imagine deux financements portant sur le même montant :",
            "- Crédit A : durée courte et taux plus faible.",
            "- Crédit B : durée longue et taux plus élevé.",
            "",
            "Le crédit B peut sembler plus confortable chaque mois, mais il peut coûter beaucoup plus cher au total.",
            "",
            "## Attention aux offres basées uniquement sur la mensualité",
            "Une publicité peut mettre en avant une petite mensualité. Pourtant, cette présentation peut masquer une durée longue, des frais ou un coût total élevé.",
            "",
            "La bonne question est donc :",
            "**« Quel sera le coût total de cette décision ? »**"
          ],
          examples: [
            "Une voiture financée sur 7 ans peut avoir une mensualité plus faible que la même voiture financée sur 4 ans, mais le coût total du financement peut être supérieur."
          ],
          practice: [
            "Compare deux offres fictives en notant leur montant, taux, durée, mensualité et coût total."
          ],
          quiz: [
            {
              question:
                "Quel est un risque fréquent d'une durée de remboursement plus longue ?",
              options: [
                "Le crédit devient automatiquement gratuit",
                "Le coût total des intérêts peut augmenter",
                "Le capital emprunté disparaît",
                "Le taux devient toujours nul"
              ],
              answer: 1,
              explanation:
                "Une durée plus longue peut réduire la mensualité mais augmenter le montant total des intérêts payés."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Bonne Dette, Mauvaise Dette et Risque",
      lessons: [
        {
          slug: "bonne-vs-mauvaise-dette",
          title: "2.1 Bonne Dette vs Mauvaise Dette",
          duration: "16 min",
          description:
            "Apprends à analyser une dette selon son objectif, son coût et le risque qu'elle représente.",
          objectives: [
            "Comprendre pourquoi « bonne » et « mauvaise » dette sont des simplifications.",
            "Analyser une dette selon son objectif et son coût.",
            "Identifier les situations dans lesquelles l'endettement devient dangereux."
          ],
          content: [
            "## La dette n'est pas automatiquement bonne ou mauvaise",
            "On parle souvent de « bonne dette » et de « mauvaise dette ». Cette distinction peut être utile pour réfléchir, mais elle ne doit pas être appliquée mécaniquement.",
            "",
            "Une dette doit être évaluée selon plusieurs critères :",
            "- son objectif ;",
            "- son coût ;",
            "- le niveau de risque ;",
            "- la capacité de remboursement ;",
            "- la valeur ou les revenus potentiels associés au projet ;",
            "- la stabilité des revenus de l'emprunteur.",
            "",
            "## Exemple d'une dette potentiellement productive",
            "Un emprunt peut financer une formation, un équipement professionnel ou une activité économique susceptible d'améliorer les revenus.",
            "",
            "Mais cela ne signifie pas que l'emprunt est automatiquement avantageux. Le projet peut échouer et le remboursement reste généralement dû.",
            "",
            "## Exemple d'une dette de consommation",
            "Financer des achats courants avec un crédit coûteux peut créer une charge financière sans créer de valeur durable.",
            "",
            "## La vraie question",
            "Au lieu de demander uniquement « Est-ce une bonne dette ? », demande :",
            "1. Pourquoi est-ce que j'emprunte ?",
            "2. Combien cela va-t-il me coûter ?",
            "3. Que se passe-t-il si mes revenus diminuent ?",
            "4. Le projet apporte-t-il suffisamment de valeur pour justifier le risque ?"
          ],
          examples: [
            "Un prêt destiné à acheter du matériel professionnel peut être pertinent si le matériel permet réellement de développer une activité rentable et si les remboursements restent supportables."
          ],
          practice: [
            "Analyse trois situations d'endettement et classe-les selon leur objectif, leur coût, leur risque et leur capacité de remboursement."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il éviter de classer automatiquement toutes les dettes comme bonnes ou mauvaises ?",
              options: [
                "Parce que toutes les dettes sont gratuites",
                "Parce que le risque dépend notamment du coût, de l'objectif et de la capacité de remboursement",
                "Parce qu'une dette n'a jamais de coût",
                "Parce que les banques ne demandent jamais de remboursement"
              ],
              answer: 1,
              explanation:
                "La qualité d'un endettement dépend du contexte. Une dette peut financer un projet utile tout en restant risquée si son coût est élevé ou si le remboursement est difficile."
            }
          ]
        },

        {
          slug: "dette-et-capacite-remboursement",
          title: "2.2 Capacité de Remboursement et Taux d'Endettement",
          duration: "15 min",
          description:
            "Évalue le poids de tes remboursements avant de prendre un nouveau crédit.",
          objectives: [
            "Comprendre la notion de capacité de remboursement.",
            "Calculer un ratio simple entre revenus et remboursements.",
            "Identifier les signes d'un endettement excessif."
          ],
          content: [
            "## La capacité de remboursement",
            "Avant de contracter une dette, il faut vérifier que les remboursements restent compatibles avec ses revenus et ses autres dépenses.",
            "",
            "Une formule pédagogique simple peut être :",
            "```text\nTaux d'endettement = Mensualités de dettes / Revenus mensuels × 100\n```",
            "",
            "Ce ratio est un indicateur parmi d'autres. Les règles et seuils utilisés par les établissements financiers varient selon les pays et les types de crédit.",
            "",
            "## Exemple",
            "Une personne gagne 1 500 € par mois et rembourse 300 € de crédits.",
            "",
            "```text\n300 / 1500 × 100 = 20 %\n```",
            "",
            "Le ratio est donc de 20 %.",
            "",
            "Mais le ratio seul ne suffit pas. Il faut aussi tenir compte du loyer, des dépenses essentielles, des personnes à charge, de l'épargne disponible et de la stabilité des revenus.",
            "",
            "## Signes d'alerte",
            "- Utiliser régulièrement un crédit pour payer les dépenses courantes.",
            "- Contracter une nouvelle dette pour rembourser une ancienne.",
            "- Ne payer que les montants minimums pendant une longue période.",
            "- Ne plus disposer d'une marge financière en fin de mois.",
            "- Accumuler plusieurs crédits sans connaître leur coût total."
          ],
          examples: [
            "Une personne ayant plusieurs mensualités peut avoir un ratio apparemment acceptable mais rester financièrement fragile si son revenu est irrégulier et son épargne très faible."
          ],
          practice: [
            "À partir d'un revenu fictif et de plusieurs mensualités, calcule le ratio d'endettement puis identifie les autres informations nécessaires avant de conclure."
          ],
          quiz: [
            {
              question:
                "Pourquoi le taux d'endettement ne suffit-il pas à lui seul pour évaluer une situation financière ?",
              options: [
                "Parce qu'il ne prend pas nécessairement en compte toutes les dépenses, l'épargne et la stabilité des revenus",
                "Parce qu'il mesure uniquement la couleur des billets",
                "Parce qu'il est toujours égal à zéro",
                "Parce qu'il remplace automatiquement un budget"
              ],
              answer: 0,
              explanation:
                "Le ratio est un indicateur utile mais incomplet. La situation globale doit aussi être examinée."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Crédit à la Consommation",
      lessons: [
        {
          slug: "credit-renouvelable-et-carte",
          title: "3.1 Crédit Renouvelable, Carte de Crédit et Découvert",
          duration: "16 min",
          description:
            "Comprends les mécanismes qui peuvent rendre certains crédits particulièrement coûteux.",
          objectives: [
            "Distinguer crédit renouvelable, carte de crédit et découvert.",
            "Comprendre le risque des remboursements minimums.",
            "Identifier les comportements pouvant entraîner une spirale d'endettement."
          ],
          content: [
            "## Le crédit renouvelable",
            "Un crédit renouvelable met à disposition une réserve d'argent que l'emprunteur peut utiliser puis reconstituer au fur et à mesure des remboursements, selon les conditions du contrat.",
            "",
            "Il peut être pratique dans certaines situations mais son coût peut être important selon l'offre.",
            "",
            "## Le paiement minimum",
            "Payer seulement le minimum demandé peut prolonger considérablement le remboursement et augmenter le coût total des intérêts.",
            "",
            "## Le découvert",
            "Un découvert permet de dépenser au-delà du solde disponible selon les conditions de la banque. Il ne faut pas le considérer comme un revenu supplémentaire.",
            "",
            "## Le piège psychologique",
            "Lorsque le crédit rend immédiatement un achat possible, il est facile de se concentrer sur l'achat et d'oublier le coût futur.",
            "",
            "La bonne habitude consiste à regarder l'ensemble de l'engagement avant d'utiliser le crédit."
          ],
          examples: [
            "Une personne utilise régulièrement une réserve de crédit pour financer ses dépenses alimentaires. Elle risque alors de transformer une difficulté temporaire de trésorerie en dette persistante."
          ],
          practice: [
            "Analyse une situation dans laquelle une personne utilise trois moyens de crédit différents et identifie lesquels doivent être traités en priorité."
          ],
          quiz: [
            {
              question:
                "Quel est le principal risque de payer uniquement le minimum sur une dette coûteuse ?",
              options: [
                "La dette peut durer plus longtemps et coûter davantage en intérêts",
                "La dette disparaît immédiatement",
                "Le taux devient automatiquement nul",
                "Le prêteur rembourse l'emprunteur"
              ],
              answer: 0,
              explanation:
                "Un remboursement minimal peut ralentir fortement la réduction du capital et augmenter le coût total."
            }
          ]
        },

        {
          slug: "eviter-surendettement",
          title: "3.2 Éviter la Spirale de l'Endettement",
          duration: "15 min",
          description:
            "Identifie les comportements et situations qui peuvent faire augmenter rapidement les dettes.",
          objectives: [
            "Reconnaître les signes d'une spirale d'endettement.",
            "Comprendre le danger du refinancement permanent.",
            "Construire des premières actions pour stabiliser sa situation."
          ],
          content: [
            "## Qu'est-ce qu'une spirale d'endettement ?",
            "Une spirale peut apparaître lorsque de nouvelles dettes servent régulièrement à couvrir des dépenses ou des remboursements précédents.",
            "",
            "Le problème devient alors cumulatif : les intérêts et frais s'ajoutent, tandis que la marge disponible diminue.",
            "",
            "## Signes d'alerte",
            "- Utiliser une carte pour payer une autre dette.",
            "- Contracter régulièrement de nouveaux crédits.",
            "- Retarder certaines factures pour payer les mensualités.",
            "- Ne plus savoir exactement combien l'on doit.",
            "- Éviter d'ouvrir ses relevés ou courriers financiers.",
            "",
            "## Première priorité : stabiliser",
            "Lorsqu'une personne est déjà fortement endettée, l'objectif n'est pas de chercher une solution miracle.",
            "",
            "Il faut d'abord :",
            "1. arrêter d'augmenter inutilement la dette ;",
            "2. connaître précisément les montants dus ;",
            "3. protéger les dépenses essentielles ;",
            "4. contacter rapidement les créanciers lorsque les paiements deviennent difficiles ;",
            "5. rechercher, si nécessaire, un accompagnement financier ou juridique adapté au pays."
          ],
          examples: [
            "Une personne qui utilise chaque mois une nouvelle avance pour payer une ancienne mensualité doit considérer cela comme un signal d'alerte important."
          ],
          practice: [
            "Crée une checklist de cinq signes qui indiqueraient qu'un budget personnel commence à devenir difficile à maintenir."
          ],
          quiz: [
            {
              question:
                "Quelle est une première action utile lorsqu'une personne commence à perdre le contrôle de ses dettes ?",
              options: [
                "Contracter immédiatement un autre crédit sans comparer",
                "Établir précisément la liste de ses dettes et arrêter d'en accumuler inutilement",
                "Ignorer les relevés",
                "Augmenter toutes ses dépenses"
              ],
              answer: 1,
              explanation:
                "Il faut d'abord connaître précisément sa situation et éviter d'aggraver le problème."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Méthodes de Désendettement",
      lessons: [
        {
          slug: "methode-avalanche",
          title: "4.1 Méthode Avalanche : Priorité au Taux le Plus Élevé",
          duration: "15 min",
          description:
            "Utilise une stratégie mathématique pour réduire le coût des intérêts.",
          objectives: [
            "Comprendre le principe de la méthode Avalanche.",
            "Classer ses dettes selon leur taux.",
            "Comprendre pourquoi cette méthode peut réduire le coût total."
          ],
          content: [
            "## Le principe",
            "Avec la méthode Avalanche, on paie les minimums nécessaires sur les différentes dettes puis on affecte l'argent supplémentaire à la dette ayant le taux d'intérêt le plus élevé.",
            "",
            "Une fois cette dette remboursée, l'argent qui lui était consacré est transféré vers la dette suivante.",
            "",
            "## Exemple",
            "Supposons :",
            "- Dette A : 1 000 € à 5 %.",
            "- Dette B : 2 000 € à 18 %.",
            "- Dette C : 500 € à 12 %.",
            "",
            "La méthode Avalanche cible d'abord la dette B, car son taux est le plus élevé.",
            "",
            "## Avantage",
            "À conditions comparables, cette méthode vise à réduire le montant total des intérêts payés.",
            "",
            "## Limite",
            "Elle peut être psychologiquement moins motivante si la dette au taux le plus élevé est aussi la plus importante."
          ],
          examples: [
            "Si une personne dispose de 150 € supplémentaires par mois, elle peut conserver les paiements prévus sur les autres dettes et concentrer ces 150 € sur la dette ayant le taux le plus élevé."
          ],
          practice: [
            "Classe quatre dettes fictives par taux d'intérêt décroissant et identifie laquelle devrait recevoir le paiement supplémentaire."
          ],
          quiz: [
            {
              question:
                "Quelle dette est prioritaire dans la méthode Avalanche ?",
              options: [
                "Celle dont le solde est le plus petit",
                "Celle dont le taux d'intérêt est le plus élevé",
                "Celle dont le nom commence par A",
                "Celle qui a été contractée le plus récemment"
              ],
              answer: 1,
              explanation:
                "La méthode Avalanche cible en priorité la dette ayant le taux d'intérêt le plus élevé."
            }
          ]
        },

        {
          slug: "methode-boule-de-neige",
          title: "4.2 Méthode Boule de Neige : Priorité au Plus Petit Solde",
          duration: "15 min",
          description:
            "Découvre une stratégie comportementale qui cherche à créer rapidement des victoires visibles.",
          objectives: [
            "Comprendre le fonctionnement de la méthode Boule de Neige.",
            "Comparer Boule de Neige et Avalanche.",
            "Choisir une stratégie cohérente avec sa situation et son comportement."
          ],
          content: [
            "## Le principe",
            "Avec la méthode Boule de Neige, on classe les dettes du plus petit solde au plus grand.",
            "",
            "On paie les minimums nécessaires sur les autres dettes et on concentre l'argent supplémentaire sur la plus petite.",
            "",
            "Une fois celle-ci remboursée, le montant libéré est ajouté au paiement de la dette suivante.",
            "",
            "## Pourquoi cette méthode peut fonctionner",
            "Le remboursement rapide d'une petite dette peut donner un sentiment de progression et renforcer la motivation.",
            "",
            "## Avalanche vs Boule de Neige",
            "| Méthode | Priorité | Principal avantage |",
            "|---|---|---|",
            "| Avalanche | Taux le plus élevé | Réduire le coût des intérêts |",
            "| Boule de Neige | Plus petit solde | Créer des victoires rapides |",
            "",
            "Il n'existe pas une méthode psychologiquement parfaite pour tout le monde. Une stratégie légèrement moins optimale mathématiquement mais réellement suivie peut être préférable à une stratégie abandonnée."
          ],
          examples: [
            "Avec des dettes de 300 €, 1 200 € et 4 000 €, la méthode Boule de Neige commence par la dette de 300 €, indépendamment de son taux."
          ],
          practice: [
            "Prends quatre dettes fictives et construis deux ordres de remboursement : un selon Avalanche et un selon Boule de Neige."
          ],
          quiz: [
            {
              question:
                "Quel est le principal avantage comportemental de la méthode Boule de Neige ?",
              options: [
                "Elle cible toujours le taux le plus élevé",
                "Elle permet d'obtenir rapidement des dettes entièrement remboursées",
                "Elle supprime les intérêts",
                "Elle augmente automatiquement les revenus"
              ],
              answer: 1,
              explanation:
                "La méthode Boule de Neige cherche à créer des victoires rapides en éliminant d'abord les plus petites dettes."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Construire son Plan de Désendettement",
      lessons: [
        {
          slug: "inventaire-des-dettes",
          title: "5.1 Faire l'Inventaire Complet de ses Dettes",
          duration: "14 min",
          description:
            "Transforme une situation floue en tableau clair et exploitable.",
          objectives: [
            "Lister toutes ses dettes.",
            "Identifier taux, soldes, mensualités et échéances.",
            "Préparer un plan de remboursement réaliste."
          ],
          content: [
            "## Pourquoi faire un inventaire ?",
            "Il est difficile de résoudre un problème que l'on ne mesure pas.",
            "",
            "Commence par créer un tableau avec :",
            "- créancier ;",
            "- type de dette ;",
            "- capital restant dû ;",
            "- taux ;",
            "- mensualité minimale ;",
            "- date d'échéance ;",
            "- éventuels frais ou pénalités ;",
            "- statut du remboursement.",
            "",
            "## Exemple de tableau",
            "| Dette | Solde | Taux | Minimum |",
            "|---|---:|---:|---:|",
            "| Carte A | 800 € | 18 % | 50 € |",
            "| Prêt B | 3 000 € | 8 % | 120 € |",
            "| Crédit C | 500 € | 12 % | 40 € |",
            "",
            "Une fois le tableau créé, tu peux choisir une méthode de remboursement et définir un montant supplémentaire réaliste."
          ],
          examples: [
            "Une personne découvre qu'une petite dette de 400 € coûte en réalité plus cher en taux qu'une dette de 2 000 €. Cette information peut modifier son ordre de remboursement."
          ],
          practice: [
            "Crée ton propre tableau de dettes avec au moins six colonnes utiles."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il connaître le taux de chaque dette ?",
              options: [
                "Pour choisir une stratégie de remboursement adaptée",
                "Pour changer automatiquement le montant emprunté",
                "Pour supprimer les contrats",
                "Pour éviter de faire un budget"
              ],
              answer: 0,
              explanation:
                "Le taux permet notamment de comparer le coût des différentes dettes et d'utiliser la méthode Avalanche."
            }
          ]
        },

        {
          slug: "budget-remboursement-dettes",
          title: "5.2 Créer un Budget Spécial Désendettement",
          duration: "16 min",
          description:
            "Libère une marge financière pour accélérer le remboursement sans sacrifier les dépenses essentielles.",
          objectives: [
            "Identifier les dépenses qui peuvent être réduites temporairement.",
            "Définir une somme supplémentaire réaliste pour les dettes.",
            "Éviter de construire un plan impossible à maintenir."
          ],
          content: [
            "## Le principe",
            "Un plan de désendettement doit être suffisamment ambitieux pour progresser mais suffisamment réaliste pour être maintenu.",
            "",
            "Commence par protéger :",
            "- logement ;",
            "- alimentation ;",
            "- énergie et services essentiels ;",
            "- transport nécessaire ;",
            "- obligations prioritaires.",
            "",
            "Ensuite, examine les dépenses flexibles :",
            "- abonnements peu utilisés ;",
            "- sorties ;",
            "- achats impulsifs ;",
            "- dépenses non prioritaires.",
            "",
            "L'argent économisé peut servir à accélérer le remboursement.",
            "",
            "## Attention aux budgets extrêmes",
            "Supprimer toutes les dépenses de loisirs pendant plusieurs mois peut sembler efficace mais devenir difficile à maintenir.",
            "",
            "Un plan durable est généralement préférable à un plan extrêmement strict abandonné après quelques semaines."
          ],
          examples: [
            "Réduire temporairement 100 € de dépenses flexibles et les affecter à une dette peut accélérer le remboursement sans modifier les dépenses essentielles."
          ],
          practice: [
            "Identifie cinq dépenses flexibles que tu pourrais réduire pendant trois mois et estime le montant récupérable."
          ],
          quiz: [
            {
              question:
                "Quel est le meilleur objectif d'un budget de désendettement ?",
              options: [
                "Être impossible à respecter",
                "Réduire les dépenses essentielles à zéro",
                "Créer une marge réaliste et durable pour rembourser les dettes",
                "Augmenter systématiquement les crédits"
              ],
              answer: 2,
              explanation:
                "Le plan doit être réaliste et durable afin que la personne puisse réellement le suivre."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Négocier et Gérer ses Créanciers",
      lessons: [
        {
          slug: "renegocier-une-dette",
          title: "6.1 Renégociation, Rééchelonnement et Regroupement",
          duration: "16 min",
          description:
            "Découvre les solutions qui peuvent parfois réduire la pression mensuelle ou modifier les conditions d'une dette.",
          objectives: [
            "Comprendre le principe d'une renégociation.",
            "Distinguer réduction de mensualité et réduction du coût total.",
            "Évaluer les conséquences d'un regroupement de crédits."
          ],
          content: [
            "## Renégocier une dette",
            "Selon le contrat et la situation, il peut être possible de discuter avec le créancier d'un nouveau calendrier ou de nouvelles conditions.",
            "",
            "Une mensualité plus faible n'est cependant pas nécessairement une économie.",
            "",
            "## Le rééchelonnement",
            "Allonger la durée peut réduire les paiements périodiques mais augmenter le coût total.",
            "",
            "## Le regroupement de crédits",
            "Le regroupement consiste généralement à réunir plusieurs dettes dans un nouveau financement.",
            "",
            "Cela peut simplifier la gestion ou réduire certaines mensualités, mais il faut examiner attentivement le nouveau taux, les frais, la durée et le coût total.",
            "",
            "## Règle essentielle",
            "Ne compare jamais uniquement les mensualités.",
            "",
            "Compare le coût total, la durée, les frais et les nouvelles conditions."
          ],
          examples: [
            "Un regroupement qui fait passer une mensualité de 400 € à 250 € peut sembler avantageux, mais si la durée augmente fortement et que les frais sont importants, le coût total peut être supérieur."
          ],
          practice: [
            "Compare deux offres fictives de regroupement en calculant la différence de mensualité, de durée et de coût total."
          ],
          quiz: [
            {
              question:
                "Une mensualité plus faible signifie-t-elle forcément que le nouveau crédit coûte moins cher ?",
              options: [
                "Oui, toujours",
                "Non, il faut aussi comparer la durée, les taux, les frais et le coût total",
                "Oui, si le contrat est signé rapidement",
                "Oui, si le crédit est plus long"
              ],
              answer: 1,
              explanation:
                "Une mensualité plus faible peut simplement être obtenue en allongeant la durée."
            }
          ]
        },

        {
          slug: "contacter-creancier-difficulte",
          title: "6.2 Que Faire lorsqu'on ne Peut Plus Payer ?",
          duration: "15 min",
          description:
            "Découvre les premières étapes à suivre lorsqu'une dette devient difficile à rembourser.",
          objectives: [
            "Réagir rapidement en cas de difficulté de paiement.",
            "Préparer les informations nécessaires avant de contacter un créancier.",
            "Comprendre pourquoi il faut éviter d'attendre que la situation s'aggrave."
          ],
          content: [
            "## Ne pas attendre trop longtemps",
            "Lorsqu'une personne sait qu'elle risque de ne plus pouvoir payer, attendre sans rien faire peut limiter les solutions disponibles.",
            "",
            "Une première étape consiste à contacter le créancier ou l'organisme concerné et à expliquer clairement la situation.",
            "",
            "## Préparer son dossier",
            "Avant la discussion, rassemble :",
            "- revenus ;",
            "- dépenses essentielles ;",
            "- liste des dettes ;",
            "- relevés ;",
            "- montant actuellement disponible ;",
            "- proposition de remboursement réaliste.",
            "",
            "## Attention aux promesses miracles",
            "Méfie-toi des services qui promettent de supprimer toutes tes dettes rapidement ou garantissent un résultat sans analyser ta situation.",
            "",
            "Selon le pays, des organismes publics, associations ou professionnels peuvent proposer des services d'information ou d'accompagnement."
          ],
          examples: [
            "Une personne qui anticipe une baisse importante de revenus peut contacter son créancier avant le premier retard afin de discuter des options prévues par le contrat."
          ],
          practice: [
            "Rédige une checklist des documents à préparer avant de demander un aménagement de remboursement."
          ],
          quiz: [
            {
              question:
                "Pourquoi est-il généralement préférable de réagir avant que les impayés ne s'accumulent ?",
              options: [
                "Parce que cela peut laisser davantage de possibilités de discussion et d'organisation",
                "Parce que les dettes disparaissent automatiquement",
                "Parce que les intérêts deviennent toujours nuls",
                "Parce que le contrat est automatiquement annulé"
              ],
              answer: 0,
              explanation:
                "Agir rapidement permet généralement de mieux comprendre les options disponibles et d'éviter que la situation ne se détériore davantage."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Crédit et Décisions Financières",
      lessons: [
        {
          slug: "faut-il-emprunter",
          title: "7.1 Faut-il vraiment Emprunter ?",
          duration: "15 min",
          description:
            "Utilise une méthode simple pour décider si un achat doit être financé par crédit.",
          objectives: [
            "Distinguer besoin, envie et investissement.",
            "Évaluer le coût d'opportunité d'un crédit.",
            "Construire une grille de décision avant d'emprunter."
          ],
          content: [
            "## Avant de demander un crédit",
            "Pose-toi plusieurs questions :",
            "1. Est-ce un besoin ou une envie ?",
            "2. Puis-je attendre et épargner ?",
            "3. Combien le crédit coûtera-t-il réellement ?",
            "4. Que se passe-t-il si mes revenus diminuent ?",
            "5. Cette dépense est-elle compatible avec mes objectifs financiers ?",
            "",
            "## Crédit et épargne",
            "Emprunter tout en conservant une épargne importante peut parfois avoir du sens, mais il faut comparer le rendement attendu de l'épargne avec le coût certain ou probable de la dette et tenir compte de la liquidité et du risque.",
            "",
            "Il n'existe donc pas une règle universelle disant qu'il faut toujours emprunter ou toujours payer comptant."
          ],
          examples: [
            "Pour un achat non urgent, attendre quelques mois et épargner peut éviter de payer des intérêts et permettre de vérifier si l'achat est réellement nécessaire."
          ],
          practice: [
            "Crée une grille de décision avec cinq questions à utiliser avant toute nouvelle demande de crédit."
          ],
          quiz: [
            {
              question:
                "Quelle question est particulièrement importante avant de contracter une dette ?",
              options: [
                "Quelle couleur aura la carte ?",
                "Quel sera le coût total et puis-je supporter le remboursement ?",
                "Combien de publicités ai-je vues ?",
                "Quelle est la durée du logo de la banque ?"
              ],
              answer: 1,
              explanation:
                "Le coût total et la capacité de remboursement sont deux éléments essentiels dans une décision d'endettement."
            }
          ]
        },

        {
          slug: "credit-et-score-credit",
          title: "7.2 Historique de Crédit et Comportement de Paiement",
          duration: "14 min",
          description:
            "Comprends pourquoi les comportements de remboursement peuvent avoir une importance dans l'accès futur au crédit.",
          objectives: [
            "Comprendre le principe général d'un historique de crédit.",
            "Identifier l'importance des paiements effectués dans les délais.",
            "Éviter les généralisations sur les systèmes de crédit qui varient selon les pays."
          ],
          content: [
            "## L'historique de crédit",
            "Dans certains pays, les établissements financiers utilisent des informations relatives aux antécédents de crédit pour évaluer le risque d'un emprunteur.",
            "",
            "Les systèmes de notation et les règles varient fortement selon les pays.",
            "",
            "## Les comportements importants",
            "Selon le système concerné, peuvent notamment être pris en compte :",
            "- historique de paiement ;",
            "- dettes existantes ;",
            "- utilisation de certaines lignes de crédit ;",
            "- ancienneté de certains comptes ;",
            "- demandes ou nouveaux crédits.",
            "",
            "## Une règle simple",
            "Ne contracte pas une dette uniquement pour essayer d'améliorer une note de crédit.",
            "",
            "Le crédit doit répondre à un besoin réel et rester financièrement supportable."
          ],
          examples: [
            "Dans un pays utilisant un système de score de crédit, des paiements régulièrement effectués dans les délais peuvent contribuer à un historique plus favorable."
          ],
          practice: [
            "Liste trois comportements qui réduisent le risque de problèmes liés au remboursement d'un crédit."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il être prudent lorsqu'on parle de score de crédit ?",
              options: [
                "Parce que tous les pays utilisent exactement le même système",
                "Parce que les systèmes, critères et règles varient selon les pays",
                "Parce que le crédit n'existe dans aucun pays",
                "Parce que le score dépend uniquement du salaire"
              ],
              answer: 1,
              explanation:
                "Les systèmes de crédit et les critères d'évaluation diffèrent selon les pays."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Erreurs et Pièges à Éviter",
      lessons: [
        {
          slug: "erreurs-credit",
          title: "8.1 Les Erreurs les Plus Courantes avec le Crédit",
          duration: "15 min",
          description:
            "Identifie les erreurs qui peuvent transformer un crédit utile en problème financier.",
          objectives: [
            "Identifier les erreurs fréquentes liées au crédit.",
            "Comprendre le danger des décisions prises sous pression.",
            "Construire une checklist de sécurité avant de signer."
          ],
          content: [
            "## Erreur 1 : Regarder uniquement la mensualité",
            "Une petite mensualité peut cacher une durée très longue ou des frais importants.",
            "",
            "## Erreur 2 : Ne pas comparer",
            "Accepter la première offre disponible empêche parfois de découvrir des conditions différentes.",
            "",
            "## Erreur 3 : Emprunter pour financer les dépenses courantes",
            "Utiliser régulièrement le crédit pour couvrir les besoins essentiels peut signaler que le budget structurel n'est pas équilibré.",
            "",
            "## Erreur 4 : Ignorer les petits frais",
            "Des frais individuels faibles peuvent devenir significatifs lorsqu'ils se répètent.",
            "",
            "## Erreur 5 : Signer sans comprendre",
            "Si une clause est incomprise, il faut demander une explication avant de s'engager."
          ],
          examples: [
            "Une personne choisit un crédit parce que la publicité annonce une mensualité très faible. Après comparaison, elle découvre qu'une autre offre coûte moins cher sur l'ensemble de la durée."
          ],
          practice: [
            "Crée une checklist de dix questions à poser avant de signer un contrat de crédit."
          ],
          quiz: [
            {
              question:
                "Quelle est une erreur fréquente lorsqu'on compare deux crédits ?",
              options: [
                "Comparer le coût total",
                "Comparer les taux",
                "Regarder uniquement la mensualité",
                "Lire les conditions"
              ],
              answer: 2,
              explanation:
                "La mensualité seule ne permet pas de comparer correctement le coût d'un financement."
            }
          ]
        },

        {
          slug: "arnaques-credit",
          title: "8.2 Reconnaître les Arnaques et Fausses Promesses",
          duration: "14 min",
          description:
            "Apprends à reconnaître les signaux d'alerte autour des offres de crédit et de désendettement.",
          objectives: [
            "Identifier plusieurs signaux d'alerte.",
            "Éviter les offres financières trop belles pour être vraies.",
            "Vérifier l'identité et les conditions d'un prestataire."
          ],
          content: [
            "## Signaux d'alerte",
            "Méfie-toi notamment des offres qui promettent :",
            "- un crédit garanti sans aucune vérification ;",
            "- des rendements ou économies irréalistes ;",
            "- une suppression garantie de toutes les dettes ;",
            "- une décision urgente sans possibilité de lire le contrat ;",
            "- des paiements vers des comptes inhabituels sans justification.",
            "",
            "## La pression est un signal",
            "Une personne qui te demande de signer immédiatement ou de transférer de l'argent avant de fournir des informations claires mérite une vigilance particulière.",
            "",
            "## Vérifier avant de payer",
            "Vérifie l'identité du prestataire, les conditions contractuelles, les frais et, lorsque cela est pertinent, son statut auprès des autorités compétentes de ton pays."
          ],
          examples: [
            "Une publicité promettant de supprimer 80 % de toutes les dettes contre un paiement immédiat doit être considérée avec une grande prudence."
          ],
          practice: [
            "Analyse trois annonces financières fictives et identifie les signaux d'alerte présents dans chacune."
          ],
          quiz: [
            {
              question:
                "Quel élément doit particulièrement attirer ton attention dans une offre financière ?",
              options: [
                "Une promesse de résultat garanti et exceptionnel accompagnée d'une forte pression",
                "Un contrat que tu peux lire tranquillement",
                "Des informations transparentes sur les frais",
                "La possibilité de comparer plusieurs offres"
              ],
              answer: 0,
              explanation:
                "Les promesses exceptionnelles associées à la pression et au manque de transparence sont des signaux d'alerte."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Sortir de la Dette et Reconstruire",
      lessons: [
        {
          slug: "prioriser-dettes-et-epargne",
          title: "9.1 Dette, Épargne et Fonds d'Urgence",
          duration: "16 min",
          description:
            "Apprends à équilibrer remboursement des dettes et constitution d'une réserve de sécurité.",
          objectives: [
            "Comprendre pourquoi rembourser une dette et épargner peuvent être deux objectifs complémentaires.",
            "Identifier les dépenses imprévues qui justifient une réserve de sécurité.",
            "Construire une stratégie adaptée à sa situation."
          ],
          content: [
            "## Faut-il rembourser toute dette avant d'épargner ?",
            "Il n'existe pas une réponse universelle.",
            "",
            "Une personne fortement endettée peut vouloir réduire rapidement les dettes coûteuses, tout en conservant une petite réserve permettant d'éviter de reprendre du crédit au premier imprévu.",
            "",
            "## Pourquoi garder une réserve ?",
            "Sans aucune épargne disponible, une réparation urgente, une perte de revenu ou une dépense importante peut obliger à utiliser une nouvelle dette.",
            "",
            "## Trouver un équilibre",
            "Une stratégie possible consiste à :",
            "1. couvrir les dépenses essentielles ;",
            "2. constituer une petite réserve de sécurité ;",
            "3. rembourser agressivement les dettes coûteuses ;",
            "4. renforcer progressivement le fonds de sécurité lorsque la dette diminue.",
            "",
            "La stratégie doit être adaptée aux revenus, aux risques et aux obligations de chacun."
          ],
          examples: [
            "Une personne peut conserver une petite réserve pour les urgences tout en consacrant la majorité de sa capacité d'épargne supplémentaire à une dette à taux élevé."
          ],
          practice: [
            "Construis un plan en trois étapes pour une personne ayant une dette coûteuse, des revenus réguliers et très peu d'épargne."
          ],
          quiz: [
            {
              question:
                "Pourquoi une petite réserve d'urgence peut-elle être utile pendant un désendettement ?",
              options: [
                "Elle peut réduire le risque de devoir reprendre une dette au premier imprévu",
                "Elle supprime automatiquement les intérêts",
                "Elle garantit un rendement élevé",
                "Elle remplace le budget"
              ],
              answer: 0,
              explanation:
                "Une réserve peut servir à absorber certaines dépenses imprévues et limiter le recours à de nouveaux crédits."
            }
          ]
        },

        {
          slug: "reconstruire-apres-dettes",
          title: "9.2 Après les Dettes : Reconstruire sa Situation Financière",
          duration: "15 min",
          description:
            "Transforme la fin du remboursement en nouvelle étape de construction financière.",
          objectives: [
            "Éviter de remplacer une dette par une nouvelle.",
            "Rediriger progressivement les anciennes mensualités vers des objectifs financiers.",
            "Construire de nouvelles habitudes durables."
          ],
          content: [
            "## La dette remboursée libère du cash-flow",
            "Lorsqu'une dette disparaît, le montant qui était consacré à sa mensualité devient disponible.",
            "",
            "L'erreur serait de considérer immédiatement cet argent comme une nouvelle capacité de consommation.",
            "",
            "## Nouvelle allocation possible",
            "Une fois les dettes coûteuses réduites, l'argent libéré peut servir à :",
            "- renforcer le fonds d'urgence ;",
            "- financer des objectifs importants ;",
            "- investir selon son profil et ses objectifs ;",
            "- financer une formation ;",
            "- préparer des dépenses futures.",
            "",
            "## Le changement d'habitude",
            "Le véritable objectif n'est pas seulement de rembourser une dette. C'est aussi de comprendre pourquoi elle est apparue et de modifier le système financier qui l'a rendue nécessaire."
          ],
          examples: [
            "Une personne qui remboursait 200 € par mois peut décider de continuer à mettre ces 200 € de côté chaque mois une fois la dette terminée."
          ],
          practice: [
            "Crée un plan pour réaffecter une ancienne mensualité de dette à trois objectifs financiers différents."
          ],
          quiz: [
            {
              question:
                "Que peut-on faire avec l'argent libéré après le remboursement d'une dette ?",
              options: [
                "Le consacrer à une réserve, des objectifs financiers ou des investissements adaptés",
                "Contracter automatiquement une nouvelle dette",
                "Le considérer comme un revenu garanti",
                "Le dépenser systématiquement"
              ],
              answer: 0,
              explanation:
                "L'argent libéré peut servir à renforcer la sécurité financière et à avancer vers de nouveaux objectifs."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Projet Final - Plan de Désendettement",
      lessons: [
        {
          slug: "projet-plan-desendettement",
          title: "10.1 Construire son Plan Personnel de Désendettement",
          duration: "20 min",
          description:
            "Mets en pratique toutes les notions du cours pour construire un plan de remboursement réaliste.",
          objectives: [
            "Faire l'inventaire complet des dettes.",
            "Choisir une méthode de remboursement.",
            "Définir un budget de désendettement.",
            "Prévoir une stratégie pour éviter de nouvelles dettes."
          ],
          content: [
            "## Étape 1 : Faire l'inventaire",
            "Liste toutes les dettes, leurs soldes, leurs taux, leurs mensualités et leurs échéances.",
            "",
            "## Étape 2 : Calculer sa capacité",
            "Détermine combien tu peux consacrer chaque mois au remboursement après avoir couvert les dépenses essentielles.",
            "",
            "## Étape 3 : Choisir une méthode",
            "Choisis entre :",
            "- **Avalanche :** taux le plus élevé en priorité.",
            "- **Boule de Neige :** plus petit solde en priorité.",
            "",
            "## Étape 4 : Automatiser",
            "Lorsque cela est possible, programme les paiements afin de réduire le risque d'oublier une échéance.",
            "",
            "## Étape 5 : Suivre les progrès",
            "Chaque mois, mets à jour :",
            "- dette restante ;",
            "- intérêts payés ;",
            "- montant supplémentaire versé ;",
            "- prochaine dette ciblée.",
            "",
            "## Étape 6 : Prévenir la rechute",
            "Identifie les comportements qui ont contribué à l'endettement initial et définis des règles personnelles pour les éviter.",
            "",
            "## Livrable final",
            "À la fin du projet, tu dois disposer d'un tableau comprenant :",
            "1. toutes tes dettes ;",
            "2. leur ordre de remboursement ;",
            "3. ton budget mensuel de désendettement ;",
            "4. ta méthode choisie ;",
            "5. une règle pour éviter de nouvelles dettes inutiles."
          ],
          examples: [
            "Exemple de règle personnelle : « Je n'utilise pas un crédit pour financer une dépense courante non urgente si je ne peux pas l'intégrer à mon budget mensuel. »"
          ],
          practice: [
            "Construis ton tableau complet de désendettement et définis une action concrète à réaliser cette semaine."
          ],
          quiz: [
            {
              question:
                "Quelle est la première étape d'un bon plan de désendettement ?",
              options: [
                "Contracter un nouveau crédit",
                "Faire l'inventaire précis de toutes les dettes",
                "Supprimer toutes les dépenses alimentaires",
                "Investir immédiatement toute son épargne"
              ],
              answer: 1,
              explanation:
                "Il faut d'abord connaître précisément les dettes, leurs coûts et leurs mensualités avant de choisir une stratégie."
            }
          ]
        }
      ]
    }
  ]
};

export const detteEtCreditExamQuestions: ExamQuestion[] = [
  {
    question:
      "Que représente généralement le capital d'un crédit ?",
    options: [
      "Le montant initial emprunté",
      "Les intérêts déjà payés",
      "Les frais uniquement",
      "Les pénalités"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi une mensualité faible ne signifie-t-elle pas nécessairement qu'un crédit est peu coûteux ?",
    options: [
      "Parce que la durée et les intérêts peuvent être plus élevés",
      "Parce qu'une petite mensualité est toujours illégale",
      "Parce que le capital disparaît",
      "Parce que les banques ne calculent jamais les intérêts"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel élément doit être comparé avant de choisir entre deux crédits ?",
    options: [
      "Le coût total, le taux, la durée et les frais",
      "Uniquement la couleur de la carte",
      "Uniquement la mensualité",
      "Uniquement le nom de la banque"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi l'expression « bonne dette » doit-elle être utilisée avec prudence ?",
    options: [
      "Parce qu'une dette peut être utile mais rester risquée ou coûteuse",
      "Parce que toutes les dettes sont gratuites",
      "Parce que toutes les dettes sont mauvaises",
      "Parce qu'une dette ne doit jamais être remboursée"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle formule simple permet d'estimer un taux d'endettement ?",
    options: [
      "Mensualités de dettes / revenus × 100",
      "Revenus / dépenses × 100",
      "Dettes × revenus",
      "Épargne / revenus × 100"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle méthode cible en priorité la dette au taux d'intérêt le plus élevé ?",
    options: [
      "Avalanche",
      "Boule de Neige",
      "Budget zéro",
      "Méthode du hasard"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle dette est ciblée en premier avec la méthode Boule de Neige ?",
    options: [
      "La dette au taux le plus élevé",
      "La dette au solde le plus faible",
      "La dette la plus ancienne",
      "La dette ayant la plus grosse mensualité"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel est l'avantage principal de la méthode Avalanche ?",
    options: [
      "Elle peut réduire le coût total des intérêts",
      "Elle supprime toutes les dettes immédiatement",
      "Elle évite tout budget",
      "Elle augmente automatiquement les revenus"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est un avantage psychologique de la méthode Boule de Neige ?",
    options: [
      "Obtenir rapidement des dettes entièrement remboursées",
      "Éliminer automatiquement les intérêts",
      "Augmenter le salaire",
      "Supprimer les contrats"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi payer uniquement le minimum d'une dette coûteuse peut-il être problématique ?",
    options: [
      "Le remboursement peut durer plus longtemps et coûter davantage",
      "La dette disparaît trop rapidement",
      "Le taux devient automatiquement nul",
      "Le capital augmente automatiquement"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel comportement peut indiquer une spirale d'endettement ?",
    options: [
      "Contracter régulièrement de nouvelles dettes pour payer les anciennes",
      "Épargner chaque mois",
      "Comparer les offres",
      "Réduire les dépenses inutiles"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi faut-il éviter de regarder uniquement la mensualité d'un crédit ?",
    options: [
      "La durée et le coût total peuvent être beaucoup plus élevés",
      "La mensualité n'existe jamais",
      "Le taux n'a aucune importance",
      "Les crédits sont toujours gratuits"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Que peut entraîner un allongement de la durée d'un crédit ?",
    options: [
      "Une mensualité plus faible mais potentiellement un coût total plus élevé",
      "Un remboursement automatique",
      "La disparition des intérêts",
      "Une augmentation garantie des revenus"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est un bon réflexe avant de contracter un crédit ?",
    options: [
      "Comparer plusieurs offres et examiner le coût total",
      "Signer immédiatement",
      "Regarder uniquement la publicité",
      "Ignorer les frais"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi un découvert bancaire ne doit-il pas être considéré comme un revenu ?",
    options: [
      "Parce qu'il s'agit d'une forme de financement qui doit être remboursée selon ses conditions",
      "Parce qu'il augmente définitivement le salaire",
      "Parce qu'il est toujours gratuit",
      "Parce qu'il n'a aucun lien avec le compte"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Que faut-il faire lorsqu'on ne comprend pas une clause d'un contrat de crédit ?",
    options: [
      "Demander une explication avant de s'engager",
      "Signer sans lire",
      "Ignorer la clause",
      "Détruire le contrat"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi une petite réserve d'urgence peut-elle être utile pendant un désendettement ?",
    options: [
      "Elle peut éviter de reprendre un crédit lors d'un imprévu",
      "Elle supprime les dettes",
      "Elle garantit un rendement",
      "Elle remplace toutes les assurances"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est un signal d'alerte concernant une offre financière ?",
    options: [
      "Promesse de résultat garanti et exceptionnel accompagnée de pression",
      "Contrat transparent",
      "Possibilité de comparer",
      "Conditions clairement expliquées"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi faut-il être prudent avec les offres de regroupement de crédits ?",
    options: [
      "Une mensualité plus faible peut cacher une durée ou un coût total plus élevé",
      "Elles sont toujours gratuites",
      "Elles suppriment toutes les dettes",
      "Elles augmentent toujours les revenus"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle information doit figurer dans un bon inventaire de dettes ?",
    options: [
      "Solde, taux, mensualité et conditions principales",
      "Couleur du contrat",
      "Marque du téléphone",
      "Nombre d'amis"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est l'objectif d'un budget de désendettement réaliste ?",
    options: [
      "Créer une marge durable pour accélérer le remboursement",
      "Supprimer toutes les dépenses essentielles",
      "Ne plus jamais avoir de loisirs",
      "Contracter davantage de crédits"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi faut-il agir rapidement lorsqu'on anticipe une difficulté de paiement ?",
    options: [
      "Pour comprendre les options disponibles avant que la situation ne se dégrade davantage",
      "Pour annuler automatiquement la dette",
      "Pour supprimer tous les intérêts",
      "Pour éviter toute communication avec le créancier"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Les systèmes de score de crédit sont-ils identiques dans tous les pays ?",
    options: [
      "Oui",
      "Non, les systèmes et critères varient selon les pays",
      "Oui, depuis toujours",
      "Uniquement pour les entreprises"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Que peut-on faire avec l'argent libéré après le remboursement d'une dette ?",
    options: [
      "Renforcer son épargne, financer des objectifs ou investir selon sa situation",
      "Contracter automatiquement un nouveau crédit",
      "Le considérer comme un revenu permanent",
      "Le dépenser obligatoirement"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle est la première étape d'un plan de désendettement ?",
    options: [
      "Faire l'inventaire complet des dettes",
      "Contracter un nouveau prêt",
      "Investir tout son argent",
      "Supprimer son budget"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle affirmation décrit correctement la méthode Avalanche ?",
    options: [
      "Elle cible en priorité la dette au taux le plus élevé",
      "Elle cible toujours la plus petite dette",
      "Elle consiste à ne payer aucune dette",
      "Elle augmente volontairement les intérêts"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle affirmation décrit correctement la méthode Boule de Neige ?",
    options: [
      "Elle cible en priorité la dette au plus petit solde",
      "Elle cible toujours le taux le plus élevé",
      "Elle ignore les mensualités",
      "Elle consiste à emprunter davantage"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel comportement réduit le risque de retomber dans l'endettement ?",
    options: [
      "Comprendre les causes de la dette et mettre en place de nouvelles habitudes financières",
      "Augmenter systématiquement les achats à crédit",
      "Ignorer les dépenses",
      "Ne jamais consulter ses comptes"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est le meilleur critère pour choisir une stratégie de remboursement entre Avalanche et Boule de Neige ?",
    options: [
      "Une stratégie que l'on comprend et que l'on peut réellement suivre, en tenant compte du coût financier",
      "Toujours choisir au hasard",
      "Toujours choisir la méthode avec le nom le plus court",
      "Ne jamais comparer les dettes"
    ],
    correctAnswer: 0
  }
];