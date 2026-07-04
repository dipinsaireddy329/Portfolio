"use client";

import { Star, GitFork, Users, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "chit-master",
    html_url: "https://github.com/dipinsaireddy329/chit-master",
    description: "Offline Flutter FinTech platform for chit fund operations.",
    stargazers_count: 0,
    forks_count: 0,
    language: "Dart"
  },
  {
    id: 2,
    name: "ai-resume-analyzer",
    html_url: "https://github.com/dipinsaireddy329/ai-resume-analyzer",
    description: "AI-powered resume analysis and role-fit feedback.",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python"
  },
  {
    id: 3,
    name: "smart-expense-tracker",
    html_url: "https://github.com/dipinsaireddy329/smart-expense-tracker",
    description: "Personal finance dashboard for tracking spending patterns.",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript"
  }
];

export function GitHubPanel() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [followers, setFollowers] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [repoResponse, userResponse] = await Promise.all([
          fetch("https://api.github.com/users/dipinsaireddy329/repos?sort=updated&per_page=6"),
          fetch("https://api.github.com/users/dipinsaireddy329")
        ]);
        if (repoResponse.ok) setRepos(await repoResponse.json());
        if (userResponse.ok) {
          const user = await userResponse.json();
          setFollowers(user.followers);
        }
      } catch {
        setRepos(fallbackRepos);
      }
    }
    load();
  }, []);

  const stars = repos.reduce((total, repo) => total + repo.stargazers_count, 0);
  const languages = Array.from(new Set(repos.map((repo) => repo.language).filter(Boolean))).slice(0, 6);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="glass rounded-[28px] p-6">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">dipinsaireddy329</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Metric icon={BookOpen} label="Latest repos" value={`${repos.length}`} />
          <Metric icon={Star} label="Stars" value={`${stars}`} />
          <Metric icon={Users} label="Followers" value={followers === null ? "Live" : `${followers}`} />
          <Metric icon={GitFork} label="Languages" value={`${languages.length || 3}`} />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {(languages.length ? languages : ["Dart", "Python", "JavaScript"]).map((language) => (
            <span key={language} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{language}</span>
          ))}
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {repos.slice(0, 6).map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="focus-ring glass rounded-2xl p-5 transition hover:-translate-y-1 hover:bg-white/10">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold">{repo.name}</h3>
              <span className="rounded-full bg-white/10 px-2 py-1 text-xs">{repo.language ?? "Code"}</span>
            </div>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{repo.description ?? "Repository maintained as part of Dipin's engineering portfolio."}</p>
            <div className="mt-4 flex gap-4 text-xs text-[var(--muted)]">
              <span>{repo.stargazers_count} stars</span>
              <span>{repo.forks_count} forks</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Star; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <Icon size={18} className="text-cyan-300" />
      <p className="mt-4 text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-[var(--muted)]">{label}</p>
    </div>
  );
}
