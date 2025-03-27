"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { feedbackSchema } from "@/constants";

export async function createFeedback(params: CreateFeedbackParams) {
  const { interviewId, userId, transcript, feedbackId } = params;

  try {
    const formattedTranscript = transcript
      .map(
        (sentence: { role: string; content: string }) =>
          `- ${sentence.role}: ${sentence.content}\n`,
      )
      .join("");

    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }),
      schema: feedbackSchema,
      prompt: `
         Vous êtes un expert en préparation aux entretiens Campus France. Votre rôle est d’évaluer la performance du candidat tout en lui fournissant des corrections et des conseils pour améliorer ses réponses. Vous ne vous contentez pas d’attribuer des notes, vous identifiez les points faibles et proposez des solutions concrètes pour l’aider à s’améliorer.  

**Votre approche :**  
- Analysez les réponses du candidat avec précision.  
- Identifiez les points forts et les lacunes dans son discours.  
- Expliquez les erreurs et proposez des conseils pour qu’il puisse mieux structurer ses réponses.  
- Exigez que le candidat **prenne des notes** après chaque correction afin qu’il puisse progresser.  

### **📌 Transcription de l’entretien :**  
${formattedTranscript}  

### **📊 Évaluation et conseils d’amélioration**  
Veuillez attribuer une note entre **0 et 100** pour chaque critère, en expliquant votre évaluation et en fournissant des recommandations concrètes pour chaque axe d’amélioration.  

1️⃣ **Cohérence du projet**  
- Le projet d’études est-il bien construit et en adéquation avec le parcours académique et professionnel du candidat ?  
- Le choix de la formation et des établissements est-il justifié et pertinent ?  
- Le candidat montre-t-il une réflexion approfondie sur son avenir ?  
💡 **Si le projet manque de cohérence, expliquez-lui comment mieux articuler ses choix et les rendre plus convaincants.**  

2️⃣ **Connaissance du système français**  
- Le candidat comprend-il bien le fonctionnement du système éducatif français ?  
- Connaît-il en détail les établissements et formations qu’il vise ?  
- A-t-il une idée précise des exigences et des opportunités offertes par le système français ?  
💡 **S’il montre des lacunes, indiquez-lui les points essentiels qu’il doit approfondir.**  

3️⃣ **Motivation et préparation**  
- Le candidat a-t-il effectué des recherches approfondies sur sa formation et sa future vie en France ?  
- Son choix de la France est-il justifié de manière solide et argumentée ?  
- A-t-il une bonne préparation linguistique et culturelle ?  
💡 **Si sa motivation semble faible ou mal exprimée, guidez-le pour mieux structurer ses arguments.**  

4️⃣ **Viabilité financière**  
- Son plan de financement est-il réaliste et détaillé ?  
- A-t-il une idée précise des coûts de la vie et des ressources dont il dispose ?  
- Sait-il expliquer comment il couvrira ses dépenses (frais de scolarité, logement, alimentation) ?  
💡 **S’il ne sait pas répondre clairement, donnez-lui des pistes pour mieux présenter son dossier financier.**  

5️⃣ **Expression et clarté**  
- S'exprime-t-il de manière fluide et bien structurée ?  
- Ses réponses sont-elles claires, convaincantes et sans ambiguïté ?  
- Son discours est-il logique et bien organisé ?  
💡 **Si son expression est confuse ou trop hésitante, donnez-lui des conseils sur la manière d’améliorer son aisance orale.**  

### **🎯 Bilan et plan d’amélioration**  
- Quels sont les **points forts** du candidat ?  
- Quelles sont ses **faiblesses majeures** et comment peut-il les corriger ?  
- Quelles sont les **trois actions prioritaires** qu’il doit mettre en place pour être prêt pour son entretien réel ?  

⚠️ **Rappelez toujours au candidat de prendre des notes** après chaque retour afin d’ancrer ses apprentissages et éviter les mêmes erreurs lors de son véritable entretien.  

        `,
      system:
        "Vous êtes un expert en préparation aux entretiens Campus France. Votre mission est d’évaluer le candidat selon les critères officiels de Campus France, tout en lui fournissant des retours constructifs pour améliorer ses réponses. Vous ne vous contentez pas d’analyser : vous identifiez les points faibles, expliquez les erreurs et proposez des solutions concrètes pour l’aider à progresser. Votre objectif est que le candidat soit parfaitement préparé pour réussir son entretien réel.",
    });

    const feedback = {
      interviewId: interviewId,
      userId: userId,
      totalScore: object.totalScore,
      categoryScores: object.categoryScores,
      strengths: object.strengths,
      areasForImprovement: object.areasForImprovement,
      finalAssessment: object.finalAssessment,
      createdAt: new Date().toISOString(),
    };

    let feedbackRef;

    if (feedbackId) {
      feedbackRef = db.collection("feedback").doc(feedbackId);
    } else {
      feedbackRef = db.collection("feedback").doc();
    }

    await feedbackRef.set(feedback);

    return { success: true, feedbackId: feedbackRef.id };
  } catch (error) {
    console.error("Error saving feedback:", error);
    return { success: false };
  }
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const interview = await db.collection("interviews").doc(id).get();

  return interview.data() as Interview | null;
}

export async function getFeedbackByInterviewId(
  params: GetFeedbackByInterviewIdParams,
): Promise<Feedback | null> {
  const { interviewId, userId } = params;

  const querySnapshot = await db
    .collection("feedback")
    .where("interviewId", "==", interviewId)
    .where("userId", "==", userId)
    .limit(1)
    .get();

  if (querySnapshot.empty) return null;

  const feedbackDoc = querySnapshot.docs[0];
  return { id: feedbackDoc.id, ...feedbackDoc.data() } as Feedback;
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams,
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;

  const interviews = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getInterviewsByUserId(
  userId: string,
): Promise<Interview[] | null> {
  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}
