type FootnoteProps = {
  n: number;
  children: React.ReactNode;
};

export function Footnote({ n, children }: FootnoteProps) {
  return (
    <span className="group">
      <sup className="text-ochre font-mono text-[0.75rem]">{n}</sup>
      <span>{children}</span>
    </span>
  );
}
