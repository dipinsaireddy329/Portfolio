import { ArrowRight, Download, Mail, MapPin, Sparkles, Terminal, CheckCircle2, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { BackToTop, Chatbot, CursorGlow, LoadingScreen, Navbar, ProgressBar, SocialRail } from "@/components/ExperienceShell";
import { GitHubPanel } from "@/components/GitHubPanel";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { Section } from "@/components/sections/Section";
import { LinkButton } from "@/components/ui/button";
import { ThreeHero } from "@/components/ThreeHero";
import { certifications, profile, skillGroups, stats } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ProgressBar />
      <CursorGlow />
      <Navbar />
      <SocialRail />
      <main>
        <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
          <ThreeHero />
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_20%,rgba(104,225,253,0.18),transparent_34rem),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.18),transparent_30rem)]" />
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-4 py-2 text-sm text-[var(--muted)] backdrop-blur-xl">
                <Sparkles size={16} className="text-cyan-300" /> {profile.current} · {profile.location}
              </p>
              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
                Hi,<br />I&apos;m<br />{profile.shortName}
              </h1>
              <p className="mt-6 text-2xl font-medium md:text-4xl">
                <AnimatedTitle />
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{profile.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="#projects">View Projects <ArrowRight size={17} /></LinkButton>
                <LinkButton href="/resume.pdf" variant="ghost"><Download size={17} /> Download Resume</LinkButton>
                <LinkButton href="#contact" variant="ghost"><Mail size={17} /> Contact</LinkButton>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              <div className="glass rounded-[28px] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">Current Focus</p>
                <p className="mt-4 text-2xl font-semibold">Generative AI systems that feel useful, fast and understandable.</p>
              </div>
              <div className="glass rounded-[28px] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">Console</p>
                <pre className="mt-4 overflow-hidden whitespace-pre-wrap font-mono text-sm leading-7 text-[var(--muted)]">{`> dipin.profile()
{ stack: "web + mobile + ai",
  mode: "shipping",
  goal: "SDE | AI Engineer" }`}</pre>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="Origin Story" title="A builder shaped by product thinking, AI curiosity and disciplined engineering.">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass rounded-[28px] p-6 md:p-8">
              <div className="rounded-2xl border border-dashed border-white/20 p-8 text-sm text-[var(--muted)]">
                {/* Hero Photo */}
                Professional image slot
              </div>
              <div className="mt-8 space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>Dipin began with the fundamentals of computer science and kept widening the loop: web interfaces, backend APIs, Flutter mobile apps, and now applied generative AI.</p>
                <p>His work sits at the intersection of product polish and implementation depth. ChitMaster Pro reflects offline-first mobile thinking, the AI Resume Analyzer explores LLM-assisted feedback, and his web projects focus on clear flows that can ship.</p>
                <p>The next chapter is focused on SDE and AI Engineer roles where strong architecture, user experience and intelligent systems can meet in production.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map(([label, value]) => (
                <div key={label} className="glass rounded-2xl p-6">
                  <p className="text-4xl font-semibold">{value}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{label}</p>
                </div>
              ))}
              <div className="glass rounded-2xl p-6 sm:col-span-2">
                <p className="text-sm text-[var(--muted)]">Education</p>
                <p className="mt-2 text-2xl font-semibold">{profile.education}</p>
                <p className="mt-2 text-cyan-300">CGPA {profile.cgpa}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="System Capabilities" title="A full stack skill graph designed for modern product engineering.">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="glass rounded-[24px] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">{group.title}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Startup-style Case Studies" title="Featured projects presented as real products, not thumbnail cards.">
          <ProjectExplorer />
        </Section>

        <Section id="experience" eyebrow="Experience" title="Generative AI internship work with a product engineering mindset.">
          <div className="glass rounded-[28px] p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-2xl font-semibold">Generative AI Intern</p>
                <p className="mt-2 text-[var(--muted)]">LLM workflows, prompt engineering, AI application structure and product-facing model behavior.</p>
              </div>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-cyan-300">Current</span>
            </div>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {["Design RAG-ready AI features", "Prototype Gemini and LLM workflows", "Translate model output into useful UX"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-[var(--muted)]">{item}</div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Computer science fundamentals with a strong applied engineering track.">
          <div className="grid gap-5 md:grid-cols-3">
            {["B.Tech Computer Science", "CGPA 8.8", "Coursework: DSA, DBMS, OS, software engineering, web systems and AI fundamentals"].map((item) => (
              <div key={item} className="glass rounded-2xl p-6 text-lg font-medium">{item}</div>
            ))}
          </div>
        </Section>

        <Section id="certifications" eyebrow="Signals" title="Certifications and communities that reflect the AI and cloud direction.">
          <div className="grid gap-3 md:grid-cols-2">
            {certifications.map((item) => (
              <div key={item.name} className="glass rounded-2xl p-5 flex items-center justify-between gap-4 transition-colors hover:bg-white/10">
                <div className="flex items-center gap-3">
                  {item.status === "completed" ? (
                    <CheckCircle2 size={18} className="text-cyan-300 shrink-0" />
                  ) : (
                    <Clock size={18} className="text-[var(--muted)] shrink-0" />
                  )}
                  <span className={`text-sm ${item.status === "completed" ? "text-[var(--foreground)] font-medium" : "text-[var(--muted)]"}`}>
                    {item.name}
                  </span>
                </div>
                <span className={`text-xs whitespace-nowrap rounded-full px-3 py-1 border ${item.status === "completed" ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-300" : "border-white/10 bg-white/5 text-[var(--muted)]"}`}>
                  {item.status === "completed" ? "Completed" : "Coming Soon"}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="github" eyebrow="Open Source Surface" title="Live GitHub activity, latest repositories and language signals.">
          <GitHubPanel />
        </Section>

        <Section id="coding" eyebrow="Coding Profiles" title="Competitive practice and public engineering profiles.">
          <div className="grid gap-4 md:grid-cols-3">
            <a className="glass focus-ring rounded-2xl p-6" href="https://leetcode.com/u/dipin329/" target="_blank" rel="noreferrer">LeetCode: dipin329</a>
            <a className="glass focus-ring rounded-2xl p-6" href="https://github.com/dipinsaireddy329" target="_blank" rel="noreferrer">GitHub: dipinsaireddy329</a>
            <a className="glass focus-ring rounded-2xl p-6" href="https://www.linkedin.com/in/dipin-sai-reddy-bojjireddy-3358a92b7/" target="_blank" rel="noreferrer">LinkedIn: Dipin Sai Reddy</a>
          </div>
        </Section>

        <Section id="achievements" eyebrow="Achievements" title="A growing record of shipped products, AI learning and community involvement.">
          <div className="glass rounded-[28px] p-7">
            <div className="grid gap-4 md:grid-cols-3">
              {["Built and deployed multiple public web applications", "Developed offline-first Flutter FinTech workflows", "Active GDG student member with cloud and AI certification goals"].map((item) => (
                <p key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-[var(--muted)]">{item}</p>
              ))}
            </div>
          </div>
        </Section>

        <Section id="resume" eyebrow="Resume" title="A concise professional snapshot for recruiters and engineering teams.">
          <div className="glass flex flex-col gap-5 rounded-[28px] p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-semibold">{profile.name}</p>
              <p className="mt-2 text-[var(--muted)]">{profile.role}</p>
            </div>
            <LinkButton href="/resume.pdf" variant="ghost"><Download size={17} /> Download Resume</LinkButton>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="For internships, SDE roles, AI engineering work and serious product builds.">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass rounded-[28px] p-7">
              <p className="text-2xl font-semibold">Let&apos;s build something production-ready.</p>
              <div className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                <p className="flex items-center gap-3"><Mail size={17} /> {profile.email}</p>
                <p className="flex items-center gap-3"><MapPin size={17} /> Tirupati, Andhra Pradesh, India</p>
                <p>{profile.phone}</p>
              </div>
            </div>
            <form className="glass rounded-[28px] p-7" action={`mailto:${profile.email}`}>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-3" name="name" placeholder="Name" aria-label="Name" />
                <input className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-3" name="email" type="email" placeholder="Email" aria-label="Email" />
              </div>
              <textarea className="focus-ring mt-4 min-h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3" name="message" placeholder="Message" aria-label="Message" />
              <button className="focus-ring mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-black" type="submit">Send message</button>
            </form>
          </div>
        </Section>

        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
          <div className="glass rounded-[28px] p-7">
            <p className="flex items-center gap-2 font-mono text-sm text-cyan-300"><Terminal size={17} /> Developer console easter egg</p>
            <p className="mt-3 text-sm text-[var(--muted)]">Open DevTools and run <code className="rounded bg-white/10 px-2 py-1">dipin()</code>. A tiny profile object is waiting.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-[var(--muted)]">
        Built by Dipin Sai Reddy Bojjireddy with Next.js, React, TypeScript, motion, 3D and a frankly unreasonable amount of care.
      </footer>
      <BackToTop />
      <Chatbot />
      <script dangerouslySetInnerHTML={{ __html: "window.dipin=()=>({name:'Dipin Sai Reddy Bojjireddy',stack:['Full Stack','Flutter','AI'],goal:'SDE | AI Engineer',email:'dipinsaireddy@gmail.com'})" }} />
    </>
  );
}
