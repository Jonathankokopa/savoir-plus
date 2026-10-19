import type { CourseDetail, ExamQuestion } from "../coursesData";

export const reactCourse: CourseDetail = {
  slug: "react",
  categorySlug: "web-dev",
  title: "React.js Masterclass",
  description: "Construisez des applications front-end interactives et réactives avec React 18+ : JSX, composants réutilisables, hooks (useState, useEffect, useContext) et gestion d'état.",
  level: "Intermédiaire",
  icon: "⚛️",
  modules: [
    {
      title: "Module 1: Introduction à React & JSX",
      lessons: [
        {
          slug: "react-et-jsx-fundamentals",
          title: "1.1 Composants Fonctionnels & Syntaxe JSX",
          duration: "15 min",
          description: "Comprendre le Virtual DOM, la syntaxe JSX et la création de composants fonctionnels React.",
          objectives: [
            "Comprendre pourquoi React utilise le Virtual DOM.",
            "Écrire du JSX (JavaScript XML) valide.",
            "Créer et exporter des composants fonctionnels."
          ],
          content: [
            "## Qu'est-ce que React ?",
            "React est une bibliothèque JavaScript open-source développée par Meta pour créer des interfaces utilisateurs réactives basées sur des composants.",
            "",
            "## Qu'est-ce que JSX ?",
            "JSX est une extension de syntaxe pour JavaScript qui ressemble à du HTML mais possède toute la puissance de JS.",
            "",
            "```tsx\nexport function WelcomeCard({ name }: { name: string }) {\n  return (\n    <div className=\"p-4 bg-white rounded-lg shadow\">\n      <h2 className=\"text-xl font-bold text-slate-800\">Bienvenue, {name} !</h2>\n      <p className=\"text-slate-600\">Prêt à apprendre React ?</p>\n    </div>\n  );\n}\n```"
          ],
          examples: [
            "```tsx\nconst element = <h1 className=\"title\">Hello React</h1>;\n```"
          ],
          practice: [
            "Créez un composant Card avec une image, un titre et une description transmis dynamiquement."
          ],
          quiz: [
            {
              question: "Quelle propriété CSS remplace 'class' en JSX ?",
              options: ["class", "className", "classList", "cssClass"],
              answer: 1,
              explanation: "En JSX, 'className' est utilisé car 'class' est un mot réservé en JavaScript."
            }
          ]
        },
        {
          slug: "props-et-composition",
          title: "1.2 Props & Composition de Composants",
          duration: "18 min",
          description: "Transmettre des données entre composants parents et enfants via les props et la propriété children.",
          objectives: [
            "Passer et déstructurer des props.",
            "Utiliser la prop spéciale children pour le composant wrapper.",
            "Rendre des listes d'éléments avec la propriété 'key'."
          ],
          content: [
            "## Les Props (Propriétés)",
            "Les props sont les arguments transmis aux composants React. Elles sont en lecture seule (immutables).",
            "",
            "```tsx\ntype ButtonProps = {\n  label: string;\n  onClick: () => void;\n  variant?: 'primary' | 'secondary';\n};\n\nexport function Button({ label, onClick, variant = 'primary' }: ButtonProps) {\n  return (\n    <button\n      onClick={onClick}\n      className={variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200'}\n    >\n      {label}\n    </button>\n  );\n}\n```"
          ],
          examples: [
            "```tsx\n{items.map(item => (\n  <li key={item.id}>{item.name}</li>\n))}\n```"
          ],
          practice: [
            "Créez une liste de produits réutilisant le même composant ProductCard via map()."
          ],
          quiz: [
            {
              question: "Pourquoi est-il obligatoire de fournir une 'key' unique lors du rendu d'une liste dans React ?",
              options: [
                "Pour styliser chaque élément",
                "Pour aider React à identifier quels éléments ont changé, été ajoutés ou supprimés",
                "Pour la sécurité des requêtes",
                "C'est optionnel, ce n'est pas nécessaire"
              ],
              answer: 1,
              explanation: "La clé unique permet au réconciliateur React d'optimiser les mises à jour du DOM virtuel."
            }
          ]
        }
      ]
    },
    {
      title: "Module 2: Gestion de l'État & Événements",
      lessons: [
        {
          slug: "state-avec-usestate",
          title: "2.1 L'État Local avec useState",
          duration: "20 min",
          description: "Gérer l'état dynamique de vos composants interactifs avec le hook useState.",
          objectives: [
            "Déclarer une variable d'état et sa fonction de mise à jour avec useState.",
            "Mettre à jour l'état de manière immuable pour les objets et tableaux.",
            "Comprendre le déclenchement des re-rendus React."
          ],
          content: [
            "## Le Hook useState",
            "```tsx\nimport { useState } from 'react';\n\nexport function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(prev => prev + 1)}>\n      Compteur : {count}\n    </button>\n  );\n}\n```",
            "",
            "## Règle d'immutabilité pour les tableaux et objets",
            "```tsx\n// ❌ Mauvais : mutation directe\n// todos.push(newTodo);\n\n// ✅ Bon : création d'un nouveau tableau\nsetTodos(prevTodos => [...prevTodos, newTodo]);\n```"
          ],
          examples: [
            "```tsx\nconst [user, setUser] = useState({ name: 'Alex', age: 20 });\nsetUser(prev => ({ ...prev, age: 21 }));\n```"
          ],
          practice: [
            "Créez un composant TodoList complet capable d'ajouter et de supprimer des tâches."
          ],
          quiz: [
            {
              question: "Que se passe-t-il lorsque vous modifiez directement une variable d'état sans utiliser le setter useState ?",
              options: [
                "React affiche une erreur",
                "React ne déclenchera pas le re-rendu du composant",
                "La page se recharge",
                "La variable est supprimée"
              ],
              answer: 1,
              explanation: "Seule l'utilisation de la fonction setter (ex: setCount) informe React qu'un re-rendu est nécessaire."
            }
          ]
        },
        {
          slug: "formulaires-et-evenements",
          title: "2.2 Gestion des Formulaires (Controlled Components)",
          duration: "18 min",
          description: "Lier des champs de saisie HTML à l'état React avec le pattern Controlled Component.",
          objectives: [
            "Créer des formulaires contrôlés par l'état React.",
            "Gérer la soumission du formulaire sans rechargement de page."
          ],
          content: [
            "## Controlled Components",
            "```tsx\nexport function LoginForm() {\n  const [email, setEmail] = useState('');\n\n  const handleSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    console.log('Connexion avec :', email);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"votre@email.com\"\n      />\n      <button type=\"submit\">Se connecter</button>\n    </form>\n  );\n}\n```"
          ],
          examples: [
            "```tsx\n<input type=\"checkbox\" checked={isAgreed} onChange={e => setIsAgreed(e.target.checked)} />\n```"
          ],
          practice: [
            "Créez un formulaire d'inscription avec validation du mot de passe."
          ],
          quiz: [
            {
              question: "Dans un composant contrôlé, quelle propriété d'un champ <input> est liée à la variable d'état React ?",
              options: ["defaultValue", "value", "content", "text"],
              answer: 1,
              explanation: "La prop value force la valeur affichée dans l'input à refléter l'état React."
            }
          ]
        }
      ]
    },
    {
      title: "Module 3: Effets de Bord & Data Fetching",
      lessons: [
        {
          slug: "effect-hook-useeffect",
          title: "3.1 Le Hook useEffect & Appels API",
          duration: "22 min",
          description: "Gérer les effets de bord (data fetching, abonnements, chronomètres) avec useEffect.",
          objectives: [
            "Comprendre le cycle de vie des composants avec useEffect.",
            "Gérer le tableau de dépendances (dependency array).",
            "Implémenter une fonction de nettoyage (cleanup function)."
          ],
          content: [
            "## Le Hook useEffect",
            "```tsx\nimport { useState, useEffect } from 'react';\n\nexport function UserProfile({ userId }: { userId: string }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    let isMounted = true;\n    setLoading(true);\n\n    fetch(`/api/users/${userId}`)\n      .then(res => res.json())\n      .then(data => {\n        if (isMounted) {\n          setUser(data);\n          setLoading(false);\n        }\n      });\n\n    return () => {\n      isMounted = false; // Fonction de nettoyage\n    };\n  }, [userId]); // S'exécute quand userId change\n\n  if (loading) return <p>Chargement...</p>;\n  return <div>{user?.name}</div>;\n}\n```"
          ],
          examples: [
            "```tsx\nuseEffect(() => {\n  console.log('Composant monté !');\n}, []); // Tableau vide = s'exécute 1 seule fois au montage\n```"
          ],
          practice: [
            "Récupérez et affichez les données d'une API lors du premier affichage d'un composant."
          ],
          quiz: [
            {
              question: "Que signifie passer un tableau vide [] comme deuxième argument de useEffect ?",
              options: [
                "L'effet s'exécute à chaque re-rendu",
                "L'effet ne s'exécute qu'une seule fois après le premier rendu (montage)",
                "L'effet est désactivé",
                "L'effet s'exécute en boucle infinie"
              ],
              answer: 1,
              explanation: "Un tableau vide [] indique à React de n'exécuter l'effet qu'une seule fois au montage du composant."
            }
          ]
        }
      ]
    },
    {
      title: "Module 4: Gestion d'État Globale & Performance",
      lessons: [
        {
          slug: "context-api-usecontext",
          title: "4.1 Context API & useContext",
          duration: "20 min",
          description: "Partager l'état globalement entre des composants distants sans prop drilling.",
          objectives: [
            "Créer un Context avec createContext.",
            "Fournir les valeurs avec Context.Provider.",
            "Consommer le contexte avec le hook useContext."
          ],
          content: [
            "## Utilisation de la Context API",
            "```tsx\nimport { createContext, useContext, useState } from 'react';\n\ntype Theme = 'light' | 'dark';\nconst ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | null>(null);\n\nexport function ThemeProvider({ children }: { children: React.ReactNode }) {\n  const [theme, setTheme] = useState<Theme>('light');\n  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport function useTheme() {\n  const context = useContext(ThemeContext);\n  if (!context) throw new Error('useTheme doit être utilisé dans ThemeProvider');\n  return context;\n}\n```"
          ],
          examples: [
            "```tsx\nconst { theme, toggleTheme } = useTheme();\n```"
          ],
          practice: [
            "Implémentez un AuthProvider qui gère l'état connecté/déconnecté de l'utilisateur."
          ],
          quiz: [
            {
              question: "Quel problème résout principalement la Context API de React ?",
              options: [
                "Le rechargement de la page",
                "Le prop drilling (passer des props à travers de nombreux niveaux de composants)",
                "La compression du code",
                "Les erreurs de syntaxe"
              ],
              answer: 1,
              explanation: "Le Context permet de partager un état directement avec n'importe quel composant de l'arbre sans passer par des props intermédiaires."
            }
          ]
        }
      ]
    }
  ]
};

export const reactExamQuestions: ExamQuestion[] = [
  {
    question: "Qu'est-ce que JSX dans React ?",
    options: [
      "Un nouveau langage de programmation",
      "Une extension de syntaxe JavaScript ressemblant à du HTML",
      "Un moteur de base de données",
      "Un serveur web"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel Hook permet de gérer l'état local dans un composant fonctionnel ?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 1
  },
  {
    question: "Quelle est la règle d'or pour mettre à jour l'état dans React ?",
    options: [
      "Muté directement l'objet d'état",
      "Traiter l'état comme immuable et utiliser la fonction setter",
      "Recharger la page HTML",
      "Supprimer le composant"
    ],
    correctAnswer: 1
  },
  {
    question: "À quoi sert le tableau de dépendances dans useEffect ?",
    options: [
      "À trier les données",
      "À contrôler quand l'effet doit être réexécuté selon les changements de variables",
      "À stocker le CSS",
      "À créer des routes"
    ],
    correctAnswer: 1
  },
  {
    question: "Comment passe-t-on des données du composant parent au composant enfant ?",
    options: ["Via le LocalStorage", "Via les Props", "Via le DOM HTML", "Via les cookies"],
    correctAnswer: 1
  }
];
