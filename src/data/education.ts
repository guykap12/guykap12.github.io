export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "Aug. 2025 – Present",
    institution: "The Hebrew University of Jerusalem",
    degree: "PhD Student, Computer Science",
    advisor: "Prof. Roy Schwartz",
  },
  {
    year: "Oct. 2022 – Aug. 2025",
    institution: "The Hebrew University of Jerusalem",
    degree: "M.Sc., Computer Science",
    advisor: "Prof. Roy Schwartz",
    thesis: "The Inner Lexicon of Large Language Models",
    thesisUrl: "https://arxiv.org/abs/2410.05864",
  },
  {
    year: "Oct. 2019 – Jun. 2022",
    institution: "The Open University of Israel",
    degree: "B.Sc., Computer Science",
  },
  {
    year: "Oct. 2019 – Jun. 2022",
    institution: "Tel Aviv University",
    degree: "B.A., Economics",
  },
  {
    year: "2014",
    institution: "University of Haifa",
    degree: "B.A., General Studies, Magna Cum Laude",
  },
];
