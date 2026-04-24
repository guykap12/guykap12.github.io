export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "Apr. 2026",
    title: "ACL 2026",
    description: "Paper accepted at ACL 2026: \"Follow the Flow: On Information Flow Across Textual Tokens in Text-to-Image Models\".",
    link: "https://arxiv.org/abs/2504.01137",
  },
  {
    date: "Apr. 2026",
    title: "ACL Findings 2026",
    description: "Paper accepted at ACL Findings 2026: \"Vocab Diet: Reshaping the Vocabularies of LLMs with Vector Arithmetic\".",
    link: "https://arxiv.org/abs/2510.17001",
  },
  {
    date: "Jan. 2026",
    title: "Visiting researcher at USC",
    description: "Started a full-year research visit at USC.",
  },
  {
    date: "Dec. 2025",
    title: "Invited talk at TAU",
    description: "Gave an invited talk on \"The Inner Lexicon of LLMs\" at Tel Aviv University.",
  },
  {
    date: "Aug. 2025",
    title: "Started PhD",
    description: "Began PhD in Computer Science at the Hebrew University of Jerusalem, advised by Prof. Roy Schwartz.",
  },
  {
    date: "Apr. 2025",
    title: "ICLR 2025",
    description: "Paper presented at ICLR 2025 in Singapore: \"From Tokens to Words: On the Inner Lexicon of LLMs\".",
    link: "https://arxiv.org/abs/2410.05864",
  },
];
