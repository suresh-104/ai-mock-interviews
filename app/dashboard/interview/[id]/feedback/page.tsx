import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";

interface CategoryScore {
  name: string;
  score: number;
  comment: string;
}

interface FeedbackData {
  id: string;
  strengths: string[];
  interviewId: string;
  userId: string;
  totalScore: number;
  categoryScores: CategoryScore[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}

interface RouteParams {
  params: {
    id: string;
  };
}

const Feedback = async ({ params }: RouteParams) => {
  const { id } = params;
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = (await getFeedbackByInterviewId({
    interviewId: id,
    userId: user.id,
  })) as FeedbackData;

  if (!feedback) redirect("/");

  // Fonction pour déterminer la couleur du score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 60) return "text-blue-400";
    if (score >= 40) return "text-amber-400";
    return "text-rose-500";
  };

  return (
    <section className="max-w-4xl mx-auto backdrop-blur-sm bg-gray-800/40 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
      {/* En-tête avec dégradé */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 p-6 sm:p-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Feedback de l&rsquo;entretien{" "}
            <span className="capitalize">{interview.role}</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-5 flex-wrap justify-start">
            {/* Score Global */}
            <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gray-700/60 flex items-center justify-center">
                <span
                  className={`text-xl font-bold ${getScoreColor(feedback.totalScore)}`}
                >
                  {feedback.totalScore}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-400">Score global</p>
                <p className="text-sm font-medium">sur 100</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gray-700/60 flex items-center justify-center">
                <Image
                  src="/calendar.svg"
                  width={20}
                  height={20}
                  alt="calendrier"
                  className="opacity-70"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400">Soumis le</p>
                <p className="text-sm font-medium">
                  {dayjs(feedback.createdAt).format("D MMM YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 sm:p-8 space-y-8">
        {/* Évaluation finale */}
        <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700/50">
          <h2 className="text-lg font-medium text-purple-300 mb-3">
            Évaluation finale
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {feedback.finalAssessment}
          </p>
        </div>

        {/* Scores par catégorie */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-blue-300">
            Détail des performances
          </h2>
          <div className="space-y-4">
            {feedback.categoryScores.map((category, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-700/50"
              >
                <div className="bg-gray-800/70 p-4 flex justify-between items-center">
                  <h3 className="font-medium text-gray-200">{category.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(category.score)}`}
                  >
                    {category.score}/100
                  </span>
                </div>
                <div className="p-4 bg-gray-800/30">
                  <p className="text-gray-300 text-sm">{category.comment}</p>
                </div>
                {/* Barre de progression du score */}
                <div className="w-full h-1 bg-gray-800">
                  <div
                    className={`h-full ${
                      category.score >= 80
                        ? "bg-emerald-500"
                        : category.score >= 60
                          ? "bg-blue-500"
                          : category.score >= 40
                            ? "bg-amber-500"
                            : "bg-rose-500"
                    }`}
                    style={{ width: `${category.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forces et Axes d'amélioration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Forces */}
          <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700/50">
            <h2 className="text-lg font-medium text-emerald-400 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Points forts
            </h2>
            {feedback.strengths.length > 0 ? (
              <ul className="space-y-2">
                {feedback.strengths.map((strength, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">
                Aucun point fort spécifique n&rsquo;a encore été identifié.
              </p>
            )}
          </div>

          {/* Axes d'amélioration */}
          <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700/50">
            <h2 className="text-lg font-medium text-amber-400 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Axes d&rsquo;amélioration
            </h2>
            <ul className="space-y-2">
              {feedback.areasForImprovement.map((area, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <span className="text-amber-400 mt-1">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Button className="flex-1" variant={"outline"}>
            <Link
              href="/dashboard"
              className="flex w-full justify-center items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Retour au tableau de bord</span>
            </Link>
          </Button>

          <Button className="flex-1">
            <Link
              href={`/dashboard/interview/${id}`}
              className="flex w-full justify-center items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Refaire l&rsquo;entretien</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
