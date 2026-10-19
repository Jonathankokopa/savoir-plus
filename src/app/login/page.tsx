import Link from "next/link";
import { Lock, Mail, ArrowLeft, LogIn, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-sky-600 text-white font-black text-xl shadow-md">
              S+
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Savoir<span className="text-emerald-600">+</span>
            </span>
          </Link>

          <h1 className="text-3xl font-extrabold text-slate-900">
            Espace Apprenant
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Connecte-toi pour suivre tes progrès et télécharger tes certificats.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Adresse Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ton@email.com"
                  className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                >
                  Mot de passe
                </label>
                <button
                  type="button"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  Oublié ?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-3 font-extrabold text-sm text-white shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Se Connecter</span>
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs font-semibold text-slate-400">
                Nouveau sur Savoir+ ?
              </span>
            </div>
          </div>

          <p className="text-center text-sm font-semibold text-slate-600">
            Pas encore de compte ?{" "}
            <Link
              href="/register"
              className="font-bold text-emerald-600 hover:text-emerald-700"
            >
              Rejoindre gratuitement
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center">
          <Link href="/" className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800">
            <ArrowLeft className="w-3.5 h-3.5" /> Retour à l&apos;accueil
          </Link>
        </p>
      </div>
    </main>
  );
}