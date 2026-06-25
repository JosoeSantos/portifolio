type EssayEndProps = {
  sections: number;
  words: number;
};

export function EssayEnd({ sections, words }: EssayEndProps) {
  return (
    <div className="border-rule text-ink-3 mt-14 border-t pt-4 text-center font-mono text-[11px] tracking-[0.04em]">
      ¶ end · {sections} sections · {words.toLocaleString()} words
    </div>
  );
}
