"use client";

import { useState } from "react";

type EssayCodeBlockProps = {
  file: string;
  lang?: string;
  code: string;
};

function CopyIcon() {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
      role="img"
      aria-label="copy"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function EssayCodeBlock({ file, lang, code }: EssayCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");

  function onCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <figure className="my-7 max-w-[calc(60ch+48px+220px)]">
      <figcaption className="border-rule text-ink-3 mb-1 flex items-center gap-2 border-b py-1.5 font-mono text-[11px] tracking-[0.02em]">
        <span className="text-ochre">{file}</span>
        <span className="text-ink-3 flex-1">
          {lang && ` · ${lang}`} · {lines.length} lines
        </span>
        <button
          type="button"
          onClick={onCopy}
          className="border-rule text-ink-3 hover:border-rule-strong hover:text-ink inline-flex items-center gap-1.5 rounded-[2px] border bg-transparent px-2 py-0.5 font-mono text-[11px]"
        >
          <CopyIcon /> {copied ? "copied" : "copy"}
        </button>
      </figcaption>
      <pre className="bg-bg-sunken border-rule text-ink m-0 overflow-x-auto rounded-sm border px-4 py-3.5 font-mono text-[13px] leading-[1.7]">
        <code>
          {lines.map((line, i) => (
            <div key={`${i}-${line}`}>
              <span className="text-ink-4 mr-4 inline-block w-[22px] select-none text-right font-mono text-[11px]">
                {i + 1}
              </span>
              {line}
            </div>
          ))}
        </code>
      </pre>
    </figure>
  );
}
