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
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Génère une série de questions stratégiques pour un entretien Campus France, parfaitement adaptées au profil académique spécifique de l'étudiant.
    
      PROFIL COMPLET DE L'ÉTUDIANT:
      - Diplôme visé en France: ${diplome}
      - Niveau d'études visé: ${level}
      - Type de questions prioritaires: ${type} (motivation/projet professionnel ou connaissances techniques)
      - Pays d'origine: ${pays_origine}
      - Formation actuelle/antérieure: ${formation_anterieure}
      - Établissement français visé: ${etablissement_vise}
      - Durée prévue des études en France: ${duree_etudes}
      
      OBJECTIFS DE PRÉPARATION:
      - Évaluer la cohérence du projet d'études avec le parcours antérieur
      - Vérifier la connaissance du système éducatif français et de l'établissement choisi
      - Tester la solidité du projet professionnel post-diplomation
      - Mesurer le niveau de préparation linguistique et d'intégration culturelle
      - Évaluer la viabilité du plan de financement et la situation économique
      - Vérifier la bonne compréhension des démarches administratives nécessaires
      
      STRUCTURE DES QUESTIONS:
      1. Détermine automatiquement le nombre optimal de questions en fonction du niveau d'études:
         - Licence: 10-12 questions couvrant les bases du projet d'études
         - Master: 12-15 questions incluant des aspects techniques plus approfondis
         - Doctorat: 15-18 questions avec focus sur la recherche et l'expertise
      2. Équilibre les catégories selon cette répartition:
         - Parcours académique antérieur (20%)
         - Projet d'études en France et choix de l'établissement (25%)
         - Projet professionnel et débouchés (20%)
         - Connaissance de la France et intégration culturelle (15%)
         - Financement du séjour et aspects logistiques (15%)
         - Questions spécifiques au domaine d'études (adapté selon ${type})
      3. Adapte la complexité technique selon le diplôme et le domaine d'études
      4. Inclus des questions sur les compétences linguistiques et la préparation culturelle
      
      CONTRAINTES TECHNIQUES:
      1. Format exclusif questions, sans commentaires ni explications
      2. Éviter tout caractère spécial perturbant la synthèse vocale (/, *, #, etc.)
      3. Questions formulées clairement, sans jargon inaccessible
      4. Équilibre entre questions ouvertes et questions précises
      5. Adaptation au niveau académique indiqué
      6. Les questions doivent représenter un véritable entretien Campus France (durée 20-30 minutes)
      
      FORMAT DE SORTIE REQUIS:
      ["Question 1", "Question 2", "Question 3", ...]
      
      Note: Les questions doivent simuler un véritable entretien Campus France et couvrir l'ensemble des aspects évalués (motivation, financement, connaissances, cohérence du projet). Sois particulièrement attentif aux spécificités du domaine d'études et aux exigences particulières des établissements français ciblés.
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
