import type { CourseDetail, ExamQuestion } from "../coursesData";

export const socialMediaMarketingCourse: CourseDetail = {
  slug: "social-media-marketing",
  categorySlug: "digital-marketing",
  title: "Social Media Marketing : De zéro à une vraie stratégie",
  description:
    "Apprends à utiliser les réseaux sociaux pour développer une marque, attirer une audience, créer du contenu, générer des prospects et transformer les abonnés en clients. Ce cours te guide de manière pratique à travers Instagram, Facebook, TikTok, LinkedIn, les stratégies de contenu, l'engagement, la publicité, l'analyse des performances et la création d'une campagne complète.",
  level: "Débutant",
  icon: "📱",

  modules: [
    {
      title: "Module 1 : Comprendre le Social Media Marketing",
      lessons: [
        {
          slug: "introduction-social-media-marketing",
          title: "1.1 Qu'est-ce que le Social Media Marketing ?",
          duration: "20 min",
          description:
            "Découvre ce qu'est le marketing sur les réseaux sociaux, pourquoi les entreprises l'utilisent et comment il peut contribuer à leurs objectifs commerciaux.",
          objectives: [
            "Comprendre le concept de Social Media Marketing",
            "Distinguer présence sociale et véritable stratégie marketing",
            "Comprendre comment les réseaux sociaux peuvent générer de la valeur",
            "Identifier les principaux objectifs d'une stratégie sociale",
          ],
          content: [
            "## Bienvenue dans le Social Media Marketing",
            "Imagine que tu crées une petite entreprise qui vend des chaussures de sport.",
            "Tu possèdes un bon produit, un logo et un site web. Pourtant, presque personne ne connaît ton entreprise.",
            "Tu décides alors de créer un compte Instagram et une page Facebook.",
            "Mais simplement publier des photos de tes chaussures ne constitue pas encore une stratégie marketing.",
            "Le Social Media Marketing consiste à utiliser les réseaux sociaux de manière structurée pour atteindre des objectifs précis : faire connaître une marque, attirer une audience, créer une relation avec les clients, générer des prospects ou vendre des produits et services.",
            "## Présence sociale vs stratégie",
            "Une présence sociale signifie simplement qu'une entreprise possède des comptes sur les réseaux sociaux.",
            "Une stratégie sociale répond à plusieurs questions :",
            "1. Qui voulons-nous atteindre ?",
            "2. Sur quelles plateformes cette audience passe-t-elle du temps ?",
            "3. Quel problème pouvons-nous résoudre pour elle ?",
            "4. Quel type de contenu devons-nous publier ?",
            "5. Quelle action voulons-nous que les personnes réalisent ?",
            "6. Comment allons-nous mesurer les résultats ?",
            "| Aspect | Présence Sociale Passive | Stratégie Social Media Active |",
            "| --- | --- | --- |",
            "| **Objectif** | Exister sur les réseaux sociaux | Générer des prospects et des ventes |",
            "| **Contenu** | Photos de produits isolées | Contenus éducatifs, vidéos, conseils |",
            "| **Fréquence** | Publications très irrégulières | Calendrier éditorial structuré |",
            "| **Mesure** | Nombre de likes | Portée, clics, conversions et ROI |",
            "## Exemple réel",
            "Imagine une boulangerie située à Nairobi.",
            "Elle pourrait publier uniquement des photos de pains et de gâteaux.",
            "Mais elle pourrait également publier des vidéos montrant la préparation du pain, des conseils de conservation, des idées de petit-déjeuner, des témoignages de clients et des offres spéciales.",
            "La deuxième approche crée beaucoup plus d'occasions d'interagir avec l'audience.",
            "## Les principaux objectifs",
            "Une stratégie Social Media peut avoir plusieurs objectifs :",
            "- Notoriété : faire connaître la marque",
            "- Engagement : créer des interactions avec l'audience",
            "- Trafic : envoyer des visiteurs vers un site ou une boutique",
            "- Leads : obtenir des contacts intéressés",
            "- Ventes : générer des achats",
            "- Fidélisation : maintenir une relation avec les clients",
            "📊 Statistique : Les entreprises qui appliquent une stratégie sociale structurée enregistrent un taux de conversion 3x supérieur à celles ayant une simple présence passive.",
            "## Une règle importante",
            "Ne commence jamais une stratégie par la question : « Que devons-nous publier aujourd'hui ? »",
            "Commence plutôt par : « Quel objectif voulons-nous atteindre et quelle audience voulons-nous aider ? »",
          ],
          examples: [
            "Une salle de sport peut utiliser Instagram pour développer sa notoriété, TikTok pour toucher une nouvelle audience et WhatsApp pour convertir les prospects.",
            "Un consultant peut utiliser LinkedIn pour démontrer son expertise et générer des demandes de rendez-vous.",
          ],
          practice: [
            "## Mission",
            "Imagine que tu travailles pour une petite boutique de vêtements appelée Urban Style.",
            "La boutique veut utiliser les réseaux sociaux pour augmenter ses ventes.",
            "Identifie :",
            "1. Son audience cible",
            "2. Deux objectifs marketing",
            "3. Trois types de contenus qu'elle pourrait publier",
            "4. Une action que tu voudrais que les abonnés réalisent",
          ],
          quiz: [
            {
              question:
                "Laquelle décrit le mieux une stratégie Social Media Marketing ?",
              options: [
                "Publier régulièrement sans objectif particulier",
                "Acheter beaucoup d'abonnés",
                "Utiliser les réseaux sociaux pour atteindre des objectifs marketing auprès d'une audience définie",
                "Publier uniquement des photos de produits",
              ],
              answer: 2,
              explanation:
                "Une stratégie sociale doit relier une audience, des contenus, des actions et des objectifs marketing.",
            },
          ],
        },

        {
          slug: "objectifs-social-media",
          title: "1.2 Définir des objectifs marketing",
          duration: "18 min",
          description:
            "Apprends à transformer une ambition vague comme « avoir plus d'abonnés » en objectifs marketing mesurables.",
          objectives: [
            "Comprendre les objectifs SMART",
            "Différencier audience, engagement, trafic, leads et ventes",
            "Choisir les bons indicateurs selon l'objectif",
          ],
          content: [
            "## Pourquoi « avoir plus d'abonnés » n'est pas toujours un bon objectif",
            "Supposons qu'une entreprise passe de 2 000 à 20 000 abonnés.",
            "Cela semble impressionnant.",
            "Mais si aucun de ces nouveaux abonnés n'achète le produit, l'entreprise n'a peut-être pas réellement amélioré ses résultats commerciaux.",
            "Les abonnés sont un moyen possible, pas nécessairement la finalité.",
            "## Les objectifs SMART",
            "Un bon objectif doit être spécifique, mesurable, atteignable, pertinent et défini dans le temps.",
            "Exemple faible : « Je veux améliorer Instagram. »",
            "Exemple meilleur : « Générer 100 visites qualifiées vers notre boutique en ligne au cours des 30 prochains jours grâce à Instagram. »",
            "## Choisir les bons KPI",
            "Voici un tableau récapitulatif des objectifs marketing et des indicateurs de performance (KPI) associés :",
            "| Objectif Marketing | Indicateur Clé (KPI) | Exemple d'objectif concret |",
            "| --- | --- | --- |",
            "| **Notoriété** | Portée (Reach), Impressions | Toucher 50 000 personnes uniques par mois |",
            "| **Engagement** | Commentaires, Partages, Enregistrements | Obtenir 5% de taux d'interaction par post |",
            "| **Trafic** | Clics sur le lien en bio / Swipe-up | 500 visites/mois vers le site ou la boutique |",
            "| **Leads** | Inscriptions newsletter, DM reçus | 50 demandes de devis par mois |",
            "| **Ventes** | Conversions, Chiffre d'affaires | 20 commandes directes via la campagne |",
            "💡 Conseil : Ne suis pas plus de 3 KPI principaux par campagne pour garder une visibilité claire sur tes résultats.",
          ],
          practice: [
            "Transforme « Je veux plus de clients grâce à Instagram » en un objectif SMART.",
            "Choisis ensuite trois KPI permettant de suivre cet objectif.",
          ],
          quiz: [
            {
              question:
                "Quel objectif est le plus mesurable ?",
              options: [
                "Avoir un meilleur compte Instagram",
                "Publier davantage",
                "Obtenir 50 demandes de devis depuis Instagram en 30 jours",
                "Avoir une présence professionnelle",
              ],
              answer: 2,
              explanation:
                "L'objectif indique une quantité, une action, une source et une période.",
            },
          ],
        },

        {
          slug: "funnel-social-media",
          title: "1.3 Comprendre le parcours client",
          duration: "20 min",
          description:
            "Comprends comment une personne passe de la découverte d'une marque à l'achat.",
          objectives: [
            "Comprendre le funnel marketing",
            "Adapter le contenu à chaque étape",
            "Éviter de demander un achat trop tôt",
          ],
          content: [
            "## Le parcours d'un client",
            "Une personne ne découvre généralement pas une marque et ne lui fait pas immédiatement confiance.",
            "Elle peut d'abord découvrir la marque, consulter plusieurs contenus, visiter le profil, regarder les avis, comparer les offres puis décider d'acheter.",
            "On peut simplifier ce parcours en un funnel marketing complet :",
            "| Étape du Funnel | Rôle du Contenu | Format Recommandé | Exemple de Message |",
            "| --- | --- | --- | --- |",
            "| **1. Découverte** | Attirer l'attention | Reel / TikTok / Infographie | « 5 conseils pour mieux gérer son temps » |",
            "| **2. Intérêt** | Éduquer & captiver | Carrousel Instagram / Article | « Le guide complet pour structurer sa journée » |",
            "| **3. Considération** | Rassurer & comparer | Étude de cas / Témoignage | « Comment Client X a économisé 10h/semaine » |",
            "| **4. Conversion** | Déclencher l'action | Offre spéciale / Lien direct | « Inscris-toi avant vendredi avec le code SAVE20 » |",
            "| **5. Fidélisation** | Entretenir la relation | Groupe exclusif / WhatsApp | « Astuces avancées réservées à nos membres » |",
            "📌 Important : Ne demande pas un achat à l'étape 1 ! Construis la confiance progressivement.",
          ],
          examples: [
            "Une école peut publier une vidéo éducative pour attirer une personne, une présentation de formation pour créer de l'intérêt, un témoignage d'ancien étudiant pour rassurer et enfin un lien d'inscription pour convertir.",
          ],
          practice: [
            "Crée une idée de contenu pour chacune des cinq étapes du parcours client pour une entreprise de ton choix.",
          ],
          quiz: [
            {
              question:
                "Quel contenu est particulièrement adapté à une personne qui connaît déjà l'entreprise et compare plusieurs solutions ?",
              options: [
                "Un contenu qui explique uniquement le nom de la marque",
                "Une étude de cas ou un témoignage client",
                "Une publication sans rapport avec le produit",
                "Un logo",
              ],
              answer: 1,
              explanation:
                "À l'étape de considération, les preuves et informations permettant de comparer les solutions peuvent aider à la décision.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 2 : Connaître son audience",
      lessons: [
        {
          slug: "audience-cible",
          title: "2.1 Identifier son audience cible",
          duration: "22 min",
          description:
            "Apprends à définir précisément les personnes que ton entreprise souhaite atteindre.",
          objectives: [
            "Définir une audience cible",
            "Identifier ses besoins et problèmes",
            "Éviter de vouloir parler à tout le monde",
          ],
          content: [
            "## Tu ne peux pas créer un bon contenu pour tout le monde",
            "Imagine que tu vends des chaussures de running.",
            "Un coureur débutant, un marathonien expérimenté et une personne qui cherche simplement des chaussures de ville n'ont pas les mêmes besoins.",
            "Si ton contenu essaie de parler aux trois en même temps, ton message risque de devenir vague.",
            "## Définir une audience",
            "Commence par identifier : âge approximatif, localisation, activité, niveau, besoins, problèmes, motivations et habitudes numériques.",
            "## Exemple",
            "Une entreprise vend des formations informatiques.",
            "Une audience possible pourrait être : jeunes adultes francophones qui souhaitent apprendre le développement web pour améliorer leur employabilité.",
            "Cette définition permet ensuite de créer des contenus beaucoup plus précis.",
            "## Le problème est plus important que la démographie",
            "Ne te limite pas à « femmes de 20 à 35 ans ».",
            "Demande-toi surtout : quel problème cette personne cherche-t-elle à résoudre ?",
          ],
          practice: [
            "Crée une fiche d'audience pour une entreprise réelle ou imaginaire.",
            "Décris son problème principal, ses objectifs, ses objections et les plateformes qu'elle pourrait utiliser.",
          ],
          quiz: [
            {
              question:
                "Pourquoi est-il utile de définir une audience cible ?",
              options: [
                "Pour pouvoir créer des contenus et messages plus pertinents",
                "Pour empêcher les autres personnes de voir les publications",
                "Pour obtenir automatiquement plus d'abonnés",
                "Pour éviter de mesurer les résultats",
              ],
              answer: 0,
              explanation:
                "Une audience bien définie permet d'adapter le message, les contenus et les campagnes.",
            },
          ],
        },

        {
          slug: "buyer-persona",
          title: "2.2 Créer un Buyer Persona",
          duration: "25 min",
          description:
            "Construis un profil réaliste de ton client idéal afin d'améliorer ta stratégie de contenu.",
          objectives: [
            "Comprendre le concept de Buyer Persona",
            "Identifier motivations, problèmes et objections",
            "Utiliser un persona pour guider la création de contenu",
          ],
          content: [
            "## Qu'est-ce qu'un Buyer Persona ?",
            "Un Buyer Persona est une représentation structurée d'un client idéal basée sur des informations utiles à la stratégie marketing.",
            "Il ne s'agit pas d'inventer une personne au hasard.",
            "On cherche à comprendre les caractéristiques et surtout les besoins du public que l'entreprise souhaite servir.",
            "## Exemple",
            "Pour une plateforme d'apprentissage comme Savoir+, un persona pourrait être un jeune professionnel francophone qui souhaite développer des compétences numériques pour améliorer sa carrière.",
            "Ses problèmes peuvent être le manque de temps, la difficulté à choisir une formation et la peur de ne pas avoir les compétences nécessaires.",
            "Ses motivations peuvent être l'employabilité, la progression professionnelle et l'apprentissage pratique.",
            "## Comment utiliser le persona ?",
            "Avant de publier un contenu, demande-toi : « Est-ce que ce contenu aide réellement cette personne ? »",
          ],
          practice: [
            "Crée un Buyer Persona pour une entreprise de ton choix.",
            "Inclue : situation, objectifs, problèmes, motivations, objections et habitudes sur les réseaux sociaux.",
          ],
          quiz: [
            {
              question:
                "Quelle information est particulièrement utile dans un Buyer Persona ?",
              options: [
                "Le logo de l'entreprise",
                "Les problèmes et motivations du client idéal",
                "La couleur préférée du fondateur",
                "Le nombre de concurrents uniquement",
              ],
              answer: 1,
              explanation:
                "Les problèmes, motivations et objectifs permettent d'adapter le marketing aux besoins réels de l'audience.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 3 : Choisir les bonnes plateformes",
      lessons: [
        {
          slug: "instagram-marketing",
          title: "3.1 Instagram Marketing",
          duration: "25 min",
          description:
            "Apprends à utiliser Instagram pour développer une marque, créer une communauté et générer des conversions.",
          objectives: [
            "Comprendre les principaux formats Instagram",
            "Construire un profil professionnel",
            "Créer une stratégie de contenu adaptée à Instagram",
          ],
          content: [
            "## Instagram n'est pas seulement une galerie de photos",
            "Instagram permet aujourd'hui de publier différents formats : publications, carrousels, Stories, vidéos courtes et contenus interactifs.",
            "Chaque format peut avoir un rôle différent.",
            "## Exemple",
            "Une agence immobilière peut utiliser des vidéos courtes pour présenter des biens, des carrousels pour expliquer les étapes d'un achat immobilier et des Stories pour répondre aux questions.",
            "## Optimiser un profil",
            "Un profil professionnel doit permettre de comprendre rapidement : qui est l'entreprise, ce qu'elle propose, pour qui et quelle action effectuer ensuite.",
            "## Exemple de bio",
            "Au lieu de simplement écrire « Boutique de vêtements », une bio peut expliquer la proposition de valeur et indiquer comment acheter.",
            "## Contenu",
            "Ne publie pas uniquement des promotions.",
            "Mélange contenu éducatif, inspiration, preuve sociale, coulisses, démonstrations et offres commerciales.",
          ],
          practice: [
            "Choisis une entreprise.",
            "Écris une bio Instagram claire.",
            "Propose cinq idées de publications et deux idées de Stories.",
          ],
          quiz: [
            {
              question:
                "Pourquoi une entreprise ne devrait-elle pas publier uniquement des promotions ?",
              options: [
                "Parce que les promotions sont interdites",
                "Parce qu'une audience a aussi besoin de contenu utile et intéressant",
                "Parce que les réseaux sociaux ne permettent pas de vendre",
                "Parce que les entreprises ne peuvent pas parler de leurs produits",
              ],
              answer: 1,
              explanation:
                "Une stratégie équilibrée aide à attirer, éduquer, engager et convertir l'audience.",
            },
          ],
        },

        {
          slug: "facebook-marketing",
          title: "3.2 Facebook Marketing",
          duration: "22 min",
          description:
            "Comprends comment utiliser Facebook pour développer une communauté, distribuer du contenu et soutenir les campagnes marketing.",
          objectives: [
            "Comprendre les usages marketing de Facebook",
            "Optimiser une page professionnelle",
            "Comprendre le rôle des groupes et communautés",
          ],
          content: [
            "## Facebook dans une stratégie marketing",
            "Facebook peut être particulièrement utile pour les communautés, les campagnes publicitaires, les événements, les pages professionnelles et certains publics locaux.",
            "## Exemple local",
            "Une salle de sport peut utiliser sa page pour présenter ses horaires, publier des conseils et recevoir des demandes de renseignements.",
            "Elle peut également créer une communauté autour du fitness afin de maintenir l'engagement.",
            "## Page professionnelle",
            "Une page doit présenter clairement l'entreprise, ses coordonnées, ses services et les prochaines actions possibles.",
          ],
          practice: [
            "Imagine que tu gères la page Facebook d'un restaurant.",
            "Propose une description de page, trois types de publications et une idée de campagne locale.",
          ],
          quiz: [
            {
              question:
                "Quel est un avantage potentiel d'une communauté Facebook ?",
              options: [
                "Créer des interactions autour d'un sujet ou d'une marque",
                "Garantir automatiquement des ventes",
                "Remplacer complètement un site web",
                "Éviter toute interaction avec les clients",
              ],
              answer: 0,
              explanation:
                "Une communauté peut renforcer les interactions et la relation entre une marque et son audience.",
            },
          ],
        },

        {
          slug: "tiktok-marketing",
          title: "3.3 TikTok Marketing",
          duration: "25 min",
          description:
            "Découvre comment créer des contenus courts, authentiques et adaptés à une audience TikTok.",
          objectives: [
            "Comprendre la logique des contenus courts",
            "Créer des hooks efficaces",
            "Construire des idées de vidéos simples",
          ],
          content: [
            "## Pourquoi le début d'une vidéo est important",
            "Sur les plateformes de vidéos courtes, l'utilisateur peut passer rapidement au contenu suivant.",
            "Les premières secondes doivent donc donner une raison de continuer à regarder.",
            "## Le Hook",
            "Un hook est une introduction qui attire l'attention.",
            "Exemple faible : « Bonjour, aujourd'hui je vais vous parler de SEO. »",
            "Exemple plus intéressant : « Voici trois erreurs SEO qui empêchent beaucoup de petits sites d'être visibles sur Google. »",
            "## Structure simple",
            "Tu peux utiliser : Hook → valeur → exemple → appel à l'action.",
            "## Authenticité",
            "Une vidéo n'a pas toujours besoin d'une production complexe.",
            "Une explication claire et utile peut être plus importante qu'un montage sophistiqué.",
          ],
          practice: [
            "Écris cinq hooks pour une entreprise de ton choix.",
            "Crée ensuite le script d'une vidéo de 30 à 60 secondes.",
          ],
          quiz: [
            {
              question:
                "Quel élément intervient généralement au début d'une vidéo courte ?",
              options: [
                "Un long générique",
                "Un hook qui donne envie de continuer",
                "Une page de conditions générales",
                "Une longue présentation de l'entreprise",
              ],
              answer: 1,
              explanation:
                "Le hook doit rapidement présenter une raison pour laquelle l'utilisateur devrait continuer à regarder.",
            },
          ],
        },

        {
          slug: "linkedin-marketing",
          title: "3.4 LinkedIn Marketing",
          duration: "25 min",
          description:
            "Apprends à utiliser LinkedIn pour développer une expertise, une marque professionnelle et des opportunités commerciales.",
          objectives: [
            "Comprendre le marketing B2B sur LinkedIn",
            "Créer du contenu professionnel utile",
            "Développer une présence personnelle ou d'entreprise",
          ],
          content: [
            "## LinkedIn n'est pas uniquement un CV en ligne",
            "LinkedIn peut servir à partager de l'expertise, construire une réputation professionnelle, développer un réseau et générer des opportunités.",
            "## Exemple",
            "Un développeur freelance peut publier des conseils techniques, des études de cas et des retours d'expérience.",
            "Un dirigeant peut partager des enseignements liés à son secteur.",
            "Une entreprise peut publier des études de cas, des résultats et des informations utiles à ses clients.",
            "## Le contenu d'expertise",
            "Un bon contenu LinkedIn peut expliquer un problème, partager une expérience, présenter une méthode ou analyser un cas réel.",
          ],
          practice: [
            "Écris un post LinkedIn destiné à ton audience professionnelle.",
            "Le post doit commencer par une idée forte, développer une leçon et terminer par une question ou une action.",
          ],
          quiz: [
            {
              question:
                "Quel contenu est particulièrement adapté à une stratégie d'expertise sur LinkedIn ?",
              options: [
                "Une étude de cas détaillée",
                "Une publication sans contexte",
                "Une série de publicités uniquement",
                "Un contenu copié sans valeur ajoutée",
              ],
              answer: 0,
              explanation:
                "Les études de cas permettent de démontrer une expertise à partir d'une situation concrète.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 4 : Construire une stratégie de contenu",
      lessons: [
        {
          slug: "content-pillars",
          title: "4.1 Créer ses piliers de contenu",
          duration: "25 min",
          description:
            "Apprends à organiser une stratégie de contenu autour de thèmes cohérents.",
          objectives: [
            "Comprendre les piliers de contenu",
            "Éviter de publier de manière aléatoire",
            "Créer une variété de contenus cohérente",
          ],
          content: [
            "## Qu'est-ce qu'un pilier de contenu ?",
            "Un pilier de contenu est un grand thème autour duquel une marque crée régulièrement du contenu.",
            "## Exemple",
            "Une entreprise de fitness pourrait avoir quatre piliers : éducation, entraînement, nutrition et témoignages.",
            "Cela évite de chercher chaque jour une nouvelle idée sans direction.",
            "## Pourquoi plusieurs piliers ?",
            "Parce qu'une audience ne veut pas nécessairement voir la même chose constamment.",
            "Les différents piliers permettent d'éduquer, divertir, rassurer et vendre.",
          ],
          practice: [
            "Choisis une entreprise.",
            "Définis quatre piliers de contenu.",
            "Pour chaque pilier, écris trois idées de publications.",
          ],
          quiz: [
            {
              question:
                "Quel est le rôle principal d'un pilier de contenu ?",
              options: [
                "Structurer les thèmes récurrents d'une stratégie de contenu",
                "Remplacer les objectifs marketing",
                "Créer automatiquement des abonnés",
                "Faire uniquement de la publicité",
              ],
              answer: 0,
              explanation:
                "Les piliers donnent une structure aux contenus publiés régulièrement.",
            },
          ],
        },

        {
          slug: "content-calendar",
          title: "4.2 Construire un calendrier éditorial",
          duration: "25 min",
          description:
            "Apprends à planifier les publications pour maintenir une stratégie cohérente.",
          objectives: [
            "Créer un calendrier éditorial",
            "Planifier différents formats",
            "Relier contenu et objectifs marketing",
          ],
          content: [
            "## Pourquoi planifier ?",
            "Sans planification, une entreprise peut publier beaucoup pendant une semaine puis disparaître pendant trois semaines.",
            "Un calendrier permet de mieux répartir les contenus.",
            "## Exemple de semaine",
            "Lundi : conseil éducatif.",
            "Mardi : coulisses.",
            "Mercredi : témoignage client.",
            "Jeudi : contenu vidéo.",
            "Vendredi : offre ou appel à l'action.",
            "## Planifier ne signifie pas tout automatiser",
            "Un calendrier doit rester flexible.",
            "Si une actualité importante ou une opportunité apparaît, le contenu peut être adapté.",
          ],
          practice: [
            "Construis un calendrier de contenu sur 7 jours.",
            "Indique pour chaque publication : plateforme, format, sujet, objectif et appel à l'action.",
          ],
          quiz: [
            {
              question:
                "Quel est l'intérêt principal d'un calendrier éditorial ?",
              options: [
                "Garantir qu'une publication deviendra virale",
                "Structurer et organiser les contenus",
                "Éviter toute adaptation",
                "Remplacer l'analyse des performances",
              ],
              answer: 1,
              explanation:
                "Le calendrier permet de structurer les publications tout en laissant la possibilité d'adapter la stratégie.",
            },
          ],
        },

        {
          slug: "copywriting-social-media",
          title: "4.3 Écrire des textes qui attirent l'attention",
          duration: "28 min",
          description:
            "Apprends les bases du copywriting appliqué aux publications sociales.",
          objectives: [
            "Créer des hooks",
            "Écrire des messages clairs",
            "Utiliser des appels à l'action",
          ],
          content: [
            "## Une bonne publication doit être comprise rapidement",
            "Sur les réseaux sociaux, les utilisateurs font souvent défiler rapidement le contenu.",
            "Ton message doit donc être clair.",
            "## Une structure simple",
            "Hook → problème → solution → preuve ou exemple → appel à l'action.",
            "## Exemple",
            "Hook : « Tu publies régulièrement mais personne ne réagit ? »",
            "Problème : « Le problème n'est peut-être pas la fréquence, mais le manque de valeur claire. »",
            "Solution : expliquer une méthode concrète.",
            "CTA : « Essaie cette méthode sur ta prochaine publication. »",
            "## Le CTA",
            "Un appel à l'action indique ce que tu souhaites que l'utilisateur fasse : commenter, partager, visiter une page, s'inscrire ou acheter.",
          ],
          practice: [
            "Réécris une publication commerciale trop vague pour la rendre plus claire.",
            "Ajoute un hook et un appel à l'action.",
          ],
          quiz: [
            {
              question:
                "Quel élément indique clairement au lecteur ce qu'il doit faire ensuite ?",
              options: [
                "Le CTA",
                "Le logo",
                "Le hashtag uniquement",
                "Le nombre d'abonnés",
              ],
              answer: 0,
              explanation:
                "Le Call To Action indique l'action souhaitée.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 5 : Créer du contenu engageant",
      lessons: [
        {
          slug: "content-formats",
          title: "5.1 Choisir les bons formats",
          duration: "22 min",
          description:
            "Comprends les différents formats sociaux et leur utilisation.",
          objectives: [
            "Comparer texte, image, carrousel, vidéo et Story",
            "Choisir un format selon l'objectif",
            "Adapter une idée à plusieurs formats",
          ],
          content: [
            "## Un même sujet peut devenir plusieurs contenus",
            "Supposons que tu veuilles expliquer cinq erreurs de marketing.",
            "Tu peux créer un carrousel Instagram, une vidéo courte, un post LinkedIn ou une Story interactive.",
            "Le contenu de base reste similaire mais la présentation change.",
            "## Choisir selon l'objectif",
            "Un tutoriel peut être excellent en vidéo.",
            "Une liste de conseils peut fonctionner en carrousel.",
            "Une opinion argumentée peut fonctionner en texte.",
            "Une question rapide peut être adaptée à une Story.",
          ],
          practice: [
            "Prends un sujet et transforme-le en quatre formats différents.",
          ],
          quiz: [
            {
              question:
                "Pourquoi adapter un contenu à différents formats ?",
              options: [
                "Parce que chaque plateforme et format possède ses propres usages",
                "Parce qu'un contenu ne peut jamais être réutilisé",
                "Pour supprimer toute cohérence",
                "Pour éviter de connaître son audience",
              ],
              answer: 0,
              explanation:
                "La même idée peut être adaptée à différents formats afin de mieux correspondre aux habitudes de consommation.",
            },
          ],
        },

        {
          slug: "visual-content",
          title: "5.2 Créer des visuels efficaces",
          duration: "25 min",
          description:
            "Découvre les principes fondamentaux pour créer des visuels lisibles et cohérents.",
          objectives: [
            "Comprendre la hiérarchie visuelle",
            "Créer des visuels simples",
            "Maintenir une identité visuelle cohérente",
          ],
          content: [
            "## Un bon visuel n'est pas nécessairement complexe",
            "Un visuel efficace permet de comprendre rapidement le message principal.",
            "Évite de remplir une image avec trop de texte.",
            "Utilise une hiérarchie claire : titre, information principale puis élément secondaire.",
            "## Identité visuelle",
            "Les couleurs, typographies, logos et styles peuvent contribuer à reconnaître une marque.",
            "Mais l'identité visuelle ne doit pas rendre le contenu difficile à lire.",
          ],
          practice: [
            "Imagine une publication annonçant une nouvelle formation.",
            "Décris le titre principal, le sous-titre, l'image et l'appel à l'action.",
          ],
          quiz: [
            {
              question:
                "Quel principe est important pour un visuel social media ?",
              options: [
                "Ajouter le plus de texte possible",
                "Rendre le message principal rapidement compréhensible",
                "Utiliser plusieurs logos",
                "Supprimer toute hiérarchie",
              ],
              answer: 1,
              explanation:
                "La clarté est essentielle lorsqu'un utilisateur consulte rapidement un contenu.",
            },
          ],
        },

        {
          slug: "video-content",
          title: "5.3 Créer des vidéos courtes",
          duration: "30 min",
          description:
            "Apprends à structurer une vidéo courte destinée aux réseaux sociaux.",
          objectives: [
            "Écrire un script court",
            "Créer un hook",
            "Structurer une vidéo pédagogique ou commerciale",
          ],
          content: [
            "## Structure d'une vidéo courte",
            "Une structure simple peut être : Hook → problème → solution → exemple → CTA.",
            "## Exemple",
            "Hook : « Voici pourquoi tes publications n'obtiennent presque aucun commentaire. »",
            "Problème : expliquer l'erreur.",
            "Solution : donner une méthode.",
            "Exemple : montrer une publication avant et après.",
            "CTA : proposer une action à tester.",
            "## Filmer simplement",
            "Un smartphone, une lumière correcte et un son compréhensible peuvent suffire pour commencer.",
            "L'objectif n'est pas de produire un film professionnel mais de transmettre efficacement une idée.",
          ],
          practice: [
            "Écris un script de 45 secondes pour expliquer une astuce liée à ton domaine.",
            "Indique le hook, les trois idées principales et le CTA.",
          ],
          quiz: [
            {
              question:
                "Quelle structure est adaptée à une vidéo pédagogique courte ?",
              options: [
                "Logo → générique → logo",
                "Hook → problème → solution → exemple → CTA",
                "CTA → silence → logo",
                "Présentation de l'entreprise pendant deux minutes avant le sujet",
              ],
              answer: 1,
              explanation:
                "Cette structure permet d'attirer l'attention puis de fournir rapidement de la valeur.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 6 : Engagement et Community Management",
      lessons: [
        {
          slug: "community-management",
          title: "6.1 Comprendre le Community Management",
          duration: "25 min",
          description:
            "Apprends à gérer les interactions avec une communauté et à transformer les réseaux sociaux en espace de relation client.",
          objectives: [
            "Comprendre le rôle d'un Community Manager",
            "Répondre aux commentaires et messages",
            "Construire une relation avec l'audience",
          ],
          content: [
            "## Publier n'est que la moitié du travail",
            "Les réseaux sociaux sont des espaces de conversation.",
            "Une entreprise doit également écouter et répondre.",
            "## Exemple",
            "Un client écrit : « J'ai commandé il y a cinq jours et je n'ai toujours rien reçu. »",
            "Ignorer le commentaire peut détériorer la confiance.",
            "Une réponse rapide, claire et orientée vers la résolution du problème peut au contraire améliorer l'expérience.",
            "## Le rôle du Community Manager",
            "Il peut répondre aux commentaires, gérer les messages, identifier les problèmes récurrents, remonter les retours clients et contribuer à l'image de la marque.",
          ],
          practice: [
            "Écris une réponse professionnelle à un client mécontent.",
            "Puis écris une réponse à un client qui laisse un commentaire positif.",
          ],
          quiz: [
            {
              question:
                "Pourquoi répondre aux commentaires peut-il être important ?",
              options: [
                "Parce que cela participe à la relation avec l'audience",
                "Parce que tous les commentaires sont obligatoires",
                "Parce que cela garantit une vente",
                "Parce que cela remplace le produit",
              ],
              answer: 0,
              explanation:
                "Les interactions permettent de construire et maintenir une relation avec la communauté.",
            },
          ],
        },

        {
          slug: "negative-comments",
          title: "6.2 Gérer les critiques et commentaires négatifs",
          duration: "22 min",
          description:
            "Apprends à gérer les critiques, plaintes et situations sensibles sur les réseaux sociaux.",
          objectives: [
            "Différencier critique et attaque",
            "Répondre professionnellement",
            "Savoir quand déplacer une conversation en privé",
          ],
          content: [
            "## Tous les commentaires négatifs ne sont pas des crises",
            "Une plainte réelle doit être traitée comme une opportunité de résoudre un problème.",
            "## Méthode",
            "1. Lire attentivement.",
            "2. Vérifier les faits.",
            "3. Répondre calmement.",
            "4. Proposer une solution.",
            "5. Passer en privé lorsque des informations personnelles sont nécessaires.",
            "## Ce qu'il faut éviter",
            "Évite les insultes, les réponses émotionnelles et les débats interminables.",
          ],
          practice: [
            "Une cliente écrit publiquement qu'elle a reçu un produit endommagé.",
            "Rédige une réponse professionnelle qui reconnaît le problème et propose une résolution.",
          ],
          quiz: [
            {
              question:
                "Que faut-il éviter lorsqu'une entreprise reçoit une critique publique ?",
              options: [
                "Vérifier les faits",
                "Répondre calmement",
                "Répondre sous le coup de la colère",
                "Chercher une solution",
              ],
              answer: 2,
              explanation:
                "Une réponse émotionnelle peut aggraver la situation et nuire à l'image de la marque.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 7 : Croissance organique",
      lessons: [
        {
          slug: "organic-growth",
          title: "7.1 Développer une audience sans acheter des abonnés",
          duration: "25 min",
          description:
            "Comprends les mécanismes fondamentaux d'une croissance organique saine.",
          objectives: [
            "Comprendre la croissance organique",
            "Éviter les faux abonnés",
            "Créer une stratégie durable",
          ],
          content: [
            "## Beaucoup d'abonnés ne signifie pas nécessairement une bonne audience",
            "Acheter des abonnés peut augmenter artificiellement un compteur mais ne crée pas nécessairement une communauté intéressée.",
            "Une audience pertinente est beaucoup plus utile.",
            "## Les leviers organiques",
            "Créer régulièrement du contenu utile.",
            "Comprendre ce qui intéresse l'audience.",
            "Encourager les conversations.",
            "Collaborer avec des créateurs ou entreprises complémentaires.",
            "Analyser les contenus qui fonctionnent.",
            "## La patience",
            "Une stratégie organique solide demande généralement du temps.",
            "L'objectif est de construire une audience réellement intéressée par la proposition de valeur.",
          ],
          practice: [
            "Crée un plan organique de 30 jours pour une petite entreprise.",
            "Définis les contenus, les collaborations et les indicateurs à suivre.",
          ],
          quiz: [
            {
              question:
                "Pourquoi acheter des abonnés est-il généralement une mauvaise stratégie ?",
              options: [
                "Parce que les abonnés artificiels peuvent ne pas être intéressés par la marque",
                "Parce que les abonnés sont toujours inutiles",
                "Parce que les réseaux sociaux interdisent toute croissance",
                "Parce que cela garantit trop de ventes",
              ],
              answer: 0,
              explanation:
                "Une audience pertinente et engagée a généralement plus de valeur qu'un grand nombre d'abonnés artificiels.",
            },
          ],
        },

        {
          slug: "hashtags-distribution",
          title: "7.2 Hashtags, tendances et distribution",
          duration: "20 min",
          description:
            "Comprends comment utiliser les hashtags et tendances sans dépendre uniquement d'eux.",
          objectives: [
            "Comprendre le rôle des hashtags",
            "Identifier des tendances pertinentes",
            "Éviter de suivre toutes les tendances sans stratégie",
          ],
          content: [
            "## Les hashtags ne sont pas une stratégie complète",
            "Ils peuvent aider à organiser ou découvrir certains contenus, mais ils ne compensent pas un contenu peu pertinent.",
            "## Les tendances",
            "Une tendance peut offrir une opportunité de visibilité.",
            "Mais elle doit être cohérente avec la marque.",
            "Participer à une tendance simplement parce qu'elle est populaire peut créer beaucoup de vues sans attirer la bonne audience.",
          ],
          practice: [
            "Trouve cinq idées de tendances ou sujets populaires qui pourraient être adaptés à ton secteur sans perdre la cohérence de la marque.",
          ],
          quiz: [
            {
              question:
                "Pourquoi ne faut-il pas suivre toutes les tendances ?",
              options: [
                "Parce qu'une tendance peut attirer une audience qui n'est pas pertinente",
                "Parce que les tendances sont toujours interdites",
                "Parce que les utilisateurs n'aiment aucune tendance",
                "Parce qu'elles empêchent toute création",
              ],
              answer: 0,
              explanation:
                "La visibilité n'a de valeur que si elle contribue à atteindre une audience pertinente ou un objectif utile.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 8 : Social Media Advertising",
      lessons: [
        {
          slug: "paid-social-introduction",
          title: "8.1 Introduction à la publicité sur les réseaux sociaux",
          duration: "25 min",
          description:
            "Comprends comment fonctionne la publicité payante sur les réseaux sociaux.",
          objectives: [
            "Comprendre la différence entre organique et publicité",
            "Identifier les composants d'une campagne",
            "Comprendre ciblage, budget et objectif",
          ],
          content: [
            "## Organique vs publicité",
            "Le contenu organique cherche à atteindre une audience sans payer directement pour sa diffusion.",
            "La publicité permet de payer pour diffuser un message à une audience définie.",
            "## Une campagne publicitaire",
            "Une campagne peut généralement comprendre un objectif, une audience, un budget, une création et une destination.",
            "## Exemple",
            "Une école souhaite obtenir des inscriptions à une formation.",
            "Elle pourrait créer une campagne dont l'objectif est de générer des prospects, cibler une audience pertinente, présenter une vidéo et envoyer les personnes vers un formulaire.",
          ],
          practice: [
            "Imagine que tu dois promouvoir une formation en ligne.",
            "Définis l'objectif, l'audience, le message, le format et la destination.",
          ],
          quiz: [
            {
              question:
                "Quel élément doit être défini avant de lancer une campagne publicitaire ?",
              options: [
                "L'objectif de la campagne",
                "Le nombre de commentaires espérés uniquement",
                "Le logo du concurrent",
                "Le nombre maximum d'emojis",
              ],
              answer: 0,
              explanation:
                "L'objectif influence le ciblage, la création, la destination et les indicateurs de performance.",
            },
          ],
        },

        {
          slug: "ad-targeting",
          title: "8.2 Comprendre le ciblage publicitaire",
          duration: "28 min",
          description:
            "Apprends les principes du ciblage et comment éviter une audience trop large ou trop restrictive.",
          objectives: [
            "Comprendre les différents types de ciblage",
            "Définir une audience publicitaire",
            "Comprendre le remarketing",
          ],
          content: [
            "## Pourquoi cibler ?",
            "Une publicité destinée à tout le monde risque d'être peu pertinente.",
            "Le ciblage permet de diffuser un message à une audience plus susceptible d'être intéressée.",
            "## Audiences",
            "Selon la plateforme et la configuration disponible, on peut travailler avec des caractéristiques démographiques, intérêts, comportements ou audiences issues d'interactions précédentes.",
            "## Remarketing",
            "Le remarketing consiste à recibler certaines personnes ayant déjà interagi avec une entreprise, selon les outils et règles disponibles.",
            "Exemple : une personne visite une page produit sans acheter. Une campagne peut ensuite lui présenter un rappel ou une information complémentaire.",
          ],
          practice: [
            "Crée deux audiences pour une entreprise : une audience de prospection et une audience de remarketing.",
          ],
          quiz: [
            {
              question:
                "Quel est l'objectif du remarketing ?",
              options: [
                "Toucher uniquement des personnes qui n'ont jamais entendu parler de la marque",
                "Réengager des personnes ayant déjà interagi avec la marque selon les conditions de la plateforme",
                "Supprimer les anciennes campagnes",
                "Créer automatiquement des produits",
              ],
              answer: 1,
              explanation:
                "Le remarketing permet de communiquer à nouveau avec des personnes ayant déjà eu une interaction avec l'entreprise.",
            },
          ],
        },

        {
          slug: "ad-creative",
          title: "8.3 Créer une publicité efficace",
          duration: "25 min",
          description:
            "Apprends à construire le message, le visuel et l'appel à l'action d'une publicité.",
          objectives: [
            "Créer une proposition de valeur claire",
            "Adapter le message à l'audience",
            "Créer un CTA cohérent",
          ],
          content: [
            "## Une publicité doit répondre rapidement à plusieurs questions",
            "Qu'est-ce qui est proposé ?",
            "Pour qui ?",
            "Quel problème est résolu ?",
            "Pourquoi agir maintenant ?",
            "Que dois-je faire ensuite ?",
            "## Exemple",
            "Au lieu de dire « Découvrez notre formation », une publicité peut préciser ce que la formation permet d'apprendre et à qui elle s'adresse.",
            "## Cohérence",
            "Le message de l'annonce doit correspondre à la page vers laquelle l'utilisateur est envoyé.",
          ],
          practice: [
            "Écris le texte d'une publicité pour une formation professionnelle.",
            "Ajoute un titre, une proposition de valeur et un CTA.",
          ],
          quiz: [
            {
              question:
                "Pourquoi la page de destination doit-elle être cohérente avec la publicité ?",
              options: [
                "Pour éviter que l'utilisateur arrive sur une page qui ne correspond pas à sa promesse",
                "Pour augmenter automatiquement le budget",
                "Pour supprimer le ciblage",
                "Pour empêcher les clics",
              ],
              answer: 0,
              explanation:
                "La cohérence entre annonce et destination améliore l'expérience et facilite la conversion.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 9 : Mesurer les performances",
      lessons: [
        {
          slug: "social-media-kpis",
          title: "9.1 Les KPI des réseaux sociaux",
          duration: "25 min",
          description:
            "Apprends à mesurer les performances d'une stratégie sociale.",
          objectives: [
            "Comprendre les principaux KPI",
            "Relier les métriques aux objectifs",
            "Éviter les vanity metrics",
          ],
          content: [
            "## Une métrique n'est utile que dans son contexte",
            "10 000 vues peuvent sembler impressionnantes.",
            "Mais si l'objectif était de générer des ventes et qu'aucune conversion n'a été réalisée, il faut analyser davantage.",
            "## Quelques KPI",
            "Portée : nombre de personnes exposées au contenu.",
            "Impressions : nombre total d'affichages.",
            "Engagement : interactions avec le contenu.",
            "CTR : proportion d'utilisateurs qui cliquent après avoir vu un contenu ou une annonce.",
            "Conversions : actions importantes comme une inscription, une demande ou un achat.",
            "CPA : coût associé à une acquisition ou conversion selon la définition utilisée.",
            "ROAS : revenu attribué à la publicité rapporté aux dépenses publicitaires, lorsqu'il est mesurable.",
          ],
          practice: [
            "Une campagne génère 10 000 impressions, 300 clics, 20 leads et 5 ventes.",
            "Analyse les résultats et indique quelles informations supplémentaires tu voudrais connaître avant de conclure.",
          ],
          quiz: [
            {
              question:
                "Pourquoi le nombre d'abonnés seul peut-il être insuffisant pour évaluer une stratégie ?",
              options: [
                "Parce qu'il ne mesure pas directement les objectifs commerciaux",
                "Parce que les abonnés sont toujours inutiles",
                "Parce qu'il mesure automatiquement les ventes",
                "Parce qu'il remplace toutes les autres métriques",
              ],
              answer: 0,
              explanation:
                "Le nombre d'abonnés ne montre pas nécessairement l'engagement, le trafic, les leads ou les ventes.",
            },
          ],
        },

        {
          slug: "social-media-reporting",
          title: "9.2 Créer un rapport Social Media",
          duration: "25 min",
          description:
            "Apprends à transformer des données sociales en recommandations concrètes.",
          objectives: [
            "Construire un rapport simple",
            "Identifier les contenus performants",
            "Proposer des actions d'amélioration",
          ],
          content: [
            "## Un rapport ne doit pas seulement présenter des chiffres",
            "Un bon rapport explique ce qui s'est passé, pourquoi cela peut être arrivé et ce qu'il faut faire ensuite.",
            "## Structure",
            "1. Objectifs",
            "2. Résultats",
            "3. Contenus les plus performants",
            "4. Contenus les moins performants",
            "5. Analyse",
            "6. Recommandations",
            "## Exemple",
            "Si les vidéos éducatives génèrent trois fois plus d'engagement que les publications promotionnelles, tu peux tester davantage de contenus éducatifs.",
            "Mais ne conclus pas immédiatement que les promotions sont inutiles. Analyse également les conversions.",
          ],
          practice: [
            "Crée un mini-rapport mensuel pour une entreprise imaginaire.",
            "Présente cinq KPI et trois recommandations.",
          ],
          quiz: [
            {
              question:
                "Quelle est la meilleure fonction d'un rapport Social Media ?",
              options: [
                "Afficher uniquement les chiffres",
                "Transformer les données en enseignements et décisions",
                "Montrer uniquement le nombre d'abonnés",
                "Remplacer la stratégie",
              ],
              answer: 1,
              explanation:
                "Le reporting doit aider à comprendre les performances et à prendre de meilleures décisions.",
            },
          ],
        },
      ],
    },

    {
      title: "Module 10 : Stratégie avancée et projet professionnel",
      lessons: [
        {
          slug: "social-media-strategy",
          title: "10.1 Construire une stratégie Social Media complète",
          duration: "35 min",
          description:
            "Assemble toutes les connaissances du cours pour construire une stratégie professionnelle.",
          objectives: [
            "Définir une audience",
            "Choisir les plateformes",
            "Définir les objectifs",
            "Créer les piliers de contenu",
            "Planifier les campagnes",
            "Définir les KPI",
          ],
          content: [
            "## Construire une stratégie de A à Z",
            "Une stratégie complète peut suivre cette logique :",
            "1. Comprendre l'entreprise.",
            "2. Définir l'audience.",
            "3. Identifier les problèmes et besoins.",
            "4. Définir les objectifs.",
            "5. Choisir les plateformes.",
            "6. Définir les piliers de contenu.",
            "7. Choisir les formats.",
            "8. Créer un calendrier éditorial.",
            "9. Prévoir les campagnes payantes si nécessaire.",
            "10. Définir les KPI.",
            "11. Publier et interagir.",
            "12. Mesurer.",
            "13. Améliorer.",
            "## Exemple complet",
            "Une petite entreprise vend des formations professionnelles.",
            "Audience : jeunes professionnels et personnes en reconversion.",
            "Objectif : générer des demandes d'inscription.",
            "Plateformes : Instagram, TikTok et LinkedIn.",
            "Contenus : conseils professionnels, extraits de cours, témoignages, démonstrations et histoires d'apprenants.",
            "Conversion : page de formation avec formulaire d'inscription.",
            "Mesure : portée, engagement, clics, leads et inscriptions.",
            "Cette stratégie est beaucoup plus exploitable qu'une simple liste de publications.",
          ],
          practice: [
            "Construis une stratégie complète pour une entreprise réelle ou imaginaire.",
            "Ton document doit inclure : audience, objectifs, plateformes, piliers, calendrier, publicité, CTA et KPI.",
          ],
          quiz: [
            {
              question:
                "Quelle étape devrait généralement précéder la création d'un calendrier de contenu ?",
              options: [
                "Définir l'audience et les objectifs",
                "Acheter des abonnés",
                "Publier immédiatement",
                "Ignorer les objectifs",
              ],
              answer: 0,
              explanation:
                "Le calendrier doit découler d'une stratégie et non l'inverse.",
            },
          ],
        },

        {
          slug: "social-media-audit",
          title: "10.2 Réaliser un audit Social Media",
          duration: "30 min",
          description:
            "Apprends à analyser une présence sociale existante et à identifier les opportunités d'amélioration.",
          objectives: [
            "Analyser un profil social",
            "Évaluer les contenus",
            "Identifier les problèmes",
            "Proposer des recommandations",
          ],
          content: [
            "## Qu'est-ce qu'un audit Social Media ?",
            "Un audit consiste à analyser la présence sociale d'une marque afin de comprendre ce qui fonctionne, ce qui fonctionne moins bien et quelles améliorations sont possibles.",
            "## Vérifier le profil",
            "La bio est-elle claire ?",
            "La proposition de valeur est-elle compréhensible ?",
            "Les coordonnées sont-elles accessibles ?",
            "L'appel à l'action est-il clair ?",
            "## Vérifier le contenu",
            "Quels formats sont utilisés ?",
            "Quels sujets reviennent ?",
            "Quels contenus obtiennent le plus d'interactions ?",
            "Les publications répondent-elles aux besoins de l'audience ?",
            "## Vérifier les conversions",
            "Les utilisateurs savent-ils quoi faire après avoir découvert la marque ?",
            "Le lien de profil mène-t-il vers une destination pertinente ?",
            "## Recommandations",
            "Chaque problème identifié doit idéalement être accompagné d'une action concrète.",
          ],
          practice: [
            "Choisis le compte social d'une entreprise.",
            "Réalise un audit de son profil, de son contenu, de son engagement et de son parcours de conversion.",
            "Propose au moins dix recommandations classées par priorité.",
          ],
          quiz: [
            {
              question:
                "Que doit contenir une bonne recommandation issue d'un audit ?",
              options: [
                "Uniquement une critique",
                "Un problème identifié et une action d'amélioration",
                "Une opinion sans justification",
                "Le nombre d'abonnés du concurrent",
              ],
              answer: 1,
              explanation:
                "Un audit utile doit déboucher sur des actions concrètes et prioritaires.",
            },
          ],
        },

        {
          slug: "final-social-media-project",
          title: "10.3 Projet final : lancer une campagne Social Media",
          duration: "60 min",
          description:
            "Mets en pratique toutes les compétences du cours en construisant une campagne Social Media complète.",
          objectives: [
            "Créer une stratégie complète",
            "Définir une audience",
            "Créer des contenus",
            "Construire un calendrier",
            "Préparer une campagne publicitaire",
            "Définir les KPI",
          ],
          content: [
            "## Ton projet final",
            "Tu vas agir comme un Social Media Manager.",
            "Choisis une entreprise réelle ou crée une entreprise fictive.",
            "Ton objectif est de construire une stratégie Social Media applicable dans le monde réel.",
            "## Partie 1 : L'entreprise",
            "Présente l'entreprise, son produit ou service, son marché et son avantage.",
            "## Partie 2 : Audience",
            "Définis le client idéal, ses problèmes, ses besoins et ses motivations.",
            "## Partie 3 : Objectifs",
            "Définis deux à trois objectifs mesurables.",
            "## Partie 4 : Plateformes",
            "Choisis les plateformes et explique pourquoi elles correspondent à ton audience.",
            "## Partie 5 : Contenu",
            "Définis au moins quatre piliers de contenu.",
            "Crée au moins dix idées de publications.",
            "## Partie 6 : Calendrier",
            "Construis un calendrier éditorial de 14 jours.",
            "## Partie 7 : Publicité",
            "Propose une campagne publicitaire avec objectif, audience, message, format et budget hypothétique.",
            "## Partie 8 : Mesure",
            "Définis les KPI qui permettront d'évaluer la campagne.",
            "## Partie 9 : Optimisation",
            "Explique ce que tu ferais si les résultats étaient inférieurs aux objectifs.",
          ],
          practice: [
            "## Livrable final",
            "Présente une stratégie Social Media complète comme si tu la présentais à un véritable client.",
            "Ton projet doit pouvoir être transformé en plan d'action concret.",
          ],
          quiz: [
            {
              question:
                "Quel est l'objectif principal du projet final ?",
              options: [
                "Mémoriser des définitions",
                "Créer une stratégie Social Media applicable à un cas réel",
                "Obtenir le plus grand nombre possible d'abonnés fictifs",
                "Créer uniquement un logo",
              ],
              answer: 1,
              explanation:
                "Le projet final doit démontrer la capacité à appliquer les concepts du cours à une situation professionnelle.",
            },
          ],
        },
      ],
    },
  ],
};

export const socialMediaMarketingExamQuestions: ExamQuestion[] = [
  {
    question:
      "Quelle est la première étape d'une stratégie Social Media efficace ?",
    options: [
      "Publier immédiatement",
      "Définir l'audience et les objectifs",
      "Acheter des abonnés",
      "Créer uniquement des publicités",
    ],
    correctAnswer: 1,
  },

  {
    question:
      "Pourquoi faut-il définir une audience cible ?",
    options: [
      "Pour rendre les contenus et messages plus pertinents",
      "Pour empêcher les autres utilisateurs de voir les contenus",
      "Pour garantir automatiquement une viralité",
      "Pour supprimer les concurrents",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel objectif est le plus mesurable ?",
    options: [
      "Avoir une meilleure présence",
      "Être plus populaire",
      "Générer 100 leads en 30 jours",
      "Publier davantage",
    ],
    correctAnswer: 2,
  },

  {
    question:
      "Qu'est-ce qu'un pilier de contenu ?",
    options: [
      "Un thème récurrent utilisé pour structurer les contenus",
      "Un outil publicitaire",
      "Un type d'abonné",
      "Une statistique",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel élément d'une publication indique généralement l'action souhaitée ?",
    options: [
      "Le CTA",
      "Le logo",
      "Le nombre d'abonnés",
      "Le hashtag uniquement",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel contenu peut aider une personne qui compare plusieurs solutions ?",
    options: [
      "Une étude de cas ou un témoignage",
      "Un logo",
      "Une publication sans rapport",
      "Une publicité sans information",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Pourquoi répondre aux commentaires est-il important ?",
    options: [
      "Pour construire une relation avec l'audience",
      "Pour garantir toutes les ventes",
      "Pour remplacer le service client",
      "Pour augmenter automatiquement le budget publicitaire",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel est un problème potentiel lié à l'achat d'abonnés ?",
    options: [
      "Ils peuvent ne pas être réellement intéressés par la marque",
      "Ils garantissent trop de ventes",
      "Ils remplacent les clients",
      "Ils améliorent toujours l'engagement",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quelle est la différence principale entre contenu organique et publicité sociale ?",
    options: [
      "La publicité utilise un investissement média pour diffuser le message",
      "Le contenu organique est toujours meilleur",
      "La publicité ne nécessite jamais d'objectif",
      "Il n'existe aucune différence",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Qu'est-ce que le remarketing ?",
    options: [
      "Réengager certaines personnes ayant déjà interagi avec une marque",
      "Supprimer les anciennes publications",
      "Créer uniquement des vidéos",
      "Acheter des abonnés",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Pourquoi faut-il mesurer les conversions et pas uniquement les vues ?",
    options: [
      "Parce que les vues ne montrent pas toujours si l'objectif commercial a été atteint",
      "Parce que les vues sont inutiles",
      "Parce que les conversions sont toujours plus faciles à obtenir",
      "Parce que les réseaux sociaux interdisent les vues",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quel est le rôle d'un rapport Social Media ?",
    options: [
      "Présenter uniquement les chiffres",
      "Transformer les données en enseignements et recommandations",
      "Remplacer la stratégie",
      "Afficher uniquement le nombre d'abonnés",
    ],
    correctAnswer: 1,
  },

  {
    question:
      "Quel élément doit être cohérent entre une publicité et sa page de destination ?",
    options: [
      "La promesse et le message",
      "Le nombre d'abonnés",
      "Le nombre de commentaires",
      "Les hashtags uniquement",
    ],
    correctAnswer: 0,
  },

  {
    question:
      "Quelle approche est la plus professionnelle pour gérer une plainte publique ?",
    options: [
      "Ignorer le client",
      "Répondre agressivement",
      "Reconnaître le problème, vérifier les faits et proposer une solution",
      "Supprimer immédiatement tous les commentaires",
    ],
    correctAnswer: 2,
  },

  {
    question:
      "Quel est l'objectif du projet final ?",
    options: [
      "Mémoriser les définitions",
      "Créer une stratégie Social Media applicable à un cas réel",
      "Obtenir artificiellement des abonnés",
      "Créer uniquement des visuels",
    ],
    correctAnswer: 1,
  },
];