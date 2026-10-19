"use client";

import { useState } from "react";
import { Play, Copy, Check, Code2, FolderTree, FileText } from "lucide-react";
import InteractiveCodeModal from "./InteractiveCodeModal";

export function checkIsExecutable(code: string, rawLanguage: string = "html"): boolean {
  const lang = rawLanguage.toLowerCase().trim();
  const clean = code.trim();

  // 1. Non-executable language tags
  const nonExecLangs = [
    "text",
    "txt",
    "plaintext",
    "tree",
    "dir",
    "structure",
    "bash",
    "shell",
    "sh",
    "terminal",
    "json",
    "yaml",
    "markdown",
    "md",
    "pseudo",
    "none",
    "directory",
    "files",
    "file",
  ];
  if (nonExecLangs.includes(lang)) {
    return false;
  }

  // 2. Directory structure tree characters or file tree lists
  if (
    clean.includes("├──") ||
    clean.includes("└──") ||
    clean.includes("│  ") ||
    clean.includes("│\n") ||
    /^[a-z0-9_-]+\/\s*$/im.test(clean)
  ) {
    return false;
  }

  // 3. Abstract placeholder syntax (e.g. `selector {\n  property: value;\n}`)
  if (/^\s*selector\s*\{\s*property\s*:\s*value\s*;?\s*\}\s*$/i.test(clean)) {
    return false;
  }

  // 4. CSS language specific check
  if (lang === "css") {
    const hasBraces = clean.includes("{") && clean.includes("}");
    const hasHtmlTags = /<[a-z][\s\S]*>/i.test(clean);
    return hasBraces || hasHtmlTags;
  }

  // 5. HTML language specific check
  if (lang === "html" || lang === "xml") {
    return /<[a-z][\s\S]*>/i.test(clean);
  }

  return true;
}

interface InteractiveCodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  isExecutable?: boolean;
}

export default function InteractiveCodeBlock({
  code,
  language = "html",
  title = "Exemple de Code",
  isExecutable,
}: InteractiveCodeBlockProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const cleanCode = code
    .replace(/^```[a-z0-9]*\n?/i, "")
    .replace(/\n?```$/i, "")
    .trim();

  const canRun = isExecutable ?? checkIsExecutable(cleanCode, language);

  function copyCode() {
    navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const isTree = cleanCode.includes("├──") || cleanCode.includes("└──") || language.toLowerCase() === "tree" || language.toLowerCase() === "structure";

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-md">
      {/* Code Block Top Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {isTree ? (
            <FolderTree className="w-4 h-4 text-sky-400" />
          ) : canRun ? (
            <Code2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <FileText className="w-4 h-4 text-slate-400" />
          )}
          <span className="font-extrabold text-slate-200 uppercase tracking-wider">
            {isTree ? "Structure des Fichiers" : language || "code"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyCode}
            className="inline-flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-slate-300 font-bold hover:bg-slate-700 hover:text-white transition-colors text-[11px]"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? "Copié !" : "Copier"}</span>
          </button>

          {canRun && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3 py-1 text-slate-950 font-extrabold transition-all text-[11px] shadow-sm"
            >
              <Play className="w-3 h-3 fill-slate-950" />
              <span>⚡ Exécuter & Tester en Direct</span>
            </button>
          )}
        </div>
      </div>

      {/* Code Content View */}
      <pre className="p-4 font-mono text-xs sm:text-sm leading-relaxed text-emerald-300 overflow-x-auto bg-slate-950/90">
        <code>{cleanCode}</code>
      </pre>

      {/* Execution Modal */}
      {canRun && (
        <InteractiveCodeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialCode={cleanCode}
          language={language}
          title={title}
        />
      )}
    </div>
  );
}
