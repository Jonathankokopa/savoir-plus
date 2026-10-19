export interface CourseItem {
  slug: string;
  title: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  lessons: number;
  icon: string;
  badge?: string;
}

export interface CategoryPath {
  slug: string;
  title: string;
  emoji: string;
  iconName: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  badge: string;
  courses: CourseItem[];
}

export const CATEGORIES_DATA: Record<string, CategoryPath> = {
  "web-dev": {
    slug: "web-dev",
    title: "Développement Web",
    emoji: "🌐",
    iconName: "Globe",
    description:
      "Apprends à créer des sites et applications web modernes : HTML, CSS, JavaScript, React, Angular, Vue, Node.js et Next.js.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    badge: "Incontournable",
    courses: [
      {
        slug: "html",
        title: "HTML 5",
        description:
          "Apprends à structurer des pages web modernes avec HTML5.",
        level: "Débutant",
        lessons: 10,
        icon: "📄",
      },
      {
        slug: "css",
        title: "CSS Moderne",
        description:
          "Maîtrise CSS, Flexbox, Grid, responsive design et animations.",
        level: "Débutant",
        lessons: 12,
        icon: "🎨",
      },
      {
        slug: "javascript",
        title: "JavaScript",
        description:
          "Apprends JavaScript moderne, ES6+, DOM, APIs et programmation asynchrone.",
        level: "Intermédiaire",
        lessons: 18,
        icon: "🟨",
      },
      {
        slug: "react",
        title: "React.js",
        description:
          "Construis des interfaces modernes avec React, Hooks et composants.",
        level: "Intermédiaire",
        lessons: 15,
        icon: "⚛️",
      },
      {
        slug: "angular",
        title: "Angular",
        description:
          "Développe des applications web robustes avec Angular.",
        level: "Intermédiaire",
        lessons: 15,
        icon: "🔴",
      },
      {
        slug: "vue",
        title: "Vue.js 3",
        description:
          "Découvre Vue 3, Composition API et les bonnes pratiques modernes.",
        level: "Intermédiaire",
        lessons: 14,
        icon: "🟢",
      },
      {
        slug: "nodejs",
        title: "Node.js",
        description:
          "Crée des APIs et applications backend avec Node.js.",
        level: "Intermédiaire",
        lessons: 16,
        icon: "🟩",
      },
      {
        slug: "nextjs",
        title: "Next.js",
        description:
          "Construis des applications web modernes avec Next.js et React.",
        level: "Avancé",
        lessons: 16,
        icon: "▲",
      },
    ],
  },

  "mobile-dev": {
    slug: "mobile-dev",
    title: "Développement Mobile",
    emoji: "📱",
    iconName: "Smartphone",
    description:
      "Apprends à créer des applications mobiles modernes pour Android et iOS.",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    badge: "Mobile",
    courses: [
      {
        slug: "react-native",
        title: "React Native",
        description:
          "Crée des applications mobiles multiplateformes avec React Native.",
        level: "Intermédiaire",
        lessons: 15,
        icon: "⚛️",
      },
      {
        slug: "flutter",
        title: "Flutter",
        description:
          "Développe des applications mobiles multiplateformes avec Flutter.",
        level: "Intermédiaire",
        lessons: 15,
        icon: "🦋",
      },
      {
        slug: "swift",
        title: "Swift & iOS",
        description:
          "Apprends les bases du développement iOS avec Swift.",
        level: "Intermédiaire",
        lessons: 14,
        icon: "🍎",
      },
      {
        slug: "kotlin",
        title: "Kotlin & Android",
        description:
          "Développe des applications Android modernes avec Kotlin.",
        level: "Intermédiaire",
        lessons: 15,
        icon: "🤖",
      },
    ],
  },

  "cyber-security": {
    slug: "cyber-security",
    title: "Cybersécurité & Hacking Éthique",
    emoji: "🛡️",
    iconName: "Shield",
    description:
      "Comprends les menaces informatiques, protège les systèmes et découvre le hacking éthique.",
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700",
    badge: "Sécurité",
    courses: [
      {
        slug: "securite-numerique",
        title: "Sécurité Numérique",
        description:
          "Découvre les fondamentaux de la cybersécurité et de la protection des données.",
        level: "Débutant",
        lessons: 12,
        icon: "🔐",
      },
      {
        slug: "web-security",
        title: "Sécurité Web",
        description:
          "Comprends les principales vulnérabilités des applications web.",
        level: "Intermédiaire",
        lessons: 14,
        icon: "🌐",
      },
      {
        slug: "ethical-hacking",
        title: "Hacking Éthique",
        description:
          "Découvre les méthodes utilisées pour tester légalement la sécurité des systèmes.",
        level: "Avancé",
        lessons: 16,
        icon: "🕵️",
      },
      {
        slug: "cryptography",
        title: "Cryptographie",
        description:
          "Comprends le chiffrement, les clés, les signatures et les certificats.",
        level: "Avancé",
        lessons: 12,
        icon: "🔑",
      },
    ],
  },

  "ai-ml": {
    slug: "ai-ml",
    title: "IA & Machine Learning",
    emoji: "🤖",
    iconName: "Bot",
    description:
      "Découvre l'intelligence artificielle, le prompt engineering, le machine learning et le deep learning.",
    color: "from-violet-500 to-fuchsia-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
    badge: "Tendance 2026",
    courses: [
      {
        slug: "introduction-ia",
        title: "Introduction à l'IA",
        description:
          "Comprends les concepts fondamentaux de l'intelligence artificielle.",
        level: "Débutant",
        lessons: 10,
        icon: "🤖",
      },
      {
        slug: "prompt-engineering",
        title: "Prompt Engineering",
        description:
          "Apprends à créer des prompts efficaces pour les modèles d'IA.",
        level: "Débutant",
        lessons: 10,
        icon: "💬",
      },
      {
        slug: "machine-learning",
        title: "Machine Learning",
        description:
          "Découvre les principaux algorithmes et méthodes du machine learning.",
        level: "Intermédiaire",
        lessons: 16,
        icon: "🧠",
      },
      {
        slug: "deep-learning",
        title: "Deep Learning",
        description:
          "Explore les réseaux neuronaux et les techniques modernes de deep learning.",
        level: "Avancé",
        lessons: 16,
        icon: "🧬",
      },
    ],
  },

  "latest-tech": {
    slug: "latest-tech",
    title: "Nouvelles Technologies",
    emoji: "🚀",
    iconName: "Sparkles",
    description:
      "Découvre les technologies émergentes qui transforment le monde numérique.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-700",
    badge: "Innovation",
    courses: [
      {
        slug: "blockchain",
        title: "Blockchain",
        description:
          "Comprends les principes de la blockchain, des crypto-actifs et des smart contracts.",
        level: "Intermédiaire",
        lessons: 12,
        icon: "⛓️",
      },
      {
        slug: "iot",
        title: "Internet des Objets",
        description:
          "Découvre les objets connectés, capteurs et architectures IoT.",
        level: "Intermédiaire",
        lessons: 10,
        icon: "📡",
      },
      {
        slug: "quantum",
        title: "Informatique Quantique",
        description:
          "Découvre les principes fondamentaux de l'informatique quantique.",
        level: "Avancé",
        lessons: 10,
        icon: "⚛️",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    emoji: "📈",
    iconName: "TrendingUp",
    description:
      "Développe ta présence en ligne grâce au SEO, au contenu et aux réseaux sociaux.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    textColor: "text-pink-700",
    badge: "Marketing",
    courses: [
      {
        slug: "seo",
        title: "SEO",
        description:
          "Apprends à améliorer la visibilité d'un site dans les moteurs de recherche.",
        level: "Débutant",
        lessons: 12,
        icon: "🔎",
      },
      {
        slug: "content-marketing",
        title: "Content Marketing",
        description:
          "Crée une stratégie de contenu efficace pour attirer et fidéliser ton audience.",
        level: "Intermédiaire",
        lessons: 10,
        icon: "✍️",
      },
      {
        slug: "social-media",
        title: "Social Media Marketing",
        description:
          "Développe une stratégie efficace sur les réseaux sociaux.",
        level: "Débutant",
        lessons: 10,
        icon: "📱",
      },
    ],
  },

  "soft-skills": {
    slug: "soft-skills",
    title: "Soft Skills & Développement Personnel",
    emoji: "🧠",
    iconName: "Brain",
    description:
      "Développe tes compétences humaines : communication, gestion du temps, résolution de problèmes, esprit critique et intelligence émotionnelle.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    badge: "Human Skills",
    courses: [
      {
        slug: "communication-professionnelle",
        title: "Communication Professionnelle",
        description:
          "Améliore ta communication à l'oral et à l'écrit dans un contexte professionnel.",
        level: "Débutant",
        lessons: 10,
        icon: "🗣️",
      },
      {
        slug: "time-management",
        title: "Gestion du Temps",
        description:
          "Apprends à organiser ton temps et à mieux gérer tes priorités.",
        level: "Débutant",
        lessons: 8,
        icon: "⏱️",
      },
      {
        slug: "problem-solving",
        title: "Résolution de Problèmes",
        description:
          "Développe ton esprit critique et apprends à résoudre efficacement les problèmes.",
        level: "Intermédiaire",
        lessons: 10,
        icon: "🧩",
      },
    ],
  },

  "cloud-computing": {
    slug: "cloud-computing",
    title: "Cloud Computing",
    emoji: "☁️",
    iconName: "Cloud",
    description:
      "Apprends les fondamentaux du cloud et découvre AWS, Google Cloud et Azure.",
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    textColor: "text-sky-700",
    badge: "Infrastructures",
    courses: [
      {
        slug: "aws",
        title: "AWS",
        description:
          "Découvre les principaux services et concepts d'Amazon Web Services.",
        level: "Intermédiaire",
        lessons: 15,
        icon: "☁️",
      },
      {
        slug: "gcp",
        title: "Google Cloud",
        description:
          "Apprends les fondamentaux de Google Cloud Platform.",
        level: "Intermédiaire",
        lessons: 14,
        icon: "🌐",
      },
      {
        slug: "azure",
        title: "Microsoft Azure",
        description:
          "Découvre les services cloud de Microsoft Azure.",
        level: "Intermédiaire",
        lessons: 14,
        icon: "🔷",
      },
    ],
  },

  reseaux: {
    slug: "reseaux",
    title: "Réseaux & Infrastructures",
    emoji: "🔌",
    iconName: "Network",
    description:
      "Comprends les réseaux informatiques, le routage, la commutation et l'administration réseau.",
    color: "from-indigo-500 to-blue-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-700",
    badge: "Réseau",
    courses: [
      {
        slug: "fondamentaux-reseaux",
        title: "Fondamentaux des Réseaux",
        description:
          "Comprends les bases des réseaux informatiques et des protocoles.",
        level: "Débutant",
        lessons: 12,
        icon: "🌐",
      },
      {
        slug: "routage-commutation",
        title: "Routage & Commutation",
        description:
          "Découvre les concepts de routage, switching et VLAN.",
        level: "Intermédiaire",
        lessons: 14,
        icon: "🔀",
      },
      {
        slug: "admin-reseau",
        title: "Administration Réseau",
        description:
          "Apprends à administrer et maintenir une infrastructure réseau.",
        level: "Intermédiaire",
        lessons: 14,
        icon: "🖧",
      },
    ],
  },

  "data-science": {
    slug: "data-science",
    title: "Data Science & Big Data",
    emoji: "📊",
    iconName: "BarChart",
    description:
      "Analyse les données, crée des visualisations et découvre les technologies Big Data.",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    badge: "Data",
    courses: [
      {
        slug: "python-data",
        title: "Python pour la Data",
        description:
          "Utilise Python pour analyser et manipuler les données.",
        level: "Intermédiaire",
        lessons: 14,
        icon: "🐍",
      },
      {
        slug: "data-vis",
        title: "Data Visualization",
        description:
          "Apprends à transformer les données en visualisations claires et utiles.",
        level: "Intermédiaire",
        lessons: 10,
        icon: "📊",
      },
      {
        slug: "big-data",
        title: "Big Data",
        description:
          "Découvre les architectures et technologies utilisées pour traiter de grandes quantités de données.",
        level: "Avancé",
        lessons: 12,
        icon: "🗄️",
      },
    ],
  },

  "software-engineering": {
    slug: "software-engineering",
    title: "Génie Logiciel & DevOps",
    emoji: "⚙️",
    iconName: "GitBranch",
    description:
      "Apprends les bonnes pratiques du développement logiciel, Git, Docker, CI/CD et architecture.",
    color: "from-slate-600 to-gray-800",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    textColor: "text-slate-700",
    badge: "DevOps",
    courses: [
      {
        slug: "git-github",
        title: "Git & GitHub",
        description:
          "Maîtrise Git et GitHub pour gérer efficacement tes projets.",
        level: "Débutant",
        lessons: 10,
        icon: "🐙",
      },
      {
        slug: "docker",
        title: "Docker",
        description:
          "Apprends à conteneuriser et déployer tes applications.",
        level: "Intermédiaire",
        lessons: 12,
        icon: "🐳",
      },
      {
        slug: "cicd",
        title: "CI/CD",
        description:
          "Automatise les tests, builds et déploiements de tes applications.",
        level: "Intermédiaire",
        lessons: 10,
        icon: "🔄",
      },
      {
        slug: "software-architecture",
        title: "Architecture Logicielle",
        description:
          "Découvre les principes d'architecture et les bonnes pratiques de conception.",
        level: "Avancé",
        lessons: 12,
        icon: "🏗️",
      },
    ],
  },

  databases: {
    slug: "databases",
    title: "Bases de Données (SQL & NoSQL)",
    emoji: "🗄️",
    iconName: "Database",
    description:
      "Apprends à concevoir, interroger et administrer des bases de données SQL et NoSQL.",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700",
    badge: "Données",
    courses: [
      {
        slug: "sql-fundamentals",
        title: "Fondamentaux SQL",
        description:
          "Apprends à manipuler les bases de données avec SQL.",
        level: "Débutant",
        lessons: 12,
        icon: "🗃️",
      },
      {
        slug: "postgresql",
        title: "PostgreSQL",
        description:
          "Découvre PostgreSQL et ses fonctionnalités avancées.",
        level: "Intermédiaire",
        lessons: 12,
        icon: "🐘",
      },
      {
        slug: "mongodb",
        title: "MongoDB",
        description:
          "Apprends les fondamentaux des bases de données NoSQL avec MongoDB.",
        level: "Intermédiaire",
        lessons: 12,
        icon: "🍃",
      },
    ],
  },

  bureautique: {
    slug: "bureautique",
    title: "Bureautique & Productivité",
    emoji: "💻",
    iconName: "FileSpreadsheet",
    description:
      "Maîtrise les outils numériques essentiels pour travailler, apprendre et gagner en productivité.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    badge: "Bureautique",
    courses: [
      {
        slug: "utiliser-ordinateur",
        title: "Bien Utiliser un Ordinateur",
        description:
          "Apprends les bases essentielles pour utiliser efficacement un ordinateur.",
        level: "Débutant",
        lessons: 10,
        icon: "💻",
      },
      {
        slug: "excel",
        title: "Excel",
        description:
          "Apprends à utiliser Excel pour organiser, calculer et analyser des données.",
        level: "Débutant",
        lessons: 14,
        icon: "📊",
      },
      {
        slug: "outils-numeriques",
        title: "Outils Numériques",
        description:
          "Découvre les outils numériques essentiels pour travailler et collaborer.",
        level: "Débutant",
        lessons: 10,
        icon: "🧰",
      },
    ],
  },

  management: {
    slug: "management",
    title: "Management & Leadership",
    emoji: "🤝",
    iconName: "Users",
    description:
      "Développe tes compétences en management, leadership et gestion d'équipe.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    badge: "Management",
    courses: [
      {
        slug: "agile-scrum",
        title: "Agile & Scrum",
        description:
          "Comprends les principes Agile et la méthode Scrum.",
        level: "Intermédiaire",
        lessons: 10,
        icon: "🔄",
      },
      {
        slug: "leadership",
        title: "Leadership",
        description:
          "Développe ton leadership et apprends à guider efficacement une équipe.",
        level: "Intermédiaire",
        lessons: 10,
        icon: "👑",
      },
    ],
  },

  "computer-science": {
    slug: "computer-science",
    title: "Computer Science (Science Informatique)",
    emoji: "🖥️",
    iconName: "Cpu",
    description:
      "Comprends les fondements de l'informatique, des algorithmes aux systèmes et à Internet.",
    color: "from-gray-700 to-slate-900",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    textColor: "text-gray-700",
    badge: "Fondamentaux",
    courses: [
      {
        slug: "algorithms",
        title: "Algorithmes & Structures de Données",
        description:
          "Comprends les principaux algorithmes et structures de données.",
        level: "Intermédiaire",
        lessons: 16,
        icon: "🧮",
      },
      {
        slug: "comprendre-internet",
        title: "Comprendre Internet",
        description:
          "Découvre comment fonctionne Internet, du navigateur aux serveurs.",
        level: "Débutant",
        lessons: 10,
        icon: "🌐",
      },
    ],
  },

  finance: {
    slug: "finance",
    title: "Finance Personnelle",
    emoji: "💰",
    iconName: "Coins",
    description:
      "Apprends à mieux gérer ton argent, ton budget, ton épargne et tes crédits.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    badge: "Finance",
    courses: [
      {
        slug: "comprendre-son-argent",
        title: "Comprendre son Argent",
        description:
          "Comprends les bases de la gestion financière personnelle.",
        level: "Débutant",
        lessons: 8,
        icon: "💰",
      },
      {
        slug: "faire-un-budget",
        title: "Faire un Budget",
        description:
          "Apprends à construire et suivre un budget personnel.",
        level: "Débutant",
        lessons: 8,
        icon: "🧾",
      },
      {
        slug: "epargner-intelligemment",
        title: "Épargner Intelligemment",
        description:
          "Découvre les principes fondamentaux de l'épargne.",
        level: "Débutant",
        lessons: 8,
        icon: "🏦",
      },
      {
        slug: "dette-et-credit",
        title: "Dette & Crédit",
        description:
          "Comprends les crédits, les dettes et les bonnes pratiques de gestion.",
        level: "Intermédiaire",
        lessons: 8,
        icon: "💳",
      },
    ],
  },

  carriere: {
    slug: "carriere",
    title: "Carrière & Emploi",
    emoji: "🚀",
    iconName: "Rocket",
    description:
      "Développe ta carrière, prépare tes candidatures et découvre les opportunités du monde professionnel.",
    color: "from-fuchsia-500 to-purple-600",
    bgColor: "bg-fuchsia-50",
    borderColor: "border-fuchsia-200",
    textColor: "text-fuchsia-700",
    badge: "Carrière",
    courses: [
      {
        slug: "construire-son-cv",
        title: "Construire son CV",
        description:
          "Apprends à créer un CV professionnel et convaincant.",
        level: "Débutant",
        lessons: 8,
        icon: "📄",
      },
      {
        slug: "reussir-un-entretien",
        title: "Réussir un Entretien",
        description:
          "Prépare-toi efficacement aux entretiens d'embauche.",
        level: "Débutant",
        lessons: 8,
        icon: "🎤",
      },
      {
        slug: "travailler-en-ligne",
        title: "Travailler en Ligne",
        description:
          "Découvre les opportunités du travail à distance et du freelancing.",
        level: "Débutant",
        lessons: 10,
        icon: "🌍",
      },
    ],
  },

  "culture-generale": {
    slug: "culture-generale",
    title: "Culture générale",
    emoji: "🌍",
    iconName: "Globe",
    description:
      "Élargis tes connaissances sur l'histoire, la géographie, les sciences, les cultures, les sociétés et les grands événements du monde.",
    color: "from-emerald-500 to-cyan-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    badge: "Nouveau",
    courses: [
      {
        slug: "histoire-rdc",
        title: "Histoire de la République démocratique du Congo",
        description:
          "Découvre les grandes périodes de l'histoire de la RDC, des royaumes précoloniaux à la République contemporaine.",
        level: "Débutant",
        lessons: 10,
        icon: "🇨🇩",
      },
      {
        slug: "histoire-afrique",
        title: "Histoire de l'Afrique",
        description:
          "Explore les grandes civilisations, royaumes, empires et événements qui ont façonné l'histoire du continent africain.",
        level: "Débutant",
        lessons: 10,
        icon: "🌍",
      },
      {
        slug: "geographie-monde",
        title: "Géographie du Monde",
        description:
          "Découvre les continents, pays, capitales, océans, fleuves, montagnes et grandes régions du monde.",
        level: "Débutant",
        lessons: 8,
        icon: "🗺️",
      },
      {
        slug: "grandes-civilisations",
        title: "Les Grandes Civilisations",
        description:
          "Découvre les civilisations égyptienne, grecque, romaine, chinoise, maya et bien d'autres.",
        level: "Intermédiaire",
        lessons: 9,
        icon: "🏛️",
      },
      {
        slug: "sciences-generales",
        title: "Sciences générales",
        description:
          "Explore les grandes notions scientifiques en biologie, physique, chimie, astronomie et sciences de la Terre.",
        level: "Débutant",
        lessons: 10,
        icon: "🔬",
      },
      {
        slug: "astronomie",
        title: "Astronomie & Univers",
        description:
          "Découvre le système solaire, les étoiles, les galaxies, les trous noirs et les grands mystères de l'univers.",
        level: "Débutant",
        lessons: 8,
        icon: "🌌",
      },
      {
        slug: "cultures-du-monde",
        title: "Cultures du Monde",
        description:
          "Découvre les traditions, langues, coutumes, cuisines et modes de vie des différentes cultures.",
        level: "Intermédiaire",
        lessons: 8,
        icon: "🌎",
      },
      {
        slug: "organisations-internationales",
        title: "Organisations internationales",
        description:
          "Comprends le rôle de l'ONU, de l'Union africaine, de l'Union européenne et des principales organisations internationales.",
        level: "Intermédiaire",
        lessons: 7,
        icon: "🏛️",
      },
      {
        slug: "grandes-inventions",
        title: "Les Grandes Inventions",
        description:
          "Découvre les inventions et découvertes qui ont transformé la société, des premières technologies à l'intelligence artificielle.",
        level: "Débutant",
        lessons: 8,
        icon: "💡",
      },
      {
        slug: "quiz-culture-generale",
        title: "Quiz de Culture générale",
        description:
          "Teste tes connaissances avec des questions variées sur l'histoire, la géographie, les sciences, les cultures et le monde.",
        level: "Intermédiaire",
        lessons: 10,
        icon: "🧠",
      },
    ],
  },
};