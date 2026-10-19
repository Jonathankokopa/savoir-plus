"use client";

import { useState, useEffect } from "react";
import { X, Play, RotateCcw, Copy, Check, Eye, Terminal, Sparkles } from "lucide-react";
import { compileAndRunCode } from "@/utils/codeRunner";

interface InteractiveCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode: string;
  language?: string;
  title?: string;
}

export default function InteractiveCodeModal({
  isOpen,
  onClose,
  initialCode,
  language = "html",
  title = "Éditeur & Exécution d'Exemple",
}: InteractiveCodeModalProps) {
  const [code, setCode] = useState(initialCode);
  const [renderedOutput, setRenderedOutput] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "console">("preview");

  function runCode(codeToRun: string = code) {
    const result = compileAndRunCode(codeToRun, language);
    setRenderedOutput(result.renderedOutput);
    setConsoleLogs(result.consoleLogs);
    setActiveTab(result.activeTab);
  }

  useEffect(() => {
    if (isOpen) {
      setCode(initialCode);
      runCode(initialCode);
    }
  }, [isOpen, initialCode, language]);

  if (!isOpen) return null;

  function resetCode() {
    setCode(initialCode);
    runCode(initialCode);
  }

  function copyCode() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="flex h-[90vh] w-full max-w-6xl flex-col rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black text-base">
              ⚡
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">{title}</h3>
              <p className="text-xs text-slate-400">
                Langage : <span className="font-bold text-emerald-400 uppercase">{language}</span> — Édition & Exécution en Direct
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => runCode(code)}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-extrabold text-slate-950 transition-all shadow-md"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>▶ Exécuter le Code</span>
            </button>

            <button
              type="button"
              onClick={resetCode}
              className="rounded-xl bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              title="Réinitialiser"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={copyCode}
              className="rounded-xl bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              title="Copier"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-slate-800 p-2 text-slate-400 hover:bg-red-950 hover:text-red-400 transition-colors"
              title="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Split View Body */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 overflow-hidden">
          
          {/* Left Column: Code Editor */}
          <div className="flex flex-col bg-slate-950 p-4 overflow-hidden">
            <div className="mb-2 flex items-center justify-between text-xs font-extrabold text-slate-400 uppercase">
              <span>Éditeur ({language})</span>
              <span className="text-[11px] text-slate-500">Modifiable en direct</span>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 w-full rounded-xl bg-slate-900 p-4 font-mono text-xs sm:text-sm leading-relaxed text-emerald-300 border border-slate-800 focus:outline-none focus:border-emerald-500 resize-none"
              spellCheck={false}
            />
          </div>

          {/* Right Column: Live Result */}
          <div className="flex flex-col bg-slate-950 p-4 overflow-hidden">
            <div className="mb-2 flex items-center justify-between text-xs font-extrabold uppercase">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`px-3 py-1 rounded-md text-xs transition flex items-center gap-1 ${
                    activeTab === "preview" ? "bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold" : "text-slate-400"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" /> Visuel Live
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("console")}
                  className={`px-3 py-1 rounded-md text-xs transition flex items-center gap-1 ${
                    activeTab === "console" ? "bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold" : "text-slate-400"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" /> Console ({consoleLogs.length})
                </button>
              </div>

              <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                <Sparkles className="w-3 h-3" /> Live Execution
              </span>
            </div>

            <div className="flex-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
              {activeTab === "preview" ? (
                <iframe
                  srcDoc={renderedOutput}
                  title="Rendu de l'exemple"
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
      </div>
    </div>
  );
}
