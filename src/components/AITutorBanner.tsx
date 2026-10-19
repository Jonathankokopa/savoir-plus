"use client";

import { useState } from "react";
import { Bot, Sparkles, Send, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export default function AITutorBanner() {
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAsking, setIsAsking] = useState(false);

  const sampleQuestions = [
    "C'est quoi la règle 50/30/20 pour mon budget ?",
    "Comment structurer la rubrique compétences de mon CV ?",
    "Quelle est la différence entre HTTP et HTTPS ?",
  ];

  const handleAsk = (questionText?: string) => {
    const q = questionText || prompt;
    if (!q.trim()) return;

    setIsAsking(true);
    setAiResponse(null);

    setTimeout(() => {
      setIsAsking(false);
      if (q.includes("50/30/20") || q.includes("budget")) {
        setAiResponse(
          "💡 **Savoir+ AI Tutor** : La règle 50/30/20 divise ton revenu net en 3 parties :\n- **50% Besoins** (Loyer, factures, nourriture)\n- **30% Envies** (Loisirs, sorties)\n- **20% Épargne** (Fonds d'urgence & projets futurs)."
        );
      } else if (q.includes("CV") || q.includes("compétences")) {
        setAiResponse(
          "💡 **Savoir+ AI Tutor** : Sur ton CV, classe tes compétences en 2 blocs distincts :\n1. **Hard Skills** (Ex: Excel, Raccordement réseau, Anglais B2)\n2. **Soft Skills** (Ex: Travail d'équipe, Gestion du temps, Résolution de problèmes)."
        );
      } else {
        setAiResponse(
          "💡 **Savoir+ AI Tutor** : HTTPS est la version sécurisée de HTTP. Les données échangées entre ton navigateur et le site sont entièrement cryptées par un certificat SSL/TLS, empêchant l'interception !"
        );
      }
    }, 600);
  };

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 p-6 sm:p-8 text-white shadow-2xl relative">
      {/* Glow highlight */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        
        {/* Left Info Column */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold">
            <Bot className="w-4 h-4 text-emerald-400" />
            <span>Assistant d&apos;Apprentissage AI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Apprends avec <span className="gradient-text-green">Savoir+ AI Tutor</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Une question sur une leçon, un calcul de budget ou une formule ? Ton tuteur virtuel t&apos;explique chaque concept avec des exemples simples et instantanés.
          </p>

          <div className="space-y-2 text-xs font-semibold text-slate-300">
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Questions fréquentes :</p>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((sq) => (
                <button
                  key={sq}
                  onClick={() => {
                    setPrompt(sq);
                    handleAsk(sq);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-emerald-950 hover:border-emerald-500/50 border border-slate-700 text-[11px] text-slate-300 hover:text-emerald-300 transition-all text-left"
                >
                  &quot;{sq}&quot;
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Interactive AI Ask Card */}
        <div className="w-full max-w-md rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-xl space-y-4 shrink-0">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-white">AI Tutor Interactif</p>
                <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> En ligne 24/7
                </p>
              </div>
            </div>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>

          {/* AI Response Output Window */}
          <div className="min-h-[100px] p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed overflow-y-auto">
            {isAsking ? (
              <div className="flex items-center gap-2 text-emerald-400 animate-pulse py-4">
                <Bot className="w-4 h-4" />
                <span>Le tuteur rédige une réponse claire...</span>
              </div>
            ) : aiResponse ? (
              <div className="whitespace-pre-wrap font-sans text-slate-200">
                {aiResponse}
              </div>
            ) : (
              <p className="text-slate-500 italic py-3 text-center">
                Pose ta question ci-dessous ou clique sur une suggestion pour essayer...
              </p>
            )}
          </div>

          {/* Prompt Input Box */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
              placeholder="Pose une question à l'IA..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleAsk()}
              className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
