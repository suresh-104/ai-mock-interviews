import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";

export async function POST(request: Request) {
  const { type, diplome, level, amount, userId } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Génère une série de questions stratégiques pour un entretien Campus France, adaptées au profil académique spécifique de l'étudiant.
    
      PROFIL DE L'ÉTUDIANT:
      - Diplôme visé en France: ${diplome}
      - Niveau d'études visé: ${level}
      - Type de questions prioritaires: ${type} (motivation/projet professionnel ou connaissances techniques)
      - Nombre de questions à générer: ${amount}
      
      OBJECTIFS DE PRÉPARATION:
      - Évaluer la cohérence du projet d'études avec le parcours antérieur
      - Vérifier la connaissance du système éducatif français et de l'établissement choisi
      - Tester la solidité du projet professionnel post-diplomation
      - Mesurer le niveau de préparation linguistique et d'intégration culturelle
      
      CONTRAINTES TECHNIQUES:
      1. Format exclusif questions, sans commentaires ni explications
      2. Éviter tout caractère spécial perturbant la synthèse vocale (/, *, #, etc.)
      3. Questions formulées clairement, sans jargon inaccessible
      4. Équilibre entre questions ouvertes et questions précises
      5. Adaptation au niveau académique indiqué (licence/master/doctorat)
      
      FORMAT DE SORTIE REQUIS:
      ["Question 1", "Question 2", "Question 3"]
      
      Note: Les questions doivent simuler un véritable entretien Campus France et couvrir l'ensemble des aspects évalués (motivation, financement, connaissances, cohérence du projet).
      `,
    });

    const interview = {
      diplome: diplome,
      type: type,
      level: level,
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
