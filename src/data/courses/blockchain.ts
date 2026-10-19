import type { CourseDetail, ExamQuestion } from "../coursesData";

export const blockchainCourse: CourseDetail = {
  slug: "blockchain",
  categorySlug: "latest-tech",
  title: "Blockchain & Smart Contracts",
  description: "Comprenez la technologie registre distribué, la cryptographie, Ethereum et Solidity.",
  level: "Intermédiaire",
  icon: "⛓️",
  modules: [
    {
      title: "Module 1: Les Piliers de la Blockchain",
      lessons: [
        {
          slug: "registre-distribue-et-consensus",
          title: "1.1 Registres Distribués & Mécanismes de Consensus",
          duration: "15 min",
          description: "Découvrez le Proof of Work, Proof of Stake et les transactions immuables.",
          objectives: [
            "Comprendre l'enchaînement des blocs par hachage.",
            "Distinguer Proof of Work (PoW) et Proof of Stake (PoS).",
            "Découvrir la création de Smart Contracts avec Solidity."
          ],
          content: [
            "## Qu'est-ce qu'une Blockchain ?",
            "Une blockchain est une base de données distribuée et sécurisée par cryptographie, partagée entre les nœuds d'un réseau informatique.",
            "",
            "## Smart Contracts",
            "Les contrats intelligents sont des programmes autonomes exécutés sur la EVM (Ethereum Virtual Machine) lorsque des conditions définies sont remplies."
          ],
          examples: [
            "```solidity\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    uint256 storedData;\n    function set(uint256 x) public {\n        storedData = x;\n    }\n}\n```"
          ],
          practice: [
            "Déployez un contrat intelligent basique sur un réseau de test Sepolia avec Remix IDE."
          ],
          quiz: [
            {
              question: "Quel terme désigne l'exécutable autonome hébergé et exécuté directement sur une blockchain comme Ethereum ?",
              options: ["Smart Contract", "DLL", "API Rest", "Microservice"],
              answer: 0,
              explanation: "Un Smart Contract s'exécute de façon décentralisée sans intermédiaire."
            }
          ]
        }
      ]
    }
  ]
};

export const blockchainExamQuestions: ExamQuestion[] = [
  {
    question: "Quel mécanisme de consensus écologique utilise Ethereum depuis 'The Merge' ?",
    options: ["Proof of Stake (PoS)", "Proof of Work (PoW)", "Proof of History", "Proof of Authority"],
    correctAnswer: 0
  }
];
