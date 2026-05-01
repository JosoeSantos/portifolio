type RootProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

function Root({ children, ...rest }: RootProps) {
  return (
    <footer
      className="border-rule text-ink-3 flex flex-wrap gap-2 border-t px-8 py-6 font-mono text-xs"
      {...rest}
    >
      {children}
    </footer>
  );
}

type CopyrightProps = {
  name: string;
  year?: number;
};

function Copyright({ name, year }: CopyrightProps) {
  const displayYear = year ?? new Date().getFullYear();
  return (
    <span>
      &copy; {displayYear} {name}
    </span>
  );
}

function Separator() {
  return <span aria-hidden>·</span>;
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

function Link({ children, ...rest }: LinkProps) {
  return (
    <a
      className="text-ink-2 hover:text-ink transition-colors duration-[120ms]"
      {...rest}
    >
      {children}
    </a>
  );
}

type LinkGroupProps = {
  children: React.ReactNode;
};

function LinkGroup({ children }: LinkGroupProps) {
  return <span className="flex gap-2">{children}</span>;
}

export const Footer = { Root, Copyright, Separator, Link, LinkGroup };
