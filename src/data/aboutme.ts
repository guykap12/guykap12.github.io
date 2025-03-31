export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Guy Kaplan",
  title: "Ph.D. Candidate",
  institution: "Hebrew University of Jerusalem",
  // Note that links work in the description
  description:
    "I'm a final-year <a href='https://en.huji.ac.il/'>PhD candidate</a> working at the intersection of Interpetability and efficient of LLMs. My research focuses on the intersection between the compression optimized tokenizer to the model performance and processing.",
  email: "guy.kaplan3@mail.huji.ac.il",
  imageUrl:
  "https://q2kdtpomknobn1v5.public.blob.vercel-storage.com/image-D2eQYmJbWlgdNgNgnXwtY9kUFNbZkG.jpeg",
  // "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=S14A--8AAAAJ&hl=en",
  githubUsername: "guykap12",
  linkedinUsername: "guy-kaplan-482a501b7",
  twitterUsername: "GKaplan38844",
  // blogUrl: "https://",
  cvUrl: "https://", //TODO: Add CV
  institutionUrl: "https://en.huji.ac.il",
  // altName: "",
  // secretDescription: "I like dogs.",
};
