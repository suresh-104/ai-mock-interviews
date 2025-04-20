import dayjs from "dayjs";
import Link from "next/link";
import {
  Clock,
  Calendar,
  Star,
  ArrowRight,
  CheckCircle,
  FileText,
} from "lucide-react";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import { getFeedbackByInterviewId } from "@/lib/actions/general.action";
import { Progress } from "./ui/progress";

interface InterviewCardProps {
  interviewId: string;
  userId?: string;
  role: string;
  type: string;
  techstack?: string;
  createdAt?: Date;
}

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback =
    userId && interviewId
      ? await getFeedbackByInterviewId({
          interviewId,
          userId,
        })
      : null;

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  // Style amélioré pour les badges avec des couleurs plus riches
  const badgeConfig = {
    Behavioral: {
      color: "bg-amber-100 text-amber-700 border-amber-200",
      icon: <Clock size={14} className="text-amber-500" />,
    },
    Mixed: {
      color: "bg-violet-100 text-violet-700 border-violet-200",
      icon: <CheckCircle size={14} className="text-violet-500" />,
    },
    Technical: {
      color: "bg-blue-100 text-blue-700 border-blue-200",
      icon: <FileText size={14} className="text-blue-500" />,
    },
  }[normalizedType] || {
    color: "bg-gray-100 text-gray-700 border-gray-200",
    icon: <FileText size={14} className="text-gray-500" />,
  };

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now(),
  ).format("MMM D, YYYY");

  // Utilisation de la valeur du score pour calculer le niveau de performance
  const score = feedback?.totalScore || 0;
  const performanceLevel =
    score >= 80
      ? "Excellent"
      : score >= 70
        ? "Bon"
        : score >= 60
          ? "Satisfaisant"
          : score >= 40
            ? "À améliorer"
            : "Insuffisant";

  const performanceColor =
    score >= 80
      ? "text-emerald-600"
      : score >= 70
        ? "text-green-600"
        : score >= 60
          ? "text-amber-600"
          : score >= 40
            ? "text-orange-600"
            : "text-rose-600";

  // Calcul du pourcentage pour la barre de progression
  const scorePercentage = score || 0;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 w-full max-w-sm">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-xl text-gray-800 capitalize">
            {role} Interview
          </h3>
          {techstack && (
            <p className="text-sm text-gray-500 mt-1">{techstack}</p>
          )}
        </div>

        <Badge
          className={`${badgeConfig.color} flex items-center gap-1.5 px-2.5 py-1`}
        >
          {badgeConfig.icon}
          <span>{normalizedType}</span>
        </Badge>
      </div>

      <div className="flex flex-row gap-5 mt-4">
        <div className="flex flex-row gap-2 items-center text-gray-600">
          <Calendar size={16} className="text-gray-400" />
          <p className="text-sm">{formattedDate}</p>
        </div>

        {feedback?.totalScore && (
          <div className="flex flex-row gap-2 items-center text-gray-600">
            <Star size={16} className="text-amber-400 fill-amber-400" />
            <p className="text-sm font-medium">{feedback.totalScore}/100</p>
          </div>
        )}
      </div>

      {feedback?.totalScore ? (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1.5">
            <p className="text-sm text-gray-600">Performance</p>
            <p className={`text-sm font-medium ${performanceColor}`}>
              {performanceLevel}
            </p>
          </div>
          <Progress
            value={scorePercentage}
            className="h-2 bg-gray-100"

            // indicatorClassName={
            //   score >= 80 ? "bg-emerald-500" :
            //   score >= 70 ? "bg-green-500" :
            //   score >= 60 ? "bg-amber-500" :
            //   score >= 40 ? "bg-orange-500" : "bg-rose-500"
            // }
          />
        </div>
      ) : null}

      <div className="mt-4 min-h-[60px]">
        {feedback?.finalAssessment ? (
          <p className="text-gray-600 text-sm line-clamp-3">
            {feedback.finalAssessment}
          </p>
        ) : (
          <p className="text-gray-400 text-sm italic">
            Complétez cet entretien pour recevoir une évaluation détaillée et
            des conseils d&rsquo;amélioration.
          </p>
        )}
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100">
        <Button
          className={
            feedback
              ? "bg-indigo-600 hover:bg-indigo-700 text-white w-full justify-between"
              : "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 w-full justify-between"
          }
        >
          <Link
            href={
              feedback
                ? `/dashboard/interview/${interviewId}/feedback`
                : `/dashboard/interview/${interviewId}`
            }
            className="flex w-full justify-between items-center"
          >
            {feedback ? "Voir les résultats" : "Commencer l'entretien"}
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InterviewCard;
