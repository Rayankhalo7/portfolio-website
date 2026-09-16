import Link from "next/link";
import { SiteNav } from "./SiteNav";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-foreground hover:text-accent"
        >
          {site.name}
        </Link>
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <SiteNav />
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
