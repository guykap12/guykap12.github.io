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
    year: "2025",
    conference: "preprint",
    title: "Follow the Flow: On Information Flow Across Textual Tokens in Text-to-Image Models",
    authors: "Guy Kaplan*, Michael Toker*, Yuval Reif, Yonatan Belinkov, Roy Schwartz",
    paperUrl: "https://arxiv.org/abs/2504.01137",
    codeUrl: "https://github.com/tokeron/lens",
    pageUrl: "https://guykap12.github.io/guykap12.github.io-follow_the_flow/",
    tldr: "The study shows that only a few tokens per word capture its core meaning, leaving many redundant tokens that can impair image generation. Removing these redundant tokens improves generation quality, while patching leaked token representations with their isolated versions effectively mitigates semantic leakage.",
    imageUrl: "/businesswoman.gif",
  },
  {
    year: "2025",
    conference: "ICLR",
    title: "From Tokens to Words: On the Inner Lexicon of LLMs",
    authors: "Guy Kaplan, Matanel Oren, Yuval Reif, Roy Schwartz",
    paperUrl: "https://arxiv.org/pdf/2410.05864",
    codeUrl: "https://github.com/schwartz-lab-NLP/Tokens2Words",
    pageUrl: "https://guykap12.github.io/FromTokens2Words/",
    tldr: "LLMs internally reconstruct full-word representations from sub-word tokens, enabling understanding of out-of-vocabulary words and reducing input length without fine-tuning.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    imageUrl: "https://q2kdtpomknobn1v5.public.blob.vercel-storage.com/illustration_paper-hMKlJIUo0CmMxxe3zzXaCQ7h9MHqhr.png"
  },
];
