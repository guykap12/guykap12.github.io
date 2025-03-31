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
    date: "2023-present",
    title: "Chief Scientist Officer",
    company: "BRIGHT",
    companyUrl: "https://www.bright-forensics.com/",
    description:
        "Developing model based system for assisting forensics odontologists in identifying human remains"
   },
    {
    date: "2022-2025",
    title: "Data Science & SWE",
    company: "Microsoft",
    description:
      "Developed novel algorithms for risk score user assessment over Microsoft Defender platform",
  },
  {
    date: "Summer 2021",
    title: "SWE Intern",
    company: "Yahoo!",
    description:
      "Worked on improving personal recommendations for Yahoo! advertising platform",
  },
];
