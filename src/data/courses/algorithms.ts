import type { CourseDetail, ExamQuestion } from "../coursesData";

export const algorithmsCourse: CourseDetail = {
  slug: "algorithms",
  categorySlug: "computer-science",
  title: "Algorithmes & Structures de Données",
  description:
    "Maîtrisez les fondamentaux des algorithmes et des structures de données : complexité Big-O, tableaux, listes, piles, files, tables de hachage, arbres, graphes, récursivité, tri, recherche et programmation dynamique.",
  level: "Intermédiaire",
  icon: "🧮",

  modules: [
    {
      title: "Module 1: Comprendre les Algorithmes",
      lessons: [
        {
          slug: "introduction-aux-algorithmes",
          title: "1.1 Qu'est-ce qu'un Algorithme ?",
          duration: "15 min",
          description:
            "Comprends ce qu'est un algorithme et comment transformer un problème en procédure de résolution.",
          objectives: [
            "Définir un algorithme.",
            "Identifier les entrées, sorties et étapes d'un algorithme.",
            "Distinguer un algorithme d'un programme.",
            "Décomposer un problème complexe en étapes simples."
          ],
          content: [
            "## Définition",
            "Un algorithme est une suite finie et ordonnée d'instructions permettant de résoudre un problème ou d'effectuer une tâche.",
            "",
            "Un algorithme n'est pas nécessairement du code. Une recette de cuisine, une procédure de tri de documents ou une méthode de recherche peuvent être décrites comme des algorithmes.",
            "",
            "## Algorithme vs programme",
            "- **Algorithme :** décrit la logique de résolution.",
            "- **Programme :** implémente cette logique dans un langage informatique.",
            "",
            "Le même algorithme peut donc être implémenté en JavaScript, Python, Java, C++, Go ou un autre langage.",
            "",
            "## Les trois éléments importants",
            "Un algorithme possède généralement :",
            "1. des **entrées** ;",
            "2. un ensemble d'**étapes** ;",
            "3. une ou plusieurs **sorties**.",
            "",
            "## Exemple",
            "Problème : trouver le plus grand nombre d'une liste.",
            "",
            "```text",
            "1. Prendre le premier nombre comme maximum actuel.",
            "2. Parcourir les autres nombres.",
            "3. Si un nombre est supérieur au maximum actuel, le remplacer.",
            "4. Retourner le maximum.",
            "```",
            "",
            "Cette logique peut ensuite être transformée en code."
          ],
          examples: [
            "Un système de recherche de produits applique des algorithmes pour filtrer les résultats, les comparer et les classer."
          ],
          practice: [
            "Écris en langage naturel un algorithme permettant de trouver le plus petit nombre d'une liste."
          ],
          quiz: [
            {
              question: "Qu'est-ce qu'un algorithme ?",
              options: [
                "Une suite d'étapes permettant de résoudre un problème",
                "Uniquement du code JavaScript",
                "Une base de données",
                "Un système d'exploitation"
              ],
              answer: 0,
              explanation:
                "Un algorithme décrit une méthode de résolution. Il peut ensuite être implémenté dans un langage de programmation."
            }
          ]
        },

        {
          slug: "efficacite-algorithmique",
          title: "1.2 Pourquoi Mesurer l'Efficacité d'un Algorithme ?",
          duration: "15 min",
          description:
            "Comprends pourquoi deux algorithmes donnant le même résultat peuvent avoir des performances très différentes.",
          objectives: [
            "Comprendre la notion d'efficacité algorithmique.",
            "Comparer deux solutions pour un même problème.",
            "Distinguer temps d'exécution et consommation mémoire."
          ],
          content: [
            "## Deux solutions, deux performances",
            "Imagine deux algorithmes qui recherchent un élément dans une collection de 10 millions de valeurs.",
            "",
            "Le premier parcourt les valeurs une par une. Le second réduit l'espace de recherche à chaque étape.",
            "",
            "Les deux peuvent être corrects, mais leur comportement à grande échelle sera très différent.",
            "",
            "## Deux ressources principales",
            "- **Complexité temporelle :** comment le nombre d'opérations évolue avec la taille des données.",
            "- **Complexité spatiale :** comment la mémoire supplémentaire utilisée évolue avec la taille des données.",
            "",
            "## Pourquoi la taille des données compte",
            "Un algorithme O(n²) peut sembler parfaitement acceptable avec 10 éléments mais devenir très coûteux avec 100 000 éléments.",
            "",
            "L'objectif de l'analyse algorithmique est donc de comprendre le comportement d'une solution lorsque les données grandissent."
          ],
          examples: [
            "Une double boucle parcourant 10 000 éléments peut effectuer jusqu'à environ 100 millions de comparaisons dans le pire cas, selon la structure exacte du code."
          ],
          practice: [
            "Compare conceptuellement une recherche séquentielle et une recherche dichotomique sur une collection contenant un million d'éléments."
          ],
          quiz: [
            {
              question:
                "Pourquoi analyse-t-on la complexité d'un algorithme ?",
              options: [
                "Pour comprendre comment ses ressources évoluent lorsque les données augmentent",
                "Pour choisir automatiquement un langage",
                "Pour supprimer les tests",
                "Pour rendre le code plus coloré"
              ],
              answer: 0,
              explanation:
                "La complexité permet d'estimer comment le temps et la mémoire évoluent avec la taille des entrées."
            }
          ]
        }
      ]
    },

    {
      title: "Module 2: Notation Big-O",
      lessons: [
        {
          slug: "notation-big-o",
          title: "2.1 Comprendre la Notation Big-O",
          duration: "18 min",
          description:
            "Apprends à analyser la croissance d'un algorithme avec O(1), O(log n), O(n), O(n log n) et O(n²).",
          objectives: [
            "Comprendre la notation Big-O.",
            "Identifier les principales classes de complexité.",
            "Analyser des boucles simples et imbriquées."
          ],
          content: [
            "## Qu'est-ce que Big-O ?",
            "La notation Big-O décrit principalement comment le coût d'un algorithme évolue lorsque la taille de l'entrée augmente.",
            "",
            "Elle ne donne pas nécessairement le nombre exact d'instructions exécutées.",
            "",
            "## O(1) : constant",
            "Une opération O(1) ne dépend pas de la taille de la collection.",
            "",
            "```typescript",
            "const first = numbers[0];",
            "```",
            "",
            "L'accès à un élément d'un tableau par index est généralement considéré comme O(1).",
            "",
            "## O(n) : linéaire",
            "```typescript",
            "for (const value of numbers) {",
            "  console.log(value);",
            "}",
            "```",
            "",
            "Si le nombre d'éléments double, le nombre d'itérations est approximativement multiplié par deux.",
            "",
            "## O(n²) : quadratique",
            "```typescript",
            "for (const a of numbers) {",
            "  for (const b of numbers) {",
            "    console.log(a, b);",
            "  }",
            "}",
            "```",
            "",
            "Deux boucles dépendant toutes deux de n donnent souvent O(n²).",
            "",
            "## O(log n)",
            "Une recherche dichotomique est un exemple classique. À chaque étape, l'espace de recherche est divisé approximativement par deux.",
            "",
            "## O(n log n)",
            "Cette complexité apparaît notamment dans plusieurs algorithmes de tri efficaces comme Merge Sort et, en moyenne, Quick Sort."
          ],
          examples: [
            "Pour n = 1 000, O(n) représente environ 1 000 unités de travail selon le modèle utilisé, alors que O(n²) peut représenter environ 1 000 000 d'opérations."
          ],
          practice: [
            "Détermine la complexité approximative d'une fonction contenant une seule boucle puis d'une fonction contenant deux boucles imbriquées."
          ],
          quiz: [
            {
              question:
                "Quelle est généralement la complexité d'un parcours complet d'un tableau de n éléments ?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              answer: 2,
              explanation:
                "Un parcours complet visite les n éléments, ce qui donne généralement O(n)."
            },
            {
              question:
                "Quelle complexité correspond généralement à deux boucles imbriquées parcourant chacune n éléments ?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              answer: 3,
              explanation:
                "La boucle interne s'exécute environ n fois pour chacune des n itérations de la boucle externe."
            }
          ]
        },

        {
          slug: "analyser-complexite-code",
          title: "2.2 Calculer la Complexité d'un Code",
          duration: "18 min",
          description:
            "Apprends une méthode pratique pour analyser la complexité temporelle et spatiale d'un morceau de code.",
          objectives: [
            "Analyser les boucles séquentielles.",
            "Analyser les boucles imbriquées.",
            "Identifier certaines complexités logarithmiques.",
            "Prendre en compte la mémoire supplémentaire."
          ],
          content: [
            "## Étape 1 : identifier la taille de l'entrée",
            "On utilise généralement n pour représenter la taille des données.",
            "",
            "## Étape 2 : compter les répétitions",
            "Une boucle parcourant n éléments effectue généralement O(n) itérations.",
            "",
            "## Étape 3 : analyser les imbrications",
            "Deux boucles imbriquées de taille n donnent souvent O(n²).",
            "",
            "## Étape 4 : analyser les opérations successives",
            "Si une fonction réalise d'abord O(n), puis O(n), le coût total est O(2n), qui se simplifie en O(n).",
            "",
            "## Exemple",
            "```typescript",
            "for (const item of items) {",
            "  console.log(item);",
            "}",
            "",
            "for (const item of items) {",
            "  console.log(item.id);",
            "}",
            "```",
            "",
            "Les deux boucles sont successives. La complexité est donc O(n + n), soit O(n).",
            "",
            "## Attention",
            "Big-O simplifie les constantes et les termes dominés. L'analyse exacte peut demander davantage de précision selon le problème."
          ],
          examples: [
            "Une fonction réalisant 3n + 20 opérations reste O(n) selon la notation Big-O."
          ],
          practice: [
            "Analyse la complexité d'un algorithme contenant trois boucles successives puis d'un algorithme contenant une boucle imbriquée."
          ],
          quiz: [
            {
              question:
                "Quelle est la simplification Big-O de O(3n + 20) ?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              answer: 2,
              explanation:
                "Les constantes et les termes constants sont ignorés dans cette approximation : O(3n + 20) devient O(n)."
            }
          ]
        }
      ]
    },

    {
      title: "Module 3: Tableaux et Listes",
      lessons: [
        {
          slug: "tableaux-arrays",
          title: "3.1 Tableaux : Accès, Recherche et Modification",
          duration: "17 min",
          description:
            "Comprends les avantages et limites des tableaux pour stocker des données.",
          objectives: [
            "Comprendre le fonctionnement général d'un tableau.",
            "Connaître les coûts typiques des principales opérations.",
            "Choisir un tableau lorsqu'il est adapté au problème."
          ],
          content: [
            "## Le tableau",
            "Un tableau stocke plusieurs valeurs dans une structure ordonnée accessible par index.",
            "",
            "```typescript",
            "const numbers = [10, 20, 30, 40];",
            "console.log(numbers[2]); // 30",
            "```",
            "",
            "## Accès par index",
            "L'accès à un élément par index est généralement O(1).",
            "",
            "## Recherche",
            "Chercher une valeur sans information supplémentaire peut nécessiter un parcours complet : O(n).",
            "",
            "## Insertion et suppression",
            "Insérer ou supprimer au milieu d'un tableau peut nécessiter de déplacer plusieurs éléments, ce qui donne généralement O(n).",
            "",
            "## Quand utiliser un tableau ?",
            "Les tableaux sont particulièrement utiles lorsqu'on a besoin :",
            "- d'un accès rapide par index ;",
            "- d'une collection ordonnée ;",
            "- d'un parcours séquentiel efficace."
          ],
          examples: [
            "Une liste de prix, une collection d'identifiants ou les scores d'un groupe d'utilisateurs peuvent être représentés par un tableau."
          ],
          practice: [
            "Écris une fonction qui recherche une valeur dans un tableau et retourne son index ou -1 si elle n'existe pas."
          ],
          quiz: [
            {
              question:
                "Quelle opération est généralement O(1) dans un tableau ?",
              options: [
                "Accéder à un élément par index",
                "Chercher une valeur inconnue",
                "Insérer au début",
                "Supprimer tous les éléments"
              ],
              answer: 0,
              explanation:
                "L'accès par index est généralement constant dans un tableau."
            }
          ]
        },

        {
          slug: "listes-chainees",
          title: "3.2 Listes Chaînées",
          duration: "18 min",
          description:
            "Découvre les listes chaînées et comprends leur différence avec les tableaux.",
          objectives: [
            "Comprendre le principe d'un nœud.",
            "Parcourir une liste chaînée.",
            "Comparer tableau et liste chaînée.",
            "Comprendre le coût de l'insertion lorsqu'on possède une référence vers le bon nœud."
          ],
          content: [
            "## Principe",
            "Une liste chaînée est composée de nœuds. Chaque nœud contient généralement une valeur et une référence vers le nœud suivant.",
            "",
            "```text",
            "[10] -> [20] -> [30] -> null",
            "```",
            "",
            "## Structure simplifiée",
            "```typescript",
            "type Node = {",
            "  value: number;",
            "  next: Node | null;",
            "};",
            "```",
            "",
            "## Tableau vs liste chaînée",
            "| Opération | Tableau | Liste chaînée |",
            "|---|---|---|",
            "| Accès par position | généralement O(1) | O(n) |",
            "| Recherche | O(n) | O(n) |",
            "| Insertion avec référence adaptée | peut nécessiter déplacement | peut être O(1) |",
            "",
            "## Limite",
            "Une liste chaînée ne permet pas généralement d'accéder directement au dixième élément. Il faut parcourir les nœuds précédents."
          ],
          examples: [
            "Une liste chaînée peut être utile lorsque des insertions et suppressions fréquentes sont nécessaires et que l'on possède déjà les références appropriées."
          ],
          practice: [
            "Implémente un nœud de liste chaînée en TypeScript puis écris une fonction permettant de parcourir tous les éléments."
          ],
          quiz: [
            {
              question:
                "Quel est un avantage typique d'une liste chaînée par rapport à un tableau ?",
              options: [
                "Elle permet toujours un accès O(1) par position",
                "Elle peut faciliter certaines insertions et suppressions sans déplacer toute une séquence d'éléments",
                "Elle utilise toujours moins de mémoire",
                "Elle trie automatiquement les valeurs"
              ],
              answer: 1,
              explanation:
                "Une liste chaînée peut faciliter certaines modifications structurelles, notamment lorsqu'on possède déjà une référence vers le bon nœud."
            }
          ]
        }
      ]
    },

    {
      title: "Module 4: Piles et Files",
      lessons: [
        {
          slug: "pile-stack",
          title: "4.1 Les Piles : Stack et Principe LIFO",
          duration: "15 min",
          description:
            "Comprends le principe LIFO et découvre les applications des piles.",
          objectives: [
            "Comprendre le principe LIFO.",
            "Implémenter une pile simple.",
            "Identifier les cas d'utilisation d'une pile."
          ],
          content: [
            "## LIFO",
            "Une pile suit le principe **Last In, First Out** : le dernier élément ajouté est le premier à sortir.",
            "",
            "```text",
            "      [30] <- sommet",
            "      [20]",
            "      [10]",
            "```",
            "",
            "Les opérations classiques sont :",
            "- **push** : ajouter un élément ;",
            "- **pop** : retirer le sommet ;",
            "- **peek** : consulter le sommet sans le retirer.",
            "",
            "## Exemple TypeScript",
            "```typescript",
            "const stack: number[] = [];",
            "",
            "stack.push(10);",
            "stack.push(20);",
            "stack.push(30);",
            "",
            "const value = stack.pop();",
            "console.log(value); // 30",
            "```",
            "",
            "## Applications",
            "- historique d'actions ;",
            "- annulation d'opérations ;",
            "- parcours en profondeur ;",
            "- gestion de certains appels récursifs ;",
            "- analyse d'expressions."
          ],
          examples: [
            "Le bouton « Annuler » d'un éditeur peut utiliser une pile d'actions afin de revenir à l'état précédent."
          ],
          practice: [
            "Implémente une classe Stack avec push, pop et peek."
          ],
          quiz: [
            {
              question: "Quel principe décrit une pile ?",
              options: ["FIFO", "LIFO", "FILO uniquement", "Random Access"],
              answer: 1,
              explanation:
                "Une pile suit le principe Last In, First Out : le dernier élément ajouté est retiré en premier."
            }
          ]
        },

        {
          slug: "file-queue",
          title: "4.2 Les Files : Queue et Principe FIFO",
          duration: "15 min",
          description:
            "Comprends le principe FIFO et découvre pourquoi les files sont utiles pour gérer des tâches.",
          objectives: [
            "Comprendre le principe FIFO.",
            "Différencier une file d'une pile.",
            "Identifier des applications pratiques des files."
          ],
          content: [
            "## FIFO",
            "Une file suit le principe **First In, First Out** : le premier élément arrivé est le premier à sortir.",
            "",
            "```text",
            "Entrée -> [A] [B] [C] -> Sortie",
            "          ^",
            "       premier",
            "```",
            "",
            "## Applications",
            "- files d'impression ;",
            "- traitement de tâches ;",
            "- files de messages ;",
            "- systèmes de réservation ;",
            "- parcours en largeur dans un graphe.",
            "",
            "## Exemple",
            "```typescript",
            "const queue: string[] = [];",
            "",
            "queue.push(\"A\");",
            "queue.push(\"B\");",
            "queue.push(\"C\");",
            "",
            "const first = queue.shift();",
            "console.log(first); // A",
            "```",
            "",
            "Pour de très grandes collections, il faut cependant choisir une implémentation adaptée, car certaines opérations comme `shift()` sur un tableau peuvent nécessiter de déplacer les éléments."
          ],
          examples: [
            "Un serveur peut placer des tâches dans une file afin de les traiter dans l'ordre d'arrivée."
          ],
          practice: [
            "Crée une file de tâches et implémente les opérations d'ajout et de retrait."
          ],
          quiz: [
            {
              question: "Quel principe décrit une file ?",
              options: ["LIFO", "FIFO", "Random", "Binary"],
              answer: 1,
              explanation:
                "FIFO signifie First In, First Out : le premier élément ajouté est le premier retiré."
            }
          ]
        }
      ]
    },

    {
      title: "Module 5: Tables de Hachage",
      lessons: [
        {
          slug: "hash-tables",
          title: "5.1 Tables de Hachage et Dictionnaires",
          duration: "18 min",
          description:
            "Découvre comment les tables de hachage permettent des recherches rapides par clé.",
          objectives: [
            "Comprendre le principe clé-valeur.",
            "Expliquer le rôle d'une fonction de hachage.",
            "Comprendre les complexités moyennes des opérations.",
            "Identifier le problème des collisions."
          ],
          content: [
            "## Structure clé-valeur",
            "Une table de hachage associe une clé à une valeur.",
            "",
            "```typescript",
            "const users = new Map<string, string>();",
            "",
            "users.set(\"u1\", \"Alice\");",
            "users.set(\"u2\", \"Bob\");",
            "",
            "console.log(users.get(\"u2\"));",
            "```",
            "",
            "## Fonction de hachage",
            "Une fonction de hachage transforme une clé en une valeur permettant de déterminer où stocker ou rechercher la donnée.",
            "",
            "## Complexité",
            "Les opérations de recherche, insertion et suppression sont généralement considérées comme O(1) en moyenne avec une bonne table de hachage.",
            "",
            "Ce n'est pas une garantie absolue.",
            "",
            "## Collision",
            "Deux clés différentes peuvent produire une même position. Il faut alors utiliser une stratégie de gestion des collisions.",
            "",
            "## Applications",
            "- caches ;",
            "- index ;",
            "- dictionnaires ;",
            "- détection de doublons ;",
            "- comptage de fréquences."
          ],
          examples: [
            "Pour compter la fréquence de mots dans un texte, une table de hachage peut associer chaque mot à son nombre d'occurrences."
          ],
          practice: [
            "Écris une fonction qui reçoit un tableau de mots et retourne un dictionnaire contenant le nombre d'occurrences de chaque mot."
          ],
          quiz: [
            {
              question:
                "Quelle est la complexité moyenne typique d'une recherche dans une bonne table de hachage ?",
              options: ["O(1)", "O(n²)", "O(log n)", "O(n log n)"],
              answer: 0,
              explanation:
                "Une table de hachage bien dimensionnée offre généralement une recherche en O(1) en moyenne."
            }
          ]
        }
      ]
    },

    {
      title: "Module 6: Récursivité",
      lessons: [
        {
          slug: "recursivite",
          title: "6.1 Comprendre la Récursivité",
          duration: "17 min",
          description:
            "Apprends à résoudre certains problèmes en faisant appel à une fonction depuis elle-même.",
          objectives: [
            "Comprendre le principe de récursivité.",
            "Identifier le cas de base.",
            "Éviter les récursions infinies.",
            "Comprendre le rôle de la pile d'appels."
          ],
          content: [
            "## Définition",
            "Une fonction récursive est une fonction qui s'appelle elle-même pour résoudre une version plus petite du même problème.",
            "",
            "Toute récursion correcte doit généralement disposer d'un **cas de base** permettant d'arrêter les appels.",
            "",
            "## Exemple : factorielle",
            "```typescript",
            "function factorial(n: number): number {",
            "  if (n <= 1) return 1;",
            "  return n * factorial(n - 1);",
            "}",
            "```",
            "",
            "Pour `factorial(4)` :",
            "",
            "```text",
            "4 × factorial(3)",
            "4 × 3 × factorial(2)",
            "4 × 3 × 2 × factorial(1)",
            "4 × 3 × 2 × 1",
            "24",
            "```",
            "",
            "## La pile d'appels",
            "Chaque appel récursif ajoute généralement un contexte à la pile d'exécution. Une récursion trop profonde peut donc provoquer un dépassement de pile.",
            "",
            "## Récursivité vs itération",
            "Certains problèmes peuvent être résolus avec une boucle plutôt qu'une récursion. Le choix dépend de la clarté, de la structure du problème et des contraintes de performance."
          ],
          examples: [
            "Les parcours récursifs d'arbres sont naturels car chaque sous-arbre peut être traité comme un arbre plus petit."
          ],
          practice: [
            "Écris une fonction récursive calculant la somme des nombres de 1 à n."
          ],
          quiz: [
            {
              question:
                "Quel élément est indispensable pour arrêter correctement une récursion ?",
              options: [
                "Un cas de base",
                "Une boucle infinie",
                "Une variable globale",
                "Une base de données"
              ],
              answer: 0,
              explanation:
                "Le cas de base indique quand arrêter les appels récursifs."
            }
          ]
        }
      ]
    },

    {
      title: "Module 7: Recherche",
      lessons: [
        {
          slug: "recherche-lineaire",
          title: "7.1 Recherche Linéaire",
          duration: "14 min",
          description:
            "Implémente une recherche simple et comprends sa complexité.",
          objectives: [
            "Implémenter une recherche linéaire.",
            "Comprendre sa complexité temporelle.",
            "Identifier les situations où elle est adaptée."
          ],
          content: [
            "## Principe",
            "La recherche linéaire parcourt les éléments les uns après les autres jusqu'à trouver la valeur recherchée.",
            "",
            "```typescript",
            "function linearSearch(arr: number[], target: number): number {",
            "  for (let i = 0; i < arr.length; i++) {",
            "    if (arr[i] === target) return i;",
            "  }",
            "",
            "  return -1;",
            "}",
            "```",
            "",
            "## Complexité",
            "- Meilleur cas : O(1), si l'élément est au début.",
            "- Pire cas : O(n), si l'élément est à la fin ou absent.",
            "- Espace supplémentaire : O(1) pour cette implémentation."
          ],
          examples: [
            "Chercher un prénom dans une petite liste non triée peut parfaitement être réalisé par recherche linéaire."
          ],
          practice: [
            "Modifie la fonction pour qu'elle retourne toutes les positions auxquelles la valeur apparaît."
          ],
          quiz: [
            {
              question:
                "Quelle est la complexité dans le pire cas d'une recherche linéaire ?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              answer: 2,
              explanation:
                "Dans le pire cas, la recherche doit parcourir tous les éléments."
            }
          ]
        },

        {
          slug: "recherche-dichotomique",
          title: "7.2 Recherche Dichotomique (Binary Search)",
          duration: "18 min",
          description:
            "Implémente une recherche logarithmique sur des données triées.",
          objectives: [
            "Comprendre le principe de la recherche dichotomique.",
            "Implémenter Binary Search.",
            "Expliquer pourquoi elle fonctionne en O(log n).",
            "Comprendre pourquoi les données doivent être triées."
          ],
          content: [
            "## Principe",
            "La recherche dichotomique fonctionne sur une collection triée.",
            "",
            "À chaque étape, on compare la cible avec l'élément du milieu.",
            "",
            "- Si la cible est égale au milieu, on a trouvé.",
            "- Si elle est plus petite, on cherche dans la moitié gauche.",
            "- Si elle est plus grande, on cherche dans la moitié droite.",
            "",
            "```typescript",
            "function binarySearch(arr: number[], target: number): number {",
            "  let left = 0;",
            "  let right = arr.length - 1;",
            "",
            "  while (left <= right) {",
            "    const mid = Math.floor((left + right) / 2);",
            "",
            "    if (arr[mid] === target) return mid;",
            "",
            "    if (arr[mid] < target) {",
            "      left = mid + 1;",
            "    } else {",
            "      right = mid - 1;",
            "    }",
            "  }",
            "",
            "  return -1;",
            "}",
            "```",
            "",
            "## Complexité",
            "La recherche dichotomique fonctionne en O(log n) dans le cas général de recherche dans un tableau trié.",
            "",
            "À chaque étape, la zone de recherche est approximativement divisée par deux."
          ],
          examples: [
            "Dans une liste triée de 1 000 000 d'éléments, Binary Search élimine une grande partie des possibilités à chaque comparaison au lieu de parcourir les éléments un par un."
          ],
          practice: [
            "Implémente Binary Search puis teste les cas suivants : élément présent, absent, premier élément et dernier élément."
          ],
          quiz: [
            {
              question:
                "Quelle condition est nécessaire pour appliquer directement une recherche dichotomique classique ?",
              options: [
                "Les données doivent être triées",
                "Les données doivent être aléatoires",
                "Les données doivent contenir uniquement des chaînes",
                "Les données doivent être stockées dans une base SQL"
              ],
              answer: 0,
              explanation:
                "La recherche dichotomique utilise l'ordre des données pour éliminer une moitié de l'espace de recherche à chaque étape."
            }
          ]
        }
      ]
    },

    {
      title: "Module 8: Algorithmes de Tri",
      lessons: [
        {
          slug: "bubble-sort",
          title: "8.1 Bubble Sort : Comprendre un Tri Simple",
          duration: "15 min",
          description:
            "Découvre le tri à bulles et comprends pourquoi les algorithmes simples ne sont pas toujours adaptés aux grandes données.",
          objectives: [
            "Comprendre le principe de Bubble Sort.",
            "Implémenter un tri à bulles.",
            "Analyser sa complexité.",
            "Comprendre son intérêt pédagogique."
          ],
          content: [
            "## Principe",
            "Bubble Sort compare des éléments voisins et les échange lorsqu'ils sont dans le mauvais ordre.",
            "",
            "Après plusieurs passages, les éléments les plus grands se déplacent progressivement vers la fin.",
            "",
            "```typescript",
            "function bubbleSort(arr: number[]): number[] {",
            "  const result = [...arr];",
            "",
            "  for (let i = 0; i < result.length; i++) {",
            "    for (let j = 0; j < result.length - i - 1; j++) {",
            "      if (result[j] > result[j + 1]) {",
            "        [result[j], result[j + 1]] = [result[j + 1], result[j]];",
            "      }",
            "    }",
            "  }",
            "",
            "  return result;",
            "}",
            "```",
            "",
            "## Complexité",
            "La complexité temporelle typique de Bubble Sort est O(n²). Une version optimisée peut détecter l'absence d'échange et terminer plus tôt dans certains cas."
          ],
          examples: [
            "Bubble Sort est utile pour comprendre les mécanismes de comparaison et d'échange, mais il est généralement inadapté aux très grandes collections."
          ],
          practice: [
            "Ajoute une variable permettant d'arrêter l'algorithme lorsqu'un passage ne réalise aucun échange."
          ],
          quiz: [
            {
              question:
                "Quelle est la complexité temporelle typique de Bubble Sort ?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              answer: 3,
              explanation:
                "Bubble Sort effectue généralement plusieurs passages sur la collection, donnant une complexité quadratique."
            }
          ]
        },

        {
          slug: "merge-sort",
          title: "8.2 Merge Sort : Diviser pour Régner",
          duration: "18 min",
          description:
            "Comprends le principe Divide and Conquer avec Merge Sort.",
          objectives: [
            "Comprendre le principe Diviser pour Régner.",
            "Expliquer les étapes de Merge Sort.",
            "Analyser sa complexité temporelle.",
            "Comprendre son coût mémoire."
          ],
          content: [
            "## Diviser pour régner",
            "Merge Sort divise le problème en sous-problèmes plus petits, résout chaque sous-problème puis fusionne les résultats.",
            "",
            "```text",
            "[8, 3, 5, 1]",
            "      ↓",
            "[8, 3] [5, 1]",
            "  ↓      ↓",
            "[8][3] [5][1]",
            "  ↓      ↓",
            "[3,8] [1,5]",
            "      ↓",
            "[1,3,5,8]",
            "```",
            "",
            "## Complexité",
            "Merge Sort possède une complexité temporelle O(n log n).",
            "",
            "La fusion des sous-tableaux nécessite généralement O(n) de travail à chaque niveau de division.",
            "",
            "## Mémoire",
            "Une implémentation classique utilise de la mémoire supplémentaire pour effectuer les fusions."
          ],
          examples: [
            "Merge Sort est intéressant lorsque l'on souhaite une complexité temporelle garantie en O(n log n)."
          ],
          practice: [
            "Implémente une fonction merge puis utilise-la pour construire un Merge Sort complet."
          ],
          quiz: [
            {
              question:
                "Quelle est la complexité temporelle de Merge Sort ?",
              options: ["O(n²)", "O(n log n)", "O(log n)", "O(1)"],
              answer: 1,
              explanation:
                "Merge Sort divise la collection en niveaux logarithmiques et effectue O(n) de travail par niveau."
            }
          ]
        },

        {
          slug: "quick-sort",
          title: "8.3 Quick Sort : Pivot et Partitionnement",
          duration: "18 min",
          description:
            "Comprends Quick Sort, son pivot, son partitionnement et ses différents cas de complexité.",
          objectives: [
            "Comprendre le principe du pivot.",
            "Expliquer le partitionnement.",
            "Connaître les complexités moyenne et pire cas.",
            "Comprendre pourquoi le choix du pivot influence les performances."
          ],
          content: [
            "## Principe",
            "Quick Sort choisit un élément appelé pivot puis partitionne les données autour de celui-ci.",
            "",
            "Les éléments plus petits que le pivot sont placés d'un côté et les plus grands de l'autre, selon la stratégie de partition utilisée.",
            "",
            "Le processus est ensuite appliqué récursivement aux sous-parties.",
            "",
            "## Complexité",
            "- Cas moyen : O(n log n).",
            "- Pire cas : O(n²) avec certaines partitions très déséquilibrées.",
            "",
            "Le pire cas peut notamment apparaître lorsque le pivot produit systématiquement une partition très déséquilibrée.",
            "",
            "## Pourquoi Quick Sort reste populaire",
            "Avec un bon choix de pivot et une bonne implémentation, Quick Sort peut être très performant en pratique et bénéficier d'une bonne localité mémoire."
          ],
          examples: [
            "Choisir systématiquement le premier élément comme pivot sur certaines données déjà triées peut produire des partitions très déséquilibrées."
          ],
          practice: [
            "Implémente une fonction de partition puis utilise-la dans une version récursive de Quick Sort."
          ],
          quiz: [
            {
              question:
                "Quelle affirmation est correcte concernant Quick Sort ?",
              options: [
                "Il est toujours O(n log n)",
                "Son cas moyen est généralement O(n log n), mais son pire cas peut être O(n²)",
                "Il est toujours O(n²)",
                "Il fonctionne uniquement sur des chaînes"
              ],
              answer: 1,
              explanation:
                "Quick Sort est généralement O(n log n) en moyenne, mais certaines partitions peuvent conduire au pire cas O(n²)."
            }
          ]
        }
      ]
    },

    {
      title: "Module 9: Arbres",
      lessons: [
        {
          slug: "arbres-binaires",
          title: "9.1 Arbres Binaires et Nœuds",
          duration: "17 min",
          description:
            "Comprends comment représenter des données hiérarchiques avec des arbres.",
          objectives: [
            "Définir racine, nœud, feuille et sous-arbre.",
            "Comprendre la structure d'un arbre binaire.",
            "Identifier des cas d'utilisation des arbres."
          ],
          content: [
            "## Structure hiérarchique",
            "Un arbre représente une relation hiérarchique entre des éléments.",
            "",
            "```text",
            "        A",
            "       / \\",
            "      B   C",
            "     / \\",
            "    D   E",
            "```",
            "",
            "## Vocabulaire",
            "- **Racine :** premier nœud de l'arbre.",
            "- **Nœud :** élément contenant une donnée.",
            "- **Feuille :** nœud sans enfant.",
            "- **Enfant :** nœud situé sous un autre nœud.",
            "- **Sous-arbre :** partie d'un arbre considérée comme un arbre.",
            "",
            "## Arbre binaire",
            "Dans un arbre binaire, chaque nœud possède au maximum deux enfants.",
            "",
            "Les arbres apparaissent dans :",
            "- systèmes de fichiers ;",
            "- DOM HTML ;",
            "- index ;",
            "- moteurs de recherche ;",
            "- structures de décision."
          ],
          examples: [
            "Le DOM d'une page HTML peut être représenté conceptuellement comme une structure hiérarchique proche d'un arbre."
          ],
          practice: [
            "Dessine un arbre binaire contenant au moins sept nœuds et identifie sa racine et ses feuilles."
          ],
          quiz: [
            {
              question:
                "Combien d'enfants un nœud d'un arbre binaire peut-il avoir au maximum ?",
              options: ["1", "2", "3", "Un nombre illimité"],
              answer: 1,
              explanation:
                "Par définition, un arbre binaire autorise au maximum deux enfants par nœud."
            }
          ]
        },

        {
          slug: "binary-search-tree",
          title: "9.2 Binary Search Tree (BST)",
          duration: "18 min",
          description:
            "Découvre comment organiser les valeurs dans un arbre binaire de recherche.",
          objectives: [
            "Comprendre la propriété d'un BST.",
            "Rechercher une valeur dans un BST.",
            "Comprendre le rôle de la hauteur de l'arbre.",
            "Identifier les conséquences d'un arbre déséquilibré."
          ],
          content: [
            "## Propriété d'un BST",
            "Dans un Binary Search Tree classique, les valeurs du sous-arbre gauche sont inférieures au nœud et celles du sous-arbre droit sont supérieures, selon la convention choisie pour les doublons.",
            "",
            "```text",
            "       8",
            "      / \\",
            "     4   12",
            "    / \\",
            "   2   6",
            "```",
            "",
            "Pour chercher 6 :",
            "1. comparer avec 8 ;",
            "2. aller à gauche car 6 < 8 ;",
            "3. comparer avec 4 ;",
            "4. aller à droite ;",
            "5. trouver 6.",
            "",
            "## Complexité",
            "Dans un arbre équilibré, recherche, insertion et suppression peuvent être O(log n).",
            "",
            "Dans un arbre très déséquilibré, ces opérations peuvent se dégrader jusqu'à O(n).",
            "",
            "C'est pourquoi des arbres équilibrés comme AVL ou Red-Black Tree sont utilisés dans certaines implémentations."
          ],
          examples: [
            "Un BST équilibré ressemble davantage à une structure ramifiée, alors qu'un BST construit dans un ordre défavorable peut ressembler à une liste chaînée."
          ],
          practice: [
            "Construis manuellement un BST à partir des valeurs 8, 4, 12, 2, 6, 10 et 14."
          ],
          quiz: [
            {
              question:
                "Quelle est la complexité typique d'une recherche dans un BST équilibré ?",
              options: ["O(1)", "O(log n)", "O(n²)", "O(n log n)"],
              answer: 1,
              explanation:
                "Dans un BST équilibré, la hauteur est logarithmique, ce qui permet généralement une recherche en O(log n)."
            }
          ]
        },

        {
          slug: "parcours-arbres",
          title: "9.3 Parcours d'Arbres : DFS et BFS",
          duration: "18 min",
          description:
            "Apprends les principales stratégies pour parcourir les nœuds d'un arbre.",
          objectives: [
            "Comprendre Preorder, Inorder et Postorder.",
            "Comprendre le principe du parcours en largeur.",
            "Associer DFS à une pile et BFS à une file."
          ],
          content: [
            "## DFS",
            "Depth-First Search explore une branche en profondeur avant de revenir en arrière.",
            "",
            "Dans un arbre, plusieurs parcours classiques existent :",
            "- **Preorder :** racine, gauche, droite.",
            "- **Inorder :** gauche, racine, droite.",
            "- **Postorder :** gauche, droite, racine.",
            "",
            "## Inorder dans un BST",
            "Un parcours Inorder d'un BST correctement structuré produit les valeurs dans l'ordre croissant.",
            "",
            "## BFS",
            "Breadth-First Search explore l'arbre niveau par niveau.",
            "",
            "BFS utilise généralement une file pour mémoriser les nœuds à traiter.",
            "",
            "```text",
            "        A",
            "       / \\",
            "      B   C",
            "     / \\",
            "    D   E",
            "```",
            "",
            "BFS : A → B → C → D → E."
          ],
          examples: [
            "Un parcours BFS peut être utilisé pour trouver les nœuds les plus proches de la racine dans une structure hiérarchique."
          ],
          practice: [
            "Écris l'ordre Preorder, Inorder et Postorder de l'arbre présenté dans la leçon."
          ],
          quiz: [
            {
              question:
                "Quel parcours d'un BST produit normalement les valeurs dans l'ordre croissant ?",
              options: ["Preorder", "Inorder", "Postorder", "Random"],
              answer: 1,
              explanation:
                "Dans un BST classique, le parcours Inorder visite le sous-arbre gauche, le nœud puis le sous-arbre droit."
            }
          ]
        }
      ]
    },

    {
      title: "Module 10: Graphes",
      lessons: [
        {
          slug: "introduction-graphes",
          title: "10.1 Comprendre les Graphes",
          duration: "18 min",
          description:
            "Découvre comment représenter des relations complexes entre des éléments.",
          objectives: [
            "Comprendre les sommets et les arêtes.",
            "Distinguer graphes orientés et non orientés.",
            "Comprendre les graphes pondérés.",
            "Identifier des applications réelles."
          ],
          content: [
            "## Un graphe",
            "Un graphe est composé de sommets, aussi appelés nœuds, reliés par des arêtes.",
            "",
            "```text",
            "A ----- B",
            "|       |",
            "|       |",
            "C ----- D",
            "```",
            "",
            "## Graphe non orienté",
            "Une connexion entre A et B fonctionne dans les deux sens.",
            "",
            "## Graphe orienté",
            "Une arête possède une direction.",
            "",
            "```text",
            "A ---> B ---> C",
            "```",
            "",
            "## Graphe pondéré",
            "Les arêtes possèdent un coût ou un poids.",
            "",
            "Par exemple, une carte routière peut associer une distance à chaque route.",
            "",
            "## Applications",
            "- réseaux sociaux ;",
            "- cartes et GPS ;",
            "- réseaux informatiques ;",
            "- recommandations ;",
            "- dépendances entre logiciels ;",
            "- relations entre pages web."
          ],
          examples: [
            "Dans un réseau social, chaque utilisateur peut être représenté par un sommet et une relation d'amitié ou de suivi par une arête."
          ],
          practice: [
            "Dessine un graphe représentant cinq villes reliées par différentes routes."
          ],
          quiz: [
            {
              question:
                "Quel élément relie généralement deux sommets dans un graphe ?",
              options: ["Une arête", "Une variable", "Une fonction", "Un index"],
              answer: 0,
              explanation:
                "Une arête représente une relation ou connexion entre des sommets."
            }
          ]
        },

        {
          slug: "dfs-bfs-graphes",
          title: "10.2 DFS et BFS dans les Graphes",
          duration: "18 min",
          description:
            "Implémente les deux principales stratégies de parcours de graphes.",
          objectives: [
            "Comprendre DFS.",
            "Comprendre BFS.",
            "Utiliser une pile ou la récursion pour DFS.",
            "Utiliser une file pour BFS.",
            "Éviter de visiter plusieurs fois le même sommet."
          ],
          content: [
            "## Pourquoi mémoriser les sommets visités ?",
            "Un graphe peut contenir des cycles.",
            "",
            "```text",
            "A -> B -> C",
            "^         |",
            "|---------|",
            "```",
            "",
            "Sans ensemble de sommets visités, un parcours peut tourner indéfiniment.",
            "",
            "## DFS",
            "DFS explore aussi profondément que possible avant de revenir en arrière.",
            "",
            "Il peut être implémenté avec la récursion ou explicitement avec une pile.",
            "",
            "## BFS",
            "BFS explore d'abord les voisins directs, puis les niveaux suivants.",
            "",
            "Il utilise généralement une file.",
            "",
            "Dans un graphe non pondéré, BFS peut notamment permettre de trouver un chemin comportant le plus petit nombre d'arêtes depuis un sommet de départ."
          ],
          examples: [
            "BFS peut être utilisé pour trouver le nombre minimal de connexions entre deux personnes dans un réseau social non pondéré."
          ],
          practice: [
            "Implémente DFS et BFS sur un graphe représenté par une liste d'adjacence."
          ],
          quiz: [
            {
              question:
                "Quelle structure est naturellement associée à BFS ?",
              options: ["Une file", "Une pile", "Un tas", "Une table SQL"],
              answer: 0,
              explanation:
                "BFS utilise généralement une file afin de traiter les sommets dans l'ordre de leur distance au point de départ."
            }
          ]
        }
      ]
    },

    {
      title: "Module 11: Algorithmes sur les Graphes",
      lessons: [
        {
          slug: "plus-court-chemin",
          title: "11.1 Dijkstra et les Plus Courts Chemins",
          duration: "20 min",
          description:
            "Comprends comment rechercher des chemins de coût minimal dans un graphe pondéré.",
          objectives: [
            "Comprendre le problème du plus court chemin.",
            "Expliquer l'idée générale de Dijkstra.",
            "Comprendre le rôle des distances provisoires.",
            "Connaître une limite importante de l'algorithme."
          ],
          content: [
            "## Le problème",
            "Supposons que chaque route d'une carte possède un coût. Nous voulons trouver le chemin de coût minimal entre deux villes.",
            "",
            "## Idée de Dijkstra",
            "Dijkstra maintient une distance connue pour chaque sommet.",
            "",
            "Il sélectionne progressivement le sommet non traité ayant la plus petite distance connue puis tente d'améliorer les distances de ses voisins.",
            "",
            "## Exemple conceptuel",
            "```text",
            "A --2--> B --3--> C",
            " \\       |",
            "  5      1",
            "   \\     |",
            "      -> D",
            "```",
            "",
            "L'algorithme compare les différents chemins possibles et met à jour les distances.",
            "",
            "## Limite importante",
            "La version classique de Dijkstra suppose des poids d'arêtes non négatifs.",
            "",
            "Pour certains graphes comportant des poids négatifs, d'autres algorithmes comme Bellman-Ford peuvent être nécessaires."
          ],
          examples: [
            "Un système de navigation peut utiliser des algorithmes de plus court chemin pour comparer les itinéraires selon une métrique donnée."
          ],
          practice: [
            "Dessine un graphe pondéré de six sommets et calcule manuellement les distances minimales depuis un sommet de départ."
          ],
          quiz: [
            {
              question:
                "Quelle contrainte importante concerne la version classique de Dijkstra ?",
              options: [
                "Les poids des arêtes doivent être non négatifs",
                "Le graphe doit toujours contenir exactement 10 sommets",
                "Le graphe doit être sans arêtes",
                "Toutes les arêtes doivent avoir le même poids"
              ],
              answer: 0,
              explanation:
                "Dijkstra classique n'est pas adapté aux graphes contenant des poids négatifs."
            }
          ]
        }
      ]
    },

    {
      title: "Module 12: Programmation Dynamique",
      lessons: [
        {
          slug: "introduction-programmation-dynamique",
          title: "12.1 Comprendre la Programmation Dynamique",
          duration: "20 min",
          description:
            "Découvre comment résoudre efficacement certains problèmes contenant des sous-problèmes répétitifs.",
          objectives: [
            "Comprendre les sous-problèmes qui se chevauchent.",
            "Comprendre le principe de mémorisation.",
            "Distinguer mémorisation et tabulation.",
            "Réduire la complexité de certains algorithmes récursifs."
          ],
          content: [
            "## Le problème",
            "Une fonction récursive naïve peut recalculer plusieurs fois les mêmes résultats.",
            "",
            "La programmation dynamique cherche à éviter ces calculs inutiles en conservant les résultats déjà obtenus.",
            "",
            "## Mémorisation",
            "La mémorisation consiste à stocker les résultats calculés.",
            "",
            "```typescript",
            "function fibonacci(n: number, memo = new Map<number, number>()): number {",
            "  if (n <= 1) return n;",
            "",
            "  if (memo.has(n)) {",
            "    return memo.get(n)!;",
            "  }",
            "",
            "  const result =",
            "    fibonacci(n - 1, memo) +",
            "    fibonacci(n - 2, memo);",
            "",
            "  memo.set(n, result);",
            "  return result;",
            "}",
            "```",
            "",
            "## Tabulation",
            "La tabulation construit généralement les résultats de manière ascendante dans une structure comme un tableau.",
            "",
            "## Les deux idées fondamentales",
            "La programmation dynamique est particulièrement utile lorsque le problème présente :",
            "- des sous-problèmes qui se chevauchent ;",
            "- une structure permettant de réutiliser leurs solutions."
          ],
          examples: [
            "La suite de Fibonacci est un exemple classique où une approche récursive naïve effectue énormément de calculs répétés."
          ],
          practice: [
            "Implémente Fibonacci avec mémorisation puis avec une approche itérative."
          ],
          quiz: [
            {
              question:
                "Quel problème la mémorisation cherche-t-elle principalement à résoudre ?",
              options: [
                "Éviter de recalculer plusieurs fois les mêmes sous-problèmes",
                "Supprimer toutes les variables",
                "Rendre tous les algorithmes O(1)",
                "Éviter l'utilisation de fonctions"
              ],
              answer: 0,
              explanation:
                "La mémorisation conserve les résultats déjà calculés afin de pouvoir les réutiliser."
            }
          ]
        },

        {
          slug: "fibonacci-complexite",
          title: "12.2 Fibonacci : Comparer Plusieurs Solutions",
          duration: "18 min",
          description:
            "Compare une solution récursive naïve, une solution mémorisée et une solution itérative.",
          objectives: [
            "Comparer plusieurs implémentations d'un même problème.",
            "Comprendre l'impact de la complexité.",
            "Identifier le compromis entre temps et mémoire."
          ],
          content: [
            "## Solution récursive naïve",
            "```typescript",
            "function fib(n: number): number {",
            "  if (n <= 1) return n;",
            "  return fib(n - 1) + fib(n - 2);",
            "}",
            "```",
            "",
            "Cette solution répète énormément de calculs et possède une croissance exponentielle dans sa forme naïve.",
            "",
            "## Solution mémorisée",
            "On stocke les résultats déjà calculés.",
            "",
            "Cela permet de réduire fortement le nombre de calculs, au prix d'une consommation mémoire supplémentaire.",
            "",
            "## Solution itérative",
            "On peut aussi conserver seulement les deux dernières valeurs nécessaires.",
            "",
            "```typescript",
            "function fib(n: number): number {",
            "  if (n <= 1) return n;",
            "",
            "  let prev = 0;",
            "  let current = 1;",
            "",
            "  for (let i = 2; i <= n; i++) {",
            "    [prev, current] = [current, prev + current];",
            "  }",
            "",
            "  return current;",
            "}",
            "```",
            "",
            "Cette approche peut obtenir O(n) en temps et O(1) en mémoire supplémentaire."
          ],
          examples: [
            "Pour une grande valeur de n, la différence entre une récursion naïve et une approche itérative devient rapidement considérable."
          ],
          practice: [
            "Compare les trois approches sur plusieurs valeurs de n et explique les différences de performance."
          ],
          quiz: [
            {
              question:
                "Quelle complexité temporelle peut atteindre une implémentation itérative simple de Fibonacci ?",
              options: ["O(n)", "O(n²)", "O(2^n)", "O(log n) obligatoirement"],
              answer: 0,
              explanation:
                "Une implémentation itérative simple calcule chaque valeur une fois et peut fonctionner en O(n)."
            }
          ]
        }
      ]
    },

    {
      title: "Module 13: Greedy et Divide & Conquer",
      lessons: [
        {
          slug: "algorithmes-gloutons",
          title: "13.1 Algorithmes Gloutons (Greedy)",
          duration: "17 min",
          description:
            "Découvre une stratégie qui choisit la meilleure décision locale à chaque étape.",
          objectives: [
            "Comprendre le principe glouton.",
            "Distinguer choix local et solution globale.",
            "Identifier les problèmes où une stratégie gloutonne peut fonctionner.",
            "Comprendre qu'un choix glouton n'est pas toujours optimal."
          ],
          content: [
            "## Principe",
            "Un algorithme glouton choisit à chaque étape une option qui semble la meilleure localement.",
            "",
            "L'objectif est que la succession de ces choix produise une solution optimale pour le problème considéré.",
            "",
            "## Attention",
            "Une stratégie gloutonne ne garantit pas automatiquement une solution optimale pour tous les problèmes.",
            "",
            "Il faut démontrer que le problème possède les propriétés nécessaires.",
            "",
            "## Exemple conceptuel",
            "Dans certains problèmes de sélection d'activités, on peut choisir l'activité qui termine le plus tôt afin de maximiser le nombre d'activités compatibles.",
            "",
            "## Greedy vs programmation dynamique",
            "- **Greedy :** prend une décision locale et ne revient généralement pas en arrière.",
            "- **Programmation dynamique :** compare et réutilise plusieurs sous-solutions pour construire une solution optimale."
          ],
          examples: [
            "La sélection d'activités est un exemple classique où une stratégie gloutonne bien choisie permet d'obtenir une solution optimale."
          ],
          practice: [
            "Imagine plusieurs activités avec des heures de début et de fin. Cherche une stratégie permettant d'en sélectionner le plus grand nombre sans chevauchement."
          ],
          quiz: [
            {
              question:
                "Une stratégie gloutonne fait principalement quoi ?",
              options: [
                "Elle choisit une option locale à chaque étape",
                "Elle teste toujours toutes les possibilités",
                "Elle trie obligatoirement les données",
                "Elle utilise uniquement la récursion"
              ],
              answer: 0,
              explanation:
                "Un algorithme glouton prend des décisions locales selon une règle donnée."
            }
          ]
        },

        {
          slug: "divide-and-conquer",
          title: "13.2 Divide and Conquer",
          duration: "17 min",
          description:
            "Apprends une méthode générale consistant à diviser un problème, résoudre les sous-problèmes puis combiner leurs résultats.",
          objectives: [
            "Comprendre les trois étapes de Divide and Conquer.",
            "Identifier des algorithmes utilisant cette stratégie.",
            "Comprendre son lien avec la récursivité."
          ],
          content: [
            "## Les trois étapes",
            "1. **Divide :** diviser le problème en sous-problèmes.",
            "2. **Conquer :** résoudre les sous-problèmes.",
            "3. **Combine :** combiner les résultats.",
            "",
            "## Exemples",
            "- Merge Sort.",
            "- Quick Sort.",
            "- Recherche dichotomique.",
            "",
            "## Pourquoi cette stratégie est utile",
            "Un problème complexe peut devenir plus facile à résoudre lorsqu'il est transformé en plusieurs problèmes plus petits.",
            "",
            "La récursivité est souvent utilisée pour implémenter cette approche."
          ],
          examples: [
            "Binary Search divise l'espace de recherche en deux à chaque étape et continue uniquement dans la partie pertinente."
          ],
          practice: [
            "Explique en trois étapes comment Merge Sort applique Divide and Conquer."
          ],
          quiz: [
            {
              question:
                "Quelles sont les trois étapes classiques de Divide and Conquer ?",
              options: [
                "Divide, Conquer, Combine",
                "Search, Delete, Insert",
                "Push, Pop, Peek",
                "Start, Stop, Reset"
              ],
              answer: 0,
              explanation:
                "Divide and Conquer consiste à diviser, résoudre les sous-problèmes puis combiner leurs résultats."
            }
          ]
        }
      ]
    },

    {
      title: "Module 14: Choisir la Bonne Structure",
      lessons: [
        {
          slug: "choisir-structure-donnees",
          title: "14.1 Quelle Structure de Données Utiliser ?",
          duration: "18 min",
          description:
            "Apprends à choisir une structure selon les opérations dont ton application a réellement besoin.",
          objectives: [
            "Comparer tableaux, listes, piles, files et tables de hachage.",
            "Relier une structure à un besoin métier.",
            "Comprendre qu'il n'existe pas une structure universellement meilleure."
          ],
          content: [
            "## Il n'existe pas de structure parfaite",
            "Une structure de données est choisie en fonction des opérations importantes pour le problème.",
            "",
            "| Structure | Utilisation typique |",
            "|---|---|",
            "| Tableau | Accès par index et données ordonnées |",
            "| Liste chaînée | Modifications structurelles avec références adaptées |",
            "| Pile | Historique, annulation, DFS |",
            "| File | Tâches et traitement dans l'ordre |",
            "| Hash Map | Recherche par clé |",
            "| Arbre | Données hiérarchiques et recherches structurées |",
            "| Graphe | Relations complexes entre objets |",
            "",
            "## Exemple",
            "Si ton problème consiste à récupérer rapidement un utilisateur à partir de son identifiant, une structure clé-valeur est souvent plus naturelle qu'une recherche linéaire dans un tableau.",
            "",
            "Si tu dois traiter des tâches dans l'ordre d'arrivée, une file est plus adaptée.",
            "",
            "## La vraie question",
            "Ne demande pas : « Quelle structure est la meilleure ? »",
            "",
            "Demande plutôt :",
            "**« Quelles opérations dois-je effectuer le plus souvent et quelles performances sont nécessaires ? »**"
          ],
          examples: [
            "Un cache peut utiliser une table de hachage pour retrouver rapidement une donnée par clé, tandis qu'un système de traitement de tâches peut utiliser une file."
          ],
          practice: [
            "Pour cinq problèmes différents, choisis une structure de données et justifie ton choix."
          ],
          quiz: [
            {
              question:
                "Quel critère doit principalement guider le choix d'une structure de données ?",
              options: [
                "Les opérations nécessaires et leurs contraintes de performance",
                "Le nom le plus court",
                "La couleur du langage",
                "Le nombre de fichiers du projet"
              ],
              answer: 0,
              explanation:
                "La bonne structure dépend des opérations à réaliser, de leurs coûts et des contraintes du problème."
            }
          ]
        }
      ]
    },

    {
      title: "Module 15: Projet Final",
      lessons: [
        {
          slug: "projet-final-algorithmes",
          title: "15.1 Projet Final : Construire une Boîte à Outils Algorithmique",
          duration: "25 min",
          description:
            "Mets en pratique les concepts du cours en construisant une petite bibliothèque d'algorithmes.",
          objectives: [
            "Implémenter plusieurs structures de données.",
            "Implémenter des algorithmes de recherche et de tri.",
            "Analyser la complexité des solutions.",
            "Justifier le choix d'une structure de données.",
            "Comparer plusieurs approches."
          ],
          content: [
            "## Le projet",
            "Construis une petite bibliothèque TypeScript regroupant plusieurs algorithmes et structures étudiés pendant le cours.",
            "",
            "## Partie 1 : Recherche",
            "Implémente :",
            "- recherche linéaire ;",
            "- recherche dichotomique.",
            "",
            "Documente la complexité de chaque méthode.",
            "",
            "## Partie 2 : Tri",
            "Implémente au moins :",
            "- Bubble Sort ;",
            "- Merge Sort ;",
            "- Quick Sort.",
            "",
            "Compare leurs performances sur différentes tailles de données.",
            "",
            "## Partie 3 : Structures",
            "Implémente au moins deux structures parmi :",
            "- Stack ;",
            "- Queue ;",
            "- Linked List ;",
            "- Hash Map simplifiée ;",
            "- Binary Search Tree.",
            "",
            "## Partie 4 : Analyse",
            "Pour chaque algorithme, indique :",
            "- complexité temporelle ;",
            "- complexité spatiale ;",
            "- meilleur cas si pertinent ;",
            "- pire cas si pertinent ;",
            "- cas d'utilisation.",
            "",
            "## Partie 5 : Comparaison",
            "Crée un tableau comparant tes solutions.",
            "",
            "| Algorithme | Temps | Mémoire | Usage |",
            "|---|---|---|---|",
            "| Linear Search | O(n) | O(1) | Recherche simple |",
            "| Binary Search | O(log n) | O(1) | Données triées |",
            "| Merge Sort | O(n log n) | dépend de l'implémentation | Tri |",
            "| Quick Sort | O(n log n) moyen | dépend de l'implémentation | Tri |",
            "",
            "## Livrable",
            "Le projet doit contenir :",
            "1. le code ;",
            "2. quelques tests ;",
            "3. l'analyse Big-O ;",
            "4. un document expliquant les choix techniques."
          ],
          examples: [
            "Un bon projet final peut prendre une liste de 100 000 nombres, comparer plusieurs algorithmes de tri et documenter les résultats sans confondre mesure expérimentale et complexité théorique."
          ],
          practice: [
            "Construis la bibliothèque puis ajoute au moins cinq tests pour vérifier les cas normaux, les données vides, les doublons et les valeurs absentes."
          ],
          quiz: [
            {
              question:
                "Quel élément doit faire partie de l'analyse d'un algorithme ?",
              options: [
                "Sa complexité temporelle et, lorsque pertinent, sa complexité spatiale",
                "Uniquement son nom",
                "Uniquement sa longueur en lignes",
                "La couleur de son éditeur"
              ],
              answer: 0,
              explanation:
                "L'analyse algorithmique étudie notamment le coût en temps et en mémoire."
            }
          ]
        }
      ]
    }
  ]
};

