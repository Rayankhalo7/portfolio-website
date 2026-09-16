import Link from "next/link";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="border-b border-border pb-10 pt-2 sm:pb-14 sm:pt-4">
      <h1 className="text-display tracking-tight text-foreground">{site.name}</h1>
      <p className="mt-3 text-lg text-muted-strong sm:text-xl">{site.role}</p>
      <p className="mt-4 text-sm text-muted">
        {site.location}
        <span aria-hidden="true"> · </span>
        {site.availability}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/projekte"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover dark:text-[#0C0F14]"
        >
          Projekte ansehen
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
        >
          Kontakt
        </Link>
      </div>
    </section>
  );
}
