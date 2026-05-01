import type React from "react";

export const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="font-sans text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] font-semibold tracking-tight">
    {children}
  </h1>
);
export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 font-sans text-[1.875rem] leading-[1.2] font-semibold tracking-tight">
    {children}
  </h2>
);
export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-4 font-sans text-[1.25rem] leading-[1.2] font-semibold">
    {children}
  </h3>
);
export const H4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className="mb-3 font-sans text-base leading-[1.4] font-medium">
    {children}
  </h4>
);
export const H5 = ({ children }: { children: React.ReactNode }) => (
  <h5 className="mb-2 font-sans text-[0.9375rem] leading-[1.4] font-medium">
    {children}
  </h5>
);
export const H6 = ({ children }: { children: React.ReactNode }) => (
  <h6 className="text-ink-3 mb-2 font-mono text-[0.75rem] leading-[1.4] tracking-[0.04em] uppercase">
    {children}
  </h6>
);
export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 font-serif text-base leading-[1.6]">{children}</p>
);
export const Ul = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-4 list-inside list-disc font-serif text-base leading-[1.6]">
    {children}
  </ul>
);
export const Li = ({ children }: { children: React.ReactNode }) => (
  <li>{children}</li>
);
export const Blockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-ochre animate-rainbow-color timeline-scroll-y-nearest mb-6 border-l-2 pl-4 lg:pl-6">
    {children}
  </blockquote>
);