export const algorithmsExamQuestions: ExamQuestion[] = [
  {
    question: "Qu'est-ce qu'un algorithme ?",
    options: [
      "Une suite d'étapes permettant de résoudre un problème",
      "Uniquement un programme JavaScript",
      "Une base de données",
      "Un système d'exploitation"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle complexité correspond généralement à l'accès à un élément d'un tableau par index ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 0
  },
  {
    question:
      "Quelle est la complexité typique d'un parcours complet d'un tableau ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2
  },
  {
    question:
      "Quelle complexité correspond généralement à deux boucles imbriquées parcourant n éléments ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 3
  },
  {
    question:
      "Quelle structure suit le principe LIFO ?",
    options: [
      "Pile (Stack)",
      "File (Queue)",
      "Graphe",
      "Table de hachage"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle structure suit le principe FIFO ?",
    options: [
      "Pile",
      "File",
      "Arbre binaire",
      "BST"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle opération est généralement O(1) dans un tableau ?",
    options: [
      "Accès par index",
      "Recherche d'une valeur inconnue",
      "Insertion au début",
      "Tri complet"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle est la complexité typique d'une recherche linéaire dans le pire cas ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2
  },
  {
    question:
      "Quelle condition est nécessaire pour utiliser une recherche dichotomique classique ?",
    options: [
      "Les données doivent être triées",
      "Les données doivent être aléatoires",
      "Les données doivent contenir uniquement des chaînes",
      "Les données doivent être stockées dans une base SQL"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle est la complexité de la recherche dichotomique ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 1
  },
  {
    question:
      "Quelle est la complexité temporelle typique de Bubble Sort ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 3
  },
  {
    question:
      "Quelle est la complexité temporelle de Merge Sort ?",
    options: ["O(n²)", "O(n log n)", "O(log n)", "O(1)"],
    correctAnswer: 1
  },
  {
    question:
      "Quelle affirmation est correcte concernant Quick Sort ?",
    options: [
      "Il est toujours O(n log n)",
      "Son cas moyen est généralement O(n log n), mais son pire cas peut être O(n²)",
      "Il est toujours O(n²)",
      "Il est toujours O(1)"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quel principe est utilisé par Merge Sort ?",
    options: [
      "Divide and Conquer",
      "LIFO",
      "FIFO",
      "Hashing"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle structure est particulièrement adaptée à une recherche par clé ?",
    options: [
      "Table de hachage",
      "Pile",
      "File",
      "Tableau non trié uniquement"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle est la complexité moyenne typique d'une recherche dans une bonne table de hachage ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 0
  },
  {
    question:
      "Que se passe-t-il lorsqu'une fonction récursive ne possède pas de cas de base approprié ?",
    options: [
      "Elle peut continuer ses appels jusqu'à provoquer un dépassement de pile",
      "Elle devient automatiquement O(1)",
      "Elle s'arrête immédiatement",
      "Elle devient une table de hachage"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel élément est essentiel dans une récursion correcte ?",
    options: [
      "Un cas de base",
      "Une base de données",
      "Une boucle for obligatoire",
      "Une variable globale"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Dans un arbre binaire, combien d'enfants un nœud peut-il avoir au maximum ?",
    options: ["1", "2", "3", "Un nombre illimité"],
    correctAnswer: 1
  },
  {
    question:
      "Dans un BST classique, où trouve-t-on généralement les valeurs inférieures au nœud ?",
    options: [
      "Dans le sous-arbre gauche",
      "Dans le sous-arbre droit",
      "Uniquement dans la racine",
      "Dans une file"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle est la complexité typique d'une recherche dans un BST équilibré ?",
    options: ["O(1)", "O(log n)", "O(n²)", "O(n log n)"],
    correctAnswer: 1
  },
  {
    question:
      "Quel parcours d'un BST produit généralement les valeurs dans l'ordre croissant ?",
    options: [
      "Preorder",
      "Inorder",
      "Postorder",
      "BFS uniquement"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Quelle structure est généralement utilisée pour implémenter BFS ?",
    options: [
      "Une file",
      "Une pile",
      "Un tableau trié obligatoire",
      "Un BST"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle structure est naturellement associée à DFS ?",
    options: [
      "Une pile ou la récursion",
      "Une file uniquement",
      "Une table SQL",
      "Une table de hachage uniquement"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi doit-on généralement mémoriser les sommets visités dans un graphe ?",
    options: [
      "Pour éviter de traiter plusieurs fois les mêmes sommets et les cycles infinis",
      "Pour trier automatiquement le graphe",
      "Pour transformer le graphe en tableau",
      "Pour supprimer toutes les arêtes"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle contrainte concerne la version classique de Dijkstra ?",
    options: [
      "Les poids des arêtes doivent être non négatifs",
      "Le graphe doit contenir exactement 5 sommets",
      "Toutes les arêtes doivent avoir le même poids",
      "Le graphe doit être vide"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quel est l'objectif principal de la programmation dynamique ?",
    options: [
      "Réutiliser les résultats de sous-problèmes afin d'éviter des calculs répétés",
      "Supprimer toute utilisation de mémoire",
      "Rendre tous les algorithmes O(1)",
      "Éviter les fonctions"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle approche est généralement utilisée par un algorithme glouton ?",
    options: [
      "Faire un choix local à chaque étape selon une règle donnée",
      "Tester toutes les permutations obligatoirement",
      "Toujours utiliser une table de hachage",
      "Toujours utiliser la récursivité"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelles sont les trois étapes de Divide and Conquer ?",
    options: [
      "Divide, Conquer, Combine",
      "Push, Pop, Peek",
      "Search, Insert, Delete",
      "Start, Stop, Reset"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Quelle structure est généralement adaptée à un système de traitement des tâches dans l'ordre d'arrivée ?",
    options: [
      "Une file",
      "Une pile",
      "Un arbre binaire",
      "Un BST"
    ],
    correctAnswer: 0
  },
  {
    question:
      "Pourquoi n'existe-t-il pas une structure de données universellement meilleure que toutes les autres ?",
    options: [
      "Parce que le choix dépend des opérations nécessaires et des contraintes de performance",
      "Parce que toutes les structures sont identiques",
      "Parce que les structures ne servent qu'à l'affichage",
      "Parce que Big-O ne concerne que les bases de données"
    ],
    correctAnswer: 0
  }
];