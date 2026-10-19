import type { CourseDetail, ExamQuestion } from "../coursesData";

import { htmlCourse, htmlExamQuestions } from "./html";
import { cssCourse, cssExamQuestions } from "./css";
import { jsCourse, jsExamQuestions } from "./javascript";
import { reactCourse, reactExamQuestions } from "./react";
import { angularCourse, angularExamQuestions } from "./angular";
import { vueCourse, vueExamQuestions } from "./vue";
import { nextjsCourse, nextjsExamQuestions } from "./nextjs";
import { nodejsCourse, nodejsExamQuestions } from "./nodejs";

import {
  reactNativeCourse,
  reactNativeExamQuestions,
} from "./react-native";

import { flutterCourse, flutterExamQuestions } from "./flutter";
import { swiftCourse, swiftExamQuestions } from "./swift";
import { kotlinCourse, kotlinExamQuestions } from "./kotlin";

import {
  securiteNumeriqueCourse,
  securiteNumeriqueExamQuestions,
} from "./securite-numerique";

import {
  webSecurityCourse,
  webSecurityExamQuestions,
} from "./web-security";

import {
  ethicalHackingCourse,
  ethicalHackingExamQuestions,
} from "./ethical-hacking";

import {
  cryptographyCourse,
  cryptographyExamQuestions,
} from "./cryptography";

import {
  introIaCourse,
  introIaExamQuestions,
} from "./introduction-ia";

import {
  promptEngineeringCourse,
  promptEngineeringExamQuestions,
} from "./prompt-engineering";

import {
  machineLearningCourse,
  machineLearningExamQuestions,
} from "./machine-learning";

import {
  deepLearningCourse,
  deepLearningExamQuestions,
} from "./deep-learning";

import { blockchainCourse, blockchainExamQuestions } from "./blockchain";
import { iotCourse, iotExamQuestions } from "./iot";
import { quantumCourse, quantumExamQuestions } from "./quantum";

import { seoCourse, seoExamQuestions } from "./seo";

import {
  contentMarketingCourse,
  contentMarketingExamQuestions,
} from "./content-marketing";

import {
  socialMediaMarketingCourse,
  socialMediaMarketingExamQuestions,
} from "./social-media";

import {
  communicationProfCourse,
  communicationProfExamQuestions,
} from "./communication-professionnelle";

import {
  timeManagementCourse,
  timeManagementExamQuestions,
} from "./time-management";

import {
  problemSolvingCourse,
  problemSolvingExamQuestions,
} from "./problem-solving";

import { awsCourse, awsExamQuestions } from "./aws";
import { gcpCourse, gcpExamQuestions } from "./gcp";
import { azureCourse, azureExamQuestions } from "./azure";

import {
  fondamentauxReseauxCourse,
  fondamentauxReseauxExamQuestions,
} from "./fondamentaux-reseaux";

import {
  routageCommutationCourse,
  routageCommutationExamQuestions,
} from "./routage-commutation";

import {
  adminReseauCourse,
  adminReseauExamQuestions,
} from "./admin-reseau";

import {
  pythonDataCourse,
  pythonDataExamQuestions,
} from "./python-data";

import {
  dataVisCourse,
  dataVisExamQuestions,
} from "./data-vis";

import {
  bigDataCourse,
  bigDataExamQuestions,
} from "./big-data";

import {
  gitGithubCourse,
  gitGithubExamQuestions,
} from "./git-github";

import { dockerCourse, dockerExamQuestions } from "./docker";
import { cicdCourse, cicdExamQuestions } from "./cicd";

import {
  softwareArchitectureCourse,
  softwareArchitectureExamQuestions,
} from "./software-architecture";

import {
  sqlFundamentalsCourse,
  sqlFundamentalsExamQuestions,
} from "./sql-fundamentals";

import {
  postgresqlCourse,
  postgresqlExamQuestions,
} from "./postgresql";

import {
  mongodbCourse,
  mongodbExamQuestions,
} from "./mongodb";

import {
  utiliserOrdinateurCourse,
  utiliserOrdinateurExamQuestions,
} from "./utiliser-ordinateur";

import { excelCourse, excelExamQuestions } from "./excel";

import {
  outilsNumeriquesCourse,
  outilsNumeriquesExamQuestions,
} from "./outils-numeriques";

