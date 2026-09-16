"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Start" },
  { href: "/skills", label: "Kenntnisse" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Hauptnavigation" className="min-w-0 flex-1">
      <ul className="scrollbar-none flex items-center gap-1 overflow-x-auto sm:gap-2">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className={`inline-flex rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
