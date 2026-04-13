export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep. 2025 – Present",
    title: "Visiting Researcher",
    company: "University of Southern California (USC)",
    companyUrl: "https://www.usc.edu/",
  },
  {
    date: "Oct. 2023 – Present",
    title: "Chief Scientist Officer",
    company: "Bright Forensic Innovations",
    companyUrl: "https://www.bright-forensics.com/",
  },
  {
    date: "Mar. 2024 – Jan. 2025",
    title: "Data Scientist",
    company: "Microsoft",
  },
  {
    date: "Mar. 2022 – Mar. 2024",
    title: "Software Engineer",
    company: "Microsoft",
  },
  {
    date: "Oct. 2011 – Sep. 2019",
    title: "Naval Officer (Major)",
    company: "Israeli Navy, Air Patrol Unit",
  },
];
