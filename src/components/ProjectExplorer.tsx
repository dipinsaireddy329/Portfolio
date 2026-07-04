"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/content/portfolio";

const filters = ["All", "AI", "Flutter", "React", "Next.js"];

export function ProjectExplorer() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.tech.some((tech) => tech.toLowerCase().includes(filter.toLowerCase())) || project.subtitle.toLowerCase().includes(filter.toLowerCase()))),
    [filter]
  );

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`focus-ring rounded-full border px-4 py-2 text-sm ${filter === item ? "border-cyan-300 bg-cyan-300 text-black" : "border-white/10 bg-white/5"}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-5">
        {visible.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass grid gap-6 rounded-[28px] p-5 md:grid-cols-[0.85fr_1.15fr] md:p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.04 }}
          >
            <div className="flex min-h-72 flex-col justify-between rounded-2xl border border-white/10 bg-black/25 p-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">{project.subtitle}</p>
                <h3 className="mt-4 text-3xl font-semibold">{project.title}</h3>
              </div>
              <div className="rounded-xl border border-dashed border-white/20 p-5 text-sm text-[var(--muted)]">
                {/* {project.galleryComment} */}
                {project.galleryComment} image slot
              </div>
            </div>
            <div className="space-y-5">
              <Case label="Problem" text={project.problem} />
              <Case label="Solution" text={project.solution} />
              <Case label="Engineering challenge" text={project.challenge} />
              <div>
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold"><Layers3 size={16} /> Architecture</p>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)]">{item}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs">{item}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm"><GitBranch size={16} /> GitHub</a> : null}
                {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"><ExternalLink size={16} /> Live Demo</a> : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function Case({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-cyan-200">{label}</p>
      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
    </div>
  );
}