import {
  agileScrumCourse,
  agileScrumExamQuestions,
} from "./agile-scrum";

import {
  leadershipCourse,
  leadershipExamQuestions,
} from "./leadership";

import {
  algorithmsCourse,
  algorithmsExamQuestions,
} from "./algorithms";

import {
  comprendreInternetCourse,
  comprendreInternetExamQuestions,
} from "./comprendre-internet";

import {
  comprendreSonArgentCourse,
  comprendreSonArgentExamQuestions,
} from "./comprendre-son-argent";

import {
  faireUnBudgetCourse,
  faireUnBudgetExamQuestions,
} from "./faire-un-budget";

import {
  epargnerIntelligemmentCourse,
  epargnerIntelligemmentExamQuestions,
} from "./epargner-intelligemment";

import {
  detteEtCreditCourse,
  detteEtCreditExamQuestions,
} from "./dette-et-credit";

import {
  construireCvCourse,
  construireCvExamQuestions,
} from "./construire-son-cv";

import {
  reussirEntretienCourse,
  reussirEntretienExamQuestions,
} from "./reussir-un-entretien";

import {
  travaillerEnLigneCourse,
  travaillerEnLigneExamQuestions,
} from "./travailler-en-ligne";

import {
  histoireRdcCourse,
  histoireRdcExamQuestions,
} from "./histoire-rdc";

import {
  histoireAfriqueCourse,
  histoireAfriqueExamQuestions,
} from "./histoire-afrique";

import {
  geographieMondeCourse,
  geographieMondeExamQuestions,
} from "./geographie-monde";

import {
  grandesCivilisationsCourse,
  grandesCivilisationsExamQuestions,
} from "./grandes-civilisations";

import {
  sciencesGeneralesCourse,
  sciencesGeneralesExamQuestions,
} from "./sciences-generales";

import {
  astronomieCourse,
  astronomieExamQuestions,
} from "./astronomie";

import {
  culturesDuMondeCourse,
  culturesDuMondeExamQuestions,
} from "./cultures-du-monde";

import {
  organisationsInternationalesCourse,
  organisationsInternationalesExamQuestions,
} from "./organisations-internationales";

import {
  grandesInventionsCourse,
  grandesInventionsExamQuestions,
} from "./grandes-inventions";

import {
  quizCultureGeneraleCourse,
  quizCultureGeneraleExamQuestions,
} from "./quiz-culture-generale";


/* =========================================================
   ALL COURSES
   ========================================================= */

export const ALL_COURSES: Record<
  string,
  Record<string, CourseDetail>
