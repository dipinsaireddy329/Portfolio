"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = ["Full Stack Developer", "Flutter Developer", "AI Engineer", "Builder", "Problem Solver"];

export function AnimatedTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % titles.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="inline-grid min-h-10 overflow-hidden align-bottom text-cyan-300 md:min-h-14">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
