import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";

export async function POST(request: Request) {
  const {
    type,
    diplome,
    level,
    userId,
    formation_anterieure,
    etablissement_vise,
    duree_etudes,
    pays_origine,
  } = await request.json();

  try {
    const { text: questionsRaw } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Génère une série de questions stratégiques pour un entretien Campus France, adaptées au profil académique de l’étudiant.
    
      **Profil de l'étudiant :**
      - Diplôme visé : ${diplome}
      - Niveau d’études : ${level}
      - Type de questions prioritaires : ${type} (motivation/projet professionnel ou connaissances techniques)
      - Pays d’origine : ${pays_origine}
      - Formation actuelle/antérieure : ${formation_anterieure}
      - Établissement ciblé : ${etablissement_vise}
      - Durée des études : ${duree_etudes}
    
      **Objectifs des questions :**
      - Vérifier la cohérence du projet d’études
      - Tester la préparation et la connaissance du système éducatif français
      - Évaluer le projet professionnel post-études
      - Mesurer le niveau linguistique et l’intégration culturelle
      - Vérifier la viabilité du financement
    
      **Contraintes de génération :**
      - Formulation claire, adaptée à un entretien officiel
      - Questions ouvertes et précises pour une discussion naturelle
      - Complexité ajustée selon le niveau d’études
      - Aucun texte supplémentaire en dehors du tableau JSON
    
      **Format de sortie :**
      ["Question 1", "Question 2", "Question 3", ...]
    
      IMPORTANT : Retourne uniquement un tableau JSON valide sans texte superflu.`,
    });

    // Clean up the response to ensure it's valid JSON
    let questionsText = questionsRaw.trim();

    // Remove markdown code blocks if present
    if (
      questionsText.startsWith("```json") ||
      questionsText.startsWith("```")
    ) {
      questionsText = questionsText.replace(
        /^```json\n|\n```$|^```\n|\n```$/g,
        "",
      );
    }

    // Parse the JSON array
    let questions;
    try {
      questions = JSON.parse(questionsText);
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      console.log("Raw response:", questionsRaw);

      // Fallback: Try to extract the array portion if JSON parse fails
      const arrayMatch = questionsText.match(/\[\s*".*"\s*(?:,\s*".*"\s*)*\]/s);
      if (arrayMatch) {
        try {
          questions = JSON.parse(arrayMatch[0]);
        } catch (fallbackError) {
          throw new Error(
            "Failed to parse questions array: " + fallbackError.message,
          );
        }
      } else {
        throw new Error("Unable to extract valid JSON array from response");
      }
    }

    const interview = {
      diplome: diplome,
      type: type,
      level: level,
      questions: questions,
      userId: userId,
      finalized: true,
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      {
        success: false,
        error: error.message || String(error),
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Merci!" }, { status: 200 });
}
