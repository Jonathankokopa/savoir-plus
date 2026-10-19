import type { CourseDetail, ExamQuestion } from "../coursesData";

export const azureCourse: CourseDetail = {
  slug: "azure",
  categorySlug: "cloud-computing",
  title: "Microsoft Azure",
  description: "Découvrez les services Cloud de Microsoft : Azure VMs, App Service, Entra ID et Azure DevOps.",
  level: "Intermédiaire",
  icon: "🔷",
  modules: [
    {
      title: "Module 1: Les Piliers d'Azure",
      lessons: [
        {
          slug: "azure-vms-et-entra-id",
          title: "1.1 App Service & Microsoft Entra ID (Azure AD)",
          duration: "18 min",
          description: "Gérez les identités d'entreprise et hébergez des applications Web.",
          objectives: [
            "Configurer les identités avec Microsoft Entra ID.",
            "Héberger des applications Web avec Azure App Service.",
            "Créer des réseaux virtuels Azure Virtual Network (VNet)."
          ],
          content: [
            "## Services Majeurs Azure",
            "- **Microsoft Entra ID :** Service cloud de gestion des identités et des accès (anciennement Azure Active Directory).",
            "- **App Service :** PaaS d'hébergement d'applications web et APIs.",
            "- **Azure DevOps :** Suite intégrée CI/CD et gestion de projets Agile."
          ],
          examples: [
            "Déploiement continu depuis un dépôt GitHub vers Azure App Service."
          ],
          practice: [
            "Configurez une application Web Azure App Service via le Portail Azure."
          ],
          quiz: [
            {
              question: "Quel est le nouveau nom de l'annuaire d'identités cloud Azure Active Directory (Azure AD) ?",
              options: ["Microsoft Entra ID", "Azure Identity Pro", "Microsoft Cloud Auth", "Active Cloud"],
              answer: 0,
              explanation: "Microsoft a rebaptisé Azure AD en Microsoft Entra ID."
            }
          ]
        }
      ]
    }
  ]
};

export const azureExamQuestions: ExamQuestion[] = [
  {
    question: "Quel service Azure PaaS permet d'héberger des applications web sans gérer les serveurs sous-jacents ?",
    options: ["Azure App Service", "Azure Virtual Machines", "Azure Disk", "Azure ExpressRoute"],
    correctAnswer: 0
  }
];
