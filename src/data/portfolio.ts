export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Social Media based Stock Prediction",
    description:
    "Developed a model to predict stock prices based on social media sentiment analysis",
    technologies: ["Python", "PyTorch", "SHAP"],
    projectUrl: "https://colab.research.google.com/drive/1Rsgts2O4aj35zfuPGKxEJRq61kcSbC_d?usp=sharing",
    // imageUrl:
      // "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
      {
    title: "KuaLaLM",
    description:
    "LLM GW for reducing expensive model calls",
    technologies: ["Python", "Azure Functions"],
    projectUrl: "https://youtu.be/dGkzbFeWGcc?si=EY_Tv5l8tM2_LKiu",
    // imageUrl:
      // "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
