"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Command, Moon, Search, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, profile, projects, socials } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { answerPortfolioQuestion } from "@/lib/assistant";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 backdrop-blur-3xl"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto grid size-24 place-items-center rounded-[24px] border border-white/15 bg-white/10 text-3xl font-bold"
              initial={{ rotate: -8, opacity: 0, y: 18 }}
              animate={{ rotate: 0, opacity: 1, y: 0 }}
            >
              {profile.initials}
            </motion.div>
            <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-cyan-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.45, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 24 });
  return <motion.div className="fixed left-0 top-0 z-[90] h-1 origin-left bg-cyan-300" style={{ scaleX, width: "100%" }} />;
}

export function CursorGlow() {
  const [point, setPoint] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const update = (event: PointerEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[80] hidden size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/18 blur-3xl md:block"
      animate={{ x: point.x, y: point.y }}
      transition={{ type: "spring", stiffness: 90, damping: 24, mass: 0.4 }}
    />
  );
}

export function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2">
          <a href="#hero" className="focus-ring grid size-10 place-items-center rounded-full bg-white text-sm font-black text-black">
            D
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="focus-ring rounded-full px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Open command palette" onClick={() => setOpen(true)} className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5">
              <Command size={18} />
            </button>
            <button aria-label="Toggle color theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const terms = [...navItems, ...projects.map((project) => ({ label: project.title, href: "#projects" }))];
    return terms.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[95] bg-black/45 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="glass mx-auto mt-24 max-w-xl rounded-2xl p-3" initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
            <label className="flex items-center gap-3 border-b border-white/10 px-3 py-3">
              <Search size={18} />
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sections and projects" className="w-full bg-transparent outline-none" />
            </label>
            <div className="max-h-80 overflow-auto py-2">
              {results.map((item) => (
                <a key={`${item.href}-${item.label}`} href={item.href} onClick={onClose} className="focus-ring block rounded-xl px-4 py-3 text-sm hover:bg-white/10">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Ask me about Dipin's projects, skills, resume, AI work or career goals." }
  ]);

  function ask() {
    if (!question.trim()) return;
    const next = question.trim();
    setMessages((items) => [...items, { role: "user", text: next }, { role: "assistant", text: answerPortfolioQuestion(next) }]);
    setQuestion("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div className="glass mb-3 w-[min(92vw,380px)] rounded-2xl p-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}>
            <div className="h-72 space-y-3 overflow-auto pr-1">
              {messages.map((message, index) => (
                <div key={index} className={`rounded-2xl px-4 py-3 text-sm ${message.role === "user" ? "ml-10 bg-cyan-300 text-black" : "mr-8 bg-white/8"}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <input value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={(event) => event.key === "Enter" && ask()} className="focus-ring min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm" placeholder="Ask about Dipin" />
              <Button onClick={ask} className="px-4 py-2">Ask</Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button onClick={() => setOpen((value) => !value)} className="focus-ring rounded-full bg-white px-5 py-3 text-sm font-bold text-black shadow-2xl">
        AI Assistant
      </button>
    </div>
  );
}

export function BackToTop() {
  return (
    <a href="#hero" aria-label="Back to top" className="focus-ring fixed bottom-5 left-5 z-50 grid size-12 place-items-center rounded-full border border-white/10 bg-white/8 backdrop-blur-xl">
      <ArrowUp size={18} />
    </a>
  );
}

export function SocialRail() {
  return (
    <div className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10">
            <Icon size={17} />
          </a>
        );
      })}
    </div>
  );
}
