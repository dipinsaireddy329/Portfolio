import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-300">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-normal md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
