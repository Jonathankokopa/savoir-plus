import type { CourseDetail, ExamQuestion } from "../coursesData";

export const communicationProfCourse: CourseDetail = {
  slug: "communication-professionnelle",
  categorySlug: "soft-skills",
  title: "Communication Professionnelle & Écoute Active",
  description:
    "Apprends à communiquer avec clarté et assurance, écouter activement, donner et recevoir du feedback, gérer les désaccords, améliorer tes écrits professionnels et adapter ton message à différents interlocuteurs.",
  level: "Débutant",
  icon: "🗣️",
  modules: [
    {
      title: "Module 1: Comprendre la Communication",
      lessons: [
        {
          slug: "fondamentaux-communication",
          title: "1.1 Les fondamentaux de la communication",
          duration: "16 min",
          description:
            "Comprends comment fonctionne la communication et pourquoi un message peut être mal compris malgré de bonnes intentions.",
          objectives: [
            "Comprendre les principaux éléments d'une communication.",
            "Identifier les causes courantes des malentendus.",
            "Distinguer intention, message et interprétation.",
            "Adapter sa communication au contexte."
          ],
          content: [
            "## Qu'est-ce que communiquer ?",
            "Communiquer consiste à transmettre et à recevoir des informations, des idées, des émotions ou des intentions.",
            "La communication ne consiste cependant pas uniquement à parler. Elle implique également l'écoute, l'interprétation et le contexte.",
            "## Le modèle de communication",
            "Une communication peut être comprise à travers plusieurs éléments : un émetteur, un message, un canal, un récepteur et un contexte.",
            "L'émetteur formule une information. Le message est transmis par un canal, puis interprété par le récepteur.",
            "## L'intention n'est pas toujours l'impact",
            "Une personne peut avoir une intention positive mais produire un impact négatif.",
            "Par exemple, dire à un collègue « Tu devrais faire mieux » peut être présenté comme une volonté d'aider, mais être interprété comme une critique vague et décourageante.",
            "## Le contexte",
            "Le même message peut être perçu différemment selon le moment, la relation entre les personnes, le canal utilisé et la situation.",
            "Un commentaire informel dans une conversation privée n'a pas nécessairement le même effet lorsqu'il est formulé devant toute une équipe.",
            "## Les obstacles à la communication",
            "- Les suppositions.",
            "- Les émotions fortes.",
            "- Le manque d'écoute.",
            "- Les messages trop vagues.",
            "- Le jargon inutile.",
            "- Les différences culturelles ou professionnelles.",
            "- Les interruptions.",
            "- La communication uniquement par écrit lorsque le sujet nécessite une discussion.",
            "## Principe essentiel",
            "Une communication efficace ne consiste pas simplement à dire ce que l'on pense. Il faut aussi vérifier que le message a été compris comme prévu."
          ],
          examples: [
            "Un manager dit « Fais-moi ça rapidement ». L'employé ne sait pas si « rapidement » signifie dans une heure, aujourd'hui ou cette semaine.",
            "Un développeur écrit « C'est cassé » dans un message. Une communication plus utile préciserait le problème, son impact et l'action attendue."
          ],
          practice: [
            "Choisis un message professionnel que tu as récemment envoyé.",
            "Demande-toi s'il était suffisamment précis.",
            "Réécris-le en indiquant clairement le contexte, l'action attendue et, si nécessaire, l'échéance."
          ],
          quiz: [
            {
              question:
                "Pourquoi l'intention d'une personne ne suffit-elle pas à garantir une bonne communication ?",
              options: [
                "Parce que le récepteur peut interpréter le message différemment.",
                "Parce que les messages ne peuvent jamais être compris.",
                "Parce qu'il faut toujours parler très longtemps.",
                "Parce que la communication ne dépend que du langage corporel."
              ],
              answer: 0,
              explanation:
                "L'intention et l'impact peuvent être différents. La compréhension dépend notamment du contexte, du message et de l'interprétation du récepteur."
            }
          ]
        },
        {
          slug: "communication-verbale-non-verbale",
          title: "1.2 Communication verbale et non verbale",
          duration: "15 min",
          description:
            "Découvre comment les mots, le ton, la posture et les expressions influencent la manière dont ton message est perçu.",
          objectives: [
            "Comprendre les dimensions verbales et non verbales.",
            "Identifier les incohérences entre paroles et comportement.",
            "Améliorer sa présence lors d'une conversation."
          ],
          content: [
            "## Communication verbale",
            "La communication verbale concerne les mots utilisés pour transmettre un message.",
            "La précision du vocabulaire, la structure des phrases et le niveau de détail influencent la compréhension.",
            "## Communication non verbale",
            "Elle comprend notamment la posture, les gestes, les expressions faciales, le regard, la distance et certains aspects de la voix.",
            "## Le ton",
            "Les mêmes mots peuvent produire des effets différents selon le ton employé.",
            "Un « Très bien » peut exprimer une satisfaction réelle, une neutralité ou une irritation selon le contexte et la manière dont il est prononcé.",
            "## Cohérence",
            "Lorsque les mots et les comportements semblent contradictoires, le récepteur peut devenir incertain sur le véritable message.",
            "## Communication à distance",
            "Dans un email ou un message écrit, une grande partie des indices non verbaux disparaît. Il devient donc encore plus important d'être clair et explicite.",
            "## Conseil pratique",
            "Pour les conversations importantes, privilégie une présence attentive : regarde ton interlocuteur de manière naturelle, évite les distractions et laisse suffisamment d'espace pour qu'il puisse répondre."
          ],
          examples: [
            "Dire « Je t'écoute » tout en regardant son téléphone crée une contradiction entre les mots et le comportement.",
            "Un message écrit très court peut sembler froid alors que son auteur n'avait aucune intention négative."
          ],
          practice: [
            "Lors de ta prochaine conversation, observe consciemment ton niveau d'attention.",
            "Évite les distractions pendant cinq minutes.",
            "Observe comment ton interlocuteur réagit lorsque tu lui accordes toute ton attention."
          ],
          quiz: [
            {
              question:
                "Quel comportement peut nuire à une communication importante ?",
              options: [
                "Écouter sans distraction.",
                "Prendre des notes.",
                "Regarder régulièrement son téléphone pendant que l'autre parle.",
                "Poser une question de clarification."
              ],
              answer: 2,
              explanation:
                "Les distractions donnent à l'interlocuteur le sentiment qu'il n'est pas réellement écouté."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: L'Écoute Active",
      lessons: [
        {
          slug: "principes-ecoute-active",
          title: "2.1 Les principes de l'écoute active",
          duration: "18 min",
          description:
            "Apprends à écouter pour comprendre plutôt que simplement attendre ton tour de parole.",
          objectives: [
            "Comprendre les principes de l'écoute active.",
            "Éviter les interruptions inutiles.",
            "Utiliser les questions de clarification.",
            "Montrer à son interlocuteur que son message a été compris."
          ],
          content: [
            "## Écouter n'est pas simplement entendre",
            "Entendre signifie percevoir des sons. Écouter implique de chercher activement à comprendre ce que l'autre communique.",
            "## Les comportements d'une écoute active",
            "- Accorder son attention à l'interlocuteur.",
            "- Éviter d'interrompre inutilement.",
            "- Poser des questions pertinentes.",
            "- Reformuler les éléments importants.",
            "- Vérifier les points ambigus.",
            "- Observer les émotions exprimées.",
            "## Éviter de préparer immédiatement sa réponse",
            "Une erreur fréquente consiste à préparer sa réponse pendant que l'autre parle.",
            "Dans ce cas, une partie de notre attention est consacrée à notre propre réaction plutôt qu'à la compréhension du message.",
            "## Les questions de clarification",
            "Une bonne question peut éviter de nombreuses erreurs.",
            "Exemples : « Quand tu dis que le projet est bloqué, quel est précisément le problème ? » ou « Quelle partie doit être corrigée en priorité ? »",
            "## Reformuler",
            "La reformulation consiste à reprendre l'idée principale avec ses propres mots pour vérifier la compréhension.",
            "Exemple : « Si je comprends bien, le problème principal n'est pas le délai mais le manque d'informations, c'est bien cela ? »",
            "## Écouter les faits et les besoins",
            "Dans une conversation professionnelle, il est utile d'écouter à la fois ce qui est dit explicitement et ce qui semble être le besoin derrière la demande."
          ],
          examples: [
            "Collègue : « Le projet devient vraiment compliqué. »",
            "Mauvaise réaction : « Oui, moi aussi j'ai beaucoup de travail. »",
            "Meilleure réaction : « Qu'est-ce qui rend le projet particulièrement difficile en ce moment ? »"
          ],
          practice: [
            "Lors d'une conversation, ne coupe pas la parole pendant quelques minutes.",
            "Pose au moins une question de clarification.",
            "Reformule ensuite l'idée principale de ton interlocuteur."
          ],
          quiz: [
            {
              question: "Quelle attitude caractérise le mieux l'écoute active ?",
              options: [
                "Préparer sa réponse pendant que l'autre parle.",
                "Attendre simplement que l'autre ait fini.",
                "Chercher à comprendre, poser des questions et reformuler.",
                "Interrompre pour raconter une expérience personnelle."
              ],
              answer: 2,
              explanation:
                "L'écoute active implique une participation attentive : compréhension, questions, reformulation et présence."
            }
          ]
        },
        {
          slug: "reformulation-questions",
          title: "2.2 Reformuler et poser de bonnes questions",
          duration: "17 min",
          description:
            "Découvre comment utiliser les questions ouvertes et la reformulation pour obtenir une compréhension plus précise.",
          objectives: [
            "Distinguer questions ouvertes et fermées.",
            "Utiliser la reformulation.",
            "Éviter les questions accusatrices.",
            "Obtenir les informations nécessaires avant d'agir."
          ],
          content: [
            "## Les questions ouvertes",
            "Les questions ouvertes permettent généralement à l'interlocuteur de développer sa réponse.",
            "Exemples : « Qu'est-ce qui s'est passé ? », « Comment pouvons-nous améliorer cette situation ? », « De quoi as-tu besoin ? »",
            "## Les questions fermées",
            "Elles permettent souvent d'obtenir une réponse courte ou précise.",
            "Exemple : « La réunion est-elle prévue à 14h ? »",
            "Les deux types de questions sont utiles selon le contexte.",
            "## Reformulation simple",
            "La reformulation permet de vérifier que tu as compris sans nécessairement être d'accord avec l'interlocuteur.",
            "« Si je comprends bien, tu proposes de repousser la livraison parce que les tests ne sont pas terminés. »",
            "## Éviter les questions accusatrices",
            "« Pourquoi tu n'as pas fait ton travail ? » peut provoquer une réaction défensive.",
            "Une formulation plus constructive serait : « Qu'est-ce qui a empêché la tâche d'être terminée ? »",
            "## Le but",
            "Une bonne question ne sert pas uniquement à obtenir une information. Elle peut également aider l'interlocuteur à clarifier lui-même son problème."
          ],
          examples: [
            "Accusateur : « Pourquoi tu as encore oublié ? »",
            "Constructif : « Qu'est-ce qui pourrait nous aider à éviter que cela se reproduise ? »",
            "Question vague : « Tout va bien ? »",
            "Question plus précise : « Y a-t-il un obstacle particulier qui ralentit actuellement le projet ? »"
          ],
          practice: [
            "Transforme cinq questions accusatrices en questions constructives.",
            "Prépare trois questions ouvertes que tu pourrais utiliser lors d'une réunion.",
            "Pratique une reformulation pendant une conversation."
          ],
          quiz: [
            {
              question:
                "Quelle question favorise généralement une réponse détaillée ?",
              options: [
                "Est-ce terminé ?",
                "Oui ou non ?",
                "Qu'est-ce qui bloque actuellement le projet ?",
                "Tu as compris ?"
              ],
              answer: 2,
              explanation:
                "Une question ouverte invite l'interlocuteur à expliquer sa situation plutôt qu'à répondre simplement par oui ou non."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Assertivité et Communication Non-Violente",
      lessons: [
        {
          slug: "assertivite",
          title: "3.1 Développer son assertivité",
          duration: "18 min",
          description:
            "Apprends à exprimer tes opinions, besoins et limites avec fermeté tout en respectant les autres.",
          objectives: [
            "Comprendre l'assertivité.",
            "Distinguer communication passive, agressive et assertive.",
            "Exprimer un désaccord avec respect.",
            "Dire non de manière professionnelle."
          ],
          content: [
            "## Qu'est-ce que l'assertivité ?",
            "L'assertivité consiste à exprimer clairement ses idées, besoins, opinions ou limites tout en respectant les droits et la dignité des autres.",
            "## Communication passive",
            "Une personne passive peut avoir tendance à ne pas exprimer ses besoins ou à accepter systématiquement des demandes qu'elle ne peut pas réellement assumer.",
            "## Communication agressive",
            "Une personne agressive cherche souvent à imposer son point de vue au détriment de l'autre.",
            "## Communication assertive",
            "L'assertivité cherche un équilibre : être clair et ferme sans humilier, menacer ou attaquer.",
            "## Dire non",
            "Dire non professionnellement ne nécessite pas une longue justification.",
            "Exemple : « Je ne pourrai pas terminer cette tâche aujourd'hui sans repousser la priorité actuelle. Je peux la prendre demain matin. »",
            "## Exprimer un désaccord",
            "Commence par reconnaître les faits ou l'objectif commun, puis explique ton point de vue.",
            "Exemple : « Je comprends l'objectif. Je pense cependant que cette approche comporte un risque sur le délai. Je propose que nous testions d'abord la solution sur une petite partie du projet. »"
          ],
          examples: [
            "Passif : « Peu importe, fais comme tu veux. »",
            "Agressif : « Ton idée est complètement mauvaise. »",
            "Assertif : « Je comprends ton idée, mais j'ai une réserve concernant le délai. Voici une alternative. »"
          ],
          practice: [
            "Identifie une situation dans laquelle tu as du mal à dire non.",
            "Formule une réponse assertive.",
            "Entraîne-toi à l'exprimer sans agressivité ni excuses excessives."
          ],
          quiz: [
            {
              question: "Que signifie être assertif ?",
              options: [
                "S'imposer par la force.",
                "Accepter toutes les demandes.",
                "Exprimer clairement ses besoins et opinions tout en respectant les autres.",
                "Éviter les désaccords."
              ],
              answer: 2,
              explanation:
                "L'assertivité permet d'être clair et ferme sans devenir agressif ni abandonner systématiquement ses propres besoins."
            }
          ]
        },
        {
          slug: "communication-non-violente",
          title: "3.2 La Communication Non-Violente avec OSBD",
          duration: "20 min",
          description:
            "Utilise une structure simple pour exprimer un problème, un ressenti, un besoin et une demande concrète.",
          objectives: [
            "Comprendre les quatre étapes OSBD.",
            "Exprimer un problème sans jugement.",
            "Formuler une demande concrète.",
            "Utiliser la CNV dans les situations professionnelles."
          ],
          content: [
            "## Les quatre étapes OSBD",
            "La structure OSBD signifie Observation, Sentiment, Besoin et Demande.",
            "### 1. Observation",
            "Décris les faits observables sans exagération ni jugement.",
            "Au lieu de « Tu es toujours en retard », indique le fait : « Les trois dernières réunions ont commencé environ dix minutes après l'heure prévue. »",
            "### 2. Sentiment",
            "Exprime ton ressenti sans transformer celui-ci en accusation.",
            "Exemple : « Cela me met sous pression parce que mon planning devient difficile à tenir. »",
            "### 3. Besoin",
            "Identifie ce qui est important pour toi dans cette situation.",
            "Exemple : « J'ai besoin de pouvoir organiser mes autres tâches avec un horaire fiable. »",
            "### 4. Demande",
            "Formule une demande précise et réalisable.",
            "Exemple : « Pourrions-nous commencer à l'heure prévue ou prévenir l'équipe lorsqu'un retard est inévitable ? »",
            "## Pourquoi cette méthode est utile ?",
            "Elle permet de déplacer la conversation d'une attaque personnelle vers une situation concrète et une recherche de solution."
          ],
          examples: [
            "Jugement : « Tu ne respectes jamais les délais. »",
            "OSBD : « Le rapport prévu vendredi n'a pas été livré. Je suis inquiet parce que cela bloque l'étape suivante. J'ai besoin d'une visibilité sur le planning. Peux-tu me confirmer quand la nouvelle version sera disponible ? »"
          ],
          practice: [
            "Choisis un conflit professionnel fictif.",
            "Décris les faits sans jugement.",
            "Exprime ton ressenti.",
            "Identifie ton besoin.",
            "Formule une demande concrète."
          ],
          quiz: [
            {
              question: "Dans la méthode OSBD, que représente le D ?",
              options: [
                "Décision",
                "Discussion",
                "Demande",
                "Désaccord"
              ],
              answer: 2,
              explanation:
                "Le D correspond à la Demande : une action concrète et réalisable que l'on propose à l'autre."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Donner et Recevoir du Feedback",
      lessons: [
        {
          slug: "feedback-constructif",
          title: "4.1 Donner un feedback constructif",
          duration: "18 min",
          description:
            "Apprends à faire des retours utiles qui permettent à une personne de comprendre ce qui fonctionne et ce qui doit être amélioré.",
          objectives: [
            "Distinguer critique et feedback constructif.",
            "Décrire des comportements observables.",
            "Formuler une amélioration concrète.",
            "Choisir le bon moment pour donner un feedback."
          ],
          content: [
            "## Le rôle du feedback",
            "Un feedback utile fournit des informations qui permettent à une personne de comprendre l'effet de son comportement ou de son travail.",
            "## Critiquer une personne vs décrire un comportement",
            "« Tu es désorganisé » attaque une caractéristique globale de la personne.",
            "« Le document ne contient pas les informations demandées dans la section 3 » décrit un élément observable.",
            "## Un bon feedback",
            "Un feedback professionnel doit être suffisamment spécifique pour permettre une action.",
            "Il peut expliquer ce qui fonctionne, ce qui pose problème et ce qui pourrait être fait différemment.",
            "## Le modèle SBI",
            "Une structure courante consiste à parler de la Situation, du Behavior (comportement) et de l'Impact.",
            "Situation : « Lors de la présentation de mardi... »",
            "Comportement : « tu as répondu aux questions avant de laisser les autres membres terminer leur explication... »",
            "Impact : « cela a rendu la discussion plus difficile à suivre. »",
            "## Le feedback doit être proportionné",
            "Toutes les erreurs ne nécessitent pas une longue discussion. Adapte le niveau de détail à l'importance du sujet."
          ],
          examples: [
            "Vague : « Ta présentation n'était pas bonne. »",
            "Constructif : « Pendant la présentation, plusieurs diapositives contenaient beaucoup de texte. Cela rendait les points principaux difficiles à identifier. Tu pourrais réduire le contenu et mettre davantage en avant les messages clés. »"
          ],
          practice: [
            "Choisis un comportement professionnel fictif à améliorer.",
            "Décris la situation.",
            "Décris le comportement observable.",
            "Explique son impact.",
            "Propose une piste d'amélioration."
          ],
          quiz: [
            {
              question:
                "Quel feedback est le plus constructif ?",
              options: [
                "« Tu es mauvais en présentation. »",
                "« Tu n'es jamais sérieux. »",
                "« Pendant la présentation, plusieurs idées importantes étaient difficiles à identifier. Réduire le texte pourrait améliorer la clarté. »",
                "« Tout était mauvais. »"
              ],
              answer: 2,
              explanation:
                "Le feedback constructif décrit un comportement ou un résultat observable et fournit une piste d'amélioration."
            }
          ]
        },
        {
          slug: "recevoir-feedback",
          title: "4.2 Recevoir un feedback sans se fermer",
          duration: "15 min",
          description:
            "Apprends à recevoir les remarques professionnelles avec ouverture et à transformer les critiques utiles en actions.",
          objectives: [
            "Écouter un feedback sans réagir immédiatement.",
            "Demander des exemples précis.",
            "Distinguer une remarque utile d'une attaque personnelle.",
            "Transformer un feedback en action."
          ],
          content: [
            "## Pourquoi recevoir un feedback peut être difficile",
            "Une remarque sur notre travail peut être interprétée comme une remise en question personnelle.",
            "Pourtant, un feedback porte idéalement sur un comportement, un résultat ou une situation précise.",
            "## Première étape : écouter",
            "Évite de préparer immédiatement une justification.",
            "Demande d'abord des précisions si nécessaire.",
            "## Demander des exemples",
            "Une remarque comme « Tu dois mieux communiquer » est trop vague pour être directement utile.",
            "Tu peux demander : « Peux-tu me donner un exemple concret d'une situation où ma communication aurait pu être meilleure ? »",
            "## Ne pas accepter automatiquement tout feedback",
            "Recevoir un feedback avec ouverture ne signifie pas que chaque remarque est nécessairement correcte.",
            "Écoute, examine les faits et décide ensuite ce qui mérite d'être appliqué.",
            "## Transformer le feedback en action",
            "Un feedback devient réellement utile lorsqu'il conduit à une modification observable.",
            "Exemple : « Lors des prochaines réunions, je vais laisser quelques secondes avant de répondre afin de permettre aux autres de terminer. »"
          ],
          examples: [
            "Feedback vague → demander un exemple concret.",
            "Feedback pertinent → identifier une action précise.",
            "Feedback injustifié → demander calmement les faits avant de conclure."
          ],
          practice: [
            "Pense à un feedback que tu as reçu récemment.",
            "Identifie ce qui était factuel.",
            "Identifie ce qui était vague.",
            "Transforme la partie utile en une action concrète."
          ],
          quiz: [
            {
              question:
                "Que faire lorsqu'un feedback est trop vague pour être exploitable ?",
              options: [
                "L'ignorer immédiatement.",
                "Réagir agressivement.",
                "Demander un exemple concret.",
                "Accuser l'autre personne."
              ],
              answer: 2,
              explanation:
                "Demander un exemple permet de transformer une remarque générale en information concrète et exploitable."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Communication Écrite Professionnelle",
      lessons: [
        {
          slug: "emails-professionnels",
          title: "5.1 Écrire des emails professionnels efficaces",
          duration: "18 min",
          description:
            "Apprends à rédiger des emails clairs, structurés et adaptés au contexte professionnel.",
          objectives: [
            "Structurer un email professionnel.",
            "Écrire des objets précis.",
            "Formuler clairement une demande.",
            "Éviter les emails trop longs ou ambigus."
          ],
          content: [
            "## Un bon email répond rapidement à trois questions",
            "Pourquoi m'écrit-on ? Que dois-je comprendre ? Que dois-je faire ensuite ?",
            "## L'objet",
            "L'objet doit permettre au destinataire de comprendre rapidement le sujet.",
            "Mauvais exemple : « Question ».",
            "Meilleur exemple : « Validation du planning du projet X ».",
            "## L'introduction",
            "Commence directement par le contexte lorsque cela est nécessaire.",
            "## Le message",
            "Utilise des paragraphes courts et des listes lorsque plusieurs informations doivent être distinguées.",
            "## La demande",
            "Si une action est attendue, indique-la clairement.",
            "Exemple : « Peux-tu valider le document avant jeudi à 16h ? »",
            "## La conclusion",
            "Termine simplement avec une formule adaptée au contexte.",
            "## Éviter les ambiguïtés",
            "Des mots comme « rapidement », « bientôt » ou « dès que possible » peuvent être interprétés différemment. Lorsque l'échéance est importante, indique une date ou une heure."
          ],
          examples: [
            "Objet faible : « Important ».",
            "Objet précis : « Validation du budget marketing - échéance vendredi ».",
            "Demande vague : « Peux-tu regarder ça ? ».",
            "Demande claire : « Peux-tu relire la section 2 et me confirmer les corrections avant demain 14h ? »"
          ],
          practice: [
            "Écris un email demandant à un collègue de relire un document.",
            "Ajoute un objet précis.",
            "Explique le contexte en deux phrases maximum.",
            "Formule une demande et une échéance."
          ],
          quiz: [
            {
              question:
                "Quel objet d'email est le plus professionnel ?",
              options: [
                "Salut",
                "Important !!!",
                "Document",
                "Validation du rapport mensuel - échéance vendredi"
              ],
              answer: 3,
              explanation:
                "Un bon objet donne rapidement le sujet et, lorsque c'est utile, le contexte ou l'échéance."
            }
          ]
        },
        {
          slug: "messages-courts-et-chat",
          title: "5.2 Messages instantanés et communication numérique",
          duration: "15 min",
          description:
            "Adapte ton style aux outils de messagerie professionnelle sans perdre en clarté.",
          objectives: [
            "Adapter ses messages aux outils de communication rapide.",
            "Éviter les messages trop vagues.",
            "Savoir quand passer d'un chat à un appel ou une réunion.",
            "Respecter le temps des collègues."
          ],
          content: [
            "## Le chat professionnel",
            "Les messageries sont utiles pour les questions rapides, les informations courtes et la coordination quotidienne.",
            "Elles deviennent moins adaptées lorsque le sujet nécessite une longue explication, une décision complexe ou une discussion sensible.",
            "## Éviter les messages fragmentés",
            "Envoyer dix messages très courts successifs peut rendre la conversation difficile à suivre.",
            "Lorsque c'est possible, regroupe les informations importantes dans un message structuré.",
            "## Donner le contexte",
            "Au lieu d'écrire « Ça marche pas », indique ce qui ne fonctionne pas, depuis quand et ce que tu as déjà vérifié.",
            "## Quand changer de canal",
            "Un échange devient très long ou émotionnel ? Il peut être plus efficace de proposer un appel ou une conversation directe.",
            "## Respecter les attentes",
            "Un message envoyé ne signifie pas nécessairement qu'une réponse immédiate est attendue. Lorsque l'urgence est réelle, précise-la clairement."
          ],
          examples: [
            "Vague : « Tu peux regarder ? »",
            "Clair : « Peux-tu vérifier le document partagé dans la section Budget ? J'aimerais confirmer le montant avant 15h. »",
            "Conversation trop longue → proposer un appel de dix minutes."
          ],
          practice: [
            "Transforme trois messages vagues en messages professionnels clairs.",
            "Pour chaque message, indique le contexte et l'action attendue.",
            "Identifie un sujet qui serait mieux traité par une conversation directe."
          ],
          quiz: [
            {
              question:
                "Quand peut-il être préférable de passer du chat à un appel ?",
              options: [
                "Toujours.",
                "Lorsque le sujet devient complexe ou nécessite une discussion approfondie.",
                "Jamais.",
                "Uniquement pour les messages très courts."
              ],
              answer: 1,
              explanation:
                "Le bon canal dépend du sujet. Une conversation complexe peut être plus efficace à l'oral qu'à travers une longue série de messages."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Prendre la Parole en Public",
      lessons: [
        {
          slug: "preparer-presentation",
          title: "6.1 Préparer une présentation professionnelle",
          duration: "20 min",
          description:
            "Apprends à structurer une présentation afin que ton audience comprenne rapidement ton message principal.",
          objectives: [
            "Définir l'objectif d'une présentation.",
            "Identifier son audience.",
            "Construire une structure logique.",
            "Préparer une introduction et une conclusion efficaces."
          ],
          content: [
            "## Commencer par l'objectif",
            "Avant de créer des diapositives, demande-toi : « Qu'est-ce que je veux que mon audience comprenne, décide ou fasse après cette présentation ? »",
            "## Connaître son audience",
            "Le niveau technique, les attentes et les intérêts du public doivent influencer le contenu.",
            "Une présentation destinée à des développeurs peut utiliser davantage de détails techniques qu'une présentation destinée à une direction générale.",
            "## Structure simple",
            "Une structure efficace peut être : contexte, problème, analyse, solution, prochaines étapes.",
            "## Une idée principale par partie",
            "Évite de transformer chaque diapositive en document complet. Une présentation doit aider l'orateur et faciliter la compréhension du public.",
            "## Introduction",
            "Présente rapidement le contexte, le problème et l'objectif.",
            "## Conclusion",
            "Rappelle les points essentiels et indique clairement la prochaine étape ou la décision attendue."
          ],
          examples: [
            "Présentation d'un projet : problème → solution proposée → bénéfices → risques → coût → prochaine décision.",
            "Présentation technique : contexte → architecture → choix techniques → démonstration → limites → prochaines étapes."
          ],
          practice: [
            "Choisis un sujet professionnel.",
            "Définis l'objectif de ta présentation en une phrase.",
            "Crée un plan de cinq parties.",
            "Écris les trois messages principaux que ton audience doit retenir."
          ],
          quiz: [
            {
              question:
                "Quelle question faut-il se poser avant de construire une présentation ?",
              options: [
                "Combien de diapositives puis-je ajouter ?",
                "Quelle police dois-je utiliser ?",
                "Qu'est-ce que je veux que mon audience comprenne ou fasse ?",
                "Combien d'animations puis-je utiliser ?"
              ],
              answer: 2,
              explanation:
                "L'objectif de la présentation doit guider la structure et le contenu."
            }
          ]
        },
        {
          slug: "parler-avec-confiance",
          title: "6.2 Parler avec clarté et confiance",
          duration: "18 min",
          description:
            "Développe une prise de parole plus claire, structurée et naturelle.",
          objectives: [
            "Améliorer son débit et sa clarté.",
            "Utiliser les pauses.",
            "Réduire les formulations inutiles.",
            "Gérer progressivement le stress."
          ],
          content: [
            "## La clarté avant la vitesse",
            "Parler rapidement n'est pas nécessairement être plus efficace.",
            "Un débit raisonnable et des pauses permettent à l'audience de traiter l'information.",
            "## Les pauses",
            "Une pause peut être utilisée avant une idée importante ou après une information complexe.",
            "Elle permet également à l'orateur de reprendre son rythme.",
            "## Éviter les mots parasites",
            "« Euh », « donc », « en fait » ou certaines répétitions peuvent apparaître lorsque l'on cherche ses mots.",
            "Ils sont normaux dans une conversation, mais leur utilisation excessive peut rendre une présentation moins fluide.",
            "## Le regard",
            "Lorsque le contexte le permet, regarde naturellement différentes personnes dans l'audience au lieu de fixer uniquement tes notes.",
            "## Gérer le stress",
            "Le stress avant une présentation est courant. Une préparation solide, des répétitions et une bonne connaissance du contenu peuvent aider à réduire l'incertitude."
          ],
          examples: [
            "Au lieu de lire chaque phrase d'une diapositive, utilise la diapositive comme support et explique les idées avec tes propres mots.",
            "Avant une idée importante, fais une courte pause puis formule clairement le message."
          ],
          practice: [
            "Enregistre une présentation de deux minutes.",
            "Observe ton débit.",
            "Identifie les mots parasites.",
            "Refais l'exercice en utilisant davantage de pauses."
          ],
          quiz: [
            {
              question:
                "Pourquoi les pauses peuvent-elles améliorer une présentation ?",
              options: [
                "Elles empêchent l'audience de réfléchir.",
                "Elles donnent du rythme et permettent de mieux traiter les informations.",
                "Elles rendent toujours la présentation plus longue sans bénéfice.",
                "Elles remplacent la préparation."
              ],
              answer: 1,
              explanation:
                "Les pauses peuvent améliorer le rythme et donner au public le temps de comprendre les informations importantes."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Gérer les Conversations Difficiles",
      lessons: [
        {
          slug: "desaccords-professionnels",
          title: "7.1 Gérer les désaccords professionnels",
          duration: "20 min",
          description:
            "Apprends à exprimer un désaccord sans transformer une discussion professionnelle en conflit personnel.",
          objectives: [
            "Distinguer désaccord et conflit personnel.",
            "Exprimer une divergence de manière constructive.",
            "Revenir aux faits et aux objectifs.",
            "Chercher une solution plutôt qu'un gagnant."
          ],
          content: [
            "## Un désaccord n'est pas nécessairement un conflit",
            "Deux professionnels peuvent avoir des opinions différentes tout en conservant une relation de travail saine.",
            "Le problème apparaît lorsque le désaccord devient une attaque personnelle ou empêche toute coopération.",
            "## Revenir aux faits",
            "Lorsque la discussion devient émotionnelle, revenir aux faits disponibles peut aider à réduire les interprétations.",
            "## Chercher l'objectif commun",
            "Une équipe peut être en désaccord sur la méthode tout en partageant le même objectif.",
            "Exemple : deux développeurs veulent tous les deux améliorer les performances, mais proposent des solutions différentes.",
            "## Exprimer son désaccord",
            "Utilise une formulation comme : « Je comprends ton raisonnement. Mon inquiétude concerne X. Voici les données qui me font penser que Y serait plus adapté. »",
            "## Éviter de chercher à gagner",
            "Une discussion professionnelle ne devrait pas être traitée comme une compétition personnelle. Le but est de trouver la meilleure décision possible compte tenu des informations disponibles."
          ],
          examples: [
            "Attaque personnelle : « Tu ne comprends rien au projet. »",
            "Désaccord constructif : « Je ne suis pas d'accord avec cette approche parce qu'elle augmente le risque sur le délai. Voici une alternative. »"
          ],
          practice: [
            "Imagine un désaccord avec un collègue sur une décision professionnelle.",
            "Formule ton désaccord en trois phrases.",
            "Commence par reconnaître l'objectif commun.",
            "Présente ensuite ton argument et une proposition."
          ],
          quiz: [
            {
              question:
                "Quelle approche est la plus constructive lors d'un désaccord ?",
              options: [
                "Attaquer la personne.",
                "Chercher à avoir raison à tout prix.",
                "Revenir aux faits, à l'objectif commun et aux solutions possibles.",
                "Éviter systématiquement toute discussion."
              ],
              answer: 2,
              explanation:
                "Une discussion constructive se concentre sur les faits, les objectifs et les solutions plutôt que sur les personnes."
            }
          ]
        },
        {
          slug: "conversations-difficiles",
          title: "7.2 Conduire une conversation difficile",
          duration: "20 min",
          description:
            "Prépare-toi à aborder les problèmes sensibles avec calme, précision et respect.",
          objectives: [
            "Préparer une conversation difficile.",
            "Exprimer clairement le problème.",
            "Écouter la perspective de l'autre.",
            "Conclure avec une prochaine étape."
          ],
          content: [
            "## Préparer la conversation",
            "Avant une conversation difficile, sépare les faits de tes interprétations.",
            "Demande-toi ce que tu veux réellement obtenir de cette discussion.",
            "## Choisir le bon moment",
            "Une conversation sensible mérite généralement un contexte suffisamment calme et privé.",
            "## Commencer par les faits",
            "Évite les généralisations comme « toujours » ou « jamais ».",
            "Décris une situation précise.",
            "## Écouter la réponse",
            "Après avoir expliqué ton point de vue, laisse l'autre personne répondre. Il peut exister des informations que tu ne connaissais pas.",
            "## Chercher une solution",
            "La conversation doit idéalement déboucher sur une action, une clarification ou un accord sur la prochaine étape.",
            "## Exemple",
            "« J'aimerais discuter du délai du projet. Les deux dernières livraisons ont été repoussées. Cela bloque l'équipe suivante. J'aimerais comprendre ce qui a causé ces retards et voir avec toi comment ajuster le planning. »"
          ],
          examples: [
            "Problème : retards répétés.",
            "Objectif : comprendre les causes et définir un plan réaliste.",
            "Approche : faits → écoute → causes → solution → prochaine étape."
          ],
          practice: [
            "Prépare une conversation difficile fictive.",
            "Écris trois faits observables.",
            "Écris ton objectif.",
            "Prépare deux questions ouvertes.",
            "Définis une prochaine étape possible."
          ],
          quiz: [
            {
              question:
                "Pourquoi est-il préférable d'éviter les mots « toujours » et « jamais » lors d'une conversation difficile ?",
              options: [
                "Parce qu'ils rendent toujours le message plus professionnel.",
                "Parce qu'ils peuvent transformer une situation précise en généralisation et provoquer une réaction défensive.",
                "Parce qu'ils sont trop courts.",
                "Parce qu'ils empêchent toute discussion."
              ],
              answer: 1,
              explanation:
                "Les généralisations peuvent détourner la discussion du problème concret et pousser l'autre personne à se défendre."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Adapter sa Communication",
      lessons: [
        {
          slug: "adapter-message-public",
          title: "8.1 Adapter son message à son interlocuteur",
          duration: "18 min",
          description:
            "Apprends à ajuster ton vocabulaire, ton niveau de détail et ton canal selon la personne à qui tu t'adresses.",
          objectives: [
            "Identifier les besoins de son audience.",
            "Adapter le niveau technique.",
            "Choisir le niveau de détail approprié.",
            "Communiquer efficacement avec différents profils."
          ],
          content: [
            "## Un même message peut nécessiter plusieurs versions",
            "Une information technique destinée à un développeur ne sera pas forcément présentée de la même manière à un client ou à un dirigeant.",
            "## Identifier l'audience",
            "Avant de communiquer, demande-toi : qui écoute ? Quel est son niveau de connaissance ? Qu'a-t-il besoin de savoir ? Quelle décision doit-il prendre ?",
            "## Éviter le jargon inutile",
            "Le jargon peut être utile entre spécialistes, mais il peut créer une barrière avec une audience non technique.",
            "## Adapter le niveau de détail",
            "Un interlocuteur qui doit prendre une décision stratégique a souvent besoin des conséquences, des risques, des coûts et des options plutôt que de chaque détail d'implémentation.",
            "## Exemple technique",
            "À un développeur : « Nous utilisons un cache côté serveur pour réduire les requêtes répétitives. »",
            "À une direction : « Cette optimisation devrait réduire la charge du système et améliorer les temps de réponse, avec un coût d'implémentation limité. »"
          ],
          examples: [
            "Client → bénéfices, risques, coût et prochaines étapes.",
            "Développeur → architecture, contraintes, dépendances et détails techniques.",
            "Nouveau collaborateur → contexte, vocabulaire et exemples."
          ],
          practice: [
            "Choisis une notion technique que tu connais.",
            "Explique-la à un spécialiste.",
            "Explique ensuite la même notion à une personne sans connaissances techniques.",
            "Compare les deux versions."
          ],
          quiz: [
            {
              question:
                "Pourquoi faut-il adapter son message à son audience ?",
              options: [
                "Parce que tout le monde doit recevoir exactement la même quantité d'informations.",
                "Parce que les besoins, connaissances et attentes varient selon les interlocuteurs.",
                "Parce que les messages techniques sont toujours meilleurs.",
                "Parce qu'un message doit toujours être très long."
              ],
              answer: 1,
              explanation:
                "Une communication efficace tient compte du niveau de connaissance et des besoins de la personne qui reçoit le message."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Mise en Pratique",
      lessons: [
        {
          slug: "scenarios-communication",
          title: "9.1 Scénarios professionnels",
          duration: "25 min",
          description:
            "Mets en pratique les techniques du cours dans des situations professionnelles réalistes.",
          objectives: [
            "Appliquer l'écoute active.",
            "Utiliser l'assertivité.",
            "Donner un feedback constructif.",
            "Adapter son message au contexte."
          ],
          content: [
            "## Scénario 1 : le retard",
            "Un collègue remet régulièrement ses tâches en retard.",
            "Objectif : aborder le problème sans accusation.",
            "Approche possible : décrire les faits, expliquer l'impact, écouter les causes et convenir d'une action.",
            "## Scénario 2 : désaccord technique",
            "Deux membres d'une équipe ne sont pas d'accord sur une architecture.",
            "Objectif : comparer les solutions sur la base de critères objectifs.",
            "Approche : clarifier les contraintes, comparer les avantages et risques, puis décider selon les objectifs du projet.",
            "## Scénario 3 : feedback",
            "Une présentation contient trop d'informations et le message principal est difficile à identifier.",
            "Objectif : donner un feedback spécifique et utile.",
            "## Scénario 4 : client mécontent",
            "Un client estime que le projet ne correspond pas à ses attentes.",
            "Objectif : écouter avant de proposer une solution.",
            "Questions utiles : « Qu'est-ce qui ne correspond pas à vos attentes ? », « Quel résultat attendiez-vous ? »",
            "## Scénario 5 : dire non",
            "Ton responsable te demande une nouvelle tâche alors que plusieurs priorités sont déjà en cours.",
            "Objectif : ne pas accepter automatiquement et ne pas répondre agressivement.",
            "Réponse possible : « Je peux prendre cette tâche, mais je ne pourrai pas terminer toutes les priorités actuelles dans le même délai. Quelle tâche devons-nous considérer comme prioritaire ? »"
          ],
          examples: [
            "Chaque scénario peut être traité avec une combinaison d'écoute active, d'assertivité, de reformulation et de communication claire."
          ],
          practice: [
            "Choisis deux scénarios.",
            "Écris ta réponse comme si tu étais réellement dans la situation.",
            "Identifie la technique de communication utilisée.",
            "Relis ta réponse et vérifie qu'elle est claire, respectueuse et orientée vers une solution."
          ],
          quiz: [
            {
              question:
                "Face à un client mécontent, quelle devrait généralement être la première étape ?",
              options: [
                "Se défendre immédiatement.",
                "Interrompre le client.",
                "Écouter et chercher à comprendre précisément le problème.",
                "Accuser l'équipe."
              ],
              answer: 2,
              explanation:
                "Avant de proposer une solution, il faut comprendre précisément le problème et les attentes du client."
            }
          ]
        },
        {
          slug: "projet-final-communication",
          title: "9.2 Projet final : construire son plan de communication",
          duration: "25 min",
          description:
            "Construis un plan de communication complet pour une situation professionnelle réelle ou fictive.",
          objectives: [
            "Analyser une situation de communication.",
            "Identifier les interlocuteurs.",
            "Choisir le canal adapté.",
            "Préparer un message clair.",
            "Prévoir les objections et les réponses."
          ],
          content: [
            "## Le projet final",
            "Choisis une situation professionnelle réelle ou fictive : présentation d'un projet, annonce d'un changement, désaccord avec un collègue, demande à un responsable ou communication avec un client.",
            "## Étape 1 : définir l'objectif",
            "Que veux-tu obtenir à la fin de la communication ?",
            "## Étape 2 : identifier l'audience",
            "À qui t'adresses-tu ? Quel est son niveau de connaissance ? Quelles sont ses attentes ?",
            "## Étape 3 : choisir le canal",
            "Email, réunion, appel, présentation ou message court ? Choisis le canal qui correspond à la complexité et à la sensibilité du sujet.",
            "## Étape 4 : préparer le message",
            "Structure ton message autour du contexte, du problème, des informations importantes et de l'action attendue.",
            "## Étape 5 : prévoir les réactions",
            "Imagine au moins deux questions ou objections que ton interlocuteur pourrait avoir.",
            "## Étape 6 : vérifier",
            "Ton message est-il clair ? Respectueux ? Concret ? Adapté à ton audience ?",
            "## Critères de réussite",
            "- Objectif clairement défini.",
            "- Audience identifiée.",
            "- Canal pertinent.",
            "- Message structuré.",
            "- Demande ou prochaine étape claire.",
            "- Ton professionnel et respectueux."
          ],
          examples: [
            "Situation : présenter un nouveau projet à une direction.",
            "Objectif : obtenir l'autorisation de démarrer.",
            "Audience : responsables non techniques.",
            "Canal : présentation de 15 minutes.",
            "Structure : problème → solution → bénéfices → coûts → risques → décision attendue."
          ],
          practice: [
            "Choisis une situation.",
            "Définis ton objectif.",
            "Identifie ton audience.",
            "Choisis ton canal.",
            "Rédige ton message.",
            "Prépare trois questions possibles.",
            "Présente ton message à voix haute ou enregistre-toi."
          ],
          quiz: [
            {
              question:
                "Quel élément doit être clairement défini avant de préparer une communication importante ?",
              options: [
                "Le nombre de phrases.",
                "L'objectif de la communication.",
                "Le nombre de couleurs utilisées.",
                "La longueur maximale du message."
              ],
              answer: 1,
              explanation:
                "Connaître l'objectif permet de déterminer le contenu, la structure et le canal les plus adaptés."
            }
          ]
        }
      ]
    }
  ]
};

export const communicationProfExamQuestions: ExamQuestion[] = [
  {
    question: "Que signifie être assertif ?",
    options: [
      "S'exprimer clairement tout en respectant les autres.",
      "S'imposer par la force.",
      "Accepter systématiquement toutes les demandes.",
      "Éviter tous les désaccords."
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle attitude caractérise l'écoute active ?",
    options: [
      "Préparer sa réponse pendant que l'autre parle.",
      "Regarder son téléphone.",
      "Chercher à comprendre, poser des questions et reformuler.",
      "Interrompre fréquemment."
    ],
    correctAnswer: 2
  },
  {
    question: "Pourquoi la reformulation est-elle utile ?",
    options: [
      "Pour montrer que l'on parle mieux que l'autre.",
      "Pour vérifier que l'on a correctement compris le message.",
      "Pour interrompre la conversation.",
      "Pour éviter de poser des questions."
    ],
    correctAnswer: 1
  },
  {
    question: "Que signifie OSBD dans la Communication Non-Violente ?",
    options: [
      "Observation, Sentiment, Besoin, Demande.",
      "Objectif, Solution, Besoin, Décision.",
      "Observation, Solution, Besoin, Désaccord.",
      "Opinion, Sentiment, Discussion, Décision."
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle formulation est la plus adaptée pour exprimer un désaccord professionnel ?",
    options: [
      "« Ton idée est complètement mauvaise. »",
      "« Tu ne comprends rien au problème. »",
      "« Je comprends ton approche, mais je vois un risque sur le délai. Voici une alternative. »",
      "« Peu importe, fais ce que tu veux. »"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Quel est l'objectif principal d'un feedback constructif ?",
    options: [
      "Faire culpabiliser la personne.",
      "Montrer qui a raison.",
      "Donner des informations utiles permettant d'améliorer un comportement ou un résultat.",
      "Éviter toute discussion."
    ],
    correctAnswer: 2
  },
  {
    question:
      "Quel feedback est le plus précis ?",
    options: [
      "« Tu es désorganisé. »",
      "« Tu n'es jamais sérieux. »",
      "« Le rapport ne contient pas les données demandées dans la section 3. »",
      "« Tout est mauvais. »"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Que faire lorsqu'un feedback est trop vague ?",
    options: [
      "L'ignorer.",
      "Réagir agressivement.",
      "Demander un exemple concret.",
      "Arrêter la conversation."
    ],
    correctAnswer: 2
  },
  {
    question:
      "Quel objet d'email est le plus professionnel ?",
    options: [
      "Important",
      "Salut",
      "Document",
      "Validation du rapport mensuel - échéance vendredi"
    ],
    correctAnswer: 3
  },
  {
    question:
      "Pourquoi faut-il éviter les formulations vagues comme « rapidement » lorsqu'une échéance est importante ?",
    options: [
      "Parce qu'elles sont toujours incorrectes.",
      "Parce que chacun peut les interpréter différemment.",
      "Parce qu'elles sont trop courtes.",
      "Parce qu'elles empêchent d'écrire un email."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quand peut-il être préférable de passer d'une messagerie instantanée à un appel ?",
    options: [
      "Lorsque le sujet devient complexe ou nécessite une discussion approfondie.",
      "Toujours.",
      "Jamais.",
      "Uniquement lorsque le message fait moins de dix mots."
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est un bon point de départ pour préparer une présentation ?",
    options: [
      "Choisir les animations.",
      "Ajouter beaucoup de diapositives.",
      "Définir ce que l'audience doit comprendre ou faire.",
      "Écrire tout son discours sur les diapositives."
    ],
    correctAnswer: 2
  },
  {
    question:
      "Pourquoi faut-il adapter son vocabulaire à son audience ?",
    options: [
      "Parce que tout le monde possède le même niveau de connaissance.",
      "Parce que les besoins et connaissances varient selon les interlocuteurs.",
      "Pour rendre les messages plus longs.",
      "Pour utiliser davantage de jargon."
    ],
    correctAnswer: 1
  },
  {
    question:
      "Face à un désaccord professionnel, quelle approche est la plus constructive ?",
    options: [
      "Attaquer la personne.",
      "Chercher à gagner à tout prix.",
      "Revenir aux faits, aux objectifs communs et aux solutions possibles.",
      "Éviter systématiquement le sujet."
    ],
    correctAnswer: 2
  },
  {
    question:
      "Face à un client mécontent, quelle devrait généralement être la première étape ?",
    options: [
      "Se défendre immédiatement.",
      "Interrompre le client.",
      "Écouter et comprendre précisément le problème.",
      "Accuser quelqu'un d'autre."
    ],
    correctAnswer: 2
  },
  {
    question:
      "Quel élément doit être défini avant une communication professionnelle importante ?",
    options: [
      "Le nombre de phrases.",
      "L'objectif de la communication.",
      "Le nombre de diapositives.",
      "La quantité de jargon technique."
    ],
    correctAnswer: 1
  }
];