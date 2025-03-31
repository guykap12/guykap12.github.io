export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   year: "2024—Present",
  //   institution: "Hebrew University of Jerusalem",
  //   degree: "Ph.D. in Computer Science",
  //   advisor: "Prof. Roy Schwartz",
  // },
  {
    year: "2023—Present",
    institution: "Hebrew University of Jerusalem",
    degree: "MSc. in Computer Science",
    advisor: "Prof. Roy Schwartz",
    thesis: "Detokenization in LLMs",
  },
  {
    year: "2019—2022",
    institution: "The Open University",
    degree: "BSc in Computer Science",
  },
  {
    year: "2019—2022",
    institution: "Tel Aviv University",
    degree: "BA. in Economics",
  },
  {
    year: "2014",
    institution: "Haifa University",
    degree: "BA. in General Studies",
  }

];
