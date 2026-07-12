"use client";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Flutter", "Dart",
  "MongoDB", "Express", "FastAPI", "LangChain", "Gemini AI", "Docker",
  "PostgreSQL", "TailwindCSS", "Framer Motion", "Three.js", "Riverpod",
  "ChromaDB", "Vercel", "GitHub Actions", "JWT", "REST APIs",
];

export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />

      <div className="marquee-track flex w-max gap-3">
        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--muted)] backdrop-blur-sm transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/8 hover:text-cyan-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
