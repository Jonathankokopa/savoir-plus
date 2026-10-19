import type { CourseDetail, ExamQuestion } from "../coursesData";

export const jsCourse: CourseDetail = {
  slug: "javascript",
  categorySlug: "web-dev",
  title: "JavaScript ES6+ & Développement Web Moderne",
  description:
    "Un parcours complet et pratique pour apprendre JavaScript de zéro jusqu'au développement d'applications web modernes et full-stack. Apprenez les fondamentaux, le DOM, les APIs, l'asynchronisme, les modules, Node.js, Express, les bases de données, l'authentification, les tests, React et le déploiement à travers des projets réalistes.",
  level: "Débutant",
  icon: "⚡",

  modules: [
    {
      title: "Module 1: Introduction à JavaScript & Environnement de Développement",
      lessons: [
        {
          slug: "decouvrir-javascript",
          title: "1.1 Qu'est-ce que JavaScript ?",
          duration: "15 min",
          description:
            "Comprendre le rôle de JavaScript dans le développement web et découvrir les différents environnements dans lesquels il fonctionne.",
          objectives: [
            "Expliquer le rôle de JavaScript dans une application web.",
            "Distinguer HTML, CSS et JavaScript.",
            "Comprendre la différence entre JavaScript côté navigateur et côté serveur.",
            "Identifier les principaux cas d'utilisation de JavaScript."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "JavaScript existe pour donner du comportement aux applications. HTML décrit ce qui existe sur la page, CSS décrit comment cette interface est présentée, et JavaScript permet de réagir aux actions de l'utilisateur, manipuler les données et appliquer la logique de l'application.",
            "",
            "## Le modèle mental",
            "Imaginez une application web comme un restaurant : HTML décrit les tables, les menus et les éléments présents, CSS s'occupe de la présentation, et JavaScript coordonne ce qui se passe lorsque le client agit. Quand un bouton est cliqué, un formulaire envoyé ou une donnée chargée depuis un serveur, JavaScript peut décider quoi faire.",
            "",
            "## Où JavaScript est utilisé",
            "JavaScript peut fonctionner dans le navigateur, mais aussi côté serveur avec Node.js. Cela permet de construire des interfaces, des APIs, des serveurs et de nombreux autres types d'applications avec le même langage.",
            "",
            "Dans une application réelle, JavaScript peut par exemple vérifier un formulaire avant son envoi, afficher un produit reçu depuis une API, mettre à jour un panier ou demander au serveur de créer une commande.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre le rôle de JavaScript dans une application web.",
            "- Distinguer HTML, CSS et JavaScript.",
            "- Comprendre la différence entre navigateur et serveur.",
            "- Identifier les principaux cas d'utilisation de JavaScript.",
            "",
            "## Explication et premier exemple",
            "JavaScript commence souvent par des opérations très simples. L'exemple suivant demande simplement à l'environnement JavaScript d'afficher un message :",
            "",
            "```javascript\nconsole.log('Bonjour JavaScript !');\n```",
            "",
            "`console.log()` n'est pas une fonctionnalité qui rend directement une page interactive. Il sert ici à observer le comportement du programme. Les développeurs l'utilisent notamment pendant l'apprentissage et le débogage pour vérifier les valeurs produites par leur code.",
            "",
            "## HTML, CSS et JavaScript : trois rôles différents",
            "HTML fournit la structure et le contenu. CSS contrôle principalement l'apparence et la mise en page. JavaScript ajoute du comportement et de la logique.",
            "",
            "Par exemple, un bouton peut être créé en HTML, rendu visuellement attrayant avec CSS, puis rendu interactif avec JavaScript. Ces technologies travaillent donc ensemble plutôt que de se remplacer mutuellement.",
            "",
            "## Dans le navigateur et sur le serveur",
            "Dans le navigateur, JavaScript peut accéder à des fonctionnalités de la page comme le DOM, les événements et certaines APIs du navigateur. Avec Node.js, JavaScript peut également s'exécuter côté serveur et participer à la construction du backend d'une application.",
            "",
            "Cette distinction est importante : le code qui manipule un bouton HTML s'exécute généralement dans le navigateur, alors que le code qui accède directement à une base de données se trouve généralement côté serveur.",
            "",
            "## Comment penser comme un développeur",
            "Lorsque vous rencontrez une nouvelle fonctionnalité, posez trois questions : quelles données sont disponibles, quel comportement doit se produire, et dans quel environnement ce comportement doit-il s'exécuter ? Cette façon de raisonner sera réutilisée dans tout le cours.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Penser que JavaScript remplace HTML et CSS. Les trois technologies ont des responsabilités différentes.",
            "- Mémoriser uniquement des fonctions sans comprendre le problème qu'elles résolvent.",
            "- Confondre JavaScript dans le navigateur et JavaScript côté serveur.",
            "- Croire qu'une application réelle est constituée uniquement de code JavaScript isolé. Les données, l'interface, le réseau et l'environnement d'exécution comptent aussi.",
            "",
            "## À retenir",
            "JavaScript est un langage de programmation qui permet d'implémenter de la logique et du comportement. Pour apprendre efficacement, ne cherchez pas seulement à mémoriser la syntaxe : apprenez à reconnaître le problème à résoudre et à choisir les outils JavaScript adaptés."
          ],
          examples: [
            "```javascript\nconsole.log('Bonjour JavaScript !');\n```"
          ],
          practice: [
            "Ouvrez la console de votre navigateur et affichez votre prénom.",
            "Expliquez avec vos propres mots la différence entre HTML, CSS et JavaScript."
          ],
          quiz: [
            {
              question: "Quel est le rôle principal de JavaScript dans une page web ?",
              options: [
                "Définir uniquement la structure HTML",
                "Ajouter principalement des comportements et de la logique interactive",
                "Remplacer complètement CSS",
                "Créer uniquement des bases de données"
              ],
              answer: 1,
              explanation:
                "JavaScript permet notamment de gérer la logique, les interactions utilisateur, les données et le comportement dynamique d'une application."
            }
          ]
        },
        {
          slug: "installer-environnement-javascript",
          title: "1.2 Installer son environnement de développement",
          duration: "15 min",
          description:
            "Installer et configurer les outils utilisés par les développeurs JavaScript.",
          objectives: [
            "Installer Visual Studio Code.",
            "Installer Node.js.",
            "Utiliser la console du navigateur.",
            "Exécuter un fichier JavaScript avec Node.js."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Imagine a workshop. The editor is your workbench, Node.js is an environment where JavaScript can run outside the browser, and DevTools are the instruments you use to inspect what is happening. Learning these tools first makes later programming concepts easier because you can immediately run, observe, and debug your code.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Installer et configurer les outils utilisés par les développeurs JavaScript.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A developer building a website needs to move between writing code, running it, inspecting the result, and diagnosing problems. JavaScript development is not only about syntax. The development environment is part of the skill.",
            "",
            "## Ce que vous allez apprendre",
            "- Installer Visual Studio Code.\n- Installer Node.js.\n- Utiliser la console du navigateur.\n- Exécuter un fichier JavaScript avec Node.js.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Les outils\nPour suivre ce cours, vous aurez besoin d'un éditeur de code comme Visual Studio Code et de Node.js.\n\nLe navigateur fournit également des outils essentiels dans DevTools :\n- Console\n- Elements\n- Network\n- Sources\n- Application\n\n## Premier fichier\nCréez un fichier `app.js` :\n```javascript\nconst message = 'Mon premier programme JavaScript';\nconsole.log(message);\n```\n\nPuis exécutez-le avec Node.js :\n```bash\nnode app.js\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **1.2 Installer son environnement de développement**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconsole.log('JavaScript fonctionne !');\nconsole.log(2 + 3);\n```"
          ],
          practice: [
            "Créez un dossier appelé javascript-course.",
            "Créez un fichier app.js.",
            "Affichez trois informations personnelles dans la console."
          ],
          quiz: [
            {
              question: "Quelle commande permet généralement d'exécuter app.js avec Node.js ?",
              options: [
                "run app.js",
                "node app.js",
                "javascript app.js",
                "start-node app.js"
              ],
              answer: 1,
              explanation:
                "La commande `node app.js` demande à Node.js d'exécuter le fichier JavaScript."
            }
          ]
        },
        {
          slug: "console-et-devtools",
          title: "1.3 Console & DevTools",
          duration: "18 min",
          description:
            "Apprendre à utiliser les outils du navigateur pour observer, tester et déboguer du JavaScript.",
          objectives: [
            "Utiliser console.log.",
            "Inspecter des éléments HTML.",
            "Lire des erreurs JavaScript.",
            "Utiliser les DevTools pour commencer un diagnostic."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Imagine a workshop. The editor is your workbench, Node.js is an environment where JavaScript can run outside the browser, and DevTools are the instruments you use to inspect what is happening. Learning these tools first makes later programming concepts easier because you can immediately run, observe, and debug your code.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Apprendre à utiliser les outils du navigateur pour observer, tester et déboguer du JavaScript.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A developer building a website needs to move between writing code, running it, inspecting the result, and diagnosing problems. JavaScript development is not only about syntax. The development environment is part of the skill.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser console.log.\n- Inspecter des éléments HTML.\n- Lire des erreurs JavaScript.\n- Utiliser les DevTools pour commencer un diagnostic.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## La console\nLa console permet d'afficher des informations pendant l'exécution du programme.\n\n```javascript\nconsole.log('Information');\nconsole.warn('Attention');\nconsole.error('Erreur');\n```\n\n## Pourquoi les DevTools sont importants ?\nDans un projet réel, le développeur doit régulièrement comprendre pourquoi une fonctionnalité ne fonctionne pas.\n\nLes DevTools permettent notamment de :\n- inspecter le HTML\n- observer les requêtes réseau\n- placer des breakpoints\n- examiner les variables\n- consulter les erreurs",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **1.3 Console & DevTools**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst user = { name: 'Alice', age: 25 };\nconsole.table(user);\n```"
          ],
          practice: [
            "Créez volontairement une erreur JavaScript.",
            "Utilisez la console pour identifier le problème.",
            "Inspectez un bouton d'une page avec l'onglet Elements."
          ],
          quiz: [
            {
              question: "Quel outil permet notamment de placer des breakpoints JavaScript ?",
              options: ["DevTools", "HTML Validator uniquement", "CSS uniquement", "Git uniquement"],
              answer: 0,
              explanation:
                "Les DevTools du navigateur permettent notamment d'utiliser l'onglet Sources et le debugger pour analyser l'exécution du JavaScript."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Variables, Types & Opérateurs",
      lessons: [
        {
          slug: "variables-let-const-var",
          title: "2.1 Variables, let, const & var",
          duration: "18 min",
          description:
            "Comprendre les variables modernes et savoir choisir entre let et const.",
          objectives: [
            "Déclarer des variables avec let et const.",
            "Comprendre la réaffectation.",
            "Comprendre la portée de bloc.",
            "Comprendre pourquoi var est généralement évité en JavaScript moderne."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Think of a program as working with pieces of information. Variables give those pieces names, data types describe what kind of values they contain, and operators let the program calculate or compare those values.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre les variables modernes et savoir choisir entre let et const.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A shopping application might store a product name, price, quantity, and availability. It then combines those values to calculate totals and decide what the customer can do.",
            "",
            "## Ce que vous allez apprendre",
            "- Déclarer des variables avec let et const.\n- Comprendre la réaffectation.\n- Comprendre la portée de bloc.\n- Comprendre pourquoi var est généralement évité en JavaScript moderne.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## const\nUtilisez `const` lorsque la variable ne doit pas être réaffectée.\n\n```javascript\nconst name = 'Alice';\n```\n\n## let\nUtilisez `let` lorsqu'une variable doit recevoir une nouvelle valeur.\n\n```javascript\nlet score = 0;\nscore += 10;\n```\n\nAvec `const`, un objet peut toujours être muté :\n```javascript\nconst user = { name: 'Alice', age: 25 };\nuser.age = 26;\n```\n\nLa référence ne peut pas être réaffectée, mais la propriété de l'objet peut être modifiée.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **2.1 Variables, let, const & var**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst appName = 'Skill Academy';\nlet students = 0;\nstudents += 1;\n```"
          ],
          practice: [
            "Déclarez trois constantes contenant des informations de configuration.",
            "Créez un compteur avec let.",
            "Testez ce qui se passe lorsqu'une variable let est déclarée dans un bloc."
          ],
          quiz: [
            {
              question: "Quelle déclaration empêche la réaffectation d'une variable ?",
              options: ["var", "let", "const", "define"],
              answer: 2,
              explanation:
                "const empêche la réaffectation de la variable."
            }
          ]
        },
        {
          slug: "types-primitifs",
          title: "2.2 Types de données JavaScript",
          duration: "20 min",
          description:
            "Comprendre les types primitifs et savoir identifier le type d'une valeur.",
          objectives: [
            "Identifier les principaux types primitifs.",
            "Utiliser typeof.",
            "Comprendre null et undefined.",
            "Distinguer primitives et objets."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Think of a program as working with pieces of information. Variables give those pieces names, data types describe what kind of values they contain, and operators let the program calculate or compare those values.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre les types primitifs et savoir identifier le type d'une valeur.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A shopping application might store a product name, price, quantity, and availability. It then combines those values to calculate totals and decide what the customer can do.",
            "",
            "## Ce que vous allez apprendre",
            "- Identifier les principaux types primitifs.\n- Utiliser typeof.\n- Comprendre null et undefined.\n- Distinguer primitives et objets.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Types courants\n- string\n- number\n- boolean\n- undefined\n- null\n- bigint\n- symbol\n- object\n\n```javascript\nconst name = 'Alice';\nconst age = 25;\nconst active = true;\nlet address;\nconst empty = null;\n```\n\nPour connaître le type d'une valeur :\n```javascript\nconsole.log(typeof name);\nconsole.log(typeof age);\nconsole.log(typeof active);\n```\n\nUne particularité historique de JavaScript est que `typeof null` retourne `object`.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **2.2 Types de données JavaScript**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconsole.log(typeof 'Hello'); // string\nconsole.log(typeof 42); // number\nconsole.log(typeof true); // boolean\n```"
          ],
          practice: [
            "Créez une variable de chaque type principal.",
            "Utilisez typeof pour afficher leur type.",
            "Testez typeof null et observez le résultat."
          ],
          quiz: [
            {
              question: "Quel est le résultat de typeof NaN ?",
              options: ["'nan'", "'number'", "'undefined'", "'object'"],
              answer: 1,
              explanation:
                "NaN est une valeur spéciale du type number en JavaScript."
            }
          ]
        },
        {
          slug: "operateurs-et-conversions",
          title: "2.3 Opérateurs, conversions & template literals",
          duration: "22 min",
          description:
            "Manipuler les valeurs avec les opérateurs JavaScript et construire des chaînes dynamiques.",
          objectives: [
            "Utiliser les opérateurs arithmétiques.",
            "Comparer correctement les valeurs.",
            "Comprendre == et ===.",
            "Convertir des valeurs.",
            "Utiliser les template literals."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Think of a program as working with pieces of information. Variables give those pieces names, data types describe what kind of values they contain, and operators let the program calculate or compare those values.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Manipuler les valeurs avec les opérateurs JavaScript et construire des chaînes dynamiques.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A shopping application might store a product name, price, quantity, and availability. It then combines those values to calculate totals and decide what the customer can do.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser les opérateurs arithmétiques.\n- Comparer correctement les valeurs.\n- Comprendre == et ===.\n- Convertir des valeurs.\n- Utiliser les template literals.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Comparaison stricte\nEn JavaScript moderne, préférez généralement `===` à `==` lorsque vous voulez éviter les conversions implicites.\n\n```javascript\n5 === '5'; // false\n5 == '5'; // true\n```\n\n## Conversion\n```javascript\nconst age = Number('25');\nconst text = String(100);\nconst active = Boolean(1);\n```\n\n## Template literals\n```javascript\nconst name = 'Alice';\nconst age = 25;\nconst message = `${name} a ${age} ans.`;\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **2.3 Opérateurs, conversions & template literals**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst price = 49.99;\nconst quantity = 3;\nconst total = price * quantity;\nconsole.log(`Total : ${total} €`);\n```"
          ],
          practice: [
            "Créez un calculateur de prix TTC.",
            "Demandez un prix sous forme de chaîne et convertissez-le en nombre.",
            "Affichez un reçu avec un template literal."
          ],
          quiz: [
            {
              question: "Quel opérateur compare généralement valeur et type sans conversion implicite ?",
              options: ["=", "==", "===", "=>"],
              answer: 2,
              explanation:
                "=== effectue une comparaison stricte de la valeur et du type."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Conditions & Logique de Programmation",
      lessons: [
        {
          slug: "conditions-if-else",
          title: "3.1 if, else if & else",
          duration: "18 min",
          description:
            "Construire des programmes capables de prendre des décisions.",
          objectives: [
            "Utiliser if et else.",
            "Créer plusieurs branches avec else if.",
            "Construire des conditions lisibles."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A useful way to think about conditions is that they turn a program from a fixed sequence of instructions into a program that can respond differently to different situations. The program asks a question, evaluates the answer, and chooses a path.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Construire des programmes capables de prendre des décisions.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A login system, for example, may check whether a user is logged in and whether that user has permission before displaying protected content.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser if et else.\n- Créer plusieurs branches avec else if.\n- Construire des conditions lisibles.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Structure de base\n```javascript\nconst age = 20;\n\nif (age >= 18) {\n  console.log('Accès autorisé');\n} else {\n  console.log('Accès refusé');\n}\n```\n\nPlusieurs conditions peuvent être combinées :\n```javascript\nif (score >= 90) {\n  grade = 'A';\n} else if (score >= 80) {\n  grade = 'B';\n} else {\n  grade = 'C';\n}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **3.1 if, else if & else**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst stock = 4;\n\nif (stock === 0) {\n  console.log('Rupture de stock');\n} else if (stock < 5) {\n  console.log('Stock faible');\n} else {\n  console.log('Stock disponible');\n}\n```"
          ],
          practice: [
            "Créez un système de calcul de notes.",
            "Créez une vérification d'âge.",
            "Créez une logique de disponibilité d'un produit."
          ],
          quiz: [
            {
              question: "Quelle structure permet d'exécuter un bloc lorsque la condition if est fausse ?",
              options: ["else", "otherwise", "except", "fallback"],
              answer: 0,
              explanation:
                "Le bloc else est exécuté lorsque la condition précédente est fausse."
            }
          ]
        },
        {
          slug: "operateurs-logiques",
          title: "3.2 Opérateurs logiques & valeurs truthy/falsy",
          duration: "20 min",
          description:
            "Combiner plusieurs conditions et comprendre les valeurs évaluées comme vraies ou fausses.",
          objectives: [
            "Utiliser &&, || et !.",
            "Comprendre truthy et falsy.",
            "Construire des conditions complexes."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A useful way to think about conditions is that they turn a program from a fixed sequence of instructions into a program that can respond differently to different situations. The program asks a question, evaluates the answer, and chooses a path.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Combiner plusieurs conditions et comprendre les valeurs évaluées comme vraies ou fausses.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A login system, for example, may check whether a user is logged in and whether that user has permission before displaying protected content.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser &&, || et !.\n- Comprendre truthy et falsy.\n- Construire des conditions complexes.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## AND\n```javascript\nif (isLoggedIn && isAdmin) {\n  console.log('Accès administrateur');\n}\n```\n\n## OR\n```javascript\nif (isAdmin || isModerator) {\n  console.log('Accès privilégié');\n}\n```\n\n## NOT\n```javascript\nif (!isLoggedIn) {\n  console.log('Connexion requise');\n}\n```\n\nLes valeurs falsy comprennent notamment `false`, `0`, `''`, `null`, `undefined` et `NaN`.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **3.2 Opérateurs logiques & valeurs truthy/falsy**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst email = 'user@example.com';\nconst password = 'secret';\n\nif (email && password) {\n  console.log('Formulaire complet');\n}\n```"
          ],
          practice: [
            "Créez une condition qui autorise l'accès si l'utilisateur est connecté et possède un rôle admin.",
            "Testez plusieurs valeurs truthy et falsy."
          ],
          quiz: [
            {
              question: "Que vérifie généralement l'opérateur && ?",
              options: [
                "Qu'au moins une condition est vraie",
                "Que toutes les expressions concernées sont vraies",
                "Que la condition est fausse",
                "Qu'une valeur est numérique"
              ],
              answer: 1,
              explanation:
                "&& permet notamment de vérifier que plusieurs conditions sont vraies."
            }
          ]
        },
        {
          slug: "ternaire-switch",
          title: "3.3 Opérateur ternaire & switch",
          duration: "15 min",
          description:
            "Utiliser des alternatives syntaxiques pour certaines décisions.",
          objectives: [
            "Utiliser l'opérateur ternaire.",
            "Comprendre switch.",
            "Savoir quand privilégier une structure simple."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A useful way to think about conditions is that they turn a program from a fixed sequence of instructions into a program that can respond differently to different situations. The program asks a question, evaluates the answer, and chooses a path.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Utiliser des alternatives syntaxiques pour certaines décisions.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A login system, for example, may check whether a user is logged in and whether that user has permission before displaying protected content.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser l'opérateur ternaire.\n- Comprendre switch.\n- Savoir quand privilégier une structure simple.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Ternaire\n```javascript\nconst message = isLoggedIn ? 'Bienvenue' : 'Connectez-vous';\n```\n\nLe ternaire est adapté aux décisions simples.\n\n## switch\n```javascript\nswitch (role) {\n  case 'admin':\n    console.log('Administration');\n    break;\n  case 'user':\n    console.log('Espace utilisateur');\n    break;\n  default:\n    console.log('Rôle inconnu');\n}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **3.3 Opérateur ternaire & switch**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst status = isOnline ? 'En ligne' : 'Hors ligne';\n```"
          ],
          practice: [
            "Transformez une condition simple en ternaire.",
            "Créez un système de menu avec switch."
          ],
          quiz: [
            {
              question: "Quelle syntaxe représente correctement un opérateur ternaire ?",
              options: [
                "condition ? valeurSiVrai : valeurSiFaux",
                "condition : valeur ? valeur",
                "if ? else : condition",
                "condition => valeur"
              ],
              answer: 0,
              explanation:
                "Le ternaire suit la forme condition ? valeurSiVrai : valeurSiFaux."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Boucles & Itérations",
      lessons: [
        {
          slug: "boucle-for",
          title: "4.1 La boucle for",
          duration: "18 min",
          description:
            "Répéter une opération un nombre déterminé de fois.",
          objectives: [
            "Écrire une boucle for.",
            "Utiliser une variable de compteur.",
            "Comprendre l'initialisation, la condition et l'incrémentation."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Computers are good at repeating precise operations. Instead of writing the same instruction ten, one hundred, or one thousand times, we describe the repetition once and let JavaScript perform it for each value or iteration.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Répéter une opération un nombre déterminé de fois.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An application might display every product in a catalog, process every order in a batch, or retry an operation a limited number of times. Loops provide the mechanism for this repetition.",
            "",
            "## Ce que vous allez apprendre",
            "- Écrire une boucle for.\n- Utiliser une variable de compteur.\n- Comprendre l'initialisation, la condition et l'incrémentation.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Structure\n```javascript\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n```\n\nUne boucle `for` est particulièrement utile lorsqu'on connaît ou contrôle le nombre d'itérations.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **4.1 La boucle for**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nfor (let i = 1; i <= 10; i++) {\n  console.log(`5 x ${i} = ${5 * i}`);\n}\n```"
          ],
          practice: [
            "Affichez les nombres de 1 à 100.",
            "Affichez uniquement les nombres pairs.",
            "Créez une table de multiplication."
          ],
          quiz: [
            {
              question: "Quelle partie d'une boucle for est généralement utilisée pour augmenter le compteur ?",
              options: ["Initialisation", "Condition", "Incrémentation", "Retour"],
              answer: 2,
              explanation:
                "La troisième partie de la boucle for est généralement utilisée pour modifier le compteur."
            }
          ]
        },
        {
          slug: "while-break-continue",
          title: "4.2 while, break & continue",
          duration: "18 min",
          description:
            "Utiliser d'autres formes de boucles et contrôler leur exécution.",
          objectives: [
            "Utiliser while.",
            "Arrêter une boucle avec break.",
            "Ignorer une itération avec continue."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Computers are good at repeating precise operations. Instead of writing the same instruction ten, one hundred, or one thousand times, we describe the repetition once and let JavaScript perform it for each value or iteration.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Utiliser d'autres formes de boucles et contrôler leur exécution.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An application might display every product in a catalog, process every order in a batch, or retry an operation a limited number of times. Loops provide the mechanism for this repetition.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser while.\n- Arrêter une boucle avec break.\n- Ignorer une itération avec continue.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## while\n```javascript\nlet count = 0;\n\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}\n```\n\n## break\n```javascript\nfor (let i = 0; i < 100; i++) {\n  if (i === 10) break;\n}\n```\n\n## continue\n```javascript\nfor (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) continue;\n  console.log(i);\n}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **4.2 while, break & continue**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nlet attempts = 0;\nwhile (attempts < 3) {\n  attempts++;\n}\n```"
          ],
          practice: [
            "Créez un système de trois tentatives de connexion.",
            "Ignorez les nombres pairs dans une boucle."
          ],
          quiz: [
            {
              question: "Que fait break dans une boucle ?",
              options: [
                "Il redémarre la boucle",
                "Il arrête la boucle",
                "Il saute uniquement une itération",
                "Il crée une nouvelle boucle"
              ],
              answer: 1,
              explanation:
                "break quitte immédiatement la boucle dans laquelle il se trouve."
            }
          ]
        },
        {
          slug: "boucles-tableaux",
          title: "4.3 Parcourir des collections",
          duration: "20 min",
          description:
            "Parcourir efficacement les données et choisir une méthode d'itération adaptée.",
          objectives: [
            "Parcourir un tableau.",
            "Utiliser for...of.",
            "Comprendre quand utiliser une méthode de tableau."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Computers are good at repeating precise operations. Instead of writing the same instruction ten, one hundred, or one thousand times, we describe the repetition once and let JavaScript perform it for each value or iteration.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Parcourir efficacement les données et choisir une méthode d'itération adaptée.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An application might display every product in a catalog, process every order in a batch, or retry an operation a limited number of times. Loops provide the mechanism for this repetition.",
            "",
            "## Ce que vous allez apprendre",
            "- Parcourir un tableau.\n- Utiliser for...of.\n- Comprendre quand utiliser une méthode de tableau.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## for...of\n```javascript\nconst products = ['Laptop', 'Phone', 'Mouse'];\n\nfor (const product of products) {\n  console.log(product);\n}\n```\n\nLes méthodes comme `forEach`, `map` et `filter` seront étudiées plus en détail dans les modules suivants.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **4.3 Parcourir des collections**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst users = ['Alice', 'Bob', 'Chris'];\n\nfor (const user of users) {\n  console.log(`Bonjour ${user}`);\n}\n```"
          ],
          practice: [
            "Parcourez un tableau de produits.",
            "Calculez le total des prix avec une boucle.",
            "Affichez les utilisateurs actifs."
          ],
          quiz: [
            {
              question: "Quelle boucle est pratique pour parcourir directement les valeurs d'un tableau ?",
              options: ["for...of", "for...css", "switch...of", "if...of"],
              answer: 0,
              explanation:
                "for...of permet d'itérer directement sur les valeurs d'une collection itérable comme un tableau."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Fonctions, Scope & Closures",
      lessons: [
        {
          slug: "fonctions-parametres-retour",
          title: "5.1 Fonctions, paramètres & valeurs de retour",
          duration: "20 min",
          description:
            "Créer des fonctions réutilisables et structurer la logique d'une application.",
          objectives: [
            "Déclarer des fonctions.",
            "Utiliser des paramètres.",
            "Retourner des valeurs.",
            "Créer des fonctions réutilisables."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "As programs grow, putting all logic in one place quickly becomes difficult to understand and maintain. Functions let us give a piece of logic a name, provide it with inputs, and optionally receive an output. Scope and closures then explain where that logic can access data.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Créer des fonctions réutilisables et structurer la logique d'une application.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A checkout system can have separate functions for calculating totals, taxes, discounts, and shipping. Each function has a focused responsibility and can be reused wherever that calculation is needed.",
            "",
            "## Ce que vous allez apprendre",
            "- Déclarer des fonctions.\n- Utiliser des paramètres.\n- Retourner des valeurs.\n- Créer des fonctions réutilisables.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Fonction\n```javascript\nfunction calculateTotal(price, quantity) {\n  return price * quantity;\n}\n\nconst total = calculateTotal(20, 3);\n```\n\nUne bonne fonction doit idéalement avoir une responsabilité claire et un nom explicite.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **5.1 Fonctions, paramètres & valeurs de retour**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nfunction calculateTax(amount, rate) {\n  return amount * rate;\n}\n\nconsole.log(calculateTax(100, 0.2));\n```"
          ],
          practice: [
            "Créez une fonction de conversion Celsius/Fahrenheit.",
            "Créez une fonction de calcul de remise.",
            "Créez une fonction qui vérifie si un email est vide."
          ],
          quiz: [
            {
              question: "Quel mot-clé permet généralement de renvoyer une valeur depuis une fonction ?",
              options: ["send", "return", "yieldValue", "output"],
              answer: 1,
              explanation:
                "return termine généralement l'exécution de la fonction et fournit sa valeur de retour."
            }
          ]
        },
        {
          slug: "arrow-functions",
          title: "5.2 Fonctions fléchées",
          duration: "18 min",
          description:
            "Écrire des fonctions modernes avec une syntaxe concise et comprendre leur comportement de this.",
          objectives: [
            "Convertir une fonction classique en arrow function.",
            "Utiliser les retours implicites.",
            "Comprendre le this lexical des fonctions fléchées."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "As programs grow, putting all logic in one place quickly becomes difficult to understand and maintain. Functions let us give a piece of logic a name, provide it with inputs, and optionally receive an output. Scope and closures then explain where that logic can access data.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Écrire des fonctions modernes avec une syntaxe concise et comprendre leur comportement de this.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A checkout system can have separate functions for calculating totals, taxes, discounts, and shipping. Each function has a focused responsibility and can be reused wherever that calculation is needed.",
            "",
            "## Ce que vous allez apprendre",
            "- Convertir une fonction classique en arrow function.\n- Utiliser les retours implicites.\n- Comprendre le this lexical des fonctions fléchées.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Syntaxe\n```javascript\nconst add = (a, b) => a + b;\n```\n\nUne fonction avec un seul paramètre peut être écrite :\n```javascript\nconst double = n => n * 2;\n```\n\nLes fonctions fléchées ne créent pas leur propre `this`. Elles utilisent le `this` lexical du contexte environnant.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **5.2 Fonctions fléchées**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst names = ['Alice', 'Bob'];\nconst greetings = names.map(name => `Bonjour ${name}`);\n```"
          ],
          practice: [
            "Transformez cinq fonctions classiques en arrow functions.",
            "Utilisez une arrow function avec map."
          ],
          quiz: [
            {
              question: "Quelle écriture utilise un retour implicite ?",
              options: [
                "x => x + 5",
                "x => { return x + 5; }",
                "function x => x + 5",
                "x -> x + 5"
              ],
              answer: 0,
              explanation:
                "Sans accolades, l'expression située après => est retournée implicitement."
            }
          ]
        },
        {
          slug: "scope-et-closures",
          title: "5.3 Scope, portée lexicale & closures",
          duration: "25 min",
          description:
            "Comprendre comment JavaScript recherche les variables et comment les closures permettent de conserver un état.",
          objectives: [
            "Comprendre le scope global et local.",
            "Comprendre le scope de bloc.",
            "Expliquer une closure.",
            "Créer des fonctions qui conservent un état privé."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "As programs grow, putting all logic in one place quickly becomes difficult to understand and maintain. Functions let us give a piece of logic a name, provide it with inputs, and optionally receive an output. Scope and closures then explain where that logic can access data.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre comment JavaScript recherche les variables et comment les closures permettent de conserver un état.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A checkout system can have separate functions for calculating totals, taxes, discounts, and shipping. Each function has a focused responsibility and can be reused wherever that calculation is needed.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre le scope global et local.\n- Comprendre le scope de bloc.\n- Expliquer une closure.\n- Créer des fonctions qui conservent un état privé.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Scope\nLe scope détermine où une variable est accessible.\n\n```javascript\nfunction createUser() {\n  const name = 'Alice';\n  console.log(name);\n}\n```\n\n`name` n'est pas accessible en dehors de la fonction.\n\n## Closure\nUne closure apparaît lorsqu'une fonction interne conserve l'accès aux variables de son environnement lexical.\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n\n  return () => {\n    count++;\n    return count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **5.3 Scope, portée lexicale & closures**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nfunction createMultiplier(multiplier) {\n  return number => number * multiplier;\n}\n\nconst double = createMultiplier(2);\nconsole.log(double(5));\n```"
          ],
          practice: [
            "Créez un compteur privé avec une closure.",
            "Créez une fonction factory qui génère des calculateurs personnalisés."
          ],
          quiz: [
            {
              question: "Qu'est-ce qu'une closure permet notamment de faire ?",
              options: [
                "Supprimer toutes les variables",
                "Conserver l'accès à des variables d'un environnement lexical",
                "Désactiver JavaScript",
                "Créer automatiquement une base de données"
              ],
              answer: 1,
              explanation:
                "Une closure permet à une fonction de conserver l'accès aux variables de son environnement lexical."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Tableaux & Méthodes de Données",
      lessons: [
        {
          slug: "tableaux-manipulation",
          title: "6.1 Tableaux : création & manipulation",
          duration: "20 min",
          description:
            "Manipuler des collections de données avec les méthodes fondamentales des tableaux.",
          objectives: [
            "Créer et lire des tableaux.",
            "Ajouter et supprimer des éléments.",
            "Utiliser slice et splice.",
            "Comprendre les index."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Real applications rarely work with one value at a time. They work with collections such as users, products, orders, messages, and transactions. Array methods give us a vocabulary for transforming, filtering, searching, and summarizing those collections.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Manipuler des collections de données avec les méthodes fondamentales des tableaux.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An online store may need to show only products in stock, calculate the total of a cart, find a product by ID, and sort products by price. These are collection-processing problems.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer et lire des tableaux.\n- Ajouter et supprimer des éléments.\n- Utiliser slice et splice.\n- Comprendre les index.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Création\n```javascript\nconst products = ['Laptop', 'Phone', 'Mouse'];\n```\n\nLes index commencent à zéro :\n```javascript\nconsole.log(products[0]);\n```\n\nMéthodes utiles :\n- push\n- pop\n- shift\n- unshift\n- slice\n- splice",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **6.1 Tableaux : création & manipulation**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst tasks = ['Coder', 'Tester'];\ntasks.push('Déployer');\nconsole.log(tasks);\n```"
          ],
          practice: [
            "Construisez une liste de tâches.",
            "Ajoutez et supprimez des éléments.",
            "Créez une copie partielle avec slice."
          ],
          quiz: [
            {
              question: "Quelle méthode ajoute un élément à la fin d'un tableau ?",
              options: ["push()", "pop()", "shift()", "slice()"],
              answer: 0,
              explanation:
                "push() ajoute un ou plusieurs éléments à la fin d'un tableau."
            }
          ]
        },
        {
          slug: "map-filter-find",
          title: "6.2 map, filter, find & forEach",
          duration: "25 min",
          description:
            "Transformer, filtrer et rechercher des données avec les méthodes modernes des tableaux.",
          objectives: [
            "Transformer un tableau avec map.",
            "Filtrer avec filter.",
            "Rechercher avec find.",
            "Parcourir avec forEach."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Real applications rarely work with one value at a time. They work with collections such as users, products, orders, messages, and transactions. Array methods give us a vocabulary for transforming, filtering, searching, and summarizing those collections.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Transformer, filtrer et rechercher des données avec les méthodes modernes des tableaux.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An online store may need to show only products in stock, calculate the total of a cart, find a product by ID, and sort products by price. These are collection-processing problems.",
            "",
            "## Ce que vous allez apprendre",
            "- Transformer un tableau avec map.\n- Filtrer avec filter.\n- Rechercher avec find.\n- Parcourir avec forEach.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## map\n```javascript\nconst prices = [10, 20, 30];\nconst doubled = prices.map(price => price * 2);\n```\n\n## filter\n```javascript\nconst expensive = prices.filter(price => price > 15);\n```\n\n## find\n```javascript\nconst product = products.find(product => product.id === 10);\n```\n\n## forEach\n```javascript\nproducts.forEach(product => {\n  console.log(product.name);\n});\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **6.2 map, filter, find & forEach**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst users = [\n  { name: 'Alice', active: true },\n  { name: 'Bob', active: false }\n];\n\nconst activeUsers = users.filter(user => user.active);\n```"
          ],
          practice: [
            "Filtrez les produits disponibles.",
            "Transformez les prix en prix TTC.",
            "Trouvez un utilisateur par son identifiant."
          ],
          quiz: [
            {
              question: "Quelle méthode retourne un nouveau tableau transformé ?",
              options: ["map()", "find()", "forEach()", "push()"],
              answer: 0,
              explanation:
                "map() crée un nouveau tableau contenant le résultat de la transformation de chaque élément."
            }
          ]
        },
        {
          slug: "reduce-sort-some-every",
          title: "6.3 reduce, sort, some & every",
          duration: "25 min",
          description:
            "Effectuer des agrégations, des tris et des vérifications sur des collections.",
          objectives: [
            "Calculer une valeur agrégée avec reduce.",
            "Trier des données.",
            "Vérifier une condition avec some et every."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Real applications rarely work with one value at a time. They work with collections such as users, products, orders, messages, and transactions. Array methods give us a vocabulary for transforming, filtering, searching, and summarizing those collections.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Effectuer des agrégations, des tris et des vérifications sur des collections.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An online store may need to show only products in stock, calculate the total of a cart, find a product by ID, and sort products by price. These are collection-processing problems.",
            "",
            "## Ce que vous allez apprendre",
            "- Calculer une valeur agrégée avec reduce.\n- Trier des données.\n- Vérifier une condition avec some et every.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## reduce\n```javascript\nconst prices = [10, 20, 30];\nconst total = prices.reduce((sum, price) => sum + price, 0);\n```\n\n## sort\n```javascript\nconst numbers = [30, 5, 10];\nnumbers.sort((a, b) => a - b);\n```\n\n## some et every\n```javascript\nconst hasAdmin = users.some(user => user.role === 'admin');\nconst allActive = users.every(user => user.active);\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **6.3 reduce, sort, some & every**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst cart = [\n  { price: 20, quantity: 2 },\n  { price: 10, quantity: 3 }\n];\n\nconst total = cart.reduce(\n  (sum, item) => sum + item.price * item.quantity,\n  0\n);\n```"
          ],
          practice: [
            "Calculez le total d'un panier.",
            "Triez une liste de produits par prix.",
            "Vérifiez si tous les produits sont disponibles."
          ],
          quiz: [
            {
              question: "Quelle méthode est particulièrement adaptée pour produire une seule valeur à partir d'un tableau ?",
              options: ["reduce()", "filter()", "map()", "includes()"],
              answer: 0,
              explanation:
                "reduce() permet d'accumuler les éléments d'un tableau pour produire une valeur finale."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Objets & Données Complexes",
      lessons: [
        {
          slug: "objets-proprietes-methodes",
          title: "7.1 Objets, propriétés & méthodes",
          duration: "20 min",
          description:
            "Modéliser des données réelles avec des objets JavaScript.",
          objectives: [
            "Créer des objets.",
            "Lire et modifier leurs propriétés.",
            "Créer des méthodes.",
            "Manipuler des objets imbriqués."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "When data becomes richer than a single value, objects give us a way to group related information under meaningful names. An object can represent a real entity and can also contain behavior that operates on that entity.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Modéliser des données réelles avec des objets JavaScript.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A user might have a name, email, role, and preferences. A product might have a price, stock count, and category. Modeling these entities as objects makes application data easier to understand.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer des objets.\n- Lire et modifier leurs propriétés.\n- Créer des méthodes.\n- Manipuler des objets imbriqués.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Objet\n```javascript\nconst user = {\n  name: 'Alice',\n  age: 25,\n  greet() {\n    return `Bonjour ${this.name}`;\n  }\n};\n```\n\nLes objets permettent de représenter des entités réelles comme un utilisateur, un produit, une commande ou une entreprise.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **7.1 Objets, propriétés & méthodes**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst product = {\n  id: 1,\n  name: 'Laptop',\n  price: 1200,\n  stock: 8\n};\n\nproduct.stock -= 1;\n```"
          ],
          practice: [
            "Créez un objet utilisateur.",
            "Ajoutez une méthode permettant d'afficher son nom.",
            "Créez un objet produit avec plusieurs propriétés."
          ],
          quiz: [
            {
              question: "Comment accéder à la propriété name d'un objet user ?",
              options: [
                "user->name",
                "user.name",
                "user::name",
                "user[name()]"
              ],
              answer: 1,
              explanation:
                "La notation point permet d'accéder à une propriété connue : user.name."
            }
          ]
        },
        {
          slug: "destructuring",
          title: "7.2 Déstructuration d'objets & tableaux",
          duration: "18 min",
          description:
            "Extraire facilement des valeurs depuis des objets et des tableaux.",
          objectives: [
            "Déstructurer des objets.",
            "Déstructurer des tableaux.",
            "Renommer une propriété.",
            "Utiliser des valeurs par défaut."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "When data becomes richer than a single value, objects give us a way to group related information under meaningful names. An object can represent a real entity and can also contain behavior that operates on that entity.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Extraire facilement des valeurs depuis des objets et des tableaux.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A user might have a name, email, role, and preferences. A product might have a price, stock count, and category. Modeling these entities as objects makes application data easier to understand.",
            "",
            "## Ce que vous allez apprendre",
            "- Déstructurer des objets.\n- Déstructurer des tableaux.\n- Renommer une propriété.\n- Utiliser des valeurs par défaut.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Objet\n```javascript\nconst user = {\n  name: 'Alice',\n  role: 'Developer'\n};\n\nconst { name, role } = user;\n```\n\n## Renommer\n```javascript\nconst { name: userName } = user;\n```\n\n## Tableau\n```javascript\nconst colors = ['red', 'green', 'blue'];\nconst [first, second] = colors;\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **7.2 Déstructuration d'objets & tableaux**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nfunction displayUser({ name, email }) {\n  console.log(`${name}: ${email}`);\n}\n```"
          ],
          practice: [
            "Déstructurez un objet utilisateur.",
            "Déstructurez un tableau de trois couleurs.",
            "Utilisez la déstructuration directement dans les paramètres d'une fonction."
          ],
          quiz: [
            {
              question: "Quelle syntaxe permet de déstructurer un objet ?",
              options: ["[]", "{}", "<>", "()"],
              answer: 1,
              explanation:
                "La déstructuration d'objet utilise les accolades."
            }
          ]
        },
        {
          slug: "spread-rest",
          title: "7.3 Spread & Rest",
          duration: "20 min",
          description:
            "Copier, fusionner et collecter des valeurs avec la syntaxe moderne de JavaScript.",
          objectives: [
            "Utiliser spread avec des tableaux.",
            "Utiliser spread avec des objets.",
            "Utiliser rest dans une fonction.",
            "Comprendre la copie superficielle."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "When data becomes richer than a single value, objects give us a way to group related information under meaningful names. An object can represent a real entity and can also contain behavior that operates on that entity.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Copier, fusionner et collecter des valeurs avec la syntaxe moderne de JavaScript.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A user might have a name, email, role, and preferences. A product might have a price, stock count, and category. Modeling these entities as objects makes application data easier to understand.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser spread avec des tableaux.\n- Utiliser spread avec des objets.\n- Utiliser rest dans une fonction.\n- Comprendre la copie superficielle.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Spread avec un tableau\n```javascript\nconst first = [1, 2];\nconst second = [3, 4];\nconst all = [...first, ...second];\n```\n\n## Spread avec un objet\n```javascript\nconst user = { name: 'Alice', role: 'User' };\nconst updatedUser = { ...user, role: 'Admin' };\n```\n\n## Rest\n```javascript\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **7.3 Spread & Rest**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst updatedProduct = {\n  ...product,\n  price: 999\n};\n```"
          ],
          practice: [
            "Fusionnez deux tableaux.",
            "Créez une nouvelle version d'un objet sans modifier l'original.",
            "Créez une fonction acceptant un nombre variable d'arguments."
          ],
          quiz: [
            {
              question: "Que permet principalement la syntaxe ... dans un objet ?",
              options: [
                "Étendre ou copier des propriétés énumérables",
                "Supprimer automatiquement l'objet",
                "Convertir l'objet en JSON",
                "Créer une classe"
              ],
              answer: 0,
              explanation:
                "Le spread permet notamment de créer un nouvel objet en reprenant les propriétés d'un autre objet."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: DOM & Manipulation des Pages Web",
      lessons: [
        {
          slug: "selection-dom",
          title: "8.1 Sélectionner des éléments du DOM",
          duration: "18 min",
          description:
            "Utiliser JavaScript pour sélectionner les éléments HTML d'une page.",
          objectives: [
            "Comprendre le DOM.",
            "Utiliser querySelector.",
            "Utiliser querySelectorAll.",
            "Sélectionner des éléments avec des sélecteurs CSS."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A web page starts as HTML, but a modern interface changes after the page loads. The DOM is the browser's object representation of that HTML, and JavaScript can use it to find elements, change them, create new ones, and remove them.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Utiliser JavaScript pour sélectionner les éléments HTML d'une page.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A task application can add a new task to a list without reloading the page. JavaScript changes the DOM to make the new state visible to the user.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre le DOM.\n- Utiliser querySelector.\n- Utiliser querySelectorAll.\n- Sélectionner des éléments avec des sélecteurs CSS.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Le DOM\nLe DOM représente la structure d'un document HTML sous forme d'un arbre d'objets manipulable par JavaScript.\n\n```javascript\nconst title = document.querySelector('#main-title');\nconst buttons = document.querySelectorAll('.btn');\n```\n\nLes sélecteurs CSS habituels peuvent être utilisés.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **8.1 Sélectionner des éléments du DOM**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst card = document.querySelector('.card');\nconst links = document.querySelectorAll('a');\n```"
          ],
          practice: [
            "Sélectionnez un titre.",
            "Sélectionnez tous les boutons.",
            "Sélectionnez toutes les cartes d'une page."
          ],
          quiz: [
            {
              question: "Quelle méthode sélectionne le premier élément correspondant à un sélecteur CSS ?",
              options: ["querySelector()", "queryAll()", "selectFirst()", "findElement()"],
              answer: 0,
              explanation:
                "querySelector() retourne le premier élément correspondant au sélecteur."
            }
          ]
        },
        {
          slug: "modifier-dom",
          title: "8.2 Modifier le contenu, les classes & attributs",
          duration: "20 min",
          description:
            "Modifier dynamiquement le contenu et l'apparence d'une page.",
          objectives: [
            "Modifier textContent.",
            "Manipuler classList.",
            "Modifier des attributs.",
            "Créer des éléments dynamiquement."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A web page starts as HTML, but a modern interface changes after the page loads. The DOM is the browser's object representation of that HTML, and JavaScript can use it to find elements, change them, create new ones, and remove them.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Modifier dynamiquement le contenu et l'apparence d'une page.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A task application can add a new task to a list without reloading the page. JavaScript changes the DOM to make the new state visible to the user.",
            "",
            "## Ce que vous allez apprendre",
            "- Modifier textContent.\n- Manipuler classList.\n- Modifier des attributs.\n- Créer des éléments dynamiquement.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Contenu\n```javascript\ntitle.textContent = 'Nouveau titre';\n```\n\n## Classes\n```javascript\nelement.classList.add('active');\nelement.classList.remove('hidden');\nelement.classList.toggle('selected');\n```\n\n## Attributs\n```javascript\nimage.setAttribute('alt', 'Photo du produit');\n```\n\nPour du contenu utilisateur, privilégiez `textContent` lorsque vous n'avez pas besoin d'insérer du HTML.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **8.2 Modifier le contenu, les classes & attributs**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst button = document.querySelector('button');\nbutton.textContent = 'Enregistré';\nbutton.classList.add('success');\n```"
          ],
          practice: [
            "Créez un bouton qui change son texte lorsqu'il est activé.",
            "Ajoutez et supprimez des classes dynamiquement."
          ],
          quiz: [
            {
              question: "Quelle méthode permet d'ajouter ou supprimer alternativement une classe ?",
              options: [
                "classList.toggle()",
                "classList.switch()",
                "classList.change()",
                "classList.flip()"
              ],
              answer: 0,
              explanation:
                "classList.toggle() ajoute la classe si elle est absente et la retire si elle est présente."
            }
          ]
        },
        {
          slug: "creer-supprimer-elements",
          title: "8.3 Créer, insérer & supprimer des éléments",
          duration: "22 min",
          description:
            "Construire des interfaces dynamiques à partir de données JavaScript.",
          objectives: [
            "Créer des éléments avec createElement.",
            "Insérer des éléments.",
            "Supprimer des éléments.",
            "Construire une liste dynamique."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A web page starts as HTML, but a modern interface changes after the page loads. The DOM is the browser's object representation of that HTML, and JavaScript can use it to find elements, change them, create new ones, and remove them.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Construire des interfaces dynamiques à partir de données JavaScript.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A task application can add a new task to a list without reloading the page. JavaScript changes the DOM to make the new state visible to the user.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer des éléments avec createElement.\n- Insérer des éléments.\n- Supprimer des éléments.\n- Construire une liste dynamique.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Créer un élément\n```javascript\nconst item = document.createElement('li');\nitem.textContent = 'Nouvelle tâche';\n```\n\n## Insérer\n```javascript\nlist.append(item);\n```\n\nCette technique permet de générer des interfaces à partir de données.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **8.3 Créer, insérer & supprimer des éléments**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nfunction addTask(title) {\n  const li = document.createElement('li');\n  li.textContent = title;\n  document.querySelector('#tasks').append(li);\n}\n```"
          ],
          practice: [
            "Construisez une liste de tâches dynamiquement.",
            "Ajoutez un bouton de suppression à chaque tâche."
          ],
          quiz: [
            {
              question: "Quelle méthode permet de créer un nouvel élément DOM ?",
              options: [
                "document.createElement()",
                "document.newElement()",
                "document.makeElement()",
                "document.build()"
              ],
              answer: 0,
              explanation:
                "document.createElement() crée un nouvel élément DOM."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Événements & Formulaires",
      lessons: [
        {
          slug: "event-listeners",
          title: "9.1 addEventListener & événements",
          duration: "20 min",
          description:
            "Réagir aux actions des utilisateurs avec le système d'événements du navigateur.",
          objectives: [
            "Utiliser addEventListener.",
            "Comprendre l'objet Event.",
            "Gérer click, input, change et submit."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A browser application becomes interactive when it can react to events. A click, keystroke, form submission, or change in an input is an event that gives the program an opportunity to respond.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Réagir aux actions des utilisateurs avec le système d'événements du navigateur.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A registration form can validate fields as the user types, show errors when the form is submitted, and update the interface without a full page reload.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser addEventListener.\n- Comprendre l'objet Event.\n- Gérer click, input, change et submit.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Écouter un événement\n```javascript\nbutton.addEventListener('click', event => {\n  console.log('Bouton cliqué');\n});\n```\n\nJavaScript fournit de nombreux événements :\n- click\n- input\n- change\n- submit\n- keydown\n- keyup\n- focus\n- blur",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **9.1 addEventListener & événements**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\ninput.addEventListener('input', event => {\n  console.log(event.target.value);\n});\n```"
          ],
          practice: [
            "Créez un compteur avec un bouton.",
            "Affichez en temps réel le contenu d'un champ input."
          ],
          quiz: [
            {
              question: "Quelle méthode permet d'attacher un gestionnaire d'événement moderne ?",
              options: [
                "addEventListener()",
                "attachListener()",
                "listen()",
                "onEvent()"
              ],
              answer: 0,
              explanation:
                "addEventListener() est la méthode standard pour écouter des événements."
            }
          ]
        },
        {
          slug: "formulaires-validation",
          title: "9.2 Formulaires & validation",
          duration: "25 min",
          description:
            "Construire des formulaires interactifs avec validation côté client.",
          objectives: [
            "Lire les valeurs d'un formulaire.",
            "Empêcher le comportement par défaut.",
            "Afficher des erreurs de validation.",
            "Construire une validation utilisateur claire."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A browser application becomes interactive when it can react to events. A click, keystroke, form submission, or change in an input is an event that gives the program an opportunity to respond.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Construire des formulaires interactifs avec validation côté client.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A registration form can validate fields as the user types, show errors when the form is submitted, and update the interface without a full page reload.",
            "",
            "## Ce que vous allez apprendre",
            "- Lire les valeurs d'un formulaire.\n- Empêcher le comportement par défaut.\n- Afficher des erreurs de validation.\n- Construire une validation utilisateur claire.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Soumission\n```javascript\nform.addEventListener('submit', event => {\n  event.preventDefault();\n\n  const email = form.email.value.trim();\n  console.log(email);\n});\n```\n\nLa validation côté client améliore l'expérience utilisateur, mais ne remplace jamais la validation côté serveur.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **9.2 Formulaires & validation**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nif (!email.includes('@')) {\n  error.textContent = 'Adresse email invalide';\n}\n```"
          ],
          practice: [
            "Créez un formulaire d'inscription.",
            "Validez le nom, l'email et le mot de passe.",
            "Affichez un message d'erreur pour chaque champ incorrect."
          ],
          quiz: [
            {
              question: "Pourquoi utiliser event.preventDefault() dans un formulaire SPA ?",
              options: [
                "Pour empêcher le comportement par défaut du navigateur",
                "Pour supprimer les données",
                "Pour créer automatiquement une API",
                "Pour chiffrer le formulaire"
              ],
              answer: 0,
              explanation:
                "preventDefault() permet notamment d'empêcher le navigateur de suivre le comportement par défaut de soumission."
            }
          ]
        },
        {
          slug: "delegation-evenements",
          title: "9.3 Délégation d'événements",
          duration: "20 min",
          description:
            "Gérer efficacement les événements d'éléments dynamiques.",
          objectives: [
            "Comprendre la propagation des événements.",
            "Utiliser event.target.",
            "Mettre en place une délégation d'événements."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A browser application becomes interactive when it can react to events. A click, keystroke, form submission, or change in an input is an event that gives the program an opportunity to respond.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Gérer efficacement les événements d'éléments dynamiques.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A registration form can validate fields as the user types, show errors when the form is submitted, and update the interface without a full page reload.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre la propagation des événements.\n- Utiliser event.target.\n- Mettre en place une délégation d'événements.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Pourquoi la délégation ?\nLorsqu'une liste contient de nombreux éléments ou que ceux-ci sont créés dynamiquement, il peut être plus efficace d'écouter un événement sur leur parent.\n\n```javascript\nlist.addEventListener('click', event => {\n  if (event.target.matches('.delete')) {\n    event.target.closest('li')?.remove();\n  }\n});\n```\n\nCette technique repose sur la propagation des événements dans le DOM.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **9.3 Délégation d'événements**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\ncontainer.addEventListener('click', event => {\n  const button = event.target.closest('[data-action]');\n  if (!button) return;\n\n  console.log(button.dataset.action);\n});\n```"
          ],
          practice: [
            "Créez une liste dynamique avec des boutons supprimer.",
            "Utilisez un seul event listener sur le conteneur."
          ],
          quiz: [
            {
              question: "Quel objet permet notamment d'identifier l'élément ayant déclenché l'événement ?",
              options: ["event.target", "event.sourceOnly", "event.elementIdOnly", "event.origin"],
              answer: 0,
              explanation:
                "event.target référence l'élément sur lequel l'événement a été initialement déclenché."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Programmation Asynchrone",
      lessons: [
        {
          slug: "synchrone-asynchrone",
          title: "10.1 Comprendre l'asynchronisme",
          duration: "20 min",
          description:
            "Comprendre pourquoi JavaScript utilise des opérations asynchrones et comment le navigateur les gère.",
          objectives: [
            "Distinguer code synchrone et asynchrone.",
            "Comprendre le rôle des callbacks.",
            "Comprendre les grandes lignes de l'event loop."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Some operations take time or depend on something outside the current JavaScript instruction, such as a timer or a network request. Asynchronous programming lets an application start such work and continue handling other work instead of treating the whole application as frozen.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre pourquoi JavaScript utilise des opérations asynchrones et comment le navigateur les gère.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "When a dashboard loads data from a server, the interface should remain usable while the request is in progress. Promises and async/await give us a structured way to represent and handle that work.",
            "",
            "## Ce que vous allez apprendre",
            "- Distinguer code synchrone et asynchrone.\n- Comprendre le rôle des callbacks.\n- Comprendre les grandes lignes de l'event loop.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Synchrone\nLe code synchrone s'exécute généralement instruction après instruction.\n\n## Asynchrone\nLes opérations comme les requêtes réseau ou certains timers peuvent être traitées sans bloquer inutilement l'interface.\n\nJavaScript utilise un modèle d'exécution avec notamment une call stack, des APIs de l'environnement et une event loop.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **10.1 Comprendre l'asynchronisme**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconsole.log('A');\n\nsetTimeout(() => {\n  console.log('B');\n}, 0);\n\nconsole.log('C');\n```\n\n// A\n// C\n// B"
          ],
          practice: [
            "Prédisez l'ordre d'exécution de plusieurs console.log et setTimeout.",
            "Expliquez pourquoi setTimeout(..., 0) ne s'exécute pas immédiatement."
          ],
          quiz: [
            {
              question: "Que permet principalement l'asynchronisme dans une application web ?",
              options: [
                "Gérer certaines opérations sans bloquer inutilement le flux principal",
                "Désactiver le navigateur",
                "Supprimer le DOM",
                "Transformer JavaScript en SQL"
              ],
              answer: 0,
              explanation:
                "Les mécanismes asynchrones permettent notamment de gérer des opérations longues ou externes sans bloquer inutilement l'application."
            }
          ]
        },
        {
          slug: "promises",
          title: "10.2 Promises",
          duration: "22 min",
          description:
            "Comprendre les Promises et gérer proprement les résultats asynchrones.",
          objectives: [
            "Comprendre les états d'une Promise.",
            "Utiliser then et catch.",
            "Enchaîner plusieurs opérations asynchrones."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Some operations take time or depend on something outside the current JavaScript instruction, such as a timer or a network request. Asynchronous programming lets an application start such work and continue handling other work instead of treating the whole application as frozen.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre les Promises et gérer proprement les résultats asynchrones.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "When a dashboard loads data from a server, the interface should remain usable while the request is in progress. Promises and async/await give us a structured way to represent and handle that work.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre les états d'une Promise.\n- Utiliser then et catch.\n- Enchaîner plusieurs opérations asynchrones.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## États\nUne Promise peut être pending, fulfilled ou rejected.\n\n```javascript\nfetch('/api/users')\n  .then(response => response.json())\n  .then(users => console.log(users))\n  .catch(error => console.error(error));\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **10.2 Promises**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst promise = Promise.resolve('OK');\n\npromise.then(value => {\n  console.log(value);\n});\n```"
          ],
          practice: [
            "Créez une Promise qui se résout après quelques secondes.",
            "Gérez sa réussite et son erreur."
          ],
          quiz: [
            {
              question: "Quel état correspond à une Promise terminée avec succès ?",
              options: ["pending", "fulfilled", "waiting", "paused"],
              answer: 1,
              explanation:
                "Une Promise terminée avec succès est dans l'état fulfilled."
            }
          ]
        },
        {
          slug: "async-await",
          title: "10.3 Async / Await",
          duration: "22 min",
          description:
            "Écrire du code asynchrone moderne et lisible avec async et await.",
          objectives: [
            "Déclarer une fonction async.",
            "Utiliser await.",
            "Gérer les erreurs avec try/catch.",
            "Éviter les chaînes de callbacks difficiles à maintenir."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Some operations take time or depend on something outside the current JavaScript instruction, such as a timer or a network request. Asynchronous programming lets an application start such work and continue handling other work instead of treating the whole application as frozen.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Écrire du code asynchrone moderne et lisible avec async et await.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "When a dashboard loads data from a server, the interface should remain usable while the request is in progress. Promises and async/await give us a structured way to represent and handle that work.",
            "",
            "## Ce que vous allez apprendre",
            "- Déclarer une fonction async.\n- Utiliser await.\n- Gérer les erreurs avec try/catch.\n- Éviter les chaînes de callbacks difficiles à maintenir.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Exemple\n```javascript\nasync function loadUsers() {\n  try {\n    const response = await fetch('/api/users');\n\n    if (!response.ok) {\n      throw new Error('Erreur HTTP');\n    }\n\n    const users = await response.json();\n    return users;\n  } catch (error) {\n    console.error(error);\n  }\n}\n```\n\nUne fonction `async` retourne toujours une Promise.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **10.3 Async / Await**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst loadData = async () => {\n  const response = await fetch('/api/products');\n  return response.json();\n};\n```"
          ],
          practice: [
            "Convertissez une chaîne then/catch en async/await.",
            "Ajoutez une gestion d'erreur avec try/catch."
          ],
          quiz: [
            {
              question: "Que retourne toujours une fonction déclarée avec async ?",
              options: ["Un string", "Une Promise", "Un tableau", "Un objet DOM"],
              answer: 1,
              explanation:
                "Une fonction async retourne toujours une Promise, même si elle utilise return avec une valeur simple."
            }
          ]
        }
      ]
    },

    {
      title: "Module 11: Fetch, HTTP & APIs",
      lessons: [
        {
          slug: "http-et-api",
          title: "11.1 HTTP, APIs & REST",
          duration: "22 min",
          description:
            "Comprendre comment les applications communiquent avec des serveurs.",
          objectives: [
            "Comprendre client et serveur.",
            "Identifier les principales méthodes HTTP.",
            "Comprendre JSON et REST.",
            "Lire les principaux codes HTTP."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Most useful web applications communicate with servers. HTTP defines how clients and servers exchange requests and responses, while APIs expose operations and data that other software can use.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre comment les applications communiquent avec des serveurs.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A frontend might request a list of products, send a new order, update a task, or delete a resource. Understanding HTTP makes these operations predictable instead of mysterious.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre client et serveur.\n- Identifier les principales méthodes HTTP.\n- Comprendre JSON et REST.\n- Lire les principaux codes HTTP.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Méthodes HTTP\n- GET : récupérer des données\n- POST : créer une ressource\n- PUT : remplacer une ressource\n- PATCH : modifier partiellement une ressource\n- DELETE : supprimer une ressource\n\n## Codes courants\n- 200 : succès\n- 201 : création\n- 400 : requête incorrecte\n- 401 : authentification requise\n- 403 : accès interdit\n- 404 : ressource introuvable\n- 500 : erreur serveur",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **11.1 HTTP, APIs & REST**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst response = await fetch('/api/products');\nconsole.log(response.status);\n```"
          ],
          practice: [
            "Identifiez la méthode HTTP adaptée à différentes opérations.",
            "Expliquez la différence entre 401 et 403."
          ],
          quiz: [
            {
              question: "Quelle méthode HTTP est généralement utilisée pour récupérer des données ?",
              options: ["GET", "POST", "DELETE", "PATCH"],
              answer: 0,
              explanation:
                "GET est généralement utilisé pour récupérer des ressources."
            }
          ]
        },
        {
          slug: "fetch-get-json",
          title: "11.2 Fetch GET & traitement JSON",
          duration: "22 min",
          description:
            "Consommer une API distante et afficher ses données dans une application.",
          objectives: [
            "Effectuer une requête GET.",
            "Vérifier response.ok.",
            "Convertir une réponse en JSON.",
            "Afficher les données dans le DOM."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Most useful web applications communicate with servers. HTTP defines how clients and servers exchange requests and responses, while APIs expose operations and data that other software can use.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Consommer une API distante et afficher ses données dans une application.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A frontend might request a list of products, send a new order, update a task, or delete a resource. Understanding HTTP makes these operations predictable instead of mysterious.",
            "",
            "## Ce que vous allez apprendre",
            "- Effectuer une requête GET.\n- Vérifier response.ok.\n- Convertir une réponse en JSON.\n- Afficher les données dans le DOM.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Exemple\n```javascript\nasync function loadUsers() {\n  const response = await fetch(\n    'https://jsonplaceholder.typicode.com/users'\n  );\n\n  if (!response.ok) {\n    throw new Error(`HTTP ${response.status}`);\n  }\n\n  return response.json();\n}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **11.2 Fetch GET & traitement JSON**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst users = await loadUsers();\nusers.forEach(user => {\n  console.log(user.name);\n});\n```"
          ],
          practice: [
            "Consommez une API publique.",
            "Affichez les résultats dans une liste HTML.",
            "Ajoutez un état de chargement."
          ],
          quiz: [
            {
              question: "Quelle méthode convertit le corps JSON d'une Response en données JavaScript ?",
              options: [
                "response.json()",
                "JSON.parse(response)",
                "response.parse()",
                "JSON.stringify(response)"
              ],
              answer: 0,
              explanation:
                "response.json() lit et convertit le corps JSON de la réponse."
            }
          ]
        },
        {
          slug: "fetch-post-put-delete",
          title: "11.3 POST, PUT, PATCH & DELETE",
          duration: "25 min",
          description:
            "Envoyer et modifier des données via une API REST.",
          objectives: [
            "Envoyer des données avec POST.",
            "Modifier une ressource.",
            "Supprimer une ressource.",
            "Définir les headers et le body JSON."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Most useful web applications communicate with servers. HTTP defines how clients and servers exchange requests and responses, while APIs expose operations and data that other software can use.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Envoyer et modifier des données via une API REST.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A frontend might request a list of products, send a new order, update a task, or delete a resource. Understanding HTTP makes these operations predictable instead of mysterious.",
            "",
            "## Ce que vous allez apprendre",
            "- Envoyer des données avec POST.\n- Modifier une ressource.\n- Supprimer une ressource.\n- Définir les headers et le body JSON.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## POST\n```javascript\nconst response = await fetch('/api/products', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Laptop',\n    price: 1200\n  })\n});\n```\n\nLe serveur doit toujours valider les données reçues. La validation côté frontend ne suffit pas.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **11.3 POST, PUT, PATCH & DELETE**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nawait fetch('/api/tasks/10', {\n  method: 'PATCH',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({ completed: true })\n});\n```"
          ],
          practice: [
            "Créez une ressource avec POST.",
            "Modifiez-la avec PATCH.",
            "Supprimez-la avec DELETE."
          ],
          quiz: [
            {
              question: "Quel format est couramment envoyé dans body lorsqu'une API attend du JSON ?",
              options: [
                "JSON.stringify(data)",
                "JSON.object(data)",
                "String.json(data)",
                "data.toHTTP()"
              ],
              answer: 0,
              explanation:
                "JSON.stringify transforme un objet JavaScript en chaîne JSON."
            }
          ]
        }
      ]
    },

    {
      title: "Module 12: LocalStorage, JSON & Browser APIs",
      lessons: [
        {
          slug: "localstorage",
          title: "12.1 LocalStorage",
          duration: "18 min",
          description:
            "Persister des préférences et de petites données dans le navigateur.",
          objectives: [
            "Utiliser setItem et getItem.",
            "Supprimer une donnée.",
            "Comprendre les limites de localStorage."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Browsers provide APIs that let JavaScript work with capabilities beyond the DOM. Storage APIs can persist small pieces of client-side data, JSON can represent structured data, and other browser APIs expose useful platform features.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Persister des préférences et de petites données dans le navigateur.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A web application might remember a theme preference or save a small amount of local state between visits. Browser APIs make those features possible.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser setItem et getItem.\n- Supprimer une donnée.\n- Comprendre les limites de localStorage.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Stocker\n```javascript\nlocalStorage.setItem('theme', 'dark');\n```\n\n## Lire\n```javascript\nconst theme = localStorage.getItem('theme');\n```\n\nLocalStorage stocke des chaînes de caractères.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **12.1 LocalStorage**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nlocalStorage.setItem('language', 'fr');\nconst language = localStorage.getItem('language');\n```"
          ],
          practice: [
            "Sauvegardez le thème de votre application.",
            "Ajoutez un bouton permettant de changer de thème."
          ],
          quiz: [
            {
              question: "Sous quelle forme localStorage stocke-t-il ses valeurs ?",
              options: ["Uniquement des chaînes", "Uniquement des objets", "Uniquement des nombres", "Des fonctions"],
              answer: 0,
              explanation:
                "Les valeurs de localStorage sont stockées sous forme de chaînes."
            }
          ]
        },
        {
          slug: "json-serialization",
          title: "12.2 JSON.stringify & JSON.parse",
          duration: "18 min",
          description:
            "Convertir des données JavaScript en JSON et inversement.",
          objectives: [
            "Utiliser JSON.stringify.",
            "Utiliser JSON.parse.",
            "Persister des objets et tableaux."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Browsers provide APIs that let JavaScript work with capabilities beyond the DOM. Storage APIs can persist small pieces of client-side data, JSON can represent structured data, and other browser APIs expose useful platform features.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Convertir des données JavaScript en JSON et inversement.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A web application might remember a theme preference or save a small amount of local state between visits. Browser APIs make those features possible.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser JSON.stringify.\n- Utiliser JSON.parse.\n- Persister des objets et tableaux.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Objet vers JSON\n```javascript\nconst user = { name: 'Alice', age: 25 };\nconst json = JSON.stringify(user);\n```\n\n## JSON vers objet\n```javascript\nconst restoredUser = JSON.parse(json);\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **12.2 JSON.stringify & JSON.parse**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst tasks = [\n  { id: 1, title: 'Apprendre JS', done: false }\n];\n\nlocalStorage.setItem('tasks', JSON.stringify(tasks));\n\nconst savedTasks = JSON.parse(\n  localStorage.getItem('tasks') || '[]'\n);\n```"
          ],
          practice: [
            "Sauvegardez une liste d'objets dans localStorage.",
            "Rechargez les données après un refresh."
          ],
          quiz: [
            {
              question: "Quelle méthode convertit une chaîne JSON en valeur JavaScript ?",
              options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.object()"],
              answer: 0,
              explanation:
                "JSON.parse() transforme une chaîne JSON en valeur JavaScript."
            }
          ]
        },
        {
          slug: "browser-apis",
          title: "12.3 Browser APIs utiles",
          duration: "22 min",
          description:
            "Découvrir plusieurs APIs natives du navigateur utiles dans les applications web.",
          objectives: [
            "Comprendre le rôle des Browser APIs.",
            "Utiliser certaines APIs simples.",
            "Identifier les limites liées au navigateur et à la sécurité."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Browsers provide APIs that let JavaScript work with capabilities beyond the DOM. Storage APIs can persist small pieces of client-side data, JSON can represent structured data, and other browser APIs expose useful platform features.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Découvrir plusieurs APIs natives du navigateur utiles dans les applications web.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A web application might remember a theme preference or save a small amount of local state between visits. Browser APIs make those features possible.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre le rôle des Browser APIs.\n- Utiliser certaines APIs simples.\n- Identifier les limites liées au navigateur et à la sécurité.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Parmi les APIs disponibles dans le navigateur :\n- localStorage\n- sessionStorage\n- Clipboard API\n- Geolocation API\n- History API\n- URL API\n- Web Notifications dans les contextes autorisés\n\nCes APIs dépendent de l'environnement du navigateur et certaines nécessitent une permission explicite.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **12.3 Browser APIs utiles**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nawait navigator.clipboard.writeText('Texte copié');\n```"
          ],
          practice: [
            "Créez un bouton Copier.",
            "Construisez une URL avec URLSearchParams."
          ],
          quiz: [
            {
              question: "Quelle API permet notamment de manipuler l'URL courante avec une interface structurée ?",
              options: ["URL", "HTMLParserOnly", "CSSURL", "BrowserString"],
              answer: 0,
              explanation:
                "L'API URL fournit une interface structurée pour travailler avec des URLs."
            }
          ]
        }
      ]
    },

    {
      title: "Module 13: Modules ES6+ & Architecture du Code",
      lessons: [
        {
          slug: "modules-export-import",
          title: "13.1 import & export",
          duration: "20 min",
          description:
            "Découper une application en plusieurs modules JavaScript maintenables.",
          objectives: [
            "Exporter des valeurs.",
            "Importer des fonctions et classes.",
            "Comprendre les exports nommés et default."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "As a project grows, the challenge changes from simply making code work to keeping the code understandable. Modules and architecture give us boundaries so that related responsibilities stay together and dependencies remain explicit.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Découper une application en plusieurs modules JavaScript maintenables.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A real application may separate API calls, UI logic, validation, utilities, and state management into different modules. This makes individual files easier to reason about and change.",
            "",
            "## Ce que vous allez apprendre",
            "- Exporter des valeurs.\n- Importer des fonctions et classes.\n- Comprendre les exports nommés et default.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Export nommé\n```javascript\nexport const add = (a, b) => a + b;\n```\n\n## Import\n```javascript\nimport { add } from './math.js';\n```\n\n## Export default\n```javascript\nexport default class Calculator {}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **13.1 import & export**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\n// utils.js\nexport function formatPrice(value) {\n  return `${value.toFixed(2)} €`;\n}\n\n// app.js\nimport { formatPrice } from './utils.js';\n```"
          ],
          practice: [
            "Séparez une application en modules utils, ui et data.",
            "Utilisez au moins un export nommé et un export default."
          ],
          quiz: [
            {
              question: "Quelle syntaxe importe un export nommé appelé add ?",
              options: [
                "import { add } from './math.js'",
                "import add './math.js'",
                "require named add",
                "include add from math"
              ],
              answer: 0,
              explanation:
                "Les exports nommés sont importés entre accolades."
            }
          ]
        },
        {
          slug: "architecture-frontend",
          title: "13.2 Organiser un projet JavaScript",
          duration: "22 min",
          description:
            "Structurer le code afin de faciliter la maintenance et le travail en équipe.",
          objectives: [
            "Séparer les responsabilités.",
            "Créer des modules spécialisés.",
            "Éviter les fichiers monolithiques.",
            "Comprendre la séparation UI/data/logique."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "As a project grows, the challenge changes from simply making code work to keeping the code understandable. Modules and architecture give us boundaries so that related responsibilities stay together and dependencies remain explicit.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Structurer le code afin de faciliter la maintenance et le travail en équipe.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A real application may separate API calls, UI logic, validation, utilities, and state management into different modules. This makes individual files easier to reason about and change.",
            "",
            "## Ce que vous allez apprendre",
            "- Séparer les responsabilités.\n- Créer des modules spécialisés.\n- Éviter les fichiers monolithiques.\n- Comprendre la séparation UI/data/logique.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Une structure possible :\n```text\nsrc/\n  api/\n  components/\n  utils/\n  services/\n  state/\n  app.js\n```\n\nL'objectif n'est pas de suivre une structure unique, mais de rendre les responsabilités faciles à comprendre.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **13.2 Organiser un projet JavaScript**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\n// services/productService.js\nexport async function getProducts() {\n  const response = await fetch('/api/products');\n  return response.json();\n}\n```"
          ],
          practice: [
            "Refactorisez une application contenant un seul fichier de plusieurs centaines de lignes.",
            "Séparez API, UI et logique métier."
          ],
          quiz: [
            {
              question: "Pourquoi séparer le code en modules ?",
              options: [
                "Pour faciliter organisation, réutilisation et maintenance",
                "Pour rendre JavaScript obligatoire",
                "Pour supprimer les tests",
                "Pour éviter le HTML"
              ],
              answer: 0,
              explanation:
                "Les modules permettent notamment d'isoler les responsabilités et de rendre le code plus maintenable."
            }
          ]
        }
      ]
    },

    {
      title: "Module 14: Debugging & Gestion des Erreurs",
      lessons: [
        {
          slug: "types-erreurs",
          title: "14.1 Comprendre les erreurs JavaScript",
          duration: "20 min",
          description:
            "Identifier les erreurs de syntaxe, d'exécution et de logique.",
          objectives: [
            "Distinguer différents types d'erreurs.",
            "Lire un message d'erreur.",
            "Localiser une erreur à partir d'une stack trace."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Errors are normal in software. A good developer does not try to pretend errors never happen. Instead, they learn to read error messages, identify the failing operation, reproduce the problem, and fix the underlying cause.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Identifier les erreurs de syntaxe, d'exécution et de logique.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "When a user reports that checkout fails, a developer needs a repeatable debugging process rather than guessing. JavaScript errors, stack traces, breakpoints, and controlled error handling support that process.",
            "",
            "## Ce que vous allez apprendre",
            "- Distinguer différents types d'erreurs.\n- Lire un message d'erreur.\n- Localiser une erreur à partir d'une stack trace.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Trois catégories fréquentes\n- Erreurs de syntaxe : le code ne peut pas être interprété correctement.\n- Erreurs d'exécution : une opération échoue pendant l'exécution.\n- Erreurs logiques : le programme s'exécute mais produit un mauvais résultat.\n\nLe message d'erreur et la stack trace sont des informations importantes pour trouver le problème.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **14.1 Comprendre les erreurs JavaScript**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst user = null;\nconsole.log(user.name);\n```"
          ],
          practice: [
            "Corrigez cinq programmes volontairement cassés.",
            "Pour chaque erreur, identifiez son type et sa cause."
          ],
          quiz: [
            {
              question: "Une application affiche un mauvais total alors que le code s'exécute sans exception. Quel type de problème est probable ?",
              options: ["Erreur logique", "Erreur de syntaxe uniquement", "Erreur CSS", "Erreur DNS uniquement"],
              answer: 0,
              explanation:
                "Un résultat incorrect sans erreur d'exécution est souvent le signe d'une erreur logique."
            }
          ]
        },
        {
          slug: "try-catch-throw",
          title: "14.2 try, catch, finally & throw",
          duration: "20 min",
          description:
            "Gérer explicitement les erreurs dans les applications JavaScript.",
          objectives: [
            "Utiliser try/catch.",
            "Utiliser finally.",
            "Créer des erreurs avec throw.",
            "Créer des messages d'erreur utiles."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Errors are normal in software. A good developer does not try to pretend errors never happen. Instead, they learn to read error messages, identify the failing operation, reproduce the problem, and fix the underlying cause.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Gérer explicitement les erreurs dans les applications JavaScript.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "When a user reports that checkout fails, a developer needs a repeatable debugging process rather than guessing. JavaScript errors, stack traces, breakpoints, and controlled error handling support that process.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser try/catch.\n- Utiliser finally.\n- Créer des erreurs avec throw.\n- Créer des messages d'erreur utiles.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "```javascript\ntry {\n  const data = JSON.parse(input);\n  console.log(data);\n} catch (error) {\n  console.error('Données invalides:', error.message);\n} finally {\n  console.log('Opération terminée');\n}\n```\n\nUne erreur personnalisée peut être créée avec `throw` :\n```javascript\nif (!user) {\n  throw new Error('Utilisateur introuvable');\n}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **14.2 try, catch, finally & throw**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nfunction divide(a, b) {\n  if (b === 0) {\n    throw new Error('Division par zéro');\n  }\n\n  return a / b;\n}\n```"
          ],
          practice: [
            "Créez une fonction qui lance une erreur si un prix est négatif.",
            "Interceptez cette erreur avec try/catch."
          ],
          quiz: [
            {
              question: "Quel mot-clé permet de déclencher volontairement une erreur ?",
              options: ["throw", "raiseError", "error", "fail"],
              answer: 0,
              explanation:
                "Le mot-clé throw permet de déclencher une exception."
            }
          ]
        },
        {
          slug: "debugger-devtools",
          title: "14.3 Debugger, breakpoints & debugging méthodique",
          duration: "22 min",
          description:
            "Développer une méthode professionnelle pour trouver et corriger des bugs.",
          objectives: [
            "Placer un breakpoint.",
            "Inspecter les variables.",
            "Exécuter le code pas à pas.",
            "Formuler une hypothèse avant de modifier le code."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Errors are normal in software. A good developer does not try to pretend errors never happen. Instead, they learn to read error messages, identify the failing operation, reproduce the problem, and fix the underlying cause.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Développer une méthode professionnelle pour trouver et corriger des bugs.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "When a user reports that checkout fails, a developer needs a repeatable debugging process rather than guessing. JavaScript errors, stack traces, breakpoints, and controlled error handling support that process.",
            "",
            "## Ce que vous allez apprendre",
            "- Placer un breakpoint.\n- Inspecter les variables.\n- Exécuter le code pas à pas.\n- Formuler une hypothèse avant de modifier le code.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## debugger\n```javascript\nfunction calculateTotal(price, quantity) {\n  debugger;\n  return price * quantity;\n}\n```\n\nLorsque les DevTools sont ouverts, l'exécution peut être interrompue sur cette instruction.\n\nUne bonne méthode de debugging :\n1. Reproduire le problème.\n2. Lire l'erreur.\n3. Identifier l'endroit concerné.\n4. Formuler une hypothèse.\n5. Vérifier avec les outils.\n6. Corriger.\n7. Tester à nouveau.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **14.3 Debugger, breakpoints & debugging méthodique**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst total = calculateTotal(100, 0);\nconsole.log(total);\n```"
          ],
          practice: [
            "Déboguez une fonction dont le calcul est volontairement incorrect.",
            "Utilisez un breakpoint et observez les valeurs."
          ],
          quiz: [
            {
              question: "À quoi sert principalement un breakpoint ?",
              options: [
                "Interrompre temporairement l'exécution pour inspecter l'état du programme",
                "Supprimer une erreur automatiquement",
                "Optimiser CSS",
                "Créer une API"
              ],
              answer: 0,
              explanation:
                "Un breakpoint permet d'arrêter temporairement l'exécution afin d'inspecter le programme."
            }
          ]
        }
      ]
    },

    {
      title: "Module 15: Programmation Orientée Objet & Prototypes",
      lessons: [
        {
          slug: "classes-constructeurs",
          title: "15.1 Classes & constructeurs",
          duration: "22 min",
          description:
            "Créer des modèles d'objets avec la syntaxe class.",
          objectives: [
            "Créer une classe.",
            "Définir un constructeur.",
            "Créer des méthodes.",
            "Instancier une classe."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Object-oriented programming provides another way to organize related data and behavior. Classes describe how objects are created, inheritance can express relationships between types, and prototypes explain part of how JavaScript's object system actually works.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Créer des modèles d'objets avec la syntaxe class.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A system might represent different kinds of users or payments with shared behavior and specialized behavior. The important skill is understanding when the abstraction helps and how JavaScript implements it.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer une classe.\n- Définir un constructeur.\n- Créer des méthodes.\n- Instancier une classe.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "```javascript\nclass User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n\n  greet() {\n    return `Bonjour ${this.name}`;\n  }\n}\n\nconst user = new User('Alice', 'alice@example.com');\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **15.1 Classes & constructeurs**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nclass Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n\n  getPrice() {\n    return this.price;\n  }\n}\n```"
          ],
          practice: [
            "Créez une classe Product.",
            "Créez une classe User.",
            "Ajoutez au moins deux méthodes."
          ],
          quiz: [
            {
              question: "Quel mot-clé permet d'instancier une classe ?",
              options: ["new", "create", "instance", "make"],
              answer: 0,
              explanation:
                "L'opérateur new permet notamment de créer une instance d'une classe."
            }
          ]
        },
        {
          slug: "heritage-extends-super",
          title: "15.2 Héritage avec extends & super",
          duration: "20 min",
          description:
            "Réutiliser le comportement d'une classe parent avec l'héritage.",
          objectives: [
            "Créer une classe enfant.",
            "Utiliser extends.",
            "Utiliser super.",
            "Comprendre les limites de l'héritage."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Object-oriented programming provides another way to organize related data and behavior. Classes describe how objects are created, inheritance can express relationships between types, and prototypes explain part of how JavaScript's object system actually works.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Réutiliser le comportement d'une classe parent avec l'héritage.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A system might represent different kinds of users or payments with shared behavior and specialized behavior. The important skill is understanding when the abstraction helps and how JavaScript implements it.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer une classe enfant.\n- Utiliser extends.\n- Utiliser super.\n- Comprendre les limites de l'héritage.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "```javascript\nclass Admin extends User {\n  constructor(name, email) {\n    super(name, email);\n    this.role = 'admin';\n  }\n}\n```\n\nL'héritage est utile dans certains modèles, mais la composition peut souvent être préférable pour limiter les dépendances entre classes.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **15.2 Héritage avec extends & super**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nclass Vehicle {\n  move() {\n    return 'Le véhicule avance';\n  }\n}\n\nclass Car extends Vehicle {\n  honk() {\n    return 'Beep';\n  }\n}\n```"
          ],
          practice: [
            "Créez une classe Employee et une classe Manager.",
            "Ajoutez des comportements spécifiques au manager."
          ],
          quiz: [
            {
              question: "Quel mot-clé permet de définir une classe qui hérite d'une autre ?",
              options: ["extends", "inherits", "parent", "derive"],
              answer: 0,
              explanation:
                "La syntaxe class Child extends Parent permet de créer une classe héritée."
            }
          ]
        },
        {
          slug: "prototypes-this",
          title: "15.3 Prototypes & this",
          duration: "25 min",
          description:
            "Comprendre le modèle de prototypes et le fonctionnement de this.",
          objectives: [
            "Comprendre le prototype chain.",
            "Comprendre le contexte de this.",
            "Distinguer arrow functions et fonctions classiques concernant this."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Object-oriented programming provides another way to organize related data and behavior. Classes describe how objects are created, inheritance can express relationships between types, and prototypes explain part of how JavaScript's object system actually works.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre le modèle de prototypes et le fonctionnement de this.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A system might represent different kinds of users or payments with shared behavior and specialized behavior. The important skill is understanding when the abstraction helps and how JavaScript implements it.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre le prototype chain.\n- Comprendre le contexte de this.\n- Distinguer arrow functions et fonctions classiques concernant this.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "JavaScript utilise un système de prototypes pour permettre l'héritage entre objets.\n\n## this\nLa valeur de `this` dépend du contexte d'appel d'une fonction. Les fonctions fléchées n'ont pas leur propre binding de `this`.\n\n```javascript\nconst user = {\n  name: 'Alice',\n  greet() {\n    return `Bonjour ${this.name}`;\n  }\n};\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **15.3 Prototypes & this**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst user = {\n  name: 'Alice',\n  greet() {\n    console.log(this.name);\n  }\n};\n\nuser.greet();\n```"
          ],
          practice: [
            "Comparez une méthode classique et une arrow function dans un objet.",
            "Analysez la valeur de this dans plusieurs contextes."
          ],
          quiz: [
            {
              question: "Les arrow functions possèdent-elles leur propre binding de this ?",
              options: ["Oui", "Non", "Uniquement dans Node.js", "Uniquement dans le DOM"],
              answer: 1,
              explanation:
                "Les fonctions fléchées utilisent le this lexical du contexte environnant."
            }
          ]
        }
      ]
    },

    {
      title: "Module 16: JavaScript Fonctionnel & Traitement de Données",
      lessons: [
        {
          slug: "fonctions-premiere-classe",
          title: "16.1 Fonctions de première classe",
          duration: "18 min",
          description:
            "Comprendre comment les fonctions peuvent être manipulées comme des valeurs.",
          objectives: [
            "Stocker une fonction dans une variable.",
            "Passer une fonction comme argument.",
            "Retourner une fonction."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Functional programming focuses on composing operations over values. Functions can be treated as data, transformations can produce new values, and code can avoid unnecessary mutation. These ideas are especially useful when processing collections and application state.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre comment les fonctions peuvent être manipulées comme des valeurs.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A data pipeline might take raw API records, transform them, filter invalid entries, and produce a final view model. Each step can be represented as a small transformation.",
            "",
            "## Ce que vous allez apprendre",
            "- Stocker une fonction dans une variable.\n- Passer une fonction comme argument.\n- Retourner une fonction.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "En JavaScript, les fonctions sont des valeurs.\n\n```javascript\nconst greet = name => `Bonjour ${name}`;\n\nfunction execute(fn, value) {\n  return fn(value);\n}\n\nconsole.log(execute(greet, 'Alice'));\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **16.1 Fonctions de première classe**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst double = number => number * 2;\nconst result = [1, 2, 3].map(double);\n```"
          ],
          practice: [
            "Créez une fonction qui reçoit une autre fonction.",
            "Créez une fonction factory qui retourne une fonction."
          ],
          quiz: [
            {
              question: "Une fonction JavaScript peut-elle être passée comme argument ?",
              options: ["Oui", "Non", "Uniquement en TypeScript", "Uniquement avec Node.js"],
              answer: 0,
              explanation:
                "Les fonctions JavaScript sont des valeurs de première classe et peuvent être passées comme arguments."
            }
          ]
        },
        {
          slug: "immutabilite-composition",
          title: "16.2 Immutabilité & composition",
          duration: "22 min",
          description:
            "Écrire une logique de transformation de données prévisible et facile à tester.",
          objectives: [
            "Comprendre l'idée d'immutabilité.",
            "Éviter certaines mutations accidentelles.",
            "Composer plusieurs transformations."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Functional programming focuses on composing operations over values. Functions can be treated as data, transformations can produce new values, and code can avoid unnecessary mutation. These ideas are especially useful when processing collections and application state.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Écrire une logique de transformation de données prévisible et facile à tester.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A data pipeline might take raw API records, transform them, filter invalid entries, and produce a final view model. Each step can be represented as a small transformation.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre l'idée d'immutabilité.\n- Éviter certaines mutations accidentelles.\n- Composer plusieurs transformations.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Au lieu de modifier directement une donnée partagée, on peut créer une nouvelle valeur.\n\n```javascript\nconst user = {\n  name: 'Alice',\n  role: 'user'\n};\n\nconst admin = {\n  ...user,\n  role: 'admin'\n};\n```\n\nCette approche est particulièrement utile dans les applications qui manipulent beaucoup d'état.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **16.2 Immutabilité & composition**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst updatedTasks = tasks.map(task =>\n  task.id === 1\n    ? { ...task, completed: true }\n    : task\n);\n```"
          ],
          practice: [
            "Modifiez une liste de tâches sans muter le tableau original.",
            "Créez une fonction pure de transformation."
          ],
          quiz: [
            {
              question: "Quelle approche permet de créer une version modifiée d'un objet sans réassigner ses propriétés originales ?",
              options: [
                "Utiliser le spread pour créer un nouvel objet",
                "Modifier toujours l'objet original",
                "Utiliser delete sur chaque propriété",
                "Convertir l'objet en CSS"
              ],
              answer: 0,
              explanation:
                "Le spread permet notamment de créer un nouvel objet en reprenant les propriétés existantes."
            }
          ]
        }
      ]
    },

    {
      title: "Module 17: Git, GitHub & Workflow Professionnel",
      lessons: [
        {
          slug: "git-fondamentaux",
          title: "17.1 Git : versionner son code",
          duration: "22 min",
          description:
            "Apprendre les commandes essentielles de Git pour travailler professionnellement.",
          objectives: [
            "Initialiser un repository.",
            "Créer des commits.",
            "Consulter l'historique.",
            "Comprendre le rôle du versionnement."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Software development is collaborative. Git records changes to a project, branches isolate work, and GitHub provides a place to share repositories and review changes. These tools solve coordination problems, not just code-storage problems.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Apprendre les commandes essentielles de Git pour travailler professionnellement.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "On a team, one developer can work on a feature while another fixes a bug. Version control lets both changes be tracked, reviewed, merged, or reverted safely.",
            "",
            "## Ce que vous allez apprendre",
            "- Initialiser un repository.\n- Créer des commits.\n- Consulter l'historique.\n- Comprendre le rôle du versionnement.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Commandes essentielles\n```bash\ngit init\ngit status\ngit add .\ngit commit -m \"Initial commit\"\ngit log\n```\n\nGit permet de conserver l'historique des modifications et de revenir à des versions précédentes.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **17.1 Git : versionner son code**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```bash\ngit add src/app.js\ngit commit -m \"Add task creation\"\n```"
          ],
          practice: [
            "Initialisez Git dans un projet.",
            "Créez plusieurs commits avec des messages explicites.",
            "Consultez l'historique."
          ],
          quiz: [
            {
              question: "Quelle commande crée généralement un nouveau commit ?",
              options: ["git commit", "git save", "git snapshot", "git version"],
              answer: 0,
              explanation:
                "git commit enregistre un nouvel état dans l'historique Git."
            }
          ]
        },
        {
          slug: "github-branches-pull-request",
          title: "17.2 GitHub, branches & Pull Requests",
          duration: "25 min",
          description:
            "Découvrir le workflow collaboratif utilisé dans de nombreux projets professionnels.",
          objectives: [
            "Créer une branche.",
            "Pousser du code vers GitHub.",
            "Comprendre une Pull Request.",
            "Comprendre les conflits de fusion."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Software development is collaborative. Git records changes to a project, branches isolate work, and GitHub provides a place to share repositories and review changes. These tools solve coordination problems, not just code-storage problems.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Découvrir le workflow collaboratif utilisé dans de nombreux projets professionnels.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "On a team, one developer can work on a feature while another fixes a bug. Version control lets both changes be tracked, reviewed, merged, or reverted safely.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer une branche.\n- Pousser du code vers GitHub.\n- Comprendre une Pull Request.\n- Comprendre les conflits de fusion.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Branche\n```bash\ngit switch -c feature/search\n```\n\nUne branche permet de travailler sur une fonctionnalité sans modifier directement la branche principale.\n\nUne Pull Request permet ensuite de proposer les changements pour revue et intégration.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **17.2 GitHub, branches & Pull Requests**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```bash\ngit add .\ngit commit -m \"Add product search\"\ngit push -u origin feature/search\n```"
          ],
          practice: [
            "Créez une branche feature.",
            "Ajoutez une fonctionnalité.",
            "Créez une Pull Request sur GitHub."
          ],
          quiz: [
            {
              question: "Pourquoi utilise-t-on généralement une branche feature ?",
              options: [
                "Pour isoler le développement d'une fonctionnalité",
                "Pour supprimer Git",
                "Pour stocker des images uniquement",
                "Pour remplacer npm"
              ],
              answer: 0,
              explanation:
                "Une branche permet notamment d'isoler le travail sur une fonctionnalité."
            }
          ]
        }
      ]
    },

    {
      title: "Module 18: Node.js & npm",
      lessons: [
        {
          slug: "nodejs-introduction",
          title: "18.1 Introduction à Node.js",
          duration: "20 min",
          description:
            "Exécuter JavaScript côté serveur et découvrir l'écosystème Node.js.",
          objectives: [
            "Expliquer ce qu'est Node.js.",
            "Exécuter JavaScript sans navigateur.",
            "Comprendre npm.",
            "Créer un projet Node.js."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "JavaScript is not limited to the browser. Node.js provides a runtime that lets JavaScript programs interact with the operating system, files, processes, networks, and servers.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Exécuter JavaScript côté serveur et découvrir l'écosystème Node.js.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A backend service can receive HTTP requests, read configuration, access files or databases, and return responses, all using JavaScript running in Node.js.",
            "",
            "## Ce que vous allez apprendre",
            "- Expliquer ce qu'est Node.js.\n- Exécuter JavaScript sans navigateur.\n- Comprendre npm.\n- Créer un projet Node.js.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Node.js permet d'exécuter JavaScript en dehors du navigateur.\n\nInitialisez un projet :\n```bash\nnpm init -y\n```\n\nPuis exécutez un fichier :\n```bash\nnode app.js\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **18.1 Introduction à Node.js**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconsole.log('Serveur Node.js');\n```"
          ],
          practice: [
            "Créez un projet Node.js.",
            "Ajoutez un script npm.",
            "Exécutez votre programme depuis le terminal."
          ],
          quiz: [
            {
              question: "Quel outil permet notamment de gérer les packages Node.js ?",
              options: ["npm", "DOM", "CSSOM", "DevTools uniquement"],
              answer: 0,
              explanation:
                "npm est le gestionnaire de packages couramment utilisé dans l'écosystème Node.js."
            }
          ]
        },
        {
          slug: "npm-packages",
          title: "18.2 npm, package.json & dépendances",
          duration: "22 min",
          description:
            "Installer et gérer les dépendances d'un projet JavaScript.",
          objectives: [
            "Comprendre package.json.",
            "Installer une dépendance.",
            "Distinguer dependencies et devDependencies.",
            "Utiliser npm scripts."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "JavaScript is not limited to the browser. Node.js provides a runtime that lets JavaScript programs interact with the operating system, files, processes, networks, and servers.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Installer et gérer les dépendances d'un projet JavaScript.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A backend service can receive HTTP requests, read configuration, access files or databases, and return responses, all using JavaScript running in Node.js.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre package.json.\n- Installer une dépendance.\n- Distinguer dependencies et devDependencies.\n- Utiliser npm scripts.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Installer un package\n```bash\nnpm install express\n```\n\nPour une dépendance de développement :\n```bash\nnpm install -D vitest\n```\n\nLes scripts peuvent être définis dans package.json.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **18.2 npm, package.json & dépendances**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```json\n{\n  \"scripts\": {\n    \"start\": \"node src/server.js\",\n    \"test\": \"vitest\"\n  }\n}\n```"
          ],
          practice: [
            "Initialisez un package.json.",
            "Installez une dépendance.",
            "Créez un script npm personnalisé."
          ],
          quiz: [
            {
              question: "Quel fichier contient notamment les informations principales d'un projet npm ?",
              options: ["package.json", "project.js", "npm.config.html", "node.index"],
              answer: 0,
              explanation:
                "package.json décrit notamment le projet, ses scripts et ses dépendances."
            }
          ]
        },
        {
          slug: "node-file-system",
          title: "18.3 Modules Node.js & système de fichiers",
          duration: "25 min",
          description:
            "Utiliser les modules Node.js et manipuler des fichiers de manière contrôlée.",
          objectives: [
            "Importer des modules Node.",
            "Utiliser fs.",
            "Comprendre les opérations asynchrones de fichiers.",
            "Manipuler les chemins avec path."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "JavaScript is not limited to the browser. Node.js provides a runtime that lets JavaScript programs interact with the operating system, files, processes, networks, and servers.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Utiliser les modules Node.js et manipuler des fichiers de manière contrôlée.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A backend service can receive HTTP requests, read configuration, access files or databases, and return responses, all using JavaScript running in Node.js.",
            "",
            "## Ce que vous allez apprendre",
            "- Importer des modules Node.\n- Utiliser fs.\n- Comprendre les opérations asynchrones de fichiers.\n- Manipuler les chemins avec path.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Node.js fournit des modules natifs comme `fs` et `path`.\n\n```javascript\nimport { readFile } from 'node:fs/promises';\n\nconst content = await readFile('./data.txt', 'utf8');\nconsole.log(content);\n```\n\nIl est important de gérer les erreurs lors des opérations sur les fichiers.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **18.3 Modules Node.js & système de fichiers**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nimport path from 'node:path';\n\nconst filePath = path.join('data', 'users.json');\nconsole.log(filePath);\n```"
          ],
          practice: [
            "Lisez un fichier JSON.",
            "Transformez son contenu en objet.",
            "Écrivez un rapport dans un nouveau fichier."
          ],
          quiz: [
            {
              question: "Quel module Node.js est utilisé pour les opérations sur le système de fichiers ?",
              options: ["fs", "dom", "browser-fs", "htmlfs"],
              answer: 0,
              explanation:
                "Le module natif fs fournit des APIs pour travailler avec le système de fichiers."
            }
          ]
        }
      ]
    },

    {
      title: "Module 19: Express.js & APIs REST",
      lessons: [
        {
          slug: "express-server",
          title: "19.1 Créer un serveur Express",
          duration: "22 min",
          description:
            "Construire un serveur HTTP moderne avec Express.",
          objectives: [
            "Installer Express.",
            "Créer un serveur.",
            "Définir une route.",
            "Retourner du JSON."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "An API server provides a controlled interface between clients and application data. Express helps organize that server into routes and middleware so that requests can be validated, processed, and answered consistently.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Construire un serveur HTTP moderne avec Express.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A frontend can call endpoints such as products, users, or orders without needing to know how the server stores or processes the underlying data.",
            "",
            "## Ce que vous allez apprendre",
            "- Installer Express.\n- Créer un serveur.\n- Définir une route.\n- Retourner du JSON.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "```javascript\nimport express from 'express';\n\nconst app = express();\n\napp.get('/api/health', (req, res) => {\n  res.json({ status: 'ok' });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **19.1 Créer un serveur Express**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\napp.get('/api/users', (req, res) => {\n  res.json([]);\n});\n```"
          ],
          practice: [
            "Créez un serveur Express.",
            "Ajoutez une route /api/health.",
            "Ajoutez une route /api/products."
          ],
          quiz: [
            {
              question: "Quel framework Node.js est utilisé dans cet exemple pour construire une API HTTP ?",
              options: ["Express", "React", "Vite uniquement", "Jest"],
              answer: 0,
              explanation:
                "Express est un framework couramment utilisé pour créer des serveurs et APIs Node.js."
            }
          ]
        },
        {
          slug: "express-routing-middleware",
          title: "19.2 Routing & middleware",
          duration: "25 min",
          description:
            "Organiser les routes et comprendre le système de middleware d'Express.",
          objectives: [
            "Créer plusieurs routes.",
            "Utiliser des paramètres.",
            "Comprendre req et res.",
            "Créer un middleware."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "An API server provides a controlled interface between clients and application data. Express helps organize that server into routes and middleware so that requests can be validated, processed, and answered consistently.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Organiser les routes et comprendre le système de middleware d'Express.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A frontend can call endpoints such as products, users, or orders without needing to know how the server stores or processes the underlying data.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer plusieurs routes.\n- Utiliser des paramètres.\n- Comprendre req et res.\n- Créer un middleware.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Paramètre\n```javascript\napp.get('/api/users/:id', (req, res) => {\n  const { id } = req.params;\n  res.json({ id });\n});\n```\n\n## Middleware\n```javascript\napp.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **19.2 Routing & middleware**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\napp.use(express.json());\n```"
          ],
          practice: [
            "Créez des routes CRUD.",
            "Ajoutez un middleware de logging.",
            "Ajoutez un middleware de validation simple."
          ],
          quiz: [
            {
              question: "Quel est le rôle de next() dans un middleware Express classique ?",
              options: [
                "Passer au middleware ou handler suivant",
                "Arrêter Node.js",
                "Créer une base de données",
                "Redémarrer le serveur"
              ],
              answer: 0,
              explanation:
                "next() permet généralement de poursuivre la chaîne middleware."
            }
          ]
        },
        {
          slug: "rest-api-architecture",
          title: "19.3 Architecture d'une API REST",
          duration: "25 min",
          description:
            "Structurer une API Express maintenable avec controllers, services et routes.",
          objectives: [
            "Séparer les responsabilités.",
            "Créer des controllers.",
            "Créer des services.",
            "Construire des endpoints REST cohérents."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "An API server provides a controlled interface between clients and application data. Express helps organize that server into routes and middleware so that requests can be validated, processed, and answered consistently.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Structurer une API Express maintenable avec controllers, services et routes.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A frontend can call endpoints such as products, users, or orders without needing to know how the server stores or processes the underlying data.",
            "",
            "## Ce que vous allez apprendre",
            "- Séparer les responsabilités.\n- Créer des controllers.\n- Créer des services.\n- Construire des endpoints REST cohérents.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Une architecture possible :\n```text\nsrc/\n  routes/\n  controllers/\n  services/\n  middleware/\n  database/\n  app.js\n  server.js\n```\n\nLes routes définissent les endpoints, les controllers gèrent les requêtes et les services contiennent la logique métier.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **19.3 Architecture d'une API REST**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nexport async function getProducts(req, res, next) {\n  try {\n    const products = await productService.findAll();\n    res.json(products);\n  } catch (error) {\n    next(error);\n  }\n}\n```"
          ],
          practice: [
            "Construisez une API CRUD complète pour des tâches.",
            "Séparez routes, controllers et services."
          ],
          quiz: [
            {
              question: "Pourquoi séparer les controllers et services ?",
              options: [
                "Pour séparer la gestion HTTP de la logique métier",
                "Pour supprimer les APIs",
                "Pour éviter JavaScript",
                "Pour rendre les routes CSS"
              ],
              answer: 0,
              explanation:
                "Cette séparation facilite notamment la maintenance et les tests."
            }
          ]
        }
      ]
    },

    {
      title: "Module 20: Bases de Données & Persistance",
      lessons: [
        {
          slug: "database-fondamentaux",
          title: "20.1 Comprendre les bases de données",
          duration: "20 min",
          description:
            "Comprendre pourquoi une application a besoin d'une base de données et découvrir les concepts fondamentaux.",
          objectives: [
            "Comprendre la persistance des données.",
            "Distinguer données en mémoire et données persistantes.",
            "Comprendre tables, lignes et colonnes.",
            "Découvrir SQL."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Applications need persistent data. Variables disappear when a process ends, but a database is designed to store information so it can be queried and changed over time.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre pourquoi une application a besoin d'une base de données et découvrir les concepts fondamentaux.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An e-commerce application needs products and orders to remain available after the server restarts. Database operations provide the persistence needed for that requirement.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre la persistance des données.\n- Distinguer données en mémoire et données persistantes.\n- Comprendre tables, lignes et colonnes.\n- Découvrir SQL.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Une application réelle doit généralement conserver les données après le redémarrage du serveur.\n\nUne base relationnelle organise les données en tables.\n\nExemple :\n```text\nusers\nproducts\norders\norder_items\n```\n\nChaque table peut posséder une clé primaire et des relations avec d'autres tables.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **20.1 Comprendre les bases de données**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```sql\nSELECT id, name, email\nFROM users;\n```"
          ],
          practice: [
            "Dessinez le modèle de données d'une boutique.",
            "Identifiez les relations entre utilisateurs, produits et commandes."
          ],
          quiz: [
            {
              question: "Quel est le rôle principal d'une base de données dans une application ?",
              options: [
                "Persister et organiser les données",
                "Remplacer HTML",
                "Créer uniquement des animations",
                "Compiler CSS"
              ],
              answer: 0,
              explanation:
                "Une base de données permet notamment de stocker et organiser durablement les données d'une application."
            }
          ]
        },
        {
          slug: "sql-crud",
          title: "20.2 SQL & opérations CRUD",
          duration: "25 min",
          description:
            "Apprendre les opérations SQL nécessaires aux applications web.",
          objectives: [
            "Utiliser SELECT.",
            "Utiliser INSERT.",
            "Utiliser UPDATE.",
            "Utiliser DELETE.",
            "Comprendre WHERE."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Applications need persistent data. Variables disappear when a process ends, but a database is designed to store information so it can be queried and changed over time.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Apprendre les opérations SQL nécessaires aux applications web.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An e-commerce application needs products and orders to remain available after the server restarts. Database operations provide the persistence needed for that requirement.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser SELECT.\n- Utiliser INSERT.\n- Utiliser UPDATE.\n- Utiliser DELETE.\n- Comprendre WHERE.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## SELECT\n```sql\nSELECT * FROM products;\n```\n\n## INSERT\n```sql\nINSERT INTO products (name, price)\nVALUES ('Laptop', 1200);\n```\n\n## UPDATE\n```sql\nUPDATE products\nSET price = 1100\nWHERE id = 1;\n```\n\n## DELETE\n```sql\nDELETE FROM products\nWHERE id = 1;\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **20.2 SQL & opérations CRUD**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```sql\nSELECT *\nFROM products\nWHERE price < 100;\n```"
          ],
          practice: [
            "Créez une table products.",
            "Ajoutez cinq produits.",
            "Modifiez un produit.",
            "Supprimez un produit."
          ],
          quiz: [
            {
              question: "Quelle commande SQL récupère des données ?",
              options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
              answer: 0,
              explanation:
                "SELECT permet de récupérer des données."
            }
          ]
        },
        {
          slug: "node-database",
          title: "20.3 Connecter Node.js à une base de données",
          duration: "25 min",
          description:
            "Connecter une API Node.js à une base de données et gérer les opérations de persistance.",
          objectives: [
            "Configurer une connexion.",
            "Exécuter des requêtes depuis Node.js.",
            "Gérer les erreurs de base de données.",
            "Éviter les requêtes SQL construites dangereusement."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Applications need persistent data. Variables disappear when a process ends, but a database is designed to store information so it can be queried and changed over time.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Connecter une API Node.js à une base de données et gérer les opérations de persistance.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "An e-commerce application needs products and orders to remain available after the server restarts. Database operations provide the persistence needed for that requirement.",
            "",
            "## Ce que vous allez apprendre",
            "- Configurer une connexion.\n- Exécuter des requêtes depuis Node.js.\n- Gérer les erreurs de base de données.\n- Éviter les requêtes SQL construites dangereusement.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Une API backend joue le rôle d'intermédiaire entre le client et la base de données.\n\n```text\nFrontend\n   ↓\nAPI Express\n   ↓\nService\n   ↓\nDatabase\n```\n\nLes valeurs fournies par l'utilisateur doivent être transmises avec des paramètres liés lorsque le driver utilisé le permet, afin de réduire les risques d'injection SQL.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **20.3 Connecter Node.js à une base de données**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst result = await db.query(\n  'SELECT * FROM products WHERE id = $1',\n  [productId]\n);\n```"
          ],
          practice: [
            "Connectez votre API à une base de données.",
            "Implémentez le CRUD des produits.",
            "Gérez les erreurs de connexion."
          ],
          quiz: [
            {
              question: "Pourquoi utiliser des requêtes paramétrées ?",
              options: [
                "Réduire notamment le risque d'injection SQL",
                "Accélérer systématiquement toutes les requêtes",
                "Remplacer les mots de passe",
                "Supprimer la base de données"
              ],
              answer: 0,
              explanation:
                "Les requêtes paramétrées permettent notamment de séparer les valeurs utilisateur de la structure SQL."
            }
          ]
        }
      ]
    },

    {
      title: "Module 21: Authentification, Autorisation & Sécurité",
      lessons: [
        {
          slug: "authentication-authorization",
          title: "21.1 Authentification vs autorisation",
          duration: "20 min",
          description:
            "Comprendre comment les applications identifient les utilisateurs et contrôlent leurs permissions.",
          objectives: [
            "Distinguer authentification et autorisation.",
            "Comprendre les sessions.",
            "Comprendre les tokens.",
            "Comprendre les rôles et permissions."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Security starts with understanding what the application is trying to protect. Authentication answers who a user is, authorization determines what that user may do, and secure handling of credentials and input reduces opportunities for attacks.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre comment les applications identifient les utilisateurs et contrôlent leurs permissions.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A banking application should identify a customer, restrict sensitive operations to authorized users, store passwords safely, and treat all incoming data as untrusted until validated.",
            "",
            "## Ce que vous allez apprendre",
            "- Distinguer authentification et autorisation.\n- Comprendre les sessions.\n- Comprendre les tokens.\n- Comprendre les rôles et permissions.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "**Authentification** : déterminer qui est l'utilisateur.\n\n**Autorisation** : déterminer ce que cet utilisateur peut faire.\n\nExemple :\n```text\nUtilisateur connecté → authentification\nAccès à /admin      → autorisation\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **21.1 Authentification vs autorisation**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nif (!user) {\n  return res.status(401).json({ message: 'Authentication required' });\n}\n\nif (user.role !== 'admin') {\n  return res.status(403).json({ message: 'Forbidden' });\n}\n```"
          ],
          practice: [
            "Définissez les permissions pour user et admin.",
            "Créez une route publique et une route protégée."
          ],
          quiz: [
            {
              question: "Que signifie authentification ?",
              options: [
                "Vérifier l'identité d'un utilisateur",
                "Déterminer son rôle uniquement",
                "Créer une table SQL",
                "Chiffrer une image"
              ],
              answer: 0,
              explanation:
                "L'authentification consiste à vérifier l'identité d'une personne ou d'un système."
            }
          ]
        },
        {
          slug: "password-security",
          title: "21.2 Mots de passe & sécurité des comptes",
          duration: "22 min",
          description:
            "Comprendre les bonnes pratiques pour protéger les comptes utilisateurs.",
          objectives: [
            "Comprendre pourquoi les mots de passe ne doivent jamais être stockés en clair.",
            "Comprendre le hashing.",
            "Comprendre les contraintes de sécurité des mots de passe.",
            "Identifier les erreurs courantes."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Security starts with understanding what the application is trying to protect. Authentication answers who a user is, authorization determines what that user may do, and secure handling of credentials and input reduces opportunities for attacks.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre les bonnes pratiques pour protéger les comptes utilisateurs.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A banking application should identify a customer, restrict sensitive operations to authorized users, store passwords safely, and treat all incoming data as untrusted until validated.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre pourquoi les mots de passe ne doivent jamais être stockés en clair.\n- Comprendre le hashing.\n- Comprendre les contraintes de sécurité des mots de passe.\n- Identifier les erreurs courantes.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Un serveur ne doit pas stocker les mots de passe en clair.\n\nLes mots de passe sont généralement traités avec un algorithme de hashing adapté aux mots de passe, accompagné d'un salt.\n\nLe système doit également limiter les tentatives abusives et éviter d'exposer des informations sensibles dans les messages d'erreur.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **21.2 Mots de passe & sécurité des comptes**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\n// Exemple conceptuel\nconst passwordHash = await hashPassword(password);\nconst valid = await verifyPassword(password, passwordHash);\n```"
          ],
          practice: [
            "Identifiez les failles d'un formulaire de login volontairement vulnérable.",
            "Expliquez pourquoi un mot de passe ne doit jamais être enregistré tel quel."
          ],
          quiz: [
            {
              question: "Comment un serveur doit-il généralement conserver un mot de passe utilisateur ?",
              options: [
                "En clair",
                "Sous forme de hash adapté aux mots de passe",
                "Dans le HTML",
                "Dans localStorage côté client uniquement"
              ],
              answer: 1,
              explanation:
                "Les mots de passe doivent être protégés par un mécanisme de hashing adapté plutôt que stockés en clair."
            }
          ]
        },
        {
          slug: "web-security",
          title: "21.3 XSS, CSRF, CORS & validation",
          duration: "28 min",
          description:
            "Découvrir les principales menaces web auxquelles un développeur JavaScript doit penser.",
          objectives: [
            "Comprendre XSS.",
            "Comprendre CSRF.",
            "Comprendre CORS.",
            "Valider les données côté serveur.",
            "Éviter les secrets dans le frontend."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Security starts with understanding what the application is trying to protect. Authentication answers who a user is, authorization determines what that user may do, and secure handling of credentials and input reduces opportunities for attacks.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Découvrir les principales menaces web auxquelles un développeur JavaScript doit penser.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A banking application should identify a customer, restrict sensitive operations to authorized users, store passwords safely, and treat all incoming data as untrusted until validated.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre XSS.\n- Comprendre CSRF.\n- Comprendre CORS.\n- Valider les données côté serveur.\n- Éviter les secrets dans le frontend.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## XSS\nUne attaque XSS peut se produire lorsqu'une application insère du contenu non fiable dans une page de manière dangereuse.\n\nPréférez notamment `textContent` lorsque vous n'avez pas besoin d'interpréter du HTML.\n\n## Validation\nToute donnée envoyée par le client doit être considérée comme non fiable et validée côté serveur.\n\n## Secrets\nLes clés privées, mots de passe de base de données et autres secrets ne doivent pas être intégrés dans le bundle frontend.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **21.3 XSS, CSRF, CORS & validation**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\n// Préférable pour du texte utilisateur\nmessage.textContent = userInput;\n```"
          ],
          practice: [
            "Identifiez une insertion HTML dangereuse.",
            "Remplacez-la par une approche plus sûre.",
            "Listez les données qui doivent être validées côté serveur."
          ],
          quiz: [
            {
              question: "Où doit être effectuée la validation de sécurité des données reçues par une API ?",
              options: [
                "Uniquement dans le navigateur",
                "Au minimum côté serveur, même si le frontend valide également",
                "Uniquement dans CSS",
                "Uniquement dans Git"
              ],
              answer: 1,
              explanation:
                "Le client ne peut pas être considéré comme une source de confiance. Le serveur doit valider les données."
            }
          ]
        }
      ]
    },

    {
      title: "Module 22: Tests JavaScript",
      lessons: [
        {
          slug: "testing-fondamentaux",
          title: "22.1 Pourquoi tester son code ?",
          duration: "18 min",
          description:
            "Comprendre le rôle des tests dans un projet professionnel.",
          objectives: [
            "Comprendre les tests automatisés.",
            "Distinguer tests unitaires et intégration.",
            "Écrire des scénarios testables."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Tests give developers a repeatable way to check that software behaves as intended. Instead of manually clicking through the application every time a change is made, automated tests can verify important behavior quickly and consistently.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre le rôle des tests dans un projet professionnel.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A checkout calculation can be tested with known inputs and expected totals. API tests can verify responses, while end-to-end tests can verify an important user journey.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre les tests automatisés.\n- Distinguer tests unitaires et intégration.\n- Écrire des scénarios testables.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Les tests automatisés permettent de vérifier le comportement attendu d'un programme et de réduire les régressions.\n\nUn test peut vérifier :\n- une fonction\n- un service\n- une route API\n- un parcours utilisateur",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **22.1 Pourquoi tester son code ?**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nexpect(calculateTotal(10, 2)).toBe(20);\n```"
          ],
          practice: [
            "Listez les cas normaux et limites d'une fonction de calcul.",
            "Écrivez les résultats attendus avant le code."
          ],
          quiz: [
            {
              question: "Quel est l'un des objectifs principaux des tests automatisés ?",
              options: [
                "Détecter les régressions et vérifier le comportement attendu",
                "Remplacer Git",
                "Remplacer le navigateur",
                "Supprimer tous les bugs définitivement"
              ],
              answer: 0,
              explanation:
                "Les tests automatisés permettent notamment de vérifier le comportement attendu et de détecter certaines régressions."
            }
          ]
        },
        {
          slug: "unit-tests-vitest",
          title: "22.2 Tests unitaires avec Vitest",
          duration: "22 min",
          description:
            "Écrire des tests unitaires pour les fonctions JavaScript.",
          objectives: [
            "Créer un test.",
            "Utiliser des assertions.",
            "Tester plusieurs scénarios.",
            "Identifier un cas limite."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Tests give developers a repeatable way to check that software behaves as intended. Instead of manually clicking through the application every time a change is made, automated tests can verify important behavior quickly and consistently.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Écrire des tests unitaires pour les fonctions JavaScript.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A checkout calculation can be tested with known inputs and expected totals. API tests can verify responses, while end-to-end tests can verify an important user journey.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer un test.\n- Utiliser des assertions.\n- Tester plusieurs scénarios.\n- Identifier un cas limite.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Exemple :\n```javascript\nimport { describe, it, expect } from 'vitest';\n\nfunction add(a, b) {\n  return a + b;\n}\n\ndescribe('add', () => {\n  it('additionne deux nombres', () => {\n    expect(add(2, 3)).toBe(5);\n  });\n});\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **22.2 Tests unitaires avec Vitest**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nit('gère zéro', () => {\n  expect(add(0, 5)).toBe(5);\n});\n```"
          ],
          practice: [
            "Testez une fonction de calcul de panier.",
            "Ajoutez des tests pour les valeurs limites."
          ],
          quiz: [
            {
              question: "Que vérifie généralement une assertion dans un test ?",
              options: [
                "Qu'un résultat correspond à une attente",
                "Qu'un fichier CSS existe",
                "Qu'un ordinateur est connecté à Internet",
                "Qu'un navigateur est fermé"
              ],
              answer: 0,
              explanation:
                "Une assertion compare généralement le résultat obtenu à une valeur attendue."
            }
          ]
        },
        {
          slug: "api-e2e-tests",
          title: "22.3 Tests API & tests end-to-end",
          duration: "25 min",
          description:
            "Tester une application au-delà des fonctions isolées.",
          objectives: [
            "Comprendre les tests d'intégration.",
            "Tester des endpoints API.",
            "Comprendre les tests end-to-end.",
            "Construire une stratégie de tests."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Tests give developers a repeatable way to check that software behaves as intended. Instead of manually clicking through the application every time a change is made, automated tests can verify important behavior quickly and consistently.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Tester une application au-delà des fonctions isolées.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A checkout calculation can be tested with known inputs and expected totals. API tests can verify responses, while end-to-end tests can verify an important user journey.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre les tests d'intégration.\n- Tester des endpoints API.\n- Comprendre les tests end-to-end.\n- Construire une stratégie de tests.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Les tests d'intégration vérifient plusieurs composants ensemble.\n\nLes tests end-to-end simulent généralement le parcours d'un utilisateur réel :\n```text\nConnexion\n  ↓\nRecherche produit\n  ↓\nAjout au panier\n  ↓\nCheckout\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **22.3 Tests API & tests end-to-end**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconst response = await request(app)\n  .get('/api/products');\n\nexpect(response.status).toBe(200);\n```"
          ],
          practice: [
            "Testez GET /products.",
            "Testez la création d'une ressource.",
            "Ajoutez un scénario d'utilisateur complet."
          ],
          quiz: [
            {
              question: "Que simule principalement un test end-to-end ?",
              options: [
                "Un parcours utilisateur complet ou proche du réel",
                "Une seule addition",
                "Une règle CSS",
                "Une requête SQL uniquement"
              ],
              answer: 0,
              explanation:
                "Les tests end-to-end vérifient le comportement de l'application à travers un parcours complet."
            }
          ]
        }
      ]
    },

    {
      title: "Module 23: React & Interfaces Modernes",
      lessons: [
        {
          slug: "react-introduction",
          title: "23.1 Pourquoi utiliser un framework frontend ?",
          duration: "20 min",
          description:
            "Comprendre les problèmes auxquels les frameworks frontend répondent et découvrir React.",
          objectives: [
            "Comprendre le rôle d'une bibliothèque frontend.",
            "Comprendre les composants.",
            "Comprendre JSX.",
            "Créer une première interface React."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A frontend framework helps organize complex interfaces into reusable pieces and predictable state changes. React is built around components, props, state, and rendering based on data.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre les problèmes auxquels les frameworks frontend répondent et découvrir React.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A dashboard can be broken into components for navigation, charts, cards, and tables. Each component can receive data and respond to state or user events.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre le rôle d'une bibliothèque frontend.\n- Comprendre les composants.\n- Comprendre JSX.\n- Créer une première interface React.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Lorsque les interfaces deviennent importantes, gérer manuellement tout le DOM peut devenir difficile.\n\nReact permet notamment de construire des interfaces à partir de composants réutilisables.\n\n```jsx\nfunction Welcome() {\n  return <h1>Bienvenue</h1>;\n}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **23.1 Pourquoi utiliser un framework frontend ?**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```jsx\nfunction ProductCard({ product }) {\n  return (\n    <article>\n      <h2>{product.name}</h2>\n      <p>{product.price} €</p>\n    </article>\n  );\n}\n```"
          ],
          practice: [
            "Créez un composant Card.",
            "Créez une liste de produits.",
            "Passez des données avec props."
          ],
          quiz: [
            {
              question: "Quel est l'un des concepts centraux de React ?",
              options: ["Les composants", "Les tables SQL uniquement", "Les fichiers CSS uniquement", "Les sockets uniquement"],
              answer: 0,
              explanation:
                "React construit les interfaces autour de composants réutilisables."
            }
          ]
        },
        {
          slug: "react-state-events",
          title: "23.2 Props, state & événements React",
          duration: "25 min",
          description:
            "Créer des interfaces interactives avec les props, state et événements.",
          objectives: [
            "Utiliser les props.",
            "Gérer un état local.",
            "Réagir aux événements.",
            "Afficher des données conditionnellement."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A frontend framework helps organize complex interfaces into reusable pieces and predictable state changes. React is built around components, props, state, and rendering based on data.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Créer des interfaces interactives avec les props, state et événements.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A dashboard can be broken into components for navigation, charts, cards, and tables. Each component can receive data and respond to state or user events.",
            "",
            "## Ce que vous allez apprendre",
            "- Utiliser les props.\n- Gérer un état local.\n- Réagir aux événements.\n- Afficher des données conditionnellement.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      {count}\n    </button>\n  );\n}\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **23.2 Props, state & événements React**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```jsx\nfunction UserCard({ name, role }) {\n  return <p>{name} — {role}</p>;\n}\n```"
          ],
          practice: [
            "Créez un compteur.",
            "Créez une liste filtrable.",
            "Construisez un formulaire contrôlé."
          ],
          quiz: [
            {
              question: "Quel hook React est couramment utilisé pour gérer un état local ?",
              options: ["useState", "useDatabase", "useHTML", "useCSS"],
              answer: 0,
              explanation:
                "useState permet de déclarer et modifier un état local dans un composant fonctionnel."
            }
          ]
        },
        {
          slug: "react-api-routing",
          title: "23.3 API, routing & architecture React",
          duration: "28 min",
          description:
            "Construire une interface React connectée à une API backend.",
          objectives: [
            "Charger des données depuis une API.",
            "Gérer les états loading/error.",
            "Comprendre le routing.",
            "Organiser une application React."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A frontend framework helps organize complex interfaces into reusable pieces and predictable state changes. React is built around components, props, state, and rendering based on data.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Construire une interface React connectée à une API backend.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A dashboard can be broken into components for navigation, charts, cards, and tables. Each component can receive data and respond to state or user events.",
            "",
            "## Ce que vous allez apprendre",
            "- Charger des données depuis une API.\n- Gérer les états loading/error.\n- Comprendre le routing.\n- Organiser une application React.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Une interface professionnelle doit gérer plusieurs états :\n- chargement\n- succès\n- erreur\n- absence de données\n\nExemple conceptuel :\n```text\npages/\ncomponents/\nservices/\nhooks/\nutils/\n```",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **23.3 API, routing & architecture React**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nasync function getProducts() {\n  const response = await fetch('/api/products');\n  if (!response.ok) throw new Error('Unable to load products');\n  return response.json();\n}\n```"
          ],
          practice: [
            "Créez une page de produits.",
            "Connectez-la à votre API.",
            "Ajoutez loading, error et empty states."
          ],
          quiz: [
            {
              question: "Pourquoi gérer explicitement un état loading ?",
              options: [
                "Pour informer l'utilisateur qu'une opération est en cours",
                "Pour supprimer les requêtes",
                "Pour remplacer la base de données",
                "Pour désactiver JavaScript"
              ],
              answer: 0,
              explanation:
                "Un état de chargement améliore notamment la compréhension de l'interface pendant une opération asynchrone."
            }
          ]
        }
      ]
    },

    {
      title: "Module 24: Projet Full-Stack — E-Commerce",
      lessons: [
        {
          slug: "projet-ecommerce-architecture",
          title: "24.1 Architecture du projet",
          duration: "25 min",
          description:
            "Planifier une application e-commerce full-stack avant d'écrire le code.",
          objectives: [
            "Découper une application en frontend, backend et base de données.",
            "Identifier les principales entités.",
            "Définir les routes API.",
            "Planifier les fonctionnalités."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A realistic project is where isolated concepts meet. An e-commerce application combines UI, state, APIs, authentication, data persistence, validation, testing, and deployment.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Planifier une application e-commerce full-stack avant d'écrire le code.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "Instead of learning each feature as a disconnected exercise, the project forces you to make decisions about how the pieces communicate and how data flows through the system.",
            "",
            "## Ce que vous allez apprendre",
            "- Découper une application en frontend, backend et base de données.\n- Identifier les principales entités.\n- Définir les routes API.\n- Planifier les fonctionnalités.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Architecture\n```text\nReact\n  ↓\nExpress API\n  ↓\nServices\n  ↓\nDatabase\n```\n\n## Entités\n```text\nUser\nProduct\nCart\nOrder\nOrderItem\n```\n\n## Fonctionnalités\n- inscription\n- connexion\n- catalogue\n- recherche\n- panier\n- commande\n- espace utilisateur\n- administration",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **24.1 Architecture du projet**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```text\nGET    /api/products\nGET    /api/products/:id\nPOST   /api/auth/register\nPOST   /api/auth/login\nGET    /api/orders\nPOST   /api/orders\n```"
          ],
          practice: [
            "Dessinez l'architecture complète.",
            "Définissez les entités.",
            "Définissez les endpoints."
          ],
          quiz: [
            {
              question: "Quel composant devrait généralement gérer la persistance des données ?",
              options: ["La base de données", "Le CSS", "Le navigateur uniquement", "Le fichier README"],
              answer: 0,
              explanation:
                "La base de données est conçue pour stocker durablement les données de l'application."
            }
          ]
        },
        {
          slug: "projet-ecommerce-backend",
          title: "24.2 Construire le backend",
          duration: "35 min",
          description:
            "Construire l'API backend du projet e-commerce.",
          objectives: [
            "Créer les modèles de données.",
            "Créer les routes.",
            "Implémenter le CRUD.",
            "Ajouter validation et gestion d'erreurs."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A realistic project is where isolated concepts meet. An e-commerce application combines UI, state, APIs, authentication, data persistence, validation, testing, and deployment.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Construire l'API backend du projet e-commerce.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "Instead of learning each feature as a disconnected exercise, the project forces you to make decisions about how the pieces communicate and how data flows through the system.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer les modèles de données.\n- Créer les routes.\n- Implémenter le CRUD.\n- Ajouter validation et gestion d'erreurs.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Le backend doit notamment gérer :\n- utilisateurs\n- produits\n- commandes\n- authentification\n- permissions\n- validation\n- erreurs\n\nChaque endpoint doit vérifier les données reçues et retourner des statuts HTTP cohérents.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **24.2 Construire le backend**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\napp.get('/api/products', async (req, res, next) => {\n  try {\n    const products = await productService.findAll();\n    res.json(products);\n  } catch (error) {\n    next(error);\n  }\n});\n```"
          ],
          practice: [
            "Implémentez le CRUD produits.",
            "Ajoutez les utilisateurs.",
            "Implémentez les commandes."
          ],
          quiz: [
            {
              question: "Quelle couche contient idéalement une grande partie de la logique métier dans une architecture services/controllers ?",
              options: ["Service", "CSS", "HTML", "README"],
              answer: 0,
              explanation:
                "La couche service est souvent utilisée pour isoler la logique métier des détails HTTP."
            }
          ]
        },
        {
          slug: "projet-ecommerce-frontend",
          title: "24.3 Construire le frontend",
          duration: "35 min",
          description:
            "Construire l'interface React connectée au backend.",
          objectives: [
            "Créer les pages principales.",
            "Consommer l'API.",
            "Gérer l'état de l'application.",
            "Créer une expérience utilisateur cohérente."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A realistic project is where isolated concepts meet. An e-commerce application combines UI, state, APIs, authentication, data persistence, validation, testing, and deployment.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Construire l'interface React connectée au backend.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "Instead of learning each feature as a disconnected exercise, the project forces you to make decisions about how the pieces communicate and how data flows through the system.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer les pages principales.\n- Consommer l'API.\n- Gérer l'état de l'application.\n- Créer une expérience utilisateur cohérente.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Pages recommandées :\n- Accueil\n- Produits\n- Produit détail\n- Panier\n- Connexion\n- Inscription\n- Commandes\n- Profil\n- Administration\n\nChaque écran doit gérer les états de chargement, erreur et données vides.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **24.3 Construire le frontend**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```jsx\nfunction ProductList({ products }) {\n  return products.map(product => (\n    <ProductCard\n      key={product.id}\n      product={product}\n    />\n  ));\n}\n```"
          ],
          practice: [
            "Construisez le catalogue.",
            "Ajoutez le panier.",
            "Connectez le formulaire de connexion à l'API."
          ],
          quiz: [
            {
              question: "Pourquoi chaque élément d'une liste React doit-il généralement avoir une key stable ?",
              options: [
                "Pour aider React à identifier les éléments lors du rendu",
                "Pour chiffrer les données",
                "Pour créer une API",
                "Pour stocker les mots de passe"
              ],
              answer: 0,
              explanation:
                "Une key stable aide React à suivre l'identité des éléments d'une liste."
            }
          ]
        },
        {
          slug: "projet-ecommerce-finalisation",
          title: "24.4 Tests, sécurité & finalisation",
          duration: "35 min",
          description:
            "Finaliser le projet avec tests, validation, sécurité, documentation et préparation au déploiement.",
          objectives: [
            "Ajouter des tests.",
            "Vérifier les validations.",
            "Identifier les risques de sécurité.",
            "Rédiger une documentation technique.",
            "Préparer le projet pour la production."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A realistic project is where isolated concepts meet. An e-commerce application combines UI, state, APIs, authentication, data persistence, validation, testing, and deployment.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Finaliser le projet avec tests, validation, sécurité, documentation et préparation au déploiement.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "Instead of learning each feature as a disconnected exercise, the project forces you to make decisions about how the pieces communicate and how data flows through the system.",
            "",
            "## Ce que vous allez apprendre",
            "- Ajouter des tests.\n- Vérifier les validations.\n- Identifier les risques de sécurité.\n- Rédiger une documentation technique.\n- Préparer le projet pour la production.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Avant de considérer le projet terminé, vérifiez :\n- authentification\n- autorisation\n- validation\n- gestion des erreurs\n- tests\n- variables d'environnement\n- absence de secrets dans Git\n- README\n- installation reproductible\n- scripts de lancement\n- comportement en production",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **24.4 Tests, sécurité & finalisation**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```text\nREADME.md\n.env.example\npackage.json\nsrc/\ntests/\n```"
          ],
          practice: [
            "Ajoutez des tests API.",
            "Écrivez le README.",
            "Créez un fichier .env.example.",
            "Effectuez une revue de sécurité."
          ],
          quiz: [
            {
              question: "Que doit-on éviter de committer dans un repository public ?",
              options: [
                "Les secrets et mots de passe",
                "Le README",
                "Le code source",
                "Les tests"
              ],
              answer: 0,
              explanation:
                "Les secrets doivent rester protégés et être injectés via une configuration sécurisée."
            }
          ]
        }
      ]
    },

    {
      title: "Module 25: Déploiement & Mise en Production",
      lessons: [
        {
          slug: "dev-production",
          title: "25.1 Développement vs production",
          duration: "20 min",
          description:
            "Comprendre ce qui change lorsqu'une application passe en production.",
          objectives: [
            "Distinguer environnement de développement et production.",
            "Comprendre les variables d'environnement.",
            "Identifier les configurations sensibles."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Code that works on a developer's machine is not automatically ready for users. Production introduces configuration, builds, deployment infrastructure, logs, monitoring, failures, and maintenance responsibilities.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre ce qui change lorsqu'une application passe en production.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A deployed application needs a reliable way to build and start, secure configuration, observable errors, and a process for updating the software without losing control of its behavior.",
            "",
            "## Ce que vous allez apprendre",
            "- Distinguer environnement de développement et production.\n- Comprendre les variables d'environnement.\n- Identifier les configurations sensibles.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Une application de production doit notamment gérer :\n- configuration\n- secrets\n- logs\n- performances\n- erreurs\n- sécurité\n- disponibilité\n\nLes variables d'environnement permettent de séparer certaines configurations du code.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **25.1 Développement vs production**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```text\nDATABASE_URL=...\nAPI_URL=...\nJWT_SECRET=...\n```"
          ],
          practice: [
            "Créez un fichier .env local.",
            "Créez un .env.example sans secrets réels.",
            "Ajoutez .env au .gitignore."
          ],
          quiz: [
            {
              question: "Pourquoi utiliser des variables d'environnement ?",
              options: [
                "Séparer certaines configurations et secrets du code source",
                "Remplacer JavaScript",
                "Créer des composants React",
                "Modifier automatiquement le HTML"
              ],
              answer: 0,
              explanation:
                "Les variables d'environnement permettent notamment de configurer l'application sans inscrire directement certaines valeurs sensibles dans le code."
            }
          ]
        },
        {
          slug: "deploiement-frontend-backend",
          title: "25.2 Déployer frontend & backend",
          duration: "25 min",
          description:
            "Comprendre les étapes nécessaires pour publier une application web.",
          objectives: [
            "Construire le frontend.",
            "Déployer une API.",
            "Configurer une base de données distante.",
            "Configurer les variables d'environnement."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Code that works on a developer's machine is not automatically ready for users. Production introduces configuration, builds, deployment infrastructure, logs, monitoring, failures, and maintenance responsibilities.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre les étapes nécessaires pour publier une application web.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A deployed application needs a reliable way to build and start, secure configuration, observable errors, and a process for updating the software without losing control of its behavior.",
            "",
            "## Ce que vous allez apprendre",
            "- Construire le frontend.\n- Déployer une API.\n- Configurer une base de données distante.\n- Configurer les variables d'environnement.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Un déploiement typique peut suivre :\n```text\nGitHub\n  ↓\nBuild\n  ↓\nHosting frontend\n\nGitHub\n  ↓\nNode/Express\n  ↓\nHosting backend\n  ↓\nDatabase\n```\n\nLe fournisseur exact peut varier. L'important est de comprendre les concepts.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **25.2 Déployer frontend & backend**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```bash\nnpm run build\nnpm start\n```"
          ],
          practice: [
            "Construisez le frontend en mode production.",
            "Déployez l'API.",
            "Connectez l'API à une base de données de production."
          ],
          quiz: [
            {
              question: "Quelle étape est généralement nécessaire avant de servir une application frontend moderne en production ?",
              options: [
                "Construire le projet avec son processus de build",
                "Supprimer tous les fichiers JavaScript",
                "Désactiver HTTP",
                "Supprimer package.json"
              ],
              answer: 0,
              explanation:
                "De nombreuses applications frontend modernes nécessitent une étape de build avant leur déploiement."
            }
          ]
        },
        {
          slug: "monitoring-maintenance",
          title: "25.3 Logs, monitoring & maintenance",
          duration: "22 min",
          description:
            "Comprendre le travail qui continue après le déploiement d'une application.",
          objectives: [
            "Comprendre les logs.",
            "Surveiller les erreurs.",
            "Identifier les problèmes de production.",
            "Comprendre les mises à jour de dépendances."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "Code that works on a developer's machine is not automatically ready for users. Production introduces configuration, builds, deployment infrastructure, logs, monitoring, failures, and maintenance responsibilities.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Comprendre le travail qui continue après le déploiement d'une application.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A deployed application needs a reliable way to build and start, secure configuration, observable errors, and a process for updating the software without losing control of its behavior.",
            "",
            "## Ce que vous allez apprendre",
            "- Comprendre les logs.\n- Surveiller les erreurs.\n- Identifier les problèmes de production.\n- Comprendre les mises à jour de dépendances.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "Une application en production doit être surveillée.\n\nOn peut notamment suivre :\n- erreurs\n- temps de réponse\n- disponibilité\n- consommation de ressources\n- événements importants\n\nLes dépendances doivent également être maintenues et mises à jour avec prudence.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **25.3 Logs, monitoring & maintenance**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nconsole.error('Payment processing failed', {\n  orderId,\n  timestamp: new Date().toISOString()\n});\n```"
          ],
          practice: [
            "Ajoutez des logs structurés à votre API.",
            "Créez une checklist de maintenance."
          ],
          quiz: [
            {
              question: "Pourquoi les logs sont-ils importants en production ?",
              options: [
                "Ils aident notamment à comprendre les événements et erreurs",
                "Ils remplacent les utilisateurs",
                "Ils remplacent la base de données",
                "Ils rendent automatiquement le code sécurisé"
              ],
              answer: 0,
              explanation:
                "Les logs fournissent des informations utiles pour diagnostiquer les événements et problèmes d'une application."
            }
          ]
        }
      ]
    },

    {
      title: "Module 26: Projet Final — Application SaaS Professionnelle",
      lessons: [
        {
          slug: "capstone-cahier-des-charges",
          title: "26.1 Comprendre un cahier des charges réel",
          duration: "30 min",
          description:
            "Apprendre à transformer une demande métier en fonctionnalités techniques.",
          objectives: [
            "Analyser un besoin utilisateur.",
            "Identifier les fonctionnalités.",
            "Définir les données.",
            "Découper le projet en tâches."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A final project should demonstrate more than whether individual syntax rules were memorized. It should show that you can turn a real requirement into architecture, implementation, tests, deployment, and a clear explanation of your decisions.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Apprendre à transformer une demande métier en fonctionnalités techniques.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A SaaS product combines many earlier skills: authentication, business rules, APIs, data modeling, frontend state, validation, testing, and deployment. The goal is to reason about the whole system.",
            "",
            "## Ce que vous allez apprendre",
            "- Analyser un besoin utilisateur.\n- Identifier les fonctionnalités.\n- Définir les données.\n- Découper le projet en tâches.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Mission\nVous êtes chargé de construire une application SaaS de gestion de projets.\n\nL'application doit permettre à une organisation de :\n- créer un compte\n- créer des projets\n- inviter des membres\n- créer des tâches\n- attribuer des tâches\n- changer leur statut\n- ajouter des commentaires\n- rechercher des tâches\n- consulter un tableau de bord\n- gérer les rôles\n\nAvant de coder, vous devez transformer ces besoins en spécifications techniques.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **26.1 Comprendre un cahier des charges réel**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```text\nUser\nProject\nProjectMember\nTask\nComment\nNotification\n```"
          ],
          practice: [
            "Écrivez les user stories.",
            "Définissez les entités.",
            "Définissez les endpoints API.",
            "Découpez le projet en milestones."
          ],
          quiz: [
            {
              question: "Quelle étape devrait généralement précéder le développement d'une fonctionnalité complexe ?",
              options: [
                "Comprendre et découper le besoin",
                "Écrire immédiatement 500 lignes de code",
                "Supprimer les tests",
                "Déployer immédiatement"
              ],
              answer: 0,
              explanation:
                "Comprendre et découper le besoin permet de réduire les ambiguïtés et de mieux planifier l'implémentation."
            }
          ]
        },
        {
          slug: "capstone-backend",
          title: "26.2 Construire le backend SaaS",
          duration: "40 min",
          description:
            "Construire l'API complète d'une application SaaS avec Node.js, Express et une base de données.",
          objectives: [
            "Construire une API REST.",
            "Implémenter l'authentification.",
            "Gérer les rôles.",
            "Implémenter la logique métier.",
            "Ajouter les validations et tests."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A final project should demonstrate more than whether individual syntax rules were memorized. It should show that you can turn a real requirement into architecture, implementation, tests, deployment, and a clear explanation of your decisions.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Construire l'API complète d'une application SaaS avec Node.js, Express et une base de données.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A SaaS product combines many earlier skills: authentication, business rules, APIs, data modeling, frontend state, validation, testing, and deployment. The goal is to reason about the whole system.",
            "",
            "## Ce que vous allez apprendre",
            "- Construire une API REST.\n- Implémenter l'authentification.\n- Gérer les rôles.\n- Implémenter la logique métier.\n- Ajouter les validations et tests.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## API attendue\n```text\nPOST   /api/auth/register\nPOST   /api/auth/login\nGET    /api/projects\nPOST   /api/projects\nGET    /api/projects/:id\nPOST   /api/projects/:id/tasks\nPATCH  /api/tasks/:id\nDELETE /api/tasks/:id\nPOST   /api/tasks/:id/comments\nGET    /api/dashboard\n```\n\nL'API doit vérifier les permissions avant toute opération sensible.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **26.2 Construire le backend SaaS**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```javascript\nif (!req.user) {\n  return res.status(401).json({\n    message: 'Authentication required'\n  });\n}\n```"
          ],
          practice: [
            "Implémentez l'authentification.",
            "Implémentez les projets.",
            "Implémentez les tâches.",
            "Implémentez les commentaires.",
            "Ajoutez des tests API."
          ],
          quiz: [
            {
              question: "Pourquoi vérifier les permissions côté backend même si l'interface masque certains boutons ?",
              options: [
                "Le client ne doit pas être considéré comme une source de confiance",
                "Parce que CSS ne fonctionne pas",
                "Pour accélérer React",
                "Pour supprimer les routes"
              ],
              answer: 0,
              explanation:
                "Un utilisateur peut appeler directement une API. Les permissions doivent donc être vérifiées côté serveur."
            }
          ]
        },
        {
          slug: "capstone-frontend",
          title: "26.3 Construire le frontend SaaS",
          duration: "40 min",
          description:
            "Créer une interface professionnelle React pour exploiter l'API.",
          objectives: [
            "Créer un dashboard.",
            "Construire les pages d'authentification.",
            "Afficher projets et tâches.",
            "Gérer les états de l'interface.",
            "Connecter le frontend au backend."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A final project should demonstrate more than whether individual syntax rules were memorized. It should show that you can turn a real requirement into architecture, implementation, tests, deployment, and a clear explanation of your decisions.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Créer une interface professionnelle React pour exploiter l'API.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A SaaS product combines many earlier skills: authentication, business rules, APIs, data modeling, frontend state, validation, testing, and deployment. The goal is to reason about the whole system.",
            "",
            "## Ce que vous allez apprendre",
            "- Créer un dashboard.\n- Construire les pages d'authentification.\n- Afficher projets et tâches.\n- Gérer les états de l'interface.\n- Connecter le frontend au backend.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Pages\n```text\n/login\n/register\n/dashboard\n/projects\n/projects/:id\n/settings\n```\n\nLe frontend doit gérer correctement :\n- loading\n- success\n- error\n- empty states\n- formulaires\n- navigation\n- permissions UI",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **26.3 Construire le frontend SaaS**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```jsx\nfunction EmptyState() {\n  return (\n    <div>\n      <h2>Aucun projet</h2>\n      <p>Créez votre premier projet pour commencer.</p>\n    </div>\n  );\n}\n```"
          ],
          practice: [
            "Construisez le dashboard.",
            "Construisez la liste des projets.",
            "Ajoutez la gestion des tâches.",
            "Ajoutez les formulaires."
          ],
          quiz: [
            {
              question: "Quel état doit être prévu lorsqu'une requête réussit mais ne retourne aucune donnée ?",
              options: ["Empty state", "Erreur réseau obligatoire", "Crash", "Page blanche"],
              answer: 0,
              explanation:
                "Une interface professionnelle doit prévoir un état vide lorsque les données sont absentes sans qu'il s'agisse d'une erreur."
            }
          ]
        },
        {
          slug: "capstone-tests-deployment",
          title: "26.4 Tests, déploiement & présentation finale",
          duration: "40 min",
          description:
            "Préparer le projet final pour une démonstration professionnelle et un déploiement.",
          objectives: [
            "Tester les fonctionnalités critiques.",
            "Déployer l'application.",
            "Documenter le projet.",
            "Présenter les choix techniques.",
            "Construire un portfolio à partir du projet."
          ],
          content: [
            "## Pourquoi cette notion existe",
            "A final project should demonstrate more than whether individual syntax rules were memorized. It should show that you can turn a real requirement into architecture, implementation, tests, deployment, and a clear explanation of your decisions.",
            "",
            "## Le modèle mental",
            "Pour cette leçon, retenez d'abord cette idée : **Préparer le projet final pour une démonstration professionnelle et un déploiement.** La syntaxe vient ensuite. Si vous comprenez le problème que cette notion résout, vous aurez beaucoup moins besoin de mémoriser les exemples par cœur.",
            "",
            "## Où cela apparaît dans une application réelle",
            "A SaaS product combines many earlier skills: authentication, business rules, APIs, data modeling, frontend state, validation, testing, and deployment. The goal is to reason about the whole system.",
            "",
            "## Ce que vous allez apprendre",
            "- Tester les fonctionnalités critiques.\n- Déployer l'application.\n- Documenter le projet.\n- Présenter les choix techniques.\n- Construire un portfolio à partir du projet.",
            "",
            "## Apprenons étape par étape",
            "Commencez par comprendre les exemples ci-dessous comme des situations concrètes. Ne cherchez pas seulement à reproduire la syntaxe : demandez-vous quelle information entre dans le code, quelle opération est effectuée et quel résultat sort du code.",
            "",
            "## Explication et syntaxe",
            "## Checklist finale\n- application fonctionnelle\n- authentification\n- permissions\n- validation\n- gestion d'erreurs\n- tests\n- README\n- variables d'environnement\n- responsive design\n- déploiement\n- GitHub propre\n\nLa présentation finale doit expliquer le problème résolu, l'architecture, les principales décisions techniques et les limites connues du projet.",
            "",
            "## Comment lire le code",
            "Lorsque vous relisez un exemple de cette leçon, identifiez d'abord les **données d'entrée**, puis l'**opération ou la règle** appliquée, et enfin le **résultat**. Dans un programme réel, c'est ce raisonnement qui permet de modifier un exemple pour répondre à un nouveau besoin.",
            "",
            "## Erreurs fréquentes à éviter",
            "- Ne mémorisez pas uniquement la syntaxe. Expliquez avec vos propres mots ce que le code demande à JavaScript de faire.",
            "- Vérifiez le type et la valeur des données lorsque le résultat vous surprend.",
            "- Testez les cas limites au lieu de supposer que le premier exemple représente toutes les situations.",
            "- Utilisez des noms de variables et de fonctions qui décrivent clairement leur rôle.",
            "",
            "## À retenir",
            "La compétence importante n'est pas seulement de connaître la syntaxe de **26.4 Tests, déploiement & présentation finale**. Vous devez pouvoir reconnaître le problème dans une application, choisir l'outil adapté, expliquer pourquoi vous l'utilisez et vérifier que le résultat correspond à ce que vous vouliez obtenir."
          ],
          examples: [
            "```text\nREADME\n├── Description\n├── Features\n├── Tech Stack\n├── Installation\n├── Environment Variables\n├── API\n├── Testing\n└── Deployment\n```"
          ],
          practice: [
            "Déployez votre application.",
            "Ajoutez le projet à votre portfolio.",
            "Enregistrez une courte démonstration.",
            "Présentez l'architecture du projet comme lors d'un entretien technique."
          ],
          quiz: [
            {
              question: "Quel élément est particulièrement utile pour permettre à un recruteur ou développeur de comprendre rapidement votre projet ?",
              options: [
                "Un README clair et une démonstration fonctionnelle",
                "Un fichier vide",
                "Un mot de passe dans GitHub",
                "Un code sans structure"
              ],
              answer: 0,
              explanation:
                "Une documentation claire et une démonstration permettent de comprendre rapidement le projet, ses fonctionnalités et son installation."
            }
          ]
        }
      ]
    }
  ]
};

export const jsExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle est la différence principale entre let et const ?",
    options: [
      "let est obsolète",
      "const empêche la réaffectation de la variable",
      "const est réservé aux nombres",
      "let a une portée globale uniquement"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel résultat donne typeof NaN en JavaScript ?",
    options: ["'number'", "'nan'", "'undefined'", "'object'"],
    correctAnswer: 0
  },
  {
    question: "Que retourne la méthode array.map() ?",
    options: [
      "Une valeur unique",
      "Un nouveau tableau transformé",
      "Un booléen",
      "Undefined"
    ],
    correctAnswer: 1
  },
  {
    question: "Comment intercepter les erreurs avec async/await ?",
    options: [
      ".catch() uniquement",
      "Avec un bloc try...catch",
      "if (error) {}",
      "await.error()"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle méthode permet d'ajouter un écouteur d'événement sur un élément DOM ?",
    options: [
      "element.onClick()",
      "element.addEventListener()",
      "element.attachEvent()",
      "element.bindEvent()"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle déclaration possède une portée de bloc ?",
    options: ["var", "let", "goto", "define"],
    correctAnswer: 1
  },
  {
    question: "Que signifie === en JavaScript ?",
    options: [
      "Affectation",
      "Comparaison stricte",
      "Addition",
      "Comparaison uniquement de type"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle valeur est falsy en JavaScript ?",
    options: ["'hello'", "[]", "0", "{}"],
    correctAnswer: 2
  },
  {
    question: "Quelle instruction permet d'arrêter une boucle immédiatement ?",
    options: ["continue", "stop", "break", "exitLoop"],
    correctAnswer: 2
  },
  {
    question: "Quelle instruction permet de sauter l'itération courante d'une boucle ?",
    options: ["continue", "skip", "next", "pass"],
    correctAnswer: 0
  },
  {
    question: "Que retourne une fonction qui ne contient pas de return explicite ?",
    options: ["null", "0", "undefined", "false"],
    correctAnswer: 2
  },
  {
    question: "Quelle syntaxe correspond à une arrow function valide ?",
    options: [
      "x -> x * 2",
      "x => x * 2",
      "function => x * 2",
      "x := x * 2"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel concept permet à une fonction interne de conserver l'accès aux variables de son environnement lexical ?",
    options: ["Closure", "Hoisting uniquement", "Casting", "Serialization"],
    correctAnswer: 0
  },
  {
    question: "Quelle méthode ajoute un élément à la fin d'un tableau ?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0
  },
  {
    question: "Quelle méthode supprime généralement le dernier élément d'un tableau ?",
    options: ["remove()", "pop()", "deleteLast()", "shift()"],
    correctAnswer: 1
  },
  {
    question: "Quelle méthode crée un nouveau tableau en transformant chaque élément ?",
    options: ["map()", "filter()", "reduce()", "find()"],
    correctAnswer: 0
  },
  {
    question: "Quelle méthode retourne les éléments qui satisfont une condition ?",
    options: ["filter()", "map()", "findAll()", "select()"],
    correctAnswer: 0
  },
  {
    question: "Quelle méthode retourne généralement le premier élément correspondant à une condition ?",
    options: ["filter()", "find()", "map()", "some()"],
    correctAnswer: 1
  },
  {
    question: "Quelle méthode permet de transformer un tableau en une valeur finale ?",
    options: ["map()", "reduce()", "forEach()", "includes()"],
    correctAnswer: 1
  },
  {
    question: "Que retourne some() ?",
    options: [
      "Un tableau",
      "Un objet",
      "Un booléen",
      "Une Promise"
    ],
    correctAnswer: 2
  },
  {
    question: "Quelle syntaxe permet de déstructurer un objet ?",
    options: ["[]", "{}", "()", "<>"],
    correctAnswer: 1
  },
  {
    question: "Quel opérateur est utilisé pour le spread et le rest ?",
    options: ["...", "???", "&&", "##"],
    correctAnswer: 0
  },
  {
    question: "Que permet JSON.stringify() ?",
    options: [
      "Convertir une valeur JavaScript en chaîne JSON",
      "Convertir JSON en JavaScript",
      "Chiffrer une valeur",
      "Créer un tableau"
    ],
    correctAnswer: 0
  },
  {
    question: "Que permet JSON.parse() ?",
    options: [
      "Créer une Promise",
      "Convertir une chaîne JSON en valeur JavaScript",
      "Créer du HTML",
      "Chiffrer des données"
    ],
    correctAnswer: 1
  },
  {
    question: "Quelle méthode sélectionne le premier élément correspondant à un sélecteur CSS ?",
    options: [
      "document.querySelector()",
      "document.queryAll()",
      "document.selectFirst()",
      "document.find()"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle propriété permet de modifier du texte sans interpréter du HTML ?",
    options: ["innerHTML", "textContent", "htmlText", "textHTML"],
    correctAnswer: 1
  },
  {
    question: "Quelle méthode permet de créer un élément DOM ?",
    options: [
      "document.createElement()",
      "document.newElement()",
      "document.makeElement()",
      "document.createNodeHTML()"
    ],
    correctAnswer: 0
  },
  {
    question: "Que fait event.preventDefault() ?",
    options: [
      "Empêche le comportement par défaut de l'événement",
      "Supprime l'événement",
      "Crée un nouvel événement",
      "Recharge automatiquement la page"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle propriété identifie généralement l'élément ayant déclenché l'événement ?",
    options: ["event.target", "event.source", "event.elementOnly", "event.origin"],
    correctAnswer: 0
  },
  {
    question: "Quel est l'un des états possibles d'une Promise ?",
    options: ["pending", "running", "paused", "sleeping"],
    correctAnswer: 0
  },
  {
    question: "Quel état indique qu'une Promise a été résolue avec succès ?",
    options: ["fulfilled", "completedOnly", "successState", "resolvedOnly"],
    correctAnswer: 0
  },
  {
    question: "Une fonction async retourne quoi ?",
    options: ["Toujours une Promise", "Toujours un tableau", "Toujours un objet DOM", "Toujours undefined"],
    correctAnswer: 0
  },
  {
    question: "Quel mot-clé permet d'attendre une Promise dans un contexte approprié ?",
    options: ["await", "wait", "pause", "asyncWait"],
    correctAnswer: 0
  },
  {
    question: "Quelle méthode de Response permet de lire du JSON ?",
    options: ["response.json()", "response.parse()", "response.object()", "JSON.response()"],
    correctAnswer: 0
  },
  {
    question: "Quelle méthode HTTP est généralement utilisée pour créer une ressource ?",
    options: ["GET", "POST", "READ", "FETCH"],
    correctAnswer: 1
  },
  {
    question: "Quel code HTTP signifie généralement 'Not Found' ?",
    options: ["200", "201", "404", "500"],
    correctAnswer: 2
  },
  {
    question: "Quel code HTTP indique généralement une erreur interne du serveur ?",
    options: ["301", "400", "404", "500"],
    correctAnswer: 3
  },
  {
    question: "Pourquoi utiliser JSON.stringify avant de stocker un objet dans localStorage ?",
    options: [
      "localStorage stocke ses valeurs sous forme de chaînes",
      "Pour chiffrer automatiquement l'objet",
      "Pour créer une classe",
      "Pour compresser les données"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle méthode permet de supprimer une clé spécifique de localStorage ?",
    options: ["removeItem()", "deleteItem()", "removeKey()", "clearItem()"],
    correctAnswer: 0
  },
  {
    question: "Quelle syntaxe permet d'importer un export nommé ?",
    options: [
      "import { add } from './math.js'",
      "import add './math.js'",
      "require add from math",
      "include add"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle syntaxe permet d'exporter une valeur par défaut ?",
    options: [
      "export default",
      "export main",
      "default export only",
      "module default"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel mot-clé permet de lancer volontairement une exception ?",
    options: ["throw", "raise", "error", "fail"],
    correctAnswer: 0
  },
  {
    question: "Quel bloc permet d'intercepter une exception ?",
    options: ["catch", "except", "handle", "error"],
    correctAnswer: 0
  },
  {
    question: "Quel mot-clé permet de créer une classe JavaScript ?",
    options: ["class", "object", "struct", "type"],
    correctAnswer: 0
  },
  {
    question: "Quel mot-clé permet de créer une classe héritée ?",
    options: ["extends", "inherits", "parent", "child"],
    correctAnswer: 0
  },
  {
    question: "Quel mot-clé appelle le constructeur de la classe parent ?",
    options: ["super", "parent", "base", "extends"],
    correctAnswer: 0
  },
  {
    question: "Les fonctions fléchées possèdent-elles leur propre binding de this ?",
    options: ["Oui", "Non", "Uniquement dans Chrome", "Uniquement dans Node.js"],
    correctAnswer: 1
  },
  {
    question: "Quel outil permet de versionner du code source ?",
    options: ["Git", "npm uniquement", "React", "DOM"],
    correctAnswer: 0
  },
  {
    question: "Quel fichier décrit notamment les dépendances d'un projet npm ?",
    options: ["package.json", "dependencies.js", "npm.json", "project.lock"],
    correctAnswer: 0
  },
  {
    question: "Quelle commande installe généralement une dépendance npm ?",
    options: [
      "npm install package",
      "npm add-code package",
      "node install package",
      "install-npm package"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel environnement permet d'exécuter JavaScript côté serveur ?",
    options: ["Node.js", "CSS", "HTML", "DOM uniquement"],
    correctAnswer: 0
  },
  {
    question: "Quel module Node.js natif permet de travailler avec les fichiers ?",
    options: ["fs", "files", "node-files", "storage"],
    correctAnswer: 0
  },
  {
    question: "Quel framework est utilisé dans ce cours pour construire une API Node.js ?",
    options: ["Express", "React", "Vitest", "CSS"],
    correctAnswer: 0
  },
  {
    question: "Quel est le rôle principal d'un middleware Express ?",
    options: [
      "Intervenir dans la chaîne de traitement d'une requête",
      "Créer du CSS",
      "Remplacer SQL",
      "Compiler React"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est le rôle de next() dans un middleware Express ?",
    options: [
      "Passer au traitement suivant",
      "Arrêter le serveur",
      "Supprimer la requête",
      "Créer un utilisateur"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle opération SQL récupère des données ?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: 0
  },
  {
    question: "Quelle opération SQL ajoute une ligne ?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: 1
  },
  {
    question: "Quelle opération SQL modifie des données existantes ?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: 2
  },
  {
    question: "Quelle opération SQL supprime des données ?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: 3
  },
  {
    question: "Quelle différence décrit correctement authentification et autorisation ?",
    options: [
      "Authentification = identité ; autorisation = permissions",
      "Authentification = CSS ; autorisation = HTML",
      "Authentification = base de données ; autorisation = JavaScript",
      "Il n'y a aucune différence"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi ne doit-on pas stocker les mots de passe en clair ?",
    options: [
      "Une compromission de la base exposerait directement les mots de passe",
      "Parce que HTML ne le permet pas",
      "Parce que JSON ne fonctionne pas",
      "Parce que React l'interdit"
    ],
    correctAnswer: 0
  },
  {
    question: "Où doit être effectuée la validation de sécurité des données envoyées à une API ?",
    options: [
      "Uniquement dans le navigateur",
      "Côté serveur au minimum",
      "Uniquement dans CSS",
      "Uniquement dans Git"
    ],
    correctAnswer: 1
  },
  {
    question: "Que cherche notamment à limiter une protection contre XSS ?",
    options: [
      "L'exécution de contenu script non fiable dans le contexte de l'application",
      "La taille des images",
      "Le nombre de fichiers Git",
      "Les requêtes SQL uniquement"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel est l'objectif principal d'un test unitaire ?",
    options: [
      "Tester une petite unité de comportement de manière isolée",
      "Tester uniquement le CSS",
      "Déployer l'application",
      "Créer une base de données"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel framework de test est utilisé comme exemple dans ce cours ?",
    options: ["Vitest", "Express", "React", "Vite uniquement"],
    correctAnswer: 0
  },
  {
    question: "Quel type de test simule généralement un parcours utilisateur complet ?",
    options: [
      "End-to-end",
      "Unit only",
      "Syntax test",
      "CSS test"
    ],
    correctAnswer: 0
  },
  {
    question: "Quel concept React permet de construire l'interface à partir de blocs réutilisables ?",
    options: ["Composants", "SQL tables", "Middleware uniquement", "Git branches"],
    correctAnswer: 0
  },
  {
    question: "Quel hook React est utilisé pour gérer un état local ?",
    options: ["useState", "useHTML", "useNode", "useDatabase"],
    correctAnswer: 0
  },
  {
    question: "Pourquoi React utilise-t-il des keys dans les listes ?",
    options: [
      "Pour identifier de manière stable les éléments lors du rendu",
      "Pour stocker des mots de passe",
      "Pour créer des APIs",
      "Pour modifier CSS automatiquement"
    ],
    correctAnswer: 0
  },
  {
    question: "Que représente une API REST dans une application full-stack ?",
    options: [
      "Une interface permettant notamment au frontend de communiquer avec le backend",
      "Un fichier CSS",
      "Une base de données uniquement",
      "Un composant React"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi les permissions doivent-elles être vérifiées côté serveur ?",
    options: [
      "Le client ne peut pas être considéré comme une source de confiance",
      "React ne supporte pas les permissions",
      "CSS peut modifier la base de données",
      "Git interdit les permissions"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle information ne doit généralement pas être commitée dans un repository public ?",
    options: [
      "Une clé secrète de production",
      "Le README",
      "Les tests",
      "Le code source non sensible"
    ],
    correctAnswer: 0
  },
  {
    question: "Pourquoi utiliser des variables d'environnement ?",
    options: [
      "Pour séparer certaines configurations et secrets du code source",
      "Pour remplacer JavaScript",
      "Pour créer automatiquement des tests",
      "Pour remplacer React"
    ],
    correctAnswer: 0
  },
  {
    question: "Quelle est une bonne pratique avant de considérer une application comme prête pour la production ?",
    options: [
      "Tester, sécuriser, documenter et vérifier la configuration",
      "Supprimer les tests",
      "Mettre les secrets dans GitHub",
      "Désactiver la gestion des erreurs"
    ],
    correctAnswer: 0
  }
];