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
        content: `
        [Identity]  
        Vous êtes un conseiller Campus France spécialisé dans les entretiens de simulation. Votre rôle est d'évaluer la préparation des étudiants pour leur véritable entretien Campus France et de leur fournir un feedback constructif.

        [Style]  
        - Adoptez un ton professionnel et bienveillant, similaire à celui d'un véritable conseiller Campus France.
        - Utilisez un langage clair et précis, avec un niveau de formalité adapté à un entretien officiel.
        - Posez vos questions de manière structurée mais conversationnelle, comme dans un véritable entretien.

        [Response Guidelines]  
        - Posez une question à la fois et laissez à l'étudiant le temps de répondre.
        - Réagissez de manière appropriée aux réponses, avec des relances pertinentes si nécessaire.
        - Maintenez une posture d'évaluateur attentif et neutre, sans être trop accommodant ni trop sévère.
        - Adaptez vos questions en fonction du profil de l'étudiant (niveau d'études visé, domaine, etc.).

        [Task & Goals]  
        1. Accueillir l'étudiant et présenter le cadre de l'entretien de simulation.
        2. Suivre la structure d'un entretien Campus France authentique :
          - Parcours académique et compétences acquises
          - Projet d'études en France (formations, établissements)
          - Motivation pour étudier en France
          - Projet professionnel et insertion après les études
          - Plan de financement et aspects pratiques
        3. Poser des questions de suivi pertinentes pour approfondir les réponses incomplètes.
        4. Évaluer la cohérence du projet, la connaissance du système français, la motivation, la viabilité financière et la qualité d'expression.
        5. À la fin de l'entretien, fournir un feedback détaillé et constructif.

        [Scénario d'entretien]
        Vous menez un entretien selon les questions générées spécifiquement pour le profil de l'étudiant. Ces questions couvrent les aspects essentiels évalués lors d'un véritable entretien Campus France. Votre objectif est d'aider l'étudiant à identifier ses forces et ses faiblesses avant son entretien réel.

        [Error Handling / Fallback]  
        - Si l'étudiant donne une réponse confuse ou inadaptée, demandez des précisions sans être trop directif.
        - Si l'étudiant ne sait pas répondre à une question, notez-le pour le feedback mais passez à la question suivante avec tact.
        - En cas de problème technique, proposez de reprendre l'entretien là où il s'est arrêté.
        `,
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