> = {
  /* =======================================================
     WEB DEVELOPMENT
     ======================================================= */

  "web-dev": {
    html: htmlCourse,
    css: cssCourse,
    javascript: jsCourse,
    js: jsCourse,
    react: reactCourse,
    angular: angularCourse,
    vue: vueCourse,
    nextjs: nextjsCourse,
    nodejs: nodejsCourse,
  },

  /* =======================================================
     MOBILE DEVELOPMENT
     ======================================================= */

  "mobile-dev": {
    "react-native": reactNativeCourse,
    flutter: flutterCourse,
    swift: swiftCourse,
    kotlin: kotlinCourse,
  },

  /* =======================================================
     CYBER SECURITY
     ======================================================= */

  "cyber-security": {
    "securite-numerique": securiteNumeriqueCourse,
    "web-security": webSecurityCourse,
    "ethical-hacking": ethicalHackingCourse,
    cryptography: cryptographyCourse,
  },

  /* =======================================================
     AI & MACHINE LEARNING
     ======================================================= */

  "ai-ml": {
    "introduction-ia": introIaCourse,
    "prompt-engineering": promptEngineeringCourse,
    "machine-learning": machineLearningCourse,
    "deep-learning": deepLearningCourse,
  },

  /* =======================================================
     LATEST TECHNOLOGIES
     ======================================================= */

  "latest-tech": {
    blockchain: blockchainCourse,
    iot: iotCourse,
    quantum: quantumCourse,
  },

  /* =======================================================
     DIGITAL MARKETING
     ======================================================= */

  "digital-marketing": {
    seo: seoCourse,
    "content-marketing": contentMarketingCourse,
    "social-media": socialMediaMarketingCourse,
  },

  /* =======================================================
     SOFT SKILLS
     ======================================================= */

  "soft-skills": {
    "communication-professionnelle": communicationProfCourse,
    "time-management": timeManagementCourse,
    "problem-solving": problemSolvingCourse,
  },

  /* =======================================================
     CLOUD COMPUTING
     ======================================================= */

  "cloud-computing": {
    aws: awsCourse,
    gcp: gcpCourse,
    azure: azureCourse,
  },

  /* =======================================================
     NETWORKS
     ======================================================= */

  reseaux: {
    "fondamentaux-reseaux": fondamentauxReseauxCourse,
    "routage-commutation": routageCommutationCourse,
    "admin-reseau": adminReseauCourse,
  },

  /* =======================================================
     DATA SCIENCE
     ======================================================= */

  "data-science": {
    "python-data": pythonDataCourse,
    "data-vis": dataVisCourse,
    "big-data": bigDataCourse,
  },

  /* =======================================================
     SOFTWARE ENGINEERING
     ======================================================= */

  "software-engineering": {
    "git-github": gitGithubCourse,
    docker: dockerCourse,
    cicd: cicdCourse,
    "software-architecture": softwareArchitectureCourse,
  },

  /* =======================================================
     DATABASES
     ======================================================= */

  databases: {
    "sql-fundamentals": sqlFundamentalsCourse,
    postgresql: postgresqlCourse,
    mongodb: mongodbCourse,
  },

  /* =======================================================
     OFFICE & PRODUCTIVITY
     ======================================================= */

  bureautique: {
    "utiliser-ordinateur": utiliserOrdinateurCourse,
    excel: excelCourse,
    "outils-numeriques": outilsNumeriquesCourse,
  },

  /* =======================================================
     MANAGEMENT
     ======================================================= */

  management: {
    "agile-scrum": agileScrumCourse,
    leadership: leadershipCourse,
  },

  /* =======================================================
     COMPUTER SCIENCE
     ======================================================= */

  "computer-science": {
    algorithms: algorithmsCourse,
    "comprendre-internet": comprendreInternetCourse,
  },

  /* =======================================================
     PERSONAL FINANCE
     ======================================================= */

  finance: {
    "comprendre-son-argent": comprendreSonArgentCourse,
    "faire-un-budget": faireUnBudgetCourse,
    "epargner-intelligemment": epargnerIntelligemmentCourse,
    "dette-et-credit": detteEtCreditCourse,
  },

  /* =======================================================
     CAREER
     ======================================================= */

  carriere: {
    "construire-son-cv": construireCvCourse,
    "reussir-un-entretien": reussirEntretienCourse,
    "travailler-en-ligne": travaillerEnLigneCourse,
  },

  /* =======================================================
     GENERAL KNOWLEDGE
     ======================================================= */

  "culture-generale": {
    "histoire-rdc": histoireRdcCourse,
    "histoire-afrique": histoireAfriqueCourse,
    "geographie-monde": geographieMondeCourse,
    "grandes-civilisations": grandesCivilisationsCourse,
    "sciences-generales": sciencesGeneralesCourse,
    astronomie: astronomieCourse,
    "cultures-du-monde": culturesDuMondeCourse,
    "organisations-internationales": organisationsInternationalesCourse,
    "grandes-inventions": grandesInventionsCourse,
    "quiz-culture-generale": quizCultureGeneraleCourse,
  },
};


/* =========================================================
   ALL EXAMS
   ========================================================= */

