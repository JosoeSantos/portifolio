import type React from "react";

type ProseRowProps = {
  children: React.ReactNode;
  marginalia?: React.ReactNode;
};

export function ProseRow({ children, marginalia }: ProseRowProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12">
      <div className="text-ink max-w-[60ch] font-serif text-[17px] leading-[1.7] [&>p]:mb-[18px] [&>p:last-child]:mb-0 [&_code]:bg-bg-sunken [&_code]:border [&_code]:border-rule [&_code]:rounded-[2px] [&_code]:px-[5px] [&_code]:py-[1px] [&_code]:font-mono [&_code]:text-[0.88em]">
        {children}
      </div>
      <aside className="lg:pt-1.5">{marginalia}</aside>
    </div>
  );
}

type SectionProps = {
  n: string;
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ n, id, title, children }: SectionProps) {
  return (
    <section>
      <h2
        id={id}
        className="border-rule text-ink mt-14 mb-5 flex items-baseline gap-4 border-t pt-4 font-sans text-2xl leading-snug font-semibold tracking-[-0.01em] first:mt-0 first:border-t-0 first:pt-0 scroll-mt-24"
      >
        <span className="text-ochre w-7 shrink-0 font-mono text-xs tracking-[0.04em]">
          {n}
        </span>
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}
