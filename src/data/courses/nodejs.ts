import type { CourseDetail, ExamQuestion } from "../coursesData";

export const nodejsCourse: CourseDetail = {
  slug: "nodejs",
  categorySlug: "web-dev",
  title: "Node.js & Express API Backend",
  description: "Développez des serveurs backend performants et sécurisés avec Node.js, Express, la gestion d'APIs RESTful, les middlewares, l'authentification JWT et la connexion aux bases de données.",
  level: "Intermédiaire",
  icon: "🟢",
  modules: [
    {
      title: "Module 1: Architecture Node.js & Serveur Express",
      lessons: [
        {
          slug: "event-loop-et-non-bloquant",
          title: "1.1 Event Loop & I/O Non-Bloquant",
          duration: "18 min",
          description: "Comprendre l'architecture monofil (single-threaded) et le modèle asynchrone guidé par les événements de Node.js.",
          objectives: [
            "Comprendre le fonctionnement de l'Event Loop.",
            "Distinguer le code synchrone bloquant et asynchrone non-bloquant.",
            "Utiliser les modules natifs (fs, path, http)."
          ],
          content: [
            "## Pourquoi Node.js ?",
            "Node.js est un environnement d'exécution JavaScript côté serveur basé sur le moteur V8 de Chrome. Il utilise un modèle d'E/S non bloquant et orienté événements, idéal pour créer des applications réseau scalables.",
            "",
            "## Lecture de fichier asynchrone vs synchrone",
            "```javascript\nimport fs from 'node:fs/promises';\n\n// Asynchrone non-bloquant (Recommandé !)\nasync function readConfigFile() {\n  try {\n    const data = await fs.readFile('./config.json', 'utf-8');\n    console.log(data);\n  } catch (err) {\n    console.error('Erreur lecture :', err);\n  }\n}\n```"
          ],
          examples: [
            "```javascript\nimport path from 'node:path';\nconst filePath = path.join(__dirname, 'uploads', 'image.png');\n```"
          ],
          practice: [
            "Créez un script Node.js qui lit un fichier JSON et affiche le nombre d'enregistrements."
          ],
          quiz: [
            {
              question: "Quel moteur JavaScript réutilise Node.js pour exécuter du code côté serveur ?",
              options: ["SpiderMonkey", "V8 (de Google)", "JavaScriptCore", "Chakra"],
              answer: 1,
              explanation: "Node.js s'appuie sur le moteur ultra-rapide V8 développé par Google pour Chrome."
            }
          ]
        },
        {
          slug: "express-routing-et-requetes",
          title: "1.2 APIs RESTful avec Express.js",
          duration: "22 min",
          description: "Créer un serveur Web avec Express.js, gérer les verbes HTTP (GET, POST, PUT, DELETE) et parser le corps JSON.",
          objectives: [
            "Initialiser un serveur Express.",
            "Définir des routes d'API REST (req.params, req.query, req.body).",
            "Renvoyer des réponses JSON avec les bons codes de statut HTTP (200, 201, 400, 404, 500)."
          ],
          content: [
            "## Créer un serveur Express moderne",
            "```typescript\nimport express, { Request, Response } from 'express';\n\nconst app = express();\napp.use(express.json()); // Middleware pour parser le JSON\n\ninterface Item { id: number; name: string; }\nconst items: Item[] = [{ id: 1, name: 'Ordinateur' }];\n\n// GET /api/items\napp.get('/api/items', (req: Request, res: Response) => {\n  res.status(200).json(items);\n});\n\n// POST /api/items\napp.post('/api/items', (req: Request, res: Response) => {\n  const { name } = req.body;\n  if (!name) {\n    return res.status(400).json({ error: 'Le champ name est requis' });\n  }\n  const newItem = { id: Date.now(), name };\n  items.push(newItem);\n  res.status(201).json(newItem);\n});\n\napp.listen(3001, () => console.log('Serveur lancé sur http://localhost:3001'));\n```"
          ],
          examples: [
            "```typescript\napp.get('/api/users/:id', (req, res) => {\n  const userId = req.params.id;\n  res.json({ id: userId });\n});\n```"
          ],
          practice: [
            "Créez une API de gestion de contacts avec des routes CRUD complètes."
          ],
          quiz: [
            {
              question: "Quel code de statut HTTP indique la création réussie d'une ressource ?",
              options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"],
              answer: 1,
              explanation: "201 Created est le code HTTP standard pour confirmer qu'une ressource a été créée (ex: suite à un POST)."
            }
          ]
        }
      ]
    },
    {
      title: "Module 2: Middlewares & Sécurité JWT",
      lessons: [
        {
          slug: "authentification-jwt-et-hachage",
          title: "2.1 Authentification JWT & Sécurité Passwords",
          duration: "25 min",
          description: "Sécuriser vos APIs backend avec le hachage bcrypt et les jetons JSON Web Tokens (JWT).",
          objectives: [
            "Hacher les mots de passe avec bcrypt avant stockage.",
            "Générer un jeton JWT lors de la connexion.",
            "Créer un middleware d'authentification pour protéger les routes d'API."
          ],
          content: [
            "## Flux d'Authentification JWT",
            "1. L'utilisateur envoie son email/mot de passe à `/api/login`.",
            "2. Le serveur vérifie le mot de passe haché avec `bcrypt.compare()`.",
            "3. Le serveur signe un jeton JWT avec `jwt.sign()` et le renvoie au client.",
            "4. Pour les requêtes protégées, le client envoie le header `Authorization: Bearer <token>`.",
            "",
            "```typescript\nimport jwt from 'jsonwebtoken';\nimport bcrypt from 'bcrypt';\n\n// Middleware de protection\nexport function authenticateToken(req: any, res: any, next: any) {\n  const authHeader = req.headers['authorization'];\n  const token = authHeader && authHeader.split(' ')[1];\n  if (!token) return res.sendStatus(401);\n\n  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {\n    if (err) return res.sendStatus(403);\n    req.user = user;\n    next();\n  });\n}\n```"
          ],
          examples: [
            "```typescript\nconst hashedPassword = await bcrypt.hash('MonPassword123', 10);\n```"
          ],
          practice: [
            "Implémentez une route protégée `/api/profile` accessible uniquement avec un token JWT valide."
          ],
          quiz: [
            {
              question: "Dans quel en-tête (Header) HTTP envoie-t-on habituellement le jeton JWT lors d'une requête d'API ?",
              options: ["Content-Type", "Authorization", "Accept", "Cookie-Token"],
              answer: 1,
              explanation: "Le format standard est 'Authorization: Bearer <token>'."
            }
          ]
        }
      ]
    }
  ]
};

export const nodejsExamQuestions: ExamQuestion[] = [
  {
    question: "Quel module natif Node.js est utilisé pour manipuler les chemins de fichiers de façon cross-platform ?",
    options: ["fs", "path", "url", "os"],
    correctAnswer: 1
  },
  {
    question: "Quel middleware Express est indispensable pour lire req.body lors d'un POST JSON ?",
    options: ["express.static()", "express.json()", "express.router()", "cors()"],
    correctAnswer: 1
  },
  {
    question: "Pourquoi ne faut-il JAMAIS stocker les mots de passe en texte clair dans une base de données ?",
    options: [
      "Parce que cela prend trop de place",
      "Pour des raisons de sécurité critiques en cas de fuite de la base de données",
      "Parce que Node.js ne le permet pas",
      "Pour accélérer les recherches"
    ],
    correctAnswer: 1
  }
];
