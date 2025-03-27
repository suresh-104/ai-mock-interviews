import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";

export async function POST(request: Request) {
  const { type, diplome, level, domaine, amount, userId } =
    await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Préparez des questions pour un entretien Campus France.
        Le diplôme visé est ${diplome}.
        Le niveau d'études visé est ${level}.
        Le domaine d'études est: ${domaine}.
        L'orientation entre questions de motivation et questions techniques devrait pencher vers: ${type}.
        Le nombre de questions requises est: ${amount}.
        Veuillez retourner uniquement les questions, sans aucun texte supplémentaire.
        Les questions seront lues par un assistant vocal, donc n'utilisez pas "/", "*" ou tout autre caractère spécial qui pourrait perturber l'assistant vocal.
        Retournez les questions formatées comme ceci:
        ["Question 1", "Question 2", "Question 3"]
        
        Merci! <3
    `,
    });

    const interview = {
      diplome: diplome,
      type: type,
      level: level,
      domaine: domaine,
      questions: JSON.parse(questions),
      userId: userId,
      finalized: true,
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Merci!" }, { status: 200 });
}
