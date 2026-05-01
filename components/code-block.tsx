type CodeBlockProps = {
  file?: string;
  lang?: string;
  lines?: string;
  children: React.ReactNode;
};

export function CodeBlock({ file, lang, lines, children }: CodeBlockProps) {
  return (
    <figure>
      {file && (
        <figcaption className="text-ink-3 mb-1 font-mono text-[0.6875rem] tracking-[0.02em]">
          <span className="text-ochre">{file}</span>
          {lang && <span> · {lang}</span>}
          {lines && <span> · {lines}</span>}
        </figcaption>
      )}
      <pre className="bg-bg-sunken border-rule overflow-x-auto rounded-sm border px-4 py-3.5 font-mono text-[0.8125rem] leading-[1.65]">
        {children}
      </pre>
    </figure>
  );
}
