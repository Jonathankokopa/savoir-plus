import type { CourseDetail, ExamQuestion } from "../coursesData";

export const gitGithubCourse: CourseDetail = {
  slug: "git-github",
  categorySlug: "software-engineering",
  title: "Git & GitHub pour Développeurs",
  description: "Maîtrisez le contrôle de version : commits, branches, merges, rebase, Pull Requests et résolution de conflits.",
  level: "Débutant",
  icon: "🐙",
  modules: [
    {
      title: "Module 1: Workflow Git Moderne",
      lessons: [
        {
          slug: "branches-merging-et-conflics",
          title: "1.1 Gestion des Branches, Rebase & PR",
          duration: "16 min",
          description: "Travaillez en équipe sans écraser le code de vos collègues.",
          objectives: [
            "Créer et basculer entre des branches avec `git switch` / `git checkout`.",
            "Comprendre la différence entre `git merge` et `git rebase`.",
            "Résoudre méthodiquement les conflits de fusion."
          ],
          content: [
            "## Commandes Clés Git",
            "- `git checkout -b feature/login` : Créer et basculer sur une branche.",
            "- `git add .` && `git commit -m 'feat: add login page'` : Valider des modifications.",
            "- `git push origin feature/login` : Publier sur GitHub.",
            "- `git rebase main` : Réappliquer ses commits au-dessus de la branche principale."
          ],
          examples: [
            "Workflow GitHub Flow : Branche `main` protégée -> Branche de feature -> Pull Request -> Review -> Merge."
          ],
          practice: [
            "Créez une branche de fonctionnalité, effectuez un commit atomique et simulez la création d'une PR."
          ],
          quiz: [
            {
              question: "Quelle commande Git permet d'intégrer les modifications d'une autre branche en appliquant ses commits un par un au-dessus du dernier commit ?",
              options: ["git rebase", "git reset --hard", "git clone", "git stash"],
              answer: 0,
              explanation: "git rebase rejoue les commits sur la nouvelle base pour conserver un historique linéaire."
            }
          ]
        }
      ]
    }
  ]
};

export const gitGithubExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle commande permet de mettre temporairement de côté des modifications non validées pour nettoyer son espace de travail ?",
    options: ["git stash", "git drop", "git clear", "git Pause"],
    correctAnswer: 0
  }
];
