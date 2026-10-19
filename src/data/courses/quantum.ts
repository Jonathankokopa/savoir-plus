import type { CourseDetail, ExamQuestion } from "../coursesData";

export const quantumCourse: CourseDetail = {
  slug: "quantum",
  categorySlug: "latest-tech",
  title: "Introduction à l'Informatique Quantique",
  description: "Découvrez les principes d'intrication, de superposition et les qubits avec IBM Qiskit.",
  level: "Avancé",
  icon: "⚛️",
  modules: [
    {
      title: "Module 1: Les Piliers de la Mécanique Quantique",
      lessons: [
        {
          slug: "qubits-et-superposition",
          title: "1.1 Qubits, Superposition & Intrication",
          duration: "15 min",
          description: "Explorez les unités d'information quantique et les portes quantiques de Hadamard.",
          objectives: [
            "Comprendre la différence entre Bit binaire (0 ou 1) et Qubit (|0⟩ et |1⟩).",
            "Découvrir la superposition et l'intrication quantique.",
            "Créer un circuit quantique simple avec Qiskit."
          ],
          content: [
            "## Du Bit au Qubit",
            "Un qubit peut se trouver dans une superposition d'états |0⟩ et |1⟩ simultanément jusqu'à ce qu'une mesure soit effectuée.",
            "",
            "```python\nfrom qiskit import QuantumCircuit\nqc = QuantumCircuit(2)\nqc.h(0) # Porte Hadamard (superposition)\nqc.cx(0, 1) # Porte CNOT (intrication)\n```"
          ],
          examples: [
            "L'algorithme de Shor pour la factorisation et l'algorithme de Grover pour la recherche."
          ],
          practice: [
            "Simulez un état de Bell (intrication maximale entre deux qubits) dans un notebook Qiskit."
          ],
          quiz: [
            {
              question: "Quelle propriété permet à un qubit d'exister dans une combinaison linéaire d'états |0⟩ et |1⟩ ?",
              options: ["La superposition", "La réfraction", "Le parallélisme", "La compression"],
              answer: 0,
              explanation: "La superposition permet au qubit de représenter simultanément 0 et 1."
            }
          ]
        }
      ]
    }
  ]
};

export const quantumExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle porte quantique permet de placer un qubit initialisé à |0⟩ dans un état de superposition équilibré ?",
    options: ["Porte Hadamard (H)", "Porte Pauli-X", "Porte CNOT", "Porte Toffoli"],
    correctAnswer: 0
  }
];
