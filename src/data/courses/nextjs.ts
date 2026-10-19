import type { CourseDetail, ExamQuestion } from "../coursesData";

export const nextjsCourse: CourseDetail = {
  slug: "nextjs",
  categorySlug: "web-dev",
  title: "Next.js 14+ & React Server Components",
  description: "Créez des applications web ultra-rapides et optimisées pour le SEO avec Next.js App Router : Server Components, Server Actions, Rendering (SSR/SSG/ISR) et déploiement Vercel.",
  level: "Avancé",
  icon: "▲",
  modules: [
    {
      title: "Module 1: Le Nouveau App Router",
      lessons: [
        {
          slug: "app-router-et-routing",
          title: "1.1 App Router & Conventions de Fichiers",
          duration: "18 min",
          description: "Comprendre le routage basé sur les dossiers avec App Router (page.tsx, layout.tsx, loading.tsx, error.tsx).",
          objectives: [
            "Structure des routes basées sur les dossiers.",
            "Utiliser les Layouts imbriqués.",
            "Créer des états de chargement automatiques avec loading.tsx."
          ],
          content: [
            "## Routage par Fichiers dans Next.js App Router",
            "Chaque dossier dans le répertoire 'app' représente un segment d'URL. Le fichier 'page.tsx' rend le segment accessible publiquement.",
            "",
            "## Conventions de fichiers spéciales",
            "- **page.tsx :** UI unique d'une route.",
            "- **layout.tsx :** UI partagée entre plusieurs pages (conserve son état et ne subit pas de re-rendu).",
            "- **loading.tsx :** UI de chargement instantanée basée sur React Suspense.",
            "- **error.tsx :** Boundary d'erreur pour intercepter les exceptions d'exécution.",
            "",
            "```tsx\n// app/dashboard/layout.tsx\nexport default function DashboardLayout({\n  children\n}: {\n  children: React.ReactNode\n}) {\n  return (\n    <div className=\"flex min-h-screen\">\n      <Sidebar />\n      <main className=\"flex-1 p-6\">{children}</main>\n    </div>\n  );\n}\n```"
          ],
          examples: [
            "```tsx\n// app/blog/[slug]/page.tsx\nexport default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;\n  return <h1>Article : {slug}</h1>;\n}\n```"
          ],
          practice: [
            "Créez une route dynamique app/learn/[slug]/page.tsx."
          ],
          quiz: [
            {
              question: "Quel fichier définit l'interface publique d'une route dans l'App Router de Next.js ?",
              options: ["index.tsx", "page.tsx", "route.ts", "layout.tsx"],
              answer: 1,
              explanation: "page.tsx est le fichier requis pour rendre un segment de route accessible sur le web."
            }
          ]
        },
        {
          slug: "react-server-components-rsc",
          title: "1.2 React Server Components (RSC) vs Client Components",
          duration: "22 min",
          description: "Maîtriser les composants serveur exécutés au build/requête et basculer en 'use client' quand nécessaire.",
          objectives: [
            "Comprendre les avantages des Server Components (0 bundle JS client, accès direct DB).",
            "Identifier quand utiliser la directive 'use client'.",
            "Maîtriser le passage de données du serveur vers le client."
          ],
          content: [
            "## Server Components par défaut",
            "Dans l'App Router de Next.js, TOUS les composants sont des React Server Components par défaut.",
            "Ils s'exécutent uniquement sur le serveur, n'envoient AUCUN code JS au navigateur et peuvent accéder aux bases de données en toute sécurité !",
            "",
            "## Quand ajouter 'use client' ?",
            "Ajoutez 'use client' au tout début de votre fichier lorsque vous utilisez :",
            "- Des hooks d'état ou d'effet (useState, useEffect, useContext).",
            "- Des écouteurs d'événements (onClick, onChange).",
            "- Des APIs du navigateur (localStorage, window).",
            "",
            "```tsx\n'use client';\nimport { useState } from 'react';\n\nexport function InteractiveButton() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>Clicks: {count}</button>;\n}\n```"
          ],
          examples: [
            "```tsx\n// Server Component fetch de données direct\nexport default async function NewsPage() {\n  const news = await db.news.findMany();\n  return <div>{news.map(n => <p key={n.id}>{n.title}</p>)}</div>;\n}\n```"
          ],
          practice: [
            "Séparez un composant complexe en un Server Component parent (fetch de données) et un Client Component enfant (bouton interactif)."
          ],
          quiz: [
            {
              question: "Par défaut dans Next.js App Router, quel type de composants créez-vous ?",
              options: [
                "Des Client Components",
                "Des React Server Components (RSC)",
                "Des composants Redux",
                "Des Web Components"
              ],
              answer: 1,
              explanation: "Next.js traite tous les composants du dossier app comme des Server Components par défaut."
            }
          ]
        }
      ]
    },
    {
      title: "Module 2: Server Actions & Mutations",
      lessons: [
        {
          slug: "server-actions-et-formulaires",
          title: "2.1 Server Actions & Mutations de Données",
          duration: "20 min",
          description: "Effectuer des mutations de données sécurisées côté serveur directement depuis les formulaires.",
          objectives: [
            "Déclarer une Server Action avec 'use server'.",
            "Traiter la soumission de formulaires directement sur le serveur.",
            "Revalider le cache avec revalidatePath()."
          ],
          content: [
            "## Qu'est-ce qu'une Server Action ?",
            "Les Server Actions sont des fonctions asynchrones exécutées sur le serveur. Elles éliminent le besoin de créer manuellement des routes API REST pour les formulaires.",
            "",
            "```tsx\n// app/actions.ts\n'use server';\nimport { revalidatePath } from 'next/cache';\n\nexport async function addComment(formData: FormData) {\n  const comment = formData.get('comment');\n  await db.comment.create({ data: { text: String(comment) } });\n  revalidatePath('/blog');\n}\n```"
          ],
          examples: [
            "```tsx\n<form action={addComment}>\n  <input name=\"comment\" required />\n  <button type=\"submit\">Publier</button>\n</form>\n```"
          ],
          practice: [
            "Créez une Server Action pour ajouter un produit à une base de données et revalidez le cache de la page."
          ],
          quiz: [
            {
              question: "Quelle fonction Next.js permet de purger et recharger le cache d'une route spécifique après une mutation ?",
              options: ["refreshRoute()", "revalidatePath()", "clearCache()", "reloadPage()"],
              answer: 1,
              explanation: "revalidatePath('/votre-route') invalide le cache et met à jour l'affichage avec les nouvelles données."
            }
          ]
        }
      ]
    }
  ]
};

export const nextjsExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle directive doit figurer en haut d'un fichier pour activer les Hooks React dans Next.js App Router ?",
    options: ["'use server'", "'use client'", "'use react'", "'use browser'"],
    correctAnswer: 1
  },
  {
    question: "Quel composant natif de Next.js permet d'optimiser le chargement des images (format WebP, responsive, lazy loading) ?",
    options: ["<img />", "<Image /> de 'next/image'", "<Pic />", "<MediaImage />"],
    correctAnswer: 1
  },
  {
    question: "Quelle méthode permet de définir des balises SEO (title, description, OpenGraph) dynamiquement ?",
    options: ["useHead()", "generateMetadata()", "export const seo = {}", "setDocumentTitle()"],
    correctAnswer: 1
  }
];
