import Link from "next/link";
import { notFound } from "next/navigation";

import Quiz from "./Quiz";
import LessonCompletion from "./LessonCompletion";
import LessonProgress from "./LessonProgress";
import LessonSidebar from "./LessonSidebar";
import { getCourseData } from "@/data/coursesData";
import InteractiveCodeBlock from "@/components/InteractiveCodeBlock";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

type Lesson = {
  slug: string;
  title: string;
  duration: string;
  description: string;
  content: string[];
  quiz: QuizQuestion[];
};

type Module = {
  title: string;
  lessons: Lesson[];
};

type Course = {
  title: string;
  description: string;
  modules: Module[];
};

const courses: Record<string, Record<string, Course>> = {
  numerique: {
    "utiliser-ordinateur": {
      title: "Les bases de l'informatique",
      description:
        "Découvre les notions essentielles de l'informatique, du matériel aux logiciels, en passant par les systèmes d'exploitation, la mémoire, le stockage et les systèmes de numération.",
      modules: [
        {
          title: "Module 1 : Découvrir l'informatique",
          lessons: [
            {
              slug: "bienvenue",
              title: "Bienvenue dans le cours",
              duration: "5 min",
              description:
                "Découvre le cours, son organisation et les compétences que tu vas développer.",
              content: [
                "## Bienvenue",
                "Bienvenue dans ce cours consacré aux bases de l'informatique.",
                "L'objectif est de te permettre de comprendre les principales notions informatiques sans entrer immédiatement dans des concepts trop complexes.",
                "## Ce que tu vas apprendre",
                "- Le matériel informatique",
                "- Le microprocesseur",
                "- La mémoire et le stockage",
                "- Les logiciels",
                "- Les systèmes d'exploitation",
                "- Les outils bureautiques",
                "- Les systèmes de numération",
                "- Les bonnes pratiques de sécurité et de maintenance",
                "💡 Conseil :",
                "Avance progressivement. Les notions étudiées dans les premières leçons serviront de base aux suivantes.",
              ],
              quiz: [
                {
                  question:
                    "Quel est l'objectif principal de ce cours ?",
                  options: [
                    "Apprendre uniquement à programmer",
                    "Comprendre les bases de l'informatique",
                    "Devenir administrateur réseau",
                    "Réparer tous les ordinateurs",
                  ],
                  answer: 1,
                  explanation:
                    "Ce cours présente les principales notions fondamentales de l'informatique.",
                },
                {
                  question:
                    "Lequel de ces sujets fait partie du cours ?",
                  options: [
                    "La mémoire informatique",
                    "Uniquement les réseaux",
                    "Uniquement la programmation",
                    "Uniquement la création de jeux",
                  ],
                  answer: 0,
                  explanation:
                    "La mémoire fait partie des notions fondamentales étudiées dans cette formation.",
                },
                {
                  question:
                    "Quelle est la meilleure manière de progresser dans ce cours ?",
                  options: [
                    "Sauter toutes les leçons",
                    "Apprendre uniquement les définitions",
                    "Avancer progressivement",
                    "Commencer directement par l'examen",
                  ],
                  answer: 2,
                  explanation:
                    "Les notions sont organisées progressivement afin que chaque leçon prépare aux suivantes.",
                },
              ],
            },

            {
              slug: "qu-est-ce-que-l-informatique",
              title: "Qu'est-ce que l'informatique ?",
              duration: "10 min",
              description:
                "Comprends ce que signifie le terme informatique et à quoi cette discipline sert.",
              content: [
                "## Définition",
                "L'informatique est l'ensemble des techniques permettant de traiter automatiquement des informations à l'aide de machines et de logiciels.",
                "Le mot informatique vient de la combinaison des notions d'information et d'automatique.",
                "## L'information",
                "Une information peut être un texte, une image, un son, une vidéo, un nombre ou toute autre donnée pouvant être traitée.",
                "## L'informatique dans la vie quotidienne",
                "- Téléphones",
                "- Ordinateurs",
                "- Banques",
                "- Écoles",
                "- Hôpitaux",
                "- Entreprises",
                "- Administrations",
                "💡 Conseil :",
                "Il ne faut pas réduire l'informatique à Internet. Internet est seulement l'un des nombreux domaines dans lesquels l'informatique est utilisée.",
              ],
              quiz: [
                {
                  question:
                    "Que désigne principalement l'informatique ?",
                  options: [
                    "Le traitement automatique de l'information",
                    "La fabrication des écrans",
                    "Uniquement Internet",
                    "La réparation des téléphones",
                  ],
                  answer: 0,
                  explanation:
                    "L'informatique concerne notamment le traitement automatique de l'information.",
                },
                {
                  question:
                    "Laquelle de ces données peut être traitée par un ordinateur ?",
                  options: [
                    "Un texte",
                    "Une image",
                    "Un son",
                    "Toutes les réponses",
                  ],
                  answer: 3,
                  explanation:
                    "Un ordinateur peut traiter différents types de données, notamment du texte, des images et du son.",
                },
                {
                  question:
                    "Internet et informatique sont-ils exactement la même chose ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sur les téléphones",
                    "Seulement dans les entreprises",
                  ],
                  answer: 1,
                  explanation:
                    "Internet est un service et une infrastructure utilisant l'informatique, mais l'informatique est beaucoup plus large.",
                },
              ],
            },

            {
              slug: "a-quoi-sert-un-ordinateur",
              title: "À quoi sert un ordinateur ?",
              duration: "10 min",
              description:
                "Découvre les principales tâches qu'un ordinateur peut effectuer.",
              content: [
                "## Les principales fonctions",
                "Un ordinateur peut recevoir des données, les traiter, les stocker et produire des résultats.",
                "## Exemples",
                "- Rédiger un document",
                "- Effectuer des calculs",
                "- Regarder une vidéo",
                "- Modifier une image",
                "- Stocker des fichiers",
                "- Utiliser des applications",
                "- Automatiser certaines tâches",
                "## Entrée, traitement, sortie et stockage",
                "Les périphériques d'entrée permettent de fournir des informations à l'ordinateur.",
                "Le processeur traite les instructions et les données.",
                "Les périphériques de sortie permettent de présenter les résultats.",
                "Le stockage conserve les données pour une utilisation ultérieure.",
                "📌 Important :",
                "Un ordinateur ne fait pas seulement des calculs. Il peut traiter de nombreux types d'informations.",
              ],
              quiz: [
                {
                  question:
                    "Lequel est un exemple d'utilisation d'un ordinateur ?",
                  options: [
                    "Rédiger un document",
                    "Effectuer des calculs",
                    "Regarder une vidéo",
                    "Toutes les réponses",
                  ],
                  answer: 3,
                  explanation:
                    "Un ordinateur peut réaliser toutes ces tâches et bien d'autres.",
                },
                {
                  question:
                    "Quel composant traite principalement les instructions ?",
                  options: [
                    "Le clavier",
                    "Le processeur",
                    "L'écran",
                    "La souris",
                  ],
                  answer: 1,
                  explanation:
                    "Le processeur, ou CPU, exécute les instructions des programmes.",
                },
                {
                  question:
                    "À quoi sert principalement le stockage ?",
                  options: [
                    "À conserver les données",
                    "À afficher les images",
                    "À saisir du texte",
                    "À déplacer le curseur",
                  ],
                  answer: 0,
                  explanation:
                    "Le stockage conserve les fichiers et les programmes, même lorsque l'ordinateur est éteint.",
                },
              ],
            },

            {
              slug: "comment-fonctionne-un-ordinateur",
              title: "Comment fonctionne un ordinateur ?",
              duration: "12 min",
              description:
                "Comprends simplement comment les différents composants travaillent ensemble.",
              content: [
                "## Un système composé de plusieurs éléments",
                "Un ordinateur fonctionne grâce à la coopération du matériel et des logiciels.",
                "Le matériel correspond aux composants physiques. Les logiciels correspondent aux programmes et aux instructions.",
                "## Un exemple simple",
                "Lorsque tu ouvres une application, le système d'exploitation charge les éléments nécessaires en mémoire et le processeur exécute les instructions.",
                "Les résultats sont ensuite affichés à l'écran ou envoyés vers un autre périphérique.",
                "## Le rôle de l'utilisateur",
                "L'utilisateur fournit des commandes ou des données à travers différents périphériques.",
                "💡 Conseil :",
                "Retenir la relation matériel + logiciel est essentiel pour comprendre le reste du cours.",
              ],
              quiz: [
                {
                  question:
                    "Quels sont les deux grands éléments nécessaires au fonctionnement d'un ordinateur ?",
                  options: [
                    "Internet et écran",
                    "Matériel et logiciels",
                    "Clavier et souris",
                    "Batterie et imprimante",
                  ],
                  answer: 1,
                  explanation:
                    "Le matériel fournit les composants physiques et les logiciels fournissent les instructions.",
                },
                {
                  question:
                    "Que fait principalement le processeur ?",
                  options: [
                    "Il exécute des instructions",
                    "Il imprime les documents",
                    "Il remplace l'écran",
                    "Il fournit toujours Internet",
                  ],
                  answer: 0,
                  explanation:
                    "Le processeur exécute les instructions des programmes et effectue des opérations sur les données.",
                },
                {
                  question:
                    "Quel élément permet généralement d'afficher le résultat d'une opération ?",
                  options: [
                    "L'écran",
                    "La RAM uniquement",
                    "Le processeur uniquement",
                    "Le clavier",
                  ],
                  answer: 0,
                  explanation:
                    "L'écran est un périphérique de sortie permettant de présenter visuellement les résultats.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 2 : Classification des ordinateurs",
          lessons: [
            {
              slug: "ordinateurs-personnels",
              title: "Les ordinateurs personnels",
              duration: "10 min",
              description:
                "Découvre les ordinateurs conçus principalement pour un usage individuel.",
              content: [
                "## Définition",
                "Un ordinateur personnel est généralement conçu pour être utilisé directement par une personne.",
                "Les ordinateurs de bureau et les ordinateurs portables sont des exemples courants.",
                "## Ordinateur de bureau",
                "Il est généralement composé d'une unité centrale, d'un écran, d'un clavier et d'une souris.",
                "## Ordinateur portable",
                "Il regroupe l'écran, le clavier, le pavé tactile et les principaux composants dans un seul appareil transportable.",
                "💡 Conseil :",
                "Le choix entre ordinateur de bureau et portable dépend principalement de l'utilisation, de la mobilité recherchée et du budget.",
              ],
              quiz: [
                {
                  question:
                    "Quel appareil est un ordinateur personnel ?",
                  options: [
                    "Un ordinateur portable",
                    "Un superordinateur",
                    "Un capteur seul",
                    "Une imprimante seule",
                  ],
                  answer: 0,
                  explanation:
                    "L'ordinateur portable est un exemple classique d'ordinateur personnel.",
                },
                {
                  question:
                    "Quel est l'un des principaux avantages d'un ordinateur portable ?",
                  options: [
                    "Il est généralement transportable",
                    "Il ne possède aucun processeur",
                    "Il n'utilise jamais de stockage",
                    "Il fonctionne sans logiciel",
                  ],
                  answer: 0,
                  explanation:
                    "La mobilité est l'un des principaux avantages des ordinateurs portables.",
                },
                {
                  question:
                    "Un ordinateur de bureau est généralement destiné à quel usage ?",
                  options: [
                    "Un usage individuel ou professionnel",
                    "Uniquement aux satellites",
                    "Uniquement aux banques",
                    "Uniquement aux serveurs",
                  ],
                  answer: 0,
                  explanation:
                    "Les ordinateurs de bureau peuvent être utilisés à la maison, à l'école ou au travail.",
                },
              ],
            },

            {
              slug: "smartphones-et-tablettes",
              title: "Smartphones et tablettes",
              duration: "10 min",
              description:
                "Comprends pourquoi les smartphones et tablettes sont aussi des systèmes informatiques.",
              content: [
                "## Des ordinateurs mobiles",
                "Un smartphone est un appareil informatique mobile capable d'exécuter des applications, de stocker des données et de communiquer avec d'autres systèmes.",
                "Les tablettes fonctionnent selon un principe similaire avec un écran généralement plus grand.",
                "## Le système d'exploitation",
                "Les smartphones et tablettes utilisent un système d'exploitation, comme Android ou iOS.",
                "## Les composants",
                "- Processeur",
                "- Mémoire",
                "- Stockage",
                "- Écran tactile",
                "- Caméras",
                "- Capteurs",
                "📌 Important :",
                "Même si leur forme est différente d'un ordinateur classique, les smartphones sont de véritables systèmes informatiques.",
              ],
              quiz: [
                {
                  question:
                    "Un smartphone est-il un système informatique ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement lorsqu'il est connecté à Internet",
                    "Seulement lorsqu'il est branché",
                  ],
                  answer: 0,
                  explanation:
                    "Un smartphone possède un processeur, de la mémoire, du stockage, un système d'exploitation et des applications.",
                },
                {
                  question:
                    "Lequel est un système d'exploitation mobile ?",
                  options: [
                    "Android",
                    "Excel",
                    "HDMI",
                    "USB",
                  ],
                  answer: 0,
                  explanation:
                    "Android est un système d'exploitation utilisé notamment sur les smartphones et tablettes.",
                },
                {
                  question:
                    "Comment interagit-on généralement avec une tablette ?",
                  options: [
                    "Avec un écran tactile",
                    "Uniquement avec une imprimante",
                    "Avec un disque dur externe",
                    "Avec un câble audio uniquement",
                  ],
                  answer: 0,
                  explanation:
                    "Les tablettes utilisent généralement un écran tactile comme interface principale.",
                },
              ],
            },

            {
              slug: "serveurs",
              title: "Les serveurs",
              duration: "10 min",
              description:
                "Découvre le concept de serveur sans entrer dans les détails des réseaux.",
              content: [
                "## Qu'est-ce qu'un serveur ?",
                "Un serveur est un système informatique qui fournit un service ou des ressources à d'autres systèmes.",
                "Par exemple, un serveur peut héberger un site web, stocker des fichiers ou exécuter une application.",
                "## Serveur et ordinateur personnel",
                "Un serveur peut utiliser des composants similaires à ceux d'un ordinateur classique, mais il est généralement conçu pour fonctionner de manière fiable et continue.",
                "## Les réseaux",
                "Les serveurs sont souvent accessibles à travers un réseau.",
                "Cette formation ne développe pas les réseaux en profondeur. Ces notions seront étudiées dans un cours dédié.",
                "💡 Conseil :",
                "Retenir simplement qu'un serveur fournit un service à d'autres appareils ou utilisateurs.",
              ],
              quiz: [
                {
                  question:
                    "Quel est le rôle général d'un serveur ?",
                  options: [
                    "Fournir un service ou une ressource",
                    "Uniquement afficher des vidéos",
                    "Remplacer tous les smartphones",
                    "Uniquement imprimer",
                  ],
                  answer: 0,
                  explanation:
                    "Un serveur fournit généralement un service, une application ou une ressource à d'autres systèmes.",
                },
                {
                  question:
                    "Un serveur peut-il stocker des fichiers ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sans système d'exploitation",
                    "Seulement sur un smartphone",
                  ],
                  answer: 0,
                  explanation:
                    "Le stockage et le partage de fichiers font partie des nombreux services pouvant être fournis par un serveur.",
                },
                {
                  question:
                    "Cette formation traite-t-elle les réseaux en profondeur ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement les réseaux sociaux",
                    "Uniquement le Wi-Fi",
                  ],
                  answer: 1,
                  explanation:
                    "Les réseaux seront traités plus en détail dans une formation dédiée.",
                },
              ],
            },

            {
              slug: "superordinateurs-et-systemes-embarques",
              title: "Superordinateurs et systèmes embarqués",
              duration: "12 min",
              description:
                "Découvre deux catégories particulières de systèmes informatiques.",
              content: [
                "## Les superordinateurs",
                "Un superordinateur est un système extrêmement puissant conçu pour réaliser des calculs complexes à très grande échelle.",
                "Ils peuvent être utilisés pour la recherche scientifique, la simulation, la météo ou d'autres calculs intensifs.",
                "## Les systèmes embarqués",
                "Un système embarqué est un système informatique intégré dans un appareil pour réaliser une fonction précise.",
                "On peut en trouver dans les voitures, les appareils médicaux, les machines industrielles ou les appareils domestiques.",
                "📌 Important :",
                "Tous les systèmes informatiques ne ressemblent pas à un ordinateur de bureau.",
              ],
              quiz: [
                {
                  question:
                    "À quoi sert principalement un superordinateur ?",
                  options: [
                    "À réaliser des calculs très complexes",
                    "À remplacer une souris",
                    "À imprimer des documents uniquement",
                    "À charger un téléphone",
                  ],
                  answer: 0,
                  explanation:
                    "Les superordinateurs sont conçus pour effectuer de très grandes quantités de calculs.",
                },
                {
                  question:
                    "Qu'est-ce qu'un système embarqué ?",
                  options: [
                    "Un système informatique intégré dans un appareil",
                    "Un câble USB",
                    "Un écran uniquement",
                    "Un logiciel de traitement de texte",
                  ],
                  answer: 0,
                  explanation:
                    "Un système embarqué est intégré dans un appareil pour réaliser une ou plusieurs fonctions spécifiques.",
                },
                {
                  question:
                    "Lequel peut contenir un système embarqué ?",
                  options: [
                    "Une voiture",
                    "Une machine industrielle",
                    "Un appareil médical",
                    "Toutes les réponses",
                  ],
                  answer: 3,
                  explanation:
                    "Les systèmes embarqués sont présents dans de nombreux appareils et machines.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 3 : Matériel informatique",
          lessons: [
            {
              slug: "carte-mere",
              title: "La carte mère",
              duration: "12 min",
              description:
                "Découvre la carte principale qui relie les composants d'un ordinateur.",
              content: [
                "## Définition",
                "La carte mère est le circuit principal d'un ordinateur. Elle permet aux différents composants de communiquer entre eux.",
                "## Ce qu'on peut y trouver",
                "- Processeur",
                "- Emplacements mémoire",
                "- Connecteurs de stockage",
                "- Ports d'extension",
                "- Connecteurs d'alimentation",
                "## Pourquoi est-elle importante ?",
                "La carte mère joue un rôle central dans l'organisation matérielle du système.",
                "💡 Conseil :",
                "Imagine la carte mère comme une grande plateforme sur laquelle les principaux composants sont connectés.",
              ],
              quiz: [
                {
                  question:
                    "Quel est le rôle principal de la carte mère ?",
                  options: [
                    "Relier les principaux composants",
                    "Afficher les images",
                    "Imprimer les documents",
                    "Remplacer le système d'exploitation",
                  ],
                  answer: 0,
                  explanation:
                    "La carte mère permet aux composants de communiquer et de recevoir leur alimentation.",
                },
                {
                  question:
                    "Le processeur peut-il être installé sur la carte mère ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sur une imprimante",
                    "Seulement dans un écran",
                  ],
                  answer: 0,
                  explanation:
                    "Le processeur est installé sur un emplacement prévu à cet effet sur la carte mère.",
                },
                {
                  question:
                    "Les emplacements mémoire se trouvent généralement où ?",
                  options: [
                    "Sur la carte mère",
                    "Dans le clavier",
                    "Dans la souris",
                    "Dans l'écran",
                  ],
                  answer: 0,
                  explanation:
                    "La carte mère possède des emplacements destinés aux modules de mémoire vive.",
                },
              ],
            },

            {
              slug: "processeur",
              title: "Le processeur",
              duration: "12 min",
              description:
                "Comprends le rôle du CPU dans un ordinateur.",
              content: [
                "## Le CPU",
                "Le processeur, ou CPU, est l'un des composants principaux d'un système informatique.",
                "Il exécute les instructions des programmes et réalise des opérations sur les données.",
                "## Le processeur et les programmes",
                "Lorsqu'une application fonctionne, le processeur exécute de nombreuses instructions permettant de réaliser les tâches demandées.",
                "## Performance",
                "La performance d'un processeur dépend de plusieurs caractéristiques. La fréquence est importante, mais elle ne suffit pas à elle seule pour comparer deux processeurs.",
                "📌 Important :",
                "Un processeur plus puissant ne signifie pas automatiquement qu'un ordinateur sera meilleur dans tous les usages.",
              ],
              quiz: [
                {
                  question:
                    "Que signifie CPU ?",
                  options: [
                    "Central Processing Unit",
                    "Computer Personal User",
                    "Central Program Utility",
                    "Computer Power Unit",
                  ],
                  answer: 0,
                  explanation:
                    "CPU signifie Central Processing Unit, c'est-à-dire unité centrale de traitement.",
                },
                {
                  question:
                    "Quel est le rôle principal du processeur ?",
                  options: [
                    "Exécuter des instructions",
                    "Afficher uniquement les images",
                    "Stocker définitivement les fichiers",
                    "Imprimer les documents",
                  ],
                  answer: 0,
                  explanation:
                    "Le processeur exécute les instructions des programmes.",
                },
                {
                  question:
                    "La fréquence du processeur suffit-elle à déterminer toutes ses performances ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sur les smartphones",
                    "Seulement sur les anciens ordinateurs",
                  ],
                  answer: 1,
                  explanation:
                    "La performance dépend de plusieurs caractéristiques, notamment l'architecture, le nombre de cœurs et la mémoire cache.",
                },
              ],
            },

            {
              slug: "gpu",
              title: "Le GPU et les graphiques",
              duration: "10 min",
              description:
                "Découvre le rôle du processeur graphique.",
              content: [
                "## GPU",
                "Le GPU, ou Graphics Processing Unit, est un processeur spécialisé dans le traitement des calculs graphiques et de certaines opérations parallèles.",
                "Il est particulièrement important pour les jeux vidéo, la création graphique, la vidéo 3D et certaines applications scientifiques ou d'intelligence artificielle.",
                "## GPU intégré et dédié",
                "Un GPU peut être intégré au processeur ou être présent sous la forme d'une carte graphique séparée.",
                "💡 Conseil :",
                "Pour une utilisation bureautique simple, un GPU puissant n'est généralement pas indispensable.",
              ],
              quiz: [
                {
                  question:
                    "Que signifie GPU ?",
                  options: [
                    "Graphics Processing Unit",
                    "General Program Utility",
                    "Graphics Personal User",
                    "General Processing User",
                  ],
                  answer: 0,
                  explanation:
                    "GPU signifie Graphics Processing Unit.",
                },
                {
                  question:
                    "Dans quel domaine un GPU est-il particulièrement utile ?",
                  options: [
                    "Graphiques 3D",
                    "Écriture au clavier",
                    "Impression papier uniquement",
                    "Chargement d'une batterie",
                  ],
                  answer: 0,
                  explanation:
                    "Les GPU sont particulièrement adaptés aux calculs graphiques et à de nombreux traitements parallèles.",
                },
                {
                  question:
                    "Un GPU peut-il être intégré au processeur ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement dans les serveurs",
                    "Seulement dans les téléphones",
                  ],
                  answer: 0,
                  explanation:
                    "De nombreux systèmes utilisent un GPU intégré au processeur ou à la plateforme.",
                },
              ],
            },

            {
              slug: "peripheriques-et-ports",
              title: "Périphériques, ports et connecteurs",
              duration: "12 min",
              description:
                "Apprends à distinguer les périphériques et les principaux ports d'un ordinateur.",
              content: [
                "## Les périphériques",
                "Un périphérique est un appareil connecté à un système informatique pour permettre une entrée, une sortie, un stockage ou une autre fonction.",
                "## Exemples",
                "- Clavier",
                "- Souris",
                "- Écran",
                "- Imprimante",
                "- Webcam",
                "- Disque externe",
                "## Les ports",
                "Les ports permettent de connecter différents appareils à l'ordinateur.",
                "On rencontre notamment USB, HDMI, DisplayPort, audio et d'autres connecteurs selon les appareils.",
                "📌 Important :",
                "Le type de port détermine les appareils compatibles et parfois les capacités de transfert ou d'affichage.",
              ],
              quiz: [
                {
                  question:
                    "Lequel est un périphérique d'entrée ?",
                  options: [
                    "Clavier",
                    "Écran",
                    "Projecteur",
                    "Haut-parleur",
                  ],
                  answer: 0,
                  explanation:
                    "Le clavier permet à l'utilisateur d'envoyer des informations vers l'ordinateur.",
                },
                {
                  question:
                    "À quoi sert principalement un port USB ?",
                  options: [
                    "À connecter différents appareils compatibles",
                    "À afficher uniquement les pages web",
                    "À remplacer le processeur",
                    "À installer la RAM",
                  ],
                  answer: 0,
                  explanation:
                    "USB est une interface permettant notamment de connecter des périphériques et de transférer des données.",
                },
                {
                  question:
                    "Quel port est principalement associé à l'affichage numérique ?",
                  options: [
                    "HDMI",
                    "USB uniquement",
                    "Audio uniquement",
                    "Ethernet uniquement",
                  ],
                  answer: 0,
                  explanation:
                    "HDMI est couramment utilisé pour transmettre un signal audio et vidéo numérique.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 4 : Microprocesseur et performance",
          lessons: [
            {
              slug: "coeurs-et-threads",
              title: "Cœurs et threads",
              duration: "10 min",
              description:
                "Comprends les notions de cœurs et de threads d'un processeur.",
              content: [
                "## Les cœurs",
                "Un cœur de processeur est une unité capable d'exécuter des instructions.",
                "Un processeur moderne peut posséder plusieurs cœurs afin de traiter plusieurs tâches plus efficacement.",
                "## Les threads",
                "Un thread représente une séquence d'instructions pouvant être exécutée par un cœur logique.",
                "Selon la technologie utilisée, un processeur peut présenter davantage de threads que de cœurs physiques.",
                "💡 Conseil :",
                "Plus de cœurs ou de threads peut être utile pour le multitâche, mais les performances dépendent toujours de l'ensemble du système.",
              ],
              quiz: [
                {
                  question:
                    "Qu'est-ce qu'un cœur de processeur ?",
                  options: [
                    "Une unité capable d'exécuter des instructions",
                    "Un type de disque dur",
                    "Un port USB",
                    "Une mémoire externe",
                  ],
                  answer: 0,
                  explanation:
                    "Chaque cœur peut exécuter des instructions et contribuer au traitement des tâches.",
                },
                {
                  question:
                    "Pourquoi plusieurs cœurs peuvent-ils être utiles ?",
                  options: [
                    "Pour mieux gérer plusieurs tâches",
                    "Pour remplacer l'écran",
                    "Pour supprimer le système d'exploitation",
                    "Pour augmenter la taille du clavier",
                  ],
                  answer: 0,
                  explanation:
                    "Plusieurs cœurs permettent notamment de traiter plusieurs tâches de manière plus efficace.",
                },
                {
                  question:
                    "Un processeur peut-il avoir plus de threads que de cœurs physiques ?",
                  options: [
                    "Oui",
                    "Non",
                    "Jamais sur les ordinateurs modernes",
                    "Seulement sur les imprimantes",
                  ],
                  answer: 0,
                  explanation:
                    "Certaines technologies permettent à un cœur physique de gérer plusieurs threads logiques.",
                },
              ],
            },

            {
              slug: "frequence-du-processeur",
              title: "La fréquence du processeur",
              duration: "10 min",
              description:
                "Comprends ce que signifie la fréquence d'un processeur.",
              content: [
                "## La fréquence",
                "La fréquence d'un processeur est généralement exprimée en hertz, souvent en gigahertz (GHz) pour les processeurs modernes.",
                "Elle indique le nombre de cycles d'horloge réalisés chaque seconde.",
                "## Attention aux comparaisons",
                "Une fréquence plus élevée ne signifie pas automatiquement qu'un processeur est plus performant.",
                "L'architecture, le nombre de cœurs, la mémoire cache et d'autres caractéristiques sont également importants.",
                "⚠️ Attention :",
                "Il ne faut pas comparer deux processeurs uniquement avec leur fréquence.",
              ],
              quiz: [
                {
                  question:
                    "Quelle unité est couramment utilisée pour exprimer la fréquence d'un processeur ?",
                  options: [
                    "GHz",
                    "Go",
                    "V",
                    "Pixel",
                  ],
                  answer: 0,
                  explanation:
                    "La fréquence des processeurs modernes est souvent exprimée en gigahertz, ou GHz.",
                },
                {
                  question:
                    "Que représente la fréquence ?",
                  options: [
                    "Le nombre de cycles d'horloge par seconde",
                    "La capacité du disque",
                    "La taille de l'écran",
                    "La quantité de RAM",
                  ],
                  answer: 0,
                  explanation:
                    "La fréquence mesure le nombre de cycles d'horloge réalisés chaque seconde.",
                },
                {
                  question:
                    "Une fréquence plus élevée garantit-elle toujours de meilleures performances ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sur les smartphones",
                    "Seulement pour les jeux",
                  ],
                  answer: 1,
                  explanation:
                    "La performance dépend de plusieurs caractéristiques et pas uniquement de la fréquence.",
                },
              ],
            },

            {
              slug: "cache-et-registres",
              title: "Mémoire cache et registres",
              duration: "12 min",
              description:
                "Découvre les mémoires très rapides utilisées par le processeur.",
              content: [
                "## Les registres",
                "Les registres sont de petites zones de stockage très rapides situées dans le processeur. Ils permettent de conserver temporairement des données et des informations nécessaires aux opérations en cours.",
                "## La mémoire cache",
                "La mémoire cache est une mémoire très rapide qui conserve temporairement des données ou instructions fréquemment utilisées par le processeur.",
                "## Pourquoi sont-elles importantes ?",
                "Elles permettent de réduire certains temps d'accès et d'améliorer l'efficacité du traitement.",
                "📌 Important :",
                "La mémoire cache est différente de la RAM et du stockage.",
              ],
              quiz: [
                {
                  question:
                    "Où trouve-t-on les registres ?",
                  options: [
                    "Dans le processeur",
                    "Dans l'écran",
                    "Dans le clavier",
                    "Dans l'imprimante",
                  ],
                  answer: 0,
                  explanation:
                    "Les registres sont des zones de stockage très rapides intégrées au processeur.",
                },
                {
                  question:
                    "Quel est le rôle général de la mémoire cache ?",
                  options: [
                    "Conserver rapidement des données fréquemment utilisées",
                    "Remplacer le disque dur définitivement",
                    "Afficher les images",
                    "Connecter Internet",
                  ],
                  answer: 0,
                  explanation:
                    "La mémoire cache aide le processeur à accéder rapidement aux données et instructions fréquemment utilisées.",
                },
                {
                  question:
                    "La mémoire cache est-elle la même chose que le stockage SSD ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sur les ordinateurs portables",
                    "Seulement sur Linux",
                  ],
                  answer: 1,
                  explanation:
                    "La mémoire cache et le SSD ont des rôles et des caractéristiques très différents.",
                },
              ],
            },

            {
              slug: "execution-des-instructions",
              title: "L'exécution des instructions",
              duration: "12 min",
              description:
                "Découvre simplement comment un processeur exécute les instructions.",
              content: [
                "## Une instruction",
                "Une instruction indique au processeur une opération à effectuer.",
                "Un programme est constitué d'un ensemble d'instructions organisées pour réaliser une tâche.",
                "## Cycle simplifié",
                "De manière simplifiée, le processeur récupère une instruction, l'interprète puis effectue l'opération correspondante.",
                "Ce processus se répète très rapidement.",
                "## Pourquoi est-ce important ?",
                "Comprendre ce fonctionnement permet de mieux comprendre le rôle du processeur dans l'exécution des logiciels.",
                "💡 Conseil :",
                "Il n'est pas nécessaire de connaître immédiatement les détails électroniques du processeur. Commence par retenir le principe général.",
              ],
              quiz: [
                {
                  question:
                    "Qu'est-ce qu'une instruction ?",
                  options: [
                    "Une opération demandée au processeur",
                    "Un câble",
                    "Un écran",
                    "Une imprimante",
                  ],
                  answer: 0,
                  explanation:
                    "Une instruction indique au processeur une opération à réaliser.",
                },
                {
                  question:
                    "Un programme est notamment composé de quoi ?",
                  options: [
                    "Instructions",
                    "Écrans uniquement",
                    "Câbles uniquement",
                    "Batteries uniquement",
                  ],
                  answer: 0,
                  explanation:
                    "Un programme contient des instructions permettant au système d'effectuer une tâche.",
                },
                {
                  question:
                    "Que fait le processeur avec les instructions ?",
                  options: [
                    "Il les exécute",
                    "Il les imprime toujours",
                    "Il les transforme en écran",
                    "Il les stocke toujours définitivement",
                  ],
                  answer: 0,
                  explanation:
                    "Le processeur exécute les instructions des programmes.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 5 : Mémoire et stockage",
          lessons: [
            {
              slug: "bits-et-octets",
              title: "Bits et octets",
              duration: "10 min",
              description:
                "Apprends les unités fondamentales utilisées pour représenter les données.",
              content: [
                "## Le bit",
                "Le bit est la plus petite unité d'information numérique. Il peut prendre deux valeurs : 0 ou 1.",
                "## L'octet",
                "Un octet correspond à 8 bits.",
                "Les capacités de mémoire et de stockage sont généralement exprimées en octets et en multiples d'octets.",
                "## Quelques unités",
                "- Ko : kilo-octet",
                "- Mo : mégaoctet",
                "- Go : gigaoctet",
                "- To : téraoctet",
                "📌 Important :",
                "Un bit et un octet ne sont pas la même chose. Un octet contient 8 bits.",
              ],
              quiz: [
                {
                  question:
                    "Combien de bits contient un octet ?",
                  options: [
                    "2",
                    "4",
                    "8",
                    "16",
                  ],
                  answer: 2,
                  explanation:
                    "Un octet est composé de 8 bits.",
                },
                {
                  question:
                    "Quelles sont les deux valeurs possibles d'un bit ?",
                  options: [
                    "0 et 1",
                    "1 et 2",
                    "A et B",
                    "0 et 10",
                  ],
                  answer: 0,
                  explanation:
                    "Un bit peut représenter deux états, généralement notés 0 et 1.",
                },
                {
                  question:
                    "Quelle unité est plus grande ?",
                  options: [
                    "Go",
                    "bit",
                    "octet",
                    "Ko",
                  ],
                  answer: 0,
                  explanation:
                    "Un gigaoctet représente une quantité de données beaucoup plus importante qu'un bit, un octet ou un kilo-octet.",
                },
              ],
            },

            {
              slug: "memoire-ram",
              title: "La mémoire RAM",
              duration: "10 min",
              description:
                "Comprends le rôle de la mémoire vive.",
              content: [
                "## Définition",
                "La RAM, ou mémoire vive, permet de conserver temporairement les données et programmes utilisés par le système.",
                "## Une mémoire temporaire",
                "Lorsque l'ordinateur est éteint, les données présentes uniquement dans la RAM sont perdues.",
                "## RAM et performances",
                "Une quantité suffisante de RAM permet au système de faire fonctionner plusieurs applications et de manipuler davantage de données simultanément.",
                "💡 Conseil :",
                "La RAM ne remplace pas le stockage. Elle sert principalement au travail temporaire du système.",
              ],
              quiz: [
                {
                  question:
                    "Que signifie RAM ?",
                  options: [
                    "Random Access Memory",
                    "Read Automatic Machine",
                    "Rapid Application Module",
                    "Remote Access Monitor",
                  ],
                  answer: 0,
                  explanation:
                    "RAM signifie Random Access Memory, ou mémoire vive.",
                },
                {
                  question:
                    "Que se passe-t-il généralement avec les données uniquement présentes dans la RAM lorsque l'ordinateur est éteint ?",
                  options: [
                    "Elles sont perdues",
                    "Elles deviennent automatiquement des fichiers",
                    "Elles sont imprimées",
                    "Elles sont envoyées par email",
                  ],
                  answer: 0,
                  explanation:
                    "La RAM est une mémoire volatile. Son contenu n'est normalement pas conservé après l'arrêt du système.",
                },
                {
                  question:
                    "La RAM sert principalement à quoi ?",
                  options: [
                    "Travailler temporairement avec les données et programmes",
                    "Conserver définitivement les fichiers",
                    "Afficher uniquement les vidéos",
                    "Remplacer le clavier",
                  ],
                  answer: 0,
                  explanation:
                    "La RAM fournit un espace de travail temporaire au système et aux applications.",
                },
              ],
            },

            {
              slug: "rom-et-memoire-non-volatile",
              title: "ROM et mémoire non volatile",
              duration: "10 min",
              description:
                "Découvre le principe des mémoires qui conservent leurs données sans alimentation.",
              content: [
                "## Mémoire volatile et non volatile",
                "Une mémoire volatile perd généralement son contenu lorsque l'alimentation est coupée.",
                "Une mémoire non volatile peut conserver les données sans alimentation.",
                "## ROM",
                "ROM signifie Read-Only Memory. Historiquement, la ROM désignait une mémoire principalement destinée à être lue.",
                "Les systèmes modernes utilisent plusieurs technologies de mémoire non volatile pour conserver des informations importantes.",
                "## Différence avec la RAM",
                "La RAM sert principalement de mémoire de travail temporaire, tandis que les mémoires non volatiles conservent leurs données sans alimentation.",
                "📌 Important :",
                "RAM et ROM ont des rôles différents.",
              ],
              quiz: [
                {
                  question:
                    "Que signifie ROM ?",
                  options: [
                    "Read-Only Memory",
                    "Random Operating Machine",
                    "Remote Output Memory",
                    "Read Open Module",
                  ],
                  answer: 0,
                  explanation:
                    "ROM signifie Read-Only Memory.",
                },
                {
                  question:
                    "Une mémoire non volatile peut-elle conserver des données sans alimentation ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement pendant une seconde",
                    "Uniquement dans la RAM",
                  ],
                  answer: 0,
                  explanation:
                    "Une mémoire non volatile conserve les données même lorsque l'alimentation est coupée.",
                },
                {
                  question:
                    "La RAM est-elle généralement volatile ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sur les téléphones",
                    "Seulement sur Linux",
                  ],
                  answer: 0,
                  explanation:
                    "La RAM est une mémoire volatile utilisée comme espace de travail temporaire.",
                },
              ],
            },

            {
              slug: "hdd-ssd-stockage",
              title: "HDD, SSD et stockage externe",
              duration: "12 min",
              description:
                "Découvre les principales technologies de stockage utilisées aujourd'hui.",
              content: [
                "## HDD",
                "Un disque dur, ou HDD, utilise des composants mécaniques et magnétiques pour stocker les données.",
                "## SSD",
                "Un SSD utilise de la mémoire flash et ne possède pas les mêmes mécanismes mobiles qu'un HDD.",
                "Les SSD sont généralement plus rapides pour de nombreux usages courants.",
                "## Stockage externe",
                "Les disques externes et clés USB permettent de transporter ou sauvegarder des données.",
                "## Sauvegarde",
                "Un support externe peut être utile pour conserver une copie de fichiers importants.",
                "💡 Conseil :",
                "Un disque de stockage ne remplace pas une stratégie de sauvegarde complète.",
              ],
              quiz: [
                {
                  question:
                    "Quelle technologie utilise de la mémoire flash ?",
                  options: [
                    "SSD",
                    "HDD",
                    "Clavier",
                    "Écran",
                  ],
                  answer: 0,
                  explanation:
                    "Les SSD utilisent principalement de la mémoire flash pour stocker les données.",
                },
                {
                  question:
                    "Quel élément possède généralement des composants mécaniques mobiles ?",
                  options: [
                    "HDD",
                    "SSD",
                    "RAM",
                    "Processeur",
                  ],
                  answer: 0,
                  explanation:
                    "Les HDD utilisent notamment des plateaux et des têtes de lecture mécaniques.",
                },
                {
                  question:
                    "À quoi peut servir un disque externe ?",
                  options: [
                    "À sauvegarder des fichiers",
                    "À remplacer le processeur",
                    "À augmenter la taille de l'écran",
                    "À devenir un système d'exploitation",
                  ],
                  answer: 0,
                  explanation:
                    "Un disque externe peut notamment servir au stockage et à la sauvegarde de fichiers.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 6 : Les logiciels",
          lessons: [
            {
              slug: "materiel-et-logiciel",
              title: "Matériel et logiciel",
              duration: "10 min",
              description:
                "Apprends à distinguer les composants physiques des programmes.",
              content: [
                "## Le matériel",
                "Le matériel, ou hardware, désigne les composants physiques d'un système informatique.",
                "Exemples : processeur, mémoire, écran, clavier et disque SSD.",
                "## Le logiciel",
                "Le logiciel, ou software, désigne les programmes et instructions utilisés par le système.",
                "Exemples : système d'exploitation, navigateur, traitement de texte et lecteur multimédia.",
                "## Les deux fonctionnent ensemble",
                "Un ordinateur a besoin du matériel pour exécuter physiquement les opérations et des logiciels pour lui indiquer quoi faire.",
                "📌 Important :",
                "Hardware = matériel. Software = logiciel.",
              ],
              quiz: [
                {
                  question:
                    "Que signifie hardware ?",
                  options: [
                    "Matériel",
                    "Logiciel",
                    "Internet",
                    "Compte utilisateur",
                  ],
                  answer: 0,
                  explanation:
                    "Hardware désigne les composants physiques de l'ordinateur.",
                },
                {
                  question:
                    "Lequel est un logiciel ?",
                  options: [
                    "Un navigateur web",
                    "Une souris",
                    "Une barrette RAM",
                    "Un processeur",
                  ],
                  answer: 0,
                  explanation:
                    "Un navigateur est un programme, donc un logiciel.",
                },
                {
                  question:
                    "Le matériel et les logiciels sont-ils complémentaires ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement pour les jeux",
                    "Seulement pour les téléphones",
                  ],
                  answer: 0,
                  explanation:
                    "Les logiciels utilisent le matériel pour exécuter les opérations demandées.",
                },
              ],
            },

            {
              slug: "logiciels-systeme",
              title: "Les logiciels système",
              duration: "10 min",
              description:
                "Découvre les logiciels qui permettent au système informatique de fonctionner.",
              content: [
                "## Définition",
                "Les logiciels système permettent de gérer le fonctionnement général de l'ordinateur et de servir d'intermédiaire entre le matériel et les applications.",
                "## Exemples",
                "- Systèmes d'exploitation",
                "- Pilotes",
                "- Certains utilitaires système",
                "## Pourquoi sont-ils nécessaires ?",
                "Ils permettent notamment de gérer les ressources matérielles et de fournir des services aux applications.",
                "💡 Conseil :",
                "Le système d'exploitation est le logiciel système le plus visible pour l'utilisateur.",
              ],
              quiz: [
                {
                  question:
                    "Quel est un exemple de logiciel système ?",
                  options: [
                    "Un système d'exploitation",
                    "Une photo",
                    "Un document texte",
                    "Une vidéo",
                  ],
                  answer: 0,
                  explanation:
                    "Le système d'exploitation est un logiciel système essentiel.",
                },
                {
                  question:
                    "Quel est le rôle général des logiciels système ?",
                  options: [
                    "Gérer le fonctionnement du système",
                    "Uniquement modifier des photos",
                    "Uniquement jouer de la musique",
                    "Créer des documents papier",
                  ],
                  answer: 0,
                  explanation:
                    "Ils assurent notamment la gestion du matériel et des services nécessaires aux applications.",
                },
                {
                  question:
                    "Un pilote est-il lié au fonctionnement du matériel ?",
                  options: [
                    "Oui",
                    "Non",
                    "Uniquement aux documents",
                    "Uniquement à Internet",
                  ],
                  answer: 0,
                  explanation:
                    "Un pilote permet au système d'exploitation de communiquer avec un périphérique ou un composant matériel.",
                },
              ],
            },

            {
              slug: "logiciels-applicatifs",
              title: "Les logiciels applicatifs",
              duration: "10 min",
              description:
                "Découvre les programmes utilisés directement pour réaliser des tâches.",
              content: [
                "## Définition",
                "Un logiciel applicatif est conçu pour aider l'utilisateur à réaliser une tâche particulière.",
                "## Exemples",
                "- Traitement de texte",
                "- Tableur",
                "- Navigateur web",
                "- Lecteur multimédia",
                "- Logiciel de dessin",
                "- Application de messagerie",
                "## Logiciel système ou applicatif ?",
                "Le système d'exploitation gère l'environnement informatique général, tandis que les applications servent généralement à réaliser des tâches spécifiques.",
                "📌 Important :",
                "Une application peut dépendre du système d'exploitation pour fonctionner.",
              ],
              quiz: [
                {
                  question:
                    "Lequel est un logiciel applicatif ?",
                  options: [
                    "Un traitement de texte",
                    "Un processeur",
                    "Une barrette RAM",
                    "Une carte mère",
                  ],
                  answer: 0,
                  explanation:
                    "Un traitement de texte est une application utilisée directement pour réaliser une tâche.",
                },
                {
                  question:
                    "À quoi sert généralement une application ?",
                  options: [
                    "À réaliser une tâche pour l'utilisateur",
                    "À remplacer toute la carte mère",
                    "À fournir toujours de l'électricité",
                    "À devenir un processeur",
                  ],
                  answer: 0,
                  explanation:
                    "Les applications sont conçues pour répondre à des besoins précis.",
                },
                {
                  question:
                    "Un navigateur web est-il une application ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sur les téléphones",
                    "Seulement hors ligne",
                  ],
                  answer: 0,
                  explanation:
                    "Un navigateur est un logiciel applicatif permettant notamment d'accéder à des contenus web.",
                },
              ],
            },

            {
              slug: "utilitaires-et-pilotes",
              title: "Utilitaires et pilotes",
              duration: "12 min",
              description:
                "Comprends le rôle des utilitaires et des pilotes.",
              content: [
                "## Les utilitaires",
                "Les utilitaires sont des logiciels conçus pour effectuer des tâches de maintenance, de gestion ou d'assistance du système.",
                "Exemples : outils de sauvegarde, gestion du stockage ou sécurité.",
                "## Les pilotes",
                "Un pilote est un logiciel permettant au système d'exploitation de communiquer correctement avec un composant ou un périphérique.",
                "## Pourquoi mettre à jour les pilotes ?",
                "Les mises à jour peuvent améliorer la compatibilité, les performances ou la sécurité.",
                "⚠️ Attention :",
                "Il faut télécharger les pilotes depuis des sources fiables et adaptées au matériel.",
              ],
              quiz: [
                {
                  question:
                    "Quel est le rôle d'un pilote ?",
                  options: [
                    "Permettre au système de communiquer avec un matériel",
                    "Créer un écran",
                    "Remplacer la RAM",
                    "Stocker définitivement les fichiers",
                  ],
                  answer: 0,
                  explanation:
                    "Le pilote sert d'intermédiaire logiciel entre le système et un périphérique ou composant.",
                },
                {
                  question:
                    "Quel logiciel peut être considéré comme un utilitaire ?",
                  options: [
                    "Un outil de sauvegarde",
                    "Un câble HDMI",
                    "Une souris",
                    "Un processeur",
                  ],
                  answer: 0,
                  explanation:
                    "Les outils de sauvegarde font partie des utilitaires pouvant aider à gérer le système.",
                },
                {
                  question:
                    "Pourquoi les mises à jour de pilotes peuvent-elles être utiles ?",
                  options: [
                    "Pour améliorer compatibilité et fonctionnement",
                    "Pour supprimer la carte mère",
                    "Pour transformer un PC en téléphone",
                    "Pour supprimer tous les fichiers",
                  ],
                  answer: 0,
                  explanation:
                    "Les mises à jour peuvent corriger des problèmes et améliorer la compatibilité ou les performances.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 7 : Les systèmes d'exploitation",
          lessons: [
            {
              slug: "definition-systeme-exploitation",
              title: "Qu'est-ce qu'un système d'exploitation ?",
              duration: "12 min",
              description:
                "Découvre le logiciel central qui permet d'utiliser un ordinateur.",
              content: [
                "## Définition",
                "Un système d'exploitation, ou OS, est un logiciel système qui gère les ressources de l'ordinateur et fournit un environnement permettant d'exécuter des applications.",
                "## Exemples",
                "- Windows",
                "- Linux",
                "- macOS",
                "- Android",
                "- iOS",
                "## Son importance",
                "Sans système d'exploitation ou logiciel équivalent, l'utilisation d'un ordinateur moderne serait beaucoup plus complexe.",
                "📌 Important :",
                "Le système d'exploitation fait le lien entre l'utilisateur, les applications et une grande partie du matériel.",
              ],
              quiz: [
                {
                  question:
                    "Que signifie OS ?",
                  options: [
                    "Operating System",
                    "Online Storage",
                    "Open Software",
                    "Office System",
                  ],
                  answer: 0,
                  explanation:
                    "OS signifie Operating System, c'est-à-dire système d'exploitation.",
                },
                {
                  question:
                    "Quel est le rôle général d'un système d'exploitation ?",
                  options: [
                    "Gérer les ressources et permettre l'exécution des applications",
                    "Uniquement afficher des images",
                    "Uniquement connecter un clavier",
                    "Remplacer le processeur",
                  ],
                  answer: 0,
                  explanation:
                    "Le système d'exploitation gère les ressources et fournit des services aux applications.",
                },
                {
                  question:
                    "Lequel est un système d'exploitation ?",
                  options: [
                    "Linux",
                    "HDMI",
                    "SSD",
                    "USB",
                  ],
                  answer: 0,
                  explanation:
                    "Linux est un système d'exploitation.",
                },
              ],
            },

            {
              slug: "fonctions-systeme-exploitation",
              title: "Les fonctions d'un système d'exploitation",
              duration: "12 min",
              description:
                "Découvre les principales tâches assurées par un système d'exploitation.",
              content: [
                "## Gestion des fichiers",
                "Le système d'exploitation permet de créer, lire, modifier, déplacer et supprimer des fichiers.",
                "## Gestion de la mémoire",
                "Il organise l'utilisation de la mémoire par les différents programmes.",
                "## Gestion des processus",
                "Il coordonne l'exécution des programmes et des tâches.",
                "## Gestion des périphériques",
                "Il permet aux applications d'utiliser différents périphériques grâce notamment aux pilotes.",
                "## Interface utilisateur",
                "Il fournit également une interface permettant à l'utilisateur d'interagir avec le système.",
                "💡 Conseil :",
                "Retenir quatre grandes fonctions : fichiers, mémoire, processus et périphériques.",
              ],
              quiz: [
                {
                  question:
                    "Le système d'exploitation peut-il gérer les fichiers ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement les photos",
                    "Seulement les vidéos",
                  ],
                  answer: 0,
                  explanation:
                    "La gestion des fichiers fait partie des fonctions essentielles d'un système d'exploitation.",
                },
                {
                  question:
                    "Que gère notamment le système d'exploitation concernant les programmes ?",
                  options: [
                    "Les processus",
                    "La couleur du clavier uniquement",
                    "La taille de l'écran uniquement",
                    "La batterie d'un autre appareil uniquement",
                  ],
                  answer: 0,
                  explanation:
                    "Le système d'exploitation gère les processus et l'exécution des programmes.",
                },
                {
                  question:
                    "Quel élément permet notamment d'interagir avec le système ?",
                  options: [
                    "L'interface utilisateur",
                    "Le disque dur seul",
                    "Le câble d'alimentation",
                    "Le ventilateur",
                  ],
                  answer: 0,
                  explanation:
                    "L'interface utilisateur permet à l'utilisateur d'interagir avec le système.",
                },
              ],
            },

            {
              slug: "types-systemes-exploitation",
              title: "Les types de systèmes d'exploitation",
              duration: "12 min",
              description:
                "Découvre les principaux types de systèmes d'exploitation.",
              content: [
                "## Ordinateurs personnels",
                "Windows, macOS et différentes distributions Linux sont utilisés sur des ordinateurs personnels.",
                "## Smartphones et tablettes",
                "Android et iOS sont des systèmes d'exploitation mobiles largement utilisés.",
                "## Systèmes spécialisés",
                "Certains appareils utilisent des systèmes adaptés à des besoins particuliers, notamment dans les systèmes embarqués.",
                "## Un même principe",
                "Même si leur interface et leurs fonctions varient, ces systèmes ont en commun la gestion des ressources et l'exécution des logiciels.",
                "📌 Important :",
                "Le système d'exploitation dépend du type d'appareil et de son utilisation.",
              ],
              quiz: [
                {
                  question:
                    "Lequel est un système d'exploitation pour ordinateur ?",
                  options: [
                    "Windows",
                    "HDMI",
                    "USB",
                    "SSD",
                  ],
                  answer: 0,
                  explanation:
                    "Windows est un système d'exploitation utilisé notamment sur les ordinateurs personnels.",
                },
                {
                  question:
                    "Lequel est un système d'exploitation mobile ?",
                  options: [
                    "Android",
                    "Excel",
                    "Linux uniquement",
                    "HDMI",
                  ],
                  answer: 0,
                  explanation:
                    "Android est un système d'exploitation mobile.",
                },
                {
                  question:
                    "Pourquoi existe-t-il différents systèmes d'exploitation ?",
                  options: [
                    "Les appareils et besoins peuvent être différents",
                    "Parce qu'un ordinateur ne peut utiliser qu'un écran",
                    "Parce que tous les processeurs sont identiques",
                    "Pour remplacer les câbles",
                  ],
                  answer: 0,
                  explanation:
                    "Les systèmes sont adaptés à différents matériels, usages et besoins.",
                },
              ],
            },

            {
              slug: "fichiers-utilisateurs-processus",
              title: "Fichiers, utilisateurs et processus",
              duration: "12 min",
              description:
                "Comprends trois notions importantes gérées par le système d'exploitation.",
              content: [
                "## Les fichiers",
                "Un fichier contient des données. Il peut s'agir d'un document, d'une image, d'une vidéo ou d'un autre type de contenu.",
                "## Les utilisateurs",
                "Un système peut gérer plusieurs utilisateurs avec des comptes et des autorisations différents.",
                "## Les processus",
                "Un processus correspond à un programme en cours d'exécution.",
                "## Pourquoi ces notions sont importantes ?",
                "Elles permettent au système de gérer les données, les personnes et les programmes de manière organisée.",
                "💡 Conseil :",
                "Une application installée est un programme. Lorsqu'elle fonctionne, elle peut donner naissance à un ou plusieurs processus.",
              ],
              quiz: [
                {
                  question:
                    "Qu'est-ce qu'un processus ?",
                  options: [
                    "Un programme en cours d'exécution",
                    "Un type de clavier",
                    "Un fichier supprimé",
                    "Un câble",
                  ],
                  answer: 0,
                  explanation:
                    "Un processus représente notamment un programme ou une partie de programme en cours d'exécution.",
                },
                {
                  question:
                    "Pourquoi un système peut-il avoir plusieurs comptes utilisateurs ?",
                  options: [
                    "Pour gérer différents utilisateurs et leurs autorisations",
                    "Pour augmenter automatiquement la RAM",
                    "Pour remplacer le processeur",
                    "Pour créer plus de ports USB",
                  ],
                  answer: 0,
                  explanation:
                    "Les comptes permettent notamment de séparer les utilisateurs et de contrôler leurs accès.",
                },
                {
                  question:
                    "Lequel est un fichier ?",
                  options: [
                    "Une photo enregistrée",
                    "Un processeur",
                    "Une souris",
                    "Une carte mère",
                  ],
                  answer: 0,
                  explanation:
                    "Une photo enregistrée sous forme numérique est un fichier.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 8 : Logiciels et outils",
          lessons: [
            {
              slug: "bureautique",
              title: "Les outils bureautiques",
              duration: "12 min",
              description:
                "Découvre les principales catégories de logiciels bureautiques.",
              content: [
                "## La bureautique",
                "Les logiciels bureautiques permettent notamment de créer des documents, réaliser des calculs, préparer des présentations et organiser des informations.",
                "## Les principales catégories",
                "- Traitement de texte",
                "- Tableur",
                "- Présentation",
                "- Gestion de documents",
                "## Exemples d'utilisation",
                "Un traitement de texte sert à rédiger des documents. Un tableur permet notamment d'effectuer des calculs et d'organiser des données. Un logiciel de présentation permet de créer des diapositives.",
                "💡 Conseil :",
                "Choisis l'outil en fonction de la tâche plutôt que d'utiliser toujours le même logiciel.",
              ],
              quiz: [
                {
                  question:
                    "Quel outil est adapté à la rédaction d'un rapport ?",
                  options: [
                    "Un traitement de texte",
                    "Un lecteur vidéo",
                    "Un pilote",
                    "Un gestionnaire de périphériques uniquement",
                  ],
                  answer: 0,
                  explanation:
                    "Le traitement de texte est conçu pour créer et modifier des documents textuels.",
                },
                {
                  question:
                    "Quel outil est particulièrement adapté aux calculs et tableaux ?",
                  options: [
                    "Un tableur",
                    "Un lecteur audio",
                    "Un navigateur uniquement",
                    "Un éditeur vidéo",
                  ],
                  answer: 0,
                  explanation:
                    "Un tableur permet d'organiser des données et d'effectuer des calculs.",
                },
                {
                  question:
                    "Quel outil sert principalement à créer des diapositives ?",
                  options: [
                    "Un logiciel de présentation",
                    "Un explorateur de fichiers",
                    "Un antivirus",
                    "Un pilote",
                  ],
                  answer: 0,
                  explanation:
                    "Les logiciels de présentation servent à créer des présentations sous forme de diapositives.",
                },
              ],
            },

            {
              slug: "traitement-de-texte",
              title: "Le traitement de texte",
              duration: "10 min",
              description:
                "Apprends à quoi sert un logiciel de traitement de texte.",
              content: [
                "## Définition",
                "Un traitement de texte permet de créer, modifier, mettre en forme et enregistrer des documents textuels.",
                "## Fonctions courantes",
                "- Saisir du texte",
                "- Modifier la police",
                "- Utiliser des titres",
                "- Ajouter des images",
                "- Créer des tableaux",
                "- Imprimer ou exporter un document",
                "## Formats",
                "Les documents peuvent être enregistrés dans différents formats selon les besoins.",
                "📌 Important :",
                "Enregistrer régulièrement son travail permet de réduire le risque de perdre les modifications.",
              ],
              quiz: [
                {
                  question:
                    "À quoi sert principalement un traitement de texte ?",
                  options: [
                    "Créer et modifier des documents textuels",
                    "Réparer un processeur",
                    "Gérer une batterie",
                    "Remplacer la RAM",
                  ],
                  answer: 0,
                  explanation:
                    "Le traitement de texte est destiné à la création et à la modification de documents.",
                },
                {
                  question:
                    "Peut-on généralement ajouter une image à un document texte ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement sur téléphone",
                    "Seulement sans clavier",
                  ],
                  answer: 0,
                  explanation:
                    "Les traitements de texte modernes permettent généralement d'insérer des images.",
                },
                {
                  question:
                    "Pourquoi enregistrer régulièrement son travail ?",
                  options: [
                    "Pour éviter de perdre les modifications",
                    "Pour augmenter la RAM",
                    "Pour accélérer Internet",
                    "Pour changer le processeur",
                  ],
                  answer: 0,
                  explanation:
                    "Une sauvegarde régulière réduit le risque de perdre les modifications en cas de problème.",
                },
              ],
            },

            {
              slug: "tableurs",
              title: "Les tableurs",
              duration: "12 min",
              description:
                "Découvre comment les tableurs permettent d'organiser et de calculer des données.",
              content: [
                "## Définition",
                "Un tableur organise les données dans des lignes et des colonnes.",
                "## Les cellules",
                "Une cellule est une zone dans laquelle on peut saisir une valeur, un texte ou une formule.",
                "## Les formules",
                "Les formules permettent d'effectuer automatiquement des calculs à partir des données.",
                "## Exemples",
                "- Budget personnel",
                "- Liste de ventes",
                "- Notes scolaires",
                "- Inventaire",
                "💡 Conseil :",
                "Un tableur devient particulièrement puissant lorsqu'on combine les données, les formules et les fonctions.",
              ],
              quiz: [
                {
                  question:
                    "Comment les données sont-elles généralement organisées dans un tableur ?",
                  options: [
                    "En lignes et colonnes",
                    "Uniquement en images",
                    "Uniquement en vidéos",
                    "Dans des câbles",
                  ],
                  answer: 0,
                  explanation:
                    "Les tableurs organisent les informations dans des lignes et des colonnes.",
                },
                {
                  question:
                    "Qu'est-ce qu'une cellule ?",
                  options: [
                    "Une zone du tableau où l'on peut saisir une donnée",
                    "Un câble",
                    "Un processeur",
                    "Une imprimante",
                  ],
                  answer: 0,
                  explanation:
                    "Une cellule est l'une des unités de base d'une feuille de calcul.",
                },
                {
                  question:
                    "À quoi servent les formules ?",
                  options: [
                    "À effectuer des calculs automatiquement",
                    "À remplacer le clavier",
                    "À augmenter la taille de l'écran",
                    "À connecter une souris",
                  ],
                  answer: 0,
                  explanation:
                    "Les formules permettent de réaliser automatiquement des opérations à partir des données.",
                },
              ],
            },

            {
              slug: "navigateurs-et-outils-specifiques",
              title: "Navigateurs et outils spécialisés",
              duration: "12 min",
              description:
                "Découvre les navigateurs et les logiciels adaptés à différents métiers.",
              content: [
                "## Les navigateurs",
                "Un navigateur web est une application permettant notamment d'accéder à des contenus et services disponibles sur le Web.",
                "Exemples : Chrome, Firefox, Safari, Edge.",
                "## Les outils spécialisés",
                "Certains métiers utilisent des logiciels conçus pour des besoins spécifiques.",
                "Exemples : logiciels de comptabilité, conception graphique, montage vidéo, architecture, médecine, gestion de projets ou programmation.",
                "## Choisir un outil",
                "Le bon logiciel dépend du besoin, du matériel disponible, du budget et parfois des exigences professionnelles.",
                "📌 Important :",
                "Un outil spécialisé peut être excellent pour une tâche précise mais inutile pour une autre.",
              ],
              quiz: [
                {
                  question:
                    "À quoi sert principalement un navigateur web ?",
                  options: [
                    "Accéder à des contenus et services du Web",
                    "Remplacer le processeur",
                    "Installer physiquement la RAM",
                    "Alimenter l'ordinateur",
                  ],
                  answer: 0,
                  explanation:
                    "Le navigateur permet notamment d'accéder aux sites et services disponibles sur le Web.",
                },
                {
                  question:
                    "Pourquoi existe-t-il des logiciels spécialisés ?",
                  options: [
                    "Pour répondre à des besoins professionnels ou particuliers",
                    "Pour remplacer tous les systèmes d'exploitation",
                    "Pour supprimer les fichiers",
                    "Pour augmenter automatiquement Internet",
                  ],
                  answer: 0,
                  explanation:
                    "De nombreux domaines ont besoin d'outils adaptés à leurs tâches spécifiques.",
                },
                {
                  question:
                    "Quel logiciel pourrait être spécialisé pour un comptable ?",
                  options: [
                    "Un logiciel de comptabilité",
                    "Un lecteur vidéo uniquement",
                    "Un pilote d'imprimante",
                    "Un clavier",
                  ],
                  answer: 0,
                  explanation:
                    "Les logiciels de comptabilité sont conçus pour gérer des tâches financières et comptables.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 9 : Les systèmes de numération",
          lessons: [
            {
              slug: "systeme-decimal",
              title: "Le système décimal",
              duration: "10 min",
              description:
                "Comprends le système de numération que nous utilisons quotidiennement.",
              content: [
                "## Base 10",
                "Le système décimal utilise dix chiffres : 0, 1, 2, 3, 4, 5, 6, 7, 8 et 9.",
                "## Valeur de position",
                "La valeur d'un chiffre dépend de sa position.",
                "Par exemple, dans 345, le 3 représente trois centaines, le 4 quatre dizaines et le 5 cinq unités.",
                "## Pourquoi l'apprendre ?",
                "Le système décimal sert de point de départ pour comprendre les autres systèmes de numération.",
                "💡 Conseil :",
                "La position des chiffres est essentielle pour comprendre les conversions.",
              ],
              quiz: [
                {
                  question:
                    "Quelle est la base du système décimal ?",
                  options: [
                    "2",
                    "8",
                    "10",
                    "16",
                  ],
                  answer: 2,
                  explanation:
                    "Le système décimal est un système en base 10.",
                },
                {
                  question:
                    "Quels chiffres sont utilisés en décimal ?",
                  options: [
                    "0 à 9",
                    "0 et 1 uniquement",
                    "0 à 7",
                    "0 à 15 uniquement",
                  ],
                  answer: 0,
                  explanation:
                    "Le système décimal utilise les dix chiffres de 0 à 9.",
                },
                {
                  question:
                    "Dans 345, quelle est la valeur du chiffre 3 ?",
                  options: [
                    "3 unités",
                    "3 dizaines",
                    "3 centaines",
                    "3 milliers",
                  ],
                  answer: 2,
                  explanation:
                    "Le chiffre 3 est placé à la position des centaines, donc il représente 300.",
                },
              ],
            },

            {
              slug: "systeme-binaire",
              title: "Le système binaire",
              duration: "12 min",
              description:
                "Découvre le système de numération utilisé au cœur des ordinateurs.",
              content: [
                "## Base 2",
                "Le système binaire utilise uniquement deux chiffres : 0 et 1.",
                "Les ordinateurs utilisent des représentations binaires parce que les circuits électroniques peuvent représenter différents états physiques correspondant notamment à deux valeurs logiques.",
                "## Positions binaires",
                "Les positions représentent des puissances de 2.",
                "Par exemple, 101 en binaire représente 5 en décimal.",
                "## Bit",
                "Chaque chiffre binaire correspond à un bit.",
                "📌 Important :",
                "Binaire = base 2. Décimal = base 10.",
              ],
              quiz: [
                {
                  question:
                    "Quelle est la base du système binaire ?",
                  options: [
                    "2",
                    "8",
                    "10",
                    "16",
                  ],
                  answer: 0,
                  explanation:
                    "Le système binaire fonctionne en base 2.",
                },
                {
                  question:
                    "Quels chiffres sont utilisés en binaire ?",
                  options: [
                    "0 et 1",
                    "0 à 9",
                    "0 à 7",
                    "0 à 15",
                  ],
                  answer: 0,
                  explanation:
                    "Le système binaire n'utilise que les chiffres 0 et 1.",
                },
                {
                  question:
                    "Que vaut 101 en binaire en décimal ?",
                  options: [
                    "3",
                    "4",
                    "5",
                    "6",
                  ],
                  answer: 2,
                  explanation:
                    "101₂ = 1×4 + 0×2 + 1×1 = 5.",
                },
              ],
            },

            {
              slug: "octal-et-hexadecimal",
              title: "Les systèmes octal et hexadécimal",
              duration: "12 min",
              description:
                "Découvre deux systèmes utiles pour représenter les données numériques.",
              content: [
                "## Le système octal",
                "Le système octal utilise huit chiffres : 0 à 7.",
                "## Le système hexadécimal",
                "Le système hexadécimal utilise seize symboles : 0 à 9 puis A, B, C, D, E et F.",
                "## Pourquoi utiliser l'hexadécimal ?",
                "Il permet de représenter de manière plus compacte de longues séquences binaires.",
                "Par exemple, un chiffre hexadécimal correspond exactement à quatre bits.",
                "💡 Conseil :",
                "En informatique, l'hexadécimal est très courant dans certains domaines techniques comme les adresses mémoire, les couleurs ou le débogage.",
              ],
              quiz: [
                {
                  question:
                    "Quelle est la base du système octal ?",
                  options: [
                    "2",
                    "8",
                    "10",
                    "16",
                  ],
                  answer: 1,
                  explanation:
                    "Le système octal est en base 8.",
                },
                {
                  question:
                    "Quelle est la base du système hexadécimal ?",
                  options: [
                    "2",
                    "8",
                    "10",
                    "16",
                  ],
                  answer: 3,
                  explanation:
                    "Le système hexadécimal est en base 16.",
                },
                {
                  question:
                    "Quels symboles supplémentaires sont utilisés en hexadécimal ?",
                  options: [
                    "A à F",
                    "G à L",
                    "X à Z",
                    "Uniquement 0 et 1",
                  ],
                  answer: 0,
                  explanation:
                    "Après 0 à 9, l'hexadécimal utilise A, B, C, D, E et F.",
                },
              ],
            },

            {
              slug: "conversions-numeriques",
              title: "Conversions entre les systèmes",
              duration: "15 min",
              description:
                "Apprends les bases des conversions entre décimal, binaire et hexadécimal.",
              content: [
                "## Décimal vers binaire",
                "Pour convertir un nombre décimal en binaire, on peut effectuer des divisions successives par 2 et lire les restes dans l'ordre inverse.",
                "## Binaire vers décimal",
                "On additionne les puissances de 2 correspondant aux positions contenant un 1.",
                "Exemple : 1010₂ = 8 + 2 = 10.",
                "## Binaire vers hexadécimal",
                "On regroupe les bits par groupes de quatre à partir de la droite.",
                "Exemple : 1010₂ correspond à A₁₆.",
                "📌 Important :",
                "Les conversions deviennent faciles avec la pratique. Il est important de comprendre la logique plutôt que de mémoriser uniquement des résultats.",
              ],
              quiz: [
                {
                  question:
                    "Que vaut 1010 en binaire ?",
                  options: [
                    "8",
                    "9",
                    "10",
                    "12",
                  ],
                  answer: 2,
                  explanation:
                    "1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10.",
                },
                {
                  question:
                    "Combien de bits correspondent à un chiffre hexadécimal ?",
                  options: [
                    "2",
                    "4",
                    "8",
                    "16",
                  ],
                  answer: 1,
                  explanation:
                    "Un chiffre hexadécimal représente 4 bits.",
                },
                {
                  question:
                    "Que vaut A en hexadécimal en décimal ?",
                  options: [
                    "8",
                    "9",
                    "10",
                    "11",
                  ],
                  answer: 2,
                  explanation:
                    "En hexadécimal, A représente la valeur décimale 10.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 10 : Maintenance, sécurité et informatique moderne",
          lessons: [
            {
              slug: "maintenance-informatique",
              title: "Maintenance informatique de base",
              duration: "10 min",
              description:
                "Apprends les bonnes pratiques pour maintenir un ordinateur en bon état.",
              content: [
                "## Maintenance matérielle",
                "Il est important de garder les équipements propres, correctement ventilés et protégés contre les chocs et l'humidité.",
                "## Maintenance logicielle",
                "Les mises à jour permettent notamment de corriger des bugs et certaines failles de sécurité.",
                "## Organisation",
                "Supprimer les fichiers inutiles, organiser les données et vérifier régulièrement les sauvegardes facilitent l'utilisation du système.",
                "## Prévention",
                "Une bonne maintenance vise surtout à prévenir les problèmes plutôt qu'à attendre une panne.",
                "💡 Conseil :",
                "Ne bloque jamais les mises à jour importantes de sécurité sans raison.",
              ],
              quiz: [
                {
                  question:
                    "Pourquoi effectuer des mises à jour ?",
                  options: [
                    "Pour améliorer notamment la sécurité et corriger des problèmes",
                    "Pour supprimer tous les fichiers",
                    "Pour réduire la RAM",
                    "Pour remplacer le clavier",
                  ],
                  answer: 0,
                  explanation:
                    "Les mises à jour peuvent corriger des bugs et des vulnérabilités de sécurité.",
                },
                {
                  question:
                    "Pourquoi garder un ordinateur correctement ventilé ?",
                  options: [
                    "Pour aider à éviter une surchauffe",
                    "Pour augmenter automatiquement Internet",
                    "Pour supprimer les virus",
                    "Pour remplacer le système d'exploitation",
                  ],
                  answer: 0,
                  explanation:
                    "Une bonne ventilation aide les composants à fonctionner dans des conditions thermiques appropriées.",
                },
                {
                  question:
                    "Quel principe est préférable en maintenance ?",
                  options: [
                    "Prévenir les problèmes",
                    "Attendre toujours la panne",
                    "Ignorer les mises à jour",
                    "Ne jamais sauvegarder",
                  ],
                  answer: 0,
                  explanation:
                    "La maintenance préventive permet de réduire certains risques et problèmes futurs.",
                },
              ],
            },

            {
              slug: "securite-numerique",
              title: "Sécurité numérique",
              duration: "12 min",
              description:
                "Découvre les principales habitudes pour protéger tes comptes et tes données.",
              content: [
                "## Les mots de passe",
                "Utilise des mots de passe longs et difficiles à deviner. Évite de réutiliser le même mot de passe partout.",
                "## Authentification à plusieurs facteurs",
                "Lorsque cela est disponible, l'authentification à plusieurs facteurs ajoute une protection supplémentaire.",
                "## Mises à jour",
                "Les mises à jour corrigent régulièrement des vulnérabilités connues.",
                "## Sauvegardes",
                "Une sauvegarde permet de récupérer des données en cas de perte, de panne ou d'incident.",
                "⚠️ Attention :",
                "Ne communique jamais un mot de passe ou un code de sécurité à une personne simplement parce qu'elle le demande.",
              ],
              quiz: [
                {
                  question:
                    "Quelle pratique est recommandée pour les mots de passe ?",
                  options: [
                    "Utiliser le même partout",
                    "Utiliser des mots de passe longs et différents",
                    "Les écrire publiquement",
                    "Utiliser uniquement son prénom",
                  ],
                  answer: 1,
                  explanation:
                    "Des mots de passe longs et uniques réduisent les risques liés à la compromission d'un compte.",
                },
                {
                  question:
                    "Que peut apporter l'authentification à plusieurs facteurs ?",
                  options: [
                    "Une protection supplémentaire",
                    "Plus de stockage",
                    "Un écran plus grand",
                    "Une batterie plus longue",
                  ],
                  answer: 0,
                  explanation:
                    "Elle ajoute une ou plusieurs étapes de vérification en plus du mot de passe.",
                },
                {
                  question:
                    "Pourquoi effectuer des sauvegardes ?",
                  options: [
                    "Pour pouvoir récupérer des données perdues",
                    "Pour accélérer automatiquement le processeur",
                    "Pour supprimer les comptes",
                    "Pour augmenter la fréquence CPU",
                  ],
                  answer: 0,
                  explanation:
                    "Les sauvegardes permettent de restaurer des données après une perte ou un incident.",
                },
              ],
            },

            {
              slug: "phishing-et-vie-privee",
              title: "Phishing, données et vie privée",
              duration: "12 min",
              description:
                "Apprends à reconnaître les tentatives de fraude et à protéger tes informations personnelles.",
              content: [
                "## Le phishing",
                "Le phishing est une technique utilisée pour tromper une personne afin de lui faire communiquer des informations sensibles ou effectuer une action dangereuse.",
                "## Signes possibles",
                "- Message urgent ou menaçant",
                "- Demande inhabituelle d'informations",
                "- Lien suspect",
                "- Adresse d'expéditeur étrange",
                "- Promesse trop belle pour être vraie",
                "## Vie privée",
                "Les services numériques peuvent traiter des données personnelles. Il est important de comprendre quelles informations sont collectées et comment elles sont utilisées.",
                "⚠️ Attention :",
                "Ne clique pas automatiquement sur un lien simplement parce qu'un message semble provenir d'une entreprise connue.",
              ],
              quiz: [
                {
                  question:
                    "Qu'est-ce que le phishing ?",
                  options: [
                    "Une tentative de tromper une personne pour obtenir des informations ou lui faire effectuer une action",
                    "Une méthode de sauvegarde",
                    "Un type de processeur",
                    "Un système d'exploitation",
                  ],
                  answer: 0,
                  explanation:
                    "Le phishing repose sur la tromperie pour obtenir des informations ou provoquer une action.",
                },
                {
                  question:
                    "Lequel peut être un signe de phishing ?",
                  options: [
                    "Un message très urgent demandant des informations sensibles",
                    "Une sauvegarde normale",
                    "Une mise à jour officielle",
                    "Un document personnel",
                  ],
                  answer: 0,
                  explanation:
                    "Les messages urgents demandant des informations sensibles sont un signal d'alerte fréquent.",
                },
                {
                  question:
                    "Que faut-il faire face à un lien suspect ?",
                  options: [
                    "Cliquer immédiatement",
                    "Vérifier avant d'agir",
                    "Le partager avec tout le monde",
                    "Donner son mot de passe",
                  ],
                  answer: 1,
                  explanation:
                    "Il faut vérifier l'origine du message et du lien avant d'effectuer une action.",
                },
              ],
            },

            {
              slug: "cloud-ia-et-informatique-moderne",
              title: "Cloud, IA et informatique moderne",
              duration: "15 min",
              description:
                "Découvre quelques notions modernes importantes sans entrer dans des domaines spécialisés.",
              content: [
                "## Le cloud",
                "Le cloud désigne des services informatiques accessibles à distance, notamment pour stocker des données, utiliser des applications ou fournir de la puissance de calcul.",
                "## Intelligence artificielle",
                "L'intelligence artificielle regroupe différentes techniques permettant à des systèmes informatiques d'effectuer des tâches qui nécessitent habituellement certaines capacités humaines, comme analyser des données, reconnaître des éléments ou générer du contenu.",
                "## Informatique moderne",
                "Les technologies modernes combinent de plus en plus le matériel, les logiciels, les services en ligne et l'intelligence artificielle.",
                "## Rester critique",
                "Les outils modernes sont puissants, mais leurs résultats doivent être vérifiés, particulièrement lorsqu'une décision importante dépend de ces résultats.",
                "📌 Important :",
                "Comprendre les bases reste essentiel même lorsque les technologies deviennent plus avancées.",
              ],
              quiz: [
                {
                  question:
                    "Que désigne généralement le cloud ?",
                  options: [
                    "Des services informatiques accessibles à distance",
                    "Un type de clavier",
                    "Une mémoire RAM spéciale",
                    "Un câble vidéo",
                  ],
                  answer: 0,
                  explanation:
                    "Le cloud désigne notamment des services informatiques fournis à distance.",
                },
                {
                  question:
                    "L'intelligence artificielle peut notamment servir à :",
                  options: [
                    "Analyser des données ou générer du contenu",
                    "Remplacer physiquement tous les composants",
                    "Augmenter la taille d'un écran",
                    "Alimenter un ordinateur",
                  ],
                  answer: 0,
                  explanation:
                    "L'IA peut être utilisée pour de nombreuses tâches comme l'analyse, la reconnaissance ou la génération de contenu.",
                },
                {
                  question:
                    "Faut-il toujours faire confiance sans vérification aux résultats d'un outil d'IA ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement pour les informations importantes",
                    "Uniquement lorsque l'outil est gratuit",
                  ],
                  answer: 1,
                  explanation:
                    "Les résultats d'une IA peuvent contenir des erreurs. Une vérification reste importante.",
                },
              ],
            },
          ],
        },
      ],
    },
  },

  finance: {
    "comprendre-son-argent": {
      title: "Comprendre son argent",
      description:
        "Apprends les bases pour mieux comprendre tes revenus, tes dépenses et tes habitudes financières.",
      modules: [
        {
          title: "Module 1 : Les bases",
          lessons: [
            {
              slug: "argent-revenus-depenses",
              title: "Argent, revenus et dépenses",
              duration: "10 min",
              description:
                "Comprends les notions financières essentielles.",
              content: [
                "## Revenus",
                "Les revenus correspondent à l'argent que tu reçois.",
                "## Dépenses",
                "Les dépenses correspondent à l'argent que tu utilises pour acheter des biens ou des services.",
                "## Équilibre",
                "Comprendre la différence entre revenus et dépenses aide à mieux gérer son budget.",
              ],
              quiz: [
                {
                  question: "Que représente un revenu ?",
                  options: [
                    "De l'argent reçu",
                    "De l'argent dépensé",
                    "Une dette uniquement",
                    "Un reçu",
                  ],
                  answer: 0,
                  explanation:
                    "Un revenu correspond à de l'argent reçu.",
                },
                {
                  question: "Qu'est-ce qu'une dépense ?",
                  options: [
                    "De l'argent utilisé",
                    "Un salaire",
                    "Une épargne uniquement",
                    "Un revenu",
                  ],
                  answer: 0,
                  explanation:
                    "Une dépense correspond à de l'argent utilisé pour acheter un bien ou un service.",
                },
                {
                  question:
                    "Pourquoi comparer revenus et dépenses ?",
                  options: [
                    "Pour comprendre son équilibre financier",
                    "Pour supprimer son compte bancaire",
                    "Pour augmenter automatiquement son salaire",
                    "Pour éviter toute dépense",
                  ],
                  answer: 0,
                  explanation:
                    "Cette comparaison permet de mieux comprendre sa situation financière.",
                },
              ],
            },
            {
              slug: "besoins-envies",
              title: "Besoins et envies",
              duration: "10 min",
              description:
                "Apprends à distinguer les besoins essentiels des envies.",
              content: [
                "## Besoin",
                "Un besoin correspond à quelque chose d'essentiel ou d'important pour vivre ou fonctionner correctement.",
                "## Envie",
                "Une envie correspond davantage à quelque chose que l'on souhaite obtenir sans que ce soit nécessaire.",
                "## Pourquoi distinguer les deux ?",
                "Cette distinction peut aider à prendre de meilleures décisions lors des achats.",
              ],
              quiz: [
                {
                  question:
                    "Quelle est la différence principale entre besoin et envie ?",
                  options: [
                    "Un besoin est généralement nécessaire, une envie est souhaitée",
                    "Ils sont toujours identiques",
                    "Une envie est toujours gratuite",
                    "Un besoin est toujours un luxe",
                  ],
                  answer: 0,
                  explanation:
                    "Un besoin correspond généralement à quelque chose de nécessaire, tandis qu'une envie est davantage liée au souhait.",
                },
                {
                  question:
                    "Pourquoi distinguer besoins et envies ?",
                  options: [
                    "Pour mieux décider de ses dépenses",
                    "Pour ne plus jamais acheter",
                    "Pour supprimer son budget",
                    "Pour éviter de travailler",
                  ],
                  answer: 0,
                  explanation:
                    "Cette distinction aide à prioriser les dépenses.",
                },
                {
                  question:
                    "Un achat de luxe est généralement considéré comme :",
                  options: [
                    "Une envie",
                    "Un besoin vital",
                    "Un revenu",
                    "Une épargne",
                  ],
                  answer: 0,
                  explanation:
                    "Les achats de luxe sont généralement des envies plutôt que des besoins essentiels.",
                },
              ],
            },
          ],
        },
        {
          title: "Module 2 : Comprendre ses habitudes",
          lessons: [
            {
              slug: "suivre-depenses",
              title: "Suivre ses dépenses",
              duration: "10 min",
              description:
                "Apprends à suivre où va ton argent.",
              content: [
                "## Pourquoi suivre ses dépenses ?",
                "Le suivi permet de comprendre ses habitudes et d'identifier les dépenses importantes.",
                "## Catégories",
                "Les dépenses peuvent être regroupées par catégories comme logement, transport, alimentation ou loisirs.",
                "## Régularité",
                "Un suivi régulier donne une vision plus précise du budget.",
              ],
              quiz: [
                {
                  question:
                    "Pourquoi suivre ses dépenses ?",
                  options: [
                    "Pour comprendre où va son argent",
                    "Pour supprimer ses revenus",
                    "Pour éviter toute dépense",
                    "Pour changer de banque automatiquement",
                  ],
                  answer: 0,
                  explanation:
                    "Le suivi permet de mieux comprendre les habitudes financières.",
                },
                {
                  question:
                    "Pourquoi utiliser des catégories ?",
                  options: [
                    "Pour organiser les dépenses",
                    "Pour augmenter les prix",
                    "Pour supprimer les reçus",
                    "Pour créer un salaire",
                  ],
                  answer: 0,
                  explanation:
                    "Les catégories facilitent l'analyse du budget.",
                },
                {
                  question:
                    "Un suivi régulier permet-il une meilleure visibilité ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement pour les entreprises",
                    "Seulement en espèces",
                  ],
                  answer: 0,
                  explanation:
                    "Le suivi régulier permet d'avoir une vision plus précise des habitudes.",
                },
              ],
            },
            {
              slug: "bonnes-habitudes",
              title: "Les bonnes habitudes financières",
              duration: "10 min",
              description:
                "Découvre quelques habitudes utiles pour mieux gérer ton argent.",
              content: [
                "## Planifier",
                "Planifier ses dépenses permet de mieux anticiper les besoins.",
                "## Épargner",
                "Mettre régulièrement une partie de ses revenus de côté peut aider à préparer les dépenses futures.",
                "## Comparer",
                "Comparer les prix et les options avant un achat peut éviter certaines dépenses inutiles.",
              ],
              quiz: [
                {
                  question:
                    "Pourquoi planifier ses dépenses ?",
                  options: [
                    "Pour mieux anticiper ses besoins",
                    "Pour supprimer son budget",
                    "Pour augmenter automatiquement ses revenus",
                    "Pour ne plus acheter",
                  ],
                  answer: 0,
                  explanation:
                    "La planification permet de mieux anticiper les dépenses.",
                },
                {
                  question:
                    "Pourquoi épargner ?",
                  options: [
                    "Pour préparer certaines dépenses futures",
                    "Pour supprimer les revenus",
                    "Pour éviter tout budget",
                    "Pour augmenter les prix",
                  ],
                  answer: 0,
                  explanation:
                    "L'épargne peut servir à préparer des projets ou des dépenses futures.",
                },
                {
                  question:
                    "Comparer les prix peut aider à :",
                  options: [
                    "Faire de meilleurs choix d'achat",
                    "Créer de l'argent",
                    "Supprimer les dépenses",
                    "Changer automatiquement de banque",
                  ],
                  answer: 0,
                  explanation:
                    "La comparaison peut aider à choisir une option adaptée au budget.",
                },
              ],
            },
          ],
        },
      ],
    },
  },

  carriere: {
    "construire-son-cv": {
      title: "Construire son CV",
      description:
        "Apprends à construire un CV clair, professionnel et adapté à une candidature.",
      modules: [
        {
          title: "Module 1 : Comprendre le CV",
          lessons: [
            {
              slug: "role-du-cv",
              title: "Le rôle du CV",
              duration: "10 min",
              description:
                "Comprends pourquoi le CV est important dans une candidature.",
              content: [
                "## Le CV",
                "Le CV présente de manière synthétique le parcours, les compétences et les expériences d'une personne.",
                "## Son objectif",
                "Il doit permettre au recruteur de comprendre rapidement le profil du candidat.",
                "## Clarté",
                "Un CV efficace doit être clair, lisible et adapté au poste recherché.",
              ],
              quiz: [
                {
                  question:
                    "Quel est le rôle principal d'un CV ?",
                  options: [
                    "Présenter le profil du candidat",
                    "Remplacer un entretien",
                    "Garantir un emploi",
                    "Présenter uniquement les loisirs",
                  ],
                  answer: 0,
                  explanation:
                    "Le CV présente le parcours et les compétences du candidat.",
                },
                {
                  question:
                    "Un CV doit-il être adapté au poste ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement pour les stages",
                    "Seulement pour les emplois publics",
                  ],
                  answer: 0,
                  explanation:
                    "Adapter son CV permet de mettre en avant les éléments les plus pertinents pour le poste.",
                },
                {
                  question:
                    "Une qualité importante d'un CV est :",
                  options: [
                    "La clarté",
                    "La complexité",
                    "La longueur maximale",
                    "L'absence de structure",
                  ],
                  answer: 0,
                  explanation:
                    "Un CV clair et lisible facilite la lecture du recruteur.",
                },
              ],
            },
            {
              slug: "structure-cv",
              title: "La structure du CV",
              duration: "10 min",
              description:
                "Découvre les principales parties d'un CV.",
              content: [
                "## Les principales sections",
                "- Coordonnées",
                "- Profil ou résumé",
                "- Expériences",
                "- Formation",
                "- Compétences",
                "- Langues ou informations complémentaires",
                "## Organisation",
                "Les informations doivent être organisées de manière logique et facile à parcourir.",
              ],
              quiz: [
                {
                  question:
                    "Quelle section présente généralement les expériences professionnelles ?",
                  options: [
                    "Expériences",
                    "Coordonnées",
                    "Titre uniquement",
                    "Signature",
                  ],
                  answer: 0,
                  explanation:
                    "Les expériences sont généralement regroupées dans une section dédiée.",
                },
                {
                  question:
                    "Pourquoi structurer le CV ?",
                  options: [
                    "Pour faciliter sa lecture",
                    "Pour le rendre plus long",
                    "Pour cacher les informations",
                    "Pour supprimer les compétences",
                  ],
                  answer: 0,
                  explanation:
                    "Une structure claire permet au recruteur de trouver rapidement les informations importantes.",
                },
                {
                  question:
                    "Les compétences peuvent-elles apparaître sur un CV ?",
                  options: [
                    "Oui",
                    "Non",
                    "Seulement pour les étudiants",
                    "Seulement pour les managers",
                  ],
                  answer: 0,
                  explanation:
                    "Les compétences constituent une partie importante de nombreux CV.",
                },
              ],
            },
          ],
        },

        {
          title: "Module 2 : Construire son CV",
          lessons: [
            {
              slug: "informations-personnelles",
              title: "Les informations personnelles",
              duration: "10 min",
              description:
                "Apprends quelles informations personnelles sont utiles dans un CV.",
              content: [
                "## Coordonnées",
                "Un CV doit généralement permettre au recruteur de contacter facilement le candidat.",
                "## Informations utiles",
                "- Nom",
                "- Téléphone",
                "- Adresse email professionnelle",
                "- Localisation lorsque pertinente",
                "## À éviter",
                "Il n'est pas nécessaire d'inclure toutes les informations personnelles possibles.",
                "⚠️ Attention :",
                "Évite de partager des informations personnelles inutiles ou trop sensibles.",
              ],
              quiz: [
                {
                  question:
                    "Pourquoi indiquer une adresse email dans un CV ?",
                  options: [
                    "Pour permettre au recruteur de contacter le candidat",
                    "Pour remplacer le nom",
                    "Pour afficher son mot de passe",
                    "Pour supprimer son téléphone",
                  ],
                  answer: 0,
                  explanation:
                    "L'adresse email permet notamment au recruteur de contacter le candidat.",
                },
                {
                  question:
                    "Faut-il mettre toutes ses informations personnelles sur un CV ?",
                  options: [
                    "Non",
                    "Oui",
                    "Toujours",
                    "Uniquement les informations sensibles",
                  ],
                  answer: 0,
                  explanation:
                    "Il faut privilégier les informations utiles à la candidature.",
                },
                {
                  question:
                    "Quelle adresse email est préférable pour une candidature ?",
                  options: [
                    "Une adresse professionnelle et simple",
                    "Une adresse avec un mot de passe",
                    "Une adresse temporaire inconnue",
                    "L'adresse d'une autre personne",
                  ],
                  answer: 0,
                  explanation:
                    "Une adresse simple et professionnelle donne une image plus adaptée à une candidature.",
                },
              ],
            },
            {
              slug: "experiences-et-competences",
              title: "Expériences et compétences",
              duration: "12 min",
              description:
                "Apprends à présenter tes expériences et tes compétences.",
              content: [
                "## Expériences",
                "Présente les expériences les plus pertinentes pour le poste recherché.",
                "## Compétences",
                "Les compétences peuvent être techniques ou comportementales.",
                "## Résultats",
                "Lorsque c'est possible, explique ce que tu as réalisé plutôt que de simplement donner un intitulé.",
                "💡 Conseil :",
                "Utilise des formulations simples, précises et orientées vers les résultats.",
              ],
              quiz: [
                {
                  question:
                    "Que faut-il privilégier dans les expériences ?",
                  options: [
                    "Les expériences pertinentes",
                    "Toutes les activités depuis l'enfance",
                    "Uniquement les loisirs",
                    "Les informations sans rapport",
                  ],
                  answer: 0,
                  explanation:
                    "Les expériences pertinentes permettent de montrer pourquoi le candidat correspond au poste.",
                },
                {
                  question:
                    "Les compétences peuvent-elles être techniques ?",
                  options: [
                    "Oui",
                    "Non",
                    "Jamais",
                    "Seulement dans les CV étudiants",
                  ],
                  answer: 0,
                  explanation:
                    "Les compétences techniques font partie des compétences importantes à présenter.",
                },
                {
                  question:
                    "Pourquoi présenter des résultats ?",
                  options: [
                    "Pour montrer concrètement ce qui a été réalisé",
                    "Pour rendre le CV plus vague",
                    "Pour supprimer les expériences",
                    "Pour éviter toute précision",
                  ],
                  answer: 0,
                  explanation:
                    "Les résultats permettent de rendre l'expérience plus concrète.",
                },
              ],
            },
            {
              slug: "finaliser-cv",
              title: "Finaliser son CV",
              duration: "12 min",
              description:
                "Apprends à vérifier et améliorer ton CV avant de l'envoyer.",
              content: [
                "## Vérification",
                "Relis attentivement le CV pour corriger les fautes et vérifier les dates.",
                "## Mise en forme",
                "Utilise une présentation simple, cohérente et facile à lire.",
                "## Adaptation",
                "Vérifie que le CV correspond bien au poste et à l'offre recherchée.",
                "## Format",
                "Le PDF est souvent pratique pour conserver la mise en page lors de l'envoi.",
                "📌 Important :",
                "Un CV propre et cohérent donne une meilleure première impression.",
              ],
              quiz: [
                {
                  question:
                    "Pourquoi relire son CV avant de l'envoyer ?",
                  options: [
                    "Pour corriger les erreurs",
                    "Pour ajouter des fautes",
                    "Pour supprimer les compétences",
                    "Pour le rendre illisible",
                  ],
                  answer: 0,
                  explanation:
                    "La relecture permet de corriger les fautes et incohérences.",
                },
                {
                  question:
                    "Quel format est souvent pratique pour envoyer un CV ?",
                  options: [
                    "PDF",
                    "Fichier temporaire",
                    "Capture d'écran uniquement",
                    "Fichier système",
                  ],
                  answer: 0,
                  explanation:
                    "Le PDF permet généralement de conserver la mise en page du document.",
                },
                {
                  question:
                    "Que faut-il vérifier avant d'envoyer un CV ?",
                  options: [
                    "Les fautes, dates et adaptation au poste",
                    "Uniquement la couleur",
                    "Uniquement le nom",
                    "Uniquement la taille du fichier",
                  ],
                  answer: 0,
                  explanation:
                    "Une vérification complète permet de s'assurer que le CV est cohérent et adapté à la candidature.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

function renderInlineText(text: string) {
  // Supports **bold** and `inline code`.
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-950">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-rose-50 px-1.5 py-0.5 font-mono text-[0.92em] font-semibold text-rose-600"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function highlightHtml(code: string) {
  const escaped = escapeHtml(code);

  return escaped.replace(
    /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?)([a-zA-Z][\w:-]*)([\s\S]*?)(\/?&gt;)/g,
    (match, comment, open, name, rest, close) => {
      if (comment) {
        return `<span class="text-slate-500">${comment}</span>`;
      }

      const highlightedAttributes = rest.replace(
        /([a-zA-Z_:][\w:.-]*)(=)(&quot;.*?&quot;|&#039;.*?&#039;)/g,
        '<span class="text-sky-700">$1</span>$2<span class="text-emerald-700">$3</span>',
      );

      return `${open}<span class="font-semibold text-rose-600">${name}</span>${highlightedAttributes}${close}`;
    },
  );
}

function LessonCodeExample({
  code,
  language = "css",
}: {
  code: string;
  language?: string;
}) {
  const cleanSnippet = code
    .replace(/^```[a-z0-9]*\n?/i, "")
    .replace(/\n?```$/i, "")
    .trim();

  return (
    <InteractiveCodeBlock
      code={cleanSnippet}
      language={language}
      title={`Exemple de Code (${language.toUpperCase()})`}
    />
  );
}

function extractFirstCodeExample(content?: string[], examples?: string[]) {
  const codeLangs = [
    "html", "css", "javascript", "js", "jsx", "ts", "tsx", "typescript",
    "python", "py", "sql", "json", "c", "cpp", "java", "go", "rust",
    "php", "ruby", "swift", "kotlin", "bash", "sh", "xml", "yaml", "scss"
  ];

  const searchList = [...(content || []), ...(examples || [])];
  for (const item of searchList) {
    if (!item) continue;
    const matches = item.matchAll(/```([a-z0-9#+-]*)\n?([\s\S]*?)```/gi);
    for (const match of matches) {
      const lang = match[1].toLowerCase().trim();
      const code = match[2].trim();
      if (code && (codeLangs.includes(lang) || lang.length > 0)) {
        return {
          language: lang || "javascript",
          code,
        };
      }
    }
  }

  return null;
}

function parseMarkdownTable(text: string, keyPrefix: string) {
  const rows = text
    .split("\n")
    .map((r) => r.trim())
    .filter((r) => r.startsWith("|") && r.endsWith("|"));

  if (rows.length < 2) return null;

  const headerCells = rows[0]
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());

  const startIdx = rows[1].includes("---") ? 2 : 1;
  const dataRows = rows.slice(startIdx).map((r) =>
    r
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim())
  );

  return (
    <div key={keyPrefix} className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
      <table className="w-full text-left text-sm border-collapse">
        <thead className="bg-slate-900 text-slate-100 font-semibold">
          <tr>
            {headerCells.map((h, i) => (
              <th key={i} className="px-5 py-3.5 border-b border-slate-800 text-xs font-bold uppercase tracking-wider">
                {renderInlineText(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {dataRows.map((r, rIdx) => (
            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white hover:bg-slate-50/80 transition-colors" : "bg-slate-50/50 hover:bg-slate-100/80 transition-colors"}>
              {r.map((c, cIdx) => (
                <td key={cIdx} className="px-5 py-3.5 text-slate-700 leading-relaxed">
                  {renderInlineText(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LessonContent({
  content,
}: {
  content: string[];
}) {
  const blocks: React.ReactNode[] = [];
  let listItems: string[] = [];
  let tableLines: string[] = [];

  function flushList() {
    if (listItems.length === 0) return;

    blocks.push(
      <ul
        key={`list-${blocks.length}`}
        className="my-5 space-y-2 pl-6 text-slate-700"
      >
        {listItems.map((item, index) => (
          <li key={index} className="list-disc leading-7">
            {renderInlineText(item)}
          </li>
        ))}
      </ul>,
    );

    listItems = [];
  }

  function flushTable() {
    if (tableLines.length === 0) return;
    const tableComponent = parseMarkdownTable(tableLines.join("\n"), `table-${blocks.length}`);
    if (tableComponent) {
      blocks.push(tableComponent);
    }
    tableLines = [];
  }

  content.forEach((lineOrBlock, index) => {
    // Check if lineOrBlock is a markdown table block
    if (lineOrBlock.includes("|") && lineOrBlock.includes("---")) {
      flushList();
      flushTable();
      const tableComponent = parseMarkdownTable(lineOrBlock, `table-block-${index}`);
      if (tableComponent) {
        blocks.push(tableComponent);
        return;
      }
    }

    // Check if lineOrBlock contains markdown code block markers ```
    if (lineOrBlock.includes("```")) {
      flushList();
      flushTable();
      const lines = lineOrBlock.split("\n");
      let inCode = false;
      let codeLang = "css";
      let codeLines: string[] = [];

      lines.forEach((subLine, subIdx) => {
        const trimmedSub = subLine.trim();
        if (trimmedSub.startsWith("```")) {
          if (inCode) {
            // Close code block
            blocks.push(
              <LessonCodeExample
                key={`code-${index}-${subIdx}`}
                code={codeLines.join("\n").trim()}
                language={codeLang || "css"}
              />,
            );
            codeLines = [];
            inCode = false;
          } else {
            // Open code block
            inCode = true;
            codeLang = trimmedSub.slice(3).trim() || "css";
          }
        } else if (inCode) {
          codeLines.push(subLine);
        } else if (trimmedSub) {
          if (trimmedSub.startsWith("## ")) {
            blocks.push(
              <h2 key={`h2-${index}-${subIdx}`} className="mt-10 mb-4 text-2xl font-bold text-slate-950">
                {renderInlineText(trimmedSub.slice(3))}
              </h2>
            );
          } else if (trimmedSub.startsWith("### ")) {
            blocks.push(
              <h3 key={`h3-${index}-${subIdx}`} className="mt-8 mb-3 text-xl font-bold text-slate-900">
                {renderInlineText(trimmedSub.slice(4))}
              </h3>
            );
          } else if (trimmedSub.startsWith("- ")) {
            listItems.push(trimmedSub.slice(2));
          } else {
            blocks.push(
              <p key={`p-${index}-${subIdx}`} className="my-4 leading-8 text-slate-700">
                {renderInlineText(trimmedSub)}
              </p>
            );
          }
        }
      });

      if (inCode && codeLines.length > 0) {
        blocks.push(
          <LessonCodeExample
            key={`code-end-${index}`}
            code={codeLines.join("\n").trim()}
            language={codeLang || "css"}
          />,
        );
      }
      return;
    }

    const trimmed = lineOrBlock.trim();

    if (!trimmed) {
      flushList();
      flushTable();
      return;
    }

    // Markdown image check
    if (trimmed.startsWith("![") && trimmed.includes("](") && trimmed.endsWith(")")) {
      flushList();
      flushTable();
      const altMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (altMatch) {
        const altText = altMatch[1];
        const imageUrl = altMatch[2];
        blocks.push(
          <figure key={`img-${index}`} className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-auto max-h-[480px] object-cover"
              loading="lazy"
            />
            {altText && (
              <figcaption className="bg-white px-5 py-3 text-center text-xs font-medium text-slate-500 border-t border-slate-100">
                📷 {altText}
              </figcaption>
            )}
          </figure>
        );
        return;
      }
    }

    // Markdown table row check
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList();
      tableLines.push(trimmed);
      return;
    } else {
      flushTable();
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();

    if (trimmed.startsWith("## ")) {
      blocks.push(
        <h2
          key={`h2-${index}`}
          className="mt-10 mb-4 text-2xl font-bold text-slate-950"
        >
          {renderInlineText(trimmed.slice(3))}
        </h2>,
      );
      return;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h3
          key={`h3-${index}`}
          className="mt-8 mb-3 text-xl font-bold text-slate-900"
        >
          {renderInlineText(trimmed.slice(4))}
        </h3>,
      );
      return;
    }

    if (trimmed.startsWith("Exemple :") || trimmed.startsWith("Exemple:")) {
      const example = trimmed.replace(/^Exemple\s*:\s*/, "");

      blocks.push(
        <div
          key={`example-${index}`}
          className="my-6 rounded-xl border border-slate-200 bg-slate-100 p-5"
        >
          <p className="text-xl font-semibold text-slate-900">Example</p>
          {example && (
            <p className="mt-2 leading-7 text-slate-700">
              {renderInlineText(example)}
            </p>
          )}
        </div>,
      );
      return;
    }

    if (trimmed.startsWith("💡 Conseil :") || trimmed.startsWith("Conseil :")) {
      const conseil = trimmed
        .replace(/^💡 Conseil\s*:\s*/, "")
        .replace(/^Conseil\s*:\s*/, "");

      blocks.push(
        <div
          key={`tip-${index}`}
          className="my-6 rounded-xl border border-green-200 bg-green-50 p-5"
        >
          <p className="text-sm font-semibold text-green-800">💡 Conseil</p>
          <p className="mt-2 leading-7 text-green-900">
            {renderInlineText(conseil)}
          </p>
        </div>,
      );
      return;
    }

    if (trimmed.startsWith("⚠️ Attention :") || trimmed.startsWith("Attention :")) {
      const warning = trimmed
        .replace(/^⚠️ Attention\s*:\s*/, "")
        .replace(/^Attention\s*:\s*/, "");

      blocks.push(
        <div
          key={`warning-${index}`}
          className="my-6 rounded-xl border border-amber-200 bg-amber-50 p-5"
        >
          <p className="text-sm font-semibold text-amber-800">⚠️ Attention</p>
          <p className="mt-2 leading-7 text-amber-900">
            {renderInlineText(warning)}
          </p>
        </div>,
      );
      return;
    }

    if (trimmed.startsWith("📌 Important :") || trimmed.startsWith("Important :")) {
      const important = trimmed
        .replace(/^📌 Important\s*:\s*/, "")
        .replace(/^Important\s*:\s*/, "");

      blocks.push(
        <div
          key={`important-${index}`}
          className="my-6 rounded-xl border border-purple-200 bg-purple-50 p-5"
        >
          <p className="text-sm font-semibold text-purple-800">📌 Important</p>
          <p className="mt-2 leading-7 text-purple-900">
            {renderInlineText(important)}
          </p>
        </div>,
      );
      return;
    }

    if (trimmed.startsWith("📊 Statistique :") || trimmed.startsWith("📊 Key Metric :")) {
      const stat = trimmed.replace(/^📊 (Statistique|Key Metric)\s*:\s*/, "");
      blocks.push(
        <div
          key={`stat-${index}`}
          className="my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5"
        >
          <p className="text-sm font-bold text-blue-900">📊 Chiffre & Performance</p>
          <p className="mt-2 leading-7 text-blue-950 font-medium">
            {renderInlineText(stat)}
          </p>
        </div>,
      );
      return;
    }

    blocks.push(
      <p key={`paragraph-${index}`} className="my-4 leading-8 text-slate-700">
        {renderInlineText(trimmed)}
      </p>,
    );
  });

  flushList();
  flushTable();

  return <div className="text-[15px] md:text-base">{blocks}</div>;
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{
    slug: string;
    courseSlug: string;
    lessonSlug: string;
  }>;
}) {
  const {
    slug,
    courseSlug,
    lessonSlug,
  } = await params;

  const course = getCourseData(slug, courseSlug);

  if (!course) {
    notFound();
  }

  const allLessons = course.modules.flatMap(
    (module) => module.lessons,
  );

  const lessonIndex = allLessons.findIndex(
    (item) => item.slug === lessonSlug,
  );

  const lesson = allLessons[lessonIndex];

  if (!lesson) {
    notFound();
  }

  const courseKey = `${slug}/${courseSlug}`;

  const previousLesson =
    lessonIndex > 0
      ? allLessons[lessonIndex - 1]
      : null;

  const nextLesson =
    lessonIndex < allLessons.length - 1
      ? allLessons[lessonIndex + 1]
      : null;

  const lessonNumber = lessonIndex + 1;

  const lessonUrl = (targetSlug: string) =>
    `/learn/${slug}/${courseSlug}/${targetSlug}`;

  const firstCodeExample = extractFirstCodeExample(lesson.content, lesson.examples);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        {/* Breadcrumb & Top Action Ribbon */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500 border-b border-slate-200/80 pb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <Link
              href="/learn"
              className="hover:text-emerald-600 transition-colors"
            >
              Parcours
            </Link>
            <span>/</span>
            <Link
              href={`/learn/${slug}/${courseSlug}`}
              className="hover:text-emerald-600 transition-colors"
            >
              {course.title}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{lesson.title}</span>
          </div>

          {/* Quick Top W3 Navigation Buttons */}
          <div className="flex items-center gap-2">
            {previousLesson && (
              <Link
                href={lessonUrl(previousLesson.slug)}
                className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow-2xs"
              >
                ❮ Précédent
              </Link>
            )}
            {nextLesson ? (
              <Link
                href={lessonUrl(nextLesson.slug)}
                className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow-2xs"
              >
                Suivant ❯
              </Link>
            ) : (
              <Link
                href={`/learn/${slug}/${courseSlug}/exam`}
                className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-2xs"
              >
                Examen Final 🏆
              </Link>
            )}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main content */}
          <div>
            {/* Lesson Hero Banner Card (Inspired by Tutorialspoint Screenshot 2) */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 text-white shadow-md relative overflow-hidden mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="space-y-2">
                  <span className="inline-block rounded-md bg-emerald-500 text-slate-950 px-3 py-1 text-xs font-black uppercase tracking-wider">
                    {course.title} — Tutoriel Pratique
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {lesson.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    {lesson.description}
                  </p>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-3xl">
                  💻
                </div>
              </div>

              {/* Action Pill Ribbon (Inspired by Tutorialspoint Screenshot 2) */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs font-bold">
                <Link href={`/certificate/${courseSlug}`} className="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors flex items-center gap-1.5">
                  <span>📄 Version PDF</span>
                </Link>
                <Link href="#quiz" className="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors flex items-center gap-1.5">
                  <span>💬 Quiz interactif</span>
                </Link>
                {firstCodeExample && (
                  <a href="#playground" className="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors flex items-center gap-1.5">
                    <span>⚡ Bac à Sable Live</span>
                  </a>
                )}
                <Link href={`/learn/${slug}/${courseSlug}/exam`} className="px-3 py-1.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 hover:bg-emerald-900 transition-colors flex items-center gap-1.5 ml-auto">
                  <span>🏆 Examen Final</span>
                </Link>
              </div>
            </div>

            {/* Content Article */}
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs md:p-8 leading-relaxed">
              <LessonContent content={lesson.content} />
            </article>

            {/* Live HTML Editor / Playground (Rendered ONLY if lesson contains code) */}
            {firstCodeExample && (
              <section
                id="playground"
                className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 bg-slate-950 px-6 py-5 text-white">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-emerald-400">
                        Bac à sable Live
                      </p>
                      <h2 className="mt-1 text-xl font-bold">
                        Pratique le code
                      </h2>
                      <p className="mt-1 text-sm text-slate-300">
                        Modifie le code et observe directement le résultat.
                      </p>
                    </div>
                    <span className="rounded-full border border-emerald-800 bg-emerald-950 px-3 py-1 text-xs font-bold text-emerald-400">
                      Éditeur interactif
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <InteractiveCodeBlock
                    code={firstCodeExample.code}
                    language={firstCodeExample.language}
                  />
                </div>
              </section>
            )}

            {/* Completion */}
            <LessonCompletion
              courseKey={courseKey}
              lessonSlug={lesson.slug}
            />

            {/* Progress */}
            <LessonProgress
              courseKey={courseKey}
              totalLessons={allLessons.length}
            />

            {/* Bottom W3 Next / Prev Signature Bar */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {previousLesson ? (
                <Link
                  href={lessonUrl(previousLesson.slug)}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-emerald-300 hover:bg-emerald-50/50 shadow-2xs"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    ❮ Leçon précédente
                  </p>

                  <p className="mt-1 font-bold text-slate-900 text-sm">
                    {previousLesson.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Link
                  href={lessonUrl(nextLesson.slug)}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all hover:border-emerald-300 hover:bg-emerald-50/50 shadow-2xs sm:text-right"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    Leçon suivante ❯
                  </p>

                  <p className="mt-1 font-bold text-slate-900 text-sm">
                    {nextLesson.title}
                  </p>
                </Link>
              ) : (
                <Link
                  href={`/learn/${slug}/${courseSlug}/exam`}
                  className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-left transition-all hover:bg-emerald-100 shadow-2xs sm:text-right"
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                    🎉 Cours terminé
                  </p>

                  <p className="mt-1 font-extrabold text-emerald-950 text-sm">
                    Passer l&apos;examen final & Télécharger le certificat 🏆 ❯
                  </p>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <LessonSidebar
              courseKey={courseKey}
              slug={slug}
              courseSlug={courseSlug}
              currentLessonSlug={lesson.slug}
              lessons={allLessons}
            />
          </aside>
        </div>
      </div>
    </main>
  );
}