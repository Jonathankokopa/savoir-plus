"use client";

import { useState } from "react";
import { Play, RotateCcw, Copy, Check, Code2, Eye, Sparkles } from "lucide-react";
import { compileAndRunCode } from "@/utils/codeRunner";

interface CodePreset {
  id: string;
  name: string;
  language: string;
  code: string;
  outputDescription: string;
}

const DEFAULT_PRESETS: CodePreset[] = [
  {
    id: "html-intro",
    name: "Tutoriel HTML / Page Web",
    language: "html",
    code: `<div style="font-family: sans-serif; padding: 20px; background: #f0fdf4; border-radius: 12px; border: 2px solid #16a34a;">
  <h2 style="color: #15803d; margin-top: 0;">👋 Bienvenue sur Savoir+</h2>
  <p style="color: #334155;">Ceci est un exemple de code HTML interactif exécuté en direct.</p>
  <button style="background: #16a34a; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer;">
    Cliquez-moi !
  </button>
</div>`,
    outputDescription: "Rendu HTML & CSS en direct",
  },
  {
    id: "js-calculator",
    name: "Calculateur JS ES6",
    language: "javascript",
    code: `// Calculateur de Budget Personnel (Règle 50/30/20)
function calculerBudget(revenuMensuel) {
  const besoins = revenuMensuel * 0.50; // 50% Logement, nourriture, factures
  const envies = revenuMensuel * 0.30;  // 30% Loisirs, sorties, projets
  const epargne = revenuMensuel * 0.20; // 20% Épargne & investissement

  return {
    revenu: revenuMensuel + " €",
    besoins: besoins + " € (50%)",
    envies: envies + " € (30%)",
    epargne: epargne + " € (20%)"
  };
}

console.log("Calculateur exécuté :");
console.log(calculerBudget(2000));`,
    outputDescription: "Résultat du script JS",
  },
  {
    id: "css-card",
    name: "Styles CSS3 & Animations",
    language: "css",
    code: `.btn-demo {
  background: linear-gradient(135deg, #059669, #0284c7);
  color: white;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  border: none;
  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.4);
  transition: transform 0.2s;
  cursor: pointer;
}
.btn-demo:hover {
  transform: scale(1.05);
}`,
    outputDescription: "Animation CSS en direct",
  },
  {
    id: "react-counter",
    name: "React.js Component",
    language: "react",
    code: `function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
      <h3 className="text-xl font-bold text-emerald-400">⚛️ Composant React Live</h3>
      <p className="my-3 text-slate-300">Nombre de clics : <strong className="text-white">{count}</strong></p>
      <button 
        onClick={() => setCount(c => c + 1)}
        className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition"
      >
        Incrémenter +1
      </button>
    </div>
  );
}`,
    outputDescription: "Rendu React 18 Live",
  }
];

interface InteractivePlaygroundProps {
  initialPresetId?: string;
  customCode?: string;
  title?: string;
}

export default function InteractivePlayground({
  initialPresetId = "html-intro",
  customCode,
  title = "Bac à Sable Interactif — Try It Yourself!",
}: InteractivePlaygroundProps) {
  const [selectedPreset, setSelectedPreset] = useState<CodePreset>(
    DEFAULT_PRESETS.find((p) => p.id === initialPresetId) || DEFAULT_PRESETS[0]
  );
  const [code, setCode] = useState<string>(customCode || selectedPreset.code);
  const [outputHtml, setOutputHtml] = useState<string>(
    compileAndRunCode(customCode || selectedPreset.code, selectedPreset.language).renderedOutput
  );
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");

  const handleRun = () => {
    const res = compileAndRunCode(code, selectedPreset.language);
    setOutputHtml(res.renderedOutput);
    setActiveTab("preview");
  };

  const handleReset = () => {
    setCode(selectedPreset.code);
    const res = compileAndRunCode(selectedPreset.code, selectedPreset.language);
    setOutputHtml(res.renderedOutput);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePresetSelect = (preset: CodePreset) => {
    setSelectedPreset(preset);
    setCode(preset.code);
    const res = compileAndRunCode(preset.code, preset.language);
    setOutputHtml(res.renderedOutput);
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
      {/* Top Header bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3 gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <Code2 className="w-5 h-5 text-emerald-400" />
          <span className="font-bold text-slate-100 text-sm sm:text-base flex items-center gap-1.5">
            {title}
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3" /> Universal Playground
            </span>
          </span>
        </div>

        {/* Preset Selector buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {DEFAULT_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handlePresetSelect(preset)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                selectedPreset.id === preset.id
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main split content */}
      <div className="p-4 bg-slate-950">
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("editor")}
              className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                activeTab === "editor"
                  ? "bg-slate-800 text-emerald-400 border border-slate-700"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Code2 className="w-4 h-4" /> Éditeur de Code ({selectedPreset.language})
            </button>
            <button
              onClick={handleRun}
              className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                activeTab === "preview"
                  ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Eye className="w-4 h-4" /> Aperçu Visuel Live
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Réinitialiser"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Copier le code"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handleRun}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-extrabold text-xs hover:bg-emerald-400 transition flex items-center gap-1.5 shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" /> Exécuter le code
            </button>
          </div>
        </div>

        {/* View Areas */}
        {activeTab === "editor" ? (
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-72 rounded-xl bg-slate-900 p-4 font-mono text-xs sm:text-sm text-emerald-300 border border-slate-800 focus:outline-none focus:border-emerald-500 resize-none leading-relaxed"
            spellCheck={false}
          />
        ) : (
          <div className="h-72 w-full overflow-hidden rounded-xl border border-slate-800 bg-white">
            <iframe
              srcDoc={outputHtml}
              title="Aperçu bac à sable"
              className="w-full h-full border-none bg-white"
              sandbox="allow-scripts allow-modals"
            />
          </div>
        )}
      </div>
    </div>
  );
}
