import type { CourseDetail, ExamQuestion } from "../coursesData";

export const timeManagementCourse: CourseDetail = {
  slug: "time-management",
  categorySlug: "soft-skills",
  title: "Gestion du Temps & Productivité",
  description:
    "Apprends à organiser ton temps, définir tes priorités, rester concentré, réduire la procrastination et construire un système de travail durable et réaliste.",
  level: "Débutant",
  icon: "⏱️",
  modules: [
    {
      title: "Module 1: Comprendre la Gestion du Temps",
      lessons: [
        {
          slug: "comprendre-gestion-temps",
          title: "1.1 Comprendre la gestion du temps",
          duration: "15 min",
          description:
            "Découvre ce que signifie réellement gérer son temps et pourquoi travailler plus longtemps ne signifie pas forcément être plus productif.",
          objectives: [
            "Comprendre la différence entre temps passé et valeur produite.",
            "Identifier les principales causes de perte de temps.",
            "Comprendre pourquoi la productivité commence par les priorités.",
            "Identifier les habitudes qui réduisent ton efficacité."
          ],
          content: [
            "## Qu'est-ce que la gestion du temps ?",
            "La gestion du temps consiste à organiser volontairement ses activités afin d'utiliser son temps de manière cohérente avec ses objectifs.",
            "Il ne s'agit pas de créer des journées remplies de tâches. L'objectif est plutôt de consacrer son temps aux activités qui ont réellement de la valeur.",
            "## Temps occupé ≠ productivité",
            "Être occupé signifie avoir beaucoup de choses à faire. Être productif signifie avancer sur les bonnes choses.",
            "Par exemple, répondre pendant deux heures à des messages peut donner l'impression d'avoir beaucoup travaillé. Pourtant, si ton objectif principal était de terminer un rapport important, ces deux heures n'ont peut-être produit qu'une faible valeur.",
            "## Les principales sources de perte de temps",
            "- Les notifications constantes.",
            "- Les réunions inutiles.",
            "- Le multitâche.",
            "- Les tâches mal définies.",
            "- La procrastination.",
            "- L'absence de priorités.",
            "- Le perfectionnisme excessif.",
            "- Les interruptions fréquentes.",
            "## Une journée productive",
            "Une journée productive n'est pas nécessairement une journée pendant laquelle tu travailles sans arrêt. C'est une journée pendant laquelle tu avances sur ce qui compte réellement.",
            "## Exemple",
            "Imagine deux développeurs. Le premier répond toute la journée à des messages et passe d'une tâche à l'autre. Le second réserve deux heures le matin pour travailler sur la fonctionnalité principale du projet avant de consulter ses messages.",
            "Les deux peuvent travailler huit heures. Pourtant, le second peut produire davantage de valeur grâce à une meilleure organisation.",
            "## Principe à retenir",
            "La première question à se poser n'est pas « Comment faire plus de choses ? », mais « Quelles sont les choses qui méritent réellement mon temps ? »"
          ],
          examples: [
            "Un étudiant qui passe trois heures à relire ses notes sans objectif précis n'est pas nécessairement plus efficace qu'un étudiant qui travaille une heure avec un objectif clair.",
            "Un développeur qui passe toute sa journée à répondre aux messages peut être très occupé sans faire avancer la fonctionnalité principale."
          ],
          practice: [
            "Liste cinq activités auxquelles tu consacres régulièrement du temps.",
            "Pour chacune, indique si elle contribue directement à tes objectifs.",
            "Identifie une activité que tu pourrais réduire ou supprimer."
          ],
          quiz: [
            {
              question:
                "Quelle affirmation décrit le mieux la productivité ?",
              options: [
                "Faire le plus grand nombre de tâches possible.",
                "Travailler sans faire de pause.",
                "Consacrer son temps aux activités qui ont le plus de valeur.",
                "Répondre immédiatement à toutes les demandes."
              ],
              answer: 2,
              explanation:
                "La productivité consiste surtout à utiliser son temps sur les bonnes activités, et pas simplement à multiplier les tâches."
            },
            {
              question:
                "Pourquoi une personne peut-elle être très occupée sans être productive ?",
              options: [
                "Parce qu'elle travaille trop lentement.",
                "Parce qu'elle peut consacrer son temps à des tâches peu importantes.",
                "Parce qu'elle fait toujours des pauses.",
                "Parce qu'elle planifie ses journées."
              ],
              answer: 1,
              explanation:
                "L'activité ne garantit pas la valeur. On peut passer beaucoup de temps sur des tâches secondaires sans avancer sur ses objectifs principaux."
            }
          ]
        },
        {
          slug: "diagnostiquer-pertes-temps",
          title: "1.2 Identifier ses voleurs de temps",
          duration: "15 min",
          description:
            "Apprends à identifier les habitudes, interruptions et distractions qui consomment ton temps.",
          objectives: [
            "Identifier ses principales sources de distraction.",
            "Distinguer interruption, distraction et procrastination.",
            "Analyser une journée de travail.",
            "Construire un premier plan d'amélioration."
          ],
          content: [
            "## Les voleurs de temps",
            "Un voleur de temps est une activité qui consomme une quantité importante de temps par rapport à la valeur qu'elle apporte.",
            "## Les distractions numériques",
            "Les notifications, réseaux sociaux, messageries et actualités peuvent fragmenter l'attention.",
            "Le problème n'est pas seulement la durée passée sur une application. Le retour à une tâche importante après une interruption peut également demander un effort mental.",
            "## Les interruptions",
            "Une interruption peut venir d'une notification, d'un collègue, d'un appel ou d'une réunion improvisée.",
            "Certaines interruptions sont nécessaires. Le but n'est donc pas de toutes les supprimer, mais de protéger les périodes pendant lesquelles une forte concentration est nécessaire.",
            "## La procrastination",
            "La procrastination consiste à repousser volontairement une tâche alors qu'on sait qu'il serait préférable de la commencer.",
            "Elle peut être liée à une tâche trop vague, trop difficile, ennuyeuse ou associée à la peur de mal faire.",
            "## Audit personnel",
            "Pendant une journée, note les principales activités réalisées et le temps approximatif consacré à chacune.",
            "Classe ensuite ces activités en trois groupes : forte valeur, valeur moyenne et faible valeur.",
            "## Exemple",
            "Tu découvres que tu consultes ta messagerie toutes les dix minutes. Chaque consultation ne dure que deux minutes, mais elle fragmente constamment ton travail.",
            "Une solution peut être de consulter les messages à des moments définis plutôt qu'en permanence."
          ],
          examples: [
            "Notifications activées en permanence → interruptions répétées.",
            "Boîte mail ouverte toute la journée → attention fragmentée.",
            "Tâche très vague comme « travailler sur le projet » → difficulté à commencer."
          ],
          practice: [
            "Pendant une journée, note les moments où tu es interrompu.",
            "Identifie tes trois principales distractions.",
            "Choisis une distraction à réduire pendant les sept prochains jours."
          ],
          quiz: [
            {
              question:
                "Quelle est une bonne première étape pour réduire ses pertes de temps ?",
              options: [
                "Travailler plus longtemps.",
                "Identifier où son temps est réellement dépensé.",
                "Supprimer toutes les pauses.",
                "Faire plusieurs tâches simultanément."
              ],
              answer: 1,
              explanation:
                "Avant d'améliorer son organisation, il faut comprendre où son temps est réellement consacré."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Prioriser les Bonnes Tâches",
      lessons: [
        {
          slug: "matrice-eisenhower",
          title: "2.1 La matrice d'Eisenhower",
          duration: "18 min",
          description:
            "Apprends à distinguer ce qui est urgent de ce qui est important afin de mieux choisir où investir ton temps.",
          objectives: [
            "Comprendre les quatre quadrants de la matrice d'Eisenhower.",
            "Différencier urgence et importance.",
            "Apprendre à traiter les tâches stratégiques avant qu'elles ne deviennent urgentes.",
            "Utiliser la matrice sur une liste réelle de tâches."
          ],
          content: [
            "## Urgent et important : faire",
            "Ces tâches demandent généralement une attention rapide et ont un impact significatif.",
            "Exemples : résoudre une panne critique, répondre à une situation urgente ou terminer une échéance importante qui arrive immédiatement.",
            "## Important mais non urgent : planifier",
            "C'est souvent le quadrant le plus stratégique.",
            "Il comprend les activités qui contribuent fortement à tes objectifs mais qui ne provoquent pas encore de pression immédiate.",
            "Exemples : apprendre une compétence, préparer un projet, faire du sport, planifier sa carrière ou améliorer un processus.",
            "## Urgent mais peu important : réduire ou déléguer",
            "Ces tâches demandent souvent une réponse rapide mais contribuent peu à tes objectifs principaux.",
            "Lorsque c'est possible, automatise-les, délègue-les ou limite le temps qui leur est consacré.",
            "## Ni urgent ni important : éliminer ou limiter",
            "Ces activités apportent généralement peu de valeur.",
            "Exemples : consulter compulsivement des contenus sans objectif ou effectuer certaines tâches simplement par habitude.",
            "## Le piège du quadrant urgent",
            "Une personne qui néglige constamment les tâches importantes mais non urgentes finit souvent par créer ses propres urgences.",
            "Par exemple, ne pas préparer un projet suffisamment tôt peut transformer une activité planifiable en crise de dernière minute.",
            "## Exemple pratique",
            "Objectif : lancer un site web.",
            "Corriger une panne bloquante avant le lancement → urgent et important.",
            "Préparer le contenu du site deux semaines à l'avance → important mais non urgent.",
            "Répondre à une demande secondaire qui pourrait être traitée par quelqu'un d'autre → urgent mais peu important.",
            "Faire défiler les réseaux sociaux sans objectif → ni urgent ni important."
          ],
          examples: [
            "Urgent + important → corriger une panne de production.",
            "Important + non urgent → apprendre une nouvelle technologie.",
            "Urgent + peu important → traiter une demande administrative pouvant être déléguée.",
            "Ni urgent ni important → consulter son téléphone sans objectif."
          ],
          practice: [
            "Écris dix tâches que tu dois réaliser cette semaine.",
            "Place chaque tâche dans l'un des quatre quadrants.",
            "Choisis trois tâches importantes mais non urgentes et programme-les dans ton agenda."
          ],
          quiz: [
            {
              question:
                "Quel quadrant mérite généralement une attention particulière pour éviter les crises futures ?",
              options: [
                "Urgent et important uniquement.",
                "Important mais non urgent.",
                "Urgent mais non important.",
                "Ni urgent ni important."
              ],
              answer: 1,
              explanation:
                "Les tâches importantes mais non urgentes contribuent aux objectifs à long terme et permettent souvent de prévenir les futures urgences."
            }
          ]
        },
        {
          slug: "priorites-80-20",
          title: "2.2 La règle des priorités et le principe de Pareto",
          duration: "15 min",
          description:
            "Découvre comment identifier les activités qui produisent une part disproportionnée de tes résultats.",
          objectives: [
            "Comprendre l'idée générale du principe de Pareto.",
            "Identifier les activités à fort impact.",
            "Éviter de traiter toutes les tâches comme si elles avaient la même importance."
          ],
          content: [
            "## Le principe de Pareto",
            "Le principe de Pareto est souvent résumé par l'idée que certaines causes produisent une part importante des résultats.",
            "Il ne faut pas interpréter cela comme une règle universelle exactement égale à 80/20. Dans la pratique, la répartition peut être différente.",
            "## Application à la productivité",
            "Certaines activités peuvent contribuer beaucoup plus à tes résultats que d'autres.",
            "Par exemple, pour un étudiant, deux heures de préparation ciblée sur les notions principales peuvent être plus utiles que plusieurs heures de lecture passive.",
            "## Question essentielle",
            "Demande-toi : « Quelle activité, si je la réalise aujourd'hui, aura le plus d'impact sur mon objectif ? »",
            "## Exemple professionnel",
            "Un commercial peut découvrir qu'une petite partie de ses prospects génère la majorité de ses ventes. Il peut alors consacrer davantage de temps aux relations les plus prometteuses tout en conservant un traitement adapté des autres prospects.",
            "## Attention",
            "Le principe de Pareto ne signifie pas que les 80 % restants sont inutiles. Il sert surtout à rechercher les leviers qui ont le plus d'impact."
          ],
          examples: [
            "Un développeur peut identifier que quelques fonctionnalités sont responsables de la majorité de la valeur perçue par les utilisateurs.",
            "Un étudiant peut identifier les quelques concepts qui reviennent le plus souvent dans les exercices et examens."
          ],
          practice: [
            "Choisis un objectif personnel.",
            "Liste les activités qui contribuent à cet objectif.",
            "Identifie les deux ou trois activités qui semblent avoir le plus d'impact."
          ],
          quiz: [
            {
              question:
                "Comment utiliser intelligemment le principe de Pareto ?",
              options: [
                "Ignorer systématiquement 80 % de ses tâches.",
                "Chercher les activités qui produisent une part importante des résultats.",
                "Faire uniquement les tâches les plus faciles.",
                "Travailler exactement 20 % du temps."
              ],
              answer: 1,
              explanation:
                "Pareto est surtout un outil pour rechercher les leviers à fort impact, pas une règle indiquant qu'il faut supprimer 80 % des activités."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Planifier son Travail",
      lessons: [
        {
          slug: "objectifs-smart",
          title: "3.1 Définir des objectifs clairs avec SMART",
          duration: "18 min",
          description:
            "Transforme des intentions vagues en objectifs concrets et mesurables.",
          objectives: [
            "Comprendre les cinq dimensions d'un objectif SMART.",
            "Transformer un objectif vague en objectif concret.",
            "Définir une échéance réaliste."
          ],
          content: [
            "## Pourquoi les objectifs vagues posent problème",
            "« Je veux apprendre l'anglais » est une intention, mais elle ne permet pas facilement de savoir quoi faire aujourd'hui.",
            "Un objectif bien défini permet de savoir ce qui doit être réalisé et comment mesurer le progrès.",
            "## SMART",
            "- **Spécifique** : l'objectif doit être clairement défini.",
            "- **Mesurable** : il doit être possible d'observer le progrès.",
            "- **Atteignable** : il doit être réaliste compte tenu des ressources disponibles.",
            "- **Pertinent** : il doit avoir une vraie valeur pour la personne ou le projet.",
            "- **Délimité dans le temps** : une échéance doit être définie.",
            "## Exemple",
            "Objectif vague : « Je veux améliorer mes compétences en programmation. »",
            "Objectif plus concret : « Pendant les six prochaines semaines, je vais consacrer quatre sessions de 45 minutes par semaine à JavaScript et réaliser un petit projet pratique à la fin de chaque semaine. »",
            "## Pourquoi mesurer ?",
            "La mesure permet de savoir si l'organisation fonctionne réellement. Sans indicateur, il devient difficile de distinguer l'effort du progrès."
          ],
          examples: [
            "Vague : « Lire davantage. »",
            "Plus précis : « Lire 20 pages d'un livre chaque soir du lundi au vendredi pendant quatre semaines. »",
            "Vague : « Faire du sport. »",
            "Plus précis : « Faire trois séances de 30 minutes par semaine pendant un mois. »"
          ],
          practice: [
            "Choisis un objectif personnel ou professionnel.",
            "Réécris-le en utilisant les cinq dimensions SMART.",
            "Définis une première action réalisable aujourd'hui."
          ],
          quiz: [
            {
              question: "Que signifie le M dans SMART ?",
              options: [
                "Motivant",
                "Mesurable",
                "Minimal",
                "Méthodique"
              ],
              answer: 1,
              explanation:
                "Le M signifie généralement Mesurable : l'objectif doit permettre de suivre les progrès."
            }
          ]
        },
        {
          slug: "planification-hebdomadaire",
          title: "3.2 Construire une planification hebdomadaire",
          duration: "18 min",
          description:
            "Apprends à transformer tes objectifs en actions concrètes réparties dans la semaine.",
          objectives: [
            "Construire une liste de priorités hebdomadaire.",
            "Réserver du temps pour les tâches importantes.",
            "Prévoir une marge pour les imprévus.",
            "Éviter de surcharger son agenda."
          ],
          content: [
            "## Commencer par les résultats",
            "Au lieu de remplir immédiatement ton agenda, commence par identifier les résultats que tu veux obtenir à la fin de la semaine.",
            "## Étape 1 : choisir les priorités",
            "Sélectionne quelques résultats réellement importants. Une semaine réussie ne nécessite pas nécessairement vingt priorités.",
            "## Étape 2 : découper les projets",
            "Une grande tâche doit être transformée en actions plus petites.",
            "Exemple : « créer un site web » peut devenir « définir les pages », « créer la structure », « intégrer la page d'accueil », « tester le formulaire ».",
            "## Étape 3 : réserver du temps",
            "Place les tâches importantes dans ton calendrier au lieu de compter uniquement sur le temps libre.",
            "## Étape 4 : prévoir des marges",
            "Les journées réelles comportent des retards, des appels et des problèmes imprévus. Un agenda rempli à 100 % laisse très peu de place à la réalité.",
            "## Revue hebdomadaire",
            "À la fin de la semaine, examine ce qui a été accompli, ce qui a été reporté et les raisons du report."
          ],
          examples: [
            "Lundi matin : deux heures consacrées à un projet important.",
            "Mardi : session d'apprentissage et tâches administratives.",
            "Vendredi : revue de la semaine et préparation de la suivante."
          ],
          practice: [
            "Définis trois résultats importants pour ta prochaine semaine.",
            "Transforme chaque résultat en plusieurs actions concrètes.",
            "Place les actions importantes dans ton calendrier."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il éviter de remplir son agenda à 100 % ?",
              options: [
                "Parce qu'un agenda doit toujours être vide.",
                "Parce que les imprévus et interruptions existent.",
                "Parce qu'il ne faut jamais planifier.",
                "Parce que les tâches importantes ne doivent pas être programmées."
              ],
              answer: 1,
              explanation:
                "Prévoir une marge permet d'absorber les imprévus sans détruire toute l'organisation de la semaine."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Se Concentrer et Travailler en Profondeur",
      lessons: [
        {
          slug: "methode-pomodoro",
          title: "4.1 La méthode Pomodoro",
          duration: "15 min",
          description:
            "Découvre une méthode simple pour structurer les périodes de concentration et les pauses.",
          objectives: [
            "Comprendre le principe de Pomodoro.",
            "Créer une session de travail sans distraction.",
            "Utiliser les pauses pour préserver son attention."
          ],
          content: [
            "## Le principe",
            "La méthode Pomodoro consiste à travailler pendant une période définie, puis à prendre une courte pause avant de recommencer.",
            "Une configuration classique utilise 25 minutes de travail concentré suivies de 5 minutes de pause. Après plusieurs cycles, une pause plus longue peut être prise.",
            "## Pourquoi cela fonctionne-t-il ?",
            "Une durée limitée rend le début d'une tâche moins intimidant et crée une frontière claire entre travail et pause.",
            "## Adapter la méthode",
            "25 minutes n'est pas une obligation universelle. Pour certaines tâches, des blocs de 40, 50 ou 60 minutes peuvent être plus adaptés.",
            "L'important est de protéger la période de concentration et de faire de vraies pauses.",
            "## Pendant un bloc",
            "- Désactive les notifications.",
            "- Ferme les onglets inutiles.",
            "- Définis une tâche précise.",
            "- Note les distractions au lieu de les suivre immédiatement.",
            "## Exemple",
            "Objectif : rédiger une présentation.",
            "Session 1 : préparer le plan.",
            "Pause.",
            "Session 2 : rédiger les premières diapositives.",
            "Pause.",
            "Session 3 : terminer le contenu."
          ],
          examples: [
            "25 min de travail + 5 min de pause.",
            "Après plusieurs cycles, une pause plus longue.",
            "Pour une tâche complexe, utiliser des blocs plus longs tout en conservant le principe de concentration."
          ],
          practice: [
            "Choisis une tâche importante.",
            "Programme un bloc de 25 minutes.",
            "Pendant ce bloc, élimine les notifications.",
            "Note les distractions que tu as ressenties sans y répondre immédiatement."
          ],
          quiz: [
            {
              question:
                "Quel est le principe essentiel de la méthode Pomodoro ?",
              options: [
                "Travailler sans aucune pause.",
                "Alterner des périodes de concentration et des pauses.",
                "Faire plusieurs tâches simultanément.",
                "Répondre aux notifications pendant les sessions."
              ],
              answer: 1,
              explanation:
                "Pomodoro repose sur l'alternance entre périodes de travail concentré et pauses."
            }
          ]
        },
        {
          slug: "deep-work-et-distractions",
          title: "4.2 Travail profond et gestion des distractions",
          duration: "18 min",
          description:
            "Apprends à créer un environnement favorable à la concentration sur les tâches complexes.",
          objectives: [
            "Comprendre la différence entre travail profond et travail superficiel.",
            "Réduire les interruptions.",
            "Créer un environnement de concentration.",
            "Regrouper certaines tâches de communication."
          ],
          content: [
            "## Travail profond",
            "Le travail profond désigne les périodes pendant lesquelles on se concentre fortement sur une activité exigeante sur le plan cognitif.",
            "Programmer une nouvelle fonctionnalité, analyser des données ou rédiger un rapport complexe sont des exemples de tâches qui peuvent bénéficier de ce type de concentration.",
            "## Travail superficiel",
            "Certaines tâches sont nécessaires mais demandent moins de concentration : classement, réponses simples, certaines tâches administratives ou vérifications rapides.",
            "## Protéger son attention",
            "La concentration est plus facile lorsque l'environnement réduit les sollicitations inutiles.",
            "Tu peux par exemple désactiver les notifications, fermer les applications non nécessaires et prévenir tes collègues lorsque tu es dans une période de travail concentré.",
            "## Regrouper les tâches similaires",
            "Au lieu de vérifier les messages à chaque arrivée, tu peux réserver plusieurs moments dans la journée à la communication.",
            "Cette approche limite les changements constants de contexte.",
            "## Exemple",
            "Un développeur peut réserver 9h00 à 11h00 au développement, puis 11h00 à 11h30 aux messages et demandes diverses."
          ],
          examples: [
            "Bloc de concentration le matin → développement ou rédaction.",
            "Bloc de communication → emails, messages et demandes.",
            "Bloc administratif → factures, classement et tâches répétitives."
          ],
          practice: [
            "Identifie une période de ta journée où tu es généralement le plus concentré.",
            "Réserve cette période à une tâche importante pendant trois jours.",
            "Désactive les notifications pendant cette période."
          ],
          quiz: [
            {
              question:
                "Quel comportement favorise le travail profond ?",
              options: [
                "Consulter les notifications toutes les cinq minutes.",
                "Alterner constamment entre plusieurs tâches.",
                "Protéger une période de concentration dédiée à une tâche importante.",
                "Garder toutes les applications ouvertes."
              ],
              answer: 2,
              explanation:
                "Le travail profond nécessite de réduire les interruptions et les changements de contexte."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Vaincre la Procrastination",
      lessons: [
        {
          slug: "comprendre-procrastination",
          title: "5.1 Comprendre la procrastination",
          duration: "16 min",
          description:
            "Comprends pourquoi tu repousses certaines tâches et comment réduire progressivement ce comportement.",
          objectives: [
            "Comprendre les causes courantes de la procrastination.",
            "Identifier ses propres déclencheurs.",
            "Distinguer manque de motivation et tâche mal définie.",
            "Choisir une stratégie adaptée."
          ],
          content: [
            "## La procrastination",
            "Procrastiner signifie repousser volontairement une tâche alors qu'on sait qu'il serait préférable de la réaliser.",
            "Ce comportement n'est pas toujours lié à la paresse.",
            "## Pourquoi procrastinons-nous ?",
            "Une tâche peut sembler trop grande, trop difficile, ennuyeuse ou inconfortable.",
            "La peur de l'échec, le perfectionnisme ou le manque de clarté peuvent également favoriser le report.",
            "## Rendre la tâche plus petite",
            "« Écrire le rapport » peut sembler énorme.",
            "« Ouvrir le document et écrire le titre » est une action beaucoup plus facile à commencer.",
            "## La règle des cinq minutes",
            "Une technique simple consiste à s'engager à travailler seulement quelques minutes sur la tâche.",
            "Le but n'est pas de terminer le travail en cinq minutes, mais de réduire la résistance au démarrage.",
            "## Identifier le vrai problème",
            "Si tu repousses toujours une tâche, demande-toi :",
            "- Est-elle clairement définie ?",
            "- Est-elle trop grande ?",
            "- Est-elle réellement importante ?",
            "- Est-ce la peur de mal faire qui bloque le démarrage ?"
          ],
          examples: [
            "« Je dois étudier » → « Je vais résoudre les trois premiers exercices. »",
            "« Je dois préparer une présentation » → « Je vais créer le plan avec cinq titres. »",
            "« Je dois nettoyer mon bureau » → « Je vais ranger uniquement la surface pendant cinq minutes. »"
          ],
          practice: [
            "Choisis une tâche que tu repousses actuellement.",
            "Découpe-la en une action de moins de dix minutes.",
            "Commence cette action immédiatement."
          ],
          quiz: [
            {
              question:
                "Quelle stratégie peut aider à commencer une tâche difficile ?",
              options: [
                "Attendre d'être parfaitement motivé.",
                "Rendre la première action très petite et concrète.",
                "Ajouter davantage de tâches.",
                "Ignorer complètement la tâche."
              ],
              answer: 1,
              explanation:
                "Réduire la première action permet de diminuer la résistance psychologique au démarrage."
            }
          ]
        },
        {
          slug: "perfectionnisme-et-action",
          title: "5.2 Perfectionnisme, peur de l'échec et passage à l'action",
          duration: "15 min",
          description:
            "Apprends à avancer sans attendre des conditions parfaites.",
          objectives: [
            "Comprendre le lien entre perfectionnisme et procrastination.",
            "Distinguer qualité et perfection.",
            "Utiliser des premières versions imparfaites pour avancer."
          ],
          content: [
            "## Le piège du perfectionnisme",
            "Le perfectionnisme peut sembler positif car il pousse à rechercher la qualité. Mais lorsqu'il empêche de commencer ou de terminer une tâche, il devient contre-productif.",
            "## Première version",
            "Pour de nombreuses tâches créatives ou complexes, il est préférable de produire une première version puis de l'améliorer.",
            "Un document peut être révisé. Un prototype peut être testé. Une présentation peut être améliorée.",
            "## Qualité adaptée au contexte",
            "Toutes les tâches ne méritent pas le même niveau de perfection.",
            "Une présentation stratégique importante peut nécessiter beaucoup de préparation. Une petite note interne peut simplement être claire et correcte.",
            "## Principe",
            "Cherche à produire une version suffisamment bonne pour avancer, puis améliore-la lorsque cela apporte une réelle valeur."
          ],
          examples: [
            "Rédiger un premier brouillon avant de corriger chaque phrase.",
            "Créer un prototype avant de construire la version finale.",
            "Tester une idée à petite échelle avant d'investir beaucoup de ressources."
          ],
          practice: [
            "Choisis une tâche que tu retardes parce que tu veux la faire parfaitement.",
            "Définis ce qu'une première version acceptable signifie.",
            "Produis cette première version avant de chercher à la perfectionner."
          ],
          quiz: [
            {
              question:
                "Pourquoi le perfectionnisme peut-il réduire la productivité ?",
              options: [
                "Parce qu'il garantit toujours de mauvais résultats.",
                "Parce qu'il peut empêcher de commencer ou de terminer une tâche.",
                "Parce qu'il interdit toute amélioration.",
                "Parce qu'il oblige toujours à travailler moins."
              ],
              answer: 1,
              explanation:
                "Le perfectionnisme devient problématique lorsqu'il augmente tellement le niveau attendu qu'il bloque l'action ou ralentit inutilement le travail."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Gérer son Énergie",
      lessons: [
        {
          slug: "temps-et-energie",
          title: "6.1 Gérer son énergie, pas seulement son temps",
          duration: "16 min",
          description:
            "Comprends pourquoi ton niveau d'énergie influence fortement ta capacité à travailler efficacement.",
          objectives: [
            "Comprendre la relation entre énergie et productivité.",
            "Identifier ses périodes de meilleure concentration.",
            "Adapter les tâches à son niveau d'énergie."
          ],
          content: [
            "## Le temps est limité, mais l'énergie varie",
            "Deux heures disponibles ne produisent pas nécessairement le même résultat selon ton niveau de fatigue et ton état mental.",
            "## Identifier ses moments forts",
            "Certaines personnes sont plus concentrées le matin, d'autres l'après-midi ou le soir.",
            "Observe tes propres habitudes au lieu de supposer que tout le monde fonctionne de la même manière.",
            "## Associer tâches et énergie",
            "Les tâches complexes peuvent être placées pendant les périodes de meilleure concentration.",
            "Les tâches simples peuvent être réservées aux périodes où l'énergie mentale est plus faible.",
            "## Les pauses",
            "Une pause peut permettre de récupérer de l'attention. Une pause n'est donc pas nécessairement du temps perdu.",
            "## Sommeil et hygiène de vie",
            "Le sommeil, l'activité physique, l'alimentation et les périodes de récupération peuvent influencer la capacité à se concentrer. La productivité durable ne repose pas sur le fait de travailler constamment."
          ],
          examples: [
            "Matin : rédaction ou résolution de problèmes complexes.",
            "Après-midi : réunions et tâches administratives.",
            "Fin de journée : classement, préparation du lendemain et tâches simples."
          ],
          practice: [
            "Pendant une semaine, note ton niveau d'énergie à différents moments de la journée.",
            "Identifie ta meilleure période de concentration.",
            "Réserve cette période à une tâche importante."
          ],
          quiz: [
            {
              question:
                "Pourquoi est-il utile d'adapter les tâches à son niveau d'énergie ?",
              options: [
                "Parce que toutes les tâches demandent exactement la même énergie.",
                "Parce que certaines tâches nécessitent davantage de concentration que d'autres.",
                "Parce qu'il faut toujours travailler le matin.",
                "Parce que les pauses empêchent toute productivité."
              ],
              answer: 1,
              explanation:
                "Les tâches complexes demandent généralement davantage d'attention. Les placer pendant les périodes où l'on est le plus concentré peut améliorer l'efficacité."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Gérer les Emails, Réunions et Interruptions",
      lessons: [
        {
          slug: "gestion-emails",
          title: "7.1 Gérer efficacement ses emails et messages",
          duration: "15 min",
          description:
            "Évite que les emails et messages dictent toute ta journée.",
          objectives: [
            "Réduire la consultation compulsive des messages.",
            "Traiter les messages selon leur importance.",
            "Utiliser des créneaux de communication."
          ],
          content: [
            "## Les messages ne doivent pas toujours être traités immédiatement",
            "Toutes les notifications ne représentent pas une urgence.",
            "Une bonne organisation consiste à distinguer les véritables urgences des demandes pouvant être traitées plus tard.",
            "## Regrouper la communication",
            "Plutôt que de consulter les messages en continu, définis des créneaux adaptés à ton activité.",
            "## Répondre simplement",
            "Une réponse claire et courte est souvent préférable à une longue discussion lorsque le sujet est simple.",
            "## Transformer les messages en actions",
            "Si un email contient une tâche importante, transforme-le en action dans ta liste de tâches ou ton système de suivi.",
            "Cela évite de garder constamment la demande en mémoire."
          ],
          examples: [
            "9h00 : travail concentré.",
            "11h00 : traitement des messages.",
            "14h00 : deuxième créneau de communication.",
            "16h30 : dernière vérification."
          ],
          practice: [
            "Désactive les notifications non essentielles pendant une période de concentration.",
            "Définis deux ou trois créneaux de consultation des messages.",
            "Observe si ton niveau de concentration augmente."
          ],
          quiz: [
            {
              question:
                "Pourquoi transformer une demande reçue par email en tâche peut-il être utile ?",
              options: [
                "Pour recevoir encore plus de notifications.",
                "Pour libérer la mémoire mentale et suivre clairement l'action à réaliser.",
                "Pour éviter toute organisation.",
                "Pour répondre systématiquement immédiatement."
              ],
              answer: 1,
              explanation:
                "Externaliser les tâches dans un système de suivi permet de ne pas dépendre uniquement de sa mémoire."
            }
          ]
        },
        {
          slug: "reunions-efficaces",
          title: "7.2 Organiser des réunions efficaces",
          duration: "15 min",
          description:
            "Apprends à réduire les réunions inutiles et à rendre les réunions nécessaires plus productives.",
          objectives: [
            "Déterminer si une réunion est réellement nécessaire.",
            "Définir un objectif clair.",
            "Préparer un ordre du jour.",
            "Terminer avec des actions concrètes."
          ],
          content: [
            "## Une réunion doit avoir une raison",
            "Avant d'organiser une réunion, demande-toi si l'objectif pourrait être atteint plus simplement par un message, un document ou une décision asynchrone.",
            "## Définir un objectif",
            "Une réunion peut servir à décider, résoudre un problème, partager une information importante ou coordonner plusieurs personnes.",
            "## Préparer un ordre du jour",
            "Les participants doivent savoir pourquoi ils sont présents et ce qui doit être obtenu à la fin.",
            "## Finir avec des actions",
            "Chaque décision importante devrait avoir un responsable et, lorsque nécessaire, une échéance.",
            "## Exemple",
            "Mauvais objectif : « discuter du projet ».",
            "Meilleur objectif : « choisir entre les deux solutions techniques proposées et désigner la personne responsable de l'implémentation »."
          ],
          examples: [
            "Réunion sans objectif → discussion longue et décisions floues.",
            "Réunion avec objectif + ordre du jour → discussion structurée et décisions plus rapides."
          ],
          practice: [
            "Pour ta prochaine réunion, écris l'objectif en une phrase.",
            "Ajoute trois points maximum à l'ordre du jour.",
            "Termine la réunion avec une liste d'actions."
          ],
          quiz: [
            {
              question:
                "Quel élément est particulièrement important à la fin d'une réunion ?",
              options: [
                "Ajouter de nouveaux sujets sans décision.",
                "Définir les actions et responsabilités.",
                "Prolonger systématiquement la réunion.",
                "Inviter davantage de personnes."
              ],
              answer: 1,
              explanation:
                "Une réunion utile doit idéalement produire des décisions ou des actions clairement identifiées."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Construire un Système de Productivité Durable",
      lessons: [
        {
          slug: "systeme-productivite",
          title: "8.1 Construire son propre système de productivité",
          duration: "20 min",
          description:
            "Assemble les méthodes du cours pour créer un système simple adapté à ta réalité.",
          objectives: [
            "Construire un système personnel de gestion du temps.",
            "Combiner priorités, planification et concentration.",
            "Éviter de multiplier inutilement les outils.",
            "Créer une routine hebdomadaire durable."
          ],
          content: [
            "## Un système simple",
            "Un bon système de productivité n'a pas besoin d'être compliqué.",
            "Tu peux commencer avec quatre éléments : une liste de tâches, un calendrier, une méthode de priorisation et une routine de revue.",
            "## Étape 1 : capturer",
            "Note les tâches et idées importantes dans un endroit fiable au lieu de compter uniquement sur ta mémoire.",
            "## Étape 2 : clarifier",
            "Transforme les idées vagues en actions concrètes.",
            "« Projet marketing » n'est pas une action. « Rédiger le plan de la campagne » en est une.",
            "## Étape 3 : prioriser",
            "Utilise la matrice d'Eisenhower ou une autre méthode adaptée à ton contexte.",
            "## Étape 4 : planifier",
            "Réserve du temps pour les tâches importantes.",
            "## Étape 5 : exécuter",
            "Utilise des blocs de concentration, Pomodoro ou une autre méthode adaptée.",
            "## Étape 6 : revoir",
            "À la fin de la semaine, examine ce qui a fonctionné et ce qui doit être amélioré.",
            "## Le système doit rester réaliste",
            "Si ton système nécessite trente règles et dix applications différentes, il risque de devenir une charge supplémentaire.",
            "Commence petit et améliore progressivement."
          ],
          examples: [
            "Liste de tâches → capturer les actions.",
            "Eisenhower → choisir les priorités.",
            "Calendrier → réserver du temps.",
            "Pomodoro → protéger la concentration.",
            "Revue hebdomadaire → améliorer le système."
          ],
          practice: [
            "Choisis un seul endroit pour gérer tes tâches.",
            "Crée trois priorités pour la semaine.",
            "Bloque au moins deux périodes de concentration.",
            "Planifie une revue de 15 minutes en fin de semaine."
          ],
          quiz: [
            {
              question:
                "Quel est l'objectif principal d'un système personnel de productivité ?",
              options: [
                "Ajouter le plus grand nombre possible d'outils.",
                "Travailler constamment.",
                "Créer une manière fiable de choisir, planifier et réaliser ses priorités.",
                "Éliminer toutes les pauses."
              ],
              answer: 2,
              explanation:
                "Un système de productivité doit surtout aider à décider quoi faire, quand le faire et comment suivre ses progrès."
            }
          ]
        },
        {
          slug: "revue-hebdomadaire",
          title: "8.2 La revue hebdomadaire",
          duration: "15 min",
          description:
            "Apprends à analyser ta semaine afin d'améliorer progressivement ton organisation.",
          objectives: [
            "Faire le bilan d'une semaine.",
            "Identifier les tâches reportées.",
            "Comprendre les causes des retards.",
            "Améliorer son système semaine après semaine."
          ],
          content: [
            "## Pourquoi faire une revue ?",
            "Sans retour d'expérience, on risque de répéter les mêmes erreurs d'organisation.",
            "La revue hebdomadaire permet de prendre du recul sur son fonctionnement.",
            "## Questions à se poser",
            "- Qu'est-ce qui a été accompli ?",
            "- Quelles tâches ont été reportées ?",
            "- Pourquoi ont-elles été reportées ?",
            "- Quelles interruptions ont eu le plus d'impact ?",
            "- Qu'est-ce qui a particulièrement bien fonctionné ?",
            "- Quelle amélioration vais-je tester la semaine prochaine ?",
            "## Ne pas transformer la revue en jugement",
            "Le but n'est pas de se reprocher les tâches non réalisées.",
            "Le but est de comprendre le système et d'identifier les améliorations possibles.",
            "## Exemple",
            "Tu constates que trois tâches importantes ont été reportées parce que ton agenda était trop chargé.",
            "La solution peut être de réduire le nombre de priorités planifiées plutôt que de travailler systématiquement plus longtemps."
          ],
          examples: [
            "Problème : trop de tâches planifiées.",
            "Cause : absence de marge dans l'agenda.",
            "Amélioration : réduire le nombre de priorités et conserver des espaces libres."
          ],
          practice: [
            "Fais une revue de ta dernière semaine.",
            "Identifie une chose à arrêter.",
            "Identifie une chose à continuer.",
            "Identifie une chose à tester la semaine prochaine."
          ],
          quiz: [
            {
              question:
                "Quel est le principal objectif d'une revue hebdomadaire ?",
              options: [
                "Se reprocher toutes les tâches non terminées.",
                "Ajouter davantage de tâches.",
                "Analyser son fonctionnement et améliorer son système.",
                "Supprimer toutes les pauses."
              ],
              answer: 2,
              explanation:
                "La revue sert à apprendre de la semaine passée et à améliorer l'organisation future."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Mise en Pratique",
      lessons: [
        {
          slug: "journee-productive",
          title: "9.1 Construire une journée productive",
          duration: "20 min",
          description:
            "Mets en pratique les différentes méthodes pour construire une journée réaliste et équilibrée.",
          objectives: [
            "Construire une journée autour de priorités réelles.",
            "Combiner concentration, communication et pauses.",
            "Éviter la surcharge.",
            "Adapter le planning aux imprévus."
          ],
          content: [
            "## Étape 1 : choisir les priorités",
            "Commence par identifier les tâches qui auront le plus d'impact.",
            "## Étape 2 : placer le travail profond",
            "Réserve tes meilleures périodes de concentration aux tâches importantes et complexes.",
            "## Étape 3 : regrouper la communication",
            "Prévois des créneaux pour les emails, appels et messages.",
            "## Étape 4 : prévoir des pauses",
            "Les pauses font partie de l'organisation et permettent de préserver l'attention.",
            "## Étape 5 : conserver une marge",
            "Ne planifie pas chaque minute. Les imprévus font partie de la vie professionnelle et personnelle.",
            "## Exemple de journée",
            "08h30 → planification et définition des priorités.",
            "09h00 → bloc de concentration.",
            "10h30 → pause.",
            "10h45 → deuxième bloc de concentration.",
            "12h00 → communication et tâches légères.",
            "14h00 → réunion ou collaboration.",
            "15h30 → deuxième période de travail concentré.",
            "17h00 → revue et préparation du lendemain.",
            "Ce planning n'est pas une règle universelle. Il doit être adapté à la réalité de chacun."
          ],
          examples: [
            "Étudiant : période de concentration pour les matières difficiles, puis exercices et révisions.",
            "Développeur : bloc de développement, puis revue de code et communication.",
            "Manager : périodes de travail stratégique séparées des réunions."
          ],
          practice: [
            "Construis ton planning pour demain.",
            "Identifie trois priorités maximum.",
            "Réserve au moins une période de concentration.",
            "Prévois une marge pour les imprévus.",
            "À la fin de la journée, compare le plan avec la réalité."
          ],
          quiz: [
            {
              question:
                "Quel est un bon principe pour construire une journée productive ?",
              options: [
                "Planifier chaque minute.",
                "Commencer par les tâches qui ont le plus d'impact.",
                "Répondre d'abord à toutes les notifications.",
                "Éviter toute pause."
              ],
              answer: 1,
              explanation:
                "Commencer par les priorités importantes permet de consacrer son énergie aux activités qui créent le plus de valeur."
            }
          ]
        },
        {
          slug: "projet-final-productivite",
          title: "9.2 Projet final : créer son système personnel",
          duration: "25 min",
          description:
            "Construis ton propre système de gestion du temps et teste-le pendant une semaine.",
          objectives: [
            "Créer un système personnel complet.",
            "Appliquer plusieurs méthodes vues dans le cours.",
            "Mesurer les résultats.",
            "Améliorer son organisation à partir de l'expérience."
          ],
          content: [
            "## Ton projet final",
            "Tu vas créer un système personnel de productivité que tu utiliseras pendant une semaine.",
            "## Étape 1 : définir trois objectifs",
            "Choisis trois résultats importants pour la semaine.",
            "## Étape 2 : identifier les priorités",
            "Utilise la matrice d'Eisenhower pour distinguer les tâches urgentes et importantes.",
            "## Étape 3 : planifier",
            "Place les tâches importantes dans ton calendrier.",
            "## Étape 4 : protéger la concentration",
            "Programme au moins deux périodes de travail profond.",
            "## Étape 5 : réduire une distraction",
            "Choisis une distraction et mets en place une règle pour la limiter.",
            "## Étape 6 : faire une revue",
            "À la fin de la semaine, mesure ce qui a été réalisé et identifie les améliorations nécessaires.",
            "## Critères de réussite",
            "- Les objectifs sont clairement définis.",
            "- Les priorités sont identifiées.",
            "- Les tâches importantes sont planifiées.",
            "- Les distractions sont limitées.",
            "- Une revue est réalisée.",
            "- Le système est suffisamment simple pour être maintenu."
          ],
          examples: [
            "Objectif 1 : terminer une fonctionnalité importante.",
            "Objectif 2 : étudier quatre chapitres.",
            "Objectif 3 : préparer une présentation.",
            "Système : Eisenhower + calendrier + blocs de concentration + revue hebdomadaire."
          ],
          practice: [
            "Construis ton système.",
            "Utilise-le pendant sept jours.",
            "Note les résultats obtenus.",
            "Identifie au moins une amélioration à apporter.",
            "Présente ton système en quelques paragraphes."
          ],
          quiz: [
            {
              question:
                "Quel est le meilleur indicateur qu'un système de productivité fonctionne ?",
              options: [
                "Il contient beaucoup de règles.",
                "Il utilise beaucoup d'applications.",
                "Il permet régulièrement d'avancer sur les priorités importantes.",
                "Il remplit complètement l'agenda."
              ],
              answer: 2,
              explanation:
                "Un bon système doit produire des résultats utiles et rester suffisamment simple pour être utilisé durablement."
            }
          ]
        }
      ]
    }
  ]
};

export const timeManagementExamQuestions: ExamQuestion[] = [
  {
    question:
      "Quelle est la différence fondamentale entre être occupé et être productif ?",
    options: [
      "Être occupé signifie toujours être productif.",
      "Être productif signifie consacrer son temps aux activités qui ont le plus de valeur.",
      "Être productif signifie travailler sans pause.",
      "Être occupé signifie travailler sur les priorités."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Dans la matrice d'Eisenhower, que faut-il généralement faire avec une tâche importante mais non urgente ?",
    options: [
      "La supprimer.",
      "La déléguer systématiquement.",
      "La planifier.",
      "L'ignorer."
    ],
    correctAnswer: 2
  },
  {
    question: "Quel est le principe de base de la méthode Pomodoro ?",
    options: [
      "Travailler sans interruption toute la journée.",
      "Alterner des périodes de concentration et des pauses.",
      "Faire plusieurs tâches simultanément.",
      "Consulter ses messages pendant les périodes de travail."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi les tâches importantes mais non urgentes sont-elles particulièrement importantes ?",
    options: [
      "Elles sont toujours faciles.",
      "Elles permettent souvent de progresser vers ses objectifs et de prévenir certaines crises.",
      "Elles doivent toujours être déléguées.",
      "Elles n'ont aucune échéance."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle stratégie peut aider à lutter contre la procrastination ?",
    options: [
      "Attendre d'avoir parfaitement envie de travailler.",
      "Rendre la première action très petite et concrète.",
      "Ajouter davantage de tâches.",
      "Éviter complètement la tâche."
    ],
    correctAnswer: 1
  },
  {
    question: "Quel est l'un des avantages d'un objectif SMART ?",
    options: [
      "Il reste volontairement vague.",
      "Il permet de définir clairement ce qui doit être réalisé et suivi.",
      "Il élimine tous les imprévus.",
      "Il garantit automatiquement le succès."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi faut-il éviter de remplir son agenda à 100 % ?",
    options: [
      "Parce que les imprévus et interruptions existent.",
      "Parce qu'il ne faut jamais planifier.",
      "Parce que les priorités ne doivent pas être programmées.",
      "Parce qu'un agenda vide est toujours plus productif."
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel comportement favorise généralement une meilleure concentration ?",
    options: [
      "Consulter les notifications en permanence.",
      "Changer constamment de tâche.",
      "Protéger des périodes dédiées à une tâche importante.",
      "Garder toutes les applications ouvertes."
    ],
    correctAnswer: 2
  },
  {
    question:
      "Pourquoi est-il utile de regrouper certaines tâches similaires ?",
    options: [
      "Pour multiplier les interruptions.",
      "Pour réduire les changements fréquents de contexte.",
      "Pour éviter toute planification.",
      "Pour augmenter le nombre de réunions."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel est le rôle principal d'une revue hebdomadaire ?",
    options: [
      "Se reprocher les tâches non terminées.",
      "Ajouter davantage de tâches.",
      "Analyser son organisation et améliorer son système.",
      "Supprimer les pauses."
    ],
    correctAnswer: 2
  },
  {
    question:
      "Que signifie généralement le principe de Pareto dans un contexte de productivité ?",
    options: [
      "Toutes les tâches ont exactement la même valeur.",
      "Certaines activités peuvent produire une part disproportionnée des résultats.",
      "Il faut supprimer exactement 80 % de ses tâches.",
      "Il faut travailler seulement 20 % du temps."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle approche est la plus adaptée à une grande tâche qui provoque de la procrastination ?",
    options: [
      "La laisser volontairement vague.",
      "La découper en actions plus petites et concrètes.",
      "Ajouter d'autres tâches.",
      "Attendre la dernière minute."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pourquoi faut-il adapter son système de productivité à son propre niveau d'énergie ?",
    options: [
      "Parce que tout le monde est plus productif le matin.",
      "Parce que certaines périodes sont plus favorables à la concentration que d'autres.",
      "Parce que les pauses sont inutiles.",
      "Parce qu'il faut travailler plus longtemps."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle information devrait idéalement être claire avant une réunion ?",
    options: [
      "Le nombre maximal de participants.",
      "L'objectif de la réunion.",
      "La durée maximale de la journée.",
      "Le nombre de messages reçus."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel est le meilleur signe qu'un système de productivité est durable ?",
    options: [
      "Il possède beaucoup de règles.",
      "Il utilise de nombreuses applications.",
      "Il reste simple et permet régulièrement d'avancer sur les priorités importantes.",
      "Il remplit chaque minute de la journée."
    ],
    correctAnswer: 2
  }
];