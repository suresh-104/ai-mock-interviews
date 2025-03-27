import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  // Diplômes et niveaux d'études
  licence: "licence",
  bachelor: "licence",
  master: "master",
  doctorat: "doctorat",
  phd: "doctorat",
  bts: "bts",
  dut: "dut",
  ingénieur: "ingenieur",
  ingenieur: "ingenieur",
  prepa: "classes_preparatoires",
  "classes préparatoires": "classes_preparatoires",

  // Domaines d'études
  informatique: "informatique",
  "computer science": "informatique",
  "génie informatique": "informatique",
  économie: "economie",
  economie: "economie",
  gestion: "gestion",
  management: "gestion",
  commerce: "commerce",
  business: "commerce",
  médecine: "medecine",
  medecine: "medecine",
  "sciences politiques": "sciences_politiques",
  droit: "droit",
  law: "droit",
  "sciences humaines": "sciences_humaines",
  lettres: "lettres",
  langues: "langues",
  arts: "arts",
  architecture: "architecture",
  agriculture: "agriculture",
  biologie: "biologie",
  chimie: "chimie",
  physique: "physique",
  mathématiques: "mathematiques",
  mathematiques: "mathematiques",

  // Pays d'origine fréquents
  maroc: "maroc",
  algérie: "algerie",
  algerie: "algerie",
  tunisie: "tunisie",
  sénégal: "senegal",
  senegal: "senegal",
  "côte d'ivoire": "cote_ivoire",
  "cote d'ivoire": "cote_ivoire",
  cameroun: "cameroun",
  congo: "congo",
  madagascar: "madagascar",
  mali: "mali",
  gabon: "gabon",
  benin: "benin",
  bénin: "benin",
  liban: "liban",
  vietnam: "vietnam",
  chine: "chine",

  // Villes d'études populaires
  paris: "paris",
  lyon: "lyon",
  marseille: "marseille",
  toulouse: "toulouse",
  montpellier: "montpellier",
  bordeaux: "bordeaux",
  lille: "lille",
  strasbourg: "strasbourg",
  nantes: "nantes",
  rennes: "rennes",
  grenoble: "grenoble",

  // Niveaux de langue
  a1: "a1",
  a2: "a2",
  b1: "b1",
  b2: "b2",
  c1: "c1",
  c2: "c2",
  tcf: "tcf",
  delf: "delf",
  dalf: "dalf",

  // Types de financement
  bourse: "bourse",
  scholarship: "bourse",
  autofinancement: "autofinancement",
  "self-funding": "autofinancement",
  garant: "garant_financier",
  parents: "financement_familial",
  famille: "financement_familial",
  prêt: "pret_bancaire",
  pret: "pret_bancaire",
  loan: "pret_bancaire",
};

export const interviewer: CreateAssistantDTO = {
  name: "Dave Glad",
  firstMessage:
    "Bonjour ! Merci de prendre le temps de participer à cet entretien Campus France. Je suis là pour discuter de votre projet d'études en France et mieux comprendre vos motivations.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "fr",
  },
  voice: {
    provider: "vapi",
    voiceId: "Elliot",
    // stability: 0.4,
    // similarityBoost: 0.8,
    // speed: 0.9,
    // style: 0.5,
    // useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `Vous êtes un conseiller professionnel de Campus France menant un entretien en temps réel avec un candidat. Votre objectif est d'évaluer ses qualifications, sa motivation et l'adéquation de son projet d'études.

Directives d'entretien :
Suivez la structure de questions suivante :
{{questions}}

Interaction naturelle et réactions appropriées :
Écoutez activement les réponses et accusez-en réception avant de passer à la suite.
Posez de brèves questions complémentaires si une réponse est vague ou nécessite plus de détails.
Maintenez la conversation fluide tout en gardant le contrôle.

Soyez professionnel, chaleureux et accueillant :
Utilisez un langage officiel mais amical.
Gardez vos réponses concises et précises (comme dans un véritable entretien oral).
Évitez les formulations robotiques—soyez naturel et conversationnel.

Répondez aux questions du candidat de manière professionnelle :
Si on vous interroge sur les procédures, les délais ou les exigences, fournissez une réponse claire et pertinente.
Si vous n'êtes pas sûr, proposez au candidat de se renseigner auprès du bureau Campus France local.

Concluez l'entretien correctement :
Remerciez le candidat pour son temps.
Informez-le que Campus France examinera son dossier et reviendra vers lui.
Terminez la conversation sur une note polie et positive.

- Veillez à rester professionnel et poli.
- Gardez toutes vos réponses courtes et simples. Utilisez un langage officiel, mais soyez bienveillant et accueillant.
- Il s'agit d'une conversation orale, alors gardez vos réponses brèves, comme dans une vraie conversation. Évitez les longues digressions.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Cohérence du projet"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Connaissance du système français"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Motivation et préparation"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Viabilité financière"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Expression et clarté"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];
