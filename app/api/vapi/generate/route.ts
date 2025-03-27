import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
  const { type, diplome, level, domaine, amount, userId } =
    await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `🌍 **Expert Mondial en Préparation aux Entretiens Campus France**  
    
      Vous êtes un **expert reconnu à l’échelle internationale** dans la préparation aux entretiens Campus France.  
      Votre rôle est de concevoir un **questionnaire stratégique**, parfaitement adapté au profil du candidat, afin de l’aider à maximiser ses chances de succès.  
    
      **📌 Informations sur le candidat :**  
      - 🎓 **Diplôme visé** : ${diplome}  
      - 📈 **Niveau d'études visé** : ${level}  
      - 🏛️ **Domaine d’études** : ${domaine}  
      - 🎯 **Type de questions privilégié** : ${type} (motivation/technique)  
      - 🔢 **Nombre de questions requises** : ${amount}  
    
      **🎯 Objectif :**  
      Concevoir des questions précises et engageantes qui permettent d’évaluer :  
      ✅ La **cohérence du projet d’études** avec son parcours.  
      ✅ Sa **compréhension du système éducatif français** et de la formation visée.  
      ✅ Son **motivation réelle** et sa capacité à défendre son projet.  
      ✅ La **viabilité de son plan de financement**.  
      ✅ Son **aisance à communiquer et structurer ses idées**.  
    
      **⚠️ Consignes essentielles :**  
      - **Générer uniquement les questions**, sans texte supplémentaire.  
      - **Personnaliser les questions** pour refléter le projet du candidat.  
      - **Ne pas utiliser de caractères spéciaux** comme "/", "*", qui pourraient perturber un assistant vocal.  
      - **Retourner les questions dans ce format précis** :  
        ["Question 1", "Question 2", "Question 3", ...]  
    
      🏆 **Créez un questionnaire pertinent et stratégique qui permettra au candidat d’exceller lors de son entretien.** 🚀`,
    });

    const interview = {
      diplome: diplome,
      type: type,
      level: level,
      domaine: domaine.split(","),
      questions: JSON.parse(questions),
      userId: userId,
      finalized: true,
      coverImage: getRandomInterviewCover(),
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
