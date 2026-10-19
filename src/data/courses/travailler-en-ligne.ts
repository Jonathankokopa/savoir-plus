import type { CourseDetail, ExamQuestion } from "../coursesData";

export const travaillerEnLigneCourse: CourseDetail = {
  slug: "travailler-en-ligne",
  categorySlug: "carriere",
  title: "Travailler en Ligne & Freelancing",
  description:
    "Apprends à construire une activité professionnelle en ligne, trouver des clients, présenter tes services, fixer tes tarifs, gérer des missions et travailler efficacement à distance.",
  level: "Débutant",
  icon: "🌍",

  modules: [
    {
      title: "Module 1: Comprendre le Freelancing & le Travail en Ligne",
      lessons: [
        {
          slug: "comprendre-freelancing-travail-en-ligne",
          title: "1.1 Comprendre le Freelancing et le Travail en Ligne",
          duration: "15 min",
          description:
            "Découvrez les différentes formes de travail en ligne et ce qu'implique réellement une activité freelance.",
          objectives: [
            "Comprendre ce qu'est le freelancing.",
            "Distinguer freelance, salarié à distance, consultant et prestataire.",
            "Identifier les avantages et les contraintes du travail en ligne.",
            "Comprendre pourquoi une compétence utile est la base d'une activité freelance."
          ],
          content: [
            "## Qu'est-ce que le freelancing ?",
            "Le freelancing consiste à proposer ses compétences à des clients sans être employé de manière permanente par une seule entreprise. Le freelance travaille généralement sur des missions définies avec un périmètre, des livrables, un délai et un prix.",
            "",
            "Le freelance peut travailler avec plusieurs clients successivement ou simultanément. Il doit donc gérer non seulement son métier, mais aussi la prospection, la communication, la facturation, l'organisation et la relation client.",
            "",
            "## Le travail en ligne ne signifie pas simplement travailler depuis chez soi",
            "Travailler en ligne implique souvent de collaborer avec des personnes situées dans d'autres villes ou pays. Il faut donc savoir communiquer clairement, respecter les délais, documenter son travail et organiser ses horaires.",
            "",
            "## Les principales formes de travail à distance",
            "- **Freelance :** missions ponctuelles ou récurrentes pour différents clients.",
            "- **Salariat remote :** contrat de travail avec une entreprise permettant de travailler à distance.",
            "- **Consulting :** accompagnement d'une organisation sur une expertise spécifique.",
            "- **Prestation de service :** réalisation d'un résultat défini pour un client.",
            "",
            "## Le modèle mental à adopter",
            "Un client n'achète pas simplement ton temps. Il cherche une solution à un problème. Plus ton offre montre clairement le problème que tu peux résoudre, le résultat attendu et la manière dont tu vas travailler, plus elle devient facile à comprendre."
          ],
          examples: [
            "Un développeur ne vend pas uniquement 20 heures de programmation. Il peut vendre la création d'une landing page rapide et responsive destinée à améliorer la conversion d'une campagne.",
            "Un community manager ne vend pas seulement des publications. Il peut proposer la gestion éditoriale mensuelle d'une marque avec calendrier, création de contenus, publication et reporting."
          ],
          practice: [
            "Liste trois compétences que tu pourrais transformer en service.",
            "Pour chacune, identifie un problème concret qu'un client pourrait vouloir résoudre.",
            "Écris une phrase sous la forme : « J'aide [type de client] à [résultat] grâce à [service]. »"
          ],
          quiz: [
            {
              question: "Quelle affirmation décrit le mieux le freelancing ?",
              options: [
                "Proposer ses compétences à des clients dans le cadre de missions ou prestations",
                "Travailler obligatoirement pour une seule entreprise",
                "Gagner automatiquement de l'argent dès la création d'un profil",
                "Travailler uniquement depuis son domicile"
              ],
              answer: 0,
              explanation:
                "Le freelance fournit des prestations à des clients. Le lieu de travail et le nombre de clients peuvent varier."
            },
            {
              question: "Que recherche principalement un client lorsqu'il engage un freelance ?",
              options: [
                "Une solution à un besoin ou problème",
                "Le plus grand nombre d'heures possible",
                "Un profil avec le plus de compétences possible",
                "Une personne qui accepte toujours le prix le plus bas"
              ],
              answer: 0,
              explanation:
                "Le client cherche avant tout un résultat ou une solution correspondant à son besoin."
            }
          ]
        },
        {
          slug: "choisir-une-competence-rentable",
          title: "1.2 Choisir une Compétence à Vendre en Ligne",
          duration: "16 min",
          description:
            "Apprenez à transformer une compétence existante en service commercialisable.",
          objectives: [
            "Identifier ses compétences monétisables.",
            "Différencier compétence, service et résultat.",
            "Choisir une niche ou un type de client.",
            "Éviter de proposer une offre trop vague."
          ],
          content: [
            "## Une compétence ne suffit pas toujours",
            "Dire « je fais du marketing » ou « je suis développeur » reste trop général. Un client doit rapidement comprendre ce que tu proposes et pour qui.",
            "",
            "Une bonne offre relie généralement quatre éléments :",
            "1. Un type de client.",
            "2. Un problème ou besoin.",
            "3. Une compétence ou méthode.",
            "4. Un résultat ou livrable.",
            "",
            "## Exemple",
            "Au lieu de : « Je suis graphiste. »",
            "Tu peux présenter une offre comme : « Je crée des visuels professionnels pour les réseaux sociaux des petites entreprises. »",
            "",
            "L'offre devient encore plus précise si tu définis le résultat : « Je crée un kit de 12 visuels Instagram cohérents avec l'identité visuelle de votre marque. »",
            "",
            "## Commencer avec une offre simple",
            "Au début, il est souvent plus facile de vendre une prestation clairement définie plutôt qu'une liste immense de services.",
            "",
            "Une offre simple est plus facile à présenter, à chiffrer, à livrer et à améliorer."
          ],
          examples: [
            "Développement : création d'un site vitrine pour une petite entreprise.",
            "Design : création d'une identité visuelle de base pour une nouvelle marque.",
            "Rédaction : rédaction de cinq articles optimisés pour un blog.",
            "Marketing : création d'un calendrier éditorial mensuel pour une entreprise."
          ],
          practice: [
            "Choisis une compétence principale.",
            "Définis ton client idéal.",
            "Identifie un problème que ce client rencontre.",
            "Transforme ta compétence en une offre concrète avec un livrable précis."
          ],
          quiz: [
            {
              question: "Laquelle de ces propositions est la plus précise ?",
              options: [
                "Je fais du digital",
                "Je suis informaticien",
                "Je crée des sites vitrines pour les petites entreprises",
                "Je maîtrise beaucoup de logiciels"
              ],
              answer: 2,
              explanation:
                "Une offre précise indique ce que tu fais et pour quel type de client."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Construire son Positionnement",
      lessons: [
        {
          slug: "positionnement-freelance",
          title: "2.1 Définir son Positionnement",
          duration: "17 min",
          description:
            "Apprenez à vous positionner clairement afin que les bons clients comprennent immédiatement votre valeur.",
          objectives: [
            "Comprendre le principe du positionnement.",
            "Choisir un domaine principal.",
            "Définir une cible client.",
            "Formuler une proposition de valeur."
          ],
          content: [
            "## Pourquoi le positionnement est important",
            "Un freelance qui affirme pouvoir « tout faire » peut avoir du mal à être identifié comme la meilleure personne pour une mission précise.",
            "",
            "Le positionnement consiste à rendre ton expertise compréhensible et pertinente pour une cible donnée.",
            "",
            "## Les quatre questions essentielles",
            "- Qui est mon client ?",
            "- Quel problème est-ce que je résous ?",
            "- Quel service est-ce que je propose ?",
            "- Pourquoi un client devrait-il me choisir ?",
            "",
            "## Spécialisation progressive",
            "Tu n'es pas obligé de choisir une niche définitive dès le premier jour. Tu peux commencer avec une offre relativement large, observer les demandes reçues puis te spécialiser progressivement.",
            "",
            "## Exemple",
            "« Développeur web » est une compétence.",
            "« Développeur React pour startups SaaS » est un positionnement plus précis.",
            "« Je crée et optimise les interfaces React de startups SaaS qui souhaitent améliorer leur produit web » ajoute une proposition de valeur."
          ],
          examples: [
            "Un rédacteur peut se spécialiser dans les contenus B2B, les articles SEO ou les pages de vente.",
            "Un développeur peut cibler les startups, les PME, les agences ou les commerces locaux."
          ],
          practice: [
            "Écris trois positionnements différents à partir de ta compétence.",
            "Pour chaque positionnement, indique le type de client visé et le problème résolu.",
            "Choisis celui qui te paraît le plus clair et réaliste."
          ],
          quiz: [
            {
              question: "Quel est l'objectif principal du positionnement ?",
              options: [
                "Rendre son offre claire pour une cible donnée",
                "Proposer le maximum de services possibles",
                "Réduire automatiquement ses tarifs",
                "Éviter toute spécialisation"
              ],
              answer: 0,
              explanation:
                "Un bon positionnement permet aux clients concernés de comprendre rapidement l'expertise et la valeur proposée."
            }
          ]
        },
        {
          slug: "construire-portfolio-freelance",
          title: "2.2 Construire un Portfolio qui Inspire Confiance",
          duration: "18 min",
          description:
            "Apprenez à présenter vos projets de manière convaincante, même lorsque vous débutez.",
          objectives: [
            "Comprendre le rôle d'un portfolio.",
            "Choisir les projets à présenter.",
            "Décrire un projet avec contexte, action et résultat.",
            "Créer des projets personnels lorsque l'on manque d'expérience client."
          ],
          content: [
            "## Un portfolio n'est pas une galerie de captures d'écran",
            "Un bon portfolio explique ce que tu as réalisé et pourquoi cela compte.",
            "",
            "Pour chaque projet, présente idéalement :",
            "- le contexte ;",
            "- le problème ou objectif ;",
            "- ton rôle ;",
            "- les actions réalisées ;",
            "- les outils utilisés lorsque cela est pertinent ;",
            "- le résultat obtenu.",
            "",
            "## Quand on n'a pas encore de clients",
            "Tu peux créer des projets personnels réalistes. L'important est d'indiquer clairement qu'il s'agit de projets personnels ou de démonstration.",
            "",
            "Tu peux par exemple créer le site fictif d'un restaurant, une stratégie de contenu pour une marque imaginaire ou une analyse SEO d'un site public."
          ],
          examples: [
            "Projet : création d'un site vitrine pour une entreprise fictive. Problème : absence de présence web professionnelle. Action : conception de la structure, développement responsive et optimisation des performances. Résultat : démonstration d'un site complet utilisable comme projet de portfolio."
          ],
          practice: [
            "Choisis trois projets à présenter.",
            "Pour chaque projet, écris le contexte, ton rôle, les actions réalisées et le résultat.",
            "Supprime les projets qui ne correspondent pas au type de mission que tu souhaites obtenir."
          ],
          quiz: [
            {
              question: "Que doit principalement montrer un portfolio ?",
              options: [
                "La capacité à résoudre des problèmes similaires à ceux des clients",
                "Le nombre maximum de technologies utilisées",
                "Uniquement des captures d'écran",
                "Tous les projets réalisés depuis le début de sa carrière"
              ],
              answer: 0,
              explanation:
                "Le portfolio doit rassurer le client sur ta capacité à réaliser un travail pertinent pour son besoin."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Les Plateformes de Freelancing",
      lessons: [
        {
          slug: "comparer-plateformes-freelance",
          title: "3.1 Upwork, Malt, ComeUp et Autres Plateformes",
          duration: "18 min",
          description:
            "Comprenez les différences entre les principales plateformes et choisissez votre canal d'acquisition.",
          objectives: [
            "Comprendre le fonctionnement des marketplaces freelance.",
            "Comparer différents types de plateformes.",
            "Choisir une plateforme adaptée à son profil.",
            "Éviter de dépendre d'un seul canal."
          ],
          content: [
            "## Les plateformes comme canal d'acquisition",
            "Les plateformes mettent en relation des clients et des prestataires. Elles peuvent faciliter les premières missions, mais elles impliquent souvent de la concurrence et des règles spécifiques.",
            "",
            "Parmi les plateformes connues, on peut notamment citer Upwork, Malt et ComeUp. Leur fonctionnement, leur clientèle, leurs catégories de services et leurs modalités peuvent évoluer.",
            "",
            "## Ne pas dépendre d'une seule plateforme",
            "Une activité freelance solide peut combiner plusieurs canaux :",
            "- plateformes ;",
            "- réseau professionnel ;",
            "- LinkedIn ;",
            "- recommandations ;",
            "- prospection directe ;",
            "- site personnel ;",
            "- partenariats avec des agences.",
            "",
            "## Choisir sa plateforme",
            "Compare notamment le type de clients présents, les missions disponibles, la concurrence, les frais, les moyens de paiement et les règles de la plateforme."
          ],
          examples: [
            "Un développeur peut utiliser une plateforme pour trouver ses premières missions puis développer progressivement son réseau et obtenir davantage de recommandations.",
            "Un designer peut combiner portfolio personnel, LinkedIn et marketplace afin de ne pas dépendre d'une seule source de clients."
          ],
          practice: [
            "Choisis deux plateformes pertinentes pour ton domaine.",
            "Compare leur type de clientèle, leurs services, leurs frais et leur mode de fonctionnement.",
            "Détermine laquelle tu souhaites tester en premier."
          ],
          quiz: [
            {
              question: "Pourquoi est-il risqué de dépendre d'une seule plateforme ?",
              options: [
                "Une modification de ses règles ou de sa visibilité peut affecter ton acquisition de clients",
                "Les plateformes garantissent toujours un revenu fixe",
                "Il est impossible d'avoir plusieurs profils",
                "Les clients ne peuvent jamais revenir"
              ],
              answer: 0,
              explanation:
                "Diversifier ses canaux réduit la dépendance à un seul intermédiaire."
            }
          ]
        },
        {
          slug: "optimiser-profil-freelance",
          title: "3.2 Optimiser son Profil Freelance",
          duration: "17 min",
          description:
            "Construisez un profil professionnel qui donne envie au client de vous contacter.",
          objectives: [
            "Rédiger un titre clair.",
            "Créer une présentation orientée client.",
            "Choisir les bonnes compétences.",
            "Mettre en avant les preuves de compétence."
          ],
          content: [
            "## Le titre",
            "Un bon titre indique rapidement ce que tu fais et éventuellement pour qui.",
            "",
            "Évite les formulations trop vagues comme « Expert polyvalent » si elles n'apportent aucune information concrète.",
            "",
            "## La présentation",
            "Commence par le problème que tu aides à résoudre, puis présente ton approche, tes compétences et les résultats ou livrables que tu peux fournir.",
            "",
            "## Les preuves",
            "Les preuves peuvent prendre plusieurs formes :",
            "- portfolio ;",
            "- expériences ;",
            "- certifications pertinentes ;",
            "- avis clients ;",
            "- études de cas ;",
            "- projets personnels clairement identifiés."
          ],
          examples: [
            "Titre faible : « Freelancer digital polyvalent ».",
            "Titre plus précis : « Développeur React & Next.js pour applications web modernes »."
          ],
          practice: [
            "Réécris ton titre de profil en une phrase.",
            "Rédige une présentation de 100 à 150 mots.",
            "Ajoute trois preuves concrètes de tes compétences."
          ],
          quiz: [
            {
              question: "Quel élément renforce le plus la crédibilité d'un profil ?",
              options: [
                "Des preuves concrètes de compétence",
                "Une longue liste de qualités personnelles",
                "Un titre très général",
                "Une description sans exemple"
              ],
              answer: 0,
              explanation:
                "Les preuves permettent au client de vérifier plus facilement ce que tu sais réellement faire."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Trouver ses Premiers Clients",
      lessons: [
        {
          slug: "trouver-premiers-clients",
          title: "4.1 Les Différentes Méthodes de Prospection",
          duration: "18 min",
          description:
            "Découvrez comment trouver vos premières opportunités sans attendre passivement qu'un client vous contacte.",
          objectives: [
            "Comprendre la prospection.",
            "Identifier des prospects pertinents.",
            "Différencier prospection froide et réseau.",
            "Construire une routine d'acquisition."
          ],
          content: [
            "## La prospection est une compétence",
            "Au début, attendre simplement qu'un client découvre ton profil peut être insuffisant. La prospection consiste à identifier des personnes ou organisations susceptibles d'avoir besoin de ton service et à leur proposer une conversation ou une solution pertinente.",
            "",
            "## Plusieurs canaux",
            "- plateformes de freelancing ;",
            "- réseau personnel et professionnel ;",
            "- LinkedIn ;",
            "- communautés professionnelles ;",
            "- recommandations ;",
            "- partenariats ;",
            "- prospection directe lorsque cela est approprié.",
            "",
            "## La qualité compte plus que le volume",
            "Envoyer 100 messages génériques peut être moins efficace que contacter 10 prospects réellement pertinents avec une proposition personnalisée.",
            "",
            "## Construire une routine",
            "Une routine peut inclure chaque semaine : recherche de prospects, réponses aux opportunités, amélioration du portfolio, suivi des conversations et développement du réseau."
          ],
          examples: [
            "Une agence locale dont le site est ancien peut être un prospect pertinent pour un développeur web, à condition d'apporter une observation utile plutôt qu'un message générique.",
            "Un entrepreneur qui publie régulièrement mais sans stratégie peut être un prospect potentiel pour un spécialiste du contenu."
          ],
          practice: [
            "Identifie 10 prospects correspondant à ton client idéal.",
            "Pour chacun, note le problème potentiel que tu pourrais résoudre.",
            "Rédige un premier message personnalisé pour trois d'entre eux."
          ],
          quiz: [
            {
              question: "Qu'est-ce qu'une bonne prospection ?",
              options: [
                "Contacter des prospects pertinents avec un message adapté à leur situation",
                "Envoyer exactement le même message à tout le monde",
                "Contacter uniquement les grandes entreprises",
                "Promettre des résultats impossibles"
              ],
              answer: 0,
              explanation:
                "La pertinence et la personnalisation permettent d'avoir une conversation plus utile avec le prospect."
            }
          ]
        },
        {
          slug: "rediger-proposition-freelance",
          title: "4.2 Rédiger une Proposition Commerciale qui Répond au Besoin",
          duration: "19 min",
          description:
            "Apprenez à répondre à une mission freelance en montrant que vous avez compris le problème du client.",
          objectives: [
            "Analyser une demande client.",
            "Personnaliser une proposition.",
            "Présenter une méthode et des livrables.",
            "Éviter les propositions génériques."
          ],
          content: [
            "## Une proposition efficace",
            "Une proposition n'est pas simplement une présentation de ton CV. Elle doit montrer que tu as compris la situation du client.",
            "",
            "Une structure simple peut être :",
            "1. Observation du besoin.",
            "2. Solution proposée.",
            "3. Méthode ou étapes.",
            "4. Livrables.",
            "5. Délais.",
            "6. Prix ou modalité de tarification.",
            "7. Prochaine étape.",
            "",
            "## Personnaliser",
            "Mentionne un élément réel de la mission. Explique pourquoi ton expérience ou ton approche est pertinente.",
            "",
            "## Ne pas promettre l'impossible",
            "Une proposition professionnelle doit rester réaliste. Évite les promesses absolues comme « je garantis que votre chiffre d'affaires doublera » lorsque tu ne peux pas contrôler le résultat."
          ],
          examples: [
            "« J'ai remarqué que votre site présente les services mais que les appels à l'action sont peu visibles sur mobile. Je vous propose une refonte de la page d'accueil avec une structure plus claire, des CTA visibles et une optimisation responsive. »"
          ],
          practice: [
            "Choisis une vraie offre de mission.",
            "Résume le besoin du client en deux phrases.",
            "Rédige une proposition comprenant solution, livrables, délai et prix.",
            "Relis-la en supprimant les phrases génériques."
          ],
          quiz: [
            {
              question: "Quel est le premier objectif d'une proposition commerciale ?",
              options: [
                "Montrer que l'on a compris le besoin du client",
                "Parler uniquement de soi",
                "Écrire le message le plus long possible",
                "Proposer systématiquement le prix le plus bas"
              ],
              answer: 0,
              explanation:
                "Comprendre et reformuler correctement le besoin montre au client que la proposition est réellement adaptée à son projet."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Tarification & TJM",
      lessons: [
        {
          slug: "comprendre-tjm-tarification",
          title: "5.1 Comprendre le TJM, le Taux Horaire et le Prix au Projet",
          duration: "19 min",
          description:
            "Découvrez les principales méthodes de tarification utilisées par les freelances.",
          objectives: [
            "Comprendre le TJM.",
            "Distinguer tarification au temps et au projet.",
            "Identifier les coûts à intégrer dans son prix.",
            "Éviter de fixer son prix uniquement selon la concurrence."
          ],
          content: [
            "## Le TJM",
            "Le TJM, ou Tarif Journalier Moyen, correspond au montant facturé pour une journée de prestation selon les conditions convenues avec le client.",
            "",
            "Le TJM ne doit pas être confondu avec un salaire journalier net. Le freelance doit également prendre en compte les charges, les frais professionnels, les périodes non facturées, les congés, la prospection, la formation et les risques liés à son activité.",
            "",
            "## Une estimation simplifiée",
            "```text",
            "Prix nécessaire ≈ revenus et coûts à couvrir / nombre de jours réellement facturables",
            "```",
            "",
            "Le nombre de jours réellement facturables est inférieur au nombre total de jours travaillés, car une partie du temps est consacrée à l'administration, à la prospection, aux réunions, à la formation ou à d'autres tâches non directement facturées.",
            "",
            "## Tarification au projet",
            "Pour certains projets, il est plus pertinent de proposer un prix global basé sur le périmètre, les livrables et les risques plutôt que de facturer chaque heure.",
            "",
            "Dans tous les cas, le prix doit rester cohérent avec le périmètre réel de la mission."
          ],
          examples: [
            "Un projet de site vitrine peut être facturé au forfait lorsque les pages, fonctionnalités et livrables sont clairement définis.",
            "Une mission de maintenance mensuelle peut être facturée sous forme d'abonnement ou de forfait récurrent.",
            "Une mission de conseil ponctuel peut être facturée à la journée ou à l'heure selon le contexte."
          ],
          practice: [
            "Liste tes dépenses professionnelles mensuelles estimées.",
            "Détermine le revenu professionnel que tu souhaites atteindre.",
            "Estime le nombre réaliste de jours facturables par mois.",
            "Calcule une première fourchette de TJM et compare-la à ton niveau d'expérience et au marché ciblé."
          ],
          quiz: [
            {
              question: "Pourquoi le TJM ne doit-il pas être assimilé à un salaire net journalier ?",
              options: [
                "Parce que le freelance doit aussi couvrir charges, frais et périodes non facturées",
                "Parce qu'un TJM est toujours inférieur au salaire",
                "Parce que les freelances ne travaillent jamais à la journée",
                "Parce que le TJM ne peut jamais être négocié"
              ],
              answer: 0,
              explanation:
                "Le freelance doit financer plusieurs coûts et périodes qui ne correspondent pas directement à du temps facturé."
            }
          ]
        },
        {
          slug: "augmenter-prix-valeur",
          title: "5.2 Augmenter ses Tarifs en Augmentant sa Valeur",
          duration: "16 min",
          description:
            "Comprenez comment faire évoluer vos tarifs avec votre expertise, votre spécialisation et les résultats apportés.",
          objectives: [
            "Comprendre la notion de valeur.",
            "Identifier les facteurs qui justifient une évolution tarifaire.",
            "Éviter la concurrence uniquement par les prix.",
            "Communiquer une hausse de tarif."
          ],
          content: [
            "## Le prix n'est pas le seul facteur de décision",
            "Un client peut choisir un prestataire pour son expertise, sa fiabilité, sa compréhension du problème, sa capacité à communiquer ou sa connaissance d'un secteur.",
            "",
            "## Ce qui peut augmenter la valeur",
            "- meilleure expertise ;",
            "- spécialisation ;",
            "- expérience sur des problèmes similaires ;",
            "- processus plus fiable ;",
            "- meilleure communication ;",
            "- délais maîtrisés ;",
            "- résultats mesurables lorsque ceux-ci sont réellement attribuables à la prestation.",
            "",
            "## Ne pas inventer des résultats",
            "Les chiffres utilisés pour démontrer sa valeur doivent être réels et vérifiables. Une métrique inventée peut détruire la confiance."
          ],
          examples: [
            "Un développeur spécialisé dans les migrations complexes peut facturer davantage qu'un profil généraliste débutant lorsqu'il apporte une expertise recherchée.",
            "Un consultant ayant développé une méthode documentée peut vendre une prestation structurée plutôt qu'un simple nombre d'heures."
          ],
          practice: [
            "Liste cinq éléments qui différencient ton service.",
            "Identifie ce qui pourrait augmenter ta valeur dans les six prochains mois.",
            "Prépare une phrase expliquant pourquoi ton tarif correspond à ton niveau de service."
          ],
          quiz: [
            {
              question: "Quelle stratégie est généralement préférable à une concurrence permanente par le prix ?",
              options: [
                "Développer son expertise et mieux démontrer la valeur apportée",
                "Baisser systématiquement ses prix",
                "Travailler gratuitement sans limite",
                "Cacher ses tarifs au client"
              ],
              answer: 0,
              explanation:
                "Une meilleure expertise, un meilleur positionnement et une proposition de valeur claire permettent de sortir d'une concurrence uniquement basée sur le prix."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Gérer un Client et un Projet",
      lessons: [
        {
          slug: "cadrer-mission-client",
          title: "6.1 Cadrer une Mission Avant de Commencer",
          duration: "18 min",
          description:
            "Apprenez à transformer une demande vague en mission clairement définie.",
          objectives: [
            "Clarifier les objectifs du client.",
            "Définir les livrables.",
            "Identifier les contraintes.",
            "Éviter les malentendus sur le périmètre."
          ],
          content: [
            "## Pourquoi cadrer une mission ?",
            "De nombreux problèmes freelance viennent d'un périmètre mal défini. Le client pense avoir demandé A, tandis que le freelance comprend B.",
            "",
            "Avant de commencer, clarifie :",
            "- objectif ;",
            "- livrables ;",
            "- fonctionnalités ou tâches incluses ;",
            "- éléments non inclus ;",
            "- délai ;",
            "- nombre de révisions ;",
            "- responsabilités du client ;",
            "- prix et modalités de paiement.",
            "",
            "## Le périmètre protège les deux parties",
            "Un périmètre clair ne sert pas uniquement à protéger le freelance. Il aide aussi le client à savoir exactement ce qu'il va recevoir."
          ],
          examples: [
            "Pour un site web, préciser le nombre de pages, les fonctionnalités, l'intégration des contenus, les révisions et les éléments qui nécessitent une prestation supplémentaire.",
            "Pour une mission de rédaction, préciser le nombre d'articles, leur longueur approximative, le niveau de recherche attendu et les éventuelles révisions."
          ],
          practice: [
            "Prends une prestation que tu pourrais vendre.",
            "Écris ce qui est inclus.",
            "Écris ce qui n'est pas inclus.",
            "Définis les informations dont tu as besoin du client avant de commencer."
          ],
          quiz: [
            {
              question: "Pourquoi définir ce qui n'est pas inclus dans une mission ?",
              options: [
                "Pour réduire les ambiguïtés et mieux gérer les demandes supplémentaires",
                "Pour empêcher toute communication avec le client",
                "Pour augmenter automatiquement le prix",
                "Pour éviter de livrer le projet"
              ],
              answer: 0,
              explanation:
                "Les exclusions permettent de clarifier le périmètre et de traiter séparément les demandes qui dépassent la mission initiale."
            }
          ]
        },
        {
          slug: "gerer-changements-perimetre",
          title: "6.2 Gérer les Changements et le Scope Creep",
          duration: "17 min",
          description:
            "Apprenez à gérer les demandes supplémentaires sans détériorer la relation client.",
          objectives: [
            "Identifier une modification de périmètre.",
            "Répondre professionnellement à une demande supplémentaire.",
            "Évaluer l'impact sur délai et prix.",
            "Documenter les changements."
          ],
          content: [
            "## Qu'est-ce que le scope creep ?",
            "Le scope creep désigne l'augmentation progressive du périmètre d'une mission sans ajustement clair du délai, du prix ou des ressources.",
            "",
            "Une demande peut sembler petite isolément mais devenir importante lorsqu'elle se répète.",
            "",
            "## La bonne réaction",
            "Il ne faut pas répondre automatiquement « non ». Il faut d'abord identifier l'impact.",
            "",
            "Une réponse professionnelle peut être structurée ainsi :",
            "1. Reconnaître la demande.",
            "2. Indiquer si elle est incluse ou non.",
            "3. Expliquer l'impact.",
            "4. Proposer une option avec nouveau délai ou prix.",
            "5. Obtenir l'accord avant de réaliser le travail supplémentaire."
          ],
          examples: [
            "« Cette modification n'était pas prévue dans le périmètre initial. Elle nécessite environ une journée supplémentaire. Je peux l'ajouter au projet pour un montant de X et décaler la livraison au Y. »"
          ],
          practice: [
            "Imagine qu'un client demande trois fonctionnalités supplémentaires après validation du périmètre.",
            "Écris une réponse professionnelle qui explique l'impact sans créer de conflit."
          ],
          quiz: [
            {
              question: "Que faut-il généralement faire lorsqu'une demande dépasse le périmètre convenu ?",
              options: [
                "Évaluer son impact et convenir des nouvelles conditions avant de la réaliser",
                "La réaliser gratuitement systématiquement",
                "Refuser immédiatement toutes les demandes",
                "Ignorer le client"
              ],
              answer: 0,
              explanation:
                "L'objectif est de conserver une relation professionnelle tout en protégeant le périmètre de la mission."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Communication Client",
      lessons: [
        {
          slug: "communication-professionnelle-client",
          title: "7.1 Communiquer Efficacement avec ses Clients",
          duration: "17 min",
          description:
            "Développez une communication claire, professionnelle et rassurante.",
          objectives: [
            "Écrire des messages professionnels.",
            "Donner des mises à jour utiles.",
            "Poser de bonnes questions.",
            "Éviter les communications trop vagues."
          ],
          content: [
            "## La communication fait partie du service",
            "Même avec une excellente compétence technique, un freelance peut perdre la confiance d'un client s'il communique mal.",
            "",
            "Une bonne communication répond rapidement à quatre questions :",
            "- Où en sommes-nous ?",
            "- Qu'est-ce qui a été fait ?",
            "- Y a-t-il un problème ou un risque ?",
            "- Quelle est la prochaine étape ?",
            "",
            "## Les mises à jour régulières",
            "Il est préférable d'informer le client avant qu'il ait besoin de demander des nouvelles.",
            "",
            "## En cas de problème",
            "Ne cache pas un retard ou un blocage jusqu'au dernier moment. Explique le problème, son impact et le plan pour le résoudre."
          ],
          examples: [
            "« Cette semaine, j'ai terminé la page d'accueil et l'intégration mobile. Il reste l'intégration du formulaire et les tests. Je prévois une livraison de la version de validation vendredi. »"
          ],
          practice: [
            "Rédige une mise à jour client pour un projet à mi-parcours.",
            "Inclue les tâches terminées, les tâches en cours, un éventuel risque et la prochaine étape."
          ],
          quiz: [
            {
              question: "Pourquoi informer rapidement un client d'un risque de retard ?",
              options: [
                "Pour permettre d'anticiper et de décider ensemble des actions nécessaires",
                "Pour éviter toute responsabilité",
                "Pour demander automatiquement plus d'argent",
                "Pour arrêter le projet"
              ],
              answer: 0,
              explanation:
                "Une communication anticipée permet de gérer les conséquences plutôt que de laisser le problème apparaître au dernier moment."
            }
          ]
        },
        {
          slug: "gerer-client-difficile",
          title: "7.2 Gérer les Clients Difficiles et les Désaccords",
          duration: "18 min",
          description:
            "Apprenez à traiter les désaccords, retards de validation et comportements difficiles avec professionnalisme.",
          objectives: [
            "Identifier la source d'un conflit.",
            "Rester professionnel sous pression.",
            "Documenter les décisions.",
            "Savoir quand mettre fin à une collaboration."
          ],
          content: [
            "## Tous les désaccords ne sont pas des conflits personnels",
            "Un désaccord peut venir d'une mauvaise compréhension du besoin, d'un changement de priorité, d'un retard du client ou d'attentes irréalistes.",
            "",
            "## Revenir aux faits",
            "Lorsqu'une discussion devient tendue, reviens aux éléments documentés : périmètre, livrables, dates, validations et décisions.",
            "",
            "## Fixer des limites",
            "Être professionnel ne signifie pas accepter toutes les demandes. Les limites concernant les horaires, le périmètre et le respect mutuel sont importantes.",
            "",
            "## Savoir arrêter une collaboration",
            "Si une relation devient durablement abusive, irrespectueuse ou incompatible avec les conditions convenues, il peut être nécessaire de suivre les clauses contractuelles et de mettre fin à la collaboration de manière professionnelle."
          ],
          examples: [
            "Un client demande une fonctionnalité non prévue. Plutôt que de répondre émotionnellement, le freelance peut rappeler le périmètre, expliquer l'impact et proposer une extension de mission."
          ],
          practice: [
            "Imagine qu'un client affirme que « tout devait être inclus » alors que le périmètre écrit est différent.",
            "Prépare une réponse factuelle et professionnelle."
          ],
          quiz: [
            {
              question: "Quelle est une bonne première réaction face à un désaccord client ?",
              options: [
                "Revenir aux faits, au périmètre et aux décisions documentées",
                "Répondre immédiatement de manière agressive",
                "Ignorer le client",
                "Accepter systématiquement sa demande"
              ],
              answer: 0,
              explanation:
                "Les faits et les éléments documentés permettent de réduire les malentendus et de chercher une solution."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Contrats, Paiements & Sécurité",
      lessons: [
        {
          slug: "contrat-freelance",
          title: "8.1 Comprendre le Contrat et les Conditions de Mission",
          duration: "18 min",
          description:
            "Découvrez les éléments importants à clarifier avant de commencer une prestation.",
          objectives: [
            "Comprendre le rôle d'un contrat.",
            "Identifier les éléments importants d'une mission.",
            "Clarifier les livrables et conditions de paiement.",
            "Comprendre pourquoi les règles locales peuvent varier."
          ],
          content: [
            "## Pourquoi formaliser une mission ?",
            "Un accord écrit permet de clarifier les attentes et de réduire les ambiguïtés.",
            "",
            "Selon la situation et la juridiction, les documents peuvent notamment préciser :",
            "- identité des parties ;",
            "- objet de la mission ;",
            "- livrables ;",
            "- calendrier ;",
            "- prix ;",
            "- modalités de paiement ;",
            "- propriété intellectuelle ;",
            "- confidentialité ;",
            "- conditions de modification ou de résiliation.",
            "",
            "## Les règles dépendent du pays",
            "Les obligations juridiques, fiscales et contractuelles varient selon le pays où tu exerces et selon le lieu de tes clients. Pour une situation importante, il est préférable de vérifier les règles applicables auprès d'une source officielle ou d'un professionnel compétent."
          ],
          examples: [
            "Une mission de développement peut préciser que le code source est remis après paiement du solde, selon les conditions convenues.",
            "Une mission de contenu peut définir le nombre d'articles, les droits d'utilisation et le nombre de révisions incluses."
          ],
          practice: [
            "Liste les éléments que tu voudrais toujours clarifier avant de commencer une mission.",
            "Crée une checklist de pré-démarrage."
          ],
          quiz: [
            {
              question: "Quel est l'un des objectifs principaux d'un accord écrit ?",
              options: [
                "Clarifier les attentes et les conditions de la mission",
                "Garantir que le projet ne changera jamais",
                "Éviter toute discussion avec le client",
                "Supprimer les obligations du prestataire"
              ],
              answer: 0,
              explanation:
                "Un accord écrit sert notamment à clarifier les responsabilités, le périmètre et les conditions de collaboration."
            }
          ]
        },
        {
          slug: "paiements-facturation-freelance",
          title: "8.2 Paiements, Facturation et Gestion de Trésorerie",
          duration: "17 min",
          description:
            "Apprenez à organiser vos paiements et à éviter les problèmes de trésorerie.",
          objectives: [
            "Comprendre l'importance des conditions de paiement.",
            "Suivre les factures.",
            "Prévoir les périodes sans mission.",
            "Distinguer chiffre d'affaires, revenus et coûts."
          ],
          content: [
            "## Ne pas confondre chiffre d'affaires et revenu disponible",
            "L'argent facturé n'est pas nécessairement l'argent que tu peux dépenser personnellement. Il peut être nécessaire de couvrir les charges, frais, taxes, outils, sous-traitance et autres coûts.",
            "",
            "## Suivre les paiements",
            "Maintiens un tableau simple avec :",
            "- client ;",
            "- mission ;",
            "- montant ;",
            "- date de facturation ;",
            "- date d'échéance ;",
            "- statut du paiement.",
            "",
            "## Prévoir les périodes creuses",
            "Les revenus freelance peuvent varier d'un mois à l'autre. Une gestion prudente consiste à ne pas considérer chaque mois comme garanti."
          ],
          examples: [
            "Un freelance peut avoir un mois avec plusieurs projets puis un mois plus calme. La planification financière doit tenir compte de cette variabilité."
          ],
          practice: [
            "Crée un tableau de suivi de tes missions et paiements.",
            "Sépare les montants facturés des dépenses professionnelles et des sommes à réserver pour les obligations fiscales selon ton pays."
          ],
          quiz: [
            {
              question: "Pourquoi suivre les factures et échéances ?",
              options: [
                "Pour savoir ce qui a été payé, ce qui reste dû et anticiper sa trésorerie",
                "Pour augmenter automatiquement ses tarifs",
                "Pour éviter de signer des contrats",
                "Pour supprimer les dépenses"
              ],
              answer: 0,
              explanation:
                "Le suivi des paiements permet de mieux contrôler la trésorerie et les obligations financières."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Travailler à Distance Efficacement",
      lessons: [
        {
          slug: "organiser-journee-remote",
          title: "9.1 Organiser sa Journée de Travail à Distance",
          duration: "16 min",
          description:
            "Construisez une organisation adaptée au travail à distance sans tomber dans le piège des journées sans structure.",
          objectives: [
            "Créer une routine de travail.",
            "Séparer travail et vie personnelle.",
            "Prioriser les tâches.",
            "Limiter les distractions."
          ],
          content: [
            "## Le principal défi du remote",
            "Le travail à distance donne davantage de flexibilité mais demande également davantage d'autonomie.",
            "",
            "Une journée efficace peut être structurée autour de blocs :",
            "- travail de concentration ;",
            "- communication ;",
            "- réunions ;",
            "- administration ;",
            "- prospection ;",
            "- apprentissage.",
            "",
            "## Ne pas confondre disponibilité et productivité",
            "Être connecté toute la journée ne signifie pas être productif. Les notifications et réunions permanentes peuvent réduire le temps réellement consacré au travail important.",
            "",
            "## Définir des horaires",
            "Des horaires relativement stables peuvent aider à créer une séparation entre temps professionnel et temps personnel."
          ],
          examples: [
            "Matin : tâches de concentration. Midi : pause. Après-midi : réunions, communication et tâches administratives. Fin de journée : planification du lendemain."
          ],
          practice: [
            "Construis ton emploi du temps idéal pour une journée de travail.",
            "Identifie trois distractions qui réduisent actuellement ta productivité.",
            "Définis une règle pour chacune."
          ],
          quiz: [
            {
              question: "Quel est un avantage important d'une routine en remote ?",
              options: [
                "Elle crée une structure malgré l'absence de cadre physique traditionnel",
                "Elle oblige à travailler sans pause",
                "Elle supprime toutes les réunions",
                "Elle garantit automatiquement plus de clients"
              ],
              answer: 0,
              explanation:
                "Une routine aide à structurer le travail et à maintenir des limites."
            }
          ]
        },
        {
          slug: "outils-collaboration-distance",
          title: "9.2 Outils de Collaboration et Bonnes Pratiques",
          duration: "17 min",
          description:
            "Apprenez à organiser les fichiers, tâches, réunions et communications d'une équipe distribuée.",
          objectives: [
            "Comprendre les catégories d'outils de collaboration.",
            "Organiser les documents.",
            "Utiliser les outils de gestion de tâches.",
            "Réduire les échanges inutiles."
          ],
          content: [
            "## Les grandes catégories d'outils",
            "- Communication instantanée.",
            "- Réunions vidéo.",
            "- Gestion de projet.",
            "- Documentation.",
            "- Stockage de fichiers.",
            "- Suivi des tâches.",
            "",
            "## Le principe important",
            "L'outil n'est pas le processus. Ajouter davantage d'applications ne résout pas nécessairement un problème d'organisation.",
            "",
            "Une équipe doit surtout savoir où trouver l'information, qui est responsable d'une tâche et quelle est la prochaine action."
          ],
          examples: [
            "Un projet peut utiliser un outil de tâches pour les actions, un espace documentaire pour les décisions et un outil de visioconférence pour les réunions."
          ],
          practice: [
            "Liste les outils que tu utilises actuellement.",
            "Pour chacun, indique son objectif.",
            "Supprime ou regroupe les outils qui font doublon."
          ],
          quiz: [
            {
              question: "Quel est le principal objectif d'un outil de gestion de tâches ?",
              options: [
                "Rendre visibles les actions, responsables et états d'avancement",
                "Remplacer toutes les réunions",
                "Garantir que le projet sera livré à temps",
                "Créer automatiquement les tâches parfaites"
              ],
              answer: 0,
              explanation:
                "L'outil sert à structurer et rendre visible le travail, mais il ne remplace pas la gestion du projet."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Construire une Activité Freelance Durable",
      lessons: [
        {
          slug: "fideliser-clients-freelance",
          title: "10.1 Fidéliser ses Clients et Obtenir des Missions Récurrentes",
          duration: "17 min",
          description:
            "Découvrez comment transformer une bonne prestation en relation professionnelle durable.",
          objectives: [
            "Comprendre la fidélisation.",
            "Identifier les opportunités de missions récurrentes.",
            "Demander des recommandations.",
            "Maintenir une relation professionnelle après livraison."
          ],
          content: [
            "## Un client satisfait peut devenir un client récurrent",
            "Une relation durable peut être plus intéressante qu'une recherche permanente de nouveaux clients.",
            "",
            "La fidélisation repose notamment sur :",
            "- qualité du travail ;",
            "- respect des délais ;",
            "- communication ;",
            "- compréhension du contexte du client ;",
            "- fiabilité ;",
            "- suivi après livraison lorsque cela est pertinent.",
            "",
            "## Identifier les besoins récurrents",
            "Certains services peuvent naturellement devenir récurrents : maintenance, contenu, SEO, reporting, support, conseil ou amélioration continue.",
            "",
            "## Les recommandations",
            "Après une collaboration réussie, tu peux demander au client s'il connaît une entreprise ou une personne qui pourrait avoir besoin d'un service similaire."
          ],
          examples: [
            "Après la création d'un site, un freelance peut proposer une maintenance mensuelle ou une optimisation continue, si le client en a réellement besoin."
          ],
          practice: [
            "Identifie une prestation ponctuelle de ton domaine.",
            "Cherche trois façons légitimes de la transformer en relation récurrente sans vendre un service inutile.",
            "Rédige un message de suivi après livraison."
          ],
          quiz: [
            {
              question: "Quelle est une bonne méthode de fidélisation ?",
              options: [
                "Fournir un travail fiable et maintenir une bonne communication",
                "Envoyer des messages commerciaux tous les jours",
                "Baisser toujours ses prix",
                "Promettre des services non demandés"
              ],
              answer: 0,
              explanation:
                "La fidélisation repose d'abord sur la qualité de la relation et de la prestation."
            }
          ]
        },
        {
          slug: "developper-reputation-freelance",
          title: "10.2 Construire sa Réputation Professionnelle",
          duration: "16 min",
          description:
            "Apprenez à développer progressivement une réputation qui facilite l'acquisition de nouvelles missions.",
          objectives: [
            "Comprendre le rôle de la réputation.",
            "Utiliser les recommandations et études de cas.",
            "Développer une présence professionnelle.",
            "Construire sa crédibilité sur le long terme."
          ],
          content: [
            "## La réputation se construit progressivement",
            "La réputation freelance ne dépend pas uniquement du nombre de followers. Elle se construit grâce à la qualité du travail, la fiabilité, les recommandations et la capacité à démontrer son expertise.",
            "",
            "## Publier pour démontrer son expertise",
            "Partager des études de cas, analyses, conseils ou retours d'expérience peut aider des prospects à comprendre ta manière de travailler.",
            "",
            "## Les recommandations",
            "Une recommandation précise est souvent plus utile qu'un simple commentaire vague. Elle peut expliquer le problème rencontré, la collaboration et le résultat."
          ],
          examples: [
            "Un développeur peut publier une étude de cas expliquant comment il a amélioré les performances d'une application.",
            "Un spécialiste marketing peut présenter une analyse de campagne en expliquant les hypothèses, actions et résultats."
          ],
          practice: [
            "Choisis un projet et transforme-le en étude de cas.",
            "Prépare une publication professionnelle qui partage une leçon apprise sans révéler d'informations confidentielles."
          ],
          quiz: [
            {
              question: "Quel élément contribue fortement à une réputation professionnelle durable ?",
              options: [
                "La qualité et la fiabilité démontrées au fil des collaborations",
                "Le nombre de publications uniquement",
                "Le fait de proposer tous les services possibles",
                "Le prix le plus bas"
              ],
              answer: 0,
              explanation:
                "La réputation repose surtout sur l'expérience réelle des clients et les preuves de compétence."
            }
          ]
        }
      ]
    },

    {
      title: "Module 11: Les Erreurs à Éviter",
      lessons: [
        {
          slug: "erreurs-debutant-freelance",
          title: "11.1 Les Erreurs Fréquentes des Débutants",
          duration: "17 min",
          description:
            "Identifiez les erreurs qui peuvent ralentir le développement d'une activité freelance.",
          objectives: [
            "Identifier les erreurs de positionnement.",
            "Éviter la sous-tarification systématique.",
            "Comprendre les risques d'une mauvaise organisation.",
            "Améliorer progressivement son processus."
          ],
          content: [
            "## Erreur 1 : vouloir tout proposer",
            "Une offre trop large rend le profil difficile à comprendre.",
            "",
            "## Erreur 2 : travailler sans périmètre clair",
            "Sans définition précise des livrables, les demandes peuvent se multiplier.",
            "",
            "## Erreur 3 : choisir uniquement le prix le plus bas",
            "Une stratégie basée uniquement sur le prix est difficile à maintenir.",
            "",
            "## Erreur 4 : négliger la prospection",
            "Une activité freelance doit généralement continuer à alimenter son pipeline de prospects même lorsqu'elle a déjà des clients.",
            "",
            "## Erreur 5 : ne pas documenter",
            "Les décisions importantes, validations et modifications doivent être suffisamment documentées pour éviter les malentendus."
          ],
          examples: [
            "Un freelance peut accepter une mission mal définie à un prix très bas puis découvrir que le projet demande trois fois plus de travail que prévu."
          ],
          practice: [
            "Liste les trois risques les plus importants pour ton activité.",
            "Pour chacun, crée une règle simple permettant de le réduire."
          ],
          quiz: [
            {
              question: "Quelle erreur peut provoquer une augmentation incontrôlée du travail ?",
              options: [
                "Commencer sans définir clairement le périmètre",
                "Utiliser un portfolio",
                "Faire des points réguliers",
                "Documenter les décisions"
              ],
              answer: 0,
              explanation:
                "Un périmètre mal défini augmente le risque de demandes supplémentaires et de malentendus."
            }
          ]
        }
      ]
    },

    {
      title: "Module 12: Projet Final - Lancer son Activité en Ligne",
      lessons: [
        {
          slug: "projet-final-plan-freelance",
          title: "12.1 Construire son Plan de Lancement Freelance",
          duration: "25 min",
          description:
            "Mettez en pratique les notions du cours en construisant votre propre plan de lancement.",
          objectives: [
            "Définir une offre freelance.",
            "Créer un positionnement.",
            "Préparer un portfolio.",
            "Choisir des canaux d'acquisition.",
            "Définir un système de suivi des prospects et missions."
          ],
          content: [
            "## Votre projet final",
            "Construisez un plan réaliste pour lancer ou améliorer votre activité freelance.",
            "",
            "### Étape 1 : Votre compétence",
            "Définissez votre compétence principale et votre niveau actuel.",
            "",
            "### Étape 2 : Votre client cible",
            "Décrivez le type de client que vous souhaitez aider.",
            "",
            "### Étape 3 : Votre offre",
            "Définissez un service précis avec des livrables clairs.",
            "",
            "### Étape 4 : Votre positionnement",
            "Formulez une phrase expliquant qui vous aidez, quel problème vous résolvez et comment.",
            "",
            "### Étape 5 : Votre portfolio",
            "Sélectionnez trois projets pertinents ou créez des projets de démonstration.",
            "",
            "### Étape 6 : Votre prix",
            "Déterminez une première fourchette tarifaire cohérente avec vos coûts, votre expérience et le marché ciblé.",
            "",
            "### Étape 7 : Vos canaux",
            "Choisissez deux ou trois canaux d'acquisition réalistes.",
            "",
            "### Étape 8 : Votre routine",
            "Définissez chaque semaine le temps consacré à la prospection, aux missions, à l'administration et à l'apprentissage.",
            "",
            "### Étape 9 : Votre suivi",
            "Créez un tableau contenant au minimum : prospect, besoin, date de contact, prochaine action, statut et résultat."
          ],
          examples: [
            "Exemple : « Je suis développeur web et j'aide les petites entreprises à créer des sites vitrines rapides et adaptés au mobile. Mon offre comprend la conception, le développement, l'intégration des contenus et la mise en ligne. »"
          ],
          practice: [
            "Crée ton positionnement.",
            "Décris ton offre principale.",
            "Prépare trois projets de portfolio.",
            "Choisis deux canaux d'acquisition.",
            "Définis ton prix de départ ou ta méthode de tarification.",
            "Prépare une proposition commerciale type.",
            "Crée un tableau de suivi de tes prospects.",
            "Définis tes objectifs pour les 30 prochains jours."
          ],
          quiz: [
            {
              question: "Quel élément doit être défini avant de commencer sérieusement la prospection ?",
              options: [
                "Une offre suffisamment claire et compréhensible",
                "Un logo parfait",
                "Des milliers d'abonnés",
                "Un bureau professionnel"
              ],
              answer: 0,
              explanation:
                "La prospection est plus efficace lorsque l'on sait clairement quel service on propose et à quel type de client."
            },
            {
              question: "Quel est l'objectif du projet final ?",
              options: [
                "Construire un plan concret pour lancer ou améliorer son activité freelance",
                "Créer uniquement un profil sur une plateforme",
                "Choisir le prix le plus bas",
                "Obtenir immédiatement un revenu garanti"
              ],
              answer: 0,
              explanation:
                "Le projet final rassemble positionnement, offre, portfolio, acquisition, tarification et organisation."
            }
          ]
        }
      ]
    }
  ]
};

export const travaillerEnLigneExamQuestions: ExamQuestion[] = [
  {
    question: "Que signifie TJM ?",
    options: [
      "Tarif Journalier Moyen",
      "Taux de Jours Mensuels",
      "Travail Journalier Maximum",
      "Taxe sur la Marge"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi le nombre de jours facturables est-il inférieur au nombre total de jours travaillés ?",
    options: [
      "Une partie du temps est consacrée à la prospection, l'administration, la formation ou d'autres tâches",
      "Un freelance ne travaille jamais plus de dix jours",
      "Les plateformes interdisent de travailler tous les jours",
      "Les clients refusent toujours de payer plus de dix jours"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le principal objectif d'un positionnement freelance ?",
    options: [
      "Rendre son offre claire pour une cible donnée",
      "Proposer le maximum de services",
      "Être moins cher que tout le monde",
      "Éviter toute spécialisation"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel élément renforce le plus un portfolio ?",
    options: [
      "Des projets pertinents accompagnés de contexte, actions et résultats",
      "Une longue liste de logiciels",
      "Des images sans explication",
      "Des projets qui n'ont aucun rapport avec l'offre"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi est-il préférable de ne pas dépendre d'une seule plateforme freelance ?",
    options: [
      "Pour réduire la dépendance à un seul canal d'acquisition",
      "Parce qu'il est interdit d'utiliser plusieurs plateformes",
      "Parce que les clients sont tous identiques",
      "Parce que les plateformes ne permettent jamais de trouver de missions"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel élément doit apparaître dans une proposition commerciale efficace ?",
    options: [
      "Une réponse personnalisée au besoin du client",
      "Uniquement le CV du freelance",
      "Un texte identique envoyé à tous les clients",
      "Une promesse de résultat impossible à garantir"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi le prix ne doit-il pas être fixé uniquement en fonction des concurrents ?",
    options: [
      "Parce qu'il doit aussi tenir compte des coûts, de l'expérience, du positionnement et de la valeur apportée",
      "Parce que les concurrents n'ont jamais de prix",
      "Parce qu'un freelance doit toujours être le plus cher",
      "Parce qu'il est interdit de regarder le marché"
    ],
    correctAnswer: 0
  },
  {
    question: "Qu'est-ce que le scope creep ?",
    options: [
      "Une augmentation progressive du périmètre d'une mission sans ajustement clair des conditions",
      "Une méthode de prospection",
      "Un outil de paiement",
      "Une technique de portfolio"
    ],
    correctAnswer: 0
  },
  {
    question: "Que faut-il généralement faire lorsqu'une demande dépasse le périmètre initial ?",
    options: [
      "Évaluer l'impact et convenir des nouvelles conditions avant de réaliser le travail",
      "L'accepter systématiquement gratuitement",
      "Ignorer la demande",
      "Arrêter immédiatement toutes les missions"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle information est particulièrement utile dans une mise à jour client ?",
    options: [
      "Les tâches terminées, les tâches en cours, les risques et la prochaine étape",
      "Uniquement le nombre d'heures travaillées",
      "Uniquement les difficultés personnelles du freelance",
      "Aucune information jusqu'à la livraison finale"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi documenter les décisions importantes d'un projet ?",
    options: [
      "Pour réduire les malentendus et garder une trace des validations",
      "Pour rendre le projet plus compliqué",
      "Pour éviter toute communication",
      "Pour remplacer le contrat"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'un des objectifs d'un contrat ou accord de mission ?",
    options: [
      "Clarifier le périmètre, les responsabilités et les conditions de collaboration",
      "Garantir qu'aucun changement ne sera jamais demandé",
      "Supprimer les responsabilités du client",
      "Éviter de définir les livrables"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi un freelance doit-il suivre ses factures ?",
    options: [
      "Pour connaître les montants dus et mieux gérer sa trésorerie",
      "Pour augmenter automatiquement son TJM",
      "Pour éviter les contrats",
      "Pour supprimer les charges"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle affirmation concernant le chiffre d'affaires est correcte ?",
    options: [
      "Le chiffre d'affaires ne correspond pas nécessairement au revenu personnel disponible",
      "Tout le chiffre d'affaires peut être dépensé immédiatement",
      "Le chiffre d'affaires correspond toujours au revenu net",
      "Le chiffre d'affaires ne concerne que les salariés"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi une routine est-elle utile en travail à distance ?",
    options: [
      "Elle apporte une structure et facilite la séparation entre travail et temps personnel",
      "Elle garantit automatiquement plus de clients",
      "Elle permet de travailler sans pause",
      "Elle supprime tous les problèmes de communication"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le rôle d'un outil de gestion de tâches ?",
    options: [
      "Rendre visibles les tâches, responsables et états d'avancement",
      "Remplacer toutes les décisions humaines",
      "Garantir la réussite du projet",
      "Créer automatiquement des clients"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle stratégie peut aider à fidéliser un client ?",
    options: [
      "Fournir un travail fiable et maintenir une communication professionnelle",
      "Envoyer des messages commerciaux chaque jour",
      "Baisser ses prix après chaque projet",
      "Proposer constamment des services inutiles"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi demander une recommandation après une bonne mission peut être pertinent ?",
    options: [
      "Parce qu'un client satisfait peut connaître d'autres personnes ayant des besoins similaires",
      "Parce qu'une recommandation garantit un nouveau contrat",
      "Parce qu'elle remplace le portfolio",
      "Parce qu'elle est obligatoire"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle erreur peut provoquer une forte augmentation du travail non prévu ?",
    options: [
      "Commencer une mission sans définir clairement son périmètre",
      "Faire signer un accord",
      "Documenter les changements",
      "Définir les livrables"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi ne faut-il pas inventer de résultats dans son portfolio ?",
    options: [
      "Parce que cela peut détruire la confiance et remettre en cause la crédibilité professionnelle",
      "Parce que les portfolios sont inutiles",
      "Parce que les clients n'aiment pas les chiffres",
      "Parce qu'un freelance ne doit jamais parler de résultats"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle est une bonne approche pour trouver ses premiers clients ?",
    options: [
      "Combiner une offre claire, un portfolio pertinent et une prospection ciblée",
      "Attendre uniquement les clients entrants",
      "Envoyer le même message à des milliers de personnes",
      "Proposer tous les services possibles"
    ],
    correctAnswer: 0
  },
  {
    question: "Que doit montrer une proposition commerciale ?",
    options: [
      "Que le freelance comprend le besoin et sait comment y répondre",
      "Uniquement son parcours personnel",
      "Uniquement son prix",
      "Qu'il acceptera toutes les demandes sans limite"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel élément peut justifier une évolution progressive des tarifs ?",
    options: [
      "Une expertise plus forte et une meilleure capacité à résoudre des problèmes pertinents",
      "Le fait de supprimer son portfolio",
      "Une baisse de qualité",
      "L'absence totale d'expérience"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi une offre très générale peut-elle être difficile à vendre ?",
    options: [
      "Le client peut avoir du mal à comprendre précisément ce que le freelance peut résoudre pour lui",
      "Les offres générales sont toujours interdites",
      "Les freelances doivent avoir une seule compétence",
      "Les clients ne lisent jamais les offres"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le meilleur objectif du projet final du cours ?",
    options: [
      "Construire un plan concret pour lancer ou améliorer une activité freelance",
      "Créer uniquement un compte sur une plateforme",
      "Choisir le prix le plus bas",
      "Obtenir un revenu garanti"
    ],
    correctAnswer: 0
  }
];