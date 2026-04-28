import React from "react";

export const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="colored mb-8 font-sans text-7xl">{children}</h1>
);
export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 font-sans text-5xl">{children}</h2>
);
export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-sans text-3xl">{children}</h3>
);
export const H4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-sans text-xl">{children}</h4>
);
export const H5 = ({ children }: { children: React.ReactNode }) => (
  <h5 className="font-sans text-lg">{children}</h5>
);
export const H6 = ({ children }: { children: React.ReactNode }) => (
  <h6 className="font-sans text-sm">{children}</h6>
);
export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 font-serif">{children}</p>
);
export const Ul = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-4 list-inside list-disc font-serif">{children}</ul>
);
export const Li = ({ children }: { children: React.ReactNode }) => (
  <li>{children}</li>
);
export const Blockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="animate-rainbow-color timeline-scroll-y-nearest mb-6 border-l-2 p-4 lg:p-6">
    {children}
  </blockquote>
);
