type EssayHeroProps = {
  number: string;
  title: string;
  lead?: string;
  dateLong: string;
  readingTime: string;
  words: number;
  tags: string[];
  permalink: string;
};

export function EssayHero({
  number,
  title,
  lead,
  dateLong,
  readingTime,
  words,
  tags,
  permalink,
}: EssayHeroProps) {
  return (
    <header className="border-rule hairline-grid bg-paper border-b">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-6 px-8 pt-16 pb-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <div className="border-rule mt-3 border-b pb-4 pr-0 lg:border-b-0 lg:border-r lg:pr-8 lg:pb-0">
          <div className="text-ink-3 mb-3 font-mono text-[11px] tracking-[0.08em]">
            ESSAY
          </div>
          <div className="text-ochre font-mono text-[64px] leading-none font-medium tracking-[-0.02em] tabular-nums">
            N<span className="align-[0.4em] text-[0.6em]">º</span> {number}
          </div>
        </div>

        <div className="min-w-0">
          <h1 className="text-ink mb-5 font-sans text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.025em] [text-wrap:balance] max-w-[22ch]">
            {title}
          </h1>
          {lead && (
            <p className="text-ink-2 mb-8 max-w-[60ch] font-serif text-[19px] leading-[1.55]">
              {lead}
            </p>
          )}

          <table className="border-rule w-full border-collapse border-y font-mono text-xs">
            <tbody>
              <tr>
                <th className="text-ink-3 w-[100px] py-2.5 pr-4 text-left text-[10px] font-medium tracking-[0.04em] uppercase align-top">
                  published
                </th>
                <td className="text-ink py-2.5 pr-4 align-top">{dateLong}</td>
                <th className="text-ink-3 w-[100px] py-2.5 pr-4 text-left text-[10px] font-medium tracking-[0.04em] uppercase align-top">
                  reading
                </th>
                <td className="text-ink py-2.5 pr-4 align-top">
                  {readingTime} · {words.toLocaleString()} words
                </td>
              </tr>
              <tr>
                <th className="border-rule text-ink-3 w-[100px] border-t py-2.5 pr-4 text-left text-[10px] font-medium tracking-[0.04em] uppercase align-top">
                  filed
                </th>
                <td className="border-rule text-ink border-t py-2.5 pr-4 align-top">
                  {tags.map((t, i) => (
                    <span key={t}>
                      {i > 0 && <span className="text-ink-4"> · </span>}
                      <span className="text-ink hover:text-ochre cursor-pointer">
                        #{t}
                      </span>
                    </span>
                  ))}
                </td>
                <th className="border-rule text-ink-3 w-[100px] border-t py-2.5 pr-4 text-left text-[10px] font-medium tracking-[0.04em] uppercase align-top">
                  permalink
                </th>
                <td className="border-rule border-t py-2.5 pr-4 align-top">
                  <span className="text-ochre cursor-pointer break-all">
                    {permalink}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
}
