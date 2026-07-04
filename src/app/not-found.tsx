import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">This route has not shipped yet.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-[var(--muted)]">
          The portfolio is deliberately compact. Head back to the main experience to explore Dipin&apos;s work.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
