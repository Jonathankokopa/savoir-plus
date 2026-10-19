import Link from "next/link";
import { User, Mail, Lock, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
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
            Créer un compte gratuit
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Rejoins plus de 10 000 apprenants sur la plateforme.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Nom Complet
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ton Prénom et Nom"
                  className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

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
              <label
                htmlFor="password"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Mot de passe
              </label>
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

            <div className="py-2 space-y-1 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Accès illimité à tous les tutoriels</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Certificats de réussite officiels</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-3 font-extrabold text-sm text-white shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Créer mon Compte Gratuit</span>
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs font-semibold text-slate-400">
                Déjà inscrit ?
              </span>
            </div>
          </div>

          <p className="text-center text-sm font-semibold text-slate-600">
            Tu as déjà un compte ?{" "}
            <Link
              href="/login"
              className="font-bold text-emerald-600 hover:text-emerald-700"
            >
              Se connecter
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