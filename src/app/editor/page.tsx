"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Code2,
  Eye,
  Sparkles,
  Download,
  Terminal,
  ArrowLeft
} from "lucide-react";
import { compileAndRunCode } from "@/utils/codeRunner";

type Language = "html" | "css" | "javascript" | "react" | "angular" | "vue" | "nodejs";

interface Preset {
  id: string;
  name: string;
  language: Language;
  code: string;
  description: string;
}

const EDITOR_PRESETS: Preset[] = [
  {
    id: "html-basic",
    name: "1. HTML5 & Bouton Interactif",
    language: "html",
    description: "Structure HTML5 de base avec styles et boutons.",
    code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: system-ui, sans-serif;
      padding: 30px;
      background: #f8fafc;
      color: #0f172a;
    }
    .card {
      background: white;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
      max-width: 450px;
    }
    .btn {
      background: #10b981;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2 style="color: #047857; margin-top: 0;">👋 Éditeur Savoir+</h2>
    <p>Modifiez ce code HTML & CSS en direct et cliquez sur <strong>"Exécuter"</strong> !</p>
    <button class="btn" onclick="alert('Bravo ! Le code s\'exécute parfaitement !')">
      Tester l'interaction 🚀
    </button>
  </div>
</body>
</html>`
  },
  {
    id: "css-grid",
    name: "2. CSS3 Flexbox & Layout",
    language: "css",
    description: "Design de cartes avec Flexbox & CSS3.",
    code: `.btn-custom {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: bold;
  border: none;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);
  transition: transform 0.2s;
}
.btn-custom:hover {
  transform: translateY(-3px);
}`
  },
  {
    id: "js-logic",
    name: "3. JavaScript ES6+ & APIs",
    language: "javascript",
    description: "Script JS asynchrone et manipulation de données.",
    code: `// Exemple JavaScript ES6+
const calculateTotal = (items) => {
  return items
    .filter(item => item.active)
    .reduce((sum, item) => sum + item.price, 0);
};

const cart = [
  { name: "Livre HTML5", price: 20, active: true },
  { name: "Cours React", price: 50, active: true },
  { name: "Option facultative", price: 10, active: false }
];

console.log("Total du panier :", calculateTotal(cart) + " €");`
  },
  {
    id: "react-app",
    name: "4. React.js Masterclass",
    language: "react",
    description: "Composant fonctionnel avec Hook useState.",
    code: `function App() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800">
      <h2 className="text-xl font-bold text-emerald-400">⚛️ React 18 Live Component</h2>
      <p className="mt-2 text-slate-300">Likes : <strong className="text-emerald-300">{likes}</strong></p>
      <button 
        onClick={() => setLikes(l => l + 1)}
        className="mt-4 px-4 py-2 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition"
      >
        👍 Liker (+1)
      </button>
    </div>
  );
}`
  },
  {
    id: "vue-app",
    name: "5. Vue.js 3 Composition API",
    language: "vue",
    description: "Composant SFC Vue 3 avec réactivité ref().",
    code: `<template>
  <div class="card">
    <h2>🟢 {{ title }}</h2>
    <p>Compteur réactif : {{ count }}</p>
    <button @click="count++">Ajouter +1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('Composant Vue 3 Live');
const count = ref(0);
</script>`
  },
  {
    id: "node-express",
    name: "6. Node.js & Express API",
    language: "nodejs",
    description: "Serveur Backend Express et routes REST.",
    code: `import express from 'express';
const app = express();

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: "Alice Dev" }]);
});

app.listen(3001, () => console.log("Express API démarré sur port 3001"));`
  }
];

export default function EditorPage() {
  const [selectedPreset, setSelectedPreset] = useState<Preset>(EDITOR_PRESETS[0]);
  const [code, setCode] = useState<string>(selectedPreset.code);
  const [renderedOutput, setRenderedOutput] = useState<string>("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "console">("preview");

  function runCode(codeToRun: string = code, lang: string = selectedPreset.language) {
    const result = compileAndRunCode(codeToRun, lang);
    setRenderedOutput(result.renderedOutput);
    setConsoleLogs(result.consoleLogs);
    setActiveTab(result.activeTab);
  }

  useEffect(() => {
    runCode(selectedPreset.code, selectedPreset.language);
  }, [selectedPreset]);

  function handlePresetChange(preset: Preset) {
    setSelectedPreset(preset);
    setCode(preset.code);
    runCode(preset.code, preset.language);
  }

  function handleReset() {
    setCode(selectedPreset.code);
    runCode(selectedPreset.code, selectedPreset.language);
  }

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    const ext = selectedPreset.language === "html" ? "html" : selectedPreset.language === "css" ? "css" : "js";
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `savoir-plus-code.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header Bar */}
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/learn"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Retour aux cours
          </Link>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" />
            <h1 className="font-extrabold text-base text-white">Éditeur & Compilateur Universel Savoir+</h1>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => runCode(code)}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition flex items-center gap-2 shadow-md"
          >
            <Play className="w-4 h-4 fill-slate-950" /> Exécuter le code
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition"
            title="Réinitialiser"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopy}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition"
            title="Copier"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={handleDownload}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition"
            title="Télécharger"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Preset selector bar */}
      <div className="border-b border-slate-800 bg-slate-950 px-6 py-3 flex items-center gap-2 overflow-x-auto">
        <span className="text-xs font-bold text-slate-500 uppercase mr-2">Modèles :</span>
        {EDITOR_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => handlePresetChange(preset)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              selectedPreset.id === preset.id
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 overflow-hidden">
        
        {/* Left: Code Editor */}
        <div className="flex flex-col p-4 bg-slate-950 overflow-hidden">
          <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Éditeur de Code ({selectedPreset.language})</span>
            <span className="text-slate-500 font-normal">{selectedPreset.description}</span>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 w-full rounded-xl bg-slate-900 p-4 font-mono text-xs sm:text-sm leading-relaxed text-emerald-300 border border-slate-800 focus:outline-none focus:border-emerald-500 resize-none min-h-[350px]"
            spellCheck={false}
          />
        </div>

        {/* Right: Live Execution Result */}
        <div className="flex flex-col p-4 bg-slate-950 overflow-hidden">
          <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1 rounded-md transition flex items-center gap-1.5 ${
                  activeTab === "preview" ? "bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold" : "text-slate-400"
                }`}
              >
                <Eye className="w-3.5 h-3.5" /> Visuel Live
              </button>
              <button
                onClick={() => setActiveTab("console")}
                className={`px-3 py-1 rounded-md transition flex items-center gap-1.5 ${
                  activeTab === "console" ? "bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold" : "text-slate-400"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" /> Console ({consoleLogs.length})
              </button>
            </div>

            <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
              <Sparkles className="w-3 h-3" /> Live Render
            </span>
          </div>

          <div className="flex-1 overflow-hidden rounded-xl border border-slate-800 bg-white min-h-[350px]">
            {activeTab === "preview" ? (
              <iframe
                srcDoc={renderedOutput}
                title="Rendu éditeur"
                className="w-full h-full border-none bg-white"
                sandbox="allow-scripts allow-modals"
              />
            ) : (
              <div className="p-4 font-mono text-xs text-emerald-300 h-full overflow-y-auto bg-slate-950">
                <p className="text-slate-500 border-b border-slate-800 pb-2 mb-2">// Sortie de la console de compilation</p>
                {consoleLogs.map((log, i) => (
                  <div key={i} className="py-1 border-b border-slate-900">{log}</div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
