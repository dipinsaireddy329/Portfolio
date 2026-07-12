"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, GitBranch, BriefcaseBusiness, Mail, Code2 } from "lucide-react";

const items = [
  { label: "Resume", icon: Download, href: "/resume.pdf" },
  { label: "GitHub", icon: GitBranch, href: "https://github.com/dipinsaireddy329" },
  { label: "LinkedIn", icon: BriefcaseBusiness, href: "https://www.linkedin.com/in/dipin-sai-reddy-bojjireddy-3358a92b7/" },
  { label: "LeetCode", icon: Code2, href: "https://leetcode.com/u/dipin329/" },
  { label: "Email", icon: Mail, href: "mailto:dipinsaireddy@gmail.com" },
];

function DockItem({ item, mouseX }: { item: typeof items[0]; mouseX: ReturnType<typeof useMotionValue<number>> }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-120, 0, 120], [44, 64, 44]);
  const width = useSpring(widthTransform, { stiffness: 260, damping: 22 });

  const [tooltip, setTooltip] = useState(false);
  const Icon = item.icon;

  return (
    <div className="relative flex flex-col items-center">
      {tooltip && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-9 whitespace-nowrap rounded-lg border border-white/15 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-xl"
        >
          {item.label}
        </motion.span>
      )}
      <motion.a
        ref={ref}
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        style={{ width, height: width }}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        className="flex items-center justify-center rounded-xl border border-white/15 bg-white/8 text-[var(--foreground)] backdrop-blur-xl transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
      >
        <Icon size={20} />
      </motion.a>
    </div>
  );
}

export function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 26 }}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex items-end gap-3 rounded-2xl border border-white/15 bg-black/55 px-4 py-3 shadow-2xl backdrop-blur-2xl"
      >
        {items.map((item) => (
          <DockItem key={item.label} item={item} mouseX={mouseX} />
        ))}
      </motion.nav>
    </div>
  );
}
