type EssayFootProps = {
  year?: number;
};

export function EssayFoot({ year }: EssayFootProps) {
  const y = year ?? new Date().getFullYear();
  return (
    <footer className="border-rule text-ink-3 flex flex-wrap items-center gap-2 border-t px-8 py-6 font-mono text-xs">
      <span>© {y} · josoe</span>
      <span>·</span>
      <a href="/rss.xml" className="text-ink-2 hover:text-ink">
        rss
      </a>
      <span>·</span>
      <a
        href="https://github.com/josoesantos"
        className="text-ink-2 hover:text-ink"
      >
        github
      </a>
      <span>·</span>
      <span>built with care</span>
    </footer>
  );
}
