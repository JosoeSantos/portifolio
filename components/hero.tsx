"use client";

interface HeroProps {
  name: string;
  blurb: string;
  onEssays?: () => void;
  onProjects?: () => void;
}

export function Hero({ name, blurb, onEssays, onProjects }: HeroProps) {
  return (
    <section
      className="border-rule relative border-b px-8 py-24"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <p className="text-ink-3 mb-6 font-mono text-xs tracking-[0.04em] uppercase">
        engineer &amp; writer
      </p>
      <h1 className="max-w-[14ch] font-sans text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] font-semibold tracking-[-0.025em]">
        {name}
        <span className="text-ochre">.</span>
      </h1>
      <p className="text-ink-2 mt-4 mb-10 max-w-[52ch] font-serif text-lg leading-[1.55]">
        {blurb}
      </p>
      <div className="mb-16 flex gap-3">
        <button
          onClick={onEssays}
          className="bg-ochre text-paper hover:bg-ochre-deep cursor-pointer rounded-sm border-none px-4 py-2 font-sans text-sm font-medium transition-colors"
        >
          read essays
        </button>
        <button
          onClick={onProjects}
          className="border-rule hover:border-rule-strong hover:bg-bg-sunken cursor-pointer rounded-sm border bg-paper px-4 py-2 font-sans text-sm font-medium transition-colors"
        >
          see projects
        </button>
      </div>
      <div className="text-ink-3 border-rule flex gap-6 border-t pt-6 font-mono text-xs">
        <span>based in lisbon</span>
        <span>open to work</span>
        <span>2025</span>
      </div>
    </section>
  );
}
