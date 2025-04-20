import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { PlusCircle, History, Clock } from "lucide-react";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id || ""),
    getLatestInterviews({ userId: user?.id || "" }),
  ]);

  const hasPastInterviews = userInterviews && userInterviews?.length > 0;
  const hasUpcomingInterviews = allInterview && allInterview?.length > 0;

  console.log(userInterviews, "userInterviews");
  console.log(allInterview, "allInterview");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section héro avec gradient et meilleur contraste */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-6 max-w-lg z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Préparez-vous aux entretiens avec l&rsquo;entraînement et les
              retours alimentés par l&rsquo;IA
            </h1>
            <p className="text-lg text-gray-600">
              Entraînez-vous avec de vraies questions d&rsquo;entretien et
              obtenez des retours instantanés pour améliorer vos compétences.
            </p>

            <Button
              asChild
              className="bg-indigo-600 hover:bg-indigo-700 transition-all w-fit text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg"
            >
              <Link
                href="/dashboard/interview"
                className="flex items-center gap-2"
              >
                <PlusCircle size={18} />
                Commencer un entretien
              </Link>
            </Button>
          </div>

          <div className="relative w-full md:w-auto">
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-100 rounded-full opacity-50"></div>
            <Image
              src="/robot.png"
              alt="robot-assistant"
              width={400}
              height={400}
              className="relative z-10 max-sm:w-full max-sm:h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section vos entretiens avec style amélioré */}
      <section className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-2">
          <History size={24} className="text-indigo-500" />
          <h2 className="text-2xl font-semibold">Vos entretiens</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                // techstack={interview.techstack}
                // createdAt={interview.createdAt}
              />
            ))
          ) : (
            <div className="col-span-full bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <History size={48} className="text-gray-400" />
                <p className="text-gray-600">
                  Vous n&rsquo;avez pas encore passé d&rsquo;entretiens
                </p>
                <Button
                  asChild
                  className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-all"
                >
                  <Link href="/dashboard/interview">Commencer maintenant</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section passer des entretiens avec distinction visuelle */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Clock size={24} className="text-emerald-500" />
          <h2 className="text-2xl font-semibold">Passer des entretiens</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                // techstack={interview.techstack}
                // createdAt={interview.createdAt}
              />
            ))
          ) : (
            <div className="col-span-full bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <Clock size={48} className="text-gray-400" />
                <p className="text-gray-600">
                  Il n&rsquo;y a pas d&rsquo;entretiens disponibles pour le
                  moment
                </p>
                <Button
                  asChild
                  className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-all"
                >
                  <Link href="/dashboard">Consulter le tableau de bord</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
