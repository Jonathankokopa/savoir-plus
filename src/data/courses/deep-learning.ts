import type { CourseDetail, ExamQuestion } from "../coursesData";

export const deepLearningCourse: CourseDetail = {
  slug: "deep-learning",
  categorySlug: "ai-ml",
  title: "Deep Learning & Réseaux Neuronaux",
  description: "Explorez les réseaux de neurones profonds, PyTorch et les architectures Transformers.",
  level: "Avancé",
  icon: "🧬",
  modules: [
    {
      title: "Module 1: Réseaux Neuronaux & PyTorch",
      lessons: [
        {
          slug: "perceptrons-et-retropropagation",
          title: "1.1 Perceptrons & Rétropropagation du Gradient",
          duration: "20 min",
          description: "Comprenez la descente de gradient, les fonctions d'activation (ReLU) et les tenseurs PyTorch.",
          objectives: [
            "Comprendre les neurones artificiels et les poids.",
            "Maîtriser la rétropropagation pour ajuster les poids.",
            "Construire un réseau de neurones séquentiel avec PyTorch."
          ],
          content: [
            "## Architecture d'un Réseau Neuronal",
            "Chaque couche contient des neurones interconnectés qui appliquent des transformations linéaires suivies d'une fonction d'activation non linéaire.",
            "",
            "```python\nimport torch\nimport torch.nn as nn\n\nclass SimpleNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc = nn.Linear(784, 128)\n        self.relu = nn.ReLU()\n        self.out = nn.Linear(128, 10)\n```"
          ],
          examples: [
            "CNNs pour la vision par ordinateur, Transformers (Attention Is All You Need) pour le NLP."
          ],
          practice: [
            "Définissez un modèle PyTorch à 3 couches pour la classification d'images MNIST."
          ],
          quiz: [
            {
              question: "Quelle fonction d'activation courante transforme les entrées négatives en 0 et conserve les positives inchangées ?",
              options: ["ReLU", "Sigmoid", "Tanh", "Softmax"],
              answer: 0,
              explanation: "ReLU (Rectified Linear Unit) retourne max(0, x)."
            }
          ]
        }
      ]
    }
  ]
};

export const deepLearningExamQuestions: ExamQuestion[] = [
  {
    question: "Quelle architecture introduit le mécanisme d'Attention à l'origine des grands modèles de langage modernes ?",
    options: ["Transformer", "CNN", "RNN", "LSTM"],
    correctAnswer: 0
  }
];
