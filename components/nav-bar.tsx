"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./nav";
import { useTheme } from "./theme-provider";

const NAV_LINKS = [
  { href: "/essays", label: "essays" },
  { href: "/projects", label: "projects" },
  { href: "/now", label: "now" },
];

export function NavBar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav.Root>
      <Nav.Brand />
      <Nav.Actions>
        <Nav.Links>
          {NAV_LINKS.map(({ href, label }) => (
            <Nav.Link key={href} href={href} active={pathname === href}>
              {label}
            </Nav.Link>
          ))}
        </Nav.Links>
        <Nav.ThemeToggle theme={theme} onTheme={toggleTheme} />
      </Nav.Actions>
    </Nav.Root>
  );
}
