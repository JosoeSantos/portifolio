import type React from "react";

type MarginaliaProps = {
  mark: string;
  children: React.ReactNode;
};

export function Marginalia({ mark, children }: MarginaliaProps) {
  return (
    <div className="border-rule text-ink-3 flex gap-2 border-l py-1 pl-3.5 text-xs leading-[1.5] [&_em]:text-ink-2 [&_em]:italic [&_p]:m-0 scroll-mt-[100px]">
      <span className="text-ochre shrink-0 font-mono text-[11px] font-medium">
        {mark}
      </span>
      <div>{children}</div>
    </div>
  );
}

type StatRow = {
  label: string;
  from: string;
  to: string;
};

type MarginaliaStatProps = {
  stats: StatRow[];
};

export function MarginaliaStat({ stats }: MarginaliaStatProps) {
  return (
    <div className="border-ochre flex flex-col gap-1.5 border-l py-2 pl-3.5">
      {stats.map((s, i) => (
        <div key={s.label} className={i > 0 ? "mt-1.5" : undefined}>
          <div className="text-ink-3 font-mono text-[10px] tracking-[0.06em] uppercase">
            {s.label}
          </div>
          <div className="text-ink flex items-baseline gap-2 font-mono text-sm font-medium">
            <span className="text-ink-3 line-through decoration-ink-4">
              {s.from}
            </span>
            <span className="text-ink-4">→</span>
            <span className="text-ochre">{s.to}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

type FootnoteRefProps = {
  mark: string;
};

export function FootnoteRef({ mark }: FootnoteRefProps) {
  return (
    <sup className="text-ochre ml-0.5 align-super font-mono text-[0.7em] font-medium leading-[0]">
      {mark}
    </sup>
  );
}
