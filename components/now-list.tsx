type NowListItem = {
  label: string;
  value: string;
  note?: string;
};

type NowListProps = {
  items: NowListItem[];
};

export function NowList({ items }: NowListProps) {
  return (
    <dl>
      {items.map((item) => (
        <div
          key={item.label}
          className="border-rule grid grid-cols-[160px_1fr] border-b py-3"
        >
          <dt className="text-ink-3 font-mono text-[0.6875rem] tracking-[0.04em] uppercase">
            {item.label}
          </dt>
          <dd className="font-serif text-base">
            {item.value}
            {item.note && (
              <span className="text-ink-3 ml-1.5 italic">{item.note}</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
