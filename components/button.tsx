"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

export function Button({ variant, children, className, ...rest }: ButtonProps) {
  const base =
    "rounded-sm px-4 py-2 text-sm font-medium font-sans transition-all duration-[120ms] cursor-pointer active:translate-y-px";

  const variants = {
    primary: "bg-ochre text-paper hover:bg-ochre-deep",
    secondary:
      "bg-transparent border border-rule hover:border-rule-strong hover:bg-bg-sunken",
    ghost: "bg-transparent hover:bg-bg-sunken",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
}
