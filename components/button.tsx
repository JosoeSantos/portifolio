"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "ghost";
  size?: "default" | "compact";
  children: React.ReactNode;
};

export function Button({ variant, size = "default", children, className, ...rest }: ButtonProps) {
  const base =
    "rounded-sm transition-all duration-[120ms] cursor-pointer active:translate-y-px";

  const sizes = {
    default: "px-4 py-2 text-sm font-medium font-sans",
    compact: "px-2.5 py-1 text-xs font-normal font-mono",
  };

  const variants = {
    primary: "bg-ochre text-ochre-fg hover:bg-ochre-deep",
    secondary:
      "bg-transparent border border-rule hover:border-rule-strong hover:bg-bg-sunken",
    ghost: "bg-transparent hover:bg-bg-sunken",
  };

  return (
    <button className={[base, sizes[size], variants[variant], className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </button>
  );
}
