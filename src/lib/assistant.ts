const knowledge = [
  {
    keys: ["resume", "summary", "who"],
    answer:
      "Dipin Sai Reddy Bojjireddy is a B.Tech Computer Science student from Tirupati with an 8.8 CGPA, currently working as a Generative AI Intern. He builds full stack web apps, Flutter mobile apps and AI features with production-minded architecture."
  },
  {
    keys: ["projects", "chitmaster", "chit master", "fintech"],
    answer:
      "ChitMaster Pro is an offline-first Flutter FinTech platform for managing chit fund workflows. It emphasizes local persistence, structured member/payment flows and reliability when network access is inconsistent."
  },
  {
    keys: ["ai resume", "resume analyzer", "rag", "llm"],
    answer:
      "The AI Resume Analyzer explores resume parsing, role-fit analysis and AI-assisted feedback. The portfolio chatbot is also structured as a RAG-ready layer so Gemini or OpenAI can later replace the local retrieval response engine."
  },
  {
    keys: ["skills", "tech", "stack"],
    answer:
      "Dipin works across Python, Java, JavaScript, TypeScript, SQL and Dart, with React, Next.js, Flutter, Node, Express, Flask, FastAPI, LangChain, Gemini, RAG, ChromaDB, Docker, GitHub Actions and Vercel."
  },
  {
    keys: ["education", "college", "cgpa"],
    answer:
      "Dipin is pursuing B.Tech Computer Science with an 8.8 CGPA. His learning path focuses on software engineering, data structures, backend systems, mobile development and applied AI."
  },
  {
    keys: ["experience", "intern", "generative"],
    answer:
      "As a Generative AI Intern, Dipin works on LLM workflows, prompt engineering, AI application architecture and practical integrations that connect model behavior with product experiences."
  },
  {
    keys: ["goal", "career", "future"],
    answer:
      "Dipin is aiming for Software Development Engineer and AI Engineer roles where he can build scalable products, polished user experiences and intelligent systems."
  }
];

export function answerPortfolioQuestion(question: string) {
  const normalized = question.toLowerCase();
  const match = knowledge.find((entry) => entry.keys.some((key) => normalized.includes(key)));
  return (
    match?.answer ??
    "I can answer questions about Dipin's resume, projects, skills, education, AI work, tech stack and career goals. The current version uses local retrieval logic and is ready to swap in Gemini or OpenAI embeddings later."
  );
}
