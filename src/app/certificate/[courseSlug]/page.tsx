"use client";

import Link from "next/link";
import { use } from "react";
import { useProgress } from "../../learn/ProgressContext";
import { getCertificateInfo } from "@/data/coursesData";

type Certificate = {
  courseTitle: string;
  pathTitle: string;
  totalLessons: number;
  pathSlug: string;
};

const certificates: Record<string, Certificate> = {
  "utiliser-ordinateur": {
    courseTitle: "Les bases de l'informatique",
    pathTitle: "Compétences numériques",
    totalLessons: 40,
    pathSlug: "numerique",
  },

  "comprendre-son-argent": {
    courseTitle: "Comprendre son argent",
    pathTitle: "Finance personnelle",
    totalLessons: 4,
    pathSlug: "finance",
  },

  "construire-son-cv": {
    courseTitle: "Construire son CV",
    pathTitle: "Carrière",
    totalLessons: 5,
    pathSlug: "carriere",
  },
};

type CertificatePageProps = {
  params: Promise<{
    courseSlug: string;
  }>;
};

export default function CertificatePage({
  params,
}: CertificatePageProps) {
  const { courseSlug } = use(params);

  const {
    getCompletedCount,
    isExamPassed,
    getExamResult,
  } = useProgress();

  const certificate = getCertificateInfo(courseSlug);

  if (!certificate) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 text-6xl">🎓</div>

          <h1 className="text-3xl font-bold text-slate-950">
            Certificat introuvable
          </h1>

          <p className="mt-4 text-slate-600">
            Ce certificat n&apos;existe pas ou n&apos;est pas
            encore disponible.
          </p>

          <Link
            href="/learn"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            ← Retour aux parcours
          </Link>
        </div>
      </main>
    );
  }

  const courseKey = `${certificate.pathSlug}/${courseSlug}`;

  const completedLessons = Math.min(
    getCompletedCount(courseKey),
    certificate.totalLessons,
  );

  const progress =
    certificate.totalLessons > 0
      ? Math.round(
          (completedLessons / certificate.totalLessons) * 100,
        )
      : 0;

  const allLessonsCompleted =
    completedLessons >= certificate.totalLessons;

  const examPassed = isExamPassed(courseKey);
  const examResult = getExamResult(courseKey);

  const certificateAvailable =
    allLessonsCompleted && examPassed;

  const certificateId = `SAV-${courseSlug
    .toUpperCase()
    .slice(0, 6)}-2026`;

  function handlePrint() {
    window.print();
  }

  async function handleShare() {
    const shareData = {
      title: `Certificat Savoir+ - ${certificate.courseTitle}`,
      text: `J'ai terminé avec succès le cours "${certificate.courseTitle}" sur Savoir+.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          window.location.href,
        );

        window.alert(
          "Le lien du certificat a été copié dans le presse-papiers.",
        );

        return;
      }

      window.alert(
        "Le partage n'est pas disponible sur cet appareil.",
      );
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      window.alert(
        "Impossible de partager le certificat pour le moment.",
      );
    }
  }

  if (!certificateAvailable) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <div className="mb-6 text-6xl">🎓</div>

            <h1 className="text-3xl font-bold text-slate-950">
              Certificat pas encore disponible
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Termine toutes les étapes du cours et réussis
              l&apos;examen final avec au moins 70% pour obtenir
              ton certificat.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {/* Leçons */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">
                    1. Leçons du cours
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {completedLessons} sur{" "}
                    {certificate.totalLessons} leçons terminées
                  </p>
                </div>

                <span
                  className={`text-xl ${
                    allLessonsCompleted
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  {allLessonsCompleted ? "✓" : "○"}
                </span>
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-2 text-right text-sm font-semibold text-blue-600">
                {progress}%
              </p>
            </div>

            {/* Examen */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">
                    2. Examen final
                  </p>

                  {!allLessonsCompleted ? (
                    <p className="mt-1 text-sm text-slate-500">
                      Termine d&apos;abord toutes les leçons.
                    </p>
                  ) : examPassed ? (
                    <p className="mt-1 text-sm text-green-600">
                      Examen réussi avec {examResult.bestScore}%.
                    </p>
                  ) : examResult.attempts > 0 ? (
                    <p className="mt-1 text-sm text-slate-500">
                      Meilleur score : {examResult.bestScore}%.
                      Score minimum : 70%.
                    </p>
                  ) : (
                    <p className="mt-1 text-sm text-slate-500">
                      Score minimum requis : 70%.
                    </p>
                  )}
                </div>

                <span
                  className={`text-xl ${
                    examPassed
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  {examPassed ? "✓" : "○"}
                </span>
              </div>

              {allLessonsCompleted && !examPassed && (
                <Link
                  href={`/learn/${certificate.pathSlug}/${courseSlug}/exam`}
                  className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  {examResult.attempts > 0
                    ? "Refaire l'examen"
                    : "Passer l'examen"}
                </Link>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/learn/${certificate.pathSlug}/${courseSlug}`}
              className="inline-flex rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              ← Retour au cours
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            size: landscape;
            margin: 0;
          }

          html,
          body {
            background: white !important;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .certificate-page {
            min-height: 100vh !important;
            padding: 20px !important;
            background: white !important;
          }

          .certificate-header,
          .certificate-actions,
          .certificate-footer {
            display: none !important;
          }

          .certificate-wrapper {
            max-width: none !important;
            padding: 0 !important;
          }

          .certificate-card {
            width: 100% !important;
            max-width: none !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }

          .certificate-inner {
            border-width: 4px !important;
          }

          .certificate-content {
            min-height: 90vh !important;
          }
        }
      `}</style>

      <main className="certificate-page min-h-screen bg-slate-100 px-6 py-12 md:py-20">
        <div className="certificate-wrapper mx-auto max-w-5xl">
          {/* Header */}
          <div className="certificate-header mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-slate-950"
            >
              Savoir<span className="text-blue-600">+</span>
            </Link>

            <Link
              href="/learn"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Retour aux parcours
            </Link>
          </div>

          {/* Certificate */}
          <div className="certificate-card border border-slate-300 bg-white p-6 shadow-2xl md:p-10 rounded-3xl relative overflow-hidden">
            <div className="certificate-inner border-4 border-emerald-600 p-3 rounded-2xl">
              <div className="certificate-content border-2 border-dashed border-emerald-200 px-6 py-12 text-center md:px-16 md:py-16 bg-gradient-to-b from-white via-emerald-50/20 to-white rounded-xl relative">
                
                {/* Gold Seal Decorative Badge */}
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 border-4 border-white shadow-lg flex items-center justify-center text-slate-900 font-extrabold text-2xl mb-6">
                  🏆
                </div>

                <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-emerald-600">
                  Savoir+ Education System
                </p>

                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Certificat Officiel de Réussite
                </p>

                <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                  Attestation de Compétences
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
                  Le présent certificat est attribué avec mention à :
                </p>

                <div className="mx-auto mt-4 max-w-xl border-b-2 border-emerald-500 pb-3">
                  <p className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                    Apprenant(e) Savoir+
                  </p>
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
                  pour avoir suivi l&apos;intégralité des leçons et validé l&apos;examen final du cours :
                </p>

                <h2 className="mt-4 text-2xl font-black text-emerald-700 md:text-3xl">
                  {certificate.courseTitle}
                </h2>

                <p className="mt-2 text-xs font-bold text-slate-500">
                  Parcours Général : {certificate.pathTitle}
                </p>

                <div className="mx-auto mt-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-200 px-4 py-2 text-xs font-extrabold text-emerald-800">
                  <span>✓ Examen Final Validé avec {examResult.bestScore}% de réussite</span>
                </div>

                <div className="mx-auto mt-10 grid max-w-2xl gap-8 border-t border-slate-200 pt-8 sm:grid-cols-2 text-left">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      Date d&apos;Émission
                    </p>
                    <p className="mt-1 font-bold text-slate-900 text-sm">
                      {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      N° d&apos;Authentification Unique
                    </p>
                    <p className="mt-1 font-mono text-xs font-bold text-emerald-700">
                      {certificateId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="certificate-actions mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-sm font-extrabold text-white shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Imprimer / Télécharger (PDF)</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition-all"
            >
              Partager le Certificat
            </button>
          </div>

          <p className="certificate-footer mt-6 text-center text-xs text-slate-400">
            Certificat généré automatiquement par la plateforme d&apos;apprentissage Savoir+.
          </p>
        </div>
      </main>
    </>
  );
}