type TagProps = {
  label: string;
  active?: boolean;
  solid?: boolean;
};

export function Tag({ label, active = false, solid = false }: TagProps) {
  const base =
    "font-mono text-[0.6875rem] font-medium border rounded-xs px-2 py-0.5 transition-all";
  const variant = solid
    ? "bg-ochre border-ochre text-paper"
    : active
      ? "text-ochre border-ochre"
      : "border-rule text-ink-2";

  return <span className={`${base} ${variant}`}>{label}</span>;
}