export const ALL_EXAMS: Record<string, ExamQuestion[]> = {
  /* =======================================================
     WEB DEVELOPMENT
     ======================================================= */

  html: htmlExamQuestions,
  css: cssExamQuestions,
  javascript: jsExamQuestions,
  js: jsExamQuestions,
  react: reactExamQuestions,
  angular: angularExamQuestions,
  vue: vueExamQuestions,
  nextjs: nextjsExamQuestions,
  nodejs: nodejsExamQuestions,

  /* =======================================================
     MOBILE DEVELOPMENT
     ======================================================= */

  "react-native": reactNativeExamQuestions,
  flutter: flutterExamQuestions,
  swift: swiftExamQuestions,
  kotlin: kotlinExamQuestions,

  /* =======================================================
     CYBER SECURITY
     ======================================================= */

  "securite-numerique": securiteNumeriqueExamQuestions,
  "web-security": webSecurityExamQuestions,
  "ethical-hacking": ethicalHackingExamQuestions,
  cryptography: cryptographyExamQuestions,

  /* =======================================================
     AI & MACHINE LEARNING
     ======================================================= */

  "introduction-ia": introIaExamQuestions,
  "prompt-engineering": promptEngineeringExamQuestions,
  "machine-learning": machineLearningExamQuestions,
  "deep-learning": deepLearningExamQuestions,

  /* =======================================================
     LATEST TECHNOLOGIES
     ======================================================= */

  blockchain: blockchainExamQuestions,
  iot: iotExamQuestions,
  quantum: quantumExamQuestions,

  /* =======================================================
     DIGITAL MARKETING
     ======================================================= */

  seo: seoExamQuestions,
  "content-marketing": contentMarketingExamQuestions,
  "social-media": socialMediaMarketingExamQuestions,

  /* =======================================================
     SOFT SKILLS
     ======================================================= */

  "communication-professionnelle": communicationProfExamQuestions,
  "time-management": timeManagementExamQuestions,
  "problem-solving": problemSolvingExamQuestions,

  /* =======================================================
     CLOUD COMPUTING
     ======================================================= */

  aws: awsExamQuestions,
  gcp: gcpExamQuestions,
  azure: azureExamQuestions,

  /* =======================================================
     NETWORKS
     ======================================================= */

  "fondamentaux-reseaux": fondamentauxReseauxExamQuestions,
  "routage-commutation": routageCommutationExamQuestions,
  "admin-reseau": adminReseauExamQuestions,

  /* =======================================================
     DATA SCIENCE
     ======================================================= */

  "python-data": pythonDataExamQuestions,
  "data-vis": dataVisExamQuestions,
  "big-data": bigDataExamQuestions,

  /* =======================================================
     SOFTWARE ENGINEERING
     ======================================================= */

  "git-github": gitGithubExamQuestions,
  docker: dockerExamQuestions,
  cicd: cicdExamQuestions,
  "software-architecture": softwareArchitectureExamQuestions,

  /* =======================================================
     DATABASES
     ======================================================= */

  "sql-fundamentals": sqlFundamentalsExamQuestions,
  postgresql: postgresqlExamQuestions,
  mongodb: mongodbExamQuestions,

  /* =======================================================
     OFFICE & PRODUCTIVITY
     ======================================================= */

  "utiliser-ordinateur": utiliserOrdinateurExamQuestions,
  excel: excelExamQuestions,
  "outils-numeriques": outilsNumeriquesExamQuestions,

  /* =======================================================
     MANAGEMENT
     ======================================================= */

  "agile-scrum": agileScrumExamQuestions,
  leadership: leadershipExamQuestions,

  /* =======================================================
     COMPUTER SCIENCE
     ======================================================= */

  algorithms: algorithmsExamQuestions,
  "comprendre-internet": comprendreInternetExamQuestions,

  /* =======================================================
     PERSONAL FINANCE
     ======================================================= */

  "comprendre-son-argent": comprendreSonArgentExamQuestions,
  "faire-un-budget": faireUnBudgetExamQuestions,
  "epargner-intelligemment": epargnerIntelligemmentExamQuestions,
  "dette-et-credit": detteEtCreditExamQuestions,

  /* =======================================================
     CAREER
     ======================================================= */

  "construire-son-cv": construireCvExamQuestions,
  "reussir-un-entretien": reussirEntretienExamQuestions,
  "travailler-en-ligne": travaillerEnLigneExamQuestions,

  /* =======================================================
     GENERAL KNOWLEDGE
     ======================================================= */

  "histoire-rdc": histoireRdcExamQuestions,
  "histoire-afrique": histoireAfriqueExamQuestions,
  "geographie-monde": geographieMondeExamQuestions,
  "grandes-civilisations": grandesCivilisationsExamQuestions,
  "sciences-generales": sciencesGeneralesExamQuestions,
  astronomie: astronomieExamQuestions,
  "cultures-du-monde": culturesDuMondeExamQuestions,
  "organisations-internationales":
    organisationsInternationalesExamQuestions,
  "grandes-inventions": grandesInventionsExamQuestions,
  "quiz-culture-generale": quizCultureGeneraleExamQuestions,
};