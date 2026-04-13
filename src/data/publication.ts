export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  pageUrl?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "ACL",
    title: "Follow the Flow: On Information Flow Across Textual Tokens in Text-to-Image Models",
    authors: "Guy Kaplan*, Michael Toker*, Yuval Reif, Yonatan Belinkov, Roy Schwartz (*equal contribution)",
    paperUrl: "https://arxiv.org/abs/2504.01137",
    codeUrl: "https://github.com/tokeron/lens",
    pageUrl: "https://guykap12.github.io/guykap12.github.io-follow_the_flow/",
    imageUrl: "/follow_the_flow_main_results.jpeg",
  },
  {
    year: "2026",
    conference: "ACL Findings",
    title: "Vocab Diet: Reshaping the Vocabularies of LLMs with Vector Arithmetic",
    authors: "Yuval Reif, Guy Kaplan, Roy Schwartz",
    paperUrl: "https://arxiv.org/abs/2510.17001",
    pageUrl: "https://vocabdiet.github.io/",
    imageUrl: "/vocabDiet_motivation.png",
  },
  {
    year: "2025",
    conference: "ICLR",
    title: "From Tokens to Words: On the Inner Lexicon of LLMs",
    authors: "Guy Kaplan, Matanel Oren, Yuval Reif, Roy Schwartz",
    paperUrl: "https://arxiv.org/abs/2410.05864",
    codeUrl: "https://github.com/schwartz-lab-NLP/Tokens2Words",
    pageUrl: "https://guykap12.github.io/FromTokens2Words/",
    imageUrl: "https://q2kdtpomknobn1v5.public.blob.vercel-storage.com/illustration_paper-hMKlJIUo0CmMxxe3zzXaCQ7h9MHqhr.png",
  },
];

export interface Preprint {
  year: string;
  title: string;
  authors: string;
  paperUrl?: string;
  venue?: string;
  imageUrl?: string;
}

export const preprintData: Preprint[] = [
  {
    year: "2026",
    title: "SFT-Induced Hallucinations as a Continual Learning Problem",
    authors: "Guy Kaplan, Zorik Gekhman, Zhen Zhu, Yuval Reif, Lotem Rozner, Swabha Swayamdipta, Derek Hoiem, Roy Schwartz",
    venue: "Submitted to CoLM 2026",
    imageUrl: "/hallucinations_fig.png",
  },
  {
    year: "2026",
    title: "More Than Words: Compositional Tokenization for Efficient Language Models",
    authors: "Yuval Reif, Guy Kaplan, Roy Schwartz",
    venue: "Submitted to CoLM 2026",
    imageUrl: "/more_than_words_main_example.png",
  },
];
