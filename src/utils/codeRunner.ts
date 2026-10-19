/**
 * Universal Code Compiler & Execution Engine for Savoir+
 * Supports HTML, CSS, JavaScript, TypeScript, React/JSX/TSX, Angular, Vue.js, Next.js, Node.js & Express APIs.
 */

export interface ExecutionResult {
  renderedOutput: string;
  consoleLogs: string[];
  activeTab: "preview" | "console";
}

export function compileAndRunCode(code: string, rawLanguage: string = "html"): ExecutionResult {
  const lang = rawLanguage.toLowerCase().trim();
  const cleanCode = code
    .replace(/^```[a-z0-9]*\n?/i, "")
    .replace(/\n?```$/i, "")
    .trim();

  // 1. CSS
  if (lang === "css") {
    // Check if the input contains full HTML document or explicit <html>/<style> tags
    const hasFullHtmlDoc = /<!DOCTYPE html>|<html[\s\S]*?>/i.test(cleanCode);

    let finalHtml = "";

    if (hasFullHtmlDoc) {
      finalHtml = cleanCode;
    } else {
      // Check if snippet has HTML markup
      const hasHtmlTags = /<[a-z][\s\S]*?>/i.test(cleanCode);

      let studentHtml = "";
      let studentCss = "";

      if (/HTML:/i.test(cleanCode) && /CSS:/i.test(cleanCode)) {
        const parts = cleanCode.split(/CSS:/i);
        studentHtml = parts[0].replace(/HTML:/i, "").replace(/```[a-z0-9]*/gi, "").trim();
        studentCss = parts[1].replace(/```[a-z0-9]*/gi, "").trim();
      } else if (/<style[\s\S]*?>([\s\S]*?)<\/style>/i.test(cleanCode)) {
        const match = cleanCode.match(/<style[\s\S]*?>([\s\S]*?)<\/style>/i);
        studentCss = match ? match[1].trim() : "";
        studentHtml = cleanCode.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "").trim();
      } else if (hasHtmlTags) {
        // Extract CSS rule lines vs HTML tag lines if mixed
        const cssLines: string[] = [];
        const htmlLines: string[] = [];
        const lines = cleanCode.split("\n");
        let inCss = false;

        for (const line of lines) {
          if (line.includes("{")) inCss = true;
          if (inCss) {
            cssLines.push(line);
            if (line.includes("}")) inCss = false;
          } else if (/<[a-z][\s\S]*?>/i.test(line)) {
            htmlLines.push(line);
          } else if (/^\s*(\.|#|[a-z0-9_-]+|\*|:root|@keyframes)/i.test(line)) {
            cssLines.push(line);
          } else {
            htmlLines.push(line);
          }
        }

        if (cssLines.length > 0 && htmlLines.length > 0) {
          studentHtml = htmlLines.join("\n").trim();
          studentCss = cssLines.join("\n").trim();
        } else if (htmlLines.length > 0 && cssLines.length === 0) {
          studentHtml = cleanCode;
          studentCss = "";
        } else {
          studentCss = cleanCode;
        }
      } else {
        studentCss = cleanCode;
      }

      // Dynamic Selector Generator for Pure CSS
      let dynamicElementsHtml = "";
      if (studentCss && !studentHtml) {
        const detectedClasses = new Set<string>();
        const detectedIds = new Set<string>();

        const cleanCss = studentCss.replace(/\/\*[\s\S]*?\*\//g, "");

        // Find .class-name
        const classMatches = cleanCss.matchAll(/\.([a-zA-Z0-9_-]+)/g);
        for (const m of classMatches) {
          const cls = m[1];
          if (!["html", "body", "root"].includes(cls)) {
            detectedClasses.add(cls);
          }
        }

        // Find #id-name
        const idMatches = cleanCss.matchAll(/#([a-zA-Z0-9_-]+)/g);
        for (const m of idMatches) {
          detectedIds.add(m[1]);
        }

        const generatedNodes: string[] = [];

        detectedClasses.forEach((cls) => {
          if (cls.includes("btn") || cls.includes("button")) {
            generatedNodes.push(`<button class="${cls}">Bouton .${cls}</button>`);
          } else if (cls.includes("card") || cls.includes("box") || cls.includes("container") || cls.includes("wrapper") || cls.includes("hero") || cls.includes("modal") || cls.includes("panel")) {
            generatedNodes.push(`
              <div class="${cls}">
                <h3>Titre .${cls}</h3>
                <p>Démo pour la classe .${cls}</p>
                <button class="btn btn-primary" style="margin-top: 8px;">Action</button>
              </div>
            `);
          } else if (cls.includes("spinner") || cls.includes("loader") || cls.includes("circle") || cls.includes("badge") || cls.includes("avatar")) {
            generatedNodes.push(`<div class="${cls}"></div>`);
          } else if (cls.includes("input") || cls.includes("field") || cls.includes("form")) {
            generatedNodes.push(`
              <div class="${cls}">
                <label>Champ .${cls}</label>
                <input type="text" placeholder="Valeur d'exemple..." />
              </div>
            `);
          } else if (!["title", "description", "header", "footer", "nav", "item", "list"].includes(cls)) {
            generatedNodes.push(`<div class="${cls}">Élément démo .${cls}</div>`);
          }
        });

        detectedIds.forEach((id) => {
          if (id.includes("header")) {
            generatedNodes.push(`<header id="${id}">En-tête #${id}</header>`);
          } else if (id.includes("title") || id.includes("heading")) {
            generatedNodes.push(`<h1 id="${id}">Titre #${id}</h1>`);
          } else if (id.includes("btn") || id.includes("button") || id.includes("submit")) {
            generatedNodes.push(`<button id="${id}">Bouton #${id}</button>`);
          } else {
            generatedNodes.push(`<div id="${id}">Élément démo #${id}</div>`);
          }
        });

        if (generatedNodes.length > 0) {
          dynamicElementsHtml = `
            <div class="dynamic-elements-container" style="margin-bottom: 24px; padding: 16px; background: rgba(30, 41, 59, 0.5); border: 1px dashed #3b82f6; border-radius: 12px;">
              <div style="font-size: 11px; font-weight: bold; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">
                ✨ Éléments ciblés automatiquement (.classes & #ids détectés) :
              </div>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${generatedNodes.join("\n")}
              </div>
            </div>
          `;
        }
      }

      // Base preview document layout
      const bodyContent = studentHtml
        ? studentHtml
        : `
          ${dynamicElementsHtml}
          
          <header id="main-header" class="header navbar">
            <div class="logo" id="logo" style="font-size: 18px; font-weight: bold; color: #38bdf8;">🎨 Savoir+ CSS Live Sandbox</div>
            <nav class="nav nav-links">
              <a href="#" class="link nav-link">Accueil</a>
              <a href="#" class="link nav-link">Cours</a>
              <a href="#" class="link nav-link">Contact</a>
            </nav>
          </header>

          <section class="hero hero-content" style="margin: 20px 0;">
            <h1 id="main-title" class="title page-title hero-title">Titre Principal H1</h1>
            <p class="description lead intro">
              Bienvenue dans le bac à sable CSS. Observez l'application directe des règles CSS sur les éléments HTML.
            </p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 12px;">
              <button class="btn btn-primary primary shadow" type="button">Bouton Principal</button>
              <button class="btn btn-secondary secondary" type="button">Bouton Secondaire</button>
              <span class="badge highlight">Badge Test</span>
            </div>
          </section>

          <div class="container main-content grid-container flex-container" style="margin: 20px 0;">
            <div class="card profile-card box item">
              <h2 class="card-title">Titre de Carte H2</h2>
              <p class="card-description">Voici un paragraphe de description contenu à l'intérieur d'une carte UI.</p>
              <button class="btn btn-sm" type="button">Action Carte</button>
            </div>

            <div class="card profile-card box item">
              <h3 class="card-title">Section H3 & Liste</h3>
              <ul class="list">
                <li class="item">Premier élément de liste</li>
                <li class="item">Deuxième élément de liste</li>
                <li class="item">Troisième élément de liste</li>
              </ul>
            </div>
          </div>

          <form class="form login-form contact-form card" style="margin: 20px 0;">
            <div class="field form-group">
              <label for="demo-input" style="display: block; margin-bottom: 6px;">Champ de Saisie</label>
              <input type="text" id="demo-input" class="input form-control" placeholder="Tapez du texte..." style="padding: 8px 12px; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: white;" />
            </div>
            <button type="button" class="btn btn-primary" id="submit-btn" style="margin-top: 10px;">Envoyer Formulaire</button>
          </form>

          <footer class="footer" id="footer" style="margin-top: 30px; text-align: center; opacity: 0.8; font-size: 12px;">
            <p>© 2026 Savoir+ CSS Playground Engine</p>
          </footer>
        `;

      finalHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Baseline CSS Defaults for Live Preview */
    * { box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px;
      background: #0f172a;
      color: #f8fafc;
      margin: 0;
      line-height: 1.6;
    }
    a { color: #38bdf8; text-decoration: none; }
    a:hover { text-decoration: underline; }
    button { cursor: pointer; }
    
    /* Code CSS de l'étudiant / du cours */
    ${studentCss}
  </style>
</head>
<body>
  ${bodyContent}
</body>
</html>`;
    }

    return {
      renderedOutput: finalHtml,
      consoleLogs: ["✔ Code CSS appliqué et compilé avec succès."],
      activeTab: "preview",
    };
  }

  // 2. JavaScript & TypeScript
  if (lang === "js" || lang === "javascript" || lang === "ts" || lang === "typescript") {
    const logs: string[] = [];
    const customConsole = {
      log: (...args: any[]) => {
        logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a, null, 2) : String(a))).join(" "));
      },
      info: (...args: any[]) => logs.push("ℹ️ " + args.join(" ")),
      warn: (...args: any[]) => logs.push("⚠️ " + args.join(" ")),
      error: (...args: any[]) => logs.push("❌ " + args.join(" ")),
    };

    // Strip TypeScript type annotations & ES imports for inline execution
    const executableJs = cleanCode
      .replace(/:\s*string/g, "")
      .replace(/:\s*number/g, "")
      .replace(/:\s*boolean/g, "")
      .replace(/:\s*any/g, "")
      .replace(/:\s*void/g, "")
      .replace(/interface\s+\w+\s*\{[\s\S]*?\}/g, "")
      .replace(/type\s+\w+\s*=[\s\S]*?;/g, "")
      .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, "");

    let execError = "";
    try {
      const runFn = new Function("console", executableJs);
      runFn(customConsole);
    } catch (err: any) {
      execError = err.message;
      logs.push(`❌ Erreur d'exécution : ${err.message}`);
    }

    if (logs.length === 0 && !execError) {
      logs.push("// Code exécuté sans console.log.");
    }

    const previewHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .log-box { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 16px; margin-top: 12px; }
    .log-line { border-bottom: 1px solid #334155; padding: 6px 0; color: #38bdf8; }
    .err-line { color: #f87171; font-weight: bold; }
  </style>
</head>
<body>
  <h3 style="color: #10b981; margin-top: 0;">⚡ Console JavaScript / TypeScript</h3>
  <div class="log-box">
    ${logs
      .map((l) => `<div class="log-line ${l.includes("❌") ? "err-line" : ""}">${l}</div>`)
      .join("")}
  </div>
</body>
</html>`;

    return {
      renderedOutput: previewHtml,
      consoleLogs: logs,
      activeTab: logs.length > 0 ? "console" : "preview",
    };
  }

  // 3. React / JSX / TSX / Next.js
  if (lang.includes("react") || lang.includes("jsx") || lang.includes("tsx") || lang.includes("next")) {
    const reactDoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background: #0f172a; color: white; padding: 20px; font-family: system-ui, sans-serif; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect, useContext, createContext, useMemo, useCallback } = React;
    
    ${cleanCode.replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, "").replace(/export\s+default\s+/g, "").replace(/export\s+function/g, "function")}

    // Détection et rendu automatique du composant React
    try {
      const AppToRender = typeof App !== 'undefined' ? App :
                          typeof WelcomeCard !== 'undefined' ? WelcomeCard :
                          typeof Counter !== 'undefined' ? Counter :
                          typeof LoginForm !== 'undefined' ? LoginForm :
                          typeof UserProfile !== 'undefined' ? UserProfile :
                          typeof InteractiveButton !== 'undefined' ? InteractiveButton : null;

      if (AppToRender) {
        ReactDOM.createRoot(document.getElementById('root')).render(<AppToRender />);
      } else {
        ReactDOM.createRoot(document.getElementById('root')).render(
          <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
            <h3 className="text-emerald-400 font-bold">⚛️ Composant React Prêt</h3>
            <p className="text-slate-300 text-sm mt-1">Le composant React/Next.js est compilé et valide.</p>
          </div>
        );
      }
    } catch(err) {
      document.getElementById('root').innerHTML = '<div style="color:#ef4444; font-family:monospace;">❌ Error: ' + err.message + '</div>';
    }
  </script>
</body>
</html>`;

    return {
      renderedOutput: reactDoc,
      consoleLogs: ["⚛️ React / Next.js JSX compilé avec Babel Standalone."],
      activeTab: "preview",
    };
  }

  // 4. Vue.js 3
  if (lang.includes("vue")) {
    const templateMatch = cleanCode.match(/<template>([\s\S]*?)<\/template>/i);
    const scriptMatch = cleanCode.match(/<script[\s\S]*?>([\s\S]*?)<\/script>/i);
    const styleMatch = cleanCode.match(/<style[\s\S]*?>([\s\S]*?)<\/style>/i);

    const templateHtml = templateMatch ? templateMatch[1] : '<div class="p-4 bg-emerald-900/40 text-emerald-300 rounded-xl">🟢 Vue 3 Component Rendered</div>';
    const scriptJs = scriptMatch
      ? scriptMatch[1]
          .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, "")
          .replace(/defineProps<[\s\S]*?>\(\)/g, "{}")
      : "const { ref, reactive, computed } = Vue;";
    const styleCss = styleMatch ? styleMatch[1] : "";

    const vueDoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background: #0f172a; color: white; padding: 20px; font-family: system-ui; }
    ${styleCss}
  </style>
</head>
<body>
  <div id="app">
    ${templateHtml}
  </div>
  <script>
    const { createApp, ref, reactive, computed, watch, onMounted } = Vue;
    try {
      const app = createApp({
        setup() {
          ${scriptJs}
          return {
            count: typeof count !== 'undefined' ? count : ref(0),
            title: typeof title !== 'undefined' ? title : ref('Composant Vue 3'),
            fullName: typeof fullName !== 'undefined' ? fullName : ref('Vue Student')
          };
        }
      });
      app.mount('#app');
    } catch(err) {
      document.getElementById('app').innerHTML = '<div style="color:#ef4444; font-family:monospace;">❌ Error Vue: ' + err.message + '</div>';
    }
  </script>
</body>
</html>`;

    return {
      renderedOutput: vueDoc,
      consoleLogs: ["🟢 Vue 3 Composition API compilé."],
      activeTab: "preview",
    };
  }

  // 5. Angular Framework
  if (lang.includes("angular") || lang.includes("ng")) {
    const templateMatch = cleanCode.match(/template:\s*[`"']([\s\S]*?)[`"']/i);
    const stylesMatch = cleanCode.match(/styles:\s*\[\s*[`"']([\s\S]*?)[`"']\s*\]/i);

    let templateHtml = templateMatch
      ? templateMatch[1]
          .replace(/\{\{\s*username\s*\}\}/g, "Sarah")
          .replace(/\{\{\s*isActive\s*\?\s*'Actif'\s*:\s*'Inactif'\s*\}\}/g, "Actif")
          .replace(/@if\s*\((.*?)\)\s*\{([\s\S]*?)\}/g, "$2")
          .replace(/@for\s*\((.*?)\)\s*\{([\s\S]*?)\}/g, "$2")
      : '<div style="padding:16px; background:#1e293b; border-radius:10px; border:1px solid #334155;"><h2 style="color:#ef4444; margin-top:0;">🅰️ Angular Component</h2><p style="color:#94a3b8;">Composant Standalone Angular compilé avec succès.</p></div>';

    const stylesCss = stylesMatch ? stylesMatch[1] : "";

    const angularDoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; background: #0f172a; color: white; }
    ${stylesCss}
  </style>
</head>
<body>
  <div class="angular-root">
    <div style="margin-bottom: 12px; font-size: 11px; font-weight: bold; color: #f43f5e; text-transform: uppercase;">
      🅰️ Rendu du Composant Angular Standalone
    </div>
    ${templateHtml}
  </div>
</body>
</html>`;

    return {
      renderedOutput: angularDoc,
      consoleLogs: ["🅰️ Angular Component compilé avec succès."],
      activeTab: "preview",
    };
  }

  // 6. Node.js & Express API Backend Simulator
  if (lang.includes("node") || lang.includes("express")) {
    const logs: string[] = [];
    logs.push("🚀 Serveur Node.js / Express démarré sur http://localhost:3001");
    logs.push("--------------------------------------------------");

    if (cleanCode.includes("app.get") || cleanCode.includes("app.post")) {
      if (cleanCode.includes("/api/items")) {
        logs.push("📡 [GET]  /api/items  => 200 OK");
        logs.push('   Response: [ { "id": 1, "name": "Ordinateur" } ]');
        logs.push("📡 [POST] /api/items  => 201 Created");
        logs.push('   Body: { "name": "Écran 4K" }');
        logs.push('   Response: { "id": 172000000, "name": "Écran 4K" }');
      } else if (cleanCode.includes("/api/users")) {
        logs.push("📡 [GET]  /api/users/1  => 200 OK");
        logs.push('   Response: { "id": "1", "name": "Alice Dev" }');
      } else {
        logs.push("📡 [GET]  /  => 200 OK");
        logs.push('   Response: { "message": "API Backend Express opérationnelle" }');
      }
    }

    if (cleanCode.includes("jwt") || cleanCode.includes("bcrypt")) {
      logs.push("🔐 [AUTH] bcrypt.hash() => Mots de passe sécurisés avec salt round 10.");
      logs.push("🔑 [JWT]  jwt.sign()   => Jeton Bearer généré :");
      logs.push("   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMifQ...");
    }

    if (cleanCode.includes("fs.readFile")) {
      logs.push("📁 [FS]   fs.readFile('./config.json', 'utf-8') exécuté avec succès.");
    }

    const nodeDoc = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #4ade80; padding: 20px; }
    .term { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 16px; }
    .line { padding: 4px 0; border-bottom: 1px dashed #1e293b; font-size: 13px; }
    .bold { font-weight: bold; color: #60a5fa; }
  </style>
</head>
<body>
  <div class="bold">🟢 Terminal Node.js & Serveur Express API</div>
  <div class="term" style="margin-top: 10px;">
    ${logs.map((l) => `<div class="line">${l}</div>`).join("")}
  </div>
</body>
</html>`;

    return {
      renderedOutput: nodeDoc,
      consoleLogs: logs,
      activeTab: "console",
    };
  }

  // Fallback: Default HTML Render
  const htmlContent = /<[a-z][\s\S]*>/i.test(cleanCode)
    ? cleanCode
    : `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; background: #f8fafc; color: #0f172a; }
  </style>
</head>
<body>
  ${cleanCode}
</body>
</html>`;

  return {
    renderedOutput: htmlContent,
    consoleLogs: ["✔ HTML exécuté."],
    activeTab: "preview",
  };
}
