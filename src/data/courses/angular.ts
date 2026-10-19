import type { CourseDetail, ExamQuestion } from "../coursesData";

export const angularCourse: CourseDetail = {
  slug: "angular",
  categorySlug: "web-dev",
  title: "Angular Framework & Architecture Entreprise",
  description: "Maîtrisez le framework Angular de Google : TypeScript, architecture basée sur les composants, services, injection de dépendances, RxJS et routing.",
  level: "Intermédiaire",
  icon: "🅰️",
  modules: [
    {
      title: "Module 1: Introduction à Angular & TypeScript",
      lessons: [
        {
          slug: "angular-cli-et-architecture",
          title: "1.1 Architecture Angular & Décorateurs @Component",
          duration: "18 min",
          description: "Comprendre les principes fondamentaux d'Angular, le rôle du CLI et la structure d'un composant TypeScript.",
          objectives: [
            "Utiliser la CLI Angular (ng new, ng generate component).",
            "Comprendre les blocs d'un composant Angular (@Component).",
            "Utiliser les composants Standalone modernes."
          ],
          content: [
            "## Présentation d'Angular",
            "Angular est un framework de développement front-end complet développé par Google. Il impose une architecture solide basée sur TypeScript.",
            "",
            "## Anatomie d'un Composant Angular Standalone",
            "```typescript\nimport { Component } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@Component({\n  selector: 'app-user-card',\n  standalone: true,\n  imports: [CommonModule],\n  template: `\n    <div class=\"card\">\n      <h2>{{ username }}</h2>\n      <p>Statut : {{ isActive ? 'Actif' : 'Inactif' }}</p>\n    </div>\n  `,\n  styles: [`\n    .card { padding: 16px; border: 1px solid #ccc; }\n  `]\n})\nexport class UserCardComponent {\n  username = 'Sarah';\n  isActive = true;\n}\n```"
          ],
          examples: [
            "```bash\nng generate component components/header --standalone\n```"
          ],
          practice: [
            "Générez un composant standalone HeaderComponent et intégrez-le dans l'application principale."
          ],
          quiz: [
            {
              question: "Quel décorateur TypeScript transforme une classe en composant Angular ?",
              options: ["@Injectable()", "@Component()", "@Directive()", "@NgModule()"],
              answer: 1,
              explanation: "@Component() définit les métadonnées du composant (template, styles, sélecteur)."
            }
          ]
        },
        {
          slug: "templates-et-data-binding",
          title: "1.2 Data Binding & Directives Structurelles",
          duration: "20 min",
          description: "Maitriser le Data Binding (interpolation, property binding, event binding) et la nouvelle syntaxe Control Flow (@if, @for).",
          objectives: [
            "Utiliser l'interpolation {{ }} et le property binding [property].",
            "Écouter les événements avec (event).",
            "Maitriser le nouveau Control Flow d'Angular 17+ (@if, @for)."
          ],
          content: [
            "## Les 4 formes de Data Binding",
            "1. **Interpolation :** `{{ title }}` (du composant vers le HTML)",
            "2. **Property Binding :** `[src]=\"imageUrl\"` (du composant vers l'attribut HTML)",
            "3. **Event Binding :** `(click)=\"onClick()\"` (du HTML vers la méthode)",
            "4. **Two-way Binding :** `[(ngModel)]=\"searchQuery\"` (dans les deux sens)",
            "",
            "## Nouveau Control Flow Angular (@if, @for)",
            "```html\n@if (isLoggedIn) {\n  <button (click)=\"logout()\">Déconnexion</button>\n} @else {\n  <button (click)=\"login()\">Connexion</button>\n}\n\n@for (product of products; track product.id) {\n  <div class=\"product-item\">{{ product.name }}</div>\n} @empty {\n  <p>Aucun produit disponible.</p>\n}\n```"
          ],
          examples: [
            "```html\n<input [(ngModel)]=\"username\" placeholder=\"Entrez votre nom\" />\n<p>Bonjour {{ username }}</p>\n```"
          ],
          practice: [
            "Affichez une liste d'articles filtrée en utilisant le bloc @for avec une clause track."
          ],
          quiz: [
            {
              question: "Quelle syntaxe est utilisée pour l'Event Binding en Angular ?",
              options: ['[click]="onClick()"', '(click)="onClick()"', '[(click)]="onClick()"', 'on-click="onClick()"'],
              answer: 1,
              explanation: "Les parenthèses () sont réservées à la capture des événements."
            }
          ]
        }
      ]
    },
    {
      title: "Module 2: Services & Injection de Dépendances",
      lessons: [
        {
          slug: "services-et-injection-dependances",
          title: "2.1 Services & Dependency Injection (DI)",
          duration: "20 min",
          description: "Partager la logique métier et l'état de l'application grâce aux services Angular et à l'injection de dépendances.",
          objectives: [
            "Créer un service avec @Injectable().",
            "Injecter un service via le constructeur ou la fonction inject().",
            "Séparer la logique métier de l'affichage UI."
          ],
          content: [
            "## Services Angular",
            "Les services concentrent la logique métier, la communication avec les APIs et la gestion des données.",
            "",
            "```typescript\nimport { Injectable, inject } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Injectable({\n  providedIn: 'root' // Singleton disponible dans toute l'application\n})\nexport class UserService {\n  private http = inject(HttpClient);\n\n  getUsers() {\n    return this.http.get<any[]>('https://api.example.com/users');\n  }\n}\n```"
          ],
          examples: [
            "```typescript\n// Injection dans un composant\nexport class UserListComponent {\n  private userService = inject(UserService);\n  users$ = this.userService.getUsers();\n}\n```"
          ],
          practice: [
            "Créez un AuthService capable de vérifier l'état d'authentification de l'utilisateur."
          ],
          quiz: [
            {
              question: "Que signifie providedIn: 'root' dans l'option d'un @Injectable() ?",
              options: [
                "Le service est créé uniquement dans le composant racine",
                "Le service est un Singleton global accessible dans toute l'application",
                "Le service ne fonctionne qu'en mode serveur",
                "Le service ne peut pas utiliser HttpClient"
              ],
              answer: 1,
              explanation: "providedIn: 'root' enregistre le service au niveau de l'injecteur racine sous forme d'instance unique."
            }
          ]
        }
      ]
    }
  ]
};

export const angularExamQuestions: ExamQuestion[] = [
  {
    question: "Quel est le rôle du fichier angular.json ?",
    options: [
      "Stocker les mots de passe",
      "Contenir la configuration du projet et du build Angular CLI",
      "Gérer les requêtes HTTP",
      "Remplacer le fichier index.html"
    ],
    correctAnswer: 1
  },
  {
    question: "Quel décorateur est utilisé pour déclarer un service injectable ?",
    options: ["@Service()", "@Injectable()", "@Inject()", "@Provider()"],
    correctAnswer: 1
  },
  {
    question: "Quelle bibliothèque est intégrée par défaut dans Angular pour la programmation réactive asynchrone ?",
    options: ["Redux", "RxJS", "Axios", "Lodash"],
    correctAnswer: 1
  }
];
